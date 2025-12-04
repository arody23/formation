# 🎓 Plateforme de Formation LMS - Aroman EMETSHU

Plateforme complète de gestion d'apprentissage en ligne avec **authentification par clé**, **suivi de progression**, **quiz automatisés** et **certificats PDF**.

---

## 📋 Vue d'ensemble

### Caractéristiques principales

✅ **Authentification sécurisée** avec 3 clés d'accès différentes  
✅ **3 formations** avec niveaux variables (4, 7, 10 chapitres)  
✅ **Suivi de progression** en temps réel avec barre de progression  
✅ **Système de quiz** avec 10 questions par formation  
✅ **Certificats auto-générés** (Standard & Premium uniquement)  
✅ **Responsive design** - Fonctionne sur tous les appareils  
✅ **Stockage local** - Aucun serveur backend nécessaire  
✅ **Design professionnel** - Inspiré du site aromanemetshu.com  

---

## 🚀 Démarrage rapide

### 1. Accès au site

Ouvrez `index.html` dans votre navigateur ou hébergez sur un serveur web.

### 2. Clés d'accès disponibles

| Clé | Formation | Niveau | Chapitres | Certificat |
|-----|-----------|--------|-----------|------------|
| `KEY-ESSENTIEL-2024` | Essentiel | Débutant | 4 | ❌ Non |
| `KEY-STANDARD-2024` | Standard | Intermédiaire | 7 | ✅ Oui |
| `KEY-PREMIUM-2024` | Premium | Avancé | 10 | ✅ Oui |

### 3. Flux utilisateur complet

```
1. index.html → Entrée clé d'accès
2. dashboard.html → Sélection formation & visualisation progression
3. formations/[essentiel|standard|premium].html → Chapitres & vidéos
4. quiz/quiz-[essentiel|standard|premium].html → Quiz 10 questions
5. certificates/ → Téléchargement certificat PDF (si réussi)
```

---

## 📁 Structure des fichiers

```
Formation/
├── index.html                    (Page login)
├── dashboard.html                (Sélection formation)
│
├── formations/
│   ├── essentiel.html           (4 chapitres)
│   ├── standard.html            (7 chapitres)
│   └── premium.html             (10 chapitres)
│
├── quiz/
│   ├── quiz-essentiel.html      (10 questions)
│   ├── quiz-standard.html       (10 questions)
│   ├── quiz-premium.html        (10 questions)
│   └── quiz-shared.css          (Styles communs)
│
├── certificates/
│   └── certificate.html         (Visualiseur certificat)
│
└── assets/
    ├── css/
    │   └── style.css            (Styles globaux)
    ├── js/
    │   ├── app.js               (Authentification & session)
    │   ├── formations.js        (Gestion des formations)
    │   ├── quiz.js              (Logique quiz)
    │   └── certificate.js       (Génération PDF)
    ├── videos/                  (Dossier pour vidéos)
    └── data/                    (Données JSON optionnelles)
```

---

## 🔐 Système d'authentification

### Fonctionnement

1. L'utilisateur entre une clé d'accès sur la page d'accueil
2. La clé est validée en JavaScript côté client
3. Une session est créée dans `localStorage`
4. L'utilisateur est redirigé vers le dashboard

### Sécurité

- ⚠️ **Note** : Les clés sont en clair pour la démo. En production :
  - Utiliser un backend pour valider les clés
  - Implémenter JWT ou OAuth2
  - Ne jamais stocker de données sensibles en localStorage

### Données stockées

```javascript
{
  key: "KEY-ESSENTIEL-2024",
  courseId: "essentiel",
  courseName: "Formation Essentiel",
  level: "Débutant",
  chapters: 4,
  certificat: false,
  loginTime: "2025-01-15T10:30:00Z",
  progress: {
    completedChapters: [1, 2],
    currentChapter: 3,
    lastAccessed: "2025-01-15T10:45:00Z"
  },
  quizScore: null
}
```

---

## 📚 Gestion des formations

### Strukture d'un chapitre

```javascript
{
  number: 1,
  title: "Chapitre 1 : Les Fondamentaux",
  duration: "15 min",
  video: "essentiel/chapitre-1.mp4",  // Placeholder
  content: "<h3>Contenu HTML...</h3>"
}
```

### Fonctionnalités

✅ Navigation entre chapitres  
✅ Marquer un chapitre comme complété  
✅ Barre de progression globale  
✅ Accès au quiz quand tous les chapitres sont complétés  
✅ Reprise à partir du dernier chapitre étudié  

---

## 🧪 Système de Quiz

### Structure

- **10 questions** par formation
- **Différents niveaux** de difficulté selon la formation
- **Score de passage** : 60% (Essentiel), 70% (Standard), 75% (Premium)
- **Feedback immédiat** après chaque réponse

### Types de questions

- QCM (Choix multiples)
- 4 options par question
- 1 réponse correcte

### Exemple

```javascript
{
  id: 1,
  question: "Quel est le principal avantage du digital marketing ?",
  options: [
    "Il est gratuit",
    "Il est mesurable et offre un meilleur ROI",
    "Il atteint uniquement les jeunes",
    "Il remplace le marketing traditionnel"
  ],
  correctAnswer: 1  // Index de la bonne réponse
}
```

---

## 🎖️ Système de certificats

### Conditions

- ✅ Formation **Standard** : Quiz réussi (>70%)
- ✅ Formation **Premium** : Quiz réussi (>75%)
- ❌ Formation **Essentiel** : Pas de certificat

### Contenus du certificat

- Nom de la formation
- Niveau
- Numéro unique de certificat
- Date de complétion
- Score obtenu
- Logo Aroman EMETSHU
- Design professionnel

### Génération

Le certificat est généré en **PDF** via la bibliothèque **jsPDF** (chargée depuis CDN).

```javascript
generateCertificate(userSession);
// → Télécharge : Certificat_[courseId]_[numero].pdf
```

---

## 🎨 Palette de couleurs

Inspirée du site aromanemetshu.com :

```css
--primary: #1a1a1a;         /* Noir profond */
--secondary: #2d9cdb;       /* Bleu électrique */
--accent: #f39c12;          /* Orange doré */
--success: #27ae60;         /* Vert réussite */
--danger: #e74c3c;          /* Rouge alerte */
```

---

## 💻 Compatibilité

- ✅ Chrome / Edge (versions récentes)
- ✅ Firefox (versions récentes)
- ✅ Safari (iOS 14+)
- ✅ Mobile (Responsive)

---

## 🔧 Customisation

### Ajouter une nouvelle formation

1. Ajouter une clé dans `COURSES_CONFIG` (app.js)
2. Créer les données dans `FORMATIONS_DATA` (formations.js)
3. Ajouter les questions dans `QUIZZES_DATA` (quiz.js)
4. Créer les fichiers HTML correspondants

### Modifier les questions du quiz

Éditez le fichier `assets/js/quiz.js` et mettez à jour `QUIZZES_DATA`.

### Changer la palette de couleurs

Modifiez les variables CSS dans `assets/css/style.css` (lignes 6-15).

---

## 📱 Responsive Design

- **Desktop** : Layout optimal avec sidebar
- **Tablette** : Layout adapté
- **Mobile** : Full width, navigation optimisée

---

## 🚀 Déploiement

### Option 1 : Statique (recommandé pour démo)

- Héberger sur GitHub Pages
- Netlify
- Vercel
- Any static host

### Option 2 : Avec serveur

- Node.js + Express
- Python + Flask
- PHP
- Ajouter backend pour sécuriser les clés

---

## 📝 Notes importantes

### Sécurité

⚠️ **Attention** : Cette version est une **démo** avec sécurité minimale.

Pour une production réelle :
- Ajouter authentification backend
- Chiffrer les données
- Implémenter HTTPS
- Valider les clés côté serveur
- Protéger l'accès aux vidéos

### Données

- Les données utilisateur sont stockées dans **localStorage**
- Aucun sync avec serveur dans cette version
- Les données sont perdues si le cache est vidé
- Pour persistence : ajouter un backend

### Vidéos

- Les vidéos doivent être placées dans `assets/videos/[courseId]/`
- Support des formats : MP4, WebM, OGG
- Les vidéos n'ont pas de contrôle de téléchargement côté client
- Héberger les vidéos sur un CDN ou serveur sécurisé en production

---

## 🐛 Dépannage

### Le quiz ne s'affiche pas

→ Vérifier que tous les chapitres sont marqués comme complétés

### Le certificat ne se génère pas

→ Vérifier que :
- Le score dépasse le minimum requis
- Le plan inclut les certificats (Standard ou Premium)
- jsPDF est chargé correctement

### La progression n'est pas sauvegardée

→ Vérifier que :
- JavaScript est activé
- localStorage n'est pas désactivé
- Le navigateur supporte localStorage

---

## 📧 Support

Pour questions ou améliorations :
- Contact : contact@aromanemetshu.com
- WhatsApp : +242 06 745 8011

---

## 📄 Licence

© 2025 Aroman EMETSHU - Tous droits réservés.

---

**Dernière mise à jour** : Janvier 2025  
**Version** : 1.0
