var Stock = require("../Models/stockSchema")
var Medicine = require("../Models/medSchema")
var Shopitems = require("../Models/shopitems")

exports.buy = async (req, res) => {
    var stock_id = req.params.id
    Stock.findOne({
        _id: stock_id
    }).then((result) => {
        if ((result.no_of_stock - req.body.no_of_stock) < 0)
            res.send("false");
        Shopitems.create({
            user: req.session._id,
            medicineType: result.medicineType,
            no_of_stock: req.body.no_of_stock,
            price: result.price,
            boughtfrom: result.user
        }).then((result1) => {
            result1.no_of_stock = result1.no_of_stock * (-1);
            Stock.findOneAndUpdate({
                _id: result._id
            }, {
                $inc: {
                    no_of_stock: result1.no_of_stock
                }
            }).then((result2) => {
                if (result2.price === 0)
                    Stock.findOneAndUpdate({
                        _id: result._id
                    }, {
                        $set: {
                            "isActive": false
                        }
                    })
                res.send("true");
            }).catch((err) => {
                console.log(err)
                res.send("false")
            })
        }).catch((err) => {
            console.log(err)
            res.send("false")
        })
    }).catch((err) => {
        console.log(err)
        res.send("false")
    })
}

exports.fetchMedicines = async (req, res) => {
    Shopitems.find({}).populate("medicineType").then((result) => {
        console.log(result)
        res.send(result);
    }).catch((err) => {
        console.log(err);
        res.send("false");
    });
}