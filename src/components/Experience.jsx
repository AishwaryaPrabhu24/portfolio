
import React from "react";

const experiences = [
  {
    number: "01",
    role: "Full Stack Developer Intern",
    company: "Marobust Tech & Solutions",
    duration: "June 2026",
    domain: "Full Stack Development",
    description:
      "Completed an internship in Full Stack Development, gaining practical experience in building web applications, developing user interfaces, and working with backend technologies and databases.",
    responsibilities: [
      "Developed a Tech Blog Proof of Concept using ReactJS.",
      "Worked on TechVerse CMS and its administration features.",
      "Contributed to Medical CRM application development.",
      "Worked with PHP, CodeIgniter, and MySQL for CRM development.",
      "Gained practical experience in frontend and backend development.",
    ],
    technologies: [
      "ReactJS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-[#ff2a2a] uppercase tracking-[5px] text-sm font-semibold mb-4">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-[#ff2a2a]">Experience.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
            My professional journey, where I gained practical
            industry experience and developed my technical skills
            through real-world projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-gray-800 ml-3 md:ml-5 pl-7 md:pl-12">

          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="relative group"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[55px] top-2 w-5 h-5 rounded-full bg-[#ff2a2a] border-4 border-black shadow-[0_0_15px_#ff2a2a]"></div>

              {/* Experience Card */}
              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-7 md:p-10 transition-all duration-500 hover:border-[#ff2a2a] hover:-translate-y-1">

                {/* Top Section */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-8">

                  <div>
                    <span className="text-[#ff2a2a] text-sm font-semibold tracking-widest">
                      INTERNSHIP {experience.number}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold mt-3 group-hover:text-[#ff2a2a] transition-colors">
                      {experience.role}
                    </h3>

                    <p className="text-gray-300 text-lg mt-2">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-sm text-gray-300 bg-[#1c1c1c] border border-gray-700 rounded-full px-4 py-2">
                      {experience.duration}
                    </span>

                    <span className="text-xs text-[#ff2a2a] border border-[#ff2a2a]/40 rounded-full px-4 py-2">
                      {experience.domain}
                    </span>
                  </div>

                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7 text-sm md:text-base mb-8">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold text-lg mb-5">
                    Key Responsibilities
                  </h4>

                  <div className="space-y-4">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 text-gray-400 text-sm md:text-base leading-6"
                        >
                          <span className="text-[#ff2a2a] mt-1">
                            ✦
                          </span>

                          <span>{responsibility}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="border-t border-gray-800 pt-7">
                  <h4 className="text-white font-semibold text-lg mb-5">
                    Technologies & Tools
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs md:text-sm text-gray-300 bg-[#1c1c1c] border border-gray-800 rounded-md px-4 py-2 hover:border-[#ff2a2a] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Every experience is an opportunity to learn and grow.
          </p>

          <p className="text-[#ff2a2a] text-lg font-semibold mt-2">
            Learning. Building. Growing.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
