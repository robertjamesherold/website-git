import concretegold from '@img/concretegold/moodboard.jpg'
import start from '@img/elearning/start.png'


export const caseCategories = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'webdesign', label: 'Webdesign' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'mobile', label: 'Mobile Design' }
]

export const caseData = [
  {
   id: 1,
    title: 'Imagefilm für Concrete Gold',
    category: 'Case Study',
    description: 'Die folgende Fallstudie wird sich mit der Erarbeitung und Planung des Imagefilms für Concrete Gold befassen.',
    image: concretegold,
    technologies: ['Videokonzeption', 'Imagefilm'],
    link: '/fallstudien/concretegold',
    featured: true
  },
  {
    id: 2,
    title: 'E-Learning Konzept für Kinder',
    category: 'ui-ux',
    description: 'Intuitive Benutzeroberfläche für eine E-Learning Plattform mit Schwerpunkt auf intuitiver Benutzerfreundlichkeit.',
    image: start,
    technologies: ['E-Learning', 'Kinderfreundlich', 'Interaktiv'],
    link: '/fallstudien/elearning',
    featured: true
  },]