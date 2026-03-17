const result=document.getElementById("para");
result.innerHTML="hello world";
// document.write(result);
const name=document.getElementById("paras");
name.innerHTML="<br>hello class"
const results=document.getElementsByClassName("p1");
console.log(results);
const x=document.getElementsByTagName("p");
x[0].innerHTML="<b>hello world</b>";
x[1].style.color="blue";
x[2].innerText="helloo class";
// const y=document.querySelector("ul li");
const y=document.querySelectorAll("ul li");
for(let x of y){
    x.innerHTML="<u><b> hello world </b></u>";
    x.style.color="blue";
    x.style.backgroundColor="yellow";
}
