
import { useEffect, useRef } from 'react';

const events = [
  {
    type: "Meetups",
    events: ["Microsoft Developer Community", "NVIDIA AI Workshop"]
  },
  {
    type: "Workshops",
    events: ["AI & Deep Learning (Alliance University)", "Embedded Systems (IIT Hyderabad)", "IoT Integration (Innovate Engineering)", "Full Stack Development (Technosaign)"]
  },
  {
    type: "Conferences",
    events: ["International Conference on Engineering Innovations - IR Music Transmitter", "Digital Security Summit - OTP Smart Locking", "Healthcare Technology Conference - Freedom From Sick"]
  }
];

const EventsSection = () => {
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
    <section id="events" className="py-20 px-4 bg-terminal-black opacity-0" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Events & Workshops</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((eventType, index) => (
            <div 
              key={index} 
              className="terminal-card"
            >
              <h3 className="text-xl font-semibold mb-4 text-terminal-green">{eventType.type}</h3>
              
              <ul className="space-y-4">
                {eventType.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="pb-3 border-b border-terminal-gray/30 last:border-b-0 last:pb-0">
                    <p className="text-terminal-light-gray">{event}</p>
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

export default EventsSection;
