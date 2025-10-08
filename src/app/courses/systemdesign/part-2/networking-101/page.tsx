"use client";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Networking101() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">Courses</Link>
          <span>/</span>
          <Link href="/courses/systemdesign" className="hover:text-blue-600 dark:hover:text-blue-400">System Design</Link>
          <span>/</span>
          <Link href="/courses/systemdesign/part-2" className="hover:text-blue-600 dark:hover:text-blue-400">Part 2</Link>
          <span>/</span>
          <span>Networking 101</span>
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🌐 Networking 101 — OSI Layers Explained
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            How Data Travels — From Wires to APIs
          </p>
        </div>

        {/* Quote Section */}
        <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
          <div className="text-4xl mb-4">💭</div>
          <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            "Every time you load a webpage, send a message, or stream a video — data travels across networks. But how does it actually move?"
          </blockquote>
          <p className="text-gray-600 dark:text-gray-400">
            To understand that, we use the OSI model — a layered framework that breaks down communication into 7 steps. Each layer has a job. Together, they make the internet work.
          </p>
        </div>

        {/* OSI Model Overview */}
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🧩 The OSI Model — Overview</h2>
            <p className="text-blue-100 dark:text-blue-300">For system design, we focus mostly on Layer 3 (Network), Layer 4 (Transport), and Layer 7 (Application)</p>
          </div>
          
          <div className="p-6">
            <div className="grid gap-3">
              {[
                { layer: 7, name: "Application", role: "User-facing protocols (HTTP, etc.)", bgColor: "bg-red-400", hoverColor: "group-hover:bg-red-500" },
                { layer: 6, name: "Presentation", role: "Data formatting and encryption", bgColor: "bg-orange-400", hoverColor: "group-hover:bg-orange-500" },
                { layer: 5, name: "Session", role: "Start, manage, and end sessions", bgColor: "bg-yellow-400", hoverColor: "group-hover:bg-yellow-500" },
                { layer: 4, name: "Transport", role: "Reliable or fast delivery (TCP/UDP)", bgColor: "bg-green-400", hoverColor: "group-hover:bg-green-500" },
                { layer: 3, name: "Network", role: "Routing and addressing (IP)", bgColor: "bg-blue-400", hoverColor: "group-hover:bg-blue-500" },
                { layer: 2, name: "Data Link", role: "Frame transmission over local network", bgColor: "bg-indigo-400", hoverColor: "group-hover:bg-indigo-500" },
                { layer: 1, name: "Physical", role: "Electrical signals and hardware", bgColor: "bg-purple-400", hoverColor: "group-hover:bg-purple-500" }
              ].map((layer) => (
                <div key={layer.layer} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 group">
                  <div className={`w-12 h-12 ${layer.bgColor} ${layer.hoverColor} rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-all duration-200`}>
                    {layer.layer}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{layer.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{layer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Layer Details - Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              layer: 1,
              icon: "⚡",
              name: "Physical Layer",
              desc: "The foundation — raw bits, cables, and electrical signals",
              points: ["Transmits raw bits over physical medium", "Defines electrical and physical specifications", "Handles voltage levels, timing, and distances", "Physical topology and connections"],
              analogy: "It's the roads and highways — the actual physical infrastructure that carries everything.",
              examples: ["Ethernet Cables", "Fiber Optic", "Radio Waves", "USB", "Hubs", "Repeaters"],
              color: "purple"
            },
            {
              layer: 2,
              icon: "🔗",
              name: "Data Link Layer",
              desc: "Local network traffic controller — manages frames within the same network",
              points: ["Frames data for transmission over physical medium", "Handles MAC addresses for local delivery", "Error detection and correction", "Flow control between adjacent nodes"],
              analogy: "It's the local postal service — handling delivery within your neighborhood using house addresses.",
              examples: ["Ethernet", "WiFi (802.11)", "Bluetooth", "PPP", "Switches"],
              color: "indigo"
            },
            {
              layer: 3,
              icon: "🌐",
              name: "Network Layer",
              desc: "Connects different networks and ensures data reaches the correct destination",
              points: ["Handles routing and addressing across networks", "Moves packets from one network to another", "Assign IP addresses", "Fragment and reassemble data"],
              analogy: "It's the GPS system — figuring out how to get data from your device to a server across the world.",
              examples: ["IP (IPv4/IPv6)", "Routers", "ICMP (ping)"],
              color: "blue"
            },
            {
              layer: 4,
              icon: "🚚",
              name: "Transport Layer",
              desc: "Decides how data is delivered — reliably or quickly — depending on the use case",
              points: ["Manages end-to-end communication", "Ensures reliable or fast delivery", "Open and close connections", "Handle retransmissions and acknowledgments"],
              analogy: "It's the delivery truck — deciding whether to guarantee delivery (TCP) or send it quickly without confirmation (UDP).",
              examples: ["TCP (reliable)", "UDP (fast)"],
              color: "green"
            },
            {
              layer: 5,
              icon: "🤝",
              name: "Session Layer",
              desc: "Connection manager — establishes, maintains, and terminates conversations",
              points: ["Establishes sessions between applications", "Manages ongoing conversations", "Handles session checkpoints and recovery", "Terminates sessions when done"],
              analogy: "It's the meeting coordinator — scheduling, managing, and ending conversations between apps.",
              examples: ["NetBIOS", "RPC", "SQL Sessions", "LDAP", "SMB"],
              color: "yellow"
            },
            {
              layer: 6,
              icon: "🔐",
              name: "Presentation Layer",
              desc: "Data translator and security guard — formats, encrypts, and compresses data",
              points: ["Encrypts and decrypts data for security", "Compresses data to save bandwidth", "Converts data formats (ASCII, JPEG, etc.)", "Character encoding and data representation"],
              analogy: "It's the translator and security checkpoint — making sure data is in the right format and secure.",
              examples: ["TLS/SSL", "JPEG", "GIF", "ASCII", "GZIP", "MPEG"],
              color: "orange"
            },
            {
              layer: 7,
              icon: "🧾",
              name: "Application Layer",
              desc: "Where developers interact — designing APIs, sending requests, building user-facing systems",
              points: ["Defines how applications communicate", "Handles user-facing protocols and APIs", "Format requests and responses", "Handle authentication, headers, cookies"],
              analogy: "It's the spoken language between apps — the actual content of the message.",
              examples: ["HTTP/HTTPS", "REST", "GraphQL", "gRPC", "WebSockets", "SMTP"],
              color: "red"
            }
          ].map((layer) => (
            <div key={layer.layer} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-200">
              <div className={layer.layer === 7 ? "bg-red-50 dark:bg-red-900/20 p-4 border-l-4 border-red-400" : 
                           layer.layer === 6 ? "bg-orange-50 dark:bg-orange-900/20 p-4 border-l-4 border-orange-400" :
                           layer.layer === 5 ? "bg-yellow-50 dark:bg-yellow-900/20 p-4 border-l-4 border-yellow-400" :
                           layer.layer === 4 ? "bg-green-50 dark:bg-green-900/20 p-4 border-l-4 border-green-400" :
                           layer.layer === 3 ? "bg-blue-50 dark:bg-blue-900/20 p-4 border-l-4 border-blue-400" :
                           layer.layer === 2 ? "bg-indigo-50 dark:bg-indigo-900/20 p-4 border-l-4 border-indigo-400" :
                           "bg-purple-50 dark:bg-purple-900/20 p-4 border-l-4 border-purple-400"}>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="mr-2">{layer.icon}</span> Layer {layer.layer}: {layer.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{layer.desc}</p>
              </div>
              
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What it does:</h4>
                  <ul className="space-y-1">
                    {layer.points.map((point, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="mr-2">•</span>{point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={layer.layer === 7 ? "mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded" : 
                           layer.layer === 6 ? "mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded" :
                           layer.layer === 5 ? "mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded" :
                           layer.layer === 4 ? "mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded" :
                           layer.layer === 3 ? "mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded" :
                           layer.layer === 2 ? "mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded" :
                           "mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded"}>
                  <p className="text-gray-700 dark:text-gray-300"><strong>Analogy:</strong> {layer.analogy}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {layer.examples.map((example) => (
                      <span key={example} className={layer.layer === 7 ? "px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium" : 
                           layer.layer === 6 ? "px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium" :
                           layer.layer === 5 ? "px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium" :
                           layer.layer === 4 ? "px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium" :
                           layer.layer === 3 ? "px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium" :
                           layer.layer === 2 ? "px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium" :
                           "px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"}>
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Flow Journey - Side by Side */}
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="mr-2">🔄</span> How "Hi" Message Travels Through Layers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">Step-by-step journey from your chat app to your friend's phone</p>
            <p className="text-gray-700 dark:text-gray-300">
              📦 When you send a "Hi" message, it travels down the OSI layers on your device, across the network, and back up the layers on the receiver's device.
            </p>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sending Side */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">📤</span> Sending Side: Going Down
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">7</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 7 – Application</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">User clicks 'Send' on chat app</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">App creates HTTP/WebSocket request with 'Hi' message</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">6</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 6 – Presentation</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Message encoded and encrypted</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">JSON formatting + TLS encryption applied</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">5</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 5 – Session</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Session established</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">TLS handshake completed, conversation tracked</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">4</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 4 – Transport</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Message split into segments</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">TCP adds headers for sequencing and port numbers</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">3</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 3 – Network</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Wrapped in IP packet</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">IP header with source/destination addresses added</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">2</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 2 – Data Link</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Encapsulated in frame</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">MAC addresses and error detection codes added</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">1</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 1 – Physical</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Converted to signals</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Electrical signals sent through cables/wireless</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Receiving Side */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">📥</span> Receiving Side: Going Up
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">1</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 1 – Physical</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Signal received</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Electrical/wireless signals converted back to data</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">2</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 2 – Data Link</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Frame extracted</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">MAC addresses checked, error detection verified</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">3</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 3 – Network</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">IP packet read</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Destination IP confirmed, packet forwarded up</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">4</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 4 – Transport</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Segments reassembled</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">TCP reorders segments, acknowledges receipt</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">5</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 5 – Session</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Session resumed</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Conversation state maintained</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">6</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 6 – Presentation</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Message decrypted & decoded</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">TLS decryption, JSON parsing applied</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400 hover:shadow-md transition-all duration-200">
                    <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">7</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Layer 7 – Application</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Message delivered to app</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">'Hi' message appears in chat interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Network Travel */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
              <div className="text-4xl mb-2">🌐</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Traveling Across the Network</h4>
              <p className="text-gray-600 dark:text-gray-400">The encapsulated message travels through routers, switches, and cables to reach the destination</p>
            </div>
          </div>
        </div>

        {/* Mental Hook - Interactive */}
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 border-l-4 border-purple-500">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="mr-2">🧠</span> Mental Hook: "Wrapping the Gift"
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Think of each layer as wrapping the message in a new box</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              {[
                { layer: 7, icon: "🎁", title: "Layer 7", desc: "The message itself", color: "red" },
                { layer: 6, icon: "📦", title: "Layer 6", desc: "Format and lock the box", color: "orange" },
                { layer: 5, icon: "📬", title: "Layer 5", desc: "Track the delivery", color: "yellow" },
                { layer: 4, icon: "🚚", title: "Layer 4", desc: "Choose delivery method", color: "green" },
                { layer: 3, icon: "🗺️", title: "Layer 3", desc: "Add address label", color: "blue" },
                { layer: 2, icon: "🏢", title: "Layer 2", desc: "Add building routing", color: "indigo" },
                { layer: 1, icon: "⚡", title: "Layer 1", desc: "Send down the wire", color: "purple" }
              ].map((item) => (
                <div key={item.layer} className={item.color === 'red' ? "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group" :
                                                   item.color === 'orange' ? "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group" :
                                                   item.color === 'yellow' ? "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group" :
                                                   item.color === 'green' ? "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group" :
                                                   item.color === 'blue' ? "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group" :
                                                   item.color === 'indigo' ? "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group" :
                                                   "text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 transition-all duration-300 cursor-pointer group"}>
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Key Insight:</strong> Each layer adds a header — like a label or instruction — to help the message reach its destination and be understood.
              </p>
            </div>
          </div>
        </div>

        {/* Final Thought */}
        <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border-l-4 border-indigo-500">
          <div className="text-4xl mb-4">🧠</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Final Thought</h2>
          <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            "Understanding the OSI model helps you reason about every part of system communication — from physical cables to APIs."
          </blockquote>
          <p className="text-gray-600 dark:text-gray-400">
            And as we move forward in this course, we'll explore how these layers shape load balancing, transport protocols, and global delivery.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/courses/systemdesign/part-2" 
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>←</span>
            <span>Back to Part 2</span>
          </Link>
          
          <Link 
            href="/courses/systemdesign/part-2/tcp-vs-udp" 
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
          >
            <span>Next: TCP vs UDP</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}