const bodyParser = require("body-parser");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const cookieParser = require("cookie-parser");
const i18n = require("./config/i18n");
const router = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScript", true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(i18n);

app.use(express.static("./assets"));
//home

app.get("/set-hindi", (req, res) => {
  res.cookie("lang", "hi", { maxAge: 900000, httpOnly: true });
  return res.redirect("/");
});

app.use("/", router);

// //AboutUs
// app.get("/aboutUs", (req, res) => {
//   return res.render("aboutUs");
// });

// //Services
// app.get("/services", (req, res) => {
//   return res.render("services");
// });

// //insurance
// app.get("/insurance", (req, res) => {
//   return res.render("insurance");
// });

// //fixedDeposit
// app.get("/fixedDeposit", (req, res) => {
//   return res.render("fixedDeposit");
// });

// //digitalbanking
// app.get("/digitalbanking", (req, res) => {
//   return res.render("digitalbanking");
// });

// //atms_branches
// app.get("/atms_branches", (req, res) => {
//   return res.render("atms_branches");
// });

// //Service Charges
// app.get("/serviceCharges", (req, res) => {
//   return res.render("serviceCharges");
// });

// //Loans
// app.get("/loans", (req, res) => {
//   return res.render("loans");
// });

// //Accounts
// app.get("/accounts", (req, res) => {
//   return res.render("accounts");
// });

// //News
// app.get("/news", (req, res) => {
//   return res.render("news");
// });

// //Digital Brochure
// app.get("/digitalBrochure", (req, res) => {
//   return res.render("digitalBrochure");
// });

// //MediaCoverage
// app.get("/mediaCoverage", (req, res) => {
//   return res.render("mediaCoverage");
// });

// //Awards
// app.get("/awards", (req, res) => {
//   return res.render("awards");
// });

// //Events And Gallery
// app.get("/eventsGallery", (req, res) => {
//   return res.render("eventsGallery");
// });

// //About Us
// app.get("/aboutUs", (req, res) => {
//   return res.render("aboutUs");
// });

// //Download Forms
// app.get("/downloadForms", (req, res) => {
//   return res.render("downloadForms");
// });

// //Tender
// app.get("/tender", (req, res) => {
//   return res.render("tender");
// });

// //KYC
// app.get("/kyc", (req, res) => {
//   return res.render("kyc");
// });

// //Acsti
// app.get("/acsti", (req, res) => {
//   return res.render("acsti");
// });

// //Recruitment
// app.get("/recruitment", (req, res) => {
//   return res.render("recruitment");
// });

// //OtherLinks
// app.get("/otherLinks", (req, res) => {
//   return res.render("otherLinks");
// });

// //Important Notification
// app.get("/importantNotification", (req, res) => {
//   return res.render("importantNotification");
// });

//Listen Port
app.listen(7080, () => {
  console.log("Server is running at http://localhost:7080");
});
