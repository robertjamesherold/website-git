import { useIntersectionObserver } from '@ho/useIntersectionObserver.jsx';

export function useToolsAnimation(threshold = 0.3) {
  const { isVisible, elementRef } = useIntersectionObserver(threshold);

  const getToolTagStyle = (index, color) => ({
    animationDelay: `${index * 0.05}s`,
    '--tool-color': color
  });

  return {
    isVisible,
    elementRef,
    getToolTagStyle
  };
}