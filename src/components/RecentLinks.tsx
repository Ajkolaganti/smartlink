import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import { getRecentLinks } from '../utils/storage';
import type { SmartLink } from '../types';

export default function RecentLinks() {
  const [recentLinks, setRecentLinks] = React.useState<SmartLink[]>([]);

  React.useEffect(() => {
    setRecentLinks(getRecentLinks());
  }, []);

  if (recentLinks.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
        <Clock size={20} />
        Recent Links
      </h2>
      <div className="space-y-4">
        {recentLinks.map((link) => (
          <div
            key={link.timestamp}
            className="p-4 backdrop-blur-sm bg-white/30 rounded-xl border border-white/20 shadow-lg flex items-center justify-between hover:bg-white/40 transition-colors duration-300"
          >
            <div className="overflow-hidden">
              <p className="text-sm text-gray-600 truncate">{link.originalUrl}</p>
              <p className="text-sm font-medium truncate text-gray-800">{link.smartUrl}</p>
            </div>
            <a
              href={link.smartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}