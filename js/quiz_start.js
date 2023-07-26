let body1 = document.getElementById("body");
let next = document.getElementsByTagName("button")[2];
let box_of_quastion = document.getElementById("box-of-quastion");
let category = document.getElementById("category");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let radio4 = document.getElementById("radio4");
let namescat = document.getElementsByClassName("namescat");

let value_of_local = [];

box_of_quastion.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("answer")) {
    const answers = box_of_quastion.querySelectorAll(".answer");

    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove("background");
      answers[i].querySelector("input").checked = false;
    }

    clickedElement.classList.add("background");
    clickedElement.querySelector("input").checked = true;
  }
});

// get data from json
let json1 = new XMLHttpRequest();
json1.open("GET", "../json/answers.json");
let countofpage = 1;
let countofquastion = 0;
let arr = 0;
let countofpage_tch = 0;
let correct = 0;
// document.getElementById("Name").innerHTML = JSON.parse(login)[0];

// event in next button
let quizzqount = 0;

next.addEventListener("click", function (event) {
  let input = document.querySelectorAll("input");
  let answer = document.getElementsByClassName("answer");
  let json = JSON.parse(json1.responseText);
  let readyradio = document.getElementById("readyradio");
  if (
    input[0].checked ||
    input[1].checked ||
    input[2].checked ||
    input[3].checked
  ) {
    // to save in json
    for (let i = 0; i < input.length; i++) {
      if (input[i].checked) {
        let value_of_answer =
          input[i].parentElement.children[1].textContent.trim();
        value_of_local.push(value_of_answer);
        localStorage.setItem("Answer", JSON.stringify(value_of_local));
      }
    }
    countofquastion += 1;
    countofpage += 1;
    arr += 1;
    let quize = ["IQ Quiz", "English Quiz", "Technical Quiz"];
    // strar put contant in in page
    if (countofquastion < 10) {
      if (countofpage <= 5) {
        namescat[0].innerHTML = quize[quizzqount];

        next.innerHTML = "Next Question";

        let nextquastion = ` <p id="numofquestion">${countofpage}/5</p><div id="question"> ${json[arr].question} </div>
<div id="answers"><div class="answer1 answer"> <input type="radio" name="answer" id="radio1"><label class="contentofanswer" for="radio1"> ${json[arr].answers.answer_a}
  </label ></div><div class="answer2 answer"><input type="radio" name="answer" id="radio2">
 <label class="contentofanswer" for="radio2">${json[arr].answers.answer_b}</label></div><div class="answer3 answer">
<input type="radio" name="answer" id="radio3"><label class="contentofanswer" for="radio3"> ${json[arr].answers.answer_c}</label>
   </div><div class="answer4 answer"><input type="radio" name="answer" id="radio4">
<label class="contentofanswer" for="radio4">${json[arr].answers.answer_d}</label></div></div> `;

        box_of_quastion.innerHTML = nextquastion;
      } else if (countofquastion === 5) {
        quizzqount += 1;
        let fixed = document.getElementById("fixed");
        let button1 = document.getElementsByClassName("button1")[0];
        fixed.style.display = "flex";
        fixed.style.zIndex = "10";
        namescat[0].innerHTML = quize[quizzqount];

        next.innerHTML = "Next Question";
        // arr -= 1;
        countofpage = 1;
        category.innerHTML = `English Quiz`;

        let nextquastion = `
<p id="numofquestion">
${countofpage}/5
    </p>
    <div id="question">
    ${json[arr].question}

   </div>
<div id="answers">

<div class="answer1 answer">
  <input type="radio" name="answer" id="radio1">
 <label class="contentofanswer" for="radio1">
 ${json[arr].answers.answer_a}
</label >
</div>
<!-- box2 -->

 <div class="answer2 answer">

    <input type="radio" name="answer" id="radio2">
   <label class="contentofanswer" for="radio2">
   ${json[arr].answers.answer_b}
</label>
</div>
<!-- box3  -->
<div class="answer3 answer">
  <input type="radio" name="answer" id="radio3">
 <label class="contentofanswer" for="radio3">
 ${json[arr].answers.answer_c}
</label>
</div>
   <!-- box4  -->

   <div class="answer4 answer">
      <input type="radio" name="answer" id="radio4">
     <label class="contentofanswer" for="radio4">
     ${json[arr].answers.answer_d}
</label>
 </div>
</div>
`;
        box_of_quastion.innerHTML = nextquastion;
        button1.addEventListener("click", function () {
          // fixed.classList.remove("fleex")
          fixed.style.display = "none";
        });
      }
    } else if (countofquastion == 10) {
      // arr-=1
      quizzqount = 2;

      category.innerHTML = `Technical Quiz`;
      let fixed = document.getElementById("fixed2");

      let button2 = document.getElementsByClassName("button2")[0];
      fixed.style.display = "flex";
      fixed.style.zIndex = "10";
      button2.addEventListener("click", function () {
        fixed.style.display = "none";

        fixed.style.zIndex = "-1";
      });
    }

    if (countofquastion >= 10 && countofquastion < 20) {
      namescat[0].innerHTML = quize[quizzqount];

      next.innerHTML = "Next Question";
      countofpage_tch += 1;
      let nextquastion = `
    <p id="numofquestion">
    ${countofpage_tch}/10
        </p>
        <div id="question">
        ${json[arr].question}
   
       </div>
   <div id="answers">
   
   <div class="answer1 answer">
      <input type="radio" name="answer" id="radio1">
     <label class="contentofanswer" for="radio1">
     ${json[arr].answers.answer_a}
</label >
   </div>
   <!-- box2 -->

     <div class="answer2 answer">

        <input type="radio" name="answer" id="radio2">
       <label class="contentofanswer" for="radio2">
       ${json[arr].answers.answer_b}
 </label>
   </div>
   <!-- box3  -->
<div class="answer3 answer">
      <input type="radio" name="answer" id="radio3">
     <label class="contentofanswer" for="radio3">
     ${json[arr].answers.answer_c}
</label>
 </div>
       <!-- box4  -->

       <div class="answer4 answer">
          <input type="radio" name="answer" id="radio4">
         <label class="contentofanswer" for="radio4">
         ${json[arr].answers.answer_d}
</label>
     </div>
 </div>
    `;
      box_of_quastion.innerHTML = nextquastion;
    } else if (countofquastion === 20) {
      next.style.display = "none";
      box_of_quastion.innerHTML =
        "<button id='finishQuiz'>Finish Quiz</button>";
      let finishQuiz = document.getElementById("finishQuiz");
      let lastLocalArry = localStorage.getItem("Answer");
      JSON.parse(lastLocalArry);
      for (let i = 0; i < 20; i++) {
        if (JSON.parse(lastLocalArry)[i] == json[i].correct_answers) {
          correct += 2;
        }
      }
      localStorage.setItem("mark", correct);
      finishQuiz.addEventListener("click", function () {
        if (correct >= 20) {
          window.location.assign("../pages/pass.html");
        } else {
          window.location.assign("../pages/fail.html");
        }
      });
      //   let rania = `${correct}/40`;
      //   box_of_quastion.innerHTML = `Your Result is ${correct}/40 `;
    }
  } else {
    let pop = document.getElementById("pop");
    let exit = document.getElementById("exit");
    pop.style.opacity = "1";
    pop.style.zIndex = "10";
    body1.style.filter = "blur(5px)";
    exit.onclick = (event) => {
      pop.style.opacity = "0";
      body1.style.filter = "blur(0px)";
      pop.style.zIndex = "-1";
    };
  }
});
json1.send();