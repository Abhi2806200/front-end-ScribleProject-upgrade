var signup = document.getElementsByClassName("Signup")[0];


var signup_btn = document.getElementsByClassName("topButtons")[0];

var signup_cl_btn=document.getElementsByClassName("signup_cl")[0];

signup_btn.onclick = function() {
    signup.style.display = "flex";

}

signup_cl_btn.onclick=function () {
    signup.style.display="none";
}



var signin = document.getElementsByClassName("Signin")[0];

var signin_btn = document.getElementsByClassName("topButtons")[1];

var signin_cl_btn=document.getElementsByClassName("signin_cl")[0];

signin_btn.onclick = function() {
    signin.style.display = "flex";

}

signin_cl_btn.onclick=function () {
    signin.style.display="none";
}


var signup_in_signin=document.getElementsByClassName("signup_in_signin")[0];

signup_in_signin.onclick=function()
{
    signin.style.display="none";
    signup.style.display="flex";
}





window.onclick = function(event) {
    if (event.target === signup) {
        signup.style.display = "none";
    }
    if (event.target === signin) {
        signin.style.display = "none";
    }
}


/* Abhishek Agnihotri */