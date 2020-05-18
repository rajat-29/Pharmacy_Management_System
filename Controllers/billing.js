var Billing = require("../Models/billingSchema")

module.exports.updateprofile = (req, res) => {
    Billing.findOneAndUpdate({
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

module.exports.addBill = (req, res) => {
    Billing.create(req.body,function(error,res) {
        if(error)
        throw error;
        else{}
    }) 
    res.send("data saved");
}