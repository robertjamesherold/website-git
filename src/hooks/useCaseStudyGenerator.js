import { useState, useMemo } from 'react'
import { allCaseStudies, getRelatedStudies } from '@data/caseStudiesData'

export function useCaseStudyGenerator() {
  const [currentStudyId, setCurrentStudyId] = useState(null)

  // Case Study mit erweiterten Related Studies
  const enrichedCaseStudy = useMemo(() => {
    if (!currentStudyId) return null

    const baseStudy = allCaseStudies.find(study => study.id === currentStudyId)
    if (!baseStudy) return null

    return {
      ...baseStudy,
      relatedStudies: getRelatedStudies(currentStudyId, 3)
    }
  }, [currentStudyId])

  // Alle verfügbaren Case Studies
  const availableStudies = useMemo(() => {
    return allCaseStudies.map(study => ({
      id: study.id,
      slug: study.slug,
      title: study.title,
      client: study.client,
      category: study.category,
      coverImage: study.coverImage
    }))
  }, [])

  // Case Study Navigation
  const navigateToStudy = (studyId) => {
    setCurrentStudyId(studyId)
  }

  const getNextStudy = () => {
    const currentIndex = allCaseStudies.findIndex(study => study.id === currentStudyId)
    const nextIndex = (currentIndex + 1) % allCaseStudies.length
    return allCaseStudies[nextIndex]
  }

  const getPreviousStudy = () => {
    const currentIndex = allCaseStudies.findIndex(study => study.id === currentStudyId)
    const prevIndex = currentIndex === 0 ? allCaseStudies.length - 1 : currentIndex - 1
    return allCaseStudies[prevIndex]
  }

  return {
    currentStudy: enrichedCaseStudy,
    availableStudies,
    navigateToStudy,
    getNextStudy,
    getPreviousStudy,
    totalStudies: allCaseStudies.length
  }
}