//counter code
var button = document.getElementById('counter');

button.onclick = function (){
    //create the request object
    var request= new XMLHttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE) {
         if (request.status === 200){
               var names = ['name1', 'name2', 'name3', 'name4'];
               
              var list = '';
            for (var i=0; i < names.length; i++){
                list += '<li>' + name[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
   
         } 
      }
      request.open('GET', 'http://surajkumar2cse20.imad.hasura-app.io/counter' , true);
    request.send(null);

      //not done yet
    };
    
        //make the request
    
    //submit name
    
    
};


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
             
                              
               var names = request.responseText;
               names = JSON.parse(names);
              var list = '';
            for (var i=0; i < names.length; i++){
                list += '<li>' + name[i] + '</li>';
 
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
   
         } 
      } 
      //not done yet
    };
    var nameInput = document.getElementById('name');
     var name = nameInput.value;
    request.open('GET', 'http://surajkumar2cse20.imad.hasura-app.io/submit-name?name=' + name , true);
    request.send(null);
    //make the request
    
    //submit name
    
  
  
};
