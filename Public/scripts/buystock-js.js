$(document).ready(function () {
    searchdata();
});

var start = 0;
var end = 5;

function searchdata() {
    var xml = new XMLHttpRequest();
    xml.open("post", "/admin/searchstock");
    xml.setRequestHeader("Content-Type", "application/json");
    xml.addEventListener('load', function () {
        var res = xml.responseText;
        res = JSON.parse(res)
        document.getElementById("maindata").innerHTML = "";
        if (res.length != 5 || res == null)
            disableright = true;
        for (i in res) {
            addToDOM(res[i])
        }
    })
    xml.send(JSON.stringify({
        "search": document.getElementById("searchinput").value,
        "start": start,
        "end": end
    }));
}

function addToDOM(obj) {
    console.log(obj)
    var dom = `<div class="border border-dark mb-3 rounded" style="border: 5px solid rgba(0,0,0,0.1);">
        <div>
            <h2>${obj.medicineType.name}</h2>
        </div>
        <div>
            <h3>Seller : ${obj.user.name}</h3>
            <h3>Stock : ${obj.no_of_stock}</h3>
            <h3>Price: ${obj.price}</h3>
            <a class="btn btn-success" href="/admin/stock/${obj._id}">Buy</a>
        </div>
    </div>`
    document.getElementById("maindata").innerHTML = document.getElementById("maindata").innerHTML + (dom);
}

function increaseleft() {
    if (start - 5 < 0)
        return;
    start -= 5;
    searchdata();
}

function increaseright() {
    if (disableright)
        return;
    start += 5;
    searchdata();
}