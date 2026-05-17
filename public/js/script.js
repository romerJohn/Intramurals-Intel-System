const departmentMeta = {
  CABE: { short: "CABE", color: "#e9c46a", logo: "./image/teams/CABE.png" },
  CCIS: { short: "CCIS", color: "#457b9d", logo: "./image/teams/CCIS.jpg" },
  CEDAS: { short: "CEDAS", color: "#e63946", logo: "./image/teams/CEDAS.jpg" },
  COE: { short: "COE", color: "#f4a261", logo: "./image/teams/COE.jpg" },
  CHS: { short: "CHS", color: "#ec4899", logo: "./image/teams/CHS.jpg" }
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

const scheduleData = [
  {
    day: "THU",
    date: "15",
    title: "Cheerdance Competition",
    meta: "Main Gym - 8:00 AM",
    badge: "All Teams",
    badgeClass: "",
    eventDate: "May 15, 2026",
    time: "8:00 AM",
    venue: "Main Gym"
  },
  {
    day: "THU",
    date: "15",
    title: "Basketball Finals",
    meta: "Covered Court - 2:00 PM",
    badge: "Sports",
    badgeClass: "sport",
    eventDate: "May 15, 2026",
    time: "2:00 PM",
    venue: "Covered Court"
  },
  {
    day: "FRI",
    date: "16",
    title: "Mr. and Ms. Intramurals",
    meta: "Auditorium - 5:00 PM",
    badge: "Special",
    badgeClass: "special",
    eventDate: "May 16, 2026",
    time: "5:00 PM",
    venue: "Auditorium"
  },
  {
    day: "FRI",
    date: "16",
    title: "Quiz Bee Finals",
    meta: "Room 301 - 10:00 AM",
    badge: "Academic",
    badgeClass: "academic",
    eventDate: "May 16, 2026",
    time: "10:00 AM",
    venue: "Room 301"
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
    copy: "Due to floor maintenance in the covered court, the Basketball Finals will move to the Main Gymnasium effective immediately.",
    time: "Today, 10:32 AM",
    audience: "All departments"
  },
  {
    type: "update",
    title: "Cheerdance costume inspection window",
    copy: "Costume and prop inspection opens at 7:00 AM outside the gym lobby. Team managers must report before warmups begin.",
    time: "Today, 8:15 AM",
    audience: "Socio-cultural participants"
  },
  {
    type: "info",
    title: "Official score sheets now available",
    copy: "Updated score sheets and event tallies are available in the reports section for advisers and tabulation officers.",
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

const guidelineRecords = [
  {
    id: 1,
    title: "Official Intramurals Rulebook",
    category: "general",
    event: "General Intramurals",
    updated: "May 10, 2026",
    summary: "Core eligibility, attendance, protest, and code of conduct policies for all departments."
  },
  {
    id: 2,
    title: "Sports Events Guidelines",
    category: "sports",
    event: "Basketball and Volleyball",
    updated: "May 12, 2026",
    summary: "Approved player counts, substitutions, timing rules, and match verification procedures."
  },
  {
    id: 3,
    title: "Socio-Cultural Criteria",
    category: "socio",
    event: "Cheerdance Competition",
    updated: "May 11, 2026",
    summary: "Dress code, props policy, choreography standards, and adjudication scoring criteria."
  },
  {
    id: 4,
    title: "Academic Events Handbook",
    category: "academic",
    event: "Quiz Bee",
    updated: "May 9, 2026",
    summary: "Round structure, tiebreak procedures, appeals flow, and official scoring references."
  }
];

const chartData = [
  { label: "Day 1", value: 28, team: "CABE", color: "#e9c46a" },
  { label: "Day 2", value: 41, team: "CCIS", color: "#457b9d" },
  { label: "Day 3", value: 57, team: "CEDAS", color: "#e63946" },
  { label: "Day 4", value: 74, team: "COE", color: "#f4a261" },
  { label: "Day 5", value: 88, team: "CHS", color: "#ec4899" }
];

const standingsData = [
  { team: "CEDAS", wins: 12, losses: 3, gold: 7, silver: 4, bronze: 3, points: 142 },
  { team: "CCIS", wins: 10, losses: 5, gold: 5, silver: 6, bronze: 2, points: 129 },
  { team: "COE", wins: 9, losses: 6, gold: 4, silver: 3, bronze: 5, points: 118 },
  { team: "CHS", wins: 8, losses: 7, gold: 2, silver: 3, bronze: 4, points: 107 },
  { team: "CABE", wins: 7, losses: 8, gold: 2, silver: 2, bronze: 3, points: 91 }
];

const liveMatches = {
  basketballSemi: {
    id: "basketballSemi",
    event: "Basketball Semi Finals",
    shortEvent: "Basketball - Semi Finals",
    home: "CEDAS",
    away: "CCIS",
    homeScore: 58,
    awayScore: 51,
    scoreMeta: "Q3 · 04:22",
    periodLabel: "Q3 - 4:22 remaining"
  },
  volleyballFinals: {
    id: "volleyballFinals",
    event: "Volleyball Finals",
    shortEvent: "Volleyball - Finals",
    home: "COE",
    away: "CABE",
    homeScore: 14,
    awayScore: 11,
    scoreMeta: "Set 2 · 14-11",
    periodLabel: "Set 2 of 3"
  },
  badmintonQuarterfinal: {
    id: "badmintonQuarterfinal",
    event: "Badminton Quarterfinals",
    shortEvent: "Badminton - Quarterfinals",
    home: "CHS",
    away: "CEDAS",
    homeScore: 17,
    awayScore: 14,
    scoreMeta: "Game 1",
    periodLabel: "Game 1"
  }
};

const defaultLiveMatches = JSON.parse(JSON.stringify(liveMatches));

const scoreControlMap = {
  "score-a": { matchId: "basketballSemi", side: "home" },
  "score-b": { matchId: "basketballSemi", side: "away" },
  "score-c": { matchId: "volleyballFinals", side: "home" },
  "score-d": { matchId: "volleyballFinals", side: "away" }
};

const categoryClassMap = {
  general: "special",
  sports: "sports",
  socio: "socio",
  academic: "academic",
  special: "special"
};

const appState = {
  activeSection: "dashboard",
  activeEventFilter: "all",
  activeAttendanceEvent: "Basketball Semi Finals",
  authMode: "login",
  currentRole: "admin",
  currentUser: {
    name: "CSG Officer",
    email: "csg@cjc.edu.ph"
  },
  pendingScan: null
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

function getDepartment(team) {
  return departmentMeta[team] || { short: team, color: "#c1121f", logo: "" };
}

function renderTeamLogo(team, sizeClass = "sm", extraClass = "") {
  const department = getDepartment(team);
  const extra = extraClass ? ` ${extraClass}` : "";
  return `<img class="team-logo ${sizeClass}${extra}" src="${department.logo}" alt="${team} logo" />`;
}

function renderTeamInline(team, sizeClass = "sm", extraClass = "") {
  const extra = extraClass ? ` ${extraClass}` : "";
  return `
    <span class="team-inline${extra}">
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
    special: "Special",
    general: "General"
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
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "CJC";
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

  if (openModals.length) {
    document.body.classList.remove("modal-open");
  }
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
  getById("sidebar")?.classList.remove("active");
  const overlay = getById("mobileOverlay");

  if (overlay) {
    overlay.style.display = "none";
  }
}

function openMobileSidebar() {
  getById("sidebar")?.classList.add("active");
  const overlay = getById("mobileOverlay");

  if (overlay) {
    overlay.style.display = "block";
  }
}

function getSortedStandings() {
  return [...standingsData].sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    if (b.gold !== a.gold) {
      return b.gold - a.gold;
    }

    return b.wins - a.wins;
  });
}

function renderDashboardRankings() {
  const rankingsList = getById("dashboardRankingsList");
  const studentStandingsPreview = getById("studentStandingsPreview");

  if (!rankingsList && !studentStandingsPreview) {
    return;
  }

  const sorted = getSortedStandings();
  const highestPoints = sorted[0]?.points || 1;

  const buildRow = (entry, index) => `
    <div class="rank-row ${index === 0 ? "rank-1" : index === 1 ? "rank-2" : index === 2 ? "rank-3" : ""}">
      <span class="rank-pos">${String(index + 1).padStart(2, "0")}</span>
      <span class="rank-badge">${renderTeamLogo(entry.team, "sm", "team-badge-logo")}</span>
      <div class="rank-info">
        <span class="rank-name">${entry.team}</span>
        <div class="rank-bar-wrap">
          <div class="rank-bar" style="width:${Math.round((entry.points / highestPoints) * 100)}%;background:${getDepartment(entry.team).color}"></div>
        </div>
      </div>
      <span class="rank-pts">${entry.points} pts</span>
    </div>
  `;

  if (rankingsList) {
    rankingsList.innerHTML = sorted.map(buildRow).join("");
  }

  if (studentStandingsPreview) {
    studentStandingsPreview.innerHTML = sorted.slice(0, 3).map(buildRow).join("");
  }

  const leader = sorted[0];
  const nextEvent = scheduleData[1];

  if (leader) {
    const leaderCode = getById("studentLeaderCode");
    const leaderPoints = getById("studentLeaderPoints");

    if (leaderCode) {
      leaderCode.textContent = leader.team;
    }

    if (leaderPoints) {
      leaderPoints.textContent = `${leader.points} pts overall`;
    }
  }

  if (nextEvent) {
    getById("studentNextEventDay")?.replaceChildren(document.createTextNode(nextEvent.date));
    getById("studentNextEventText")?.replaceChildren(document.createTextNode(`${nextEvent.title} - ${nextEvent.time}`));
  }
}

function renderDashboardMedalTable() {
  const tbody = getById("dashboardMedalTableBody");

  if (!tbody) {
    return;
  }

  const sorted = getSortedStandings();

  tbody.innerHTML = sorted.map((entry, index) => `
    <tr class="${index === 0 ? "top-row" : ""}">
      <td data-label="Rank"><span class="rank-badge-sm">${index + 1}</span></td>
      <td data-label="Department">${renderTeamInline(entry.team, "xs")}</td>
      <td class="gold-val" data-label="Gold">${entry.gold}</td>
      <td class="silver-val" data-label="Silver">${entry.silver}</td>
      <td class="bronze-val" data-label="Bronze">${entry.bronze}</td>
      <td data-label="Total"><strong>${entry.gold + entry.silver + entry.bronze}</strong></td>
    </tr>
  `).join("");
}

function renderStandingsSection() {
  const podium = getById("standingsPodium");
  const tbody = getById("standingsTableBody");

  if (!podium || !tbody) {
    return;
  }

  const sorted = getSortedStandings();
  const topThree = sorted.slice(0, 3);

  const heights = [100, 140, 70];
  const order = [1, 0, 2];
  const rankLabels = ["2", "1", "3"];

  podium.innerHTML = order.map((entryIndex, position) => {
    const entry = topThree[entryIndex];
    const color = getDepartment(entry.team).color;
    const gradientEnd = shadeHex(color, -52);
    const roleClass = entryIndex === 0 ? "first" : entryIndex === 1 ? "second" : "third";

    return `
      <div class="podium-slot ${roleClass}">
        ${entryIndex === 0 ? '<div class="podium-crown"><i class="fa-solid fa-crown"></i></div>' : ""}
        <div class="podium-avatar">${renderTeamLogo(entry.team, "lg", "podium-logo")}</div>
        <div class="podium-name">${entry.team}</div>
        <div class="podium-pts">${entry.points} pts</div>
        <div class="podium-block" style="height:${heights[position]}px; background:linear-gradient(180deg, ${color}, ${gradientEnd})">
          <span class="podium-rank">${rankLabels[position]}</span>
        </div>
      </div>
    `;
  }).join("");

  tbody.innerHTML = sorted.map((entry, index) => `
    <tr class="${index === 0 ? "highlight-row" : ""}">
      <td data-label="Position"><span class="pos-badge ${index === 0 ? "gold-pos" : index === 1 ? "silver-pos" : index === 2 ? "bronze-pos" : ""}">${index + 1}</span></td>
      <td data-label="Department">${renderTeamInline(entry.team, "xs")}</td>
      <td data-label="Wins">${entry.wins}</td>
      <td data-label="Losses">${entry.losses}</td>
      <td class="gold-val" data-label="Gold">${entry.gold}</td>
      <td class="silver-val" data-label="Silver">${entry.silver}</td>
      <td class="bronze-val" data-label="Bronze">${entry.bronze}</td>
      <td data-label="Points"><strong>${entry.points}</strong></td>
    </tr>
  `).join("");
}

function renderScheduleList(targetId, limit = scheduleData.length) {
  const target = getById(targetId);

  if (!target) {
    return;
  }

  target.innerHTML = scheduleData.slice(0, limit).map((item) => `
    <div class="schedule-item">
      <div class="sched-time">
        <span class="sched-day">${item.day}</span>
        <span class="sched-date">${item.date}</span>
      </div>
      <div class="sched-info">
        <span class="sched-title">${item.title}</span>
        <span class="sched-meta"><i class="fa-solid fa-location-dot"></i> ${item.meta}</span>
      </div>
      <span class="sched-badge ${item.badgeClass}">${item.badge}</span>
    </div>
  `).join("");
}

function renderAnnouncementPreview(targetId, limit = 3) {
  const target = getById(targetId);

  if (!target) {
    return;
  }

  target.innerHTML = announcementData.slice(0, limit).map((item) => `
    <div class="ann-item ${item.type === "urgent" ? "urgent" : ""}">
      <span class="ann-tag ${item.type === "urgent" ? "urgent" : item.type === "info" ? "info" : ""}">${item.type.toUpperCase()}</span>
      <div>
        <p>${item.title}</p>
        <small>${item.time}</small>
      </div>
    </div>
  `).join("");
}

function renderStudentDashboardScores() {
  const target = getById("studentDashboardScores");

  if (!target) {
    return;
  }

  target.innerHTML = Object.values(liveMatches).map((match) => `
    <div class="score-card">
      <div class="score-meta">
        <span class="score-event">${match.shortEvent}</span>
        <span class="score-timer">${match.scoreMeta}</span>
      </div>
      <div class="score-matchup">
        <div class="score-team">
          <span class="team-name">${renderTeamLogo(match.home, "sm")} ${match.home}</span>
          <span class="score-num">${match.homeScore}</span>
        </div>
        <span class="score-vs">VS</span>
        <div class="score-team right">
          <span class="score-num">${match.awayScore}</span>
          <span class="team-name">${renderTeamLogo(match.away, "sm")} ${match.away}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderStudentGuidelinesPreview() {
  const preview = getById("studentGuidelinesPreview");

  if (!preview) {
    return;
  }

  preview.innerHTML = guidelineRecords.slice(0, 3).map((record) => `
    <article class="guideline-preview-card">
      <span class="event-category ${categoryClassMap[record.category]}">${formatCategoryLabel(record.category)}</span>
      <h4>${record.title}</h4>
      <p>${record.summary}</p>
      <small>${record.event} - Updated ${record.updated}</small>
    </article>
  `).join("");
}

function renderSourceDocs() {
  const target = getById("sourceDocs");

  if (!target) {
    return;
  }

  target.innerHTML = guidelineRecords.slice(0, 3).map((record) => `
    <div class="source-doc">
      <i class="fa-solid fa-file-pdf"></i>
      <div>
        <span>${record.title}</span>
        <small>Updated ${record.updated}</small>
      </div>
    </div>
  `).join("");
}

function renderGuidelineRecords() {
  const target = getById("guidelineRecords");

  if (!target) {
    return;
  }

  const isAdmin = appState.currentRole === "admin";

  target.innerHTML = guidelineRecords.map((record) => `
    <article class="guideline-record">
      <div class="guideline-record-top">
        <span class="event-category ${categoryClassMap[record.category]}">${formatCategoryLabel(record.category)}</span>
        <span class="match-period">Updated ${record.updated}</span>
      </div>
      <h4>${record.title}</h4>
      <p>${record.summary}</p>
      <div class="guideline-record-meta">
        <span><i class="fa-solid fa-tag"></i> ${record.event}</span>
        <span><i class="fa-solid fa-file-lines"></i> Official PDF</span>
      </div>
      <div class="guideline-actions">
        <button class="btn-sm secondary" type="button" onclick="showToast('Opening guideline preview...')">Open</button>
        ${isAdmin ? `
          <button class="btn-sm secondary" type="button" onclick="editGuideline(${record.id})">Edit</button>
          <button class="btn-sm primary" type="button" onclick="deleteGuideline(${record.id})">Delete</button>
        ` : ""}
      </div>
    </article>
  `).join("");
}

function renderEvents() {
  const eventsGrid = getById("eventsGrid");

  if (!eventsGrid) {
    return;
  }

  const isAdmin = appState.currentRole === "admin";
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
          <span class="event-team-pill">
            ${renderTeamInline(team, "xs", "compact")}
          </span>
        `).join("")}
      </div>
      <div class="event-card-footer">
        <span class="event-coordinator">Coordinator: ${eventItem.coordinator}</span>
        <button class="btn-sm primary" type="button" onclick="showToast('${isAdmin ? "Opening event management..." : "Opening schedule details..."}')">${isAdmin ? "Manage" : "View"}</button>
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
      <td data-label="No.">${index + 1}</td>
      <td data-label="Name">${attendee.name}</td>
      <td data-label="Department">${renderTeamInline(attendee.department, "xs")}</td>
      <td data-label="Status"><span class="att-status-badge ${attendee.status.toLowerCase()}">${attendee.status}</span></td>
      <td data-label="Action">
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
        <div class="bar-fill" style="height:${Math.max(18, (item.value / highestValue) * 100)}%; --bar-color:${item.color};"></div>
      </div>
      <span class="bar-team">${item.team}</span>
    </div>
  `).join("");
}

function syncLiveScoreDisplays() {
  document.querySelectorAll("[data-score-match][data-score-side]").forEach((element) => {
    const { scoreMatch, scoreSide } = element.dataset;
    const match = liveMatches[scoreMatch];

    if (!match) {
      return;
    }

    const key = scoreSide === "home" ? "homeScore" : "awayScore";
    element.textContent = String(match[key]);
  });

  renderStudentDashboardScores();
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

function changeScore(elementId, delta) {
  const scoreInfo = scoreControlMap[elementId];

  if (!scoreInfo || appState.currentRole !== "admin") {
    return;
  }

  const match = liveMatches[scoreInfo.matchId];

  if (!match) {
    return;
  }

  const key = scoreInfo.side === "home" ? "homeScore" : "awayScore";
  match[key] = Math.max(0, match[key] + delta);
  syncLiveScoreDisplays();
}

function resetMatch(matchId) {
  if (!defaultLiveMatches[matchId]) {
    return;
  }

  liveMatches[matchId] = JSON.parse(JSON.stringify(defaultLiveMatches[matchId]));
  syncLiveScoreDisplays();
  showToast("Live score reset.");
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

function findScheduleItem(titleFragment) {
  return scheduleData.find((item) => item.title.toLowerCase().includes(titleFragment.toLowerCase()));
}

function getBotReply(query) {
  const normalized = query.toLowerCase();
  const standings = getSortedStandings();
  const leader = standings[0];
  const runnerUp = standings[1];
  const basketballMatch = liveMatches.basketballSemi;
  const finalsSchedule = findScheduleItem("Basketball Finals");
  const sportsGuidelines = guidelineRecords.find((record) => record.title.toLowerCase().includes("sports"));
  const cheerdanceGuidelines = guidelineRecords.find((record) => record.event.toLowerCase().includes("cheerdance"));

  if (normalized.includes("who is leading overall") || normalized.includes("leading overall") || normalized.includes("overall leader")) {
    return `${leader.team} is leading overall with ${leader.points} points, followed by ${runnerUp.team} with ${runnerUp.points}.`;
  }

  if ((normalized.includes("score") || normalized.includes("live score")) && (normalized.includes("cedas") && normalized.includes("ccis"))) {
    return `The verified live score for CEDAS vs CCIS is ${basketballMatch.homeScore}-${basketballMatch.awayScore} in the Basketball Semi Finals.`;
  }

  if (normalized.includes("when") && normalized.includes("basketball finals")) {
    return `The Basketball Finals is scheduled on ${finalsSchedule.eventDate} at ${finalsSchedule.time} in the ${finalsSchedule.venue}.`;
  }

  if ((normalized.includes("quiz bee") && normalized.includes("won")) || normalized.includes("who won the quiz bee")) {
    return "CEDAS won the Quiz Bee championship after the lightning round.";
  }

  if (normalized.includes("standings") || normalized.includes("ranking")) {
    return `Current top three are ${standings[0].team} with ${standings[0].points} points, ${standings[1].team} with ${standings[1].points}, and ${standings[2].team} with ${standings[2].points}.`;
  }

  if (normalized.includes("schedule")) {
    const nextTwo = scheduleData.slice(0, 2)
      .map((item) => `${item.title} on ${item.eventDate} at ${item.time}`)
      .join("; ");
    return `Upcoming schedule highlights: ${nextTwo}.`;
  }

  if (normalized.includes("dress") && normalized.includes("cheerdance")) {
    return `The Cheerdance guidelines require coordinated, school-appropriate costumes, safe footwear, and approved props only. Reference: ${cheerdanceGuidelines.title}.`;
  }

  if (normalized.includes("guideline") || normalized.includes("rulebook")) {
    return `The latest official documents include ${guidelineRecords[0].title}, ${sportsGuidelines.title}, and ${guidelineRecords[2].title}. Ask me about a specific event if you want a summary.`;
  }

  if (normalized.includes("result")) {
    return "Verified result records currently include the Quiz Bee championship for CEDAS and the live Basketball Semi Finals scoreboard for CEDAS vs CCIS.";
  }

  return "I can answer questions about official guidelines, live scores, match results, standings, and schedules. Try asking who is leading overall, the current CEDAS vs CCIS score, the basketball finals schedule, or the Quiz Bee winner.";
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

function updateDate() {
  const formatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  ["liveDate", "studentLiveDate"].forEach((id) => {
    const element = getById(id);
    if (element) {
      element.textContent = formatted;
    }
  });
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

function setAuthMode(mode) {
  appState.authMode = mode;
  document.querySelectorAll(".auth-mode-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });

  const isLogin = mode === "login";
  getById("authModeTag").textContent = isLogin ? "Login" : "Register";
  getById("authTitle").textContent = isLogin ? "Enter the Dashboard" : "Create Prototype Access";
  getById("authSubtitle").textContent = isLogin
    ? "Use any sample details below to continue. No real backend authentication is connected in this prototype."
    : "Registration is simulated for the prototype. Submit the form to open the dashboard with your selected role.";
  getById("authSubmitLabel").textContent = isLogin ? "Open Dashboard" : "Create Account";
}

function updateRoleOptionState() {
  document.querySelectorAll(".role-option").forEach((option) => {
    const input = option.querySelector("input[type='radio']");
    option.classList.toggle("active", Boolean(input?.checked));
  });
}

function showAuthScreen() {
  const selectedRole = document.querySelector(`input[name='userRole'][value='${appState.currentRole}']`);

  if (selectedRole) {
    selectedRole.checked = true;
    updateRoleOptionState();
  }

  const authName = getById("authName");
  const authEmail = getById("authEmail");

  if (authName) {
    authName.value = appState.currentUser.name;
  }

  if (authEmail) {
    authEmail.value = appState.currentUser.email;
  }

  getById("authShell")?.classList.remove("is-hidden");
  getById("appShell")?.classList.add("is-hidden");
  document.body.classList.remove("modal-open");
  closeAllOpenModals();
  closeMobileSidebar();
}

function updateNavGroups() {
  document.querySelectorAll(".nav-group-label").forEach((label) => {
    const nextList = label.nextElementSibling;

    if (!nextList || !nextList.classList.contains("nav-list")) {
      return;
    }

    const hasVisibleItems = [...nextList.children].some((item) => !item.hidden);
    label.hidden = !hasVisibleItems;
    nextList.hidden = !hasVisibleItems;
  });
}

function applyRoleCopy(role) {
  document.querySelectorAll("[data-role-copy]").forEach((element) => {
    const nextCopy = role === "admin" ? element.dataset.adminCopy : element.dataset.studentCopy;

    if (nextCopy) {
      element.textContent = nextCopy;
    }
  });
}

function applyRoleVisibility(role) {
  document.querySelectorAll("[data-role-visibility]").forEach((element) => {
    const roles = (element.dataset.roleVisibility || "")
      .split(" ")
      .filter(Boolean);

    element.hidden = !roles.includes(role);
  });

  document.querySelectorAll("[data-role-view]").forEach((element) => {
    element.hidden = element.dataset.roleView !== role;
  });

  updateNavGroups();
}

function updateUserChrome() {
  const roleProfiles = {
    admin: {
      defaultName: "CSG Officer",
      roleLabel: "Administrator",
      viewLabel: "Admin Only",
      email: "csg@cjc.edu.ph"
    },
    student: {
      defaultName: "Student Viewer",
      roleLabel: "Student View",
      viewLabel: "Student View",
      email: "viewer@cjc.edu.ph"
    }
  };

  const roleProfile = roleProfiles[appState.currentRole];
  const resolvedName = appState.currentUser.name || roleProfile.defaultName;
  const resolvedEmail = appState.currentUser.email || roleProfile.email;
  const initials = getInitials(resolvedName);

  getById("sidebarAvatarText").textContent = initials;
  getById("topbarAvatarText").textContent = initials;
  getById("sidebarUserName").textContent = resolvedName;
  getById("sidebarUserRole").textContent = roleProfile.roleLabel;
  getById("headerViewPill").textContent = roleProfile.viewLabel;
  const settingsNameInput = getById("settingsNameInput");
  const settingsEmailInput = getById("settingsEmailInput");

  if (settingsNameInput) {
    settingsNameInput.value = resolvedName;
  }

  if (settingsEmailInput) {
    settingsEmailInput.value = resolvedEmail;
  }

  const searchInput = getById("globalSearchInput");
  if (searchInput) {
    searchInput.placeholder = appState.currentRole === "admin"
      ? "Search events, participants, guidelines..."
      : "Search schedules, scores, announcements...";
  }
}

function activateSection(sectionName) {
  const navItems = [...document.querySelectorAll(".nav-item")].filter((item) => !item.hidden);
  const targetSection = getById(`section-${sectionName}`);

  if (!targetSection || targetSection.hidden) {
    sectionName = "dashboard";
  }

  appState.activeSection = sectionName;

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === sectionName);
  });

  document.querySelectorAll(".section").forEach((section) => {
    section.classList.toggle("active", section.id === `section-${sectionName}`);
  });

  const activeNav = navItems.find((item) => item.dataset.section === sectionName);
  const breadcrumb = getById("breadcrumbSection");

  if (activeNav && breadcrumb) {
    const label = activeNav.querySelector(".nav-label, span");
    breadcrumb.textContent = label ? label.textContent : "Dashboard";
  }

  if (window.innerWidth <= 920) {
    closeMobileSidebar();
  }
}

function enterApp(role, name, email) {
  appState.currentRole = role;
  appState.currentUser = {
    name: name || (role === "admin" ? "CSG Officer" : "Student Viewer"),
    email: email || (role === "admin" ? "csg@cjc.edu.ph" : "viewer@cjc.edu.ph")
  };

  document.body.dataset.userRole = role;
  applyRoleCopy(role);
  applyRoleVisibility(role);
  updateUserChrome();
  renderAll();

  getById("authShell")?.classList.add("is-hidden");
  getById("appShell")?.classList.remove("is-hidden");

  const nextSection = getById(`section-${appState.activeSection}`);
  activateSection(nextSection && !nextSection.hidden ? appState.activeSection : "dashboard");

  showToast(role === "admin" ? "Admin dashboard ready." : "Student dashboard ready.");
}

function handleAuthSubmit(event) {
  event.preventDefault();

  const roleInput = document.querySelector("input[name='userRole']:checked");
  const role = roleInput?.value === "student" ? "student" : "admin";
  const name = (getById("authName")?.value || "").trim();
  const email = (getById("authEmail")?.value || "").trim();

  if (appState.authMode === "register") {
    showToast("Prototype account created.");
  }

  enterApp(role, name, email);
}

function renderScannerState() {
  const scan = appState.pendingScan;
  const headerStatus = getById("scannerHeaderStatus");
  const badge = getById("scannerStatusBadge");
  const event = getById("scannerEvent");
  const teams = getById("scannerTeams");
  const scores = getById("scannerScores");
  const confidence = getById("scannerConfidence");
  const statusText = getById("scannerStatusText");
  const note = getById("scannerResultNote");
  const approveBtn = getById("approveScoreBtn");
  const rejectBtn = getById("rejectScoreBtn");

  if (!scan) {
    if (headerStatus) {
      headerStatus.textContent = "Pending Verification";
      headerStatus.className = "view-state-badge pending-state";
    }
    if (badge) {
      badge.textContent = "Pending Verification";
      badge.className = "status-badge pending-state";
    }
    if (event) event.textContent = "Awaiting scan";
    if (teams) teams.textContent = "-";
    if (scores) scores.textContent = "-";
    if (confidence) confidence.textContent = "-";
    if (statusText) statusText.textContent = "Pending Verification";
    if (note) note.textContent = "No simulated OCR result yet. Scan a score sheet image to continue.";
    if (approveBtn) approveBtn.disabled = true;
    if (rejectBtn) rejectBtn.disabled = true;
    return;
  }

  const badgeClass = scan.status === "Approved"
    ? "approved-state"
    : scan.status === "Rejected"
      ? "rejected-state"
      : "pending-state";

  if (headerStatus) {
    headerStatus.textContent = scan.status;
    headerStatus.className = `view-state-badge ${badgeClass}`;
  }

  if (badge) {
    badge.textContent = scan.status;
    badge.className = `status-badge ${badgeClass}`;
  }

  if (event) event.textContent = scan.event;
  if (teams) teams.textContent = `${scan.home} vs ${scan.away}`;
  if (scores) scores.textContent = `${scan.home}: ${scan.homeScore} | ${scan.away}: ${scan.awayScore}`;
  if (confidence) confidence.textContent = `${scan.confidence}%`;
  if (statusText) statusText.textContent = scan.status;
  if (note) {
    note.textContent = scan.status === "Approved"
      ? "Verified result published to live scores and standings."
      : scan.status === "Rejected"
        ? "Result rejected. Live scores and standings were not updated."
        : "Result is awaiting manual review before publishing.";
  }

  const isPending = scan.status === "Pending Verification";

  if (approveBtn) {
    approveBtn.disabled = !isPending;
  }

  if (rejectBtn) {
    rejectBtn.disabled = !isPending;
  }
}

function handleScoreSheetPreview(event) {
  const file = event.target.files?.[0];
  const image = getById("scoreSheetPreviewImage");
  const empty = getById("scannerPreviewEmpty");

  if (!image || !empty) {
    return;
  }

  if (!file) {
    image.removeAttribute("src");
    image.classList.remove("show");
    empty.hidden = false;
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    image.src = String(reader.result || "");
    image.classList.add("show");
    empty.hidden = true;
  };
  reader.readAsDataURL(file);
}

function clearScanner() {
  const upload = getById("scoreSheetUpload");
  const image = getById("scoreSheetPreviewImage");
  const empty = getById("scannerPreviewEmpty");

  if (upload) {
    upload.value = "";
  }

  if (image) {
    image.removeAttribute("src");
    image.classList.remove("show");
  }

  if (empty) {
    empty.hidden = false;
  }

  appState.pendingScan = null;
  renderScannerState();
}

function runScoreSheetScan() {
  const file = getById("scoreSheetUpload")?.files?.[0];

  if (!file) {
    showToast("Upload a score sheet image first.");
    return;
  }

  appState.pendingScan = {
    event: "Basketball Semi Finals",
    home: "CEDAS",
    away: "CCIS",
    homeScore: 78,
    awayScore: 74,
    confidence: 94,
    status: "Pending Verification"
  };

  renderScannerState();
  showToast("Score sheet scanned. Review the extracted result.");
}

function applyApprovedResultToStandings(scan) {
  const winner = scan.homeScore >= scan.awayScore ? scan.home : scan.away;
  const loser = winner === scan.home ? scan.away : scan.home;

  const winnerEntry = standingsData.find((entry) => entry.team === winner);
  const loserEntry = standingsData.find((entry) => entry.team === loser);

  if (winnerEntry) {
    winnerEntry.points += 3;
    winnerEntry.wins += 1;
  }

  if (loserEntry) {
    loserEntry.losses += 1;
  }
}

function approveScannedScore() {
  if (!appState.pendingScan || appState.pendingScan.status !== "Pending Verification") {
    return;
  }

  appState.pendingScan.status = "Approved";
  liveMatches.basketballSemi.homeScore = appState.pendingScan.homeScore;
  liveMatches.basketballSemi.awayScore = appState.pendingScan.awayScore;
  liveMatches.basketballSemi.scoreMeta = "Verified result";
  liveMatches.basketballSemi.periodLabel = "Final score after approval";
  applyApprovedResultToStandings(appState.pendingScan);
  syncLiveScoreDisplays();
  renderDashboardRankings();
  renderDashboardMedalTable();
  renderStandingsSection();
  renderScannerState();

  const verificationNote = getById("basketballVerificationNote");
  if (verificationNote) {
    verificationNote.textContent = "Approved scanner result is now published on the live board.";
  }

  showToast("Score approved and published");
}

function rejectScannedScore() {
  if (!appState.pendingScan || appState.pendingScan.status !== "Pending Verification") {
    return;
  }

  appState.pendingScan.status = "Rejected";
  renderScannerState();
  showToast("Scanned score rejected.");
}

function uploadGuidelinePrototype() {
  const titleInput = getById("guidelineTitleInput");
  const eventSelect = getById("guidelineEventSelect");

  const title = (titleInput?.value || "").trim() || "New Guidelines Draft";
  const eventName = eventSelect?.value || "General Intramurals";
  const category = eventName.toLowerCase().includes("basketball") || eventName.toLowerCase().includes("volleyball")
    ? "sports"
    : eventName.toLowerCase().includes("cheerdance")
      ? "socio"
      : eventName.toLowerCase().includes("quiz")
        ? "academic"
        : "general";

  guidelineRecords.unshift({
    id: Date.now(),
    title,
    category,
    event: eventName,
    updated: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    summary: "Prototype guideline upload record added from the frontend management panel."
  });

  if (titleInput) {
    titleInput.value = "";
  }

  renderGuidelineRecords();
  renderStudentGuidelinesPreview();
  renderSourceDocs();
  showToast("Guideline uploaded to the prototype library.");
}

function editGuideline(id) {
  const record = guidelineRecords.find((item) => item.id === id);

  if (!record) {
    return;
  }

  const titleInput = getById("guidelineTitleInput");
  const eventSelect = getById("guidelineEventSelect");

  if (titleInput) {
    titleInput.value = record.title;
  }

  if (eventSelect) {
    eventSelect.value = record.event;
  }

  activateSection("guidelines");
  showToast("Guideline loaded into the prototype editor.");
}

function deleteGuideline(id) {
  const index = guidelineRecords.findIndex((item) => item.id === id);

  if (index === -1) {
    return;
  }

  guidelineRecords.splice(index, 1);
  renderGuidelineRecords();
  renderStudentGuidelinesPreview();
  renderSourceDocs();
  showToast("Guideline removed from the prototype list.");
}

function renderAll() {
  renderEvents();
  renderProfiles();
  renderAttendance(appState.activeAttendanceEvent);
  renderAnnouncements();
  renderBarChart();
  renderDashboardRankings();
  renderDashboardMedalTable();
  renderStandingsSection();
  renderScheduleList("dashboardScheduleList", 4);
  renderScheduleList("studentSchedulePreview", 3);
  renderAnnouncementPreview("dashboardAnnouncementPreview", 3);
  renderAnnouncementPreview("studentAnnouncementsPreview", 3);
  renderStudentDashboardScores();
  renderStudentGuidelinesPreview();
  renderGuidelineRecords();
  renderSourceDocs();
  syncLiveScoreDisplays();
  updateDate();
  renderScannerState();
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
  const authForm = getById("authForm");
  const authModeButtons = [...document.querySelectorAll(".auth-mode-btn")];
  const roleSwitchButtons = [getById("switchRoleBtn"), getById("sidebarRoleSwitchBtn")];

  renderAll();
  animateCounters();
  updateTallyTotal();
  updateRoleOptionState();
  setAuthMode("login");

  authModeButtons.forEach((button) => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode || "login"));
  });

  document.querySelectorAll("input[name='userRole']").forEach((input) => {
    input.addEventListener("change", updateRoleOptionState);
  });

  authForm?.addEventListener("submit", handleAuthSubmit);

  navItems.forEach((item) => {
    item.addEventListener("click", () => activateSection(item.dataset.section));
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
      appState.activeEventFilter = tab.dataset.filter || "all";
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
      }, 450);
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

  roleSwitchButtons.forEach((button) => {
    button?.addEventListener("click", showAuthScreen);
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  document.querySelectorAll("[data-reset-match]").forEach((button) => {
    button.addEventListener("click", () => {
      resetMatch(button.dataset.resetMatch || "");
    });
  });

  document.querySelectorAll(".tally-input").forEach((input) => {
    input.addEventListener("input", updateTallyTotal);
  });

  getById("scoreSheetUpload")?.addEventListener("change", handleScoreSheetPreview);
  getById("clearScannerBtn")?.addEventListener("click", clearScanner);
  getById("scanScoreBtn")?.addEventListener("click", runScoreSheetScan);
  getById("approveScoreBtn")?.addEventListener("click", approveScannedScore);
  getById("rejectScoreBtn")?.addEventListener("click", rejectScannedScore);
  getById("guidelineUploadBtn")?.addEventListener("click", uploadGuidelinePrototype);
  getById("exportPdfBtn")?.addEventListener("click", () => showToast("PDF report generated successfully"));
  getById("exportExcelBtn")?.addEventListener("click", () => showToast("Excel report generated successfully"));

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
window.editGuideline = editGuideline;
window.deleteGuideline = deleteGuideline;
