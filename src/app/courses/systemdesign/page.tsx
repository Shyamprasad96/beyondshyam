"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";

const systemDesignParts = [
  {
    part: "Part 1",
    name: "Foundations & Abstractions",
    topicCount: 3,
    difficulty: "Medium",
    href: "/courses/systemdesign/part-1",
    description: "Build strong foundations with key abstractions and models"
  },
  {
    part: "Part 2",
    name: "Networking & Delivery",
    topicCount: 6,
    difficulty: "Medium",
    href: "/courses/systemdesign/part-2",
    description: "Master networking protocols and global content delivery"
  },
  {
    part: "Part 3",
    name: "APIs & Contracts",
    topicCount: 5,
    difficulty: "Medium",
    href: "/courses/systemdesign/part-3",
    description: "Design robust APIs with proper contracts and security"
  },
  {
    part: "Part 4",
    name: "Data Modeling & Indexing",
    topicCount: 6,
    difficulty: "Hard",
    href: "/courses/systemdesign/part-4",
    description: "Master data modeling and advanced indexing strategies"
  },
  {
    part: "Part 5",
    name: "Distributed Systems Essentials",
    topicCount: 6,
    difficulty: "Hard",
    href: "/courses/systemdesign/part-5",
    description: "Understand core distributed systems concepts and trade-offs"
  },
  {
    part: "Part 6",
    name: "Core Building Blocks",
    topicCount: 9,
    difficulty: "Hard",
    href: "/courses/systemdesign/part-6",
    description: "Build systems with essential distributed components"
  },
  {
    part: "Part 7",
    name: "Reliability & Ops",
    topicCount: 4,
    difficulty: "Medium",
    href: "/courses/systemdesign/part-7",
    description: "Ensure system reliability and operational excellence"
  },
  {
    part: "Part 8",
    name: "Practice & Capstone",
    topicCount: 5,
    difficulty: "Hard",
    href: "/courses/systemdesign/part-8",
    description: "Apply everything with practice interviews and capstone project"
  }
];

const realWorldSystems = [
  {
    name: "Design Twitter",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=twitter-design",
    description: "Social media platform with timeline, tweets, and followers"
  },
  {
    name: "Design URL Shortener",
    complexity: "Medium",
    videoUrl: "https://youtube.com/watch?v=url-shortener",
    description: "Service like bit.ly with custom URLs and analytics"
  },
  {
    name: "Design Chat System",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=chat-system",
    description: "Real-time messaging with WhatsApp-like features"
  },
  {
    name: "Design Video Streaming",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=video-streaming",
    description: "Netflix-like platform with video encoding and CDN"
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

const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case "Low": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
    case "Medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
    case "High": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
    default: return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900";
  }
};

export default function SystemDesign() {
  const [progress, setProgress] = useState({
    partsCompleted: 0,
    topicsCompleted: 0,
    systemsCompleted: 0,
    technologiesCompleted: 0
  });

  useEffect(() => {
    const calculateProgress = () => {
      let totalTopics = 0;
      let completedTopics = 0;
      let completedParts = 0;
      
      // Check each part's progress
      const partSizes = [3, 6, 5, 6, 6, 9, 4, 5]; // Topics per part
      
      partSizes.forEach((size, index) => {
        const saved = localStorage.getItem(`systemdesign-part${index + 1}-progress`);
        if (saved) {
          const partProgress = JSON.parse(saved);
          const completed = partProgress.filter(Boolean).length;
          completedTopics += completed;
          if (completed === size) completedParts++;
        }
        totalTopics += size;
      });
      
      // Check technologies progress
      const techSaved = localStorage.getItem('systemdesign-technologies-progress');
      let technologiesCompleted = 0;
      if (techSaved) {
        technologiesCompleted = JSON.parse(techSaved).filter(Boolean).length;
      }
      
      // Check systems progress (placeholder for now)
      const systemsSaved = localStorage.getItem('systemdesign-systems-progress');
      let systemsCompleted = 0;
      if (systemsSaved) {
        systemsCompleted = JSON.parse(systemsSaved).filter(Boolean).length;
      }
      
      setProgress({
        partsCompleted: completedParts,
        topicsCompleted: completedTopics,
        systemsCompleted: systemsCompleted,
        technologiesCompleted: technologiesCompleted
      });
    };
    
    calculateProgress();
    
    // Recalculate when localStorage changes
    const handleStorageChange = () => calculateProgress();
    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  const totalTopics = 44; // 42 part topics + 2 extra
  const progressPercentage = Math.round((progress.topicsCompleted / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <span>System Design</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">System Design</h1>
          <p className="text-gray-600 dark:text-gray-400">Learn to design scalable distributed systems with real-world examples</p>
        </div>

        {/* Course Parts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Course Parts</h2>
          <div className="grid gap-4">
            {systemDesignParts.map((part, index) => (
              <Link key={index} href={part.href} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] relative">
                  {/* Status Tag */}
                  <div className="absolute top-4 right-4">
                    {index === 0 ? (
                      <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                        In Progress
                      </span>
                    ) : (
                      <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pr-20">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                          {part.part}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{part.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(part.difficulty)}`}>
                          {part.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{part.description}</p>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {part.topicCount} topics
                      </div>
                    </div>
                    
                    <div className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Key Technologies Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Technologies</h2>
          <Link href="/courses/systemdesign/technologies" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] relative">
              {/* Status Tag */}
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              </div>
              
              <div className="flex items-center justify-between pr-20">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">Essential Technologies</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Master the key technologies used in modern distributed systems</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    10 technologies • Redis, Kafka, Elasticsearch, API Gateway, and more
                  </div>
                </div>
                
                <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Real-World Systems Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Real-World System Designs</h2>
          <Link href="/courses/systemdesign/systems" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] relative">
              {/* Status Tag */}
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              </div>
              
              <div className="flex items-center justify-between pr-20">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">System Design Case Studies</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Practice with real-world system design problems and solutions</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    4 systems • Twitter, URL Shortener, Chat System, Video Streaming
                  </div>
                </div>
                
                <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Progress Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 sm:p-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">System Design Mastery Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">{progress.partsCompleted}/8</div>
              <div className="text-white/80 text-xs sm:text-sm">Parts Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">{progress.topicsCompleted}/{totalTopics}</div>
              <div className="text-white/80 text-xs sm:text-sm">Topics Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">{progress.technologiesCompleted}/10</div>
              <div className="text-white/80 text-xs sm:text-sm">Technologies Learned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">{progressPercentage}%</div>
              <div className="text-white/80 text-xs sm:text-sm">Course Progress</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-xs sm:text-sm text-white/80 mb-2 text-center">
              {progress.partsCompleted === 0 ? 'Next: Part 1 - Foundations & Abstractions' : 
               progress.partsCompleted < 8 ? `Continue: Part ${progress.partsCompleted + 1}` : 
               'Course Complete! 🎉'}
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-500" style={{width: `${progressPercentage}%`}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}