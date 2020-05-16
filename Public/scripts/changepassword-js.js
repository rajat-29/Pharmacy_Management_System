function changepassword() {
    var oldpass = document.getElementById("oldpassword").value;
    var newpass = document.getElementById("newpassword").value;
    if (oldpass == "" || newpass == "") {
        alert("Enter All field");
    } else {
        var xml = new XMLHttpRequest();
        xml.open("POST", "/admin/changepassword");
        xml.setRequestHeader("Content-Type", "application/json");
        xml.addEventListener('load', function () {
            var res = xml.responseText;;
            if (res === "true") {
                alert("Password Updated")
            } else if (res == "wrong") {
                alert("Old password Wrong")
                return
            } else {
                alert("Password Failed to Update")
            }
            window.location.reload()
        })
        xml.send(JSON.stringify({
            "oldpass": oldpass,
            "newpass": newpass
        }));
    }

}