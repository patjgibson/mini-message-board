const { Router } = require("express");
const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  let message = JSON.parse(decodeURIComponent(req.query.message));
  res.render('message', { message });
});

module.exports = messageRouter;
