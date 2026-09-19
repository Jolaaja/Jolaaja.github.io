const root=document.documentElement;
const savedTheme=localStorage.getItem('portfolio-theme');
const preferredTheme=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';

function setTheme(theme){
  root.dataset.theme=theme;
  document.querySelectorAll('.theme-icon').forEach(icon=>icon.textContent=theme==='dark'?'☾':'☀');
  document.querySelectorAll('.theme-label').forEach(label=>label.textContent=theme==='dark'?'Dark':'Light');
}

setTheme(savedTheme||preferredTheme);
document.querySelectorAll('.theme-toggle').forEach(button=>button.addEventListener('click',()=>{
  const next=root.dataset.theme==='dark'?'light':'dark';
  setTheme(next);
  localStorage.setItem('portfolio-theme',next);
}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}
}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
