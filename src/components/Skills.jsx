
import React from 'react';

const Skills = () => {

  const skillCategories = [
    {
      number: '01',
      title: 'Programming Languages',
      description: 'Languages I use to develop solutions and strengthen my programming fundamentals.',
      skills: ['Java','Python','JavaScript', 'C'],
    },
    {
      number: '02',
      title: 'Frontend Development',
      description: 'Creating responsive, interactive and user-friendly web interfaces.',
      skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS','Vue.js'],
    },
    {
      number: '03',
      title: 'Backend Development',
      description: 'Building server-side applications, APIs and application functionality.',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication','Spring Boot'],
    },
    {
      number: '04',
      title: 'Database & Tools',
      description: 'Managing application data and using tools throughout the development process.',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'SQL',
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'Figma',
        'Vercel'
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-white py-28 px-6 md:px-12 overflow-hidden font-sans"
    >

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-[#ff2a2a] font-bold uppercase tracking-[5px] text-sm mb-4">
            My Technical Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-black mb-5">
            Skills & <span className="text-[#ff2a2a]">Technologies</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            The technologies and tools I use to transform ideas into
            functional, responsive and meaningful digital applications.
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {skillCategories.map((category, index) => (

            <div
              key={category.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 md:p-9 shadow-sm hover:shadow-xl hover:border-[#ff2a2a] transition-all duration-500 overflow-hidden"
            >

              {/* Background Number */}
              <span className="absolute top-3 right-6 text-7xl font-black text-gray-100 group-hover:text-red-50 transition-colors duration-500">
                {category.number}
              </span>

              {/* Category Content */}
              <div className="relative z-10">

                <div className="w-12 h-1 bg-[#ff2a2a] mb-6 group-hover:w-20 transition-all duration-500"></div>

                <h3 className="text-2xl font-black text-black mb-3">
                  {category.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7 mb-7 max-w-md">
                  {category.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold border border-gray-200 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff2a2a] group-hover:w-full transition-all duration-500"></div>

            </div>

          ))}

        </div>

        {/* Bottom Message */}
        <div
          data-aos="fade-up"
          className="mt-16 text-center"
        >

          <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
            Always Learning. <span className="text-[#ff2a2a]">Always Building.</span>
          </h3>

          <p className="text-gray-500 text-sm md:text-base">
            Continuously exploring new technologies and improving my development skills.
          </p>

        </div>

      </div>

      {/* Decorative Background Element */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

    </section>
  );
};

export default Skills;
