var table;

$(document).ready(function () {
    table = $('#medicineTable').DataTable({
        "processing": true,
        "serverSide": true,
        "dataSrc": "",
        "ajax": {
            "url": "/admin/recentOrders",
            "type": "POST",
        },
        "columns": [{
                "data": "custname"
            },
            {
                "data": "docname"
            },
            {
                "data": "contact"
            },
            {
                "data": "address"
            },
            {
                "data": null
            },
        ],
        "columnDefs": [{
            "targets": -1,
            "render": function (data, type, row, meta) {
                //console.log(data.items)
                return '<span id="deleteMed" onclick=downloadMedi("' + row._id + '")><i class="fa fa-download"></i></span>'

            }
        }],
    });
});





