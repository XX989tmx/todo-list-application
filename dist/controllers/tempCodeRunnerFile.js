"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showSignupPage = void 0;
var showSignupPage = function (req, res, next) {
    res.status(200).render("signup_page");
};
exports.showSignupPage = showSignupPage;
