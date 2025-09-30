import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const part8Topics = [
  { name: "Back‑of‑the‑Envelope Masterclass", videoUrl: "https://youtube.com/watch?v=estimation", contentUrl: "/courses/systemdesign/part-8/estimation", description: "Master capacity planning and system estimation techniques" },
  { name: "Apply Consistency", videoUrl: "https://youtube.com/watch?v=apply-consistency", contentUrl: "/courses/systemdesign/part-8/apply-consistency", description: "Practical application of consistency models in real systems" },
  { name: "Apply Real‑time", videoUrl: "https://youtube.com/watch?v=apply-realtime", contentUrl: "/courses/systemdesign/part-8/apply-realtime", description: "Building real-time systems with low latency requirements" },
  { name: "Mock Interview Walkthrough", videoUrl: "https://youtube.com/watch?v=mock-interview", contentUrl: "/courses/systemdesign/part-8/mock-interview", description: "Complete system design interview simulation and feedback" },
  { name: "Final Capstone + Checklist", videoUrl: "https://youtube.com/watch?v=capstone", contentUrl: "/courses/systemdesign/part-8/capstone", description: "Comprehensive project and interview preparation checklist" }
];

export default function Part8() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <Link href="/courses/systemdesign" className="hover:text-blue-600 dark:hover:text-blue-400">System Design</Link>
          <span>/</span>
          <span>Part 8</span>
        </div>
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded">Part 8</span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Practice & Capstone</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Apply everything with practice interviews and capstone project</p>
        </div>
        <div className="space-y-4">
          {part8Topics.map((topic, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{topic.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{topic.description}</p>
                </div>
                <div className="flex items-center space-x-3 ml-6">
                  <a href={topic.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <span className="text-sm">▶</span>
                    <span className="text-sm font-medium">Video</span>
                  </a>
                  <Link href={topic.contentUrl} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
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