let startQuiz = document.getElementById("start");
let exit = document.getElementById("exit");
let users = JSON.parse(localStorage.users);

// document.getElementById("Name").innerHTML = users.username;
startQuiz.addEventListener("click", function () {
  // if he is logged in.
  for (let i = 0; i < users.length; i++) {
    if (users[i].isLoggedIn) {
      if (users[i].isAttempt) {
        window.location.assign("../Pages/result.html");
        break
      } else {
        window.location.assign("../Pages/quiz_start.html");
        break
      }
    } 
    if(!users[i].isLoggedIn){
        window.location.assign("../pages/registration.html");
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
});

exit.addEventListener("click", function () {
  window.location.assign("../index.html");
});
