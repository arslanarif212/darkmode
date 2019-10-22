var numberdigbuttons = document.querySelectorAll(".dig").length;
var arr = [];
for (var i=0 ; i < numberdigbuttons ; i++)
{
 document.querySelectorAll(".dig")[i].addEventListener("click",function(){
   var x = this.innerHTML;
   var ax = parseInt(x);
   document.getElementById("disp1").value  +=ax;
 }
)}

for (var q=0 ; q < numberdigbuttons ; q++)
{
 document.querySelectorAll(".dig1")[q].addEventListener("click",function(){
   var y = this.innerHTML;
   var ay = parseInt(y);
   document.getElementById("disp2").value  +=ay;
 }
)}



function math (op)
{
var xx = 0;
var yy = 0;
var  x = document.getElementById("disp1").value;
var xx = parseInt(x);
var  y = document.getElementById("disp2").value;
var yy = parseInt(y);
var result;
  switch (op) {
             case 'add':
                 result = xx + yy;
             break;
             case 'minus':
                 result = xx - yy;
             break;
             case 'mul':
                 result = xx * yy;
             break;
             case 'divi':
                 result = xx / yy;
             break;
         }
         document.getElementById("resu").innerHTML = "the result is " + result;

}
