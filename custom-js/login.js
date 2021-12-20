var modal = document.getElementById('loginModal');
// Name and Password from the register-form
var userName = document.getElementById('username');
var passWord = document.getElementById('password');
var loginButton = document.getElementById('loginBTN');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var x = localStorage.getItem('loginState');

if (x == null || x == 0)
{
    localStorage.setItem('loginState', 0);
}
else
{
    loginButton.innerHTML = "Logout";
}


// storing input from register-form
localStorage.setItem('username', userName.value);
localStorage.setItem('password', passWord.value);

function checkLogin() {
if(userName.value == 'username' && passWord.value == 'password') {
    loginButton.innerHTML = "Logout";
    var element = document.getElementById('loginsuccess');
    element.classList.remove('d-none');
    element.classList.remove('d-block');
    localStorage.setItem('loginState', 1);
    }
    else {
        var element = document.getElementById('loginerror');
        element.classList.remove('d-none');
        element.classList.remove('d-block');
        
    }
    
}


