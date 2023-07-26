let showResult = document.getElementById("showResult");
let body = document.body;
let quizMark = document.getElementById("quizMark");
let numCorrect = document.getElementById("numCorrect");
let numWrong = document.getElementById("numWrong");

let corrAnswers = new XMLHttpRequest();
corrAnswers.open("GET", "../json/answers.json");
let correctAnswers = localStorage.getItem("mark") / 2;
let totalMark = localStorage.getItem("mark");
let wrongeAnswers = 20 - JSON.parse(localStorage.getItem("mark")) / 2;
let tbody = document.getElementById("tbody");
tbody.innerHTML = `
          <tr>
            <td id="mark"> <span id="quizMark"> ${totalMark}</span> out of 40 </td>
            <td id="answersNum"> <span id="numCorrect"> ${correctAnswers}</span> Correct Answers , 
              <span id="numWrong"> ${wrongeAnswers}</span> Wrong Answers </td>
          </tr>`;
showResult.addEventListener("click", myFunction);
function myFunction() {
  window.location.href = "../pages/result.html";
}
let mark = document.getElementById("mark");
let answersNum = document.getElementById("answersNum");
submittedAns = localStorage.getItem("Answer");
submittedAnsjson = JSON.parse(submittedAns);
showResult.addEventListener("click", function() {
  window.location.assign("../pages/result.html")
})



corrAnswers.send();
