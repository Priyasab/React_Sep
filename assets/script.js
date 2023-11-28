// let headName = document.querySelector(".form-header");
// let loginBtn = document.querySelector("#login-Btn");
// let regBtn = document.getElementById("reg-Btn");
// let regLink = document.getElementById("register-link");
// let loginLink = document.getElementById("Login-link");

// regLink.addEventListener("click", changeRegForm);

// function changeRegForm() {
//   headName.textContent = "Register form";
//   loginBtn.style.display = "none";
//   regBtn.style.display = "block";
//   loginLink.style.display = "block";
//   regLink.style.display = "none";
// }
// let userInput = document.getElementById("userName");
// let passInput = document.getElementById("passWord");
// function login(event) {
//   event.preventDefault();
//   var user = userInput.value;
//   var pass = passInput.value;
//   console.log("username", user);
//   console.log("password", pass);
// }
// loginBtn.addEventListener("click", login);
// function onChangeUser() {
//   console.log(userInput.value);
// }
// function onInputUser() {
//   console.log(userInput.value);
//   if (userInput.value="priya"&& passInput.value=12345) {
//     userInput.style.backgroundColor = "green";
//     userInput.style.color = "white";
//   } else if (userInput.value.length >= 8) {
//     userInput.style.backgroundColor = "red";
//     userInput.style.color = "white";
//   }
// }

// let userName = "priya";
// let password = 12345;
var num = [2, 3, 4, 5];
function add(data) {
  return data + 2;
}
var result = num.map(add);
console.log(result);

var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getDataAbove5(num2) {
  return num2 > 5;
}
let res = num2.filter(getDataAbove5);
console.log(res);

let num3 = [3, 4, 5, 6];
var sum = num3.reduce((accVal, currVal) => {
  return accVal + currVal;
});
console.log(sum);
