'use client';

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const patterns = [
  {
    name: "Arrays & Hashing",
    count: 12,
    difficulty: "Easy",
    videoUrl: "https://youtube.com/watch?v=example1",
    description: "Learn array manipulation and hash table techniques"
  },
  {
    name: "Two Pointers",
    count: 8,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example2",
    description: "Master the two-pointer technique for array problems"
  },
  {
    name: "Stack",
    count: 6,
    difficulty: "Easy",
    videoUrl: "https://youtube.com/watch?v=example3",
    description: "Understand stack operations and applications"
  },
  {
    name: "Binary Search",
    count: 10,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example4",
    description: "Efficient searching in sorted arrays"
  },
  {
    name: "Sliding Window",
    count: 7,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example5",
    description: "Optimize subarray and substring problems"
  },
  {
    name: "Linked List",
    count: 9,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example6",
    description: "Master linked list manipulation techniques"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
    case "Medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
    case "Hard": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
    default: return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900";
  }
};

export default function DataStructures() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                Beyond Shyam
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/courses" className="text-blue-600 dark:text-blue-400 font-medium">
                Courses
              </Link>
              <Link href="/roadmap" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Roadmap
              </Link>
              <Link href="/videos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Videos
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <span>Data Structures</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Data Structures & Algorithms</h1>
          <p className="text-gray-600 dark:text-gray-400">Master fundamental patterns with video explanations and practice problems</p>
        </div>

        {/* Patterns Grid */}
        <div className="grid gap-4">
          {patterns.map((pattern, index) => {
            const patternSlug = pattern.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <Link href={`/courses/datastructures/${patternSlug}`} className="flex-1 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        {pattern.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(pattern.difficulty)}`}>
                        {pattern.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{pattern.description}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {pattern.count} problems
                    </div>
                  </Link>
                  
                  <div className="flex items-center space-x-3 ml-6">
                    <a 
                      href={pattern.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <span className="text-sm">▶</span>
                      <span className="text-sm font-medium">Watch Video</span>
                    </a>
                    <Link href={`/courses/datastructures/${patternSlug}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <span className="text-sm font-medium">Learn Pattern</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}