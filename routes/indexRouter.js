const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.post("/new", (req, res) => {

  if (req.body.submit === "submit") {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
  }
  res.redirect("/")
});

indexRouter.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
});

module.exports = indexRouter;
