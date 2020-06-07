/* Models */
var Stock = require("../Models/stockSchema")
var Medicine = require("../Models/medSchema")

exports.addStock = async (req, res) => {
    Stock.create({
        user: req.session._id,
        price: req.body.price,
        no_of_stock: req.body.stock,
        medicineType: req.body._id
    }).then((result) => {
        res.send("true");
    }).catch((err) => {
        console.log(err);
        res.send("false")
    })
}

exports.searchstock = async (req, res) => {
    var query = {};
    if (req.body.search != "" && req.body.search != null)
        query["name"] = {
            "$regex": req.body.search,
            "$options": "i"
        }

    Medicine.find(query).then((result) => {
        var ty = [];
        for (i in result) {
            ty.push(result[i]._id)
        }
        Stock.find({
                "medicineType": {
                    $in: ty
                },
                isActive: true
            }).populate("medicineType").populate("user").skip(req.body.start).limit(req.body.end)
            .then((result_stock) => {
                res.send(result_stock)
            }).catch((err) => {
                console.log(err)
                throw err;
            })
    }).catch((err) => {
        console.log(err)
        throw err;
    })
}

exports.stockdetails = async (req, res) => {
    var stock_id = req.params.id
    Stock.findOne({
        "_id": stock_id
    }).populate("medicineType").populate("user").then((result) => {
        res.render("stockdetails", {
            user_details: req.session,
            stock_details: result
        })
    }).catch((err) => {
        console.log(err)
        throw err;
    })
}

exports.vendorstock = async (req, res) => {
    let query = {};
    let params = {};

    if (req.body.search.value) {
        query["$or"] = [{
            "medicineType.name": {
                '$regex': req.body.search.value,
                '$options': 'i'
            }
        }]
    }

    query["user"] = req.session._id;

    Stock.find(query, {}, params).populate("medicineType").then((data) => {
        Stock.countDocuments(query, function (err, filteredCount) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                Stock.countDocuments(function (err, totalCount) {
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

exports.deactivate = async (req, res) => {
    var id = req.params.id.toString()
    Stock.findByIdAndUpdate({
        _id: id
    }, {
        $set: {
            "isActive": false
        }
    }).then((result) => {
        console.log(result)
        res.send("true")
    }).catch((err) => {
        console.log(err)
        res.send("false")
    })
}