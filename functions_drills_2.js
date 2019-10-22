// eslint-disable-next-line strict
function jediName (firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2).toLowerCase();
}

function beyond (num) {
  let rsp = 'Staying home';
  if (num===Infinity || num===-Infinity) rsp = 'And beyond';
  else if (num > 0) rsp = 'To infinity';
  else if (num < 0) rsp = 'To negative infinity';
  return rsp;
}

function decode (sentence) {
  let code = sentence.split(' ').map(word => word.charCodeAt(0)>100? ' ':word[word.charCodeAt(0)-96]);
  return code.join('');
}


function daysInMonth(month, leapYear=false){
  let days = 31;
  switch(month.toLowerCase()){            
  case 'february':
    days = days - 3 + leapYear;
    break;
  case 'june':
  case 'april':
  case 'september':
  case 'november':
    days= days - 1;
    break;
  default:
    throw new Error('Must provide a valid month');
  }
  return `${month.slice(0,1).toUpperCase()+month.slice(1).toLowerCase()} has ${days} days.`;
}

//Dana solution
function rockPaperScissors (num){
  //rock = 1, paper = 2, scissors, = 3
  if (num>3 ||num<1) throw new Error('Out of range. Rock=1, paper=2, scissors=3');
  const randRPS = Math.floor(Math.random()*3)+1;
  
  let outcome = randRPS-num;
  let preface = `${['rock', 'paper', 'scissors'][num-1]} vs ${['rock', 'paper', 'scissors'][randRPS-1]}  `;
  if (outcome===-1 || outcome===2) return preface + ' you win! \n';
  else if(outcome===0) return preface + ' it\'s a draw! \n';
  else return preface + ' you lose! \n';
}

// Angel solution
function game (userChoice) {
  const computerChoice = Math.floor(Math.random() * 3) + 1; 
  if (userChoice !== 1 && userChoice !== 2 && userChoice !== 3) {
    throw 'number has to be 1,2,3' ;
  } else if (userChoice === computerChoice) {
    return 'You tied!';
  } else if (userChoice === 1 && computerChoice === 3 || userChoice === 3 && computerChoice === 2 ||userChoice === 2 && computerChoice === 1) {
    return `${convertToString(userChoice,true)} beats ${convertToString(computerChoice,false)}. You won!` ;
  } else {
    return `${convertToString(userChoice,true)} beats ${convertToString(computerChoice,false)}. The Computer won!` ; 
  }
}
  
function convertToString (number,capitalize) {
  if (number===1) {
    return (capitalize)? 'Rock' : 'rock' ;
  } else if (number === 2) {
    return (capitalize)? 'Paper' : 'paper';
  } else {
    return (capitalize)? 'Scissors' : 'scissors';
  }
}
  
try {
  game(1) ;
} catch (e) {
  console.error(e) ;
}


console.log(daysInMonth('February',true));
console.log(encode('craft block argon meter bells brown croon droop'));
console.log(jediName('Angel', 'Alicea'));
console.log(beyond(Infinity),beyond(-Infinity),beyond(1000),beyond(-1000),beyond(0));