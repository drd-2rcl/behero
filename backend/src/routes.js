const express = require("express");
const OngController = require("./controllers/ong_controller");
const IncidentsController = require("./controllers/incident_controller");
const ProfileController = require("./controllers/profile_controller");
const SessionController = require("./controllers/session_controller");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
