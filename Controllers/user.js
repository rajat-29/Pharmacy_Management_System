var bcrypt = require("bcrypt")

/* Models */
var Users = require('../Models/UserSchema');
var placedOrder = require('../Models/placedOrder');

var saltRounds = 10;

exports.checkLogin = (req, res) => {
    req.session.isLogin = 0;
    Users.findOne({
        email: req.body.email
    }).select("+password").then((result) => {
        if (result != null) {
            bcrypt.compare(req.body.password, result.password, function (
                err,
                isMatch
            ) {
                if (err) {
                    res.send("false");
                }
                if (isMatch) {
                    req.session.isLogin = 1;
                    req.session._id = result._id
                    req.session.email = req.body.email;
                    req.session.name = result.name;
                    req.session.role = result.role;
                    res.send("true")
                } else {
                    res.send("false");
                }
            });
        } else {
            res.send("false");
        }
    }).catch(err => {
        console.log(err)
    });
}

exports.changepassword = (req, res) => {

    if (!(req.body.oldpass && req.body.newpass))
        res.send("false")

    Users.findOne({
        "_id": req.session._id
    }).select("+password").then((result) => {
        if (result) {
            bcrypt.compare(req.body.oldpass, result.password, function (err, boolans) {
                if (err) {
                    throw new Error("Error in Comparing Password in Changing Password")
                }
                if (boolans == true) {
                    bcrypt.hash(req.body.newpass, saltRounds, function (err, newpass) {
                        if (err) {
                            throw new Error("Error in Comparing Password in Changing Password")
                        }
                        Users.updateOne({
                            "_id": req.session._id,
                        }, {
                            $set: {
                                "password": newpass
                            }
                        }).then((result) => {
                            res.send("true")
                        }).catch((err) => {
                            console.log(err)
                            res.send("false")
                        });
                    });
                } else {
                    res.send("wrong")
                }
            });
        } else {
            throw new Error("false")
        }
    }).catch((err) => {
        console.log(err)
        res.send("false");
    });
}

module.exports.placedOrder = (req, res) => {
    placedOrder.create(req.body).then((result) => {
        res.send("data saved");
    }).catch((err) => {
        console.log(err)
        throw err;
    });
}

module.exports.deleteVendor = (req, res) => {
    var id = req.params.id.toString();
    Users.deleteOne({
        _id: id
    }).then((result) => {
        res.send("true")
    }).catch((err) => {
        console.log(err);
        throw err
    })
}

module.exports.deleteShopkeeper = (req, res) => {
    var id = req.params.id.toString();
    Users.deleteOne({
        _id: id
    }).then((result) => {
        res.send("true")
    }).catch((err) => {
        console.log(err);
        throw err
    })
}