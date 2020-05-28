var Billing = require("../Models/billingSchema")

module.exports.addBill = (req, res) => {
    Billing.create(req.body, function (error, res) {
        if (error)
            throw error;
        else {}
    })
    res.send("data saved");
}