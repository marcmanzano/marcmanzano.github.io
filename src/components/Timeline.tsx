
import { Building2, GraduationCap, ExternalLink } from "lucide-react";

const Timeline = () => {
  const experience = [
    {
      years: "2022 – Present",
      role: "General Manager, Cybersecurity Group",
      institution: "SandboxAQ",
      link: "https://www.sandboxaq.com"
    },
    {
      years: "2020 – Present",
      role: "Associate Professor",
      institution: "Mondragon Unibertsitatea",
      link: "https://www.mondragon.edu/es/inicio"
    },
    {
      years: "2021 – 2021", 
      role: "Senior Staff Software Engineer",
      institution: "Google",
      link: "https://www.google.com"
    },
    {
      years: "2016 – 2021",
      role: "VP, Cryptography Research Centre", 
      institution: "Technology Innovation Institute, TII",
      link: "https://www.tii.ae"
    }
  ];

  const education = [
    {
      years: "2024 – 2024",
      degree: "Executive Program for Growing Companies",
      institution: "Stanford University",
      link: "https://www.stanford.edu"
    },
    {
      years: "2012 – 2014",
      degree: "PhD in Computer Science (Cryptography)",
      institution: "University of Girona",
      link: "https://www.udg.edu"
    },
    {
      years: "2011 – 2012",
      degree: "MSc in Information Security", 
      institution: "University of Girona",
      link: "https://www.udg.edu"
    },
    {
      years: "2007 – 2011",
      degree: "BSc in Computer Engineering",
      institution: "Universitat de Girona",
      link: "https://www.udg.edu"
    }
  ];

  const TimelineItem = ({ item, icon, isEducation = false }: { item: any, icon: React.ReactNode, isEducation?: boolean }) => (
    <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-blue-600 mb-1">{item.years}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
          {item.role || item.degree}
        </h3>
        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 group"
        >
          <span className="truncate">{item.institution}</span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-lg text-gray-600">Experience and educational background</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Experience</h3>
            </div>
            
            <div className="space-y-4">
              {experience.map((item, index) => (
                <TimelineItem 
                  key={index}
                  item={item}
                  icon={<Building2 className="w-4 h-4" />}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((item, index) => (
                <TimelineItem 
                  key={index}
                  item={item}
                  icon={<GraduationCap className="w-4 h-4" />}
                  isEducation={true}
                />
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn Link */}
        <div className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/in/marcmanzano/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <span>View full professional journey on LinkedIn</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
