/*Circle Background*/
/*function imgSlider(anything) {
	document.querySelector('.nike').src = anything;
}

function changeCircleColor(color) {
	const circle = document.querySelector('.circle');
	circle.style.background = color;
}
 */


/*Toggle Menu*/
function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}  

 var canvas=document.getElementById("myCanvas");
  var ctx=canvas. getContext("2d");
  drawShape(ctx, 0, 0);
function drawShape(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(129 + xoff, 366 + yoff);
  ctx.bezierCurveTo(126 + xoff, 365 + yoff, 217 + xoff, 441 + yoff, 239 + xoff, 455 + yoff);
  ctx.bezierCurveTo(257 + xoff, 457 + yoff, 270 + xoff, 444 + yoff, 245 + xoff, 393 + yoff);
  ctx.bezierCurveTo(241 + xoff, 380 + yoff, 252 + xoff, 422 + yoff, 237 + xoff, 423 + yoff);
  ctx.bezierCurveTo(230 + xoff, 425 + yoff, 165 + xoff, 390 + yoff, 145 + xoff, 374 + yoff);
  ctx.fillStyle = "#660000";
ctx.fill();
ctx.stroke();

}


function spreminjanjeslike1(){
	document.getElementById("svgxx").style.display = 'inline';
	document.getElementById("myCanvas").style.display = 'none';
}

function spreminjanjeslike2(){
	document.getElementById("myCanvas").style.display = 'inline';
	document.getElementById("svgxx").style.display = 'none';
}

function spreminjanjeslike3(){
	document.getElementById("myCanvas").style.display = 'none';
	document.getElementById("svgxx").style.display = 'none';
}