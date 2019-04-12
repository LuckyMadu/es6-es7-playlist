function addressMaker(state, city) {
  //const newAddress = { newState: state, newCity: city };

  //No need to assign to another variable
  const newAddress = { state, city };

  console.log(newAddress);
}

addressMaker("Western", "Horana");
