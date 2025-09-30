"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";

const part0Topics = [
  {
    name: "What is a System Design Interview + Do's/Don'ts",
    videoUrl: "https://youtube.com/watch?v=example1",
    contentUrl: "/courses/systemdesign/part-0/interview-basics",
    description: "Understanding the interview format and key guidelines"
  },
  {
    name: "The Delivery Flow",
    videoUrl: "https://youtube.com/watch?v=example2", 
    contentUrl: "/courses/systemdesign/part-0/delivery-flow",
    description: "How to structure and deliver your system design solution"
  },
  {
    name: "Interview Mindset + AI Self‑Evaluation",
    videoUrl: "https://youtube.com/watch?v=example3",
    contentUrl: "/courses/systemdesign/part-0/mindset-evaluation", 
    description: "Developing the right mindset and self-assessment techniques"
  }
];

export default function Part0() {
  const [completedTopics, setCompletedTopics] = useState<boolean[]>(new Array(part0Topics.length).fill(false));

  useEffect(() => {
    const saved = localStorage.getItem('systemdesign-part0-progress');
    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    }
  }, []);

  const toggleCompletion = (index: number) => {
    const newCompleted = [...completedTopics];
    newCompleted[index] = !newCompleted[index];
    setCompletedTopics(newCompleted);
    localStorage.setItem('systemdesign-part0-progress', JSON.stringify(newCompleted));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <Link href="/courses/systemdesign" className="hover:text-blue-600 dark:hover:text-blue-400">System Design</Link>
          <span>/</span>
          <span>Part 0</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded">
              Part 0
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Interview Orientation</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Master the interview process and mindset for system design</p>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {part0Topics.map((topic, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <button
                    onClick={() => toggleCompletion(index)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      completedTopics[index]
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
                    }`}
                  >
                    {completedTopics[index] && (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                      completedTopics[index]
                        ? 'text-gray-500 dark:text-gray-400 line-through'
                        : 'text-gray-900 dark:text-white'
                    }`}>{topic.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{topic.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 ml-6">
                  <a 
                    href={topic.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <span className="text-sm">▶</span>
                    <span className="text-sm font-medium">Video</span>
                  </a>
                  <Link 
                    href={topic.contentUrl}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <span className="text-sm font-medium">Read</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}