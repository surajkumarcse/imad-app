//counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function (){
    //create the request object
    //var request= new XMLHttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange=function(){
      if(request.readyState===XMLHttpRequest.DONE) {
         if(request.status === 200){
             var counter= request.responseText;
             var span = document.getElementById('count');
                 span.innerHTML=counter.toString();

         } 
      } 
      //not done yet
    };
    
    request.open('GET', 'http://surajkumar2cse20.imad.hasura-app.io/counter' , true);
    request.send(null);
    //make the request
    
};