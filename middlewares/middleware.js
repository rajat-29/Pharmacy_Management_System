function checkSession(req, res, next) {
    if (req.session.isLogin)
        next();
    else
        res.redirect("/");
}

function checkAdmin(req, res, next) {
    if (req.session.role == "Admin")
        next();
    else
        res.redirect("/");
}

function checkVendor(req, res, next) {
    if (req.session.role == "Vendor")
        next();
    else
        res.redirect("/");
}

function checkShopkeeper(req, res, next) {
    if (req.session.role == "Shopkeeper")
        next();
    else
        res.redirect("/");
}

module.exports.checkAdmin = checkAdmin;
module.exports.checkSession = checkSession;
module.exports.checkVendor = checkVendor;
module.exports.checkShopkeeper = checkShopkeeper;