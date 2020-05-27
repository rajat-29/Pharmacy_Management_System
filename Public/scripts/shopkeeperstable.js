var table;

$(document).ready(function () {
    table = $('#shopekeepertable').DataTable({
        "processing": true,
        "serverSide": true,
        "dataSrc": "",
        "ajax": {
            "url": "/admin/shopkeeperstablebyadmin",
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
                "data": "userdetails.country"
            },
            {
                "data": "userdetails.zipcode"
            },
        ],
    });
});