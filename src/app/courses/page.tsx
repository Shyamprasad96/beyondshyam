import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const courses = [
  {
    title: "System Design",
    description: "Master system design interviews with 9 comprehensive parts",
    icon: "🏗️",
    color: "purple",
    href: "/courses/systemdesign",
    topics: 45
  },
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
    title: "Artificial Intelligence",
    description: "Master AI/ML concepts with practical implementations",
    icon: "🤖",
    color: "orange",
    href: "/courses/ai",
    topics: 15
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue": return "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700";
    case "green": return "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700";
    case "purple": return "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700";
    case "orange": return "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {courses.map((course, index) => (
            <Link key={index} href={course.href} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(course.color)} p-4 sm:p-6 text-white h-32 sm:h-40 relative`}>
                  {course.title === "System Design" ? (
                    <div className="absolute top-2 right-2 bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold">In Progress</div>
                  ) : (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">Coming Soon!</div>
                  )}
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{course.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{course.title}</h3>
                  <p className="text-white/90 text-xs sm:text-sm line-clamp-2">{course.description}</p>
                </div>
                
                {/* Card Body */}
                <div className="p-4 sm:p-6 h-16 sm:h-20">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{course.topics}</span>
                      <span className="text-xs sm:text-sm ml-1">topics</span>
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