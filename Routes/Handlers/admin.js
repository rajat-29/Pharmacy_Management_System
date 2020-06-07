var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

/* Controllers */
var Controllers = require("../../Controllers");

/* Middleware */
var Middleware = require("../../middlewares/middleware");

/* Add Medicine Page */
app.get("/addMedicine", Middleware.checkSession, Middleware.checkAdmin,
    function (req, res) {
        res.render("addMedicine", {
            user_details: req.session
        });
    });

/* Manage Medicine Page */
app.get("/manageMedicines", Middleware.checkSession, Middleware.checkAdmin, function (req, res) {
    res.render("manageMedicines", {
        user_details: req.session
    });
});

/* Manage Medicine Table */
app.post("/manageMedicines", Middleware.checkSession, Middleware.checkAdmin, Controllers.Medicine.manageMedicines);

/* Add Medicine */
app.post("/addMedicineType", Middleware.checkSession, Middleware.checkAdmin, Controllers.Medicine.addMedicineType);

/* Delete Medicine */
app.post("/deleteMed/:pro", Middleware.checkSession, Middleware.checkAdmin, Controllers.Medicine.deleteMed);

/* Manage Vendors */
app.get("/vendorstable", Middleware.checkSession, Middleware.checkAdmin, function (req, res) {
    res.render("vendorstable", {
        user_details: req.session
    });
});

/* Manage Vendors Table Data */
app.post("/vendorstable", Middleware.checkSession, Middleware.checkAdmin, Controllers.userdetails.vendorstable);

app.post("/deleteVendor/:id", Middleware.checkSession, Middleware.checkAdmin, Controllers.user.deleteVendor);

/* Manage Shopkeepers */
app.get("/shopkeeperstable", Middleware.checkSession, Middleware.checkAdmin, function (req, res) {
    res.render("shopkeeperstable", {
        user_details: req.session
    });
});

/* Manage Shopkeepers Table Data */
app.post("/shopkeeperstable", Middleware.checkSession, Middleware.checkAdmin, Controllers.userdetails.shopkeeperstable);

/* Delete Shopkeepers User */
app.post("/deleteShopkeeper/:id", Middleware.checkSession, Middleware.checkAdmin, Controllers.user.deleteShopkeeper);

app.get("/buystock", function (req, res) {
    res.render("buystock", {
        title: "Vendor Tables",
        user_details: req.session
    });
});

app.get("/billingLogs", function (req, res) {
    res.render("billingLogs", {
        title: "Billing Logs",
        user_details: req.session
    });
});

app.get("/recentOrders", function (req, res) {
    res.render("recentOrders", {
        title: "Recent Orders",
        user_details: req.session
    });
});

app.post("/searchstock", Controllers.stock.searchstock);

app.get("/stock/:id", Controllers.stock.stockdetails);

app.get("/fetchMedicines", Controllers.stockshopitems.fetchMedicines);

app.post("/addBill", Controllers.billing.addBill);

app.post("/manageBills", Controllers.billing.manageBills);

app.post("/totalMedicines", Controllers.billing.totalMedicines);

app.post("/recentOrders", Controllers.billing.recentOrders);

app.post("/orderedMedicines", Controllers.billing.orderedMedicines);

module.exports = app;