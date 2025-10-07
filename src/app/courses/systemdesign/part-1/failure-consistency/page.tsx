"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function FailureConsistency() {
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
          <span>Failure & Consistency Models</span>
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Failure & Consistency Models</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Understanding different failure modes and consistency guarantees</p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
          <div className="prose dark:prose-invert max-w-none">
            
            {/* Opening */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">🎙️ Why This Matters</h1>
              <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In distributed systems, things go wrong. Machines crash. Networks fail. Messages get lost. To design resilient systems — and to do well in interviews — we need to understand two things:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>How systems fail</strong></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>How they stay consistent despite those failures</strong></span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  This lesson is about <strong>failure models</strong> and <strong>consistency models</strong> — the foundation for reasoning about trade-offs in real-world architecture.
                </p>
              </div>
            </div>

            {/* Part 1: Failure Models */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🧨</span> Part 1: Failure Models
              </h2>

              {/* Crash Failures */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> Crash Failures
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A crash failure is when a node — like a server or a process — suddenly stops working. It doesn't lie or misbehave. It just goes silent.
                  </p>
                </div>

                <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Imagine a cashier who faints mid-shift. They don't cheat or confuse customers — they just stop responding.
                  </p>
                </div>

                <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real Example:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    A server loses power. A process crashes due to a bug. These are crash failures.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Design Implication:</h4>
                  <p className="text-green-800 dark:text-green-300">
                    We can detect crash failures using timeouts and health checks. We recover using failover, retries, or replication.
                  </p>
                </div>
              </div>

              {/* Byzantine Failures */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">🧠</span> Byzantine Failures
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A Byzantine failure happens when a computer (or node) in a system behaves in an unpredictable or dishonest way.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    It's not just "crashing" — it might:
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Send wrong data to some nodes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Send different data to different nodes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Or even pretend to be another node</span>
                    </div>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-red-800 dark:text-red-300 font-medium">
                      In short: A Byzantine node is one you can't trust — it might lie, cheat, or act crazy.
                    </p>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">💡 Simple Analogy</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Imagine 4 friends trying to agree on where to meet for dinner by text message.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    One friend (say Alex) is acting strangely:
                  </p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">He tells Beth: "Let's meet at McDonald's."</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">He tells Chris: "Let's meet at Subway."</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">He tells Dana: "Let's not meet at all."</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Now, Beth, Chris, and Dana all have different information. If they don't have a way to compare messages and agree, they'll end up in different places — no consensus!
                  </p>
                </div>

                <div className="mb-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">🧩 The Solution: Byzantine Fault Tolerance (BFT)</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    To handle this, systems use Byzantine Fault Tolerant protocols — special rules that let honest nodes still agree even if some are lying.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Example: PBFT (Practical Byzantine Fault Tolerance)</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    To survive <strong>f</strong> bad nodes, the system needs at least <strong>3f + 1</strong> total nodes.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="p-2 bg-white dark:bg-gray-700 rounded text-center">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">1 bad</span><br/>
                      <span className="text-gray-600 dark:text-gray-400">→ need 4 total</span>
                    </div>
                    <div className="p-2 bg-white dark:bg-gray-700 rounded text-center">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">2 bad</span><br/>
                      <span className="text-gray-600 dark:text-gray-400">→ need 7 total</span>
                    </div>
                    <div className="p-2 bg-white dark:bg-gray-700 rounded text-center">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">3 bad</span><br/>
                      <span className="text-gray-600 dark:text-gray-400">→ need 10 total</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">💻 Real Example (Modern Context)</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Blockchain systems</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Blockchains (like Ethereum, Cosmos, Hyperledger, etc.) are built on BFT-like protocols. Some participants may be hacked or try to cheat. BFT ensures that the honest majority still agrees on the same ledger — the same "truth."
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>For example:</strong> Tendermint, used in Cosmos, is a BFT protocol. Even if a few validators lie or go offline, the system can still agree on the next block safely.
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🔁 Crash vs. Byzantine Failures</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Failure Type</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Behavior</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Detectable?</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Crash</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Node stops responding</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Power loss, server crash</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Byzantine</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Node lies or sends wrong data</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-red-600 dark:text-red-400">❌ No</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Malicious or buggy server</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Part 2: Consistency Models */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔗</span> Part 2: Consistency Models
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                When multiple replicas store or serve data, consistency rules define how updates appear across them.
              </p>

              {/* Strong Consistency */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> Strong Consistency
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Definition:</h4>
                  <p className="text-gray-700 dark:text-gray-300">Every read returns the latest write, no matter which replica you query.</p>
                </div>

                <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    📝 Like a shared Google Doc — type a word, everyone sees it instantly.
                  </p>
                </div>

                <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-World Example:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">SQL databases (PostgreSQL, Spanner)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Distributed locking systems</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Trade-Off:</h4>
                  <p className="text-red-800 dark:text-red-300 mb-2">
                    Requires coordination → slower, less scalable.
                  </p>
                  <p className="text-red-800 dark:text-red-300">
                    🧩 Used when correctness {'>'}  speed (e.g., money transfers)
                  </p>
                </div>
              </div>

              {/* Eventual Consistency */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> Eventual Consistency
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Definition:</h4>
                  <p className="text-gray-700 dark:text-gray-300">All replicas will eventually reflect the latest write — but not immediately.</p>
                </div>

                <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    🏦 You update your address at one bank branch — it takes a few hours for all branches to catch up.
                  </p>
                </div>

                <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-World Examples:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Amazon DynamoDB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">DNS systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Social media timelines</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Trade-Off:</h4>
                  <p className="text-green-800 dark:text-green-300 mb-2">
                    Faster, more scalable → but users may see stale data temporarily.
                  </p>
                  <p className="text-green-800 dark:text-green-300">
                    🧩 Used when availability {'>'} strict correctness (e.g., likes, feeds)
                  </p>
                </div>
              </div>

              {/* Read-Your-Own-Writes */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> Read-Your-Own-Writes
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Definition:</h4>
                  <p className="text-gray-700 dark:text-gray-300">After you write something, you'll always see your own update, even if others don't yet.</p>
                </div>

                <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    📸 You post a photo on Instagram — you see it immediately, even if your friends' feed is still catching up.
                  </p>
                </div>

                <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-World Examples:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Session-based web apps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Personal dashboards</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Trade-Off:</h4>
                  <p className="text-blue-800 dark:text-blue-300 mb-2">
                    Improves user experience with minimal coordination.
                  </p>
                  <p className="text-blue-800 dark:text-blue-300">
                    🧩 Used for personalized views or user sessions
                  </p>
                </div>
              </div>

              {/* Causal Consistency */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> Causal Consistency
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Definition:</h4>
                  <p className="text-gray-700 dark:text-gray-300">If one operation depends on another, the system preserves their order.</p>
                </div>

                <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    💬 If you comment on a post, everyone should see the post before your comment.
                  </p>
                </div>

                <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Real-World Examples:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Chat apps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Collaborative editors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Versioned data stores</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Trade-Off:</h4>
                  <p className="text-purple-800 dark:text-purple-300 mb-2">
                    Balances performance and correctness. Stronger than eventual, weaker than strong.
                  </p>
                  <p className="text-purple-800 dark:text-purple-300">
                    🧩 Used for user-facing interactive systems
                  </p>
                </div>
              </div>

              {/* Summary Table */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🧩 Summary: Consistency Trade-Offs</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Model</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Guarantee</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Example Systems</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Trade-Off</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Strong</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Always latest value</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">PostgreSQL, Spanner</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Slower, coordination heavy</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Eventual</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Eventually same value</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">DynamoDB, DNS</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Fast, but temporary inconsistency</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Read-Your-Own-Writes</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">User always sees own changes</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Instagram, dashboards</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Personalized consistency</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Causal</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Preserves cause-effect order</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Chat, collaborative apps</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Good balance of speed & order</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Final Thought */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🎓</span> Key Takeaways
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Failure models</strong> help you design for the right threats</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Consistency models</strong> help you balance correctness and performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Trade-offs</strong> are inevitable — choose based on your requirements</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Understanding these models gives you the vocabulary to reason about distributed systems and make informed architectural decisions in interviews and real-world scenarios.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}