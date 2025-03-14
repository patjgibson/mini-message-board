// Imports/variables
require("dotenv").config();
const express = require("express");
const path = require("node:path");
const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;

// Set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

// Routers
const messageRouter = require("./routes/messageRouter");
const newMessageFormRouter = require("./routes/newMessageFormRouter");
const indexRouter = require("./routes/indexRouter");

// Routes
app.use("/message", messageRouter);
app.use("/new", newMessageFormRouter);
app.use("/", indexRouter);

// Server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
