/* Models */
var Medicine = require("../Models/medSchema")

exports.addMedicineType = async (req, res) => {
    Medicine.findOne({
        name: req.body.name
    }).then((result) => {
        if (result)
            res.send("false")
        else
            Medicine.create({
                name: req.body.name
            }).then((result) => {
                res.send("true");
            }).catch((err) => {
                console.log(err);
                res.send("false")
            })
    }).catch((err) => {
        console.log(err);
        res.send("false")
    })
}

exports.addStock = async (req, res) => {
    Medicine.find({}).then((result) => {
        res.render("addStock", {
            medicines: result,
            user_details: req.session
        })
    }).catch((err) => {
        console.log(err)
        throw err;
    })
}

exports.manageMedicines = async (req, res) => {
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

    Medicine.find(query, {}, params).then((data) => {
        Medicine.countDocuments(query, function (err, filteredCount) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                Medicine.countDocuments(function (err, totalCount) {
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

exports.deleteMed = async (req, res) => {
    var id = req.params.pro.toString();

    Medicine.deleteOne({
        "_id": id
    }).then((result) => {
        res.send("true");
    }).catch((err) => {
        console.log(err);
        res.send("false");
    });
}