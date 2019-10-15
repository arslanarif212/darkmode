function darkmode()
{
  document.getElementById('nava').className = "navbar navbar-expand-lg bg-dark navo";
  document.getElementById('laga').setAttribute("src","lgwhite.png")
  document.getElementById('menubutt').setAttribute("src","menubuttonwhite.png")
  document.getElementById("contact").className = "btn btn-warning btn-lg";
  document.getElementById('first').className = "bgimage-dark";
  document.getElementsByTagName("H1")[0].style.color ="white";
  document.getElementsByTagName("p")[0].style.color ="white";
  document.getElementById('second').className = "bgimage2-dark";
  document.getElementById('third').className = "bgimage3-dark";
  x = document.getElementsByClassName('col-4');
  y = document.getElementsByClassName('col-8');
  x[0].style.color = "white";
  y[0].style.color = "white";
  x[1].style.color = "white";
  y[1].style.color = "white";
}
