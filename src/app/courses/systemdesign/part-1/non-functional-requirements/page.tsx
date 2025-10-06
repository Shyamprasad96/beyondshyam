"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function NonFunctionalRequirements() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 overflow-x-auto">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <Link href="/courses/systemdesign" className="hover:text-blue-600 dark:hover:text-blue-400">System Design</Link>
          <span>/</span>
          <Link href="/courses/systemdesign/part-1" className="hover:text-blue-600 dark:hover:text-blue-400">Part 1</Link>
          <span>/</span>
          <span>Non-Functional Requirements</span>
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Non-Functional Requirements</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Understanding the qualities that define how well a system behaves</p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
          <div className="prose dark:prose-invert max-w-none">
            
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">🧭 Why Trade-Offs Matter in System Design</h1>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In system design, there's no perfect solution. Every decision is a trade-off.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 dark:text-gray-300">Want high speed? You might sacrifice consistency.</p>
                <p className="text-gray-700 dark:text-gray-300">Want high availability? You might accept stale data.</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                To make smart trade-offs — especially in interviews — you need to understand the qualities we're balancing. These qualities are called <strong>Non-Functional Requirements (NFRs)</strong>.
              </p>
            </div>

            {/* Overview */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                They don't describe <em>what</em> the system does. They describe <em>how well</em> it behaves.
              </p>
            </div>

            {/* 1. Availability */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">✅</span> 1. Availability
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What it means:</h3>
                <p className="text-gray-700 dark:text-gray-300">Is the system up and reachable when users need it?</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How we measure it:</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Availability is often expressed in "nines":</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium text-green-600 dark:text-green-400">99.9%</span> = <span className="text-white font-medium">~8 hours of downtime per year</span>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium text-green-600 dark:text-green-400">99.999%</span> = <span className="text-white font-medium">~5 minutes of downtime per year</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-world example:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Google Search is available almost all the time. Even if one data center fails, traffic is rerouted instantly.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques to improve availability:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Redundancy (multiple servers or replicas)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Load balancing (distribute traffic across healthy servers)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Health checks and automatic failover</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Multi-region deployment</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-300">
                  <strong>Why it matters:</strong> If your system isn't available, users can't use it — no matter how good your features are.
                </p>
              </div>
            </div>

            {/* 2. Reliability */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">✅</span> 2. Reliability
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What it means:</h3>
                <p className="text-gray-700 dark:text-gray-300">Does the system behave correctly over time?</p>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A calculator that's always on but sometimes gives wrong answers is unreliable.
                </p>
              </div>

              <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-world example:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When you order something from Amazon, you expect it to be placed once, charged once, and shipped once — no duplicates or silent failures.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques to improve reliability:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Data validation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Durable storage (e.g., write-ahead logs, replication)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Monitoring and alerting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Idempotency (safe retries without duplicate effects)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-300">
                  <strong>Why it matters:</strong> A system that's unreliable breaks trust — and trust is everything in software.
                </p>
              </div>
            </div>

            {/* 3. Scalability */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">✅</span> 3. Scalability
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What it means:</h3>
                <p className="text-gray-700 dark:text-gray-300">Can the system handle growth — more users, more data, more traffic?</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Two types of scaling:</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div className="p-3 sm:p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <h4 className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">Vertical scaling:</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Add more power to one machine (like upgrading your laptop)</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <h4 className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">Horizontal scaling:</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Add more machines and split the work (like hiring more chefs in a busy kitchen)</p>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-world example:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Instagram handles billions of photo uploads. It scales horizontally across servers and regions.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques to improve scalability:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Sharding (split data across partitions)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Load balancing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Caching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Queues (to smooth out traffic spikes)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-300">
                  <strong>Why it matters:</strong> Scalability ensures your system doesn't collapse when demand grows.
                </p>
              </div>
            </div>

            {/* 4. Throughput */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">✅</span> 4. Throughput
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What it means:</h3>
                <p className="text-gray-700 dark:text-gray-300">How much work can your system handle per second? It's about volume — not speed.</p>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A toll booth that processes 100 cars per minute has high throughput. If it only handles 5, traffic jams.
                </p>
              </div>

              <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-world example:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Stripe processes thousands of payments every second. YouTube streams petabytes of video every minute.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques to improve throughput:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Parallelism (multiple workers handle tasks)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Batching (group tasks to reduce overhead)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Asynchronous processing (don't block on slow tasks)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Efficient protocols (like gRPC or QUIC)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-300">
                  <strong>Why it matters:</strong> High throughput means your system can handle heavy traffic without choking.
                </p>
              </div>
            </div>

            {/* 5. Fault Tolerance */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">✅</span> 5. Fault Tolerance
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What it means:</h3>
                <p className="text-gray-700 dark:text-gray-300">Can the system survive failures and keep running?</p>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A bridge that still works even if one pillar collapses — that's fault tolerance.
                </p>
              </div>

              <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-world example:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Netflix randomly shuts down servers to test fault tolerance. Their system keeps working even when parts fail.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques to improve fault tolerance:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Replication (multiple copies of data)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Circuit breakers (stop cascading failures)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Graceful degradation (partial service instead of total failure)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Retry with backoff (handle temporary errors without overwhelming the system)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-300">
                  <strong>Why it matters:</strong> Failures are inevitable. Fault tolerance makes sure they don't take down your whole system.
                </p>
              </div>
            </div>

            {/* 6. Maintainability */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">✅</span> 6. Maintainability
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What it means:</h3>
                <p className="text-gray-700 dark:text-gray-300">How easy is it to fix, change, or improve the system?</p>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A car with modular parts is easier to repair than one that needs a specialist for every fix.
                </p>
              </div>

              <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-world example:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  GitHub uses modular microservices — teams can update features independently. Enterprise CRMs must be easy to customize and debug.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques to improve maintainability:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Clean abstractions (hide complexity)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Modular design (isolate components)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Logging and observability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Separation of concerns</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-300">
                  <strong>Why it matters:</strong> Maintainable systems evolve faster, break less, and are easier to debug.
                </p>
              </div>
            </div>

            {/* Interlinked NFRs */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🔗</span> How These NFRs Are Interlinked
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">NFR A</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Related To</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Why They're Linked</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Availability</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Fault Tolerance</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Faults must be handled to stay available</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Reliability</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Fault Tolerance</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Surviving failures keeps data safe</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Scalability</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Throughput</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">More machines = more capacity</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Maintainability</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Reliability</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Easier fixes = fewer bugs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final Thought */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🧠</span> Final Thought
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Non-functional requirements are the compass of system design. They help us build systems that aren't just functional — they're fast, reliable, scalable, and resilient. As we move forward in this course, we'll explore the techniques that help us achieve these goals — one trade-off at a time.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}