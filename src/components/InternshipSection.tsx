
import { useEffect, useRef } from 'react';

const internships = [
  {
    company: "Flipkart SCOA",
    position: "Operation and System Intern",
    period: "July 1 - August 5",
    area: "E-Commerce Operations",
    description: "Managed 500+ e-commerce product listings and order data with 100% accuracy. Gained exposure to enterprise-level workflows, motivating transition into full stack development."
  },
  {
    company: "Codsoft",
    position: "Intern",
    period: "September 20 - October 20",
    area: "Web Development",
    description: "Built and deployed 3 projects (Landing Page, Calculator, Portfolio) with 100% responsive design using HTML, CSS, and JavaScript. Improved frontend efficiency by 85% through clean UI design and optimized code structure. Enhanced web development proficiency by 90%, applying modern design and coding practices."
  },
  {
    company: "Neel Metal Pvt Ltd",
    position: "Intern",
    period: "",
    area: "Manufacturing & Engineering",
    description: "Gained hands-on experience in metal manufacturing processes and industrial automation. Worked on quality control procedures and learned about precision engineering workflows. Developed understanding of production line optimization and safety protocols in manufacturing environments."
  },
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
    company: "Microtech CNC Pvt Ltd",
    position: "Intern",
    period: "",
    area: "CNC Operations",
    description: "Gained comprehensive exposure to advanced CNC machining operations and precision manufacturing processes. Worked extensively with computer numerical control programming, understanding G-code development and machine operation protocols. Developed skills in CAD/CAM software integration and learned about quality assurance in precision engineering."
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
              
              {internship.period && (
                <p className="text-terminal-green-light text-sm mb-2 font-mono">{internship.period}</p>
              )}
              
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
