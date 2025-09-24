'use client';

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

const problemSets = {
  "Blind 75": {
    count: 75,
    description: "Essential problems for coding interview preparation",
    problems: [
      { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
      { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { name: "Contains Duplicate", difficulty: "Easy", link: "https://leetcode.com/problems/contains-duplicate/" },
      { name: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
      { name: "Maximum Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
      { name: "Maximum Product Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-product-subarray/" },
      { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
      { name: "Search in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" },
      { name: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" },
      { name: "Sum of Two Integers", difficulty: "Medium", link: "https://leetcode.com/problems/sum-of-two-integers/" },
      { name: "Number of 1 Bits", difficulty: "Easy", link: "https://leetcode.com/problems/number-of-1-bits/" },
      { name: "Counting Bits", difficulty: "Easy", link: "https://leetcode.com/problems/counting-bits/" },
      { name: "Missing Number", difficulty: "Easy", link: "https://leetcode.com/problems/missing-number/" },
      { name: "Reverse Bits", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-bits/" }
    ]
  },
  "Grind 75": {
    count: 75,
    description: "Comprehensive problem set covering all major patterns",
    problems: [
      { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
      { name: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
      { name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { name: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
      { name: "Invert Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/" },
      { name: "Valid Anagram", difficulty: "Easy", link: "https://leetcode.com/problems/valid-anagram/" },
      { name: "Binary Search", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search/" },
      { name: "Flood Fill", difficulty: "Easy", link: "https://leetcode.com/problems/flood-fill/" },
      { name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { name: "Balanced Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/balanced-binary-tree/" },
      { name: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
      { name: "Implement Queue using Stacks", difficulty: "Easy", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
      { name: "First Bad Version", difficulty: "Easy", link: "https://leetcode.com/problems/first-bad-version/" },
      { name: "Ransom Note", difficulty: "Easy", link: "https://leetcode.com/problems/ransom-note/" }
    ]
  },
  "Top Interview 150": {
    count: 150,
    description: "Most frequently asked problems in technical interviews",
    problems: [
      { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
      { name: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { name: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/" },
      { name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" },
      { name: "3Sum Closest", difficulty: "Medium", link: "https://leetcode.com/problems/3sum-closest/" },
      { name: "4Sum", difficulty: "Medium", link: "https://leetcode.com/problems/4sum/" },
      { name: "Sum of Two Integers", difficulty: "Medium", link: "https://leetcode.com/problems/sum-of-two-integers/" },
      { name: "Path Sum", difficulty: "Easy", link: "https://leetcode.com/problems/path-sum/" },
      { name: "Path Sum II", difficulty: "Medium", link: "https://leetcode.com/problems/path-sum-ii/" },
      { name: "Path Sum III", difficulty: "Medium", link: "https://leetcode.com/problems/path-sum-iii/" },
      { name: "Minimum Path Sum", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-path-sum/" },
      { name: "Maximum Path Sum", difficulty: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
      { name: "Range Sum Query - Immutable", difficulty: "Easy", link: "https://leetcode.com/problems/range-sum-query-immutable/" },
      { name: "Range Sum Query 2D - Immutable", difficulty: "Medium", link: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
      { name: "Subarray Sum Equals K", difficulty: "Medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { name: "Maximum Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
      { name: "Combination Sum", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum/" },
      { name: "Combination Sum II", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-ii/" },
      { name: "Combination Sum III", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-iii/" },
      { name: "Combination Sum IV", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-iv/" }
    ]
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
    case "Medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
    case "Hard": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
    default: return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900";
  }
};

export default function LeetCode() {
  const [activeTab, setActiveTab] = useState("Blind 75");
  const [showAll, setShowAll] = useState(false);

  const currentSet = problemSets[activeTab as keyof typeof problemSets];
  const displayedProblems = showAll ? currentSet.problems : currentSet.problems.slice(0, 10);

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
              <Link href="/personal" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Personal
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
          <span>LeetCode Problems</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">LeetCode Problems</h1>
          <p className="text-gray-600 dark:text-gray-400">Curated problem sets with direct links to practice</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {Object.keys(problemSets).map((setName) => (
            <button
              key={setName}
              onClick={() => {
                setActiveTab(setName);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === setName
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {setName}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{activeTab}</h2>
            <p className="text-gray-600 dark:text-gray-400">{currentSet.description}</p>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Showing {displayedProblems.length} of {currentSet.count} problems
            </div>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {displayedProblems.map((problem, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                    <span className="text-gray-900 dark:text-white font-medium">{problem.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                    <a 
                      href={problem.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Solve →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {currentSet.problems.length > 10 && (
            <div className="px-6 py-4 text-center border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                {showAll ? 'Show Less ↑' : `Show All ${currentSet.count} Problems ↓`}
              </button>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Your LeetCode Journey</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">0</div>
              <div className="text-white/80">Easy Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">0</div>
              <div className="text-white/80">Medium Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">0</div>
              <div className="text-white/80">Hard Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">0</div>
              <div className="text-white/80">Total Solved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}