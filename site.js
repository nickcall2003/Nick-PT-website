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

/* daily motivation — rotates quote of the day (ready to power a future daily send) */
(function(){
  var quotes=[
    {t:`You lack focus, not potential.<br>You lack consistency, not ability.<br>You lack strategy, not resources.<br>You lack discipline, not opportunities.`, by:"Unknown"},
    {t:`Guys like you always think other people get lucky. I don't get lucky &mdash; I make my own luck.`, by:"Harvey Specter, Suits"},
    {t:`People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.`, by:"Thich Nhat Hanh"},
    {t:`You might have more talent than me. You might be smarter. You might have it on me in nine categories &mdash; but you're not going to out-work me. It's such a simple, basic concept.`, by:"Will Smith"}
  ];
  var el=document.getElementById('motd');
  if(el){
    var now=new Date(), start=new Date(now.getFullYear(),0,0);
    var i=Math.floor((now-start)/86400000) % quotes.length;
    el.innerHTML=quotes[i].t;
    var by=document.getElementById('motby');
    if(by) by.textContent = quotes[i].by ? ('\u2014 '+quotes[i].by) : '';
  }
})();
