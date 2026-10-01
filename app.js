/**
 * DH13 Portfolio Web App Controller
 * - Resilient SPA Hash Router (prevents subnav anchor collision)
 * - Dynamic Master Evidence Archive with Live Multi-Criteria Filtering
 * - Accessible Modal Drawer Viewer with Backdrop Click Dismissal
 */

// 1. DATA REPOSITORY: VERIFIED EVIDENCE DOSSIER
const RECORDS = [
  {
    folder: "master-trainer",
    title: "Pembangunan Platform Micro Credential, Politeknik Port Dickson 2023",
    type: "Final implementation report",
    status: "VERIFIED",
    year: "2023",
    domain: "training",
    isDH12: false,
    role: "Master Trainer; Ketua Penyelaras Pembangunan Platform MC",
    note: "Report records 42 lecturers, 18 expert panels / course platforms, Series 1 on 6 July, Series 2 on 3-4 August, review on 15 November and 15 December 2023.",
    url: "https://drive.google.com/file/d/1VqILVuQDkMbhrcqAabqBeuO59baD9r5a/view"
  },
  {
    folder: "master-trainer",
    title: "Master Trainer nomination / platform preparation",
    type: "Nomination document",
    status: "SOURCE FOUND",
    year: "2023",
    domain: "training",
    isDH12: false,
    role: "Master Trainer",
    note: "Supporting appointment/nomination source located in Google Drive.",
    url: "https://drive.google.com/file/d/1zQpFvM-m_UiT4GNPlNm4UOMwhuMOqqv2/view"
  },
  {
    folder: "master-trainer",
    title: "Kertas Kerja MC 2023",
    type: "Signed programme working paper",
    status: "SOURCE FOUND",
    year: "2023",
    domain: "training",
    isDH12: false,
    role: "Programme planning / coordination",
    note: "Signed 2023 working paper located in Drive.",
    url: "https://drive.google.com/file/d/10KosOEK-QQKWSOP78eBed8iLi_hOQ9AH/view"
  },
  {
    folder: "thunkable",
    title: "Kursus Pembangunan Apps Menggunakan Aplikasi Thunkable",
    type: "Speaker record",
    status: "VERIFIED",
    year: "2023",
    domain: "innovation",
    isDH12: false,
    role: "Penceramah",
    note: "PSH programme, 14 June 2023, 8.00 am-5.00 pm. ULPL 2000655.",
    url: "https://drive.google.com/file/d/1VeZ9K85FTKnuKlSAXja0t5nSfqBfFyvd/view"
  },
  {
    folder: "thunkable",
    title: "Thunkable workshop photographs",
    type: "Authentic 2023 photographs",
    status: "VERIFIED VISUAL",
    year: "2023",
    domain: "innovation",
    isDH12: false,
    role: "Speaker / facilitator",
    note: "Two authentic workshop photographs are embedded directly in this chapter.",
    url: ""
  },
  {
    folder: "camp21",
    title: "Appointment as Speaker and Facilitator - CAMP21: Synergizing Literacies 2023",
    type: "Official appointment + Terms of Reference",
    status: "VERIFIED",
    year: "2023",
    domain: "training",
    isDH12: false,
    role: "Lead DT Facilitator",
    note: "25-27 September 2023. Official TOR assigns facilitator task distribution, monitoring and support to the Lead DT Trainer.",
    url: "https://drive.google.com/file/d/1o_1LjjrBFe1NYEcnH3_rJAIlKezPx0Zd/view"
  },
  {
    folder: "camp21",
    title: "CAMP21 2023 Certificate of Appreciation",
    type: "Certificate",
    status: "VERIFIED",
    year: "2023",
    domain: "training",
    isDH12: false,
    role: "Design Thinking Facilitator",
    note: "Certificate for CAMP21 Synergising Literacies 2023, 25-27 September 2023.",
    url: "https://drive.google.com/file/d/17-Zee0GI9y6rsiwoZbh1xPXVsMYFzRIM/view"
  },
  {
    folder: "publication",
    title: "Community Involvement in an English Classroom of a TVET Institution in Malaysia",
    type: "Published proceedings paper",
    status: "VERIFIED",
    year: "2023",
    domain: "leadership",
    isDH12: false,
    role: "Co-author",
    note: "Susan S Magallanes and Julie Marlina Hasan. AIJR Proceedings, 2023. DOI: 10.21467/proceedings.151.49.",
    url: "https://drive.google.com/file/d/168LMbuHp8_GsQfjmURPfJ4Uux4vMcRxS/view"
  },
  {
    folder: "respex",
    title: "Sumbangan RESPEx 2023",
    type: "Contribution record",
    status: "SOURCE FOUND",
    year: "2023",
    domain: "leadership",
    isDH12: false,
    role: "Exact Julie-specific scope to verify",
    note: "Dedicated contribution evidence is present in Drive; keep role wording conservative until the source is fully extracted.",
    url: "https://drive.google.com/file/d/1Tj2DG0Bf-F9RuTYiT2163Ai_nhrsYp2n/view"
  },
  {
    folder: "ukkp",
    title: "JK Audit NIOSH - October 2023",
    type: "Institutional committee evidence",
    status: "SOURCE FOUND",
    year: "2023",
    domain: "leadership",
    isDH12: false,
    role: "Committee contribution - exact wording to verify",
    note: "2023 UKKP folder and October NIOSH audit document found in Drive.",
    url: "https://drive.google.com/file/d/1JMtXhkWwyxtTPQxWRtfpTksupgdkD9HE/view"
  },
  {
    folder: "rakan-muda",
    title: "Surat Pelantikan JK Rakan Muda Ramadan 2023",
    type: "Official appointment letter",
    status: "SOURCE FOUND",
    year: "2023",
    domain: "leadership",
    isDH12: false,
    role: "Committee member - exact portfolio wording to verify",
    note: "Official 2023 appointment letter located in Drive.",
    url: "https://drive.google.com/file/d/1vB0ubmtQKWRs5brccOo8KsIkn_A623UH/view"
  },
  {
    folder: "csr",
    title: "CSR Ostrich Farm - March 2023",
    type: "CSR record",
    status: "SOURCE FOUND",
    year: "2023",
    domain: "leadership",
    isDH12: false,
    role: "Exact role to verify",
    note: "March 2023 CSR record located in Drive.",
    url: "https://drive.google.com/file/d/1kBuAaS3s7amUQOzLwHZFvweWRAFADg63/view"
  }
];

// 2. ROUTER ENGINE
const VIEWS = ["home", "about", "journey", "work", "dh13", "evidence"];

function handleRoute() {
  const hash = location.hash.trim();

  // Handle in-page anchor jumps (#shift, #master, etc.) without resetting view to home
  if (hash.startsWith("#") && !hash.startsWith("#/")) {
    const targetId = hash.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }

  // Parse SPA route: #/view/sub-target
  const rawPath = hash.replace(/^#\/?/, "") || "home";
  const [viewName, subTarget] = rawPath.split("/");
  const activeView = VIEWS.includes(viewName) ? viewName : "home";

  // Activate matching view
  document.querySelectorAll(".view").forEach(view => {
    view.classList.remove("active");
  });
  const activeViewElement = document.getElementById("view-" + activeView);
  if (activeViewElement) {
    activeViewElement.classList.add("active");
  }

  // Update global navigation styling & accessibility
  document.querySelectorAll(".global-nav nav a").forEach(link => {
    const linkRoute = link.getAttribute("href").replace(/^#\/?/, "");
    const isCurrent = linkRoute === activeView;
    link.classList.toggle("active", isCurrent);
    link.setAttribute("aria-current", isCurrent ? "page" : "false");
  });

  // Handle sub-route scrolling (e.g., #/journey/dh12-transition)
  if (activeView === "journey" && subTarget === "dh12-transition") {
    setTimeout(() => {
      document.getElementById("dh12-transition")?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("hashchange", handleRoute);

// 3. EVIDENCE DRAWER CONTROLLER
const drawer = document.getElementById("drawer");
const drawerTitle = document.getElementById("drawer-title");
const drawerBody = document.getElementById("drawer-body");
const closeBtn = document.getElementById("close");

function openFolder(folderKey) {
  if (!drawer) return;

  let records = RECORDS.filter(r => r.folder === folderKey);
  
  // Aggregate multi-service bucket
  if (folderKey === "service") {
    records = RECORDS.filter(r => ["ukkp", "rakan-muda", "csr"].includes(r.folder));
  }

  const formattedTitle = folderKey === "service"
    ? "INSTITUTIONAL & COMMUNITY SERVICE (2023)"
    : (folderKey || "2023 EVIDENCE").replaceAll("-", " ").toUpperCase();

  drawerTitle.textContent = formattedTitle;

  if (records.length === 0) {
    drawerBody.innerHTML = `<p class="drawer-empty">No verified records mapped to this folder yet.</p>`;
  } else {
    drawerBody.innerHTML = records.map(r => `
      <article class="drawer-record">
        <header class="drawer-record-header">
          <span class="status ${r.status.includes('VERIFIED') ? 'verified' : 'pending'}">${r.status}</span>
          <span class="record-year-tag">${r.year}</span>
        </header>
        <h4>${r.title}</h4>
        <p><strong>Evidence type:</strong> ${r.type}</p>
        <p><strong>Role:</strong> ${r.role}</p>
        <p class="record-note">${r.note}</p>
        ${r.url ? `
          <a class="btn btn-dark" target="_blank" rel="noopener noreferrer" href="${r.url}">
            Open Source in Google Drive &rarr;
          </a>
        ` : `
          <div class="drawer-placeholder">Visual evidence is embedded in this chapter.</div>
        `}
      </article>
    `).join("");
  }

  drawer.showModal();
}

if (closeBtn) {
  closeBtn.onclick = () => drawer.close();
}

// Close drawer if clicking outside the modal dialog (on the backdrop)
if (drawer) {
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) drawer.close();
  });
}

// 4. MASTER EVIDENCE FILTER ENGINE
function filterAndRenderMasterEvidence() {
  const container = document.getElementById("records");
  if (!container) return;

  const yearSelect = document.getElementById("year");
  const domainSelect = document.getElementById("domain");
  const dh12Checkbox = document.getElementById("dh12");

  const selectedYear = yearSelect ? yearSelect.value : "all";
  const selectedDomain = domainSelect ? domainSelect.value : "all";
  const onlyDH12 = dh12Checkbox ? dh12Checkbox.checked : false;

  const filtered = RECORDS.filter(r => {
    const matchYear = selectedYear === "all" || r.year === selectedYear;
    const matchDomain = selectedDomain === "all" || r.domain === selectedDomain;
    const matchDH12 = !onlyDH12 || r.isDH12;
    return matchYear && matchDomain && matchDH12;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-records">No records found matching the selected filter criteria.</p>`;
    return;
  }

  container.innerHTML = filtered.map(r => `
    <article class="evidence-card">
      <div class="card-badges">
        <span class="badge-lime">${r.year}</span>
        ${r.isDH12 ? `<span class="badge-dh12">&bull; DH12 ELIGIBLE</span>` : ""}
      </div>
      <h3>${r.title}</h3>
      <p class="card-meta"><strong>${r.type}</strong> &mdash; ${r.role}</p>
      <button type="button" class="btn btn-ghost" data-master-folder="${r.folder}">
        Inspect Evidence &rarr;
      </button>
    </article>
  `).join("");

  container.querySelectorAll("[data-master-folder]").forEach(btn => {
    btn.onclick = () => openFolder(btn.dataset.masterFolder);
  });
}

// 5. IN-PAGE SCROLL & BUTTON HANDLERS
function initInteractiveTriggers() {
  // Folder click triggers
  document.querySelectorAll("[data-folder]").forEach(el => {
    el.addEventListener("click", () => openFolder(el.dataset.folder));
  });

  // In-page smooth jumps
  document.querySelectorAll("[data-jump]").forEach(el => {
    el.addEventListener("click", () => {
      document.getElementById(el.dataset.jump)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Story map jump
  document.querySelector(".open-year-map")?.addEventListener("click", () => {
    document.getElementById("shift")?.scrollIntoView({ behavior: "smooth" });
  });

  // Wire up change events for evidence archive filters
  ["year", "domain", "dh12"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", filterAndRenderMasterEvidence);
    }
  });
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  handleRoute();
  initInteractiveTriggers();
  filterAndRenderMasterEvidence();
});
