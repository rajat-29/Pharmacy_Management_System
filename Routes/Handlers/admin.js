var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

/* Controllers */
var Controllers = require("../../Controllers");

/* Middleware */
var Middleware = require("../../middlewares/middleware");

app.get("/dashboard", function (req, res) {
    res.render("dashboard", {
        role: req.session.role
    });
});

app.get("/addMedicine", Middleware.checkSession, Middleware.checkAdmin,
    function (req, res) {
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

app.get("/buystock", function (req, res) {
    res.render("buystock", {
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

app.get("/manageMedicines", function (req, res) {
    res.render("manageMedicines", {
        title: "Manage Medicines",
        role: req.session.role
    });
});

app.post("/vendorstablebyadmin", Controllers.userdetails.vendorstablebyadmin);

app.post("/searchstock", Controllers.stock.searchstock);

app.get("/stock/:id", Controllers.stock.stockdetails);

app.post("/shopkeeperstablebyadmin", Controllers.userdetails.shopkeeperstablebyadmin);

app.post("/addMedicineType", Controllers.Medicine.addMedicineType);

app.get("/fetchMedicines", Controllers.Medicine.fetchMedicines);

app.post("/addToCartFully", Controllers.stock.addToCartFully);

app.post("/addBill", Controllers.billing.addBill);

app.post("/manageMedicines", Controllers.Medicine.manageMedicines);

app.post("/deleteMed/:pro", Controllers.Medicine.deleteMed);

module.exports = app;