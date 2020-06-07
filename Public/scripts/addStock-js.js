function addStock() {
    var ids = document.getElementById("medicines").value;
    var stock = document.getElementById("stock").value;
    var price = document.getElementById("price").value;

    if (ids == "" || stock == "" || price == "") {
        alert("Fields are Empty");
        return;
    }

    var obj = new Object();
    obj._id = ids;
    obj.stock = stock;
    obj.price = price;

    var xml = new XMLHttpRequest();
    xml.open("post", "/vendor/addStock");
    xml.setRequestHeader("Content-Type", "application/json");
    xml.addEventListener('load', function () {
        var res = xml.responseText;;
        if (res == "true") {
            alert("Stock Added")
        } else {
            alert("Stock Failed to Add")
        }
        window.location.reload();
    })
    xml.send(JSON.stringify(obj));
}