/* Models */
var Billing = require("../Models/billingSchema")
var PlacedOrder = require("../Models/placedOrder")

module.exports.addBill = async (req, res) => {
    Billing.create(req.body).then((res) => {
        res.send("200");
    }).catch((err) => {
        console.log(err)
        res.send("404");
    })
}

exports.manageBills = async (req, res) => {
    let query = {};
    let params = {};

    if (req.body.search.value) {
        query["$or"] = [{
            "custname": {
                '$regex': req.body.search.value,
                '$options': 'i'
            },
            "docname": {
                '$regex': req.body.search.value,
                '$options': 'i'
            }
        }]
    }

    Billing.find(query, {}, params).then((data) => {
        Billing.countDocuments(query, function (err, filteredCount) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                Billing.countDocuments(function (err, totalCount) {
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

exports.totalMedicines = async (req, res) => {
    Billing.find({
        "_id": req.body.ides
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
        throw err;
    })
}

exports.recentOrders = async (req, res) => {
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

    PlacedOrder.find(query, {}, params).then((data) => {
        PlacedOrder.countDocuments(query, function (err, filteredCount) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                PlacedOrder.countDocuments(function (err, totalCount) {
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

exports.orderedMedicines = async (req, res) => {
    PlacedOrder.find({
        "_id": req.body.ides
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
        throw err;
    })
}