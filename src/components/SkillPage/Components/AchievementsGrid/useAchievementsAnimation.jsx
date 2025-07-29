import { useIntersectionObserver } from '@ho/useIntersectionObserver';

export function useAchievementsAnimation(threshold = 0.3) {
  const { isVisible, elementRef } = useIntersectionObserver(threshold);

  const getAchievementCardStyle = (index) => ({
    animationDelay: `${index * 0.1}s`
  });

  return {
    isVisible,
    elementRef,
    getAchievementCardStyle
  };
}