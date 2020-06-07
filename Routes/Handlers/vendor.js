var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

/* Controllers */
var Controllers = require("../../Controllers");

/* Middleware */
var Middleware = require("../../middlewares/middleware");

/* Add Stock Page */
app.get("/addStock", Middleware.checkSession, Middleware.checkVendor, Controllers.Medicine.addStock);

/* Vendor Stock Page */
app.get("/vendorstock", Middleware.checkSession, Middleware.checkVendor, function (req, res) {
    res.render("vendorstock", {
        user_details: req.session
    })
});

app.post("/deactivate/:id", Middleware.checkSession, Middleware.checkVendor, Controllers.stock.deactivate);

/* Add Stock Data */
app.post("/addStock", Middleware.checkSession, Middleware.checkVendor, Controllers.stock.addStock);

/* Add Stock Data */
app.post("/vendorstock", Middleware.checkSession, Middleware.checkVendor, Controllers.stock.vendorstock);

app.post("/buy/:id", Middleware.checkSession, Controllers.stockshopitems.buy);

module.exports = app;