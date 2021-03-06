function cloudCheck(){
  $('canvas.cloudMoveRight').each(function(){
    var position = this.layerX;
    if(position > 1500){
      this.css({
        'left' : '-200px'});
    }
  });
  
  $('canvas.cloudMoveLeft').each(function(){
    
  });
}

$(document).ready(function (){

  var clouds = makeCloudElements(Math.floor(Math.random()*11 + 10));

  //Move these to a seperate function


  for(var i = 0; i < clouds.length; i++){
    var posx = Math.floor(Math.random()*1500 + 1);
    var posy = Math.floor(Math.random()*700 + 1);
    var animation = 'cloudMoveRight';
    if(posx % 2 !== 0){
      animation = 'cloudMoveLeft';
    }
    $('#sky').append(clouds[i]);
    $(clouds[i]).css({
      'position': 'absolute',
      'left' : posx + 'px',
      'top' : posy + 'px',
      'z-index' : '-1'
      });
    $(clouds[i]).addClass(animation);
    drawCloud(clouds[i]);
  }
  
  setInterval(function(){cloudCheck()}, 5000);
  
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
