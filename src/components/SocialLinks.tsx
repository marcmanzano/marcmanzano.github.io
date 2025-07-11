
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=XW9J4foAAAAJ&hl=es",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.5 3.5H8l4-6 4 6h3.5L24 9.5 12 0z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/marcmanzano/",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect</h2>
        <p className="text-lg text-gray-600 mb-12">Find me on these platforms</p>
        
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              asChild
              className="group h-16 w-16 rounded-full border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-gray-600 group-hover:text-blue-600"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Back to Top Button */}
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="lg"
          className="group mb-16 px-6 py-3 rounded-full border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 mr-2 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
            Back to Top
          </span>
        </Button>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2024 Marc Manzano. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
