/* Call Coaching & Performance — site.js  (build v2) */
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
  } else {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.14});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  }
})();

/* daily motivation — rotates quote of the day */
(function(){
  var quotes=[
    {t:`You lack focus, not potential.<br>You lack consistency, not ability.<br>You lack strategy, not resources.<br>You lack discipline, not opportunities.`, by:"Unknown"},
    {t:`Guys like you always think other people get lucky. I don't get lucky &mdash; I make my own luck.`, by:"Harvey Specter, Suits"},
    {t:`People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.`, by:"Thich Nhat Hanh"},
    {t:`You might have more talent than me. You might be smarter. You might have it on me in nine categories &mdash; but you're not going to out-work me. It's such a simple, basic concept.`, by:"Will Smith"},
    {t:`Discipline is just remembering what you actually want.`, by:""},
    {t:`Motivation gets you started. Showing up anyway is what keeps you.`, by:""},
    {t:`You don't have to feel like it. You just have to do it.`, by:""},
    {t:`The plan only works on the days you don't want to run it.`, by:""},
    {t:`Small reps, stacked daily, become a different body and a different person.`, by:""},
    {t:`Nobody is coming to do it for you. Good &mdash; that means it's yours.`, by:""},
    {t:`Comfort is the thing quietly costing you the most.`, by:""},
    {t:`Be the person your future self is thanking right now.`, by:""},
    {t:`You won't shame yourself into progress. You'll coach yourself into it.`, by:""},
    {t:`Progress hides in the boring, repeatable days.`, by:""},
    {t:`Train like the version of you that already made it.`, by:""},
    {t:`One honest hour beats three you spent making excuses.`, by:""},
    {t:`Strong is a decision you make again every morning.`, by:""},
    {t:`Show up on the low days. Those are the ones that count double.`, by:""},
    {t:`The gym doesn't care how you feel. It only responds to what you do.`, by:""},
    {t:`You're not behind. You just haven't started stacking days yet.`, by:""},
    {t:`Consistency is the most underrated superpower there is.`, by:""},
    {t:`Doubt it all you want &mdash; just don't skip.`, by:""},
    {t:`Your excuses and your goals can't both survive. Pick one.`, by:""},
    {t:`Discipline is choosing the hard thing before it becomes a crisis.`, by:""},
    {t:`Build the habit and the results have no choice but to follow.`, by:""},
    {t:`Answer the call today, even if it's just a walk.`, by:""},
    {t:`The body follows the standard you refuse to lower.`, by:""},
    {t:`You become what you repeat. Repeat something worth becoming.`, by:""},
    {t:`There's no perfect time. There's just the set in front of you.`, by:""},
    {t:`Fall in love with the reps nobody claps for.`, by:""},
    {t:`Rest is part of the plan. Quitting isn't.`, by:""},
    {t:`Effort is the one variable fully in your control. Spend it.`, by:""},
    {t:`Every rep is a vote for the person you're deciding to be.`, by:""},
    {t:`Goals point the direction. Habits do the driving.`, by:""},
    {t:`The work is simple. The showing up is hard. Do the hard part.`, by:""},
    {t:`Start before you're ready. Ready is built by starting.`, by:""},
    {t:`A missed day is a moment. A missed month is a choice.`, by:""},
    {t:`Be the one who still trains when it's inconvenient.`, by:""},
    {t:`Your future is built by what you do on ordinary Tuesdays.`, by:""},
    {t:`Stop negotiating with the alarm. Get up. Go.`, by:""},
    {t:`Discipline is heavy for a minute. Regret is heavy for years.`, by:""},
    {t:`You've survived every hard day so far. Add one more.`, by:""},
    {t:`Train the mind by keeping the promise you made to your body.`, by:""},
    {t:`Nothing changes until your daily actions do.`, by:""},
    {t:`Be relentless in private and the results go public on their own.`, by:""},
    {t:`You're allowed to start over as many times as it takes.`, by:""},
    {t:`The standard is the standard, even when nobody's watching.`, by:""},
    {t:`Do the disciplined thing now; enjoy the freedom it buys later.`, by:""},
    {t:`Don't count the days. Make the days count reps.`, by:""},
    {t:`The strongest muscle you'll build is the one that says &lsquo;again.&rsquo;`, by:""},
    {t:`Winners are just people who refused to skip long enough.`, by:""},
    {t:`You don't need more time. You need fewer excuses.`, by:""},
    {t:`Do it tired. Do it unmotivated. Just do it consistently.`, by:""},
    {t:`Progress is quiet. Trust it before you can see it.`, by:""},
    {t:`The hardest lift is the decision to begin. Handle that first.`, by:""},
    {t:`Be so consistent it looks like talent.`, by:""},
    {t:`You can rest. You just can't retreat.`, by:""},
    {t:`What you tolerate, you become. Tolerate greatness.`, by:""},
    {t:`The only workout you'll regret is the one you talked yourself out of.`, by:""},
    {t:`Chase the standard, not the mood.`, by:""},
    {t:`Ordinary effort, extraordinary consistency. That's the whole secret.`, by:""},
    {t:`Make the promise small enough to keep, then keep it every day.`, by:""},
    {t:`You're one decision away from completely different momentum.`, by:""},
    {t:`Strength isn't given. It's collected, one hard rep at a time.`, by:""},
    {t:`When it gets boring, you're exactly where the growth lives.`, by:""},
    {t:`Some days you lead the workout. Some days you survive it. Both count.`, by:""},
    {t:`Don't wait to feel strong to act strong. Act first.`, by:""},
    {t:`The scale is one page. Keep writing the book.`, by:""},
    {t:`Your standards on the bad days are your real standards.`, by:""},
    {t:`Outlast the version of you that wants to quit.`, by:""},
    {t:`Every champion was once a beginner who didn't stop.`, by:""},
    {t:`Trade &lsquo;I can't&rsquo; for &lsquo;I haven't yet.&rsquo;`, by:""},
    {t:`The reps you don't feel like doing are the ones rebuilding you.`, by:""},
    {t:`Keep the streak alive. Momentum is fragile and worth protecting.`, by:""},
    {t:`You don't find discipline. You practice it until it finds you.`, by:""},
    {t:`Answer the call &mdash; the strongest version of you is waiting on a rep.`, by:""},
    {t:`Effort compounds. So does skipping. Choose which one adds up.`, by:""},
    {t:`Be hard to break. Build it here, one session at a time.`, by:""},
    {t:`Confidence is just proof you've kept promises to yourself.`, by:""},
    {t:`The barbell is honest. It gives back exactly what you put in.`, by:""},
    {t:`You can start small. You just can't start someday.`, by:""},
    {t:`Show up scared, show up sore, show up anyway.`, by:""}
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

/* Formspree AJAX for any form.js-formspree (lead form + Daily Call) */
(function(){
  var forms=document.querySelectorAll('form.js-formspree');
  if(!forms.length) return;
  forms.forEach(function(form){
    var status=form.querySelector('[role="status"]');
    var ok=form.getAttribute('data-ok')||"Thanks \u2014 you're all set.";
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn=form.querySelector('[type="submit"]');
      var label=btn?btn.textContent:'';
      if(status){ status.className=status.className.replace(/\s*(ok|err)\b/g,''); status.textContent=''; }
      if(btn){ btn.disabled=true; btn.textContent='Sending\u2026'; }
      fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}})
        .then(function(r){
          if(r.ok){
            form.reset();
            if(status){ status.className+=' ok'; status.textContent=ok; }
          } else {
            return r.json().then(function(d){
              var m=(d&&d.errors&&d.errors.map(function(x){return x.message;}).join(', '))||'Something went wrong. Please text me at (901) 359-0305.';
              if(status){ status.className+=' err'; status.textContent=m; }
            });
          }
        })
        .catch(function(){ if(status){ status.className+=' err'; status.textContent='Network error \u2014 please text me at (901) 359-0305.'; } })
        .finally(function(){ if(btn){ btn.disabled=false; btn.textContent=label; } });
    });
  });
})();
