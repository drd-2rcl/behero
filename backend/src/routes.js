const express = require("express");
const OngController = require("./controllers/ong_controller");
const IncidentsController = require("./controllers/incident_controller");
const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);

module.exports = routes;
