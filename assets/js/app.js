/* ========================================
   SYSTÈME D'AUTHENTIFICATION & STOCKAGE
   ======================================== */

// Configuration des formations et clés d'accès
const COURSES_CONFIG = {
  'KEY-ESSENTIEL-2024': {
    id: 'essentiel',
    name: 'Monétisez votre audience et devenez indépendant - Essentiel',
    level: 'Débutant',
    chapters: 4,
    certificat: false,
    color: '#2d9cdb'
  },
  'KEY-STANDARD-2024': {
    id: 'standard',
    name: 'Monétisez votre audience et devenez indépendant - Standard',
    level: 'Intermédiaire',
    chapters: 8,
    certificat: true,
    color: '#f39c12'
  },
  'KEY-PREMIUM-2024': {
    id: 'premium',
    name: 'Monétisez votre audience et devenez indépendant - Premium',
    level: 'Avancé',
    chapters: 11,
    certificat: true,
    color: '#27ae60'
  }
};

// ========================================
// GESTION DU STOCKAGE UTILISATEUR
// ========================================

class UserSession {
  constructor() {
    this.loadSession();
  }

  // Créer une nouvelle session
  createSession(key, fullName = '') {
    const courseConfig = COURSES_CONFIG[key];
    if (!courseConfig) return false;

    const sessionData = {
      key: key,
      courseId: courseConfig.id,
      courseName: courseConfig.name,
      level: courseConfig.level,
      chapters: courseConfig.chapters,
      certificat: courseConfig.certificat,
      fullName: fullName,
      loginTime: new Date().toISOString(),
      progress: {
        completedChapters: [],
        currentChapter: 1,
        lastAccessed: new Date().toISOString()
      },
      quizScore: null
    };

    localStorage.setItem('userSession', JSON.stringify(sessionData));
    this.currentSession = sessionData;
    return true;
  }

  // Charger la session existante
  loadSession() {
    const session = localStorage.getItem('userSession');
    this.currentSession = session ? JSON.parse(session) : null;
  }

  // Vérifier si utilisateur connecté
  isLoggedIn() {
    return this.currentSession !== null;
  }

  // Obtenir les infos session
  getSession() {
    return this.currentSession;
  }

  // Mettre à jour la progression
  updateProgress(chapterNumber, completed = true) {
    if (!this.currentSession) return false;

    if (completed && !this.currentSession.progress.completedChapters.includes(chapterNumber)) {
      this.currentSession.progress.completedChapters.push(chapterNumber);
    }

    this.currentSession.progress.currentChapter = chapterNumber;
    this.currentSession.progress.lastAccessed = new Date().toISOString();

    localStorage.setItem('userSession', JSON.stringify(this.currentSession));
    return true;
  }

  // Sauvegarder score quiz
  saveQuizScore(score) {
    if (!this.currentSession) return false;
    this.currentSession.quizScore = score;
    localStorage.setItem('userSession', JSON.stringify(this.currentSession));
    return true;
  }

  // Obtenir progression en %
  getProgressPercentage() {
    if (!this.currentSession) return 0;
    const total = this.currentSession.chapters;
    const completed = this.currentSession.progress.completedChapters.length;
    return Math.round((completed / total) * 100);
  }

  // Déconnexion
  logout() {
    localStorage.removeItem('userSession');
    this.currentSession = null;
  }
}

// ========================================
// GESTION DE L'AUTHENTIFICATION
// ========================================

class Authentication {
  constructor() {
    this.userSession = new UserSession();
    this.setupEventListeners();
    this.checkAuthStatus();
  }

  setupEventListeners() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    // Toggle show/hide password
    const togglePasswordBtn = document.getElementById('toggle-password');
    if (togglePasswordBtn) {
      togglePasswordBtn.addEventListener('click', () => this.togglePassword());
    }
  }

  handleLogin(event) {
    event.preventDefault();

    const keyInput = document.getElementById('access-key');
    const key = keyInput.value.trim().toUpperCase();
    const errorDiv = document.getElementById('login-error');
    const submitBtn = document.querySelector('#login-form button[type="submit"]');

    // Validation
    if (!key) {
      this.showError('Veuillez entrer une clé d\'accès', errorDiv);
      return;
    }

    // Vérifier la clé
    if (!COURSES_CONFIG[key]) {
      this.showError('❌ Clé invalide. Vérifie ton email.', errorDiv);
      keyInput.value = '';
      return;
    }

    // Animation de chargement
    submitBtn.innerHTML = '<span class="loading"></span> Vérification...';
    submitBtn.disabled = true;

    // Simulation délai réseau
    setTimeout(() => {
      if (this.userSession.createSession(key)) {
        this.showSuccess('✓ Accès autorisé ! Redirection...', errorDiv);
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
      } else {
        this.showError('❌ Erreur lors de la connexion', errorDiv);
        submitBtn.innerHTML = 'Accéder';
        submitBtn.disabled = false;
      }
    }, 800);
  }

  handleLogout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      this.userSession.logout();
      window.location.href = 'index.html';
    }
  }

  togglePassword() {
    const keyInput = document.getElementById('access-key');
    const toggleBtn = document.getElementById('toggle-password');

    if (keyInput.type === 'password') {
      keyInput.type = 'text';
      toggleBtn.textContent = '🙈';
    } else {
      keyInput.type = 'password';
      toggleBtn.textContent = '👁️';
    }
  }

  showError(message, element) {
    element.textContent = message;
    element.classList.add('show');
    element.style.animation = 'slideIn 0.3s ease';
  }

  showSuccess(message, element) {
    element.textContent = message;
    element.classList.add('show');
    element.style.animation = 'slideIn 0.3s ease';
    element.style.color = '#27ae60';
  }

  checkAuthStatus() {
    // Si sur dashboard/quiz sans session, rediriger
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const protectedPages = ['dashboard.html', 'formations/', 'quiz/'];

    if (!this.userSession.isLoggedIn() && protectedPages.some(p => currentPage.includes(p))) {
      window.location.href = 'index.html';
    }
  }
}

// ========================================
// INITIALISATION
// ========================================

// Initialiser l'authentification au chargement
// Sauf sur la page de login (index.html) qui a son propre système
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage !== 'index.html') {
    new Authentication();
  }
});

// Fonction utilitaire pour accéder à la session globalement
window.getCurrentSession = () => {
  const session = localStorage.getItem('userSession');
  return session ? JSON.parse(session) : null;
};

// Fonction pour se déconnecter
window.logoutUser = () => {
  localStorage.removeItem('userSession');
  window.location.href = '../index.html';
};
