var user_email = document.getElementById('user_email');
var user_password = document.getElementById('user_password');
var submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener("click", function () {
    if ((user_email.value).trim() == '' || (user_password.value).trim() == '') {
        alert("Field are Empty");
        return;
    }

    var request = new XMLHttpRequest();
    request.open('POST', "/user/checkLogin");
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {
        var data = request.responseText;
        if (data == 'true') {
            window.location = '/user/dashboard';
        } else if (data == 'false') {
            alert("Id or Password is not Correct");
        }
    });
    request.send(JSON.stringify({
        email: (user_email.value).trim(),
        password: (user_password.value).trim()
    }));
})