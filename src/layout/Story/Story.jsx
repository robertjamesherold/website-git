import styles from './_Story.module.scss'
import Me from '@img/me.png'


export function Story() {
  return (
    <section id="about" className={styles.story}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Meine Story
            </h1>
            <p className={styles.heroSubtitle}>
              Wie aus Neugier Leidenschaft wurde und aus Code echte Lösungen entstehen.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img 
              src={Me} 
              alt="Profilbild" 
              className={styles.profileImage}
            />
          </div>
        </div>

        {/* Story Timeline */}
        <div className={styles.timeline}>
          <h2 className={styles.timelineTitle}>Mein Weg zur Entwicklung</h2>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.timelineIcon}>🎓</div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineItemTitle}>Der Anfang - Erste Schritte im Design</h3>
              <span className={styles.timelineDate}>2015 - 2017</span>
              <p className={styles.timelineText}>
                Meine Reise begann an der Gutenbergschule in Frankfurt mit der Fachoberschule 
                Gestaltung. Hier entdeckte ich meine Leidenschaft für visuelles Design und 
                lernte die Grundlagen der kreativen Gestaltung kennen.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.timelineIcon}>🎨</div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineItemTitle}>Erste Praxis - Praktikum bei sixeyesmedia</h3>
              <span className={styles.timelineDate}>2015 - 2016</span>
              <p className={styles.timelineText}>
                Während meines Praktikums bei sixeyesmedia GmbH sammelte ich erste praktische 
                Erfahrungen als Mediengestalter. Hier lernte ich den Arbeitsalltag einer 
                Medienagentur kennen und vertiefte mein Verständnis für professionelles Design.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.timelineIcon}>🎓</div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineItemTitle}>Vertiefung - Mediendesign Studium</h3>
              <span className={styles.timelineDate}>2022 - 2025</span>
              <p className={styles.timelineText}>
                An der IU Internationalen Hochschule studiere ich Mediendesign und erweitere 
                kontinuierlich mein Wissen in UI/UX Design, Webdesign und digitalen Medienformaten. 
                Mit 135 ECTS Credits und einem Durchschnitt von 1,8 bin ich auf dem besten Weg zum Abschluss.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.timelineIcon}>🚀</div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineItemTitle}>Heute - Freelance Webdesigner</h3>
              <span className={styles.timelineDate}>2024 - Heute</span>
              <p className={styles.timelineText}>
                Seit 2024 arbeite ich als freiberuflicher Webdesigner und UI/UX-Designer. 
                Ich verbinde mein akademisches Wissen mit praktischer Erfahrung und erstelle 
                moderne, benutzerfreundliche Designs für verschiedene Kunden.
              </p>
            </div>
          </div>
<div className={styles.timelineItem}>
  <div className={styles.timelineMarker}>
    <div className={styles.timelineIcon}>⚛️</div>
  </div>
  <div className={styles.timelineContent}>
    <h3 className={styles.timelineItemTitle}>Der Durchbruch – React & moderne Frameworks</h3>
    <span className={styles.timelineDate}>2023 – 2024</span>
    <p className={styles.timelineText}>
      React hat meine Art zu denken über Web-Entwicklung komplett verändert. Komponenten, 
      State Management und das gesamte React-Ökosystem eröffneten völlig neue Möglichkeiten. 
      Hier wurde aus Interesse echte Leidenschaft.
    </p>
  </div>
</div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.timelineIcon}>🚀</div>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineItemTitle}>Heute - Full-Stack Developer</h3>
              <span className={styles.timelineDate}>2024 - Heute</span>
              <p className={styles.timelineText}>
                Heute entwickle ich Full-Stack-Anwendungen mit React, Node.js, und modernen Tools. 
                Was als Hobby begann, ist zu meiner Berufung geworden. Ich liebe es, komplexe Probleme 
                zu lösen und benutzerfreundliche Anwendungen zu erstellen.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.values}>
          <h2 className={styles.valuesTitle}>Was mich antreibt</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3 className={styles.valueTitle}>Benutzerzentriert</h3>
              <p className={styles.valueText}>
                Jedes Design entsteht mit dem Nutzer im Fokus. User Experience und 
                intuitive Bedienung stehen bei mir an erster Stelle.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌱</div>
              <h3 className={styles.valueTitle}>Lernen</h3>
              <p className={styles.valueText}>
                Design entwickelt sich rasant weiter. Ich bleibe neugierig, lerne 
                kontinuierlich neue Tools und teile mein Wissen gerne mit anderen.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>👥</div>
              <h3 className={styles.valueTitle}>Zusammenarbeit</h3>
              <p className={styles.valueText}>
                Die besten Designs entstehen im Dialog. Ich schätze offene Kommunikation, 
                konstruktives Feedback und gemeinsame Ideenfindung.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueText}>
                Ich denke gerne über den Tellerrand hinaus und suche kreative Lösungen 
                für Designherausforderungen. Jedes Projekt ist eine Chance zu wachsen.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Section */}
        <div className={styles.personal}>
          <div className={styles.personalContent}>
            <h2 className={styles.personalTitle}>Mehr über mich</h2>
            <div className={styles.personalGrid}>
              <div className={styles.personalText}>
                <p>
                  Wenn ich nicht gerade an Designs arbeite, experimentiere ich gerne mit neuen 
                  Tools und Technologien oder vertiefe mich in Design-Blogs und Tutorials. 
                  Als Studierendenvertreter an der IU bringe ich aktiv Ideen zur Verbesserung 
                  der Zusammenarbeit ein.
                </p>
                <p>
                  Meine Reise von der Fachoberschule über das Praktikum bis zum Studium war 
                  geprägt von kontinuierlichem Lernen. Jede Station hat mir geholfen, Design 
                  aus verschiedenen Blickwinkeln zu betrachten und kreative Lösungen zu entwickeln.
                </p>
              </div>
              
              <div className={styles.personalStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3+</span>
                  <span className={styles.statLabel}>Jahre Studium</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1,8</span>
                  <span className={styles.statLabel}>Notendurchschnitt</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Kreativität</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Lassen Sie uns zusammenarbeiten</h2>
          <p className={styles.ctaText}>
            Haben Sie ein spannendes Design-Projekt oder möchten Sie einfach über Kreativität sprechen? 
            Ich freue mich auf Ihre Nachricht!
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaButton}>
              Kontakt aufnehmen
            </a>
            <a href="/cv" className={styles.ctaButtonSecondary}>
              Lebenslauf ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}