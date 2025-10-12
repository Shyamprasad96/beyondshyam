"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function ApplicationProtocols() {
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
          <Link href="/courses/systemdesign/part-2" className="hover:text-blue-600 dark:hover:text-blue-400">Part 2</Link>
          <span>/</span>
          <span>Application Protocols</span>
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Application Protocols</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Modern application layer protocols for different communication patterns</p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
          <div className="prose dark:prose-invert max-w-none">
            
            {/* Opening */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">🎙️ How Apps Talk Over the Internet</h1>
              <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300">
                  At Layer 7 — the application layer — we define how software systems communicate. Whether it's a browser loading a page, a mobile app syncing data, or a multiplayer game — the protocol you choose shapes latency, scalability, and user experience. Let's explore the most important application protocols: HTTP, REST, GraphQL, gRPC, SSE, WebSockets, WebRTC, and Polling — and understand their strengths, limitations, and ideal use cases.
                </p>
              </div>
            </div>

            {/* HTTP */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🌐</span> HTTP (HyperText Transfer Protocol)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The backbone of the web. A stateless, text-based protocol that defines how clients request resources from servers.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-xs">1</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Client sends a request (e.g., GET /home)</span>
                  </div>
                  <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-xs">2</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Server responds with data (e.g., HTML, JSON)</span>
                  </div>
                  <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-xs">3</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Each request is independent — no memory of previous ones</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Like ordering food at a counter. You ask, they serve. No memory of past orders.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Simple, universal, cacheable</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Works with proxies, firewalls, browsers</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">One-way only</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Not suitable for real-time updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* REST */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">📦</span> REST (Representational State Transfer)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A design pattern built on HTTP. Treats everything as a resource with a unique URL.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <div className="font-medium text-blue-600 dark:text-blue-400">GET</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">read</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                    <div className="font-medium text-green-600 dark:text-green-400">POST</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">create</div>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                    <div className="font-medium text-yellow-600 dark:text-yellow-400">PUT</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">update</div>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                    <div className="font-medium text-red-600 dark:text-red-400">DELETE</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">remove</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Stateless: each request contains all necessary info</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Often returns JSON</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Like accessing files in folders. /users/42/orders is like opening a user's order folder.
                </p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                    <span className="font-medium text-orange-600 dark:text-orange-400">REST = Fixed Burger Combo</span>
                  </div>
                  <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                    <span className="font-medium text-orange-600 dark:text-orange-400">REST = "Give me this resource"</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                  <strong>REST = reliable and simple</strong> — like driving a well-tuned car
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Easy to understand and implement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Scales well with microservices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Works with caching and load balancers</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Over-fetching: you get more data than needed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Under-fetching: multiple requests for related data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GraphQL */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🧠</span> GraphQL
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A query language for APIs that lets clients ask for exactly what they need.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Single endpoint (e.g., /graphql)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Clients send structured queries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Server returns only requested fields</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Schema defines available types and relationships</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Like ordering à la carte — you choose exactly what goes on your plate.
                </p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                    <span className="font-medium text-orange-600 dark:text-orange-400">GraphQL = Build-Your-Own Burger</span>
                  </div>
                  <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                    <span className="font-medium text-orange-600 dark:text-orange-400">GraphQL = "Give me exactly these fields"</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                  <strong>GraphQL = powerful but demanding</strong> — like building a custom engine
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Reduces over-fetching and under-fetching</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Great for mobile apps and complex UIs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Strong developer tooling</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Harder to cache</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Requires schema discipline</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Overhead for simple use cases</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* gRPC */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🚀</span> gRPC (Google Remote Procedure Call)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A high-performance protocol for backend communication, built on HTTP/2 and Protocol Buffers.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">APIs are defined in .proto files</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Supports unary and streaming calls</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Uses compact binary format for speed</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Like calling a method on a remote object — getUser(id) feels like a local function.
                </p>
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                  <span className="font-medium text-orange-600 dark:text-orange-400 text-xs sm:text-sm">gRPC = "Run this function remotely, like it's local"</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Fast, efficient, low latency</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Ideal for microservices and internal APIs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Supports bi-directional streaming</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Not human-readable</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Harder to debug without tooling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Browser support is limited (needs proxy)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Polling */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔁</span> Polling
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A technique where the client repeatedly asks the server for updates.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Client sends requests at intervals (e.g., every 5 seconds)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Server responds with latest data (if any)</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Like checking your mailbox every few minutes to see if a letter arrived.
                </p>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                    <span className="font-medium text-orange-600 dark:text-orange-400">Polling = "Knocking on the same door again and again"</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                      <span className="font-medium text-orange-600 dark:text-orange-400">Polling = REST × N</span>
                    </div>
                    <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                      <span className="font-medium text-orange-600 dark:text-orange-400">Polling = GraphQL × N</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-center text-xs sm:text-sm">
                    REST/GraphQL = "The door you're knocking on" | Polling just automates the knocking
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Simple to implement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Works with any server</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">High latency</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Wastes bandwidth and server resources</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Not scalable for many users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SSE */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔄</span> SSE (Server-Sent Events)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A one-way push protocol where the server streams updates to the client over HTTP.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Client opens a connection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Server keeps it open and sends updates as events</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Only server → client</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Like subscribing to a radio station — you listen, but can't talk back.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Lightweight and easy to use</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Great for dashboards and notifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Works over HTTP (no special setup)</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">One-way only</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Limited browser support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Doesn't work well with proxies that close idle connections</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WebSockets */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔗</span> WebSockets
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A protocol that enables full-duplex, real-time communication between client and server.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Starts as HTTP, then upgrades to WebSocket</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Persistent connection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Both sides can send messages anytime</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Like a phone call — both people can talk and listen at the same time.
                </p>
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                  <span className="font-medium text-orange-600 dark:text-orange-400 text-xs sm:text-sm">WebSocket = Phone Call</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Low latency</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Ideal for chat, games, collaborative tools</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Event-driven architecture</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Requires connection management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Doesn't work well with traditional HTTP infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Harder to scale without specialized servers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WebRTC */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🎥</span> WebRTC (Web Real-Time Communication)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What It Is</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A protocol for peer-to-peer media and data streaming — especially for audio/video.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Uses STUN/TURN servers to establish connections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Supports encrypted media and data channels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Built into modern browsers</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Real-World Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Like a direct walkie-talkie connection between two users — no middleman.
                </p>
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded text-center">
                  <span className="font-medium text-orange-600 dark:text-orange-400 text-xs sm:text-sm break-words">WebRTC = "Direct video call between two browsers — no middleman if possible"</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Strengths:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Low latency</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Secure and direct</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-green-800 dark:text-green-300">Ideal for video calls, screen sharing, P2P apps</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Limitations:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Complex setup (NAT traversal, signaling)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Not suitable for server-based coordination</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="text-red-800 dark:text-red-300">Harder to debug and monitor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Table */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🧠</span> Summary Table
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Protocol</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Pattern</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Direction</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Transport</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Ideal For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">HTTP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Request-response</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Client → Server</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">TCP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Web pages, basic APIs</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">REST</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Resource-based</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Client → Server</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">HTTP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">CRUD APIs, microservices</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">GraphQL</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Query-based</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Client → Server</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">HTTP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Flexible data fetching</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">gRPC</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">RPC + Streaming</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Bi-directional</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">HTTP/2</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Microservices, backend APIs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">Polling</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Repeated requests</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Client → Server</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">HTTP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Legacy updates</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">SSE</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Server push</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Server → Client</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">HTTP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Dashboards, notifications</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">WebSockets</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Event-driven</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Bi-directional</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">TCP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Chat, games, real-time apps</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">WebRTC</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">P2P media/data</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Peer ↔ Peer</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">UDP/TCP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Video calls, screen sharing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Closing Thought */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🎙️</span> Closing Thought
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Application protocols are the language of distributed systems. Each one offers a different rhythm — from the steady beat of HTTP to the real-time pulse of WebSockets and WebRTC. Choosing the right protocol isn't just about tech — it's about matching your system's communication style to your users' needs.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}