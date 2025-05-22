
import { useEffect, useRef } from 'react';

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4 min-h-screen flex items-center bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 terminal-card">
            <h3 className="text-xl font-semibold mb-4 text-terminal-green">Who I Am</h3>
            
            <p className="mb-4 text-terminal-light-gray">
              Currently pursuing my BE in Electronics and Communication Engineering at Anna University (2022-2026), I maintain a strong academic record with a CGPA of 9.08. My academic foundation has equipped me with a deep understanding of technical systems, which I combine with my passion for software development.
            </p>
            
            <p className="mb-4 text-terminal-light-gray">
              My passion lies in the intersection of AI and web development, where I focus on creating intelligent, user-centric solutions. I believe technology should serve people through intuitive design and powerful functionality.
            </p>
            
            <p className="text-terminal-light-gray">
              With a background that blends engineering principles and software development, I bring a unique perspective to problem-solving. I'm particularly interested in how AI can enhance user experiences and automate complex processes across web applications.
            </p>
          </div>
          
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="terminal-card h-full">
              <h3 className="text-xl font-semibold mb-4 text-terminal-green">My Approach</h3>
              
              <ul className="space-y-3 text-terminal-light-gray">
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Building with purpose and user focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Continuous learning and adaptation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Combining technical excellence with creative thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Following best practices and clean code principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Simplifying complex problems through innovative solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
