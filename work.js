let u_name = document.querySelector("#u_name");
let u_name_inp = document.getElementById("u_name_inp");

let email = document.querySelector("#email");
let email_inp = document.getElementById("email_inp");

let address = document.querySelector("#address");
let address_inp = document.getElementById("address_inp");

let ent_btn = document.querySelector("#ent_btn");

let srt_btn = document.querySelector("#srt_btn");

let ans = document.getElementById("crt_ans");
let sub_btn = document.querySelector("#sub_btn");
let next_btn = document.querySelector("#next_btn");

let tq_note = document.querySelector("#tq_note");

let ques = document.querySelector("#ques");

// Start BUtton and Submit Button and Next Button are disabled by defult
srt_btn.disabled = true;
sub_btn.disabled = true;
next_btn.disabled = true;

// When Enter Button is Clicked 'onEnter' function works
const onEnter = () => {
  if (
    u_name_inp.value === "" ||
    email_inp.value === "" ||
    address_inp.value === ""
  ) {
    alert("Please Enter Your Detail");
  } else {
    ent_btn.innerText = "Entered";
    ent_btn.disabled = true;
    srt_btn.disabled = false;
    u_name.innerText = u_name.innerText + u_name_inp.value;
    email.innerText = email.innerText + email_inp.value;
    address.innerText = address.innerText + address_inp.value;
  }
};

// Question 1
let a = [
  "Question1",
  "Total Letters in English Alphabet :",
  "A. 26",
  "B. 16",
  "C. 27",
  "D. 17",
];
let ques1 =
  a[0] +
  "\n" +
  "\n" +
  a[1] +
  "\n" +
  a[2] +
  "\n" +
  a[3] +
  "\n" +
  a[4] +
  "\n" +
  a[5];
// Question 2
let b = [
  "Question2",
  "Total Planets in Our Solar System",
  "A. 9",
  "B. 7",
  "C. 8",
  "D. 10",
];
let ques2 =
  b[0] +
  "\n" +
  "\n" +
  b[1] +
  "\n" +
  b[2] +
  "\n" +
  b[3] +
  "\n" +
  b[4] +
  "\n" +
  b[5];

// Question 3
let c = [
  "Question3",
  "Total Number of Days in a Week",
  "A. 9",
  "B. 7",
  "C. 8",
  "D. 10",
];
let ques3 =
  c[0] +
  "\n" +
  "\n" +
  c[1] +
  "\n" +
  c[2] +
  "\n" +
  c[3] +
  "\n" +
  c[4] +
  "\n" +
  c[5];

// When Start Button is Clicked 'onStart' function works
const onStart = () => {
  srt_btn.disabled = true;
  sub_btn.disabled = false;
  ques.innerText = ques1;
};

// When Submit Button is Clicked 'onSubmit' function works
const onSubmit = () => {
  if (ques.innerText == ques1 && ans.value == a[2]) {
    tq_note.innerText = tq_note.innerText + "Your answer is Correct";
    sub_btn.disabled = true;
    next_btn.disabled = false;
  } else if (ques.innerText == ques2 && ans.value == b[4]) {
    tq_note.innerText = tq_note.innerText + "Your answer is Correct";
    sub_btn.disabled = true;
    next_btn.disabled = false;
  } else if (ques.innerText == ques3 && ans.value == c[3]) {
    tq_note.innerText =
      tq_note.innerText +
      "Your answer is Correct" +
      "\n" +
      u_name_inp.value +
      " from " +
      address_inp.value +
      " Won The Game.";
    sub_btn.disabled = true;
    next_btn.disabled = true;
  } else {
    tq_note.innerText =
      tq_note.innerText + "Your answer is Wrong" + "\n" + "Try Ones Again";
    sub_btn.disabled = true;
    next_btn.disabled = true;
  }
};

// When Next Button is Clicked 'onNext' function works
const onNext = () => {
  if (ques.innerText == ques1 && ans.value == a[2]) {
    ques.innerText = ques2;
    ans.value = "";
    tq_note.innerText = "REWARD :";
    sub_btn.disabled = false;
    next_btn.disabled = true;
  } else if (ques.innerText == ques2 && ans.value == b[4]) {
    ques.innerText = ques3;
    ans.value = "";
    tq_note.innerText = "REWARD :";
    sub_btn.disabled = false;
    next_btn.disabled = true;
  } else {
    next_btn.disabled = true;
  }
};
ent_btn.addEventListener("click", onEnter);
srt_btn.addEventListener("click", onStart);
sub_btn.addEventListener("click", onSubmit);
next_btn.addEventListener("click", onNext);
