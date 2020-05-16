function updateDetails() {
    var obj = new Object();
    obj.address = document.getElementById("address").value;
    obj.phoneno = document.getElementById("phoneno").value;
    obj.state = document.getElementById("state").value;
    obj.city = document.getElementById("city").value;
    var xml = new XMLHttpRequest();
    xml.open("POST", "/admin/updateprofile");
    xml.setRequestHeader("Content-Type", "application/json");
    xml.addEventListener('load', function () {
        var res = xml.responseText;;
        if (res === "true") {
            alert("Profile Updated")
        } else {
            alert("Profile Failed to Update")
        }
        window.location.reload()
    })
    xml.send(JSON.stringify(obj));
}