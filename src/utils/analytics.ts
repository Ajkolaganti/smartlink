const ANALYTICS_KEY = 'linkAnalytics';

interface Analytics {
  totalLinks: number;
  platforms: Record<string, number>;
}

export const trackConversion = (url: string) => {
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    const analytics: Analytics = JSON.parse(localStorage.getItem(ANALYTICS_KEY) || 
      JSON.stringify({ totalLinks: 0, platforms: {} }));
    
    analytics.totalLinks += 1;
    analytics.platforms[domain] = (analytics.platforms[domain] || 0) + 1;
    
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
  } catch (error) {
    console.error('Analytics error:', error);
  }
};