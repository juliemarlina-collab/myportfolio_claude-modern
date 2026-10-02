/* BOLD LAYER · load LAST (after premium.js) */
(()=>{'use strict';
const ICON={mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',pin:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>'};

/* Shared look for the two shadow-DOM chapters (2025, 2026) */
const SHADOW_CSS=`
:host{font-family:'Inter',system-ui,sans-serif!important}
h1,h2,h3,.display,.archive-card b,.stack-card strong,.date b{font-family:'Poppins',system-ui,sans-serif!important;font-weight:800!important;letter-spacing:-.04em!important}
h1{line-height:.92!important}h2{line-height:.98!important}
.eyebrow,.kicker{color:#323EDD!important;font-weight:700!important}
.hero{background:#FFCF00!important}
.pill{background:#323EDD!important;color:#fff!important;border:0!important;font-family:'Poppins',sans-serif;font-weight:700}
.intro,.minor,.vault{background:#323EDD!important;color:#fff!important}
.intro h2,.minor h2,.vault h2{color:#FFCF00!important}
.intro .eyebrow,.minor .eyebrow,.vault .kicker{color:#fff!important}
.strip,.ticker,.section-nav,.chapter-nav{background:#14141A!important}
.chapter-nav{top:82px!important}
.tile,.holder,.folder,.card-holder{border-radius:24px!important}
.recognition{background:#FFCF00!important}.end{background:#323EDD!important}
.role{border-left-color:#FFCF00!important}
`;
const DRAFT_HIDE=`.status,.note,.photo-hint,.notice,#evidence,[data-jump=evidence],.slot{display:none!important}`;

function styleShadows(showDrafts){
  for(const id of ['chapter-2025','chapter-2026']){
    const root=document.getElementById(id)?.shadowRoot; if(!root) continue;
    let s=root.getElementById('bold-layer');
    if(!s){s=document.createElement('style');s.id='bold-layer';root.append(s);}
    s.textContent=SHADOW_CSS+(showDrafts?'':DRAFT_HIDE);
  }
}

function heroContact(){
  const col=document.querySelector('.editorial-hero > div:first-child');
  if(!col||col.querySelector('.hero-contact')) return;
  col.insertAdjacentHTML('beforeend',`<div class="hero-contact">
    <a href="mailto:juliemarlina@polipd.edu.my"><i>${ICON.mail}</i>juliemarlina@polipd.edu.my</a>
    <span><i>${ICON.pin}</i>Politeknik Port Dickson, Negeri Sembilan</span></div>`);
}

function draftToggle(){
  /* Owner mode (?edit=1) shows a small badge; visitors never see working tools */
  if(!window.JM_EDIT||document.querySelector('.owner-badge'))return;
  const a=document.createElement('a');a.className='owner-badge';a.href='?edit=0'+location.hash;
  a.textContent='Owner mode · drafts & notes visible — exit';document.body.append(a);
}
function folioLink(){const nav=document.getElementById('main-nav');if(!nav||nav.querySelector('.folio-link'))return;const a=document.createElement('a');a.href='folio-dh13.html';a.className='folio-link';a.textContent='Folio DH13';nav.lastElementChild.before(a);}
function run(){folioLink();heroContact();draftToggle();styleShadows(document.body.classList.contains('show-drafts'));}
document.addEventListener('DOMContentLoaded',()=>{run();addEventListener('hashchange',()=>setTimeout(run,30));});
})();
