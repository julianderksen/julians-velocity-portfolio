
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email
    console.log('Form submitted:', formData);
    alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-light text-black mb-4">
              Neem <span className="font-semibold">Contact</span> Op
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Interesse in samenwerking? Ik sta altijd open voor nieuwe uitdagingen 
              en interessante projecten. Laten we samen iets moois bouwen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light text-black mb-8">
                Laten we <span className="font-semibold">Praten</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="p-3 bg-black text-white rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-600">julian@example.com</p>
                    <a 
                      href="mailto:julian@example.com" 
                      className="text-black hover:text-gray-600 transition-colors text-sm font-medium"
                    >
                      Stuur een email →
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-black text-white rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Telefoon</h3>
                    <p className="text-gray-600">+31 6 12345678</p>
                    <a 
                      href="tel:+31612345678" 
                      className="text-black hover:text-gray-600 transition-colors text-sm font-medium"
                    >
                      Bel direct →
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-black text-white rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Locatie</h3>
                    <p className="text-gray-600">Nederland</p>
                    <p className="text-black text-sm font-medium">Open voor remote werk</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-6">Volg Mij Online</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/julian-derksen-529157368/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                  >
                    <Linkedin className="h-6 w-6" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300">Professioneel netwerk</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/julianderksen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                  >
                    <Github className="h-6 w-6" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300">Code & projecten</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-black mb-6">Stuur een Bericht</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                          Naam *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-black focus:ring-black"
                          placeholder="Jouw naam"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-black focus:ring-black"
                          placeholder="jouw@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                        Onderwerp *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-black focus:ring-black"
                        placeholder="Waar gaat je bericht over?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                        Bericht *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-black focus:ring-black resize-none"
                        placeholder="Vertel me over je project of vraag..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-medium tracking-wide transition-all duration-300 group"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Verstuur Bericht
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
