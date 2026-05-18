buttoni2.onmouseover=function(){
    alert('bye');
}

var buttoni3=document.getElementById('btn3');

buttoni2.onmouseleave=function(){
    alert('good byee');
}


var button=document.getElementById('btn1');

var txt1=document.getElementById('txt1');


button.onclick=function(){
    txt1.style.color="red";
    txt1.style.backgroundColor="lightgrey";
    txt1.style.textAlign="center";
    txt1.style.padding="20px";
    txt1.style.fontSize="100px";
}