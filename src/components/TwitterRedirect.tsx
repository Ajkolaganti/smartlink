import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TwitterRedirect() {
  const { tweetId } = useParams();

  useEffect(() => {
    // Try to open in Twitter app
    window.location.href = `twitter://status?id=${tweetId}`;

    // Fallback to web version after delay
    setTimeout(() => {
      window.location.href = `https://twitter.com/i/status/${tweetId}`;
    }, 2000);
  }, [tweetId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center p-8 max-w-md">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-6"></div>
        <h1 className="text-xl font-semibold mb-4">Opening Twitter</h1>
        <p className="text-gray-600 mb-4">Please wait while we redirect you...</p>
        <p className="text-sm text-gray-500">If the app doesn't open automatically, you'll be redirected to the web version.</p>
      </div>
    </div>
  );
} 