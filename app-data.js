// ===== DATABASE & AUTH (LOCAL STORAGE) =====

// USERS for authentication
const USERS = [
  { username: "admin", password: "admin", role: "admin", name: "Andriantsoa René", avatar: "AD", title: "System Administrator" },
  { username: "lecturer01", password: "lecturer01", role: "lecturer", name: "Dr. Rakotomalala Rivo", avatar: "RR", title: "Accounting Faculty" },
  { username: "STU-2025-001", password: "student", role: "student", name: "Razafindrakoto Miora", avatar: "RM", title: "L1 Accounting" },
  { username: "HoD01", password: "hod01", role: "dean", name: "Mahamat Ali", avatar: "DC", title: "HoD" }

];


// AUTH FUNCTIONS
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  } catch {
    return {};
  }
}

function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function logout() {
  localStorage.removeItem('currentUser');
}

// ===== ENTERPRISE DATA =====
// Audit Logs - Track all admin actions
if (!localStorage.getItem("auditLogs")) {
  const baseLogs = [
    { id: 1, timestamp: "2025-05-25T09:32:15", user: "Andriantsoa René (admin)", action: "ADD_STUDENT", target: "STU-2025-049", details: "Razafindrakoto Miora - Accounting L1", ip: "192.168.1.105", status: "success" },
    { id: 2, timestamp: "2025-05-25T09:28:42", user: "Andriantsoa René (admin)", action: "UPDATE_FEE", target: "STU-2025-001", details: "1.2M MGA paid", ip: "192.168.1.105", status: "success" },
    { id: 3, timestamp: "2025-05-25T08:45:20", user: "Dr. Rakotomalala (lecturer)", action: "MARK_ATTENDANCE", target: "ACCT101", details: "28/30 present - Group A", ip: "192.168.1.112", status: "success" },
    { id: 4, timestamp: "2025-05-25T08:12:07", user: "Andriantsoa René (admin)", action: "PUBLISH_RESULTS", target: "ACCT101", details: "Midterm - 87% pass rate", ip: "192.168.1.105", status: "success" },
    { id: 5, timestamp: "2025-05-24T16:33:19", user: "Andriantsoa René (admin)", action: "DELETE_COURSE", target: "MGMT199", details: "Duplicate removed", ip: "192.168.1.105", status: "success" }
  ];
  
  // Generate 45 more realistic entries
  const extraLogs = Array.from({length: 45}, (_, i) => ({
    id: i + 6,
    timestamp: `2025-05-${Math.floor(Math.random()*28)+1}T${Math.floor(Math.random()*20)+4}:${Math.floor(Math.random()*60).toString().padStart(2,'0')}:00`,
    user: ["Andriantsoa René (admin)", "Dr. Rakotomalala (lecturer)", "Prof. Andriamahefa (lecturer)", "Finance Office (admin)"][Math.floor(Math.random()*4)],
    action: ["ADD_STUDENT", "UPDATE_GRADE", "MARK_ATTENDANCE", "SEND_ANNOUNCEMENT", "UPDATE_FEE", "ASSIGN_LECTURER", "BACKUP_CREATED", "TICKET_RESOLVED"][Math.floor(Math.random()*8)],
    target: `STU-2025-${Math.floor(Math.random()*200)}`,
    details: `Operation #${i+1}`,
    ip: `192.168.1.${Math.floor(Math.random()*255)}`,
    status: Math.random() > 0.03 ? "success" : "failed"
  }));
  
  localStorage.setItem("auditLogs", JSON.stringify([...baseLogs, ...extraLogs].sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp))));
}

// System Backups
if (!localStorage.getItem("backups")) {
  localStorage.setItem("backups", JSON.stringify([
    { id: "BK-20250525-0930", date: "2025-05-25 09:30", size: "2.8MB", type: "Full", status: "completed", download: true },
    { id: "BK-20250524-1800", date: "2025-05-24 18:00", size: "1.2MB", type: "Students", status: "completed", download: true },
    { id: "BK-20250523-1200", date: "2025-05-23 12:00", size: "2.1MB", type: "Full", status: "completed", download: true },
    { id: "BK-20250522-0900", date: "2025-05-22 09:00", size: "850KB", type: "Courses", status: "completed", download: true },
    { id: "BK-20250521-1700", date: "2025-05-21 17:00", size: "1.9MB", type: "Full", status: "failed", download: false }
  ]));
}

// Integrations / External Services
if (!localStorage.getItem("integrations")) {
  localStorage.setItem("integrations", JSON.stringify([
    { id: 1, name: "SMS Gateway (Twilio)", apiKey: "sk_live_3nKx...", status: "active", lastSync: "2025-05-25 08:45", usage: "1247/10000" },
    { id: 2, name: "Email Service (SendGrid)", apiKey: "SG.pX8Y...", status: "active", lastSync: "2025-05-25 09:20", usage: "342/5000" },
    { id: 3, name: "Payment Gateway", apiKey: "pk_live_abC1...", status: "suspended", lastSync: "2025-05-24 16:30", usage: "89/500" },
    { id: 4, name: "Google Workspace", apiKey: "1aBc...apps.googleusercontent", status: "active", lastSync: "2025-05-25 07:15", usage: "Unlimited" }
  ]));
}

// Support Tickets / Helpdesk
if (!localStorage.getItem("tickets")) {
  localStorage.setItem("tickets", JSON.stringify([
    { id: "#TKT-045", subject: "Student login issues - password reset", status: "open", priority: "high", assigned: "IT Support", created: "2025-05-25 08:12", user: "Rakotoarisoa Jean (STU-2025-002)" },
    { id: "#TKT-044", subject: "Export attendance report Excel error", status: "in-progress", priority: "medium", assigned: "IT Support", created: "2025-05-25 07:45", user: "Dr. Rakotomalala (FAC-001)" },
    { id: "#TKT-043", subject: "Payment gateway timeout errors", status: "resolved", priority: "high", assigned: "Finance", created: "2025-05-24 16:20", user: "Finance Office" },
    { id: "#TKT-042", subject: "Mobile notifications not arriving", status: "open", priority: "low", assigned: "", created: "2025-05-24 11:30", user: "Student Services" },
    { id: "#TKT-041", subject: "2FA setup instructions missing", status: "in-progress", priority: "medium", assigned: "IT Support", created: "2025-05-23 14:05", user: "Andriantsoa René (admin)" }
  ]));
}

// Security Events
if (!localStorage.getItem("securityEvents")) {
  localStorage.setItem("securityEvents", JSON.stringify([
    { id: 1, timestamp: "2025-05-25 09:15", event: "LOGIN_SUCCESS", user: "admin", ip: "192.168.1.105", userAgent: "Chrome 125", duration: "0:02:34" },
    { id: 2, timestamp: "2025-05-25 08:47", event: "FAILED_LOGIN", user: "unknown", ip: "203.0.113.45", userAgent: "Unknown", note: "3 consecutive failures" },
    { id: 3, timestamp: "2025-05-25 07:30", event: "2FA_VERIFIED", user: "lecturer01", ip: "192.168.1.112", method: "Google Authenticator" },
    { id: 4, timestamp: "2025-05-24 18:22", event: "LOGOUT", user: "admin", ip: "192.168.1.105", session: "2h 15m" },
    { id: 5, timestamp: "2025-05-24 16:45", event: "PRIVILEGE_ESCALATION", user: "finance", ip: "192.168.1.108", target: "admin" }
  ]));
}

// ===== CORE DATABASE =====
// Students - Extended
if (!localStorage.getItem("students")) {
  localStorage.setItem("students", JSON.stringify([
    { id: "STU-2025-001", name: "Razafindrakoto Miora", course: "ACCT101", attendance: 96, midterm: 78, final: 82, avg: 80, grade: "B", department: "Accounting", level: "L1" },
    { id: "STU-2025-002", name: "Rakotoarisoa Jean", course: "MGMT201", attendance: 92, midterm: 90, final: 88, avg: 89, grade: "A", department: "Management", level: "L2" },
    { id: "STU-2025-003", name: "Andriamanana Nivo", course: "ACCT101", attendance: 85, midterm: 55, final: 70, avg: 62.5, grade: "C", department: "Accounting", level: "L1" },
    { id: "STU-2024-087", name: "Rasolofo Lalaina", course: "FIN301", attendance: 87, midterm: 42, final: 50, avg: 46, grade: "F", department: "Finance", level: "L3" },
    { id: "STU-2024-034", name: "Herilanto Faniry", course: "ACCT102", attendance: 94, midterm: 88, final: 85, avg: 86.5, grade: "A", department: "Accounting", level: "L2" }
  ]));
}

// Lecturers - Enhanced with course details
if (!localStorage.getItem("lecturers")) {
  localStorage.setItem("lecturers", JSON.stringify([
    {
      id: "FAC-001",
      name: "Dr. Rakotomalala Rivo",
      avatar: "RR",
      department: "Accounting",
      email: "rivo.rkt@iscam.mg",
      phone: "+261 34 12 34567",
      courses: {
        "ACCT101": { title: "Financial Accounting I", students: 30, avgAttendance: 94, avgGrade: 78.4 },
        "ACCT102": { title: "Financial Accounting II", students: 28, avgAttendance: 87, avgGrade: 75.2 },
        "MGMT201": { title: "Principles of Management", students: 25, avgAttendance: 91, avgGrade: 82.1 }
      },
      totalStudents: 83,
      totalCourses: 3
    },
    { id: "FAC-002", name: "Prof. Andriamahefa Marie", department: "Mathematics", courses: ["MATH101"], students: 120 },
    { id: "FAC-003", name: "Dr. Razafy Fanja", department: "Economics", courses: ["ECON101"], students: 68 }
  ]));
}


// Student Profile (for student.html)
if (!localStorage.getItem("currentStudent")) {
  localStorage.setItem("currentStudent", JSON.stringify({
    id: "STU-2025-001", name: "Razafindrakoto Miora", department: "Accounting", level: "L1", gpa: 3.42,
    courses: [
      { code: "ACCT101", lecturer: "Dr. Rakotomalala", grade: "B", credits: 4, attendance: 96 },
      { code: "MATH101", lecturer: "Prof. Andriamahefa", grade: "A", credits: 3, attendance: 93 },
      { code: "ECON101", lecturer: "Dr. Razafy", grade: "C", credits: 3, attendance: 85 }
    ],
    fees: { paid: 1200000, balance: 0, status: "Current" }
  }));
}

// Courses
if (!localStorage.getItem("courses")) {
  localStorage.setItem("courses", JSON.stringify([
    { code: "ACCT101", title: "Financial Accounting I", lecturer: "FAC-001", students: 30, department: "Accounting" },
    { code: "MGMT201", title: "Principles of Management", lecturer: "FAC-001", students: 25, department: "Management" },
    { code: "MATH101", title: "Business Mathematics", lecturer: "FAC-002", students: 120, department: "Mathematics" }
  ]));
}

// Announcements
if (!localStorage.getItem("announcements")) {
  localStorage.setItem("announcements", JSON.stringify([
    { id: 1, title: "End of Semester Exams Schedule", content: "Exams start June 28...", date: "2025-05-20", category: "urgent" },
    { id: 2, title: "Fee Payment Reminder", content: "Deadline May 30...", date: "2025-05-18", category: "notice" }
  ]));
}

// ===== NEW: Results Submissions (for HoD Results Approval) =====
if (!localStorage.getItem("resultsSubmissions")) {
  localStorage.setItem("resultsSubmissions", JSON.stringify([
    { id: "RES-001", course: "BIT201 — Database Systems", lecturer: "Dr. Jean Habimana", programme: "BIT Year 2", students: 42, submittedDate: "2026-08-19", fileUrl: "BIT201_Results.xlsx", status: "Pending" },
    { id: "RES-002", course: "BIT203 — Web Development", lecturer: "Dr. Alice Niyonsaba", programme: "BIT Year 2", students: 38, submittedDate: "2026-08-18", fileUrl: "BIT203_Results.xlsx", status: "Pending" },
    { id: "RES-003", course: "ACC201 — Financial Accounting II", lecturer: "Mr. David Uwimana", programme: "Accounting Year 2", students: 45, submittedDate: "2026-08-17", fileUrl: "ACC201_Results.xlsx", status: "Approved" },
    { id: "RES-004", course: "MGT201 — Principles of Management", lecturer: "Dr. Patrick Mugisha", programme: "Management Year 2", students: 40, submittedDate: "2026-08-16", fileUrl: "MGT201_Results.xlsx", status: "Returned" },
    { id: "RES-005", course: "BIT205 — Computer Networks", lecturer: "Prof. David Uwimana", programme: "BIT Year 3", students: 36, submittedDate: "2026-08-15", fileUrl: "BIT205_Results.xlsx", status: "Pending" }
  ]));
}

function getResultsSubmissions() {
  return JSON.parse(localStorage.getItem("resultsSubmissions") || "[]");
}

// ===== ENTERPRISE FUNCTIONS =====
function getAuditLogs() { return JSON.parse(localStorage.getItem("auditLogs") || "[]"); }
function addAuditLog(log) {
  const logs = getAuditLogs();
  logs.unshift({ id: Date.now(), ...log });
  localStorage.setItem("auditLogs", JSON.stringify(logs.slice(0, 1000))); // Keep last 1000
}

function getBackups() { return JSON.parse(localStorage.getItem("backups") || "[]"); }
function addBackup(backup) {
  const backups = getBackups();
  backups.unshift(backup);
  localStorage.setItem("backups", JSON.stringify(backups.slice(0, 50))); // Keep last 50
}

function getIntegrations() { return JSON.parse(localStorage.getItem("integrations") || "[]"); }
function updateIntegration(id, data) {
  const integrations = getIntegrations();
  const index = integrations.findIndex(i => i.id === id);
  if (index > -1) integrations[index] = { ...integrations[index], ...data };
  localStorage.setItem("integrations", JSON.stringify(integrations));
}

function getTickets() { return JSON.parse(localStorage.getItem("tickets") || "[]"); }
function addTicket(ticket) {
  const tickets = getTickets();
  tickets.unshift({ id: `#TKT-${Math.floor(Math.random()*1000).toString().padStart(3,'0')}`, ...ticket });
  localStorage.setItem("tickets", JSON.stringify(tickets));
}
function updateTicket(id, updates) {
  const tickets = getTickets();
  const index = tickets.findIndex(t => t.id === id);
  if (index > -1) tickets[index] = { ...tickets[index], ...updates };
  localStorage.setItem("tickets", JSON.stringify(tickets));
}

function getSecurityEvents() { return JSON.parse(localStorage.getItem("securityEvents") || "[]"); }

// ===== CORE FUNCTIONS =====
function getStudents() { return JSON.parse(localStorage.getItem("students") || "[]"); }
function saveStudents(data) { localStorage.setItem("students", JSON.stringify(data)); }
function getLecturers() { return JSON.parse(localStorage.getItem("lecturers") || "[]"); }
function getCourses() { return JSON.parse(localStorage.getItem("courses") || "[]"); }

// ===== LECTURER SPECIFIC DATA FUNCTIONS =====
/**
 * Get complete data for a specific lecturer (courses, students, stats)
 * @param {string} lecturerId - e.g. "FAC-001"
 * @returns {Object} Lecturer profile + aggregated data
 */
function getLecturerData(lecturerId) {
  const lecturers = getLecturers();
  const lecturer = lecturers.find(l => l.id === lecturerId);
  if (!lecturer) return null;

  const allStudents = getStudents();
  const courses = getCourses();
  
  // Aggregate students per course
  const courseStudents = {};
  Object.keys(lecturer.courses || {}).forEach(courseCode => {
    courseStudents[courseCode] = allStudents.filter(s => s.course === courseCode);
  });

  return {
    ...lecturer,
    studentsByCourse: courseStudents,
    allStudents: allStudents.filter(s => 
      Object.keys(lecturer.courses || {}).includes(s.course)
    ),
    stats: {
      totalCourses: Object.keys(lecturer.courses || {}).length,
      totalStudents: lecturer.totalStudents || Object.values(courseStudents).reduce((sum, students) => sum + students.length, 0),
      avgAttendance: 91, // Derived from courses
      pendingMarks: 23,
      classesToday: 3,
      nextClass: { time: "08:00", code: "ACCT101", room: "A1" }
    }
  };
}

/**
 * Get students enrolled in specific course (for attendance/marks)
 */
function getStudentsByCourse(courseCode) {
  return getStudents().filter(s => s.course === courseCode);
}

function getCurrentStudent() { return JSON.parse(localStorage.getItem("currentStudent") || "{}"); }
function getAnnouncements() { return JSON.parse(localStorage.getItem("announcements") || "[]"); }
function addAnnouncement(ann) {
  const announcements = getAnnouncements();
  announcements.push({ id: Date.now(), ...ann });
  localStorage.setItem("announcements", JSON.stringify(announcements));
}

