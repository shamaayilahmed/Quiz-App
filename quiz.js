const quizData=[
  {
    ques:'Which year was javaScript Launched?',
    a:'1996',
    b:'2003',
    c:'1995',
    d:'2001',
    ans:'c'
  },{
    ques:'Who designed javaScript?',
    a:'Brendan Eich',
    b:'Mitchell Baker',
    c:'Douglas Crockford',
    d:'John Resig',
    ans:'a'
  },{
    ques:'What is JavaScript Standard?',
    a:'ECMA',
    b:'DC',
    c:'ECCA',
    d:'Script',
    ans:'a'
  },{
    ques:'Everything in JavaScript is a ______',
    a:'Class',
    b:'Object',
    c:'Function',
    d:'Pointer',
    ans:'b'
  },{
    ques:'Best FrontEnd JS FrameWork?',
    a:'Angular',
    b:'Node',
    c:'Mongo',
    d:'React',
    ans:'d'
  }
];

const answerEl=document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz=document.getElementById('quiz');
const a_txt = document.getElementById('a_txt');
const b_txt = document.getElementById('b_txt');
const c_txt = document.getElementById('c_txt');
const d_txt = document.getElementById('d_txt');
const submitBtn= document.getElementById('submit')
let currentQuiz = 0;
let score=0;

loadQuiz();

function loadQuiz(){
  deselectOptions();
  const currentQuizData=quizData[currentQuiz];
  questionEl.innerText = currentQuizData.ques;
  a_txt.innerText=currentQuizData.a;
  b_txt.innerText=currentQuizData.b;
  c_txt.innerText=currentQuizData.c;
  d_txt.innerText=currentQuizData.d;
}

function getSelected(){
  let answer=undefined;
  answerEl.forEach((a) =>{
    if(a.checked){
      answer=a.id;
    }
  });

  return answer;
}

function deselectOptions(){
  answerEl.forEach(x=>{
    x.checked=false;
  })
}

submitBtn.addEventListener('click',()=>{
  
  const answer = getSelected();

  console.log(answer);

  if(answer){
    if(answer === quizData[currentQuiz].ans){
      score++;
    }
    currentQuiz++;

    if(currentQuiz<quizData.length){
      loadQuiz();
    }else{
      quiz.innerHTML=`<h2>You answered ${score}/${quizData.length} questions.</h2>
      <button onclick='location.reload();'>Retake Quiz</button>`;
    }
  }
  
});