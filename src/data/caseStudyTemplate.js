// Template für neue Case Studies
export const caseStudyTemplate = {
  id: 'unique-id',
  slug: 'url-friendly-slug',
  title: "Projekt Titel",
  subtitle: "Kurze Beschreibung des Projekts",
  client: "Kunde Name",
  date: "Monat YYYY",
  duration: "X Wochen/Monate",
  category: "Kategorie",
  tags: ["Tag1", "Tag2", "Tag3"],
  coverImage: null, // Import hier einfügen
  
  sections: [
    {
      id: 'section-id',
      title: 'Section Titel',
      content: 'Haupttext der Section (optional)',
      subsections: [
        {
          subtitle: 'Untertitel',
          sub: 'Sub-Untertitel (optional)',
          text: 'Haupttext',
          image: null, // Optional
          name: 'Quelle: ...' // Optional für Bildquelle
        }
      ]
    }
  ],
  
  gallery: [
    {
      id: 1,
      url: null, // Bild Import
      caption: 'Bildbeschreibung',
      category: 'kategorie' // Optional für Filterung
    }
  ],
  
  relatedStudies: [] // Wird automatisch gefüllt
};

// Verwendung:
// 1. Template kopieren
// 2. Alle Felder ausfüllen
// 3. Bilder importieren
// 4. In allCaseStudies Array hinzufügen