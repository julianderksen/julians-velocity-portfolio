import { Download, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CV = () => {
  const handleDownloadCV = () => {
    window.open('/CV (2).pdf', '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light text-black mb-4">
              JULIAN <span className="font-semibold">DERKSEN</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mb-8">Software Developer</p>
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
                        <span className="text-sm">julianmderksen@gmail.com</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="h-5 w-5 mr-3 text-black" />
                        <span className="text-sm">06 42766855</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 mr-3 text-black" />
                        <span className="text-sm">Zandvoort</span>
                      </div>
                    </div>
                  </div>
                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-black mb-6">Skills</h3>
                    <div className="space-y-3">
                      {["Meerdere projecten voor mijn opleiding gedaan op het gebied van webdevelopment","Goed in problemen oplossen","Werkt nauwkeurig","Altijd op tijd","Leert snel nieuwe dingen"].map((skill) => (
                        <div key={skill} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Profiel */}
              <div>
                <h2 className="text-3xl font-light text-black mb-6 flex items-center">
                  <Award className="h-8 w-8 mr-3" />
                  Over Mij
                </h2>
                <div className="w-16 h-1 bg-black mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  MBO Software Developer (niveau 4) met ervaring in HTML/CSS, PHP, Laravel en C#. Passie voor auto's en techniek. Leergierig, nauwkeurig en altijd op tijd. Na deze opleiding wil ik verder studeren aan de IVA. Op zoek naar een uitdagende stage.
                </p>
              </div>
              {/* Scholing */}
              <div>
                <h2 className="text-3xl font-light text-black mb-6 flex items-center">
                  <GraduationCap className="h-8 w-8 mr-3" />
                  Scholing
                </h2>
                <div className="w-16 h-1 bg-black mb-8"></div>
                <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm mb-6">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-black">MAVO Economie</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Aug 2018 – Mei 2022
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium mb-3">Mendelcollege</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-black">Software Developer</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Feb 2023 – Feb 2026
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium mb-3">Nova College</p>
                  </CardContent>
                </Card>
              </div>
              {/* Werkervaring */}
              <div>
                <h2 className="text-3xl font-light text-black mb-6 flex items-center">
                  <Briefcase className="h-8 w-8 mr-3" />
                  Ervaring
                </h2>
                <div className="w-16 h-1 bg-black mb-8"></div>
                <div className="space-y-8">
                  <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-black">Software Developer (Stage)</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Feb 2024 – Jul 2024
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">CoST ICT / Milaan, Italie</p>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Bestaande codebases binnen verschillende projecten gedocumenteerd en geanalyseerd</li>
                        <li>• Ervaring opgedaan in een internationale, professionele werkomgeving met focus op softwarekwaliteit</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-black">Vulploegmedewerker</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Okt 2021 – Jul 2023
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">Albert Heijn / Zandvoort</p>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Winkelvoorraad aangevuld en gecontroleerd, met focus op efficiëntie en klantgerichtheid</li>
                        <li>• Teamwerk, verantwoordelijkheid en punctualiteit ontwikkeld</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-black border-r-0 border-t-0 border-b-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-black">IT Snuffelstage</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          1 dag in 2020
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">Unified / Nederland</p>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Servers gedemonteerd en inzicht gekregen in de opbouw en werking van IT-hardware</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* Onderin: locatie, mail, telefoon */}
              <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8 mt-12 text-black text-md font-medium gap-2">
                <span className="flex items-center"><MapPin className="h-5 w-5 mr-2" />Zandvoort</span>
                <span className="flex items-center"><Mail className="h-5 w-5 mr-2" />julianmderksen@gmail.com</span>
                <span className="flex items-center"><Phone className="h-5 w-5 mr-2" />06 42766855</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
