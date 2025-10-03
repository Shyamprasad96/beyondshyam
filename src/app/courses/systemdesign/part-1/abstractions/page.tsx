"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Abstractions() {
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
          <Link href="/courses/systemdesign/part-1" className="hover:text-blue-600 dark:hover:text-blue-400">Part 1</Link>
          <span>/</span>
          <span>Abstractions</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Abstractions & Why They Matter</h1>
          <p className="text-gray-600 dark:text-gray-400">Understanding system abstractions and their importance in design</p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="prose dark:prose-invert max-w-none">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">📘 Part 1: Foundations & Abstractions in System Design</h1>
            </div>

            {/* Overview */}
            <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In this foundational module, we explore three core mental models that shape how we design scalable, modular systems:
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Abstraction</strong> — hiding complexity behind clean interfaces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Layered Thinking</strong> — organizing systems into logical layers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Encapsulation</strong> — protecting internal logic to preserve modularity</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                These concepts aren't just theoretical—they're the scaffolding behind every system design interview and real-world architecture.
              </p>
            </div>

            {/* Abstraction Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🧠</span> Abstraction: Hiding Complexity
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Abstraction allows us to focus on what a component does, without worrying about how it works internally. It simplifies reasoning, enables reuse, and keeps systems modular.
              </p>
              
              {/* Cache Example */}
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Example: Cache</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When you use a cache, you call <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.get()</code> or <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.set()</code> expecting fast access. You don't need to understand TTLs, eviction policies, or memory management. That internal complexity is abstracted away.
                </p>
              </div>

              {/* Real-World Analogy */}
              <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-World Analogy: Power Outlet</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Think of a wall socket. You plug in your device and get electricity. You don't think about how power is generated or routed. The outlet is an abstraction—it hides the entire electrical grid behind a simple interface.
                </p>
                {/* Add image here: /images/power-outlet.jpg */}
                <img src="/images/power-outlet.jpg" alt="Power outlet abstraction" className="w-full max-w-md mx-auto mt-4 rounded-lg shadow-md" />
              </div>

              {/* Common Abstractions */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Common Abstractions in System Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-purple-600 dark:text-purple-400">API</span> → hides service logic
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-purple-600 dark:text-purple-400">Cache</span> → hides storage latency
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-purple-600 dark:text-purple-400">Queue</span> → hides retry and delivery logic
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Understanding what each component abstracts helps you reason about tradeoffs and structure your designs clearly.
                </p>
              </div>
            </div>

            {/* Layered Thinking Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🧭</span> Layered Thinking: Organizing Complexity
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Layered thinking helps us break down systems into distinct layers, each solving a specific problem. This structure improves modularity, fault isolation, and clarity.
              </p>

              {/* Layered Stack */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Typical Layered Stack</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                    <strong className="text-red-600 dark:text-red-400">L3 (Network Layer):</strong> <span className="text-gray-700 dark:text-gray-300">IP & routing</span>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                    <strong className="text-orange-600 dark:text-orange-400">L4 (Transport Layer):</strong> <span className="text-gray-700 dark:text-gray-300">TCP/UDP delivery</span>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 transition-colors">
                    <strong className="text-yellow-600 dark:text-yellow-400">L7 (Application Layer):</strong> <span className="text-gray-700 dark:text-gray-300">HTTP/gRPC APIs</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Each layer abstracts the one below it and encapsulates its own logic.
                </p>
                {/* Add image here: /images/layered-stack.jpg */}
                <img src="/images/layered-stack.jpg" alt="Layered system architecture" className="w-full max-w-lg mx-auto mt-4 rounded-lg shadow-md" />
              </div>

              {/* Chat System Example */}
              <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Example: Chat System</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Client connects via WebSocket (L4)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Sends message to API endpoint (L7)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">API forwards to message broker (Service Layer)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Message stored in database (Storage Layer)</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  This layered approach helps you explain your design clearly and isolate failure domains.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-300">
                  💡 We'll go deeper into each layer—especially networking, APIs, and storage—in future modules.
                </p>
              </div>
            </div>

            {/* Encapsulation Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🧱</span> Encapsulation: Protecting Complexity
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Encapsulation means packaging internal logic behind a boundary, exposing only what's necessary. It allows components to evolve independently without breaking external contracts.
              </p>

              {/* Microservice Example */}
              <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Example: Microservice</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A microservice might expose an API, but hide its internal database and business logic. You can refactor or scale the internals without affecting consumers.
                </p>
                {/* Add image here: /images/microservice-encapsulation.jpg */}
                <img src="/images/microservice-encapsulation.jpg" alt="Microservice encapsulation" className="w-full max-w-md mx-auto mt-4 rounded-lg shadow-md" />
              </div>

              {/* Encapsulation in Practice */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Encapsulation in Practice</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                    <span className="font-medium text-green-600 dark:text-green-400">Queue</span><br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">hides retry logic</span>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                    <span className="font-medium text-blue-600 dark:text-blue-400">Cache</span><br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">hides eviction strategy</span>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                    <span className="font-medium text-purple-600 dark:text-purple-400">Service</span><br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">hides DB and business rules</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Encapsulation makes systems easier to evolve, test, and scale.
                </p>
              </div>
            </div>

            {/* Recap Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🎓</span> Recap & Interview Relevance
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Abstraction</strong> helps you hide complexity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Layered thinking</strong> helps you organize it</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Encapsulation</strong> helps you protect it</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You won't be asked to define these concepts directly in interviews. But every system design problem—whether it's a chat app, a feed, or a payment flow—expects you to use them.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                They shape how you structure your answer, isolate components, and reason about tradeoffs.
              </p>
            </div>

            {/* Final Note */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-300 flex items-center">
                <span className="mr-2">✅</span>
                This is just the foundation. We'll go deeper into each layer and component in future modules.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}