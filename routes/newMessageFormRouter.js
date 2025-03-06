const { Router } = require("express");
const newMessageFormRouter = Router();

newMessageFormRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = newMessageFormRouter;
