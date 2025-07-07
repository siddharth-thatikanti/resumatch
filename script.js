document.addEventListener('DOMContentLoaded', () => {
  const welcomeScreen = document.getElementById('welcome-screen');
  const dropZone = document.getElementById('drop-zone');
  const resumeUpload = document.getElementById('resume-upload');
  const browseBtn = document.getElementById('browse-btn');
  const fileName = document.getElementById('file-name');
  const companyCheckboxes = document.querySelectorAll('.company-checkbox');
  const companySearch = document.getElementById('company-search');
  const analyzeBtn = document.getElementById('analyze-btn');
  const loading = document.getElementById('loading');
  const results = document.getElementById('results');
  const progress = document.getElementById('progress');
  const resultFeedback = document.getElementById('result-feedback');
  const companySuggestions = document.getElementById('company-suggestions');
  const interviewQuestions = document.getElementById('interview-questions');
  const eligibility = document.getElementById('eligibility');
  const companyEligibility = document.getElementById('company-eligibility');
  const intro = document.getElementById('intro');
  const mandatorySkills = document.getElementById('mandatory-skills');
  const historySidebar = document.getElementById('history-sidebar');
  const historyBtn = document.getElementById('history-btn');
  const closeHistoryBtn = document.getElementById('close-history');
  const historyList = document.getElementById('history-list');

  let resumeFile = null;
  let selectedCompanies = [];
  let analysisHistory = [];
  let resumeData = {
    skills: ['React.js', 'Python', 'JavaScript', 'Agile', 'Team Leadership', 'Java', 'C++', 'AWS', 'Docker', 'Jenkins', 'MySQL', 'MongoDB', 'Git', 'Postman', 'VS Code'],
    experience: 3,
    education: 'B.Sc. Computer Science'
  }; // Simulated resume data based on demo resume

  // Utility functions
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `p-4 rounded-lg shadow-lg text-white transition-all transform slide-in-right ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    toast.textContent = message;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Handle file upload
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('active');
  });
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('active');
  });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('active');
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  });
  browseBtn.addEventListener('click', () => resumeUpload.click());
  resumeUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
  });

  function handleFileUpload(file) {
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('File size exceeds 5MB limit', 'error');
        return;
      }
      if (!['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'].includes(file.type)) {
        showToast('Unsupported file format. Use PDF, DOCX, or TXT.', 'error');
        return;
      }
      resumeFile = file;
      fileName.textContent = `Selected: ${file.name} (${formatFileSize(file.size)})`;
      fileName.style.display = 'block';
      analyzeEligibility();
      checkAnalyze();
    }
  }

  // Analyze eligibility on resume upload
  function analyzeEligibility() {
    eligibility.style.display = 'block';
    companyEligibility.innerHTML = '';
    companyCheckboxes.forEach(checkbox => {
      const company = checkbox.value;
      let matchPercentage = calculateMatchPercentage(company);
      let div = document.createElement('div');
      div.className = 'bg-gray-800 p-2 rounded-lg mb-2';
      div.innerHTML = `<strong>${company}</strong>: ${matchPercentage}% eligibility`;
      companyEligibility.appendChild(div);
    });
    generateIntro();
    suggestMandatorySkills();
  }

  // Calculate match percentage (simulated)
  function calculateMatchPercentage(company) {
    const requirements = {
      'TCS': ['Java', 'SQL', '3+ years', 'B.Tech'],
      'Infosys': ['Python', 'Cloud', '4+ years', 'B.E.'],
      'Wipro': ['JavaScript', 'Agile', '3+ years', 'B.Sc.'],
      'HCL Technologies': ['C++', 'Networking', '5+ years', 'M.Tech'],
      'Tech Mahindra': ['Python', 'AI', '4+ years', 'B.Tech'],
      'LTIMindtree': ['Java', 'Cloud', '3+ years', 'B.E.'],
      'Mphasis': ['Python', 'Data Science', '4+ years', 'M.Sc.'],
      'Coforge': ['JavaScript', 'Automation', '3+ years', 'B.Tech'],
      'Zensar Technologies': ['DevOps', 'Cloud