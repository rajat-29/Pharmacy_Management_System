var user = require("./user")
var userdetails = require("./user-userdetails")
var stockshopitems = require("./stock-shopitems")
var shopitems = require("./shopitems")
var billing = require("./billing")
var Medicine = require("./medicine")
var stock = require("./stock")

module.exports = {
    user,
    billing,
    userdetails,
    Medicine,
    stock,
    stockshopitems,
    shopitems
}