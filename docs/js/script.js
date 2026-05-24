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

const participantImportRecords = [
  {
    id: 1,
    fileName: "CEDAS_Masterlist_May2026.pdf",
    source: "Department Masterlist",
    imported: 82,
    linkedPhotos: 54,
    status: "Imported",
    uploaded: "Today, 9:10 AM"
  },
  {
    id: 2,
    fileName: "QuizBee_Participants.xlsx",
    source: "Participant Registration Sheet",
    imported: 16,
    linkedPhotos: 11,
    status: "Imported",
    uploaded: "Yesterday, 4:28 PM"
  }
];

const participantPhotoLinks = [
  {
    id: 1,
    name: "Ariana Mendoza",
    department: "CEDAS",
    photoName: "ariana-mendoza.jpg",
    status: "Linked",
    updated: "Today, 9:24 AM"
  },
  {
    id: 2,
    name: "Leonardo Cruz",
    department: "CCIS",
    photoName: "leonardo-cruz.jpg",
    status: "Linked",
    updated: "Today, 9:26 AM"
  },
  {
    id: 3,
    name: "Miguel Santos",
    department: "COE",
    photoName: "pending-upload.png",
    status: "Pending",
    updated: "Today, 9:35 AM"
  }
];

const judgeAssignments = [
  {
    id: 1,
    event: "Basketball Semi Finals",
    scorer: "Janelle Orquia",
    judge: "Arman Velasco",
    access: "Live score encoder"
  },
  {
    id: 2,
    event: "Cheerdance Competition",
    scorer: "Maria Lopez",
    judge: "Panel 1",
    access: "Criteria tally input"
  },
  {
    id: 3,
    event: "Quiz Bee Finals",
    scorer: "Neil Fernandez",
    judge: "Academic Board",
    access: "Result confirmation"
  }
];

const disputeRecords = [
  {
    id: 1,
    event: "Quiz Bee Finals",
    department: "CHS",
    submittedBy: "Coach Marissa Tan",
    concern: "Requested review of the tie-break answer credit on the final question.",
    evidence: "Answer sheet photo attached",
    status: "Pending"
  },
  {
    id: 2,
    event: "Basketball Semi Finals",
    department: "CCIS",
    submittedBy: "Coach Allan Dizon",
    concern: "Asked to validate a late third-quarter score adjustment before posting.",
    evidence: "Bench scorer note",
    status: "Under Review"
  }
];

const qrScanLogs = [
  {
    id: 1,
    name: "Paolo Navarro",
    department: "CCIS",
    event: "Basketball Semi Finals",
    time: "2:06 PM",
    device: "Mobile Camera Scanner",
    status: "Present"
  },
  {
    id: 2,
    name: "Miguel Santos",
    department: "COE",
    event: "Volleyball Finals",
    time: "3:41 PM",
    device: "Registration Tablet",
    status: "Present"
  }
];

const galleryHighlights = [
  {
    id: 1,
    title: "CEDAS takes the Quiz Bee crown",
    event: "Quiz Bee Finals",
    caption: "The lightning round wrapped with a decisive final answer as the academic hall erupted in cheers.",
    time: "Yesterday",
    accent: "#e63946"
  },
  {
    id: 2,
    title: "Cheerdance warmups fill the covered court",
    event: "Cheerdance Competition",
    caption: "Teams completed costume checks and synced final formations before the crowd entered.",
    time: "Today",
    accent: "#457b9d"
  },
  {
    id: 3,
    title: "Volleyball finals momentum swings",
    event: "Volleyball Finals",
    caption: "COE and CABE traded runs in the second set as table officials logged every point change.",
    time: "Today",
    accent: "#f4a261"
  }
];

const feedbackEntries = [
  {
    id: 1,
    name: "Trisha Valdez",
    role: "Student / Viewer",
    topic: "Live Scores",
    rating: 5,
    message: "The scoreboard refreshed quickly after approval and was easy to read on mobile.",
    time: "Today, 9:42 AM",
    status: "Published"
  },
  {
    id: 2,
    name: "Coach Allan Dizon",
    role: "Department Representative",
    topic: "Guidelines Access",
    rating: 4,
    message: "Rules were easy to find, but adding event-specific summary notes would help coaches prepare faster.",
    time: "Today, 8:12 AM",
    status: "Published"
  },
  {
    id: 3,
    name: "Danica Flores",
    role: "Student / Viewer",
    topic: "Announcements",
    rating: 5,
    message: "Announcements helped us adjust quickly when the finals venue changed.",
    time: "Yesterday, 5:30 PM",
    status: "Published"
  }
];

const auditTrailRecords = [
  {
    id: 1,
    time: "Today, 10:41 AM",
    actor: "CSG Officer",
    action: "Approved Basketball Semi Finals OCR result",
    module: "Score Sheet Scanner",
    status: "Approved"
  },
  {
    id: 2,
    time: "Today, 9:24 AM",
    actor: "CSG Officer",
    action: "Linked participant photo to Ariana Mendoza",
    module: "Participant Profiles",
    status: "Linked"
  },
  {
    id: 3,
    time: "Yesterday, 4:28 PM",
    actor: "CSG Officer",
    action: "Imported Quiz Bee participant file",
    module: "Participant Profiles",
    status: "Imported"
  }
];

const backupSnapshots = [
  {
    id: 1,
    label: "Daily Snapshot",
    time: "Today, 6:00 AM",
    status: "Ready"
  },
  {
    id: 2,
    label: "Pre-Finals Backup",
    time: "Yesterday, 7:30 PM",
    status: "Ready"
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

const aiFilePurposeConfigs = {
  guidelines: {
    label: "Guidelines",
    moduleSection: "guidelines",
    moduleLabel: "Guidelines",
    pendingTitle: "Pending Guideline Confirmation",
    summary: "Extracted eligibility rules, protest windows, attire reminders, safety notes, and event conduct policies.",
    recordTitle: "AI Prepared Intramurals Guidelines",
    icon: "fa-file-lines"
  },
  "participant-list": {
    label: "Participant List",
    moduleSection: "profiles",
    moduleLabel: "Participants",
    pendingTitle: "Pending Participant Import Confirmation",
    summary: "Extracted 32 participant entries with departments, year levels, event assignments, and duplicate-name checks.",
    recordTitle: "AI Participant Import",
    icon: "fa-users"
  },
  "participant-photos": {
    label: "Participant Photos",
    moduleSection: "profiles",
    moduleLabel: "Participant Profiles",
    pendingTitle: "Pending Photo Linking Confirmation",
    summary: "Matched uploaded photo names to participant records and flagged three high-confidence profile links.",
    recordTitle: "AI Photo Matching Batch",
    icon: "fa-id-card"
  },
  "tally-sheet": {
    label: "Tally Sheet",
    moduleSection: "scoring",
    moduleLabel: "Scoring",
    pendingTitle: "Pending Tally Sheet Confirmation",
    summary: "Extracted a Cheerdance scoring template with synchronization, choreography, costumes, props, and crowd impact criteria.",
    recordTitle: "AI Tally Criteria",
    icon: "fa-scale-balanced"
  },
  "score-sheet-image": {
    label: "Score Sheet Image",
    moduleSection: "scoring",
    moduleLabel: "Real-Time Scoring",
    pendingTitle: "Pending Score Verification",
    summary: "Extracted Basketball Semi Finals scores: CEDAS 81, CCIS 76, with a verification confidence of 94%.",
    recordTitle: "AI Score Sheet Extraction",
    icon: "fa-stopwatch"
  },
  "event-highlights": {
    label: "Event Highlights",
    moduleSection: "gallery",
    moduleLabel: "Gallery",
    pendingTitle: "Pending Highlight Approval",
    summary: "Prepared a highlight caption, event tag, and publish-ready gallery entry for the uploaded media.",
    recordTitle: "AI Event Highlight",
    icon: "fa-images"
  },
  announcement: {
    label: "Announcement",
    moduleSection: "announcements",
    moduleLabel: "Announcements",
    pendingTitle: "Pending Announcement Approval",
    summary: "Formatted the message for campus-wide posting with a concise title, audience label, and announcement copy.",
    recordTitle: "AI Formatted Announcement",
    icon: "fa-bullhorn"
  },
  "published-results": {
    label: "Published Results",
    moduleSection: "standings",
    moduleLabel: "Standings/Public Results",
    pendingTitle: "Pending Results Verification",
    summary: "Extracted final rankings and winners: CEDAS first, CCIS second, COE third, pending verification before publication.",
    recordTitle: "AI Published Results Import",
    icon: "fa-trophy"
  },
  other: {
    label: "Other Intramurals Document",
    moduleSection: "",
    moduleLabel: "Route after review",
    pendingTitle: "Pending General Document Routing",
    summary: "Extracted a general intramurals summary with dates, responsible committees, action items, and possible destination modules.",
    recordTitle: "AI General Document Summary",
    icon: "fa-file-circle-question"
  }
};

const aiOtherRouteOptions = [
  "guidelines",
  "participant-list",
  "participant-photos",
  "tally-sheet",
  "score-sheet-image",
  "event-highlights",
  "announcement",
  "published-results"
];

const pendingAutomationContainers = {
  guidelines: "guidelinesPendingAutomation",
  profiles: "profilesPendingAutomation",
  scoring: "scoringPendingAutomation",
  announcements: "announcementsPendingAutomation",
  gallery: "galleryPendingAutomation",
  standings: "standingsPendingAutomation"
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
  pendingScan: null,
  aiAssistant: {
    selectedPurpose: null,
    lastOtherExtraction: null
  },
  pendingAutomation: []
};

let toastTimerId = null;

function getById(id) {
  return document.getElementById(id);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getCurrentTimestamp() {
  return new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function getStatusTone(status) {
  const normalized = String(status || "").toLowerCase();

  if (["approved", "published", "linked", "imported", "ready", "resolved", "present"].includes(normalized)) {
    return "approved-state";
  }

  if (["rejected", "dismissed", "absent"].includes(normalized)) {
    return "rejected-state";
  }

  return "pending-state";
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

function addAuditRecord(action, module, status) {
  auditTrailRecords.unshift({
    id: Date.now(),
    time: getCurrentTimestamp(),
    actor: appState.currentUser.name || "CSG Officer",
    action,
    module,
    status
  });

  renderAuditTrail();
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

function getStudentAttendanceSnapshot() {
  const requestedName = (appState.currentUser.name || "").trim().toLowerCase();
  const fallbackName = "Ariana Mendoza";
  const matches = [];

  Object.entries(attendanceRecords).forEach(([eventName, records]) => {
    records.forEach((record) => {
      if (record.name.toLowerCase() === requestedName) {
        matches.push({
          event: eventName,
          ...record
        });
      }
    });
  });

  if (matches.length) {
    return matches;
  }

  Object.entries(attendanceRecords).forEach(([eventName, records]) => {
    records.forEach((record) => {
      if (record.name === fallbackName) {
        matches.push({
          event: eventName,
          ...record
        });
      }
    });
  });

  return matches;
}

function getStudentAttendanceViewModel() {
  const snapshot = getStudentAttendanceSnapshot();
  const actualName = (appState.currentUser.name || "").trim();
  const usesSampleRecord = Boolean(snapshot.length && snapshot[0].name !== actualName);
  const displayName = snapshot.length
    ? (usesSampleRecord ? `${snapshot[0].name} (sample record)` : snapshot[0].name)
    : (actualName || "Student Viewer");
  const department = snapshot[0]?.department || "No department yet";
  const latestRecord = snapshot[0] || null;
  const featuredEvent = scheduleData[0] || null;

  const summary = snapshot.reduce((counts, record) => {
    counts[record.status.toLowerCase()] = (counts[record.status.toLowerCase()] || 0) + 1;
    return counts;
  }, {});

  return {
    snapshot,
    displayName,
    department,
    latestRecord,
    featuredEvent,
    usesSampleRecord,
    summary: {
      present: summary.present || 0,
      late: summary.late || 0,
      absent: summary.absent || 0
    }
  };
}

function renderStudentAttendancePreview() {
  const target = getById("studentAttendancePreview");

  if (!target) {
    return;
  }

  const attendance = getStudentAttendanceViewModel();
  const { snapshot } = attendance;

  if (!snapshot.length) {
    target.innerHTML = `
      <div class="record-empty-state">
        <strong>No attendance status available yet.</strong>
        <p>Student attendance will appear here after approved event check-ins are recorded.</p>
      </div>
    `;
    return;
  }

  target.innerHTML = `
    <div class="student-attendance-head">
      <strong>${attendance.usesSampleRecord ? `${attendance.displayName.replace("(sample record)", "(sample preview)")}` : attendance.displayName}</strong>
      <span class="status-badge ${getStatusTone(snapshot[0].status)}">${attendance.department}</span>
    </div>
    <div class="student-attendance-stats">
      <span>Present ${attendance.summary.present}</span>
      <span>Late ${attendance.summary.late}</span>
      <span>Absent ${attendance.summary.absent}</span>
    </div>
    <div class="student-attendance-list">
      ${snapshot.slice(0, 3).map((record) => `
        <div class="student-attendance-item">
          <div>
            <strong>${record.event}</strong>
            <small>${record.department}</small>
          </div>
          <span class="status-badge ${getStatusTone(record.status)}">${record.status}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderStudentAttendancePage() {
  const summaryGrid = getById("studentAttendanceSummaryGrid");
  const historyList = getById("studentAttendanceHistoryList");
  const upcoming = getById("studentAttendanceUpcoming");

  if (!summaryGrid || !historyList || !upcoming) {
    return;
  }

  const attendance = getStudentAttendanceViewModel();
  const { snapshot, featuredEvent, latestRecord } = attendance;

  if (!snapshot.length) {
    summaryGrid.innerHTML = `
      <div class="record-empty-state">
        <strong>No attendance record yet.</strong>
        <p>Your attendance history will appear here after an approved event check-in is recorded.</p>
      </div>
    `;
    historyList.innerHTML = `
      <div class="record-empty-state">
        <strong>No attendance history yet.</strong>
        <p>Only approved and published attendance records are shown in student view.</p>
      </div>
    `;
    upcoming.innerHTML = `
      <div class="record-empty-state">
        <strong>No upcoming check-in posted.</strong>
        <p>Watch the schedule and announcement modules for the next attendance call time.</p>
      </div>
    `;
    return;
  }

  summaryGrid.innerHTML = `
    <article class="attendance-summary-stat emphasis">
      <span>Student Record</span>
      <strong>${attendance.displayName}</strong>
      <small>${attendance.usesSampleRecord ? "Sample attendance record shown for prototype preview." : "Matched to the current student login."}</small>
    </article>
    <article class="attendance-summary-stat">
      <span>Department</span>
      <strong>${attendance.department}</strong>
      <small>Official attendance profile</small>
    </article>
    <article class="attendance-summary-stat">
      <span>Present Count</span>
      <strong>${attendance.summary.present}</strong>
      <small>Approved event check-ins</small>
    </article>
    <article class="attendance-summary-stat">
      <span>Latest Status</span>
      <strong>${latestRecord.status}</strong>
      <small>${latestRecord.event}</small>
    </article>
  `;

  historyList.innerHTML = snapshot.map((record) => `
    <article class="student-history-item">
      <div>
        <strong>${record.event}</strong>
        <small>${record.department} participant attendance</small>
      </div>
      <div class="record-meta-stack">
        <span class="status-badge ${getStatusTone(record.status)}">${record.status}</span>
      </div>
    </article>
  `).join("");

  upcoming.innerHTML = featuredEvent ? `
    <article class="upcoming-attendance-card">
      <div class="upcoming-attendance-top">
        <strong>${featuredEvent.title}</strong>
        <span class="status-badge pending-state">Check-in Reminder</span>
      </div>
      <p>${featuredEvent.eventDate} at ${featuredEvent.time}</p>
      <div class="student-attendance-stats">
        <span>Venue: ${featuredEvent.venue}</span>
        <span>Bring school ID</span>
      </div>
      <p class="scanner-note">Student view only shows approved attendance history. Check-in status changes after official event verification.</p>
    </article>
  ` : `
    <div class="record-empty-state">
      <strong>No upcoming check-in posted.</strong>
      <p>Watch the schedule and announcement modules for the next attendance call time.</p>
    </div>
  `;
}

function renderParticipantImportRecords() {
  const target = getById("participantImportList");

  if (!target) {
    return;
  }

  target.innerHTML = participantImportRecords.map((record) => `
    <div class="record-item">
      <div>
        <strong>${record.fileName}</strong>
        <small>${record.source} - ${record.uploaded}</small>
      </div>
      <div class="record-meta-stack">
        <span>${record.imported} imported</span>
        <span>${record.linkedPhotos} photos linked</span>
        <span class="status-badge ${getStatusTone(record.status)}">${record.status}</span>
      </div>
    </div>
  `).join("");
}

function renderParticipantPhotoOptions() {
  const select = getById("photoParticipantSelect");

  if (!select) {
    return;
  }

  const currentValue = select.value;

  select.innerHTML = profileData.map((profile) => `
    <option value="${profile.name}">${profile.name} - ${profile.department}</option>
  `).join("");

  if (currentValue && [...select.options].some((option) => option.value === currentValue)) {
    select.value = currentValue;
  }
}

function renderParticipantPhotoLinks() {
  const target = getById("participantPhotoList");

  if (!target) {
    return;
  }

  target.innerHTML = participantPhotoLinks.map((record) => `
    <div class="record-item">
      <div>
        <strong>${record.name}</strong>
        <small>${record.department} - ${record.photoName}</small>
      </div>
      <div class="record-meta-stack">
        <span>${record.updated}</span>
        <span class="status-badge ${getStatusTone(record.status)}">${record.status}</span>
      </div>
    </div>
  `).join("");
}

function renderQrParticipantOptions() {
  const target = getById("qrParticipantSelect");
  const badge = getById("qrActiveEventBadge");
  const records = attendanceRecords[appState.activeAttendanceEvent] || [];

  if (badge) {
    badge.textContent = appState.activeAttendanceEvent;
  }

  if (!target) {
    return;
  }

  const currentValue = target.value;

  target.innerHTML = records.map((record) => `
    <option value="${record.name}">${record.name} - ${record.department}</option>
  `).join("");

  if (currentValue && [...target.options].some((option) => option.value === currentValue)) {
    target.value = currentValue;
  }
}

function renderQrScanLogs() {
  const target = getById("qrScanLogList");

  if (!target) {
    return;
  }

  target.innerHTML = qrScanLogs.map((record) => `
    <div class="record-item">
      <div>
        <strong>${record.name}</strong>
        <small>${record.event} - ${record.device}</small>
      </div>
      <div class="record-meta-stack">
        <span>${record.time}</span>
        <span>${record.department}</span>
        <span class="status-badge ${getStatusTone(record.status)}">${record.status}</span>
      </div>
    </div>
  `).join("");
}

function renderJudgeAssignments() {
  const target = getById("judgeAssignmentList");

  if (!target) {
    return;
  }

  target.innerHTML = judgeAssignments.map((assignment) => `
    <div class="assignment-item">
      <div class="assignment-top">
        <strong>${assignment.event}</strong>
        <span class="status-badge approved-state">${assignment.access}</span>
      </div>
      <div class="assignment-meta">
        <span><i class="fa-solid fa-pen-to-square"></i> Scorer: ${assignment.scorer}</span>
        <span><i class="fa-solid fa-scale-balanced"></i> Judge: ${assignment.judge}</span>
      </div>
    </div>
  `).join("");
}

function renderDisputeQueue() {
  const target = getById("disputeQueueList");

  if (!target) {
    return;
  }

  target.innerHTML = disputeRecords.map((record) => `
    <article class="dispute-card">
      <div class="dispute-card-top">
        <div>
          <strong>${record.event}</strong>
          <small>${record.submittedBy} - ${record.department}</small>
        </div>
        <span class="status-badge ${getStatusTone(record.status)}">${record.status}</span>
      </div>
      <p>${record.concern}</p>
      <div class="dispute-tags">
        <span><i class="fa-solid fa-paperclip"></i> ${record.evidence}</span>
      </div>
      <div class="dispute-action-row">
        <button class="btn-sm secondary" type="button" onclick="setDisputeStatus(${record.id}, 'Under Review')">Review</button>
        <button class="btn-sm primary" type="button" onclick="setDisputeStatus(${record.id}, 'Resolved')">Resolve</button>
        <button class="btn-sm secondary" type="button" onclick="setDisputeStatus(${record.id}, 'Dismissed')">Dismiss</button>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const target = getById("galleryGrid");

  if (!target) {
    return;
  }

  const isAdmin = appState.currentRole === "admin";

  target.innerHTML = galleryHighlights.map((item) => `
    <article class="gallery-card">
      <div class="gallery-cover" style="--highlight-color:${item.accent}">
        <span class="gallery-event">${item.event}</span>
        <div class="gallery-burst"></div>
      </div>
      <div class="gallery-body">
        <div class="gallery-meta">
          <span class="status-badge approved-state">Published</span>
          <small>${item.time}</small>
        </div>
        <h3>${item.title}</h3>
        <p>${item.caption}</p>
        <div class="gallery-actions">
          <button class="btn-sm secondary" type="button" onclick="showToast('Opening highlight preview...')">View Highlight</button>
          ${isAdmin ? '<button class="btn-sm primary" type="button" onclick="showToast(\'Highlight pinned on the public gallery.\')">Feature</button>' : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderFeedback() {
  const metrics = getById("feedbackMetrics");
  const list = getById("feedbackList");
  const studentList = getById("studentFeedbackList");
  const average = feedbackEntries.length
    ? (feedbackEntries.reduce((sum, entry) => sum + entry.rating, 0) / feedbackEntries.length).toFixed(1)
    : "0.0";

  if (metrics) {
    metrics.innerHTML = `
      <div class="feedback-metric">
        <strong>${average}</strong>
        <small>Average rating</small>
      </div>
      <div class="feedback-metric">
        <strong>${feedbackEntries.length}</strong>
        <small>Total responses</small>
      </div>
      <div class="feedback-metric">
        <strong>${feedbackEntries.filter((entry) => entry.rating >= 4).length}</strong>
        <small>Positive reviews</small>
      </div>
    `;
  }

  const listMarkup = feedbackEntries.map((entry) => `
    <article class="feedback-card">
      <div class="feedback-card-top">
        <div>
          <strong>${entry.topic}</strong>
          <small>${entry.name} - ${entry.role}</small>
        </div>
        <span class="status-badge ${getStatusTone(entry.status)}">${entry.status}</span>
      </div>
      <div class="rating-stars" aria-label="${entry.rating} out of 5 stars">
        ${Array.from({ length: 5 }, (_, index) => `<i class="fa-solid fa-star${index < entry.rating ? "" : " rating-off"}"></i>`).join("")}
      </div>
      <p>${entry.message}</p>
      <small class="feedback-time">${entry.time}</small>
    </article>
  `).join("");

  if (list) {
    list.innerHTML = listMarkup;
  }

  if (studentList) {
    studentList.innerHTML = feedbackEntries.slice(0, 3).map((entry) => `
      <article class="feedback-card compact">
        <div class="feedback-card-top">
          <div>
            <strong>${entry.topic}</strong>
            <small>${entry.name}</small>
          </div>
          <span class="status-badge approved-state">${entry.rating}/5</span>
        </div>
        <p>${entry.message}</p>
      </article>
    `).join("");
  }
}

function renderAuditTrail() {
  const target = getById("auditTrailList");

  if (!target) {
    return;
  }

  target.innerHTML = auditTrailRecords.map((entry) => `
    <div class="audit-entry">
      <div>
        <strong>${entry.action}</strong>
        <small>${entry.actor} - ${entry.module}</small>
      </div>
      <div class="record-meta-stack">
        <span>${entry.time}</span>
        <span class="status-badge ${getStatusTone(entry.status)}">${entry.status}</span>
      </div>
    </div>
  `).join("");
}

function renderBackupSnapshots() {
  const target = getById("backupSnapshotList");

  if (!target) {
    return;
  }

  target.innerHTML = backupSnapshots.map((snapshot) => `
    <div class="backup-item">
      <div>
        <strong>${snapshot.label}</strong>
        <small>${snapshot.time}</small>
      </div>
      <span class="status-badge ${getStatusTone(snapshot.status)}">${snapshot.status}</span>
    </div>
  `).join("");
}

function renderPendingAutomationCard(item) {
  return `
    <article class="pending-confirmation-card">
      <div class="pending-confirmation-head">
        <div>
          <span class="view-state-badge pending-state">${escapeHtml(item.pendingTitle)}</span>
          <h3><i class="fa-solid ${escapeHtml(item.icon)}"></i> ${escapeHtml(item.recordTitle)}</h3>
        </div>
        <span class="status-badge pending-state">${escapeHtml(item.status)}</span>
      </div>
      <div class="pending-confirmation-grid">
        <div>
          <span>Selected Purpose</span>
          <strong>${escapeHtml(item.purposeLabel)}</strong>
        </div>
        <div>
          <span>Uploaded File</span>
          <strong>${escapeHtml(item.fileName)}</strong>
        </div>
        <div>
          <span>Suggested Module</span>
          <strong>${escapeHtml(item.moduleLabel)}</strong>
        </div>
        <div>
          <span>Forwarded</span>
          <strong>${escapeHtml(item.createdAt)}</strong>
        </div>
      </div>
      <p>${escapeHtml(item.summary)}</p>
      ${item.instruction ? `<p class="pending-instruction"><strong>Instruction:</strong> ${escapeHtml(item.instruction)}</p>` : ""}
      <div class="pending-confirmation-actions">
        <button class="btn-sm primary" type="button" onclick="approvePendingAutomation(${item.id})">Approve</button>
        <button class="btn-sm secondary" type="button" onclick="editPendingAutomation(${item.id})">Edit</button>
        <button class="btn-sm secondary" type="button" onclick="rejectPendingAutomation(${item.id})">Reject</button>
      </div>
    </article>
  `;
}

function renderPendingConfirmations() {
  Object.entries(pendingAutomationContainers).forEach(([moduleSection, targetId]) => {
    const target = getById(targetId);

    if (!target) {
      return;
    }

    const pendingItems = appState.pendingAutomation.filter((item) => (
      item.moduleSection === moduleSection && item.status === "Pending Confirmation"
    ));

    const shouldHide = appState.currentRole !== "admin" || pendingItems.length === 0;
    target.hidden = shouldHide;
    target.innerHTML = shouldHide ? "" : pendingItems.map(renderPendingAutomationCard).join("");
  });
}

function findPendingAutomation(id) {
  return appState.pendingAutomation.find((item) => item.id === id);
}

function applyPendingAutomationUpdate(item) {
  const applyAs = item.applyAs || item.purposeId;
  const officialDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  if (applyAs === "guidelines") {
    guidelineRecords.unshift({
      id: Date.now(),
      title: item.recordTitle,
      category: "general",
      event: "General Intramurals",
      updated: officialDate,
      summary: item.summary
    });
    renderGuidelineRecords();
    renderStudentGuidelinesPreview();
    return;
  }

  if (applyAs === "participant-list") {
    participantImportRecords.unshift({
      id: Date.now(),
      fileName: item.fileName,
      source: item.purposeId === "other" ? "AI Routed General Document" : "AI Participant List Extraction",
      imported: 32,
      linkedPhotos: 0,
      status: "Imported",
      uploaded: getCurrentTimestamp()
    });
    renderParticipantImportRecords();
    return;
  }

  if (applyAs === "participant-photos") {
    profileData.slice(0, 3).forEach((profile, index) => {
      const existing = participantPhotoLinks.find((record) => record.name === profile.name);
      const photoName = index === 0 ? item.fileName : `${profile.name.toLowerCase().replace(/\s+/g, "-")}-${item.fileName}`;

      if (existing) {
        existing.photoName = photoName;
        existing.status = "Linked";
        existing.updated = getCurrentTimestamp();
      } else {
        participantPhotoLinks.unshift({
          id: Date.now() + index,
          name: profile.name,
          department: profile.department,
          photoName,
          status: "Linked",
          updated: getCurrentTimestamp()
        });
      }
    });
    renderParticipantPhotoLinks();
    renderProfiles();
    return;
  }

  if (applyAs === "tally-sheet") {
    const nextScores = [91, 93, 88, 90];
    document.querySelectorAll(".tally-input").forEach((input, index) => {
      if (nextScores[index] !== undefined) {
        input.value = nextScores[index];
      }
    });
    updateTallyTotal();
    return;
  }

  if (applyAs === "score-sheet-image") {
    const approvedScan = {
      event: "Basketball Semi Finals",
      home: "CEDAS",
      away: "CCIS",
      homeScore: 81,
      awayScore: 76
    };
    liveMatches.basketballSemi.homeScore = approvedScan.homeScore;
    liveMatches.basketballSemi.awayScore = approvedScan.awayScore;
    liveMatches.basketballSemi.scoreMeta = "AI verified result";
    liveMatches.basketballSemi.periodLabel = "Final score after AI confirmation";
    applyApprovedResultToStandings(approvedScan);
    syncLiveScoreDisplays();
    renderDashboardRankings();
    renderDashboardMedalTable();
    renderStandingsSection();

    const verificationNote = getById("basketballVerificationNote");
    if (verificationNote) {
      verificationNote.textContent = "Approved AI Assistant score is now published on the live board.";
    }
    return;
  }

  if (applyAs === "event-highlights") {
    galleryHighlights.unshift({
      id: Date.now(),
      title: item.recordTitle,
      event: "Intramurals Highlights",
      caption: item.summary,
      time: "Just now",
      accent: "#2d6a4f"
    });
    renderGallery();
    return;
  }

  if (applyAs === "announcement") {
    announcementData.unshift({
      type: "info",
      title: item.recordTitle,
      copy: item.summary,
      time: getCurrentTimestamp(),
      audience: "All departments"
    });
    renderAnnouncements();
    renderAnnouncementPreview("dashboardAnnouncementPreview", 3);
    renderAnnouncementPreview("studentAnnouncementsPreview", 3);
    return;
  }

  if (applyAs === "published-results") {
    const champion = standingsData.find((entry) => entry.team === "CEDAS");
    const runnerUp = standingsData.find((entry) => entry.team === "CCIS");

    if (champion) {
      champion.gold += 1;
      champion.points += 5;
    }

    if (runnerUp) {
      runnerUp.silver += 1;
      runnerUp.points += 3;
    }

    renderStandingsSection();
    renderDashboardRankings();
    renderDashboardMedalTable();
  }
}

function approvePendingAutomation(id) {
  const item = findPendingAutomation(id);

  if (!item || item.status !== "Pending Confirmation") {
    return;
  }

  item.status = "Approved";
  applyPendingAutomationUpdate(item);
  renderPendingConfirmations();
  addAuditRecord(`Approved ${item.pendingTitle}`, item.moduleLabel, "Approved");
  showToast(`${item.moduleLabel} update approved.`);
}

function editPendingAutomation(id) {
  const item = findPendingAutomation(id);

  if (!item || item.status !== "Pending Confirmation") {
    return;
  }

  const nextSummary = window.prompt("Edit the extracted summary before approval:", item.summary);

  if (nextSummary === null) {
    return;
  }

  item.summary = nextSummary.trim() || item.summary;
  renderPendingConfirmations();
  addAuditRecord(`Edited ${item.pendingTitle}`, item.moduleLabel, "Pending");
  showToast("Pending update edited. It still needs approval.");
}

function rejectPendingAutomation(id) {
  const item = findPendingAutomation(id);

  if (!item || item.status !== "Pending Confirmation") {
    return;
  }

  item.status = "Rejected";
  renderPendingConfirmations();
  addAuditRecord(`Rejected ${item.pendingTitle}`, item.moduleLabel, "Rejected");
  showToast(`${item.moduleLabel} update rejected.`);
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
    const hasLinkedPhoto = participantPhotoLinks.some((record) => record.name === profile.name && record.status === "Linked");

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
          <span>${hasLinkedPhoto ? "Photo linked" : "Photo pending"}</span>
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
  renderQrParticipantOptions();

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

function addChatRichMessage(role, html, options = {}) {
  const chatWindow = getById("chatWindow");

  if (!chatWindow) {
    return null;
  }

  const message = document.createElement("div");
  message.className = `chat-msg ${role === "user" ? "user-msg" : "bot-msg"}${options.extraClass ? ` ${options.extraClass}` : ""}`;

  if (options.adminOnly) {
    message.dataset.roleView = "admin";
    message.hidden = appState.currentRole !== "admin";
  }

  if (role === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "chat-avatar bot-av";
    avatar.innerHTML = '<i class="fa-solid fa-robot"></i>';
    message.appendChild(avatar);
  }

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";
  bubble.innerHTML = html;
  message.appendChild(bubble);

  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  return message;
}

function clearAiUploadPrompts() {
  document.querySelectorAll(".ai-upload-chat-msg").forEach((message) => message.remove());
}

function renderAiSelectedFileChip() {
  const input = getById("aiChatFileInput");
  const chip = getById("aiSelectedFileChip");
  const file = input?.files?.[0];
  const showAutomationControls = Boolean(file && appState.currentRole === "admin");

  if (chip) {
    chip.hidden = !showAutomationControls;
    chip.textContent = file ? file.name : "";
  }
}

function resetAiChatFileInput(options = {}) {
  const input = getById("aiChatFileInput");
  const chatInput = getById("chatInput");
  const purposeSelect = getById("aiPurposeSelect");

  if (input) {
    input.value = "";
    input.accept = "";
  }

  if (options.clearPurpose !== false) {
    appState.aiAssistant.selectedPurpose = null;
    setAiPurposeButtonState("");
    if (purposeSelect) {
      purposeSelect.value = "";
    }
  }

  if (chatInput) {
    chatInput.placeholder = "Ask about guidelines, scores, schedules, or standings...";
  }

  renderAiSelectedFileChip();
}

function getAiPurposeConfig(purposeId) {
  return aiFilePurposeConfigs[purposeId] || aiFilePurposeConfigs.other;
}

function getAiFileAccept(purposeId) {
  if (["participant-photos", "score-sheet-image", "event-highlights"].includes(purposeId)) {
    return "image/*";
  }

  if (purposeId === "participant-list") {
    return ".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg";
  }

  return ".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg,image/*";
}

function setAiPurposeButtonState(purposeId) {
  const purposeSelect = getById("aiPurposeSelect");
  if (purposeSelect && purposeSelect.value !== purposeId) {
    purposeSelect.value = purposeId || "";
  }
}

function selectAiFilePurpose(purposeId) {
  if (appState.currentRole !== "admin") {
    return;
  }

  const config = getAiPurposeConfig(purposeId);
  const fileInput = getById("aiChatFileInput");

  appState.aiAssistant.selectedPurpose = purposeId;
  appState.aiAssistant.lastOtherExtraction = null;
  setAiPurposeButtonState(purposeId);
  clearAiUploadPrompts();

  if (fileInput) {
    fileInput.accept = getAiFileAccept(purposeId);
  }

  showToast(`File type set to ${config.label}.`);
}

function buildPendingAutomationItem(applyAsPurposeId, fileName, sourcePurposeId = applyAsPurposeId, instruction = "") {
  const config = getAiPurposeConfig(applyAsPurposeId);
  const sourceConfig = getAiPurposeConfig(sourcePurposeId);
  const isOtherSource = sourcePurposeId === "other";
  const instructionText = instruction.trim();

  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    purposeId: sourcePurposeId,
    applyAs: applyAsPurposeId,
    purposeLabel: sourceConfig.label,
    fileName,
    summary: isOtherSource
      ? `${aiFilePurposeConfigs.other.summary} Routed to the ${config.moduleLabel} module for confirmation.`
      : config.summary,
    instruction: instructionText,
    moduleSection: config.moduleSection,
    moduleLabel: config.moduleLabel,
    pendingTitle: config.pendingTitle,
    recordTitle: isOtherSource ? `${config.recordTitle} from General Document` : config.recordTitle,
    icon: config.icon,
    status: "Pending Confirmation",
    createdAt: getCurrentTimestamp()
  };
}

function addAiProcessingPreview(item, options = {}) {
  const awaitingRoute = Boolean(options.awaitingRoute);
  const routeSelectId = `aiOtherRouteSelect-${Date.now()}`;
  const statusLabel = awaitingRoute ? "Awaiting Route Selection" : "Sent for Admin Confirmation";
  const moduleLabel = awaitingRoute ? "Choose destination module" : item.moduleLabel;
  const openingLine = awaitingRoute
    ? "AI Processing Complete. This general document needs a destination module before it can be sent for confirmation."
    : `AI Processing Complete. This file has been prepared for the ${escapeHtml(item.moduleLabel)} module.`;
  const routeControls = awaitingRoute ? `
    <div class="chat-route-panel">
      <label for="${routeSelectId}">Route this summary to</label>
      <select id="${routeSelectId}" class="form-input">
        ${aiOtherRouteOptions.map((purposeId) => {
          const config = getAiPurposeConfig(purposeId);
          return `<option value="${purposeId}">${escapeHtml(config.moduleLabel)} - ${escapeHtml(config.pendingTitle)}</option>`;
        }).join("")}
      </select>
      <button class="btn-primary" type="button" onclick="routeOtherAiDocument('${routeSelectId}')">
        <i class="fa-solid fa-share-from-square"></i> Send to Module
      </button>
    </div>
  ` : `
    <button class="btn-sm primary" type="button" onclick="openPendingAutomationModule(${item.id})">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Related Module
    </button>
  `;

  addChatRichMessage("bot", `
    <p>${openingLine}</p>
    <div class="ai-processing-preview">
      <div><span>Selected Purpose</span><strong>${escapeHtml(item.purposeLabel)}</strong></div>
      <div><span>Uploaded File Name</span><strong>${escapeHtml(item.fileName)}</strong></div>
      <div><span>Extracted Summary</span><strong>${escapeHtml(item.summary)}</strong></div>
      ${item.instruction ? `<div><span>Admin Instruction</span><strong>${escapeHtml(item.instruction)}</strong></div>` : ""}
      <div><span>Suggested Module</span><strong>${escapeHtml(moduleLabel)}</strong></div>
      <div><span>Status</span><strong>${escapeHtml(statusLabel)}</strong></div>
    </div>
    ${routeControls}
  `, {
    adminOnly: true,
    extraClass: "ai-preview-chat-msg"
  });
}

function processAiSelectedFile(purposeId, inputId, instruction = "") {
  if (appState.currentRole !== "admin") {
    return;
  }

  const selectedPurpose = purposeId || appState.aiAssistant.selectedPurpose;
  const config = getAiPurposeConfig(selectedPurpose);
  const input = inputId ? getById(inputId) : getById("aiChatFileInput");
  const file = input?.files?.[0];

  if (!selectedPurpose) {
    showToast("Select a file purpose first.");
    return;
  }

  if (!file) {
    showToast("Upload one file before processing.");
    return;
  }

  appState.aiAssistant.selectedPurpose = selectedPurpose;
  addChatRichMessage("user", `
    <p>Uploaded <strong>${escapeHtml(file.name)}</strong></p>
    <p>Purpose: ${escapeHtml(config.label)}</p>
    ${instruction ? `<p>Instruction: ${escapeHtml(instruction)}</p>` : ""}
  `, {
    adminOnly: true,
    extraClass: "ai-uploaded-file-msg"
  });

  if (selectedPurpose === "other") {
    const extraction = {
      fileName: file.name,
      purposeLabel: config.label,
      moduleLabel: config.moduleLabel,
      summary: config.summary,
      instruction: instruction.trim()
    };
    appState.aiAssistant.lastOtherExtraction = extraction;
    addAiProcessingPreview(extraction, { awaitingRoute: true });
    resetAiChatFileInput();
    showToast("General document summarized. Choose where to route it.");
    return;
  }

  const item = buildPendingAutomationItem(selectedPurpose, file.name, selectedPurpose, instruction);
  appState.pendingAutomation.unshift(item);
  renderPendingConfirmations();
  addAiProcessingPreview(item);
  addAuditRecord(`Prepared ${item.fileName} for ${item.moduleLabel}`, "AI Assistant", "Pending");
  resetAiChatFileInput();
  showToast(`Prepared for ${item.moduleLabel} confirmation.`);
}

function routeOtherAiDocument(selectId) {
  if (appState.currentRole !== "admin") {
    return;
  }

  const select = getById(selectId);
  const routePurposeId = select?.value || "guidelines";
  const extraction = appState.aiAssistant.lastOtherExtraction;

  if (!extraction) {
    showToast("Process an Other Intramurals Document first.");
    return;
  }

  const item = buildPendingAutomationItem(routePurposeId, extraction.fileName, "other", extraction.instruction || "");
  appState.pendingAutomation.unshift(item);
  renderPendingConfirmations();
  addAiProcessingPreview(item);
  addAuditRecord(`Routed ${item.fileName} to ${item.moduleLabel}`, "AI Assistant", "Pending");

  if (select) {
    select.disabled = true;
    select.closest(".chat-route-panel")?.querySelector("button")?.setAttribute("disabled", "true");
  }

  showToast(`Sent to ${item.moduleLabel} for confirmation.`);
}

function openPendingAutomationModule(id) {
  const item = appState.pendingAutomation.find((pending) => pending.id === id);

  if (!item) {
    return;
  }

  activateSection(item.moduleSection);
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
  const attendanceSnapshot = getStudentAttendanceSnapshot();

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

  if (normalized.includes("announcement") || normalized.includes("announcements")) {
    const latestAnnouncement = announcementData[0];
    return `Latest approved announcement: ${latestAnnouncement.title}. ${latestAnnouncement.copy}`;
  }

  if (normalized.includes("dress") && normalized.includes("cheerdance")) {
    return `The Cheerdance guidelines require coordinated, school-appropriate costumes, safe footwear, and approved props only. Reference: ${cheerdanceGuidelines.title}.`;
  }

  if (normalized.includes("attendance")) {
    const latestAttendance = attendanceSnapshot[0];

    if (latestAttendance) {
      return `${latestAttendance.name}'s latest attendance record is ${latestAttendance.status} for ${latestAttendance.event}. Student view only shows approved attendance updates.`;
    }

    return "Attendance status will appear after an event check-in is recorded and approved for student viewing.";
  }

  if (normalized.includes("guideline") || normalized.includes("rulebook")) {
    return `The latest official documents include ${guidelineRecords[0].title}, ${sportsGuidelines.title}, and ${guidelineRecords[2].title}. Ask me about a specific event if you want a summary.`;
  }

  if (normalized.includes("gallery") || normalized.includes("highlight")) {
    return `Published highlights currently feature ${galleryHighlights[0].title}, ${galleryHighlights[1].title}, and ${galleryHighlights[2].title}.`;
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
  renderStudentAttendancePreview();
  renderStudentAttendancePage();
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

  addAuditRecord(`Approved ${appState.pendingScan.event} OCR result`, "Score Sheet Scanner", "Approved");
  showToast("Score approved and published");
}

function rejectScannedScore() {
  if (!appState.pendingScan || appState.pendingScan.status !== "Pending Verification") {
    return;
  }

  appState.pendingScan.status = "Rejected";
  renderScannerState();
  addAuditRecord(`Rejected ${appState.pendingScan.event} OCR result`, "Score Sheet Scanner", "Rejected");
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
  addAuditRecord(`Uploaded guideline record for ${eventName}`, "Guidelines Management", "Published");
  showToast("Guideline uploaded to the prototype library.");
}

function editGuideline(id) {
  const record = guidelineRecords.find((item) => item.id === id);

  if (!record) {
    return;
  }

  const nextSummary = window.prompt("Edit guideline summary:", record.summary);

  if (nextSummary === null) {
    return;
  }

  record.summary = nextSummary.trim() || record.summary;
  record.updated = getCurrentTimestamp();
  renderGuidelineRecords();
  renderStudentGuidelinesPreview();
  addAuditRecord(`Edited guideline record ${record.title}`, "Guidelines Management", "Updated");
  showToast("Guideline summary updated.");
}

function deleteGuideline(id) {
  const index = guidelineRecords.findIndex((item) => item.id === id);

  if (index === -1) {
    return;
  }

  guidelineRecords.splice(index, 1);
  renderGuidelineRecords();
  renderStudentGuidelinesPreview();
  addAuditRecord("Deleted a guideline record", "Guidelines Management", "Dismissed");
  showToast("Guideline removed from the prototype list.");
}

function importParticipantFilePrototype() {
  const fileInput = getById("participantFileInput");
  const sourceSelect = getById("participantImportSource");
  const fileName = fileInput?.files?.[0]?.name || `participant-import-${Date.now()}.pdf`;
  const source = sourceSelect?.value || "Participant Registration Sheet";

  participantImportRecords.unshift({
    id: Date.now(),
    fileName,
    source,
    imported: 12 + Math.floor(Math.random() * 25),
    linkedPhotos: 4 + Math.floor(Math.random() * 10),
    status: "Imported",
    uploaded: getCurrentTimestamp()
  });

  if (fileInput) {
    fileInput.value = "";
  }

  renderParticipantImportRecords();
  addAuditRecord(`Imported participant file ${fileName}`, "Participant Profiles", "Imported");
  showToast("Participant file imported into the prototype queue.");
}

function handleParticipantPhotoPreview(event) {
  const file = event.target.files?.[0];
  const image = getById("participantPhotoPreviewImage");
  const empty = getById("participantPhotoPreviewEmpty");

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

function linkParticipantPhotoPrototype() {
  const select = getById("photoParticipantSelect");
  const fileInput = getById("participantPhotoInput");
  const image = getById("participantPhotoPreviewImage");
  const empty = getById("participantPhotoPreviewEmpty");
  const participantName = select?.value;
  const profile = profileData.find((entry) => entry.name === participantName);

  if (!participantName || !profile) {
    showToast("Select a participant to link a photo.");
    return;
  }

  const fileName = fileInput?.files?.[0]?.name || `${participantName.toLowerCase().replace(/\s+/g, "-")}.jpg`;
  const existing = participantPhotoLinks.find((record) => record.name === participantName);

  if (existing) {
    existing.photoName = fileName;
    existing.updated = getCurrentTimestamp();
    existing.status = "Linked";
  } else {
    participantPhotoLinks.unshift({
      id: Date.now(),
      name: participantName,
      department: profile.department,
      photoName: fileName,
      status: "Linked",
      updated: getCurrentTimestamp()
    });
  }

  if (fileInput) {
    fileInput.value = "";
  }

  if (image) {
    image.removeAttribute("src");
    image.classList.remove("show");
  }

  if (empty) {
    empty.hidden = false;
  }

  renderParticipantPhotoLinks();
  renderProfiles();
  addAuditRecord(`Linked participant photo to ${participantName}`, "Participant Profiles", "Linked");
  showToast("Participant photo linked in the prototype.");
}

function simulateQrScan() {
  const eventName = appState.activeAttendanceEvent;
  const participantName = getById("qrParticipantSelect")?.value;
  const records = attendanceRecords[eventName] || [];
  const record = records.find((entry) => entry.name === participantName);

  if (!record) {
    showToast("Select a participant for QR attendance scanning.");
    return;
  }

  record.status = "Present";

  qrScanLogs.unshift({
    id: Date.now(),
    name: record.name,
    department: record.department,
    event: eventName,
    time: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    }),
    device: "Mobile Camera Scanner",
    status: "Present"
  });

  renderAttendance(eventName);
  renderQrScanLogs();
  renderStudentAttendancePreview();
  renderStudentAttendancePage();
  addAuditRecord(`QR attendance scan logged for ${record.name}`, "Attendance Management", "Present");
  showToast(`${record.name} checked in through the QR attendance prototype.`);
}

function setDisputeStatus(id, status) {
  const record = disputeRecords.find((item) => item.id === id);

  if (!record) {
    return;
  }

  record.status = status;
  renderDisputeQueue();
  addAuditRecord(`${status} dispute for ${record.event}`, "Score Verification", status);
  showToast(`Dispute marked as ${status}.`);
}

function submitFeedbackPrototype() {
  const topicSelect = getById("feedbackTopicSelect");
  const ratingSelect = getById("feedbackRatingSelect");
  const messageInput = getById("feedbackMessageInput");
  const topic = topicSelect?.value || "General Feedback";
  const rating = Number(ratingSelect?.value || 5);
  const message = (messageInput?.value || "").trim() || "Frontend prototype feedback submission.";

  feedbackEntries.unshift({
    id: Date.now(),
    name: appState.currentUser.name || "Student Viewer",
    role: appState.currentRole === "admin" ? "Admin / CSG Officer" : "Student / Viewer",
    topic,
    rating,
    message,
    time: getCurrentTimestamp(),
    status: "Published"
  });

  if (messageInput) {
    messageInput.value = "";
  }

  renderFeedback();
  addAuditRecord(`Submitted ${topic.toLowerCase()} feedback`, "Feedback and Rating", "Published");
  showToast("Feedback submitted to the prototype inbox.");
}

function createBackupSnapshot() {
  backupSnapshots.unshift({
    id: Date.now(),
    label: `Manual Snapshot ${backupSnapshots.length + 1}`,
    time: getCurrentTimestamp(),
    status: "Ready"
  });

  renderBackupSnapshots();
  addAuditRecord("Created manual backup snapshot", "Backup and Recovery", "Ready");
  showToast("Prototype backup snapshot created.");
}

function restoreLastBackup() {
  const latest = backupSnapshots[0];

  if (!latest) {
    showToast("No backup snapshot is available.");
    return;
  }

  addAuditRecord(`Restored ${latest.label}`, "Backup and Recovery", "Approved");
  showToast("Last backup snapshot restored in prototype mode.");
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
  renderStudentAttendancePreview();
  renderStudentAttendancePage();
  renderStudentGuidelinesPreview();
  renderParticipantImportRecords();
  renderParticipantPhotoOptions();
  renderParticipantPhotoLinks();
  renderQrParticipantOptions();
  renderQrScanLogs();
  renderJudgeAssignments();
  renderDisputeQueue();
  renderGuidelineRecords();
  renderGallery();
  renderFeedback();
  renderAuditTrail();
  renderBackupSnapshots();
  renderPendingConfirmations();
  renderAiSelectedFileChip();
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
  const aiFilePlusBtn = getById("aiFilePlusBtn");
  const aiChatFileInput = getById("aiChatFileInput");
  const aiPurposeSelect = getById("aiPurposeSelect");
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
      const selectedFile = aiChatFileInput?.files?.[0];

      if (selectedFile && appState.currentRole === "admin") {
        if (!appState.aiAssistant.selectedPurpose) {
          showToast("Choose the file type before sending.");
          return;
        }

        processAiSelectedFile(appState.aiAssistant.selectedPurpose, null, text);
        chatInput.value = "";

        return;
      }

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

  aiFilePlusBtn?.addEventListener("click", () => {
    if (appState.currentRole !== "admin") {
      return;
    }

    if (aiPurposeSelect?.value && aiPurposeSelect.value !== appState.aiAssistant.selectedPurpose) {
      selectAiFilePurpose(aiPurposeSelect.value);
    }

    aiChatFileInput?.click();
  });

  aiPurposeSelect?.addEventListener("change", () => {
    if (aiPurposeSelect.value) {
      selectAiFilePurpose(aiPurposeSelect.value);
    } else {
      appState.aiAssistant.selectedPurpose = null;
      setAiPurposeButtonState("");
      if (aiChatFileInput) {
        aiChatFileInput.accept = "";
      }
    }
  });

  aiChatFileInput?.addEventListener("change", () => {
    renderAiSelectedFileChip();

    if (aiChatFileInput.files?.[0]) {
      chatInput.placeholder = "Enter instruction for this document...";
    }
  });

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
  getById("importParticipantsBtn")?.addEventListener("click", importParticipantFilePrototype);
  getById("participantPhotoInput")?.addEventListener("change", handleParticipantPhotoPreview);
  getById("linkParticipantPhotoBtn")?.addEventListener("click", linkParticipantPhotoPrototype);
  getById("simulateQrScanBtn")?.addEventListener("click", simulateQrScan);
  getById("submitFeedbackBtn")?.addEventListener("click", submitFeedbackPrototype);
  getById("exportPdfBtn")?.addEventListener("click", () => {
    addAuditRecord("Generated PDF report", "Reports and Analytics", "Ready");
    showToast("PDF report generated successfully");
  });
  getById("exportExcelBtn")?.addEventListener("click", () => {
    addAuditRecord("Generated Excel report", "Reports and Analytics", "Ready");
    showToast("Excel report generated successfully");
  });
  getById("uploadHighlightBtn")?.addEventListener("click", () => {
    addAuditRecord("Queued gallery highlight for publishing", "Gallery and Highlights", "Pending");
    showToast("Gallery highlight queued for publishing.");
  });
  getById("reviewPrivacyBtn")?.addEventListener("click", () => {
    addAuditRecord("Reviewed consent and privacy checklist", "Data Privacy", "Approved");
    showToast("Opening consent and privacy checklist...");
  });
  getById("createBackupBtn")?.addEventListener("click", createBackupSnapshot);
  getById("restoreBackupBtn")?.addEventListener("click", restoreLastBackup);

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
window.setDisputeStatus = setDisputeStatus;
window.selectAiFilePurpose = selectAiFilePurpose;
window.processAiSelectedFile = processAiSelectedFile;
window.routeOtherAiDocument = routeOtherAiDocument;
window.openPendingAutomationModule = openPendingAutomationModule;
window.approvePendingAutomation = approvePendingAutomation;
window.editPendingAutomation = editPendingAutomation;
window.rejectPendingAutomation = rejectPendingAutomation;
