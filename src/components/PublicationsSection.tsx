
import { useEffect, useRef } from 'react';

const PublicationsSection = () => {
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
    <section id="publications" className="py-20 px-4 bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Publications & Awards</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="terminal-card">
            <h3 className="text-xl font-semibold mb-4 text-terminal-green">Journal Publications</h3>
            
            <div className="mb-6 border-l-2 border-terminal-green pl-4">
              <h4 className="text-lg font-medium text-white">FREEDOM FROM SICK</h4>
              <p className="text-terminal-light-gray mb-2">Published in IJATEM, November 2024</p>
              <p className="text-sm text-terminal-light-gray">
                A comprehensive research on innovative healthcare solutions through technology integration, addressing modern health challenges with accessible preventative care.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center text-terminal-green hover:text-terminal-green-light transition-colors duration-200"
            >
              View Publication
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
          
          <div className="terminal-card">
            <h3 className="text-xl font-semibold mb-4 text-terminal-green">Academic Awards</h3>
            
            <div className="space-y-4">
              <div className="border-l-2 border-terminal-green pl-4">
                <h4 className="text-lg font-medium text-white">2023-24 Academic Year</h4>
                <p className="text-terminal-light-gray">GPA: 9.04</p>
                <div className="mt-2 h-2 bg-terminal-gray rounded-full">
                  <div className="bg-terminal-green h-full rounded-full" style={{ width: '90.4%' }}></div>
                </div>
              </div>
              
              <div className="border-l-2 border-terminal-green pl-4">
                <h4 className="text-lg font-medium text-white">2022-23 Academic Year</h4>
                <p className="text-terminal-light-gray">GPA: 8.96</p>
                <div className="mt-2 h-2 bg-terminal-gray rounded-full">
                  <div className="bg-terminal-green h-full rounded-full" style={{ width: '89.6%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
