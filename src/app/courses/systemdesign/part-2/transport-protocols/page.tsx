"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function TransportProtocols() {
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
          <span>Transport Protocols</span>
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Transport Protocols (UDP, TCP, QUIC)</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Comparing different transport layer protocols and their use cases</p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
          <div className="prose dark:prose-invert max-w-none">
            
            {/* Opening */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">🎙️ How Data Gets Delivered — Fast, Reliable, or Both</h1>
              <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300">
                  When you send data across the internet — whether it's a message, a video, or an API call — it needs a delivery method. That's the job of transport protocols. They sit at Layer 4 of the OSI model and decide how data moves between devices. In this lesson, we'll compare the three major transport protocols: UDP, TCP, and QUIC — and understand when to use each.
                </p>
              </div>
            </div>

            {/* What Is the Transport Layer */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🚚</span> What Is the Transport Layer?
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Responsible for end-to-end communication between devices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Breaks data into segments and reassembles them</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Adds headers with ports, sequence numbers, and delivery instructions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Ensures delivery is reliable, ordered, or fast, depending on the protocol</span>
                </div>
              </div>
            </div>

            {/* UDP */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">⚡</span> UDP (User Datagram Protocol)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What it is:</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">A lightweight, connectionless protocol</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Sends data without guarantees — no delivery confirmation, no order, no retries</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Like sending postcards — you drop them in the mailbox and hope they arrive. No tracking, no acknowledgment.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">No handshake</span>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">No retransmission</span>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">No ordering</span>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">Very low overhead</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Use Cases:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Live video streaming</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Online gaming</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">VoIP (voice calls)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">DNS queries</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Why Use It:</h4>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Speed matters more than reliability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Small, fast messages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Tolerates occasional packet loss</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TCP */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">📦</span> TCP (Transmission Control Protocol)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What it is:</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">A reliable, connection-oriented protocol</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Ensures data arrives in order, without loss, and without duplication</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Like sending packages with tracking and delivery confirmation. You get notified if something goes wrong.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <span className="font-medium text-blue-600 dark:text-blue-400">3-way handshake</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(SYN, SYN-ACK, ACK)</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <span className="font-medium text-blue-600 dark:text-blue-400">Retransmissions on loss</span>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <span className="font-medium text-blue-600 dark:text-blue-400">Ordered delivery</span>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <span className="font-medium text-blue-600 dark:text-blue-400">Flow & congestion control</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Use Cases:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Web browsing (HTTP/HTTPS)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">File transfers (FTP, SFTP)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Email (SMTP, IMAP)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Database communication</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Why Use It:</h4>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Accuracy and reliability are critical</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Data must arrive intact and in order</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Works well for large payloads</span>
                  </div>
                </div>
              </div>
            </div>

            {/* QUIC */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🚀</span> QUIC (Quick UDP Internet Connections)
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What it is:</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">A modern transport protocol built on UDP</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Designed by Google to combine speed and reliability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Used in HTTP/3</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Like express delivery with tracking — fast, secure, and reliable.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <span className="font-medium text-purple-600 dark:text-purple-400">Built on UDP but adds reliability</span>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <span className="font-medium text-purple-600 dark:text-purple-400">Multiplexed streams</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(no head-of-line blocking)</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <span className="font-medium text-purple-600 dark:text-purple-400">TLS encryption built-in</span>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <span className="font-medium text-purple-600 dark:text-purple-400">Faster connection setup</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(0-RTT)</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Use Cases:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Modern web traffic (HTTP/3)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Mobile apps</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Real-time APIs</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Streaming platforms</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Why Use It:</h4>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Faster than TCP for web traffic</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Secure by default</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-green-800 dark:text-green-300 text-sm">Handles packet loss gracefully</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🧠</span> Comparison Table
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Protocol</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Reliable?</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Ordered?</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Fast?</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">UDP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-red-600 dark:text-red-400">❌ No</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-red-600 dark:text-red-400">❌ No</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Gaming, VoIP, DNS, live video</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">TCP</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-red-600 dark:text-red-400">❌ Slower</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">Web, file transfer, email, DBs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">QUIC</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">HTTP/3, mobile apps, streaming</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* HTTP Versions Comparison */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🌐</span> HTTP Versions & Transport Protocols
              </h2>

              {/* HTTP/1.1 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> HTTP/1.1 (over TCP)
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Each request opens a new TCP connection (unless keep-alive is used)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Every TCP connection requires a 3-way handshake: SYN → SYN-ACK → ACK</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Only one request per connection at a time — even with pipelining, responses must come back in order</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Head-of-line blocking: If one request is slow, others wait</span>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Like a single-lane toll booth — every car (request) waits for the one ahead to finish.
                  </p>
                </div>
              </div>

              {/* HTTP/2 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> HTTP/2 (over TCP)
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">One TCP connection per origin — handshake happens once</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Multiplexing: multiple requests can be sent in parallel over one connection</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Still suffers from TCP-level head-of-line blocking — if one packet is lost, all streams pause until it's retransmitted</span>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Like a multi-lane toll booth — but if one lane drops a coin, all lanes pause until it's fixed.
                  </p>
                </div>
              </div>

              {/* HTTP/3 */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> HTTP/3 (over QUIC, built on UDP)
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">No TCP handshake — QUIC uses faster connection setup (0-RTT possible)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">True multiplexing: each stream is independent — no head-of-line blocking</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Built-in encryption (TLS 1.3) and reliability</span>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Like a smart expressway — each lane moves independently, even if one hits a bump.
                  </p>
                </div>
              </div>

              {/* HTTP Summary Table */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">🔁</span> Summary Table
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Version</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Transport</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Handshake Per Request</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Parallel Streams</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">Head-of-Line Blocking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">HTTP/1.1</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">TCP</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes (unless keep-alive)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-red-600 dark:text-red-400">❌ No</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-red-600 dark:text-red-400">✅ Yes</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-700/50">
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">HTTP/2</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">TCP</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">❌ Once per connection</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-red-600 dark:text-red-400">✅ Yes (TCP-level)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300 font-medium">HTTP/3</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-gray-700 dark:text-gray-300">QUIC/UDP</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">❌ Faster (0-RTT)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">✅ Yes</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 sm:px-4 py-2 text-green-600 dark:text-green-400">❌ No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* System Design Implications */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔗</span> System Design Implications
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">UDP is great for speed-critical, loss-tolerant systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">TCP is ideal for correctness-critical systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">QUIC is the future of web transport — fast, secure, and reliable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">HTTP/3 over QUIC eliminates head-of-line blocking for web applications</span>
                </div>
              </div>

              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">Design Tip: Choose based on what matters most:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-white dark:bg-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <div className="font-medium text-yellow-600 dark:text-yellow-400">Speed</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">→ UDP</div>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <div className="font-medium text-blue-600 dark:text-blue-400">Reliability</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">→ TCP</div>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <div className="font-medium text-purple-600 dark:text-purple-400">Both</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">→ QUIC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Thought */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🎙️</span> Closing Thought
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Transport protocols are the delivery trucks of the internet. UDP is fast but risky. TCP is safe but slower. QUIC is the best of both worlds. Understanding these protocols helps you choose the right tool for your system — whether you're building a chat app, a video platform, or a high-performance API.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}