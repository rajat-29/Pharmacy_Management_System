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
        }).populate("medicineType").populate("user").skip(req.body.start).limit(req.body.end).then((result_stock) => {
            res.send(result_stock)
        })
    })
}

exports.stockdetails = async (req, res) => {
    var stock_id = req.params.id
    Stock.findOne({
        "_id": stock_id
    }).populate("medicineType").populate("user").then((result) => {
        console.log(result)
        res.render("stockdetails", {
            user_details: req.session,
            stock_details: result
        })
    })
}