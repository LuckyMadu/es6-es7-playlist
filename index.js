function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: "SriLanka"
  };

  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

addressMaker({ city: "Horana", state: "Western" });
