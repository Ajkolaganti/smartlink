import React from 'react';
import { Link2 } from 'lucide-react';
import LinkConverter from './components/LinkConverter';
import RecentLinks from './components/RecentLinks';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/70 backdrop-blur-lg border-b border-white/20 sticky top-0 z-10" role="banner">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-xl" role="img" aria-label="Smart Link Logo">
              <Link2 size={24} />
            </div>
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
              Smart Link Converter
            </h1>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4" role="main">
        <article>
          <section aria-label="Link Converter">
            <LinkConverter />
          </section>
          <section aria-label="Recent Links">
            <RecentLinks />
          </section>
        </article>
      </main>

      <footer className="bg-white/70 backdrop-blur-lg border-t border-white/20 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">About Smart Link Converter</h2>
              <p className="text-gray-600">
                Convert your social media links into smart, universal links that automatically 
                open in native apps or browsers. Perfect for sharing content across platforms.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Supported Platforms</h2>
              <ul className="text-gray-600">
                <li>YouTube</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>TikTok</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="text-gray-600">
                <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-600">Terms of Service</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;