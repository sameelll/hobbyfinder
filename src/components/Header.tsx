'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center gap-2 px-2 lg:px-0"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-md">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <span className="font-bold text-xl">
                <span className="text-blue-600 dark:text-blue-400">Hobby</span>
                <span className="text-indigo-600 dark:text-indigo-400">Finder</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:gap-4">
            <Link
              href="/app"
              className={`px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md ${
                pathname === '/app' ? 'ring-2 ring-blue-400 dark:ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : ''
              }`}
            >
              Take Quiz
            </Link>
            <Link
              href="/library"
              className={`text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors ${
                pathname === '/library' ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              Browse
            </Link>
            <Link
              href="/about"
              className={`text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors ${
                pathname === '/about' ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/faq"
              className={`text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors ${
                pathname === '/faq' ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden pb-3">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/app"
                className={`block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transform transition-all duration-200 text-center mx-3 ${
                  pathname === '/app' ? 'ring-2 ring-blue-400 dark:ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : ''
                }`}
              >
                Take Quiz
              </Link>
              <Link
                href="/library"
                className={`block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors ${
                  pathname === '/library' ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                Browse
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors ${
                  pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                About
              </Link>
              <Link
                href="/faq"
                className={`block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors ${
                  pathname === '/faq' ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 