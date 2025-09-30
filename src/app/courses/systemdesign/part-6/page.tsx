import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const part6Topics = [
  { name: "Key‑Value Store + Sequencer", videoUrl: "https://youtube.com/watch?v=kv-store", contentUrl: "/courses/systemdesign/part-6/kv-store", description: "Building distributed key-value stores and sequence generators" },
  { name: "Caching Patterns", videoUrl: "https://youtube.com/watch?v=caching", contentUrl: "/courses/systemdesign/part-6/caching", description: "Cache-aside, write-through, write-behind patterns" },
  { name: "Distributed Cache", videoUrl: "https://youtube.com/watch?v=distributed-cache", contentUrl: "/courses/systemdesign/part-6/distributed-cache", description: "Redis clusters and distributed caching strategies" },
  { name: "Distributed Messaging Queue", videoUrl: "https://youtube.com/watch?v=message-queue", contentUrl: "/courses/systemdesign/part-6/message-queue", description: "Building reliable message queues for async processing" },
  { name: "Pub/Sub Systems", videoUrl: "https://youtube.com/watch?v=pubsub", contentUrl: "/courses/systemdesign/part-6/pubsub", description: "Publisher-subscriber patterns and event streaming" },
  { name: "Rate Limiter", videoUrl: "https://youtube.com/watch?v=rate-limiter", contentUrl: "/courses/systemdesign/part-6/rate-limiter", description: "Token bucket, sliding window rate limiting algorithms" },
  { name: "Blob/Object Store", videoUrl: "https://youtube.com/watch?v=blob-store", contentUrl: "/courses/systemdesign/part-6/blob-store", description: "Distributed file storage like S3 and object stores" },
  { name: "Distributed Search", videoUrl: "https://youtube.com/watch?v=search", contentUrl: "/courses/systemdesign/part-6/search", description: "Building scalable search systems with indexing" },
  { name: "Ops Blocks (Logging, Monitoring, Task Scheduler, Sharded Counters)", videoUrl: "https://youtube.com/watch?v=ops", contentUrl: "/courses/systemdesign/part-6/ops", description: "Operational components for production systems" }
];

export default function Part6() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <Link href="/courses/systemdesign" className="hover:text-blue-600 dark:hover:text-blue-400">System Design</Link>
          <span>/</span>
          <span>Part 6</span>
        </div>
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded">Part 6</span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Core Building Blocks</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Build systems with essential distributed components</p>
        </div>
        <div className="space-y-4">
          {part6Topics.map((topic, index) => (
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