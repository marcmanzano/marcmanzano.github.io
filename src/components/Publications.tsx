
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, BookOpen, Video, FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "ETSI Quantum Safe Magazine",
      year: "2024",
      description: "Insights on quantum standardization policies across Europe.",
      link: "#",
      icon: <FileText className="w-6 h-6" />,
      type: "Article"
    },
    {
      title: "The Quantum Threat to Cybersecurity",
      year: "2024", 
      description: "High-level talk on the quantum threat to global cybersecurity.",
      link: "#",
      icon: <Video className="w-6 h-6" />,
      type: "Talk"
    },
    {
      title: "Random Number Generators - Nature Paper",
      year: "2023",
      description: "Co-authored scientific paper published in Nature.",
      link: "#", 
      icon: <BookOpen className="w-6 h-6" />,
      type: "Research"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Publications</h2>
          <p className="text-lg text-gray-600">Key research contributions and thought leadership</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {pub.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600">{pub.type}</span>
                    <div className="text-sm text-gray-500">{pub.year}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {pub.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {pub.description}
                </p>
                
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:gap-2 transition-all duration-200"
                >
                  <span>Read more</span>
                  <ExternalLink className="w-4 h-4 ml-1 group-hover:ml-0 transition-all duration-200" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
