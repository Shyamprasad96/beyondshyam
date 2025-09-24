import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Courses</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Choose a course to start your learning journey</p>
        
        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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