
(()=>{'use strict';
const root=document.documentElement;
const siteMenu=document.querySelector('.nav__links'),siteToggle=document.querySelector('.nav__toggle');
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&siteMenu.classList.contains('open')){
  siteMenu.classList.remove('open');siteToggle.classList.remove('open');siteToggle.setAttribute('aria-expanded','false');document.body.style.overflow='';siteToggle.focus();
 }
});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const desktop=matchMedia('(min-width: 1280px) and (min-height: 810px)');
const chapters=[...document.querySelectorAll('.resume-content .evidence-chapter')];
const motionButton=document.getElementById('motion-toggle');
const storyboard=document.body.classList.contains('storyboard-mode');
const data={"knowledge": [["Capture", "The knowledge team captures a finished document and the reasoning behind it."], ["Structure", "Reusable records retain their source, version, intended use and review history."], ["Test", "The source collection, AI output and permissions are tested before reliance."], ["Use", "Source-linked guidance reaches the drafting workspace. The responsible lawyer retains the final say."]], "conflicts": [["Intake", "A new matter begins with an intake request. The design separates nine steps by the kind of work each performs."], ["Allocate", "Drafting, sourced retrieval and fixed rules carry different tasks. The workflow identifies where counsel must act."], ["Counsel", "The attorney assesses adversity and decides clearance. The engagement letter also waits for authorized release."]], "omono": [["Lesson", "In the build specification, a task-specific risk triggers a short lesson while the user works."], ["Evidence", "The local learning record connects the task, risk, safeguard, outcome and repair."], ["Export", "The user chooses a local curriculum export and manually supplies it to an approved model."], ["Curriculum", "The user’s exported learning evidence shapes targeted modules and short lessons. System and workflow fixes remain separate."]], "governance": [["System", "An illustrative system record places the proposed AI use and its responsible owner together."], ["Review", "Risk classification and vendor diligence receive review responsibilities in the operating arrangement."], ["Escalation", "An unresolved issue reaches an assigned reviewer through a defined escalation path. The record keeps the issue and responsibility visible."]]};
let motion=!reduced.matches,scheduled=false;
function renderFrame(ch,frame,announce=false){
 const total=Number(ch.dataset.total);frame=Math.max(1,Math.min(total,frame));ch.dataset.frame=String(frame);
 const [label,caption]=data[ch.dataset.scene][frame-1];
 ch.querySelector('.phase-count').textContent=String(frame).padStart(2,'0')+' / '+String(total).padStart(2,'0');
 ch.querySelector('.frame-label').textContent=label;ch.querySelector('.scene-caption').textContent=caption;
 ch.querySelectorAll('[data-frame]').forEach(b=>{if(b.tagName==='BUTTON')b.setAttribute('aria-pressed',String(Number(b.dataset.frame)===frame));});
 ch.querySelectorAll('.state-layer').forEach(g=>{const start=Number(g.dataset.from||1),end=Number(g.dataset.until||total);g.classList.toggle('is-visible',frame>=start&&frame<=end);});
 ch.querySelectorAll('[data-mobile-frame]').forEach(g=>g.hidden=Number(g.dataset.mobileFrame)!==frame);
 if(announce)document.getElementById('scene-status').textContent=label+'. '+caption;
}
function updateFollow(ch){
 const button=ch.querySelector('.follow-scroll');const scrolling=motion&&desktop.matches&&!storyboard;
 button.disabled=!scrolling;button.setAttribute('aria-pressed',ch.dataset.follow==='true'?'true':'false');
 button.textContent=!motion?'Still view':(storyboard||!desktop.matches)?'Choose a stage above':ch.dataset.follow==='true'?'Following scroll ↓':'Follow scroll ↓';
}
function setSizes(){chapters.forEach(ch=>{ch.style.setProperty('--pin-size',ch.querySelector('.evidence-pin').offsetHeight+'px');ch.style.setProperty('--travel',(Number(ch.dataset.total)-1)*260+'px');});}
function update(){
 scheduled=false;
 const scrolling=motion&&desktop.matches&&!storyboard;
 if(scrolling){chapters.forEach(ch=>{if(ch.dataset.follow!=='true')return;const pin=ch.querySelector('.evidence-pin');const top=parseFloat(getComputedStyle(pin).top)||89;const rect=ch.getBoundingClientRect();const travel=Math.max(1,ch.offsetHeight-pin.offsetHeight);const p=Math.max(0,Math.min(1,(top-rect.top)/travel));const n=Number(ch.dataset.total);const step=Math.min(n,1+Math.floor(p*n));if(Number(ch.dataset.frame)!==step)renderFrame(ch,step);});}
 const nav=[...document.querySelectorAll('.section-nav a')];let current=nav[0];
 nav.forEach(a=>{const section=document.getElementById(a.hash.slice(1));if(section&&getComputedStyle(section).display!=='none'&&section.getBoundingClientRect().top<innerHeight*.35)current=a;});
 nav.forEach(a=>{if(a===current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 const totalHeight=document.documentElement.scrollHeight-innerHeight;const line=document.querySelector('.rail-progress');if(line)line.style.transform='scaleX('+Math.max(0,Math.min(1,totalHeight>0?scrollY/totalHeight:0))+')';
}
function requestUpdate(){if(scheduled)return;scheduled=true;requestAnimationFrame(update);}
function refreshMotion(){
 root.dataset.motion=motion?'on':'off';root.classList.toggle('scroll-scenes',motion&&desktop.matches&&!storyboard);
 motionButton.textContent=motion?'Motion on':'Motion off';motionButton.setAttribute('aria-pressed',String(!motion));
 motionButton.setAttribute('aria-label',motion?'Turn motion off and show final still illustrations':'Turn motion on');
 chapters.forEach(ch=>{ch.dataset.follow='true';if(!motion||!desktop.matches||storyboard)renderFrame(ch,Number(ch.dataset.total));updateFollow(ch);});
 setSizes();update();
}
chapters.forEach(ch=>{
 ch.querySelectorAll('button[data-frame]').forEach(b=>b.addEventListener('click',()=>{ch.dataset.follow='false';renderFrame(ch,Number(b.dataset.frame),true);updateFollow(ch);}));
 ch.querySelector('.follow-scroll').addEventListener('click',()=>{ch.dataset.follow='true';updateFollow(ch);update();});
 renderFrame(ch,Number(ch.dataset.total));
});
motionButton.addEventListener('click',()=>{motion=!motion;refreshMotion();});
reduced.addEventListener('change',()=>{motion=!reduced.matches;refreshMotion();});desktop.addEventListener('change',refreshMotion);
addEventListener('scroll',requestUpdate,{passive:true});addEventListener('resize',()=>{setSizes();requestUpdate();},{passive:true});
function anchor(hash){if(!hash||hash==='#')return;let id;try{id=decodeURIComponent(hash.slice(1));}catch{return;}const target=document.getElementById(id);if(!target)return;let n=target;while(n){if(n.tagName==='DETAILS')n.open=true;n=n.parentElement;}requestUpdate();}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{anchor(a.hash);}));addEventListener('hashchange',()=>anchor(location.hash));
let printDetails=[];
addEventListener('beforeprint',()=>{printDetails=[...document.querySelectorAll('details')].map(d=>[d,d.open]);printDetails.forEach(([d])=>d.open=true);});
addEventListener('afterprint',()=>{printDetails.forEach(([d,o])=>d.open=o);});
root.classList.add('js');refreshMotion();anchor(location.hash);document.fonts.ready.then(()=>{setSizes();update();});
if('ResizeObserver' in window){const observer=new ResizeObserver(()=>{setSizes();requestUpdate();});chapters.forEach(ch=>observer.observe(ch.querySelector('.evidence-pin')));}
})();
