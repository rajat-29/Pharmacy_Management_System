var Stock = require("../Models/stockSchema")

exports.addToCartFully = async (req, res) => {
    Stock.create({
        user: req.session._id,
        price: req.body.price,
        no_of_stock: req.body.stock,
        medicineType: req.body_id
    }).then((result) => {
        console.log(result);
        res.send("true");
    }).catch((err) => {
        console.log(err);
        res.send("false")
    })
}