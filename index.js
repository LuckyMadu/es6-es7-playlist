/* let incomes = [10, 20, 30];
let total = 0;

for (const income of incomes) {
  total += income;
}

console.log(total); 

let fullName = "Lahiru";

for (const char of fullName) {
  console.log(char);
}
*/

//not update the values
let incomes = [10, 20, 30];

for (let income of incomes) {
  income += 50;
}

console.log(incomes);
