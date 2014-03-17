$(document).ready(function (){
  //Move these to a seperate function
  var clouds = makeCloudElements(Math.floor(Math.random()*11 + 20));
  for(var i = 0; i < clouds.length; i++){
    var posx = Math.floor(Math.random()*1500 + 1);
    var posy = Math.floor(Math.random()*700 + 1);
    $('#sky').append(clouds[i]);
    $(clouds[i]).css({
      'position': 'absolute',
      'left' : posx + 'px',
      'top' : posy + 'px',
      'z-index' : '-1'
      });
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
