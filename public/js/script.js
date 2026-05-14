const departmentMeta = {
  "CABE": { short: "CABE", color: "#e9c46a", logo: "./image/teams/CABE.png" },
  "CCIS": { short: "CCIS", color: "#457b9d", logo: "./image/teams/CCIS.jpg" },
  "CEDAS": { short: "CEDAS", color: "#e63946", logo: "./image/teams/CEDAS.jpg" },
  "COE": { short: "COE", color: "#f4a261", logo: "./image/teams/COE.jpg" },
  "CHS": { short: "CHS", color: "#ec4899", logo: "./image/teams/CHS.jpg" }
};

const eventData = [
  {
    title: "Basketball Semi Finals",
    category: "sports",
    status: "live",
    description: "Live elimination match with official table marshals and AI-assisted rules support on standby.",
    date: "May 15, 2026",
    time: "2:00 PM",
    venue: "Main Gymnasium",
    coordinator: "Athletics Committee",
    teams: ["CEDAS", "CCIS"]
  },
  {
    title: "Cheerdance Competition",
    category: "socio",
    status: "upcoming",
    description: "Department showcase highlighting choreography, synchronization, props, and crowd engagement.",
    date: "May 16, 2026",
    time: "8:00 AM",
    venue: "Covered Court",
    coordinator: "Culture and Arts Office",
    teams: ["CABE", "CCIS", "CEDAS", "COE", "CHS"]
  },
  {
    title: "Quiz Bee Finals",
    category: "academic",
    status: "completed",
    description: "Final academic faceoff with round-based scoring and live standings updates for advisers.",
    date: "May 14, 2026",
    time: "10:00 AM",
    venue: "Room 301",
    coordinator: "Academic Affairs",
    teams: ["CHS", "CEDAS"]
  },
  {
    title: "Mr. and Ms. Intramurals",
    category: "special",
    status: "upcoming",
    description: "Campus-wide pageant with live tallying, judging criteria guidance, and audience updates.",
    date: "May 16, 2026",
    time: "5:00 PM",
    venue: "College Auditorium",
    coordinator: "Student Engagement Office",
    teams: ["CABE", "CCIS", "CEDAS", "COE", "CHS"]
  },
  {
    title: "Volleyball Finals",
    category: "sports",
    status: "live",
    description: "Finals match with set-by-set publishing for the dashboard and announcement feed.",
    date: "May 15, 2026",
    time: "4:00 PM",
    venue: "Main Gymnasium",
    coordinator: "Athletics Committee",
    teams: ["COE", "CABE"]
  },
  {
    title: "Extemporaneous Speaking",
    category: "academic",
    status: "upcoming",
    description: "Timed speaking challenge with criteria-driven scoring sheets and instant finalist rankings.",
    date: "May 17, 2026",
    time: "1:30 PM",
    venue: "Speech Laboratory",
    coordinator: "English Department",
    teams: ["CCIS", "COE", "CHS"]
  }
];

const profileData = [
  {
    name: "Ariana Mendoza",
    department: "CEDAS",
    year: "2nd Year",
    age: 19,
    sex: "Female",
    division: "sports",
    events: ["Basketball", "Track and Field", "Cheerdance"]
  },
  {
    name: "Leonardo Cruz",
    department: "CCIS",
    year: "4th Year",
    age: 21,
    sex: "Male",
    division: "academic",
    events: ["Quiz Bee", "Debate", "Extemporaneous Speaking"]
  },
  {
    name: "Danica Flores",
    department: "CHS",
    year: "3rd Year",
    age: 20,
    sex: "Female",
    division: "socio",
    events: ["Cheerdance", "Folk Dance", "Poster Making"]
  },
  {
    name: "Miguel Santos",
    department: "COE",
    year: "1st Year",
    age: 18,
    sex: "Male",
    division: "sports",
    events: ["Volleyball", "Badminton"]
  },
  {
    name: "Jessa Robles",
    department: "CABE",
    year: "4th Year",
    age: 22,
    sex: "Female",
    division: "special",
    events: ["Mr. and Ms. Intramurals", "Cheerdance"]
  },
  {
    name: "Paolo Navarro",
    department: "CCIS",
    year: "2nd Year",
    age: 19,
    sex: "Male",
    division: "sports",
    events: ["Basketball", "Volleyball"]
  },
  {
    name: "Trisha Valdez",
    department: "CHS",
    year: "1st Year",
    age: 18,
    sex: "Female",
    division: "academic",
    events: ["Quiz Bee", "Essay Writing"]
  },
  {
    name: "Nathaniel Garcia",
    department: "COE",
    year: "3rd Year",
    age: 20,
    sex: "Male",
    division: "special",
    events: ["Mr. and Ms. Intramurals", "Spoken Poetry"]
  },
  {
    name: "Mariel Soriano",
    department: "CABE",
    year: "2nd Year",
    age: 19,
    sex: "Female",
    division: "sports",
    events: ["Volleyball", "Cheerdance"]
  },
  {
    name: "Julius Marquez",
    department: "CEDAS",
    year: "3rd Year",
    age: 20,
    sex: "Male",
    division: "academic",
    events: ["Quiz Bee", "Extemporaneous Speaking"]
  }
];

const attendanceRecords = {
  "Basketball Semi Finals": [
    { name: "Ariana Mendoza", department: "CEDAS", status: "Present" },
    { name: "Paolo Navarro", department: "CCIS", status: "Present" },
    { name: "Kevin Bautista", department: "CEDAS", status: "Late" },
    { name: "Jasmine Toledo", department: "CCIS", status: "Present" },
    { name: "Marco dela Cruz", department: "COE", status: "Present" }
  ],
  "Volleyball Finals": [
    { name: "Miguel Santos", department: "COE", status: "Present" },
    { name: "Mariel Soriano", department: "CABE", status: "Present" },
    { name: "Erika Padilla", department: "COE", status: "Late" },
    { name: "Sofia Ramos", department: "CABE", status: "Present" }
  ],
  "Cheerdance Competition": [
    { name: "Danica Flores", department: "CHS", status: "Present" },
    { name: "Jessa Robles", department: "CABE", status: "Present" },
    { name: "April de Mesa", department: "CCIS", status: "Present" },
    { name: "Nathaniel Garcia", department: "COE", status: "Late" },
    { name: "Ariana Mendoza", department: "CEDAS", status: "Present" }
  ],
  "Quiz Bee Finals": [
    { name: "Leonardo Cruz", department: "CCIS", status: "Present" },
    { name: "Trisha Valdez", department: "CHS", status: "Present" },
    { name: "Julius Marquez", department: "CEDAS", status: "Present" },
    { name: "Kimberly Tan", department: "CABE", status: "Absent" },
    { name: "Rafael Santos", department: "COE", status: "Present" }
  ]
};

const announcementData = [
  {
    type: "urgent",
    title: "Basketball Finals venue reassigned",
    copy: "Due to floor maintenance in the covered court, the Basketball Finals will be moved to the Main Gymnasium effective immediately.",
    time: "Today, 10:32 AM",
    audience: "All departments"
  },
  {
    type: "update",
    title: "Cheerdance costume inspection window",
    copy: "Costume and prop inspection will open at 7:00 AM outside the gym lobby. Team managers must report before warmups begin.",
    time: "Today, 8:15 AM",
    audience: "Socio-cultural participants"
  },
  {
    type: "info",
    title: "Official score sheets now available",
    copy: "Updated score sheets and event tallies have been uploaded to the reports section for advisers and tabulation officers.",
    time: "Yesterday, 4:00 PM",
    audience: "Coaches and officers"
  },
  {
    type: "result",
    title: "Quiz Bee champion confirmed",
    copy: "CEDAS secured the Quiz Bee championship after the lightning round. Final ranking details are now reflected in the standings module.",
    time: "Yesterday, 1:20 PM",
    audience: "Campus-wide"
  }
];

const chartData = [
  { label: "Day 1", value: 28, team: "CABE", color: "#e9c46a" },
  { label: "Day 2", value: 41, team: "CCIS", color: "#457b9d" },
  { label: "Day 3", value: 57, team: "CEDAS", color: "#e63946" },
  { label: "Day 4", value: 74, team: "COE", color: "#f4a261" },
  { label: "Day 5", value: 88, team: "CHS", color: "#ec4899" }
];

const appState = {
  activeSection: "dashboard",
  activeEventFilter: "all",
  activeAttendanceEvent: "Basketball Semi Finals"
};

let toastTimerId = null;

function getById(id) {
  return document.getElementById(id);
}

function savePreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    void error;
  }
}

function loadPreference(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    void error;
    return null;
  }
}

function getDepartment(name) {
  return departmentMeta[name] || { short: "CJC", color: "#c1121f", logo: "" };
}

function renderTeamLogo(team, sizeClass = "sm", extraClass = "") {
  const department = getDepartment(team);
  const className = extraClass ? ` ${extraClass}` : "";

  return `<img class="team-logo ${sizeClass}${className}" src="${department.logo}" alt="${team} logo" />`;
}

function renderTeamInline(team, sizeClass = "sm", extraClass = "") {
  const className = extraClass ? ` ${extraClass}` : "";

  return `
    <span class="team-inline${className}">
      ${renderTeamLogo(team, sizeClass)}
      <span>${team}</span>
    </span>
  `;
}

function formatCategoryLabel(value) {
  const labels = {
    sports: "Sports",
    socio: "Socio-cultural",
    academic: "Academic",
    special: "Special"
  };

  return labels[value] || value;
}

function formatStatusLabel(value) {
  const labels = {
    live: "Live",
    upcoming: "Upcoming",
    completed: "Completed"
  };

  return labels[value] || value;
}

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const fullHex = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;

  const value = Number.parseInt(fullHex, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  };
}

function shadeHex(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  const clamp = (value) => Math.max(0, Math.min(255, value + amount));

  return `#${[clamp(r), clamp(g), clamp(b)]
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("")}`;
}

function syncDashboardScores() {
  const scoreA = getById("score-a");
  const scoreB = getById("score-b");
  const scoreA1 = getById("scoreA1");
  const scoreB1 = getById("scoreB1");

  if (scoreA && scoreA1) {
    scoreA1.textContent = scoreA.textContent;
  }

  if (scoreB && scoreB1) {
    scoreB1.textContent = scoreB.textContent;
  }
}

function updateTallyTotal() {
  const inputs = [...document.querySelectorAll(".tally-input")];
  const totalElement = document.querySelector(".tally-total-val");

  if (!inputs.length || !totalElement) {
    return;
  }

  const average = inputs.reduce((sum, input) => sum + Number(input.value || 0), 0) / inputs.length;
  totalElement.textContent = average.toFixed(2);
}

function showToast(message) {
  const toast = getById("toast");

  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimerId) {
    clearTimeout(toastTimerId);
  }

  toastTimerId = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function closeAllOpenModals() {
  const openModals = [...document.querySelectorAll(".modal-overlay")]
    .filter((modal) => modal.style.display === "flex");

  openModals.forEach((modal) => {
    modal.style.display = "none";
  });

  if (!openModals.length) {
    return;
  }

  document.body.classList.remove("modal-open");
}

function getBotReply(query) {
  const normalized = query.toLowerCase();

  if (normalized.includes("dress") && normalized.includes("cheerdance")) {
    return "Cheerdance teams should wear coordinated, school-appropriate costumes, safe footwear, and approved props only. Final inspection happens before call time.";
  }

  if (normalized.includes("volleyball") && (normalized.includes("players") || normalized.includes("player"))) {
    return "A standard volleyball lineup uses 6 active players on court, with substitutes rotating based on the event guidelines and official score table approval.";
  }

  if (normalized.includes("late") || normalized.includes("tardiness")) {
    return "Teams marked late are subject to call-time penalties. A grace window may apply, but officials can forfeit or deduct points once the delay affects the event flow.";
  }

  if (normalized.includes("criteria") || normalized.includes("judging")) {
    return "Judged events usually combine technical execution, creativity, presentation, and overall impact. Use the source documents panel for the criteria version currently in force.";
  }

  if (normalized.includes("schedule")) {
    return "Use the Event Management and Upcoming Schedule sections for the latest sample timeline. The chatbot can explain event order, call times, and venue assignments.";
  }

  return "I can help with guidelines, call-time rules, judging criteria, or player eligibility. Ask a more specific question and I will answer using the sample rulebook context in this prototype.";
}

function addChatMessage(role, text) {
  const chatWindow = getById("chatWindow");

  if (!chatWindow) {
    return;
  }

  const message = document.createElement("div");
  message.className = `chat-msg ${role === "user" ? "user-msg" : "bot-msg"}`;

  if (role === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "chat-avatar bot-av";
    avatar.innerHTML = '<i class="fa-solid fa-robot"></i>';
    message.appendChild(avatar);
  }

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";

  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  bubble.appendChild(paragraph);
  message.appendChild(bubble);

  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function renderEvents() {
  const eventsGrid = getById("eventsGrid");

  if (!eventsGrid) {
    return;
  }

  const filteredEvents = appState.activeEventFilter === "all"
    ? eventData
    : eventData.filter((eventItem) => eventItem.category === appState.activeEventFilter);

  if (!filteredEvents.length) {
    eventsGrid.innerHTML = '<div class="event-empty">No events match the selected category.</div>';
    return;
  }

  eventsGrid.innerHTML = filteredEvents.map((eventItem) => `
    <article class="event-card">
      <div class="event-card-head">
        <span class="event-category ${eventItem.category}">${formatCategoryLabel(eventItem.category)}</span>
        <span class="event-status ${eventItem.status}">${formatStatusLabel(eventItem.status)}</span>
      </div>
      <h3 class="event-title">${eventItem.title}</h3>
      <p class="event-copy">${eventItem.description}</p>
      <div class="event-meta-grid">
        <div class="event-meta-item">
          <i class="fa-solid fa-calendar-days"></i>
          <span>${eventItem.date}</span>
        </div>
        <div class="event-meta-item">
          <i class="fa-solid fa-clock"></i>
          <span>${eventItem.time}</span>
        </div>
        <div class="event-meta-item">
          <i class="fa-solid fa-location-dot"></i>
          <span>${eventItem.venue}</span>
        </div>
      </div>
      <div class="event-teams">
        ${eventItem.teams.map((team) => `
          <span class="event-team-pill" style="--team-color:${getDepartment(team).color}">
            ${renderTeamInline(team, "xs", "compact")}
          </span>
        `).join("")}
      </div>
      <div class="event-card-footer">
        <span class="event-coordinator">Coordinator: ${eventItem.coordinator}</span>
        <button class="btn-sm primary" type="button" onclick="showToast('Opening event details...')">Details</button>
      </div>
    </article>
  `).join("");
}

function renderProfiles() {
  const profileGrid = getById("profileGrid");
  const searchInput = getById("profileSearch");
  const departmentFilter = getById("deptFilter");
  const yearFilter = getById("yearFilter");

  if (!profileGrid) {
    return;
  }

  const searchValue = (searchInput?.value || "").trim().toLowerCase();
  const departmentValue = departmentFilter?.value || "";
  const yearValue = yearFilter?.value || "";

  const filteredProfiles = profileData.filter((profile) => {
    const matchesSearch = !searchValue || [
      profile.name,
      profile.department,
      profile.year,
      profile.events.join(" ")
    ].join(" ").toLowerCase().includes(searchValue);

    const matchesDepartment = !departmentValue || profile.department === departmentValue;
    const matchesYear = !yearValue || profile.year === yearValue;

    return matchesSearch && matchesDepartment && matchesYear;
  });

  if (!filteredProfiles.length) {
    profileGrid.innerHTML = '<div class="profile-empty">No participants match the current filters.</div>';
    return;
  }

  profileGrid.innerHTML = filteredProfiles.map((profile) => {
    const department = getDepartment(profile.department);

    return `
      <article class="profile-card">
        <div class="profile-card-top">
          <div class="profile-avatar" style="--profile-color:${department.color}">
            ${renderTeamLogo(profile.department, "lg", "profile-avatar-logo")}
          </div>
          <div class="profile-heading">
            <h3 class="profile-name">${profile.name}</h3>
            <p class="profile-meta">${profile.department} - ${profile.year}</p>
          </div>
          <span class="profile-chip ${profile.division}">${formatCategoryLabel(profile.division)}</span>
        </div>
        <div class="profile-stats">
          <span>${profile.sex}</span>
          <span>Age ${profile.age}</span>
          <span>${profile.events.length} events</span>
        </div>
        <div class="profile-events">
          ${profile.events.map((eventName) => `<span class="profile-event-tag">${eventName}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function renderAttendance(eventName) {
  const records = attendanceRecords[eventName] || [];
  const tbody = getById("attTableBody");
  const title = getById("attEventTitle");
  const stats = document.querySelector(".att-stats");

  if (!tbody || !title || !stats) {
    return;
  }

  title.textContent = eventName;

  const counts = records.reduce((summary, attendee) => {
    const key = attendee.status.toLowerCase();
    summary[key] += 1;
    return summary;
  }, { present: 0, absent: 0, late: 0 });

  stats.innerHTML = `
    <span class="att-stat present">Present ${counts.present}</span>
    <span class="att-stat absent">Absent ${counts.absent}</span>
    <span class="att-stat late">Late ${counts.late}</span>
  `;

  tbody.innerHTML = records.map((attendee, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${attendee.name}</td>
      <td>${renderTeamInline(attendee.department, "xs")}</td>
      <td><span class="att-status-badge ${attendee.status.toLowerCase()}">${attendee.status}</span></td>
      <td>
        <div class="table-btn-group">
          <button class="table-action-btn present" type="button" onclick="markAttendance('${eventName}', ${index}, 'Present')">Present</button>
          <button class="table-action-btn late" type="button" onclick="markAttendance('${eventName}', ${index}, 'Late')">Late</button>
          <button class="table-action-btn absent" type="button" onclick="markAttendance('${eventName}', ${index}, 'Absent')">Absent</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function renderAnnouncements() {
  const announcementList = getById("annFullList");

  if (!announcementList) {
    return;
  }

  announcementList.innerHTML = announcementData.map((item) => `
    <article class="ann-card">
      <div class="ann-card-head">
        <span class="ann-card-type ${item.type}">${item.type}</span>
        <span class="match-period">${item.time}</span>
      </div>
      <h3 class="ann-card-title">${item.title}</h3>
      <p class="ann-card-copy">${item.copy}</p>
      <div class="ann-card-meta">
        <span><i class="fa-solid fa-bullhorn"></i> ${item.audience}</span>
        <span><i class="fa-solid fa-star"></i> Published by CSG Office</span>
      </div>
    </article>
  `).join("");
}

function renderBarChart() {
  const chart = getById("barChart");

  if (!chart) {
    return;
  }

  const highestValue = Math.max(...chartData.map((item) => item.value));

  chart.innerHTML = chartData.map((item) => `
    <div class="bar-col">
      <span class="bar-value">${item.value}</span>
      <div class="bar-track">
        <div
          class="bar-fill"
          style="height:${Math.max(18, (item.value / highestValue) * 100)}%; --bar-color:${item.color};"
        ></div>
      </div>
      <span class="bar-team">${item.team}</span>
    </div>
  `).join("");
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  getById("themeLight")?.classList.toggle("active", theme === "light");
  getById("themeDark")?.classList.toggle("active", theme === "dark");
  savePreference("cjc-theme", theme);
}

function setAccent(hex, swatchElement) {
  const { r, g, b } = hexToRgb(hex);
  const root = document.documentElement;

  root.style.setProperty("--primary", hex);
  root.style.setProperty("--primary-dark", shadeHex(hex, -42));
  root.style.setProperty("--primary-soft", `rgba(${r}, ${g}, ${b}, 0.14)`);
  root.style.setProperty("--primary-rgb", `${r}, ${g}, ${b}`);

  document.querySelectorAll(".swatch").forEach((swatch) => {
    const inlineStyle = (swatch.getAttribute("style") || "").toLowerCase();
    const matchesTarget = swatchElement
      ? swatch === swatchElement
      : inlineStyle.includes(hex.toLowerCase());

    swatch.classList.toggle("active", matchesTarget);
  });

  savePreference("cjc-accent", hex);
}

function openModal(id) {
  const modal = getById(id);

  if (!modal) {
    return;
  }

  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = getById(id);

  if (!modal) {
    return;
  }

  modal.style.display = "none";

  const hasOpenModal = [...document.querySelectorAll(".modal-overlay")]
    .some((overlay) => overlay.style.display === "flex");

  if (!hasOpenModal) {
    document.body.classList.remove("modal-open");
  }
}

function closeMobileSidebar() {
  const sidebar = getById("sidebar");
  const overlay = getById("mobileOverlay");

  sidebar?.classList.remove("active");

  if (overlay) {
    overlay.style.display = "none";
  }
}

function openMobileSidebar() {
  const sidebar = getById("sidebar");
  const overlay = getById("mobileOverlay");

  sidebar?.classList.add("active");

  if (overlay) {
    overlay.style.display = "block";
  }
}

function activateSection(sectionName) {
  const navItems = [...document.querySelectorAll(".nav-item")];
  const sections = [...document.querySelectorAll(".section")];
  const breadcrumb = getById("breadcrumbSection");

  appState.activeSection = sectionName;

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === sectionName);
  });

  sections.forEach((section) => {
    section.classList.toggle("active", section.id === `section-${sectionName}`);
  });

  const activeNav = navItems.find((item) => item.dataset.section === sectionName);
  if (activeNav && breadcrumb) {
    const label = activeNav.querySelector("span");
    breadcrumb.textContent = label ? label.textContent : "Dashboard";
  }

  if (window.innerWidth <= 920) {
    closeMobileSidebar();
  }
}

function insertSuggestion(button) {
  const input = getById("chatInput");

  if (!input) {
    return;
  }

  input.value = button.textContent || "";
  input.focus();
}

function filterProfiles() {
  renderProfiles();
}

function selectAttEvent(element, eventName) {
  document.querySelectorAll(".att-event-item").forEach((item) => {
    item.classList.remove("active");
  });

  element.classList.add("active");
  appState.activeAttendanceEvent = eventName;
  renderAttendance(eventName);
}

function markAttendance(eventName, index, status) {
  const records = attendanceRecords[eventName];

  if (!records || !records[index]) {
    return;
  }

  records[index].status = status;
  renderAttendance(eventName);
  showToast(`${records[index].name} marked ${status}.`);
}

function changeScore(elementId, delta) {
  const scoreElement = getById(elementId);

  if (!scoreElement) {
    return;
  }

  const currentScore = Number.parseInt(scoreElement.textContent, 10) || 0;
  const nextScore = Math.max(0, currentScore + delta);
  scoreElement.textContent = String(nextScore);
  syncDashboardScores();
}

function animateCounters() {
  document.querySelectorAll(".counter").forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    let value = 0;
    const increment = Math.max(1, Math.ceil(target / 45));

    const tick = () => {
      value = Math.min(target, value + increment);
      counter.textContent = String(value);

      if (value < target) {
        window.requestAnimationFrame(tick);
      }
    };

    tick();
  });
}

function updateDate() {
  const liveDate = getById("liveDate");

  if (!liveDate) {
    return;
  }

  const now = new Date();
  liveDate.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navItems = [...document.querySelectorAll(".nav-item")];
  const cardLinks = [...document.querySelectorAll(".card-link[data-section]")];
  const filterTabs = [...document.querySelectorAll(".filter-tab")];
  const chatInput = getById("chatInput");
  const chatSendBtn = getById("chatSendBtn");
  const notifBtn = getById("notifBtn");
  const notifDropdown = getById("notifDropdown");
  const mobileMenuBtn = getById("mobileMenuBtn");
  const sidebarToggle = getById("sidebarToggle");

  renderEvents();
  renderProfiles();
  renderAttendance(appState.activeAttendanceEvent);
  renderAnnouncements();
  renderBarChart();
  updateDate();
  animateCounters();
  updateTallyTotal();
  syncDashboardScores();

  window.setInterval(updateDate, 60000);

  document.querySelectorAll(".score-display").forEach((display) => {
    display.dataset.initial = display.textContent.trim();
  });

  document.querySelectorAll(".active-match .btn-sm.secondary").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".active-match");
      if (!card) {
        return;
      }

      card.querySelectorAll(".score-display").forEach((display) => {
        display.textContent = display.dataset.initial || "0";
      });

      syncDashboardScores();
      showToast("Live score reset.");
    });
  });

  document.querySelectorAll(".tally-input").forEach((input) => {
    input.addEventListener("input", updateTallyTotal);
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      activateSection(item.dataset.section);
    });
  });

  cardLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      activateSection(link.dataset.section);
    });
  });

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((button) => button.classList.remove("active"));
      tab.classList.add("active");
      appState.activeEventFilter = tab.dataset.filter;
      renderEvents();
    });
  });

  getById("profileSearch")?.addEventListener("input", renderProfiles);
  getById("deptFilter")?.addEventListener("change", renderProfiles);
  getById("yearFilter")?.addEventListener("change", renderProfiles);

  if (chatInput && chatSendBtn) {
    const sendChatMessage = () => {
      const text = chatInput.value.trim();

      if (!text) {
        return;
      }

      addChatMessage("user", text);
      chatInput.value = "";

      window.setTimeout(() => {
        addChatMessage("bot", getBotReply(text));
      }, 500);
    };

    chatSendBtn.addEventListener("click", sendChatMessage);
    chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendChatMessage();
      }
    });
  }

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      notifDropdown.classList.toggle("show");
    });

    notifDropdown.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener("click", () => {
    notifDropdown?.classList.remove("show");
  });

  [mobileMenuBtn, sidebarToggle].forEach((button) => {
    button?.addEventListener("click", () => {
      const sidebar = getById("sidebar");
      if (!sidebar) {
        return;
      }

      if (sidebar.classList.contains("active")) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    });
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllOpenModals();
      closeMobileSidebar();
      notifDropdown?.classList.remove("show");
    }
  });

  setTheme(loadPreference("cjc-theme") || "light");
  setAccent(loadPreference("cjc-accent") || "#c1121f");
});

window.showToast = showToast;
window.openModal = openModal;
window.closeModal = closeModal;
window.setTheme = setTheme;
window.setAccent = setAccent;
window.closeMobileSidebar = closeMobileSidebar;
window.insertSuggestion = insertSuggestion;
window.filterProfiles = filterProfiles;
window.selectAttEvent = selectAttEvent;
window.markAttendance = markAttendance;
window.changeScore = changeScore;
