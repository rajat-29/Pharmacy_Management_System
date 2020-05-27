 var table;

 $(document).ready(function () {
     table = $('#vendorstable').DataTable({
         "processing": true,
         "serverSide": true,
         "dataSrc": "",
         "ajax": {
             "url": "/admin/vendorstablebyadmin",
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