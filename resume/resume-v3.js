
(()=>{'use strict';
const root=document.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const wide=matchMedia('(min-width:1280px)');
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
 const button=ch.querySelector('.follow-scroll');const scrolling=motion&&!storyboard;
 button.disabled=!scrolling;button.setAttribute('aria-pressed',ch.dataset.follow==='true'?'true':'false');
 button.textContent=!motion?'Still view':storyboard?'Choose a stage above':ch.dataset.follow==='true'?'Following scroll ↓':'Follow scroll ↓';
}
function setSizes(){
 const header=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))||67;
 const available=innerHeight-header-32;
 chapters.forEach(ch=>{
  const figure=ch.querySelector('.evidence-scene'),track=ch.querySelector('.scene-track'),copy=ch.querySelector('.work-copy');
  const clone=figure.cloneNode(true);
  clone.removeAttribute('id');clone.setAttribute('aria-hidden','true');
  clone.style.cssText='position:absolute;visibility:hidden;pointer-events:none;width:'+figure.offsetWidth+'px;--caption-size:120px;--mobile-size:0px;--art-height:510px';
  track.append(clone);
  let mobileSize=0,captionSize=120;
  data[ch.dataset.scene].forEach(([label,caption],index)=>{
   clone.querySelector('.frame-label').textContent=label;clone.querySelector('.scene-caption').textContent=caption;
   clone.querySelectorAll('[data-mobile-frame]').forEach(g=>g.hidden=Number(g.dataset.mobileFrame)!==index+1);
   mobileSize=Math.max(mobileSize,clone.querySelector('.mobile-scene').offsetHeight);
   captionSize=Math.max(captionSize,clone.querySelector('figcaption').offsetHeight);
  });
  clone.style.setProperty('--mobile-size',Math.ceil(mobileSize)+'px');
  clone.style.setProperty('--caption-size',Math.ceil(captionSize)+'px');
  const svg=clone.querySelector('.scene-art');
  const chrome=clone.offsetHeight-svg.getBoundingClientRect().height;
  const artHeight=Math.max(280,Math.min(510,available-chrome));
  clone.remove();
  figure.style.setProperty('--mobile-size',Math.ceil(mobileSize)+'px');
  figure.style.setProperty('--caption-size',Math.ceil(captionSize)+'px');
  figure.style.setProperty('--art-height',artHeight+'px');
  const figureHeight=Math.ceil(figure.getBoundingClientRect().height);
  const pin=motion&&!storyboard&&figureHeight<=available+1;
  track.dataset.pin=String(pin);
  track.style.setProperty('--scene-size',figureHeight+'px');
  track.style.setProperty('--travel',(pin?(Number(ch.dataset.total)-1)*280:0)+'px');
  copy.dataset.pin=String(wide.matches&&motion&&copy.offsetHeight<=available);
 });
}
function update(){
 scheduled=false;
 const scrolling=motion&&!storyboard;
 if(scrolling){chapters.forEach(ch=>{
  if(ch.dataset.follow!=='true')return;
  const figure=ch.querySelector('.evidence-scene'),track=ch.querySelector('.scene-track');
  const rect=track.getBoundingClientRect();
  let p;
  if(track.dataset.pin==='true'){
   const top=parseFloat(getComputedStyle(figure).top)||83;
   p=(top-rect.top)/Math.max(1,track.offsetHeight-figure.offsetHeight);
  }else{
   const start=innerHeight*.82;
   p=(start-rect.top)/(start+figure.offsetHeight*.5);
  }
  const n=Number(ch.dataset.total),step=Math.min(n,1+Math.floor(Math.max(0,Math.min(1,p))*n));
  if(Number(ch.dataset.frame)!==step)renderFrame(ch,step);
 });}
 const nav=[...document.querySelectorAll('.section-nav a')];let current=nav[0];
 nav.forEach(a=>{const section=document.getElementById(a.hash.slice(1));if(section&&getComputedStyle(section).display!=='none'&&section.getBoundingClientRect().top<innerHeight*.35)current=a;});
 nav.forEach(a=>{if(a===current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 const totalHeight=document.documentElement.scrollHeight-innerHeight;const line=document.querySelector('.rail-progress');if(line)line.style.transform='scaleX('+Math.max(0,Math.min(1,totalHeight>0?scrollY/totalHeight:0))+')';
}
function requestUpdate(){if(scheduled)return;scheduled=true;requestAnimationFrame(update);}
function refreshMotion(){
 root.dataset.motion=motion?'on':'off';root.classList.toggle('scroll-scenes',motion&&!storyboard);
 motionButton.textContent=motion?'Motion on':'Motion off';motionButton.setAttribute('aria-pressed',String(!motion));
 motionButton.setAttribute('aria-label',motion?'Turn motion off and show final still illustrations':'Turn motion on');
 chapters.forEach(ch=>{ch.dataset.follow='true';if(!motion||storyboard)renderFrame(ch,Number(ch.dataset.total));updateFollow(ch);});
 setSizes();update();
}
chapters.forEach(ch=>{
 ch.querySelectorAll('button[data-frame]').forEach(b=>b.addEventListener('click',()=>{ch.dataset.follow='false';renderFrame(ch,Number(b.dataset.frame),true);updateFollow(ch);}));
 ch.querySelector('.follow-scroll').addEventListener('click',()=>{ch.dataset.follow='true';updateFollow(ch);update();});
 renderFrame(ch,Number(ch.dataset.total));
});
motionButton.addEventListener('click',()=>{motion=!motion;refreshMotion();});
reduced.addEventListener('change',()=>{motion=!reduced.matches;refreshMotion();});wide.addEventListener('change',()=>{setSizes();requestUpdate();});
addEventListener('scroll',requestUpdate,{passive:true});addEventListener('resize',()=>{setSizes();requestUpdate();},{passive:true});
function anchor(hash){if(!hash||hash==='#')return;let id;try{id=decodeURIComponent(hash.slice(1));}catch{return;}const target=document.getElementById(id);if(!target)return;let n=target;while(n){if(n.tagName==='DETAILS')n.open=true;n=n.parentElement;}requestUpdate();}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{anchor(a.hash);}));addEventListener('hashchange',()=>anchor(location.hash));
let printDetails=[];
addEventListener('beforeprint',()=>{printDetails=[...document.querySelectorAll('details')].map(d=>[d,d.open]);printDetails.forEach(([d])=>d.open=true);});
addEventListener('afterprint',()=>{printDetails.forEach(([d,o])=>d.open=o);});
root.classList.add('js');refreshMotion();anchor(location.hash);document.fonts.ready.then(()=>{setSizes();update();});
if('ResizeObserver' in window){let width=0;const observer=new ResizeObserver(()=>{const next=document.querySelector('.resume-content').offsetWidth;if(next!==width){width=next;setSizes();requestUpdate();}});observer.observe(document.querySelector('.resume-content'));}
})();
