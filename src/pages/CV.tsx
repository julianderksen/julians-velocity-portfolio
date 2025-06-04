
import { Download, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CV = () => {
  const handleDownloadCV = () => {
    // This would trigger a PDF download in a real implementation
    console.log("Downloading CV...");
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light text-black mb-4">
              Curriculum <span className="font-semibold">Vitae</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mb-8">Julian Derksen - Software Developer</p>
            
            <Button 
              onClick={handleDownloadCV}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium tracking-wide transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* CV Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  {/* Contact Info */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-black mb-6">Contact</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-700">
                        <Mail className="h-5 w-5 mr-3 text-black" />
                        <span className="text-sm">julian@example.com</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="h-5 w-5 mr-3 text-black" />
                        <span className="text-sm">+31 6 12345678</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 mr-3 text-black" />
                        <span className="text-sm">Nederland</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-black mb-6">Vaardigheden</h3>
                    
                    <div className="space-y-3">
                      {[
                        "JavaScript/TypeScript",
                        "React & Next.js",
                        "Node.js",
                        "Python",
                        "Git & GitHub",
                        "Database Design",
                        "UI/UX Design",
                        "Agile/Scrum"
                      ].map((skill) => (
                        <div key={skill} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-6">Talen</h3>
                    
                    <div className="space-y-3">
                      <div className="text-sm">
                        <span className="font-medium text-black">Nederlands</span>
                        <span className="text-gray-600 ml-2">Moedertaal</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-black">Engels</span>
                        <span className="text-gray-600 ml-2">Vloeiend</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-black">Duits</span>
                        <span className="text-gray-600 ml-2">Basis</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Profile */}
              <div>
                <h2 className="text-3xl font-light text-black mb-6 flex items-center">
                  <Award className="h-8 w-8 mr-3" />
                  Profiel
                </h2>
                <div className="w-16 h-1 bg-black mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Gepassioneerde software developer met een sterke focus op moderne web technologieën 
                  en gebruiksvriendelijke oplossingen. Ik kombineer technische expertise met creativiteit 
                  om innovatieve digitale producten te ontwikkelen die echte waarde toevoegen voor gebruikers en bedrijven.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-light text-black mb-6 flex items-center">
                  <Briefcase className="h-8 w-8 mr-3" />
                  Werkervaring
                </h2>
                <div className="w-16 h-1 bg-black mb-8"></div>
                
                <div className="space-y-8">
                  <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-black">Junior Software Developer</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          2023 - Heden
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">Tech Company XYZ</p>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Ontwikkeling van responsive web applicaties met React en TypeScript</li>
                        <li>• Samenwerking in agile teams voor het realiseren van complexe projecten</li>
                        <li>• Code reviews en het mentoren van junior collega's</li>
                        <li>• Optimalisatie van bestaande systemen voor betere performance</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-black">Frontend Developer Intern</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          2022 - 2023
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">Digital Agency ABC</p>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Implementatie van UI designs in moderne JavaScript frameworks</li>
                        <li>• Ondersteuning bij het onderhoud van klantprojecten</li>
                        <li>• Leren werken met version control en deployment procedures</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-light text-black mb-6 flex items-center">
                  <GraduationCap className="h-8 w-8 mr-3" />
                  Opleiding
                </h2>
                <div className="w-16 h-1 bg-black mb-8"></div>
                
                <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-black">HBO Informatica</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        2019 - 2023
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium mb-3">Hogeschool van Nederland</p>
                    <p className="text-gray-700">
                      Specialisatie in software engineering met focus op web development, 
                      database design en projectmanagement. Afgestudeerd cum laude met een 
                      thesis over moderne frontend architecturen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
