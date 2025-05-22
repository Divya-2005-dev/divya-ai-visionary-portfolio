
import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const HeroSection = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  
  useEffect(() => {
    // Set typing done after animation completes
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 4000); // Slightly longer than the typing animation
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-4 bg-terminal-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className={`w-48 h-48 md:w-64 md:h-64 relative ${isTypingDone ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-terminal-green relative">
              <div className="absolute inset-0 bg-terminal-gray flex items-center justify-center text-terminal-green">
                <span className="text-6xl">DR</span>
              </div>
            </div>
            <div className="absolute -inset-1 rounded-full bg-transparent border border-terminal-green animate-pulse-glow opacity-70"></div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-terminal-green text-lg md:text-xl mb-2 font-mono">Hello, my name is</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Divya R</h1>

            <div className="h-12 mb-6 overflow-hidden">
              <p className="text-lg md:text-2xl font-mono text-white border-r-2 border-terminal-green whitespace-nowrap overflow-hidden animate-typing animate-blink-caret">
                Full Stack Developer & AI Specialist
              </p>
            </div>

            <p className={`text-terminal-light-gray mb-8 max-w-2xl ${isTypingDone ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              Building intelligent systems that bridge innovation and user experience. Passionate about leveraging AI, machine learning and web technologies to create solutions that make a difference.
            </p>

            <div className={`flex gap-4 ${isTypingDone ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
              <a 
                href="mailto:divyadivyar67@gmail.com" 
                className="bg-transparent hover:bg-terminal-green text-terminal-green hover:text-terminal-black font-semibold border border-terminal-green px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-terminal-light-gray hover:text-terminal-green transition-colors duration-200">
            <span className="mb-2 text-sm">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
