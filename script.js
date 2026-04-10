// ==================== SHARED DATA ====================
const examsData = [
    { id: 1, name: "UPSC Civil Services", level: "central", statePrefix: "all", posts: 150, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-01-15", admitCardLink: "https://upsconline.nic.in", examStartDate: "2024-05-26", examEndDate: "2024-05-26", cutoffMarks: "Gen: 87.54, OBC: 84.85", ranks: "Top 100 ➔ IAS", officialLink: "https://www.upsc.gov.in", searchTerms: ["upsc", "civil services", "ias", "ips"] },
    { id: 2, name: "SSC CHSL", level: "central", statePrefix: "all", posts: 3500, eligibility: "12th Pass", salary: "₹18,000 - ₹56,100", notification: "2024-02-01", admitCardLink: "https://ssc.nic.in", examStartDate: "2024-06-01", examEndDate: "2024-06-12", cutoffMarks: "Gen: 157.7, SC: 135.4", ranks: "Top 10% ➔ LDC/JSA", officialLink: "https://ssc.nic.in", searchTerms: ["ssc", "chsl", "combined higher secondary"] },
    { id: 3, name: "RRB NTPC", level: "central", statePrefix: "all", posts: 35000, eligibility: "12th Pass", salary: "₹19,900 - ₹35,400", notification: "2024-01-20", admitCardLink: "https://www.rrbcdg.gov.in", examStartDate: "2024-07-15", examEndDate: "2024-08-10", cutoffMarks: "Gen: 82.5, ST: 65.2", ranks: "Top 500 ➔ Station Master", officialLink: "https://www.rrbcdg.gov.in", searchTerms: ["rrb", "ntpc", "railways"] },

    { id: 4, name: "APPSC Group 1", level: "state", statePrefix: "AP", posts: 800, eligibility: "Graduate", salary: "₹54,000 - ₹1,42,400", notification: "2024-03-10", admitCardLink: "https://psc.ap.gov.in", examStartDate: "2024-06-20", examEndDate: "2024-06-25", cutoffMarks: "Gen: 90.00", ranks: "Top 50 ➔ Deputy Collector", officialLink: "https://psc.ap.gov.in", searchTerms: ["psc", "state", "ap"] },
    { id: 5, name: "Arunachal Police SI", level: "state", statePrefix: "AR", posts: 300, eligibility: "Graduate", salary: "₹35,400 - ₹1,12,400", notification: "2024-04-10", admitCardLink: "https://arunachalpol.nic.in", examStartDate: "2024-08-15", examEndDate: "2024-08-16", cutoffMarks: "Gen: 120.5", ranks: "Top 50 ➔ Sub Inspector", officialLink: "https://arunachalpol.nic.in", searchTerms: ["arunachal", "state", "police"] },
    { id: 6, name: "Assam Secretariat Asst", level: "state", statePrefix: "AS", posts: 500, eligibility: "Graduate", salary: "₹22,000 - ₹87,000", notification: "2024-02-15", admitCardLink: "https://assam.gov.in", examStartDate: "2024-07-10", examEndDate: "2024-07-10", cutoffMarks: "Gen: 65.0", ranks: "Merit List", officialLink: "https://assam.gov.in", searchTerms: ["assam", "state", "secretariat"] },
    { id: 7, name: "BPSC Exam", level: "state", statePrefix: "BR", posts: 1500, eligibility: "Graduate", salary: "₹53,100 - ₹1,67,800", notification: "2024-01-10", admitCardLink: "https://bpsc.bih.nic.in", examStartDate: "2024-09-30", examEndDate: "2024-09-30", cutoffMarks: "Gen: 91.0", ranks: "Top 100 ➔ SDM", officialLink: "https://bpsc.bih.nic.in", searchTerms: ["bpsc", "state", "bihar"] },
    { id: 8, name: "CGPSC State Service", level: "state", statePrefix: "CG", posts: 600, eligibility: "Graduate", salary: "₹56,100 - ₹1,44,200", notification: "2024-04-05", admitCardLink: "https://psc.cg.gov.in", examStartDate: "2024-08-12", examEndDate: "2024-08-15", cutoffMarks: "Gen: 130.0", ranks: "Top 40 ➔ DSP", officialLink: "https://psc.cg.gov.in", searchTerms: ["cgpsc", "state", "chhattisgarh"] },
    { id: 9, name: "Goa Public Service", level: "state", statePrefix: "GA", posts: 150, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-03-22", admitCardLink: "https://gpsc.goa.gov.in", examStartDate: "2024-07-25", examEndDate: "2024-07-26", cutoffMarks: "Gen: 85.0", ranks: "Merit List", officialLink: "https://gpsc.goa.gov.in", searchTerms: ["gpsc", "state", "goa"] },
    { id: 10, name: "GPSC Class 1-2", level: "state", statePrefix: "GJ", posts: 1200, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-02-14", admitCardLink: "https://gpsc.gujarat.gov.in", examStartDate: "2024-10-15", examEndDate: "2024-10-20", cutoffMarks: "Gen: 110.4", ranks: "Top 150 ➔ Deputy Collector", officialLink: "https://gpsc.gujarat.gov.in", searchTerms: ["gpsc", "state", "gujarat"] },
    { id: 11, name: "HPSC Civil Service", level: "state", statePrefix: "HR", posts: 400, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-01-28", admitCardLink: "http://hpsc.gov.in", examStartDate: "2024-06-18", examEndDate: "2024-06-18", cutoffMarks: "Gen: 88.5", ranks: "Top 50 ➔ HCS", officialLink: "http://hpsc.gov.in", searchTerms: ["hpsc", "state", "haryana"] },
    { id: 12, name: "HPPSC Admin Services", level: "state", statePrefix: "HP", posts: 250, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-03-01", admitCardLink: "http://hppsc.hp.gov.in", examStartDate: "2024-07-20", examEndDate: "2024-07-25", cutoffMarks: "Gen: 105.0", ranks: "Top 30 ➔ HAS", officialLink: "http://hppsc.hp.gov.in", searchTerms: ["hppsc", "state", "himachal"] },
    { id: 13, name: "JPSC Civil Services", level: "state", statePrefix: "JH", posts: 350, eligibility: "Graduate", salary: "₹53,100 - ₹1,67,800", notification: "2024-02-10", admitCardLink: "https://jpsc.gov.in", examStartDate: "2024-08-05", examEndDate: "2024-08-10", cutoffMarks: "Gen: 125.0", ranks: "Top 60 ➔ Civil Servant", officialLink: "https://jpsc.gov.in", searchTerms: ["jpsc", "state", "jharkhand"] },
    { id: 14, name: "KPSC KAS Exam", level: "state", statePrefix: "KA", posts: 1000, eligibility: "Graduate", salary: "₹52,650 - ₹97,100", notification: "2024-03-15", admitCardLink: "http://kpsc.kar.nic.in", examStartDate: "2024-09-12", examEndDate: "2024-09-15", cutoffMarks: "Gen: 95.0", ranks: "Top 100 ➔ KAS Officer", officialLink: "http://kpsc.kar.nic.in", searchTerms: ["kpsc", "state", "karnataka"] },
    { id: 15, name: "Kerala PSC KAS", level: "state", statePrefix: "KL", posts: 800, eligibility: "Graduate", salary: "₹55,200 - ₹1,15,300", notification: "2024-01-20", admitCardLink: "https://keralapsc.gov.in", examStartDate: "2024-07-08", examEndDate: "2024-07-09", cutoffMarks: "Gen: 102.5", ranks: "Top 80 ➔ Admin Officer", officialLink: "https://keralapsc.gov.in", searchTerms: ["kpsc", "state", "kerala"] },
    { id: 16, name: "MPPSC State Service", level: "state", statePrefix: "MP", posts: 900, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-04-01", admitCardLink: "https://mppsc.mp.gov.in", examStartDate: "2024-08-25", examEndDate: "2024-08-28", cutoffMarks: "Gen: 140.0", ranks: "Top 100 ➔ Naib Tehsildar", officialLink: "https://mppsc.mp.gov.in", searchTerms: ["mppsc", "state", "madhya pradesh"] },
    { id: 17, name: "MPSC Rajyaseva", level: "state", statePrefix: "MH", posts: 1200, eligibility: "Graduate", salary: "₹56,100 - ₹1,42,400", notification: "2024-02-15", admitCardLink: "https://mpsc.gov.in", examStartDate: "2024-07-02", examEndDate: "2024-07-05", cutoffMarks: "Gen: 105.5, OBC: 95.0", ranks: "Top 100 ➔ Deputy CEO", officialLink: "https://mpsc.gov.in", searchTerms: ["mpsc", "state", "maharashtra"] },
    { id: 18, name: "Manipur PSC", level: "state", statePrefix: "MN", posts: 200, eligibility: "Graduate", salary: "₹54,000 - ₹1,42,400", notification: "2024-03-12", admitCardLink: "https://mpscmanipur.gov.in", examStartDate: "2024-08-18", examEndDate: "2024-08-19", cutoffMarks: "Gen: 110.0", ranks: "Top 20 ➔ Civil Service", officialLink: "https://mpscmanipur.gov.in", searchTerms: ["mpsc", "state", "manipur"] },
    { id: 19, name: "Meghalaya PSC", level: "state", statePrefix: "ML", posts: 180, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-02-25", admitCardLink: "http://mpsc.nic.in", examStartDate: "2024-07-15", examEndDate: "2024-07-17", cutoffMarks: "Gen: 108.5", ranks: "Merit List", officialLink: "http://mpsc.nic.in", searchTerms: ["mpsc", "state", "meghalaya"] },
    { id: 20, name: "Mizoram PSC", level: "state", statePrefix: "MZ", posts: 150, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-04-02", admitCardLink: "https://mpsc.mizoram.gov.in", examStartDate: "2024-09-05", examEndDate: "2024-09-08", cutoffMarks: "Gen: 115.0", ranks: "Top 15 ➔ MCS", officialLink: "https://mpsc.mizoram.gov.in", searchTerms: ["mpsc", "state", "mizoram"] },
    { id: 21, name: "Nagaland PSC", level: "state", statePrefix: "NL", posts: 300, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-03-28", admitCardLink: "https://npsc.nagaland.gov.in", examStartDate: "2024-08-22", examEndDate: "2024-08-24", cutoffMarks: "Gen: 112.5", ranks: "Top 30 ➔ NCS", officialLink: "https://npsc.nagaland.gov.in", searchTerms: ["npsc", "state", "nagaland"] },
    { id: 22, name: "OPSC Civil Services", level: "state", statePrefix: "OD", posts: 700, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-01-25", admitCardLink: "https://opsc.gov.in", examStartDate: "2024-06-30", examEndDate: "2024-07-02", cutoffMarks: "Gen: 104.0", ranks: "Top 80 ➔ OAS", officialLink: "https://opsc.gov.in", searchTerms: ["opsc", "state", "odisha"] },
    { id: 23, name: "PPSC Civil Services", level: "state", statePrefix: "PB", posts: 400, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-02-18", admitCardLink: "https://ppsc.gov.in", examStartDate: "2024-07-28", examEndDate: "2024-07-30", cutoffMarks: "Gen: 116.5", ranks: "Top 50 ➔ PCS", officialLink: "https://ppsc.gov.in", searchTerms: ["ppsc", "state", "punjab"] },
    { id: 24, name: "RPSC RAS Exam", level: "state", statePrefix: "RJ", posts: 1100, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-03-05", admitCardLink: "https://rpsc.rajasthan.gov.in", examStartDate: "2024-08-11", examEndDate: "2024-08-15", cutoffMarks: "Gen: 84.72", ranks: "Top 120 ➔ RAS", officialLink: "https://rpsc.rajasthan.gov.in", searchTerms: ["rpsc", "state", "rajasthan"] },
    { id: 25, name: "Sikkim PSC", level: "state", statePrefix: "SK", posts: 100, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-04-12", admitCardLink: "https://spsc.sikkim.gov.in", examStartDate: "2024-09-20", examEndDate: "2024-09-21", cutoffMarks: "Gen: 102.0", ranks: "Merit List", officialLink: "https://spsc.sikkim.gov.in", searchTerms: ["spsc", "state", "sikkim"] },
    { id: 26, name: "TNPSC Group 4", level: "state", statePrefix: "TN", posts: 10000, eligibility: "10th Pass", salary: "₹19,500 - ₹71,900", notification: "2024-02-28", admitCardLink: "https://tnpsc.gov.in", examStartDate: "2024-06-09", examEndDate: "2024-06-09", cutoffMarks: "Gen: 165/200, SC: 150/200", ranks: "Top 2000 ➔ VAO", officialLink: "https://tnpsc.gov.in", searchTerms: ["tnpsc", "state", "tamil nadu", "vao"] },
    { id: 27, name: "TSPSC Group 1", level: "state", statePrefix: "TS", posts: 600, eligibility: "Graduate", salary: "₹54,000 - ₹1,42,400", notification: "2024-03-20", admitCardLink: "https://tspsc.gov.in", examStartDate: "2024-08-01", examEndDate: "2024-08-05", cutoffMarks: "Gen: 88.0", ranks: "Top 80 ➔ DSP", officialLink: "https://tspsc.gov.in", searchTerms: ["tspsc", "state", "telangana"] },
    { id: 28, name: "Tripura PSC", level: "state", statePrefix: "TR", posts: 250, eligibility: "Graduate", salary: "₹54,000 - ₹1,42,400", notification: "2024-02-05", admitCardLink: "https://tpsc.tripura.gov.in", examStartDate: "2024-07-12", examEndDate: "2024-07-14", cutoffMarks: "Gen: 110.5", ranks: "Top 30 ➔ TCS", officialLink: "https://tpsc.tripura.gov.in", searchTerms: ["tpsc", "state", "tripura"] },
    { id: 29, name: "UP Police Constable", level: "state", statePrefix: "UP", posts: 5000, eligibility: "12th Pass", salary: "₹21,700 - ₹69,100", notification: "2024-03-05", admitCardLink: "https://uppbpb.gov.in", examStartDate: "2024-09-15", examEndDate: "2024-09-16", cutoffMarks: "Gen: 185.0, SC: 145.0", ranks: "Merit List ➔ Constable", officialLink: "https://uppbpb.gov.in", searchTerms: ["police", "state police", "up", "constable"] },
    { id: 30, name: "UKPSC Civil Services", level: "state", statePrefix: "UK", posts: 350, eligibility: "Graduate", salary: "₹56,100 - ₹1,77,500", notification: "2024-01-18", admitCardLink: "https://ukpsc.gov.in", examStartDate: "2024-06-25", examEndDate: "2024-06-28", cutoffMarks: "Gen: 102.5", ranks: "Top 40 ➔ Sub-Divisional Magistrate", officialLink: "https://ukpsc.gov.in", searchTerms: ["ukpsc", "state", "uttarakhand"] },
    { id: 31, name: "WBPSC Civil Service", level: "state", statePrefix: "WB", posts: 900, eligibility: "Graduate", salary: "₹56,100 - ₹1,44,300", notification: "2024-02-22", admitCardLink: "https://wbpsc.gov.in", examStartDate: "2024-07-05", examEndDate: "2024-07-08", cutoffMarks: "Gen: 130.4", ranks: "Top 90 ➔ WBCS Exe", officialLink: "https://wbpsc.gov.in", searchTerms: ["wbpsc", "state", "west bengal"] },
    { id: 32, name: "Delhi Police SI", level: "state", statePrefix: "DL", posts: 600, eligibility: "Graduate", salary: "₹35,400 - ₹1,12,400", notification: "2024-03-01", admitCardLink: "https://ssc.nic.in", examStartDate: "2024-08-10", examEndDate: "2024-08-12", cutoffMarks: "Gen: 115.0", ranks: "Top 150 ➔ Sub Inspector", officialLink: "https://delhipolice.gov.in", searchTerms: ["police", "delhi", "si"] }
];

const papersData = [
    { id: 1, exam: "UPSC Prelims", year: 2023, subject: "gs", title: "General Studies Paper 1 - 2023", questions: 100, duration: "2 hours" },
    { id: 2, exam: "SSC CGL", year: 2023, subject: "math", title: "Quantitative Aptitude - 2023", questions: 100, duration: "2 hours" },
    { id: 3, exam: "SSC CHSL", year: 2024, subject: "english", title: "English Language - 2024", questions: 50, duration: "1 hour" },
    { id: 4, exam: "RRB NTPC", year: 2023, subject: "reasoning", title: "Reasoning & General Intelligence - 2023", questions: 40, duration: "90 mins" },
    { id: 5, exam: "Bank PO", year: 2024, subject: "math", title: "Numerical Ability - 2024", questions: 35, duration: "20 mins" },
    { id: 6, exam: "UPSC Mains", year: 2022, subject: "gs", title: "General Studies Paper 1 - 2022", questions: 20, duration: "3 hours" },
    { id: 7, exam: "State PCS", year: 2023, subject: "science", title: "General Science - 2023", questions: 100, duration: "2 hours" },
    { id: 8, exam: "DSSSB", year: 2024, subject: "english", title: "English Language & Comprehension - 2024", questions: 100, duration: "2.5 hours" }
];

const notificationsData = [
    { id: 1, title: "UPSC Civil Services 2024 Notification Released", level: "central", status: "latest", date: "2024-03-25", deadline: "2024-04-15", description: "UPSC has released the notification for Civil Services Examination 2024. Total 150 vacancies. Last date to apply is April 15, 2024." },
    { id: 2, title: "SSC CGL 2024 Admit Card Released", level: "central", status: "urgent", date: "2024-03-20", deadline: "2024-04-05", description: "SSC has released the admit cards for CGL 2024. Download from the official website. Exam date is April 5, 2024." },
    { id: 3, title: "RRB NTPC Previous Year Papers Available", level: "central", status: "latest", date: "2024-03-22", deadline: null, description: "Previous year papers for RRB NTPC are now available for download." },
    { id: 4, title: "State Teacher Recruitment Registration Open", level: "state", status: "urgent", date: "2024-03-24", deadline: "2024-04-10", description: "State Education Department has opened registration for Teacher Recruitment Drive. 10,000 vacancies announced." },
    { id: 5, title: "Bank PO 2024 Application Deadline Extended", level: "central", status: "latest", date: "2024-03-21", deadline: "2024-04-20", description: "Bank PO 2024 application deadline extended to April 20, 2024. Apply immediately." },
    { id: 6, title: "Police Recruitment Exam Schedule Announced", level: "state", status: "upcoming", date: "2024-03-23", deadline: "2024-05-01", description: "State Police Department announced the exam schedule. Preliminary exam on May 1, 2024." }
];

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('examsContainer')) populateExams();
    if (document.getElementById('papersContainer')) populatePapers();
    if (document.getElementById('notificationsContainer')) populateNotifications();
    setupNavigation();
    setupSearchFunctionality();
    setupScrollAnimations();
});

// ==================== NAVIGATION ====================
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    if (!hamburger || !navLinksContainer) return;

    hamburger.addEventListener('click', () => navLinksContainer.classList.toggle('active'));

    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
}

// ==================== SEARCH ====================
function setupSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        if (!query) { searchResults.classList.add('hidden'); return; }

        const results = examsData.filter(e =>
            e.name.toLowerCase().includes(query) ||
            e.searchTerms.some(t => t.includes(query))
        );

        searchResults.innerHTML = results.length
            ? results.map(r => `<div class="search-result-item" onclick="scrollToSection('exams')">
                <div><strong>${r.name}</strong><br><small>${r.level === 'central' ? '🏛️ Central' : '🏢 State'} &bull; ${r.posts} Posts</small></div>
                <small>${r.salary}</small></div>`).join('')
            : '<div class="search-result-item">No exams found</div>';
        searchResults.classList.remove('hidden');
    });
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ==================== EXAMS ====================
function populateExams(filterType = 'all', stateFilter = 'all') {
    const container = document.getElementById('examsContainer');
    if (!container) return;

    // Filter by type (all/state/central) and state matching
    let data = examsData.filter(e => {
        const typeMatch = filterType === 'all' || e.level === filterType;
        const stateMatch = stateFilter === 'all' || e.statePrefix === 'all' || e.statePrefix === stateFilter;
        return typeMatch && stateMatch;
    });

    const isHomePage = !window.location.pathname.includes('/pages/');
    // If we filtered by a specific state, we might want to show them all, 
    // but originally it was sliced to 6. We keep it 6.
    if (isHomePage) data = data.slice(0, 6);

    container.innerHTML = data.map(exam => `
        <div class="exam-card">
            <div class="exam-header">
                <h3>${exam.name}</h3>
                <span class="exam-level">${exam.level === 'central' ? '🏛️ Central' : '🏢 State'}</span>
            </div>
            <div class="exam-body">
                <div class="exam-detail"><span class="exam-detail-label">📋 Posts:</span><span class="exam-detail-value">${exam.posts.toLocaleString()}</span></div>
                <div class="exam-detail"><span class="exam-detail-label">🎓 Eligibility:</span><span class="exam-detail-value">${exam.eligibility}</span></div>
                <div class="exam-detail"><span class="exam-detail-label">💰 Salary:</span><span class="exam-detail-value">${exam.salary}</span></div>
                <div class="exam-detail"><span class="exam-detail-label">📅 Dates:</span><span class="exam-detail-value">${formatDate(exam.examStartDate)} - ${formatDate(exam.examEndDate)}</span></div>
                <div class="exam-detail"><span class="exam-detail-label">✂️ Cutoff:</span><span class="exam-detail-value">${exam.cutoffMarks}</span></div>
                <div class="exam-detail"><span class="exam-detail-label">🏆 Ranks:</span><span class="exam-detail-value">${exam.ranks}</span></div>
            </div>
            <div class="exam-footer">
                <button class="exam-btn info-btn" onclick="window.open('${exam.admitCardLink}', '_blank')">🪪 Admit Card</button>
                <button class="exam-btn apply-btn" onclick="applyExam(${exam.id})">Apply Now</button>
            </div>
        </div>`).join('');
}

function showExamDetails(id) {
    const exam = examsData.find(e => e.id === id);
    if (exam && exam.officialLink) window.open(exam.officialLink, '_blank');
    else alert("Official website not available.");
}

function applyExam(id) {
    const exam = examsData.find(e => e.id === id);
    if (exam && exam.officialLink) window.open(exam.officialLink, '_blank');
    else alert("Application link not available.");
}

function filterExams(type) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    const stateEl = document.getElementById('stateSelect');
    const stateVal = stateEl ? stateEl.value : 'all';
    populateExams(type, stateVal);
}

function filterByState() {
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const type = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
    const stateVal = document.getElementById('stateSelect').value;
    populateExams(type, stateVal);
}

// ==================== PAPERS ====================
function populatePapers() { displayPapers(papersData.slice(0, 6)); }

function displayPapers(papers) {
    const container = document.getElementById('papersContainer');
    if (!container) return;
    if (!papers.length) {
        container.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:2rem">No papers found.</p>';
        return;
    }
    container.innerHTML = papers.map(p => `
        <div class="paper-card">
            <h4 class="paper-title">${p.title}</h4>
            <div class="paper-meta">
                <span>📅 ${p.year}</span>
                <span>❓ ${p.questions} Qs</span>
                <span class="paper-subject">${getSubjectLabel(p.subject)}</span>
            </div>
            <div style="font-size:0.82rem;color:#999;margin-bottom:1rem">⏱️ ${p.duration}</div>
            <button class="download-btn" onclick="downloadPaper(${p.id})">📥 Download PDF</button>
        </div>`).join('');
}

function filterPapers() {
    const yr = document.getElementById('yearFilter')?.value;
    const sub = document.getElementById('subjectFilter')?.value;
    let filtered = papersData;
    if (yr) filtered = filtered.filter(p => p.year == yr);
    if (sub) filtered = filtered.filter(p => p.subject === sub);
    displayPapers(filtered);
}

function getSubjectLabel(s) {
    return { reasoning: 'Reasoning', math: 'Mathematics', english: 'English', science: 'Science', gs: 'General Studies' }[s] || s;
}

function downloadPaper(id) {
    const p = papersData.find(x => x.id === id);
    alert(`📥 Downloading: ${p.title}\n\nThis would download the PDF from the server in a real application.`);
}

// ==================== NOTIFICATIONS ====================
function populateNotifications() { displayNotifications(notificationsData.slice(0, 4)); }

function displayNotifications(notifs) {
    const container = document.getElementById('notificationsContainer');
    if (!container) return;
    container.innerHTML = notifs.map(n => `
        <div class="notification-card ${n.status}">
            <div class="notification-header">
                <h3 class="notification-title">${n.title}</h3>
                <span class="notification-date">${formatDate(n.date)}</span>
            </div>
            <div class="notification-body">${n.description}</div>
            <div class="notification-meta">
                <span class="meta-badge">${n.level === 'central' ? '🏛️ Central' : '🏢 State'}</span>
                ${n.deadline ? `<span class="meta-badge deadline">⏰ Deadline: ${formatDate(n.deadline)}</span>` : ''}
                <span class="meta-badge">${getStatusLabel(n.status)}</span>
            </div>
        </div>`).join('');
}

function sortNotifications(by) {
    let sorted = [...notificationsData];
    if (by === 'date') sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    else sorted.sort((a, b) => a.level.localeCompare(b.level));
    displayNotifications(sorted);
}

function getStatusLabel(s) {
    return { latest: '🆕 Latest', urgent: '🔴 Urgent', upcoming: '📌 Upcoming' }[s] || s;
}

// ==================== FAQ ====================
function toggleFAQ(el) {
    const answer = el.nextElementSibling;
    const icon = el.querySelector('.faq-icon');
    document.querySelectorAll('.faq-answer').forEach(f => { if (f !== answer) f.classList.remove('active'); });
    document.querySelectorAll('.faq-icon').forEach(i => { if (i !== icon) i.textContent = '+'; });
    answer.classList.toggle('active');
    icon.textContent = answer.classList.contains('active') ? '−' : '+';
}

// ==================== CONTACT ====================
function handleFormSubmit(event) {
    event.preventDefault();
    const msg = document.getElementById('formMessage');
    msg.classList.remove('success', 'error');
    msg.style.display = 'none';
    setTimeout(() => {
        msg.textContent = '✅ Thank you! Your message was sent successfully. We\'ll get back to you soon.';
        msg.classList.add('success');
        msg.style.display = 'block';
        event.target.reset();
    }, 500);
    setTimeout(() => msg.style.display = 'none', 6000);
}

// ==================== TABS ====================
function switchTab(tabName, groupClass) {
    const group = groupClass || 'default';
    document.querySelectorAll(`.tab-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.tab-content[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tabName}"][data-group="${group}"]`)?.classList.add('active');
    document.querySelector(`.tab-content[data-tab="${tabName}"][data-group="${group}"]`)?.classList.add('active');
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
    const opts = { threshold: 0.1, rootMargin: '0px 0px -80px 0px' };
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
                obs.unobserve(e.target);
            }
        });
    }, opts);

    document.querySelectorAll('.exam-card,.paper-card,.notification-card,.quick-link-card,.info-card,.test-card,.cal-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        obs.observe(card);
    });
}

// ==================== UTILITIES ====================
function formatDate(str) {
    return new Date(str).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}