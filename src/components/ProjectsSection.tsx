
import { useEffect, useRef } from 'react';
import projectNovanest from '@/assets/project-novanest.jpg';
import projectProductivity from '@/assets/project-productivity.jpg';
import projectTextToImage from '@/assets/project-text-to-image.jpg';
import projectHealthTracker from '@/assets/project-health-tracker.jpg';
import projectSmartLock from '@/assets/project-smart-lock.jpg';

const projects = [
  {
    title: "NovaNest - Student Career Empowerment Platform",
    duration: "DEC 2025",
    description: "Implemented core career tools (90%) including Resume Builder, Mock Tests, and Mock Interview modules to boost student readiness and skill growth. Ensured 95% seamless navigation and responsiveness with optimized Vercel deployment.",
    technologies: ["React", "JavaScript", "Node.js", "Django", "JWT Auth", "Vercel"],
    link: "https://github.com/Divya-2005-dev/novanest.git",
    image: projectNovanest
  },
  {
    title: "AI-Powered Personal Productivity",
    duration: "SEP 2025",
    description: "Built an AI-driven productivity dashboard for managing tasks, notes, and reminders efficiently. Added smart suggestions and progress tracking to boost user focus and productivity.",
    technologies: ["React", "AI/ML", "Node.js"],
    link: "https://github.com/Divya-2005-dev/mind-spark-desk.git",
    image: projectProductivity
  },
  {
    title: "Text-to-Image Converter",
    duration: "",
    description: "An advanced web application that transforms textual descriptions into high-quality images using AI. Includes user authentication, secure payment integration, and responsive design.",
    technologies: ["React", "Node.js", "Mongoose", "Razorpay"],
    link: "https://github.com/Divya-2005-dev/texttoimageapp.git",
    image: projectTextToImage
  },
  {
    title: "Health Tracker",
    duration: "",
    description: "A comprehensive health monitoring system that leverages sensor APIs to track physical activity, heart rate, and other health metrics in real-time.",
    technologies: ["HTML", "CSS", "JavaScript", "Sensor APIs"],
    link: "https://github.com/Divya-2005-dev/texttoimageapp.git",
    image: projectHealthTracker
  },
  {
    title: "Smart Door Lock System",
    duration: "",
    description: "An IoT-based security system utilizing Arduino and ultrasonic sensors to provide intelligent, proximity-based door locking mechanisms for enhanced home safety.",
    technologies: ["Arduino", "Ultrasonic sensors", "C++"],
    link: "#",
    image: projectSmartLock
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      {
        root: null,
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 min-h-screen flex items-center bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="terminal-card flex flex-col h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-48 bg-terminal-gray relative rounded-md mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terminal-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.duration && (
                    <span className="text-xs text-terminal-green-light">{project.duration}</span>
                  )}
                </div>
              </div>
              
              <p className="text-terminal-light-gray mb-4 flex-grow">{project.description}</p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-terminal-gray/60 text-terminal-green-light py-1 px-2 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-terminal-green hover:text-terminal-green-light transition-colors duration-200"
                >
                  View Repository
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
