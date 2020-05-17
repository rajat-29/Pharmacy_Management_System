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
    res.render("dashboard");
});

app.get("/changepassword", function (req, res) {
    res.render("changepassword");
});

app.get("/addMedicine", function (req, res) {
    res.render("addMedicine");
});

app.get("/profile", Controllers.userbilling.getProfileDetails);

app.post("/updateprofile", Controllers.billing.updateprofile);

app.post("/changepassword", Controllers.user.changepassword);

app.post("/addMedicineType", Controllers.Medicine.addMedicineType);

app.get("/fetchMedicines", Controllers.Medicine.fetchMedicines);

module.exports = app;