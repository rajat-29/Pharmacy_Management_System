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
    res.render("addMedicine", {
        role: req.session.role
    });
});

app.get("/addStockByVendor", Controllers.Medicine.addStockByVendor);

app.get("/vendorstable", function (req, res) {
    res.render("vendorstable", {
        title: "Vendor Tables",
        role: req.session.role
    });
});

app.get("/shopkeeperstable", function (req, res) {
    res.render("shopkeeperstable", {
        title: "Vendor Tables",
        role: req.session.role
    });
});

app.post("/vendorstablebyadmin", Controllers.userdetails.vendorstablebyadmin);

app.post("/shopkeeperstablebyadmin", Controllers.userdetails.shopkeeperstablebyadmin);

app.get("/profile", Controllers.userdetails.getProfileDetails);

app.post("/updateprofile", Controllers.billing.updateprofile);

app.post("/changepassword", Controllers.user.changepassword);

app.post("/addMedicineType", Controllers.Medicine.addMedicineType);

app.get("/fetchMedicines", Controllers.Medicine.fetchMedicines);

app.post("/addToCartFully", Controllers.stock.addToCartFully);

app.post("/addBill", Controllers.billing.addBill);

module.exports = app;