import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const personalCategories = [
  {
    title: "Fitness & Gym",
    icon: "💪",
    description: "Workout routines, gym tips, and fitness journey",
    videos: [
      { title: "My Daily Workout Routine", duration: "12:30", views: "5.2K" },
      { title: "Home Gym Setup Tour", duration: "8:45", views: "3.8K" },
      { title: "Beginner's Guide to Weight Training", duration: "15:20", views: "7.1K" },
      { title: "Pre & Post Workout Nutrition", duration: "10:15", views: "4.5K" }
    ]
  },
  {
    title: "Diet & Nutrition",
    icon: "🥗",
    description: "Healthy eating habits and meal planning",
    videos: [
      { title: "What I Eat in a Day - Programmer Edition", duration: "11:40", views: "6.3K" },
      { title: "Meal Prep for Busy Developers", duration: "14:25", views: "8.7K" },
      { title: "Healthy Snacks for Long Coding Sessions", duration: "9:30", views: "4.9K" },
      { title: "Intermittent Fasting & Productivity", duration: "13:15", views: "5.8K" }
    ]
  },
  {
    title: "Travel & Adventures",
    icon: "✈️",
    description: "Travel vlogs, destinations, and experiences",
    videos: [
      { title: "Solo Trip to Goa - Developer's Perspective", duration: "18:45", views: "9.2K" },
      { title: "Working Remotely from Mountains", duration: "16:30", views: "7.6K" },
      { title: "Tech Conferences Around the World", duration: "22:10", views: "11.4K" },
      { title: "Budget Travel Tips for Students", duration: "12:50", views: "6.8K" }
    ]
  },
  {
    title: "Lifestyle & Productivity",
    icon: "🌟",
    description: "Daily routines, productivity tips, and life balance",
    videos: [
      { title: "My Morning Routine as a Developer", duration: "10:20", views: "8.9K" },
      { title: "Work-Life Balance in Tech", duration: "14:35", views: "12.3K" },
      { title: "Setting Up the Perfect Home Office", duration: "13:45", views: "7.4K" },
      { title: "Dealing with Burnout in Programming", duration: "16:25", views: "15.2K" }
    ]
  }
];

export default function Personal() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Life
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Beyond coding - fitness, travel, and lifestyle content
          </p>
        </div>

        {/* Categories */}
        {personalCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <span className="text-4xl mr-4">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Follow My Journey</h3>
          <p className="text-lg mb-6">Subscribe to see more personal content and behind-the-scenes</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://www.youtube.com/@ShyamTechGuide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe on YouTube
            </a>
            <a 
              href="https://www.instagram.com/beyondshyam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
            >
              Follow Personal IG
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/shyam-prasad-yanamaddi-9213b8220/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/50">•</span>
            <a 
              href="https://www.instagram.com/shyamtechguide/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Tech Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}