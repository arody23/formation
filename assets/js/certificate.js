/* ========================================
   SYSTÈME DE GÉNÉRATION DE CERTIFICAT
   ======================================== */

// Charger jsPDF depuis CDN
function loadJsPDF() {
  return new Promise((resolve) => {
    if (window.jsPDF) {
      resolve();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => resolve();
      document.head.appendChild(script);
    }
  });
}

async function generateCertificate(userSession) {
  await loadJsPDF();

  const { jsPDF } = window;

  if (!jsPDF) {
    alert('Erreur : impossible de charger la bibliothèque PDF');
    return;
  }

  // Dimensions A4 paysage
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const centerX = width / 2;

  // ===== BACKGROUND BLANC =====
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, width, height, 'F');

  // ===== BORDER PRINCIPAL - DÉGRADÉ BLEU =====
  doc.setDrawColor(102, 126, 234);
  doc.setLineWidth(4);
  doc.rect(8, 8, width - 16, height - 16);

  // Border interne doré
  doc.setDrawColor(243, 156, 18);
  doc.setLineWidth(1.5);
  doc.rect(12, 12, width - 24, height - 24);

  // ===== HEADER COLORÉ =====
  doc.setFillColor(102, 126, 234);
  doc.rect(15, 15, width - 30, 25, 'F');

  // Icône certificat
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text('📜', 25, 34, { align: 'left' });

  // Titre principal
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(102, 126, 234);
  doc.text('CERTIFICAT DE RÉUSSITE', centerX, 55, { align: 'center' });

  // Ligne décorative
  doc.setDrawColor(243, 156, 18);
  doc.setLineWidth(2);
  doc.line(40, 62, width - 40, 62);

  // ===== CONTENU PRINCIPAL =====
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Ce certificat est décerné à', centerX, 75, { align: 'center' });

  // Nom du participant - GRAND
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(102, 126, 234);
  const participantName = (userSession.fullName || userSession.userName || 'Participant').toUpperCase();
  doc.text(
    participantName,
    centerX,
    90,
    { align: 'center' }
  );

  // Texte suite
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Pour avoir complété avec succès', centerX, 102, { align: 'center' });

  // Nom de la formation
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(102, 126, 234);
  const courseName = getCourseNameFull(userSession.courseId);
  doc.text(
    courseName,
    centerX,
    115,
    { align: 'center',
      maxWidth: width - 40
    }
  );

  // Score
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(100, 100, 100);
  const score = Math.round(userSession.quizScore);
  doc.text(`Avec un score obtenu de ${score}%`, centerX, 128, { align: 'center' });

  // Ligne séparatrice
  doc.setDrawColor(102, 126, 234);
  doc.setLineWidth(1);
  doc.line(30, 138, width - 30, 138);

  // ===== FOOTER =====
  // Date
  const certificateNumber = generateCertificateNumber();
  const completionDate = new Date(userSession.quizCompletedAt || new Date());
  const formattedDate = completionDate.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text(
    `Émis le : ${formattedDate}`,
    25,
    155
  );

  // Numéro certificat
  doc.text(
    `Certificat n° : ${certificateNumber}`,
    centerX,
    155,
    { align: 'center' }
  );

  // Signature et informations
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Signature du Directeur', width - 60, 148);
  
  doc.setLineWidth(0.5);
  doc.setDrawColor(200, 200, 200);
  doc.line(width - 70, 152, width - 20, 152);
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Aroman EMETSHU', width - 60, 158, { align: 'center' });
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text('Directeur - Plateforme', width - 60, 163, { align: 'center' });

  // Texte certificat authentique
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text(
    'Ce certificat confirme que le titulaire a démontré les compétences requises et a réussi les évaluations avec succès.',
    centerX,
    168,
    { align: 'center',
      maxWidth: width - 40
    }
  );

  // Logos/Sceaux
  doc.setFillColor(102, 126, 234);
  doc.setDrawColor(102, 126, 234);
  doc.circle(30, height - 20, 6);
  
  doc.setFillColor(243, 156, 18);
  doc.setDrawColor(243, 156, 18);
  doc.circle(width - 30, height - 20, 6);

  // Télécharger le PDF
  const fileName = `Certificat_${participantName.replace(/\s+/g, '_')}_${certificateNumber}.pdf`;
  doc.save(fileName);
}

function generateCertificateNumber() {
  const date = new Date();
  const random = Math.floor(Math.random() * 10000);
  return `CERT-${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${random}`;
}

function getCourseNameFull(courseId) {
  const names = {
    'essentiel': 'Formation Essentiel - Fondamentaux du Digital Marketing',
    'standard': 'Formation Standard - Stratégies Avancées de Marketing Digital',
    'premium': 'Formation Premium - Expert en Marketing Digital'
  };
  return names[courseId] || 'Formation';
}
