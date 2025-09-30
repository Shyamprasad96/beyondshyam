"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

const dsaRoadmapSteps = [
  {
    phase: "Phase 1: Basics",
    duration: "2-3 months",
    topics: [
      "Programming Language Fundamentals",
      "Time & Space Complexity (Big O)",
      "Arrays & Strings Basics",
      "Basic Math & Bit Manipulation",
      "Problem Solving Fundamentals"
    ],
    color: "blue",
    icon: "📚"
  },
  {
    phase: "Phase 2: Core Patterns",
    duration: "4-5 months", 
    topics: [
      "Arrays & Hashing",
      "Two Pointers",
      "Stack & Queues",
      "Linked Lists",
      "Binary Search",
      "Trees & Binary Search Trees",
      "Heap & Priority Queues",
      "Backtracking",
      "Graphs",
      "Dynamic Programming"
    ],
    color: "green",
    icon: "🧩"
  },
  {
    phase: "Phase 3: LeetCode Practice",
    duration: "6-8 months",
    topics: [
      "Blind 75 (Essential Problems)",
      "Grind 75 (Structured Practice)",
      "NeetCode 150 (Comprehensive Set)",
      "Company-specific Problems",
      "Mock Interviews"
    ],
    color: "purple",
    icon: "💻",
    isLeetCode: true,
    leetcodeSets: [
      { name: "Blind 75", count: 75, difficulty: "Essential", description: "Most important problems for interviews" },
      { name: "Grind 75", count: 75, difficulty: "Structured", description: "Week-by-week structured approach" },
      { name: "NeetCode 150", count: 150, difficulty: "Comprehensive", description: "Complete problem set with video solutions" }
    ]
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue": return "from-blue-500 to-blue-600";
    case "green": return "from-green-500 to-green-600";
    case "purple": return "from-purple-500 to-purple-600";
    case "red": return "from-red-500 to-red-600";
    case "indigo": return "from-indigo-500 to-indigo-600";
    case "orange": return "from-orange-500 to-orange-600";
    default: return "from-gray-500 to-gray-600";
  }
};

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState('data-structures');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Roadmaps
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose your learning path and follow structured roadmaps
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700 w-full max-w-md">
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setActiveTab('data-structures')}
                className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'data-structures'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Data Structures
              </button>
              <button
                onClick={() => setActiveTab('system-design')}
                className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'system-design'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                System Design
              </button>
              <button
                onClick={() => setActiveTab('course-order')}
                className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === 'course-order'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Course Order
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'data-structures' && (
          <div className="max-w-6xl mx-auto">
            {/* Tree Structure for DSA */}
            <div className="space-y-16">
              
              {/* Phase 1: Basics */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-md">
                  <div className="text-center">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-2xl font-bold mb-2">Phase 1: Basics</h3>
                    <p className="text-blue-100 mb-4 text-sm">2-3 months</p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-blue-400/30 rounded-full px-3 py-1">Programming Fundamentals</div>
                      <div className="bg-blue-400/30 rounded-full px-3 py-1">Big O Notation</div>
                      <div className="bg-blue-400/30 rounded-full px-3 py-1">Arrays & Strings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-green-400 rounded-full"></div>
              </div>

              {/* Phase 2: Patterns */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-md">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🧩</div>
                    <h3 className="text-2xl font-bold mb-2">Phase 2: Core Patterns</h3>
                    <p className="text-green-100 mb-4 text-sm">4-5 months</p>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className="bg-green-400/30 rounded-full px-2 py-1">Arrays & Hashing</div>
                      <div className="bg-green-400/30 rounded-full px-2 py-1">Two Pointers</div>
                      <div className="bg-green-400/30 rounded-full px-2 py-1">Stack & Queues</div>
                      <div className="bg-green-400/30 rounded-full px-2 py-1">Trees</div>
                      <div className="bg-green-400/30 rounded-full px-2 py-1">Graphs</div>
                      <div className="bg-green-400/30 rounded-full px-2 py-1">Dynamic Programming</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Lines to 3 Nodes - Hidden on mobile */}
              <div className="hidden md:flex justify-center">
                <div className="relative w-96 h-16">
                  <div className="absolute top-0 left-1/2 w-1 h-8 bg-gradient-to-b from-green-400 to-purple-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute top-8 left-1/2 w-80 h-1 bg-gradient-to-r from-purple-400 to-purple-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute top-8 left-8 w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-400 rounded-full"></div>
                  <div className="absolute top-8 left-1/2 w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute top-8 right-8 w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Simple arrow for mobile */}
              <div className="flex md:hidden justify-center mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-purple-400 rounded-full"></div>
              </div>

              {/* Phase 3: LeetCode - 3 Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
                {/* Blind 75 */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎯</div>
                    <h4 className="text-xl font-bold mb-2">Blind 75</h4>
                    <div className="text-2xl font-bold mb-2">75</div>
                    <p className="text-purple-100 text-sm mb-3">Essential Problems</p>
                    <div className="text-xs bg-purple-400/30 rounded-full px-3 py-1">
                      Most Important
                    </div>
                  </div>
                </div>

                {/* Grind 75 */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <h4 className="text-xl font-bold mb-2">Grind 75</h4>
                    <div className="text-2xl font-bold mb-2">75</div>
                    <p className="text-purple-100 text-sm mb-3">Structured Practice</p>
                    <div className="text-xs bg-purple-400/30 rounded-full px-3 py-1">
                      Week by Week
                    </div>
                  </div>
                </div>

                {/* NeetCode 150 */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">💻</div>
                    <h4 className="text-xl font-bold mb-2">NeetCode 150</h4>
                    <div className="text-2xl font-bold mb-2">150</div>
                    <p className="text-purple-100 text-sm mb-3">Comprehensive Set</p>
                    <div className="text-xs bg-purple-400/30 rounded-full px-3 py-1">
                      With Videos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-20 bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center shadow-2xl mx-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Complete DSA Mastery</h3>
              <p className="text-base sm:text-lg mb-6">3 phases • 12-16 months • 300+ problems</p>
              <Link href="/courses/datastructures" className="inline-block bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base">
                Start Your Journey
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'system-design' && (
          <div>
            {/* Simplified System Design Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Clean Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-green-400 rounded-full"></div>
              
              {/* Phase 1: 9 Core Parts */}
              <div className="relative flex items-start mb-16">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg">
                  1
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-[1.02] hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-4 flex items-center transition-colors">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🏗️</span>
                      Master the 9 Core Parts
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mb-4 transition-colors">Learn system design fundamentals through our structured curriculum</p>
                    <Link href="/courses/systemdesign" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform">
                      View All Parts →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Phase 2: Key Technologies */}
              <div className="relative flex items-start mb-16">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg">
                  2
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-4 flex items-center transition-colors">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🔧</span>
                      Learn Key Technologies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mb-4 transition-colors">Master essential tools: Redis, Kafka, PostgreSQL, Elasticsearch, and more</p>
                    <Link href="/courses/systemdesign/technologies" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform">
                      Explore Technologies →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Phase 3: Real-World Systems */}
              <div className="relative flex items-start mb-16">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg">
                  3
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-[1.02] hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 mb-4 flex items-center transition-colors">
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🎆</span>
                      Design Real Systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mb-4 transition-colors">Practice with Twitter, URL Shortener, Chat System, and Video Streaming designs</p>
                    <Link href="/courses/systemdesign/systems" className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium group-hover:translate-x-1 transition-transform">
                      Practice Designs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Summary */}
            <div className="mt-16 bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl mx-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">System Design Mastery</h3>
              <p className="text-base sm:text-lg mb-6">3 phases • 6-8 months • Complete preparation</p>
              <Link href="/courses/systemdesign" className="inline-block bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base">
                Start Learning
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'course-order' && (
          <div className="max-w-6xl mx-auto">
            {/* Learning Path Tree */}
            <div className="space-y-12">
              
              {/* Level 1: Data Structures */}
              <div className="flex justify-center">
                <Link href="/courses/datastructures" className="group">
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-xs">
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Level 1
                    </div>
                    <div className="text-center">
                      <div className="text-5xl mb-4">📊</div>
                      <h3 className="text-2xl font-bold mb-2">Data Structures</h3>
                      <p className="text-blue-100 mb-4 text-sm">Foundation of programming</p>
                      <div className="space-y-1 text-xs">
                        <div className="bg-blue-400/30 rounded-full px-3 py-1">Arrays & Hashing</div>
                        <div className="bg-blue-400/30 rounded-full px-3 py-1">Two Pointers</div>
                        <div className="bg-blue-400/30 rounded-full px-3 py-1">Stack & Queues</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-green-400 rounded-full"></div>
              </div>

              {/* Level 2: LeetCode */}
              <div className="flex justify-center">
                <Link href="/courses/leetcode" className="group">
                  <div className="relative bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-xs">
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Level 2
                    </div>
                    <div className="text-center">
                      <div className="text-5xl mb-4">💻</div>
                      <h3 className="text-2xl font-bold mb-2">LeetCode</h3>
                      <p className="text-green-100 mb-4 text-sm">Problem solving mastery</p>
                      <div className="space-y-1 text-xs">
                        <div className="bg-green-400/30 rounded-full px-3 py-1">Easy Problems</div>
                        <div className="bg-green-400/30 rounded-full px-3 py-1">Medium Problems</div>
                        <div className="bg-green-400/30 rounded-full px-3 py-1">Hard Problems</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-purple-400 rounded-full"></div>
              </div>

              {/* Level 3: System Design */}
              <div className="flex justify-center">
                <Link href="/courses/systemdesign" className="group">
                  <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-xs">
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Level 3
                    </div>
                    <div className="text-center">
                      <div className="text-5xl mb-4">🏗️</div>
                      <h3 className="text-2xl font-bold mb-2">System Design</h3>
                      <p className="text-purple-100 mb-4 text-sm">Scalable architectures</p>
                      <div className="space-y-1 text-xs">
                        <div className="bg-purple-400/30 rounded-full px-3 py-1">9 Core Parts</div>
                        <div className="bg-purple-400/30 rounded-full px-3 py-1">Key Technologies</div>
                        <div className="bg-purple-400/30 rounded-full px-3 py-1">Real Systems</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-purple-400 to-orange-400 rounded-full"></div>
              </div>

              {/* Level 4: AI/ML */}
              <div className="flex justify-center">
                <Link href="/courses/ai" className="group">
                  <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-xs">
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Level 4
                    </div>
                    <div className="text-center">
                      <div className="text-5xl mb-4">🤖</div>
                      <h3 className="text-2xl font-bold mb-2">Artificial Intelligence</h3>
                      <p className="text-orange-100 mb-4 text-sm">AI/ML specialization</p>
                      <div className="space-y-1 text-xs">
                        <div className="bg-orange-400/30 rounded-full px-3 py-1">Machine Learning</div>
                        <div className="bg-orange-400/30 rounded-full px-3 py-1">Deep Learning</div>
                        <div className="bg-orange-400/30 rounded-full px-3 py-1">Neural Networks</div>
                      </div>
                      <div className="mt-3 text-xs bg-orange-400/20 rounded-full px-3 py-1 inline-block">
                        Optional
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-20 bg-gradient-to-r from-blue-600 via-green-500 via-purple-500 to-orange-500 rounded-2xl p-6 sm:p-8 text-white text-center shadow-2xl mx-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Complete Learning Journey</h3>
              <p className="text-base sm:text-lg mb-6">From fundamentals to advanced AI - your path to mastery</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Link href="/courses/datastructures" className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base">
                  Start Level 1
                </Link>
                <Link href="/courses" className="bg-white/20 backdrop-blur text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors text-sm sm:text-base">
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}