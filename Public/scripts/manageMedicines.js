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
                "data": null
            },
        ],
        "columnDefs": [{
            "targets": -1,

            "render": function (data, type, row, meta) {
          
              return '<center><span class="actionbut emailbut" id="emailbut" data-toggle="modal" data-target="#myModal"><i class="fas fa-envelope"></i></span><span class="actionbut editbut" id="editbut" data-toggle="modal" data-target="#updateModal"><i class="fas fa-edit"></i></span><span class="actionbut activatebut" id="activatebut" onclick=reactivateUser("'+row._id+'","'+row.name+'","'+row.flag+'")><i class="fa fa-check-circle"></i></span></center>'

            }
        }],
    });
});