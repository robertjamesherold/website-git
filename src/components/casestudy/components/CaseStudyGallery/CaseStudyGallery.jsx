import { useState } from 'react'
import styles from './_CaseStudyGallery.module.scss'

export function CaseStudyGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className={styles.gallery}>
        <h3 className={styles.galleryTitle}>Projektbilder</h3>
        <div className={styles.imageGrid}>
          {images.map((image) => (
            <figure 
              key={image.id} 
              className={styles.imageItem}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.caption} />
              {image.caption && (
                <figcaption className={styles.caption}>{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage.url} alt={selectedImage.caption} />
          {selectedImage.caption && (
            <p className={styles.lightboxCaption}>{selectedImage.caption}</p>
          )}
        </div>
      )}
    </>
  )
}
