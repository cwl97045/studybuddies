$(document).ready(function (){
  var clouds = makeCloudElements(Math.floor(Math.random()*11));
  for(var i = 0; i < clouds.length; i++){
    $('#sky').append(clouds[i]);
    drawCloud(clouds[i]);
  }
  drawGround();
  $('input[type="submit"]').click(function(){
    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();
    if(checkUsername(username) && checkPassword(password)){
      $('div.box').slideUp();
    } else {
      $('#error').text(errorMessage.error);
    }
  });
  
  window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
            var canvas = document.getElementById('ground');
            canvas.width = window.innerWidth;
            drawGround();
            drawCloud();
    }
    resizeCanvas();

});