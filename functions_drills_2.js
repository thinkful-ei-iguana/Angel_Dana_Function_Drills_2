// eslint-disable-next-line strict
function jediName (firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2).toLowerCase();
}

console.log(jediName('Angel', 'Alicea'));