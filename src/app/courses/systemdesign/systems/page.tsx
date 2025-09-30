import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const realWorldSystems = [
  {
    name: "Design Twitter",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=twitter-design",
    contentUrl: "/courses/systemdesign/systems/twitter",
    description: "Social media platform with timeline, tweets, and followers"
  },
  {
    name: "Design URL Shortener",
    complexity: "Medium",
    videoUrl: "https://youtube.com/watch?v=url-shortener",
    contentUrl: "/courses/systemdesign/systems/url-shortener",
    description: "Service like bit.ly with custom URLs and analytics"
  },
  {
    name: "Design Chat System",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=chat-system",
    contentUrl: "/courses/systemdesign/systems/chat-system",
    description: "Real-time messaging with WhatsApp-like features"
  },
  {
    name: "Design Video Streaming",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=video-streaming",
    contentUrl: "/courses/systemdesign/systems/video-streaming",
    description: "Netflix-like platform with video encoding and CDN"
  }
];

const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case "Low": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
    case "Medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
    case "High": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
    default: return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900";
  }
};

export default function Systems() {
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
          <span>Systems</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Real-World System Designs</h1>
          <p className="text-gray-600 dark:text-gray-400">Practice with real-world system design problems and comprehensive solutions</p>
        </div>

        {/* Systems List */}
        <div className="space-y-4">
          {realWorldSystems.map((system, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{system.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(system.complexity)}`}>
                      {system.complexity}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{system.description}</p>
                </div>
                
                <div className="flex items-center space-x-2 ml-6">
                  <a 
                    href={system.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                  >
                    <span className="text-xs">▶</span>
                    <span>Video</span>
                  </a>
                  <Link 
                    href={system.contentUrl}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Design
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