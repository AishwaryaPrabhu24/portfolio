
import React from 'react';
import stackImage from '../assets/about/image.png';

const About = () => {
  const skills = [
    'Java',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'REST APIs'
  ];

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start">

        {/* Left Side: Profile ID Card */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12">

          <div className="relative flex justify-center w-full">

            {/* Lanyard String */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>

            {/* Lanyard Clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-lg"></div>

            {/* ID Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">

              {/* Card Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full"></div>
              </div>

              {/* Profile Image */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={stackImage}
                  alt="Aishwarya - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ID Card Details */}
              <div className="text-center py-4">
                <h3 className="text-white text-xl font-black tracking-wide">
                  AISHWARYA
                </h3>
                <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mt-1">
                  Full Stack Developer
                </p>
              </div>

            </div>
          </div>

          {/* Education Card */}
          <div className="mt-12 bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-5 w-full max-w-[300px] text-white text-center">
            <p className="text-xs uppercase tracking-[3px] text-red-100">
              Education
            </p>
            <h3 className="font-bold text-lg mt-2">
              B.E. Computer Science
            </h3>
            <p className="text-sm text-red-100 mt-1">
              Government College of Engineering, Dharmapuri
            </p>
          </div>

        </div>

        {/* Right Side: About Me */}
        <div className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <p className="text-sm font-bold tracking-[5px] uppercase text-red-100 mb-3">
            Get to Know Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Hello, I'm <br />
            <span className="text-white">Aishwarya.</span>
          </h2>

          <p className="text-lg md:text-xl font-bold leading-relaxed text-red-50 mb-5">
            A Computer Science and Engineering student with a passion for
            Full-Stack Development and building meaningful digital experiences.
          </p>

          <p className="text-sm md:text-base leading-8 text-white/90 mb-5">
            I enjoy transforming ideas into functional web applications.
            My development journey involves creating responsive user
            interfaces, building backend functionality, integrating APIs,
            and working with databases.
          </p>

          <p className="text-sm md:text-base leading-8 text-white/90 mb-8">
            I have worked on academic and personal projects that have helped
            me explore real-world problem solving and application development.
            I am always curious to learn new technologies, improve my skills,
            and take on new challenges as a developer.
          </p>

          {/* Technical Skills */}
          <h3 className="text-2xl font-black text-black mb-5">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-black/20 border border-white/30 text-white text-sm font-semibold hover:bg-black hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Personal Highlights */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-black/20 rounded-xl p-4 border border-white/20">
              <h4 className="text-2xl font-black text-white">
                Full Stack
              </h4>
              <p className="text-sm text-red-100 mt-1">
                Development Focus
              </p>
            </div>

            <div className="bg-black/20 rounded-xl p-4 border border-white/20">
              <h4 className="text-2xl font-black text-white">
                Always Learning
              </h4>
              <p className="text-sm text-red-100 mt-1">
                Growing Every Day
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Torn Paper Divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div
        className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse"
        style={{ animationDelay: '1s' }}
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

    </section>
  );
};

export default About;
