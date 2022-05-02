// write js code here corresponding to favourites.html

// var favourite = JSON.parse(localStorage.getItem('favourites'));
// displayData(favourite)

// function displayData(data){
//     data.forEach(function(ele){
//         var row = document.createElement('tr');

//         var col_1 = document.createElement('td');
//         col_1.innerText = ele.matchNum;

//         var col_2 = document.createElement('td');
//         col_2.innerText = ele.teamA;

//         var col_3 = document.createElement('td');
//         col_3.innerText = ele.teamB;

//         var col_4 = document.createElement('td');
//         col_4.innerText = ele.date;

//         var col_5 = document.createElement("td");
//         col_5.innerText = ele.venue;

//         var col_6 = document.createElement('td');
//         col_6 = innerText = 'remove';
//         col_6.style.color = 'red';
//         col_6.addEventListener('click',function(){
//             removeItem(ele,index);
//         });
//         row.append(col_1, col_2, col_3, col_4, col_5, col_6);
//         document.querySelector('tbody').append(tr);
//     });
// }

// function removeItem(ele,index){
//     favourite.splice(index,1);
//     localStorage.setItem('favourites', JSON.stringify(favourite));
//     window.location.reload();
// }

var favourites = JSON.parse(localStorage.getItem("favouriteMatches"));

  displayMatches(favourites);
  function displayMatches(matches) {
    matches.forEach(function (elem, i) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.innerText = elem.matchNum;
      var td2 = document.createElement("td");
      td2.innerText = elem.teamA;

      var td3 = document.createElement("td");
      td3.innerText = elem.teamB;

      var td4 = document.createElement("td");
      td4.innerText = elem.date;

      var td5 = document.createElement("td");
      td5.innerText = elem.venue;
      var td6 = document.createElement("td");
      td6.innerText = "Remove";
      td6.style.color = "red";
      td6.addEventListener("click", function () {
        removeItem(elem, i);
      });

      tr.append(td1, td2, td3, td4, td5, td6);
      document.querySelector("tbody").append(tr);
    });
  }

  function removeItem(elem, index) {
    favourites.splice(index, 1);
    localStorage.setItem("favouriteMatches", JSON.stringify(favourites));
    window.location.reload();
  }