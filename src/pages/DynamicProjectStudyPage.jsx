import { useParams, Navigate } from 'react-router-dom'
import { UniversalProjectStudy } from '@cm/CaseStudy/UniversalProjectStudy'
import { getProjectStudyBySlug, allProjectStudies } from '@data/projectStudiesData'

export function DynamicProjectStudyPage() {
  const { slug } = useParams()
  
  // Debug Ausgaben (in Produktion entfernen)
  console.log('🔍 URL Slug:', slug)
  console.log('📚 Verfügbare Project Studies:', allProjectStudies?.map(s => ({ id: s.id, slug: s.slug })))
  
  // Project Study anhand des Slugs finden
  const projectStudyData = getProjectStudyBySlug(slug)
  
  console.log('✅ Gefundene Daten:', projectStudyData ? 'Ja' : 'Nein', projectStudyData?.title)

  // Redirect zu 404 wenn nicht gefunden
  if (!projectStudyData) {
    console.log('❌ Project Study nicht gefunden für Slug:', slug)
    return <Navigate to="/404" replace />
  }

  return <UniversalProjectStudy projectStudyData={projectStudyData} />
}