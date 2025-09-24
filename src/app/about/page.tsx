import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function About() {
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
              <Link href="/courses" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
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
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium">
                About
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center text-white">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Shyam</h1>
            <p className="text-xl opacity-90">Software Engineer & Educator</p>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Hi! I'm Shyam, a passionate software engineer with a love for teaching and helping others 
                master data structures and algorithms. I believe that complex concepts can be made simple 
                with the right approach and clear explanations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I started my coding journey like many others - struggling with algorithms and feeling 
                overwhelmed by the vast amount of information. Through persistence and structured learning, 
                I developed a systematic approach to problem-solving that I now share with others.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What I Do</h3>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                <li>• Create comprehensive courses on Data Structures & Algorithms</li>
                <li>• Solve and explain LeetCode problems with clear patterns</li>
                <li>• Design system architecture tutorials</li>
                <li>• Share personal experiences and career advice</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">My Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                To make coding interviews less intimidating and help developers build strong fundamentals 
                that will serve them throughout their careers. I believe everyone can succeed with the 
                right guidance and practice.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-gray-600 dark:text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Video Tutorials</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1000+</div>
                <div className="text-gray-600 dark:text-gray-400">Students Helped</div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/shyam-prasad-yanamaddi-9213b8220/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.youtube.com/@ShyamTechGuide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.instagram.com/shyamtechguide/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}