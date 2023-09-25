const router = require("express").Router();

router.use((req, res, next) => {
  req.app.set("layout", "translated/layout");
  next();
});

router.get("/", (req, res) => {
  // console.log(req.cookies);
  return res.render("translated/home");
});
router.get("/aboutUs", (req, res) => {
  return res.render("translated/aboutUs");
});

//Services
router.get("/services", (req, res) => {
  return res.render("translated/services");
});

//insurance
router.get("/insurance", (req, res) => {
  return res.render("translated/insurance");
});

//fixedDeposit
router.get("/fixedDeposit", (req, res) => {
  return res.render("translated/fixedDeposit");
});

//digitalbanking
router.get("/digitalbanking", (req, res) => {
  return res.render("translated/digitalbanking");
});

//atms_branches
router.get("/atms_branches", (req, res) => {
  return res.render("translated/atms_branches");
});

//Service Charges
router.get("/serviceCharges", (req, res) => {
  return res.render("translated/serviceCharges");
});

//Loans
router.get("/loans", (req, res) => {
  return res.render("translated/loans");
});

//Accounts
router.get("/accounts", (req, res) => {
  return res.render("translated/accounts");
});

//News
router.get("/news", (req, res) => {
  return res.render("translated/news");
});

//Digital Brochure
router.get("/digitalBrochure", (req, res) => {
  return res.render("translated/digitalBrochure");
});

//MediaCoverage
router.get("/mediaCoverage", (req, res) => {
  return res.render("translated/mediaCoverage");
});

//Awards
router.get("/awards", (req, res) => {
  return res.render("translated/awards");
});

//Events And Gallery
router.get("/eventsGallery", (req, res) => {
  return res.render("translated/eventsGallery");
});

//About Us
router.get("/aboutUs", (req, res) => {
  return res.render("translated/aboutUs");
});

//Download Forms
router.get("/downloadForms", (req, res) => {
  return res.render("translated/downloadForms");
});

//Tender
router.get("/tender", (req, res) => {
  return res.render("translated/tender");
});

//KYC
router.get("/kyc", (req, res) => {
  return res.render("translated/kyc");
});

//Acsti
router.get("/acsti", (req, res) => {
  return res.render("translated/acsti");
});

//Recruitment
router.get("/recruitment", (req, res) => {
  return res.render("translated/recruitment");
});

//OtherLinks
router.get("/otherLinks", (req, res) => {
  return res.render("translated/otherLinks");
});

//Important Notification
router.get("/importantNotification", (req, res) => {
  return res.render("translated/importantNotification");
});

module.exports = router;
