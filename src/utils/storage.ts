import { SmartLink } from '../types';

const STORAGE_KEY = 'recentLinks';

export const saveLink = (link: SmartLink) => {
  const links = getRecentLinks();
  links.unshift(link);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links.slice(0, 10)));
};

export const getRecentLinks = (): SmartLink[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};