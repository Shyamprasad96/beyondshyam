"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function IPRouting() {
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
          <span>IP & Routing Basics</span>
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">IP & Routing Basics</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">How data travels across networks and routing fundamentals</p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
          <div className="prose dark:prose-invert max-w-none">
            
            {/* Opening */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">🎙️ How Data Finds Its Way Across the Internet</h1>
              <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300">
                  Imagine sending a letter across the world. You write the address, drop it in a mailbox, and trust the postal system to deliver it. That's exactly what happens when you send data across the internet — but instead of envelopes and stamps, we use IP addresses and routing protocols. In this lesson, we'll explore how data travels from your device to a server — through routers, hops, and networks — using IP and routing fundamentals.
                </p>
              </div>
            </div>

            {/* What Is IP */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🌐</span> What Is IP?
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                IP (Internet Protocol) is the addressing system of the internet. It gives every device a unique address so data knows where to go.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> IP Address
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A unique identifier for a device on a network
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Format:</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-4">
                    <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h5 className="font-medium text-green-600 dark:text-green-400 mb-2">IPv4:</h5>
                      <code className="text-sm bg-white dark:bg-gray-700 px-2 py-1 rounded text-white font-medium">192.168.1.1</code>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(32-bit)</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h5 className="font-medium text-purple-600 dark:text-purple-400 mb-2">IPv6:</h5>
                      <code className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded text-white font-medium">2001:0db8:85a3::8a2e:0370:7334</code>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">(128-bit)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    An IP address is like a home address. Without it, the mail can't be delivered.
                  </p>
                </div>
              </div>
            </div>

            {/* What Is a Packet */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">📦</span> What Is a Packet?
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you send data (like a message or a video), it's broken into small chunks called packets. Each packet contains:
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">The data itself</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">A destination IP address</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">A source IP address</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Other metadata (like sequence number)</span>
                </div>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Packets are like envelopes — each one carries part of the message and knows where it's going.
                </p>
              </div>
            </div>

            {/* What Is Routing */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🚦</span> What Is Routing?
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Routing is the process of finding the best path for a packet to travel from source to destination.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">✅</span> Routers
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Devices that forward packets between networks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">They read the destination IP and decide where to send the packet next</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Each router is like a checkpoint or intersection</span>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Routing is like GPS navigation. Routers are road signs that guide packets toward their destination.
                  </p>
                </div>
              </div>
            </div>

            {/* How Routing Works */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🛣️</span> How Routing Works (Step-by-Step)
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-gray-700 dark:text-gray-300">Your device creates a packet with destination IP</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-gray-700 dark:text-gray-300">Local router receives it and checks its routing table</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-gray-700 dark:text-gray-300">Packet hops across multiple routers — each one forwarding it closer to the destination</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span className="text-gray-700 dark:text-gray-300">Destination server receives the packet and sends a response back the same way</span>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-yellow-800 dark:text-yellow-300">
                  <strong>Note:</strong> Packets don't always take the same path — routing is dynamic and can change based on congestion or failures.
                </p>
              </div>
            </div>

            {/* Routing Tables */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🧭</span> Routing Tables
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Every router maintains a routing table — a map of known networks and where to send packets.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">Static routes:</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">manually configured</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Dynamic routes:</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">updated using routing protocols</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Common Routing Protocols:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>RIP</strong> (Routing Information Protocol)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>OSPF</strong> (Open Shortest Path First)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>BGP</strong> (Border Gateway Protocol) — used between ISPs and large networks</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Analogy:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Routing tables are like a GPS app's map — constantly updated to find the best route.
                </p>
              </div>
            </div>

            {/* IP + Routing in Action */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔄</span> IP + Routing in Action
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Example:</strong> You open www.example.com in your browser.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">1</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">DNS resolves the domain to an IP address</span>
                </div>
                <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">2</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Your device creates an HTTP request</span>
                </div>
                <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">3</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">The request is wrapped in a TCP segment</span>
                </div>
                <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">4</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">The TCP segment is wrapped in an IP packet</span>
                </div>
                <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">5</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">The IP packet is sent to your router</span>
                </div>
                <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">6</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">The router forwards it across the internet</span>
                </div>
                <div className="flex items-start space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">7</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">The server receives it and sends a response back</span>
                </div>
              </div>
            </div>

            {/* Mental Hook */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🧠</span> Mental Hook: "Digital Postal System"
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                  <span className="font-medium text-red-600 dark:text-red-400">IP</span><br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">= Address</span>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                  <span className="font-medium text-orange-600 dark:text-orange-400">Packet</span><br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">= Envelope</span>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">Router</span><br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">= Post office</span>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <span className="font-medium text-green-600 dark:text-green-400">Routing Table</span><br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">= GPS map</span>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Routing Protocol</span><br/>
                  <span className="text-sm text-gray-600 dark:text-gray-400">= Traffic updates</span>
                </div>
              </div>
            </div>

            {/* Why This Matters */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔗</span> Why This Matters in System Design
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">IP and routing determine how fast and reliably data reaches your backend</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Understanding routing helps you design multi-region systems, CDNs, and failover strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Helps you debug latency, packet loss, and connectivity issues</span>
                </div>
              </div>
            </div>

            {/* Closing Thought */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🎙️</span> Closing Thought
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                IP and routing are the invisible highways of the internet. Every time you send a message, stream a video, or load a webpage — packets are navigating across routers using IP addresses and routing tables. And as we move deeper into system design, understanding this journey helps us build faster, more resilient systems.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}