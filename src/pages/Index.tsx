
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HobbiesSection from "@/components/HobbiesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="lg:pr-12">
              <h1 className="text-5xl lg:text-7xl font-light text-black mb-6 tracking-tight">
                Julian
                <br />
                <span className="font-semibold">Derksen</span>
              </h1>
              
              <div className="w-20 h-1 bg-black mb-8"></div>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
                Software Developer & Digital Innovator
              </p>
              
              <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl">
                Ik ben op zoek naar uitdagende kansen in de tech-wereld waar ik mijn passie voor ontwikkeling 
                en innovatie kan inzetten. Met een focus op moderne technologieën en gebruikervriendelijke 
                oplossingen streef ik naar excellentie in elk project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/portfolio">
                  <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium tracking-wide transition-all duration-300 group">
                    Bekijk Mijn Werk
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/cv">
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium tracking-wide transition-all duration-300">
                    Download CV
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/julianderksen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/julian-derksen-529157368/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="lg:pl-12">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                    alt="Julian Derksen" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/5 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-light text-black mb-6">
                Over <span className="font-semibold">Mij</span>
              </h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  Als gepassioneerde software developer combineer ik technische expertise met 
                  creatieve probleemoplossing. Mijn focus ligt op het bouwen van elegante, 
                  schaalbare oplossingen die echte waarde toevoegen.
                </p>
                <p className="text-lg leading-relaxed">
                  Met ervaring in moderne frameworks en een oog voor detail, streef ik ernaar 
                  om code te schrijven die niet alleen functioneert, maar ook inspireert. 
                  Ik geloof in de kracht van samenwerking en continue learning om de beste 
                  resultaten te behalen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <HobbiesSection />
    </div>
  );
};

export default Index;
