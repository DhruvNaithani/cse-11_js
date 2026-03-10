const result=document.getElementById("para");
result.innerHTML="hello world";
// document.write(result);
const results=document.getElementsByClassName("p1");
console.log(results);
const x=document.getElementsByTagName("p");
x[0].innerHTML="<b>hello world</b>";
x[1].style.color="blue";
x[2].innerText="helloo class";
const y=document.querySelectorAll("ul li");
for(i in y){
    
}