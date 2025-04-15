import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecentLinks } from '../utils/storage';

export default function LinkRedirect() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const links = getRecentLinks();
    const link = links.find(l => l.smartUrl.includes(`/link/${id}`));
    
    if (link) {
      window.location.href = link.originalUrl;
    } else {
      // Redirect to home page if link not found
      window.location.href = '/';
    }
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
} 