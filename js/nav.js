/* Shared navigation: homepage and interior pages use the same behavior. */
(function () {
  'use strict';
  document.documentElement.classList.add('navigation-ready');
  document.addEventListener('DOMContentLoaded', function () {
    const nav=document.querySelector('#nav.nav');
    if(!nav)return;
    const toggle=nav.querySelector('.nav__toggle'),links=nav.querySelector('.nav__links');
    if(!toggle||!links)return;
    if(!links.id)links.id='primary-nav-links';
    toggle.setAttribute('aria-controls',links.id);
    function setOpen(open,focus=false){
      links.classList.toggle('open',open);toggle.classList.toggle('open',open);
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
      if(focus)toggle.focus();
    }
    setOpen(false);
    toggle.addEventListener('click',()=>setOpen(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&links.classList.contains('open'))setOpen(false,true);});
    document.addEventListener('click',e=>{if(!nav.contains(e.target))setOpen(false);});
    matchMedia('(max-width:900px)').addEventListener('change',()=>setOpen(false));
    function handleScroll(){nav.classList.toggle('nav--scrolled',scrollY>50);}
    handleScroll();addEventListener('scroll',handleScroll,{passive:true});
    const norm=p=>p==='/'?'/':p.replace(/\/$/,'');
    const current=norm(location.pathname);
    links.querySelectorAll('a').forEach(a=>{
      const href=norm(new URL(a.href,location.href).pathname);
      const active=href==='/'?current==='/':current===href||current.startsWith(href+'/');
      a.classList.toggle('active',active);
      if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
  });
}());
