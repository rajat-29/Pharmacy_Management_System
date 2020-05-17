var Medicine = require("../Models/medSchema")

exports.addMedicineType = async (req, res) => {
    Medicine.create({
        name: req.body.name
    }).then((result) => {
        res.send("true");
    }).catch((err) => {
        console.log(err);
        res.send("false")
    })
}

exports.addStockByVendor = async (req, res) => {
    Medicine.find({}).then((result) => {
        console.log(result);
        res.render("addStockByVendor", {
            medicines: result,
            role: req.session.role
        })
    })
}