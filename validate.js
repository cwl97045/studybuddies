function checkUsername(username){
  var valid = false;
  if(username){
    valid=true
  }
  return valid;
}



function checkPassword(password){
    var valid=false;
    if(password){
      if(password.length > 8){
        valid= true;
      }
    }
    
    return valid;
}