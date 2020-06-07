var table;

$(document).ready(function () {
    table = $('#medicineTable').DataTable({
        "processing": true,
        "serverSide": true,
        "dataSrc": "",
        "ajax": {
            "url": "/admin/manageBills",
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
                "data": "total"
            },
            {
                "data": null
            },
        ],
        "columnDefs": [{
            "targets": -1,
            "render": function (data, type, row, meta) {

                return '<span id="deleteMed" onclick=downloadMedi("' + row._id + '")><i class="fa fa-download"></i></span>'

            }
        }],
    });
});

function downloadMedi(ides) {
    var obj = new Object();
    obj.ides = ides

    var request = new XMLHttpRequest();
    request.open('POST', '/admin/totalMedicines');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(obj));
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        downloadit(data[0].items);
    }
}

function downloadit(obj) {
    for (i in obj) {
        addToTable(obj[i]);
    }
    exportToExcel('resultTable', 'bill')
}

function addToTable(obj) {
    var x = document.getElementById('resultTable').insertRow(-1);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    var a = x.insertCell(2);
    var k = x.insertCell(3);
    var p = x.insertCell(4);
    var w = x.insertCell(5);
    y.innerHTML = obj.mediName;
    z.innerHTML = obj.quantity;
    a.innerHTML = obj.price;
    k.innerHTML = obj.discount;
    p.innerHTML = obj.tax;
    w.innerHTML = obj.total;
    i++;
}

function exportToExcel(tableID, filename = '') {
    var downloadurl;
    var dataFileType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'export_excel_data.xls';

    // Create download link element
    downloadurl = document.createElement("a");

    document.body.appendChild(downloadurl);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTMLData], {
            type: dataFileType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadurl.href = 'data:' + dataFileType + ', ' + tableHTMLData;

        // Setting the file name
        downloadurl.download = filename;

        //triggering the function
        downloadurl.click();
    }
}