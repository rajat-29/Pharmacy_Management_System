var Users = require('../Models/UserSchema');
var Billing = require('../Models/billingSchema');

exports.getProfileDetails = async (req, res) => {
    return await Users.findOne({
        _id: req.session._id
    }).populate("billing_details").then((result) => {
        console.log(result)
        res.render("profile", {
            normal_details: result,
            billing_details: result.billing_details,
            role: req.session.role
        })
    }).catch((err) => {
        console.log(err)
    })
}