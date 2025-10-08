import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const part2Topics = [
  {
    name: "Networking 101 (L3/L4/L7)",
    videoUrl: "https://www.youtube.com/watch?v=mPodLpVf0Gw",
    contentUrl: "/courses/systemdesign/part-2/networking-101",
    description: "Understanding network layers and protocols"
  },
  {
    name: "IP & Routing Basics",
    videoUrl: "https://youtube.com/watch?v=ip-routing", 
    contentUrl: "/courses/systemdesign/part-2/ip-routing",
    description: "How data travels across networks and routing fundamentals"
  },
  {
    name: "Transport Protocols (UDP, TCP, QUIC)",
    videoUrl: "https://youtube.com/watch?v=transport-protocols",
    contentUrl: "/courses/systemdesign/part-2/transport-protocols", 
    description: "Comparing different transport layer protocols and their use cases"
  },
  {
    name: "Application Protocols (HTTP, REST, GraphQL, gRPC, SSE, WebSockets, WebRTC, Polling)",
    videoUrl: "https://youtube.com/watch?v=app-protocols",
    contentUrl: "/courses/systemdesign/part-2/application-protocols", 
    description: "Modern application layer protocols for different communication patterns"
  },
  {
    name: "Load Balancing Fundamentals",
    videoUrl: "https://youtube.com/watch?v=load-balancing",
    contentUrl: "/courses/systemdesign/part-2/load-balancing", 
    description: "Distributing traffic across multiple servers efficiently"
  },
  {
    name: "Global Delivery & Latency",
    videoUrl: "https://youtube.com/watch?v=global-delivery",
    contentUrl: "/courses/systemdesign/part-2/global-delivery", 
    description: "CDNs, edge computing, and reducing global latency"
  }
];

export default function Part2() {
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
          <span>Part 2</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded">
              Part 2
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Networking & Delivery</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Master networking protocols and global content delivery</p>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {part2Topics.map((topic, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{topic.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{topic.description}</p>
                </div>
                
                <div className="flex items-center space-x-3 ml-6">
                  <a 
                    href={topic.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <span className="text-sm">▶</span>
                    <span className="text-sm font-medium">Video</span>
                  </a>
                  <Link 
                    href={topic.contentUrl}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
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