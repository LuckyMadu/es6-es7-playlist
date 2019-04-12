function add(newArray = []) {
  let total = 0;

  newArray.forEach(element => {
    total += element;
  });
  console.log(total);
}

add();
