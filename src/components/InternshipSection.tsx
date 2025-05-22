
import { useEffect, useRef } from 'react';

const internships = [
  {
    company: "Titan Pvt Ltd",
    position: "Intern",
    period: "",
    area: "Home Automation",
    description: "Worked on developing smart home automation systems, integrating various sensors and controllers to create efficient home management solutions."
  },
  {
    company: "Exide Pvt Ltd",
    position: "Intern",
    period: "",
    area: "Battery Manufacturing",
    description: "Gained hands-on experience in battery production processes, quality control procedures, and understanding the intricacies of power storage solutions."
  },
  {
    company: "Microtech CNC",
    position: "Intern",
    period: "",
    area: "CNC Operations",
    description: "Learned about computer numerical control machines and their programming, understanding precision manufacturing techniques."
  },
  {
    company: "CodSoft",
    position: "Intern",
    period: "",
    area: "Artificial Intelligence",
    description: "Developed AI-driven applications and gained practical experience in implementing machine learning models for real-world problems."
  }
];

const InternshipSection = () => {
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
    <section id="experience" className="py-20 px-4 bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Internships</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <div 
              key={index} 
              className="terminal-card"
            >
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">{internship.company}</h3>
                <span className="text-terminal-green text-sm font-mono py-1 px-2 bg-terminal-gray/30 rounded-md">
                  {internship.area}
                </span>
              </div>
              
              <p className="text-terminal-light-gray mb-4">
                {internship.description}
              </p>
              
              <div className="flex items-center mt-2">
                <span className="text-xs text-terminal-green-light border border-terminal-green rounded-full py-1 px-3">
                  {internship.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
