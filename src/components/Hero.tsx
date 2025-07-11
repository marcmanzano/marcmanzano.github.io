
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const expertiseTags = [
    "#PostQuantumCryptography",
    "#Cybersecurity", 
    "#QuantumTech",
    "#AI",
    "#InnovationPolicy"
  ];

  const scrollToNext = () => {
    const timelineSection = document.querySelector('[data-section="timeline"]');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-100">
                <img 
                  src="/lovable-uploads/6ddc4af3-e5bf-48ee-b526-ce46a225695a.png"
                  alt="Marc Manzano"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Marc Manzano
            </h1>
            
            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center lg:justify-start">
              {expertiseTags.map((tag, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Bio */}
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p>
                Marc Manzano leads the cybersecurity group at Sandbox. His current research interests include post-quantum cryptography, lightweight cryptography, fully-homomorphic encryption, the intersection between machine learning and cryptanalysis, performance optimizations of cryptographic implementations on a wide range of architectures, and quantum algorithms.
              </p>
              <p>
                He has presented more than 25 articles at international conferences, published more than ten journal papers, and collaborated on several scientific books related to cryptography and computer networks security.
              </p>
              <p>
                Over the past ten years, Dr. Manzano has led the development of many secure cryptographic libraries and protocols. Dr. Manzano was formerly a Senior Staff Software Engineer at Google, and before that, he was the Vice President of the Cryptography Research Centre at the Technology Innovation Institute, a UAE-based scientific research center.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed positioning */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
        >
          <span className="text-sm mb-2 hidden sm:block">Scroll for more</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
