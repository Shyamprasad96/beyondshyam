import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const education = [
  {
    degree: "Master of Science – Computer Software Engineering",
    school: "Arizona State University",
    year: "2021-2023",
    location: "Tempe, Arizona",
    achievements: ["GPA: 4.0/4.0", "Software Agility", "Advanced Data Structures and Algorithms", "Data Science, Cloud Computing, Data Mining, ML"]
  },
  {
    degree: "Bachelor of Engineering – Computer Science", 
    school: "Andhra University",
    year: "2017-2021",
    location: "Visakhapatnam, India",
    achievements: ["GPA: 4.0/4.0", "Computer Networking", "Machine Learning", "Programming Language Paradigms"]
  }
];

const experience = [
  {
    position: "Software Engineer III",
    company: "University of Phoenix",
    duration: "Sep 2025 - Present",
    location: "Phoenix, Arizona",
    responsibilities: [
      "Spearheaded enterprise-wide modernization by scaling microservices architecture to handle 10M+ monthly student interactions",
      "Implemented advanced Kafka partitioning, schema evolution, and replay mechanisms, boosting event-driven throughput",
      "Drove AWS infrastructure optimization, cutting cloud spend by 20% while maintaining 99.99% uptime"
    ],
    technologies: ["Java", "Spring Boot", "ReactJS", ".NET", "AWS", "Terraform", "MSK Kafka", "EKS", "Docker"]
  },
  {
    position: "Software Engineer II",
    company: "University of Phoenix",
    duration: "May 2023 - Aug 2025",
    location: "Phoenix, Arizona",
    responsibilities: [
      "Led platform-wide migration to cloud-native microservices with zero-downtime rollouts",
      "Designed real-time, event-driven pipelines with Kafka, scaling ingestion to 1M+ daily events",
      "Optimized backend architecture by automating 100+ CRUD operations, improving database efficiency by 20%",
      "Introduced reusable Terraform modules, reducing new microservice setup time by 50%"
    ],
    technologies: ["Java", "Spring Boot", "ReactJS", "AWS", "Terraform", "Kafka", "EKS", "Docker"]
  },
  {
    position: "Software Intern",
    company: "University of Phoenix",
    duration: "Jan 2023 - May 2023",
    location: "Phoenix, Arizona",
    responsibilities: [
      "Architected AI-powered chatbots using Azure OpenAI, Lang Chain, and Qdrant",
      "Cut information retrieval time by 70% and saved staff 20+ weekly hours",
      "Designed scalable vector database + RAG pipelines indexing 1,000+ multimodal sources"
    ],
    technologies: ["Python", "Vector Databases", "Qdrant", "Azure OpenAI", "LLM", "Lang Chain", "ReactJS"]
  },
  {
    position: "Teaching Assistant",
    company: "Arizona State University",
    duration: "May 2022 - May 2023",
    location: "Tempe, Arizona",
    responsibilities: [
      "Taught Data Structures and Python labs, handled 50+ weekly student queries",
      "Graded 200+ assignments, boosting average grades by 15%",
      "Facilitated effective learning environments through one-on-one support and interactive sessions",
      "Conducted 20+ sessions weekly, helping students master complex programming concepts"
    ],
    technologies: ["Python", "Data Structures", "Algorithms", "Teaching", "Mentoring"]
  }
];

const certifications = [
  {
    name: "AWS Certified Developer – Associate (DVA-C02)",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "DVA-C02",
    image: "/certifications/aws-developer.png"
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "2024", 
    credentialId: "003",
    image: "/certifications/terraform.png"
  }
];

const skills = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "Apex"] },
  { category: "Backend & Frameworks", items: ["Spring Boot", "Spring Cloud", "Spring Security", "Django", "Flask", "ReactJS"] },
  { category: "Cloud & Infrastructure", items: ["AWS (EKS, ECS, MSK, Lambda, SQS)", "Terraform", "Docker", "Helm", "Jenkins"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Qdrant"] },
  { category: "AI/ML Tools", items: ["Lang Chain", "Azure OpenAI", "RAG", "NLP", "TensorFlow", "Hugging Face"] },
  { category: "Messaging & Events", items: ["Apache Kafka", "AWS MSK", "AWS SQS"] }
];

const achievements = [
  {
    title: "Technical Conference Speaker",
    description: "Delivered multiple sessions on Terraform using AWS Services and AI concepts at Tech Sessions, engaging over 150 developers",
    year: "2024"
  },
  {
    title: "AWS Deep Racer Champion", 
    description: "Won the Arizona AWS Deep Racer 2024 competition with a time of 7 seconds, utilizing ML models and SageMaker",
    year: "2024"
  },
  {
    title: "Company Hackathon Winner",
    description: "Won company-wide hackathons by developing AI chatbot, showcasing strong problem-solving and technical skills",
    year: "2023-2024"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-6 sm:mb-8">
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/Profile_Picture.JPG" 
                  alt="Shyam Prasad Yanamaddi" 
                  width={192}
                  height={192}
                  className="w-full h-full rounded-full object-cover" 
                  quality={95}
                  priority
                />
              </div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-2">
            Hi, I'm Shyam Prasad Yanamaddi
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto px-4">
            Software Engineer III at University of Phoenix with expertise in microservices, AI/ML, and cloud architecture. 
            Passionate about teaching and helping developers master modern software engineering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <a 
              href="https://www.linkedin.com/in/shyam-prasad-yanamaddi-9213b8220/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="https://www.youtube.com/@ShyamTechGuide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Professional Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{job.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{job.location}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">{job.duration}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start text-sm sm:text-base group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      <span className="text-blue-500 mr-2 mt-1 group-hover:scale-110 transition-transform">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105 transition-all duration-200 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Education</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-2xl hover:scale-105 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{edu.degree}</h3>
                  </div>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{edu.school}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{edu.location}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{edu.year}</p>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-center group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      <span className="text-green-500 mr-2 group-hover:scale-125 transition-transform">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Certifications</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 text-center hover:shadow-2xl hover:scale-105 hover:border-yellow-300 dark:hover:border-yellow-600 transition-all duration-300 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-xl sm:text-2xl">🏆</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">{cert.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{cert.date}</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Technical Skills</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-2xl hover:scale-105 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 group">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105 transition-all duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Key Achievements</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-2xl hover:scale-[1.02] hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-lg sm:text-xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{achievement.description}</p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">{achievement.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Mission */}
        <section className="mb-12 sm:mb-16">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">My Mission</h2>
                <p className="text-base sm:text-lg mb-6 max-w-4xl mx-auto text-blue-100">
                  To democratize quality tech education and help aspiring developers build successful careers in technology. 
                  Through Beyond Shyam, I share practical knowledge, real-world experience, and proven strategies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-bold group-hover:text-yellow-300 transition-colors">10M+</div>
                    <div className="text-white/80 text-sm sm:text-base">Monthly Student Interactions</div>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-bold group-hover:text-yellow-300 transition-colors">150+</div>
                    <div className="text-white/80 text-sm sm:text-base">Developers Trained</div>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-bold group-hover:text-yellow-300 transition-colors">3+</div>
                    <div className="text-white/80 text-sm sm:text-base">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            I'm always excited to connect with fellow developers, students, and tech enthusiasts. 
            Feel free to reach out for collaborations, mentorship, or just to say hello!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <a 
              href="https://www.linkedin.com/in/shyam-prasad-yanamaddi-9213b8220/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.youtube.com/@ShyamTechGuide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              YouTube
            </a>
            <a 
              href="https://www.instagram.com/shyamtechguide/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm sm:text-base"
            >
              Instagram
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}