import { Card, CardContent } from "@/components/ui/card";

const HobbiesSection = () => {
  const hobbies = [
    {
      title: "Automotive Passie",
      description: "Klassieke auto's zijn een grote passie van mij. Ik geniet van het waarderen van tijdloze automotive designs en het bijwonen van classic car events.",
      image: "/images/hobbies/classic-car.jpg",
      alt: "Klassieke Porsche 911"
    },
    {
      title: "Racing & Motorsport",
      description: "De wereld van motorsport fascineert mij enorm. Van historische racewagens tot moderne technologie - de combinatie van engineering en prestatie inspireert mij.",
      image: "/images/hobbies/racing.jpg",
      alt: "BMW racewagen"
    },
    {
      title: "Tech & Setup",
      description: "Technologie is niet alleen mijn werk, maar ook mijn hobby. Ik houd van het optimaliseren van mijn setup en het verkennen van nieuwe technologieën.",
      image: "/images/hobbies/tech-setup.jpg",
      alt: "Tech setup met dual monitors"
    },
    {
      title: "Reizen & Cultuur",
      description: "Reizen opent je horizon. Of het nu gaat om het verkennen van historische architectuur of het ondervinden van nieuwe culturen - elk avontuur brengt nieuwe inzichten.",
      image: "/images/hobbies/travel.jpg",
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
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/hobbies/friends.jpg" 
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
