const router = require("express").Router();

router.use((req, res, next) => {
  req.app.set("layout", "layout");
  next();
});

//
router.get("/", (req, res) => {
  // console.log(req.cookies);
  return res.render("home");
});
router.get("/aboutUs", (req, res) => {
  return res.render("aboutUs");
});

//Services
router.get("/services", (req, res) => {
  return res.render("services");
});

//insurance
router.get("/insurance", (req, res) => {
  return res.render("insurance");
});

//fixedDeposit
router.get("/fixedDeposit", (req, res) => {
  return res.render("fixedDeposit");
});

//digitalbanking
router.get("/digitalbanking", (req, res) => {
  return res.render("digitalbanking");
});

//atms_branches
router.get("/atms_branches", (req, res) => {
  return res.render("atms_branches");
});

//Service Charges
router.get("/serviceCharges", (req, res) => {
  return res.render("serviceCharges");
});

//Loans
router.get("/loans", (req, res) => {
  return res.render("loans");
});

//Accounts
router.get("/accounts", (req, res) => {
  return res.render("accounts");
});

//News
router.get("/news", (req, res) => {
  return res.render("news");
});

//Digital Brochure
router.get("/digitalBrochure", (req, res) => {
  return res.render("digitalBrochure");
});

//MediaCoverage
router.get("/mediaCoverage", (req, res) => {
  return res.render("mediaCoverage");
});

//Awards
router.get("/awards", (req, res) => {
  return res.render("awards");
});

//Events And Gallery
router.get("/eventsGallery", (req, res) => {
  return res.render("eventsGallery");
});

//About Us
router.get("/aboutUs", (req, res) => {
  return res.render("aboutUs");
});

//Download Forms
router.get("/downloadForms", (req, res) => {
  return res.render("downloadForms");
});

//Tender
router.get("/tender", (req, res) => {
  return res.render("tender");
});

//KYC
router.get("/kyc", (req, res) => {
  return res.render("kyc");
});

//Acsti
router.get("/acsti", (req, res) => {
  return res.render("acsti");
});

//Recruitment
router.get("/recruitment", (req, res) => {
  return res.render("recruitment");
});

//OtherLinks
router.get("/otherLinks", (req, res) => {
  return res.render("otherLinks");
});

//Important Notification
router.get("/importantNotification", (req, res) => {
  return res.render("importantNotification");
});

module.exports = router;

//
