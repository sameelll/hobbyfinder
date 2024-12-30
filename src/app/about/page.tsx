import Header from '../../components/Header'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              About HobbyFinder
            </h1>
            
            <div className="space-y-8 text-slate-600 dark:text-slate-300">
              <section>
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="mb-4">
                  At HobbyFinder, we believe that everyone deserves to find activities that bring joy, 
                  fulfillment, and personal growth to their lives. Our mission is to help you discover 
                  hobbies that perfectly match your interests, lifestyle, and goals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                  What We Offer
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-slate-800 dark:text-white">Personalized Recommendations:</strong>{" "}
                    Our intelligent quiz system analyzes your preferences to suggest hobbies that match your personality.
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-white">Comprehensive Database:</strong>{" "}
                    Access to a wide range of hobbies, complete with detailed information about requirements, costs, and time commitments.
                  </li>
                  <li>
                    <strong className="text-slate-800 dark:text-white">Practical Insights:</strong>{" "}
                    Get realistic expectations about what each hobby entails, including difficulty levels and necessary investments.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                  Our Approach
                </h2>
                <p className="mb-4">
                  We understand that finding the right hobby can be overwhelming. That&apos;s why we&apos;ve created 
                  a simple yet effective platform that takes into account various factors such as your 
                  experience level, available time, budget, and personal interests.
                </p>
                <p>
                  Whether you're looking to learn new skills, meet like-minded people, or simply find a 
                  way to relax and unwind, HobbyFinder is here to guide you on your journey of discovery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                  Join Our Community
                </h2>
                <p className="mb-6">
                  Start your journey today by taking our personality quiz or browsing through our 
                  extensive library of hobbies. Your next passion is waiting to be discovered!
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
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 