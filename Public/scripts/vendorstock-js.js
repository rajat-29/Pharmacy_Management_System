var table;

$(document).ready(function () {
    table = $('#vendorstock').DataTable({
        "processing": true,
        "serverSide": true,
        "dataSrc": "",
        "ajax": {
            "url": "/vendor/vendorstock",
            "type": "POST",
        },
        "columns": [{
                "data": "medicineType.name"
            },
            {
                "data": "no_of_stock"
            },
            {
                "data": "price"
            },
            {
                "data": "isActive"
            },
            {
                "data": null
            },
        ],
        "columnDefs": [{
            "targets": -1,
            "render": function (data, type, row, meta) {

                return '<button id="deactivateBtn" onclick=deactivate("' + row._id + '")><i class="fa fa-toggle-on"></i></button>'

            }
        }],
    });
});

function deactivate(ides) {
    $(document).on("click", "#deactivateBtn", function () {

        var filename = '/vendor/deactivate/' + ides
        var request = new XMLHttpRequest();
        request.open('POST', filename);
        request.addEventListener("load", function (event) {
            var res = request.responseText;
            if (res == "true")
                alert("Stock Deactivated")
            else
                alert("Stock Failed To deactivate")
            table.ajax.reload(null, false);
        });
        request.send()
    })
}