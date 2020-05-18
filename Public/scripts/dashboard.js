mediName = document.getElementById('medicines_name');
quantity = document.getElementById('quantity');
price = document.getElementById('price');
discount = document.getElementById('discount');
tax = document.getElementById('taxes');

doctorName = document.getElementById('doctorName');
custname = document.getElementById('custname');
contact = document.getElementById('contact');

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
            options += '<option value="'+medicineData[i].name+'" />';
        }
        document.getElementById('medicines').innerHTML = options;
    }
}

function addMedicineToArray() {

    if(mediName.value == '' || quantity.value == '' || price.value == '' || discount.value == '' || tax.value == '') {
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
    obj.price = price.value;
    obj.discount = discount.value;
    obj.tax = tax.value;
    obj.total = calculateSingleMedicineAmount(obj.quantity,obj.price,obj.discount,obj.tax);

    medicineArray[index] = obj;

    ans += obj.total;

    document.getElementById("setTotalItems").innerHTML = "T.Q = " + medicineArray.length;
    document.getElementById("totalPrice").innerHTML = ans;

    createBody(medicineArray[index],index);
    index++;

    mediName.value = ''; 
    quantity.value = '';
    price.value = '';
    discount.value = ''; 
    tax.value = '';
}

function calculateSingleMedicineAmount(quantity,price,discount,tax) {
    
    var newPrice = quantity*price;

    var discountValue = (discount*newPrice)/100;

    newPrice = newPrice - discountValue;

    var taxValue = (tax*newPrice)/100;

    newPrice = newPrice + taxValue;

    return newPrice;
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

    var th4 = document.createElement('th');
    th4.setAttribute("class","addStockTableHeading");

    var span4 = document.createElement('span');
    span4.setAttribute("class","addStockHeadingText");
    span4.innerHTML = "Price";

    th4.appendChild(span4);

    var th5 = document.createElement('th');
    th5.setAttribute("class","addStockTableHeading");

    var span5 = document.createElement('span');
    span5.setAttribute("class","addStockHeadingText");
    span5.innerHTML = "Discount(%)";

    th5.appendChild(span5);

    var th6 = document.createElement('th');
    th6.setAttribute("class","addStockTableHeading");

    var span6 = document.createElement('span');
    span6.setAttribute("class","addStockHeadingText");
    span6.innerHTML = "Tax(%)";

    th6.appendChild(span6);

    var th7 = document.createElement('th');
    th7.setAttribute("class","addStockTableHeading");

    var span7 = document.createElement('span');
    span7.setAttribute("class","addStockHeadingText");
    span7.innerHTML = "Total";

    th7.appendChild(span7);

    var th8 = document.createElement('th');
    th8.setAttribute("class","addStockTableHeading");

    var span8 = document.createElement('span');
    span8.setAttribute("class","addStockHeadingText");
    span8.innerHTML = "Action";

    th8.appendChild(span8);
    
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    tr1.appendChild(th7);
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

    var th4 = document.createElement('td');
    th4.setAttribute("class","addStockTableHeading");

    var span4 = document.createElement('span');
    span4.setAttribute("class","addStockHeadingText");
    span4.innerHTML = obj.price;

    th4.appendChild(span4);

    var th5 = document.createElement('td');
    th5.setAttribute("class","addStockTableHeading");

    var span5 = document.createElement('span');
    span5.setAttribute("class","addStockHeadingText");
    span5.innerHTML = obj.discount;

    th5.appendChild(span5);

    var th6 = document.createElement('td');
    th6.setAttribute("class","addStockTableHeading");

    var span6 = document.createElement('span');
    span6.setAttribute("class","addStockHeadingText");
    span6.innerHTML = obj.tax;

    th6.appendChild(span6);

    var th7 = document.createElement('td');
    th7.setAttribute("class","addStockTableHeading");

    var span7 = document.createElement('span');
    span7.setAttribute("class","addStockHeadingText");
    span7.innerHTML = obj.total;

    th7.appendChild(span7);

    var th8 = document.createElement('td');
    th8.setAttribute("class","addStockTableHeading");

    var button = document.createElement('button');
    button.setAttribute("class","btn btn-danger");
    
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    tr1.appendChild(th7);
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
    th1.setAttribute("colspan","6");
    th1.setAttribute("style","text-align : center")

    var span1 = document.createElement('span');
    span1.setAttribute("class","addStockHeadingText");
    span1.setAttribute("id","setTotalItems");

    th1.appendChild(span1);

    var th2 = document.createElement('td');
    th2.setAttribute("class","addStockTableHeading");

    var span2 = document.createElement('span');
    span2.setAttribute("class","addStockHeadingText");
    span2.setAttribute("id","totalPrice");

    th2.appendChild(span2);

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
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    tbody.appendChild(tr1);
    table.appendChild(tbody);
}

function deleteAllMedicines() {
    location.reload();
}

function addMedicinesToDatabase() {

    if(custname.value == '' || doctorName.value == '' || contact.value == '') {
        alert("Fields are Empty");
        return;
    }
    
    var obj = new Object();
    obj.custname = custname.value;
    obj.docname = doctorName.value;
    obj.contact = contact.value;
    obj.items = medicineArray;
    obj.total = ans;

    var xml = new XMLHttpRequest();
    xml.open("POST", "/admin/addBill");
    xml.setRequestHeader("Content-Type", "application/json");
    xml.addEventListener('load', function () {
        alert("Bill Ready");
        location.reload();
    })
    xml.send(JSON.stringify(obj));
}

fetchMedicines();