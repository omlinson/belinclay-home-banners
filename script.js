(function(){
  const slides = Array.from(document.querySelectorAll('.slider .slide'));
  const dots = Array.from(document.querySelectorAll('.slider .dot'));
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  if(!slides.length) return;

  let i = 0;

  function set(n){
    i = (n + slides.length) % slides.length;
    slides.forEach((s, idx)=>s.classList.toggle('is-active', idx===i));
    dots.forEach((d, idx)=>d.classList.toggle('is-active', idx===i));
  }

  dots.forEach(d=>{
    d.addEventListener('click', ()=> set(Number(d.dataset.i)));
  });
  prev.addEventListener('click', ()=> set(i-1));
  next.addEventListener('click', ()=> set(i+1));

  // no auto-rotation on purpose: this is a mock to show structure, not a production slider.
  set(0);
})();