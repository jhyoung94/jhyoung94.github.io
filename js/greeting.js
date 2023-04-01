document.title = "Momentum";
const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

const loginFrm = document.querySelector("#loginFrm");
const loginFrmInput = document.querySelector("#loginFrm input");
const loginFrmBtn = document.querySelector("#loginFrm [type='submit']");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(e) {
  e.preventDefault();
  loginFrm.classList.add(HIDDEN_CALSSNAME);
  const username = loginFrmInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  patingGreetings(username);
}

function patingGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CALSSNAME);
}

const localUsername = localStorage.getItem(USERNAME_KEY);
if (isEmpty(localUsername)) {
  loginFrm.classList.remove(HIDDEN_CALSSNAME);
  loginFrmInput.autofocus = true;
  loginFrm.addEventListener("submit", onLoginSubmit);
} else {
  patingGreetings(localUsername);
}
