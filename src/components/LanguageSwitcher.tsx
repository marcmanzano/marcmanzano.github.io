
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("EN");
  
  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" }, 
    { code: "CAT", name: "Català" }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/20">
        <Globe className="w-4 h-4 text-gray-600" />
        <div className="flex gap-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              size="sm"
              onClick={() => setCurrentLang(lang.code)}
              className={`text-xs px-2 py-1 h-6 rounded-full transition-all duration-200 ${
                currentLang === lang.code 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {lang.code}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
