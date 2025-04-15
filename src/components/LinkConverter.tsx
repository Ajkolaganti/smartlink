import React, { useState } from 'react';
import { Link2, Clipboard, ExternalLink, AlertCircle } from 'lucide-react';
import { validateUrl } from '../utils/validation';
import { saveLink } from '../utils/storage';
import { trackConversion } from '../utils/analytics';
import type { SmartLink } from '../types';

export default function LinkConverter() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [smartLink, setSmartLink] = useState<SmartLink | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const generateSmartLink = async () => {
    setError('');
    const validation = validateUrl(url);
    
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a unique identifier for the link
      const linkId = Math.random().toString(36).substring(2, 15);
      const generatedLink: SmartLink = {
        originalUrl: url,
        smartUrl: `https://demo-smart.link/${linkId}`,
        timestamp: Date.now()
      };

      setSmartLink(generatedLink);
      saveLink(generatedLink);
      trackConversion(url);
    } catch (err) {
      setError('Failed to generate smart link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!smartLink) return;
    
    try {
      await navigator.clipboard.writeText(smartLink.smartUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      setError('Failed to copy link');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-8">
      <div className="space-y-6">
        <div className="relative backdrop-blur-sm bg-white/30 rounded-2xl p-8 shadow-lg border border-white/20">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your URL here (YouTube, Instagram, Twitter, etc.)"
            className="w-full px-6 py-4 rounded-xl bg-white/50 border-2 border-gray-100 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400"
          />
          {error && (
            <div className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center gap-1 px-2 py-1 bg-red-50 rounded-lg">
              <AlertCircle size={16} />
              {error}
            </div>
          )}
        </div>

        <button
          onClick={generateSmartLink}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : (
            <>
              <Link2 size={20} />
              Generate Smart Link
            </>
          )}
        </button>
      </div>

      {smartLink && (
        <div className="space-y-4 animate-fade-in">
          <div className="p-6 backdrop-blur-sm bg-white/30 rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <input
                type="text"
                readOnly
                value={smartLink.smartUrl}
                className="w-full bg-transparent outline-none font-medium text-gray-800"
              />
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                <Clipboard size={20} />
                {copySuccess ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <a
            href={smartLink.smartUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            <ExternalLink size={20} />
            Open Link
          </a>
        </div>
      )}

      <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 className="font-medium mb-3 text-gray-800">How Smart Links Work</h3>
        <p className="text-gray-600">
          Smart links automatically detect if you have the native app installed. If you do, 
          the link opens in the app. If not, it opens in your web browser. This provides 
          the best experience across all devices.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Note: This is a demo application. Generated links are for demonstration purposes only.
        </p>
      </div>
    </div>
  );
}