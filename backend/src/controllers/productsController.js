const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res, next) {
    const {page = 1} = req.query;

    const [count] = await connection("products").count();
    console.log(count);

    res.header('X-Total-Count', count['count(*)']);

    const products = await connection("products")
    .join('categories', 'categories.id', '=', 'category_id')
    .limit(2)
    .offset((page - 1) *2)    
    .select(['products.*','categories.name as category_name']);
    return res.json(products);
  },

  async getById(req, res) {
    const {id} = req.params;
    const product = await connection("products")
    .where("products.id", id)
    .join('categories', 'categories.id', '=', 'category_id')
    .select(['products.*','categories.name as category_name']);
    console.log(product);

    if(!product) {
        res.status(404).send();
    }

    return res.json(product);

  },

  async create(req, res, next) {
    const userId = req.headers.authorization;
    //const idProduct = crypto.randomBytes(4).toString("hex");
    const { name, price, unit, storage, category_id } = req.body;

    console.log(userId);

    const [id] = await connection("products").insert({
      //id: idProduct,
      name,
      price,
      unit,
      storage,
      category_id,
      active: true,
    });

    return res.json({ id });
  },

  async delete(req, res, next) {
    const { id } = req.params;
    const userId = req.headers.authorization;

    await connection("products").where("id", id).delete();

    return res.status(204).send();
  },

  async update(req, res) {},
};
