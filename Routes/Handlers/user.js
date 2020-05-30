var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

/* Controllers */
var Controllers = require("../../Controllers");

/* Middleware */
var Middleware = require("../../middlewares/middleware");

/* Check Login Details */
app.post("/checkLogin", Controllers.user.checkLogin);

/* LogOut User */
app.get("/logutUser", function (req, res) {
    req.session.isLogin = 0;
    req.session.destroy();
    res.render("login");
});

/* Change Password */
app.get("/changepassword", Middleware.checkSession,
    function (req, res) {
        res.render("changepassword", {
            user_details: req.session
        });
    });

/* Change Password */
app.post("/changepassword", Middleware.checkSession, Controllers.user.changepassword);

/* Profile Page */
app.get("/profile", Middleware.checkSession, Controllers.userdetails.getProfileDetails);

/* Update Profile */
app.post("/updateprofile", Middleware.checkSession, Controllers.userdetails.updateprofile);

module.exports = app;