import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const videoCategories = [
  {
    title: "Professional Journey",
    videos: [
      { title: "My Coding Journey - From Beginner to Expert", duration: "15:30", views: "12K" },
      { title: "How I Prepared for FAANG Interviews", duration: "22:45", views: "8.5K" },
      { title: "Day in the Life of a Software Engineer", duration: "18:20", views: "15K" },
      { title: "Mistakes I Made Early in My Career", duration: "12:15", views: "6.2K" }
    ]
  },
  {
    title: "Technical Deep Dives",
    videos: [
      { title: "Understanding Big O Notation", duration: "25:10", views: "20K" },
      { title: "Binary Trees Explained Simply", duration: "30:45", views: "18K" },
      { title: "Dynamic Programming Patterns", duration: "35:20", views: "22K" },
      { title: "System Design Fundamentals", duration: "40:15", views: "25K" }
    ]
  }
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Professional Videos</h1>
        
        {videoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{category.title}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{video.duration}</span>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Subscribe Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6">Subscribe to get notified about new videos and courses</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}