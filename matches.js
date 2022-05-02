// write js code here corresponding to matches.html

var matches = JSON.parse(localStorage.getItem("schedule"));
  var favourites = JSON.parse(localStorage.getItem("favouriteMatches")) || [];
  displayMatches(matches);

 
  document.querySelector("#filterVenue")
  document.addEventListener("change", filterVenue);

  function filterVenue() {
    var selected = document.querySelector("#filterVenue").value;
    console.log(selected);

    var filteredList = matches.filter(function (elem) {
      return elem.venue == selected;
    });

    console.log(filteredList);
    displayMatches(filteredList);
  }

  function displayMatches(matches) {
    document.querySelector("tbody").innerHTML = "";
    matches.forEach(function (elem, i) {
      var tr = document.createElement("tr");
      var td_1 = document.createElement("td");
      td_1.innerText = elem.matchNum;
      var td_2 = document.createElement("td");
      td_2.innerText = elem.teamA;

      var td_3 = document.createElement("td");
      td_3.innerText = elem.teamB;

      var td_4 = document.createElement("td");
      td_4.innerText = elem.date;

      var td_5 = document.createElement("td");
      td_5.innerText = elem.venue;

      var td_6 = document.createElement("td");
      td_6.innerText = "Add as Favourite";
      td_6.addEventListener("click", function () {
        addToFavourite(elem);
        removeItem(elem, i);
      });

      

      tr.append(td_1, td_2, td_3, td_4, td_5, td_6);
      document.querySelector("tbody").append(tr);
    });
  }

  function removeItem(elem, index) {
    matches.splice(index, 1);
    localStorage.setItem("schedule", JSON.stringify(matches));
    window.location.reload();
  }

  function addToFavourite(elem) {
    favourites.push(elem);
    localStorage.setItem("favouriteMatches", JSON.stringify(favourites));
  }