function addMed() {
    var name = document.getElementById("name").value
    if (name.trim() == "") {
        alert("Add Name of Medicine");
        return;
    }
    var xml = new XMLHttpRequest();
    xml.open("POST", "/admin/addMedicineType");
    xml.setRequestHeader("Content-Type", "application/json");
    xml.addEventListener('load', function () {
        var res = xml.responseText;;
        if (res === "true") {
            alert("Medicine Added")
        } else {
            alert("Medicine Failed to Added")
        }
        window.location.reload()
    })
    xml.send(JSON.stringify({
        name: name
    }));

}