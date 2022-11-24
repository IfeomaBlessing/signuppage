const signupBtn = document.getElementById("signup-btn");
const signinLink = document.getElementById("signin-link");
const signinBtn = document.getElementById("signin-btn");
const signupLink = document.getElementById("signup-link");
const signinBox = document.getElementById("signin-box");
const signupBox = document.getElementById("signup-box");


signinLink.addEventListener("click",function()
{
    signupBox.style.display = "none";
    signinBox.style.display = "block";
});


signupLink.addEventListener("click",function()
{
    signupBox.style.display = "block";
    signinBox.style.display = "none";
});