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

/* Add Medicine Page */
app.get("/addMedicine", Middleware.checkSession, Middleware.checkAdmin,
    function (req, res) {
        res.render("addMedicine", {
            role: req.session.role
        });
    });

/* Manage Medicine Page */
app.get("/manageMedicines", Middleware.checkSession, Middleware.checkAdmin, function (req, res) {
    res.render("manageMedicines", {
        role: req.session.role
    });
});

/* Add Medicine */
app.post("/addMedicineType", Middleware.checkSession, Middleware.checkAdmin, Controllers.Medicine.addMedicineType);

/* Delete Medicine */
app.post("/deleteMed/:pro", Middleware.checkSession, Middleware.checkAdmin, Controllers.Medicine.deleteMed);

/* Manage Vendors */
app.get("/vendorstable", Middleware.checkSession, Middleware.checkAdmin, function (req, res) {
    res.render("vendorstable", {
        role: req.session.role
    });
});

/* Manage Vendors Table Data */
app.post("/vendorstable", Middleware.checkSession, Middleware.checkAdmin, Controllers.userdetails.vendorstable);

/* Manage Shopkeepers */
app.get("/shopkeeperstable", Middleware.checkSession, Middleware.checkAdmin, function (req, res) {
    res.render("shopkeeperstable", {
        role: req.session.role
    });
});

/* Manage Shopkeepers Table Data */
app.post("/shopkeeperstable", Middleware.checkSession, Middleware.checkAdmin, Controllers.userdetails.shopkeeperstable);

app.get("/buystock", function (req, res) {
    res.render("buystock", {
        title: "Vendor Tables",
        role: req.session.role
    });
});

app.post("/searchstock", Controllers.stock.searchstock);

app.get("/stock/:id", Controllers.stock.stockdetails);

app.get("/fetchMedicines", Controllers.Medicine.fetchMedicines);

app.post("/addBill", Controllers.billing.addBill);

app.post("/manageMedicines", Controllers.Medicine.manageMedicines);

module.exports = app;