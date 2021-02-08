function showCity() {
  let cities = document.getElementsByClassName("city");
  let selectedCity = document.getElementById("menu-ville").options[
    document.getElementById("menu-ville").selectedIndex
  ].value;

  for (let i = 0; i < cities.length; i++) {
    cities[i].style.display = "none";
    //console.log("Après display");
    //element.style.display = "";
    if (cities[i].id === selectedCity) {
      cities[i].style.display = "";
      console.log(cities[i].id);
    }
  }
}
