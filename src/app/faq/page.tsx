'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Link from 'next/link'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How does the hobby matching quiz work?",
    answer: "Our quiz uses a sophisticated algorithm that analyzes your responses to questions about your interests, experience level, available time, and budget. Based on these factors, we recommend hobbies that best match your profile and preferences."
  },
  {
    question: "Are the recommended hobbies guaranteed to be perfect for me?",
    answer: "While our recommendations are carefully tailored to your responses, personal preference still plays a big role. We encourage you to explore multiple suggestions and read through the detailed information we provide about each hobby before making a decision."
  },
  {
    question: "Can I change my quiz answers and get new recommendations?",
    answer: "Yes! You can retake the quiz as many times as you'd like. Each time you complete the quiz, you'll receive fresh recommendations based on your new answers."
  },
  {
    question: "How accurate are the cost estimates for hobbies?",
    answer: "Our cost estimates are based on average starter expenses and ongoing costs. However, actual costs may vary depending on your location, choice of equipment, and level of involvement. We provide cost ranges to help you make informed decisions."
  },
  {
    question: "What if I don't find a hobby I like in the recommendations?",
    answer: "You can browse our complete hobby library to explore all available options. Use the filters to sort by difficulty, cost, or time commitment to find something that interests you."
  },
  {
    question: "How often is the hobby database updated?",
    answer: "We regularly update our hobby database with new activities, requirements, and insights. We also refine our recommendations based on user feedback and trending interests."
  },
  {
    question: "Can I suggest a new hobby to be added to the database?",
    answer: "While we don't currently have a direct submission system, we're always looking to expand our database. Stay tuned for future updates where we'll introduce ways for users to contribute."
  },
  {
    question: "Is HobbyFinder free to use?",
    answer: "Yes! HobbyFinder is completely free to use. You can take the quiz, browse hobbies, and access all hobby information without any cost."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h1>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-slate-200 dark:border-slate-700 last:border-0"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-4 text-left flex justify-between items-start"
                  >
                    <span className="text-lg font-medium text-slate-900 dark:text-white pr-8">
                      {faq.question}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 transform transition-transform duration-200">
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Take our quiz to get personalized hobby recommendations or browse through our extensive hobby library 
                to find activities that interest you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/app"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Take the Quiz
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/library"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Browse Library
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 