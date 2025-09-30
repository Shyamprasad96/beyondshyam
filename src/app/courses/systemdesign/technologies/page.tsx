"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";

const technologies = [
  { name: "Postgres", type: "Database", videoUrl: "https://youtube.com/watch?v=postgres", contentUrl: "/courses/systemdesign/technologies/postgres", description: "Powerful relational database with ACID properties" },
  { name: "SQL", type: "Query Language", videoUrl: "https://youtube.com/watch?v=sql", contentUrl: "/courses/systemdesign/technologies/sql", description: "Standard language for relational database operations" },
  { name: "Redis", type: "Cache/Database", videoUrl: "https://youtube.com/watch?v=redis", contentUrl: "/courses/systemdesign/technologies/redis", description: "In-memory data structure store for caching and real-time applications" },
  { name: "Cassandra", type: "NoSQL Database", videoUrl: "https://youtube.com/watch?v=cassandra", contentUrl: "/courses/systemdesign/technologies/cassandra", description: "Distributed NoSQL database for handling large amounts of data" },
  { name: "DynamoDB", type: "NoSQL Database", videoUrl: "https://youtube.com/watch?v=dynamodb", contentUrl: "/courses/systemdesign/technologies/dynamodb", description: "AWS managed NoSQL database with single-digit millisecond performance" },
  { name: "Kafka", type: "Message Queue", videoUrl: "https://youtube.com/watch?v=kafka", contentUrl: "/courses/systemdesign/technologies/kafka", description: "Distributed streaming platform for building real-time data pipelines" },
  { name: "Elasticsearch", type: "Search Engine", videoUrl: "https://youtube.com/watch?v=elasticsearch", contentUrl: "/courses/systemdesign/technologies/elasticsearch", description: "Distributed search and analytics engine built on Apache Lucene" },
  { name: "API Gateway", type: "Gateway", videoUrl: "https://youtube.com/watch?v=api-gateway", contentUrl: "/courses/systemdesign/technologies/api-gateway", description: "Entry point for managing, securing, and routing API requests" },
  { name: "Flink", type: "Stream Processing", videoUrl: "https://youtube.com/watch?v=flink", contentUrl: "/courses/systemdesign/technologies/flink", description: "Framework for stateful computations over data streams" },
  { name: "ZooKeeper", type: "Coordination", videoUrl: "https://youtube.com/watch?v=zookeeper", contentUrl: "/courses/systemdesign/technologies/zookeeper", description: "Centralized service for maintaining configuration and distributed synchronization" }
];

export default function Technologies() {
  const [completedTechs, setCompletedTechs] = useState<boolean[]>(new Array(technologies.length).fill(false));

  useEffect(() => {
    const saved = localStorage.getItem('systemdesign-technologies-progress');
    if (saved) {
      setCompletedTechs(JSON.parse(saved));
    }
  }, []);

  const toggleCompletion = (index: number) => {
    const newCompleted = [...completedTechs];
    newCompleted[index] = !newCompleted[index];
    setCompletedTechs(newCompleted);
    localStorage.setItem('systemdesign-technologies-progress', JSON.stringify(newCompleted));
  };

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
          <span>Technologies</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Technologies</h1>
          <p className="text-gray-600 dark:text-gray-400">Master the essential technologies used in modern distributed systems</p>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <button
                    onClick={() => toggleCompletion(index)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      completedTechs[index]
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
                    }`}
                  >
                    {completedTechs[index] && (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className={`text-lg font-semibold transition-colors ${
                        completedTechs[index]
                          ? 'text-gray-500 dark:text-gray-400 line-through'
                          : 'text-gray-900 dark:text-white'
                      }`}>{tech.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-medium rounded">
                        {tech.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 ml-0 sm:ml-6 mt-4 sm:mt-0">
                  <a 
                    href={tech.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1 px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                  >
                    <span className="text-xs">▶</span>
                    <span>Video</span>
                  </a>
                  <Link 
                    href={tech.contentUrl}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm text-center"
                  >
                    Learn
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