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
                 "data": "userdetails.zipcode"
             },
         ],
     });
 });