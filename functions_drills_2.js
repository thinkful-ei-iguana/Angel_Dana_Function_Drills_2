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

function encode (sentence) {
  let code = sentence.split(' ').map(word => word.charCodeAt(0)>100? ' ':word[word.charCodeAt(0)-96]);
  return code.join(' ');
}

console.log(encode('craft block argon meter bells brown croon droop'));

console.log(jediName('Angel', 'Alicea'));
console.log(beyond(Infinity),beyond(-Infinity),beyond(1000),beyond(-1000),beyond(0));