//counter code


//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make a request to the   server and send the name
  //capture it as a name and render it as a list
  var request= new XMLHttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE) {
         if (request.status === 200){
             
                              
               console.log('user logged in');
               alert('logged in successfully');
   
         } else if (request.status === 403) {
             alert('username/password is not correct');
             
         }
         else if  (request.status === 500) {
             alert('something went wrong');
         }
         
         
      } 
      //not done yet
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
      console.log(username);
      console.log (password);
    request.open('POST', 'http://surajkumar2cse20.imad.hasura-app.io/login' , true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password})) ;
    //make the request
    
    //submit name
    
  
  
};
