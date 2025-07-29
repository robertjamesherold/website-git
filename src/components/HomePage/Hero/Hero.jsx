import styles from './_Hero.module.scss'
import { RotatingText } from './RotatingText/RotatingText'
import { CodeAnimation } from './CodeAnimation/CodeAnimation'
import { Link } from 'react-router-dom'
import { Social } from '@cm/Social/Social'


const technologies = [
    'JavaScript',
    'React',
    'Webdesign',
    'Figma',
    'WordPress',
    'Illustrator',
    'Grafikdesign',
    'Photoshop'
]

export default function Hero() {
    return (
        <div className={ styles.hero }>
            <div className={ styles.heroContent }>
                <h1 className={ styles.heroTitle }>
                    Hallo, ich bin <span className={ styles.heroName }>Robert James Herold</span>
                </h1>
                <div className={ styles.heroSubtitle }>
                    Mediendesigner mit Leidenschaft für{ ' ' }
                    <span className={ styles.techRotator }>
                        <RotatingText items={ technologies } />
                    </span>
                </div>

                <div className={ styles.heroButtons }>
                    <Link to="/projekte" className={ styles.ctaButton }>Meine Projekte ansehen</Link>
                    <Link to="/kontakt" className={ styles.ctaButtonSecondary }>Kontakt aufnehmen</Link>
                </div>
                <Social />
            </div>
            <CodeAnimation />
        </div>


    )
}