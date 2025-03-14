const { Router } = require("express");
const indexRouter = Router();
const controller = require("../controllers/controller");

indexRouter.get("/", controller.getMessages);
indexRouter.post("/new", controller.addMessage);
indexRouter.get("/delete", controller.deleteAll);

module.exports = indexRouter;
