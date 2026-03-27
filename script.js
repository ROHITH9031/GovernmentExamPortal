// Sample data for exams
const examsData = [
    {
        id: 1,
        name: "UPSC Civil Services",
        level: "central",
        posts: 150,
        eligibility: "Graduate",
        salary: "₹56,100 - ₹1,77,500",
        notification: "2024-01-15",
        searchTerms: ["upsc", "civil services", "ias", "ips"]
    },
    {
        id: 2,
        name: "SSC CHSL",
        level: "central",
        posts: 3500,
        eligibility: "12th Pass",
        salary: "₹18,000 - ₹56,100",
        notification: "2024-02-01",
        searchTerms: ["ssc", "chsl", "combined higher secondary"]
    },
    {
        id: 3,
        name: "RRB NTPC",
        level: "central",
        posts: 35000,
        eligibility: "12th Pass",
        salary: "₹19,900 - ₹35,400",
        notification: "2024-01-20",
        searchTerms: ["rrb", "ntpc", "railways"]
    },
    {
        id: 4,
        name: "State PSC Exam",
        level: "state",
        posts: 800,
        eligibility: "Graduate",
        salary: "₹54,000 - ₹1,42,400",
        notification: "2024-03-10",
        searchTerms: ["psc", "state", "state services"]
    },
    {
        id: 5,
        name: "Bank PO",
        level: "central",
        posts: 4000,
        eligibility: "Graduate",
        salary: "₹23,700 - ₹42,020",
        notification: "2024-01-25",
        searchTerms: ["bank", "po", "banking"]
    },
    {
        id: 6,
        name: "Insurance Exam",
        level: "central",
        posts: 600,
        eligibility: "Graduate",
        salary: "₹24,000 - ₹44,000",
        notification: "2024-02-14",
        searchTerms: ["insurance", "lic", "banking"]
    },
    {
        id: 7,
        name: "Police Recruitment",
        level: "state",
        posts: 5000,
        eligibility: "12th Pass",
        salary: "₹20,000 - ₹49,000",
        notification: "2024-03-05",
        searchTerms: ["police", "state police", "constable"]
    },
    {
        id: 8,
        name: "Teacher Recruitment",
        level: "state",
        posts: 10000,
        eligibility: "B.Ed/Diploma",
        salary: "₹25,000 - ₹50,000",
        notification: "2024-02-28",
        searchTerms: ["teacher", "state", "education"]
    }
];

// Sample data for question papers
const papersData = [
    {
        id: 1,
        exam: "UPSC Prelims",
        year: 2023,
        subject: "gs",
        title: "General Studies Paper 1 - 2023",
        questions: 100,
        duration: "2 hours"
    },
    {
        id: 2,
        exam: "SSC CGL",
        year: 2023,
        subject: "math",
        title: "Quantitative Aptitude - 2023",
        questions: 100,
        duration: "2 hours"
    },
    {
        id: 3,
        exam: "SSC CHSL",
        year: 2024,
        subject: "english",
        title: "English Language - 2024",
        questions: 50,
        duration: "1 hour"
    },
    {
        id: 4,
        exam: "RRB NTPC",
        year: 2023,
        subject: "reasoning",
        title: "Reasoning & General Intelligence - 2023",
        questions: 40,
        duration: "90 minutes"
    },
    {
        id: 5,
        exam: "Bank PO",
        year: 2024,
        subject: "math",
        title: "Numerical Ability - 2024",
        questions: 35,
        duration: "20 minutes"
    },
    {
        id: 6,
        exam: "UPSC Mains",
        year: 2022,
        subject: "gs",
        title: "General Studies Paper 1 - 2022",
        questions: 20,
        duration: "3 hours"
    },
    {
        id: 7,
        exam: "State PCS",
        year: 2023,
        subject: "science",
        title: "General Science - 2023",
        questions: 100,
        duration: "2 hours"
    },
    {
        id: 8,
        exam: "DSSSB",
        year: 2024,
        subject: "english",
        title: "English Language & Comprehension - 2024",
        questions: 100,
        duration: "2.5 hours"
    }
];

// Sample data for notifications
const notificationsData = [
    {
        id: 1,
        title: "UPSC Civil Services 2024 Notification Released",
        level: "central",
        status: "latest",
        date: "2024-03-25",
        deadline: "2024-04-15",
        description: "UPSC has released the notification for Civil Services Examination 2024. Total 150 vacancies. Last date to apply is April 15, 2024.",
        link: "#"
    },
    {
        id: 2,
        title: "SSC CGL 2024 Admit Card Released",
        level: "central",
        status: "urgent",
        date: "2024-03-20",
        deadline: "2024-04-05",
        description: "SSC has released the admit cards for CGL 2024. Candidates can download from the official website. Exam date is April 5, 2024.",
        link: "#"
    },
    {
        id: 3,
        title: "RRB NTPC Previous Year Papers Available",
        level: "central",
        status: "latest",
        date: "2024-03-22",
        deadline: null,
        description: "Previous year papers for RRB NTPC are now available for download. Candidates preparing for the exam can practice with these papers.",
        link: "#"
    },
    {
        id: 4,
        title: "State Teacher Recruitment Registration Open",
        level: "state",
        status: "urgent",
        date: "2024-03-24",
        deadline: "2024-04-10",
        description: "State Education Department has opened registration for Teacher Recruitment Drive. 10,000 vacancies announced. Registration deadline is April 10, 2024.",
        link: "#"
    },
    {
        id: 5,
        title: "Bank PO 2024 Application Deadline Extended",
        level: "central",
        status: "latest",
        date: "2024-03-21",
        deadline: "2024-04-20",
        description: "Bank PO 2024 application deadline has been extended to April 20, 2024. Apply immediately using the official portal.",
        link: "#"
    },
    {
        id: 6,
        title: "Police Recruitment Exam Schedule Announced",
        level: "state",
        status: "upcoming",
        date: "2024-03-23",
        deadline: "2024-05-01",
        description: "State Police Department has announced the exam schedule for recruitment. Preliminary exam will be held on May 1, 2024.",
        link: "#"
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    populateExams();
    populatePapers();
    populateNotifications();
    setupNavigation();
    setupSearchFunctionality();
});

// ==================== NAVIGATION ==================== 
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            // Close mobile menu
            navLinksContainer.classList.remove('active');
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ==================== SEARCH FUNCTIONALITY ====================
function setupSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();

        if (query.length === 0) {
            searchResults.classList.add('hidden');
            return;
        }

        const results = examsData.filter(exam => 
            exam.name.toLowerCase().includes(query) ||
            exam.searchTerms.some(term => term.includes(query))
        );

        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => 
                `<div class="search-result-item" onclick="scrollToSection('exams')">
                    <strong>${result.name}</strong>
                    <small>${result.level === 'central' ? 'Central Level' : 'State Level'}</small>
                </div>`
            ).join('');
            searchResults.classList.remove('hidden');
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No exams found</div>';
            searchResults.classList.remove('hidden');
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== EXAMS SECTION ====================
function populateExams(filterType = 'all') {
    const container = document.getElementById('examsContainer');
    let filtered = examsData;

    if (filterType !== 'all') {
        filtered = examsData.filter(exam => exam.level === filterType);
    }

    container.innerHTML = filtered.map(exam => `
        <div class="exam-card">
            <div class="exam-header">
                <h3>${exam.name}</h3>
                <span class="exam-level">${exam.level === 'central' ? '🏛️ Central' : '🏢 State'}</span>
            </div>
            <div class="exam-body">
                <div class="exam-detail">
                    <span class="exam-detail-label">📋 Posts:</span>
                    <span class="exam-detail-value">${exam.posts}</span>
                </div>
                <div class="exam-detail">
                    <span class="exam-detail-label">🎓 Eligibility:</span>
                    <span class="exam-detail-value">${exam.eligibility}</span>
                </div>
                <div class="exam-detail">
                    <span class="exam-detail-label">💰 Salary:</span>
                    <span class="exam-detail-value">${exam.salary}</span>
                </div>
                <div class="exam-detail">
                    <span class="exam-detail-label">📅 Notification:</span>
                    <span class="exam-detail-value">${formatDate(exam.notification)}</span>
                </div>
            </div>
            <div class="exam-footer">
                <button class="exam-btn info-btn" onclick="showExamDetails(${exam.id})">More Info</button>
                <button class="exam-btn apply-btn" onclick="alert('Redirecting to official website...')">Apply Now</button>
            </div>
        </div>
    `).join('');
}

function filterExams(filterType) {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    populateExams(filterType);
}

function showExamDetails(examId) {
    const exam = examsData.find(e => e.id === examId);
    alert(`Exam: ${exam.name}\n\nLevel: ${exam.level === 'central' ? 'Central' : 'State'}\nPosts: ${exam.posts}\nEligibility: ${exam.eligibility}\nSalary: ${exam.salary}\n\nVisit the official website for more details!`);
}

// ==================== PAPERS SECTION ====================
function populatePapers() {
    displayPapers(papersData);
}

function displayPapers(papers) {
    const container = document.getElementById('papersContainer');

    if (papers.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem;">No papers found matching your criteria.</p>';
        return;
    }

    container.innerHTML = papers.map(paper => `
        <div class="paper-card">
            <h4 class="paper-title">${paper.title}</h4>
            <div class="paper-meta">
                <span>${paper.year}</span>
                <span>${paper.questions} Questions</span>
                <span class="paper-subject">${getSubjectLabel(paper.subject)}</span>
            </div>
            <button class="download-btn" onclick="downloadPaper(${paper.id})">📥 Download PDF</button>
        </div>
    `).join('');
}

function filterPapers() {
    const yearFilter = document.getElementById('yearFilter').value;
    const subjectFilter = document.getElementById('subjectFilter').value;

    let filtered = papersData;

    if (yearFilter) {
        filtered = filtered.filter(paper => paper.year == yearFilter);
    }

    if (subjectFilter) {
        filtered = filtered.filter(paper => paper.subject === subjectFilter);
    }

    displayPapers(filtered);
}

function getSubjectLabel(subject) {
    const labels = {
        'reasoning': 'Reasoning',
        'math': 'Mathematics',
        'english': 'English',
        'science': 'Science',
        'gs': 'General Studies'
    };
    return labels[subject] || subject;
}

function downloadPaper(paperId) {
    const paper = papersData.find(p => p.id === paperId);
    alert(`📥 Downloading: ${paper.title}\n\nIn a real application, this would download the PDF from the server.`);
}

// ==================== NOTIFICATIONS SECTION ====================
function populateNotifications() {
    displayNotifications(notificationsData);
}

function displayNotifications(notifications) {
    const container = document.getElementById('notificationsContainer');

    container.innerHTML = notifications.map(notif => `
        <div class="notification-card ${notif.status}">
            <div class="notification-header">
                <h3 class="notification-title">${notif.title}</h3>
                <span class="notification-date">${formatDate(notif.date)}</span>
            </div>
            <div class="notification-body">
                ${notif.description}
            </div>
            <div class="notification-meta">
                <span class="meta-badge">${notif.level === 'central' ? '🏛️ Central Level' : '🏢 State Level'}</span>
                ${notif.deadline ? `<span class="meta-badge deadline">⏰ Deadline: ${formatDate(notif.deadline)}</span>` : ''}
                <span class="meta-badge">${getStatusLabel(notif.status)}</span>
            </div>
        </div>
    `).join('');
}

function sortNotifications(sortBy) {
    let sorted = [...notificationsData];

    if (sortBy === 'date') {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'level') {
        sorted.sort((a, b) => a.level.localeCompare(b.level));
    }

    displayNotifications(sorted);
}

function getStatusLabel(status) {
    const labels = {
        'latest': '🆕 Latest',
        'urgent': '🔴 Urgent',
        'upcoming': '📌 Upcoming'
    };
    return labels[status] || status;
}

// ==================== FAQ SECTION ====================
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    // Close other FAQs
    document.querySelectorAll('.faq-answer').forEach(faq => {
        if (faq !== answer) {
            faq.classList.remove('active');
        }
    });

    document.querySelectorAll('.faq-icon').forEach(icn => {
        if (icn !== icon) {
            icn.textContent = '+';
        }
    });

    // Toggle current FAQ
    answer.classList.toggle('active');
    icon.textContent = answer.classList.contains('active') ? '−' : '+';
}

// ==================== CONTACT FORM ====================
function handleFormSubmit(event) {
    event.preventDefault();

    const formMessage = document.getElementById('formMessage');
    const form = event.target;

    // Simulate form submission
    formMessage.classList.remove('success', 'error');
    formMessage.style.display = 'none';

    setTimeout(() => {
        formMessage.textContent = '✅ Thank you! Your message has been sent successfully. We will get back to you soon.';
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        form.reset();
    }, 500);

    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.exam-card, .paper-card, .notification-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
