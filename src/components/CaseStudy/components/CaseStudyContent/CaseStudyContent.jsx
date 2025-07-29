import { useEffect, useRef } from 'react'
import { RichText } from './RichText'
import styles from './_CaseStudyContent.module.scss'

export function CaseStudyContent({ sections, activeSection, imageMap = {} }) {

  return (
    <article className={styles.content}>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${styles.section} ${activeSection === section.id ? styles.active : ''}`}
        >
          {/* Section Header ohne Button - nur zur Anzeige */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          </div>

          {/* Content ist immer sichtbar, aber nur aktive Section wird hervorgehoben */}
          <div className={styles.sectionContent}>
            {section.content && (
              <RichText text={section.content} className={styles.sectionMainText} imageMap={imageMap} />
            )}

            {section.subsections && section.subsections.length > 0 && (
              <div className={styles.subsections}>
                {section.subsections.map((sub, index) => (
                  <div key={index} className={styles.subsection}>
                    {sub.subtitle && (
                      <h4 className={styles.subtitle}>{sub.subtitle}</h4>
                    )}
                    {sub.sub && (
                      <h5 className={styles.subSub}>{sub.sub}</h5>
                    )}
                    {sub.text && (
                      <RichText text={sub.text} className={styles.subtext} imageMap={imageMap} />
                    )}
                    
                    {/* Verschachtelte Sub-Subsections für Szenen */}
                    {sub.subsubsections && sub.subsubsections.length > 0 && (
                      <div className={styles.subsubsections}>
                        {sub.subsubsections.map((subsub, subIndex) => (
                          <div key={subIndex} className={styles.subsubsection}>
                            {subsub.sub && (
                              <h6 className={styles.subSub}>{subsub.sub}</h6>
                            )}
                            {subsub.text && (
                              <RichText text={subsub.text} className={styles.subsubtext} />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {sub.image && (
                      <figure className={styles.imageContainer}>
                        <img src={sub.image} alt={sub.name || sub.subtitle} className={styles.subimage} />
                        {sub.name && (
                          <figcaption className={styles.subtech}>{sub.name}</figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </article>
  )
}