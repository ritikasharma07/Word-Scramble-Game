const btn = document.querySelector(".btn");
const guess = document.querySelector("input");
const msg = document.querySelector(".msg");
let play = false;
let words = [
  "ethics",
  "demonize",
  "tolerate",
  "critical",
  "exotic",
  "obsession",
  "literate",
  "literature",
  "mobile",
  "dragging",
  "planning",
  "scenery",
  "solitude",
  "sarcasm",
  "ambitious",
  "calender",
  "tired",
];
let newword = "";
let randomWord = "";

const createWords = () => {
  let ranNo = Math.floor(
    Math.random() * words.length
  ); /*math.flor is used to get value in int from float */

  let tempWord = words[ranNo];
  /*console.log(tempWord.split(''));  /* to get random words from array */
  return tempWord;
};
const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    /*console.log(temp); /*to reverse a random word */
    let j = Math.floor(Math.random() * (i + 1));
    /* console.log(i);  taking another array j and randoming its digits then assigning j value to i to make i random
        console.log(j); */
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWord = createWords();
    randomWord = scrambleWords(newWord.split("")).join("");
    msg.innerHTML = `Word is : ${randomWord}`;
  } else {
    let tempWord = guess.value;
    if (tempWord == newWord) {
      play = false;
      msg.innerHTML = "Congratulations..Right answer";
      btn.innerHTML = "Start again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else
      msg.innerHTML = `Sorry.. wrong answer :
        ${randomWord}`;
  }
});
