const loginButtonIndex = document.getElementById("login");
const signUpButtonIndex = document.getElementById("signup");
const logoutButtonIndex = document.getElementById("logout");
const users = JSON.parse(localStorage.users);
// ----------------------------------------------------------
// take the user to the login page
loginButtonIndex.addEventListener("click", function () {
  // take the user to the login page.
  localStorage.setItem("noAcc", true);
  window.location.assign("/pages/registration.html");
});
// ----------------------------------------------------------
// it logouts the user.
logoutButtonIndex.addEventListener("click", function () {
  for (let i = 0; i < users.length; i++) {
    users[i].isLoggedIn = false;
  }
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
});
// ----------------------------------------------------------
// take the user to the registration page.
signUpButtonIndex.addEventListener("click", function () {
  localStorage.setItem("noAcc", false);
  window.location.assign("../Pages/registration.html");
});
// ----------------------------------------------------------
// take the user to the quiz page.

const quizButton = document.getElementById("start-quiz-btn");
quizButton.addEventListener("click", function () {
  // go to the rules page
  // for (let i = 0; i < JSON.parse(localStorage.attempts).length; i++) {
  //   if (
  //     JSON.parse(localStorage.user)[0] ==
  //     JSON.parse(localStorage.attempts)[i].username
  //   ) {
  //     window.location.assign("pages/result.html");
  //   } else {
  window.location.assign("pages/rules.html");
  //   }
  // }
});

// ----------------------------------------------------------
// checking if there is a user logged in or not to edit the content of the navbar.
for (let i = 0; i < users.length; i++) {
  if (users[i].isLoggedIn === true) {
    loginButtonIndex.style.display = "none";
    signUpButtonIndex.style.display = "none";
    logoutButtonIndex.style.display = "inline-block";
    document.getElementById(
      "welcomeUsername"
    ).innerText = `${users[i].username}`;
    break;
  } else {
    loginButtonIndex.style.display = "inline-block";
    signUpButtonIndex.style.display = "inline-block";
    logoutButtonIndex.style.display = "none";
    document.getElementById("welcomeUsername").display = "none";
  }
}
