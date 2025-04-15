export const validateUrl = (url: string): { isValid: boolean; message: string } => {
  if (!url.trim()) {
    return { isValid: false, message: 'Please enter a URL' };
  }

  try {
    const urlObj = new URL(url);
    const validDomains = ['youtube.com', 'youtu.be', 'instagram.com', 'twitter.com', 'x.com', 'tiktok.com', 'facebook.com'];
    const domain = urlObj.hostname.replace('www.', '');

    const isValidDomain = validDomains.some(d => domain === d || domain.endsWith('.' + d));
    
    if (!isValidDomain) {
      return { 
        isValid: false, 
        message: 'Please enter a URL from a supported platform (YouTube, Instagram, Twitter, etc.)' 
      };
    }

    return { isValid: true, message: '' };
  } catch {
    return { isValid: false, message: 'Please enter a valid URL' };
  }
};