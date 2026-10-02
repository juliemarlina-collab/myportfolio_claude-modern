const RECORDS = [
 {folder:"master-trainer",title:"Pembangunan Platform Micro Credential, Politeknik Port Dickson 2023",type:"Final implementation report",status:"VERIFIED",role:"Master Trainer; Ketua Penyelaras Pembangunan Platform MC",note:"Report records 42 lecturers, 18 expert panels / course platforms, Series 1 on 6 July, Series 2 on 3-4 August, review on 15 November and 15 December 2023.",url:"https://drive.google.com/file/d/1VqILVuQDkMbhrcqAabqBeuO59baD9r5a/view"},
 {folder:"master-trainer",title:"Master Trainer nomination / platform preparation",type:"Nomination document",status:"SOURCE FOUND",role:"Master Trainer",note:"Supporting appointment/nomination source located in Google Drive.",url:"https://drive.google.com/file/d/1zQpFvM-m_UiT4GNPlNm4UOMwhuMOqqv2/view"},
 {folder:"master-trainer",title:"Kertas Kerja MC 2023",type:"Signed programme working paper",status:"SOURCE FOUND",role:"Programme planning / coordination",note:"Signed 2023 working paper located in Drive.",url:"https://drive.google.com/file/d/10KosOEK-QQKWSOP78eBed8iLi_hOQ9AH/view"},
 {folder:"thunkable",title:"Kursus Pembangunan Apps Menggunakan Aplikasi Thunkable",type:"Speaker record",status:"VERIFIED",role:"Penceramah",note:"PSH programme, 14 June 2023, 8.00 am-5.00 pm. ULPL 2000655.",url:"https://drive.google.com/file/d/1VeZ9K85FTKnuKlSAXja0t5nSfqBfFyvd/view"},
 {folder:"thunkable",title:"Thunkable workshop photographs",type:"Authentic 2023 photographs",status:"VERIFIED VISUAL",role:"Speaker / facilitator",note:"Two Drive photographs are embedded directly in this chapter.",url:""},
 {folder:"camp21",title:"Appointment as Speaker and Facilitator - CAMP21: Synergizing Literacies 2023",type:"Official appointment + Terms of Reference",status:"VERIFIED",role:"Lead DT Facilitator",note:"25-27 September 2023. Official TOR assigns facilitator task distribution, monitoring and support to the Lead DT Trainer.",url:"https://drive.google.com/file/d/1o_1LjjrBFe1NYEcnH3_rJAIlKezPx0Zd/view"},
 {folder:"camp21",title:"CAMP21 2023 Certificate of Appreciation",type:"Certificate",status:"VERIFIED",role:"Design Thinking Facilitator",note:"Certificate for CAMP21 Synergising Literacies 2023, 25-27 September 2023.",url:"https://drive.google.com/file/d/17-Zee0GI9y6rsiwoZbh1xPXVsMYFzRIM/view"},
 {folder:"publication",title:"Community Involvement in an English Classroom of a TVET Institution in Malaysia",type:"Published proceedings paper",status:"VERIFIED",role:"Co-author",note:"Susan S Magallanes and Julie Marlina Hasan. AIJR Proceedings, 2023. DOI: 10.21467/proceedings.151.49.",url:"https://drive.google.com/file/d/168LMbuHp8_GsQfjmURPfJ4Uux4vMcRxS/view"},
 {folder:"respex",title:"Sumbangan RESPEx 2023",type:"Contribution record",status:"SOURCE FOUND",role:"Exact Julie-specific scope to verify",note:"Dedicated contribution evidence is present in Drive; keep the role wording conservative until the source is fully extracted.",url:"https://drive.google.com/file/d/1Tj2DG0Bf-F9RuTYiT2163Ai_nhrsYp2n/view"},
 {folder:"ukkp",title:"JK Audit NIOSH - October 2023",type:"Institutional committee evidence",status:"SOURCE FOUND",role:"Committee contribution - exact wording to verify",note:"2023 UKKP folder and October NIOSH audit document found in Drive.",url:"https://drive.google.com/file/d/1JMtXhkWwyxtTPQxWRtfpTksupgdkD9HE/view"},
 {folder:"rakan-muda",title:"Surat Pelantikan JK Rakan Muda Ramadan 2023",type:"Official appointment letter",status:"SOURCE FOUND",role:"Committee member - exact portfolio wording to verify",note:"Official 2023 appointment letter located in Drive.",url:"https://drive.google.com/file/d/1vB0ubmtQKWRs5brccOo8KsIkn_A623UH/view"},
 {folder:"csr",title:"CSR Ostrich Farm - March 2023",type:"CSR record",status:"SOURCE FOUND",role:"Exact role to verify",note:"March 2023 CSR record located in Drive.",url:"https://drive.google.com/file/d/1kBuAaS3s7amUQOzLwHZFvweWRAFADg63/view"}
];

const RECORDS_2024 = [
 {folder:"dh12",title:"Surat Pemangkuan DH48 / DH12",type:"Official acting appointment letter",status:"VERIFIED",year:"2024",domain:"leadership",isDH12:true,role:"PPPT Gred DH48 / DH12 (Pemangkuan)",note:"Effective 05.02.2024. Used as the portfolio boundary for the DH12 current-grade period.",url:"https://drive.google.com/file/d/1oHmhd-BWbfhTsbBtIVq7WixTifh5uBIZ/view"},
 {folder:"training",title:"Analytical & Creative Thinking Skills: Crafting Out of the Box Solutions",type:"2-day lesson plan and training record",status:"VERIFIED",year:"2024",domain:"training",isDH12:true,role:"Trainer — Julie Marlina binti Hasan",note:"29–30 May 2024. Two-day Panasonic System Networks Malaysia programme covering analytical and creative thinking, SWOT, brainstorming, Mind Mapping, SCAMPER, Design Thinking and prototyping.",url:"https://drive.google.com/file/d/1Rj71vICUodzdLtbH0HNIu0eSArVGZkCt/view"},
 {folder:"training",title:"Course Outline — Analytical & Creative Thinking Skills",type:"Course outline",status:"VERIFIED",year:"2024",domain:"training",isDH12:true,role:"Prepared by Julie Marlina binti Hasan",note:"Course outline contextualises analytical, creative and Design Thinking tools for manufacturing challenges.",url:"https://drive.google.com/file/d/1Rnf_Pyu4qzQ3lTUzIZo9FzqnYgzrs049/view"},
 {folder:"training",title:"HRD Corp Accredited Trainer Certificate",type:"Professional trainer accreditation certificate",status:"VERIFIED",year:"2024",domain:"training",isDH12:true,role:"Accredited Trainer — Trainer ID 18374",note:"Certificate validity: 23 Dec 2024 to 23 Dec 2027.",url:"https://drive.google.com/file/d/12krkXkySUIw6JIQs150xNxLGpF-DNXXq/view"},
 {folder:"international",title:"CPSC × Salesian Sisters of Don Bosco — Study Visit on Best Practices of TVET Institutions",type:"Certificate of appreciation — CPSC/24-25/CoPBP-038",status:"VERIFIED",year:"2024",domain:"leadership",isDH12:true,role:"Organizer",note:"Held 26 Aug–1 Sep 2024. Certificate recognises contribution as Organizer for the study visit on best practices of TVET institutions in Malaysia and Singapore.",url:"https://drive.google.com/file/d/1pzlw7bKcDLn4qPs38EvbTSUoeYs5KdRJ/view"},
 {folder:"international",title:"CPSC × TESDA Women's Center — Study Visit on Best Practices of PPD",type:"Certificate of appreciation — CPSC/24-25/SVTWC-050",status:"VERIFIED",year:"2024",domain:"leadership",isDH12:true,role:"Organizer",note:"Held 17–20 Sep 2024. Certificate recognises contribution as Organizer for the study visit on PPD as an APACC Platinum Awardee Institution.",url:"https://drive.google.com/file/d/1dB1TgUAiFEi300llWH1OSAVsPcxfY_fJ/view"},
 {folder:"international",title:"Strategic Collaboration with UINSU, Indonesia",type:"Collaboration record",status:"SOURCE FOUND",year:"2024",domain:"leadership",isDH12:true,role:"Exact Julie-specific role pending full extraction",note:"March 2024 Drive record located. Kept conservative until the underlying document confirms Julie's exact role and contribution.",url:"https://drive.google.com/file/d/1X-VhzoGY9_qAh6k9G0Gfcn2vEt7lJS2u/view"},
 {folder:"sharing",title:"Pembangun Bahan Platform Micro Credential PPD 2024 Siri Ke-3",type:"Speaker record",status:"VERIFIED",year:"2024",domain:"training",isDH12:true,role:"Penceramah",note:"23 Oct 2024, 9.00 am–5.00 pm. ULPL 2001258.",url:"https://drive.google.com/file/d/1qWa4VTRIHHSfcZ6jSCov-7hSXdR3Hy0Y/view"},
 {folder:"sharing",title:"Pembangunan Bahan Micro Credential PPD — continuity record",type:"Certificate of coordination",status:"VERIFIED",year:"2024",domain:"training",isDH12:true,role:"Ketua Penyelaras",note:"The certificate was held in the 2024 evidence set but explicitly states the materials were developed in 2023; shown as continuity evidence rather than a new 2024 project.",url:"https://drive.google.com/file/d/1gDf92oS4YoXszVMn2_559y-d9qIiLbXm/view"},
 {folder:"sharing",title:"Agro TVET",type:"Speaker record",status:"SOURCE FOUND",year:"2024",domain:"training",isDH12:true,role:"Penceramah / speaker record",note:"October 2024 source located. Exact session title/topic is not expanded until the source is fully extracted.",url:"https://drive.google.com/file/d/1w0l8TA34UTi4FlVf91T4WhlGDHgLXh9y/view"},
 {folder:"leadership-service",title:"Jawatankuasa UKKP PPD",type:"Appointment record",status:"SOURCE FOUND",year:"2024",domain:"leadership",isDH12:true,role:"Role wording to follow official appointment letter",note:"August 2024 UKKP appointment source located.",url:"https://drive.google.com/file/d/1ePM45fo55w9xP1U77MZG5WrnQUjXob-M/view"},
 {folder:"leadership-service",title:"Jawatankuasa e-Pembelajaran Politeknik Port Dickson",type:"Committee record",status:"SOURCE FOUND",year:"2024",domain:"leadership",isDH12:true,role:"Committee contribution",note:"March 2024 e-Pembelajaran committee source located.",url:"https://drive.google.com/file/d/1okjSWQWNDxRxCcLip9JtfN9OXnZw0DLD/view"},
 {folder:"leadership-service",title:"Ketua Pengawas Peperiksaan Akhir Sesi II 2023/2024",type:"Examination record",status:"SOURCE FOUND",year:"2024",domain:"leadership",isDH12:true,role:"Ketua Pengawas — per portfolio evidence register; verify exact line in source",note:"May 2024 examination record located.",url:"https://drive.google.com/file/d/1eA2KBt-crBoGLNQFUZlhRoni2OYaoIWF/view"},
 {folder:"leadership-service",title:"Semarak Bahasa — English Explorace",type:"Programme appointment record",status:"SOURCE FOUND",year:"2024",domain:"leadership",isDH12:true,role:"Exact role to follow appointment record",note:"August 2024 programme source located.",url:"https://drive.google.com/file/d/1Q7Q7CXvKxI-GXwDeYv85Gx7FJ0Gtxqnl/view"},
 {folder:"community",title:"Malaysia Day Celebration & Customer Open Day bersama LHM Auto Sdn Bhd",type:"External CSR appointment letter",status:"VERIFIED",year:"2024",domain:"leadership",isDH12:true,role:"JK Pendaftaran & Pertandingan Mewarna",note:"Appointment letter dated 2 Sep 2024 names Julie on the Coloring Contest & Registration Committee.",url:"https://drive.google.com/file/d/1ULMjOf6EkN3nyxOJ2lJDz_rISb5y4jd4/view"},
 {folder:"community",title:"World Cleanup Day PPD 2024",type:"Environmental service record",status:"SOURCE FOUND",year:"2024",domain:"leadership",isDH12:true,role:"Exact role pending confirmation",note:"September 2024 source confirms Julie's name; exact role is not inferred.",url:"https://drive.google.com/file/d/18HSkOXDOE7_hi-wTNgJipYmUP4RE9MRx/view"}
];
RECORDS.push(...RECORDS_2024);

const views=["home","about","journey","work","dh13","evidence"];
function showJourneyChapter(year,scrollTop=false){
 const target=['2023','2024','2025','2026'].includes(String(year))?String(year):'2023';
 for(const y of ['2023','2024','2025','2026']){const chapter=document.querySelector('.share'+y);if(chapter){chapter.hidden=y!==target;chapter.style.display=y===target?'block':'none'}}
 const nav23=document.querySelector('.subnav-2023');if(nav23)nav23.style.display=target==='2023'?'flex':'none';
 document.querySelectorAll('.journey-year-switcher a').forEach(a=>a.classList.toggle('active',a.dataset.routeChapter===target));
 if(scrollTop)document.querySelector('.share'+target)?.scrollIntoView({behavior:'smooth',block:'start'});
}
function route(){
  const raw=location.hash.replace(/^#\/?/,"")||"home";
  const [name,sub]=raw.split("/");
  const active=views.includes(name)?name:"home";
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById("view-"+active)?.classList.add("active");
  if(active==="journey"){
    showJourneyChapter(sub,false);
    if(["2023","2024","2025","2026"].includes(sub)) window.scrollTo({top:0,behavior:"instant"});
    if(sub==="dh12-transition") setTimeout(()=>document.getElementById("dh12-transition")?.scrollIntoView({behavior:"smooth"}),50);
  }
}
addEventListener("hashchange",route);
const drawer=document.getElementById("drawer"),drawerTitle=document.getElementById("drawer-title"),drawerBody=document.getElementById("drawer-body");document.getElementById("close").onclick=()=>drawer.close();
function openFolder(folder){
  let rows=RECORDS.filter(r=>r.folder===folder);
  if(folder==="service") rows=RECORDS.filter(r=>["ukkp","rakan-muda","csr"].includes(r.folder));
  if(!window.JM_EDIT) rows=rows.filter(r=>!r.draft);
  drawerTitle.textContent=(folder||"EVIDENCE").replaceAll("-"," ").toUpperCase();
  drawerBody.innerHTML=rows.length?rows.map(r=>`<div class="drawer-record"><span class="status ${r.status.includes("VERIFIED")?"verified":""}">${r.status}</span>${r.isDH12?`<span class="badge-lime">DH12 CURRENT-GRADE PERIOD</span>`:""}<h4>${r.title}</h4><p><strong>Year:</strong> ${r.year||"2023"}</p><p><strong>Evidence type:</strong> ${r.type}</p><p><strong>Role:</strong> ${r.role}</p><p>${r.note}</p>${r.url?`<a class="btn" target="_blank" rel="noopener" href="${r.url}">Open source in Google Drive →</a>`:`<div class="drawer-placeholder">The visual evidence is embedded in this page.</div>`}</div>`).join(""):`<p>No connected record in this folder yet.</p>`;
  drawer.showModal();
}

function initInteractiveTriggers(){
  document.querySelectorAll("[data-folder]").forEach(el=>el.addEventListener("click",()=>openFolder(el.dataset.folder)));
  document.querySelectorAll("[data-jump]").forEach(el=>el.addEventListener("click",()=>document.getElementById(el.dataset.jump)?.scrollIntoView({behavior:"smooth"})));
  document.querySelectorAll("[data-scroll]").forEach(el=>el.addEventListener("click",()=>document.getElementById(el.dataset.scroll)?.scrollIntoView({behavior:"smooth",block:"start"})));
  document.querySelector(".open-year-map")?.addEventListener("click",()=>document.getElementById("shift")?.scrollIntoView({behavior:"smooth"}));
  document.querySelectorAll("[data-chapter-switch]").forEach(btn=>btn.addEventListener("click",(e)=>{
    const target=e.currentTarget.getAttribute("data-chapter-switch");
    location.hash=`#/journey/${target}`;
    setTimeout(()=>showJourneyChapter(target,true),20);
  }));
}
function renderMasterEvidence(){
  const box=document.getElementById("records"); if(!box)return;
  const yr=document.getElementById("year")?.value||"all", dom=document.getElementById("domain")?.value||"all", onlyDH12=document.getElementById("dh12")?.checked||false;
  const rows=RECORDS.filter(r=>(yr==="all"||(r.year||"2023")===yr)&&(dom==="all"||(r.domain||"")===dom)&&(!onlyDH12||r.isDH12));
  box.innerHTML=rows.map(r=>`<article><span class="badge-lime">${r.year||"2023"}</span><h3>${r.title}</h3><p>${r.type}</p><button class="btn" data-master-folder="${r.folder}">Inspect →</button></article>`).join("");
  box.querySelectorAll("[data-master-folder]").forEach(b=>b.onclick=()=>openFolder(b.dataset.masterFolder));
}
document.addEventListener("DOMContentLoaded",()=>{
  route(); initInteractiveTriggers(); renderMasterEvidence();
  ["year","domain","dh12"].forEach(id=>document.getElementById(id)?.addEventListener("change",renderMasterEvidence));
});
