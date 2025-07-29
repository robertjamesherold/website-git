import styles from './_CallToAction.module.scss'
import { Link } from 'react-router-dom'

export default function CallToAction({ 
  title = '',
  text = '',
  primaryButtonText = '',
  primaryButtonLink = '',
  secondaryButtonText = '',
  secondaryButtonLink = '',
  linkOne = false,
  linkTwo = false,
  showPrimaryButton = true,
  showSecondaryButton = true
}) {
  return (
    <div className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>{title}</h2>
      <p className={styles.ctaDescription}>{text}</p>
      <div className={styles.ctaButtons}>
        {showPrimaryButton && linkOne && <a href={primaryButtonLink} className={styles.ctaButton}>
          {primaryButtonText}
        </a>}
        {showPrimaryButton && !linkOne && <Link to={primaryButtonLink} className={styles.ctaButton}>
          {primaryButtonText}
        </Link>}
        {showSecondaryButton && linkTwo && <a href={secondaryButtonLink} className={styles.ctaButtonSecondary}>
          {secondaryButtonText}
        </a>}
        {showSecondaryButton && !linkTwo && <Link to={secondaryButtonLink} className={styles.ctaButtonSecondary}>
          {secondaryButtonText}
        </Link>}
      </div>
    </div>
  )
}
