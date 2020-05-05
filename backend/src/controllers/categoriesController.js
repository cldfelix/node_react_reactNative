const connection = require("../database/connection");
const crypto = require('crypto');


module.exports = {
  async create(req, res) {
    const { name } = req.body;
    //const id = crypto.randomBytes(4).toString("hex");
    const active = true;

    try {
    const [id] =  await connection("categories").insert({
       // id,
        name,
        active,
      });
      return res.json({ id });
    } catch (error) {
      console.log(error.message);
    }
  },

  async index(req, res) {
      const categories = await connection('categories').select('*');

      return res.json(categories);
  }



};

