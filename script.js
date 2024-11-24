function sum(){
    x=Number(document.getElementById("num1").value);
    y=Number(document.getElementById("num2").value);
    sum=x+y; 
    document.getElementById("ans").innerHTML="The answer is "+sum;
}
function product(){
    x=Number(document.getElementById("num1").value);
    y=Number(document.getElementById("num2").value);
    product=x*y; 
    document.getElementById("ans1").innerHTML="The answer is "+product;
}
function quotient(){
    x=Number(document.getElementById("num1").value);
    y=Number(document.getElementById("num2").value);
    quotient=x/y; 
    document.getElementById("ans2").innerHTML="The answer is "+quotient;
}
function difference(){
    x=Number(document.getElementById("num1").value);
    y=Number(document.getElementById("num2").value);
    difference=x-y; 
    document.getElementById("ans3").innerHTML="The answer is "+difference;
}