const express = require("express");
const OngController = require("./controllers/ong_controller");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

module.exports = routes;
