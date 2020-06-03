mediName = document.getElementById('medicines_name');
quantity = document.getElementById('quantity');

doctorName = document.getElementById('doctorName');
custname = document.getElementById('custname');
contact = document.getElementById('contact');
address = document.getElementById('address');

var medicineArray = [];
var index = 0;
var ans = 0;

function fetchMedicines() {
    var medicineData;
	var request = new XMLHttpRequest();
    request.open('GET','/admin/fetchMedicines');
    request.send();
    request.onload = function() {
        medicineData = JSON.parse(request.responseText);
        var options = '';
        for(i in medicineData) {
            options += '<option value="'+medicineData[i].medicineType.name+'" />';
        }
        document.getElementById('medicines').innerHTML = options;
    }
}

function addMedicineToArray() {

    if(mediName.value == '' || quantity.value == '') {
        alert("Fields are Empty");
        return;
    }

    if(index == 0) {
        createHeader();
        createFooter();
    }

    var obj = new Object();
    obj.mediName = mediName.value;
    obj.quantity = quantity.value;

    medicineArray[index] = obj;

    document.getElementById("setTotalItems").innerHTML = "T.Q = " + medicineArray.length;

    createBody(medicineArray[index],index);
    index++;

    mediName.value = ''; 
    quantity.value = '';
}

function createHeader() {

    var table = document.getElementById('totalItemsTable');
    var thead = document.createElement('thead');
    thead.setAttribute("id","itemHeader")

    var tr1 = document.createElement('tr');
    tr1.setAttribute("class","addStockTableRow");

    var th1 = document.createElement('th');
    th1.setAttribute("class","addStockTableHeading");

    var span1 = document.createElement('span');
    span1.setAttribute("class","addStockHeadingText");
    span1.innerHTML = "SNO";

    th1.appendChild(span1);

    var th2 = document.createElement('th');
    th2.setAttribute("class","addStockTableHeading");

    var span2 = document.createElement('span');
    span2.setAttribute("class","addStockHeadingText");
    span2.innerHTML = "Medicine";

    th2.appendChild(span2);

    var th3 = document.createElement('th');
    th3.setAttribute("class","addStockTableHeading");

    var span3 = document.createElement('span');
    span3.setAttribute("class","addStockHeadingText");
    span3.innerHTML = "Quantity";

    th3.appendChild(span3);

    var th8 = document.createElement('th');
    th8.setAttribute("class","addStockTableHeading");

    var span8 = document.createElement('span');
    span8.setAttribute("class","addStockHeadingText");
    span8.innerHTML = "Action";

    th8.appendChild(span8);
    
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th8);

    thead.appendChild(tr1);
    table.appendChild(thead);
}

function createBody(obj,i) {
    var tbody = document.getElementById('itemBodies');

    var tr1 = document.createElement('tr');
    tr1.setAttribute("class","addStockTableRow");
    tr1.setAttribute("id","bodytr");

    var th1 = document.createElement('td');
    th1.setAttribute("class","addStockTableHeading");

    var span1 = document.createElement('span');
    span1.setAttribute("class","addStockHeadingText");
    span1.innerHTML = i+1;

    th1.appendChild(span1);

    var th2 = document.createElement('td');
    th2.setAttribute("class","addStockTableHeading");

    var span2 = document.createElement('span');
    span2.setAttribute("class","addStockHeadingText");
    span2.innerHTML = obj.mediName;

    th2.appendChild(span2);

    var th3 = document.createElement('td');
    th3.setAttribute("class","addStockTableHeading");

    var span3 = document.createElement('span');
    span3.setAttribute("class","addStockHeadingText");
    span3.innerHTML = obj.quantity;

    th3.appendChild(span3);

    var th8 = document.createElement('td');
    th8.setAttribute("class","addStockTableHeading");

    var button = document.createElement('button');
    button.setAttribute("class","btn btn-danger");
    
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th8);

    tbody.appendChild(tr1);
    
}

function createFooter() {
    var table = document.getElementById('totalItemsTable');
    var tbody = document.createElement('tbody');
    tbody.setAttribute("id","itemFooter")

    var tr1 = document.createElement('tr');
    tr1.setAttribute("class","addStockTableRow");

    var th1 = document.createElement('td');
    th1.setAttribute("class","addStockTableHeading");
    th1.setAttribute("colspan","3");
    th1.setAttribute("style","text-align : center")

    var span1 = document.createElement('span');
    span1.setAttribute("class","addStockHeadingText");
    span1.setAttribute("id","setTotalItems");

    th1.appendChild(span1);

    var th3 = document.createElement('td');
    th3.setAttribute("class","addStockTableHeading");

    var button = document.createElement('button');
    button.setAttribute("class","btn btn-success");
    button.innerHTML = "Payment";
    button.onclick = function() {
        addMedicinesToDatabase();
    }

    th3.appendChild(button);
    
    tr1.appendChild(th1);
    tr1.appendChild(th3);

    tbody.appendChild(tr1);
    table.appendChild(tbody);
}

function deleteAllMedicines() {
    location.reload();
}

fetchMedicines();