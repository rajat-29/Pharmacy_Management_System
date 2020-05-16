var user_email = document.getElementById('user_email');
var user_password = document.getElementById('user_password');
var submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener("click", function() {
    
    if(user_email.value == '' || user_password.value == '')
    {
        alert("Filed is Empty");
        return;
    }

    var request = new XMLHttpRequest();
    request.open('POST',"/login/checkLogin");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify({email : user_email.value,password: user_password.value}));
    request.addEventListener("load",function() {
    	var data = request.responseText;
    	if(data === 'true') {
    		window.location = '/admin/dashboard';
        }
        else if(data === 'false')
        {
            alert("Id or Password is not Correct");
        }
    });
   
})