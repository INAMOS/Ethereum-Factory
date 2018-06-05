
var request=new XMLHttpRequest();

request.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');

request.onload=function(){
    //var data=request.responseText;
    console.log(request.responseText);
}


request.send();