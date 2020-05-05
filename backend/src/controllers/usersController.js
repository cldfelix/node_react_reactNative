const connection = require("../database/connection");
const crypto = require('crypto');


module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;
    const id = crypto.randomBytes(4).toString("hex");

    try {
      await connection("users").insert({
        id,
        name,
        email,
        password,
        active: true
      });
      return res.json({ id });
    } catch (error) {
      console.log(error.message);
    }
  },

  async index(req, res) {
      const users = await connection('users').select('*');
      return res.json(users);
  }



};

