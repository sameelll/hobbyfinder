'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { HobbyRecommendation } from '../../types/hobby'
import { hobbyDatabase } from '../../data/hobbies'
import Header from '../../components/Header'

type Question = {
  id: number
  text: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "How experienced are you with learning new hobbies?",
    options: ["Not much", "Some experience", "Very experienced"]
  },
  {
    id: 2,
    text: "What type of activities do you prefer?",
    options: ["Physical and active", "Creative and artistic", "Mental and strategic", "Social and interactive"]
  },
  {
    id: 3,
    text: "Where do you prefer to spend your time?",
    options: ["Outdoors in nature", "Indoors at home", "Social spaces", "Mix of environments"]
  },
  {
    id: 4,
    text: "How much time can you dedicate to a hobby?",
    options: ["30-60 minutes daily", "1-2 hours per session", "3-4 hours per session"]
  },
  {
    id: 5,
    text: "What's your budget for a new hobby?",
    options: ["$0-50", "$50-200", "$200+"]
  },
  {
    id: 6,
    text: "What's your main goal with this hobby?",
    options: ["Learn new skills", "Meet new people", "Stay active", "Express creativity"]
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [recommendations, setRecommendations] = useState<HobbyRecommendation[]>([])
  const [selectedHobby, setSelectedHobby] = useState<HobbyRecommendation | null>(null)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // For the last question, generate recommendations immediately
      const allHobbies = Object.values(hobbyDatabase).flat()
      
      // Map answers to preferences
      const difficultyMap = {
        'Not much': 'Beginner',
        'Some experience': 'Intermediate',
        'Very experienced': 'Advanced'
      }
      const categoryMap = {
        'Physical and active': 'physical',
        'Creative and artistic': 'creative',
        'Mental and strategic': 'mental',
        'Social and interactive': 'social'
      }

      const selectedDifficulty = difficultyMap[newAnswers[0] as keyof typeof difficultyMap] || 'Beginner'
      const selectedCategory = categoryMap[newAnswers[1] as keyof typeof categoryMap]

      // Filter hobbies based on user preferences
      const filteredHobbies = allHobbies.filter(hobby => {
        const matchesDifficulty = 
          (selectedDifficulty === 'Beginner' && hobby.difficulty === 'Beginner') ||
          (selectedDifficulty === 'Intermediate' && 
            (hobby.difficulty === 'Beginner' || hobby.difficulty === 'Intermediate')) ||
          (selectedDifficulty === 'Advanced')

        const matchesCategory = !selectedCategory || hobby.category === selectedCategory

        return matchesDifficulty && matchesCategory
      })

      // Get at least some results
      const shuffled = filteredHobbies.sort(() => 0.5 - Math.random())
      const topRecommendations = shuffled.slice(0, Math.min(3, shuffled.length))
      
      setRecommendations(topRecommendations)
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setRecommendations([])
  }

  function getDifficultyLabel(difficulty: 'Beginner' | 'Intermediate' | 'Advanced') {
    switch (difficulty) {
      case 'Beginner':
        return { text: 'Beginner', color: 'text-green-600 dark:text-green-400', icon: '●' }
      case 'Intermediate':
        return { text: 'Intermediate', color: 'text-yellow-600 dark:text-yellow-400', icon: '●●' }
      case 'Advanced':
        return { text: 'Advanced', color: 'text-red-600 dark:text-red-400', icon: '●●●' }
    }
  }

  if (showResults) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8 mt-12">
              <Link 
                href="/"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 text-lg font-medium"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <button
                onClick={restartQuiz}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 text-lg font-medium"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
            </div>
            
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-slate-900/50 p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                  Here Are Your Perfect Hobbies!
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2">Get ready to start something amazing!</p>
              </div>

              <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                {recommendations.map((hobby, index) => {
                  const difficultyInfo = getDifficultyLabel(hobby.difficulty)
                  return (
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
                            <span className={`${difficultyInfo.color} text-sm font-medium`}>
                              {difficultyInfo.icon} {difficultyInfo.text}
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
                  )
                })}
              </div>

              <div className="text-center border-t border-slate-200 dark:border-slate-700 pt-6">
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Haven't found what you're looking for?
                </p>
                <Link
                  href="/library"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 w-3 bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-[250ms] group-hover:w-full"/>
                  <div className="relative flex items-center gap-2">
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-colors duration-200">
                      Explore Our Library
                    </span>
                    <svg 
                      className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

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
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8 mt-12">
            <Link 
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 text-lg font-medium"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            {currentQuestion > 0 && (
              <button
                onClick={handleBack}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 text-lg font-medium"
              >
                Previous Question
              </button>
            )}
          </div>

          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-slate-900/50 p-6 sm:p-8">
            <div className="mb-8">
              <div className="w-full bg-blue-100 dark:bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-2 font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <div className="text-center mb-8 min-h-[120px] flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-3">
                {questions[currentQuestion].text}
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Help us understand your preferences
              </p>
            </div>

            <div className="space-y-3 min-h-[280px]">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left rounded-lg border border-slate-200 dark:border-slate-700
                    bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700
                    transition-all duration-200 text-slate-700 dark:text-slate-200
                    hover:shadow-sm"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="text-center border-t border-slate-200 dark:border-slate-700 pt-6">
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Looking for more options?
              </p>
              <Link
                href="/library"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 w-3 bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-[250ms] group-hover:w-full"/>
                <div className="relative flex items-center gap-2">
                  <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-colors duration-200">
                    Explore Our Library
                  </span>
                  <svg 
                    className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 