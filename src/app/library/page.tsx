'use client'

import React, { useState } from 'react'
import { HobbyRecommendation } from '../../types/hobby'
import { hobbyDatabase } from '../../data/hobbies'
import Header from '../../components/Header'
import ScrollToTop from '../../components/ScrollToTop'

const categories = {
  creative: { title: 'Creative Hobbies', icon: 'palette' },
  physical: { title: 'Physical Activities', icon: 'fitness_center' },
  mental: { title: 'Mental Challenges', icon: 'psychology' },
  social: { title: 'Social Activities', icon: 'groups' }
}

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')
  const [selectedCost, setSelectedCost] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedHobby, setSelectedHobby] = useState<HobbyRecommendation | null>(null)

  // Function to clear all filters
  const clearFilters = () => {
    setSearchQuery('')
    setSelectedDifficulty('')
    setSelectedCost('')
    setSelectedTime('')
    setSelectedCategory('')
  }

  // Get all hobbies from the database
  const allHobbies = Object.values(hobbyDatabase).flat()

  // Filter hobbies based on search query and filters
  const filteredHobbies = allHobbies.filter(hobby => {
    const matchesSearch = hobby.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hobby.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesDifficulty = !selectedDifficulty || hobby.difficulty === selectedDifficulty
    const matchesCost = !selectedCost || hobby.costLevel === selectedCost
    const matchesTime = !selectedTime || hobby.timeCommitment === selectedTime
    const matchesCategory = !selectedCategory || hobby.category === selectedCategory

    return matchesSearch && matchesDifficulty && matchesCost && matchesTime && matchesCategory
  })

  // Group hobbies by category
  const hobbiesByCategory = filteredHobbies.reduce((acc, hobby) => {
    if (!acc[hobby.category]) {
      acc[hobby.category] = []
    }
    acc[hobby.category].push(hobby)
    return acc
  }, {} as Record<string, HobbyRecommendation[]>)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header />
      <ScrollToTop />
      <main className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Hobby Library
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Explore our collection of hobbies and find your next passion
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Search hobbies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 h-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="material-icons text-lg">clear_all</span>
                  Clear Filters
                </button>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  <option value="">All Categories</option>
                  <option value="creative">Creative Hobbies</option>
                  <option value="physical">Physical Activities</option>
                  <option value="mental">Mental Challenges</option>
                  <option value="social">Social Activities</option>
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  <option value="">All Difficulties</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                <select
                  value={selectedCost}
                  onChange={(e) => setSelectedCost(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  <option value="">All Cost Levels</option>
                  <option value="$0-50">$0-50</option>
                  <option value="$50-200">$50-200</option>
                  <option value="$200+">$200+</option>
                </select>

                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  <option value="">All Time Commitments</option>
                  <option value="30-60 minutes daily">30-60 minutes daily</option>
                  <option value="1-2 hours per session">1-2 hours per session</option>
                  <option value="3-4 hours per session">3-4 hours per session</option>
                </select>
              </div>
            </div>
          </div>

          {Object.entries(categories).map(([categoryKey, category]) => {
            const hobbies = hobbiesByCategory[categoryKey] || []
            if (hobbies.length === 0) return null

            return (
              <div key={categoryKey} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-xl">
                    <span className="material-icons text-3xl text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                    >
                      <div className="flex flex-col h-full">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-6 flex justify-center items-center">
                          <span className="material-icons text-4xl text-slate-700 dark:text-slate-300">
                            {hobby.icon}
                          </span>
                        </div>
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                              {hobby.name}
                            </h3>
                            <span className={`text-sm font-medium ${
                              hobby.difficulty === 'Beginner' ? 'text-green-600 dark:text-green-400' :
                              hobby.difficulty === 'Intermediate' ? 'text-yellow-600 dark:text-yellow-400' :
                              'text-red-600 dark:text-red-400'
                            }`}>
                              {hobby.difficulty}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 mb-4">
                            {hobby.description}
                          </p>
                          <div className="mt-auto space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-600 dark:text-slate-400">Investment:</span>
                              <span className="font-medium text-slate-900 dark:text-white">{hobby.costLevel}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-600 dark:text-slate-400">Time:</span>
                              <span className="font-medium text-slate-900 dark:text-white">{hobby.timeCommitment}</span>
                            </div>
                            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Benefits:</h4>
                              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                {hobby.benefits.slice(0, 2).map((benefit, i) => (
                                  <li key={i} className="flex items-center">
                                    <span className="mr-2">•</span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                              <button
                                onClick={() => setSelectedHobby(hobby)}
                                className="w-full mt-4 py-2 px-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors duration-200 text-sm font-medium"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* Details Modal */}
      {selectedHobby && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <span className="material-icons text-4xl text-slate-700 dark:text-slate-300">
                      {selectedHobby.icon}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                    {selectedHobby.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedHobby(null)}
                  className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {selectedHobby.description}
              </p>

              <div className="grid gap-6 sm:grid-cols-2 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedHobby.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedHobby.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-blue-500 flex-shrink-0">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="font-semibold text-slate-800 dark:text-white text-sm">Difficulty</div>
                  <div className={`mt-1 text-xs font-medium ${
                    selectedHobby.difficulty === 'Beginner' ? 'text-green-600 dark:text-green-400' :
                    selectedHobby.difficulty === 'Intermediate' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {selectedHobby.difficulty}
                  </div>
                </div>
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="font-semibold text-slate-800 dark:text-white text-sm">Investment</div>
                  <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {selectedHobby.costLevel}
                  </div>
                </div>
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <div className="font-semibold text-slate-800 dark:text-white text-sm">Time</div>
                  <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {selectedHobby.timeCommitment}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 