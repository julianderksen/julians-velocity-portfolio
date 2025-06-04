
import { Card, CardContent } from "@/components/ui/card";

const HobbiesSection = () => {
  const hobbies = [
    {
      title: "Automotive Passie",
      description: "Klassieke auto's zijn een grote passie van mij. Ik geniet van het waarderen van tijdloze automotive designs en het bijwonen van classic car events.",
      image: "/lovable-uploads/479bcd78-f5c4-416e-946a-1a1acc97612a.png",
      alt: "Klassieke Porsche 911"
    },
    {
      title: "Racing & Motorsport",
      description: "De wereld van motorsport fascineert mij enorm. Van historische racewagens tot moderne technologie - de combinatie van engineering en prestatie inspireert mij.",
      image: "/lovable-uploads/ffbd0773-3f50-426c-aba8-7c052c545d88.png",
      alt: "BMW racewagen"
    },
    {
      title: "Tech & Setup",
      description: "Technologie is niet alleen mijn werk, maar ook mijn hobby. Ik houd van het optimaliseren van mijn setup en het verkennen van nieuwe technologieën.",
      image: "/lovable-uploads/aa4a5d79-8254-4fe8-abcf-13a2b07dd64b.png",
      alt: "Tech setup met dual monitors"
    },
    {
      title: "Reizen & Cultuur",
      description: "Reizen opent je horizon. Of het nu gaat om het verkennen van historische architectuur of het ondervinden van nieuwe culturen - elk avontuur brengt nieuwe inzichten.",
      image: "/lovable-uploads/c76cf393-0430-4ca2-bd2d-bf8387c68a63.png",
      alt: "Duomo di Milano"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            Hobby's & <span className="font-semibold">Interesses</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Naast development ben ik gepassioneerd door automotive, technologie en reizen. 
            Deze interesses inspireren mij en vormgeven mijn creatieve aanpak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={hobby.image} 
                  alt={hobby.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">
                  {hobby.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Touch */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/eab6c629-0710-4508-8543-3995e4fb70ef.png" 
              alt="Julian met vrienden"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-8"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              Het delen van ervaringen met vrienden en familie maakt elke hobby nog leuker. 
              Samen ontdekken, leren en groeien - dat is wat mij motiveert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
