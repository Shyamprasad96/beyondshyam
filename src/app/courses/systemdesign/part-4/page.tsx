import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const part4Topics = [
  {
    name: "Data Modeling Fundamentals",
    videoUrl: "https://youtube.com/watch?v=data-modeling",
    contentUrl: "/courses/systemdesign/part-4/data-modeling",
    description: "Core principles of designing effective data models"
  },
  {
    name: "Database Model Options",
    videoUrl: "https://youtube.com/watch?v=db-models", 
    contentUrl: "/courses/systemdesign/part-4/database-models",
    description: "Relational, document, key-value, and graph database models"
  },
  {
    name: "Durability in Databases",
    videoUrl: "https://youtube.com/watch?v=durability",
    contentUrl: "/courses/systemdesign/part-4/durability", 
    description: "ACID properties and ensuring data persistence"
  },
  {
    name: "Indexing Basics + B‑Trees",
    videoUrl: "https://youtube.com/watch?v=btrees",
    contentUrl: "/courses/systemdesign/part-4/btrees", 
    description: "Understanding B-tree indexes and their performance characteristics"
  },
  {
    name: "LSM Trees, Hash, Geospatial Indexes",
    videoUrl: "https://youtube.com/watch?v=advanced-indexes",
    contentUrl: "/courses/systemdesign/part-4/advanced-indexes", 
    description: "Advanced indexing strategies for different use cases"
  },
  {
    name: "Inverted Indexes & Optimization",
    videoUrl: "https://youtube.com/watch?v=inverted-indexes",
    contentUrl: "/courses/systemdesign/part-4/inverted-indexes", 
    description: "Search indexes and query optimization techniques"
  }
];

export default function Part4() {
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
          <span>Part 4</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded">
              Part 4
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Data Modeling & Indexing</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Master data modeling and advanced indexing strategies</p>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {part4Topics.map((topic, index) => (
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