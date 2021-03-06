var table;

$(document).ready(function () {
    table = $('#shopekeepertable').DataTable({
        "processing": true,
        "serverSide": true,
        "dataSrc": "",
        "ajax": {
            "url": "/admin/shopkeeperstable",
            "type": "POST",
        },
        "columns": [{
                "data": "name"
            },
            {
                "data": "email",
            },
            {
                "data": "DOB"
            },
            {
                "data": "userdetails.address"
            },
            {
                "data": "userdetails.phoneno"
            },
            {
                "data": "userdetails.state"
            },
            {
                "data": "userdetails.city"
            },
            {
                "data": null
            },
        ],
        "columnDefs": [{
            "targets": -1,
            "render": function (data, type, row, meta) {

                return '<span id="deleteShopkeeperBtn" onclick=deleteShopkeeper("' + row._id + '")><i class="fa fa-trash"></i></span>'

            }
        }],
    });
});

function deleteShopkeeper(ides) {
    $(document).on("click", "#deleteShopkeeperBtn", function () {

        var filename = '/admin/deleteShopkeeper/' + ides
        var request = new XMLHttpRequest();
        request.open('POST', filename);
        request.addEventListener("load", function (event) {
            var res = request.responseText;
            if (res == "true")
                alert("Shopkeeper Removed")
            else
                alert("Shopkeeper Failed To Removed")
            table.ajax.reload(null, false);
        });
        request.send()
    })
}