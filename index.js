const bodyParser = require("body-parser");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const router = require("./routes");

const cookieParser = require("cookie-parser");
const i18n = require("./config/i18n");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScript", true);
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./assets"));
//home
app.use(router);
app.get("/set-hindi", (req, res) => {
  res.cookie("lang", "hi", { maxAge: 900000, httpOnly: true });
  return res.redirect("/");
});
//Listen Port
app.listen(7080, () => {
  console.log("Server is running at   http://localhost:7080");
});
