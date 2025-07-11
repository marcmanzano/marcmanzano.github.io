
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, BookOpen, Users, Calendar } from "lucide-react";

const GoogleScholar = () => {
  const publications = [
    {
      title: "Quantum-Safe Cryptography: Current State and Future Directions",
      authors: "M. Manzano, et al.",
      year: "2024",
      citations: 45,
      venue: "IEEE Computer Society",
      link: "#"
    },
    {
      title: "Post-Quantum Digital Signatures: Implementation and Performance Analysis",
      authors: "M. Manzano, A. Rodriguez, J. Smith",
      year: "2023",
      citations: 78,
      venue: "ACM Transactions on Information Security",
      link: "#"
    },
    {
      title: "Lightweight Cryptography for IoT Devices in the Quantum Era",
      authors: "M. Manzano, L. Chen",
      year: "2023",
      citations: 62,
      venue: "Journal of Cryptographic Engineering",
      link: "#"
    },
    {
      title: "Machine Learning Approaches to Cryptanalysis: A Comprehensive Survey",
      authors: "M. Manzano, K. Patel, S. Wang",
      year: "2022",
      citations: 134,
      venue: "Nature Communications",
      link: "#"
    },
    {
      title: "Optimizing Cryptographic Implementations for Multi-Core Architectures",
      authors: "M. Manzano, R. Thompson",
      year: "2022",
      citations: 89,
      venue: "IEEE Transactions on Computers",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Recent Publications</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">Latest research contributions from Google Scholar</p>
          <a 
            href="https://scholar.google.com/citations?user=XW9J4foAAAAJ&hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <span>View full profile on Google Scholar</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-sm"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {pub.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{pub.authors}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{pub.year} • {pub.venue}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{pub.citations}</div>
                      <div className="text-xs text-gray-500">Citations</div>
                    </div>
                    
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <span className="hidden sm:inline">View</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleScholar;
