const loginButton = document.getElementById("showlogin");
const registerButton = document.getElementById("showregister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const regBTN = document.getElementById("regBTN");
const logBTN = document.getElementById("logBTN");
loginButton.addEventListener("click", () => {
  loginButton.classList.add("active");
  registerButton.classList.remove("active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

registerButton.addEventListener("click", () => {
  loginButton.classList.remove("active");
  registerButton.classList.add("active");
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

const registrationInputs = document.querySelectorAll(
  "#registerForm .input-field input"
);

// regEx for email
registrationInputs[0].onkeyup = () => {
  let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (registrationInputs[0].value === "") {
    document.getElementById("email-message").innerHTML = "";
  } else {
    if (!regex.test(registrationInputs[0].value)) {
      document.getElementById("email-message").innerHTML =
        "Invalid email given.";
      document.getElementById("email-message").style.color = "red";
    } else {
      document.getElementById("email-message").innerHTML = "Valid email given.";
      document.getElementById("email-message").style.color = "green";
    }
  }
};

// regEx for username
registrationInputs[1].onkeyup = () => {
  let regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
  if (registrationInputs[1].value === "") {
    document.getElementById("username-message").innerHTML = "";
  } else {
    if (!regex.test(registrationInputs[1].value)) {
      document.getElementById("username-message").innerHTML =
        "Invalid username given.";
      document.getElementById("username-message").style.color = "red";
    } else {
      document.getElementById("username-message").innerHTML =
        "Valid username given.";
      document.getElementById("username-message").style.color = "green";
    }
  }
};

// regEx for password
registrationInputs[2].onkeyup = () => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  if (registrationInputs[2].value === "") {
    document.getElementById("pass-message").innerHTML = "";
  } else {
    if (!regex.test(registrationInputs[2].value)) {
      document.getElementById("pass-message").innerHTML =
        "Invalid password given.";
      document.getElementById("pass-message").style.color = "red";
    } else {
      document.getElementById("pass-message").innerHTML =
        "Valid password given.";
      document.getElementById("pass-message").style.color = "green";
    }
  }
};

// regEx for repeated password
registrationInputs[3].onkeyup = () => {
  if (registrationInputs[3].value === "") {
    document.getElementById("c-pass-message").innerHTML = "";
  } else {
    if (registrationInputs[3].value != registrationInputs[2].value) {
      document.getElementById("c-pass-message").innerHTML =
        "it does not match the password given.";
      document.getElementById("c-pass-message").style.color = "red";
    } else {
      document.getElementById("c-pass-message").innerHTML = "";
      document.getElementById("c-pass-message").style.color = "green";
    }
  }
};
let u = localStorage.getItem("noAcc");
if (JSON.parse(u)) {
  loginButton.classList.add("active");
  registerButton.classList.remove("active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
} else {
  loginButton.classList.remove("active");
  registerButton.classList.add("active");
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

function getNewUserID() {
  let lastUserID = localStorage.getItem("lastUserID");
  if (lastUserID === null) {
    lastUserID = 0;
  } else {
    lastUserID = parseInt(lastUserID);
  }
  const newUserID = lastUserID + 1;
  localStorage.setItem("lastUserID", newUserID);
  return newUserID;
}
regBTN.onclick = function () {
  let email1 = registrationInputs[0].value;
  let username1 = registrationInputs[1].value;
  let password1 = registrationInputs[2].value;
  if (
    document.getElementById("email-message").style.color === "green" &&
    document.getElementById("username-message").style.color === "green" &&
    document.getElementById("pass-message").style.color === "green" &&
    document.getElementById("c-pass-message").style.color === "green"
  ) {
    localStorage.setItem("noAcc", true)
    if (JSON.parse(localStorage.noAcc)){
      loginButton.classList.add("active");
      registerButton.classList.remove("active");
      loginForm.style.display = "block";
      registerForm.style.display = "none";
      window.alert("registration success");
    } 
    let users1 = [];
    let user = {
      id: getNewUserID(),
      email: email1,
      username: username1,
      password: password1,
      isLoggedIn: false,
      isAttempt: false,
    };

    if (localStorage.users != null) {
      users1 = JSON.parse(localStorage.users);
    } else {
      users1 = [];
    }
    users1.push(user);

    localStorage.setItem("users", JSON.stringify(users1));
  } else {
    window.alert("registration unsuccess");
  }
};
logBTN.onclick = function () {
  const emailOrUsername = document.getElementById("emailOrUsername");
  const pas = document.getElementById("pas");
  let inputEmailOrUsername = emailOrUsername.value;
  let inputPassword = pas.value;

  if (localStorage.users != null) {
    let users = JSON.parse(localStorage.users);
    let loggedInUser = null;
    // Check if the inputEmailOrUsername matches any user's email or username
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === inputEmailOrUsername ||
        users[i].username === inputEmailOrUsername
      ) {
        loggedInUser = users[i];
        break;
      }
    }
    if (loggedInUser !== null && loggedInUser.password === inputPassword) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username == inputEmailOrUsername) {
          users[i].isLoggedIn = true;
        }
      }
    } else {
      window.alert("Invalid credentials. Please try again.");
    }
    localStorage.setItem("users", JSON.stringify(users));
    window.location.assign("/index.html");
  } else {
    window.alert("No registered users found. Please register first.");
  }
};
