// import React from 'react';
// import { i } from 'framer-motion/client';
import { Users, BookOpen, Calendar, GraduationCap, MapPin, Coffee } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: "Rencontres mensuelles",
      description: "Échanges et partages d'expériences entre membres. Ces rencontres permettent de créer des liens durables, de partager les défis du quotidien et de trouver des solutions ensemble dans un cadre convivial.",
      icon: Users,
      color: "green",
      frequency: "Chaque premier samedi du mois",
      location: "Centre culturel de Laâyoune",
      image: "#" 
    },
    {
      title: "Célébrations des fêtes nationales",
      description: "Célébration des fêtes nationales et culturelles du Burkina Faso et du Maroc. Ces événements sont l'occasion de découvrir les traditions, la gastronomie et les coutumes des deux pays.",
      icon: Users,
      color: "red",
      frequency: "Chaque fête est célébrée particulièrement, par exemple : les fêtes réligieuses, les fêtes de l'indépendance, etc.",
      location: "Place de la nation de Laâyoune",
      image: "/indep24.jpg" //
    },
    {
      title: "Célébrations des fêtes réligieuses",
      description: "Célébration des fêtes réligieuses et culturelles du Burkina Faso et du Maroc. Ce sont des moments de partage et de convivialité, où les membres se réunissent pour célébrer ensemble.",
      icon: Users,
      color: "red",
      frequency: "Chaque fête est célébrée particulièrement, par exemple : les fêtes réligieuses, les fêtes de l'indépendance, etc.",
      location: "Place de la nation de Laâyoune",
      image: "/fete.jpg"
    },
    {
      title: "Journée Burkimbila 3 - 2025",
      description: "Célébration de la culture burkinabè 2025 à Kénitra. Cette journée est dédiée à la promotion de la culture burkinabè à travers des activités culturelles, culinaires et artistiques.",
      icon: Users,
      color: "red",
      frequency: "Chaque fête est célébrée particulièrement, par exemple : les fêtes réligieuses, les fêtes de l'indépendance, etc.",
      location: "Kénitra, Maroc",
      image: "/membres4.jpg"
    },
    {
      title: "Événements culturels",
      description: "Découverte de la culture locale sahraouie et partage de la culture burkinabè. Organisation de soirées culturelles, festivals culinaires, et visites guidées de la région de Laâyoune.",
      icon: Calendar,
      color: "yellow",
      frequency: "Trimestriel",
      location: "Divers lieux à Laâyoune",
      image: "/sport.jpg"
    },
    {
      title: "Visites découverte",
      description: "Organisation de visites touristiques et culturelles dans la région de Laâyoune et ses environs pour mieux connaître le patrimoine local et créer des souvenirs inoubliables.",
      icon: MapPin,
      color: "yellow",
      frequency: "Mensuel",
      location: "Région de Laâyoune-Sakia El Hamra",
      image: "/membres1.jpg"
    },
    {
      title: "Ateliers pratiques",
      description: "Aide à la recherche de logement, conseils pour les démarches administratives, orientation pour l'ouverture de comptes bancaires, aide à la compréhension du système de santé marocain.",
      icon: BookOpen,
      color: "red",
      frequency: "Bi-mensuel",
      location: "Locaux de l'association"
    },
    {
      title: "Soutien académique",
      description: "Tutorat et séances de révision en groupe pour les étudiants. Aide aux devoirs, préparation aux examens, et mentorat par des étudiants expérimentés des cycles supérieurs.",
      icon: GraduationCap,
      color: "gray",
      frequency: "Hebdomadaire",
      location: "Bibliothèque universitaire"
    },
    {
      title: "Cafés débats",
      description: "Sessions informelles de discussion sur des sujets d'actualité, d'orientation professionnelle et de développement personnel pour enrichir nos perspectives.",
      icon: Coffee,
      color: "gray",
      frequency: "Bi-hebdomadaire",
      location: "Cafés partenaires"
    }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-green-900 dark:via-white dark:to-red-900">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/indep24.jpg")' //https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos Activités
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Un programme riche et varié pour accompagner chaque étudiant dans sa réussite 
            académique et son intégration sociale à Laâyoune
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programme d'accompagnement complet
            </h2>
            <p className="text-xl text-gray-600">
              Des activités pensées pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-${activity.color}-600`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-${activity.color}-100 rounded-lg mr-4`}>
                      <activity.icon className={`h-8 w-8 text-${activity.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{activity.title}</h3>
                  </div>

                  {/* image de l'activité */}
                  <div className="relative">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-74 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{activity.frequency}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  
                  <button className={`mt-6 w-full bg-${activity.color}-600 hover:bg-${activity.color}-700 text-white py-3 rounded-lg font-medium transition-colors duration-300`}>
                    Participer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rejoignez notre communauté
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Participez à nos activités et créez des liens durables avec d'autres étudiants burkinabè à Laâyoune
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
};

export default Activities;