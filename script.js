/* ============================================
   ISCAM University Management System
   Main JavaScript
   ============================================ */

// ---- App State ----
const App = {
  currentPage: 'dashboard',
  sidebarOpen: false,
  currentTab: {},
  charts: {},

  init() {
    this.setupSidebar();
    this.setupHeader();
    this.setupNotifications();
    this.loadPage('dashboard');
    this.setupMobile();
    this.setupModalClosers();
    this.initAttendance();
    this.initMarks();
  },

  setupSidebar() {
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.dataset.page;
        this.loadPage(page);
        if (window.innerWidth <= 900) this.closeSidebar();
      });
    });
    // Expandable nav items
    document.querySelectorAll('.nav-item[data-expand]').forEach(item => {
      item.addEventListener('click', () => {
        const target = item.dataset.expand;
        const sub = document.getElementById(target);
        if (sub) {
          item.classList.toggle('expanded');
          sub.classList.toggle('open');
        }
      });
    });
  },

  loadPage(page) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    const pageEl = document.getElementById('page-' + page);
    if (pageEl) {
      pageEl.classList.add('active');
      this.currentPage = page;
    }

    // Mark nav active
    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navItem) {
      navItem.classList.add('active');
      // Open parent if needed
      const parentSub = navItem.closest('.nav-sub');
      if (parentSub) {
        parentSub.classList.add('open');
        const parentToggle = document.querySelector(`[data-expand="${parentSub.id}"]`);
        if (parentToggle) parentToggle.classList.add('expanded');
      }
    }

    // Init charts for dashboard
    if (page === 'dashboard') setTimeout(() => this.initDashboardCharts(), 100);
    if (page === 'results') setTimeout(() => this.initResultsChart(), 100);
    if (page === 'fees') setTimeout(() => this.initFeesChart(), 100);

    window.scrollTo(0, 0);
  },

  setupHeader() {
    const toggle = document.getElementById('sidebarToggle');
    if (toggle) toggle.addEventListener('click', () => this.toggleSidebar());

    // Profile dropdown
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dd = document.getElementById('profileDropdown');
      if (dd) dd.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.notif-panel, .profile-dropdown').forEach(p => p.classList.remove('open'));
    });
  },

  setupNotifications() {
    const btn = document.getElementById('notifBtn');
    const panel = document.getElementById('notifPanel');
    if (btn && panel) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.classList.toggle('open');
      });
      panel.addEventListener('click', e => e.stopPropagation());
    }
  },

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
  },

  closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  },

  setupMobile() {
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.addEventListener('click', () => this.closeSidebar());
  },

  setupModalClosers() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('open');
      });
    });
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal-overlay').classList.remove('open');
      });
    });
  },

  openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('open');
  },
  closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('open');
  },

  switchTab(tabGroup, tabName) {
    document.querySelectorAll(`[data-tab-group="${tabGroup}"]`).forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tabName);
    });
    document.querySelectorAll(`[data-tab-content="${tabGroup}"]`).forEach(c => {
      c.classList.toggle('hidden', c.dataset.content !== tabName);
    });
  },

  // ---- Charts ----
  initDashboardCharts() {
    this.destroyChart('enrollChart');
    this.destroyChart('payChart');
    this.destroyChart('deptChart');

    // Enrollment chart
    const ctx1 = document.getElementById('enrollChart');
    if (ctx1) {
      this.charts['enrollChart'] = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Enrolled Students',
            data: [45, 52, 38, 60, 70, 55, 48, 80, 95, 110, 88, 72],
            backgroundColor: 'rgba(26,58,107,0.8)',
            borderRadius: 6,
          }, {
            label: 'New Registrations',
            data: [12, 18, 10, 22, 28, 15, 12, 35, 40, 45, 30, 25],
            backgroundColor: 'rgba(232,160,32,0.75)',
            borderRadius: 6,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: { legend: { position: 'top', labels: { font: { family: 'DM Sans', size: 12 }, boxWidth: 12 } } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { family: 'DM Sans', size: 11 } } },
            y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { family: 'DM Sans', size: 11 } } }
          }
        }
      });
    }

    // Payment chart
    const ctx2 = document.getElementById('payChart');
    if (ctx2) {
      this.charts['payChart'] = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Collected (MGA)',
            data: [2800000, 3200000, 2100000, 4500000, 3900000, 5200000],
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22,163,74,0.08)',
            fill: true, tension: 0.4,
            pointBackgroundColor: '#16a34a',
            pointRadius: 4,
          }, {
            label: 'Expected (MGA)',
            data: [4000000, 4000000, 4000000, 5500000, 5500000, 6000000],
            borderColor: 'rgba(26,58,107,0.5)',
            borderDash: [6, 3],
            backgroundColor: 'transparent',
            tension: 0.4, pointRadius: 0,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: { legend: { position: 'top', labels: { font: { family: 'DM Sans', size: 12 }, boxWidth: 12 } } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { family: 'DM Sans', size: 11 } } },
            y: {
              grid: { color: 'rgba(0,0,0,0.05)' },
              ticks: {
                font: { family: 'DM Sans', size: 11 },
                callback: v => (v / 1000000).toFixed(1) + 'M'
              }
            }
          }
        }
      });
    }

    // Department donut
    const ctx3 = document.getElementById('deptChart');
    if (ctx3) {
      this.charts['deptChart'] = new Chart(ctx3, {
        type: 'doughnut',
        data: {
          labels: ['Accounting', 'Management', 'Finance', 'IT', 'Law', 'Economics'],
          datasets: [{
            data: [285, 210, 175, 140, 90, 68],
            backgroundColor: ['#1a3a6b', '#e8a020', '#16a34a', '#0891b2', '#7c3aed', '#dc2626'],
            borderWidth: 2, borderColor: '#fff',
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: { position: 'bottom', labels: { font: { family: 'DM Sans', size: 11 }, boxWidth: 10, padding: 12 } }
          }
        }
      });
    }
  },

  initResultsChart() {
    this.destroyChart('gradesDistChart');
    const ctx = document.getElementById('gradesDistChart');
    if (!ctx) return;
    this.charts['gradesDistChart'] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['A (Excellent)', 'B (Good)', 'C (Average)', 'D (Below Avg)', 'F (Fail)'],
        datasets: [{
          label: 'Number of Students',
          data: [42, 78, 55, 23, 10],
          backgroundColor: ['#16a34a', '#0891b2', '#e8a020', '#d97706', '#dc2626'],
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'DM Sans', size: 11 } } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { family: 'DM Sans', size: 11 } } }
        }
      }
    });
  },

  initFeesChart() {
    this.destroyChart('feesChart');
    const ctx = document.getElementById('feesChart');
    if (!ctx) return;
    this.charts['feesChart'] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Accounting', 'Management', 'Finance', 'IT', 'Law', 'Economics'],
        datasets: [{
          label: 'Paid',
          data: [18500000, 14200000, 11800000, 9500000, 6200000, 4500000],
          backgroundColor: '#16a34a', borderRadius: 6,
        }, {
          label: 'Outstanding',
          data: [4200000, 3800000, 2900000, 2100000, 1400000, 1200000],
          backgroundColor: '#dc2626', borderRadius: 6,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { font: { family: 'DM Sans', size: 12 }, boxWidth: 12 } } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'DM Sans', size: 11 } } },
          y: {
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { font: { family: 'DM Sans', size: 11 }, callback: v => (v / 1000000).toFixed(0) + 'M' }
          }
        }
      }
    });
  },

  destroyChart(id) {
    if (this.charts[id]) {
      this.charts[id].destroy();
      delete this.charts[id];
    }
  },

  // ---- Attendance ----
  initAttendance() {
    document.querySelectorAll('.att-check').forEach(check => {
      check.querySelectorAll('.att-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          check.querySelectorAll('.att-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    });
  },

  // ---- Marks entry ----
  initMarks() {
    document.querySelectorAll('.marks-input').forEach(input => {
      input.addEventListener('input', () => {
        const row = input.closest('tr');
        if (!row) return;
        const inputs = row.querySelectorAll('.marks-input');
        let total = 0, count = 0;
        inputs.forEach(i => { const v = parseFloat(i.value); if (!isNaN(v)) { total += v; count++; } });
        const avg = count ? (total / count).toFixed(1) : '-';
        const gradeCell = row.querySelector('.grade-cell');
        const avgCell = row.querySelector('.avg-cell');
        if (avgCell) avgCell.textContent = avg !== '-' ? avg : '-';
        if (gradeCell && avg !== '-') gradeCell.textContent = this.calcGrade(parseFloat(avg));
      });
    });
  },

  calcGrade(score) {
    if (score >= 85) return 'A';
    if (score >= 75) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
  },

  // ---- Helpers ----
  showToast(msg, type = 'success') {
    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${msg}`;
    document.getElementById('toastContainer').appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
  },

  confirmDelete(name) {
    const modal = document.getElementById('deleteModal');
    const nameEl = document.getElementById('deleteTargetName');
    if (nameEl) nameEl.textContent = name;
    if (modal) modal.classList.add('open');
  },

  filterTable(inputId, tableId) {
    const query = document.getElementById(inputId)?.value.toLowerCase() || '';
    const rows = document.querySelectorAll(`#${tableId} tbody tr`);
    rows.forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
  },

  // Navigation from quick actions
  goto(page) { this.loadPage(page); },
};

// ---- Toast styles (injected) ----
const toastStyle = document.createElement('style');
toastStyle.textContent = `
  #toastContainer { position: fixed; bottom: 24px; right: 24px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; }
  .toast {
    display: flex; align-items: center; gap: 10px;
    padding: 13px 18px; border-radius: 8px;
    font-size: 0.87rem; font-weight: 500;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    transform: translateX(100px); opacity: 0;
    transition: all 0.3s ease; color: #fff; min-width: 250px;
  }
  .toast.show { transform: translateX(0); opacity: 1; }
  .toast-success { background: #16a34a; }
  .toast-error { background: #dc2626; }
  .toast-warning { background: #d97706; }
  .toast-info { background: #0891b2; }
`;
document.head.appendChild(toastStyle);

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => App.init());

// ---- Global helpers exposed ----
window.App = App;
window.openModal = (id) => App.openModal(id);
window.closeModal = (id) => App.closeModal(id);
window.switchTab = (g, t) => App.switchTab(g, t);
window.confirmDelete = (n) => App.confirmDelete(n);
window.filterTable = (i, t) => App.filterTable(i, t);
window.goto = (p) => App.goto(p);
window.showToast = (m, t) => App.showToast(m, t);