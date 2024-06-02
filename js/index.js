const container = document.querySelector(".show");
const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const computer = document.querySelector(".computer");
const user = document.querySelector(".user i");
const userScore = document.querySelector(".userScore");
const comScore = document.querySelector(".comScore");

userScore.textContent = comScore.textContent = 0;
let scoreUser = 0;
let scorecom = 0;

const icons = [
  "<i class='fa-regular fa-hand-back-fist'></i>",
  "<i class='fa-regular fa-hand'></i>",
  "<i class='fa-regular fa-hand-scissors'></i>",
];

const words = ["R", "P", "S"];

const optional = {
  PP: "Draw",
  SS: "Draw",
  RR: "Draw",
  SP: "User",
  RS: "User",
  PR: "User",
  PS: "COM",
  SR: "COM",
  RP: "COM",
};

let oldRandom;

btn.forEach((bt, index) =>
  bt.addEventListener(`click`, function (e) {
    // add ainmention
    container.classList.add("start");

    // random computer to index of optional
    let random = Math.trunc(Math.random() * 3);

    //  icon and btn and childern
    const current = e.target.closest(".btn");
    const icon = e.target.closest(".btn").querySelector("i");
    const sibiling = e.target.closest(".click").querySelectorAll(".btn");

    // show head color
    container.classList.add("active");

    //  remove all active and add to target
    sibiling.forEach((i) => {
      i.classList.remove("active");
    });
    current.classList.add("active");

    setTimeout(() => {
      // add ainmention
      container.classList.remove("start");

      //  display computer
      if (oldRandom == random) {
        random = Math.trunc(Math.random() * 2);
        computer.innerHTML = icons[random];
        oldRandom = random;
      } else {
        computer.innerHTML = icons[random];
        oldRandom = random;
      }

      // USER icons
      user.className = icon.className;

      // display resut
      selectUser = words[index];
      selectComputer = words[random];
      const display = optional[selectUser + selectComputer];

      // check to recognizes
      if (display == "User") {
        result.textContent = `${display} Won!!`;
        result.style.color = "green";
        scoreUser += 1;
        userScore.textContent = scoreUser;
      } else if (display == "COM") {
        result.textContent = `${display} Won!!`;
        result.style.color = "red";
        scorecom += 1;
        comScore.textContent = scorecom;
      } else if (display == "Draw") {
        result.textContent = `Match ${display} 😂😂`;
        result.style.color = "blue";
      }
    }, 2000);

    // check winer
    if (scoreUser == 9 || scorecom == 9) {
      document.body.classList.add("overLay");
      sibiling.forEach((i) => {
        i.classList.add("d-none");
      });
      container.classList.add("d-none");
      result.textContent = `🚨🚨🚨  ${display} is Winer 🚨🚨🚨`;
      result.style.cssText = `
      padding-top: 20px;
      `;
    }
  })
);
// rest game
document.querySelector(".new_game").addEventListener(`click`, function (e) {
  console.log("hello");
  scoreUser = 0;
  scorecom = 0;
  userScore.textContent = scoreUser;
  comScore.textContent = scorecom;
  document.body.classList.remove("overLay");
  btn.forEach((i) => {
    i.classList.remove("d-none");
    i.classList.remove("active");
  });
  container.classList.remove("d-none");
  container.classList.remove("active");
  result.textContent = "";
});
