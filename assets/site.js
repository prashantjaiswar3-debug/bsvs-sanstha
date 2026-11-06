document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('show')));
