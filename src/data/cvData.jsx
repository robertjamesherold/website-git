import Me from '@img/me.png'

export const personalInfo = {
  name: "Robert James Herold",
  title: "Mediendesigner & UI/UX Designer",
  profileImage: Me,
  downloadUrl: "/cv-robert-james-herold.pdf",
  contact: {
    address: {
      street: "Im Kammerfest 23",
      city: "63628 Bad Soden-Salmünster"
    },
    email: "robertjamesherold@icloud.com",
    phone: "+49 151 616 60 444",
    website: "robertjamesherold.com"
  }
}

export const education = [
  {
    period: "2022 - 2025",
    title: "Bachelor of Arts Mediendesign",
    institution: "IU Internationale Hochschule, Erfurt",
    description: "Schwerpunkte: UI/UX Design, Webdesign, Digitale Medienformate",
    metrics: [
      { label: "135/180 ECTS", value: "135/180 ECTS" },
      { label: "Durchschnitt", value: "∅ 1,8" }
    ]
  },
  {
    period: "2015 - 2017",
    title: "Fachhochschulreife",
    institution: "Gutenbergschule, Frankfurt am Main",
    description: "Fachrichtung: Gestaltung"
  }
]

export const experience = [
  {
    period: "2024 - heute",
    title: "Webdesigner & UI/UX Designer",
    institution: "Freelancer - Remote/Homeoffice",
    tasks: [
      "Konzeption und Gestaltung von Websites und Web-Anwendungen",
      "User Interface und User Experience Design",
      "Responsive Design für alle Endgeräte",
      "Zusammenarbeit mit Entwicklern und Kunden"
    ]
  },
  {
    period: "2020 - 2022",
    title: "Verkäufer im Einzelhandel",
    institution: "Blume 2000, Fulda",
    tasks: [
      "Kundenberatung und Verkauf",
      "Warenpräsentation und Visual Merchandising",
      "Teamarbeit und Kundenservice"
    ]
  },
  {
    period: "2015 - 2016",
    title: "Praktikum Mediengestalter",
    institution: "sixeyesmedia GmbH, Schlüchtern",
    tasks: [
      "Erste Einblicke in die Medienbranche",
      "Unterstützung bei Gestaltungsprojekten",
      "Erlernen professioneller Design-Software"
    ]
  }
]

export const additionalActivities = [
  {
    period: "01/2025 - 06/2025",
    title: "Studierendenvertreter",
    institution: "IU Internationale Hochschule - Mediendesign",
    tasks: [
      "Vertretung der Studierenden im Studiengang",
      "Kommunikation zwischen Hochschule und Studierenden",
      "Einbringung von Verbesserungsvorschlägen"
    ]
  }
]

export const skillCategories = [
  {
    title: "Design Software",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Photoshop", level: 90 },
      { name: "Illustrator", level: 85 },
      { name: "InDesign", level: 80 }
    ]
  },
  {
    title: "Web Technologien",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "WordPress", level: 80 }
    ]
  },
  {
    title: "Video & Audio",
    skills: [
      { name: "After Effects", level: 75 },
      { name: "Premiere Pro", level: 70 }
    ]
  }
]

export const academicHighlights = [
  {
    title: "Beste Noten in Kernfächern",
    items: [
      "Projekt: Cross-Media Design (1,0)",
      "Projekt: Grafikdesign (1,0)",
      "Gestaltung interaktiver Medien (1,0)",
      "Bild- und Videobearbeitung (1,0)"
    ]
  },
  {
    title: "Schwerpunkte",
    items: [
      "User Experience Design",
      "Mobile Media Design",
      "Webdesign & UI Design",
      "Audio-visuelle Medien"
    ]
  }
]

export const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Englisch", level: "Verhandlungssicher" }
]

export const ctaSection = {
  title: "Interessiert an einem gemeinsamen Projekt?",
  description: "Ich freue mich darauf, neue Projekte und Herausforderungen anzunehmen. Lassen Sie uns über Ihre Ideen sprechen!",
  buttons: [
    { 
      text: "Kontakt aufnehmen", 
      url: "#contact", 
      type: "primary" 
    },
    { 
      text: "E-Mail schreiben", 
      url: "mailto:robertjamesherold@icloud.com", 
      type: "secondary" 
    }
  ]
}