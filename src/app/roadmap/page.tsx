import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const roadmapSteps = [
  {
    phase: "Phase 1: Foundations",
    duration: "2-3 months",
    topics: [
      "Programming Language Basics (Python/Java/C++)",
      "Time & Space Complexity (Big O)",
      "Basic Data Structures (Arrays, Strings)",
      "Problem Solving Fundamentals"
    ],
    color: "blue"
  },
  {
    phase: "Phase 2: Core Data Structures",
    duration: "3-4 months", 
    topics: [
      "Arrays & Hashing Patterns",
      "Two Pointers Technique",
      "Stack & Queue Operations",
      "Linked Lists Manipulation",
      "Binary Search Mastery"
    ],
    color: "green"
  },
  {
    phase: "Phase 3: Advanced Structures",
    duration: "4-5 months",
    topics: [
      "Trees & Binary Search Trees",
      "Heap & Priority Queues",
      "Tries & String Processing",
      "Graphs & Traversal Algorithms",
      "Union Find & Disjoint Sets"
    ],
    color: "purple"
  },
  {
    phase: "Phase 4: Algorithm Patterns",
    duration: "3-4 months",
    topics: [
      "Dynamic Programming",
      "Backtracking & Recursion",
      "Greedy Algorithms",
      "Sliding Window Patterns",
      "Divide & Conquer"
    ],
    color: "red"
  },
  {
    phase: "Phase 5: System Design",
    duration: "2-3 months",
    topics: [
      "System Design Fundamentals",
      "Database Design & Scaling",
      "Caching & Load Balancing",
      "Microservices Architecture",
      "Real-world System Examples"
    ],
    color: "indigo"
  },
  {
    phase: "Phase 6: Interview Prep",
    duration: "1-2 months",
    topics: [
      "Mock Interviews",
      "Company-specific Problems",
      "Behavioral Questions",
      "System Design Practice",
      "Final Review & Polish"
    ],
    color: "orange"
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
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Complete DSA Roadmap
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your step-by-step journey to master Data Structures & Algorithms
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          {roadmapSteps.map((step, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* Timeline Dot */}
              <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${getColorClasses(step.color)} rounded-full flex items-center justify-center text-white font-bold text-lg z-10`}>
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="ml-8 flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.phase}</h3>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                      {step.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {step.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Total Journey: 15-21 months</h3>
          <p className="text-lg mb-6">Consistent practice and dedication will get you there!</p>
          <Link href="/courses" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}