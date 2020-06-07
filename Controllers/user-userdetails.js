/* Models */
var Users = require('../Models/UserSchema');
var Userdetails = require('../Models/userdetails');

exports.getProfileDetails = async (req, res) => {
    await Users.findOne({
        _id: req.session._id
    }).populate("userdetails").then((result) => {
        res.render("profile", {
            normal_details: result,
            userdetails: result.userdetails,
            user_details: req.session
        })
    }).catch((err) => {
        console.log(err)
        res.redirect("/")
    })
}

module.exports.vendorstable = async (req, res) => {
    let query = {};
    let params = {};

    query["role"] = "Vendor"

    if (req.body.search.value) {
        query["$or"] = [{
            "name": {
                '$regex': req.body.search.value,
                '$options': 'i'
            },
            "email": {
                '$regex': req.body.search.value,
                '$options': 'i'
            }
        }]
    }
    Users.find(query, {}, params).populate('userdetails').then((data) => {
        Users.countDocuments(query, function (err, filteredCount) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                Users.countDocuments(function (err, totalCount) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else
                        res.send({
                            "recordsTotal": totalCount,
                            "recordsFiltered": filteredCount,
                            data
                        });
                })
            }
        });
    }).catch((err) => {
        console.log(err)
        throw err;
    })
}

module.exports.shopkeeperstable = async function (req, res) {
    let query = {};
    let params = {};

    query["role"] = "Shopkeeper"

    if (req.body.search.value) {
        query["$or"] = [{
            "name": {
                '$regex': req.body.search.value,
                '$options': 'i'
            },
            "email": {
                '$regex': req.body.search.value,
                '$options': 'i'
            }
        }]
    }

    Users.find(query, {}, params).populate('userdetails').then((data) => {
        Users.countDocuments(query, function (err, filteredCount) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                Users.countDocuments(function (err, totalCount) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else
                        res.send({
                            "recordsTotal": totalCount,
                            "recordsFiltered": filteredCount,
                            data
                        });
                })
            }
        });
    }).catch((err) => {
        console.log(err)
    })
}

module.exports.updateprofile = (req, res) => {
    Userdetails.findOneAndUpdate({
        "user": req.session._id
    }, {
        "$set": req.body
    }).then((
        result
    ) => {
        if (result != null)
            res.send("true")
        else
            res.send("false")
    }).catch((err) => {
        console.log(err)
        res.send("false");
    })
}