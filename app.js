/* ============================================
   ISCAM University Management System
   Main JavaScript
   ============================================ */


/* =========================================================
   HoD ATTENDANCE DATA
   ========================================================= */

const HOD_ATTENDANCE_DATA = [

  // =======================================================
  // YEAR 1 — SEMESTER 1
  // =======================================================

  {
    id: 'ATT-001',
    studentId: 'ISCAM-001',
    studentName: 'Aline Uwase',
    year: '1',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT101',
    courseName: 'Introduction to Information Technology',
    lecturer: 'Dr. Jean Bosco',
    classesHeld: 20,
    present: 19,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-002',
    studentId: 'ISCAM-002',
    studentName: 'Eric Niyonzima',
    year: '1',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT101',
    courseName: 'Introduction to Information Technology',
    lecturer: 'Dr. Jean Bosco',
    classesHeld: 20,
    present: 17,
    absent: 3,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-003',
    studentId: 'ISCAM-003',
    studentName: 'Diane Mukamana',
    year: '1',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT102',
    courseName: 'Computer Applications',
    lecturer: 'Ms. Clarisse Mukamana',
    classesHeld: 18,
    present: 18,
    absent: 0,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // YEAR 1 — SEMESTER 2
  // =======================================================

  {
    id: 'ATT-004',
    studentId: 'ISCAM-004',
    studentName: 'Samuel Habimana',
    year: '1',
    semester: '2',
    intake: 'January',
    courseCode: 'BIT103',
    courseName: 'Programming Fundamentals',
    lecturer: 'Mr. Patrick Nkurunziza',
    classesHeld: 22,
    present: 20,
    absent: 2,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-005',
    studentId: 'ISCAM-005',
    studentName: 'Grace Ingabire',
    year: '1',
    semester: '2',
    intake: 'May',
    courseCode: 'BIT104',
    courseName: 'Web Development',
    lecturer: 'Ms. Alice Uwimana',
    classesHeld: 20,
    present: 14,
    absent: 6,
    status: 'low',
    corrected: false
  },

  // =======================================================
  // YEAR 1 — SEMESTER 3
  // =======================================================

  {
    id: 'ATT-006',
    studentId: 'ISCAM-006',
    studentName: 'Patrick Tuyisenge',
    year: '1',
    semester: '3',
    intake: 'September',
    courseCode: 'BIT105',
    courseName: 'Database Fundamentals',
    lecturer: 'Mr. Emmanuel Hakizimana',
    classesHeld: 20,
    present: 18,
    absent: 2,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // YEAR 2 — SEMESTER 1
  // =======================================================

  {
    id: 'ATT-007',
    studentId: 'ISCAM-007',
    studentName: 'Jean Claude Mugisha',
    year: '2',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT201',
    courseName: 'Database Systems',
    lecturer: 'Mr. Emmanuel Hakizimana',
    classesHeld: 24,
    present: 22,
    absent: 2,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-008',
    studentId: 'ISCAM-008',
    studentName: 'Claudine Uwamahoro',
    year: '2',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT201',
    courseName: 'Database Systems',
    lecturer: 'Mr. Emmanuel Hakizimana',
    classesHeld: 24,
    present: 17,
    absent: 7,
    status: 'low',
    corrected: false
  },

  {
    id: 'ATT-009',
    studentId: 'ISCAM-009',
    studentName: 'David Uwimana',
    year: '2',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT202',
    courseName: 'Web Development',
    lecturer: 'Ms. Alice Uwimana',
    classesHeld: 22,
    present: 21,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // YEAR 2 — SEMESTER 2
  // =======================================================

  {
    id: 'ATT-010',
    studentId: 'ISCAM-010',
    studentName: 'Marie Claire Mukeshimana',
    year: '2',
    semester: '2',
    intake: 'May',
    courseCode: 'BIT203',
    courseName: 'Software Engineering',
    lecturer: 'Dr. Diane Mukamana',
    classesHeld: 20,
    present: 19,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-011',
    studentId: 'ISCAM-011',
    studentName: 'Emmanuel Hakizimana',
    year: '2',
    semester: '2',
    intake: 'September',
    courseCode: 'BIT204',
    courseName: 'Computer Architecture',
    lecturer: 'Mr. Kevin Irakoze',
    classesHeld: 21,
    present: 15,
    absent: 6,
    status: 'low',
    corrected: false
  },

  // =======================================================
  // YEAR 2 — SEMESTER 3
  // =======================================================

  {
    id: 'ATT-012',
    studentId: 'ISCAM-012',
    studentName: 'Alice Nyirahabimana',
    year: '2',
    semester: '3',
    intake: 'September',
    courseCode: 'BIT205',
    courseName: 'Computer Networks',
    lecturer: 'Mr. Fabrice Nsengiyumva',
    classesHeld: 20,
    present: 19,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-013',
    studentId: 'ISCAM-013',
    studentName: 'Fabrice Nsengiyumva',
    year: '2',
    semester: '3',
    intake: 'September',
    courseCode: 'BIT205',
    courseName: 'Computer Networks',
    lecturer: 'Mr. Fabrice Nsengiyumva',
    classesHeld: 20,
    present: 13,
    absent: 7,
    status: 'low',
    corrected: false
  },

  // =======================================================
  // YEAR 3 — SEMESTER 1
  // =======================================================

  {
    id: 'ATT-014',
    studentId: 'ISCAM-014',
    studentName: 'Kevin Irakoze',
    year: '3',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT301',
    courseName: 'Advanced Database Systems',
    lecturer: 'Dr. Jean Bosco',
    classesHeld: 22,
    present: 21,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-015',
    studentId: 'ISCAM-015',
    studentName: 'Chantal Mukamana',
    year: '3',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT302',
    courseName: 'Mobile Application Development',
    lecturer: 'Mr. Patrick Nkurunziza',
    classesHeld: 20,
    present: 16,
    absent: 4,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // YEAR 3 — SEMESTER 2
  // =======================================================

  {
    id: 'ATT-016',
    studentId: 'ISCAM-016',
    studentName: 'Alexis Nshimiyimana',
    year: '3',
    semester: '2',
    intake: 'May',
    courseCode: 'BIT303',
    courseName: 'Software Project Management',
    lecturer: 'Dr. Diane Mukamana',
    classesHeld: 18,
    present: 17,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-017',
    studentId: 'ISCAM-017',
    studentName: 'Olive Uwitonze',
    year: '3',
    semester: '2',
    intake: 'September',
    courseCode: 'BIT304',
    courseName: 'Information Security',
    lecturer: 'Mr. Emmanuel Hakizimana',
    classesHeld: 20,
    present: 14,
    absent: 6,
    status: 'low',
    corrected: false
  },

  // =======================================================
  // YEAR 3 — SEMESTER 3
  // =======================================================

  {
    id: 'ATT-018',
    studentId: 'ISCAM-018',
    studentName: 'Derrick Bizimana',
    year: '3',
    semester: '3',
    intake: 'September',
    courseCode: 'BIT305',
    courseName: 'Cloud Computing',
    lecturer: 'Mr. Kevin Irakoze',
    classesHeld: 20,
    present: 20,
    absent: 0,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // YEAR 4 — SEMESTER 1
  // =======================================================

  {
    id: 'ATT-019',
    studentId: 'ISCAM-019',
    studentName: 'Esther Mutoni',
    year: '4',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT401',
    courseName: 'Research Methodology',
    lecturer: 'Dr. Jean Bosco',
    classesHeld: 16,
    present: 15,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  {
    id: 'ATT-020',
    studentId: 'ISCAM-020',
    studentName: 'Theogene Rukundo',
    year: '4',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT402',
    courseName: 'Information Systems Management',
    lecturer: 'Ms. Clarisse Mukamana',
    classesHeld: 18,
    present: 13,
    absent: 5,
    status: 'low',
    corrected: false
  },

  // =======================================================
  // YEAR 4 — SEMESTER 2
  // =======================================================

  {
    id: 'ATT-021',
    studentId: 'ISCAM-021',
    studentName: 'Beata Mukamana',
    year: '4',
    semester: '2',
    intake: 'May',
    courseCode: 'BIT403',
    courseName: 'IT Governance',
    lecturer: 'Mr. Fabrice Nsengiyumva',
    classesHeld: 18,
    present: 17,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // YEAR 4 — SEMESTER 3
  // =======================================================

  {
    id: 'ATT-022',
    studentId: 'ISCAM-022',
    studentName: 'Yves Hakizimana',
    year: '4',
    semester: '3',
    intake: 'September',
    courseCode: 'BIT404',
    courseName: 'Final Year Project',
    lecturer: 'Dr. Diane Mukamana',
    classesHeld: 15,
    present: 14,
    absent: 1,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // REPEATED / FAILED COURSE
  // YEAR 3 STUDENT TAKING YEAR 2 COURSE
  // =======================================================

  {
    id: 'ATT-023',
    studentId: 'ISCAM-023',
    studentName: 'Moses Nkurunziza',
    year: '3',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT201',
    courseName: 'Database Systems',
    lecturer: 'Mr. Emmanuel Hakizimana',
    originalYear: '2',
    originalSemester: '1',
    repeatCourse: true,
    classesHeld: 24,
    present: 20,
    absent: 4,
    status: 'normal',
    corrected: false
  },

  // =======================================================
  // ANOTHER REPEATED COURSE
  // YEAR 4 STUDENT TAKING YEAR 2 COURSE
  // =======================================================

  {
    id: 'ATT-024',
    studentId: 'ISCAM-024',
    studentName: 'Ange Uwase',
    year: '4',
    semester: '2',
    intake: 'May',
    courseCode: 'BIT203',
    courseName: 'Software Engineering',
    lecturer: 'Dr. Diane Mukamana',
    originalYear: '2',
    originalSemester: '2',
    repeatCourse: true,
    classesHeld: 20,
    present: 18,
    absent: 2,
    status: 'normal',
    corrected: false
  }

];

// ======================================================
// HOD ATTENDANCE CORRECTION HISTORY
// ======================================================

let HOD_ATTENDANCE_CORRECTION_HISTORY = [

  {
    id: 'COR-001',
    studentId: 'ISCAM-005',
    studentName: 'Grace Ingabire',
    courseCode: 'BIT104',
    courseName: 'Web Development',
    previousAttendance: 65,
    correctedAttendance: 70,
    reason: 'Attendance record updated after verification.',
    correctedBy: 'HoD',
    date: '30 Aug 2026',
    status: 'Completed'
  },

  {
    id: 'COR-002',
    studentId: 'ISCAM-008',
    studentName: 'Claudine Uwamahoro',
    courseCode: 'BIT201',
    courseName: 'Database Systems',
    previousAttendance: 67,
    correctedAttendance: 71,
    reason: 'Missing attendance entry verified.',
    correctedBy: 'HoD',
    date: '29 Aug 2026',
    status: 'Completed'
  },

  {
    id: 'COR-003',
    studentId: 'ISCAM-011',
    studentName: 'Emmanuel Hakizimana',
    courseCode: 'BIT204',
    courseName: 'Computer Architecture',
    previousAttendance: 66,
    correctedAttendance: 71,
    reason: 'Attendance register corrected.',
    correctedBy: 'HoD',
    date: '28 Aug 2026',
    status: 'Completed'
  },

  {
    id: 'COR-004',
    studentId: 'ISCAM-017',
    studentName: 'Olive Uwitonze',
    courseCode: 'BIT304',
    courseName: 'Information Security',
    previousAttendance: 65,
    correctedAttendance: 70,
    reason: 'Lecturer attendance submission verified.',
    correctedBy: 'HoD',
    date: '27 Aug 2026',
    status: 'Completed'
  }

];



function renderAttendanceTrendChart(filteredData) {

  const canvas = document.getElementById('attendanceTrendChart');

  if (!canvas) return;

  // Group attendance percentages by semester
  const semesterData = {
    'Semester 1': [],
    'Semester 2': [],
    'Semester 3': []
  };

filteredData.forEach(record => {
    const attendanceRate =
      record.classesHeld > 0
        ? (record.present / record.classesHeld) * 100
        : 0;

    const semesterKey = `Semester ${record.semester}`;

    if (semesterData[semesterKey]) {
      semesterData[semesterKey].push(attendanceRate);
    }

  });

  // Calculate average attendance for each semester
  const semesterAverages = Object.keys(semesterData).map(semester => {

    const values = semesterData[semester];

    if (values.length === 0) {
      return 0;
    }

    const total = values.reduce((sum, value) => sum + value, 0);

    return Number((total / values.length).toFixed(1));

  });

  // Prevent duplicate chart instances
  if (window.attendanceTrendChartInstance) {
    window.attendanceTrendChartInstance.destroy();
  }

  window.attendanceTrendChartInstance = new Chart(canvas, {

    type: 'line',

    data: {

      labels: [
        'Semester 1',
        'Semester 2',
        'Semester 3'
      ],

      datasets: [{
        label: 'Average Attendance',

        data: semesterAverages,

        tension: 0.35,

        fill: false,

        pointRadius: 5,

        pointHoverRadius: 7
      }]

    },

    options: {

      responsive: true,

      maintainAspectRatio: false,

      plugins: {

        legend: {
          display: true
        },

        tooltip: {

          callbacks: {

            label: function(context) {
              return `Average Attendance: ${context.parsed.y}%`;
            }

          }

        }

      },

      scales: {

        y: {

          beginAtZero: false,

          min: 60,

          max: 100,

          ticks: {

            callback: function(value) {
              return value + '%';
            }

          },

          title: {
            display: true,
            text: 'Attendance Percentage'
          }

        },

        x: {

          title: {
            display: true,
            text: 'Academic Semester'
          }

        }

      }

    }

  });

}




/* =========================================================
   HoD TIMETABLE MANAGEMENT DATA
   ========================================================= */

const HOD_TIMETABLE_DATA = [

  {
    id: 'TT-001',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT101',
    courseName: 'Introduction to Information Technology',
    module: 'Module 1',
    lecturer: 'Dr. Jean Bosco',
    programme: 'Bachelor of Information Technology',
    year: '1',
    registeredStudents: 42,
    session: 'Day',
    startDate: '07 Sep 2026',
    endDate: '25 Sep 2026',
    time: '08:00–10:00',
    room: 'Room 101',
    status: 'Published'
  },

  {
    id: 'TT-002',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT102',
    courseName: 'Computer Applications',
    module: 'Module 1',
    lecturer: 'Ms. Alice Uwimana',
    programme: 'Bachelor of Information Technology',
    year: '1',
    registeredStudents: 40,
    session: 'Day',
    startDate: '07 Sep 2026',
    endDate: '25 Sep 2026',
    time: '10:00–12:00',
    room: 'Computer Lab 1',
    status: 'Published'
  },

  {
    id: 'TT-003',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT201',
    courseName: 'Database Systems',
    module: 'Module 1',
    lecturer: 'Mr. Emmanuel Hakizimana',
    programme: 'Bachelor of Information Technology',
    year: '2',
    registeredStudents: 36,
    session: 'Evening',
    startDate: '07 Sep 2026',
    endDate: '25 Sep 2026',
    time: '18:00–20:00',
    room: 'Room 203',
    status: 'Published'
  },

  {
    id: 'TT-004',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT301',
    courseName: 'Advanced Database Systems',
    module: 'Module 1',
    lecturer: 'Dr. Jean Bosco',
    programme: 'Bachelor of Information Technology',
    year: '3',
    registeredStudents: 31,
    session: 'Weekend',
    startDate: '12 Sep 2026',
    endDate: '27 Sep 2026',
    time: '08:00–11:00',
    room: 'Room 301',
    status: 'Draft'
  },

  {
    id: 'TT-005',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT401',
    courseName: 'Research Methodology',
    module: 'Module 1',
    lecturer: 'Dr. Diane Mukamana',
    programme: 'Bachelor of Information Technology',
    year: '4',
    registeredStudents: 28,
    session: 'Day',
    startDate: '07 Sep 2026',
    endDate: '25 Sep 2026',
    time: '08:00–10:00',
    room: 'Room 401',
    status: 'Published'
  },

  {
    id: 'TT-006',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT103',
    courseName: 'Programming Fundamentals',
    module: 'Module 2',
    lecturer: 'Mr. Emmanuel Hakizimana',
    programme: 'Bachelor of Information Technology',
    year: '1',
    registeredStudents: 45,
    session: 'Day',
    startDate: '28 Sep 2026',
    endDate: '16 Oct 2026',
    time: '08:00–10:00',
    room: 'Computer Lab 2',
    status: 'Draft'
  },

  {
    id: 'TT-007',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT104',
    courseName: 'Web Development',
    module: 'Module 2',
    lecturer: 'Ms. Alice Uwimana',
    programme: 'Bachelor of Information Technology',
    year: '1',
    registeredStudents: 43,
    session: 'Day',
    startDate: '28 Sep 2026',
    endDate: '16 Oct 2026',
    time: '10:00–12:00',
    room: 'Computer Lab 1',
    status: 'Draft'
  },

  {
    id: 'TT-008',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT202',
    courseName: 'Web Development',
    module: 'Module 2',
    lecturer: 'Ms. Alice Uwimana',
    programme: 'Bachelor of Information Technology',
    year: '2',
    registeredStudents: 38,
    session: 'Evening',
    startDate: '28 Sep 2026',
    endDate: '16 Oct 2026',
    time: '18:00–20:00',
    room: 'Room 203',
    status: 'Draft'
  },

  {
    id: 'TT-009',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT302',
    courseName: 'Mobile Application Development',
    module: 'Module 2',
    lecturer: 'Mr. Emmanuel Hakizimana',
    programme: 'Bachelor of Information Technology',
    year: '3',
    registeredStudents: 30,
    session: 'Weekend',
    startDate: '03 Oct 2026',
    endDate: '18 Oct 2026',
    time: '08:00–11:00',
    room: 'Computer Lab 2',
    status: 'Draft'
  },

  {
    id: 'TT-010',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT402',
    courseName: 'Information Systems Management',
    module: 'Module 2',
    lecturer: 'Dr. Diane Mukamana',
    programme: 'Bachelor of Information Technology',
    year: '4',
    registeredStudents: 27,
    session: 'Evening',
    startDate: '28 Sep 2026',
    endDate: '16 Oct 2026',
    time: '20:00–21:00',
    room: 'Room 401',
    status: 'Draft'
  },

  {
    id: 'TT-011',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT105',
    courseName: 'Database Fundamentals',
    module: 'Module 3',
    lecturer: 'Mr. Emmanuel Hakizimana',
    programme: 'Bachelor of Information Technology',
    year: '1',
    registeredStudents: 44,
    session: 'Day',
    startDate: '19 Oct 2026',
    endDate: '06 Nov 2026',
    time: '08:00–10:00',
    room: 'Computer Lab 1',
    status: 'Draft'
  },

  {
    id: 'TT-012',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT203',
    courseName: 'Software Engineering',
    module: 'Module 3',
    lecturer: 'Dr. Diane Mukamana',
    programme: 'Bachelor of Information Technology',
    year: '2',
    registeredStudents: 35,
    session: 'Evening',
    startDate: '19 Oct 2026',
    endDate: '06 Nov 2026',
    time: '18:00–20:00',
    room: 'Room 204',
    status: 'Draft'
  },

  {
    id: 'TT-013',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT303',
    courseName: 'Software Project Management',
    module: 'Module 3',
    lecturer: 'Dr. Jean Bosco',
    programme: 'Bachelor of Information Technology',
    year: '3',
    registeredStudents: 29,
    session: 'Day',
    startDate: '19 Oct 2026',
    endDate: '06 Nov 2026',
    time: '10:00–12:00',
    room: 'Room 302',
    status: 'Draft'
  },

  {
    id: 'TT-014',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT403',
    courseName: 'IT Governance',
    module: 'Module 3',
    lecturer: 'Mr. Emmanuel Hakizimana',
    programme: 'Bachelor of Information Technology',
    year: '4',
    registeredStudents: 26,
    session: 'Weekend',
    startDate: '24 Oct 2026',
    endDate: '08 Nov 2026',
    time: '08:00–11:00',
    room: 'Room 402',
    status: 'Draft'
  },

  {
    id: 'TT-015',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT106',
    courseName: 'Computer Networks',
    module: 'Module 4',
    lecturer: 'Dr. Jean Bosco',
    programme: 'Bachelor of Information Technology',
    year: '1',
    registeredStudents: 41,
    session: 'Day',
    startDate: '09 Nov 2026',
    endDate: '27 Nov 2026',
    time: '08:00–10:00',
    room: 'Room 101',
    status: 'Draft'
  },

  {
    id: 'TT-016',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'January',
    courseCode: 'BIT204',
    courseName: 'Computer Architecture',
    module: 'Module 4',
    lecturer: 'Mr. Emmanuel Hakizimana',
    programme: 'Bachelor of Information Technology',
    year: '2',
    registeredStudents: 34,
    session: 'Evening',
    startDate: '09 Nov 2026',
    endDate: '27 Nov 2026',
    time: '18:00–20:00',
    room: 'Room 205',
    status: 'Draft'
  },

  {
    id: 'TT-017',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT304',
    courseName: 'Information Security',
    module: 'Module 4',
    lecturer: 'Dr. Diane Mukamana',
    programme: 'Bachelor of Information Technology',
    year: '3',
    registeredStudents: 32,
    session: 'Day',
    startDate: '09 Nov 2026',
    endDate: '27 Nov 2026',
    time: '10:00–12:00',
    room: 'Room 303',
    status: 'Draft'
  },

  {
    id: 'TT-018',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT404',
    courseName: 'Final Year Project',
    module: 'Module 4',
    lecturer: 'Dr. Diane Mukamana',
    programme: 'Bachelor of Information Technology',
    year: '4',
    registeredStudents: 25,
    session: 'Weekend',
    startDate: '14 Nov 2026',
    endDate: '29 Nov 2026',
    time: '08:00–11:00',
    room: 'Room 403',
    status: 'Draft'
  },

  {
    id: 'TT-019',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'September',
    courseCode: 'BIT201',
    courseName: 'Database Systems — Retake',
    module: 'Module 4',
    lecturer: 'Mr. Emmanuel Hakizimana',
    programme: 'Bachelor of Information Technology',
    year: '3',
    registeredStudents: 8,
    session: 'Evening',
    startDate: '09 Nov 2026',
    endDate: '27 Nov 2026',
    time: '20:00–21:00',
    room: 'Room 203',
    status: 'Draft'
  },

  {
    id: 'TT-020',
    academicYear: '2026-2027',
    semester: '1',
    intake: 'May',
    courseCode: 'BIT203',
    courseName: 'Software Engineering — Retake',
    module: 'Module 4',
    lecturer: 'Dr. Diane Mukamana',
    programme: 'Bachelor of Information Technology',
    year: '4',
    registeredStudents: 6,
    session: 'Weekend',
    startDate: '14 Nov 2026',
    endDate: '29 Nov 2026',
    time: '11:00–13:00',
    room: 'Room 204',
    status: 'Draft'
  }

];


/* =========================================================
   HoD TIMETABLE SUPPORT DATA
   ========================================================= */

let HOD_TIMETABLE_HISTORY = [
  {
    course: 'Database Systems',
    module: 'Module 1',
    previousSchedule: 'Room 202 · 18:00–20:00',
    newSchedule: 'Room 203 · 18:00–20:00',
    changedBy: 'HoD',
    date: '30 Aug 2026',
    reason: 'Room allocation adjustment'
  },
  {
    course: 'Web Development',
    module: 'Module 2',
    previousSchedule: '08:00–10:00',
    newSchedule: '10:00–12:00',
    changedBy: 'HoD',
    date: '29 Aug 2026',
    reason: 'Lecturer availability'
  },
  {
    course: 'Information Security',
    module: 'Module 4',
    previousSchedule: 'Room 301 · 10:00–12:00',
    newSchedule: 'Room 303 · 10:00–12:00',
    changedBy: 'HoD',
    date: '28 Aug 2026',
    reason: 'Room conflict resolved'
  }
];




// ---- App State ----
const App = {
    currentPage: 'dashboard',
    sidebarOpen: false,
    currentTab: {},
    charts: {},

    /* =====================================================
       HOD DASHBOARD AUTO SYNC
       ===================================================== */

    hodDashboardSyncTimer: null,

      // ======================================================
    // HOD REQUEST DECISION STATE
    // ======================================================

    hodRequestDecisionId: null,
    hodRequestDecisionAction: null,

  init() {
    // Check auth session
    const user = getCurrentUser();
    if (!user.username) {
      window.location.href = 'welcome.html';
      return;
    }
    
    this.showUserInfo(user);
    
    this.setupSidebar();
    this.setupHeader();
    this.setupNotifications();
    this.setupLecturerRole(); // New: Role-specific setup
    this.loadPage('dashboard');
    this.setupMobile();
    this.setupModalClosers();
    this.initAttendance();
    this.initMarks();
  },



/* =========================================================
   HOD DASHBOARD INITIALIZATION
   ========================================================= */

initHODDashboard() {

    const dashboard =
        document.getElementById(
            'page-dashboard'
        );

    if (!dashboard) {
        return;
    }


    /* =====================================================
       FIRST DASHBOARD REFRESH
       ===================================================== */

    this.refreshHODDashboard();


    /* =====================================================
       AUTOMATIC DASHBOARD SYNCHRONIZATION
       -----------------------------------------------------
       Keeps Dashboard synchronized with Students,
       Lecturers, Courses, Results, Attendance,
       Timetable and Requests.
       ===================================================== */

    if (
        !this.hodDashboardSyncTimer
    ) {

        this.hodDashboardSyncTimer =
            setInterval(() => {

                const currentDashboard =
                    document.getElementById(
                        'page-dashboard'
                    );

                if (
                    !currentDashboard ||
                    !currentDashboard.classList.contains(
                        'active'
                    )
                ) {
                    return;
                }

                this.refreshHODDashboard();

            }, 1000);

    }

},
 


 /* =========================================================
   REFRESH COMPLETE HOD DASHBOARD
   ========================================================= */

refreshHODDashboard() {

    const dashboard =
        document.getElementById(
            'page-dashboard'
        );

    if (!dashboard) {
        return;
    }


    /* =====================================================
       MAIN DASHBOARD CARDS
       ===================================================== */

    this.updateHODDashboardStats();


    /* =====================================================
       DEPARTMENT SNAPSHOT
       ===================================================== */

    this.renderHODDashboardSnapshot();


    /* =====================================================
       APPROVAL QUEUE
       ===================================================== */

    this.renderHODDashboardResultsQueue();

    this.renderHODDashboardAttendanceQueue();

    this.renderHODDashboardTimetableQueue();

    this.renderHODDashboardRequestsQueue();


    /* =====================================================
       URGENT ALERTS
       ===================================================== */

    this.updateHODDashboardAlerts();


    /* =====================================================
       PERFORMANCE TREND
       ===================================================== */

    this.updateHODDashboardTrend();

},



  /* =========================================================
     DASHBOARD STATISTICS
     ========================================================= */

  updateHODDashboardStats() {

    const students =
      typeof getStudents === 'function'
        ? (
            getStudents() || []
          )
        : [];


    const lecturers =
      typeof getLecturers === 'function'
        ? (
            getLecturers() || []
          )
        : [];


    const courses =
  typeof getCourses === 'function'
    ? (getCourses() || [])
    : [];


/*
 * Courses are stored in localStorage.
 * The Courses page updates this data when
 * a new course is created.
 */
const storedCourses =
  (() => {

    try {

      const saved =
        JSON.parse(
          localStorage.getItem('courses') || '[]'
        );

      return Array.isArray(saved)
        ? saved
        : [];

    } catch (error) {

      return [];

    }

  })();


const dashboardCourses =
  storedCourses.length > 0
    ? storedCourses
    : courses;


const studentCount =
  students.length;

const lecturerCount =
  lecturers.length;

const courseCount =
  dashboardCourses.length;


    const performance =
      this.getHODDashboardAveragePerformance(
        students
      );


    const studentsEl =
      document.getElementById(
        'totalStudents'
      );

    const lecturersEl =
      document.getElementById(
        'totalLecturers'
      );

    const coursesEl =
      document.getElementById(
        'totalCourses'
      );

    const performanceEl =
      document.getElementById(
        'avgPerformance'
      );


    if (studentsEl) {
      studentsEl.textContent =
        studentCount;
    }


    if (lecturersEl) {
      lecturersEl.textContent =
        lecturerCount;
    }


    if (coursesEl) {
      coursesEl.textContent =
        courseCount;
    }


    if (performanceEl) {

      performanceEl.textContent =
        `${performance.toFixed(1)}%`;

    }

  },


  /* =========================================================
     CALCULATE AVERAGE PERFORMANCE
     ========================================================= */

  getHODDashboardAveragePerformance(
    students
  ) {

    if (
      !Array.isArray(students) ||
      students.length === 0
    ) {
      return 0;
    }


    const values = [];


    students.forEach(student => {

      const possibleValues = [

        student.performance,

        student.averagePerformance,

        student.average,

        student.avgPerformance,

        student.mark,

        student.score,

        student.averageMark,

        student.overallAverage,

        student.percentage

      ];


      const value =
        possibleValues.find(
          item =>
            item !== undefined &&
            item !== null &&
            item !== '' &&
            !Number.isNaN(
              Number(item)
            )
        );


      if (
        value !== undefined
      ) {

        let numericValue =
          Number(value);


        /*
         * If the source stores a decimal
         * such as 0.78, convert it to 78%.
         */

        if (
          numericValue > 0 &&
          numericValue <= 1
        ) {

          numericValue *= 100;

        }


        if (
          numericValue >= 0 &&
          numericValue <= 100
        ) {

          values.push(
            numericValue
          );

        }

      }

    });


    if (values.length === 0) {

      return 0;

    }


    const total =
      values.reduce(
        (
          sum,
          value
        ) =>
          sum + value,
        0
      );


    return (
      total /
      values.length
    );

  },


  /* =========================================================
     DASHBOARD SNAPSHOT
     ========================================================= */

  renderHODDashboardSnapshot() {

    const students =
      typeof getStudents === 'function'
        ? (
            getStudents() || []
          )
        : [];


    const courses =
      typeof getCourses === 'function'
        ? (
            getCourses() || []
          )
        : [];


    const timetable =
      typeof HOD_TIMETABLE_DATA !==
        'undefined' &&
      Array.isArray(
        HOD_TIMETABLE_DATA
      )
        ? HOD_TIMETABLE_DATA
        : [];


    /*
     * ---------------------------------------------------------
     * PROGRAMMES
     * ---------------------------------------------------------
     */

    const programmes =
      this.getHODDashboardProgrammes(
        students,
        courses,
        timetable
      );


    const snapshotPrograms =
      document.getElementById(
        'snapshotPrograms'
      );

    const snapshotProgramDetails =
      document.getElementById(
        'snapshotProgramDetails'
      );


    if (snapshotPrograms) {

      snapshotPrograms.innerHTML =
        `<strong>${programmes.length}</strong> · Active Programs`;

    }


    if (snapshotProgramDetails) {

      if (
        programmes.length > 0
      ) {

        snapshotProgramDetails.textContent =
          programmes.join(
            ' · '
          );

      } else {

        snapshotProgramDetails.textContent =
          'No programme data available';

      }

    }


    /*
     * ---------------------------------------------------------
     * ACADEMIC YEAR / SEMESTER
     * ---------------------------------------------------------
     */

    const academicData =
      this.getHODDashboardAcademicPeriod(
        timetable
      );


    const academicYearEl =
      document.getElementById(
        'snapshotAcademicYear'
      );

    const semesterDetailsEl =
      document.getElementById(
        'snapshotSemesterDetails'
      );


    if (academicYearEl) {

      academicYearEl.innerHTML =
        `<strong>${this.escapeHODDashboardHtml(
          academicData.academicYear
        )}</strong> · Semester in progress`;

    }


    if (semesterDetailsEl) {

      semesterDetailsEl.textContent =
        academicData.details;

    }

  },


  /* =========================================================
     FIND UNIQUE PROGRAMMES
     ========================================================= */

  getHODDashboardProgrammes(
    students,
    courses,
    timetable
  ) {

    const values = [];


    const addValue = value => {

      if (
        value === undefined ||
        value === null
      ) {
        return;
      }


      const text =
        String(value).trim();


      if (!text) {
        return;
      }


      if (
        !values.includes(text)
      ) {

        values.push(text);

      }

    };


    students.forEach(student => {

      addValue(
        student.programme
      );

      addValue(
        student.program
      );

      addValue(
        student.courseProgramme
      );

    });


    courses.forEach(course => {

      addValue(
        course.programme
      );

      addValue(
        course.program
      );

    });


    timetable.forEach(record => {

      addValue(
        record.programme
      );

    });


    return values.sort();

  },


  /* =========================================================
     CURRENT ACADEMIC PERIOD
     ========================================================= */

  getHODDashboardAcademicPeriod(
    timetable
  ) {

    if (
      !Array.isArray(timetable) ||
      timetable.length === 0
    ) {

      return {

        academicYear:
          '—',

        semester:
          '—',

        details:
          'No timetable data available'

      };

    }


    /*
     * Prefer published timetable records.
     */

    const published =
      timetable.filter(
        record =>
          String(
            record.status || ''
          ).toLowerCase() ===
          'published'
      );


    const source =
      published.length > 0
        ? published
        : timetable;


    const years =
      source
        .map(
          record =>
            record.academicYear
        )
        .filter(Boolean);


    const semesters =
      source
        .map(
          record =>
            record.semester
        )
        .filter(Boolean);


    const academicYear =
      years.length > 0
        ? String(
            years[0]
          )
        : '—';


    const semester =
      semesters.length > 0
        ? String(
            semesters[0]
          )
        : '—';


    const intakeValues =
      [
        ...new Set(
          source
            .map(
              record =>
                record.intake
            )
            .filter(Boolean)
        )
      ];


    let details =
      `Semester ${semester}`;


    if (
      intakeValues.length > 0
    ) {

      details +=
        ` · ${intakeValues.join(
          ', '
        )} Intake`;

    }


    return {

      academicYear:
        academicYear,

      semester:
        semester,

      details:
        details

    };

  },


/* =========================================================
   RESULTS APPROVAL QUEUE
   ========================================================= */

renderHODDashboardResultsQueue() {

    const submissions =
        typeof getResultsSubmissions === 'function'
            ? (
                getResultsSubmissions() || []
            )
            : [];


    /* =====================================================
       APPROVED RESULTS
       ===================================================== */

    let approvedResults = [];

    try {

        approvedResults =
            JSON.parse(
                localStorage.getItem(
                    'approvedResults'
                ) || '[]'
            );

    } catch (error) {

        approvedResults = [];

    }


    const approvedIds =
        new Set(
            approvedResults.map(
                result =>
                    String(result.id)
            )
        );


    /* =====================================================
       RESULTS ACTIVITY LOG
       -----------------------------------------------------
       Returned results are removed from the pending queue.
       The current Results section tracks Returned through
       its Activity Log.
       ===================================================== */

    const returnedIds =
        new Set();

    const activityBody =
        document.getElementById(
            'resultsActivityLog'
        );

    if (activityBody) {

        const rows =
            activityBody.querySelectorAll(
                'tr'
            );

        rows.forEach(row => {

            const badge =
                row.querySelector(
                    '.badge-returned'
                );

            if (!badge) {
                return;
            }

            const cells =
                row.querySelectorAll(
                    'td'
                );

            if (cells.length > 0) {

                const id =
                    String(
                        cells[0].textContent || ''
                    ).trim();

                if (id) {
                    returnedIds.add(id);
                }

            }

        });

    }


    /* =====================================================
       EFFECTIVE PENDING RESULTS
       ===================================================== */

    const pending =
        submissions.filter(
            submission => {

                const id =
                    String(
                        submission.id || ''
                    );

                const status =
                    String(
                        submission.status || ''
                    ).toLowerCase();

                return (
                    status === 'pending' &&
                    !approvedIds.has(id) &&
                    !returnedIds.has(id)
                );

            }
        );


    /* =====================================================
       UPDATE DASHBOARD COUNT
       ===================================================== */

    const countEl =
        document.getElementById(
            'dashboardPendingResultsCount'
        );

    if (countEl) {

        countEl.textContent =
            pending.length;

    }


    /* =====================================================
       UPDATE DASHBOARD SUMMARY
       ===================================================== */

    const summaryEl =
        document.getElementById(
            'dashboardResultsSummary'
        );

    if (!summaryEl) {
        return;
    }


    if (pending.length === 0) {

        summaryEl.textContent =
            'No pending results';

        return;

    }


    const first =
        pending[0];


    const course =
        first.course ||
        'Results submission';


    const lecturer =
        first.lecturer ||
        'Unknown lecturer';


    summaryEl.textContent =
        `${course} · ${lecturer}`;

},


  /* =========================================================
     ATTENDANCE QUEUE
     ========================================================= */

  renderHODDashboardAttendanceQueue() {

    const attendance =
        typeof HOD_ATTENDANCE_DATA !== 'undefined' &&
        Array.isArray(HOD_ATTENDANCE_DATA)
            ? HOD_ATTENDANCE_DATA
            : [];

    const lowAttendance =
        attendance.filter(record => {

            const classesHeld =
                Number(
                    record.classesHeld || 0
                );

            const present =
                Number(
                    record.present || 0
                );

            if (classesHeld <= 0) {
                return false;
            }

            const rate =
                (present / classesHeld) * 100;

            return (
                rate < 70 ||
                String(
                    record.status || ''
                ).toLowerCase() === 'low'
            );
        });

    const countEl =
        document.getElementById(
            'dashboardAttendanceReviewCount'
        );

    const summaryEl =
        document.getElementById(
            'dashboardAttendanceSummary'
        );

    if (countEl) {
        countEl.textContent =
            lowAttendance.length;
    }

    if (!summaryEl) {
        return;
    }

    if (lowAttendance.length === 0) {
        summaryEl.textContent =
            'No attendance alerts';
        return;
    }

    const first =
        lowAttendance[0];

    const student =
        first.studentName ||
        first.studentId ||
        'Student';

    const rate =
        first.classesHeld > 0
            ? (
                Number(first.present) /
                Number(first.classesHeld)
            ) * 100
            : 0;

    summaryEl.textContent =
        `${student} · ${rate.toFixed(1)}% attendance`;

},


  /* =========================================================
     TIMETABLE QUEUE
     ========================================================= */

renderHODDashboardTimetableQueue() {

    const timetable =
        typeof HOD_TIMETABLE_DATA !== 'undefined' &&
        Array.isArray(HOD_TIMETABLE_DATA)
            ? HOD_TIMETABLE_DATA
            : [];

    const reviewRecords =
        timetable.filter(record => {

            const status =
                String(
                    record.status || ''
                ).toLowerCase();

            return (
                status === 'draft' ||
                status === 'pending' ||
                status === 'review'
            );
        });

    const countEl =
        document.getElementById(
            'dashboardTimetableReviewCount'
        );

    const summaryEl =
        document.getElementById(
            'dashboardTimetableSummary'
        );

    if (countEl) {
        countEl.textContent =
            reviewRecords.length;
    }

    if (!summaryEl) {
        return;
    }

    if (reviewRecords.length === 0) {
        summaryEl.textContent =
            'No timetable items require review';
        return;
    }

    const first =
        reviewRecords[0];

    const course =
        first.courseCode ||
        first.courseName ||
        'Timetable';

    const status =
        first.status ||
        'Review';

    summaryEl.textContent =
        `${course} · ${status}`;

},


  /* =========================================================
     REQUESTS QUEUE
     ========================================================= */

renderHODDashboardRequestsQueue() {

    let requests = [];

    if (
        typeof this.getHODRequests ===
        'function'
    ) {
        requests =
            this.getHODRequests();
    }

    if (!Array.isArray(requests)) {
        requests = [];
    }

    const pending =
        requests.filter(
            request =>
                String(
                    request.status || ''
                ).toLowerCase() === 'pending'
        );

    const countEl =
        document.getElementById(
            'dashboardPendingRequestsCount'
        );

    const summaryEl =
        document.getElementById(
            'dashboardRequestsSummary'
        );

    if (countEl) {
        countEl.textContent =
            pending.length;
    }

    if (!summaryEl) {
        return;
    }

    if (pending.length === 0) {
        summaryEl.textContent =
            'No pending requests';
        return;
    }

    const first =
        pending[0];

    const title =
        first.title ||
        first.type ||
        'Department Request';

    const priority =
        first.priority ||
        'Normal';

    summaryEl.textContent =
        `${title} · ${priority} priority`;

},


  /* =========================================================
     URGENT ATTENDANCE ALERT
     ========================================================= */

  updateHODDashboardAlerts() {

    const attendance =
      typeof HOD_ATTENDANCE_DATA !==
        'undefined' &&
      Array.isArray(
        HOD_ATTENDANCE_DATA
      )
        ? HOD_ATTENDANCE_DATA
        : [];


    const lowCount =
      attendance.filter(
        record => {

          const classesHeld =
            Number(
              record.classesHeld || 0
            );


          const present =
            Number(
              record.present || 0
            );


          if (
            classesHeld <= 0
          ) {

            return false;

          }


          const rate =
            (
              present /
              classesHeld
            ) *
            100;


          return (
            rate < 70 ||
            String(
              record.status || ''
            ).toLowerCase() ===
            'low'
          );

        }
      ).length;


    const countEl =
      document.getElementById(
        'urgentLowAttendanceCount'
      );


    if (countEl) {

      countEl.textContent =
        lowCount;

    }

  },


  /* =========================================================
     PERFORMANCE TREND
     ========================================================= */

  updateHODDashboardTrend() {

    const students =
      typeof getStudents === 'function'
        ? (
            getStudents() || []
          )
        : [];


    const currentValues = [];


    const previousValues = [];


    students.forEach(
      student => {

        const current =
          this.getHODDashboardPerformanceValue(
            student,
            [
              'performance',
              'averagePerformance',
              'average',
              'avgPerformance',
              'mark',
              'score',
              'averageMark',
              'overallAverage',
              'percentage'
            ]
          );


        const previous =
          this.getHODDashboardPerformanceValue(
            student,
            [
              'previousPerformance',
              'previousAverage',
              'previousAveragePerformance',
              'previousMark',
              'previousScore',
              'lastSemesterPerformance',
              'lastSemesterAverage'
            ]
          );


        if (
          current !== null
        ) {

          currentValues.push(
            current
          );

        }


        if (
          previous !== null
        ) {

          previousValues.push(
            previous
          );

        }

      }
    );


    const currentAverage =
      currentValues.length > 0
        ? currentValues.reduce(
            (
              sum,
              value
            ) =>
              sum + value,
            0
          ) /
          currentValues.length
        : null;


    const previousAverage =
      previousValues.length > 0
        ? previousValues.reduce(
            (
              sum,
              value
            ) =>
              sum + value,
            0
          ) /
          previousValues.length
        : null;


    const badge =
      document.getElementById(
        'trendUpBadge'
      );


    const label =
      document.getElementById(
        'trendLabel'
      );


    const summary =
      document.getElementById(
        'semesterTrendSummary'
      );


    const sub =
      document.getElementById(
        'semesterTrendSub'
      );


    /*
     * We only show a numerical trend when
     * the shared student data actually
     * contains previous-period values.
     */

    if (
      currentAverage === null ||
      previousAverage === null
    ) {

      if (badge) {

        badge.textContent =
          '—';

      }


      if (label) {

        label.textContent =
          'previous-period data unavailable';

      }


      if (summary) {

        summary.textContent =
          'Performance trend unavailable';

      }


      if (sub) {

        sub.textContent =
          'Previous semester performance data is not available in the shared student records';

      }


      return;

    }


    const difference =
      currentAverage -
      previousAverage;


    const percentageChange =
      previousAverage !== 0
        ? (
            difference /
            previousAverage
          ) *
          100
        : 0;


    const rounded =
      Number(
        percentageChange.toFixed(
          1
        )
      );


    if (badge) {

      badge.textContent =
        `${rounded >= 0 ? '▲' : '▼'} ${Math.abs(
          rounded
        )}%`;

    }


    if (label) {

      label.textContent =
        'vs previous semester';

    }


    if (summary) {

      summary.textContent =
        `Performance ${
          rounded >= 0
            ? 'up'
            : 'down'
        } ${Math.abs(
          rounded
        )}% from last semester`;

    }


    if (sub) {

      sub.textContent =
        `Current average ${currentAverage.toFixed(
          1
        )}% vs previous average ${previousAverage.toFixed(
          1
        )}%`;

    }

  },


  /* =========================================================
     PERFORMANCE VALUE HELPER
     ========================================================= */

  getHODDashboardPerformanceValue(
    student,
    fields
  ) {

    if (
      !student ||
      !Array.isArray(fields)
    ) {

      return null;

    }


    for (
      const field of fields
    ) {

      const value =
        student[field];


      if (
        value === undefined ||
        value === null ||
        value === ''
      ) {

        continue;

      }


      let numeric =
        Number(value);


      if (
        Number.isNaN(
          numeric
        )
      ) {

        continue;

      }


      if (
        numeric > 0 &&
        numeric <= 1
      ) {

        numeric *= 100;

      }


      if (
        numeric >= 0 &&
        numeric <= 100
      ) {

        return numeric;

      }

    }


    return null;

  },


  /* =========================================================
     QUICK ACTIONS TOGGLE
     ========================================================= */

  toggleHODQuickActions() {

    const section =
      document.getElementById(
        'hodDashboardQuickActions'
      );


    if (!section) {
      return;
    }


    const isHidden =
      section.style.display ===
      'none';


    section.style.display =
      isHidden
        ? ''
        : 'none';


    const button =
      document.getElementById(
        'quickActionsBtn'
      );


    if (button) {

      button.innerHTML =
        isHidden
          ? '<i class="fas fa-bolt"></i> Quick Actions'
          : '<i class="fas fa-chevron-down"></i> Show Quick Actions';

    }

  },


  /* =========================================================
     DASHBOARD HTML ESCAPE
     ========================================================= */

  escapeHODDashboardHtml(
    value
  ) {

    if (
      value === undefined ||
      value === null
    ) {

      return '';

    }


    return String(value)
      .replace(
        /&/g,
        '&amp;'
      )
      .replace(
        /</g,
        '&lt;'
      )
      .replace(
        />/g,
        '&gt;'
      )
      .replace(
        /"/g,
        '&quot;'
      )
      .replace(
        /'/g,
        '&#039;'
      );

  },






  // Results Approcal
  
populateResultsSubmissions() {
  const submissions = getResultsSubmissions();

  // Only show Pending submissions in the lecturer submission queue
  const pendingSubs = submissions.filter(
    s => s.status === "Pending"
  );

  const tbody = document.getElementById("hodResultsTbody");

  if (!tbody) return;

  tbody.innerHTML = pendingSubs.map(s => `
    <tr data-id="${s.id}">

      <td style="text-align:center;">
        <input
          type="checkbox"
          class="submission-checkbox"
          value="${s.id}"
        />
      </td>

      <td>${s.id}</td>

      <td>${s.course}</td>

      <td>${s.lecturer}</td>

      <td>${s.programme}</td>

      <td>${s.students}</td>

      <td>${s.submittedDate}</td>

      <td>
        <span class="badge">${s.fileUrl}</span>
      </td>

      <td class="status-cell">
        <span class="badge badge-pending">
          Pending
        </span>
      </td>

      <td style="text-align:center;">

        <div style="
          display:flex;
          flex-direction:column;
          gap:6px;
          align-items:center;
        ">

          <button
            class="btn btn-sm btn-secondary"
            onclick="viewFile('${s.fileUrl}')"
            style="width:93px">

            <i class="fas fa-edit"></i>
            View

          </button>

          <button
            class="btn btn-sm btn-primary"
            onclick="approveResults(this)"
            style="width:93px">

            <i class="fas fa-check"></i>
            Approve

          </button>

          <button
            class="btn btn-sm btn-danger"
            onclick="openReturnForm(this)"
            style="width:93px">

            <i class="fas fa-undo"></i>
            Return

          </button>

        </div>

      </td>

    </tr>
  `).join('');

  // Also render approved results
  renderApprovedResults();
},











   approveSelectedResults() {

  const checkboxes =
    document.querySelectorAll(
      '.submission-checkbox:checked'
    );

  if (!checkboxes.length) {

    App.showToast(
      "No submissions selected.",
      "warning"
    );

    return;
  }

  checkboxes.forEach(cb => {

    const row = cb.closest('tr');

    if (!row) return;

    const id =
      row.dataset.id ||
      row.cells[1].textContent.trim();

    const course =
      row.cells[2].textContent.trim();

    const lecturer =
      row.cells[3].textContent.trim();

    const programme =
      row.cells[4].textContent.trim();

    const students =
      row.cells[5].textContent.trim();

    const submittedDate =
      row.cells[6].textContent.trim();

    const fileUrl =
      row.cells[7].textContent.trim();

    // Get current approved queue
    const approvedResults =
      JSON.parse(
        localStorage.getItem("approvedResults") || "[]"
      );

    // Prevent duplicate
    const alreadyApproved =
      approvedResults.some(
        result => result.id === id
      );

    if (!alreadyApproved) {

      approvedResults.push({
        id: id,
        course: course,
        lecturer: lecturer,
        programme: programme,
        students: students,
        submittedDate: submittedDate,
        fileUrl: fileUrl,
        approvedDate: new Date().toLocaleString(),
      });

      localStorage.setItem(
        "approvedResults",
        JSON.stringify(approvedResults)
      );

      // Activity Log
      logActivity(
        id,
        lecturer,
        course,
        'Approved',
        ''
      );

      // Remove pending row
      row.remove();

      // Decrease pending
      const pendingCount =
        parseInt(
          document.getElementById(
            "resPendingCount"
          ).textContent
        ) || 0;

      document.getElementById(
        "resPendingCount"
      ).textContent =
        pendingCount > 0
          ? pendingCount - 1
          : 0;
    }

  });

  // Refresh approved queue
  renderApprovedResults();

  updatePassRate();

  App.showToast(
    "Selected results approved and moved to publication queue.",
    "success"
  );
},





returnSelectedResults() {
  const comment = document.getElementById('bulkReturnComment').value.trim();
  if (!comment) {
    App.showToast("Please enter a comment.", "warning");
    return;
  }

  const checkboxes = document.querySelectorAll('.submission-checkbox:checked');
  if (!checkboxes.length) {
    App.showToast("No submissions selected.", "warning");
    return;
  }

  checkboxes.forEach(cb => {
    const row = cb.closest('tr');
    const id = row.dataset.id || row.cells[1].textContent;
    const course = row.cells[2].textContent;
    const lecturer = row.cells[3].textContent;

    App.showToast(`Marks returned for ${id}`, 'info');
    logActivity(id, lecturer, course, 'Returned', comment);

    row.remove();

    const pendingCount = parseInt(document.getElementById("resPendingCount").textContent) || 0;
    const returnedCount = parseInt(document.getElementById("resReturnedCount").textContent) || 0;
    document.getElementById("resPendingCount").textContent = pendingCount > 0 ? pendingCount - 1 : 0;
    document.getElementById("resReturnedCount").textContent = returnedCount + 1;
  });

  updatePassRate();
  App.closeBulkReturnForm();
},





updateResultsSummary() {

  const submissions =
    getResultsSubmissions();

  const pending =
    submissions.filter(
      s => s.status === "Pending"
    ).length;

  const approvedResults =
    JSON.parse(
      localStorage.getItem("approvedResults") || "[]"
    );


    // Published results are session-only.
// They reset to 0 when the page is refreshed.
const publishedResults = [];

  document.getElementById(
    "resPendingCount"
  ).textContent = pending;

  document.getElementById(
    "resApprovedCount"
  ).textContent =
    approvedResults.length;

    document.getElementById(
  "resPublishedCount"
).textContent =
  publishedResults.length;

  // Returned is currently tracked through
  // the Activity Log.
  const activityBody =
    document.getElementById(
      "resultsActivityLog"
    );

  let returnedCount = 0;

  if (activityBody) {

    returnedCount =
      activityBody.querySelectorAll(
        ".badge-returned"
      ).length;

  }

  document.getElementById(
    "resReturnedCount"
  ).textContent =
    returnedCount;

  updatePassRate();
},





  /**
   * Setup lecturer-specific functionality and data
   */
  setupLecturerRole() {
    if (document.body.dataset.role !== 'lecturer') return;
    
    // Update stats cards with real data
    this.updateLecturerStats();
    
    // Initial dashboard population
    setTimeout(() => {
      this.populateLecturerData();
      this.initLecturerCharts();
    }, 200);
  },

  

  showUserInfo(user) {
    // Update header profile
    const profileBtn = document.getElementById('profileBtn');
    const profileName = document.querySelector('.profile-name');
    const profileRole = document.querySelector('.profile-role');
    const profileAvatar = document.querySelector('.profile-avatar');
    
    if (profileBtn && profileName && profileRole && profileAvatar) {
      profileName.textContent = user.name.split(' ')[0]; // First name
      profileRole.textContent = user.title;
      profileAvatar.textContent = user.avatar;
    }
    
    // Update sidebar footer (user-mini)
    const sidebarName = document.querySelector('.user-mini-name');
    const sidebarRole = document.querySelector('.user-mini-role');
    const sidebarAvatar = document.querySelector('.user-mini-avatar');
    
    if (sidebarName && sidebarRole && sidebarAvatar) {
      sidebarName.textContent = user.name;
      sidebarRole.textContent = user.title;
      sidebarAvatar.textContent = user.avatar;
    }
    
    // Update logo if lecturer/student specific
    const logoMark = document.querySelector('.logo-mark');
    if (logoMark && user.role !== 'admin') {
      logoMark.textContent = user.avatar;
    }
  },

  logout() {
    logout();
    window.location.href = 'welcome.html';
  },

  // =========================================================
// HOD DEPARTMENT MODULE
// =========================================================

initHODDepartment() {

  this.renderHODDepartmentProfile();

  this.renderHODDepartmentCourses();

  this.renderHODDepartmentStaff();

  this.renderHODDepartmentStudents();

  this.ensureHODDepartmentActivities();

  this.renderHODDepartmentActivities();

  this.renderHODDepartmentAnalytics();

  this.renderHODDepartmentCommunication();

},


// =========================================================
// DEPARTMENT PROFILE STORAGE
// =========================================================

getHODDepartmentProfile() {

  const defaultProfile = {

    id: 'DEPT-001',

    name: 'Information Technology Department',

    code: 'IT-DEPT-001',

    description:
      'Department responsible for teaching, academic coordination, technology programmes and student development.',

    hodName: 'Head of Department',

    hodTitle: 'Head of Department',

    hodEmail: '',

    hodPhone: '',

    hodOffice: 'Department Office',

    hodHours: 'Monday – Friday, 08:00 – 17:00',

    mission:
      'To provide quality technology education and develop practical skills for academic and professional growth.',

    vision:
      'To build a strong technology department recognized for innovation, practical learning and academic excellence.'

  };


  try {

    const stored =
      JSON.parse(
        localStorage.getItem(
          'hodDepartmentProfile'
        ) || 'null'
      );

    if (
      stored &&
      typeof stored === 'object'
    ) {

      return {
        ...defaultProfile,
        ...stored
      };

    }

  } catch (error) {

    console.error(
      'Unable to read department profile:',
      error
    );

  }

  return defaultProfile;

},


saveHODDepartmentProfile(profile) {

  localStorage.setItem(
    'hodDepartmentProfile',
    JSON.stringify(profile)
  );

},


// =========================================================
// RENDER DEPARTMENT PROFILE
// =========================================================

renderHODDepartmentProfile() {

  const profile =
    this.getHODDepartmentProfile();


  const setText =
    (id, value) => {

      const element =
        document.getElementById(id);

      if (element) {

        element.textContent =
          value || '—';

      }

    };


  setText(
    'deptName',
    profile.name
  );

  setText(
    'deptCode',
    profile.code
  );

  setText(
    'deptDescription',
    profile.description
  );

  setText(
    'hodName',
    profile.hodName
  );

  setText(
    'hodTitle',
    profile.hodTitle
  );

  setText(
    'hodEmail',
    profile.hodEmail
  );

  setText(
    'hodPhone',
    profile.hodPhone
  );

  setText(
    'hodOffice',
    profile.hodOffice
  );

  setText(
    'hodHours',
    profile.hodHours
  );

  setText(
    'deptMission',
    profile.mission
  );

  setText(
    'deptVision',
    profile.vision
  );

},


// =========================================================
// EDIT DEPARTMENT
// =========================================================

editDepartment(departmentId) {

  const profile =
    this.getHODDepartmentProfile();


  this.openHODDepartmentForm(
    'Edit Department Information',
    `
      <div class="form-group">
        <label class="form-label">
          Department Name *
        </label>
        <input
          id="hodDeptNameForm"
          class="form-input"
          value="${this.escapeDepartmentHtml(profile.name)}"
        >
      </div>

      <div class="form-group">
        <label class="form-label">
          Department Code *
        </label>
        <input
          id="hodDeptCodeForm"
          class="form-input"
          value="${this.escapeDepartmentHtml(profile.code)}"
        >
      </div>

      <div class="form-group">
        <label class="form-label">
          Description
        </label>
        <textarea
          id="hodDeptDescriptionForm"
          class="form-textarea"
          rows="4"
        >${this.escapeDepartmentHtml(profile.description)}</textarea>
      </div>

      <div class="form-group">
        <label class="form-label">
          Mission
        </label>
        <textarea
          id="hodDeptMissionForm"
          class="form-textarea"
          rows="3"
        >${this.escapeDepartmentHtml(profile.mission)}</textarea>
      </div>

      <div class="form-group">
        <label class="form-label">
          Vision
        </label>
        <textarea
          id="hodDeptVisionForm"
          class="form-textarea"
          rows="3"
        >${this.escapeDepartmentHtml(profile.vision)}</textarea>
      </div>
    `,
    () => {

      const name =
        document.getElementById(
          'hodDeptNameForm'
        )?.value.trim();

      const code =
        document.getElementById(
          'hodDeptCodeForm'
        )?.value.trim();

      if (!name || !code) {

        this.showToast(
          'Department name and code are required.',
          'warning'
        );

        return false;

      }


      profile.name =
        name;

      profile.code =
        code;

      profile.description =
        document.getElementById(
          'hodDeptDescriptionForm'
        )?.value.trim() || '';

      profile.mission =
        document.getElementById(
          'hodDeptMissionForm'
        )?.value.trim() || '';

      profile.vision =
        document.getElementById(
          'hodDeptVisionForm'
        )?.value.trim() || '';


      this.saveHODDepartmentProfile(
        profile
      );

      this.renderHODDepartmentProfile();

      this.showToast(
        'Department information updated successfully.',
        'success'
      );

      return true;

    }
  );

},


// =========================================================
// UPDATE HOD
// =========================================================

updateHOD() {

  const profile =
    this.getHODDepartmentProfile();


  this.openHODDepartmentForm(
    'Update Head of Department',
    `
      <div class="form-group">
        <label class="form-label">
          HoD Name *
        </label>
        <input
          id="hodNameForm"
          class="form-input"
          value="${this.escapeDepartmentHtml(profile.hodName)}"
        >
      </div>

      <div class="form-group">
        <label class="form-label">
          Position
        </label>
        <input
          id="hodTitleForm"
          class="form-input"
          value="${this.escapeDepartmentHtml(profile.hodTitle)}"
        >
      </div>

      <div class="form-group">
        <label class="form-label">
          Email
        </label>
        <input
          id="hodEmailForm"
          class="form-input"
          type="email"
          value="${this.escapeDepartmentHtml(profile.hodEmail)}"
        >
      </div>

      <div class="form-group">
        <label class="form-label">
          Phone
        </label>
        <input
          id="hodPhoneForm"
          class="form-input"
          value="${this.escapeDepartmentHtml(profile.hodPhone)}"
        >
      </div>

      <div class="form-group">
        <label class="form-label">
          Office
        </label>
        <input
          id="hodOfficeForm"
          class="form-input"
          value="${this.escapeDepartmentHtml(profile.hodOffice)}"
        >
      </div>

      <div class="form-group">
        <label class="form-label">
          Office Hours
        </label>
        <input
          id="hodHoursForm"
          class="form-input"
          value="${this.escapeDepartmentHtml(profile.hodHours)}"
        >
      </div>
    `,
    () => {

      const name =
        document.getElementById(
          'hodNameForm'
        )?.value.trim();

      if (!name) {

        this.showToast(
          'HoD name is required.',
          'warning'
        );

        return false;

      }


      profile.hodName =
        name;

      profile.hodTitle =
        document.getElementById(
          'hodTitleForm'
        )?.value.trim() || '';

      profile.hodEmail =
        document.getElementById(
          'hodEmailForm'
        )?.value.trim() || '';

      profile.hodPhone =
        document.getElementById(
          'hodPhoneForm'
        )?.value.trim() || '';

      profile.hodOffice =
        document.getElementById(
          'hodOfficeForm'
        )?.value.trim() || '';

      profile.hodHours =
        document.getElementById(
          'hodHoursForm'
        )?.value.trim() || '';


      this.saveHODDepartmentProfile(
        profile
      );

      this.renderHODDepartmentProfile();

      this.showToast(
        'HoD information updated successfully.',
        'success'
      );

      return true;

    }
  );

},


// =========================================================
// MISSION / VISION
// =========================================================

addMissionVision(departmentId) {

  const profile =
    this.getHODDepartmentProfile();


  this.openHODDepartmentForm(
    'Update Mission & Vision',
    `
      <div class="form-group">
        <label class="form-label">
          Mission
        </label>
        <textarea
          id="hodMissionForm"
          class="form-textarea"
          rows="5"
        >${this.escapeDepartmentHtml(profile.mission)}</textarea>
      </div>

      <div class="form-group">
        <label class="form-label">
          Vision
        </label>
        <textarea
          id="hodVisionForm"
          class="form-textarea"
          rows="5"
        >${this.escapeDepartmentHtml(profile.vision)}</textarea>
      </div>
    `,
    () => {

      profile.mission =
        document.getElementById(
          'hodMissionForm'
        )?.value.trim() || '';

      profile.vision =
        document.getElementById(
          'hodVisionForm'
        )?.value.trim() || '';


      this.saveHODDepartmentProfile(
        profile
      );

      this.renderHODDepartmentProfile();

      this.showToast(
        'Mission and vision updated successfully.',
        'success'
      );

      return true;

    }
  );

},


// =========================================================
// GENERIC DEPARTMENT FORM MODAL
// =========================================================

openHODDepartmentForm(
  title,
  body,
  saveCallback
) {

  const old =
    document.getElementById(
      'hodDepartmentDynamicModal'
    );

  if (old) {
    old.remove();
  }


  const modal =
    document.createElement('div');

  modal.id =
    'hodDepartmentDynamicModal';

  modal.className =
    'modal-overlay';

  modal.style.display =
    'flex';


  modal.innerHTML = `
    <div
      class="modal-content"
      style="
        width:min(700px, 95vw);
        max-height:90vh;
        overflow:auto;
      "
    >

      <div class="modal-header">

        <div>
          <div class="modal-title">
            ${this.escapeDepartmentHtml(title)}
          </div>

          <div class="text-sm text-muted">
            Update department information
          </div>
        </div>

        <button
          type="button"
          class="modal-close"
          id="hodDepartmentDynamicClose"
        >
          &times;
        </button>

      </div>

      <div
        class="modal-body"
        style="
          display:flex;
          flex-direction:column;
          gap:14px;
        "
      >
        ${body}
      </div>

      <div class="modal-footer">

        <button
          type="button"
          class="btn btn-outline"
          id="hodDepartmentDynamicCancel"
        >
          Cancel
        </button>

        <button
          type="button"
          class="btn btn-primary"
          id="hodDepartmentDynamicSave"
        >
          <i class="fas fa-save"></i>
          Save Changes
        </button>

      </div>

    </div>
  `;


  document.body.appendChild(
    modal
  );


  const close =
    () => modal.remove();


  document.getElementById(
    'hodDepartmentDynamicClose'
  )?.addEventListener(
    'click',
    close
  );

  document.getElementById(
    'hodDepartmentDynamicCancel'
  )?.addEventListener(
    'click',
    close
  );


  document.getElementById(
    'hodDepartmentDynamicSave'
  )?.addEventListener(
    'click',
    () => {

      const success =
        saveCallback();

      if (success !== false) {
        close();
      }

    }
  );

},


// =========================================================
// DEPARTMENT COURSE RENDERING
// =========================================================

renderHODDepartmentCourses() {

  const container =
    document.getElementById(
      'programsCoursesContainer'
    );

  if (!container) {
    return;
  }


  const courses =
    typeof getCourses === 'function'
      ? (getCourses() || [])
      : [];


  const countEl =
    document.getElementById(
      'departmentCourseCount'
    );

  if (countEl) {

    countEl.textContent =
      `${courses.length} Course${courses.length === 1 ? '' : 's'}`;

  }


  if (!courses.length) {

    container.innerHTML = `
      <div
        class="activity-item"
        style="border-bottom:none;"
      >
        <div class="activity-icon-wrap">
          <i class="fas fa-book"></i>
        </div>

        <div class="activity-text">
          No courses have been added yet.
        </div>
      </div>
    `;

    return;

  }


  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];


  const lecturerName =
    course => {

      const lecturerId =
        course.lecturer ||
        course.lecturerId ||
        '';

      const lecturer =
        lecturers.find(
          item =>
            String(item.id) ===
            String(lecturerId)
        );

      return (
        lecturer?.name ||
        lecturer?.fullName ||
        lecturer?.lecturerName ||
        lecturerId ||
        'Not assigned'
      );

    };


  container.innerHTML =
    courses.map(
      course => {

        const id =
          course.id ||
          course.courseId ||
          course.code ||
          course.courseCode;


        const code =
          course.code ||
          course.courseCode ||
          course.moduleCode ||
          '—';


        const title =
          course.title ||
          course.name ||
          course.courseName ||
          'Untitled Course';


        return `
          <div
            class="activity-item"
            style="
              border-bottom:1px solid var(--border);
              padding:14px 0;
            "
          >

            <div
              class="activity-icon-wrap"
              style="
                background:rgba(22,163,74,0.08);
                color:var(--success);
              "
            >
              <i class="fas fa-book-open"></i>
            </div>

            <div style="flex:1;">

              <div class="activity-text">
                <strong>
                  ${this.escapeDepartmentHtml(title)}
                </strong>

                <span
                  class="badge badge-blue"
                  style="margin-left:8px;"
                >
                  ${this.escapeDepartmentHtml(code)}
                </span>
              </div>

              <div
                class="activity-time"
                style="margin-top:6px;"
              >
                Department:
                ${this.escapeDepartmentHtml(
                  course.department || '—'
                )}
                · Credits:
                ${this.escapeDepartmentHtml(
                  course.credits || '—'
                )}
              </div>

              <div
                class="activity-time"
                style="margin-top:4px;"
              >
                Lecturer:
                ${this.escapeDepartmentHtml(
                  lecturerName(course)
                )}
              </div>

            </div>

            <button
              type="button"
              class="btn btn-sm btn-info"
              onclick="App.viewCourse('${this.escapeDepartmentHtml(String(id))}')"
            >
              <i class="fas fa-eye"></i>
              View Details
            </button>

          </div>
        `;

      }
    )
    .join('');

},


// =========================================================
// ADD COURSE
// =========================================================

saveDepartmentCourse() {

  const modal =
    document.getElementById(
      'courseCreateModal'
    );

  if (!modal) {
    return;
  }


  const inputs =
    modal.querySelectorAll(
      'input'
    );

  const selects =
    modal.querySelectorAll(
      'select'
    );

  const textareas =
    modal.querySelectorAll(
      'textarea'
    );


  const code =
    inputs[0]?.value.trim();

  const title =
    inputs[1]?.value.trim();

  const credits =
    inputs[2]?.value.trim();

  const department =
    selects[0]?.value || '';

  const level =
    selects[1]?.value || '';

  const description =
    textareas[0]?.value.trim() || '';


  if (!code || !title) {

    this.showToast(
      'Course code and course title are required.',
      'warning'
    );

    return;

  }


  const courses =
    typeof getCourses === 'function'
      ? (getCourses() || [])
      : [];


  const exists =
    courses.some(
      course =>
        String(
          course.code ||
          course.courseCode ||
          ''
        ).toLowerCase() ===
        code.toLowerCase()
    );


  if (exists) {

    this.showToast(
      'A course with this code already exists.',
      'warning'
    );

    return;

  }


  courses.push({

    id:
      `CRS-${Date.now()}`,

    code:
      code,

    title:
      title,

    department:
      department ===
        'Select Department'
        ? ''
        : department,

    credits:
      Number(credits) || 0,

    level:
      level ===
        'Select Level'
        ? ''
        : level,

    description:
      description,

    lecturer:
      '',

    students:
      0,

    status:
      'Active',

    createdAt:
      new Date().toISOString()

  });


  localStorage.setItem(
    'courses',
    JSON.stringify(courses)
  );


  closeCourseCreateModal();


  this.renderHODDepartmentCourses();

  if (
    typeof renderHodCoursesPage ===
    'function'
  ) {
    renderHodCoursesPage();
  }


  this.showToast(
    `${title} added successfully.`,
    'success'
  );

},


// =========================================================
// VIEW COURSE DETAILS
// =========================================================

viewCourse(courseId) {

  const courses =
    typeof getCourses === 'function'
      ? (getCourses() || [])
      : [];


  const course =
    courses.find(
      item =>
        String(
          item.id ||
          item.courseId ||
          item.code ||
          item.courseCode
        ) ===
        String(courseId)
    );


  if (!course) {

    this.showToast(
      'Course not found.',
      'error'
    );

    return;

  }


  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];


  const lecturer =
    lecturers.find(
      item =>
        String(item.id) ===
        String(
          course.lecturer ||
          course.lecturerId ||
          ''
        )
    );


  const lecturerName =
    lecturer?.name ||
    lecturer?.fullName ||
    lecturer?.lecturerName ||
    'Not assigned';


  this.openHODDepartmentForm(
    'Course Details',
    `
      <div class="activity-item">
        <div class="activity-icon-wrap">
          <i class="fas fa-book"></i>
        </div>

        <div>
          <div class="activity-text">
            <strong>
              ${this.escapeDepartmentHtml(
                course.title ||
                course.name ||
                course.courseName ||
                'Course'
              )}
            </strong>
          </div>

          <div class="activity-time">
            Code:
            ${this.escapeDepartmentHtml(
              course.code ||
              course.courseCode ||
              '—'
            )}
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Department
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            course.department || '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Level
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            course.level || '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Credits
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            course.credits || '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Lecturer
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            lecturerName
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Description
        </label>
        <div
          class="form-input"
          style="min-height:80px;"
        >
          ${this.escapeDepartmentHtml(
            course.description ||
            'No description available.'
          )}
        </div>
      </div>
    `,
    () => true
  );

},


// =========================================================
// DEPARTMENT STAFF
// =========================================================

renderHODDepartmentStaff() {

  const container =
    document.getElementById(
      'lecturersContainer'
    );

  if (!container) {
    return;
  }


  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];


  const countEl =
    document.getElementById(
      'departmentLecturerCount'
    );

  if (countEl) {

    countEl.textContent =
      `${lecturers.length} Lecturer${lecturers.length === 1 ? '' : 's'}`;

  }


  if (!lecturers.length) {

    container.innerHTML =
      `<div class="activity-item">
        <div class="activity-text">
          No lecturers have been added yet.
        </div>
      </div>`;

    return;

  }


  container.innerHTML =
    lecturers.map(
      lecturer => {

        const id =
          lecturer.id ||
          lecturer.lecturerId ||
          lecturer.staffId;


        const name =
          lecturer.name ||
          lecturer.fullName ||
          lecturer.lecturerName ||
          'Unnamed Lecturer';


        const role =
          lecturer.role ||
          lecturer.title ||
          'Lecturer';


        const specialization =
          lecturer.specialization ||
          lecturer.speciality ||
          lecturer.department ||
          '—';


        const email =
          lecturer.email ||
          lecturer.emailAddress ||
          '—';


        const office =
          lecturer.office ||
          lecturer.officeLocation ||
          '—';


        return `
          <div
            class="activity-item"
            style="
              border-bottom:1px solid var(--border);
              padding:12px 0;
            "
          >

            <div
              class="activity-icon-wrap"
              style="
                background:rgba(232,160,32,0.10);
                color:#92630a;
              "
            >
              <i class="fas fa-user-tie"></i>
            </div>

            <div style="flex:1;">

              <div class="activity-text">
                <strong>
                  ${this.escapeDepartmentHtml(name)}
                </strong>
              </div>

              <div
                class="activity-time"
                style="margin-top:5px;"
              >
                Role:
                ${this.escapeDepartmentHtml(role)}
                · Specialization:
                ${this.escapeDepartmentHtml(
                  specialization
                )}
              </div>

              <div
                class="activity-time"
                style="margin-top:4px;"
              >
                Email:
                ${this.escapeDepartmentHtml(email)}
                · Office:
                ${this.escapeDepartmentHtml(office)}
              </div>

            </div>

            <button
              type="button"
              class="btn btn-sm btn-primary"
              onclick="App.viewLecturer('${this.escapeDepartmentHtml(String(id))}')"
            >
              <i class="fas fa-user"></i>
              View Profile
            </button>

          </div>
        `;

      }
    )
    .join('');

},





// =========================================================
// SAVE LECTURER
// =========================================================

saveDepartmentLecturer() {

  const modal =
    document.getElementById(
      'lecturerCreateModal'
    );

  if (!modal) {
    return;
  }


  const inputs =
    modal.querySelectorAll(
      'input'
    );

  const selects =
    modal.querySelectorAll(
      'select'
    );

  const textareas =
    modal.querySelectorAll(
      'textarea'
    );


  const firstName =
    inputs[0]?.value.trim();

  const lastName =
    inputs[1]?.value.trim();

  const phone =
    inputs[3]?.value.trim();

  const email =
    inputs[4]?.value.trim();

  const department =
    selects[2]?.value || '';

  const specialization =
    inputs[5]?.value.trim();

  const qualification =
    selects[3]?.value || '';

  const joinDate =
    inputs[6]?.value || '';

  const biography =
    textareas[0]?.value.trim() || '';


  if (
    !firstName ||
    !lastName ||
    !email ||
    !department ||
    !specialization
  ) {

    this.showToast(
      'Please complete the required lecturer fields.',
      'warning'
    );

    return;

  }


  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];


  const id =
    `FAC-${String(
      Date.now()
    ).slice(-6)}`;


  lecturers.push({

    id:

      id,

    name:
      `${firstName} ${lastName}`,

    title:
      selects[0]?.value || '',

    phone:
      phone,

    email:
      email,

    department:
      department,

    specialization:
      specialization,

    qualification:
      qualification,

    joinDate:
      joinDate,

    biography:
      biography,

    role:
      'Lecturer',

    status:
      'Active',

    courses:
      [],

    createdAt:
      new Date().toISOString()

  });


  localStorage.setItem(
    'lecturers',
    JSON.stringify(lecturers)
  );


  closeLecturerCreateModal();


  this.renderHODDepartmentStaff();


  this.showToast(
    `${firstName} ${lastName} added successfully.`,
    'success'
  );

},


// =========================================================
// VIEW LECTURER PROFILE
// =========================================================

viewLecturer(lecturerId) {

  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];


  const lecturer =
    lecturers.find(
      item =>
        String(
          item.id ||
          item.lecturerId ||
          item.staffId
        ) ===
        String(lecturerId)
    );


  if (!lecturer) {

    this.showToast(
      'Lecturer not found.',
      'error'
    );

    return;

  }


  this.openHODDepartmentForm(
    'Lecturer Profile',
    `
      <div class="activity-item">
        <div class="activity-icon-wrap">
          <i class="fas fa-user-tie"></i>
        </div>

        <div>
          <div class="activity-text">
            <strong>
              ${this.escapeDepartmentHtml(
                lecturer.name ||
                lecturer.fullName ||
                lecturer.lecturerName ||
                'Lecturer'
              )}
            </strong>
          </div>

          <div class="activity-time">
            ${this.escapeDepartmentHtml(
              lecturer.role ||
              lecturer.title ||
              'Lecturer'
            )}
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Department
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            lecturer.department || '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Specialization
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            lecturer.specialization ||
            lecturer.speciality ||
            '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Qualification
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            lecturer.qualification || '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Email
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            lecturer.email || '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Phone
        </label>
        <div class="form-input">
          ${this.escapeDepartmentHtml(
            lecturer.phone || '—'
          )}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">
          Biography / Notes
        </label>
        <div
          class="form-input"
          style="min-height:90px;"
        >
          ${this.escapeDepartmentHtml(
            lecturer.biography ||
            lecturer.bio ||
            'No biography available.'
          )}
        </div>
      </div>
    `,
    () => true
  );

},


// =========================================================
// STUDENT OVERVIEW
// =========================================================

renderHODDepartmentStudents() {

  const students =
    typeof getStudents === 'function'
      ? (getStudents() || [])
      : [];


  const totalEl =
    document.getElementById(
      'studentCount'
    );

  if (totalEl) {
    totalEl.textContent =
      students.length;
  }


  const graduationEl =
    document.getElementById(
      'graduationRate'
    );


  const graduated =
    students.filter(
      student => {

        const status =
          String(
            student.status || ''
          ).toLowerCase();

        return (
          status === 'graduated' ||
          student.graduated === true
        );

      }
    ).length;


  const graduationRate =
    students.length
      ? (
          graduated /
          students.length
        ) * 100
      : 0;


  if (graduationEl) {

    graduationEl.textContent =
      `${graduationRate.toFixed(1)}%`;

  }


  const attendanceEl =
    document.getElementById(
      'hodAttendanceRate'
    );


  let attendanceValues =
    [];


  if (
    typeof HOD_ATTENDANCE_DATA !==
      'undefined' &&
    Array.isArray(
      HOD_ATTENDANCE_DATA
    )
  ) {

    attendanceValues =
      HOD_ATTENDANCE_DATA
        .filter(
          record =>
            Number(
              record.classesHeld
            ) > 0
        )
        .map(
          record =>
            (
              Number(record.present) /
              Number(record.classesHeld)
            ) * 100
        );

  }


  if (
    !attendanceValues.length
  ) {

    attendanceValues =
      students
        .map(
          student =>
            Number(
              student.attendance
            )
        )
        .filter(
          value =>
            Number.isFinite(value)
        );

  }


  const attendance =
    attendanceValues.length
      ? attendanceValues.reduce(
          (sum, value) =>
            sum + value,
          0
        ) /
        attendanceValues.length
      : 0;


  if (attendanceEl) {

    attendanceEl.textContent =
      `${attendance.toFixed(1)}%`;

  }


  const breakdown =
    document.getElementById(
      'studentBreakdown'
    );


  if (!breakdown) {
    return;
  }


  if (!students.length) {

    breakdown.textContent =
      'No student records available.';

    return;

  }


  const groups =
    {};


  students.forEach(
    student => {

      const programme =
        student.programme ||
        student.program ||
        student.department ||
        'Unassigned';


      const year =
        student.year ||
        student.intakeYear ||
        student.level ||
        '—';


      const key =
        `${programme} · Year ${year}`;


      groups[key] =
        (groups[key] || 0) + 1;

    }
  );


  breakdown.innerHTML =
    Object.entries(groups)
      .sort(
        (a, b) =>
          b[1] - a[1]
      )
      .slice(0, 8)
      .map(
        ([label, count]) => `
          <div
            class="activity-item"
            style="
              border-bottom:none;
              padding:8px 0;
            "
          >
            <div
              class="activity-icon-wrap"
              style="
                background:rgba(26,58,107,0.08);
                color:var(--primary);
              "
            >
              <i class="fas fa-users"></i>
            </div>

            <div class="activity-text">
              <strong>
                ${this.escapeDepartmentHtml(label)}
              </strong>

              <div
                class="activity-time"
                style="margin-top:3px;"
              >
                ${count}
                student${count === 1 ? '' : 's'}
              </div>
            </div>
          </div>
        `
      )
      .join('');

},


// =========================================================
// STUDENT DETAILED REPORT
// =========================================================

viewStudentReport() {

  this.loadPage(
    'reports'
  );


  setTimeout(
    () => {

      if (
        typeof this.generateHODReport ===
        'function'
      ) {

        this.generateHODReport();

      }

    },
    200
  );


  this.showToast(
    'Student detailed report opened.',
    'info'
  );

},


// =========================================================
// DEPARTMENT ACTIVITIES
// =========================================================

ensureHODDepartmentActivities() {

  const key =
    'hodDepartmentActivities';


  let activities =
    [];


  try {

    activities =
      JSON.parse(
        localStorage.getItem(
          key
        ) || '[]'
      );

  } catch (error) {

    activities = [];

  }


  if (
    Array.isArray(activities) &&
    activities.length
  ) {
    return;
  }


  activities = [

    {
      id: 'ACT-001',
      title:
        'Department Academic Meeting',
      type:
        'Meeting',
      date:
        new Date().toISOString()
          .slice(0, 10),
      time:
        '10:00',
      description:
        'Review academic progress, teaching activities and departmental priorities.',
      responsible:
        'Head of Department'
    },

    {
      id: 'ACT-002',
      title:
        'Student Project Review',
      type:
        'Workshop',
      date:
        new Date().toISOString()
          .slice(0, 10),
      time:
        '14:00',
      description:
        'Review student projects and provide academic guidance.',
      responsible:
        'Department Academic Team'
    }

  ];


  localStorage.setItem(
    key,
    JSON.stringify(
      activities
    )
  );

},


getHODDepartmentActivities() {

  try {

    const data =
      JSON.parse(
        localStorage.getItem(
          'hodDepartmentActivities'
        ) || '[]'
      );

    return Array.isArray(data)
      ? data
      : [];

  } catch (error) {

    return [];

  }

},


saveHODDepartmentActivities(
  activities
) {

  localStorage.setItem(
    'hodDepartmentActivities',
    JSON.stringify(
      activities
    )
  );

},


renderHODDepartmentActivities() {

  const container =
    document.getElementById(
      'activitiesContainer'
    );

  if (!container) {
    return;
  }


  const activities =
    this.getHODDepartmentActivities();


  if (!activities.length) {

    container.innerHTML =
      `<div class="activity-item">
        <div class="activity-text">
          No department activities recorded.
        </div>
      </div>`;

    return;

  }


  container.innerHTML =
    activities
      .slice()
      .sort(
        (a, b) =>
          new Date(b.date || 0) -
          new Date(a.date || 0)
      )
      .map(
        activity => `
          <div
            class="activity-item"
            style="
              border-bottom:1px solid var(--border);
              padding:12px 0;
            "
          >

            <div
              class="activity-icon-wrap"
              style="
                background:rgba(232,160,32,0.10);
                color:#92630a;
              "
            >
              <i class="fas fa-calendar-check"></i>
            </div>

            <div style="flex:1;">

              <div class="activity-text">
                <strong>
                  ${this.escapeDepartmentHtml(
                    activity.title
                  )}
                </strong>

                <span
                  class="badge badge-gold"
                  style="margin-left:8px;"
                >
                  ${this.escapeDepartmentHtml(
                    activity.type
                  )}
                </span>
              </div>

              <div
                class="activity-time"
                style="margin-top:5px;"
              >
                ${this.escapeDepartmentHtml(
                  activity.date || '—'
                )}
                ${activity.time ? ` · ${this.escapeDepartmentHtml(activity.time)}` : ''}
              </div>

              <div
                class="activity-time"
                style="margin-top:4px;"
              >
                ${this.escapeDepartmentHtml(
                  activity.description ||
                  'No description.'
                )}
              </div>

            </div>

          </div>
        `
      )
      .join('');

},


// =========================================================
// SAVE DEPARTMENT ACTIVITY
// =========================================================

saveDepartmentActivity() {

  const modal =
    document.getElementById(
      'deptActivityModal'
    );

  if (!modal) {
    return;
  }


  const inputs =
    modal.querySelectorAll(
      'input'
    );

  const selects =
    modal.querySelectorAll(
      'select'
    );

  const textareas =
    modal.querySelectorAll(
      'textarea'
    );


  const title =
    inputs[0]?.value.trim();

  const date =
    inputs[1]?.value || '';

  const time =
    inputs[2]?.value || '';

  const type =
    selects[0]?.value || '';

  const description =
    textareas[0]?.value.trim() || '';

  const responsible =
    inputs[3]?.value.trim() || '';


  if (!title || !date) {

    this.showToast(
      'Activity title and date are required.',
      'warning'
    );

    return;

  }


  const activities =
    this.getHODDepartmentActivities();


  activities.unshift({

    id:
      `ACT-${Date.now()}`,

    title:
      title,

    type:
      type &&
      type !==
        'Select Activity Type'
        ? type
        : 'Other',

    date:
      date,

    time:
      time,

    description:
      description,

    responsible:
      responsible

  });


  this.saveHODDepartmentActivities(
    activities
  );


  closeDeptActivityModal();


  this.renderHODDepartmentActivities();


  this.showToast(
    'Department activity added successfully.',
    'success'
  );

},


// =========================================================
// DEPARTMENT ANALYTICS
// =========================================================

renderHODDepartmentAnalytics() {

  const students =
    typeof getStudents === 'function'
      ? (getStudents() || [])
      : [];


  const courses =
    typeof getCourses === 'function'
      ? (getCourses() || [])
      : [];


  let performanceValues =
    [];


  students.forEach(
    student => {

      const value =
        [
          student.performance,
          student.averagePerformance,
          student.average,
          student.avgPerformance,
          student.avg,
          student.mark,
          student.score,
          student.percentage
        ].find(
          item =>
            item !== undefined &&
            item !== null &&
            item !== '' &&
            Number.isFinite(
              Number(item)
            )
        );


      if (value !== undefined) {

        performanceValues.push(
          Number(value)
        );

      }

    }
  );


  const averagePerformance =
    performanceValues.length
      ? performanceValues.reduce(
          (sum, value) =>
            sum + value,
          0
        ) /
        performanceValues.length
      : 0;


  let attendanceValues =
    [];


  if (
    typeof HOD_ATTENDANCE_DATA !==
      'undefined' &&
    Array.isArray(
      HOD_ATTENDANCE_DATA
    )
  ) {

    attendanceValues =
      HOD_ATTENDANCE_DATA
        .filter(
          record =>
            Number(
              record.classesHeld
            ) > 0
        )
        .map(
          record =>
            (
              Number(record.present) /
              Number(record.classesHeld)
            ) * 100
        );

  }


  const attendance =
    attendanceValues.length
      ? attendanceValues.reduce(
          (sum, value) =>
            sum + value,
          0
        ) /
        attendanceValues.length
      : 0;


  const performanceEl =
    document.getElementById(
      'performanceChart'
    );

  const enrollmentEl =
    document.getElementById(
      'enrollmentChart'
    );

  const attendanceEl =
    document.getElementById(
      'attendanceChart'
    );


  if (performanceEl) {

    performanceEl.innerHTML =
      `<strong>
        ${averagePerformance.toFixed(1)}%
      </strong>
      <span class="text-muted">
        average performance
      </span>`;

  }


  if (enrollmentEl) {

    enrollmentEl.innerHTML =
      `<strong>
        ${students.length}
      </strong>
      <span class="text-muted">
        students across
        ${courses.length}
        courses
      </span>`;

  }


  if (attendanceEl) {

    attendanceEl.innerHTML =
      `<strong>
        ${attendance.toFixed(1)}%
      </strong>
      <span class="text-muted">
        average attendance
      </span>`;

  }

},


// =========================================================
// ANALYTICS INSIGHTS
// =========================================================

viewDepartmentInsights() {

  this.loadPage(
    'analytics'
  );

  this.showToast(
    'Department analytics opened.',
    'info'
  );

},


// =========================================================
// EXPORT DEPARTMENT REPORT
// =========================================================

exportDepartmentReport() {

  this.loadPage(
    'reports'
  );


  setTimeout(
    () => {

      if (
        typeof this.generateHODReport ===
        'function'
      ) {

        this.generateHODReport();

      }


      setTimeout(
        () => {

          if (
            typeof this.exportHODReportCSV ===
            'function'
          ) {

            this.exportHODReportCSV();

          }

        },
        300
      );

    },
    200
  );

},


// =========================================================
// COMMUNICATION
// =========================================================

renderHODDepartmentCommunication() {

  const announcementContainer =
    document.getElementById(
      'announcementsContainer'
    );


  if (announcementContainer) {

    const announcements =
      this.getHODAnnouncements()
        .filter(
          item =>
            this.getAnnouncementStatus(
              item
            ) === 'published'
        )
        .sort(
          (a, b) =>
            new Date(
              b.publishDate ||
              b.createdAt ||
              0
            ) -
            new Date(
              a.publishDate ||
              a.createdAt ||
              0
            )
        )
        .slice(0, 4);


    announcementContainer.innerHTML =
      announcements.length
        ? announcements
            .map(
              announcement => `
                <div
                  class="activity-item"
                  style="
                    border-bottom:none;
                    padding:10px 0;
                  "
                >

                  <div
                    class="activity-icon-wrap"
                    style="
                      background:rgba(26,58,107,0.08);
                      color:var(--primary);
                    "
                  >
                    <i class="fas fa-bullhorn"></i>
                  </div>

                  <div
                    class="activity-text"
                  >

                    <strong>
                      ${this.escapeAnnouncementHtml(
                        announcement.title
                      )}
                    </strong>

                    <div
                      class="activity-time"
                      style="margin-top:4px;"
                    >
                      ${this.escapeAnnouncementHtml(
                        announcement.message
                      )}
                    </div>

                  </div>

                </div>
              `
            )
            .join('')
        : `
            <div class="activity-item">
              <div class="activity-text">
                No published announcements.
              </div>
            </div>
          `;

  }


  const requestsContainer =
    document.getElementById(
      'requestsFeedbackContainer'
    );


  if (requestsContainer) {

    const requests =
      typeof this.getHODRequests ===
        'function'
        ? this.getHODRequests()
            .filter(
              request =>
                String(
                  request.status || ''
                ).toLowerCase() ===
                'pending'
            )
            .slice(0, 4)
        : [];


    requestsContainer.innerHTML =
      requests.length
        ? requests
            .map(
              request => `
                <div
                  class="activity-item"
                  style="
                    border-bottom:none;
                    padding:10px 0;
                  "
                >

                  <div
                    class="activity-icon-wrap"
                    style="
                      background:rgba(232,160,32,0.10);
                      color:#92630a;
                    "
                  >
                    <i class="fas fa-inbox"></i>
                  </div>

                  <div class="activity-text">

                    <strong>
                      ${this.escapeDepartmentHtml(
                        request.title ||
                        request.type ||
                        'Request'
                      )}
                    </strong>

                    <div
                      class="activity-time"
                      style="margin-top:4px;"
                    >
                      ${this.escapeDepartmentHtml(
                        request.requesterName ||
                        'Department'
                      )}
                    </div>

                  </div>

                </div>
              `
            )
            .join('')
        : `
            <div class="activity-item">
              <div class="activity-text">
                No pending requests.
              </div>
            </div>
          `;

  }

},


// =========================================================
// URGENT LINK
// =========================================================

openUrgentDepartmentAnnouncement() {

  this.openAnnouncementForm(
    null,
    true
  );

},


// =========================================================
// VIEW FACULTY
// =========================================================

viewDepartmentFaculty() {

  this.loadPage(
    'lecturers'
  );

  this.showToast(
    'Lecturer directory opened.',
    'info'
  );

},


// =========================================================
// DOWNLOAD DEPARTMENT PROFILE
// =========================================================

downloadDepartmentProfile() {

  const profile =
    this.getHODDepartmentProfile();

  const students =
    typeof getStudents === 'function'
      ? (getStudents() || [])
      : [];

  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];

  const courses =
    typeof getCourses === 'function'
      ? (getCourses() || [])
      : [];


  const html =
    `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>
        ${this.escapeDepartmentHtml(profile.name)}
      </title>
      <style>
        body{
          font-family:Arial,sans-serif;
          margin:40px;
          color:#1f2937;
        }
        h1{color:#1a3a6b;}
        h2{
          margin-top:28px;
          color:#1a3a6b;
          border-bottom:1px solid #ddd;
          padding-bottom:6px;
        }
        table{
          width:100%;
          border-collapse:collapse;
          margin-top:10px;
        }
        th,td{
          border:1px solid #ddd;
          padding:8px;
          text-align:left;
        }
        th{
          background:#f3f6fa;
        }
      </style>
    </head>

    <body>

      <h1>
        ${this.escapeDepartmentHtml(profile.name)}
      </h1>

      <p>
        <strong>Department Code:</strong>
        ${this.escapeDepartmentHtml(profile.code)}
      </p>

      <p>
        ${this.escapeDepartmentHtml(profile.description)}
      </p>

      <h2>Head of Department</h2>

      <p>
        <strong>Name:</strong>
        ${this.escapeDepartmentHtml(profile.hodName)}
      </p>

      <p>
        <strong>Position:</strong>
        ${this.escapeDepartmentHtml(profile.hodTitle)}
      </p>

      <h2>Department Summary</h2>

      <p>
        Students: ${students.length}
        · Lecturers: ${lecturers.length}
        · Courses: ${courses.length}
      </p>

      <h2>Courses</h2>

      <table>

        <thead>
          <tr>
            <th>Code</th>
            <th>Course</th>
            <th>Department</th>
            <th>Credits</th>
          </tr>
        </thead>

        <tbody>

          ${courses.map(
            course => `
              <tr>
                <td>
                  ${this.escapeDepartmentHtml(
                    course.code ||
                    course.courseCode ||
                    '—'
                  )}
                </td>
                <td>
                  ${this.escapeDepartmentHtml(
                    course.title ||
                    course.name ||
                    course.courseName ||
                    '—'
                  )}
                </td>
                <td>
                  ${this.escapeDepartmentHtml(
                    course.department ||
                    '—'
                  )}
                </td>
                <td>
                  ${this.escapeDepartmentHtml(
                    course.credits ||
                    '—'
                  )}
                </td>
              </tr>
            `
          ).join('')}

        </tbody>

      </table>

      <h2>Staff Directory</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Specialization</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>

          ${lecturers.map(
            lecturer => `
              <tr>
                <td>
                  ${this.escapeDepartmentHtml(
                    lecturer.name ||
                    lecturer.fullName ||
                    lecturer.lecturerName ||
                    '—'
                  )}
                </td>
                <td>
                  ${this.escapeDepartmentHtml(
                    lecturer.role ||
                    lecturer.title ||
                    'Lecturer'
                  )}
                </td>
                <td>
                  ${this.escapeDepartmentHtml(
                    lecturer.specialization ||
                    '—'
                  )}
                </td>
                <td>
                  ${this.escapeDepartmentHtml(
                    lecturer.email ||
                    '—'
                  )}
                </td>
              </tr>
            `
          ).join('')}

        </tbody>

      </table>

      <h2>Mission</h2>
      <p>
        ${this.escapeDepartmentHtml(
          profile.mission
        )}
      </p>

      <h2>Vision</h2>
      <p>
        ${this.escapeDepartmentHtml(
          profile.vision
        )}
      </p>

    </body>
    </html>
    `;


  const printWindow =
    window.open(
      '',
      '_blank',
      'width=1000,height=800'
    );


  if (!printWindow) {

    this.showToast(
      'Please allow pop-ups to download the department profile.',
      'warning'
    );

    return;

  }


  printWindow.document.open();

  printWindow.document.write(
    html
  );

  printWindow.document.close();


  printWindow.onload =
    () => {

      printWindow.focus();

      printWindow.print();

    };


  this.showToast(
    'Department profile opened for printing / Save as PDF.',
    'success'
  );

},


// =========================================================
// UTILITY
// =========================================================

escapeDepartmentHtml(value) {

  return String(
    value ?? ''
  )
    .replace(
      /&/g,
      '&amp;'
    )
    .replace(
      /</g,
      '&lt;'
    )
    .replace(
      />/g,
      '&gt;'
    )
    .replace(
      /"/g,
      '&quot;'
    )
    .replace(
      /'/g,
      '&#039;'
    );

},

  

  showProfile() {
    this.loadPage('profile');
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('open');
  },

  showSettings() {
    this.loadPage('settings');
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('open');
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


// --- Bulk Approve ---
openBulkApproveConfirm() {
  const count = document.querySelectorAll('.submission-checkbox:checked').length;
  if (!count) {
    App.showToast("No submissions selected.", "warning");
    return;
  }
  document.getElementById('bulkApproveMessage').textContent =
    `Are you sure you want to approve ${count} submission(s)?`;
  document.getElementById('bulkApproveModal').style.display = 'flex';
},

closeBulkApproveConfirm() {
  document.getElementById('bulkApproveModal').style.display = 'none';
},

confirmBulkApprove() {
  this.approveSelectedResults();   // run bulk approve
  this.closeBulkApproveConfirm();  // close modal
},



// --- Bulk Return ---
openBulkReturnConfirm() {
  const count = document.querySelectorAll('.submission-checkbox:checked').length;
  if (!count) {
    App.showToast("No submissions selected.", "warning");
    return;
  }
  document.getElementById('bulkReturnMessage').textContent =
    `Are you sure you want to return ${count} submission(s)?`;
  document.getElementById('bulkReturnConfirmModal').style.display = 'flex';
},

closeBulkReturnConfirm() {
  document.getElementById('bulkReturnConfirmModal').style.display = 'none';
},

showBulkReturnComment() {
  this.closeBulkReturnConfirm();

  const comment = document.getElementById('bulkReturnComment');

  if (comment) {
    comment.value = '';
  }

  const modal = document.getElementById('bulkReturnCommentModal');

  if (modal) {
    modal.style.display = 'flex';
  }
},

closeBulkReturnComment() {
  document.getElementById('bulkReturnCommentModal').style.display = 'none';
},



confirmBulkReturn() {

  const comment =
    document.getElementById('bulkReturnComment').value.trim();

  if (!comment) {
    App.showToast(
      'Please enter a comment before returning.',
      'warning'
    );
    return;
  }


  // ============================================
  // INDIVIDUAL RETURN
  // ============================================

  if (window.singleReturnMode === true) {

    if (!currentReturnRow) {
      App.showToast(
        'No submission selected.',
        'warning'
      );
      return;
    }

    const row = currentReturnRow;

    const id =
      row.dataset.id ||
      row.cells[1].textContent.trim();

    const course =
      row.cells[2].textContent.trim();

    const lecturer =
      row.cells[3].textContent.trim();


    // Log activity
    logActivity(
      id,
      lecturer,
      course,
      'Returned',
      comment
    );


    // Remove from pending table
    row.remove();


    // Update counters
    const pendingEl =
      document.getElementById('resPendingCount');

    const returnedEl =
      document.getElementById('resReturnedCount');


    const pendingCount =
      parseInt(pendingEl?.textContent) || 0;

    const returnedCount =
      parseInt(returnedEl?.textContent) || 0;


    if (pendingEl) {
      pendingEl.textContent =
        pendingCount > 0
          ? pendingCount - 1
          : 0;
    }


    if (returnedEl) {
      returnedEl.textContent =
        returnedCount + 1;
    }


    updatePassRate();


    App.showToast(
      `Results ${id} returned successfully.`,
      'info'
    );


    // Close modal
    this.closeBulkReturnComment();


    // Reset individual mode
    window.singleReturnMode = false;
    currentReturnRow = null;

    return;
  }


  // ============================================
  // BULK RETURN
  // ============================================

  const checkboxes =
    document.querySelectorAll(
      '.submission-checkbox:checked'
    );


  if (!checkboxes.length) {
    App.showToast(
      'No submissions selected.',
      'warning'
    );
    return;
  }


  checkboxes.forEach(cb => {

    const row = cb.closest('tr');

    if (!row) return;


    const id =
      row.dataset.id ||
      row.cells[1].textContent.trim();

    const course =
      row.cells[2].textContent.trim();

    const lecturer =
      row.cells[3].textContent.trim();


    logActivity(
      id,
      lecturer,
      course,
      'Returned',
      comment
    );


    row.remove();


    const pendingEl =
      document.getElementById('resPendingCount');

    const returnedEl =
      document.getElementById('resReturnedCount');


    const pendingCount =
      parseInt(pendingEl?.textContent) || 0;

    const returnedCount =
      parseInt(returnedEl?.textContent) || 0;


    if (pendingEl) {
      pendingEl.textContent =
        pendingCount > 0
          ? pendingCount - 1
          : 0;
    }


    if (returnedEl) {
      returnedEl.textContent =
        returnedCount + 1;
    }

  });


  updatePassRate();

  this.closeBulkReturnComment();
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

    // Role-specific page population
    if (document.body.dataset.role === 'lecturer') {
      setTimeout(() => this.handleLecturerPage(page), 150);
    } else {
      // Admin/student logic
      if (page === 'dashboard') {

  setTimeout(() => {

    this.initHODDashboard();

    this.refreshAudienceAnnouncements();

  }, 100);

}

      if (page === 'dashboard') {
  setTimeout(() => {
    this.renderDashboardAnnouncements();
    this.renderAnnouncementNotifications();
  }, 100);
}
      
      if (page === 'results') {
     setTimeout(() => {
    this.initResultsChart();          // existing chart logic
    this.populateResultsSubmissions(); // NEW: fill table rows
    this.updateResultsSummary();       // NEW: update summary cards
  }, 100);
}


// Attendance 
if (page === 'attendance') {
  setTimeout(() => {
    this.initHODAttendance();
  }, 100);
}
// End Attendance 


// Analytics
if (page === 'analytics') {
  setTimeout(() => {
    this.initAnalytics();
  }, 100);
}
// End Analytics

// =====================================================
// HOD DEPARTMENT
// =====================================================
if (page === 'department') {
  setTimeout(() => {
    this.initHODDepartment();
  }, 100);
}
// End HOD Department

// Timetable
if (page === 'timetable') {
  setTimeout(() => {
    this.initHODTimetable();
  }, 100);
}
// End Timetable


// =====================================================
// HOD ANNOUNCEMENTS
// =====================================================
if (page === 'announcements') {
  setTimeout(() => {
    this.initHODAnnouncements();
  }, 100);
}
// End HOD Announcements






// =====================================================
// HOD REQUESTS
// =====================================================
if (page === 'requests') {
  setTimeout(() => {
    this.initHODRequests();
  }, 100);
}
// End HOD Requests

      if (page === 'fees') setTimeout(() => this.initFeesChart(), 100);
      if (page === 'profile') setTimeout(() => this.loadStudentProfile(), 100);
      if (page === 'settings') setTimeout(() => this.initSettingsTabs(), 100);
    }
    

    // System admin pages
    if (['audit-logs', 'backup-restore', 'integrations', 'reports', 'security', 'support'].includes(page)) {
      setTimeout(() => this.initSystemPage(page), 150);
    }

    window.scrollTo(0, 0);

    
  },
  

  /**
   * Handle lecturer-specific page loading and population
   */
  handleLecturerPage(page) {
    switch(page) {
      case 'dashboard':

  this.populateLecturerData();

  this.initLecturerCharts();

  setTimeout(() => {

    this.refreshAudienceAnnouncements();

  }, 100);

  break;
      case 'courses':
        this.populateCoursesTable();
        break;
      case 'students':
        this.populateStudentsTable();
        break;
      case 'attendance':
        this.populateAttendanceList();
        break;
      case 'marks':
        this.populateMarksTable();
        break;
      case 'results':
        this.initResultsChart();
        break;
      case 'profile':
        this.populateLecturerProfile();
        break;
    }
  },

  

  /**
   * MASTER: Populate all lecturer dashboard data
   */
  populateLecturerData() {
    const lecturerId = 'FAC-001'; // From current user
    const lecturerData = getLecturerData(lecturerId);
    if (!lecturerData) return;

    // Update stats cards
    this.updateLecturerStats(lecturerData);
    
    // Update recent activity (dynamic)
    this.updateRecentActivity(lecturerData);
    
    // Update today's schedule
    this.updateTodaysSchedule(lecturerData);
  },

  /**
   * Update dashboard stats cards with real lecturer data
   */
  updateLecturerStats(data) {
    // Courses taught
    const coursesEl = document.querySelector('.stat-card.blue .stat-card-value');
    if (coursesEl) coursesEl.textContent = data.stats.totalCourses || 3;
    
    // Total students
    const studentsEl = document.querySelector('.stat-card.green .stat-card-value');
    if (studentsEl) studentsEl.textContent = data.stats.totalStudents || 156;
    
    // Avg attendance
    const attendanceEl = document.querySelector('.stat-card.teal .stat-card-value');
    if (attendanceEl) attendanceEl.textContent = data.stats.avgAttendance + '%';
    
    // Pending marks
    const marksEl = document.querySelector('.stat-card.gold .stat-card-value');
    if (marksEl) marksEl.textContent = data.stats.pendingMarks || 23;
    
    // Classes today
    const classesEl = document.querySelector('.stat-card.purple .stat-card-value');
    if (classesEl) classesEl.textContent = data.stats.classesToday || 3;
    
    // Next class
    const nextClassEl = document.querySelector('.stat-card.red .stat-card-value');
    const nextCourseEl = document.querySelector('.stat-card.red .stat-card-label');
    if (nextClassEl && nextCourseEl && data.stats.nextClass) {
      nextClassEl.textContent = `Next: ${data.stats.nextClass.time}`;
      nextCourseEl.textContent = data.stats.nextClass.code;
    }
  },

  /**
   * Dynamic recent teaching activity
   */
  updateRecentActivity(data) {
    const container = document.querySelector('#page-dashboard .activity-item');
    if (!container) return;

    const activities = [
      { icon: 'fa-clipboard-check', color: 'rgba(22,163,74,0.1)', text: `ACCT101: Attendance marked (${data.studentsByCourse.ACCT101?.length || 30}/${data.courses.ACCT101.students} present)`, time: '25 min ago' },
      { icon: 'fa-star', color: 'rgba(26,58,107,0.1)', text: 'Midterm results published for MGMT201', time: '2 hours ago' },
      { icon: 'fa-file-alt', color: 'rgba(8,145,178,0.1)', text: 'Assignment 2 uploaded for ACCT102', time: 'Yesterday' },
      { icon: 'fa-bullhorn', color: 'rgba(124,58,237,0.1)', text: 'Class announcement posted: Exam guidelines', time: '2 days ago' }
    ];

    const activityList = document.querySelector('#page-dashboard [class*="activity-item"]:first-of-type ~ [class*="activity-item"], #page-dashboard [class*="activity-item"]');
    if (activityList) {
      activityList.innerHTML = activities.map(a => `
        <div class="activity-item">
          <div class="activity-icon-wrap" style="${a.color};color:var(--success);">
            <i class="fas ${a.icon}"></i>
          </div>
          <div>
            <div class="activity-text">${a.text}</div>
            <div class="activity-time">${a.time}</div>
          </div>
        </div>
      `).join('');
    }
  },

  /**
   * Update today's schedule with real course data
   */
  updateTodaysSchedule(data) {
    const scheduleContainer = document.querySelector('#page-dashboard .card:last-of-type .card-body');
    if (!scheduleContainer) return;

    const schedule = [
      { dot: 'var(--primary)', time: '08:00–10:00', course: 'ACCT101', room: 'A1', students: data.courses.ACCT101?.students || 30 },
      { dot: 'var(--accent)', time: '14:00–16:00', course: 'MGMT201', room: 'B2', students: data.courses.MGMT201?.students || 25 },
      { dot: 'var(--success)', time: '16:00–18:00', course: 'ACCT102 Lab', room: 'Computer Lab', students: data.courses.ACCT102?.students || 28 }
    ];

    scheduleContainer.innerHTML = schedule.map(s => `
      <div class="activity-item">
        <div class="activity-dot" style="background:${s.dot};"></div>
        <div>
          <div class="activity-text fw-600">${s.time} ${s.course}</div>
          <div class="activity-time"><i class="fas fa-map-marker-alt"></i> Room ${s.room} · ${s.students} students</div>
        </div>
      </div>
    `).join('');
  },

  loadStudentProfile() {
    try {
      const student = getCurrentStudent();
      if (!student || !student.name) {
        this.showToast('Student data not found', 'error');
        return;
      }

      // Populate header
      document.querySelector('#page-profile h1').textContent = student.name;
      document.querySelector('#page-profile .page-subtitle').textContent = `${student.id || 'STU-2025-001'} · L1 Accounting`;

      // Stats
      document.getElementById('profile-gpa').textContent = student.gpa || '3.42';
      
      // Derive credits from courses
      const totalCredits = student.courses?.reduce((sum, c) => sum + (c.credits || 0), 0) || 15;
      document.getElementById('profile-credits').textContent = totalCredits;

      // Average attendance
      const avgAttendance = student.courses?.reduce((sum, c) => sum + (c.attendance || 0), 0) / (student.courses?.length || 1);
      document.getElementById('profile-attendance').textContent = Math.round(avgAttendance) + '%';

      // Fees
      const fees = student.fees || {paid: 1200000, balance: 0, status: 'Current'};
      document.getElementById('profile-fees-paid').textContent = fees.paid?.toLocaleString() || '1,200,000';
      document.getElementById('profile-fees-balance').textContent = fees.balance || '0';
      document.getElementById('profile-fees-status').textContent = `All fees ${fees.status?.toLowerCase()} ✓`;
      document.getElementById('profile-fees-progress').style.width = fees.balance === 0 ? '100%' : '0%';

      // Contact info
      document.getElementById('profile-student-id').value = student.id || 'STU-2025-001';
      document.getElementById('profile-department').value = student.department || 'Accounting';
      document.getElementById('profile-level').value = student.level || 'L1';

      // Courses table
      const tbody = document.querySelector('#profile-courses-table tbody');
      if (tbody && student.courses) {
        tbody.innerHTML = student.courses.map(course => `
          <tr>
            <td>${course.code || 'ACCT101'}</td>
            <td>${course.lecturer || 'Dr. Rakotomalala'}</td>
            <td>${course.credits || 3}</td>
            <td><span class="badge badge-${course.grade === 'A' ? 'green' : course.grade === 'B' ? 'blue' : 'gold'}">${course.grade || 'B'} ${course.grade ? `(${course.avg || 80})` : ''}</span></td>
            <td><span class="badge badge-green">${course.attendance || 92}%</span></td>
          </tr>
        `).join('');
      }

      
    } catch (error) {
      console.error('Error loading profile:', error);
      this.showToast('Error loading profile data', 'error');
    }
  },

  initSettingsTabs() {
    // Setup settings tabs
    document.querySelectorAll('[data-tab-group="settings"] .tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabGroup = tab.dataset.tabGroup;
        const tabName = tab.dataset.tab;
        this.switchTab(tabGroup, tabName);
      });
    });

    // Theme toggles
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.showToast(`Theme changed to ${e.target.value}`);
        // Apply theme logic here
      });
    });

    // Switches
    document.querySelectorAll('.switch input[type="checkbox"]').forEach(switchEl => {
      switchEl.addEventListener('change', (e) => {
        this.showToast(e.target.checked ? 'Enabled' : 'Disabled');
      });
    });

    
  },

  initSystemPage(page) {
    switch(page) {
      case 'audit-logs':
        if (typeof renderAuditLogs === 'undefined') {
          this.loadAuditLogs();
        } else {
          renderAuditLogs();
        }
        break;
      case 'backup-restore':
        if (typeof renderBackups === 'undefined') {
          this.loadBackups();
        } else {
          renderBackups();
        }
        break;
      case 'integrations':
        if (typeof renderIntegrations === 'undefined') {
          this.loadIntegrations();
        } else {
          renderIntegrations();
        }
        break;
      case 'reports':
        this.initReportsPage();
        break;
      case 'security':
        if (typeof renderSecurityEvents === 'undefined') {
          this.loadSecurityEvents();
        } else {
          renderSecurityEvents();
        }
        break;
      case 'support':
        if (typeof renderTickets === 'undefined') {
          this.loadTickets();
        } else {
          renderTickets();
        }
        break;
    }
  },

  loadAuditLogs() {
    const logs = getAuditLogs().slice(0, 50);
    const tbody = document.getElementById('auditTableBody');
    if (!tbody) return;
    tbody.innerHTML = logs.map(log => `
      <tr>
        <td>${new Date(log.timestamp).toLocaleString()}</td>
        <td>${log.user}</td>
        <td><span class="badge badge-${log.status === 'success' ? 'green' : 'red'}">${log.action}</span></td>
        <td>${log.target}</td>
        <td><span class="badge badge-${log.status === 'success' ? 'green' : 'red'}">${log.status.toUpperCase()}</span></td>
        <td>${log.ip}</td>
      </tr>
    `).join('');
  },

  loadBackups() {
    const backups = getBackups();
    const list = document.getElementById('backupsList');
    if (!list) return;
    list.innerHTML = backups.map(backup => `
      <div class="flex-between p-12 border-b border-gray-100">
        <div>
          <div class="fw-600">${backup.id}</div>
          <div class="text-sm text-muted">${backup.date} • ${backup.size} • ${backup.type}</div>
        </div>
        <div class="flex-center gap-8">
          <span class="text-sm badge badge-${backup.status === 'completed' ? 'green' : 'red'}">${backup.status}</span>
          ${backup.download ? '<button class="btn btn-sm btn-outline"><i class="fas fa-download"></i></button>' : ''}
        </div>
      </div>
    `).join('');
  },

  loadIntegrations() {
    const integrations = getIntegrations();
    const list = document.getElementById('integrationsList');
    if (!list) return;
    list.innerHTML = integrations.map(int => `
      <div class="integration-item p-16 border-b border-gray-100">
        <div class="flex-between">
          <div class="flex-center gap-12">
            <div class="integration-icon">${int.name.split(' ')[0][0]}${int.name.split(' ')[1]?.[0] || ''}</div>
            <div>
              <div class="fw-600">${int.name}</div>
              <div class="text-sm text-muted">${int.usage}</div>
            </div>
          </div>
          <span class="badge badge-${int.status}">${int.status.toUpperCase()}</span>
        </div>
        <div class="text-xs text-muted mt-8">Last sync: ${int.lastSync}</div>
      </div>
    `).join('');
  },

  /* =========================================================
   HOD REPORTS MODULE
   ========================================================= */

initReportsPage() {

  try {

    this.populateReportsFilters();

    this.setupReportsFilterEvents();

    this.generateHODReport();

  } catch (error) {

    console.error(
      'Reports initialization error:',
      error
    );

  }

},


/* =========================================================
   REPORT FILTER OPTIONS
   ========================================================= */

populateReportsFilters() {

  const students =
    typeof getStudents === 'function'
      ? (getStudents() || [])
      : [];

  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];

  const courses =
    typeof getCourses === 'function'
      ? (getCourses() || [])
      : [];

  const timetable =
    typeof HOD_TIMETABLE_DATA !== 'undefined' &&
    Array.isArray(HOD_TIMETABLE_DATA)
      ? HOD_TIMETABLE_DATA
      : [];

  /* =====================================================
     ACADEMIC YEARS
     ===================================================== */

  const academicYearSelect =
    document.getElementById(
      'reportAcademicYear'
    );

  if (academicYearSelect) {

    const currentValue =
      academicYearSelect.value || 'all';

    const years = [
      ...new Set([

        ...students.map(
          student =>
            student.academicYear ||
            student.academic_year ||
            ''
        ),

        ...timetable.map(
          record =>
            record.academicYear || ''
        )

      ].filter(Boolean))

    ].sort().reverse();

    academicYearSelect.innerHTML =
      '<option value="all">All Academic Years</option>';

    years.forEach(year => {

      const option =
        document.createElement('option');

      option.value = year;
      option.textContent = year;

      academicYearSelect.appendChild(option);

    });

    if (
      Array.from(
        academicYearSelect.options
      ).some(
        option =>
          option.value === currentValue
      )
    ) {

      academicYearSelect.value =
        currentValue;

    }

  }


  /* =====================================================
     INTAKES
     ===================================================== */

  const intakeSelect =
    document.getElementById(
      'reportIntake'
    );

  if (intakeSelect) {

    const currentValue =
      intakeSelect.value || 'all';

    const intakes = [
      ...new Set([

        ...students.map(
          student =>
            student.intake || ''
        ),

        ...timetable.map(
          record =>
            record.intake || ''
        )

      ].filter(Boolean))

    ].sort();

    intakeSelect.innerHTML =
      '<option value="all">All Intakes</option>';

    intakes.forEach(intake => {

      const option =
        document.createElement('option');

      option.value = intake;
      option.textContent = intake;

      intakeSelect.appendChild(option);

    });

    if (
      Array.from(
        intakeSelect.options
      ).some(
        option =>
          option.value === currentValue
      )
    ) {

      intakeSelect.value =
        currentValue;

    }

  }


  /* =====================================================
     PROGRAMMES
     ===================================================== */

  const programmeSelect =
    document.getElementById(
      'reportProgramme'
    );

  if (programmeSelect) {

    const currentValue =
      programmeSelect.value || 'all';

    const programmes = [
      ...new Set([

        ...students.map(
          student =>
            student.programme ||
            student.program ||
            student.department ||
            ''
        ),

        ...timetable.map(
          record =>
            record.programme ||
            record.program ||
            record.department ||
            ''
        )

      ].filter(Boolean))

    ].sort();

    programmeSelect.innerHTML =
      '<option value="all">All Programmes</option>';

    programmes.forEach(programme => {

      const option =
        document.createElement('option');

      option.value = programme;
      option.textContent = programme;

      programmeSelect.appendChild(option);

    });

    if (
      Array.from(
        programmeSelect.options
      ).some(
        option =>
          option.value === currentValue
      )
    ) {

      programmeSelect.value =
        currentValue;

    }

  }


  /* =====================================================
     COURSES
     ===================================================== */

  const courseSelect =
    document.getElementById(
      'reportCourse'
    );

  if (courseSelect) {

    const currentValue =
      courseSelect.value || 'all';

    const courseMap =
      new Map();

    courses.forEach(course => {

      const code =
        course.code ||
        course.id ||
        course.courseCode ||
        '';

      const title =
        course.title ||
        course.name ||
        '';

      if (code) {

        courseMap.set(
          String(code),
          title
        );

      }

    });


    timetable.forEach(record => {

      const code =
        record.courseCode ||
        record.course ||
        '';

      const title =
        record.courseName ||
        record.title ||
        '';

      if (
        code &&
        !courseMap.has(
          String(code)
        )
      ) {

        courseMap.set(
          String(code),
          title
        );

      }

    });


    courseSelect.innerHTML =
      '<option value="all">All Courses / Modules</option>';

    Array.from(
      courseMap.entries()
    )
      .sort((a, b) =>
        a[0].localeCompare(b[0])
      )
      .forEach(
        ([code, title]) => {

          const option =
            document.createElement(
              'option'
            );

          option.value = code;

          option.textContent =
            title
              ? `${code} — ${title}`
              : code;

          courseSelect.appendChild(
            option
          );

        }
      );


    if (
      Array.from(
        courseSelect.options
      ).some(
        option =>
          option.value === currentValue
      )
    ) {

      courseSelect.value =
        currentValue;

    }

  }


  /* =====================================================
     LECTURERS
     ===================================================== */

  const lecturerSelect =
    document.getElementById(
      'reportLecturer'
    );

  if (lecturerSelect) {

    const currentValue =
      lecturerSelect.value || 'all';

    const lecturerMap =
      new Map();

    lecturers.forEach(lecturer => {

      const id =
        lecturer.id ||
        lecturer.name ||
        lecturer.fullName ||
        '';

      const name =
        lecturer.name ||
        lecturer.fullName ||
        lecturer.id ||
        '';

      if (id) {

        lecturerMap.set(
          String(id),
          name
        );

      }

    });


    timetable.forEach(record => {

      const lecturer =
        record.lecturer || '';

      if (
        lecturer &&
        !lecturerMap.has(
          String(lecturer)
        )
      ) {

        lecturerMap.set(
          String(lecturer),
          lecturer
        );

      }

    });


    lecturerSelect.innerHTML =
      '<option value="all">All Lecturers</option>';

    Array.from(
      lecturerMap.entries()
    )
      .sort((a, b) =>
        a[1].localeCompare(b[1])
      )
      .forEach(
        ([id, name]) => {

          const option =
            document.createElement(
              'option'
            );

          option.value = id;
          option.textContent = name;

          lecturerSelect.appendChild(
            option
          );

        }
      );


    if (
      Array.from(
        lecturerSelect.options
      ).some(
        option =>
          option.value === currentValue
      )
    ) {

      lecturerSelect.value =
        currentValue;

    }

  }

    /* =====================================================
     SEMESTERS
     ===================================================== */

  const semesterSelect =
    document.getElementById('reportSemester');

  if (semesterSelect) {

    const currentValue =
      semesterSelect.value || 'all';

    const semesters = [
      ...new Set([
        ...students.map(
          student =>
            student.semester || ''
        ),

        ...timetable.map(
          record =>
            record.semester || ''
        ),

        ...(
          typeof HOD_ATTENDANCE_DATA !== 'undefined' &&
          Array.isArray(HOD_ATTENDANCE_DATA)
            ? HOD_ATTENDANCE_DATA.map(
                record =>
                  record.semester || ''
              )
            : []
        )
      ].filter(Boolean))
    ].sort(
      (a, b) =>
        Number(a) - Number(b)
    );

    semesterSelect.innerHTML =
      '<option value="all">All Semesters</option>';

    semesters.forEach(semester => {

      const option =
        document.createElement('option');

      option.value = semester;

      option.textContent =
        `Semester ${semester}`;

      semesterSelect.appendChild(option);

    });

    if (
      Array.from(
        semesterSelect.options
      ).some(
        option =>
          option.value === currentValue
      )
    ) {
      semesterSelect.value =
        currentValue;
    }

  }


  /* =====================================================
     STUDENT YEARS
     ===================================================== */

  const yearSelect =
    document.getElementById('reportYear');

  if (yearSelect) {

    const currentValue =
      yearSelect.value || 'all';

    const years = [
      ...new Set([
        ...students.map(
          student =>
            student.year ||
            student.level ||
            ''
        ),

        ...timetable.map(
          record =>
            record.year || ''
        ),

        ...(
          typeof HOD_ATTENDANCE_DATA !== 'undefined' &&
          Array.isArray(HOD_ATTENDANCE_DATA)
            ? HOD_ATTENDANCE_DATA.map(
                record =>
                  record.year || ''
              )
            : []
        )
      ].filter(Boolean))
    ]
      .map(year =>
        this.normalizeAnalyticsYear(year)
      )
      .filter(Boolean);

    const uniqueYears =
      [...new Set(years)].sort(
        (a, b) =>
          Number(a) - Number(b)
      );

    yearSelect.innerHTML =
      '<option value="all">All Student Years</option>';

    uniqueYears.forEach(year => {

      const option =
        document.createElement('option');

      option.value = year;

      option.textContent =
        `Year ${year}`;

      yearSelect.appendChild(option);

    });

    if (
      Array.from(
        yearSelect.options
      ).some(
        option =>
          option.value === currentValue
      )
    ) {
      yearSelect.value =
        currentValue;
    }

  }

},


/* =========================================================
   REPORT FILTER EVENTS
   ========================================================= */

setupReportsFilterEvents() {

  const filterIds = [

    'reportType',
    'reportAcademicYear',
    'reportSemester',
    'reportIntake',
    'reportProgramme',
    'reportCourse',
    'reportLecturer',
    'reportYear'

  ];


  filterIds.forEach(id => {

    const element =
      document.getElementById(id);

    if (!element) return;

    element.onchange = () => {

      this.generateHODReport();

    };

  });

},


/* =========================================================
   REPORT FILTER VALUES
   ========================================================= */

getHODReportFilters() {

  return {

    type:
      document.getElementById(
        'reportType'
      )?.value || 'academic',

    academicYear:
      document.getElementById(
        'reportAcademicYear'
      )?.value || 'all',

    semester:
      document.getElementById(
        'reportSemester'
      )?.value || 'all',

    intake:
      document.getElementById(
        'reportIntake'
      )?.value || 'all',

    programme:
      document.getElementById(
        'reportProgramme'
      )?.value || 'all',

    course:
      document.getElementById(
        'reportCourse'
      )?.value || 'all',

    lecturer:
      document.getElementById(
        'reportLecturer'
      )?.value || 'all',

    year:
      document.getElementById(
        'reportYear'
      )?.value || 'all'

  };

},


/* =========================================================
   REPORT FILTER MATCHING
   ========================================================= */

hodReportMatchesFilters(
  record,
  filters
) {

  if (!record) {
    return false;
  }


  /* =====================================================
     NORMALIZE VALUES
     ===================================================== */

  const normalize =
    value =>
      String(value ?? '')
        .trim()
        .toLowerCase();


  const academicYear =
    normalize(
      record.academicYear ||
      record.academic_year
    );


  const semester =
    normalize(
      record.semester
    );


  const intake =
    normalize(
      record.intake
    );


  const programme =
    normalize(
      record.programme ||
      record.program ||
      record.department
    );


  /*
   * Course may come from:
   * - courseCode
   * - course
   * - code
   * - module
   *
   * Results submissions are special because
   * their course field may be:
   * "BIT201 — Database Systems"
   */
  const rawCourse =
    String(
      record.courseCode ||
      record.course ||
      record.code ||
      record.module ||
      ''
    ).trim();


  const course =
    normalize(rawCourse);


  const courseCode =
    normalize(
      record.courseCode ||
      (
        rawCourse.includes('—')
          ? rawCourse.split('—')[0]
          : rawCourse.includes('-')
            ? rawCourse.split('-')[0]
            : rawCourse
      )
    );


  const lecturer =
    normalize(
      record.lecturer ||
      record.lecturerId
    );


  const year =
    String(
      this.normalizeAnalyticsYear(
        record.year ||
        record.studentYear ||
        record.level
      ) || ''
    );


  /* =====================================================
     FILTER VALUES
     ===================================================== */

  const selectedAcademicYear =
    normalize(
      filters.academicYear
    );


  const selectedSemester =
    normalize(
      filters.semester
    );


  const selectedIntake =
    normalize(
      filters.intake
    );


  const selectedProgramme =
    normalize(
      filters.programme
    );


  const selectedCourse =
    normalize(
      filters.course
    );


  const selectedLecturer =
    normalize(
      filters.lecturer
    );


  const selectedYear =
    String(
      this.normalizeAnalyticsYear(
        filters.year
      ) || ''
    );


  /* =====================================================
     ACADEMIC YEAR
     ===================================================== */

  if (
    selectedAcademicYear !== 'all' &&
    selectedAcademicYear !== '' &&
    academicYear !== selectedAcademicYear
  ) {
    return false;
  }


  /* =====================================================
     SEMESTER
     ===================================================== */

  if (
    selectedSemester !== 'all' &&
    selectedSemester !== '' &&
    semester !== selectedSemester
  ) {
    return false;
  }


  /* =====================================================
     INTAKE
     ===================================================== */

  if (
    selectedIntake !== 'all' &&
    selectedIntake !== '' &&
    intake !== selectedIntake
  ) {
    return false;
  }


  /* =====================================================
     PROGRAMME
     ===================================================== */

  if (
    selectedProgramme !== 'all' &&
    selectedProgramme !== '' &&
    programme !== selectedProgramme
  ) {

    /*
     * Allow partial programme matching.
     * Example:
     * "BIT Year 2"
     * against a longer programme value.
     */
    if (
      !programme.includes(
        selectedProgramme
      ) &&
      !selectedProgramme.includes(
        programme
      )
    ) {
      return false;
    }

  }


  /* =====================================================
     COURSE / MODULE
     ===================================================== */

  if (
    selectedCourse !== 'all' &&
    selectedCourse !== ''
  ) {

    if (
      course !== selectedCourse &&
      courseCode !== selectedCourse &&
      !course.startsWith(
        selectedCourse
      )
    ) {
      return false;
    }

  }


  /* =====================================================
     LECTURER
     ===================================================== */

  if (
    selectedLecturer !== 'all' &&
    selectedLecturer !== '' &&
    lecturer !== selectedLecturer
  ) {
    return false;
  }


  /* =====================================================
     STUDENT YEAR
     ===================================================== */

  if (
    selectedYear !== 'all' &&
    selectedYear !== '' &&
    year !== selectedYear
  ) {
    return false;
  }


  return true;

},


/* =========================================================
   REPORT ESCAPING
   ========================================================= */

escapeHODReport(value) {

  return String(
    value ?? ''
  )
    .replace(
      /&/g,
      '&amp;'
    )
    .replace(
      /</g,
      '&lt;'
    )
    .replace(
      />/g,
      '&gt;'
    )
    .replace(
      /"/g,
      '&quot;'
    )
    .replace(
      /'/g,
      '&#039;'
    );

},


/* =========================================================
   GENERATE REPORT
   ========================================================= */

generateHODReport() {

  const tableHead =
    document.getElementById(
      'hodReportTableHead'
    );

  const tableBody =
    document.getElementById(
      'hodReportTableBody'
    );

  if (
    !tableHead ||
    !tableBody
  ) {

    return;

  }


  const filters =
    this.getHODReportFilters();


  let result = {

    title:
      'Academic Performance Report',

    subtitle:
      'Current department academic performance',

    headers: [],

    rows: [],

    totalLabel:
      'Total Students',

    averageLabel:
      'Average Performance',

    positiveLabel:
      'Passing Students',

    attentionLabel:
      'Students Requiring Attention',

    average:
      null,

    positive:
      0,

    attention:
      0

  };


  /* =====================================================
     ACADEMIC PERFORMANCE REPORT
     ===================================================== */

  if (
    filters.type ===
    'academic'
  ) {

    const students =
      typeof getStudents === 'function'
        ? (getStudents() || [])
        : [];


    const filtered =
      students.filter(
        student =>
          this.hodReportMatchesFilters(
            student,
            filters
          )
      );


    result.title =
      'Academic Performance Report';

    result.subtitle =
      'Student academic performance by programme and year';


    result.headers = [

      '#',
      'Student ID',
      'Student',
      'Programme',
      'Year',
      'Average',
      'Attendance',
      'Status'

    ];


    const performanceValues =
      filtered
        .map(student =>
          this.analyticsNumber(
            student.avg ??
            student.average ??
            student.performance
          )
        )
        .filter(
          value =>
            value !== null
        );


    result.average =
      performanceValues.length
        ? performanceValues.reduce(
            (sum, value) =>
              sum + value,
            0
          ) /
          performanceValues.length
        : null;


    result.positive =
      performanceValues.filter(
        value =>
          value >= 60
      ).length;


    result.attention =
      performanceValues.filter(
        value =>
          value < 60
      ).length;


    result.rows =
      filtered.map(
        (student, index) => {

          const average =
            this.analyticsNumber(
              student.avg ??
              student.average ??
              student.performance
            );


          const attendance =
            this.analyticsNumber(
              student.attendance
            );


          const status =
            average === null
              ? 'N/A'
              : average >= 60
                ? 'Pass'
                : 'Needs Attention';


          return [

            index + 1,

            student.id ||
            student.studentId ||
            'N/A',

            student.name ||
            student.fullName ||
            'N/A',

            student.programme ||
            student.program ||
            student.department ||
            'N/A',

            this.normalizeAnalyticsYear(
              student.year ||
              student.level
            )
              ? `Year ${
                  this.normalizeAnalyticsYear(
                    student.year ||
                    student.level
                  )
                }`
              : 'N/A',

            average === null
              ? 'N/A'
              : `${average.toFixed(1)}%`,

            attendance === null
              ? 'N/A'
              : `${attendance.toFixed(1)}%`,

            status

          ];

        }
      );

  }


  /* =====================================================
     ATTENDANCE REPORT
     ===================================================== */

  else if (
    filters.type ===
    'attendance'
  ) {

    const attendance =
      typeof HOD_ATTENDANCE_DATA !==
        'undefined' &&
      Array.isArray(
        HOD_ATTENDANCE_DATA
      )
        ? HOD_ATTENDANCE_DATA
        : [];


    const filtered =
      attendance.filter(
        record =>
          this.hodReportMatchesFilters(
            record,
            filters
          )
      );


    result.title =
      'Attendance Report';

    result.subtitle =
      'Department attendance records and attendance rates';


    result.headers = [

      '#',
      'Student',
      'Student ID',
      'Year',
      'Semester',
      'Course',
      'Classes Held',
      'Present',
      'Absent',
      'Attendance',
      'Status'

    ];


    const attendanceValues =
      filtered.map(
        record => {

          const held =
            Number(
              record.classesHeld
            );

          const present =
            Number(
              record.present
            );

          return held > 0
            ? (
                present /
                held
              ) *
              100
            : null;

        }
      )
      .filter(
        value =>
          value !== null
      );


    result.average =
      attendanceValues.length
        ? attendanceValues.reduce(
            (sum, value) =>
              sum + value,
            0
          ) /
          attendanceValues.length
        : null;


    result.positive =
      attendanceValues.filter(
        value =>
          value >= 85
      ).length;


    result.attention =
      attendanceValues.filter(
        value =>
          value < 85
      ).length;


    result.rows =
      filtered.map(
        (record, index) => {

          const held =
            Number(
              record.classesHeld
            ) || 0;

          const present =
            Number(
              record.present
            ) || 0;

          const absent =
            Number(
              record.absent
            ) || 0;

          const attendanceRate =
            held > 0
              ? (
                  present /
                  held
                ) *
                100
              : 0;


          return [

            index + 1,

            record.studentName ||
            record.name ||
            'N/A',

            record.studentId ||
            record.id ||
            'N/A',

            this.normalizeAnalyticsYear(
              record.year
            )
              ? `Year ${
                  this.normalizeAnalyticsYear(
                    record.year
                  )
                }`
              : 'N/A',

            record.semester
              ? `Semester ${record.semester}`
              : 'N/A',

            record.courseCode ||
            record.courseName ||
            'N/A',

            held,

            present,

            absent,

            `${attendanceRate.toFixed(1)}%`,

            attendanceRate >= 85
              ? 'Good'
              : 'Needs Attention'

          ];

        }
      );

  }


  /* =====================================================
     RESULTS REPORT
     ===================================================== */

  else if (
    filters.type ===
    'results'
  ) {

    const submissions =
      typeof getResultsSubmissions ===
        'function'
        ? (
            getResultsSubmissions() ||
            []
          )
        : [];


    const approvedResults =
      JSON.parse(
        localStorage.getItem(
          'approvedResults'
        ) || '[]'
      );


    const approvedIds =
      new Set(
        approvedResults.map(
          result =>
            String(result.id)
        )
      );


    const filtered =
      submissions.filter(
        record =>
          this.hodReportMatchesFilters(
            record,
            filters
          )
      );


    result.title =
      'Results Report';

    result.subtitle =
      'Results submissions and approval status';


    result.headers = [

      '#',
      'Submission ID',
      'Course',
      'Lecturer',
      'Programme',
      'Students',
      'Submitted Date',
      'Status'

    ];


    result.positive =
      filtered.filter(
        record =>
          approvedIds.has(
            String(record.id)
          )
      ).length;


    result.attention =
      filtered.filter(
        record =>
          !approvedIds.has(
            String(record.id)
          )
      ).length;


    result.average =
      filtered.length
        ? (
            result.positive /
            filtered.length
          ) *
          100
        : null;


    result.rows =
      filtered.map(
        (record, index) => {

          const approved =
            approvedIds.has(
              String(record.id)
            );


          return [

            index + 1,

            record.id ||
            'N/A',

            record.course ||
            record.courseCode ||
            'N/A',

            record.lecturer ||
            'N/A',

            record.programme ||
            'N/A',

            record.students ??
            'N/A',

            record.submittedDate ||
            'N/A',

            approved
              ? 'Approved'
              : 'Pending'

          ];

        }
      );

  }


  /* =====================================================
     STUDENT REGISTRATION REPORT
     ===================================================== */

  else if (
    filters.type ===
    'registration'
  ) {

    const students =
      typeof getStudents ===
        'function'
        ? (getStudents() || [])
        : [];


    const filtered =
      students.filter(
        student =>
          this.hodReportMatchesFilters(
            student,
            filters
          )
      );


    result.title =
      'Student Registration Report';

    result.subtitle =
      'Department student registration by programme and year';


    result.headers = [

      '#',
      'Student ID',
      'Student',
      'Programme',
      'Year',
      'Intake',
      'Academic Year',
      'Status'

    ];


    const programmes =
      new Set(
        filtered
          .map(
            student =>
              student.programme ||
              student.program ||
              student.department
          )
          .filter(Boolean)
      );


    const activeStudents =
      filtered.filter(
        student =>
          !student.status ||
          String(
            student.status
          ).toLowerCase() ===
            'active'
      ).length;


    result.positive =
      activeStudents;


    result.attention =
      Math.max(
        0,
        filtered.length -
        activeStudents
      );


    result.average =
      programmes.size
        ? filtered.length /
          programmes.size
        : null;


    result.rows =
      filtered.map(
        (student, index) => {

          const status =
            student.status ||
            'Active';


          return [

            index + 1,

            student.id ||
            student.studentId ||
            'N/A',

            student.name ||
            student.fullName ||
            'N/A',

            student.programme ||
            student.program ||
            student.department ||
            'N/A',

            this.normalizeAnalyticsYear(
              student.year ||
              student.level
            )
              ? `Year ${
                  this.normalizeAnalyticsYear(
                    student.year ||
                    student.level
                  )
                }`
              : 'N/A',

            student.intake ||
            'N/A',

            student.academicYear ||
            student.academic_year ||
            'N/A',

            status

          ];

        }
      );

  }


  /* =====================================================
     TIMETABLE REPORT
     ===================================================== */

  else if (
    filters.type ===
    'timetable'
  ) {

    const timetable =
      typeof HOD_TIMETABLE_DATA !==
        'undefined' &&
      Array.isArray(
        HOD_TIMETABLE_DATA
      )
        ? HOD_TIMETABLE_DATA
        : [];


    const filtered =
      timetable.filter(
        record =>
          this.hodReportMatchesFilters(
            record,
            filters
          )
      );


    result.title =
      'Timetable Report';

    result.subtitle =
      'Department timetable schedule and course allocation';


    result.headers = [

      '#',
      'Course Code',
      'Course',
      'Module',
      'Lecturer',
      'Programme',
      'Year',
      'Session',
      'Date',
      'Time',
      'Room',
      'Status'

    ];


    result.positive =
      filtered.filter(
        record =>
          String(
            record.status ||
            ''
          ).toLowerCase() ===
          'published'
      ).length;


    result.attention =
      filtered.filter(
        record =>
          String(
            record.status ||
            ''
          ).toLowerCase() !==
          'published'
      ).length;


    result.average =
      filtered.length
        ? (
            result.positive /
            filtered.length
          ) *
          100
        : null;


    result.rows =
      filtered.map(
        (record, index) => {

          return [

            index + 1,

            record.courseCode ||
            'N/A',

            record.courseName ||
            'N/A',

            record.module ||
            'N/A',

            record.lecturer ||
            'N/A',

            record.programme ||
            'N/A',

            this.normalizeAnalyticsYear(
              record.year
            )
              ? `Year ${
                  this.normalizeAnalyticsYear(
                    record.year
                  )
                }`
              : 'N/A',

            record.session ||
            'N/A',

            record.startDate ||
            'N/A',

            record.time ||
            'N/A',

            record.room ||
            'N/A',

            record.status ||
            'N/A'

          ];

        }
      );

  }


  /* =====================================================
     RENDER TABLE
     ===================================================== */

  tableHead.innerHTML = `

    <tr>

      ${result.headers
        .map(
          header =>
            `<th>${this.escapeHODReport(
              header
            )}</th>`
        )
        .join('')}

    </tr>

  `;


  if (!result.rows.length) {

    tableBody.innerHTML = `

      <tr>

        <td
          colspan="${result.headers.length}"
          class="text-center text-muted">

          No data matches the selected
          report filters.

        </td>

      </tr>

    `;

  } else {

    tableBody.innerHTML =
      result.rows
        .map(
          row => `

            <tr>

              ${row
                .map(
                  cell =>
                    `<td>${this.escapeHODReport(
                      cell
                    )}</td>`
                )
                .join('')}

            </tr>

          `
        )
        .join('');

  }


  /* =====================================================
     REPORT HEADER
     ===================================================== */

  const titleEl =
    document.getElementById(
      'reportPreviewTitle'
    );

  const subtitleEl =
    document.getElementById(
      'reportPreviewSubtitle'
    );


  if (titleEl) {

    titleEl.textContent =
      result.title;

  }


  if (subtitleEl) {

    subtitleEl.textContent =
      result.subtitle;

  }


  /* =====================================================
     REPORT SUMMARY
     ===================================================== */

  const totalEl =
    document.getElementById(
      'reportSummaryTotal'
    );

  const totalLabelEl =
    document.getElementById(
      'reportSummaryTotalLabel'
    );

  const averageEl =
    document.getElementById(
      'reportSummaryAverage'
    );

  const averageLabelEl =
    document.getElementById(
      'reportSummaryAverageLabel'
    );

  const positiveEl =
    document.getElementById(
      'reportSummaryPositive'
    );

  const positiveLabelEl =
    document.getElementById(
      'reportSummaryPositiveLabel'
    );

  const attentionEl =
    document.getElementById(
      'reportSummaryAttention'
    );

  const attentionLabelEl =
    document.getElementById(
      'reportSummaryAttentionLabel'
    );


  if (totalEl) {

    totalEl.textContent =
      result.rows.length;

  }


  if (averageEl) {

    if (
      result.average === null
    ) {

      averageEl.textContent =
        'N/A';

    } else {

      if (
        filters.type ===
        'registration'
      ) {

        averageEl.textContent =
          result.average.toFixed(1);

      } else {

        averageEl.textContent =
          `${result.average.toFixed(1)}%`;

      }

    }

  }


  if (positiveEl) {

    positiveEl.textContent =
      result.positive;

  }


  if (attentionEl) {

    attentionEl.textContent =
      result.attention;

  }


  if (filters.type === 'academic') {

    if (totalLabelEl)
      totalLabelEl.textContent =
        'Total Students';

    if (averageLabelEl)
      averageLabelEl.textContent =
        'Average Performance';

    if (positiveLabelEl)
      positiveLabelEl.textContent =
        'Passing Students';

    if (attentionLabelEl)
      attentionLabelEl.textContent =
        'Needs Attention';

  }


  else if (
    filters.type ===
    'attendance'
  ) {

    if (totalLabelEl)
      totalLabelEl.textContent =
        'Attendance Records';

    if (averageLabelEl)
      averageLabelEl.textContent =
        'Average Attendance';

    if (positiveLabelEl)
      positiveLabelEl.textContent =
        '85%+ Attendance';

    if (attentionLabelEl)
      attentionLabelEl.textContent =
        'Below 85%';

  }


  else if (
    filters.type ===
    'results'
  ) {

    if (totalLabelEl)
      totalLabelEl.textContent =
        'Result Submissions';

    if (averageLabelEl)
      averageLabelEl.textContent =
        'Approval Rate';

    if (positiveLabelEl)
      positiveLabelEl.textContent =
        'Approved';

    if (attentionLabelEl)
      attentionLabelEl.textContent =
        'Pending';

  }


  else if (
    filters.type ===
    'registration'
  ) {

    if (totalLabelEl)
      totalLabelEl.textContent =
        'Registered Students';

    if (averageLabelEl)
      averageLabelEl.textContent =
        'Students / Programme';

    if (positiveLabelEl)
      positiveLabelEl.textContent =
        'Active Students';

    if (attentionLabelEl)
      attentionLabelEl.textContent =
        'Other Status';

  }


  else if (
    filters.type ===
    'timetable'
  ) {

    if (totalLabelEl)
      totalLabelEl.textContent =
        'Timetable Records';

    if (averageLabelEl)
      averageLabelEl.textContent =
        'Published Rate';

    if (positiveLabelEl)
      positiveLabelEl.textContent =
        'Published';

    if (attentionLabelEl)
      attentionLabelEl.textContent =
        'Other Status';

  }


  /* =====================================================
     REPORT META INFORMATION
     ===================================================== */

  const generatedDateEl =
    document.getElementById(
      'reportGeneratedDate'
    );

  const reportMetaTypeEl =
    document.getElementById(
      'reportMetaType'
    );

  const reportMetaFiltersEl =
    document.getElementById(
      'reportMetaFilters'
    );


  if (generatedDateEl) {

    generatedDateEl.textContent =
      new Date().toLocaleString();

  }


  if (reportMetaTypeEl) {

    reportMetaTypeEl.textContent =
      result.title.replace(
        ' Report',
        ''
      );

  }


  if (reportMetaFiltersEl) {

    const filterParts = [];


    if (
      filters.academicYear !==
      'all'
    ) {

      filterParts.push(
        `Academic Year: ${filters.academicYear}`
      );

    }


    if (
      filters.semester !==
      'all'
    ) {

      filterParts.push(
        `Semester ${filters.semester}`
      );

    }


    if (
      filters.intake !==
      'all'
    ) {

      filterParts.push(
        `Intake: ${filters.intake}`
      );

    }


    if (
      filters.programme !==
      'all'
    ) {

      filterParts.push(
        `Programme: ${filters.programme}`
      );

    }


    if (
      filters.course !==
      'all'
    ) {

      filterParts.push(
        `Course: ${filters.course}`
      );

    }


    if (
      filters.lecturer !==
      'all'
    ) {

      filterParts.push(
        `Lecturer: ${filters.lecturer}`
      );

    }


    if (
      filters.year !==
      'all'
    ) {

      filterParts.push(
        `Year ${filters.year}`
      );

    }


    reportMetaFiltersEl.textContent =
      filterParts.length
        ? filterParts.join(' • ')
        : 'All Data';

  }


  /* =====================================================
     STORE CURRENT REPORT
     ===================================================== */

  this.currentHODReport = {

    title:
      result.title,

    subtitle:
      result.subtitle,

    headers:
      result.headers,

    rows:
      result.rows,

    generatedAt:
      new Date().toISOString(),

    filters:
      filters

  };


  console.log(
    'HoD report generated:',
    this.currentHODReport
  );

},


/* =========================================================
   RESET REPORT FILTERS
   ========================================================= */

resetReportsFilters() {

  const filterIds = [

    'reportAcademicYear',
    'reportSemester',
    'reportIntake',
    'reportProgramme',
    'reportCourse',
    'reportLecturer',
    'reportYear'

  ];


  filterIds.forEach(id => {

    const element =
      document.getElementById(id);

    if (element) {

      element.value =
        'all';

    }

  });


  const reportType =
    document.getElementById(
      'reportType'
    );

  if (reportType) {

    reportType.value =
      'academic';

  }


  this.populateReportsFilters();

  this.generateHODReport();


  if (
    typeof showToast ===
    'function'
  ) {

    showToast(
      'Report filters have been reset.',
      'success'
    );

  }

},


/* =========================================================
   EXPORT REPORT AS CSV
   ========================================================= */

exportHODReportCSV() {

  const report =
    this.currentHODReport;


  if (
    !report ||
    !report.headers ||
    !report.rows
  ) {

    this.generateHODReport();

  }


  const currentReport =
    this.currentHODReport;


  if (
    !currentReport ||
    !currentReport.rows
  ) {

    if (
      typeof showToast ===
      'function'
    ) {

      showToast(
        'No report data is available to export.',
        'warning'
      );

    }

    return;

  }


  const escapeCSV =
    value => {

      const text =
        String(
          value ?? ''
        );

      return `"${text.replace(
        /"/g,
        '""'
      )}"`;

    };


  const csvRows = [];


  csvRows.push(
    [
      currentReport.title
    ]
      .map(escapeCSV)
      .join(',')
  );


  csvRows.push(
    [
      `Generated: ${
        new Date(
          currentReport.generatedAt
        ).toLocaleString()
      }`
    ]
      .map(escapeCSV)
      .join(',')
  );


  csvRows.push('');


  csvRows.push(
    currentReport.headers
      .map(escapeCSV)
      .join(',')
  );


  currentReport.rows.forEach(
    row => {

      csvRows.push(
        row
          .map(escapeCSV)
          .join(',')
      );

    }
  );


  const csv =
    '\uFEFF' +
    csvRows.join('\r\n');


  const blob =
    new Blob(
      [csv],
      {
        type:
          'text/csv;charset=utf-8;'
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      'a'
    );


  link.href = url;

  link.download =
    `hod_${currentReport.title
      .toLowerCase()
      .replace(
        /[^a-z0-9]+/g,
        '_'
      )
      .replace(
        /^_|_$/g,
        ''
      )}_${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;


  document.body.appendChild(
    link
  );

  link.click();

  document.body.removeChild(
    link
  );


  URL.revokeObjectURL(
    url
  );


  if (
    typeof showToast ===
    'function'
  ) {

    showToast(
      'Report exported successfully.',
      'success'
    );

  }

},


/* =========================================================
   PRINT / SAVE REPORT AS PDF
   ========================================================= */

printHODReport() {

  if (
    !this.currentHODReport
  ) {

    this.generateHODReport();

  }


  const report =
    this.currentHODReport;


  if (!report) {

    return;

  }


  const printWindow =
    window.open(
      '',
      '_blank'
    );


  if (!printWindow) {

    if (
      typeof showToast ===
      'function'
    ) {

      showToast(
        'Please allow pop-ups to print the report.',
        'warning'
      );

    }

    return;

  }


  const headerHtml =
    report.headers
      .map(
        header =>
          `<th>${this.escapeHODReport(
            header
          )}</th>`
      )
      .join('');


  const rowsHtml =
    report.rows
      .map(
        row => `

          <tr>

            ${row
              .map(
                cell =>
                  `<td>${this.escapeHODReport(
                    cell
                  )}</td>`
              )
              .join('')}

          </tr>

        `
      )
      .join('');


  printWindow.document.write(`

    <!DOCTYPE html>

    <html>

    <head>

      <meta charset="UTF-8">

      <title>
        ${this.escapeHODReport(
          report.title
        )}
      </title>

      <style>

        * {
          box-sizing: border-box;
        }

        body {
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          color: #111827;

          margin: 0;

          padding: 30px;

          background: #ffffff;
        }

        .report-header {
          text-align: center;

          margin-bottom: 25px;
        }

        .report-header h1 {
          margin: 0 0 6px;

          font-size: 22px;
        }

        .report-header h2 {
          margin: 0 0 8px;

          font-size: 18px;
        }

        .report-header p {
          margin: 0;

          color: #6b7280;

          font-size: 12px;
        }

        .report-meta {
          display: flex;

          justify-content:
            space-between;

          gap: 15px;

          flex-wrap: wrap;

          padding: 12px;

          margin-bottom: 18px;

          background: #f8fafc;

          border: 1px solid #e5e7eb;

          font-size: 11px;
        }

        table {
          width: 100%;

          border-collapse:
            collapse;

          margin-top: 15px;
        }

        th,
        td {
          border: 1px solid #d1d5db;

          padding: 7px 8px;

          font-size: 10px;

          vertical-align: middle;
        }

        th {
          background: #f3f4f6;

          font-weight: 700;

          text-align: center;
        }

        td {
          text-align: left;
        }

        tr:nth-child(even) td {
          background: #fafafa;
        }

        .report-footer {
          margin-top: 25px;

          padding-top: 12px;

          border-top:
            1px solid #d1d5db;

          color: #6b7280;

          font-size: 10px;

          text-align: center;
        }

        @media print {

          body {
            padding: 10px;
          }

          .report-footer {
            position: fixed;

            bottom: 0;

            left: 0;

            right: 0;
          }

        }

      </style>

    </head>

    <body>

      <div class="report-header">

        <h1>
          ISCAM
        </h1>

        <h2>
          ${this.escapeHODReport(
            report.title
          )}
        </h2>

        <p>
          ${this.escapeHODReport(
            report.subtitle
          )}
        </p>

      </div>


      <div class="report-meta">

        <div>
          <strong>
            Generated:
          </strong>

          ${this.escapeHODReport(
            new Date(
              report.generatedAt
            ).toLocaleString()
          )}

        </div>

        <div>
          <strong>
            Records:
          </strong>

          ${report.rows.length}

        </div>

      </div>


      <table>

        <thead>

          <tr>

            ${headerHtml}

          </tr>

        </thead>

        <tbody>

          ${rowsHtml}

        </tbody>

      </table>


      <div class="report-footer">

        ISCAM Department Report

        •

        Generated from current
        department data

      </div>


    </body>

    </html>

  `);


  printWindow.document.close();

  printWindow.focus();


  setTimeout(
    () => {

      printWindow.print();

    },
    300
  );

},


/* =========================================================
   REPORT DATA REFRESH
   ========================================================= */

refreshReportsFromCurrentData() {

  const reportsPage =
    document.getElementById(
      'page-reports'
    );


  /*
   * Reports page does not need to be
   * visible for its data to be refreshed.
   *
   * However, if the page does not exist
   * on the current HTML page, simply stop.
   */
  if (!reportsPage) {
    return;
  }


  try {

    /*
     * Rebuild filter options from
     * the latest current data.
     */
    this.populateReportsFilters();


    /*
     * Reattach filter events.
     *
     * This is safe because the code uses
     * element.onchange rather than adding
     * duplicate addEventListener handlers.
     */
    this.setupReportsFilterEvents();


    /*
     * Regenerate the current report
     * using the latest data and the
     * current filter selections.
     */
    this.generateHODReport();

  } catch (error) {

    console.error(
      'Reports refresh error:',
      error
    );

  }

},

  loadSecurityEvents() {
    const events = getSecurityEvents();
    const list = document.getElementById('securityEventsList');
    if (!list) return;
    list.innerHTML = events.map(event => `
      <div class="activity-item">
        <div class="activity-icon-wrap" style="background:${event.event === 'LOGIN_SUCCESS' ? 'rgba(22,163,74,0.1)' : event.event === 'FAILED_LOGIN' ? 'rgba(220,38,38,0.1)' : 'rgba(124,58,237,0.1)'};color:${event.event === 'LOGIN_SUCCESS' ? 'var(--success)' : event.event === 'FAILED_LOGIN' ? 'var(--danger)' : '#7c3aed'};">
          <i class="fas fa-${event.event === 'LOGIN_SUCCESS' ? 'check-circle' : event.event === 'FAILED_LOGIN' ? 'exclamation-triangle' : 'shield-alt'}"></i>
        </div>
        <div>
          <div class="activity-text">${event.event.replace('_', ' ')}</div>
          <div class="activity-time">${event.user || 'Unknown'} • ${event.ip} • ${event.timestamp || new Date().toLocaleString()}</div>
        </div>
      </div>
    `).join('');
  },

  loadTickets() {
    const tickets = getTickets();
    const container = document.getElementById('ticketsTable');
    if (!container) return;
    container.innerHTML = tickets.map(ticket => `
      <div class="flex-between p-16 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
        <div class="flex-center gap-12">
          <div class="w-8 h-8 bg-red-100 rounded-full flex-center text-red-500 font-bold">${ticket.id}</div>
          <div>
            <div class="fw-600">${ticket.subject}</div>
            <div class="text-sm text-muted">${ticket.user}</div>
          </div>
        </div>
        <div class="flex-center gap-8">
          <span class="badge badge-${ticket.status === 'open' ? 'red' : ticket.status === 'in-progress' ? 'gold' : 'green'}">${ticket.status}</span>
          <span class="text-xs text-muted">${ticket.priority}</span>
        </div>
      </div>
    `).join('');
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
  initRoleCharts() {
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







  // Attendance
  // ======================================================
// HoD ATTENDANCE MANAGEMENT
// ======================================================

initHODAttendance() {

  this.renderHODAttendance();

  this.updateAttendanceCorrectionCount();



  const yearFilter = document.getElementById('attendanceYearFilter');
  const semesterFilter = document.getElementById('attendanceSemesterFilter');
  const courseFilter = document.getElementById('attendanceCourseFilter');
  const intakeFilter = document.getElementById('attendanceIntakeFilter');
  const searchInput = document.getElementById('attendanceStudentSearch');

  if (yearFilter) {
    yearFilter.onchange = () => this.filterAttendance();
  }

  if (semesterFilter) {
    semesterFilter.onchange = () => this.filterAttendance();
  }

  if (courseFilter) {
    courseFilter.onchange = () => this.filterAttendance();
  }

  if (intakeFilter) {
    intakeFilter.onchange = () => this.filterAttendance();
  }

  if (searchInput) {
    searchInput.oninput = () => this.filterAttendance();
  }

  const lowAttendanceCard =
  document.getElementById('lowAttendanceCard');

if (lowAttendanceCard) {

  lowAttendanceCard.onclick = () => {

    const lowAttendanceRecords =
      HOD_ATTENDANCE_DATA.filter(record => {

        const attendanceRate =
          record.classesHeld > 0
            ? (record.present / record.classesHeld) * 100
            : 0;

        return attendanceRate < 75;
      });

    this.showLowAttendanceStudents(lowAttendanceRecords);
  };
}
// ======================================================
// CORRECTIONS → CORRECTION HISTORY
// ======================================================

const correctionsCard =
  document.getElementById('attendanceCorrectionsCard');

if (correctionsCard) {

  correctionsCard.onclick = () => {

    this.showAttendanceCorrectionHistory();

  };

}

const closeCorrectionHistory =
  document.getElementById('closeCorrectionHistory');

if (closeCorrectionHistory) {

  closeCorrectionHistory.onclick = () => {

    this.setAttendanceMainView(true);

    this.renderHODAttendance();

    this.updateAttendanceCorrectionCount();

  };

}

},


// ======================================================
// ANALYTICS INITIALIZATION
// ======================================================

initAnalytics() {
  try {

    console.log(
      'Initializing HoD Analytics...'
    );

    const analyticsPage =
      document.getElementById('page-analytics');

    if (!analyticsPage) {
      console.warn(
        'Analytics page container not found.'
      );
      return;
    }

    this.populateAnalyticsFilters();

    this.setupAnalyticsFilterEvents();

    this.renderAnalytics();

    console.log(
      'HoD Analytics initialized successfully.'
    );

  } catch (error) {

    console.error(
      'Analytics initialization error:',
      error
    );
  }
},


// ======================================================
// ANALYTICS FILTER OPTIONS
// ======================================================
populateAnalyticsFilters() {
  const students =
    typeof getStudents === 'function'
      ? (getStudents() || [])
      : [];

  const lecturers =
    typeof getLecturers === 'function'
      ? (getLecturers() || [])
      : [];

  const courses =
    typeof getCourses === 'function'
      ? (getCourses() || [])
      : [];

  const timetable =
    this.getAnalyticsTimetable();

  // ==========================================================
  // PROGRAMMES
  // ==========================================================

  const programmeSelect =
    document.getElementById('analyticsProgramme');

  if (programmeSelect) {
    const currentValue =
      programmeSelect.value || 'all';

    const programmes = [
      ...new Set([
        ...students.map(student =>
          student.programme ||
          student.program ||
          student.department ||
          ''
        ),

        ...timetable.map(record =>
          record.programme ||
          record.program ||
          record.department ||
          ''
        )
      ].filter(Boolean))
    ].sort();

    programmeSelect.innerHTML =
      '<option value="all">All Programmes</option>';

    programmes.forEach(programme => {
      const option =
        document.createElement('option');

      option.value = programme;
      option.textContent = programme;

      programmeSelect.appendChild(option);
    });

    if (
      Array.from(programmeSelect.options)
        .some(option =>
          option.value === currentValue
        )
    ) {
      programmeSelect.value = currentValue;
    }
  }

  // ==========================================================
  // COURSES
  // ==========================================================

  const courseSelect =
    document.getElementById('analyticsCourse');

  if (courseSelect) {
    const currentValue =
      courseSelect.value || 'all';

    const courseMap = new Map();

    courses.forEach(course => {
      const code =
        course.code ||
        course.id ||
        course.courseCode ||
        '';

      const title =
        course.title ||
        course.name ||
        '';

      if (code) {
        courseMap.set(
          String(code),
          title
        );
      }
    });

    timetable.forEach(record => {
      const code =
        record.courseCode ||
        record.course ||
        '';

      const title =
        record.courseName ||
        record.title ||
        '';

      if (
        code &&
        !courseMap.has(String(code))
      ) {
        courseMap.set(
          String(code),
          title
        );
      }
    });

    students.forEach(student => {
      const code =
        student.course ||
        student.courseCode ||
        student.module ||
        '';

      if (
        code &&
        !courseMap.has(String(code))
      ) {
        courseMap.set(
          String(code),
          ''
        );
      }
    });

    courseSelect.innerHTML =
      '<option value="all">All Courses / Modules</option>';

    Array.from(courseMap.entries())
      .sort((a, b) =>
        a[0].localeCompare(b[0])
      )
      .forEach(([code, title]) => {
        const option =
          document.createElement('option');

        option.value = code;

        option.textContent =
          title
            ? `${code} — ${title}`
            : code;

        courseSelect.appendChild(option);
      });

    if (
      Array.from(courseSelect.options)
        .some(option =>
          option.value === currentValue
        )
    ) {
      courseSelect.value = currentValue;
    }
  }

  // ==========================================================
  // LECTURERS
  // ==========================================================

  const lecturerSelect =
    document.getElementById('analyticsLecturer');

  if (lecturerSelect) {
    const currentValue =
      lecturerSelect.value || 'all';

    const lecturerMap = new Map();

    lecturers.forEach(lecturer => {
      const id =
        lecturer.id ||
        lecturer.lecturerId ||
        lecturer.code ||
        '';

      const name =
        lecturer.name ||
        lecturer.fullName ||
        lecturer.lecturerName ||
        id;

      if (id) {
        lecturerMap.set(
          String(id),
          name
        );
      }

      if (name) {
        lecturerMap.set(
          String(name),
          name
        );
      }
    });

    timetable.forEach(record => {
      const name =
        record.lecturer ||
        record.lecturerName ||
        record.instructor ||
        '';

      if (
        name &&
        !lecturerMap.has(String(name))
      ) {
        lecturerMap.set(
          String(name),
          name
        );
      }
    });

    lecturerSelect.innerHTML =
      '<option value="all">All Lecturers</option>';

    Array.from(lecturerMap.entries())
      .sort((a, b) =>
        a[1].localeCompare(b[1])
      )
      .forEach(([value, name]) => {
        const option =
          document.createElement('option');

        option.value = value;
        option.textContent = name;

        lecturerSelect.appendChild(option);
      });

    if (
      Array.from(lecturerSelect.options)
        .some(option =>
          option.value === currentValue
        )
    ) {
      lecturerSelect.value = currentValue;
    }
  }

  // ==========================================================
  // YEAR
  // ==========================================================

  const yearSelect =
    document.getElementById('analyticsYear');

  if (yearSelect) {
    const currentValue =
      yearSelect.value || 'all';

    const years = new Set();

    students.forEach(student => {
      const year =
        this.normalizeAnalyticsYear(
          student.year ||
          student.level ||
          student.intakeYear
        );

      if (year) years.add(year);
    });

    timetable.forEach(record => {
      const year =
        this.normalizeAnalyticsYear(
          record.year ||
          record.level ||
          record.studentYear
        );

      if (year) years.add(year);
    });

    yearSelect.innerHTML =
      '<option value="all">All Years</option>';

    Array.from(years)
      .sort()
      .forEach(year => {
        const option =
          document.createElement('option');

        option.value = year;
        option.textContent =
          `Year ${year}`;

        yearSelect.appendChild(option);
      });

    if (
      Array.from(yearSelect.options)
        .some(option =>
          option.value === currentValue
        )
    ) {
      yearSelect.value = currentValue;
    }
  }

  // ==========================================================
  // ACADEMIC YEAR
  // ==========================================================

  const academicYearSelect =
    document.getElementById(
      'analyticsAcademicYear'
    );

  if (academicYearSelect) {
    const currentValue =
      academicYearSelect.value || 'all';

    const years = [
      ...new Set(
        timetable
          .map(record =>
            record.academicYear ||
            record.academic_year ||
            ''
          )
          .filter(Boolean)
      )
    ].sort();

    academicYearSelect.innerHTML =
      '<option value="all">All Academic Years</option>';

    years.forEach(year => {
      const option =
        document.createElement('option');

      option.value = year;
      option.textContent = year;

      academicYearSelect.appendChild(option);
    });

    if (
      Array.from(academicYearSelect.options)
        .some(option =>
          option.value === currentValue
        )
    ) {
      academicYearSelect.value =
        currentValue;
    }
  }
},


// ======================================================
// ANALYTICS FILTER EVENTS
// ======================================================

setupAnalyticsFilterEvents() {

  const filterIds = [
    'analyticsAcademicYear',
    'analyticsSemester',
    'analyticsIntake',
    'analyticsProgramme',
    'analyticsCourse',
    'analyticsLecturer',
    'analyticsYear',
    'analyticsDateRange'
  ];

  filterIds.forEach(id => {

    const element =
      document.getElementById(id);

    if (!element) return;

    element.onchange = () => {
      this.renderAnalytics();
    };
  });
},


// ======================================================
// MAIN ANALYTICS RENDERER
// ======================================================

renderAnalytics() {

  console.log('Rendering HoD Analytics...');

  this.renderAnalyticsPerformance();
  this.renderAnalyticsCourses();
  this.renderAnalyticsAttendance();
  this.renderAnalyticsResults();
  this.renderAnalyticsAtRisk();
  this.renderAnalyticsLecturers();
  this.renderAnalyticsRegistration();
  this.renderAnalyticsTimetable();
  this.renderAnalyticsTrends();
  this.renderAnalyticsInsights();
},


refreshAnalyticsFromCurrentData() {
  try {
    const analyticsPage =
      document.getElementById('page-analytics');

    // Analytics page does not need to render
    // while it is not available in the DOM.
    if (!analyticsPage) {
      return;
    }

    this.populateAnalyticsFilters();
    this.renderAnalytics();

    console.log(
      'HoD Analytics refreshed from current system data.'
    );

  } catch (error) {

    console.error(
      'Analytics refresh error:',
      error
    );
  }
},


// ============================================================
// STUDENT PERFORMANCE ANALYTICS
// ============================================================

renderAnalyticsPerformance() {
  const students = this.getAnalyticsStudents();

  const filteredStudents =
    this.getAnalyticsFilteredStudents(students);

  const chartEl =
    document.getElementById('analyticsPerformanceChart');

  const tableBody =
    document.getElementById(
      'analyticsProgrammePerformanceBody'
    );

  const groups = {};

  filteredStudents.forEach(student => {

    const programme =
      student.programme ||
      student.program ||
      student.department ||
      'Unassigned';

    if (!groups[programme]) {
      groups[programme] = {
        programme,
        students: 0,
        performanceTotal: 0,
        performanceCount: 0
      };
    }

    groups[programme].students++;

    const performance =
      this.analyticsNumber(
        student.avg ??
        student.performance ??
        student.average ??
        student.performancePercent
      );

    if (performance !== null) {
      groups[programme].performanceTotal += performance;
      groups[programme].performanceCount++;
    }

  });

  const rows =
    Object.values(groups).map(group => {

      const average =
        group.performanceCount > 0
          ? group.performanceTotal /
            group.performanceCount
          : null;

      let status = 'N/A';

      if (average !== null) {

        if (average >= 75) {
          status = 'Excellent';
        }
        else if (average >= 60) {
          status = 'Good';
        }
        else if (average >= 50) {
          status = 'Average';
        }
        else {
          status = 'Needs Attention';
        }

      }

      return {
        programme: group.programme,
        students: group.students,
        average,
        status
      };

    });

  rows.sort((a, b) => {

    if (a.average === null) return 1;
    if (b.average === null) return -1;

    return b.average - a.average;

  });

  /* =========================================================
     PERFORMANCE CHART
     ========================================================= */

  if (chartEl) {

    const chartRows =
      rows.filter(
        row => row.average !== null
      );

    this.drawAnalyticsBarChart(
      chartEl,
      chartRows.map(
        row => row.programme
      ),
      chartRows.map(
        row =>
          Number(
            row.average.toFixed(1)
          )
      ),
      'Average Performance (%)'
    );

  }

  /* =========================================================
     PERFORMANCE TABLE
     ========================================================= */

  if (!tableBody) return;

  if (!rows.length) {

    tableBody.innerHTML = `
      <tr>
        <td
          colspan="5"
          class="text-muted text-center"
        >
          No student performance data available.
        </td>
      </tr>
    `;

    return;
  }

  tableBody.innerHTML =
    rows.map((row, index) => {

      const averageHtml =
        row.average !== null
          ? `${row.average.toFixed(1)}%`
          : 'N/A';

      let statusClass = 'badge-secondary';

      if (row.status === 'Excellent') {
        statusClass = 'badge-success';
      }
      else if (row.status === 'Good') {
        statusClass = 'badge-info';
      }
      else if (row.status === 'Average') {
        statusClass = 'badge-warning';
      }
      else if (row.status === 'Needs Attention') {
        statusClass = 'badge-danger';
      }

      return `
        <tr>

          <td>
            ${index + 1}
          </td>

          <td>
            ${this.analyticsEscape(
              row.programme
            )}
          </td>

          <td>
            ${row.students}
          </td>

          <td>
            ${averageHtml}
          </td>

          <td>
            <span class="badge ${statusClass}">
              ${this.analyticsEscape(
                row.status
              )}
            </span>
          </td>

        </tr>
      `;

    }).join('');
},




// ============================================================
// COURSE PERFORMANCE ANALYTICS
// ============================================================

renderAnalyticsCourses() {
  const students = this.getAnalyticsStudents();
  const filteredStudents =
    this.getAnalyticsFilteredStudents(students);

  const courses = this.getAnalyticsCourses();

  const chartEl =
    document.getElementById('analyticsCourseChart');

  const tableBody =
    document.getElementById('analyticsCoursePerformanceBody');

  const groups = {};

  // ----------------------------------------------------------
  // Student performance by course
  // ----------------------------------------------------------

  filteredStudents.forEach(student => {
    const courseCode =
      student.course ||
      student.courseCode ||
      student.module ||
      student.moduleCode;

    if (!courseCode) return;

    if (!groups[courseCode]) {
      groups[courseCode] = {
        code: courseCode,
        title: '',
        students: 0,
        total: 0,
        count: 0
      };
    }

    groups[courseCode].students++;

    const performance = this.analyticsNumber(
      student.avg ??
      student.performance ??
      student.average
    );

    if (performance !== null) {
      groups[courseCode].total += performance;
      groups[courseCode].count++;
    }
  });

  // ----------------------------------------------------------
  // Add courses from Course Management
  // ----------------------------------------------------------

  courses.forEach(course => {
    const code =
      course.code ||
      course.id ||
      course.courseCode;

    if (!code) return;

    if (!groups[code]) {
      groups[code] = {
        code,
        title:
          course.title ||
          course.name ||
          '',
        students:
  course.students === null ||
  course.students === undefined ||
  course.students === ''
    ? null
    : Number(course.students),
        total: 0,
        count: 0
      };
    } else if (!groups[code].title) {
      groups[code].title =
        course.title ||
        course.name ||
        '';
    }
  });

  const rows = Object.values(groups).map(group => ({
  code: group.code,
  title: group.title,
  students: group.students,
  average: group.count
    ? group.total / group.count
    : null
}));

  rows.sort((a, b) => {
    if (a.average === null) return 1;
    if (b.average === null) return -1;
    return b.average - a.average;
  });

  // Chart
  if (chartEl) {
    const chartRows =
      rows.filter(row => row.average !== null);

    this.drawAnalyticsBarChart(
      chartEl,
      chartRows.map(row =>
        row.title
          ? `${row.code} — ${row.title}`
          : row.code
      ),
      chartRows.map(row =>
        Number(row.average.toFixed(1))
      ),
      'Average Performance (%)'
    );
  }

  // Table
  if (tableBody) {
    if (!rows.length) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" class="text-muted text-center">
            No course performance data available.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = rows.map((row, index) => {
      let performanceHtml = 'N/A';

      if (row.average !== null) {
        const performanceClass =
          row.average >= 75
            ? 'badge-green'
            : row.average >= 60
              ? 'badge-yellow'
              : 'badge-red';

        performanceHtml = `
          <span class="badge ${performanceClass}">
            ${row.average.toFixed(1)}%
          </span>
        `;
      }

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${this.analyticsEscape(row.code)}</td>
          <td>
            ${this.analyticsEscape(
              row.title || 'N/A'
            )}
          </td>
          <td>
  ${
    row.students !== null
      ? row.students
      : 'N/A'
  }
</td>
          <td>${performanceHtml}</td>
        </tr>
      `;
    }).join('');
  }
},


// ============================================================
// ATTENDANCE ANALYTICS
// ============================================================

renderAnalyticsAttendance() {
  const students = this.getAnalyticsStudents();
  const filteredStudents =
    this.getAnalyticsFilteredStudents(students);

  const chartEl =
    document.getElementById('analyticsAttendanceChart');

  const tableBody =
    document.getElementById('analyticsAttendanceBody');

  const attendanceGroups = {};

  filteredStudents.forEach(student => {
    const group =
      student.department ||
      student.programme ||
      student.program ||
      student.level ||
      'All Students';

    const attendance = this.analyticsNumber(
      student.attendance ??
      student.attendanceRate
    );

    if (attendance === null) return;

    if (!attendanceGroups[group]) {
      attendanceGroups[group] = {
        name: group,
        total: 0,
        count: 0,
        below85: 0
      };
    }

    attendanceGroups[group].total += attendance;
    attendanceGroups[group].count++;

    if (attendance < 85) {
      attendanceGroups[group].below85++;
    }
  });

  // Fallback to HOD attendance records
  if (
    !Object.keys(attendanceGroups).length &&
    typeof HOD_ATTENDANCE_DATA !== 'undefined' &&
    Array.isArray(HOD_ATTENDANCE_DATA)
  ) {
    HOD_ATTENDANCE_DATA.forEach(record => {
      const group =
        record.courseCode ||
        record.courseName ||
        record.year ||
        'Attendance';

      const classesHeld =
        this.analyticsNumber(record.classesHeld);

      const present =
        this.analyticsNumber(record.present);

      if (
        classesHeld === null ||
        classesHeld <= 0 ||
        present === null
      ) {
        return;
      }

      const attendance =
        (present / classesHeld) * 100;

      if (!attendanceGroups[group]) {
        attendanceGroups[group] = {
          name: group,
          total: 0,
          count: 0,
          below85: 0
        };
      }

      attendanceGroups[group].total += attendance;
      attendanceGroups[group].count++;

      if (attendance < 85) {
        attendanceGroups[group].below85++;
      }
    });
  }

  const rows = Object.values(attendanceGroups)
  .map(group => ({
    name: group.name,
    average: group.count
      ? group.total / group.count
      : null,
    below85: group.below85,
    records: group.count
  }))
  .filter(row => row.average !== null);

  rows.sort((a, b) => {
    if (a.average === null) return 1;
    if (b.average === null) return -1;
    return a.average - b.average;
  });

  // Chart
  if (chartEl) {
    const chartRows =
      rows.filter(row => row.average !== null);

    this.drawAnalyticsBarChart(
      chartEl,
      chartRows.map(row => row.name),
      chartRows.map(row =>
        Number(row.average.toFixed(1))
      ),
      'Attendance Rate (%)'
    );
  }

  // Table
  if (tableBody) {
    if (!rows.length) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" class="text-muted text-center">
            No attendance data available.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = rows.map((row, index) => {
      let attendanceHtml = 'N/A';

      if (row.average !== null) {
        const cls =
          row.average >= 85
            ? 'badge-green'
            : row.average >= 75
              ? 'badge-yellow'
              : 'badge-red';

        attendanceHtml = `
          <span class="badge ${cls}">
            ${row.average.toFixed(1)}%
          </span>
        `;
      }

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${this.analyticsEscape(row.name)}</td>
          <td>${row.records}</td>
          <td>${attendanceHtml}</td>
          <td>${row.below85}</td>
        </tr>
      `;
    }).join('');
  }
},


// ============================================================
// RESULTS ANALYTICS
// ============================================================

renderAnalyticsResults() {
  const students =
    this.getAnalyticsStudents();

  const filteredStudents =
    this.getAnalyticsFilteredStudents(students);

  const chartEl =
    document.getElementById('analyticsResultsChart');

  const tableBody =
    document.getElementById('analyticsResultsBody');

  const gradeGroups = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
  };

  let passed = 0;
  let totalWithResults = 0;

  filteredStudents.forEach(student => {
    const grade =
      String(student.grade || '')
        .trim()
        .toUpperCase();

    const avg =
      this.analyticsNumber(
        student.avg ??
        student.performance ??
        student.average
      );

    let normalizedGrade = grade;

    if (!normalizedGrade && avg !== null) {
      if (avg >= 80) {
        normalizedGrade = 'A';
      } else if (avg >= 70) {
        normalizedGrade = 'B';
      } else if (avg >= 60) {
        normalizedGrade = 'C';
      } else if (avg >= 50) {
        normalizedGrade = 'D';
      } else {
        normalizedGrade = 'F';
      }
    }

    if (
      !Object.prototype.hasOwnProperty.call(
        gradeGroups,
        normalizedGrade
      )
    ) {
      return;
    }

    gradeGroups[normalizedGrade]++;
    totalWithResults++;

    if (normalizedGrade !== 'F') {
      passed++;
    }
  });

  const chartLabels =
    Object.keys(gradeGroups);

  const chartValues =
    Object.values(gradeGroups);

  if (chartEl) {
    this.drawAnalyticsBarChart(
      chartEl,
      chartLabels,
      chartValues,
      'Students'
    );
  }

  if (!tableBody) return;

  const passRate =
    totalWithResults > 0
      ? (passed / totalWithResults) * 100
      : null;

  const passRateDisplay =
    passRate !== null
      ? `${passRate.toFixed(1)}%`
      : 'N/A';

  const passRateClass =
    passRate === null
      ? 'badge-yellow'
      : passRate >= 75
        ? 'badge-green'
        : passRate >= 60
          ? 'badge-yellow'
          : 'badge-red';

  tableBody.innerHTML = `
    <tr>
      <td>A</td>
      <td>${gradeGroups.A}</td>
      <td>Excellent</td>
    </tr>

    <tr>
      <td>B</td>
      <td>${gradeGroups.B}</td>
      <td>Good</td>
    </tr>

    <tr>
      <td>C</td>
      <td>${gradeGroups.C}</td>
      <td>Average</td>
    </tr>

    <tr>
      <td>D</td>
      <td>${gradeGroups.D}</td>
      <td>Pass</td>
    </tr>

    <tr>
      <td>F</td>
      <td>${gradeGroups.F}</td>
      <td>
        <span class="badge badge-red">
          Fail
        </span>
      </td>
    </tr>

    <tr>
      <td colspan="2">
        <strong>Pass Rate</strong>
      </td>

      <td>
        <span class="badge ${passRateClass}">
          ${passRateDisplay}
        </span>
      </td>
    </tr>
  `;
},


// ======================================================
// AT-RISK STUDENTS
// ======================================================

renderAnalyticsAtRisk() {

  const tableBody =
    document.getElementById(
      'analyticsAtRiskBody'
    );

  const countEl =
    document.getElementById(
      'analyticsAtRiskCount'
    );


  const students =
    this.getAnalyticsFilteredStudents(
      this.getAnalyticsStudents()
    );


  // ========================================================
  // GET FILTERED ATTENDANCE DATA
  // ========================================================

  const attendanceRecords =
    this.getAnalyticsFilteredAttendance();


  /*
   * Create a quick lookup of attendance by student.
   */
  const attendanceByStudent = {};


  attendanceRecords.forEach(record => {

    const studentId =
      record.studentId ||
      record.studentID ||
      record.student ||
      record.student_id;

    if (!studentId) return;


    let attendance =
      this.analyticsNumber(
        record.attendance ??
        record.attendanceRate ??
        record.rate ??
        record.percentage
      );


    /*
     * If attendance percentage is not stored directly,
     * calculate it from present/classesHeld.
     */
    if (
      attendance === null &&
      record.classesHeld !== undefined
    ) {

      const classesHeld =
        Number(record.classesHeld);

      const present =
        Number(record.present || 0);

      if (classesHeld > 0) {
        attendance =
          (present / classesHeld) * 100;
      }
    }


    if (attendance === null) return;


    if (!attendanceByStudent[studentId]) {

      attendanceByStudent[studentId] = {
        total: 0,
        count: 0
      };

    }


    attendanceByStudent[studentId].total +=
      attendance;

    attendanceByStudent[studentId].count++;
  });


  // ========================================================
  // DETERMINE AT-RISK STUDENTS
  // ========================================================

  const atRisk =
    students.filter(student => {

      const average =
        this.analyticsNumber(
          student.avg ??
          student.performance ??
          student.average ??
          student.performancePercent
        );


      let attendance =
        this.analyticsNumber(
          student.attendance ??
          student.attendanceRate
        );


      const studentId =
        student.id ||
        student.studentId ||
        student.studentID;


      /*
       * Prefer attendance from the Attendance section.
       */
      if (
        studentId &&
        attendanceByStudent[studentId]
      ) {

        const attendanceData =
          attendanceByStudent[studentId];

        attendance =
          attendanceData.total /
          attendanceData.count;
      }


      const grade =
        String(
          student.grade || ''
        )
          .trim()
          .toUpperCase();


      return (
        grade === 'F' ||
        (
          average !== null &&
          average < 50
        ) ||
        (
          attendance !== null &&
          attendance < 75
        )
      );

    });


  // ========================================================
  // UPDATE COUNT
  // ========================================================

  if (countEl) {
    countEl.textContent =
      atRisk.length;
  }


  if (!tableBody) return;


  // ========================================================
  // EMPTY STATE
  // ========================================================

  if (!atRisk.length) {

    tableBody.innerHTML = `
      <tr>
        <td
          colspan="6"
          class="text-muted text-center"
        >
          No students currently meet the
          at-risk criteria.
        </td>
      </tr>
    `;

    return;
  }


  // ========================================================
  // RENDER TABLE
  // ========================================================

  tableBody.innerHTML =
    atRisk.map(student => {

      const average =
        this.analyticsNumber(
          student.avg ??
          student.performance ??
          student.average ??
          student.performancePercent
        );


      let attendance =
        this.analyticsNumber(
          student.attendance ??
          student.attendanceRate
        );


      const studentId =
        student.id ||
        student.studentId ||
        student.studentID;


      /*
       * Use current Attendance section value
       * when available.
       */
      if (
        studentId &&
        attendanceByStudent[studentId]
      ) {

        const attendanceData =
          attendanceByStudent[studentId];

        attendance =
          attendanceData.total /
          attendanceData.count;
      }


      const grade =
        String(
          student.grade || ''
        )
          .trim()
          .toUpperCase();


      // ------------------------------------------------------
      // RISK LEVEL
      // ------------------------------------------------------

      let risk = 'Medium';


      const performanceRisk =
        average !== null &&
        average < 50;

      const attendanceRisk =
        attendance !== null &&
        attendance < 75;

      const gradeRisk =
        grade === 'F';


      if (
        (
          performanceRisk &&
          attendanceRisk
        ) ||
        (
          gradeRisk &&
          (
            performanceRisk ||
            attendanceRisk
          )
        )
      ) {

        risk = 'High';

      } else if (
        performanceRisk ||
        attendanceRisk ||
        gradeRisk
      ) {

        risk = 'Medium';

      }


      const riskBadge =
        risk === 'High'
          ? 'badge-red'
          : 'badge-yellow';


      return `
        <tr>

          <td>
            <strong>
              ${this.analyticsEscape(
                student.name ||
                'Unknown Student'
              )}
            </strong>
          </td>

          <td>
            ${this.analyticsEscape(
              student.programme ||
              student.program ||
              student.department ||
              'N/A'
            )}
          </td>

          <td>
            ${this.analyticsEscape(
              student.year ||
              student.level ||
              'N/A'
            )}
          </td>

          <td>
            ${
              attendance !== null
                ? `${attendance.toFixed(1)}%`
                : 'N/A'
            }
          </td>

          <td>
            ${
              average !== null
                ? `${average.toFixed(1)}%`
                : 'N/A'
            }
          </td>

          <td>
            <span class="badge ${riskBadge}">
              ${risk}
            </span>
          </td>

        </tr>
      `;

    }).join('');
},


// ======================================================
// LECTURER ANALYTICS
// ======================================================

renderAnalyticsLecturers() {

  const canvas =
    document.getElementById(
      'analyticsLecturerChart'
    );

  const tableBody =
    document.getElementById(
      'analyticsLecturerBody'
    );


  const lecturers =
    this.getAnalyticsLecturers();

  const courses =
    this.getAnalyticsCourses();


  const timetable =
    this.getAnalyticsFilteredTimetable(
      this.getAnalyticsTimetable()
    );


  const submissions =
    typeof getResultsSubmissions === 'function'
      ? (
          getResultsSubmissions() || []
        )
      : [];


  const filteredSubmissions =
    this.filterAnalyticsSubmissions(
      submissions
    );


  const rows = [];


  lecturers.forEach(lecturer => {

    const lecturerId =
      lecturer.id ||
      lecturer.lecturerId ||
      lecturer.code ||
      '';


    const name =
      lecturer.name ||
      lecturer.fullName ||
      lecturer.lecturerName ||
      lecturerId;


    let assignedCourses =
      new Set();

    let assignedStudents = 0;


    courses.forEach(course => {

      const courseLecturer =
        course.lecturer ||
        course.lecturerName ||
        course.instructor ||
        course.lecturerId;


      if (
        String(courseLecturer) ===
          String(name) ||
        String(courseLecturer) ===
          String(lecturerId)
      ) {

        const code =
          course.code ||
          course.courseCode ||
          course.id;

        if (code) {
          assignedCourses.add(
            String(code)
          );
        }

        assignedStudents +=
          Number(course.students) || 0;
      }
    });


    timetable.forEach(record => {

      if (
        String(record.lecturer) ===
        String(name)
      ) {

        if (record.courseCode) {

          assignedCourses.add(
            String(record.courseCode)
          );
        }
      }
    });


    const submitted =
      filteredSubmissions.filter(result => {

        const resultLecturer =
          result.lecturer || '';

        return (
          String(resultLecturer) ===
          String(name)
        );
      }).length;


    rows.push({
      name,
      courses:
        assignedCourses.size,
      students:
        assignedStudents,
      submitted
    });
  });


  // Also include lecturers found only in timetable

  timetable.forEach(record => {

    if (!record.lecturer) return;

    const exists =
      rows.some(
        row =>
          row.name === record.lecturer
      );

    if (exists) return;


    const courseSet =
      new Set();

    timetable.forEach(item => {

      if (
        item.lecturer ===
        record.lecturer
      ) {

        if (item.courseCode) {
          courseSet.add(
            item.courseCode
          );
        }
      }
    });


    const submitted =
      filteredSubmissions.filter(
        result =>
          result.lecturer ===
          record.lecturer
      ).length;


    rows.push({
      name: record.lecturer,
      courses: courseSet.size,
      students: 0,
      submitted
    });
  });


  rows.sort(
    (a, b) => b.submitted - a.submitted
  );


  if (canvas) {

    this.drawAnalyticsBarChart(
      canvas,
      rows.map(row => row.name),
      rows.map(row => row.submitted),
      'Results Submitted'
    );
  }


  if (!tableBody) return;


  if (!rows.length) {

    tableBody.innerHTML = `
      <tr>
        <td colspan="4"
            class="text-muted text-center">
          No lecturer data available.
        </td>
      </tr>
    `;

    return;
  }


  tableBody.innerHTML =
    rows.map(row => `
      <tr>

        <td>
          ${this.analyticsEscape(
            row.name
          )}
        </td>

        <td>${row.courses}</td>

        <td>${row.students}</td>

        <td>${row.submitted}</td>

      </tr>
    `).join('');
},


// ============================================================
// STUDENT REGISTRATION ANALYTICS
// ============================================================

renderAnalyticsRegistration() {

  const students =
    this.getAnalyticsStudents();

  const filteredStudents =
    this.getAnalyticsFilteredStudents(
      students
    );

  const chartEl =
    document.getElementById(
      'analyticsRegistrationChart'
    );

  const tableBody =
    document.getElementById(
      'analyticsRegistrationBody'
    );

  const programmes = {};

  /* =========================================================
     GROUP STUDENTS BY PROGRAMME AND YEAR
     ========================================================= */

  filteredStudents.forEach(student => {

    const programme =
      student.programme ||
      student.program ||
      student.department ||
      'Unassigned';

    const normalizedYear =
      this.normalizeAnalyticsYear(
        student.year ??
        student.level ??
        student.intakeYear
      );

    if (!programmes[programme]) {

      programmes[programme] = {
        programme,
        'Year 1': 0,
        'Year 2': 0,
        'Year 3': 0,
        'Year 4': 0
      };

    }

    if (normalizedYear === '1') {
      programmes[programme]['Year 1']++;
    }

    else if (normalizedYear === '2') {
      programmes[programme]['Year 2']++;
    }

    else if (normalizedYear === '3') {
      programmes[programme]['Year 3']++;
    }

    else if (normalizedYear === '4') {
      programmes[programme]['Year 4']++;
    }

  });

  const rows =
    Object.values(programmes).sort(
      (a, b) =>
        String(a.programme).localeCompare(
          String(b.programme)
        )
    );

  /* =========================================================
     REGISTRATION CHART
     ========================================================= */

  if (chartEl) {

    const yearTotals = {
      'Year 1': 0,
      'Year 2': 0,
      'Year 3': 0,
      'Year 4': 0
    };

    rows.forEach(row => {

      yearTotals['Year 1'] +=
        row['Year 1'];

      yearTotals['Year 2'] +=
        row['Year 2'];

      yearTotals['Year 3'] +=
        row['Year 3'];

      yearTotals['Year 4'] +=
        row['Year 4'];

    });

    this.drawAnalyticsBarChart(
      chartEl,
      Object.keys(yearTotals),
      Object.values(yearTotals),
      'Registered Students'
    );

  }

  /* =========================================================
     REGISTRATION TABLE
     ========================================================= */

  if (!tableBody) return;

  if (!rows.length) {

    tableBody.innerHTML = `
      <tr>
        <td
          colspan="5"
          class="text-muted text-center"
        >
          No registration data available.
        </td>
      </tr>
    `;

    return;
  }

  tableBody.innerHTML =
    rows.map(row => `
      <tr>

        <td>
          ${this.analyticsEscape(
            row.programme
          )}
        </td>

        <td>
          ${row['Year 1']}
        </td>

        <td>
          ${row['Year 2']}
        </td>

        <td>
          ${row['Year 3']}
        </td>

        <td>
          ${row['Year 4']}
        </td>

      </tr>
    `).join('');

  /* =========================================================
     TOTAL REGISTERED STUDENTS
     ========================================================= */

  const totalYear1 =
    rows.reduce(
      (sum, row) =>
        sum + row['Year 1'],
      0
    );

  const totalYear2 =
    rows.reduce(
      (sum, row) =>
        sum + row['Year 2'],
      0
    );

  const totalYear3 =
    rows.reduce(
      (sum, row) =>
        sum + row['Year 3'],
      0
    );

  const totalYear4 =
    rows.reduce(
      (sum, row) =>
        sum + row['Year 4'],
      0
    );

  const total =
    totalYear1 +
    totalYear2 +
    totalYear3 +
    totalYear4;

  tableBody.innerHTML += `
    <tr>

      <td>
        <strong>
          Total Registered Students
        </strong>
      </td>

      <td>
        <strong>
          ${totalYear1}
        </strong>
      </td>

      <td>
        <strong>
          ${totalYear2}
        </strong>
      </td>

      <td>
        <strong>
          ${totalYear3}
        </strong>
      </td>

      <td>
        <strong>
          ${totalYear4}
        </strong>
      </td>

    </tr>
  `;

},


// ============================================================
// TIMETABLE ANALYTICS
// ============================================================

renderAnalyticsTimetable() {
  const chartEl =
    document.getElementById('analyticsTimetableChart');

  const tableBody =
    document.getElementById('analyticsTimetableBody');

  const timetable =
    this.getAnalyticsTimetable();

  const filteredTimetable =
    this.getAnalyticsFilteredTimetable(
      timetable
    );

  const groups = {};

  filteredTimetable.forEach(record => {
    const module =
      record.module ||
      record.moduleName ||
      record.moduleCode ||
      'Unassigned';

    const courseCode =
      record.courseCode ||
      record.course ||
      record.moduleCode ||
      '';

    const session =
      String(record.session || '')
        .trim()
        .toLowerCase();

    if (!groups[module]) {
      groups[module] = {
        module,
        courses: new Set(),
        day: 0,
        evening: 0,
        weekend: 0
      };
    }

    if (courseCode) {
      groups[module].courses.add(
        courseCode
      );
    }

    if (
      session.includes('evening')
    ) {
      groups[module].evening++;
    } else if (
      session.includes('weekend') ||
      session.includes('saturday') ||
      session.includes('sunday')
    ) {
      groups[module].weekend++;
    } else if (
      session.includes('day')
    ) {
      groups[module].day++;
    }
  });

  const rows =
    Object.values(groups).map(group => ({
      module: group.module,
      courses: Array.from(group.courses),
      day: group.day,
      evening: group.evening,
      weekend: group.weekend
    }));

  if (chartEl) {
    this.drawAnalyticsBarChart(
      chartEl,
      rows.map(row => row.module),
      rows.map(row =>
        row.courses.length
      ),
      'Courses / Modules'
    );
  }

  if (!tableBody) return;

  if (!rows.length) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6"
            class="text-muted text-center">
          No timetable data available.
        </td>
      </tr>
    `;

    return;
  }

  tableBody.innerHTML =
    rows.map((row, index) => `
      <tr>
        <td>${index + 1}</td>

        <td>
          ${this.analyticsEscape(row.module)}
        </td>

        <td>
          ${
            row.courses.length
              ? row.courses
                  .map(course =>
                    this.analyticsEscape(course)
                  )
                  .join(', ')
              : 'N/A'
          }
        </td>

        <td>${row.day}</td>
        <td>${row.evening}</td>
        <td>${row.weekend}</td>
      </tr>
    `).join('');
},


// ======================================================
// DEPARTMENTAL TRENDS
// ======================================================

renderAnalyticsTrends() {

  const canvas =
    document.getElementById(
      'analyticsTrendChart'
    );

  if (!canvas) return;


  const students =
    this.getAnalyticsFilteredStudents(
      this.getAnalyticsStudents()
    );


  const groups = {};


  students.forEach(student => {

    const department =
      student.department ||
      student.programme ||
      student.program ||
      'Unassigned';


    const performance =
      this.analyticsNumber(
        student.avg ??
        student.performance ??
        student.average
      );


    if (performance === null) return;


    if (!groups[department]) {

      groups[department] = {
        total: 0,
        count: 0
      };
    }


    groups[department].total +=
      performance;

    groups[department].count++;
  });


  const rows = Object.entries(groups)
  .map(([department, data]) => ({
    department,
    average:
      data.count
        ? data.total / data.count
        : null
  }))
  .filter(row => row.average !== null)
  .sort((a, b) => b.average - a.average);


  this.drawAnalyticsLineChart(
    canvas,
    rows.map(row =>
      row.department
    ),
    rows.map(row =>
      Number(
        row.average.toFixed(1)
      )
    ),
    'Average Performance (%)'
  );
},


// ======================================================
// ANALYTICS INSIGHTS
// ======================================================

renderAnalyticsInsights() {

  const container =
    document.getElementById(
      'analyticsInsights'
    );

  if (!container) return;


  const students =
    this.getAnalyticsStudents();

  const filteredStudents =
    this.getAnalyticsFilteredStudents(
      students
    );


  // ========================================================
  // NO DATA
  // ========================================================

  if (!filteredStudents.length) {

    container.innerHTML = `
      <div class="analytics-insight-card">

        <div class="analytics-insight-icon">
          <i class="fas fa-info-circle"></i>
        </div>

        <div class="analytics-insight-content">

          <strong>
            No analytics data available
          </strong>

          <p>
            No student records match the
            selected analytics filters.
          </p>

        </div>

      </div>
    `;

    return;
  }


  // ========================================================
  // ACADEMIC PERFORMANCE
  // ========================================================

  const performanceValues =
    filteredStudents
      .map(student =>
        this.analyticsNumber(
          student.avg ??
          student.performance ??
          student.average ??
          student.performancePercent
        )
      )
      .filter(
        value => value !== null
      );


  const averagePerformance =
    performanceValues.length
      ? performanceValues.reduce(
          (sum, value) =>
            sum + value,
          0
        ) / performanceValues.length
      : null;


  // ========================================================
  // ATTENDANCE
  // ========================================================

  const attendanceRecords =
    this.getAnalyticsFilteredAttendance();


  const attendanceValues =
    attendanceRecords
      .map(record => {

        let attendance =
          this.analyticsNumber(
            record.attendance ??
            record.attendanceRate ??
            record.rate ??
            record.percentage
          );


        if (
          attendance === null &&
          record.classesHeld !== undefined
        ) {

          const classesHeld =
            Number(record.classesHeld);

          const present =
            Number(record.present || 0);

          if (classesHeld > 0) {

            attendance =
              (present / classesHeld) * 100;

          }
        }


        return attendance;

      })
      .filter(
        value => value !== null
      );


  let averageAttendance = null;


  if (attendanceValues.length) {

    averageAttendance =
      attendanceValues.reduce(
        (sum, value) =>
          sum + value,
        0
      ) / attendanceValues.length;

  } else {

    const fallbackAttendance =
      filteredStudents
        .map(student =>
          this.analyticsNumber(
            student.attendance ??
            student.attendanceRate
          )
        )
        .filter(
          value => value !== null
        );


    if (fallbackAttendance.length) {

      averageAttendance =
        fallbackAttendance.reduce(
          (sum, value) =>
            sum + value,
          0
        ) / fallbackAttendance.length;

    }
  }


  // ========================================================
  // AT-RISK COUNT
  // ========================================================

  const atRiskCount =
    filteredStudents.filter(student => {

      const average =
        this.analyticsNumber(
          student.avg ??
          student.performance ??
          student.average ??
          student.performancePercent
        );


      const attendance =
        this.analyticsNumber(
          student.attendance ??
          student.attendanceRate
        );


      const grade =
        String(
          student.grade || ''
        )
          .trim()
          .toUpperCase();


      return (
        grade === 'F' ||
        (
          average !== null &&
          average < 50
        ) ||
        (
          attendance !== null &&
          attendance < 75
        )
      );

    }).length;


  // ========================================================
  // FORMAT VALUES
  // ========================================================

  const performanceText =
    averagePerformance !== null
      ? `${averagePerformance.toFixed(1)}%`
      : 'N/A';


  const attendanceText =
    averageAttendance !== null
      ? `${averageAttendance.toFixed(1)}%`
      : 'N/A';


  // ========================================================
  // AT-RISK WORDING
  // ========================================================

  let attentionText;


  if (atRiskCount === 0) {

    attentionText =
      'No students currently meet the at-risk criteria.';

  } else if (atRiskCount === 1) {

    attentionText =
      '1 student currently meets the at-risk criteria.';

  } else {

    attentionText =
      `${atRiskCount} students currently meet the at-risk criteria.`;

  }


  // ========================================================
  // OVERALL OUTLOOK
  // ========================================================

  let outlookText =
    'There is not enough data to determine the current overall position.';


  if (
    averagePerformance !== null &&
    averageAttendance !== null
  ) {

    if (
      averagePerformance >= 70 &&
      averageAttendance >= 85 &&
      atRiskCount === 0
    ) {

      outlookText =
        'Academic performance and attendance are both showing a healthy overall position.';

    } else if (
      averagePerformance >= 60 &&
      averageAttendance >= 75 &&
      atRiskCount <= 2
    ) {

      outlookText =
        'Academic performance and attendance are generally satisfactory, with some students requiring monitoring.';

    } else if (
      averagePerformance < 50 &&
      averageAttendance < 75
    ) {

      outlookText =
        'Both academic performance and attendance require attention and follow-up.';

    } else if (
      averagePerformance < 50
    ) {

      outlookText =
        'Academic performance requires attention, while attendance remains comparatively stable.';

    } else if (
      averageAttendance < 75
    ) {

      outlookText =
        'Attendance requires attention, while academic performance remains comparatively stable.';

    } else if (
      atRiskCount > 2
    ) {

      outlookText =
        'The overall position is stable, but several students require academic or attendance monitoring.';

    } else {

      outlookText =
        'The department is showing a generally stable position, with some areas requiring monitoring.';

    }
  }


  // ========================================================
  // FOUR INSIGHT CARDS
  // ========================================================

  const insights = [

    {
      icon: 'fa-graduation-cap',
      title: 'Academic Performance',
      text:
        `The current average student performance is ${performanceText}.`
    },

    {
      icon: 'fa-calendar-check',
      title: 'Attendance',
      text:
        `The average attendance rate is ${attendanceText}.`
    },

    {
      icon: 'fa-user-shield',
      title: 'Students Requiring Attention',
      text: attentionText
    },

    {
      icon: 'fa-chart-line',
      title: 'Overall Outlook',
      text: outlookText
    }

  ];


  // ========================================================
  // RENDER
  // ========================================================

  container.innerHTML =
    insights.map(insight => `

      <div class="analytics-insight-card">

        <div class="analytics-insight-icon">
          <i class="fas ${insight.icon}"></i>
        </div>

        <div class="analytics-insight-content">

          <strong>
            ${this.analyticsEscape(
              insight.title
            )}
          </strong>

          <p>
            ${this.analyticsEscape(
              insight.text
            )}
          </p>

        </div>

      </div>

    `).join('');
},


// ======================================================
// ANALYTICS FILTERING
// ======================================================

filterAnalytics() {

  this.renderAnalytics();
},


// ======================================================
// RESET ANALYTICS FILTERS
// ======================================================

resetAnalyticsFilters() {

  const filterIds = [
  'analyticsAcademicYear',
  'analyticsSemester',
  'analyticsIntake',
  'analyticsProgramme',
  'analyticsCourse',
  'analyticsLecturer',
  'analyticsYear',
  'analyticsDateRange'
];


  filterIds.forEach(id => {

    const element =
      document.getElementById(id);

    if (!element) return;

    element.value = 'all';
  });


  this.populateAnalyticsFilters();
  this.renderAnalytics();


  if (
    typeof showToast ===
    'function'
  ) {

    showToast(
      'Analytics filters have been reset.',
      'success'
    );
  }
},


// ======================================================
// ANALYTICS DATA HELPERS
// ======================================================

getAnalyticsStudents() {

  if (
    typeof getStudents ===
    'function'
  ) {

    const students =
      getStudents();

    return Array.isArray(students)
      ? students
      : [];
  }

  return [];
},


getAnalyticsLecturers() {

  if (
    typeof getLecturers ===
    'function'
  ) {

    const lecturers =
      getLecturers();

    return Array.isArray(lecturers)
      ? lecturers
      : [];
  }

  return [];
},


getAnalyticsCourses() {

  if (
    typeof getCourses ===
    'function'
  ) {

    const courses =
      getCourses();

    return Array.isArray(courses)
      ? courses
      : [];
  }

  return [];
},


normalizeAnalyticsYear(value) {
  const text =
    String(value ?? '')
      .trim()
      .toLowerCase();

  if (!text) return null;

  if (
    text === '1' ||
    text === 'l1' ||
    text === 'level 1' ||
    text === 'year 1' ||
    text === '1st year'
  ) {
    return '1';
  }

  if (
    text === '2' ||
    text === 'l2' ||
    text === 'level 2' ||
    text === 'year 2' ||
    text === '2nd year'
  ) {
    return '2';
  }

  if (
    text === '3' ||
    text === 'l3' ||
    text === 'level 3' ||
    text === 'year 3' ||
    text === '3rd year'
  ) {
    return '3';
  }

  if (
    text === '4' ||
    text === 'l4' ||
    text === 'level 4' ||
    text === 'year 4' ||
    text === '4th year'
  ) {
    return '4';
  }

  const match = text.match(/\b([1-4])\b/);

  return match ? match[1] : null;
},

normalizeAnalyticsText(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase();
},


getAnalyticsTimetable() {

  if (
    typeof HOD_TIMETABLE_DATA !==
      'undefined' &&
    Array.isArray(
      HOD_TIMETABLE_DATA
    )
  ) {

    return HOD_TIMETABLE_DATA;
  }

  return [];
},


getAnalyticsFilteredStudents(students) {
  const programme =
    document.getElementById('analyticsProgramme')?.value || 'all';

  const course =
    document.getElementById('analyticsCourse')?.value || 'all';

  const lecturer =
    document.getElementById('analyticsLecturer')?.value || 'all';

  const year =
    document.getElementById('analyticsYear')?.value || 'all';

  const semester =
    document.getElementById('analyticsSemester')?.value || 'all';

  const intake =
    document.getElementById('analyticsIntake')?.value || 'all';

  const academicYear =
    document.getElementById('analyticsAcademicYear')?.value || 'all';

  const timetable =
    this.getAnalyticsTimetable();

  const courses =
    this.getAnalyticsCourses();

  const lecturers =
    this.getAnalyticsLecturers();

  const normalize =
    value => this.normalizeAnalyticsText(value);

  return (Array.isArray(students) ? students : [])
    .filter(student => {

      const studentProgramme =
        student.programme ||
        student.program ||
        student.department ||
        '';

      const studentCourse =
        student.course ||
        student.courseCode ||
        student.module ||
        student.moduleCode ||
        '';

      const studentYear =
        this.normalizeAnalyticsYear(
          student.year ||
          student.level ||
          student.intakeYear
        );

      // --------------------------------------------------------
      // Programme
      // --------------------------------------------------------

      if (programme !== 'all') {
        const selectedProgramme =
          normalize(programme);

        const actualProgramme =
          normalize(studentProgramme);

        if (
          actualProgramme !== selectedProgramme &&
          !actualProgramme.includes(selectedProgramme) &&
          !selectedProgramme.includes(actualProgramme)
        ) {
          return false;
        }
      }

      // --------------------------------------------------------
      // Course
      // --------------------------------------------------------

      if (course !== 'all') {
        if (
          normalize(studentCourse) !==
          normalize(course)
        ) {
          return false;
        }
      }

      // --------------------------------------------------------
      // Year
      // --------------------------------------------------------

      if (year !== 'all') {
        if (
          studentYear !==
          this.normalizeAnalyticsYear(year)
        ) {
          return false;
        }
      }

      // --------------------------------------------------------
      // Find timetable records connected to this course
      // --------------------------------------------------------

      const relatedTimetable =
        timetable.filter(record => {
          const recordCourse =
            record.courseCode ||
            record.course ||
            record.moduleCode ||
            '';

          return (
            normalize(recordCourse) ===
            normalize(studentCourse)
          );
        });

      // --------------------------------------------------------
      // Academic Year
      // --------------------------------------------------------

      if (academicYear !== 'all') {
        const studentAcademicYear =
          student.academicYear ||
          student.academic_year ||
          '';

        const hasStudentAcademicYear =
          normalize(studentAcademicYear) !== '';

        const timetableMatch =
          relatedTimetable.some(record =>
            normalize(
              record.academicYear ||
              record.academic_year ||
              ''
            ) === normalize(academicYear)
          );

        if (
          hasStudentAcademicYear &&
          normalize(studentAcademicYear) !==
            normalize(academicYear)
        ) {
          return false;
        }

        if (
          !hasStudentAcademicYear &&
          !timetableMatch
        ) {
          return false;
        }
      }

      // --------------------------------------------------------
      // Semester
      // --------------------------------------------------------

      if (semester !== 'all') {
        const studentSemester =
          student.semester ||
          student.term ||
          '';

        const directMatch =
          normalize(studentSemester) ===
          normalize(semester);

        const timetableMatch =
          relatedTimetable.some(record =>
            normalize(
              record.semester ||
              record.term ||
              ''
            ) === normalize(semester)
          );

        if (
          !directMatch &&
          !timetableMatch
        ) {
          return false;
        }
      }

      // --------------------------------------------------------
      // Intake
      // --------------------------------------------------------

      if (intake !== 'all') {
        const studentIntake =
          student.intake ||
          student.intakeName ||
          student.cohort ||
          '';

        const directMatch =
          normalize(studentIntake) ===
          normalize(intake);

        const timetableMatch =
          relatedTimetable.some(record =>
            normalize(
              record.intake ||
              record.intakeName ||
              record.cohort ||
              ''
            ) === normalize(intake)
          );

        if (
          !directMatch &&
          !timetableMatch
        ) {
          return false;
        }
      }

      // --------------------------------------------------------
      // Lecturer
      // --------------------------------------------------------

      if (lecturer !== 'all') {
        const studentLecturer =
          student.lecturer ||
          student.lecturerId ||
          student.instructor ||
          '';

        let lecturerMatch =
          normalize(studentLecturer) ===
          normalize(lecturer);

        if (!lecturerMatch) {
          lecturerMatch =
            relatedTimetable.some(record =>
              normalize(
                record.lecturer ||
                record.lecturerName ||
                record.instructor ||
                ''
              ) === normalize(lecturer)
            );
        }

        if (!lecturerMatch) {
          const selectedLecturer =
            lecturers.find(item =>
              normalize(
                item.id ||
                item.lecturerId ||
                item.code ||
                ''
              ) === normalize(lecturer)
            );

          if (selectedLecturer) {
            const selectedName =
              selectedLecturer.name ||
              selectedLecturer.fullName ||
              selectedLecturer.lecturerName ||
              '';

            lecturerMatch =
              relatedTimetable.some(record =>
                normalize(
                  record.lecturer ||
                  record.lecturerName ||
                  record.instructor ||
                  ''
                ) === normalize(selectedName)
              );
          }
        }

        if (!lecturerMatch) {
          const relatedCourse =
            courses.find(item =>
              normalize(
                item.code ||
                item.id ||
                item.courseCode ||
                ''
              ) === normalize(studentCourse)
            );

          if (relatedCourse) {
            const courseLecturer =
              relatedCourse.lecturer ||
              relatedCourse.lecturerId ||
              relatedCourse.instructor ||
              '';

            lecturerMatch =
              normalize(courseLecturer) ===
              normalize(lecturer);
          }
        }

        if (!lecturerMatch) {
          return false;
        }
      }

      return true;
    });
},


// ======================================================
// FILTER ATTENDANCE
// ======================================================

getAnalyticsFilteredAttendance() {

  const attendance =
    typeof HOD_ATTENDANCE_DATA !== 'undefined' &&
    Array.isArray(HOD_ATTENDANCE_DATA)
      ? HOD_ATTENDANCE_DATA
      : [];

  const academicYear =
    document.getElementById(
      'analyticsAcademicYear'
    )?.value || 'all';

  const semester =
    document.getElementById(
      'analyticsSemester'
    )?.value || 'all';

  const intake =
    document.getElementById(
      'analyticsIntake'
    )?.value || 'all';

  const programme =
    document.getElementById(
      'analyticsProgramme'
    )?.value || 'all';

  const course =
    document.getElementById(
      'analyticsCourse'
    )?.value || 'all';

  const lecturer =
    document.getElementById(
      'analyticsLecturer'
    )?.value || 'all';

  const year =
    document.getElementById(
      'analyticsYear'
    )?.value || 'all';


  const timetable =
    this.getAnalyticsTimetable();

  const normalize =
    value =>
      this.normalizeAnalyticsText(value);


  return attendance.filter(record => {

    const recordStudentId =
      record.studentId ||
      record.studentID ||
      record.student ||
      record.student_id ||
      '';


    // ========================================================
    // ACADEMIC YEAR
    // ========================================================

    if (academicYear !== 'all') {

      const recordAcademicYear =
        record.academicYear ||
        record.academic_year ||
        record.yearOfStudy ||
        '';

      /*
       * If attendance has an academic-year value,
       * use it directly.
       */
      if (
        recordAcademicYear &&
        normalize(recordAcademicYear) !==
          normalize(academicYear)
      ) {
        return false;
      }

      /*
       * If attendance does not contain academic year,
       * try the related timetable record.
       */
      if (!recordAcademicYear) {

        const timetableMatch =
          timetable.some(item => {

            const sameStudent =
              recordStudentId &&
              (
                String(item.studentId || '') ===
                String(recordStudentId)
              );

            const sameCourse =
              normalize(
                item.courseCode ||
                item.course ||
                item.moduleCode ||
                ''
              ) ===
              normalize(
                record.courseCode ||
                record.course ||
                record.moduleCode ||
                ''
              );

            const itemAcademicYear =
              item.academicYear ||
              item.academic_year ||
              '';

            return (
              (sameStudent || sameCourse) &&
              normalize(itemAcademicYear) ===
              normalize(academicYear)
            );
          });

        if (!timetableMatch) {
          return false;
        }
      }
    }


    // ========================================================
    // SEMESTER
    // ========================================================

    if (semester !== 'all') {

      const recordSemester =
        record.semester ||
        record.term ||
        '';

      if (
        normalize(recordSemester) !==
        normalize(semester)
      ) {
        return false;
      }
    }


    // ========================================================
    // INTAKE
    // ========================================================

    if (intake !== 'all') {

      const recordIntake =
        record.intake ||
        record.intakeName ||
        record.cohort ||
        '';

      if (
        normalize(recordIntake) !==
        normalize(intake)
      ) {
        return false;
      }
    }


    // ========================================================
    // PROGRAMME
    // ========================================================

    if (programme !== 'all') {

      const recordProgramme =
        record.programme ||
        record.program ||
        record.department ||
        this.getAnalyticsProgrammeForStudent(
          recordStudentId
        ) ||
        '';

      if (
        normalize(recordProgramme) !==
        normalize(programme)
      ) {
        return false;
      }
    }


    // ========================================================
    // COURSE
    // ========================================================

    if (course !== 'all') {

      const recordCourse =
        record.courseCode ||
        record.course ||
        record.moduleCode ||
        record.module ||
        '';

      if (
        normalize(recordCourse) !==
        normalize(course)
      ) {
        return false;
      }
    }


    // ========================================================
    // LECTURER
    // ========================================================

    if (lecturer !== 'all') {

      const recordLecturer =
        record.lecturer ||
        record.lecturerName ||
        record.lecturerId ||
        record.instructor ||
        '';

      if (
        normalize(recordLecturer) !==
        normalize(lecturer)
      ) {

        const lecturerMatch =
          timetable.some(item => {

            const sameCourse =
              normalize(
                item.courseCode ||
                item.course ||
                item.moduleCode ||
                ''
              ) ===
              normalize(
                record.courseCode ||
                record.course ||
                record.moduleCode ||
                ''
              );

            const itemLecturer =
              item.lecturer ||
              item.lecturerName ||
              item.lecturerId ||
              item.instructor ||
              '';

            return (
              sameCourse &&
              normalize(itemLecturer) ===
              normalize(lecturer)
            );
          });

        if (!lecturerMatch) {
          return false;
        }
      }
    }


    // ========================================================
    // YEAR
    // ========================================================

    if (year !== 'all') {

      const recordYear =
        this.normalizeAnalyticsYear(
          record.year ||
          record.level ||
          record.studyYear
        );

      if (
        recordYear !==
        this.normalizeAnalyticsYear(year)
      ) {
        return false;
      }
    }


    return true;
  });
},


// ======================================================
// FILTER TIMETABLE
// ======================================================

getAnalyticsFilteredTimetable(records) {
  const academicYear =
    document.getElementById('analyticsAcademicYear')?.value || 'all';

  const semester =
    document.getElementById('analyticsSemester')?.value || 'all';

  const intake =
    document.getElementById('analyticsIntake')?.value || 'all';

  const programme =
    document.getElementById('analyticsProgramme')?.value || 'all';

  const course =
    document.getElementById('analyticsCourse')?.value || 'all';

  const lecturer =
    document.getElementById('analyticsLecturer')?.value || 'all';

  const year =
    document.getElementById('analyticsYear')?.value || 'all';

  const normalize =
    value => this.normalizeAnalyticsText(value);

  return (Array.isArray(records) ? records : [])
    .filter(record => {

      const recordAcademicYear =
        record.academicYear ||
        record.academic_year ||
        '';

      const recordSemester =
        record.semester ||
        record.term ||
        '';

      const recordIntake =
        record.intake ||
        record.intakeName ||
        record.cohort ||
        '';

      const recordProgramme =
        record.programme ||
        record.program ||
        record.department ||
        '';

      const recordCourse =
        record.courseCode ||
        record.course ||
        record.moduleCode ||
        '';

      const recordLecturer =
        record.lecturer ||
        record.lecturerName ||
        record.instructor ||
        '';

      const recordYear =
        this.normalizeAnalyticsYear(
          record.year ||
          record.level ||
          record.studentYear
        );

      if (
        academicYear !== 'all' &&
        normalize(recordAcademicYear) !==
          normalize(academicYear)
      ) {
        return false;
      }

      if (
        semester !== 'all' &&
        normalize(recordSemester) !==
          normalize(semester)
      ) {
        return false;
      }

      if (
        intake !== 'all' &&
        normalize(recordIntake) !==
          normalize(intake)
      ) {
        return false;
      }

      if (
        programme !== 'all' &&
        normalize(recordProgramme) !==
          normalize(programme)
      ) {
        return false;
      }

      if (
        course !== 'all' &&
        normalize(recordCourse) !==
          normalize(course)
      ) {
        return false;
      }

      if (lecturer !== 'all') {
        if (
          normalize(recordLecturer) !==
          normalize(lecturer)
        ) {
          return false;
        }
      }

      if (year !== 'all') {
        if (
          recordYear !==
          this.normalizeAnalyticsYear(year)
        ) {
          return false;
        }
      }

      return true;
    });
},


// ======================================================
// RESULTS SUBMISSION FILTER
// ======================================================

filterAnalyticsSubmissions(
  submissions
) {

  const semester =
    document.getElementById(
      'analyticsSemester'
    )?.value || 'all';

  const intake =
    document.getElementById(
      'analyticsIntake'
    )?.value || 'all';

  const programme =
    document.getElementById(
      'analyticsProgramme'
    )?.value || 'all';

  const course =
    document.getElementById(
      'analyticsCourse'
    )?.value || 'all';

  const lecturer =
    document.getElementById(
      'analyticsLecturer'
    )?.value || 'all';

  const year =
    document.getElementById(
      'analyticsYear'
    )?.value || 'all';

  const dateRange =
    document.getElementById(
      'analyticsDateRange'
    )?.value || 'all';


  return submissions.filter(result => {


    if (
      programme !== 'all'
    ) {

      const resultProgramme =
        result.programme || '';

      if (
        !String(
          resultProgramme
        )
          .toLowerCase()
          .includes(
            String(
              programme
            ).toLowerCase()
          )
      ) {
        return false;
      }
    }


    if (
      course !== 'all'
    ) {

      const resultCourse =
        result.course || '';

      if (
        !String(
          resultCourse
        )
          .toLowerCase()
          .includes(
            String(
              course
            ).toLowerCase()
          )
      ) {
        return false;
      }
    }


    if (
      lecturer !== 'all'
    ) {

      if (
        String(
          result.lecturer || ''
        ).toLowerCase() !==
        String(
          lecturer
        ).toLowerCase()
      ) {
        return false;
      }
    }


    if (
      year !== 'all'
    ) {

      const resultProgramme =
        String(
          result.programme || ''
        );

      if (
        !resultProgramme.includes(
          `Year ${year}`
        )
      ) {
        return false;
      }
    }


    // Current result submissions
    // do not contain semester/intake
    // fields, therefore those filters
    // are intentionally not applied here.


    if (
      dateRange !== 'all'
    ) {

      const submittedDate =
        this.analyticsParseDate(
          result.submittedDate
        );

      if (!submittedDate) {
        return false;
      }


      const today =
        new Date();

      let days = 0;


      if (
        dateRange === '7'
      ) {
        days = 7;
      }

      else if (
        dateRange === '30'
      ) {
        days = 30;
      }

      else if (
        dateRange === '90'
      ) {
        days = 90;
      }


      if (days > 0) {

        const earliest =
          new Date(today);

        earliest.setDate(
          today.getDate() -
          days
        );


        if (
          submittedDate <
          earliest
        ) {
          return false;
        }
      }
    }


    return true;
  });
},


// ======================================================
// FIND STUDENT PROGRAMME
// ======================================================

getAnalyticsProgrammeForStudent(
  studentId
) {

  if (!studentId) {
    return '';
  }


  const students =
    this.getAnalyticsStudents();


  const student =
    students.find(
      item =>
        String(
          item.id ||
          item.studentId
        ) ===
        String(
          studentId
        )
    );


  if (!student) {
    return '';
  }


  return (
    student.programme ||
    student.program ||
    student.department ||
    ''
  );
},


// ======================================================
// DATE PARSER
// ======================================================

analyticsParseDate(value) {

  if (!value) {
    return null;
  }


  const parsed =
    new Date(value);


  if (
    !Number.isNaN(
      parsed.getTime()
    )
  ) {
    return parsed;
  }


  return null;
},


// ======================================================
// NUMBER HELPER
// ======================================================

analyticsNumber(value) {

  if (
    value === null ||
    value === undefined ||
    value === ''
  ) {
    return null;
  }


  const number =
    typeof value === 'number'
      ? value
      : parseFloat(
          String(value)
            .replace('%', '')
            .trim()
        );


  return Number.isFinite(number)
    ? number
    : null;
},


// ======================================================
// HTML ESCAPE
// ======================================================

analyticsEscape(value) {

  return String(
    value ?? ''
  )
    .replace(
      /&/g,
      '&amp;'
    )
    .replace(
      /</g,
      '&lt;'
    )
    .replace(
      />/g,
      '&gt;'
    )
    .replace(
      /"/g,
      '&quot;'
    )
    .replace(
      /'/g,
      '&#039;'
    );
},


// ======================================================
// ANALYTICS BAR CHART
// ======================================================

drawAnalyticsBarChart(
  canvas,
  labels,
  values,
  label
) {

  if (!canvas) {
    return;
  }


  if (
    typeof Chart ===
    'undefined'
  ) {

    console.warn(
      'Chart.js is not available.'
    );

    return;
  }


  const existingChart =
    Chart.getChart(canvas);


  if (existingChart) {
    existingChart.destroy();
  }


  new Chart(
    canvas,
    {

      type: 'bar',

      data: {

        labels,

        datasets: [
          {
            label,
            data: values,
            borderWidth: 1,
            borderRadius: 6
          }
        ]
      },

      options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

          legend: {
            display: true
          }

        },

        scales: {

          y: {
            beginAtZero: true,
          }

        }

      }

    }
  );
},


// ======================================================
// ANALYTICS LINE CHART
// ======================================================

drawAnalyticsLineChart(
  canvas,
  labels,
  values,
  label
) {

  if (!canvas) {
    return;
  }


  if (
    typeof Chart ===
    'undefined'
  ) {

    console.warn(
      'Chart.js is not available.'
    );

    return;
  }


  const existingChart =
    Chart.getChart(canvas);


  if (existingChart) {
    existingChart.destroy();
  }


  new Chart(
    canvas,
    {

      type: 'line',

      data: {

        labels,

        datasets: [
          {
            label,
            data: values,
            borderWidth: 2,
            tension: 0.3,
            fill: false
          }
        ]
      },

      options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

          legend: {
            display: true
          }

        },

        scales: {

          y: {
            beginAtZero: true,
            max: 100
          }

        }

      }

    }
  );
},


// ======================================================
// ANALYTICS REPORT EXPORT
// ======================================================

exportAnalyticsReport() {

  const students =
    this.getAnalyticsStudents();


  const filteredStudents =
    this.getAnalyticsFilteredStudents(
      students
    );


  if (!filteredStudents.length) {

    if (
      typeof showToast ===
      'function'
    ) {

      showToast(
        'There is no analytics data to export.',
        'info'
      );

    }

    return;
  }


  // ========================================================
  // GET CURRENT FILTER VALUES
  // ========================================================

  const getFilterValue =
    id => {

      const element =
        document.getElementById(id);

      if (!element) {
        return 'All';
      }

      const option =
        element.options[
          element.selectedIndex
        ];

      return option
        ? option.text
        : element.value || 'All';
    };


  const academicYear =
    getFilterValue(
      'analyticsAcademicYear'
    );

  const semester =
    getFilterValue(
      'analyticsSemester'
    );

  const intake =
    getFilterValue(
      'analyticsIntake'
    );

  const programme =
    getFilterValue(
      'analyticsProgramme'
    );

  const course =
    getFilterValue(
      'analyticsCourse'
    );

  const lecturer =
    getFilterValue(
      'analyticsLecturer'
    );

  const year =
    getFilterValue(
      'analyticsYear'
    );

  const dateRange =
    getFilterValue(
      'analyticsDateRange'
    );


  // ========================================================
  // CSV ESCAPE
  // ========================================================

  const escapeCsv =
    value => {

      const text =
        String(
          value ?? ''
        );


      if (
        text.includes(',') ||
        text.includes('"') ||
        text.includes('\n')
      ) {

        return (
          '"' +
          text.replace(
            /"/g,
            '""'
          ) +
          '"'
        );

      }


      return text;
    };


  // ========================================================
  // REPORT INFORMATION
  // ========================================================

  const reportDate =
    new Date()
      .toLocaleString();


  const reportRows = [

    [
      'HoD Analytics Report',
      ''
    ],

    [
      'Generated',
      reportDate
    ],

    [
      '',
      ''
    ],

    [
      'Analytics Filters',
      ''
    ],

    [
      'Academic Year',
      academicYear
    ],

    [
      'Semester',
      semester
    ],

    [
      'Intake',
      intake
    ],

    [
      'Programme',
      programme
    ],

    [
      'Course',
      course
    ],

    [
      'Lecturer',
      lecturer
    ],

    [
      'Year',
      year
    ],

    [
      'Date Range',
      dateRange
    ],

    [
      '',
      ''
    ]

  ];


  // ========================================================
  // STUDENT DATA HEADERS
  // ========================================================

  reportRows.push([

    'Student ID',
    'Student Name',
    'Department',
    'Programme',
    'Course',
    'Year',
    'Average Performance',
    'Attendance',
    'Grade',
    'Risk Status'

  ]);


  // ========================================================
  // STUDENT DATA
  // ========================================================

  filteredStudents.forEach(student => {

    const average =
      this.analyticsNumber(
        student.avg ??
        student.performance ??
        student.average ??
        student.performancePercent
      );


    const attendance =
      this.analyticsNumber(
        student.attendance ??
        student.attendanceRate
      );


    const grade =
      String(
        student.grade || ''
      )
        .trim()
        .toUpperCase();


    const isAtRisk =
      grade === 'F' ||
      (
        average !== null &&
        average < 50
      ) ||
      (
        attendance !== null &&
        attendance < 75
      );


    reportRows.push([

      student.id ||
        student.studentId ||
        'N/A',

      student.name ||
        'N/A',

      student.department ||
        'N/A',

      student.programme ||
        student.program ||
        'N/A',

      student.course ||
        student.courseCode ||
        'N/A',

      student.level ||
        student.year ||
        'N/A',

      average !== null
        ? `${average.toFixed(1)}%`
        : 'N/A',

      attendance !== null
        ? `${attendance.toFixed(1)}%`
        : 'N/A',

      grade ||
        'N/A',

      isAtRisk
        ? 'At Risk'
        : 'Normal'

    ]);

  });


  // ========================================================
  // BUILD CSV
  // ========================================================

  const csv =
    reportRows
      .map(row =>
        row
          .map(escapeCsv)
          .join(',')
      )
      .join('\n');


  // ========================================================
  // DOWNLOAD
  // ========================================================

  const blob =
    new Blob(
      [csv],
      {
        type:
          'text/csv;charset=utf-8;'
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      'a'
    );


  link.href = url;


  link.download =
    `hod_analytics_report_${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;


  document.body.appendChild(
    link
  );


  link.click();


  document.body.removeChild(
    link
  );


  URL.revokeObjectURL(
    url
  );


  if (
    typeof showToast ===
    'function'
  ) {

    showToast(
      'Analytics report exported successfully.',
      'success'
    );

  }
},





showAttendanceCorrectionHistory() {

  const historyCard =
    document.getElementById('attendanceCorrectionHistory');

  const historyBody =
    document.getElementById('attendanceCorrectionHistoryBody');

  if (!historyCard || !historyBody) return;


  historyBody.innerHTML = '';


  if (
    !HOD_ATTENDANCE_CORRECTION_HISTORY ||
    HOD_ATTENDANCE_CORRECTION_HISTORY.length === 0
  ) {

    historyBody.innerHTML = `
      <tr>
        <td colspan="10"
            style="text-align:center; padding:30px;">
          No attendance corrections have been recorded.
        </td>
      </tr>
    `;

  } else {

    HOD_ATTENDANCE_CORRECTION_HISTORY.forEach(
      (record, index) => {

        const row =
          document.createElement('tr');

        row.innerHTML = `

          <td>
            ${index + 1}
          </td>

          <td>
            ${record.studentName}
          </td>

          <td>
            <strong>${record.studentId}</strong>
          </td>

          <td>
            <strong>${record.courseCode}</strong>
            <div class="text-sm text-muted">
              ${record.courseName}
            </div>
          </td>

          <td>
            ${record.previousAttendance}%
          </td>

          <td>
            <strong>
              ${record.correctedAttendance}%
            </strong>
          </td>

          <td>
            ${record.reason}
          </td>

          <td>
            ${record.correctedBy}
          </td>

          <td>
            ${record.date}
          </td>

          <td>
            <span class="badge badge-success">
              ${record.status}
            </span>
          </td>

        `;

        historyBody.appendChild(row);

      }
    );
  

  }


  // Hide normal attendance content
  this.setAttendanceMainView(false);

  // Show correction history
  historyCard.style.display = 'block';

},


setAttendanceMainView(show) {

  const historyCard =
    document.getElementById('attendanceCorrectionHistory');

  // Main attendance sections
  const attendanceFilters =
    document.querySelector('#page-attendance > .card');

  const attendanceSummary =
    document.querySelector('#page-attendance .grid-4');

  const attendanceOverview =
    document.querySelector('.attendance-overview-card');

  const attendanceRecords =
    document.getElementById('attendanceTableBody')?.closest('.card');

  const attendanceNotes =
    document.querySelector('#page-attendance .card:last-child');


  // Show / hide main attendance content
  if (attendanceFilters) {
    attendanceFilters.style.display =
      show ? 'block' : 'none';
  }

  if (attendanceSummary) {
    attendanceSummary.style.display =
      show ? 'grid' : 'none';
  }

  if (attendanceOverview) {
    attendanceOverview.style.display =
      show ? 'block' : 'none';
  }

  if (attendanceRecords) {
    attendanceRecords.style.display =
      show ? 'block' : 'none';
  }

  if (attendanceNotes) {
    attendanceNotes.style.display =
      show ? 'block' : 'none';
  }


  // Correction History
  if (historyCard) {
    historyCard.style.display =
      show ? 'none' : 'block';
  }

},







/* Attendance */
renderHODAttendance() {

  const tbody =
    document.getElementById('attendanceTableBody');

  const emptyState =
    document.getElementById('attendanceEmptyState');

  if (!tbody) return;


  // ======================================================
  // GET FILTER VALUES
  // ======================================================

  const year =
    document.getElementById('attendanceYearFilter')?.value || '';

  const semester =
    document.getElementById('attendanceSemesterFilter')?.value || '';

  const course =
    document.getElementById('attendanceCourseFilter')?.value || '';

  const intake =
    document.getElementById('attendanceIntakeFilter')?.value || '';

  const search =
    document.getElementById('attendanceStudentSearch')?.value
      .trim()
      .toLowerCase() || '';


  // ======================================================
  // FILTER ATTENDANCE DATA
  // ======================================================

  const filteredData =
    HOD_ATTENDANCE_DATA.filter(record => {

      const matchesYear =
        !year || record.year === year;

      const matchesSemester =
        !semester || record.semester === semester;

      const matchesCourse =
        !course || record.courseCode === course;

      const matchesIntake =
        !intake || record.intake === intake;

      const matchesSearch =
        !search ||
        record.studentName.toLowerCase().includes(search) ||
        record.studentId.toLowerCase().includes(search) ||
        record.courseCode.toLowerCase().includes(search) ||
        record.courseName.toLowerCase().includes(search);


      return (
        matchesYear &&
        matchesSemester &&
        matchesCourse &&
        matchesIntake &&
        matchesSearch
      );

    });

    // UPDATE ATTENDANCE TREND CHART
renderAttendanceTrendChart(filteredData);


  // ======================================================
  // UPDATE EMPTY STATE
  // ======================================================

  if (!filteredData.length) {

    tbody.innerHTML = '';

    if (emptyState) {
      emptyState.style.display = 'block';
    }

  } else {

    if (emptyState) {
      emptyState.style.display = 'none';
    }


    // ====================================================
    // RENDER TABLE
    // ====================================================

    tbody.innerHTML = filteredData.map(record => {

      const attendanceRate =
        record.classesHeld > 0
          ? Math.round(
              (record.present / record.classesHeld) * 100
            )
          : 0;


      const attendanceClass =
        attendanceRate < 75
          ? 'badge-danger'
          : attendanceRate < 80
            ? 'badge-warning'
            : 'badge-success';


      const correctionBadge =
        record.corrected
          ? `
            <span class="badge badge-success">
              Corrected
            </span>
          `
          : record.status === 'low'
            ? `
              <span class="badge badge-warning">
                Review Required
              </span>
            `
            : `
              <span class="badge badge-success">
                Normal
              </span>
            `;


      const repeatBadge =
        record.repeatCourse
          ? `
            <span class="badge badge-info">
              Repeat
            </span>
          `
          : '';



          
      return `
  <tr data-attendance-id="${record.id}">

    <!-- # -->
    <td>
      ${filteredData.indexOf(record) + 1}
    </td>

    <!-- Student -->
    <td>
      ${record.studentName}
    </td>

    <!-- Student ID -->
    <td>
      <strong>${record.studentId}</strong>
    </td>

    <!-- Year -->
    <td>
      Year ${record.year}
    </td>

    <!-- Semester -->
    <td>
      Semester ${record.semester}
    </td>

    <!-- Course -->
    <td>
      <strong>${record.courseCode}</strong>
      <div class="text-sm text-muted">
        ${record.courseName}
      </div>

      ${repeatBadge}
    </td>
          

          <td>
            ${record.classesHeld}
          </td>

          <td>
            ${record.present}
          </td>

          <td>
            ${record.absent}
          </td>

          <td>
            <span class="badge ${attendanceClass}">
              ${attendanceRate}%
            </span>
          </td>

          <td>
            ${correctionBadge}
          </td>

          <td style="text-align:center;">

  <button
    type="button"
    class="btn btn-sm btn-secondary"
    onclick="App.openAttendanceCorrectionModal('${record.id}')">

    <i class="fas fa-edit"></i>
    Correct

  </button>

</td>

        </tr>
      `;

    }).join('');

  }


  // ======================================================
  // UPDATE SUMMARY CARDS
  // ======================================================

  const totalEl =
    document.getElementById('attendanceTotalStudents');

  const averageEl =
    document.getElementById('attendanceAverage');

  const lowEl =
    document.getElementById('attendanceLowCount');

  const correctionEl =
    document.getElementById('attendanceCorrectionCount');


  // Total records/students shown
  if (totalEl) {
    totalEl.textContent =
      filteredData.length;
  }


  // Average attendance
  const average =
    filteredData.length
      ? Math.round(
          filteredData.reduce(
            (sum, record) => {

              const rate =
                record.classesHeld > 0
                  ? (record.present / record.classesHeld) * 100
                  : 0;

              return sum + rate;

            },
            0
          ) / filteredData.length
        )
      : 0;


  if (averageEl) {
    averageEl.textContent =
      `${average}%`;
  }


  // Low attendance records
  const lowCount =
    filteredData.filter(record => {

      const rate =
        record.classesHeld > 0
          ? (record.present / record.classesHeld) * 100
          : 0;

      return rate < 75;

    }).length;


  if (lowEl) {
    lowEl.textContent =
      lowCount;
  }


  // Correction count
  const correctionCount =
    filteredData.filter(
      record => record.corrected === true
    ).length;


  if (correctionEl) {
    correctionEl.textContent =
      correctionCount;
  }

},

/* end */


showLowAttendanceStudents(records) {

  const tbody =
    document.getElementById('attendanceTableBody');

  if (!tbody) return;

  tbody.innerHTML = '';

  if (records.length === 0) {

    tbody.innerHTML = `
      <tr>
        <td colspan="12" style="text-align:center; padding:30px;">
          No students have attendance below 75%.
        </td>
      </tr>
    `;

    return;
  }


  records.forEach((record, index) => {

    const attendanceRate =
      record.classesHeld > 0
        ? Math.round(
            (record.present / record.classesHeld) * 100
          )
        : 0;

    const row = document.createElement('tr');

    row.innerHTML = `

      <td>
        ${index + 1}
      </td>

      <td>
        ${record.studentName}
      </td>

      <td>
        <strong>${record.studentId}</strong>
      </td>

      <td>
        Year ${record.year}
      </td>

      <td>
        Semester ${record.semester}
      </td>

      <td>
        <strong>${record.courseCode}</strong>
        <div class="text-sm text-muted">
          ${record.courseName}
        </div>
      </td>

      <td>
        ${record.classesHeld}
      </td>

      <td>
        ${record.present}
      </td>

      <td>
        ${record.absent}
      </td>

      <td>
        <span class="badge badge-danger">
          ${attendanceRate}%
        </span>
      </td>

      <td>
        <span class="badge badge-warning">
          Review Required
        </span>
      </td>

      <td>
        <button
          class="btn btn-sm btn-primary"
          onclick="App.correctAttendance('${record.id}')">
          Correct
        </button>
      </td>

    `;

    tbody.appendChild(row);

  });

},



filterAttendance() {

  this.renderHODAttendance();

},


resetAttendanceFilters() {

  const filters = [
    'attendanceYearFilter',
    'attendanceSemesterFilter',
    'attendanceCourseFilter',
    'attendanceIntakeFilter'
  ];

  filters.forEach(id => {

    const el = document.getElementById(id);

    if (el) el.value = '';

  });

  const search = document.getElementById('attendanceStudentSearch');

  if (search) {

    search.value = '';

  }

  this.renderHODAttendance();


  // ======================================================
  // KEEP TOTAL CORRECTION HISTORY COUNT
  // ======================================================

  const correctionCount =
    document.getElementById('attendanceCorrectionCount');

  if (correctionCount) {

    correctionCount.textContent =
      HOD_ATTENDANCE_CORRECTION_HISTORY.length;

  }


  if (typeof showToast === 'function') {

    showToast('Attendance filters have been reset.', 'info');

  }

},





// ======================================================
// OPEN ATTENDANCE CORRECTION MODAL
// ======================================================

openAttendanceCorrectionModal(recordId = null) {

  // ======================================================
  // FIND ATTENDANCE RECORD
  // ======================================================

  const record = HOD_ATTENDANCE_DATA.find(
    item => item.id === recordId
  );

  if (!record) {
    alert('Attendance record not found.');
    return;
  }


  // ======================================================
  // CURRENT ATTENDANCE
  // ======================================================

  const currentClassesHeld = Number(record.classesHeld);
  const currentPresent = Number(record.present);
  const currentAbsent = Number(record.absent);


  const attendanceRate =
    currentClassesHeld > 0
      ? (currentPresent / currentClassesHeld) * 100
      : 0;


  // ======================================================
  // REMOVE EXISTING MODAL
  // ======================================================

  const existingModal =
    document.getElementById('attendanceCorrectionModal');

  if (existingModal) {
    existingModal.remove();
  }


  // ======================================================
  // CREATE MODAL
  // ======================================================

  const modal = document.createElement('div');

  modal.id = 'attendanceCorrectionModal';

  // IMPORTANT:
  // The "open" class makes the modal visible.
  modal.className = 'modal-overlay open';


  modal.innerHTML = `

    <div class="modal"
         style="max-width:650px; width:95%;">

      <!-- ==================================================
           MODAL HEADER
      =================================================== -->

      <div class="modal-header">

        <div>

          <div class="modal-title">
            Correct Attendance
          </div>

          <div class="modal-subtitle">
            Update attendance for the selected student
          </div>

        </div>

        <button
          type="button"
          class="modal-close"
          id="closeAttendanceCorrectionModal">

          <i class="fas fa-times"></i>

        </button>

      </div>


      <!-- ==================================================
           MODAL BODY
      =================================================== -->

      <div class="modal-body">


        <!-- Student Information -->

        <div
          style="
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:14px;
            margin-bottom:20px;
          ">


          <div>

            <div class="text-sm text-muted">
              Student
            </div>

            <div style="font-weight:800; margin-top:4px;">
              ${record.studentName}
            </div>

          </div>


          <div>

            <div class="text-sm text-muted">
              Student ID
            </div>

            <div style="font-weight:800; margin-top:4px;">
              ${record.studentId}
            </div>

          </div>


          <div>

            <div class="text-sm text-muted">
              Course
            </div>

            <div style="font-weight:800; margin-top:4px;">
              ${record.courseCode}
            </div>

            <div class="text-sm text-muted">
              ${record.courseName}
            </div>

          </div>


          <div>

            <div class="text-sm text-muted">
              Current Attendance
            </div>

            <div style="font-weight:800; margin-top:4px;">
              ${attendanceRate.toFixed(1)}%
            </div>

          </div>

        </div>


        <!-- ==================================================
             ATTENDANCE VALUES
        =================================================== -->

        <div
          style="
            display:grid;
            grid-template-columns:repeat(3, 1fr);
            gap:14px;
          ">


          <!-- Classes Held -->

          <div>

            <label class="form-label">
              Classes Held
            </label>

            <input
              type="number"
              id="correctionClassesHeld"
              class="form-control"
              value="${currentClassesHeld}"
              min="1"
            >

          </div>


          <!-- Present -->

          <div>

            <label class="form-label">
              Present
            </label>

            <input
              type="number"
              id="correctionPresent"
              class="form-control"
              value="${currentPresent}"
              min="0"
            >

          </div>


          <!-- Absent -->

          <div>

            <label class="form-label">
              Absent
            </label>

            <input
              type="number"
              id="correctionAbsent"
              class="form-control"
              value="${currentAbsent}"
              min="0"
            >

          </div>

        </div>


        <!-- ==================================================
             REASON
        =================================================== -->

        <div style="margin-top:18px;">

          <label class="form-label">
            Reason for Correction
          </label>

          <textarea
            id="correctionReason"
            class="form-control"
            rows="4"
            placeholder="Enter the reason for this attendance correction..."
          ></textarea>

        </div>


        <!-- ==================================================
             INFORMATION
        =================================================== -->

        <div
          style="
            margin-top:18px;
            padding:12px;
            border-radius:8px;
            background:rgba(26,58,107,0.06);
          ">

          <div class="text-sm">

            <i class="fas fa-circle-info"></i>

            A correction can only be saved when the
            attendance values are changed and a valid
            reason is provided.

          </div>

        </div>

      </div>


      <!-- ==================================================
           MODAL FOOTER
      =================================================== -->

      <div class="modal-footer">

        <button
          type="button"
          class="btn btn-outline"
          id="cancelAttendanceCorrection">

          Cancel

        </button>


        <button
          type="button"
          class="btn btn-primary"
          id="saveAttendanceCorrection"
          disabled>

          <i class="fas fa-save"></i>

          Save Correction

        </button>

      </div>

    </div>

  `;


  // ======================================================
  // ADD MODAL TO PAGE
  // ======================================================

  document.body.appendChild(modal);


  // ======================================================
  // GET FORM ELEMENTS
  // ======================================================

  const classesHeldInput =
    document.getElementById('correctionClassesHeld');

  const presentInput =
    document.getElementById('correctionPresent');

  const absentInput =
    document.getElementById('correctionAbsent');

  const reasonInput =
    document.getElementById('correctionReason');

  const saveButton =
    document.getElementById('saveAttendanceCorrection');


  // ======================================================
  // CLOSE MODAL
  // ======================================================

  const closeModal = () => {

    const currentModal =
      document.getElementById(
        'attendanceCorrectionModal'
      );

    if (currentModal) {
      currentModal.remove();
    }

  };


  document
    .getElementById('closeAttendanceCorrectionModal')
    ?.addEventListener(
      'click',
      closeModal
    );


  document
    .getElementById('cancelAttendanceCorrection')
    ?.addEventListener(
      'click',
      closeModal
    );


  // ======================================================
  // CHECK WHETHER FORM CAN BE SAVED
  // ======================================================

  const updateSaveButton = () => {

    const classesHeld =
      Number(classesHeldInput.value);

    const present =
      Number(presentInput.value);

    const absent =
      Number(absentInput.value);

    const reason =
      reasonInput.value.trim();


    // Has attendance actually changed?
    const attendanceChanged =
      classesHeld !== currentClassesHeld ||
      present !== currentPresent ||
      absent !== currentAbsent;


    // Basic validity
    const validNumbers =
      classesHeld > 0 &&
      present >= 0 &&
      absent >= 0 &&
      present + absent === classesHeld;


    const validReason =
      reason.length > 0;


    const canSave =
      attendanceChanged &&
      validNumbers &&
      validReason;


    saveButton.disabled = !canSave;


    // Optional visual state
    if (canSave) {

      saveButton.style.opacity = '1';
      saveButton.style.cursor = 'pointer';

    } else {

      saveButton.style.opacity = '0.55';
      saveButton.style.cursor = 'not-allowed';

    }

  };


  // ======================================================
  // WATCH FOR CHANGES
  // ======================================================

  classesHeldInput.addEventListener(
    'input',
    updateSaveButton
  );

  presentInput.addEventListener(
    'input',
    updateSaveButton
  );

  absentInput.addEventListener(
    'input',
    updateSaveButton
  );

  reasonInput.addEventListener(
    'input',
    updateSaveButton
  );


  // ======================================================
  // SAVE CORRECTION
  // ======================================================

  saveButton.addEventListener(
    'click',
    () => {

      const classesHeld =
        Number(classesHeldInput.value);

      const present =
        Number(presentInput.value);

      const absent =
        Number(absentInput.value);

      const reason =
        reasonInput.value.trim();


      // ==================================================
      // FINAL VALIDATION
      // ==================================================

      if (
        classesHeld <= 0 ||
        present < 0 ||
        absent < 0
      ) {

        return;

      }


      if (
        present + absent !== classesHeld
      ) {

        return;

      }


      if (!reason) {
        return;
      }


      if (
        classesHeld === currentClassesHeld &&
        present === currentPresent &&
        absent === currentAbsent
      ) {

        return;

      }


      // ==================================================
      // CALCULATE PREVIOUS ATTENDANCE
      // ==================================================

      const previousAttendance =
        currentClassesHeld > 0
          ? (currentPresent / currentClassesHeld) * 100
          : 0;


      // ==================================================
      // CALCULATE CORRECTED ATTENDANCE
      // ==================================================

      const correctedAttendance =
        classesHeld > 0
          ? (present / classesHeld) * 100
          : 0;


      // ==================================================
      // UPDATE ATTENDANCE RECORD
      // ==================================================

      record.classesHeld =
        classesHeld;

      record.present =
        present;

      record.absent =
        absent;

      record.status =
        correctedAttendance < 75
          ? 'low'
          : 'normal';

      record.corrected =
        true;


      // ==================================================
      // ADD CORRECTION TO HISTORY
      // ======================================================

      HOD_ATTENDANCE_CORRECTION_HISTORY.push({

        id:
          'COR-' +
          String(
            HOD_ATTENDANCE_CORRECTION_HISTORY.length + 1
          ).padStart(3, '0'),

        studentName:
          record.studentName,

        studentId:
          record.studentId,

        courseCode:
          record.courseCode,

        courseName:
          record.courseName,

        previousAttendance:
          Number(
            previousAttendance.toFixed(1)
          ),

        correctedAttendance:
          Number(
            correctedAttendance.toFixed(1)
          ),

        reason:
          reason,

        correctedBy:
          'HoD',

        date:
          new Date().toLocaleDateString(),

        status:
          'Corrected'

      });


      // ==================================================
      // CLOSE MODAL IMMEDIATELY
      // ==================================================

      closeModal();


      // ==================================================
// REFRESH ATTENDANCE TABLE
// ==================================================

this.renderHODAttendance();


// ==================================================
// REFRESH ATTENDANCE SUMMARY / CHARTS
// ==================================================

if (
  typeof this.filterHODAttendance === 'function'
) {
  this.filterHODAttendance();
}


// ==================================================
// REFRESH ANALYTICS
// ==================================================

if (
  typeof this.refreshAnalyticsFromCurrentData === 'function'
) {
  this.refreshAnalyticsFromCurrentData();
}


// ==================================================
// REFRESH REPORTS
// ==================================================

if (
  typeof this.refreshReportsFromCurrentData === 'function'
) {
  this.refreshReportsFromCurrentData();
}


// ==================================================
// UPDATE CORRECTION COUNT
// ==================================================

this.updateAttendanceCorrectionCount();

    }
  );

},


updateAttendanceCorrectionCount() {

  const correctionCount =
    document.getElementById(
      'attendanceCorrectionCount'
    );

  if (!correctionCount) {
    return;
  }

  correctionCount.textContent =
    HOD_ATTENDANCE_CORRECTION_HISTORY.length;

},










exportAttendance() {

  if (typeof showToast === 'function') {
    showToast(
      'Attendance export will be available after the attendance records are connected.',
      'info'
    );
  }
},


// End Attendance





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




  /* =========================================================
   HoD TIMETABLE MANAGEMENT
   ========================================================= */

initHODTimetable() {

  this.renderTimetable();

  this.renderCATSchedule();

  this.renderExamSchedule();

  this.renderTimetableConflicts();

  this.renderTimetableHistory();

  this.updateTimetableSummary();

  // Make sure filters work
  const filterIds = [
    'timetableAcademicYearFilter',
    'timetableSemesterFilter',
    'timetableIntakeFilter',
    'timetableProgrammeFilter',
    'timetableYearFilter',
    'timetableModuleFilter',
    'timetableCourseFilter',
    'timetableLecturerFilter'
  ];

  filterIds.forEach(id => {
    const el = document.getElementById(id);

    if (el) {
      el.onchange = () => this.filterTimetable();
    }
  });

  const search = document.getElementById('timetableSearch');

  if (search) {
    search.oninput = () => this.filterTimetable();
  }

},


/* =========================================================
   GET FILTERED TIMETABLE DATA
   ========================================================= */

getFilteredTimetableData() {

  const academicYear =
    document.getElementById('timetableAcademicYearFilter')?.value || '';

  const semester =
    document.getElementById('timetableSemesterFilter')?.value || '';

  const intake =
    document.getElementById('timetableIntakeFilter')?.value || '';

  const programme =
    document.getElementById('timetableProgrammeFilter')?.value || '';

  const year =
    document.getElementById('timetableYearFilter')?.value || '';

  const module =
    document.getElementById('timetableModuleFilter')?.value || '';

  const course =
    document.getElementById('timetableCourseFilter')?.value || '';

  const lecturer =
    document.getElementById('timetableLecturerFilter')?.value || '';

  const search =
    (document.getElementById('timetableSearch')?.value || '')
      .trim()
      .toLowerCase();


  return HOD_TIMETABLE_DATA.filter(record => {

    if (academicYear && record.academicYear !== academicYear)
      return false;

    if (semester && record.semester !== semester)
      return false;

    if (intake && record.intake !== intake)
      return false;

    if (programme && record.programme !== programme)
      return false;

    if (year && record.year !== year)
      return false;

    if (module && record.module !== module)
      return false;

    if (course && record.courseCode !== course)
      return false;

    if (lecturer && record.lecturer !== lecturer)
      return false;


    if (search) {

      const searchableText = [
        record.id,
        record.courseCode,
        record.courseName,
        record.module,
        record.lecturer,
        record.programme,
        record.intake,
        record.session,
        record.room,
        record.status
      ]
        .join(' ')
        .toLowerCase();

      if (!searchableText.includes(search))
        return false;
    }

    return true;

  });

},


/* =========================================================
   RENDER TIMETABLE TABLE
   ========================================================= */

renderTimetable() {

  const tbody =
    document.getElementById('timetableRecordsBody');

  const emptyState =
    document.getElementById('timetableEmptyState');

  const countEl =
    document.getElementById('timetableRecordCount');

  if (!tbody) return;


  const data = this.getFilteredTimetableData();


  if (countEl) {
    countEl.textContent =
      `${data.length} ${data.length === 1 ? 'Record' : 'Records'}`;
  }


  if (!data.length) {

    tbody.innerHTML = '';

    if (emptyState) {
      emptyState.style.display = 'block';
    }

    return;
  }


  if (emptyState) {
    emptyState.style.display = 'none';
  }


  tbody.innerHTML = data.map(record => {

    let statusClass = 'badge-gray';

    if (record.status === 'Published') {
      statusClass = 'badge-success';
    }

    if (record.status === 'Draft') {
      statusClass = 'badge-warning';
    }


    return `
      <tr data-id="${record.id}">

        <td>
          <div style="font-weight:700;">
            ${record.courseName}
          </div>
        </td>

        <td>
          <span class="badge badge-blue">
            ${record.courseCode}
          </span>
        </td>

        <td>
          ${record.module}
        </td>

        <td>
          ${record.lecturer}
        </td>

        <td>
          ${record.programme}
        </td>

        <td>
          ${record.intake}
        </td>

        <td style="text-align:center;">
          <strong>${record.registeredStudents}</strong>
        </td>

        <td>
          <span class="badge badge-gray">
            ${record.session}
          </span>
        </td>

        <td>
          ${record.startDate}
        </td>

        <td>
          ${record.endDate}
        </td>

        <td>
          <strong>${record.time}</strong>
        </td>

        <td>
          ${record.room}
        </td>

        <td>
          <span class="badge ${statusClass}">
            ${record.status}
          </span>
        </td>

        <td>

          <div style="
            display:flex;
            flex-direction:column;
            gap:6px;
            align-items:center;
          ">

            <button
              class="btn btn-sm btn-secondary"
              onclick="App.viewTimetableRecord('${record.id}')"
              style="width:80px;">
              <i class="fas fa-eye"></i>
              View
            </button>

            <button
              class="btn btn-sm btn-primary"
              onclick="App.editTimetableRecord('${record.id}')"
              style="width:80px;">
              <i class="fas fa-edit"></i>
              Edit
            </button>

            <button
              class="btn btn-sm btn-danger"
              onclick="App.deleteTimetableRecord('${record.id}')"
              style="width:80px;">
              <i class="fas fa-trash"></i>
              Delete
            </button>

          </div>

        </td>

      </tr>
    `;

  }).join('');

},


/* =========================================================
   FILTER TIMETABLE
   ========================================================= */

filterTimetable() {

  this.renderTimetable();

  this.renderCATSchedule();

  this.renderExamSchedule();

  this.updateTimetableSummary();

  this.renderTimetableConflicts();

},


/* =========================================================
   UPDATE SUMMARY CARDS
   ========================================================= */

updateTimetableSummary() {

  const data =
    this.getFilteredTimetableData();


  const registeredStudentsEl =
    document.getElementById('timetableRegisteredStudents');

  const totalCoursesEl =
    document.getElementById('timetableTotalCourses');

  const activeModuleEl =
    document.getElementById('timetableActiveModule');

  const statusEl =
    document.getElementById('timetableStatus');


  // Registered students
  const uniqueStudentCount =
    data.reduce(
      (total, record) =>
        total + Number(record.registeredStudents || 0),
      0
    );


  if (registeredStudentsEl) {
    registeredStudentsEl.textContent =
      uniqueStudentCount.toLocaleString();
  }


  // Courses
  const uniqueCourses =
    new Set(
      data.map(record => record.courseCode)
    ).size;


  if (totalCoursesEl) {
    totalCoursesEl.textContent =
      uniqueCourses;
  }


  // Active module
  const moduleFilter =
    document.getElementById('timetableModuleFilter')?.value || '';


  if (activeModuleEl) {

    if (moduleFilter) {

      activeModuleEl.textContent =
        moduleFilter;

    } else {

      const moduleCounts = {
        'Module 1': 0,
        'Module 2': 0,
        'Module 3': 0,
        'Module 4': 0
      };


      data.forEach(record => {

        if (moduleCounts.hasOwnProperty(record.module)) {
          moduleCounts[record.module]++;
        }

      });


      let activeModule = 'Module 1';
      let highest = -1;


      Object.keys(moduleCounts).forEach(module => {

        if (moduleCounts[module] > highest) {

          highest = moduleCounts[module];

          activeModule = module;

        }

      });


      activeModuleEl.textContent =
        activeModule;
    }

  }


  // Status
  if (statusEl) {

    const hasDraft =
      data.some(record => record.status === 'Draft');

    const hasPublished =
      data.some(record => record.status === 'Published');


    if (hasDraft && hasPublished) {

      statusEl.textContent =
        'Mixed';

    } else if (hasPublished) {

      statusEl.textContent =
        'Published';

    } else if (hasDraft) {

      statusEl.textContent =
        'Draft';

    } else {

      statusEl.textContent =
        'No Data';

    }

  }

},


/* =========================================================
   SELECT MODULE FROM MODULE OVERVIEW
   ========================================================= */

selectTimetableModule(moduleName) {

  const moduleFilter =
    document.getElementById('timetableModuleFilter');

  if (!moduleFilter) return;


  moduleFilter.value = moduleName;

  this.filterTimetable();


  // Scroll to records
  const recordsCard =
    document.getElementById('timetableRecordsTable');

  if (recordsCard) {

    recordsCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }

},


/* =========================================================
   RESET FILTERS
   ========================================================= */

resetTimetableFilters() {

  const filterIds = [
    'timetableAcademicYearFilter',
    'timetableSemesterFilter',
    'timetableIntakeFilter',
    'timetableProgrammeFilter',
    'timetableYearFilter',
    'timetableModuleFilter',
    'timetableCourseFilter',
    'timetableLecturerFilter'
  ];


  filterIds.forEach(id => {

    const el =
      document.getElementById(id);

    if (el) {
      el.value = '';
    }

  });


  const search =
    document.getElementById('timetableSearch');

  if (search) {
    search.value = '';
  }


  this.filterTimetable();


  this.showToast(
    'Timetable filters have been reset.',
    'success'
  );

},


/* =========================================================
   VIEW TIMETABLE RECORD
   ========================================================= */

viewTimetableRecord(id) {

  const record =
    HOD_TIMETABLE_DATA.find(
      item => item.id === id
    );

  if (!record) return;


  alert(
`TIMETABLE RECORD

Course: ${record.courseName}
Course Code: ${record.courseCode}
Module: ${record.module}
Lecturer: ${record.lecturer}
Programme: ${record.programme}
Student Year: Year ${record.year}
Intake: ${record.intake}
Registered Students: ${record.registeredStudents}
Session: ${record.session}
Start Date: ${record.startDate}
End Date: ${record.endDate}
Time: ${record.time}
Room: ${record.room}
Status: ${record.status}`
  );

},


/* =========================================================
   EDIT TIMETABLE RECORD
   ========================================================= */

editTimetableRecord(id) {

  const record =
    HOD_TIMETABLE_DATA.find(
      item => item.id === id
    );

  if (!record) return;


  this.openTimetableEditModal(record);

},


/* =========================================================
   DELETE TIMETABLE RECORD
   ========================================================= */

deleteTimetableRecord(id) {

  const index =
    HOD_TIMETABLE_DATA.findIndex(
      item => item.id === id
    );

  if (index === -1) return;


  const record =
    HOD_TIMETABLE_DATA[index];


  const confirmed =
    confirm(
      `Delete timetable record for ${record.courseCode} — ${record.module}?`
    );


  if (!confirmed) return;


  HOD_TIMETABLE_DATA.splice(index, 1);


  this.renderTimetable();

  this.renderCATSchedule();

  this.renderExamSchedule();

  this.updateTimetableSummary();

  this.renderTimetableConflicts();

  this.refreshAnalyticsFromCurrentData();

  this.refreshReportsFromCurrentData();


  this.showToast(
    `${record.courseCode} timetable record deleted.`,
    'success'
  );

},


/* =========================================================
   CREATE TIMETABLE MODAL
   ========================================================= */

openTimetableCreateModal() {

  this.showTimetableFormModal(null);

},


/* =========================================================
   EDIT TIMETABLE MODAL
   ========================================================= */

openTimetableEditModal(record) {

  this.showTimetableFormModal(record);

},


/* =========================================================
   TIMETABLE FORM MODAL
   ========================================================= */

showTimetableFormModal(record = null) {

  const isEdit =
    !!record;


  const oldModal =
    document.getElementById('timetableFormModal');

  if (oldModal) {
    oldModal.remove();
  }


  const modal =
    document.createElement('div');

  modal.id =
    'timetableFormModal';

  modal.style.cssText = `
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.55);
    z-index:10000;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
  `;


  modal.innerHTML = `

    <div style="
      width:min(850px, 100%);
      max-height:90vh;
      overflow-y:auto;
      background:var(--card-bg, #fff);
      border-radius:14px;
      box-shadow:0 20px 60px rgba(0,0,0,0.25);
    ">

      <div class="card-header">

        <div>
          <div class="card-title">
            ${isEdit ? 'Edit Timetable Record' : 'Create Timetable'}
          </div>

          <div class="card-subtitle">
            ${isEdit
              ? 'Update the selected timetable schedule'
              : 'Create a timetable schedule for a module period'}
          </div>
        </div>

        <button
          class="btn btn-outline"
          onclick="document.getElementById('timetableFormModal')?.remove()">
          <i class="fas fa-times"></i>
        </button>

      </div>


      <div class="card-body">

        <div style="
          display:grid;
          grid-template-columns:repeat(2, 1fr);
          gap:14px;
        ">

          <div class="form-group">
            <label class="form-label">Course Code</label>
            <input
              id="ttFormCourseCode"
              class="form-input"
              value="${record?.courseCode || ''}"
              placeholder="e.g. BIT201">
          </div>

          <div class="form-group">
            <label class="form-label">Course Name</label>
            <input
              id="ttFormCourseName"
              class="form-input"
              value="${record?.courseName || ''}"
              placeholder="Course name">
          </div>

          <div class="form-group">
            <label class="form-label">Module</label>

            <select
              id="ttFormModule"
              class="form-select">

              <option value="Module 1"
                ${record?.module === 'Module 1' ? 'selected' : ''}>
                Module 1
              </option>

              <option value="Module 2"
                ${record?.module === 'Module 2' ? 'selected' : ''}>
                Module 2
              </option>

              <option value="Module 3"
                ${record?.module === 'Module 3' ? 'selected' : ''}>
                Module 3
              </option>

              <option value="Module 4"
                ${record?.module === 'Module 4' ? 'selected' : ''}>
                Module 4
              </option>

            </select>
          </div>


          <div class="form-group">
            <label class="form-label">Lecturer</label>

            <select
              id="ttFormLecturer"
              class="form-select">

              <option value="Dr. Jean Bosco">
                Dr. Jean Bosco
              </option>

              <option value="Ms. Alice Uwimana">
                Ms. Alice Uwimana
              </option>

              <option value="Mr. Emmanuel Hakizimana">
                Mr. Emmanuel Hakizimana
              </option>

              <option value="Dr. Diane Mukamana">
                Dr. Diane Mukamana
              </option>

            </select>
          </div>


          <div class="form-group">
            <label class="form-label">Programme</label>

            <select
              id="ttFormProgramme"
              class="form-select">

              <option value="Bachelor of Information Technology">
                Bachelor of Information Technology
              </option>

              <option value="Bachelor of Accounting">
                Bachelor of Accounting
              </option>

              <option value="Bachelor of Management">
                Bachelor of Management
              </option>

            </select>
          </div>


          <div class="form-group">
            <label class="form-label">Student Year</label>

            <select
              id="ttFormYear"
              class="form-select">

              <option value="1">Year 1</option>
              <option value="2">Year 2</option>
              <option value="3">Year 3</option>
              <option value="4">Year 4</option>

            </select>
          </div>


          <div class="form-group">
            <label class="form-label">Intake</label>

            <select
              id="ttFormIntake"
              class="form-select">

              <option value="September">September–November</option>
              <option value="January">January–March</option>
              <option value="May">May–July</option>

            </select>
          </div>


          <div class="form-group">
            <label class="form-label">Session</label>

            <select
              id="ttFormSession"
              class="form-select">

              <option value="Day">Day</option>
              <option value="Evening">Evening</option>
              <option value="Weekend">Weekend</option>

            </select>
          </div>


          <div class="form-group">
            <label class="form-label">Start Date</label>

            <input
              type="text"
              id="ttFormStartDate"
              class="form-input"
              value="${record?.startDate || ''}"
              placeholder="e.g. 07 Sep 2026">
          </div>


          <div class="form-group">
            <label class="form-label">End Date</label>

            <input
              type="text"
              id="ttFormEndDate"
              class="form-input"
              value="${record?.endDate || ''}"
              placeholder="e.g. 25 Sep 2026">
          </div>


          <div class="form-group">
            <label class="form-label">Time</label>

            <input
              type="text"
              id="ttFormTime"
              class="form-input"
              value="${record?.time || ''}"
              placeholder="e.g. 08:00–10:00">
          </div>


          <div class="form-group">
            <label class="form-label">Room</label>

            <input
              type="text"
              id="ttFormRoom"
              class="form-input"
              value="${record?.room || ''}"
              placeholder="e.g. Room 203">
          </div>


          <div class="form-group">
            <label class="form-label">
              Registered Students
            </label>

            <input
              type="number"
              id="ttFormStudents"
              class="form-input"
              min="0"
              value="${record?.registeredStudents || 0}">
          </div>


          <div class="form-group">
            <label class="form-label">Status</label>

            <select
              id="ttFormStatus"
              class="form-select">

              <option value="Draft"
                ${record?.status === 'Draft' ? 'selected' : ''}>
                Draft
              </option>

              <option value="Published"
                ${record?.status === 'Published' ? 'selected' : ''}>
                Published
              </option>

            </select>
          </div>

        </div>


        <div style="
          display:flex;
          justify-content:flex-end;
          gap:10px;
          margin-top:20px;
        ">

          <button
            class="btn btn-outline"
            onclick="document.getElementById('timetableFormModal')?.remove()">
            Cancel
          </button>

          <button
            class="btn btn-primary"
            onclick="App.saveTimetableRecord('${record?.id || ''}')">

            <i class="fas fa-save"></i>

            ${isEdit ? 'Update Timetable' : 'Create Timetable'}

          </button>

        </div>

      </div>

    </div>
  `;


  document.body.appendChild(modal);


  // Set existing select values
  if (record) {

    const values = {
      ttFormLecturer: record.lecturer,
      ttFormProgramme: record.programme,
      ttFormYear: record.year,
      ttFormIntake: record.intake,
      ttFormSession: record.session
    };


    Object.entries(values).forEach(([id, value]) => {

      const el =
        document.getElementById(id);

      if (el) {
        el.value = value;
      }

    });

  }

},


/* =========================================================
   SAVE TIMETABLE RECORD
   ========================================================= */

saveTimetableRecord(id = '') {

  const courseCode =
    document.getElementById('ttFormCourseCode')?.value.trim();

  const courseName =
    document.getElementById('ttFormCourseName')?.value.trim();

  const module =
    document.getElementById('ttFormModule')?.value;

  const lecturer =
    document.getElementById('ttFormLecturer')?.value;

  const programme =
    document.getElementById('ttFormProgramme')?.value;

  const year =
    document.getElementById('ttFormYear')?.value;

  const intake =
    document.getElementById('ttFormIntake')?.value;

  const session =
    document.getElementById('ttFormSession')?.value;

  const startDate =
    document.getElementById('ttFormStartDate')?.value.trim();

  const endDate =
    document.getElementById('ttFormEndDate')?.value.trim();

  const time =
    document.getElementById('ttFormTime')?.value.trim();

  const room =
    document.getElementById('ttFormRoom')?.value.trim();

  const registeredStudents =
    Number(
      document.getElementById('ttFormStudents')?.value || 0
    );

  const status =
    document.getElementById('ttFormStatus')?.value;


  if (
    !courseCode ||
    !courseName ||
    !startDate ||
    !endDate ||
    !time ||
    !room
  ) {

    this.showToast(
      'Please complete all required timetable fields.',
      'warning'
    );

    return;
  }


  if (id) {

    const record =
      HOD_TIMETABLE_DATA.find(
        item => item.id === id
      );

    if (!record) return;


    const previousSchedule =
      `${record.room} · ${record.time}`;


    const newSchedule =
      `${room} · ${time}`;


    Object.assign(record, {

      courseCode,
      courseName,
      module,
      lecturer,
      programme,
      year,
      intake,
      session,
      startDate,
      endDate,
      time,
      room,
      registeredStudents,
      status

    });


    if (previousSchedule !== newSchedule) {

      HOD_TIMETABLE_HISTORY.unshift({

        course: courseName,
        module,
        previousSchedule,
        newSchedule,
        changedBy: 'HoD',
        date: new Date().toLocaleDateString(
          'en-GB',
          {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }
        ),
        reason: 'Timetable schedule updated'

      });

    }


    this.showToast(
      'Timetable record updated successfully.',
      'success'
    );

  } else {

    const newId =
      `TT-${String(HOD_TIMETABLE_DATA.length + 1).padStart(3, '0')}`;


    HOD_TIMETABLE_DATA.push({

      id: newId,
      academicYear: '2026-2027',
      semester: '1',
      intake,
      courseCode,
      courseName,
      module,
      lecturer,
      programme,
      year,
      registeredStudents,
      session,
      startDate,
      endDate,
      time,
      room,
      status

    });


    this.showToast(
      'New timetable record created successfully.',
      'success'
    );

  }


  document
    .getElementById('timetableFormModal')
    ?.remove();


  this.renderTimetable();

  this.renderCATSchedule();

  this.renderExamSchedule();

  this.renderTimetableHistory();

  this.renderTimetableConflicts();

  this.updateTimetableSummary();

  this.refreshAnalyticsFromCurrentData();

  this.refreshReportsFromCurrentData();

},


/* =========================================================
   DOWNLOAD TIMETABLE
   ========================================================= */

downloadTimetable() {

  const data =
    this.getFilteredTimetableData();


  if (!data.length) {

    this.showToast(
      'There are no timetable records to download.',
      'warning'
    );

    return;
  }


  const headers = [
    'Course',
    'Course Code',
    'Module',
    'Lecturer',
    'Programme',
    'Intake',
    'Registered Students',
    'Session',
    'Start Date',
    'End Date',
    'Time',
    'Room',
    'Status'
  ];


  const rows =
    data.map(record => [

      record.courseName,
      record.courseCode,
      record.module,
      record.lecturer,
      record.programme,
      record.intake,
      record.registeredStudents,
      record.session,
      record.startDate,
      record.endDate,
      record.time,
      record.room,
      record.status

    ]);


  const csv = [
    headers,
    ...rows
  ]
    .map(row =>
      row.map(value =>
        `"${String(value).replace(/"/g, '""')}"`
      ).join(',')
    )
    .join('\n');


  const blob =
    new Blob(
      [csv],
      { type: 'text/csv;charset=utf-8;' }
    );


  const url =
    URL.createObjectURL(blob);


  const link =
    document.createElement('a');

  link.href = url;

  link.download =
    'ISCAM-Timetable.csv';

  document.body.appendChild(link);

  link.click();

  link.remove();

  URL.revokeObjectURL(url);


  this.showToast(
    'Timetable downloaded successfully.',
    'success'
  );

},




/* =========================================================
   CAT SCHEDULE
   ========================================================= */

renderCATSchedule() {

  const tbody =
    document.getElementById('catScheduleBody');

  if (!tbody) return;


  const data =
    this.getFilteredTimetableData();


  if (!data.length) {

    tbody.innerHTML = `
      <tr>
        <td colspan="6"
            style="text-align:center; padding:25px;">
          No CAT schedule available.
        </td>
      </tr>
    `;

    return;
  }


  tbody.innerHTML =
    data.map(record => {

      /* CAT is held one week before the final examination */
      const examDate = new Date(record.endDate);

      const catDate = new Date(examDate);
      catDate.setDate(catDate.getDate() - 7);

      const formattedCATDate =
        catDate.toISOString().split('T')[0];


      return `
        <tr>

          <td>
            <strong>${record.courseName}</strong>
            <div class="text-sm">
              ${record.courseCode}
            </div>
          </td>

          <td>
            ${record.module}
          </td>

          <td>
            ${record.registeredStudents}
          </td>

          <td>
            ${formattedCATDate}
          </td>

          <td>
            ${record.time}
          </td>

          <td>
            ${record.room}
          </td>

        </tr>
      `;

    }).join('');

},


/* =========================================================
   EXAMINATION SCHEDULE
   ========================================================= */

renderExamSchedule() {

  const tbody =
    document.getElementById('examScheduleBody');

  if (!tbody) return;


  const data =
    this.getFilteredTimetableData();


  if (!data.length) {

    tbody.innerHTML = `
      <tr>
        <td colspan="6"
            style="text-align:center; padding:25px;">
          No examination schedule available.
        </td>
      </tr>
    `;

    return;
  }


  tbody.innerHTML =
    data.map(record => {

      /* Final examination is held at the end of Week 3 */
      const examDate = new Date(record.endDate);

      const formattedExamDate =
        examDate.toISOString().split('T')[0];


      return `
        <tr>

          <td>
            <strong>${record.courseName}</strong>
            <div class="text-sm">
              ${record.courseCode}
            </div>
          </td>

          <td>
            ${record.module}
          </td>

          <td>
            ${record.registeredStudents}
          </td>

          <td>
            ${formattedExamDate}
          </td>

          <td>
            ${record.time}
          </td>

          <td>
            ${record.room}
          </td>

        </tr>
      `;

    }).join('');

},


/* =========================================================
   CONFLICT MANAGEMENT
   ========================================================= */

renderTimetableConflicts() {

  const countEl =
    document.getElementById('timetableConflictCount');

  const listEl =
    document.getElementById('timetableConflictList');

  if (!countEl || !listEl) return;


  const data =
    this.getFilteredTimetableData();


  const conflicts = [];


  // Lecturer conflicts
  for (let i = 0; i < data.length; i++) {

    for (let j = i + 1; j < data.length; j++) {

      const a = data[i];

      const b = data[j];


      if (
        a.lecturer === b.lecturer &&
        a.startDate === b.startDate &&
        a.time === b.time
      ) {

        conflicts.push({

          type: 'Lecturer Conflict',

          message:
            `${a.lecturer} is assigned to ${a.courseCode} and ${b.courseCode} at the same time.`

        });

      }


      // Room conflict
      if (
        a.room === b.room &&
        a.startDate === b.startDate &&
        a.time === b.time
      ) {

        conflicts.push({

          type: 'Room Conflict',

          message:
            `${a.room} is assigned to ${a.courseCode} and ${b.courseCode} at the same time.`

        });

      }

    }

  }


  // Remove duplicate messages
  const uniqueConflicts =
    conflicts.filter(
      (item, index, arr) =>
        index === arr.findIndex(
          x =>
            x.type === item.type &&
            x.message === item.message
        )
    );


  countEl.textContent =
    `${uniqueConflicts.length} ${
      uniqueConflicts.length === 1
        ? 'Conflict'
        : 'Conflicts'
    }`;


  if (!uniqueConflicts.length) {

    listEl.innerHTML = `
      <div style="
        text-align:center;
        padding:25px;
        color:var(--text-muted);
      ">

        <i class="fas fa-circle-check"
           style="font-size:1.8rem; margin-bottom:8px;">
        </i>

        <div style="font-weight:700;">
          No timetable conflicts detected
        </div>

        <div class="text-sm"
             style="margin-top:5px;">
          Lecturer, room, and student-group conflicts will appear here.
        </div>

      </div>
    `;

    return;
  }


  listEl.innerHTML =
    uniqueConflicts.map(conflict => `

      <div class="alert alert-danger"
           style="margin-bottom:10px;">

        <i class="fas fa-triangle-exclamation"></i>

        <div>

          <strong>
            ${conflict.type}
          </strong>

          <div class="text-sm"
               style="margin-top:4px;">
            ${conflict.message}
          </div>

        </div>

      </div>

    `).join('');

},


/* =========================================================
   TIMETABLE HISTORY
   ========================================================= */

renderTimetableHistory() {

  const tbody =
    document.getElementById('timetableHistoryBody');

  if (!tbody) return;


  if (!HOD_TIMETABLE_HISTORY.length) {

    tbody.innerHTML = `
      <tr>
        <td colspan="7"
            style="text-align:center; padding:25px;">
          No timetable changes recorded.
        </td>
      </tr>
    `;

    return;
  }


  tbody.innerHTML =
    HOD_TIMETABLE_HISTORY.map(item => `

      <tr>

        <td>
          ${item.course}
        </td>

        <td>
          ${item.module}
        </td>

        <td>
          ${item.previousSchedule}
        </td>

        <td>
          ${item.newSchedule}
        </td>

        <td>
          ${item.changedBy}
        </td>

        <td>
          ${item.date}
        </td>

        <td>
          ${item.reason}
        </td>

      </tr>

    `).join('');

},


/* =========================================================
   EXPORT TIMETABLE PDF
   ========================================================= */

exportTimetablePDF() {

  const data =
    this.getFilteredTimetableData();


  if (!data.length) {

    this.showToast(
      'No timetable records available for PDF export.',
      'warning'
    );

    return;
  }


  const rows =
    data.map(record => `

      <tr>

        <td>${record.courseCode}</td>
        <td>${record.courseName}</td>
        <td>${record.module}</td>
        <td>${record.lecturer}</td>
        <td>${record.session}</td>
        <td>${record.startDate}</td>
        <td>${record.endDate}</td>
        <td>${record.time}</td>
        <td>${record.room}</td>

      </tr>

    `).join('');


  const printWindow =
    window.open('', '_blank');


  if (!printWindow) {

    this.showToast(
      'Please allow pop-ups to export the timetable.',
      'warning'
    );

    return;
  }


  printWindow.document.write(`

    <html>

      <head>

        <title>ISCAM Timetable</title>

        <style>

          body {
            font-family: Arial, sans-serif;
            padding: 25px;
          }

          h1 {
            text-align:center;
          }

          table {
            width:100%;
            border-collapse:collapse;
            margin-top:20px;
          }

          th,
          td {
            border:1px solid #ccc;
            padding:8px;
            font-size:12px;
          }

          th {
            background:#f3f4f6;
          }

        </style>

      </head>

      <body>

        <h1>ISCAM Department Timetable</h1>

        <table>

          <thead>

            <tr>
              <th>Code</th>
              <th>Course</th>
              <th>Module</th>
              <th>Lecturer</th>
              <th>Session</th>
              <th>Start</th>
              <th>End</th>
              <th>Time</th>
              <th>Room</th>
            </tr>

          </thead>

          <tbody>
            ${rows}
          </tbody>

        </table>

      </body>

    </html>

  `);


  printWindow.document.close();

  printWindow.focus();

  printWindow.print();

},


/* =========================================================
   EXPORT TIMETABLE EXCEL
   ========================================================= */

exportTimetableExcel() {

  // Browser-compatible CSV export
  // This can later be replaced with a real XLSX library.

  this.downloadTimetable();

  this.showToast(
    'Timetable exported in spreadsheet-compatible CSV format.',
    'info'
  );

},


/* =========================================================
   PRINT TIMETABLE
   ========================================================= */

printTimetable() {

  const table =
    document.getElementById('timetableRecordsTable');

  if (!table) return;


  const printWindow =
    window.open('', '_blank');


  if (!printWindow) {

    this.showToast(
      'Please allow pop-ups to print the timetable.',
      'warning'
    );

    return;
  }


  printWindow.document.write(`

    <html>

      <head>

        <title>ISCAM Timetable</title>

        <style>

          body {
            font-family:Arial,sans-serif;
            padding:20px;
          }

          h2 {
            text-align:center;
          }

          table {
            width:100%;
            border-collapse:collapse;
          }

          th,
          td {
            border:1px solid #ccc;
            padding:7px;
            font-size:11px;
          }

          th {
            background:#f2f2f2;
          }

          button {
            display:none;
          }

        </style>

      </head>

      <body>

        <h2>ISCAM Department Timetable</h2>

        ${table.outerHTML}

      </body>

    </html>

  `);


  printWindow.document.close();

  printWindow.focus();

  printWindow.print();

},


/* =========================================================
   SHARE TIMETABLE
   ========================================================= */

shareTimetable() {

  const shareData = {

    title: 'ISCAM Department Timetable',

    text:
      'ISCAM Department Timetable — Academic Year 2026–2027, Semester 1.'

  };


  if (
    navigator.share &&
    typeof navigator.share === 'function'
  ) {

    navigator.share(shareData)
      .then(() => {

        this.showToast(
          'Timetable shared successfully.',
          'success'
        );

      })
      .catch(() => {});

    return;
  }


  // Fallback
  if (navigator.clipboard) {

    navigator.clipboard.writeText(
      shareData.text
    );

    this.showToast(
      'Timetable sharing text copied to clipboard.',
      'info'
    );

  } else {

    this.showToast(
      'Sharing is not supported by this browser.',
      'warning'
    );

  }

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



// ======================================================
// INITIALIZE HOD REQUESTS
// ======================================================

initHODRequests() {

    const page =
        document.getElementById(
            'page-requests'
        );

    if (!page) {

        console.warn(
            'Requests page container not found.'
        );

        return;
    }

    // Initialize request data
    this.ensureHODRequestsStore();

    // Initialize request activity log
    this.ensureHODRequestActivityLogStore();

    // Setup buttons, filters and pagination
    this.setupHODRequestEvents();

    // Render request table and summary cards
    this.renderHODRequests();

    // Render Requests-only activity log
    this.renderHODRequestActivityLog();

},



// ======================================================
// REQUEST STORE
// ======================================================

getHODRequests() {

    try {

        const stored =
            JSON.parse(
                localStorage.getItem('hodRequests') || '[]'
            );

        return Array.isArray(stored)
            ? stored
            : [];

    } catch (error) {

        console.error(
            'Unable to read hodRequests:',
            error
        );

        return [];

    }

},


saveHODRequests(requests) {

    localStorage.setItem(
        'hodRequests',
        JSON.stringify(requests)
    );

},


// ======================================================
// REQUEST ACTIVITY LOG STORE
// ======================================================

ensureHODRequestActivityLogStore() {

    try {

        const existing =
            JSON.parse(
                localStorage.getItem(
                    'hodRequestActivityLog'
                ) || '[]'
            );


        if (!Array.isArray(existing)) {

            localStorage.setItem(
                'hodRequestActivityLog',
                JSON.stringify([])
            );

        }

    } catch (error) {

        console.error(
            'Unable to initialize hodRequestActivityLog:',
            error
        );

        localStorage.setItem(
            'hodRequestActivityLog',
            JSON.stringify([])
        );

    }

},


// ======================================================
// REQUEST ACTIVITY LOG STORE
// ======================================================

ensureHODRequestActivityLogStore() {

    try {

        const existing =
            JSON.parse(
                localStorage.getItem(
                    'hodRequestActivityLog'
                ) || '[]'
            );

        if (!Array.isArray(existing)) {

            localStorage.setItem(
                'hodRequestActivityLog',
                JSON.stringify([])
            );

        }

    } catch (error) {

        console.error(
            'Unable to initialize hodRequestActivityLog:',
            error
        );

        localStorage.setItem(
            'hodRequestActivityLog',
            JSON.stringify([])
        );

    }

},

getHODRequestActivityLog() {

    try {

        const stored =
            JSON.parse(
                localStorage.getItem(
                    'hodRequestActivityLog'
                ) || '[]'
            );

        return Array.isArray(stored)
            ? stored
            : [];

    } catch (error) {

        console.error(
            'Unable to read hodRequestActivityLog:',
            error
        );

        return [];

    }

},

saveHODRequestActivityLog(logEntries) {

    localStorage.setItem(
        'hodRequestActivityLog',
        JSON.stringify(logEntries)
    );

},




// ======================================================
// ADD REQUEST ACTIVITY LOG ENTRY
// ======================================================

addHODRequestActivityLog(
    request,
    action,
    comment = ''
) {

    if (!request) {
        return;
    }


    const logEntries =
        this.getHODRequestActivityLog();


    const entry = {

        id:
            `REQ-ACT-${Date.now()}-${Math.random()
                .toString(36)
                .substring(2, 7)}`,

        requestId:
            request.id || '',

        requestTitle:
            request.title ||
            request.type ||
            'Department Request',

        requester:
            request.requesterName ||
            'Department',

        action:
            action,

        comment:
            comment ||
            '',

        date:
            new Date().toISOString()

    };


    // Add newest activity first
    logEntries.unshift(entry);


    // Keep only latest 50 request activities
    const limitedEntries =
        logEntries.slice(0, 50);


    this.saveHODRequestActivityLog(
        limitedEntries
    );


    // Immediately update visible log
    this.renderHODRequestActivityLog();

},


// ======================================================
// RENDER REQUEST ACTIVITY LOG
// ======================================================

renderHODRequestActivityLog() {

    const tbody =
        document.getElementById(
            'hodRequestActivityLogBody'
        );


    const emptyState =
        document.getElementById(
            'hodRequestActivityLogEmptyState'
        );


    if (!tbody) {
        return;
    }


    const logEntries =
        this.getHODRequestActivityLog();


    tbody.innerHTML = '';


    // ---------------------------------------------
    // EMPTY STATE
    // ---------------------------------------------
    if (logEntries.length === 0) {

        if (emptyState) {
            emptyState.style.display = 'block';
        }

        return;

    }


    if (emptyState) {
        emptyState.style.display = 'none';
    }


    // ---------------------------------------------
    // CREATE LOG ROWS
    // ---------------------------------------------
    logEntries.forEach(entry => {

        const row =
            document.createElement('tr');


        // -----------------------------------------
        // ACTION BADGE
        // -----------------------------------------
        let badgeClass =
            'badge badge-gray';


        if (entry.action === 'Approved') {

            badgeClass =
                'badge badge-approved';

        }

        else if (entry.action === 'Rejected') {

            badgeClass =
                'badge badge-returned';

        }


        // -----------------------------------------
        // DATE
        // -----------------------------------------
        const formattedDate =
            this.formatHODRequestActivityDate(
                entry.date
            );


        row.innerHTML = `

            <!-- DATE & TIME -->
            <td>
                <div class="hod-request-activity-date">
                    ${this.escapeHODRequestHtml(
                        formattedDate
                    )}
                </div>
            </td>


            <!-- REQUEST ID -->
            <td>
                <strong>
                    ${this.escapeHODRequestHtml(
                        entry.requestId
                    )}
                </strong>
            </td>


            <!-- REQUEST -->
            <td>

                <div
                    class="hod-request-request-title"
                >
                    ${this.escapeHODRequestHtml(
                        entry.requestTitle
                    )}
                </div>

            </td>


            <!-- REQUESTER -->
            <td>

                <div
                    class="hod-request-related-title"
                >
                    ${this.escapeHODRequestHtml(
                        entry.requester
                    )}
                </div>

            </td>


            <!-- ACTION -->
            <td>

                <span class="${badgeClass}">
                    ${this.escapeHODRequestHtml(
                        entry.action
                    )}
                </span>

            </td>


            <!-- COMMENT -->
            <td>

                <span
                    class="${
                        entry.comment
                            ? ''
                            : 'text-muted'
                    }"
                >
                    ${this.escapeHODRequestHtml(
                        entry.comment ||
                        'No comment'
                    )}
                </span>

            </td>

        `;


        tbody.appendChild(row);

    });

},



// ======================================================
// FORMAT REQUEST ACTIVITY DATE
// ======================================================

formatHODRequestActivityDate(value) {

    if (!value) {
        return '—';
    }


    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(value);

    }


    return date.toLocaleString(
        undefined,
        {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }
    );

},









// ======================================================
// SHARED DATA HELPERS
// ======================================================

getHODRequestStudents() {

    if (typeof getStudents === 'function') {

        const students = getStudents();

        return Array.isArray(students)
            ? students
            : [];

    }

    return [];

},


getHODRequestLecturers() {

    if (typeof getLecturers === 'function') {

        const lecturers = getLecturers();

        return Array.isArray(lecturers)
            ? lecturers
            : [];

    }

    return [];

},


getHODRequestCourses() {

    if (typeof getCourses === 'function') {

        const courses = getCourses();

        return Array.isArray(courses)
            ? courses
            : [];

    }

    return [];

},


// ======================================================
// NORMALIZE VALUE
// ======================================================

normalizeHODRequestValue(value) {

    return String(value ?? '')
        .trim()
        .toLowerCase();

},


// ======================================================
// FIND SHARED RECORDS
// ======================================================

findHODRequestStudent(studentId) {

    const students =
        this.getHODRequestStudents();

    if (!studentId) return null;

    return students.find(student => {

        const id =
            student.id ||
            student.studentId ||
            student.registrationNumber ||
            '';

        return String(id) === String(studentId);

    }) || null;

},


findHODRequestLecturer(lecturerId, lecturerName) {

    const lecturers =
        this.getHODRequestLecturers();

    return lecturers.find(lecturer => {

        const id =
            lecturer.id ||
            lecturer.lecturerId ||
            lecturer.staffId ||
            '';

        const name =
            lecturer.name ||
            lecturer.fullName ||
            lecturer.lecturerName ||
            '';

        return (
            (
                lecturerId &&
                String(id) === String(lecturerId)
            ) ||
            (
                lecturerName &&
                this.normalizeHODRequestValue(name) ===
                this.normalizeHODRequestValue(lecturerName)
            )
        );

    }) || null;

},


findHODRequestCourse(courseCode, courseId) {

    const courses =
        this.getHODRequestCourses();

    return courses.find(course => {

        const id =
            course.id ||
            course.courseId ||
            '';

        const code =
            course.code ||
            course.courseCode ||
            course.moduleCode ||
            '';

        return (
            (
                courseCode &&
                this.normalizeHODRequestValue(code) ===
                this.normalizeHODRequestValue(courseCode)
            ) ||
            (
                courseId &&
                String(id) === String(courseId)
            )
        );

    }) || null;

},


// ======================================================
// ATTENDANCE RECORD LOOKUP
// ======================================================

findHODRequestAttendance(attendanceId, studentId, courseCode) {

    if (
        typeof HOD_ATTENDANCE_DATA === 'undefined' ||
        !Array.isArray(HOD_ATTENDANCE_DATA)
    ) {
        return null;
    }

    return HOD_ATTENDANCE_DATA.find(record => {

        if (
            attendanceId &&
            String(record.id) === String(attendanceId)
        ) {
            return true;
        }

        return (
            studentId &&
            courseCode &&
            String(record.studentId) === String(studentId) &&
            this.normalizeHODRequestValue(record.courseCode) ===
            this.normalizeHODRequestValue(courseCode)
        );

    }) || null;

},


// ======================================================
// ENRICH REQUEST WITH SHARED SYSTEM DATA
// ======================================================

enrichHODRequest(request) {

    const student =
        this.findHODRequestStudent(
            request.studentId
        );

    const lecturer =
        this.findHODRequestLecturer(
            request.lecturerId,
            request.lecturerName
        );

    const course =
        this.findHODRequestCourse(
            request.courseCode,
            request.courseId
        );

    const attendance =
        this.findHODRequestAttendance(
            request.attendanceId,
            request.studentId,
            request.courseCode
        );


    // --------------------------------------------------
    // Student
    // --------------------------------------------------

    const studentName =
        student?.name ||
        student?.fullName ||
        student?.studentName ||
        request.requesterName ||
        'Unknown Student';


    const studentId =
        student?.id ||
        student?.studentId ||
        student?.registrationNumber ||
        request.studentId ||
        '';


    // --------------------------------------------------
    // Lecturer
    // --------------------------------------------------

    const lecturerName =
        lecturer?.name ||
        lecturer?.fullName ||
        lecturer?.lecturerName ||
        request.lecturerName ||
        '';


    // --------------------------------------------------
    // Course
    // --------------------------------------------------

    const courseCode =
        course?.code ||
        course?.courseCode ||
        course?.moduleCode ||
        attendance?.courseCode ||
        request.courseCode ||
        '';


    const courseName =
        course?.name ||
        course?.courseName ||
        course?.title ||
        attendance?.courseName ||
        request.courseName ||
        '';


    // --------------------------------------------------
    // Attendance
    // --------------------------------------------------

    const attendanceStudentName =
        attendance?.studentName ||
        studentName;

    const attendanceCourseName =
        attendance?.courseName ||
        courseName;


    return {

        ...request,

        requesterName:
            request.requesterRole === 'Lecturer'
                ? lecturerName
                : (
                    request.requesterRole === 'HoD'
                        ? request.requesterName
                        : attendanceStudentName
                ),

        studentName:
            attendanceStudentName,

        studentId:
            studentId,

        lecturerName:
            lecturerName,

        courseCode:
            courseCode,

        courseName:
            attendanceCourseName,

        student:
            student,

        lecturer:
            lecturer,

        course:
            course,

        attendance:
            attendance

    };

},


// ======================================================
// CREATE INITIAL REQUEST WORKFLOW
// FROM EXISTING SHARED DATA
// ======================================================

ensureHODRequestsStore() {

    const existing =
        localStorage.getItem('hodRequests');

    if (existing !== null) {
        return;
    }


    const students =
        this.getHODRequestStudents();

    const lecturers =
        this.getHODRequestLecturers();

    const courses =
        this.getHODRequestCourses();


    const attendance =
        typeof HOD_ATTENDANCE_DATA !== 'undefined' &&
        Array.isArray(HOD_ATTENDANCE_DATA)
            ? HOD_ATTENDANCE_DATA
            : [];


    const requests = [];


    // --------------------------------------------------
    // 1. Attendance correction requests
    // --------------------------------------------------

    const attendanceSources =
        attendance
            .filter(record => !record.corrected)
            .slice(0, 3);


    attendanceSources.forEach(
        (record, index) => {

            requests.push({

                id:
                    `REQ-ATT-${String(index + 1).padStart(3, '0')}`,

                type:
                    'Attendance Correction',

                title:
                    'Attendance correction request',

                description:
                    `Attendance correction request related to ${record.courseCode || 'the selected course'}.`,

                requesterRole:
                    'Student',

                requesterName:
                    record.studentName || '',

                studentId:
                    record.studentId || '',

                attendanceId:
                    record.id || '',

                courseCode:
                    record.courseCode || '',

                courseName:
                    record.courseName || '',

                priority:
                    record.status === 'low'
                        ? 'High'
                        : 'Medium',

                status:
                    'Pending',

                submittedDate:
                    new Date().toISOString(),

                decisionDate:
                    '',

                decisionComment:
                    '',

                source:
                    'attendance'

            });

        }
    );


    // --------------------------------------------------
    // 2. New course requests
    // --------------------------------------------------

    const courseSources =
        courses.slice(0, 3);


    courseSources.forEach(
        (course, index) => {

            const code =
                course.code ||
                course.courseCode ||
                course.moduleCode ||
                '';

            const name =
                course.name ||
                course.courseName ||
                course.title ||
                '';


            requests.push({

                id:
                    `REQ-COURSE-${String(index + 1).padStart(3, '0')}`,

                type:
                    'New Course Request',

                title:
                    'New course request',

                description:
                    `Request related to course ${code || name || 'course record'}.`,

                requesterRole:
                    'HoD',

                requesterName:
                    'Department',

                studentId:
                    '',

                courseId:
                    course.id ||
                    course.courseId ||
                    '',

                courseCode:
                    code,

                courseName:
                    name,

                priority:
                    'Medium',

                status:
                    'Pending',

                submittedDate:
                    new Date().toISOString(),

                decisionDate:
                    '',

                decisionComment:
                    '',

                source:
                    'courses'

            });

        }
    );


    // --------------------------------------------------
    // 3. Lecturer workload requests
    // --------------------------------------------------

    const lecturerSources =
        lecturers.slice(0, 3);


    lecturerSources.forEach(
        (lecturer, index) => {

            const lecturerId =
                lecturer.id ||
                lecturer.lecturerId ||
                lecturer.staffId ||
                '';

            const lecturerName =
                lecturer.name ||
                lecturer.fullName ||
                lecturer.lecturerName ||
                '';


            requests.push({

                id:
                    `REQ-WORK-${String(index + 1).padStart(3, '0')}`,

                type:
                    'Lecturer Workload Review',

                title:
                    'Lecturer workload review',

                description:
                    `Review workload information for ${lecturerName || 'the lecturer'}.`,

                requesterRole:
                    'HoD',

                requesterName:
                    'Department',

                lecturerId:
                    lecturerId,

                lecturerName:
                    lecturerName,

                priority:
                    'Low',

                status:
                    'Pending',

                submittedDate:
                    new Date().toISOString(),

                decisionDate:
                    '',

                decisionComment:
                    '',

                source:
                    'lecturers'

            });

        }
    );


    // --------------------------------------------------
    // 4. Timetable approval requests
    // --------------------------------------------------

    let timetable = [];

    if (
        typeof this.getAnalyticsTimetable ===
        'function'
    ) {

        timetable =
            this.getAnalyticsTimetable();

    }


    timetable =
        Array.isArray(timetable)
            ? timetable
            : [];


    timetable.slice(0, 3).forEach(
        (record, index) => {

            const courseCode =
                record.courseCode ||
                record.code ||
                '';

            const courseName =
                record.courseName ||
                record.course ||
                '';


            requests.push({

                id:
                    `REQ-TIME-${String(index + 1).padStart(3, '0')}`,

                type:
                    'Timetable Approval',

                title:
                    'Semester timetable approval',

                description:
                    `Timetable approval request for ${courseCode || courseName || 'the selected timetable record'}.`,

                requesterRole:
                    'HoD',

                requesterName:
                    'Department',

                courseCode:
                    courseCode,

                courseName:
                    courseName,

                priority:
                    'Medium',

                status:
                    'Pending',

                submittedDate:
                    new Date().toISOString(),

                decisionDate:
                    '',

                decisionComment:
                    '',

                source:
                    'timetable'

            });

        }
    );


    this.saveHODRequests(requests);

},


// ======================================================
// REQUEST EVENTS
// ======================================================

setupHODRequestEvents() {

    const search =
        document.getElementById(
            'hodRequestSearch'
        );

    const status =
        document.getElementById(
            'hodRequestStatusFilter'
        );

    const type =
        document.getElementById(
            'hodRequestTypeFilter'
        );

    const priority =
        document.getElementById(
            'hodRequestPriorityFilter'
        );

    const rows =
        document.getElementById(
            'hodRequestRowsPerPage'
        );

    const previous =
        document.getElementById(
            'hodRequestPrevBtn'
        );

    const next =
        document.getElementById(
            'hodRequestNextBtn'
        );


    if (search) {

        search.oninput = () => {

            this.hodRequestPage = 1;

            this.renderHODRequests();

        };

    }


    if (status) {

        status.onchange = () => {

            this.hodRequestPage = 1;

            this.renderHODRequests();

        };

    }


    if (type) {

        type.onchange = () => {

            this.hodRequestPage = 1;

            this.renderHODRequests();

        };

    }


    if (priority) {

        priority.onchange = () => {

            this.hodRequestPage = 1;

            this.renderHODRequests();

        };

    }


    if (rows) {

        rows.onchange = () => {

            this.hodRequestPage = 1;

            this.renderHODRequests();

        };

    }


    if (previous) {

        previous.onclick = () => {

            if (
                (this.hodRequestPage || 1) > 1
            ) {

                this.hodRequestPage--;

                this.renderHODRequests();

            }

        };

    }


    if (next) {

        next.onclick = () => {

            const totalPages =
                this.getHODRequestTotalPages();

            if (
                (this.hodRequestPage || 1) <
                totalPages
            ) {

                this.hodRequestPage++;

                this.renderHODRequests();

            }

        };

    }


        // --------------------------------------------------
    // DECISION MODAL CONFIRM BUTTON
    // --------------------------------------------------

    const decisionConfirm =
        document.getElementById(
            'hodRequestDecisionConfirmBtn'
        );

    if (decisionConfirm) {

        decisionConfirm.onclick = () => {

            this.confirmHODRequestDecision();

        };

    }

    this.hodRequestPage = 1;

},


// ======================================================
// GET FILTERED REQUESTS
// ======================================================

getFilteredHODRequests() {

    const requests =
        this.getHODRequests()
            .map(request =>
                this.enrichHODRequest(request)
            );


    const search =
        this.normalizeHODRequestValue(
            document.getElementById(
                'hodRequestSearch'
            )?.value || ''
        );


    const status =
        document.getElementById(
            'hodRequestStatusFilter'
        )?.value || 'all';


    const type =
        document.getElementById(
            'hodRequestTypeFilter'
        )?.value || 'all';


    const priority =
        document.getElementById(
            'hodRequestPriorityFilter'
        )?.value || 'all';


    return requests.filter(request => {

        // ---------------------------------------------
        // Search
        // ---------------------------------------------

        const searchableText = [

            request.id,

            request.type,

            request.title,

            request.description,

            request.requesterName,

            request.studentName,

            request.studentId,

            request.lecturerName,

            request.courseCode,

            request.courseName

        ]
            .map(value =>
                this.normalizeHODRequestValue(value)
            )
            .join(' ');


        const matchesSearch =
            !search ||
            searchableText.includes(search);


        // ---------------------------------------------
        // Status
        // ---------------------------------------------

        const matchesStatus =
            status === 'all' ||
            request.status === status;


        // ---------------------------------------------
        // Type
        // ---------------------------------------------

        const matchesType =
            type === 'all' ||
            request.type === type;


        // ---------------------------------------------
        // Priority
        // ---------------------------------------------

        const matchesPriority =
            priority === 'all' ||
            request.priority === priority;


        return (
            matchesSearch &&
            matchesStatus &&
            matchesType &&
            matchesPriority
        );

    });

},


// ======================================================
// PAGINATION
// ======================================================

getHODRequestRowsPerPage() {

    return Number(
        document.getElementById(
            'hodRequestRowsPerPage'
        )?.value || 10
    );

},


// ======================================================
// PAGINATION
// ======================================================

getHODRequestTotalPages() {

    const filtered =
        this.getFilteredHODRequests();

    const selectedStatus =
        document.getElementById(
            'hodRequestStatusFilter'
        )?.value || 'all';

    /*
     * The Requests table behaves as follows:
     *
     * All      → show Pending requests only
     * Pending  → show Pending requests
     * Approved → show Approved requests
     * Rejected → show Rejected requests
     *
     * The summary cards still use ALL filtered
     * records so that Total / Pending / Approved /
     * Rejected remain meaningful.
     */
    const tableRequests =
        selectedStatus === 'all'
            ? filtered.filter(
                request =>
                    request.status === 'Pending'
            )
            : filtered;

    const rowsPerPage =
        this.getHODRequestRowsPerPage();

    return Math.max(
        1,
        Math.ceil(
            tableRequests.length /
            rowsPerPage
        )
    );

},


// ======================================================
// RENDER REQUESTS
// ======================================================

renderHODRequests() {

    const tbody =
        document.getElementById(
            'hodRequestsTableBody'
        );

    if (!tbody) return;


    const emptyState =
        document.getElementById(
            'hodRequestsEmptyState'
        );


    // --------------------------------------------------
    // GET FILTERED DATA
    // --------------------------------------------------

    const filtered =
        this.getFilteredHODRequests();


    // --------------------------------------------------
    // SUMMARY CARDS
    //
    // IMPORTANT:
    // Summary cards continue to use ALL filtered
    // records, including Pending, Approved and Rejected.
    // --------------------------------------------------

    this.updateHODRequestSummary(
        filtered
    );


    // --------------------------------------------------
    // SELECT WHAT SHOULD APPEAR IN THE TABLE
    //
    // All      → Pending only
    // Pending  → Pending
    // Approved → Approved
    // Rejected → Rejected
    // --------------------------------------------------

    const selectedStatus =
        document.getElementById(
            'hodRequestStatusFilter'
        )?.value || 'all';


    const tableRequests =
        selectedStatus === 'all'
            ? filtered.filter(
                request =>
                    request.status === 'Pending'
            )
            : filtered;


    // --------------------------------------------------
    // VISIBLE RECORD COUNT
    // --------------------------------------------------

    const visibleCount =
        document.getElementById(
            'hodRequestVisibleCount'
        );

    if (visibleCount) {

        visibleCount.textContent =
            tableRequests.length;

    }


    // --------------------------------------------------
    // KEEP PAGE VALID
    // --------------------------------------------------

    const rowsPerPage =
        this.getHODRequestRowsPerPage();


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                tableRequests.length /
                rowsPerPage
            )
        );


    if (
        !this.hodRequestPage ||
        this.hodRequestPage < 1
    ) {

        this.hodRequestPage = 1;

    }


    if (
        this.hodRequestPage > totalPages
    ) {

        this.hodRequestPage =
            totalPages;

    }


    // --------------------------------------------------
    // SORT TABLE DATA
    //
    // Pending first, then newest first.
    //
    // When the user selects Approved or Rejected,
    // all records already have the same status, so
    // newest records appear first.
    // --------------------------------------------------

    tableRequests.sort((a, b) => {

        const statusOrder = {

            Pending: 1,
            Approved: 2,
            Rejected: 3

        };


        const statusDifference =
            (
                statusOrder[a.status] || 99
            ) -
            (
                statusOrder[b.status] || 99
            );


        if (
            statusDifference !== 0
        ) {

            return statusDifference;

        }


        return String(
            b.submittedDate || ''
        ).localeCompare(
            String(
                a.submittedDate || ''
            )
        );

    });


    // --------------------------------------------------
    // PAGINATION
    // --------------------------------------------------

    const start =
        (
            this.hodRequestPage - 1
        ) *
        rowsPerPage;


    const pageRows =
        tableRequests.slice(
            start,
            start + rowsPerPage
        );


    // --------------------------------------------------
    // CLEAR TABLE
    // --------------------------------------------------

    tbody.innerHTML = '';


    // --------------------------------------------------
    // EMPTY STATE
    // --------------------------------------------------

    if (pageRows.length === 0) {

        if (emptyState) {

            emptyState.style.display =
                'block';

        }

    } else {

        if (emptyState) {

            emptyState.style.display =
                'none';

        }


        // --------------------------------------------------
        // RENDER ROWS
        // --------------------------------------------------

        pageRows.forEach(
            (request, index) => {

                const row =
                    document.createElement(
                        'tr'
                    );


                row.innerHTML = `

                    <td>
                        ${start + index + 1}
                    </td>


                    <td>
                        <strong>
                            ${this.escapeHODRequestHtml(
                                request.id
                            )}
                        </strong>
                    </td>


                    <td>

                        <div class="hod-request-request-title">

                            ${this.escapeHODRequestHtml(
                                request.title
                            )}

                        </div>


                        <div class="hod-request-request-type">

                            ${this.escapeHODRequestHtml(
                                request.type
                            )}

                        </div>

                    </td>


                    <td>

                        <div class="hod-request-related-title">

                            ${this.escapeHODRequestHtml(
                                request.requesterName
                            )}

                        </div>


                        ${
                            request.studentId
                                ? `
                                    <div class="hod-request-related-subtitle">

                                        ${this.escapeHODRequestHtml(
                                            request.studentId
                                        )}

                                    </div>
                                  `
                                : ''
                        }

                    </td>


                    <td>

                        ${
                            request.courseCode
                                ? `

                                    <div class="hod-request-related-title">

                                        ${this.escapeHODRequestHtml(
                                            request.courseCode
                                        )}

                                    </div>


                                    <div class="hod-request-related-subtitle">

                                        ${this.escapeHODRequestHtml(
                                            request.courseName
                                        )}

                                    </div>

                                  `
                                : (

                                    request.lecturerName

                                        ? `

                                            <div class="hod-request-related-title">

                                                ${this.escapeHODRequestHtml(
                                                    request.lecturerName
                                                )}

                                            </div>


                                            <div class="hod-request-related-subtitle">

                                                Lecturer

                                            </div>

                                          `

                                        : `

                                            <span class="text-muted">

                                                Department

                                            </span>

                                          `
                                )
                        }

                    </td>


                    <td>

                        <span class="
                            hod-request-priority-badge
                            hod-request-priority-${String(
                                request.priority || 'Medium'
                            ).toLowerCase()}
                        ">

                            ${this.escapeHODRequestHtml(
                                request.priority || 'Medium'
                            )}

                        </span>

                    </td>


                    <td>

                        ${this.formatHODRequestDate(
                            request.submittedDate
                        )}

                    </td>


                    <td>

                        <span class="
                            hod-request-status-badge
                            hod-request-status-${String(
                                request.status || 'Pending'
                            ).toLowerCase()}
                        ">

                            ${this.escapeHODRequestHtml(
                                request.status || 'Pending'
                            )}

                        </span>

                    </td>


                    <td>

                        <div class="hod-request-actions">

                            <button
                                type="button"
                                class="btn btn-sm btn-secondary"
                                onclick="App.viewHODRequest('${this.escapeHODRequestAttribute(
                                    request.id
                                )}')">

                                <i class="fas fa-eye"></i>

                                View

                            </button>


                            ${
                                request.status === 'Pending'

                                    ? `

                                        <button
                                            type="button"
                                            class="btn btn-sm btn-success"
                                            onclick="App.approveHODRequest('${this.escapeHODRequestAttribute(
                                                request.id
                                            )}')">

                                            <i class="fas fa-check"></i>

                                            Approve

                                        </button>


                                        <button
                                            type="button"
                                            class="btn btn-sm btn-danger"
                                            onclick="App.rejectHODRequest('${this.escapeHODRequestAttribute(
                                                request.id
                                            )}')">

                                            <i class="fas fa-times"></i>

                                            Reject

                                        </button>

                                      `

                                    : ''

                            }

                        </div>

                    </td>

                `;


                tbody.appendChild(
                    row
                );

            }
        );

    }


    // --------------------------------------------------
    // FOOTER
    // --------------------------------------------------

    const filteredTotal =
        document.getElementById(
            'hodRequestFilteredTotal'
        );


    if (filteredTotal) {

        filteredTotal.textContent =
            tableRequests.length;

    }


    const showingFrom =
        document.getElementById(
            'hodRequestShowingFrom'
        );


    const showingTo =
        document.getElementById(
            'hodRequestShowingTo'
        );


    if (
        tableRequests.length === 0
    ) {

        if (showingFrom) {

            showingFrom.textContent =
                '0';

        }


        if (showingTo) {

            showingTo.textContent =
                '0';

        }

    } else {

        if (showingFrom) {

            showingFrom.textContent =
                start + 1;

        }


        if (showingTo) {

            showingTo.textContent =
                Math.min(
                    start + pageRows.length,
                    tableRequests.length
                );

        }

    }


    // --------------------------------------------------
    // PAGE INFORMATION
    // --------------------------------------------------

    const pageInfo =
        document.getElementById(
            'hodRequestPageInfo'
        );


    if (pageInfo) {

        pageInfo.textContent =
            `${this.hodRequestPage} of ${totalPages}`;

    }


    // --------------------------------------------------
    // PAGINATION BUTTONS
    // --------------------------------------------------

    const previous =
        document.getElementById(
            'hodRequestPrevBtn'
        );


    const next =
        document.getElementById(
            'hodRequestNextBtn'
        );


    if (previous) {

        previous.disabled =
            this.hodRequestPage <= 1;

    }


    if (next) {

        next.disabled =
            this.hodRequestPage >= totalPages;

    }

},


// ======================================================
// SUMMARY CARDS
// ======================================================

updateHODRequestSummary(filteredRequests) {

    const total =
        filteredRequests.length;


    const pending =
        filteredRequests.filter(
            request =>
                request.status === 'Pending'
        ).length;


    const approved =
        filteredRequests.filter(
            request =>
                request.status === 'Approved'
        ).length;


    const rejected =
        filteredRequests.filter(
            request =>
                request.status === 'Rejected'
        ).length;


    const totalEl =
        document.getElementById(
            'hodRequestTotalCount'
        );

    const pendingEl =
        document.getElementById(
            'hodRequestPendingCount'
        );

    const approvedEl =
        document.getElementById(
            'hodRequestApprovedCount'
        );

    const rejectedEl =
        document.getElementById(
            'hodRequestRejectedCount'
        );


    if (totalEl)
        totalEl.textContent = total;

    if (pendingEl)
        pendingEl.textContent = pending;

    if (approvedEl)
        approvedEl.textContent = approved;

    if (rejectedEl)
        rejectedEl.textContent = rejected;

},


// ======================================================
// VIEW REQUEST
// ======================================================

viewHODRequest(requestId) {

    const requests =
        this.getHODRequests()
            .map(request =>
                this.enrichHODRequest(request)
            );


    const request =
        requests.find(
            item =>
                String(item.id) ===
                String(requestId)
        );


    if (!request) {

        this.showToast(
            'Request not found.',
            'error'
        );

        return;

    }


    const modal =
        document.getElementById(
            'hodRequestDetailsModal'
        );

    const body =
        document.getElementById(
            'hodRequestDetailsBody'
        );


    if (!modal || !body) return;


    body.innerHTML = `

        <div class="hod-request-details-grid">

            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Request ID
                </div>

                <div class="hod-request-detail-value">
                    ${this.escapeHODRequestHtml(
                        request.id
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Request Type
                </div>

                <div class="hod-request-detail-value">
                    ${this.escapeHODRequestHtml(
                        request.type
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Requester
                </div>

                <div class="hod-request-detail-value">
                    ${this.escapeHODRequestHtml(
                        request.requesterName
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Requester Role
                </div>

                <div class="hod-request-detail-value">
                    ${this.escapeHODRequestHtml(
                        request.requesterRole || '—'
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Student ID
                </div>

                <div class="hod-request-detail-value">
                    ${this.escapeHODRequestHtml(
                        request.studentId || '—'
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Course
                </div>

                <div class="hod-request-detail-value">
                    ${
                        request.courseCode
                            ? `${this.escapeHODRequestHtml(
                                request.courseCode
                            )} — ${this.escapeHODRequestHtml(
                                request.courseName
                            )}`
                            : '—'
                    }
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Priority
                </div>

                <div class="hod-request-detail-value">
                    ${this.escapeHODRequestHtml(
                        request.priority || '—'
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Status
                </div>

                <div class="hod-request-detail-value">
                    ${this.escapeHODRequestHtml(
                        request.status || '—'
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Submitted
                </div>

                <div class="hod-request-detail-value">
                    ${this.formatHODRequestDate(
                        request.submittedDate
                    )}
                </div>

            </div>


            <div class="hod-request-detail-item">

                <div class="hod-request-detail-label">
                    Decision Date
                </div>

                <div class="hod-request-detail-value">
                    ${
                        request.decisionDate
                            ? this.formatHODRequestDate(
                                request.decisionDate
                            )
                            : '—'
                    }
                </div>

            </div>


            <div class="
                hod-request-detail-item
                hod-request-detail-full
            ">

                <div class="hod-request-detail-label">
                    Description
                </div>

                <div class="
                    hod-request-detail-value
                    hod-request-detail-description
                ">
                    ${this.escapeHODRequestHtml(
                        request.description || '—'
                    )}
                </div>

            </div>


            ${
                request.decisionComment
                    ? `
                        <div class="
                            hod-request-detail-item
                            hod-request-detail-full
                        ">

                            <div class="hod-request-detail-label">
                                Decision Comment
                            </div>

                            <div class="
                                hod-request-detail-value
                                hod-request-detail-description
                            ">
                                ${this.escapeHODRequestHtml(
                                    request.decisionComment
                                )}
                            </div>

                        </div>
                      `
                    : ''
            }

        </div>

    `;


    const approveButton =
        document.getElementById(
            'hodRequestApproveBtn'
        );

    const rejectButton =
        document.getElementById(
            'hodRequestRejectBtn'
        );


    if (approveButton) {

        approveButton.style.display =
            request.status === 'Pending'
                ? 'inline-flex'
                : 'none';

        approveButton.onclick = () => {

            this.approveHODRequest(
                request.id
            );

        };

    }


    if (rejectButton) {

        rejectButton.style.display =
            request.status === 'Pending'
                ? 'inline-flex'
                : 'none';

        rejectButton.onclick = () => {

            this.rejectHODRequest(
                request.id
            );

        };

    }


    modal.style.display = 'flex';

},


// ======================================================
// CLOSE DETAILS
// ======================================================

closeHODRequestDetails() {

    const modal =
        document.getElementById(
            'hodRequestDetailsModal'
        );

    if (modal) {

        modal.style.display =
            'none';

    }

},




// ======================================================
// REQUEST DECISION STATE
// ======================================================

hodRequestDecisionId: null,
hodRequestDecisionAction: null,


// ======================================================
// OPEN HOD REQUEST DECISION MODAL
// ======================================================

openHODRequestDecision(requestId, action) {

    const requests =
        this.getHODRequests()
            .map(request =>
                this.enrichHODRequest(request)
            );

    const request =
        requests.find(
            item =>
                String(item.id) ===
                String(requestId)
        );


    if (!request) {

        this.showToast(
            'Request not found.',
            'error'
        );

        return;

    }


    if (request.status !== 'Pending') {

        this.showToast(
            'This request has already been processed.',
            'info'
        );

        return;

    }


    const modal =
        document.getElementById(
            'hodRequestDecisionModal'
        );


    if (!modal) {

        this.showToast(
            'Decision form could not be opened.',
            'error'
        );

        return;

    }


    // --------------------------------------------------
    // SAVE CURRENT DECISION
    // --------------------------------------------------

    this.hodRequestDecisionId =
        request.id;

    this.hodRequestDecisionAction =
        action;


    // --------------------------------------------------
    // GET FORM ELEMENTS
    // --------------------------------------------------

    const title =
        document.getElementById(
            'hodRequestDecisionTitle'
        );

    const subtitle =
        document.getElementById(
            'hodRequestDecisionSubtitle'
        );

    const idElement =
        document.getElementById(
            'hodRequestDecisionId'
        );

    const requestElement =
        document.getElementById(
            'hodRequestDecisionRequest'
        );

    const requesterElement =
        document.getElementById(
            'hodRequestDecisionRequester'
        );

    const priorityElement =
        document.getElementById(
            'hodRequestDecisionPriority'
        );

    const comment =
        document.getElementById(
            'hodRequestDecisionComment'
        );

    const commentLabel =
        document.getElementById(
            'hodRequestDecisionCommentLabel'
        );

    const helper =
        document.getElementById(
            'hodRequestDecisionHelper'
        );

    const error =
        document.getElementById(
            'hodRequestDecisionError'
        );

    const confirmButton =
        document.getElementById(
            'hodRequestDecisionConfirmBtn'
        );

    const confirmText =
        document.getElementById(
            'hodRequestDecisionConfirmText'
        );

    const confirmIcon =
        document.getElementById(
            'hodRequestDecisionConfirmIcon'
        );


    // --------------------------------------------------
    // POPULATE REQUEST INFORMATION
    // --------------------------------------------------

    if (idElement) {

        idElement.textContent =
            request.id || '—';

    }


    if (requestElement) {

        requestElement.textContent =
            request.title ||
            request.type ||
            'Request';

    }


    if (requesterElement) {

        requesterElement.textContent =
            request.requesterName ||
            '—';

    }


    if (priorityElement) {

        priorityElement.textContent =
            request.priority ||
            'Medium';

    }


    // --------------------------------------------------
    // CLEAR PREVIOUS COMMENT
    // --------------------------------------------------

    if (comment) {

        comment.value = '';

    }


    // --------------------------------------------------
    // CLEAR PREVIOUS ERROR
    // --------------------------------------------------

    if (error) {

        error.style.display =
            'none';

        const errorText =
            error.querySelector('span');

        if (errorText) {

            errorText.textContent =
                '';

        }

    }


    // --------------------------------------------------
    // APPROVE MODE
    // --------------------------------------------------

    if (action === 'approve') {

        if (title) {

            title.textContent =
                'Approve Request';

        }


        if (subtitle) {

            subtitle.textContent =
                'Review the request and confirm your approval.';

        }


        if (commentLabel) {

            commentLabel.textContent =
                'Approval Comment';

        }


        if (comment) {

            comment.placeholder =
                'Add an optional comment about your approval...';

        }


        if (helper) {

            helper.textContent =
                'Your comment will be recorded with this request.';

        }


        if (confirmText) {

            confirmText.textContent =
                'Approve Request';

        }


        if (confirmIcon) {

            confirmIcon.className =
                'fas fa-check';

        }


        if (confirmButton) {

            confirmButton.className =
                'btn btn-success';

        }

    }


    // --------------------------------------------------
    // REJECT MODE
    // --------------------------------------------------

    if (action === 'reject') {

        if (title) {

            title.textContent =
                'Reject Request';

        }


        if (subtitle) {

            subtitle.textContent =
                'Provide a reason before rejecting this request.';

        }


        if (commentLabel) {

            commentLabel.textContent =
                'Rejection Reason';

        }


        if (comment) {

            comment.placeholder =
                'Enter the reason for rejecting this request...';

        }


        if (helper) {

            helper.textContent =
                'A rejection reason is required and will be recorded with this request.';

        }


        if (confirmText) {

            confirmText.textContent =
                'Reject Request';

        }


        if (confirmIcon) {

            confirmIcon.className =
                'fas fa-times';

        }


        if (confirmButton) {

            confirmButton.className =
                'btn btn-danger';

        }

    }


    // --------------------------------------------------
    // OPEN MODAL
    // --------------------------------------------------

    modal.style.display =
        'flex';

},


// ======================================================
// CONFIRM REQUEST DECISION
// ======================================================

confirmHODRequestDecision() {

    const requestId =
        this.hodRequestDecisionId;

    const action =
        this.hodRequestDecisionAction;

    if (!requestId || !action) {

        this.showToast(
            'No request decision is currently active.',
            'warning'
        );

        return;
    }

    const requests =
        this.getHODRequests();

    const request =
        requests.find(
            item =>
                String(item.id) ===
                String(requestId)
        );

    if (!request) {

        this.closeHODRequestDecision();

        this.showToast(
            'Request not found.',
            'error'
        );

        return;
    }

    if (request.status !== 'Pending') {

        this.closeHODRequestDecision();

        this.showToast(
            'This request has already been processed.',
            'info'
        );

        return;
    }

    const commentEl =
        document.getElementById(
            'hodRequestDecisionComment'
        );

    const errorEl =
        document.getElementById(
            'hodRequestDecisionError'
        );

    const comment =
        commentEl
            ? commentEl.value.trim()
            : '';

    // --------------------------------------------------
    // REJECTION REQUIRES A REASON
    // --------------------------------------------------

    if (
        action === 'reject' &&
        !comment
    ) {

        if (errorEl) {
            errorEl.style.display = 'block';
        }

        if (commentEl) {
            commentEl.focus();
        }

        return;
    }

    if (errorEl) {
        errorEl.style.display = 'none';
    }

    // --------------------------------------------------
    // APPROVE
    // --------------------------------------------------

    if (action === 'approve') {

        request.status =
            'Approved';

        request.decisionDate =
            new Date().toISOString();

        request.decisionComment =
            comment ||
            'Approved by HoD';

    }

    // --------------------------------------------------
    // REJECT
    // --------------------------------------------------

    else if (action === 'reject') {

        request.status =
            'Rejected';

        request.decisionDate =
            new Date().toISOString();

        request.decisionComment =
            comment;

    }

    // --------------------------------------------------
    // SAVE REQUEST
    // --------------------------------------------------

    this.saveHODRequests(
        requests
    );

    // --------------------------------------------------
    // REQUESTS-ONLY ACTIVITY LOG
    // --------------------------------------------------

    this.addHODRequestActivityLog(
        request,
        request.status,
        request.decisionComment
    );

    // --------------------------------------------------
    // CLOSE DECISION MODAL
    // --------------------------------------------------

    this.closeHODRequestDecision();

    // --------------------------------------------------
    // RESET TABLE PAGE
    // --------------------------------------------------

    this.hodRequestPage =
        1;

    // --------------------------------------------------
    // REFRESH REQUEST TABLE
    // --------------------------------------------------

    this.renderHODRequests();

    // --------------------------------------------------
    // REFRESH REQUEST ACTIVITY LOG
    // --------------------------------------------------

    this.renderHODRequestActivityLog();

    // --------------------------------------------------
    // MESSAGE
    // --------------------------------------------------

    if (action === 'approve') {

        this.showToast(
            `Request ${request.id} approved successfully.`,
            'success'
        );

    } else {

        this.showToast(
            `Request ${request.id} rejected successfully.`,
            'info'
        );

    }

    // --------------------------------------------------
    // REFRESH RELATED SECTIONS
    // --------------------------------------------------

    this.refreshHODRequestRelatedViews();

},


// ======================================================
// CLOSE HOD REQUEST DECISION MODAL
// ======================================================

closeHODRequestDecision() {

    const modal =
        document.getElementById(
            'hodRequestDecisionModal'
        );


    if (modal) {

        modal.style.display =
            'none';

    }


    // --------------------------------------------------
    // RESET DECISION STATE
    // --------------------------------------------------

    this.hodRequestDecisionId =
        null;

    this.hodRequestDecisionAction =
        null;


    // --------------------------------------------------
    // CLEAR COMMENT
    // --------------------------------------------------

    const comment =
        document.getElementById(
            'hodRequestDecisionComment'
        );

    if (comment) {

        comment.value = '';

    }


    // --------------------------------------------------
    // CLEAR ERROR
    // --------------------------------------------------

    const error =
        document.getElementById(
            'hodRequestDecisionError'
        );

    if (error) {

        error.style.display =
            'none';

        const errorText =
            error.querySelector('span');

        if (errorText) {

            errorText.textContent =
                '';

        }

    }

},


// ======================================================
// OPEN APPROVE REQUEST FORM
// ======================================================

approveHODRequest(requestId) {

    this.openHODRequestDecision(
        requestId,
        'approve'
    );

},


// ======================================================
// OPEN REJECT REQUEST FORM
// ======================================================

rejectHODRequest(requestId) {

    this.openHODRequestDecision(
        requestId,
        'reject'
    );

},


// ======================================================
// RESET FILTERS
// ======================================================

resetHODRequestFilters() {

    const search =
        document.getElementById(
            'hodRequestSearch'
        );

    const status =
        document.getElementById(
            'hodRequestStatusFilter'
        );

    const type =
        document.getElementById(
            'hodRequestTypeFilter'
        );

    const priority =
        document.getElementById(
            'hodRequestPriorityFilter'
        );


    if (search)
        search.value = '';

    if (status)
        status.value = 'all';

    if (type)
        type.value = 'all';

    if (priority)
        priority.value = 'all';


    this.hodRequestPage = 1;

    this.renderHODRequests();


    this.showToast(
        'Request filters have been reset.',
        'info'
    );

},


// ======================================================
// REFRESH RELATED HOD VIEWS
// ======================================================

refreshHODRequestRelatedViews() {

    // --------------------------------------------------
    // Requests Activity Log
    // --------------------------------------------------

    if (
        typeof this.renderHODRequestActivityLog ===
        'function'
    ) {

        this.renderHODRequestActivityLog();

    }

    // --------------------------------------------------
    // Attendance
    // --------------------------------------------------

    if (
        typeof this.renderHODAttendance ===
        'function'
    ) {

        this.renderHODAttendance();

    }

    if (
        typeof this.updateAttendanceCorrectionCount ===
        'function'
    ) {

        this.updateAttendanceCorrectionCount();

    }

    // --------------------------------------------------
    // Analytics
    // --------------------------------------------------

    if (
        typeof this.refreshAnalyticsFromCurrentData ===
        'function'
    ) {

        this.refreshAnalyticsFromCurrentData();

    }

    // --------------------------------------------------
    // Reports
    // --------------------------------------------------

    if (
        typeof this.refreshReportsFromCurrentData ===
        'function'
    ) {

        this.refreshReportsFromCurrentData();

    }


        // Department Communication
    if (
        typeof this.renderHODDepartmentCommunication ===
        'function'
    ) {

        this.renderHODDepartmentCommunication();

    }

},


// ======================================================
// FORMAT DATE
// ======================================================

formatHODRequestDate(value) {

    if (!value) {
        return '—';
    }


    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return this.escapeHODRequestHtml(
            value
        );

    }


    return date.toLocaleDateString(
        undefined,
        {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }
    );

},


// ======================================================
// ESCAPE HTML
// ======================================================

escapeHODRequestHtml(value) {

    return String(
        value ?? ''
    )
        .replace(
            /&/g,
            '&amp;'
        )
        .replace(
            /</g,
            '&lt;'
        )
        .replace(
            />/g,
            '&gt;'
        )
        .replace(
            /"/g,
            '&quot;'
        )
        .replace(
            /'/g,
            '&#039;'
        );

},


// ======================================================
// ESCAPE ATTRIBUTE
// ======================================================

escapeHODRequestAttribute(value) {

    return String(
        value ?? ''
    )
        .replace(
            /\\/g,
            '\\\\'
        )
        .replace(
            /'/g,
            "\\'"
        );

},



  // Navigation from quick actions
  goto(page) { this.loadPage(page); },

  // Profile actions
  showProfile() {
    const user = getCurrentUser();
    if (user.role === 'admin') {
      this.loadPage('student-profile'); // or dedicated profile page
    } else {
      this.loadPage('profile');
    }
    document.getElementById('profileDropdown')?.classList.remove('open');
  },

  showSettings() {
    this.loadPage('settings');
    document.getElementById('profileDropdown')?.classList.remove('open');
  },

  logout() {
    // Keep legacy behavior: clear session and go to login.
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
  },

  // ===== HoD Compatibility Stubs (prevent runtime errors) =====

  getSelectedStudents() {
    const checkboxes = document.querySelectorAll('#page-students .student-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
  },

  exportSelected() {
    const selected = this.getSelectedStudents();
    if (!selected.length) {
      showToast && showToast('Select at least one student to export.', 'info');
      return;
    }

    // Export selected students to CSV (client-side demo)
    try {
      const students = (typeof getStudents === 'function') ? getStudents() : [];
      const selectedStudents = students.filter(s => selected.includes(s.id || s.studentId));

      const headers = ['Student', 'ID', 'Module', 'Intake', 'Year', 'Performance', 'Status'];
      const rows = selectedStudents.map(s => {
        const name = s.name || '—';
        const id = s.id || s.studentId || '';
        const module = s.module || s.course || s.moduleCode || '—';
        const intake = s.intake || s.level || '—';
        const year = s.year || s.intakeYear || s.level || '—';
        const perf = (typeof s.avg === 'number') ? s.avg : (typeof s.performancePercent === 'number' ? s.performancePercent : null);
        const perfPct = (typeof perf === 'number') ? `${perf.toFixed(1)}%` : (String(s.grade || '').toUpperCase() === 'F' ? '40%' : '');
        // Status heuristic (mirrors hod.html)
        const suspended = (s.status && String(s.status).toLowerCase() === 'suspended') || s.isSuspended === true;
        const gradeUpper = String(s.grade || '').toUpperCase();
        let status = 'Active';
        if (suspended) status = 'Suspended';
        else if (gradeUpper === 'F') status = 'At Risk';

        return [name, id, module, intake, year, perfPct, status];
      });

      const esc = (v) => {
        const str = String(v ?? '');
        if (/[",\n]/.test(str)) return '"' + str.replace(/"/g,'""') + '"';
        return str;
      };

      const csv = [headers.map(esc).join(',')].concat(rows.map(r => r.map(esc).join(','))).join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `students_selected_${new Date().toISOString().slice(0,10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast && showToast(`Exported ${selected.length} student(s).`, 'success');
    } catch (e) {
      showToast && showToast('Export failed (demo).', 'error');
      console.error(e);
    }
  },

  sendAnnouncement() {
    const selected = this.getSelectedStudents();
    if (!selected.length) {
      showToast && showToast('Select at least one student to send an announcement.', 'info');
      return;
    }
    showToast && showToast(`Send Announcement (demo) to: ${selected.join(', ')}`, 'info');
  },

  updateStatus() {
    const selected = this.getSelectedStudents();
    if (!selected.length) {
      showToast && showToast('Select at least one student to update status.', 'info');
      return;
    }
    // Open modal or apply bulk status update (demo)
    showToast && showToast(`Update Status (demo) for: ${selected.join(', ')}`, 'info');
  },

  exportStudents() {
    showToast && showToast('Export Students (demo) — coming soon', 'info');
  },


  viewStudentReport() {
    showToast && showToast('View Student Report (demo) — coming soon', 'info');
  },



  /* =========================================================
   HOD ANNOUNCEMENTS MODULE
   ========================================================= */

initHODAnnouncements() {

  try {

    this.ensureHODAnnouncementsStore();

    this.populateAnnouncementProgrammes();

    this.setupAnnouncementEvents();

    this.renderHODAnnouncements();

  } catch (error) {

    console.error(
      'HOD Announcements initialization error:',
      error
    );

  }

},


/* =========================================================
   ANNOUNCEMENT STORAGE
   ========================================================= */

getHODAnnouncements() {

  const key = 'hodAnnouncements';

  try {

    const stored =
      localStorage.getItem(key);

    if (stored) {

      const parsed =
        JSON.parse(stored);

      if (Array.isArray(parsed)) {
        return parsed;
      }

    }

  } catch (error) {

    console.error(
      'Unable to read announcements:',
      error
    );

  }

  return [];

},



/* =========================================================
   ANNOUNCEMENT AUDIENCE HELPERS
   ========================================================= */

getCurrentAnnouncementUser() {

  let user = {};

  try {

    if (typeof getCurrentUser === 'function') {
      user =
        getCurrentUser() || {};
    }

  } catch (error) {

    console.warn(
      'Unable to read current user.',
      error
    );

  }

  /*
   * Student profile fallback
   */
  if (
    !user.id &&
    !user.studentId &&
    typeof getCurrentStudent === 'function'
  ) {

    try {

      const student =
        getCurrentStudent() || {};

      user = {
        ...user,
        ...student
      };

    } catch (error) {

      console.warn(
        'Unable to read current student.',
        error
      );

    }

  }

  return user;

},


normalizeAnnouncementValue(value) {

  return String(
    value == null
      ? ''
      : value
  )
    .trim()
    .toLowerCase();

},


getAnnouncementUserRole() {

  const user =
    this.getCurrentAnnouncementUser();

  const bodyRole =
    document.body?.dataset?.role || '';

  return this.normalizeAnnouncementValue(
    user.role ||
    user.userRole ||
    bodyRole
  );

},


getAnnouncementUserProgramme() {

  const user =
    this.getCurrentAnnouncementUser();

  return String(
    user.programme ||
    user.program ||
    user.courseProgramme ||
    user.department ||
    ''
  ).trim();

},


announcementMatchesAudience(
  announcement,
  user = null
) {

  if (!announcement) {
    return false;
  }

  const target =
    this.normalizeAnnouncementValue(
      announcement.audience
    );

  const currentUser =
    user ||
    this.getCurrentAnnouncementUser();

  const role =
    this.normalizeAnnouncementValue(
      currentUser.role ||
      currentUser.userRole ||
      document.body?.dataset?.role ||
      ''
    );


  /* =====================================================
     ALL USERS / ALL STUDENTS
     ===================================================== */

  if (
    target === 'all' ||
    target === 'everyone'
  ) {

    return true;

  }


  if (
    target === 'all students'
  ) {

    return (
      role === 'student' ||
      role === 'students' ||
      role === ''
    );

  }


  /* =====================================================
     LECTURERS
     ===================================================== */

  if (
    target === 'lecturers' ||
    target === 'lecturer'
  ) {

    return (
      role === 'lecturer' ||
      role === 'lecturers'
    );

  }


  /* =====================================================
     STAFF
     ===================================================== */

  if (
    target === 'staff'
  ) {

    return (
      role === 'staff' ||
      role === 'administrator' ||
      role === 'admin' ||
      role === 'hod' ||
      role === 'head of department'
    );

  }


  /* =====================================================
     SPECIFIC PROGRAMME
     ===================================================== */

  if (
    target === 'specific programme'
  ) {

    const userProgramme =
      this.normalizeAnnouncementValue(
        currentUser.programme ||
        currentUser.program ||
        currentUser.courseProgramme ||
        currentUser.department ||
        ''
      );

    const announcementProgramme =
      this.normalizeAnnouncementValue(
        announcement.programme
      );

    if (
      !userProgramme ||
      !announcementProgramme
    ) {

      return false;

    }

    return (
      userProgramme ===
      announcementProgramme
    );

  }


  return false;

},


getVisibleAnnouncementsForCurrentUser() {

  const user =
    this.getCurrentAnnouncementUser();

  return this.getHODAnnouncements()
    .filter(
      announcement =>
        this.getAnnouncementStatus(
          announcement
        ) === 'published'
    )
    .filter(
      announcement =>
        this.announcementMatchesAudience(
          announcement,
          user
        )
    )
    .sort(
      (a, b) =>
        new Date(
          b.publishDate ||
          b.createdAt ||
          0
        ) -
        new Date(
          a.publishDate ||
          a.createdAt ||
          0
        )
    );

},


/* =========================================================
   RENDER ANNOUNCEMENTS FOR STUDENT / LECTURER DASHBOARDS
   ========================================================= */

renderAudienceAnnouncements(
  containerId
) {

  const container =
    document.getElementById(
      containerId
    );

  if (!container) {
    return;
  }

  const announcements =
    this.getVisibleAnnouncementsForCurrentUser()
      .slice(0, 5);


  /* =====================================================
     EMPTY STATE
     ===================================================== */

  if (!announcements.length) {

    container.innerHTML = `

      <div
        style="
          padding:24px 10px;
          text-align:center;
          color:var(--text-muted);
        "
      >

        <div
          style="
            width:48px;
            height:48px;
            margin:0 auto 10px;
            border-radius:50%;
            background:rgba(26,58,107,0.08);
            color:var(--primary);
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:18px;
          "
        >
          <i class="fas fa-bullhorn"></i>
        </div>

        <div
          style="
            font-weight:700;
            color:var(--text-primary);
          "
        >
          No announcements
        </div>

        <div
          class="text-xs text-muted"
          style="margin-top:5px;"
        >
          There are no active announcements for you.
        </div>

      </div>

    `;

    return;

  }


  /* =====================================================
     ANNOUNCEMENT LIST
     ===================================================== */

  container.innerHTML =
    announcements
      .map(
        announcement => {

          const priority =
            this.normalizeAnnouncementValue(
              announcement.priority
            );

          const priorityClass =
            priority === 'urgent'
              ? 'red'
              : priority === 'important'
                ? 'gold'
                : 'blue';

          const title =
            this.escapeAnnouncementHtml(
              announcement.title
            );

          const message =
            this.escapeAnnouncementHtml(
              announcement.message
            );

          const date =
            this.escapeAnnouncementHtml(
              announcement.publishDate ||
              'Recently'
            );

          return `

            <div
              class="activity-item"
              style="
                padding:14px 0;
                border-bottom:1px solid #eef1f5;
                align-items:flex-start;
              "
            >

              <div
                class="activity-icon-wrap"
                style="
                  background:rgba(26,58,107,0.08);
                  color:var(--primary);
                  flex-shrink:0;
                "
              >
                <i class="fas fa-bullhorn"></i>
              </div>


              <div
                class="activity-text"
                style="flex:1; min-width:0;"
              >

                <div
                  style="
                    display:flex;
                    align-items:center;
                    gap:8px;
                    flex-wrap:wrap;
                  "
                >

                  <div
                    style="
                      font-weight:800;
                      color:var(--text-primary);
                    "
                  >
                    ${title}
                  </div>

                  <span
                    class="badge badge-${priorityClass}"
                  >
                    ${this.capitalizeAnnouncement(
                      priority || 'normal'
                    )}
                  </span>

                </div>


                <div
                  style="
                    margin-top:6px;
                    color:var(--text-secondary);
                    font-size:.86rem;
                    line-height:1.5;
                  "
                >
                  ${message}
                </div>


                <div
                  class="activity-time"
                  style="margin-top:7px;"
                >
                  <i class="fas fa-calendar-day"></i>
                  ${date}
                </div>

              </div>

            </div>

          `;

        }
      )
      .join('');

},


refreshAudienceAnnouncements() {

  /*
   * Student dashboard
   */
  this.renderAudienceAnnouncements(
    'studentAnnouncementsContainer'
  );

  /*
   * Lecturer dashboard
   */
  this.renderAudienceAnnouncements(
    'lecturerAnnouncementsContainer'
  );

},




saveHODAnnouncements(announcements) {

  try {

    localStorage.setItem(
      'hodAnnouncements',
      JSON.stringify(announcements)
    );

  } catch (error) {

    console.error(
      'Unable to save announcements:',
      error
    );

    this.showToast(
      'Unable to save announcement data.',
      'error'
    );

  }

},


ensureHODAnnouncementsStore() {

  const existing =
    this.getHODAnnouncements();

  if (existing.length) {
    return;
  }

  const today =
    new Date();

  const tomorrow =
    new Date(today);

  tomorrow.setDate(
    tomorrow.getDate() + 7
  );

  const dateString =
    date => {

      const year =
        date.getFullYear();

      const month =
        String(
          date.getMonth() + 1
        ).padStart(2, '0');

      const day =
        String(
          date.getDate()
        ).padStart(2, '0');

      return `${year}-${month}-${day}`;

    };


  const demoAnnouncements = [

    {
      id: 'ANN-001',

      title:
        'Examination Timetable Released',

      message:
        'The examination timetable has been released. Students are advised to review their examination dates and venues.',

      audience:
        'all students',

      programme:
        '',

      priority:
        'important',

      publishDate:
        dateString(today),

      expiryDate:
        dateString(tomorrow),

      status:
        'published',

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString()

    },

    {
      id: 'ANN-002',

      title:
        'Department Academic Meeting',

      message:
        'A department academic meeting will be held for lecturers and staff. Please check the department schedule for details.',

      audience:
        'lecturers',

      programme:
        '',

      priority:
        'normal',

      publishDate:
        dateString(today),

      expiryDate:
        dateString(tomorrow),

      status:
        'published',

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString()

    }

  ];

  this.saveHODAnnouncements(
    demoAnnouncements
  );

},


/* =========================================================
   PROGRAMME LIST
   ========================================================= */

populateAnnouncementProgrammes() {

  const select =
    document.getElementById(
      'announcementProgrammeInput'
    );

  if (!select) {
    return;
  }

  const students =
    typeof getStudents === 'function'
      ? getStudents()
      : [];

  const programmes = [
    ...new Set(
      students
        .map(student =>
          student.programme ||
          student.program ||
          student.department ||
          ''
        )
        .filter(Boolean)
        .map(value =>
          String(value).trim()
        )
    )
  ].sort();


  select.innerHTML =
    '<option value="">Select Programme</option>';


  programmes.forEach(
    programme => {

      const option =
        document.createElement('option');

      option.value =
        programme;

      option.textContent =
        programme;

      select.appendChild(option);

    }
  );

},


/* =========================================================
   EVENT SETUP
   ========================================================= */

setupAnnouncementEvents() {

  const search =
    document.getElementById(
      'announcementSearch'
    );

  const status =
    document.getElementById(
      'announcementStatusFilter'
    );

  const priority =
    document.getElementById(
      'announcementPriorityFilter'
    );

  const audience =
    document.getElementById(
      'announcementAudienceFilter'
    );

  const programme =
    document.getElementById(
      'announcementAudienceInput'
    );


  if (
    search &&
    !search.dataset.bound
  ) {

    search.addEventListener(
      'input',
      () => this.renderHODAnnouncements()
    );

    search.dataset.bound =
      'true';

  }


  if (
    status &&
    !status.dataset.bound
  ) {

    status.addEventListener(
      'change',
      () => this.renderHODAnnouncements()
    );

    status.dataset.bound =
      'true';

  }


  if (
    priority &&
    !priority.dataset.bound
  ) {

    priority.addEventListener(
      'change',
      () => this.renderHODAnnouncements()
    );

    priority.dataset.bound =
      'true';

  }


  if (
    audience &&
    !audience.dataset.bound
  ) {

    audience.addEventListener(
      'change',
      () => this.renderHODAnnouncements()
    );

    audience.dataset.bound =
      'true';

  }


  if (
    programme &&
    !programme.dataset.bound
  ) {

    programme.addEventListener(
      'change',
      () => {

        const group =
          document.getElementById(
            'announcementProgrammeGroup'
          );

        if (group) {

          group.style.display =
            programme.value ===
            'specific programme'
              ? 'block'
              : 'none';

        }

      }
    );

    programme.dataset.bound =
      'true';

  }

},


/* =========================================================
   ANNOUNCEMENT STATUS
   ========================================================= */

getAnnouncementStatus(announcement) {

  const today =
    new Date();

  today.setHours(
    0, 0, 0, 0
  );


  if (
    announcement.status ===
    'draft'
  ) {

    return 'draft';

  }


  if (
    announcement.publishDate
  ) {

    const publishDate =
      new Date(
        announcement.publishDate
      );

    publishDate.setHours(
      0, 0, 0, 0
    );

    if (
      publishDate > today
    ) {

      return 'scheduled';

    }

  }


  if (
    announcement.expiryDate
  ) {

    const expiryDate =
      new Date(
        announcement.expiryDate
      );

    expiryDate.setHours(
      0, 0, 0, 0
    );

    if (
      expiryDate < today
    ) {

      return 'expired';

    }

  }


  return 'published';

},


/* =========================================================
   RENDER ANNOUNCEMENTS
   ========================================================= */

renderHODAnnouncements() {

  const tableBody =
    document.getElementById(
      'announcementsTableBody'
    );

  if (!tableBody) {
    return;
  }


  let announcements =
    this.getHODAnnouncements();


  const search =
    (
      document.getElementById(
        'announcementSearch'
      )?.value || ''
    )
      .trim()
      .toLowerCase();


  const statusFilter =
    document.getElementById(
      'announcementStatusFilter'
    )?.value || 'all';


  const priorityFilter =
    document.getElementById(
      'announcementPriorityFilter'
    )?.value || 'all';


  const audienceFilter =
    document.getElementById(
      'announcementAudienceFilter'
    )?.value || 'all';


  announcements =
    announcements.map(
      announcement => ({

        ...announcement,

        currentStatus:
          this.getAnnouncementStatus(
            announcement
          )

      })
    );


  /* ==================== FILTER ==================== */

  announcements =
    announcements.filter(
      announcement => {

        const searchable =
          [
            announcement.title,
            announcement.message,
            announcement.audience,
            announcement.programme,
            announcement.priority
          ]
            .join(' ')
            .toLowerCase();


        if (
          search &&
          !searchable.includes(search)
        ) {

          return false;

        }


        if (
          statusFilter !== 'all' &&
          announcement.currentStatus !==
            statusFilter
        ) {

          return false;

        }


        if (
          priorityFilter !== 'all' &&
          announcement.priority !==
            priorityFilter
        ) {

          return false;

        }


        if (
          audienceFilter !== 'all' &&
          announcement.audience !==
            audienceFilter
        ) {

          return false;

        }


        return true;

      }
    );


  /* ==================== SORT ==================== */

  announcements.sort(
    (a, b) => {

      const dateA =
        new Date(
          a.publishDate ||
          a.createdAt ||
          0
        );

      const dateB =
        new Date(
          b.publishDate ||
          b.createdAt ||
          0
        );

      return dateB - dateA;

    }
  );


  /* ==================== TABLE ==================== */

  tableBody.innerHTML =
    announcements
      .map(
        announcement => {

          const title =
            this.escapeAnnouncementHtml(
              announcement.title
            );

          const message =
            this.escapeAnnouncementHtml(
              announcement.message
            );

          const audience =
            this.escapeAnnouncementHtml(
              announcement.audience
            );

          const programme =
            this.escapeAnnouncementHtml(
              announcement.programme || ''
            );


          const priorityClass =
            announcement.priority ===
            'urgent'
              ? 'red'
              : announcement.priority ===
                'important'
                ? 'gold'
                : 'blue';


          const statusClass =
            announcement.currentStatus ===
            'published'
              ? 'green'
              : announcement.currentStatus ===
                'scheduled'
                ? 'teal'
                : announcement.currentStatus ===
                  'expired'
                  ? 'red'
                  : 'gold';


          const audienceText =
            programme
              ? `${audience}<div class="text-xs text-muted">${programme}</div>`
              : audience;


          return `

            <tr>

              <td>

                <div
                  style="
                    display:flex;
                    gap:10px;
                    align-items:flex-start;
                  "
                >

                  <div
                    class="activity-icon-wrap"
                    style="
                      background:rgba(26,58,107,0.08);
                      color:var(--primary);
                      flex-shrink:0;
                    "
                  >
                    <i class="fas fa-bullhorn"></i>
                  </div>

                  <div>

                    <div
                      style="
                        font-weight:700;
                        color:var(--text-primary);
                      "
                    >
                      ${title}
                    </div>

                    <div
                      class="text-xs text-muted"
                      style="
                        margin-top:4px;
                        max-width:320px;
                      "
                    >
                      ${message}
                    </div>

                  </div>

                </div>

              </td>


              <td>
                ${audienceText}
              </td>


              <td>

                <span
                  class="badge badge-${priorityClass}"
                >
                  ${this.capitalizeAnnouncement(
                    announcement.priority
                  )}
                </span>

              </td>


              <td>
                ${announcement.publishDate || '—'}
              </td>


              <td>
                ${announcement.expiryDate || '—'}
              </td>


              <td>

                <span
                  class="badge badge-${statusClass}"
                >
                  ${this.capitalizeAnnouncement(
                    announcement.currentStatus
                  )}
                </span>

              </td>


              <td>

                <div
                  style="
                    display:flex;
                    gap:6px;
                    flex-wrap:wrap;
                  "
                >

                  <button
                    class="btn btn-sm btn-outline"
                    onclick="App.viewAnnouncement('${announcement.id}')"
                    title="View"
                  >
                    <i class="fas fa-eye"></i>
                  </button>


                  <button
                    class="btn btn-sm btn-outline"
                    onclick="App.editAnnouncement('${announcement.id}')"
                    title="Edit"
                  >
                    <i class="fas fa-edit"></i>
                  </button>


                  <button
                    class="btn btn-sm btn-outline"
                    onclick="App.deleteAnnouncement('${announcement.id}')"
                    title="Delete"
                  >
                    <i class="fas fa-trash"></i>
                  </button>

                </div>

              </td>

            </tr>

          `;

        }
      )
      .join('');


  /* ==================== EMPTY STATE ==================== */

  const emptyState =
    document.getElementById(
      'announcementsEmptyState'
    );

  if (emptyState) {

    emptyState.style.display =
      announcements.length
        ? 'none'
        : 'block';

  }


  /* ==================== TABLE COUNT ==================== */

  const tableCount =
    document.getElementById(
      'announcementTableCount'
    );

  if (tableCount) {

    tableCount.textContent =
      `${announcements.length} Record${
        announcements.length === 1
          ? ''
          : 's'
      }`;

  }


  this.updateAnnouncementSummary();

},


/* =========================================================
   SUMMARY CARDS
   ========================================================= */

updateAnnouncementSummary() {

  const announcements =
    this.getHODAnnouncements();


  const statuses =
    announcements.map(
      announcement =>
        this.getAnnouncementStatus(
          announcement
        )
    );


  const total =
    announcements.length;


  const published =
    statuses.filter(
      status =>
        status === 'published'
    ).length;


  const scheduled =
    statuses.filter(
      status =>
        status === 'scheduled'
    ).length;


  const expired =
    statuses.filter(
      status =>
        status === 'expired'
    ).length;


  const totalEl =
    document.getElementById(
      'announcementTotalCount'
    );

  const publishedEl =
    document.getElementById(
      'announcementPublishedCount'
    );

  const scheduledEl =
    document.getElementById(
      'announcementScheduledCount'
    );

  const expiredEl =
    document.getElementById(
      'announcementExpiredCount'
    );


  if (totalEl) {
    totalEl.textContent =
      total;
  }

  if (publishedEl) {
    publishedEl.textContent =
      published;
  }

  if (scheduledEl) {
    scheduledEl.textContent =
      scheduled;
  }

  if (expiredEl) {
    expiredEl.textContent =
      expired;
  }

},


/* =========================================================
   SAVE ANNOUNCEMENT
   ========================================================= */

saveAnnouncement(status = 'published') {

  const title =
    (
      document.getElementById(
        'announcementTitleInput'
      )?.value || ''
    ).trim();


  const message =
    (
      document.getElementById(
        'announcementMessageInput'
      )?.value || ''
    ).trim();


  const audience =
    document.getElementById(
      'announcementAudienceInput'
    )?.value || 'all students';


  const priority =
    document.getElementById(
      'announcementPriorityInput'
    )?.value || 'normal';


  const programme =
    (
      document.getElementById(
        'announcementProgrammeInput'
      )?.value || ''
    ).trim();


  const publishDate =
    document.getElementById(
      'announcementPublishDateInput'
    )?.value || '';


  const expiryDate =
    document.getElementById(
      'announcementExpiryDateInput'
    )?.value || '';


  const editId =
    document.getElementById(
      'announcementEditId'
    )?.value || '';


  /* ==================== VALIDATION ==================== */

  if (!title) {

    this.showToast(
      'Please enter an announcement title.',
      'error'
    );

    return;

  }


  if (!message) {

    this.showToast(
      'Please enter an announcement message.',
      'error'
    );

    return;

  }


  if (
    audience ===
      'specific programme' &&
    !programme
  ) {

    this.showToast(
      'Please select a programme.',
      'error'
    );

    return;

  }


  if (
    publishDate &&
    expiryDate &&
    expiryDate < publishDate
  ) {

    this.showToast(
      'Expiry date cannot be before the publish date.',
      'error'
    );

    return;

  }


  const announcements =
    this.getHODAnnouncements();


  const now =
    new Date().toISOString();


  const record = {

    title,

    message,

    audience,

    programme:
      audience ===
        'specific programme'
        ? programme
        : '',

    priority,

    publishDate,

    expiryDate,

    status,

    updatedAt:
      now

  };


  /* ==================== EDIT ==================== */

  if (editId) {

    const index =
      announcements.findIndex(
        announcement =>
          announcement.id === editId
      );


    if (index !== -1) {

      announcements[index] = {

        ...announcements[index],

        ...record

      };

    }

  }

  /* ==================== CREATE ==================== */

  else {

    announcements.unshift({

      id:
        'ANN-' +
        Date.now(),

      ...record,

      createdAt:
        now

    });

  }


  this.saveHODAnnouncements(
    announcements
  );


  this.closeAnnouncementForm();


  this.renderHODAnnouncements();

  this.refreshHODAnnouncementViews();


  this.showToast(
    status === 'draft'
      ? 'Announcement saved as draft.'
      : 'Announcement published successfully.',
    'success'
  );

},


/* =========================================================
   OPEN EDIT
   ========================================================= */

editAnnouncement(id) {

  const announcement =
    this.getHODAnnouncements()
      .find(
        item =>
          item.id === id
      );


  if (!announcement) {
    return;
  }


  this.openAnnouncementForm(
    announcement
  );

},


/* =========================================================
   VIEW ANNOUNCEMENT
   ========================================================= */

viewAnnouncement(id) {

  const announcements =
    this.getHODAnnouncements();

  const announcement =
    announcements.find(
      item =>
        item.id === id
    );

  if (!announcement) {
    return;
  }

  const existingModal =
    document.getElementById(
      'announcementViewModal'
    );

  if (existingModal) {
    existingModal.remove();
  }

  const status =
    this.getAnnouncementStatus(
      announcement
    );

  const statusClass =
    status === 'published'
      ? 'green'
      : status === 'scheduled'
        ? 'teal'
        : status === 'expired'
          ? 'red'
          : 'gold';

  const priorityClass =
    announcement.priority === 'urgent'
      ? 'red'
      : announcement.priority === 'important'
        ? 'gold'
        : 'blue';

  const audienceText =
    announcement.audience ===
      'specific programme'
      ? `Specific Programme — ${
          announcement.programme || 'Not specified'
        }`
      : this.capitalizeAnnouncement(
          announcement.audience || 'All Students'
        );

  const modal =
    document.createElement('div');

  modal.id =
    'announcementViewModal';

  modal.style.cssText = `
    position:fixed;
    inset:0;
    background:rgba(15,23,42,0.48);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
    z-index:10040;
  `;

  modal.innerHTML = `

    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcementViewTitle"
      style="
        width:100%;
        max-width:720px;
        max-height:90vh;
        overflow:auto;
        background:#fff;
        border-radius:18px;
        box-shadow:0 20px 60px rgba(15,23,42,0.22);
      "
    >

      <!-- HEADER -->

      <div
        style="
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:18px;
          padding:24px 26px 18px;
          border-bottom:1px solid #eef1f5;
        "
      >

        <div style="display:flex; gap:14px; align-items:flex-start;">

          <div
            style="
              width:48px;
              height:48px;
              flex-shrink:0;
              border-radius:14px;
              display:flex;
              align-items:center;
              justify-content:center;
              background:rgba(26,58,107,0.08);
              color:var(--primary);
              font-size:20px;
            "
          >
            <i class="fas fa-bullhorn"></i>
          </div>

          <div>

            <div
              class="text-xs text-muted"
              style="
                margin-bottom:5px;
                font-weight:700;
                text-transform:uppercase;
                letter-spacing:.04em;
              "
            >
              Department Announcement
            </div>

            <h3
              id="announcementViewTitle"
              style="
                margin:0;
                font-size:1.25rem;
                line-height:1.35;
                color:var(--text-primary);
                font-weight:800;
              "
            >
              ${this.escapeAnnouncementHtml(
                announcement.title
              )}
            </h3>

          </div>

        </div>

        <button
          type="button"
          id="announcementViewCloseTop"
          aria-label="Close"
          style="
            width:36px;
            height:36px;
            flex-shrink:0;
            border:1px solid #e2e8f0;
            background:#f8fafc;
            border-radius:50%;
            cursor:pointer;
            font-size:18px;
            color:#475569;
            display:flex;
            align-items:center;
            justify-content:center;
          "
        >
          &times;
        </button>

      </div>


      <!-- BODY -->

      <div style="padding:24px 26px;">

        <!-- BADGES -->

        <div
          style="
            display:flex;
            gap:8px;
            flex-wrap:wrap;
            margin-bottom:22px;
          "
        >

          <span class="badge badge-${priorityClass}">
            <i class="fas fa-flag"></i>
            ${this.capitalizeAnnouncement(
              announcement.priority || 'normal'
            )}
          </span>

          <span class="badge badge-${statusClass}">
            <i class="fas fa-circle"></i>
            ${this.capitalizeAnnouncement(status)}
          </span>

        </div>


        <!-- MESSAGE -->

        <div
          style="
            padding:18px;
            border:1px solid #e8edf3;
            border-radius:12px;
            background:#fafbfc;
          "
        >

          <div
            class="text-xs text-muted"
            style="
              font-weight:800;
              text-transform:uppercase;
              letter-spacing:.04em;
              margin-bottom:8px;
            "
          >
            Message
          </div>

          <div
            style="
              color:var(--text-primary);
              font-size:.94rem;
              line-height:1.7;
              white-space:pre-wrap;
            "
          >
            ${this.escapeAnnouncementHtml(
              announcement.message
            )}
          </div>

        </div>


        <!-- INFORMATION GRID -->

        <div
          style="
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:14px;
            margin-top:18px;
          "
        >

          <div
            style="
              padding:15px;
              border:1px solid #e8edf3;
              border-radius:12px;
            "
          >

            <div
              class="text-xs text-muted"
              style="font-weight:700; margin-bottom:6px;"
            >
              Audience
            </div>

            <div
              style="
                font-weight:700;
                color:var(--text-primary);
              "
            >
              ${this.escapeAnnouncementHtml(
                audienceText
              )}
            </div>

          </div>


          <div
            style="
              padding:15px;
              border:1px solid #e8edf3;
              border-radius:12px;
            "
          >

            <div
              class="text-xs text-muted"
              style="font-weight:700; margin-bottom:6px;"
            >
              Publish Date
            </div>

            <div
              style="
                font-weight:700;
                color:var(--text-primary);
              "
            >
              ${announcement.publishDate || 'Not specified'}
            </div>

          </div>


          <div
            style="
              padding:15px;
              border:1px solid #e8edf3;
              border-radius:12px;
            "
          >

            <div
              class="text-xs text-muted"
              style="font-weight:700; margin-bottom:6px;"
            >
              Expiry Date
            </div>

            <div
              style="
                font-weight:700;
                color:var(--text-primary);
              "
            >
              ${announcement.expiryDate || 'No expiry date'}
            </div>

          </div>


          <div
            style="
              padding:15px;
              border:1px solid #e8edf3;
              border-radius:12px;
            "
          >

            <div
              class="text-xs text-muted"
              style="font-weight:700; margin-bottom:6px;"
            >
              Announcement ID
            </div>

            <div
              style="
                font-weight:700;
                color:var(--text-primary);
              "
            >
              ${this.escapeAnnouncementHtml(
                announcement.id
              )}
            </div>

          </div>

        </div>

      </div>


      <!-- FOOTER -->

      <div
        style="
          display:flex;
          justify-content:flex-end;
          gap:10px;
          padding:18px 26px;
          border-top:1px solid #eef1f5;
        "
      >

        <button
          type="button"
          class="btn btn-outline"
          id="announcementViewCloseBtn"
        >
          <i class="fas fa-times"></i>
          Close
        </button>

        <button
          type="button"
          class="btn btn-primary"
          id="announcementViewEditBtn"
        >
          <i class="fas fa-edit"></i>
          Edit Announcement
        </button>

      </div>

    </div>

  `;

  document.body.appendChild(modal);


  /* =====================================================
     CLOSE
     ===================================================== */

  const closeModal = () => {
    modal.remove();
  };


  document
    .getElementById(
      'announcementViewCloseTop'
    )
    ?.addEventListener(
      'click',
      closeModal
    );


  document
    .getElementById(
      'announcementViewCloseBtn'
    )
    ?.addEventListener(
      'click',
      closeModal
    );


  document
    .getElementById(
      'announcementViewEditBtn'
    )
    ?.addEventListener(
      'click',
      () => {

        closeModal();

        this.editAnnouncement(
          announcement.id
        );

      }
    );


  /* =====================================================
     CLICK OUTSIDE
     ===================================================== */

  modal.addEventListener(
    'click',
    event => {

      if (
        event.target === modal
      ) {

        closeModal();

      }

    }
  );


  /* =====================================================
     ESC KEY
     ===================================================== */

  const handleEscape =
    event => {

      if (
        event.key === 'Escape'
      ) {

        closeModal();

        document.removeEventListener(
          'keydown',
          handleEscape
        );

      }

    };

  document.addEventListener(
    'keydown',
    handleEscape
  );

},


/* =========================================================
   DELETE ANNOUNCEMENT
   ========================================================= */

deleteAnnouncement(id) {

  const announcements =
    this.getHODAnnouncements();

  const announcement =
    announcements.find(
      item =>
        item.id === id
    );

  if (!announcement) {
    return;
  }


  /* =====================================================
     CREATE PROFESSIONAL CONFIRMATION MODAL
     ===================================================== */

  const existingModal =
    document.getElementById(
      'announcementDeleteConfirmModal'
    );

  if (existingModal) {
    existingModal.remove();
  }


  const modal =
    document.createElement('div');

  modal.id =
    'announcementDeleteConfirmModal';

  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.48);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 10050;
  `;


  modal.innerHTML = `

    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcementDeleteTitle"
      style="
        width: 100%;
        max-width: 460px;
        background: #ffffff;
        border-radius: 18px;
        box-shadow: 0 20px 60px rgba(15,23,42,0.22);
        overflow: hidden;
        animation: announcementDeleteModalIn 0.18s ease-out;
      "
    >

      <!-- ================= HEADER ================= -->

      <div
        style="
          padding: 24px 24px 16px;
          display:flex;
          align-items:flex-start;
          gap:16px;
        "
      >

        <div
          style="
            width:48px;
            height:48px;
            flex-shrink:0;
            border-radius:50%;
            background:rgba(220,38,38,0.10);
            color:#dc2626;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:20px;
          "
        >
          <i class="fas fa-trash-alt"></i>
        </div>

        <div style="flex:1;">

          <h3
            id="announcementDeleteTitle"
            style="
              margin:0;
              font-size:1.15rem;
              font-weight:800;
              color:var(--text-primary);
            "
          >
            Delete Announcement?
          </h3>

          <p
            style="
              margin:8px 0 0;
              font-size:0.9rem;
              line-height:1.55;
              color:var(--text-secondary);
            "
          >
            Are you sure you want to delete
            <strong>
              ${this.escapeAnnouncementHtml(
                announcement.title
              )}
            </strong>?
          </p>

        </div>

      </div>


      <!-- ================= WARNING ================= -->

      <div
        style="
          margin:0 24px;
          padding:12px 14px;
          border-radius:10px;
          background:rgba(220,38,38,0.06);
          border:1px solid rgba(220,38,38,0.12);
          color:#991b1b;
          font-size:0.82rem;
          line-height:1.5;
        "
      >
        <i
          class="fas fa-circle-exclamation"
          style="margin-right:6px;"
        ></i>

        This action cannot be undone.
        The announcement will be permanently removed.
      </div>


      <!-- ================= FOOTER ================= -->

      <div
        style="
          display:flex;
          justify-content:flex-end;
          align-items:center;
          gap:10px;
          padding:22px 24px;
          margin-top:4px;
          border-top:1px solid #eef1f5;
        "
      >

        <button
          type="button"
          class="btn btn-outline"
          id="announcementDeleteCancelBtn"
        >
          <i class="fas fa-times"></i>
          Cancel
        </button>

        <button
          type="button"
          class="btn btn-danger"
          id="announcementDeleteConfirmBtn"
        >
          <i class="fas fa-trash"></i>
          Delete Announcement
        </button>

      </div>

    </div>

  `;


  document.body.appendChild(modal);


  /* =====================================================
     MODAL BUTTONS
     ===================================================== */

  const cancelButton =
    document.getElementById(
      'announcementDeleteCancelBtn'
    );

  const confirmButton =
    document.getElementById(
      'announcementDeleteConfirmBtn'
    );


  const closeModal = () => {

    modal.remove();

  };


  if (cancelButton) {

    cancelButton.addEventListener(
      'click',
      closeModal
    );

  }


  if (confirmButton) {

    confirmButton.addEventListener(
      'click',
      () => {

        const updated =
          announcements.filter(
            item =>
              item.id !== id
          );

        this.saveHODAnnouncements(
          updated
        );

        this.renderHODAnnouncements();

        this.refreshHODAnnouncementViews();

        closeModal();

        this.showToast(
          'Announcement deleted successfully.',
          'success'
        );

      }
    );

  }


  /* =====================================================
     CLOSE WHEN CLICKING OUTSIDE
     ===================================================== */

  modal.addEventListener(
    'click',
    event => {

      if (
        event.target === modal
      ) {

        closeModal();

      }

    }
  );


  /* =====================================================
     ESC KEY
     ===================================================== */

  const handleEscape =
    event => {

      if (
        event.key === 'Escape'
      ) {

        closeModal();

        document.removeEventListener(
          'keydown',
          handleEscape
        );

      }

    };

  document.addEventListener(
    'keydown',
    handleEscape
  );


  /* =====================================================
     FOCUS DELETE BUTTON
     ===================================================== */

  setTimeout(() => {

    confirmButton?.focus();

  }, 50);

},


/* =========================================================
   OPEN FORM
   ========================================================= */

openAnnouncementForm(
  announcement = null,
  urgent = false
) {

  const modal =
    document.getElementById(
      'deptAnnouncementModal'
    );


  if (!modal) {
    return;
  }


  const title =
    document.getElementById(
      'announcementTitleInput'
    );

  const message =
    document.getElementById(
      'announcementMessageInput'
    );

  const audience =
    document.getElementById(
      'announcementAudienceInput'
    );

  const priority =
    document.getElementById(
      'announcementPriorityInput'
    );

  const programme =
    document.getElementById(
      'announcementProgrammeInput'
    );

  const publishDate =
    document.getElementById(
      'announcementPublishDateInput'
    );

  const expiryDate =
    document.getElementById(
      'announcementExpiryDateInput'
    );

  const editId =
    document.getElementById(
      'announcementEditId'
    );

  const modalTitle =
    document.getElementById(
      'deptAnnouncementModalTitle'
    );

  const programmeGroup =
    document.getElementById(
      'announcementProgrammeGroup'
    );


  /* ==================== RESET ==================== */

  if (!announcement) {

    if (modalTitle) {
      modalTitle.textContent =
        urgent
          ? 'Send Urgent Announcement'
          : 'Add Announcement';
    }

    if (editId) {
      editId.value = '';
    }

    if (title) {
      title.value = '';
    }

    if (message) {
      message.value = '';
    }

    if (audience) {
      audience.value =
        'all students';
    }

    if (priority) {
      priority.value =
        urgent
          ? 'urgent'
          : 'normal';
    }

    if (programme) {
      programme.value = '';
    }

    if (publishDate) {

      const today =
        new Date();

      publishDate.value =
        this.formatAnnouncementDate(
          today
        );

    }

    if (expiryDate) {
      expiryDate.value = '';
    }

  }

  /* ==================== EDIT ==================== */

  else {

    if (modalTitle) {
      modalTitle.textContent =
        'Edit Announcement';
    }

    if (editId) {
      editId.value =
        announcement.id;
    }

    if (title) {
      title.value =
        announcement.title || '';
    }

    if (message) {
      message.value =
        announcement.message || '';
    }

    if (audience) {
      audience.value =
        announcement.audience ||
        'all students';
    }

    if (priority) {
      priority.value =
        announcement.priority ||
        'normal';
    }

    if (programme) {
      programme.value =
        announcement.programme ||
        '';
    }

    if (publishDate) {
      publishDate.value =
        announcement.publishDate ||
        '';
    }

    if (expiryDate) {
      expiryDate.value =
        announcement.expiryDate ||
        '';
    }

  }


  if (programmeGroup) {

    programmeGroup.style.display =
      audience?.value ===
        'specific programme'
        ? 'block'
        : 'none';

  }


  modal.style.display =
    'flex';


  const modalContent =
    modal.querySelector(
      '.modal-content'
    );


  if (modalContent) {
    modalContent.scrollTop = 0;
  }


  title?.focus();

},


/* =========================================================
   CLOSE FORM
   ========================================================= */

closeAnnouncementForm() {

  const modal =
    document.getElementById(
      'deptAnnouncementModal'
    );


  if (modal) {
    modal.style.display =
      'none';
  }

},


/* =========================================================
   RESET FILTERS
   ========================================================= */

resetAnnouncementFilters() {

  const search =
    document.getElementById(
      'announcementSearch'
    );

  const status =
    document.getElementById(
      'announcementStatusFilter'
    );

  const priority =
    document.getElementById(
      'announcementPriorityFilter'
    );

  const audience =
    document.getElementById(
      'announcementAudienceFilter'
    );


  if (search) {
    search.value = '';
  }

  if (status) {
    status.value = 'all';
  }

  if (priority) {
    priority.value = 'all';
  }

  if (audience) {
    audience.value = 'all';
  }


  this.renderHODAnnouncements();

},


/* =========================================================
   REFRESH ALL ANNOUNCEMENT VIEWS
   ========================================================= */

refreshHODAnnouncementViews() {

  // HoD Dashboard
  this.renderDashboardAnnouncements();


  // Notification panel
  this.renderAnnouncementNotifications();


  // Student / Lecturer audience announcements
  this.refreshAudienceAnnouncements();


  // HoD Department page
  if (
    typeof this.renderHODDepartmentCommunication ===
    'function'
  ) {

    this.renderHODDepartmentCommunication();

  }

},


/* =========================================================
   DASHBOARD ANNOUNCEMENTS
   ========================================================= */

renderDashboardAnnouncements() {

  const container =
    document.getElementById(
      'announcementsContainer'
    );


  if (!container) {
    return;
  }


  const announcements =
    this.getHODAnnouncements()
      .filter(
        announcement =>
          this.getAnnouncementStatus(
            announcement
          ) === 'published'
      )
      .sort(
        (a, b) =>
          new Date(
            b.publishDate ||
            b.createdAt ||
            0
          ) -
          new Date(
            a.publishDate ||
            a.createdAt ||
            0
          )
      )
      .slice(0, 2);


  if (!announcements.length) {

    container.innerHTML = `

      <div
        class="activity-item"
        style="
          border-bottom:none;
          padding:10px 0;
        "
      >

        <div
          class="activity-icon-wrap"
          style="
            background:rgba(26,58,107,0.08);
            color:var(--primary);
          "
        >
          <i class="fas fa-bullhorn"></i>
        </div>

        <div class="activity-text">
          No active announcements.
        </div>

      </div>

    `;

    return;

  }


  container.innerHTML =
    announcements
      .map(
        announcement => {

          const title =
            this.escapeAnnouncementHtml(
              announcement.title
            );


          return `

            <div
              class="activity-item"
              style="
                border-bottom:none;
                padding:10px 0;
              "
            >

              <div
                class="activity-icon-wrap"
                style="
                  background:rgba(26,58,107,0.08);
                  color:var(--primary);
                "
              >
                <i class="fas fa-bullhorn"></i>
              </div>

              <div class="activity-text">

                <div
                  style="
                    font-weight:700;
                  "
                >
                  ${title}
                </div>

                <div
                  class="activity-time mt-8"
                >
                  ${this.capitalizeAnnouncement(
                    announcement.priority
                  )}
                  ·
                  ${announcement.publishDate || 'Recently'}
                </div>

              </div>

            </div>

          `;

        }
      )
      .join('');

},


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

renderAnnouncementNotifications() {

  const panel =
    document.getElementById(
      'notifPanel'
    );


  if (!panel) {
    return;
  }


  const announcements =
    this.getHODAnnouncements()
      .filter(
        announcement =>
          this.getAnnouncementStatus(
            announcement
          ) === 'published'
      )
      .sort(
        (a, b) =>
          new Date(
            b.publishDate ||
            b.createdAt ||
            0
          ) -
          new Date(
            a.publishDate ||
            a.createdAt ||
            0
          )
      )
      .slice(0, 3);


  const items =
    panel.querySelectorAll(
      '.notif-item'
    );


  /*
   * Keep the existing notification
   * panel structure but replace
   * the first announcement-related
   * items when possible.
   */

  announcements.forEach(
    (announcement, index) => {

      const item =
        items[index];

      if (!item) {
        return;
      }


      const text =
        item.querySelector(
          '.notif-text'
        );


      const time =
        item.querySelector(
          '.notif-time'
        );


      if (text) {

        text.innerHTML =
          `<strong>${this.escapeAnnouncementHtml(
            announcement.title
          )}</strong>`;

      }


      if (time) {

        time.textContent =
          announcement.publishDate ||
          'Recently';

      }

    }
  );

},


/* =========================================================
   DASHBOARD + NOTIFICATION REFRESH
   ========================================================= */

refreshAnnouncementsFromCurrentData() {

  this.renderHODAnnouncements();

  this.renderDashboardAnnouncements();

  this.renderAnnouncementNotifications();

},


/* =========================================================
   DATE HELPER
   ========================================================= */

formatAnnouncementDate(date) {

  if (!date) {
    return '';
  }


  const year =
    date.getFullYear();

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, '0');

  const day =
    String(
      date.getDate()
    ).padStart(2, '0');


  return `${year}-${month}-${day}`;

},


/* =========================================================
   HTML ESCAPE
   ========================================================= */

escapeAnnouncementHtml(value) {

  const div =
    document.createElement(
      'div'
    );

  div.textContent =
    value == null
      ? ''
      : String(value);

  return div.innerHTML;

},


/* =========================================================
   CAPITALIZE
   ========================================================= */

capitalizeAnnouncement(value) {

  if (!value) {
    return '';
  }

  return String(value)
    .charAt(0)
    .toUpperCase() +
    String(value)
      .slice(1);

},



};



let currentReturnRow = null;

function viewFile(fileName) {
  window.open(fileName, '_blank'); // open submitted file
}






function approveResults(button) {

  const row = button.closest('tr');

  if (!row) return;

  const id =
    row.dataset.id ||
    row.cells[1].textContent.trim();

  const course =
    row.cells[2].textContent.trim();

  const lecturer =
    row.cells[3].textContent.trim();

  const programme =
    row.cells[4].textContent.trim();

  const students =
    row.cells[5].textContent.trim();

  const submittedDate =
    row.cells[6].textContent.trim();

  const fileUrl =
    row.cells[7].textContent.trim();

  // Get existing approved results
  const approvedResults =
    JSON.parse(
      localStorage.getItem("approvedResults") || "[]"
    );

  // Prevent duplicate approval
  const alreadyApproved =
    approvedResults.some(result => result.id === id);

  if (alreadyApproved) {
    App.showToast(
      `Submission ${id} is already approved.`,
      'warning'
    );
    return;
  }

  // Create approved result
  const approvedResult = {
    id: id,
    course: course,
    lecturer: lecturer,
    programme: programme,
    students: students,
    submittedDate: submittedDate,
    fileUrl: fileUrl,
    approvedDate: new Date().toLocaleString(),
  };

  // Add to Approved Results Ready for Publication
  approvedResults.push(approvedResult);

  localStorage.setItem(
    "approvedResults",
    JSON.stringify(approvedResults)
  );

  // Show confirmation
  App.showToast(
    `Marks approved for ${id} and moved to publication queue.`,
    'success'
  );


  logActivity(
  id,
  lecturer,
  course,
  'Approved',
  ''
);

  // Remove from pending table
  row.remove();

  // Update pending count
  const pendingCount =
    parseInt(
      document.getElementById("resPendingCount").textContent
    ) || 0;

  document.getElementById("resPendingCount").textContent =
    pendingCount > 0 ? pendingCount - 1 : 0;

  // Refresh approved queue
  renderApprovedResults();
  updatePassRate();

  if (typeof App !== 'undefined' && App.refreshReportsFromCurrentData) {
  App.refreshReportsFromCurrentData();
}
}





function publishResult(id) {

  const approvedResults =
    JSON.parse(
      localStorage.getItem("approvedResults") || "[]"
    );

  const resultIndex =
    approvedResults.findIndex(
      result => result.id === id
    );

  if (resultIndex === -1) {

    App.showToast(
      `Approved result ${id} not found.`,
      'error'
    );

    return;
  }

  const result =
    approvedResults[resultIndex];

  // ==========================================
  // PUBLICATION
  // ==========================================

  App.showToast(
    `Results ${id} published successfully.`,
    'success'
  );

  // Log publication
  logActivity(
    result.id,
    result.lecturer,
    result.course,
    'Published',
    ''
  );

  // ==========================================
  // REMOVE FROM APPROVED QUEUE
  // ==========================================

  approvedResults.splice(resultIndex, 1);

  localStorage.setItem(
    "approvedResults",
    JSON.stringify(approvedResults)
  );

  // ==========================================
  // UPDATE PUBLISHED COUNT
  // Published count is session-only.
  // It resets to 0 after page refresh.
  // ==========================================

  const publishedEl =
    document.getElementById("resPublishedCount");

  if (publishedEl) {

    const currentPublished =
      parseInt(publishedEl.textContent) || 0;

    publishedEl.textContent =
      currentPublished + 1;
  }

  // ==========================================
  // REFRESH APPROVED RESULTS TABLE
  // ==========================================

  renderApprovedResults();

  // Update pass rate
  updatePassRate();

  // Refresh Reports
if (typeof App !== 'undefined' && App.refreshReportsFromCurrentData) {
  App.refreshReportsFromCurrentData();
}
}





function renderApprovedResults() {

  const tbody = document.getElementById("approvedResultsTbody");

  if (!tbody) return;

  const approvedResults =
    JSON.parse(
      localStorage.getItem("approvedResults") || "[]"
    );

  tbody.innerHTML = approvedResults.map(result => `

    <tr data-id="${result.id}">

      <!-- Submission ID -->
      <td>
        ${result.id}
      </td>

      <!-- Course -->
      <td>
        ${result.course}
      </td>

      <!-- Lecturer -->
      <td>
        ${result.lecturer}
      </td>

      <!-- Programme -->
      <td>
        ${result.programme}
      </td>

      <!-- Students -->
      <td>
        ${result.students}
      </td>

      <!-- Approved Date -->
      <td>
        ${result.approvedDate}
      </td>

      <!-- File -->
      <td>
        <span class="badge">
          ${result.fileUrl}
        </span>
      </td>

      <!-- Action -->
      <td style="text-align:center;">

        <button
          class="btn btn-sm btn-success"
          onclick="publishResult('${result.id}')"
          style="width:100px">

          <i class="fas fa-upload"></i>
          Publish

        </button>

      </td>

    </tr>

  `).join('');

  // Update Approved Results Ready for Publication count
  const approvedCount =
    document.getElementById("resApprovedCount");

  if (approvedCount) {
    approvedCount.textContent =
      approvedResults.length;
  }
}





function submitReturn() {
  const comment = document.getElementById('returnComment').value.trim();

  if (!currentReturnRow) {
    App.showToast('No submission selected.', 'warning');
    return;
  }

  if (!comment) {
    App.showToast('Please enter a comment.', 'warning');
    return;
  }

  const id =
    currentReturnRow.dataset.id ||
    currentReturnRow.cells[1].textContent.trim();

  const course =
    currentReturnRow.cells[2].textContent.trim();

  const lecturer =
    currentReturnRow.cells[3].textContent.trim();

  // Log the returned submission
  logActivity(
    id,
    lecturer,
    course,
    'Returned',
    comment
  );

  // Remove from pending submissions
  currentReturnRow.remove();

  // Update summary cards
  const pendingEl = document.getElementById('resPendingCount');
  const returnedEl = document.getElementById('resReturnedCount');

  const pendingCount =
    parseInt(pendingEl?.textContent) || 0;

  const returnedCount =
    parseInt(returnedEl?.textContent) || 0;

  if (pendingEl) {
    pendingEl.textContent =
      pendingCount > 0 ? pendingCount - 1 : 0;
  }

  if (returnedEl) {
    returnedEl.textContent = returnedCount + 1;
  }

  updatePassRate();

if (typeof App !== 'undefined' && App.refreshReportsFromCurrentData) {
  App.refreshReportsFromCurrentData();
}

App.showToast(
  `Results for ${id} returned to ${lecturer}.`,
  'info'
);

closeReturnForm();
}



function updatePassRate() {
  const approved =
    parseInt(document.getElementById("resApprovedCount").textContent) || 0;

  const returned =
    parseInt(document.getElementById("resReturnedCount").textContent) || 0;

  // Only approved and returned submissions are evaluated.
  const evaluated = approved + returned;

  const passRate =
    evaluated > 0
      ? Math.round((approved / evaluated) * 100)
      : 0;

  document.getElementById("resAvgPassRate").textContent =
    passRate + "%";
}






function openReturnForm(button) {
  currentReturnRow = button.closest('tr');

  if (!currentReturnRow) {
    App.showToast('Unable to identify the selected submission.', 'error');
    return;
  }

  const id =
    currentReturnRow.dataset.id ||
    currentReturnRow.cells[1].textContent.trim();

  // Store that this is an individual return
  window.singleReturnMode = true;

  // Show the existing bulk confirmation modal
  const message = document.getElementById('bulkReturnMessage');

  if (message) {
    message.textContent =
      `Are you sure you want to return submission ${id}?`;
  }

  const modal = document.getElementById('bulkReturnConfirmModal');

  if (modal) {
    modal.style.display = 'flex';
  }
}





function logActivity(id, lecturer, course, action, comment) {
  const tbody = document.getElementById('resultsActivityLog');
  if (!tbody) return;

  const time = new Date().toLocaleString();

  let badgeClass = '';

  if (action === 'Approved') {

  badgeClass = 'badge badge-approved';

} else if (action === 'Returned') {

  badgeClass = 'badge badge-returned';

} else if (action === 'Published') {

  badgeClass = 'badge badge-published';

} else {

  badgeClass = 'badge badge-gray';

}

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${id}</td>
    <td>${lecturer || '—'}</td>
    <td>${course || '—'}</td>
    <td>
      <span class="${badgeClass}">
        ${action}
      </span>
    </td>
    <td>${comment || ''}</td>
    <td>${time}</td>
  `;

  // Highlight new entry
  row.classList.remove('activity-highlight');
  void row.offsetWidth;
  row.classList.add('activity-highlight');

  tbody.appendChild(row);

  // Keep only the latest 20 entries
  if (tbody.rows.length > 20) {
    tbody.deleteRow(0);
  }

  // Update summary footer
  const approvedCount =
  tbody.querySelectorAll('.badge-approved').length;

const returnedCount =
  tbody.querySelectorAll('.badge-returned').length;

const publishedCount =
  tbody.querySelectorAll('.badge-published').length;

const totalCount =
  tbody.rows.length;

document.getElementById(
  'logApprovedCount'
).textContent = approvedCount;

document.getElementById(
  'logReturnedCount'
).textContent = returnedCount;

document.getElementById(
  'logPublishedCount'
).textContent = publishedCount;

document.getElementById(
  'logTotalCount'
).textContent = totalCount;
}


// === Results Data Source ===
function getResultsSubmissions() {
  return [
    { id: "RES-001", course: "BIT201 — Database Systems", lecturer: "Dr. Jean Habimana", programme: "BIT Year 2", students: 42, submittedDate: "2026-08-19", fileUrl: "BIT201_Results.xlsx", status: "Pending" },
    { id: "RES-002", course: "BIT203 — Web Development", lecturer: "Dr. Alice Niyonsaba", programme: "BIT Year 2", students: 38, submittedDate: "2026-08-18", fileUrl: "BIT203_Results.xlsx", status: "Pending" },
    { id: "RES-003", course: "ACC201 — Financial Accounting II", lecturer: "Mr. David Uwimana", programme: "Accounting Year 2", students: 45, submittedDate: "2026-08-17", fileUrl: "ACC201_Results.xlsx", status: "Pending" },
    { id: "RES-004", course: "MGT201 — Principles of Management", lecturer: "Dr. Patrick Mugisha", programme: "Management Year 2", students: 40, submittedDate: "2026-08-16", fileUrl: "MGT201_Results.xlsx", status: "Pending" },
    { id: "RES-005", course: "BIT205 — Computer Networks", lecturer: "Prof. David Uwimana", programme: "BIT Year 3", students: 36, submittedDate: "2026-08-15", fileUrl: "BIT205_Results.xlsx", status: "Pending" },
    { id: "RES-006", course: "LAW101 — Introduction to Law", lecturer: "Dr. Marie Uwase", programme: "Law Year 1", students: 52, submittedDate: "2026-08-14", fileUrl: "LAW101_Results.xlsx", status: "Pending" }
  ];
}



// ===== Results Approval Utilities =====
const HODResults = {

  toggleAll(master) {

    const checkboxes = document.querySelectorAll(
      '#hodResultsTbody .submission-checkbox'
    );

    checkboxes.forEach(cb => {
      cb.checked = master.checked;
    });
  },

  syncMasterCheckbox() {

    const master =
      document.getElementById('selectAllResults');

    const checkboxes =
      document.querySelectorAll(
        '#hodResultsTbody .submission-checkbox'
      );

    if (!master || !checkboxes.length) {
      return;
    }

    const checkedCount =
      document.querySelectorAll(
        '#hodResultsTbody .submission-checkbox:checked'
      ).length;

    master.checked =
      checkedCount === checkboxes.length;

    master.indeterminate =
      checkedCount > 0 &&
      checkedCount < checkboxes.length;
  },

  search(query) {

    const rows =
      document.querySelectorAll(
        '#hodResultsTbody tr'
      );

    rows.forEach(row => {

      row.style.display =
        row.textContent
          .toLowerCase()
          .includes(query.toLowerCase())
          ? ''
          : 'none';

    });

    this.syncMasterCheckbox();
  }
};


// Make it available to HTML onchange=""
window.HODResults = HODResults;


// Synchronize Select All when individual checkbox changes
document.addEventListener('change', function (e) {

  if (
    e.target.classList.contains('submission-checkbox')
  ) {
    HODResults.syncMasterCheckbox();
  }

});


// IMPORTANT:
// Make HODResults accessible to inline HTML events
window.HODResults = HODResults;


// Automatically synchronize "Select All"
// when an individual checkbox is changed
document.addEventListener('change', function (e) {

  if (
    e.target.classList.contains('submission-checkbox')
  ) {
    HODResults.syncMasterCheckbox();
  }

});

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

// Load app-data.js functions first
if (typeof getCurrentUser === 'undefined') {
  const script = document.createElement('script');
  script.src = 'app-data.js';
  script.onload = () => initApp();
  document.head.appendChild(script);
} else {
  initApp();
}

function initApp() {
  document.addEventListener('DOMContentLoaded', () => App.init());
}

// ---- Global helpers exposed ----
window.App = App;
window.openModal = (id) => App.openModal(id);
window.closeModal = (id) => App.closeModal(id);
window.switchTab = (g, t) => App.switchTab(g, t);
window.confirmDelete = (n) => App.confirmDelete(n);
window.filterTable = (i, t) => App.filterTable(i, t);
window.goto = (p) => App.goto(p);
window.showToast = (m, t) => App.showToast(m, t);

// Profile/Settings handlers - Fixed (no alerts/toasts)
window.showProfile = () => App.showProfile();
window.showSettings = () => App.showSettings();

// Logout: single source of truth to avoid conflicts across pages.
window.logout = () => App.logout();
