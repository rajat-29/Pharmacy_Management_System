var bcrypt = require("bcrypt")
var Users = require('../Models/UserSchema');

exports.checkLogin = (req, res) => {
    req.session.isLogin = 0;
    console.log(req.body)
    Users.findOne({
        email: req.body.email
    }).select("+password").then((result) => {
        console.log(result)
        if (result != null) {
            bcrypt.compare(req.body.password, result.password, function (
                err,
                isMatch
            ) {
                console.log(isMatch)
                if (err) {
                    res.send("false");
                }
                if (isMatch) {
                    req.session.isLogin = 1;
                    req.session._id = result._id
                    req.session.email = req.body.email;
                    req.session.name = result.name;
                    req.session.role = result.role;
                    res.send('true');
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