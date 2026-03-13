function flowers(){

let f=document.createElement("div")

f.className="flower"

f.innerHTML="🌸"

f.style.left=Math.random()*100+"vw"

f.style.animationDuration=(3+Math.random()*3)+"s"

document.body.appendChild(f)

setTimeout(()=>{

f.remove()

},6000)

}

setInterval(flowers,200)
function openCurtain(){

document.querySelector(".curtain-left").classList.add("open-left");

document.querySelector(".curtain-right").classList.add("open-right");

/* rope hide */

document.querySelector(".rope").style.display="none";

}
