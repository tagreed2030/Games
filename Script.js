const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

let correctAnswer;

function newQuestion() {
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  
  let a = getRandomNumber();
  let b = getRandomNumber();
  correctAnswer = a * b;
  
  questionEl.textContent = ${toArabic(a)} × ${toArabic(b)} = ؟;
  
  let answers = [correctAnswer];
  while (answers.length < 4) {
    let random = getRandomNumber() * getRandomNumber();
    if (!answers.includes(random)) answers.push(random);
  }
  
  answers.sort(() => Math.random() - 0.5);
  
  answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = toArabic(ans);
    btn.onclick = () => checkAnswer(ans);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === correctAnswer) {
    feedbackEl.textContent = "أحسنتِ 🌟";
    feedbackEl.style.color = "green";
  } else {
    feedbackEl.textContent = "حاولي مرة أخرى 💡";
    feedbackEl.style.color = "red";
  }
}

function toArabic(num) {
  const arabicNums = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  return num.toString().split('').map(d => arabicNums[d]).join('');
}

nextBtn.onclick = newQuestion;
newQuestion();
