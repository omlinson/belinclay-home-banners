(function(){
  // Mobile menu
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mobileNav');

  function closeMenu(){
    nav?.setAttribute('hidden','');
    btn?.setAttribute('aria-expanded','false');
  }
  function toggleMenu(){
    if(!nav || !btn) return;
    const isHidden = nav.hasAttribute('hidden');
    if(isHidden){
      nav.removeAttribute('hidden');
      btn.setAttribute('aria-expanded','true');
    } else {
      closeMenu();
    }
  }
  btn?.addEventListener('click', toggleMenu);

  // Ensure mobile menu is closed when resizing up to desktop
  window.addEventListener('resize', () => {
    if(window.innerWidth > 980) closeMenu();
  });

  // Slider controls (Option B)
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
  dots.forEach(d=> d.addEventListener('click', ()=> set(Number(d.dataset.i))));
  prev?.addEventListener('click', ()=> set(i-1));
  next?.addEventListener('click', ()=> set(i+1));
  set(0);
})();