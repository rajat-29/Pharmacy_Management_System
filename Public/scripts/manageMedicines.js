var table;

$(document).ready(function () {
    table = $('#medicineTable').DataTable({
        "processing": true,
        "serverSide": true,
        "dataSrc": "",
        "ajax": {
            "url": "/admin/manageMedicines",
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
          
              return '<span class="actionbut activatebut" id="deleteMed" onclick=deleteMedicine("'+row._id+'")><i class="fa fa-trash"></i></span>'

            }
        }],
    });
});

function deleteMedicine(ides)
{
    $(document).on("click", "#deleteMed", function() {

    var filename = '/admin/deleteMed/' + ides
    var request = new XMLHttpRequest();
    request.open('POST',filename);
    request.send()
    request.addEventListener("load",function(event){
        alert("Medi Deleted")
        table.ajax.reload(null, false);
            
    });  
 
    })
}