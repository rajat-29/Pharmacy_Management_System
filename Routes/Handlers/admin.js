let express = require("express");
var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

/* Controllers */
var Controllers = require("../../Controllers");

app.use(bodyParser.json());

app.get("/dashboard", function (req, res) {
    res.render("dashboard", {
        role: req.session.role
    });
});

app.get("/changepassword", function (req, res) {
    res.render("changepassword", {
        role: req.session.role
    });
});

app.get("/addMedicine", function (req, res) {
    res.render("addMedicine");
});

app.get("/addMed", function (req, res) {
    res.render("addMed", {
        role: req.session.role
    });
});

app.get("/addStockByVendor", Controllers.Medicine.addStockByVendor);

app.get("/profile", Controllers.userbilling.getProfileDetails);

app.post("/updateprofile", Controllers.billing.updateprofile);

app.post("/changepassword", Controllers.user.changepassword);

app.post("/addMedicineType", Controllers.Medicine.addMedicineType);

app.get("/fetchMedicines", Controllers.Medicine.fetchMedicines);

app.post("/addToCartFully", Controllers.stock.addToCartFully);

module.exports = app;