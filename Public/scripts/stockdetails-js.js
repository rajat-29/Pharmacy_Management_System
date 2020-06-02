function buyfunc(ides, max) {
    max = parseInt(max)
    var no_of_stock = parseInt(document.getElementById("no_of_stock").value);

    if (!(no_of_stock > 0 && no_of_stock <= max)) {
        alert('Number of stock should be greater than 0 and less than ' + max);
        return;
    } else {
        var filename = '/vendor/buy/' + ides
        var request = new XMLHttpRequest();
        request.open('POST', filename);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener("load", function (event) {
            var res = request.responseText;
            console.log(res)
            if (res === "true" || res == "experied") {
                alert("Stock Added to Your Cart")
                if (res == "experied")
                    window.location = '/admin/buystock'
            } else
                alert("Stock Failed Added to Your Cart")
            window.location.reload()
        });
        request.send(JSON.stringify({
            "no_of_stock": no_of_stock
        }));
    }
}