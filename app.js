// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// function totalSalary(obj) {
//   return Object.values(obj).reduce((total, salary) => total + salary, 0);
// }
// console.log(totalSalary(salaries));
// // ==============================================
// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }
// let obj1 = {};
// let obj2 = { name: "John", age: 30 };
// console.log(isEmpty(obj1));
// console.log(isEmpty(obj2));
// // ============================================
// function multiplyNumeric(obj, multiplier) {
//   const newObj = {};

//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key] * multiplier;
//     } else {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log("oldingi multiplyNumeric:", menu);

// menu = multiplyNumeric(menu, 2);

// console.log("keyingi multiplyNumeric:", menu);
// =====================================================
// let arr = [5, 2, 1, 10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);
// ====================================================

function inputNumber() {
  const numbers = [];
  while (true) {
    const input = prompt("Iltimos, raqam kiriting:");
    if (input === null || isNaN(input)) {
      return numbers;
    } else {
      numbers.push(Number(input));
    }
  }
}
const numberArray = inputNumber();
console.log("Kiritilgan raqamlar:", numberArray);
