import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const part5Topics = [
  { name: "CAP Theorem", videoUrl: "https://youtube.com/watch?v=cap", contentUrl: "/courses/systemdesign/part-5/cap", description: "Consistency, Availability, and Partition tolerance trade-offs" },
  { name: "PACELC Theorem", videoUrl: "https://youtube.com/watch?v=pacelc", contentUrl: "/courses/systemdesign/part-5/pacelc", description: "Extended CAP theorem including latency considerations" },
  { name: "Consistent Hashing", videoUrl: "https://youtube.com/watch?v=consistent-hashing", contentUrl: "/courses/systemdesign/part-5/consistent-hashing", description: "Distributed hash table technique for scalable systems" },
  { name: "Replication", videoUrl: "https://youtube.com/watch?v=replication", contentUrl: "/courses/systemdesign/part-5/replication", description: "Data replication strategies and consistency models" },
  { name: "Partitioning Patterns", videoUrl: "https://youtube.com/watch?v=partitioning", contentUrl: "/courses/systemdesign/part-5/partitioning", description: "Horizontal and vertical partitioning techniques" },
  { name: "Consensus Basics", videoUrl: "https://youtube.com/watch?v=consensus", contentUrl: "/courses/systemdesign/part-5/consensus", description: "Raft, Paxos, and distributed consensus algorithms" }
];

export default function Part5() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <Link href="/courses/systemdesign" className="hover:text-blue-600 dark:hover:text-blue-400">System Design</Link>
          <span>/</span>
          <span>Part 5</span>
        </div>
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded">Part 5</span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Distributed Systems Essentials</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Understand core distributed systems concepts and trade-offs</p>
        </div>
        <div className="space-y-4">
          {part5Topics.map((topic, index) => (
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