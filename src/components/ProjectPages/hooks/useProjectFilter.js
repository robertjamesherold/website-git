import { useState, useMemo } from 'react'

export default function useProjectFilter(projects, initialFilter = 'all') {
  const [activeFilter, setActiveFilter] = useState(initialFilter)

  const filteredProjects = useMemo(() => {
    return activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter)
  }, [projects, activeFilter])

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured)
  }, [projects])

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    featuredProjects
  }
}
