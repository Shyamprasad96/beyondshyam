import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const courses = [
  {
    title: "Data Structures",
    description: "Master fundamental data structures with video explanations",
    icon: "📊",
    color: "blue",
    href: "/courses/datastructures",
    topics: 12
  },
  {
    title: "LeetCode Problems",
    description: "Curated problem sets with detailed solutions",
    icon: "💻",
    color: "green",
    href: "/courses/leetcode",
    topics: 150
  },
  {
    title: "System Design",
    description: "Learn to design scalable distributed systems",
    icon: "🏗️",
    color: "purple",
    href: "/courses/systemdesign",
    topics: 8
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue": return "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700";
    case "green": return "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700";
    case "purple": return "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700";
    default: return "from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700";
  }
};

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center sm:text-left">Courses</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 text-center sm:text-left px-2 sm:px-0">Choose a course to start your learning journey</p>
        
        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <Link key={index} href={course.href} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(course.color)} p-6 text-white`}>
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-white/90 text-sm">{course.description}</p>
                </div>
                
                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{course.topics}</span>
                      <span className="text-sm ml-1">topics</span>
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}