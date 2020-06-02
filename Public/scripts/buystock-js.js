$(document).ready(function () {
    searchdata();
});

var start = 0;
var end = 5;
var disableright = false

function searchdata() {
    var xml = new XMLHttpRequest();
    xml.open("post", "/admin/searchstock");
    xml.setRequestHeader("Content-Type", "application/json");
    xml.addEventListener('load', function () {
        var res = xml.responseText;
        res = JSON.parse(res)
        document.getElementById("maindata").innerHTML = "";
        console.log(res)
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
    var dom = `<div class="m-5 p-5 border border-dark mb-3 rounded" style="padding:5px; margin-bottom:10px; border: 5px solid rgba(0,0,0,0.1);">
        <div>
            <h2>${obj.medicineType.name}</h2>
        </div>
        <div>
            <h3>Seller's Name : ${obj.user.name}</h3>
            <h3>No of Stock Available : ${obj.no_of_stock}</h3>
            <h3>Price of each Medicine : &#x20B9; ${obj.price}</h3>
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