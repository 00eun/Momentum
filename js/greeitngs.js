const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAEM = "hidden";

function onLoginClick(event) {
  event.preventDefault();
  console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAEM);
  const userName = loginInput.value;
  localStorage.setItem("userName", userName);
  paintGreetings(userName);
}
function paintGreetings(userName) {
  greeting.innerHTML = `Hello ${userName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAEM);
}

const sevadUserName = localStorage.getItem("userName");
if (sevadUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAEM);
  loginForm.addEventListener("submit", onLoginClick);
} else {
  paintGreetings(sevadUserName);
}
