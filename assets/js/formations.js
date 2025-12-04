/* ========================================
   DONNÉES DES FORMATIONS
   ======================================== */

const FORMATIONS_DATA = {
  essentiel: {
    id: 'essentiel',
    title: 'Monétisez votre audience et devenez indépendant - Essentiel',
    level: 'Débutant',
    description: 'Commencez votre voyage vers l\'indépendance financière',
    certificat: false,
    chapters: [
      {
        number: 1,
        title: 'Introduction au marketing d\'influence',
        duration: '15 min',
        video: '../assets/videos/essentiel/chapitre-1.mp4',
        content: `<h3>Introduction au Marketing d'Influence</h3>
        <p><strong>Comprendre le rôle du marketing d'influence dans l'économie digitale</strong></p>
        <p>Le marketing d'influence est devenu l'une des stratégies les plus puissantes du digital. Découvrez comment transformer votre audience en source de revenus.</p>
        <p><strong>Pourquoi c'est une opportunité unique pour créer son indépendance financière</strong></p>
        <p>Contrairement au salariat, l'influence vous permet de créer plusieurs sources de revenus et d'être maître de votre agenda.</p>`
      },
      {
        number: 2,
        title: 'Construire et engager son audience',
        duration: '18 min',
        video: '../assets/videos/essentiel/chapitre-2.mp4',
        content: `<h3>Construire et Engager Son Audience</h3>
        <p><strong>Identifier sa niche et définir son persona</strong></p>
        <p>Avant de créer du contenu, vous devez savoir à qui vous vous adressez. Une niche claire = audience engagée.</p>
        <p><strong>Créer du contenu qui attire et fidélise</strong></p>
        <p>Les secrets pour créer du contenu viral, authentique et générateur d'engagement constant.</p>`
      },
      {
        number: 3,
        title: 'Les bases de la monétisation',
        duration: '16 min',
        video: '../assets/videos/essentiel/chapitre-3.mp4',
        content: `<h3>Les Bases de la Monétisation</h3>
        <p><strong>Sponsoring, affiliation, produits digitaux</strong></p>
        <p>Les 3 piliers de la monétisation pour débutant. Chaque levier a ses avantages et ses conditions.</p>
        <p><strong>Les premiers leviers financiers accessibles</strong></p>
        <p>Même avec une petite audience, vous pouvez commencer à monétiser rapidement.</p>`
      },
      {
        number: 4,
        title: 'Plan d\'action simple pour débuter',
        duration: '14 min',
        video: '../assets/videos/essentiel/chapitre-4.mp4',
        content: `<h3>Plan d'Action Simple Pour Débuter</h3>
        <p><strong>Étapes concrètes pour lancer sa première campagne</strong></p>
        <p>Une roadmap claire pour passer de zéro à votre premier euro en moins de 30 jours.</p>
        <p><strong>Passer de la théorie à la pratique avec peu de moyens</strong></p>
        <p>Vous n'avez pas besoin d'investissement massif. Commencez avec ce que vous avez.</p>`
      }
    ]
  },

  standard: {
    id: 'standard',
    title: 'Monétisez votre audience et devenez indépendant - Standard',
    level: 'Intermédiaire',
    description: 'Développez votre influence et augmentez vos revenus',
    certificat: true,
    chapters: [
      {
        number: 1,
        title: 'Introduction au marketing d\'influence',
        duration: '15 min',
        video: '../assets/videos/standard/chapitre-1.mp4',
        content: `<h3>Introduction au Marketing d'Influence</h3>
        <p>Comprendre le rôle du marketing d'influence dans l'économie digitale et les opportunités uniques pour créer son indépendance financière.</p>`
      },
      {
        number: 2,
        title: 'Construire et engager son audience',
        duration: '18 min',
        video: '../assets/videos/standard/chapitre-2.mp4',
        content: `<h3>Construire et Engager Son Audience</h3>
        <p>Identifier sa niche, définir son persona, créer du contenu qui attire et fidélise une audience engagée.</p>`
      },
      {
        number: 3,
        title: 'Les bases de la monétisation',
        duration: '16 min',
        video: '../assets/videos/standard/chapitre-3.mp4',
        content: `<h3>Les Bases de la Monétisation</h3>
        <p>Sponsoring, affiliation, produits digitaux et les premiers leviers financiers accessibles.</p>`
      },
      {
        number: 4,
        title: 'Plan d\'action simple pour débuter',
        duration: '14 min',
        video: '../assets/videos/standard/chapitre-4.mp4',
        content: `<h3>Plan d'Action Simple Pour Débuter</h3>
        <p>Étapes concrètes pour lancer sa première campagne avec peu de moyens.</p>`
      },
      {
        number: 5,
        title: 'Créer du contenu premium et différenciant',
        duration: '20 min',
        video: '../assets/videos/standard/chapitre-5.mp4',
        content: `<h3>Créer du Contenu Premium et Différenciant</h3>
        <p><strong>Storytelling, visuels, vidéos, lives</strong></p>
        <p>Apprenez à créer un contenu de qualité professionnelle qui vous démarque.</p>
        <p><strong>Se démarquer dans un marché saturé</strong></p>
        <p>Les secrets pour sortir du lot avec votre style personnel unique.</p>`
      },
      {
        number: 6,
        title: 'Négocier avec les marques et partenaires',
        duration: '19 min',
        video: '../assets/videos/standard/chapitre-6.mp4',
        content: `<h3>Négocier Avec Les Marques et Partenaires</h3>
        <p><strong>Approcher les marques, fixer ses tarifs</strong></p>
        <p>Comment positionner votre valeur et négocier des deals gagnant-gagnant.</p>
        <p><strong>Construire des collaborations gagnant-gagnant</strong></p>
        <p>Les partenariats durables qui génèrent du revenu récurrent.</p>`
      },
      {
        number: 7,
        title: 'Automatiser et optimiser son influence',
        duration: '21 min',
        video: '../assets/videos/standard/chapitre-7.mp4',
        content: `<h3>Automatiser et Optimiser Son Influence</h3>
        <p><strong>Outils de planification, analytics, CRM</strong></p>
        <p>Les meilleurs outils pour gagner du temps et travailler plus efficacement.</p>
        <p><strong>Gagner du temps et maximiser ses résultats</strong></p>
        <p>Travaillez moins, gagnez plus avec l'automatisation intelligente.</p>`
      },
      {
        number: 8,
        title: 'CollabAfriq : votre passerelle vers les marques',
        duration: '17 min',
        video: '../assets/videos/standard/chapitre-8.mp4',
        content: `<h3>CollabAfriq : Votre Passerelle Vers les Marques</h3>
        <p><strong>Présentation de la marketplace en bêta</strong></p>
        <p>Découvrez la plateforme qui connecte influenceurs et marques en Afrique.</p>
        <p><strong>Créer son profil influenceur, accéder aux offres des marques</strong></p>
        <p>Configuration complète et opportunités de monétisation immédiates.</p>
        <p><strong>Paiement intégré via Mobile Money</strong></p>
        <p>Recevez vos paiements facilement via les portefeuilles mobiles populaires.</p>`
      }
    ]
  },

  premium: {
    id: 'premium',
    title: 'Monétisez votre audience et devenez indépendant - Premium',
    level: 'Avancé',
    description: 'Maîtrisez la monétisation et créez votre empire digital',
    certificat: true,
    chapters: [
      {
        number: 1,
        title: 'Introduction au marketing d\'influence',
        duration: '15 min',
        video: '../assets/videos/premium/chapitre-1.mp4',
        content: `<h3>Introduction au Marketing d'Influence</h3>
        <p>Fondamentaux avancés et stratégie globale pour bâtir un empire d'influence.</p>`
      },
      {
        number: 2,
        title: 'Construire et engager son audience',
        duration: '18 min',
        video: '../assets/videos/premium/chapitre-2.mp4',
        content: `<h3>Construire et Engager Son Audience</h3>
        <p>Stratégies avancées pour une audience massive et ultra-engagée.</p>`
      },
      {
        number: 3,
        title: 'Les bases de la monétisation',
        duration: '16 min',
        video: '../assets/videos/premium/chapitre-3.mp4',
        content: `<h3>Les Bases de la Monétisation</h3>
        <p>Approche holistique de tous les leviers de monétisation.</p>`
      },
      {
        number: 4,
        title: 'Plan d\'action simple pour débuter',
        duration: '14 min',
        video: '../assets/videos/premium/chapitre-4.mp4',
        content: `<h3>Plan d'Action Simple Pour Débuter</h3>
        <p>Roadmap stratégique pour l'indépendance financière complète.</p>`
      },
      {
        number: 5,
        title: 'Créer du contenu premium et différenciant',
        duration: '22 min',
        video: '../assets/videos/premium/chapitre-5.mp4',
        content: `<h3>Créer du Contenu Premium et Différenciant</h3>
        <p>Production de contenu professionnel à l'échelle avec storytelling puissant.</p>`
      },
      {
        number: 6,
        title: 'Négocier avec les marques et partenaires',
        duration: '20 min',
        video: '../assets/videos/premium/chapitre-6.mp4',
        content: `<h3>Négocier Avec Les Marques et Partenaires</h3>
        <p>Négociation avancée, contrats complexes et partenariats multi-niveaux.</p>`
      },
      {
        number: 7,
        title: 'Automatiser et optimiser son influence',
        duration: '23 min',
        video: '../assets/videos/premium/chapitre-7.mp4',
        content: `<h3>Automatiser et Optimiser Son Influence</h3>
        <p>Systèmes d'automatisation sophistiqués pour une machine de génération de revenus.</p>`
      },
      {
        number: 8,
        title: 'Créer et vendre ses propres produits',
        duration: '24 min',
        video: '../assets/videos/premium/chapitre-8.mp4',
        content: `<h3>Créer et Vendre Ses Propres Produits</h3>
        <p><strong>Transformer son expertise en ebooks, formations, coaching ou produits physiques</strong></p>
        <p>Créez des produits qui génèrent des revenus passifs massifs.</p>
        <p><strong>Devenir indépendant des marques</strong></p>
        <p>Ne dépendez plus des partenariats. Générez vos propres revenus.</p>`
      },
      {
        number: 9,
        title: 'Construire une marque personnelle forte',
        duration: '25 min',
        video: '../assets/videos/premium/chapitre-9.mp4',
        content: `<h3>Construire Une Marque Personnelle Forte</h3>
        <p><strong>Identité visuelle, ton, univers</strong></p>
        <p>Créez une marque mémorable et reconnaissable instantanément.</p>
        <p><strong>Passer d'influenceur à véritable marque</strong></p>
        <p>Transformez votre influence en un véritable actif commercial.</p>`
      },
      {
        number: 10,
        title: 'Stratégies de croissance et diversification',
        duration: '26 min',
        video: '../assets/videos/premium/chapitre-10.mp4',
        content: `<h3>Stratégies de Croissance et Diversification</h3>
        <p><strong>Publicité payante, collaborations internationales</strong></p>
        <p>Explosez votre croissance avec les bonnes stratégies.</p>
        <p><strong>Diversification des revenus pour pérenniser son activité</strong></p>
        <p>Créez une base de revenus stable et croissante.</p>`
      },
      {
        number: 11,
        title: 'CollabAfriq : votre passerelle vers les marques',
        duration: '19 min',
        video: '../assets/videos/premium/chapitre-11.mp4',
        content: `<h3>CollabAfriq : Votre Passerelle Vers les Marques - Edition Pro</h3>
        <p><strong>Utilisation avancée de CollabAfriq pour maximiser ses revenus</strong></p>
        <p>Stratégies pro pour tirer le maximum de la plateforme.</p>
        <p><strong>Optimiser son profil pour attirer les marques</strong></p>
        <p>Positionnez-vous comme influenceur premium.</p>
        <p><strong>Gérer plusieurs collaborations en parallèle</strong></p>
        <p>Systèmes pour gérer une portefeuille de projets simultanés.</p>
        <p><strong>Exploiter les données de la plateforme pour améliorer ses performances</strong></p>
        <p>Utilisez l'analytics pour optimiser continuellement vos stratégies.</p>`
      }
    ]
  }
};

// ========================================
// GESTION DES FORMATIONS
// ========================================

class FormationManager {
  constructor(courseId) {
    this.courseId = courseId;
    this.courseData = FORMATIONS_DATA[courseId];
    this.userSession = JSON.parse(localStorage.getItem('userSession'));
  }

  getChapter(number) {
    return this.courseData.chapters.find(ch => ch.number === number);
  }

  getAllChapters() {
    return this.courseData.chapters;
  }

  markChapterComplete(number) {
    if (!this.userSession) return false;

    if (!this.userSession.progress.completedChapters.includes(number)) {
      this.userSession.progress.completedChapters.push(number);
    }

    localStorage.setItem('userSession', JSON.stringify(this.userSession));
    return true;
  }

  isChapterCompleted(number) {
    return this.userSession.progress.completedChapters.includes(number);
  }

  getProgressPercentage() {
    const total = this.courseData.chapters.length;
    const completed = this.userSession.progress.completedChapters.length;
    return Math.round((completed / total) * 100);
  }

  canAccessQuiz() {
    return this.userSession.progress.completedChapters.length === this.courseData.chapters.length;
  }
}

// Initialiser et exporter globalement
let formationManager;

function initFormation(courseId) {
  formationManager = new FormationManager(courseId);
  return formationManager;
}
