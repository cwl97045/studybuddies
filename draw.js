var colors = {
    grassGreen : '#49E20E',
    outline : '#000000',
    cloudWhite : '#ffffff'
}


function getRandomNum(min, max){
  return Math.floor(Math.random(max-min + 1)) + min;
}


function makeCloudElements(amount){
  var clouds = [];
  for(var i = 0; i < amount; i++){
    var cloud = $('<canvas />').attr({id: "canvas" + i, width: '300px', height:'100px'});
    clouds.push(cloud);
  }
  return clouds;
}
function drawGround(){
  //automate to allow for variation between refresh
  var canvas = document.getElementById('ground');
  if(canvas){
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = colors.grassGreen;
    ctx.fillStyle = colors.grassGreen;
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
    ctx.lineTo(1500, 400);
    ctx.lineTo(0,400);
    ctx.stroke();
    ctx.fill();
    ctx.strokeStyle = colors.outline;
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
    ctx.stroke();
  }
}

function drawCloud(canvasElm){
  //automate to allow for variation during refresh
  var canvas = canvasElm[0];
  if(canvas){
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = colors.cloudWhite;
    ctx.fillStyle = colors.cloudWhite;
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
    ctx.strokeStyle = colors.outline;
    ctx.moveTo(10,50);
    ctx.bezierCurveTo(12,40,20,30,39,30);
    ctx.bezierCurveTo(39,20,60,5,80,20);
    ctx.bezierCurveTo(90,2,115,2,130,20);
    ctx.bezierCurveTo(140,2,175,2,180,20);
    ctx.bezierCurveTo(190,10,220,10,220,30);
    ctx.bezierCurveTo(220,30,250, 10, 260, 50);
    ctx.lineTo(10,50);
    ctx.stroke();
  }
}
