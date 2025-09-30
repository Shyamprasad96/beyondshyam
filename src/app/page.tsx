import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-2">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 px-4">
            Learn coding interview patterns with clear explanations and practice problems
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          <Link href="/courses/systemdesign" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 p-6 text-white h-40 relative">
                <div className="absolute top-2 right-2 bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold">In Progress</div>
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-2">System Design</h3>
                <p className="text-white/90 text-sm line-clamp-2">Learn to design scalable distributed systems</p>
              </div>
              <div className="p-6 h-20">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">8</span>
                    <span className="text-sm ml-1">topics</span>
                  </div>
                  <div className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/courses/datastructures" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-6 text-white h-40 relative">
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">Coming Soon!</div>
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Data Structures</h3>
                <p className="text-white/90 text-sm line-clamp-2">Master fundamental data structures with video explanations</p>
              </div>
              <div className="p-6 h-20">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
                    <span className="text-sm ml-1">patterns</span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/courses/leetcode" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-6 text-white h-40 relative">
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">Coming Soon!</div>
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-2">LeetCode Problems</h3>
                <p className="text-white/90 text-sm line-clamp-2">Curated problem sets with detailed solutions</p>
              </div>
              <div className="p-6 h-20">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">150+</span>
                    <span className="text-sm ml-1">problems</span>
                  </div>
                  <div className="text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/courses/ai" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 p-6 text-white h-40 relative">
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">Coming Soon!</div>
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
                <p className="text-white/90 text-sm line-clamp-2">Master AI/ML concepts with practical implementations</p>
              </div>
              <div className="p-6 h-20">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">15</span>
                    <span className="text-sm ml-1">topics</span>
                  </div>
                  <div className="text-orange-600 dark:text-orange-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}