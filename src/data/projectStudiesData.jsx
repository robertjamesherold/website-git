// Import aller Bilder für Project Studies
import olivetoG3 from '@img/oliveto/g3.webp';
import olivetoG4 from '@img/oliveto/g4.webp';
import olivetoG5 from '@img/oliveto/g5.webp';
import olivetoG6 from '@img/oliveto/g6.webp';
import olivetoG7 from  '@img/oliveto/g7.webp';
import olivetoG8 from '@img/oliveto/g8.webp';
import olivetoG9 from '@img/oliveto/g9.webp'; 
import olivetoG10 from '@img/oliveto/g10.webp';
import olivetoG11 from '@img/oliveto/g11.webp';
import olivetoG2 from '@img/oliveto/g12.webp';
import olivetoG1 from '@img/oliveto/p4.webp';
 
// Image Maps für Project Studies
const olivetoImageMap = {
  'g3': olivetoG3,
  'g4': olivetoG4,
  'g5': olivetoG5,
  'g6': olivetoG6,
  'g7': olivetoG7,
  'g8': olivetoG8,
  'g9': olivetoG9,
  'g10': olivetoG10,
  'g11': olivetoG11,
  'g12': olivetoG2,
  'p4': olivetoG1
};



// Portfolio Redesign Project Study
export const portfolioProjectData = {
  id: 'portfolio-redesign',
  slug: 'portfolio-redesign',
  title: "Portfolio Website Redesign",
  subtitle: "Neugestaltung meiner persönlichen Website mit modernem Design-Ansatz",
  client: "Eigenprojekt",
  date: "März 2024",
  duration: "6 Wochen",
  category: "Webdesign & UI/UX",
  tags: ["React", "Design System", "Responsive Design", "Performance"],
  imageMap: olivetoImageMap,

  sections: [
    {
      id: 'ausgangslage',
      title: 'Cross-Media-Webdesign',
      subsections: [
        {
          text: `Die bestehende Portfolio-Website wies verschiedene Usability-Probleme und veraltete Design-Elemente auf:

• Unklare Navigation und Informationsarchitektur
• Schlechte Performance auf mobilen Geräten
• Veraltetes Design ohne kohärente Gestaltung
• Fehlende Interaktivität und moderne Web-Standards
• Unzureichende Präsentation der Projektarbeiten

Das Ziel war es, eine moderne, benutzerfreundliche und technisch optimierte Website zu entwickeln, die meine Fähigkeiten als Designer und Entwickler optimal präsentiert.`
        },]
    },]
    ,

  gallery: [
    {
      id: 1,
      url: olivetoG1,
      category: 'konzeption'
    },
    {
      id: 2,
      url: olivetoG2,
      category: 'design'
    },
    {
      id: 3,
      url: olivetoG3,
      category: 'umsetzung'
    },{
      id: 4,
      url: olivetoG4,
      category: 'konzeption'
    },
    {
      id: 5,
      url: olivetoG5,
      category: 'design'
    },
  {
      id: 6,
      url: olivetoG6,
      category: 'konzeption'
    },
    {
      id: 7,
      url: olivetoG7,
      category: 'design'
    },
    {
      id: 8,
      url: olivetoG8,
      category: 'umsetzung'
    }
    ,{
      id: 9,
      url: olivetoG9,
      category: 'konzeption'
    },
    {
      id: 10,
      url: olivetoG10,
      category: 'design'
    },
    {
      id: 11,
      url: olivetoG11,
      category: 'umsetzung'
    },
  ]
};



// Alle Project Studies sammeln
export const allProjectStudies = [
  portfolioProjectData,
];

// Helper-Funktionen
export const getProjectStudyBySlug = (slug) => {
  return allProjectStudies.find(study => study.slug === slug);
};

export const getProjectStudyById = (id) => {
  return allProjectStudies.find(study => study.id === id);
};

export const getRelatedProjectStudies = (currentId, limit = 3) => {
  return allProjectStudies
    .filter(study => study.id !== currentId)
    .slice(0, limit);
};