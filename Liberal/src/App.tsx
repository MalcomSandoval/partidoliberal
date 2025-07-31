import React from 'react';
import { Users, Heart, Globe, Twitter, Instagram, Facebook, Mail, Phone, MapPin, Vote, Star, ArrowRight, Calendar, Clock, MapPin as Location, ExternalLink } from 'lucide-react';

function App() {
  const candidates = [
    {
      id: 1,
      name: "María Alejandra Rodríguez",
      age: 22,
      position: "Candidata #1",
      education: "Estudiante de Derecho - Universidad Nacional",
      description: "Comprometida con la justicia social y los derechos de la juventud colombiana.",
      proposals: ["Becas universitarias", "Empleo juvenil", "Participación ciudadana"],
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "@mariaalejandra_r",
        instagram: "@mariarodriguez.oficial",
        facebook: "María Alejandra Rodríguez"
      }
    },
    {
      id: 2,
      name: "Carlos Andrés Morales",
      age: 24,
      position: "Candidato #2",
      education: "Ingeniero Industrial - Universidad Javeriana",
      description: "Enfocado en la innovación tecnológica y el desarrollo económico sostenible.",
      proposals: ["Tecnología para todos", "Emprendimiento juvenil", "Medio ambiente"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "@carlosmorales24",
        instagram: "@carlosandres.morales",
        facebook: "Carlos Andrés Morales"
      }
    },
    {
      id: 3,
      name: "Valentina Castro López",
      age: 21,
      position: "Candidata #3",
      education: "Comunicación Social - Universidad Externado",
      description: "Defensora de los derechos de las mujeres y la equidad de género en la política.",
      proposals: ["Equidad de género", "Comunicación ciudadana", "Cultura y arte"],
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "@valentinacastro",
        instagram: "@vale.castro.lopez",
        facebook: "Valentina Castro López"
      }
    }
  ];

  const activities = [
    {
      id: 1,
      title: "Encuentro Juvenil Liberal",
      date: "15 de Febrero, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Centro de Convenciones Gonzalo Jiménez de Quesada",
      description: "Gran encuentro con jóvenes liberales de todo el país para discutir propuestas y conocer a nuestros candidatos.",
      type: "Presencial"
    },
    {
      id: 2,
      title: "Debate Virtual: El Futuro de Colombia",
      date: "22 de Febrero, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Transmisión en vivo por redes sociales",
      description: "Debate entre nuestros tres candidatos sobre las principales problemáticas que afectan a la juventud colombiana.",
      type: "Virtual"
    },
    {
      id: 3,
      title: "Foro: Participación Juvenil en la Política",
      date: "1 de Marzo, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Universidad Nacional de Colombia",
      description: "Espacio de diálogo sobre la importancia de la participación de los jóvenes en la construcción de políticas públicas.",
      type: "Presencial"
    },
    {
      id: 4,
      title: "Cierre de Campaña",
      date: "8 de Marzo, 2025",
      time: "5:00 PM - 10:00 PM",
      location: "Plaza de Bolívar, Bogotá",
      description: "Gran evento de cierre con música, propuestas y la participación de todos nuestros candidatos.",
      type: "Presencial"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Vote className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Partido Liberal Colombiano</h1>
                <p className="text-red-100 text-sm md:text-base">Consejo Juvenil 2025</p>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-6">
              <a href="#partido" className="hover:text-red-200 transition-colors">Nuestro Partido</a>
              <a href="#candidatos" className="hover:text-red-200 transition-colors">Candidatos</a>
              <a href="#actividades" className="hover:text-red-200 transition-colors">Actividades</a>
              <a href="#contacto" className="hover:text-red-200 transition-colors">Contacto</a>
            </nav>
            <button className="lg:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              El Futuro de Colombia
              <span className="block text-red-200">Está en Nuestras Manos</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-red-100 leading-relaxed px-4">
              Conoce a nuestros tres candidatos al Consejo Juvenil, comprometidos con los valores liberales 
              de libertad, igualdad y progreso social.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#candidatos" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
                Conocer Candidatos
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </a>
              <a href="#partido" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                Sobre el Partido Liberal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partido Section */}
      <section id="partido" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">Partido Liberal Colombiano</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Más de 170 años de historia defendiendo la libertad, la democracia y el progreso social en Colombia.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Justicia Social</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Trabajamos por una sociedad más equitativa donde todos los colombianos tengan las mismas oportunidades de progreso.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Participación Juvenil</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Los jóvenes son el motor del cambio. Promovemos su participación activa en la construcción del país.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Modernización</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Impulsamos la innovación, la tecnología y la modernización del Estado para un Colombia competitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section id="candidatos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nuestros Candidatos</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tres jóvenes líderes comprometidos con el futuro de Colombia y los ideales del liberalismo.
            </p>
          </div>
          
          {/* Pyramid Layout */}
          <div className="max-w-6xl mx-auto">
            {/* First Row - Single Candidate */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-sm">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={candidates[0].image} 
                      alt={candidates[0].name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {candidates[0].position}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{candidates[0].name}</h4>
                    <p className="text-red-600 font-semibold mb-1">{candidates[0].age} años</p>
                    <p className="text-gray-600 text-sm mb-4">{candidates[0].education}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{candidates[0].description}</p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 mb-3">Propuestas principales:</h5>
                      <div className="flex flex-wrap gap-2">
                        {candidates[0].proposals.map((proposal, index) => (
                          <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                            {proposal}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h5 className="font-semibold text-gray-800 mb-3">Síguenos en redes:</h5>
                      <div className="flex space-x-3">
                        <a href={`https://twitter.com/${candidates[0].social.twitter.replace('@', '')}`} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors group">
                          <Twitter className="w-4 h-4" />
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity absolute" />
                        </a>
                        <a href={`https://instagram.com/${candidates[0].social.instagram.replace('@', '')}`}
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors group">
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a href={`https://facebook.com/${candidates[0].social.facebook}`}
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors group">
                          <Facebook className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Row - Two Candidates */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {candidates.slice(1).map((candidate) => (
                <div key={candidate.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={candidate.image} 
                      alt={candidate.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {candidate.position}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{candidate.name}</h4>
                    <p className="text-red-600 font-semibold mb-1">{candidate.age} años</p>
                    <p className="text-gray-600 text-sm mb-4">{candidate.education}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{candidate.description}</p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 mb-3">Propuestas principales:</h5>
                      <div className="flex flex-wrap gap-2">
                        {candidate.proposals.map((proposal, index) => (
                          <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                            {proposal}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h5 className="font-semibold text-gray-800 mb-3">Síguenos en redes:</h5>
                      <div className="flex space-x-3">
                        <a href={`https://twitter.com/${candidate.social.twitter.replace('@', '')}`} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a href={`https://instagram.com/${candidate.social.instagram.replace('@', '')}`}
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a href={`https://facebook.com/${candidate.social.facebook}`}
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                          <Facebook className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="actividades" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">Próximas Actividades</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Únete a nuestros eventos y actividades para conocer más sobre nuestras propuestas y candidatos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        activity.type === 'Virtual' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h4>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-red-500" />
                    <span className="text-sm md:text-base">{activity.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-red-500" />
                    <span className="text-sm md:text-base">{activity.time}</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <Location className="w-4 h-4 mr-3 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">{activity.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                  {activity.description}
                </p>
                
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm md:text-base">
                  Más Información
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">¡Tu Voz Importa!</h3>
          <p className="text-lg md:text-xl mb-8 text-red-100 px-4">
            Únete al cambio que Colombia necesita. Vota por el futuro liberal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              <Star className="w-5 h-5 inline-block mr-2" />
              Registrarme para Votar
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contacto</h3>
            <p className="text-lg md:text-xl text-gray-600 px-4">¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Email</h4>
              <p className="text-gray-600 text-sm md:text-base">consejojuvenil@liberal.org.co</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Teléfono</h4>
              <p className="text-gray-600 text-sm md:text-base">+57 (1) 234-5678</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Ubicación</h4>
              <p className="text-gray-600 text-sm md:text-base">Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <Vote className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold">Partido Liberal Colombiano</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Construyendo un futuro mejor para Colombia a través de los valores liberales de libertad, 
                igualdad y justicia social.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2">
                <li><a href="#partido" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Nuestro Partido</a></li>
                <li><a href="#candidatos" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Candidatos</a></li>
                <li><a href="#actividades" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Actividades</a></li>
                <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Síguenos</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-300 text-sm md:text-base">
              © 2025 Partido Liberal Colombiano - Consejo Juvenil. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;