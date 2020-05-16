function createHeader() {

    var table = document.getElementById('totalItemsTable');
    var thead = document.createElement('thead');

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

function createBody() {
    var table = document.getElementById('totalItemsTable');
    var tbody = document.createElement('tbody');

    var tr1 = document.createElement('tr');
    tr1.setAttribute("class","addStockTableRow");

    var th1 = document.createElement('td');
    th1.setAttribute("class","addStockTableHeading");

    var span1 = document.createElement('span');
    span1.setAttribute("class","addStockHeadingText");
    span1.innerHTML = "1";

    th1.appendChild(span1);

    var th2 = document.createElement('td');
    th2.setAttribute("class","addStockTableHeading");

    var span2 = document.createElement('span');
    span2.setAttribute("class","addStockHeadingText");
    span2.innerHTML = "HCQS";

    th2.appendChild(span2);

    var th3 = document.createElement('td');
    th3.setAttribute("class","addStockTableHeading");

    var span3 = document.createElement('span');
    span3.setAttribute("class","addStockHeadingText");
    span3.innerHTML = "1";

    th3.appendChild(span3);

    var th4 = document.createElement('td');
    th4.setAttribute("class","addStockTableHeading");

    var span4 = document.createElement('span');
    span4.setAttribute("class","addStockHeadingText");
    span4.innerHTML = "1";

    th4.appendChild(span4);

    var th5 = document.createElement('td');
    th5.setAttribute("class","addStockTableHeading");

    var span5 = document.createElement('span');
    span5.setAttribute("class","addStockHeadingText");
    span5.innerHTML = "1";

    th5.appendChild(span5);

    var th6 = document.createElement('td');
    th6.setAttribute("class","addStockTableHeading");

    var span6 = document.createElement('span');
    span6.setAttribute("class","addStockHeadingText");
    span6.innerHTML = "1";

    th6.appendChild(span6);

    var th7 = document.createElement('td');
    th7.setAttribute("class","addStockTableHeading");

    var span7 = document.createElement('span');
    span7.setAttribute("class","addStockHeadingText");
    span7.innerHTML = "1";

    th7.appendChild(span7);

    var th8 = document.createElement('td');
    th8.setAttribute("class","addStockTableHeading");

    var button = document.createElement('button');
    button.setAttribute("class","btn btn-danger");

    var i = document.createElement('i');
    i.setAttribute("class","fa fa-trash");

    button.appendChild(i);
    th8.appendChild(button);
    
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    tr1.appendChild(th7);
    tr1.appendChild(th8);

    tbody.appendChild(tr1);
    table.appendChild(tbody);
}

function createFooter() {
    var table = document.getElementById('totalItemsTable');
    var tbody = document.createElement('tbody');

    var tr1 = document.createElement('tr');
    tr1.setAttribute("class","addStockTableRow");

    var th1 = document.createElement('td');
    th1.setAttribute("class","addStockTableHeading");
    th1.setAttribute("colspan","6");
    th1.setAttribute("style","text-align : center")

    var span1 = document.createElement('span');
    span1.setAttribute("class","addStockHeadingText");
    span1.innerHTML = "T.Q = 2";

    th1.appendChild(span1);

    var th2 = document.createElement('td');
    th2.setAttribute("class","addStockTableHeading");

    var span2 = document.createElement('span');
    span2.setAttribute("class","addStockHeadingText");
    span2.innerHTML = "1";

    th2.appendChild(span2);

    var th3 = document.createElement('td');
    th3.setAttribute("class","addStockTableHeading");

    var button = document.createElement('button');
    button.setAttribute("class","btn btn-success");
    button.innerHTML = "Payment";

    th3.appendChild(button);
    
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    tbody.appendChild(tr1);
    table.appendChild(tbody);
}

createHeader();
createBody();
createBody();
createFooter();