
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const certifications = [
  {
    number: "01",
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    type: "Certification",
    description:
      "Learned the fundamentals of artificial intelligence, machine learning, and AI services in Oracle Cloud Infrastructure.",
  },
  {
    number: "02",
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    type: "Certification",
    description:
      "Gained foundational knowledge of cloud computing concepts and Oracle Cloud Infrastructure services.",
  },
  {
    number: "03",
    title: "Programming in Java",
    issuer: "NPTEL",
    type: "Course Certification",
    description:
      "Developed knowledge of Java programming concepts, object-oriented programming, and core language fundamentals.",
  },
  {
    number: "04",
    title: "Node.js",
    issuer: "IBM - Naan Mudhalvan",
    type: "Course Certification",
    description:
      "Learned server-side JavaScript development and the fundamentals of building applications using Node.js.",
  },
  {
    number: "05",
    title: "Google Cloud Engineering",
    issuer: "Naan Mudhalvan",
    type: "Course Certification",
    description:
      "Gained foundational knowledge of Google Cloud services, cloud infrastructure, and engineering concepts.",
  },
  {
    number: "06",
    title: "Google Data Analytics",
    issuer: "Google",
    type: "Course Completion",
    description:
      "Completed learning in data analytics concepts, data preparation, analysis, and data-driven decision-making.",
  },
];

const CertificateCard = ({
  certificate,
  pathLength,
  containerRef,
  className,
}) => {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!cardRef.current || !containerRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTop = cardRect.top - containerRect.top;
    const lineTip = latest * containerRect.height;

    const shouldActivate = lineTip >= cardTop + 40;

    setIsActive(shouldActivate);
  });

  return (
    <div
      ref={cardRef}
      className={`w-64 sm:w-72 rounded-2xl p-2 relative flex flex-col z-10 border transition-all duration-700 hover:scale-[1.03] ${
        isActive
          ? "bg-[#ff2a2a] border-red-400 shadow-[0_15px_40px_rgba(255,42,42,0.3)]"
          : "bg-[#181818] border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:border-red-500/50"
      } ${className}`}
    >
      {/* Certificate hole */}
      <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full absolute top-3 left-1/2 -translate-x-1/2 shadow-inner z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-black rounded-full opacity-30" />
      </div>

      {/* Card content */}
      <div
        className={`w-full rounded-xl mt-6 p-5 flex flex-col min-h-[180px] transition-colors duration-700 ${
          isActive ? "bg-red-700/50" : "bg-[#242424]"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-lg font-bold italic font-serif ${
              isActive ? "text-red-200" : "text-red-500"
            }`}
          >
            {certificate.number}
          </span>

          <span
            className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full ${
              isActive
                ? "bg-white/15 text-white"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {certificate.type}
          </span>
        </div>

        <h3
          className={`text-base sm:text-lg font-bold leading-snug mb-2 ${
            isActive ? "text-white" : "text-gray-100"
          }`}
        >
          {certificate.title}
        </h3>

        <p
          className={`text-xs font-semibold mb-3 ${
            isActive ? "text-red-100" : "text-red-400"
          }`}
        >
          {certificate.issuer}
        </p>

        <p
          className={`text-xs leading-relaxed ${
            isActive ? "text-red-100" : "text-gray-400"
          }`}
        >
          {certificate.description}
        </p>
      </div>
    </div>
  );
};

const Certifications = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="bg-[#080808] text-white pt-24 pb-28 px-5 sm:px-8 md:px-12 w-full relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1770px]">

        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Heading */}
        <div className="relative md:absolute top-0 left-0 md:w-[420px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-red-500/40 rounded-full px-4 py-1.5 text-xs text-red-400 font-bold mb-6 bg-red-500/5">
            My Learning Journey
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
            Certifications
            <span className="text-[#ff2a2a]"> & Courses.</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed">
            Every certification represents a step forward in my learning
            journey, helping me strengthen my technical knowledge and
            explore new technologies.
          </p>
        </div>

        {/* Desktop animated timeline */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1770px] pointer-events-none z-0"
          viewBox="0 0 1000 1770"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,570 C 400,740 750,700 700,900 C 650,1100 350,1100 300,1280 C 250,1460 500,1510 650,1620"
            fill="none"
            stroke="#444444"
            strokeWidth="2"
            strokeDasharray="7 10"
          />

          <mask id="certification-path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,570 C 400,740 750,700 700,900 C 650,1100 350,1100 300,1280 C 250,1460 500,1510 650,1620"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d="M 650,200 C 400,300 200,400 300,570 C 400,740 750,700 700,900 C 650,1100 350,1100 300,1280 C 250,1460 500,1510 650,1620"
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="2.5"
            strokeDasharray="7 10"
            mask="url(#certification-path-mask)"
          />
        </svg>

        {/* Mobile animated timeline */}
        <svg
          className="md:hidden absolute top-[260px] left-1/2 -translate-x-1/2 w-4 h-[calc(100%-260px)] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#444444"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          <mask id="certification-mobile-mask">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>

          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="2"
            strokeDasharray="4 6"
            mask="url(#certification-mobile-mask)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Certificate cards */}
        <div className="relative z-10 flex flex-col items-center gap-8 md:block pt-2 md:pt-0 pb-10 md:pb-0">

          {certifications.map((certificate, index) => {
            const positions = [
              "md:absolute md:top-[100px] md:right-[5%] lg:right-[10%] rotate-1 md:rotate-3",
              "md:absolute md:top-[390px] md:left-[5%] lg:left-[10%] -rotate-1 md:-rotate-3",
              "md:absolute md:top-[680px] md:right-[5%] lg:right-[12%] rotate-1 md:rotate-2",
              "md:absolute md:top-[970px] md:left-[5%] lg:left-[12%] -rotate-1 md:-rotate-3",
              "md:absolute md:top-[1260px] md:right-[5%] lg:right-[10%] rotate-1 md:rotate-3",
              "md:absolute md:top-[1510px] md:left-[10%] lg:left-[18%] -rotate-1 md:-rotate-2",
            ];

            return (
              <CertificateCard
                key={certificate.number}
                certificate={certificate}
                pathLength={pathLength}
                containerRef={containerRef}
                className={positions[index]}
              />
            );
          })}

        </div>

        {/* Ending text */}
        <div className="hidden md:block absolute top-[1660px] right-[5%] text-red-400 font-serif italic text-xl rotate-3">
          Always learning...
        </div>

      </div>
    </section>
  );
};

export default Certifications;
