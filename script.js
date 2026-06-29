document.body.classList.add("loading");
window.addEventListener("load",()=>{const l=document.getElementById("loader");setTimeout(()=>{if(l)l.classList.add("hidden");document.body.classList.remove("loading")},1700)});
const menu=document.querySelector(".menu");const nav=document.querySelector(".nav");
if(menu&&nav){menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}
const items=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}})},{threshold:.12});
items.forEach(i=>obs.observe(i));