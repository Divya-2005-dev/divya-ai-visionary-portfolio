
import { useEffect, useRef } from 'react';

const certifications = [
  {
    category: "Web Development",
    items: ["Web Development (Eduprep)", "Python (Eduprep)", "Selenium (Eduprep)"]
  },
  {
    category: "Artificial Intelligence",
    items: ["AI Fundamentals (Microsoft)", "Data Science (IBM)", "Machine Learning (Naan Mudhalvan)"]
  },
  {
    category: "Computer Vision & Hardware",
    items: ["OpenCV (SkillUp)", "VLSI (Maven Silicon)"]
  },
  {
    category: "Communication & Soft Skills",
    items: ["Wireless Communication (NPTEL)", "Soft Skills (TCS iON)"]
  }
];

const CertificationsSection = () => {
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
    <section id="certifications" className="py-20 px-4 bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Certifications</h2>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((certCategory, index) => (
            <div 
              key={index} 
              className="terminal-card"
            >
              <h3 className="text-lg font-semibold mb-4 text-terminal-green">
                {certCategory.category}
              </h3>
              
              <ul className="space-y-3">
                {certCategory.items.map((cert, certIndex) => (
                  <li key={certIndex} className="flex items-start">
                    <span className="text-terminal-green mr-2">✓</span>
                    <span className="text-terminal-light-gray">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
