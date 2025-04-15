import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TikTokRedirect() {
  const { videoId } = useParams();

  useEffect(() => {
    // Try to open in TikTok app
    window.location.href = `tiktok://video/${videoId}`;

    // Fallback to web version after delay
    setTimeout(() => {
      window.location.href = `https://www.tiktok.com/t/${videoId}`;
    }, 2000);
  }, [videoId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center p-8 max-w-md">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-6"></div>
        <h1 className="text-xl font-semibold mb-4">Opening TikTok</h1>
        <p className="text-gray-600 mb-4">Please wait while we redirect you...</p>
        <p className="text-sm text-gray-500">If the app doesn't open automatically, you'll be redirected to the web version.</p>
      </div>
    </div>
  );
} 