
import { useEffect, useRef } from 'react';

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E)",
    specialization: "Electronics and Communication Engineering",
    institution: "Anna University",
    period: "2022 - 2026",
    score: "9.08 CGPA",
    percentage: 90.8
  },
  {
    degree: "Higher Secondary Education",
    specialization: "Class 12",
    institution: "",
    period: "",
    score: "84%",
    percentage: 84
  },
  {
    degree: "Secondary Education",
    specialization: "Class 10",
    institution: "",
    period: "",
    score: "99%",
    percentage: 99
  }
];

const EducationSection = () => {
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
    <section id="education" className="py-20 px-4 bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-10 grid gap-8">
          {educationData.map((item, index) => (
            <div key={index} className="terminal-card">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  {item.specialization && (
                    <p className="text-terminal-green">{item.specialization}</p>
                  )}
                </div>
                
                <div className="text-right">
                  {item.institution && (
                    <p className="text-white">{item.institution}</p>
                  )}
                  {item.period && (
                    <p className="text-terminal-light-gray">{item.period}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="font-mono text-terminal-green">{item.score}</div>
                <div className="flex-grow h-2 bg-terminal-gray rounded-full">
                  <div 
                    className="bg-terminal-green h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              {index === 0 && (
                <div className="mt-4 p-4 bg-terminal-gray/20 rounded-md border-l-2 border-terminal-green">
                  <p className="text-terminal-light-gray text-sm">
                    Currently pursuing my Bachelor's degree with a strong focus on electronic systems and digital communications. 
                    Complementing my core curriculum with self-guided studies in AI, machine learning, and web development.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
