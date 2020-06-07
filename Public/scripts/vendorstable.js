 var table;

 $(document).ready(function () {
     table = $('#vendorstable').DataTable({
         "processing": true,
         "serverSide": true,
         "dataSrc": "",
         "ajax": {
             "url": "/admin/vendorstable",
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

                 return '<span id="deleteVendorBtn" onclick=deleteVendor("' + row._id + '")><i class="fa fa-trash"></i></span>'

             }
         }],
     });
 });

 function deleteVendor(ides) {
     $(document).on("click", "#deleteVendorBtn", function () {

         var filename = '/admin/deleteVendor/' + ides
         var request = new XMLHttpRequest();
         request.open('POST', filename);
         request.addEventListener("load", function (event) {
             var res = request.responseText;
             if (res == "true")
                 alert("Vendor Removed")
             else
                 alert("Vendor Failed To Removed")
             table.ajax.reload(null, false);
         });
         request.send()
     })
 }