const i18n = require("i18n");
const { resolve } = require("path");
i18n.configure({
  locales: ["en", "hi"],
  directory: __dirname + "/locales",
  defaultLocale: "en",
  cookie: "lang",
});
module.exports = function (req, res, next) {
  i18n.init(req, res);
  const current_locale = i18n.getLocale();
  //   console.log(current_locale);
  return next();
};
