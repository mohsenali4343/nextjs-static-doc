'use client';
import { useState } from 'react';
import DocsHeader from '../components/docs/DocsHeader';
import GettingStarted from '../components/docs/GettingStarted';
import Installation from '../components/docs/Installation';
// import Configuration from '../components/docs/Configuration';
// import Security from '../components/docs/Security';
// import APIReference from '../components/docs/APIReference';

export default function DocsPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DocsHeader />
      <main className="w-full  overflow-x-visible  mx-auto  pt-16">
        <div className="grid grid-cols-1 overflow-x-visible w-full lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span lg:h-screen px-4 sm:px-2 pt-4 lg:px-4  lg:fixed  lg:w-[calc(18%-2rem)]">
            <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 mb-8 lg:mb-0 lg:bg-transparent lg:shadow-none lg:border-none lg:p-0">
              <div className="flex items-center mb-4 lg:hidden">
                <button 
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mr-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Documentation
                </h3>
              </div>
              <div className={`space-y-1 ${isNavOpen ? 'block' : 'hidden'} lg:block`}>
                {[
                  { title: 'Getting Started', href: '#getting-started' },
                  { title: 'Installation', href: '#installation' },
                  { title: 'Configuration', href: '#configuration' },
                  { title: 'Security', href: '#security' },
                  { title: 'API Reference', href: '#api-reference' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 w-full overflow-x-visible pt-10 lg:ml-[25%] space-y-16 px-4 sm:px-6 lg:px-8">
            <GettingStarted />
            <Installation />
            {/* <Configuration />
            <Security />
            <APIReference /> */}
          </div>
        </div>
      </main>
    </div>
  );
} 