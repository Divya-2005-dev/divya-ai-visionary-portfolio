
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { toast } from "sonner";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-terminal-green">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-terminal-light-gray mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-terminal-gray/20 border border-terminal-gray text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-terminal-green"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-terminal-light-gray mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-terminal-gray/20 border border-terminal-gray text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-terminal-green"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-terminal-light-gray mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-terminal-gray/20 border border-terminal-gray text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-terminal-green resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-terminal-green hover:bg-terminal-green-dark text-terminal-black font-semibold py-2 px-6 rounded-md transition-colors duration-300 flex items-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-terminal-green">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="terminal-card flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="text-terminal-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a 
                    href="mailto:divyadivyar67@gmail.com" 
                    className="text-terminal-light-gray hover:text-terminal-green transition-colors duration-200"
                  >
                    divyadivyar67@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="terminal-card flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="text-terminal-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a 
                    href="tel:+919385917210" 
                    className="text-terminal-light-gray hover:text-terminal-green transition-colors duration-200"
                  >
                    +91 9385917210
                  </a>
                </div>
              </div>
              
              <div className="terminal-card flex items-start">
                <div className="mr-4 mt-1">
                  <Linkedin className="text-terminal-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-light-gray hover:text-terminal-green transition-colors duration-200"
                  >
                    linkedin.com/in/divya-r
                  </a>
                </div>
              </div>
              
              <div className="terminal-card flex items-start">
                <div className="mr-4 mt-1">
                  <Github className="text-terminal-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-light-gray hover:text-terminal-green transition-colors duration-200"
                  >
                    github.com/divya-r
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
