import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

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
              <Link href="/courses" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Courses
              </Link>
              <Link href="/roadmap" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Roadmap
              </Link>
              <Link href="/videos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Videos
              </Link>
              <Link href="/personal" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Personal
              </Link>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium">
                About
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-6 sm:mb-8">
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {/* Add your photo: <img src="/images/profile.jpg" alt="Shyam" className="w-full h-full rounded-full object-cover" /> */}
                <span className="text-4xl sm:text-6xl">👨💻</span>
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{job.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{job.location}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">{job.duration}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start text-sm sm:text-base">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm">
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.school}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{edu.location}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{edu.year}</p>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl">🏆</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{cert.date}</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs">ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Technical Skills</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm">
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base">{achievement.description}</p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">{achievement.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Mission */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Mission</h2>
            <p className="text-base sm:text-lg mb-6 max-w-4xl mx-auto">
              To democratize quality tech education and help aspiring developers build successful careers in technology. 
              Through Beyond Shyam, I share practical knowledge, real-world experience, and proven strategies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">10M+</div>
                <div className="text-white/80 text-sm sm:text-base">Monthly Student Interactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">150+</div>
                <div className="text-white/80 text-sm sm:text-base">Developers Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">3+</div>
                <div className="text-white/80 text-sm sm:text-base">Years Experience</div>
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