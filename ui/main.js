//counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function (){
    //make a request to counter endpoint
    //var request= new XMLHttpRequest();
    
    //capture the response and store it in variable
    
    
    //render the variable in correct span
    counter=counter+1;
    var span=document.getElementbyId('count');
    span.innerHTML=counter.toString();
};