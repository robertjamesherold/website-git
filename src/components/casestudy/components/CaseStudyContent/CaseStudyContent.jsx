import { useEffect, useRef, useState } from 'react'
import styles from './_CaseStudyContent.module.scss'

export function CaseStudyContent({ sections, onSectionVisible }) {
  const observerRef = useRef(null)
  const [openSectionId, setOpenSectionId] = useState(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onSectionVisible(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sections, onSectionVisible])

  const toggleSection = (id) => {
    setOpenSectionId((prevId) => (prevId === id ? null : id))
  }

  return (
    <article className={styles.content}>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={styles.section}
        >
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection(section.id)}
          >
            {section.title}
          </button>

          {openSectionId === section.id && (
            <div className={styles.sectionContent}>
              <p className={styles.sectionMainText}>{section.content}</p>

              {section.subsections?.length > 0 && (
                <div className={styles.subsections}>
                  {section.subsections.map((sub, index) => (
                    <div key={index} className={styles.subsection}>
                      <h4 className={styles.subtitle}>{sub.subtitle}</h4>
                      <h5 className={styles.subSub}>{sub.sub}</h5>
                      <p className={styles.subtext}>{sub.text}</p>
                      <img src={sub.image} alt={sub.name} className={styles.subimage} />
                      <div className={styles.subtech}>{sub.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      ))}
    </article>
  )
}