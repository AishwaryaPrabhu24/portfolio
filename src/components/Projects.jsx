
import React from "react";

const projects = [
  {
    number: "01",
    category: "Full Stack Development",
    title: "AI-Powered Medical CRM System",
    description:
      "An intelligent medical CRM application designed to simplify hospital operations through AI-powered healthcare assistance, digital health twins, and emergency prediction.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "AI/ML",
    ],
    features: [
      "Role-based dashboards",
      "Digital Health Twin",
      "AI Health Assistant",
      "Emergency Prediction",
    ],
    status: "In Development",
    github:
      "https://github.com/AishwaryaPrabhu24/AI-Medical-CRM",
    liveDemo: "",
  },

  {
    number: "02",
    category: "Machine Learning",
    title: "Online Recruitment Fraud Detection",
    description:
      "A machine learning-based application that identifies fraudulent job postings by analyzing job descriptions and detecting suspicious patterns using NLP and classification algorithms.",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "TF-IDF",
      "XGBoost",
      "SHAP",
    ],
    features: [
      "Job fraud prediction",
      "Text analysis using TF-IDF",
      "Fraud probability visualization",
      "Red flag identification",
    ],
    status: "Developed",
    github:
      "https://github.com/AishwaryaPrabhu24/online-recruitment-fraud-detection",
    liveDemo: "",
  },

  {
    number: "03",
    category: "Full Stack Development",
    title: "ShareSpace",
    description:
      "A resource-sharing platform that connects students, researchers, and institutions to share underutilized equipment, laboratories, and technical spaces securely.",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "Resource discovery",
      "Equipment booking",
      "User verification",
      "Resource management",
    ],
    status: "In Development",
    github:
      "https://github.com/AishwaryaPrabhu24/ShareSpace",
    liveDemo: "https://share-space-mu.vercel.app/login",
  },

  {
    number: "04",
    category: "Frontend Development",
    title: "Tech Blog",
    description:
      "A modern technology blogging platform developed using ReactJS, designed to present technical articles, programming concepts, technology updates, and developer-related content through a clean and user-friendly interface.",
    technologies: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    features: [
      "Technology blog interface",
      "Article presentation",
      "Responsive design",
      "Modern UI components",
    ],
    status: "Developed",
    github:
      "https://github.com/AishwaryaPrabhu24/tech-blog",
    liveDemo: "https://tech-blog-i97x.vercel.app/",
  },

  {
    number: "05",
    category: "AI Application",
    title: "AI Study Buddy",
    description:
      "An AI-powered study companion designed to help students improve their learning experience through intelligent study assistance, learning support, and interactive academic guidance.",
    technologies: [
      "React",
      "JavaScript",
      "AI Integration",
    ],
    features: [
      "AI-powered study assistance",
      "Interactive learning",
      "Academic support",
      "Smart study guidance",
    ],
    status: "Developed",
    github:
      "https://github.com/AishwaryaPrabhu24/chat",
    liveDemo: "https://chat-rose-three-77.vercel.app/",
  },

  {
    number: "06",
    category: "Web Development",
    title: "College Website Replication",
    description:
      "A college website replication project focused on recreating the design and layout of an existing college website with a structured interface and responsive web pages.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
    features: [
      "College website layout",
      "Navigation interface",
      "Responsive web pages",
      "Structured content",
    ],
    status: "Developed",
    github:
      "https://github.com/AishwaryaPrabhu24/College",
    liveDemo: "https://gcedpi.netlify.app/",
  },

  {
    number: "07",
    category: "Data Analytics",
    title: "Customer Purchasing Behaviour Analysis",
    description:
      "A data analytics project focused on understanding customer purchasing patterns, identifying buying trends, analyzing customer preferences, and generating insights to support business decisions.",
    technologies: [
      "Power BI",
      "SQL",
      "Microsoft Excel",
      "Data Visualization",
    ],
    features: [
      "Customer purchase analysis",
      "Purchasing trend identification",
      "Customer segmentation",
      "Interactive dashboards",
    ],
    status: "Project",
    github:
      "https://github.com/AishwaryaPrabhu24/Customer",
    liveDemo: "",
  },

  {
    number: "08",
    category: "Full Stack Development",
    title: "User Authentication System",
    description:
      "A secure user authentication application designed to manage user registration, login, and access control. The system focuses on protecting user accounts through authentication mechanisms and secure session management.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
    ],
    features: [
      "User Registration",
      "Secure Login and Logout",
      "JWT Authentication",
      "Protected Routes",
    ],
    status: "Developed",
    github: "",
    liveDemo: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-[#ff2a2a] uppercase tracking-[5px] text-sm font-semibold mb-4">
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Featured <span className="text-[#ff2a2a]">Projects.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
            A collection of projects where I transform ideas into
            practical applications using modern technologies,
            development tools, and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative bg-[#111111] border border-gray-800 rounded-2xl p-7 md:p-9 transition-all duration-500 hover:border-[#ff2a2a] hover:-translate-y-2"
            >

              {/* Project Number and Category */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-4xl font-bold text-[#ff2a2a]/40">
                  {project.number}
                </span>

                <span className="text-xs md:text-sm text-gray-400 border border-gray-700 rounded-full px-4 py-2">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#ff2a2a] transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 text-sm md:text-base mb-7">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-7">
                <h4 className="text-sm font-semibold text-white mb-4">
                  Key Features
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="text-[#ff2a2a]">✦</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-4">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-300 bg-[#1c1c1c] border border-gray-800 rounded-md px-3 py-2 hover:border-[#ff2a2a] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section - Status and Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 pt-5">

                <span className="text-xs text-gray-400">
                  {project.status}
                </span>

                <div className="flex items-center gap-4">

                  {/* Live Demo Button */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-[#ff2a2a] hover:text-white transition-colors duration-300"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>
                  )}

                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#ff2a2a] transition-colors duration-300"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  )}

                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            More ideas. More innovation. More projects.
          </p>

          <p className="text-[#ff2a2a] text-lg font-semibold mt-2">
            Always Building. Always Learning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
