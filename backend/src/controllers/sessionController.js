const connection = require("../database/connection");

module.exports = {
  async create(req, res, next) {
    const { id } = req.body;

    const user = await connection("users")
      .where("id", id)
      .select("*")
      .first();
    user.password = null;

    if(!user){
        return res.status(400).json({error:'Not found user with this id'});
    }
    return res.json(user);
  },
};
