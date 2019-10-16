function game()
{
  var xo = document.getElementById("celebration");
  var x = Math.floor(Math.random() * 5) +1;
  var paath = "images/"
  var ImgSrc1 = paath + "d" + x + ".png";
  var y = Math.floor(Math.random() * 5) +1;
  var ImgSrc2 = paath + "d" + y + ".png";
  document.getElementById('playa1').setAttribute("src",ImgSrc1);
  document.getElementById('playa2').setAttribute("src",ImgSrc2);

  if (x > y)
  {
  var xxx = document.getElementById("celebration");
  xxx.style.color = "red";
  xxx.innerHTML = "Player 1 Wins";
  }
  else if (x < y)
  {
    var xxxx = document.getElementById("celebration");
    xxxx.style.color = "red";
    xxxx.innerHTML = "Player 2 Wins";
  }
  else {
    var xxxx = document.getElementById("celebration");
    xxxx.style.color = "red";
    xxxx.innerHTML = "DRAW";
  }

document.getElementById("res").innerHTML = "HIT START TO PLAY AGAIN";
}
