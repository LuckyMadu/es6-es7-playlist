/* let example1 = [1, 2, 3, 4, 5];
let example2 = [...example1];

console.log(example2);

example2.push(6);

console.log(example2); */

let example1 = {
  firstName: "Lahiru"
};

let example2 = {
  ...example1,
  lastName: "Amarathunga"
};

console.log(example2.firstName);
