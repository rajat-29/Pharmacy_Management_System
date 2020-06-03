var Billing = require("../Models/billingSchema")
var placedOrder = require("../Models/placedOrder")

module.exports.addBill = (req, res) => {
    Billing.create(req.body, function (error, res) {
        if (error)
            throw error;
        else {}
    })
    res.send("data saved");
}

exports.manageBills = async function (req, res) {
    console.log("d")
    let query = {};
    let params = {};

    if (req.body.search.value) {
        query["$or"] = [{
            "name": {
                '$regex': req.body.search.value,
                '$options': 'i'
            }
        }]
    }
    let sortingType;
    if (req.body.order[0].dir === 'asc')
        sortingType = 1;
    else
        sortingType = -1;

        Billing.find(query, {}, params).then((data) => {
            Billing.countDocuments(query, function (err, filteredCount) {
            if (err)
                console.log(err);
            else {
                Billing.countDocuments(function (err, totalCount) {
                    if (err)
                        console.log(err);
                    else
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

exports.totalMedicines = async (req, res) => {
    //console.log(req.body)
    Billing.find({"_id" : req.body.ides}).then((result) => {
        console.log(result)
        res.send(result)
    })
}

exports.recentOrders = async function (req, res) {
    
    let query = {};
    let params = {};

    if (req.body.search.value) {
        query["$or"] = [{
            "name": {
                '$regex': req.body.search.value,
                '$options': 'i'
            }
        }]
    }
    let sortingType;
    if (req.body.order[0].dir === 'asc')
        sortingType = 1;
    else
        sortingType = -1;

        placedOrder.find(query, {}, params).then((data) => {
            placedOrder.countDocuments(query, function (err, filteredCount) {
            if (err)
                console.log(err);
            else {
                placedOrder.countDocuments(function (err, totalCount) {
                    if (err)
                        console.log(err);
                    else
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

exports.orderedMedicines = async (req, res) => {
    //console.log(req.body)
    placedOrder.find({"_id" : req.body.ides}).then((result) => {
        console.log(result)
        res.send(result)
    })
}