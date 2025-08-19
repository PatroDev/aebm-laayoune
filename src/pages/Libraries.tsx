// import React from 'react';
import { BookOpen, Clock, MapPin, Wifi, Coffee, Users, Calendar, Phone } from 'lucide-react';

const Libraries = () => {
  const libraries = [
    {
      name: "Laâyoune Learning Center",
      address: "Quartier Al-Wifaq, Laâyoune",
      phone: "+212 XXX-XXXXX",
      hours: {
        weekdays: "9h00 - 18h00",
        weekend: "9h00 - 14h00"
      },
      services: ["Formation continue", "Espace lecture", "Ateliers de compétences", "Soutien scolaire"],
      specialties: ["Développement personnel", "Langues", "Entrepreneuriat", "Technologies"],
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Club d’Anglais IWS-Rahal",
      address: "Centre Rahal, Avenue Smara, Laâyoune",
      phone: "+212 XXX-XXXXX",
      hours: {
        weekdays: "16h00 - 20h00",
        weekend: "10h00 - 17h00"
      },
      services: ["Cours d’anglais", "Clubs de conversation", "Préparation TOEFL/IELTS", "Événements culturels"],
      specialties: ["Langue anglaise", "Communication", "Soft skills"],
      image: "https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    // {
    //   name: "Institut Français de Laâyoune",
    //   address: "Rue Al Mouqaouama, Laâyoune",
    //   phone: "+212 XXX-XXXXX",
    //   hours: {
    //     weekdays: "9h00 - 17h00",
    //     weekend: "9h00 - 13h00"
    //   },
    //   services: ["Bibliothèque française", "Médiathèque", "Ateliers culturels", "Cours de langue"],
    //   specialties: ["Littérature française", "Sciences humaines", "Arts", "Cinéma"],
    //   image: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    // },
    // {
    //   name: "Centre de Ressources Universitaire de Laâyoune",
    //   address: "Campus Universitaire, Route de Smara",
    //   phone: "+212 XXX-XXXXX",
    //   hours: {
    //     weekdays: "8h30 - 18h30",
    //     weekend: "Fermé"
    //   },
    //   services: ["Consultation libre", "Salle de travail en groupe", "Accès WiFi", "Documentation académique"],
    //   specialties: ["Sciences", "Économie", "Droit", "Médecine"],
    //   image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    // }
  ];

  const studyTips = [
    {
      icon: Clock,
      title: "Planifiez vos sessions",
      description: "Réservez des créneaux fixes pour vos révisions en bibliothèque"
    },
    {
      icon: Users,
      title: "Étudiez en groupe",
      description: "Organisez des groupes d'étude avec d'autres membres AEBM"
    },
    {
      icon: Coffee,
      title: "Prévoyez des pauses",
      description: "Les bibliothèques ont souvent des espaces détente"
    },
    {
      icon: Wifi,
      title: "Profitez du WiFi",
      description: "Accès internet gratuit dans toutes les bibliothèques listées"
    }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-green-900 dark:via-yellow-400 dark:to-red-900">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bibliothèques
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez les meilleures bibliothèques de Laâyoune pour vos études et recherches
          </p>
        </div>
      </div>

      {/* Libraries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bibliothèques recommandées
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Des espaces d'étude adaptés à tous vos besoins académiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {libraries.map((library, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img
                  src={library.image}
                  alt={library.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{library.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-green-600 mr-3" />
                      <span>{library.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 text-green-600 mr-3" />
                      <span>{library.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <div>Lun-Ven: {library.hours.weekdays}</div>
                        <div>Week-end: {library.hours.weekend}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Services disponibles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {library.services.map((service, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Spécialités:</h4>
                    <div className="flex flex-wrap gap-2">
                      {library.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conseils pour bien étudier
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyTips.map((tip, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEBM Study Groups Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Groupes d'étude AEBM
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rejoignez nos sessions d'étude collective organisées régulièrement dans ces bibliothèques
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sessions régulières</h3>
                {/* <p className="text-gray-600">Tous les mardis et jeudis de 14h à 17h</p> */}
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tutorat</h3>
                <p className="text-gray-600">Accompagnement par des étudiants expérimentés</p>
              </div>
              <div className="text-center">
                <Coffee className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Convivialité</h3>
                <p className="text-gray-600">Pauses thé et échanges entre membres</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d'un partenaire d'étude ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour trouver d'autres membres AEBM qui étudient dans votre domaine
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Rejoindre un groupe d'étude
          </button>
        </div>
      </section>
    </div>
  );
};

export default Libraries;