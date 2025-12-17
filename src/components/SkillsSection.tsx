
import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    skills: ["React", "Django"]
  },
  {
    category: "Core Expertise",
    skills: ["Prompt Engineering", "Machine Learning", "NLP"]
  },
  {
    category: "Tools",
    skills: ["Mongoose", "MongoDB", "Node.js"]
  },
  {
    category: "Soft Skills",
    skills: ["Creative Thinking", "Time Management", "Problem Solving", "Decision Making"]
  }
];

const SkillsSection = () => {
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
    <section id="skills" className="py-20 px-4 min-h-screen flex items-center bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category} 
              className={`terminal-card transition-all duration-500`} 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-terminal-green flex items-center">
                <span className="font-mono text-terminal-green mr-2">&lt;</span>
                {category.category}
                <span className="font-mono text-terminal-green ml-2">/&gt;</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <div className="terminal-card">
            <h3 className="text-xl font-semibold mb-4 text-terminal-green flex items-center">
              <span className="font-mono text-terminal-green mr-2">&lt;</span>
              Technical Proficiency
              <span className="font-mono text-terminal-green ml-2">/&gt;</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-terminal-light-gray">Full Stack Development</span>
                  <span className="text-sm text-terminal-green">85%</span>
                </div>
                <div className="h-2 bg-terminal-gray rounded-full">
                  <div className="bg-terminal-green h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-terminal-light-gray">Machine Learning</span>
                  <span className="text-sm text-terminal-green">80%</span>
                </div>
                <div className="h-2 bg-terminal-gray rounded-full">
                  <div className="bg-terminal-green h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-terminal-light-gray">Prompt Engineering</span>
                  <span className="text-sm text-terminal-green">90%</span>
                </div>
                <div className="h-2 bg-terminal-gray rounded-full">
                  <div className="bg-terminal-green h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-terminal-light-gray">Generative AI</span>
                  <span className="text-sm text-terminal-green">75%</span>
                </div>
                <div className="h-2 bg-terminal-gray rounded-full">
                  <div className="bg-terminal-green h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
