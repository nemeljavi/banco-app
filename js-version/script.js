'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Juan Sánchez',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'María Portazgo',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Estefanía Pueyo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Javier Rodríguez',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// crear una funcion createUsernames que reciba un array de cuentasy de cuentas y devuelva
//y devuelva un nuevo aray con los nombres de usuario de cada cuenta
//en minúsculas y sin espacios
//por ej, Juan Sánchez => js
//const account1 = {
//owner: 'Juan Sánchez',
//movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//interestRate: 1.2, // %
//pin: 1111,
//};
// uso map (nuevo array) o forEach (modificar el array original)

const createUsernames = funcion (accounts) {
  accounts.forEach(function (accounts) {
   account.username = account.owner // Juan Sanchez
   .toLowerCase()// juan sanchez
   .split(' ') // ['j', 's']
   .join('') // js (lo contrario que split)

})
}
createUsernames(accounts)


// tareas_
// mostrar el texto de bienvenida
// cambiar opacidad
// quitar los movimientos que hay en el html
// poner los nuevos movimientos en el html

// hacer lo mismo desde REACT
// SUBIR APP EN REACT 
// 1. SE COMPILA: npm run build
// 2. SUBIR LA CARPETA BUILD A CERTWEB
// si en carpeta local creo una subcarpeta pig-game => https:// xxx.certweb.infenlaces.com/pig-game
// si da error quiza haya que poner un campo en el package.json "homepage" con la ruta https://certweb.com/...

btnLogin.addEventListener('click', function (e) {
  // no llames al servidor!! EVITA EL COMPORTAMIENTO POR DEFECTO DEL SERVIDOR:
  e.preventDefault() 
  console.log('LOGIN')
  console.log(inputLoginUsername.value)
  console.log(inputLoginPin.value)

  const currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  ) // 1. recibir un objeto cuenta {pin:1111, ...}
    // 2. recibir undefined si no existe la cuenta
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN CORRECTO')
    // mostramos Bienvenido Juan

  }else {
    console.log('LOGIN INCORRECTO')
    //mostramos usuario o contraseña incorrectos
  }
  console.log(currentAccount)
})
