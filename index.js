function dices() {
  var p1 = Math.floor(Math.random() * 6 + 1);
  var p2 = Math.floor(Math.random() * 6 + 1);
  var randomDiceImage1 ="dice"+p1+".png";
  var randomDiceImage2 ="dice"+p2+".png";

  document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
  document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

  console.log(p1, p2);
  for (var i = 1; i < 7; i++) {
    
      for (var j = 1; j < 7; j++) {
        if (p2 === j) {
          if (p1 > p2) {
            document.getElementById("hone").innerHTML = "Player 1 won";
          } else if (p2 > p1) {
            document.getElementById("hone").innerHTML = "Player 2 won";
          } else {
            document.getElementById("hone").innerHTML = "It's a draw";
          }
        }
      }
    }
  }

dices();
