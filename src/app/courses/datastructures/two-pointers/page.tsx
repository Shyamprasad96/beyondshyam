import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function TwoPointers() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <Link href="/courses/datastructures" className="hover:text-blue-600 dark:hover:text-blue-400">Data Structures</Link>
          <span>/</span>
          <span>Two Pointers</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Two Pointers</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">Medium</span>
            <span className="text-gray-600 dark:text-gray-400">8 problems</span>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📹 Video Explanation</h2>
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
            <a 
              href="https://youtube.com/watch?v=two-pointers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <span className="text-white text-2xl">▶</span>
              <span className="text-white font-semibold">Watch Two Pointers Explanation</span>
            </a>
          </div>
        </div>

        {/* Concepts Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">📚 Core Concepts</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Two Pointers Basics",
                description: "Understanding the fundamental two-pointer technique",
                videoUrl: "https://youtube.com/watch?v=two-pointers-basics",
                duration: "10:30"
              },
              {
                title: "Opposite Direction Pointers",
                description: "Start from both ends and move towards center",
                videoUrl: "https://youtube.com/watch?v=opposite-pointers",
                duration: "12:45"
              },
              {
                title: "Same Direction Pointers",
                description: "Fast and slow pointer technique",
                videoUrl: "https://youtube.com/watch?v=same-direction",
                duration: "14:20"
              },
              {
                title: "Sliding Window vs Two Pointers",
                description: "When to use which technique",
                videoUrl: "https://youtube.com/watch?v=sliding-vs-pointers",
                duration: "8:15"
              }
            ].map((concept, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{concept.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{concept.description}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{concept.duration}</span>
                  </div>
                  <a 
                    href={concept.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors ml-4"
                  >
                    <span className="text-sm">▶</span>
                    <span className="text-sm font-medium">Watch</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Problems */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 Practice Problems</h2>
          <div className="space-y-3">
            {[
              { name: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
              { name: "Two Sum II", difficulty: "Medium", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
              { name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" },
              { name: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" }
            ].map((problem, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-900 dark:text-white font-medium">{problem.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    problem.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' : 
                    'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
                <a 
                  href={problem.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  Solve →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}