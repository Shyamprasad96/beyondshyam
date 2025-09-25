import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Stack() {
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
          <span>Stack</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stack</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">Easy</span>
            <span className="text-gray-600 dark:text-gray-400">6 problems</span>
          </div>
        </div>

        {/* Concepts Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">📚 Core Concepts</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Stack Fundamentals",
                description: "LIFO principle and basic operations (push, pop, peek)",
                videoUrl: "https://youtube.com/watch?v=stack-basics",
                duration: "9:45"
              },
              {
                title: "Stack Implementation",
                description: "Array vs Linked List implementation",
                videoUrl: "https://youtube.com/watch?v=stack-implementation",
                duration: "13:20"
              },
              {
                title: "Monotonic Stack",
                description: "Maintaining order in stack for optimization",
                videoUrl: "https://youtube.com/watch?v=monotonic-stack",
                duration: "16:30"
              },
              {
                title: "Stack Applications",
                description: "Expression evaluation, function calls, undo operations",
                videoUrl: "https://youtube.com/watch?v=stack-applications",
                duration: "11:15"
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
              { name: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
              { name: "Min Stack", difficulty: "Medium", link: "https://leetcode.com/problems/min-stack/" },
              { name: "Daily Temperatures", difficulty: "Medium", link: "https://leetcode.com/problems/daily-temperatures/" },
              { name: "Largest Rectangle in Histogram", difficulty: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" }
            ].map((problem, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-900 dark:text-white font-medium">{problem.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    problem.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' : 
                    problem.difficulty === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400' :
                    'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
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