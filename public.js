/* =====================================================================
   PUBLIC LAYER · loads right after app.js, before chapter-2026.js
   1. Owner mode: add ?edit=1 to the URL to see drafts, audit notes and
      photo tools (remembered for the browser tab). ?edit=0 to leave.
   2. Maps every record to the 5 criteria of the PPPT promotion guideline
      (Kategori I(a)): pdp · rdci · lead · diri · sumb
   3. Replaces internal audit notes with clean public wording and marks
      unverified records as drafts (hidden from visitors).
   ===================================================================== */
(()=>{
const q=new URLSearchParams(location.search);
try{if(q.get('edit')==='1')sessionStorage.setItem('jm-edit','1');if(q.get('edit')==='0')sessionStorage.removeItem('jm-edit')}catch{}
let edit=false;try{edit=sessionStorage.getItem('jm-edit')==='1'}catch{}
window.JM_EDIT=edit;

window.JM_CRITERIA={
  pdp:['Teaching & Learning','#323EDD'],
  rdci:['Innovation, Research & Publication','#FFCF00'],
  lead:['Leadership','#91008D'],
  diri:['Professional Development','#00E0BA'],
  sumb:['Contribution & Service','#FF3483']
};

/* Which guideline criterion a record belongs to */
window.JM_CRIT=function(r){
  const t=[r.title,r.role,r.type].join(' ').toLowerCase();
  if(/hrd corp|pemangkuan dh48|hakiki/.test(t))return'diri';
  if(/research|penyelidik|publication|proceedings|smart muet|future-ready ai|co-author/.test(t))return'rdci';
  if(/course coordination|penyelaras kursus|panel pakar|pensyarah pemantau|industrial training|tecc ·|learning-space|linkedin basics/.test(t))return'pdp';
  if(/panasonic|analytical & creative|agro tvet|thunkable|cpsc|uinsu|jppkk|bipd|csr|volunteer|cleanup|rakan muda|lhm|malaysia day|respex|niosh|puspanita|convocation|nbic|jamuan|jawatankuasa aktiviti|explorace|^member|member,|ajk/.test(t))return'sumb';
  const d=r.domain||r.group||'';
  if(d==='teaching')return'pdp';if(d==='innovation'||d==='research')return'rdci';if(d==='community')return'sumb';
  return'lead';
};

/* Clean public notes for current-grade (2026) records; originals kept as r.audit */
const NOTES={
 'role-0':['Appointed Secretary for Criterion C7, Industry–Academic–Community Linkages, in the PPD APACC committee.'],
 'role-1':['Appointed Secretary of the PPD Occupational Safety and Health Unit (UKKP), with terms of reference and meeting minutes.','6 Apr 2026'],
 'role-2':['Appointed to the Data & Information Secretariat of PPD Strategic Management, named as head (K) in the March 2026 appointment.'],
 'role-3':['Appointed Strategic Deputy Programme Director, covering strategic planning, partnerships, promotion, media and liaison.'],
 'role-4':['Member of the Website and Promotion committee for the National Biz-Inno Challenge 2026.'],
 'role-5':['Member of the Safety and Traffic Management committee for the PolyCC Southern Zone Convocation 2026.'],
 'role-6':['Certificate of appreciation for serving as Head of Speakers at CAMP21: Synergizing Literacies, 13–16 July 2026.'],
 'role-7':['Certificate of appreciation for the Activities and Assessment committee of the JKE Design Thinking workshop, DEE40202 Project 1.'],
 'role-8':['Certificate of appreciation for serving on the refreshments committee of JPA SYNC SUMMIT 2.0.'],
 'role-9':['Certificate of appreciation for serving on the packaging committee of the PUSPANITA Ramadan programme.'],
 'role-10':['Appointed national graphic designer for the JPPKK BIPD micro-credential modules on OBE and Employability Skills.'],
 'role-11':['Appointed to the Subject Matter Expert Panel for the Communicative English 2 curriculum (TESL).'],
 'role-12':['Appointed Course Coordinator for DUE50132 Communicative English 3.'],
 'role-13':['Appointed to the JPPKK language review committee for Engineering Science Volume II, with a completed review form as output.','11 Dec 2025'],
 'role-14':['Appointed as a JPA researcher for 2026–2027.'],
 'role-15':['Appointed Industrial Training Monitoring Lecturer for Session II 2025/2026, Phase 1.'],
 'role-16':['Named Head of JPA eLearning in the JPA 2026 strategic roadmap.','2026'],
 'dt-jan7':['Speaker certificate for the January 2026 Design Thinking workshop (DEE40202 Project 1), with programme photographs.']
};
window.JM_PUBLIC=function(list){
  list.forEach(r=>{const n=NOTES[r.id];if(!n)return;r.audit=r.note;r.note=n[0];if(n[1]){r.auditDate=r.date;r.date=n[1]}});
};

/* Legacy (2023–2024) records: anything not yet verified is a draft */
if(typeof RECORDS!=='undefined'){
  RECORDS.forEach(r=>{
    if(!/VERIFIED/.test(r.status||''))r.draft=true;
    if(/portfolio boundary/i.test(r.note||'')){r.audit=r.note;r.note='Acting appointment to Grade DH48 / DH12, effective 05.02.2024.'}
  });
}
document.addEventListener('DOMContentLoaded',()=>document.body.classList.toggle('show-drafts',edit));
})();
