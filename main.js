var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
     ctx.canvas.width = window.innerWidth - 55;
     ctx.canvas.height = window.innerHeight - 150;
var crazoX = ctx.canvas.width/2;
var crazoY = ctx.canvas.height/2;

var epilepsyWarning = document.getElementById("Epilepsy");
epilepsyWarning.innerHTML = "Warning: Flashing Colors in 3 seconds";

setTimeout(function(){
epilepsyWarning.innerHTML = "Enjoy your computer draw randomly forever";


setInterval(function(){
  var hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  var random = Math.floor((Math.random() * 4) + 1);
  ctx.fillStyle = hue;
  ctx.fillRect(crazoX, crazoY, 15, 15);
  if(random === 1 && crazoX <= ctx.canvas.width){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    crazoX+= 5;
    if(crazoX === player1X && crazoY === player1Y || crazoX === player2X && crazoY === player2Y){
      alert("You died!");
    }
    ctx.fillRect(crazoX, crazoY, 15, 15);
  } else if(random === 2 && crazoY <= ctx.canvas.height){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    crazoY+= 5;
    ctx.fillRect(crazoX, crazoY, 15, 15);
        if(crazoX === player1X && crazoY === player1Y || crazoX === player2X && crazoY === player2Y){
      alert("You died!");
    }
  } else if(random === 3 && crazoX >= 0){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
      ctx.fillStyle = hue;
    crazoX-= 5;
    ctx.fillRect(crazoX, crazoY, 15, 15);
        if(crazoX === player1X && crazoY === player1Y || crazoX === player2X && crazoY === player2Y){
      alert("You died!");
    }
  } else if(random === 4 && crazoY >= 0){
    hue = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  ctx.fillStyle = hue;
    crazoY-= 5;
    ctx.fillRect(crazoX, crazoY, 15, 15);
  }
}, 10);
}, 3000);
