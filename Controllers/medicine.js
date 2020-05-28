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

exports.fetchMedicines = async (req, res) => {
    Medicine.find({}).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
        res.send("false");
    });
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

exports.manageMedicines = async function (req, res) {
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

    Medicine.find(query, {}, params).then((data) => {
        Medicine.countDocuments(query, function (err, filteredCount) {
            if (err)
                console.log(err);
            else {
                Medicine.countDocuments(function (err, totalCount) {
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

exports.deleteMed = async function (req, res) {
    var id = req.params.pro.toString();

    Medicine.deleteOne({ "_id": id }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
        res.send("false");
    });
  }