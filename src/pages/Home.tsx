import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Calendar, Heart } from 'lucide-react';

const Home = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  const greetings = [
    { text: "Bienvenue chez AEBM LAÂYOUNE", language: "Français" },
    { text: "Welcome to AEBM LAÂYOUNE", language: "English" },
    { text: "Awdansê anou fê AEBM LAÂYOUNE", language: "Dioula" },
    { text: "Ne waogo, ka yaa AEBM LAÂYOUNE zinga", language: "Mooré" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-gray-900 dark:via-slate-600 dark:to-gray-900">
      {/* Hero Section */}
      <div 
        className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/membres4.jpg")' //https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8 h-20 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold transition-opacity duration-500 text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-yellow-600 to-red-600">
              {greetings[currentGreeting].text}
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-2 text-gray-200">
            Association des Étudiants et Stagiaires Burkinabè au Maroc
          </p>
          <p className="text-lg mb-8 text-gray-300">
            Section Laâyoune - Solidarité, Intégration, Réussite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/activites" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Découvrir nos activités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Nous rejoindre
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-sm mb-2">{greetings[currentGreeting].language}</p>
          <div className="flex space-x-2">
            {greetings.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentGreeting ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* À propos */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-green-900 dark:via-yellow-500 dark:to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qui sommes-nous ?
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vivre et étudier loin de chez soi, c'est une aventure enrichissante… mais aussi un défi ! 
                Entre stress académique, solitude et adaptation culturelle, la santé mentale des étudiants 
                étrangers est souvent mise à rude épreuve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                C'est là qu'intervient l'AEBM-LAÂYOUNE qui a pour mission de rassembler les étudiants 
                burkinabè de Laâyoune, cette ville cosmopolite située dans le grand Sud marocain, 
                loin des autres grandes villes du royaume.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous les soutenons dans leurs démarches académiques et administratives, et créons 
                un réseau solidaire pour favoriser leur intégration et leur réussite dans cette 
                région unique du Maroc.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">20+</h3>
                <p className="text-gray-600">Membres actifs</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24+</h3>
                <p className="text-gray-600">Événements/an</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <BookOpen className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600">Ateliers pratiques</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Heart className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Solidarité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Intro */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-green-900 dark:via-yellow-500 dark:to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Découvrez notre association en vidéo
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Vidéo de la célébration de l'indépendance du BURKINA FASO 🇧🇫  2024 à l'AEBM LAÂYOUNE
            {/* Regardez notre vidéo de présentation pour en savoir plus sur nos activités et notre mission */}
          </p>
          <iframe 
            className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
            src="https://drive.google.com/file/d/1yGSJYJI9QExdnKC5PGdvsPBF0B8p2jRS/preview" //https://drive.google.com/file/d/1yGSJYJI9QExdnKC5PGdvsPBF0B8p2jRS/view?usp=drive_link
            title="Présentation de l'AEBM LAÂYOUNE"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Culturel & Sportif */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 border-t border-gray-200 pt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vidéo Culturel & Sportif
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Vidéo Sportif 2025 à l'AEBM LAÂYOUNE montrant nos activités variées sportives et culturelles
          </p>
          <iframe 
            className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
            src="https://drive.google.com/file/d/157DnVTYk1X4HOYftwUsU9OLnKHnPJdHI/preview" //https://drive.google.com/file/d/157DnVTYk1X4HOYftwUsU9OLnKHnPJdHI/view?usp=drive_link 
            title="Sport à l'AEBM LAÂYOUNE"
            allowFullScreen
          ></iframe>
        </div>

        {/* Les 1ers arrivés */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 border-t border-gray-200 pt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Les initiateurs de L'AEBM LAÂYOUNE
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Vidéo/Image de la première rencontre des membres fondateurs de l'AEBM LAÂYOUNE
          </p>
          {/* <iframe 
            className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
            src="https://drive.google.com/file/d/157DnVTYk1X4HOYftwUsU9OLnKHnPJdHI/preview" //https://drive.google.com/file/d/157DnVTYk1X4HOYftwUsU9OLnKHnPJdHI/view?usp=drive_link 
            title="Fondateurs de l'AEBM LAÂYOUNE"
            allowFullScreen
          ></iframe> */}

          <p className="text-lg text-gray-700 mt-4">
            <strong>Image des membres fondateurs :</strong>
          </p>
          <iframe
            src="https://drive.google.com/file/d/1ou8CHsIKuJuspBO580WtKdQ-QO2VkTsA/preview"
            // width="600"
            // height="400"
            // frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Nouveau Bureau AEBM Laâyoune"
          />

        </div>
      </section>

      {/* Nos activités preview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-green-900 dark:via-white dark:to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos activités principales
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment nous soutenons notre communauté
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Rencontres mensuelles",
                description: "Échanges et partages d'expériences entre membres",
                icon: Users,
                color: "green"
              },
              {
                title: "Ateliers pratiques",
                description: "Aide logement, démarches administratives",
                icon: BookOpen,
                color: "red"
              },
              {
                title: "Événements culturels",
                description: "Découverte culturelle locale et burkinabè",
                icon: Calendar,
                color: "yellow"
              },
              {
                title: "Soutien académique",
                description: "Tutorat et révisions en groupe",
                icon: Heart,
                color: "gray"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <activity.icon className={`h-12 w-12 text-${activity.color}-600 mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  Lire plus
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/activites" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Voir toutes nos activités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;