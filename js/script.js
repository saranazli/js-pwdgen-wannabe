//1

const userName = prompt ('write your name');

//2

const userLastName = prompt ('write your last name');

//3

const userFavouriteColor = prompt (' write your favourite color');

//4

const securNumber = 24;

//5

console.log (userName, userLastName, userFavouriteColor, securNumber);

//6
const newPassword = userName + userLastName + userFavouriteColor + securNumber;

console.log (newPassword);

//7

document.getElementById('pw_gen').innerHTML= `
<p>
  ciao ${userName}, come password puoi utilizzare: 
  ${newPassword}
</p>
`;