(function(){
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }
  var yr = document.getElementById('yr');
  if(yr){ yr.textContent = new Date().getFullYear(); }
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.setAttribute('aria-expanded','false');
    btn.addEventListener('click', function(){
      var item = btn.closest('.faq-item');
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();

/* sticky mobile CTA — injected so no per-page HTML edits are needed */
(function(){
  if(document.querySelector('.mobile-cta')) return;
  var onContact = /contact(\.html)?$/.test(location.pathname);
  var href = onContact ? "sms:+19013590305?&body=Hi%20Nick%2C%20I'd%20like%20to%20claim%20my%20free%2030-minute%20workout." : "contact.html";
  var bar = document.createElement('div');
  bar.className = 'mobile-cta';
  bar.innerHTML = '<a href="'+href+'"><span class="spark" aria-hidden="true"></span>Claim your free workout</a>';
  document.body.appendChild(bar);
})();
