import { useState, useEffect, useRef } from 'react'
import styles from './_Skills.module.scss'

export function Skills() {
  const [isVisible, setIsVisible] = useState({})
  const sectionRefs = useRef({})

  // Intersection Observer für Animationen
  useEffect(() => {
    const observers = []

    Object.keys(sectionRefs.current).forEach(key => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }))
            }
          })
        },
        { threshold: 0.3 }
      )

      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key])
        observers.push(observer)
      }
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  const designSkills = [
    { name: 'Figma', level: 95, icon: '🎨', description: 'UI/UX Design, Prototyping, Design Systems' },
    { name: 'Photoshop', level: 90, icon: '🖼️', description: 'Bildbearbeitung, Digital Art, Compositing' },
    { name: 'Illustrator', level: 85, icon: '✏️', description: 'Vektorgrafiken, Logos, Illustrationen' },
    { name: 'InDesign', level: 80, icon: '📄', description: 'Layout Design, Print Design, Typografie' },
    { name: 'After Effects', level: 75, icon: '🎬', description: 'Motion Graphics, Animation, Video Effects' },
    { name: 'Premiere Pro', level: 70, icon: '🎞️', description: 'Videobearbeitung, Color Grading, Audio' }
  ]

  const webSkills = [
    { name: 'HTML5', level: 90, icon: '🏗️', description: 'Semantic Markup, Accessibility, SEO' },
    { name: 'CSS3', level: 85, icon: '🎨', description: 'Responsive Design, Animations, Grid/Flexbox' },
    { name: 'JavaScript', level: 75, icon: '⚡', description: 'ES6+, DOM Manipulation, Interaktivität' },
    { name: 'SCSS/Sass', level: 80, icon: '💅', description: 'Variables, Mixins, Modular CSS' },
    { name: 'WordPress', level: 80, icon: '📝', description: 'Custom Themes, Plugins, CMS' },
    { name: 'Git', level: 70, icon: '📚', description: 'Versionskontrolle, Collaboration' }
  ]

  const designProcesses = [
    {
      title: 'Research & Discovery',
      icon: '🔍',
      skills: ['User Research', 'Competitive Analysis', 'Stakeholder Interviews', 'Market Research'],
      description: 'Verstehen der Nutzer und des Marktes durch umfassende Recherche.'
    },
    {
      title: 'Ideation & Concept',
      icon: '💡',
      skills: ['Brainstorming', 'Sketching', 'Mind Mapping', 'User Journey Mapping'],
      description: 'Entwicklung kreativer Lösungsansätze und Konzepte.'
    },
    {
      title: 'Design & Prototyping',
      icon: '🎨',
      skills: ['Wireframing', 'Visual Design', 'Prototyping', 'Design Systems'],
      description: 'Umsetzung der Konzepte in visuelle und interaktive Designs.'
    },
    {
      title: 'Testing & Iteration',
      icon: '🔄',
      skills: ['Usability Testing', 'A/B Testing', 'User Feedback', 'Design Iteration'],
      description: 'Kontinuierliche Verbesserung durch Tests und Nutzerfeedback.'
    }
  ]

  const achievements = [
    {
      icon: '🎓',
      title: 'Bachelor Mediendesign',
      description: 'IU Internationale Hochschule',
      metric: '1,8 Durchschnitt'
    },
    {
      icon: '👨‍💼',
      title: 'Studierendenvertreter',
      description: 'Mediendesign 2025',
      metric: '6 Monate'
    },
    {
      icon: '💼',
      title: 'Freelance Designer',
      description: 'Seit 2024',
      metric: '10+ Projekte'
    },
    {
      icon: '🏆',
      title: 'Beste Noten',
      description: 'Design-Projekte',
      metric: 'Mehrere 1,0'
    }
  ]

  const tools = [
    { name: 'Figma', category: 'Design', color: '#F24E1E' },
    { name: 'Photoshop', category: 'Design', color: '#31A8FF' },
    { name: 'Illustrator', category: 'Design', color: '#FF9A00' },
    { name: 'InDesign', category: 'Design', color: '#FF3366' },
    { name: 'After Effects', category: 'Video', color: '#9999FF' },
    { name: 'Premiere Pro', category: 'Video', color: '#9999FF' },
    { name: 'HTML', category: 'Web', color: '#E34F26' },
    { name: 'CSS', category: 'Web', color: '#1572B6' },
    { name: 'JavaScript', category: 'Web', color: '#F7DF1E' },
    { name: 'WordPress', category: 'CMS', color: '#21759B' },
    { name: 'Git', category: 'Tools', color: '#F05032' },
    { name: 'Sketch', category: 'Design', color: '#FDB300' }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Skills & Technologien</h1>
          <p className={styles.subtitle}>
            Meine Expertise in Design, Development und kreativen Workflows - 
            von der ersten Idee bis zur finalen Umsetzung.
          </p>
        </div>

        {/* Design Skills */}
        <div 
          className={styles.section}
          ref={el => sectionRefs.current.design = el}
        >
          <h2 className={styles.sectionTitle}>Design Software</h2>
          <div className={`${styles.skillsGrid} ${isVisible.design ? styles.animated : ''}`}>
            {designSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={styles.skillCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <p className={styles.skillDescription}>{skill.description}</p>
                  </div>
                </div>
                <div className={styles.skillLevel}>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress}
                      style={{ 
                        width: isVisible.design ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Skills */}
        <div 
          className={styles.section}
          ref={el => sectionRefs.current.web = el}
        >
          <h2 className={styles.sectionTitle}>Web Technologien</h2>
          <div className={`${styles.skillsGrid} ${isVisible.web ? styles.animated : ''}`}>
            {webSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={styles.skillCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <p className={styles.skillDescription}>{skill.description}</p>
                  </div>
                </div>
                <div className={styles.skillLevel}>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress}
                      style={{ 
                        width: isVisible.web ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div 
          className={styles.section}
          ref={el => sectionRefs.current.process = el}
        >
          <h2 className={styles.sectionTitle}>Design Process</h2>
          <div className={`${styles.processGrid} ${isVisible.process ? styles.animated : ''}`}>
            {designProcesses.map((process, index) => (
              <div 
                key={process.title} 
                className={styles.processCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.processIcon}>{process.icon}</div>
                <h3 className={styles.processTitle}>{process.title}</h3>
                <p className={styles.processDescription}>{process.description}</p>
                <div className={styles.processSkills}>
                  {process.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.processSkill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Overview */}
        <div 
          className={styles.section}
          ref={el => sectionRefs.current.tools = el}
        >
          <h2 className={styles.sectionTitle}>Tools & Software</h2>
          <div className={`${styles.toolsCloud} ${isVisible.tools ? styles.animated : ''}`}>
            {tools.map((tool, index) => (
              <div 
                key={tool.name} 
                className={styles.toolTag}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  '--tool-color': tool.color
                }}
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div 
          className={styles.section}
          ref={el => sectionRefs.current.achievements = el}
        >
          <h2 className={styles.sectionTitle}>Erfolge & Meilensteine</h2>
          <div className={`${styles.achievementsGrid} ${isVisible.achievements ? styles.animated : ''}`}>
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title} 
                className={styles.achievementCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <div className={styles.achievementContent}>
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                  <p className={styles.achievementDescription}>{achievement.description}</p>
                  <span className={styles.achievementMetric}>{achievement.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Bereit für eine Zusammenarbeit?</h2>
          <p className={styles.ctaDescription}>
            Lassen Sie uns gemeinsam an Ihrem nächsten Projekt arbeiten. 
            Meine Skills und Ihre Vision - das perfekte Team!
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaButton}>
              Projekt starten
            </a>
            <a href="#cv" className={styles.ctaButtonSecondary}>
              Lebenslauf ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}