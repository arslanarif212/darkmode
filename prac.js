function badal()
{
  var x = document.getElementsByTagName('H1');
  var y = document.getElementsByTagName('H2');
  var i;
  for (i = 0; i < x.length || i < y.length; i++)
  {
    x[i].style.color = "red";
    y[i].style.color = "blue";
  }
}

function aray()
{
  var y = [];
  var i = 0;
  for (i=0 ; i<5; i++)
  {
    var x = prompt ("PLEASE ENTER LOCATION " + i + " WORD ");
    y[i] = x;
  }
  document.querySelector("#roko").innerHTML = y;

}

function qsa()
{
  var gogo = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < gogo.length; i++)
  {
    gogo[i].style.color = "orange";
  }
}

function qscs() {
 var gomo = document.querySelectorAll(".moron");
 var ip;
 for (ip = 0 ; ip < gomo.length; ip++)
 {
    gomo[ip].style.color = "blue";
 }

}
