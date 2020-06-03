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


function downloadMedi(ides) {
    var obj = new Object();
    obj.ides = ides
  // console.log(obj)
   var request = new XMLHttpRequest();
    request.open('POST','/admin/orderedMedicines');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(obj));
    request.onload = function() {
      //  console.log(JSON.parse(request.responseText));
        var data = JSON.parse(request.responseText);
        downloadit(data[0].items);
    }
}

function downloadit(obj) {
    console.log(obj)
    for(i in obj)
    {
        addToTable(obj[i]);
    }
    exportToExcel('resultTable', 'bill')
}

function addToTable(obj)
{
    var x = document.getElementById('resultTable').insertRow(-1);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = obj.mediName;
    z.innerHTML = obj.quantity;
    i++;
}

function exportToExcel(tableID, filename = ''){
    var downloadurl;
    var dataFileType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'export_excel_data.xls';
    
    // Create download link element
    downloadurl = document.createElement("a");
    
    document.body.appendChild(downloadurl);
    
    if(navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTMLData], {
            type: dataFileType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }
    else {
        // Create a link to the file
        downloadurl.href = 'data:' + dataFileType + ', ' + tableHTMLData;
    
        // Setting the file name
        downloadurl.download = filename;
        
        //triggering the function
        downloadurl.click();
    }
}



