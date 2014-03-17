function getRandomNum(min, max){
  return Math.floor(Math.random(max-min + 1)) + min;
}


function makeCloudElements(amount){
  var clouds = [];
  for(var i = 0; i < amount; i++){
    var cloud = $('<canvas />').attr({id: "canvas" + i, width: '300px', height:'100px', class: 'see cloudMoveRight'});
    clouds.push(cloud);
  }
  return clouds;
}
function drawGround(){
  var canvas = document.getElementById('ground');
  var grassGreen = '#49E20E';
  if(canvas){
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = grassGreen;
    ctx.fillStyle = grassGreen;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(100,20);
    ctx.lineTo(200,50);
    ctx.lineTo(300,40);
    ctx.lineTo(400, 40);
    ctx.lineTo(500,30);
    ctx.lineTo(700, 30);
    ctx.lineTo(800, 40);
    ctx.lineTo(900, 30);
    ctx.lineTo(1000,30);
    ctx.lineTo(1200, 20);
    ctx.lineTo(1300, 15);
    ctx.lineTo(1500, 0);
    ctx.lineTo(1500, 200);
    ctx.lineTo(0,200);
    ctx.stroke();
    ctx.fill();
  }
}

function drawCloud(canvasElm){
  var canvas = canvasElm[0];
  var cloudWhite = '#ffffff';
  if(canvas){
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = cloudWhite;
    ctx.fillStyle = cloudWhite;
    ctx.beginPath();
    ctx.moveTo(10,50);
    ctx.bezierCurveTo(12,40,20,30,39,30);
    ctx.bezierCurveTo(39,20,60,5,80,20);
    ctx.bezierCurveTo(90,2,115,2,130,20);
    ctx.bezierCurveTo(140,2,175,2,180,20);
    ctx.bezierCurveTo(190,10,220,10,220,30);
    ctx.bezierCurveTo(220,30,250, 10, 260, 50);
    ctx.lineTo(10,50);
    ctx.fill();
    ctx.stroke();
  }
}