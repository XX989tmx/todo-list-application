"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
var homePage = function (req, res, next) {
    res.status(200).render('home');
};
exports.homePage = homePage;
