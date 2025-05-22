
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-terminal-black border-t border-terminal-green/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-terminal-green font-mono font-bold text-xl">{'{'}</span>
              <span className="font-semibold">Divya R</span>
              <span className="text-terminal-green font-mono font-bold text-xl">{'}'}</span>
            </div>
            <p className="text-sm text-terminal-light-gray mt-1">
              Full Stack Developer & AI Specialist
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:divyadivyar67@gmail.com" 
              className="social-button"
              aria-label="Email"
            >
              <Mail size={20} />
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
        
        <div className="mt-6 text-center">
          <p className="text-sm text-terminal-light-gray">
            &copy; {new Date().getFullYear()} Divya R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
