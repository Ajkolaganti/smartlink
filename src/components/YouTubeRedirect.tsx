import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function YouTubeRedirect() {
  const { videoId } = useParams();

  useEffect(() => {
    // Try to open in app first
    window.location.href = `vnd.youtube:${videoId}`;

    // Fallback to web version after delay
    setTimeout(() => {
      window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
    }, 2000);
  }, [videoId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center p-8 max-w-md">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-6"></div>
        <h1 className="text-xl font-semibold mb-4">Opening YouTube Video</h1>
        <p className="text-gray-600 mb-4">Please wait while we redirect you to the video...</p>
        <p className="text-sm text-gray-500">If the app doesn't open automatically, the video will open in your browser.</p>
      </div>
    </div>
  );
} 