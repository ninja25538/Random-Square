var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
     ctx.canvas.width = window.innerWidth - 55;
     ctx.canvas.height = window.innerHeight - 150;
var squareX = ctx.canvas.width/2;
var squareY = ctx.canvas.height/2;
var size = 5

var epilepsyWarning = document.getElementById("Epilepsy");
epilepsyWarning.innerHTML = "Warning: Flashing Colors in 3 seconds";

setTimeout(function(){
epilepsyWarning.innerHTML = "Enjoy your computer draw randomly forever";

setInterval(function(){
  var hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  var random = Math.floor((Math.random() * 4) + 1);
  ctx.fillStyle = hue;
  ctx.fillRect(squareX, squareY, size, size);
  if(random === 1 && squareX <= ctx.canvas.width){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    squareX+= size;
    ctx.fillRect(squareX, squareY, size, size);
  } else if(random === 2 && squareY <= ctx.canvas.height){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    squareY+= size;
    ctx.fillRect(squareX, squareY, size, size);
  } else if(random === 3 && squareX >= 0){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
      ctx.fillStyle = hue;
    squareX-= size;
    ctx.fillRect(squareX, squareY, size, size);
  } else if(random === 4 && squareY >= 0){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    squareY-= size;
    ctx.fillRect(squareX, squareY, size, size);
  }
}, 10);
}, 3000);
