
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter})}));
const form=document.querySelector('#enquiry-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const name=d.get('name'),phone=d.get('phone'),course=d.get('course'),message=d.get('message')||'';const text=`Hello Clado Solutions,%0A%0AI would like to enquire about your training.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACourse: ${encodeURIComponent(course)}%0AMessage: ${encodeURIComponent(message)}`;window.open(`https://wa.me/918891409152?text=${text}`,'_blank','noopener');})}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
