var Users = require('../Models/UserSchema');
var Userdetails = require('../Models/userdetails');

exports.getProfileDetails = async (req, res) => {
    return await Users.findOne({
        _id: req.session._id
    }).populate("userdetails").then((result) => {
        console.log(result)
        res.render("profile", {
            normal_details: result,
            userdetails: result.userdetails,
            role: req.session.role
        })
    }).catch((err) => {
        console.log(err)
    })
}