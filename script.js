//! Declarations:
const input = document.querySelector('#input');
const displayName = document.querySelector('.display-name');
const quizSection = document.querySelector('.quiz');
const nextBtn = document.querySelector('.next');
const progress = document.querySelector('.progress');
const score = document.querySelector('.score');
const leaderBoard = document.querySelector('.leader-board');
let progressCounter = 0;
let scoreCounter = 0;

//! Main Array of Objects
const questionsArray = [
  { q1: '2*2=', choices: [2, 4, 6, 7], answerIndex: 2, done: false },
  { q2: '2*3=', choices: [2, 4, 6, 7], answerIndex: 3, done: false },
  { q3: '2*4=', choices: [8, 4, 6, 7], answerIndex: 1, done: false },
  { q4: '3*2=', choices: [2, 4, 6, 7], answerIndex: 3, done: false },
  { q5: '2*4=', choices: [2, 4, 6, 8], answerIndex: 3, done: false },
  { q6: '4*1=', choices: [2, 4, 6, 7], answerIndex: 2, done: false },
  { q7: '2*1=', choices: [2, 4, 6, 7], answerIndex: 1, done: false },
  { q8: '5*1=', choices: [2, 4, 5, 7], answerIndex: 3, done: false },
  { q9: '7*2=', choices: [2, 14, 6, 7], answerIndex: 2, done: false },
  { q10: '4*6=', choices: [2, 4, 6, 24], answerIndex: 3, done: false },
];

//! array of Users to be saved:
const usersScores = [{ name: 'empty', score: 0 }];
