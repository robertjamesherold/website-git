import { parseTextWithLists } from '../../../../utils/textParser.jsx';
import styles from './_RichText.module.scss';

export function RichText({ text, className = '', imageMap = {} }) {
  if (!text) return null;

  const parsedContent = parseTextWithLists(text);

  return (
    <div className={`${styles.richText} ${className}`}>
      {parsedContent.map((item, index) => {
        switch (item.type) {
          case 'text':
            return (
              <p key={index} className={styles.paragraph}>
                {item.content}
              </p>
            );
          case 'list':
            return (
              <ul key={index} className={styles.list}>
                {item.items.map((listItem, listIndex) => (
                  <li key={listIndex} className={styles.listItem}>
                    {listItem}
                  </li>
                ))}
              </ul>
            );
          case 'image':
            // Schaue zuerst in imageMap, dann verwende direkte URL
            const imageSrc = imageMap[item.src] || item.src;
            return (
              <figure key={index} className={styles.imageContainer}>
                <img 
                  src={imageSrc} 
                  alt={item.alt} 
                  className={styles.image}
                  loading="lazy"
                />
                {item.caption && (
                  <figcaption className={styles.imageCaption}>
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}