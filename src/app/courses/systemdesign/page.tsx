import Link from "next/link";

const systemDesignTopics = [
  {
    name: "System Design Fundamentals",
    count: 8,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example1",
    description: "Learn the basics of distributed systems and scalability"
  },
  {
    name: "Load Balancing",
    count: 5,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example2",
    description: "Distribute traffic across multiple servers efficiently"
  },
  {
    name: "Database Design",
    count: 12,
    difficulty: "Hard",
    videoUrl: "https://youtube.com/watch?v=example3",
    description: "SQL vs NoSQL, sharding, replication, and consistency"
  },
  {
    name: "Caching Strategies",
    count: 6,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example4",
    description: "Redis, Memcached, CDN, and cache patterns"
  },
  {
    name: "Message Queues",
    count: 7,
    difficulty: "Hard",
    videoUrl: "https://youtube.com/watch?v=example5",
    description: "Kafka, RabbitMQ, and asynchronous processing"
  },
  {
    name: "Microservices Architecture",
    count: 10,
    difficulty: "Hard",
    videoUrl: "https://youtube.com/watch?v=example6",
    description: "Service decomposition and inter-service communication"
  },
  {
    name: "API Design",
    count: 8,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example7",
    description: "REST, GraphQL, and API versioning strategies"
  },
  {
    name: "Monitoring & Observability",
    count: 5,
    difficulty: "Medium",
    videoUrl: "https://youtube.com/watch?v=example8",
    description: "Logging, metrics, tracing, and alerting systems"
  }
];

const realWorldSystems = [
  {
    name: "Design Twitter",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=twitter-design",
    description: "Social media platform with timeline, tweets, and followers"
  },
  {
    name: "Design URL Shortener",
    complexity: "Medium",
    videoUrl: "https://youtube.com/watch?v=url-shortener",
    description: "Service like bit.ly with custom URLs and analytics"
  },
  {
    name: "Design Chat System",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=chat-system",
    description: "Real-time messaging with WhatsApp-like features"
  },
  {
    name: "Design Video Streaming",
    complexity: "High",
    videoUrl: "https://youtube.com/watch?v=video-streaming",
    description: "Netflix-like platform with video encoding and CDN"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
    case "Medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
    case "Hard": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
    default: return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900";
  }
};

const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case "Low": return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900";
    case "Medium": return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
    case "High": return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900";
    default: return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900";
  }
};

export default function SystemDesign() {
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
              <Link href="/videos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Videos
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <span>System Design</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">System Design</h1>
          <p className="text-gray-600 dark:text-gray-400">Learn to design scalable distributed systems with real-world examples</p>
        </div>

        {/* Fundamentals Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Fundamentals</h2>
          <div className="grid gap-4">
            {systemDesignTopics.map((topic, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{topic.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
                        {topic.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{topic.description}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {topic.count} concepts
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 ml-6">
                    <a 
                      href={topic.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <span className="text-sm">▶</span>
                      <span className="text-sm font-medium">Watch Video</span>
                    </a>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <span className="text-sm font-medium">Learn</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Systems Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Real-World System Designs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {realWorldSystems.map((system, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{system.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{system.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(system.complexity)}`}>
                    {system.complexity}
                  </span>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={system.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <span className="text-sm">▶</span>
                    <span className="text-sm font-medium">Watch Design</span>
                  </a>
                  <button className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <span className="text-sm font-medium">Practice</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">System Design Mastery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">0/8</div>
              <div className="text-white/80">Topics Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">0/4</div>
              <div className="text-white/80">Systems Designed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">0%</div>
              <div className="text-white/80">Course Progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}