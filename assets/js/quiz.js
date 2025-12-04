/* ========================================
   SYSTÈME DE QUIZ
   ======================================== */

const QUIZZES_DATA = {
  essentiel: {
    title: 'Quiz Final - Formation Essentiel',
    passingScore: 60,
    questions: [
      {
        id: 1,
        question: 'Quel est le principal avantage du digital marketing ?',
        options: [
          'Il est gratuit',
          'Il est mesurable et offre un meilleur ROI',
          'Il atteint uniquement les jeunes',
          'Il remplace le marketing traditionnel'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Qu\'est-ce que le SEO ?',
        options: [
          'Système d\'Email Officiel',
          'Stratégie Énergétique Optimale',
          'Référencement naturel pour apparaître dans Google',
          'Service de Evaluation Online'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Lequel de ces réseaux a le plus d\'utilisateurs ?',
        options: [
          'TikTok',
          'Instagram',
          'Facebook',
          'LinkedIn'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Quel KPI mesure le nombre de clients acquis ?',
        options: [
          'Trafic',
          'Engagement',
          'Conversion',
          'CPA'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'Qu\'est-ce que le CPA ?',
        options: [
          'Coût Par Acquisition',
          'Contenu Pour Audience',
          'Conversion Publicité Avancée',
          'Coût Par Annonce'
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'Quel canal est le mieux pour le B2B ?',
        options: [
          'TikTok',
          'LinkedIn',
          'Instagram',
          'Snapchat'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'Quelle est la meilleure fréquence de posts sur les réseaux ?',
        options: [
          'Une fois par mois',
          'Quotidiennement',
          'Régulièrement selon votre audience',
          'Jamais, c\'est inutile'
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'Quel outil permet d\'analyser le trafic web ?',
        options: [
          'Google Analytics',
          'Photoshop',
          'Microsoft Word',
          'VLC Media Player'
        ],
        correctAnswer: 0
      },
      {
        id: 9,
        question: 'Que signifie ROI ?',
        options: [
          'Ratio Optimal Illimité',
          'Retour sur Investissement',
          'Ressource Online Importante',
          'Réseau Ouvert Internet'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Quel est le but principal d\'une stratégie de contenu ?',
        options: [
          'Dépenser le budget',
          'Atteindre et engager votre audience pertinente',
          'Faire joli',
          'Copier la concurrence'
        ],
        correctAnswer: 1
      }
    ]
  },

  standard: {
    title: 'Quiz Final - Formation Standard',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'Qu\'est-ce que l\'approche omnicanal ?',
        options: [
          'Utiliser qu\'un seul canal',
          'Créer une expérience cohérente sur tous les canaux',
          'Oublier les réseaux sociaux',
          'Ne faire que du email'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Quel est le meilleur type de contenu pour convertir sur Facebook ?',
        options: [
          'Texte uniquement',
          'Vidéos et images avec appel à l\'action clair',
          'Memes uniquement',
          'Liens externes'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Qu\'est-ce que le Growth Hacking ?',
        options: [
          'Pirater des sites',
          'Techniques créatives pour croître rapidement avec peu de budget',
          'Créer des bugs',
          'Ignorer la stratégie'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Quel est le rôle de la balise meta description en SEO ?',
        options: [
          'Elle n\'a pas d\'importance',
          'Elle influence le classement directement',
          'Elle affiche un résumé dans les résultats Google',
          'Elle est juste pour décorer'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'Comment optimiser une campagne Meta Ads ?',
        options: [
          'Laisser sans modifications',
          'Tester A/B, analyser les données, itérer',
          'Dépenser plus d\'argent',
          'Copier ce que font les autres'
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'Qu\'est-ce que l\'email automation ?',
        options: [
          'Envoyer un seul email',
          'Créer des séquences qui s\'envoient automatiquement selon le comportement',
          'Spam automatisé',
          'Ignorer les emails'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'Quel score de test A/B indique une différence significative ?',
        options: [
          'P-value < 0.05 (95% de confiance)',
          'Peu importe',
          'Plus on teste, mieux c\'est',
          'Il n\'y a pas de statistiques'
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'Qu\'est-ce que le remarketing ?',
        options: [
          'Oublier les clients',
          'Cibler à nouveau les visiteurs qui n\'ont pas converti',
          'Faire peur aux gens',
          'Arrêter les campagnes'
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'Quel est le meilleur CTR moyen pour une campagne Google Ads ?',
        options: [
          '0.1%',
          '1-2% en moyenne, mais cela varie par industrie',
          '50%',
          'Le CTR n\'existe pas'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Comment calculer le ROAS d\'une campagne publicitaire ?',
        options: [
          'Revenu / Dépense publicitaire',
          'Clics / Impressions',
          'Followers / Likes',
          'Cela n\'existe pas'
        ],
        correctAnswer: 0
      }
    ]
  },

  premium: {
    title: 'Quiz Final - Formation Premium',
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: 'Qu\'est-ce que le marketing attribution multi-touch ?',
        options: [
          'Ne compter que le premier clic',
          'Créditer chaque touchpoint du parcours client',
          'Ignorer l\'analytics',
          'Ne pas mesurer'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Quel est le meilleur modèle d\'attribution pour un long cycle de vente ?',
        options: [
          'Last-click uniquement',
          'First-touch uniquement',
          'Time decay ou position-based',
          'Pas d\'attribution'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Comment utiliser l\'IA pour optimiser les campagnes Meta Ads ?',
        options: [
          'Laisser la main entièrement à l\'IA',
          'Utiliser l\'AI for optimization avec des données de qualité et monitoring',
          'Ignorer l\'IA',
          'Utiliser seulement des règles manuelles'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Qu\'est-ce qu\'une landing page haute performance ?',
        options: [
          'Une page avec beaucoup de texte',
          'Une page rapide, claire, avec un CTA fort et peu de distractions',
          'Une page statique',
          'Une page sans images'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Quelle stratégie de contenu fonctionne mieux sur TikTok ?',
        options: [
          'Contenu corporatif formel',
          'Contenu authentique, court format, tendances actuelles',
          'Seulement des publicités',
          'Pas de vidéos'
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'Comment gérer une crise sur les réseaux sociaux ?',
        options: [
          'Ignorer et espérer que ça passe',
          'Répondre rapidement, honnêtement et offrir des solutions',
          'Bloquer tous les critiques',
          'Supprimer tous les commentaires'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'Qu\'est-ce qu\'un pixel de suivi et pourquoi c\'est important ?',
        options: [
          'Ça n\'existe pas',
          'Un code qui suit les actions et permet le remarketing & analytics',
          'Une simple image',
          'Seulement pour du spam'
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'Quel est le vrai secret du scaling ?',
        options: [
          'Dépenser le plus possible',
          'Dépenser moins possible',
          'Optimiser d\'abord, puis augmenter progressivement le budget',
          'Le scaling n\'existe pas'
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'Comment utiliser ChatGPT pour le marketing ?',
        options: [
          'Ne pas l\'utiliser',
          'Créer du contenu, copywriting, analyser des données',
          'Seulement pour des blagues',
          'C\'est du plagiat'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Quel est l\'indicateur clé pour mesurer la santé d\'un funnel ?',
        options: [
          'Seulement le nombre de clics',
          'La conversion rate à chaque étape et les abandons',
          'Le nombre de followers',
          'Rien à mesurer'
        ],
        correctAnswer: 1
      }
    ]
  }
};

// ========================================
// GESTIONNAIRE DE QUIZ
// ========================================

class QuizManager {
  constructor(courseId) {
    this.courseId = courseId;
    this.quizData = QUIZZES_DATA[courseId];
    this.userSession = window.getCurrentSession ? window.getCurrentSession() : JSON.parse(localStorage.getItem('userSession'));
    this.currentAnswers = {};
  }

  getQuiz() {
    return this.quizData;
  }

  getQuestion(id) {
    return this.quizData.questions.find(q => q.id === id);
  }

  setAnswer(questionId, answerIndex) {
    this.currentAnswers[questionId] = answerIndex;
  }

  getResults() {
    let correctCount = 0;

    this.quizData.questions.forEach(question => {
      if (this.currentAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / this.quizData.questions.length) * 100);
    return {
      score: score,
      correctCount: correctCount,
      totalCount: this.quizData.questions.length,
      passed: score >= this.quizData.passingScore
    };
  }

  saveScore(score) {
    if (this.userSession) {
      this.userSession.quizScore = score;
      this.userSession.quizCompletedAt = new Date().toISOString();
      localStorage.setItem('userSession', JSON.stringify(this.userSession));
    }
  }

  hasCertificate() {
    // Retourne true si l'utilisateur a réussi le quiz (tous les niveaux ont droit au certificat)
    if (!this.userSession) {
      console.log('QuizManager.hasCertificate(): Pas de session utilisateur');
      return false;
    }
    
    const results = this.getResults();
    const passed = results.score >= this.quizData.passingScore;
    
    console.log('QuizManager.hasCertificate():', {
      userSession: this.userSession,
      score: results.score,
      passingScore: this.quizData.passingScore,
      passed: passed,
      result: passed
    });
    
    return passed;
  }
}

// Initialiser globalement
let quizManager;

function initQuiz(courseId) {
  quizManager = new QuizManager(courseId);
  return quizManager;
}
