import { useParams, Navigate } from 'react-router-dom'
import { UniversalCaseStudy } from '@cm/CaseStudy/UniversalCaseStudy'
import { getCaseStudyBySlug } from '@data/caseStudiesData.jsx'

export function DynamicCaseStudyPage() {
  const { slug } = useParams()
  
  // Case Study anhand des Slugs finden
  const caseStudyData = getCaseStudyBySlug(slug)

  // Redirect zu 404 wenn nicht gefunden
  if (!caseStudyData) {
    return <Navigate to="/404" replace />
  }

  return <UniversalCaseStudy caseStudyData={caseStudyData} />
}

