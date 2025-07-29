import { useToolsAnimation } from './useToolsAnimation.jsx';
import styles from './_ToolsCloud.module.scss';

const ToolTag = ({ tool, index, getToolTagStyle }) => (
  <div 
    className={styles.toolTag}
    style={getToolTagStyle(index, tool.color)}
  >
    {tool.name}
  </div>
);

export default function ToolsCloud({ title, data }) {
  const { isVisible, elementRef, getToolTagStyle } = useToolsAnimation();

  return (
    <div className={styles.section} ref={elementRef}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={`${styles.toolsCloud} ${isVisible ? styles.animated : ''}`}>
        {data.map((tool, index) => (
          <ToolTag 
            key={tool.name} 
            tool={tool} 
            index={index}
            getToolTagStyle={getToolTagStyle}
          />
        ))}
      </div>
    </div>
  );
}