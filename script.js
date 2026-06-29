document.body.classList.add('loading');
window.addEventListener('load',()=>{const l=document.getElementById('loader');setTimeout(()=>{if(l)l.classList.add('hidden');document.body.classList.remove('loading')},1200)});
const menu=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const items=document.querySelectorAll('.fade');
const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}})},{threshold:.12});
items.forEach(item=>obs.observe(item));