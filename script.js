let calc = [];
let actions = [];
const inputEl = document.getElementById("input-el");
const calcEl = document.getElementById("calc-el");
const messageEl = document.getElementById("message-el");

$("#plus").click(function () {
  if (inputEl.value == "") {
    return;
  }
  actions.push("+");

  saveInput();
  print();
});

$("#minus").click(function () {
  if (inputEl.value == "") {
    return;
  }
  actions.push("-");

  saveInput();
  print();
});

function print() {
  calcEl.textContent = "";
  messageEl.textContent = "";
  if (isNaN(inputEl.value)) {
    calc = [];
    actions = [];
  }
  if (calc.length === 1) {
    calcEl.textContent += calc[0] + actions[0];
  } else {
    $.each(calc, function (i) {
      calcEl.textContent += actions[i] + calc[i];
    });
    /* for (let i = 0; i < calc.length; i++) {
        calcEl.textContent += actions[i] + calc[i];
      } */
  }
  if (calc.length > 1) {
    calcEl.textContent = calcEl.textContent.substring(1);
  }
}

function saveInput() {
  calc.push(inputEl.value);
  console.log(calc);
}

$("#equal").click(function () {
  console.log(calcEl.textContent);
  messageEl.textContent = eval(calcEl.textContent);

  calc.splice(0, calc.length);
  actions.splice(0, actions.length);
  calcEl.textContent = "";
});
