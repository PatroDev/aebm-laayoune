// import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Bureau = () => {
  const members = [
    {
      name: "Assane SIDIBE",
      role: "Secrétaire général",
      description: "Assane est passionnée par le développement des communautés étudiantes et travaille à renforcer les liens entre les membres.",
      image: "/SIDIBÉ_Assane-removebg-preview.png",
      email: "assane.sidibe@aebmlaayoune.com"
    },
    // {
    //   name: "Zongo Thomas Ulrich Osias",
    //   role: "Secrétaire général adjoint",
    //   description: "Osias s'occupe de l'organisation des événements et veille à ce que chaque membre se sente intégré.",
    //   image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    //   email: "osias.zongo@aebmlaayoune.com"
    // },
    {
      name: "Wilfried T. GARBA",
      role: "Chargé culturel & sportif",
      description: "Wilfried organise des événements culturels et académiques pour enrichir l'expérience des membres. Il développe des partenariats avec des entreprises et des institutions pour soutenir les activités sportives de l'association.",
      image: "/Wilfried_Garba-removebg-preview.png",
      email: "Wilfried.garba@aebmlaayoune.com"
    },
    {
      name: "Simon Pierre SANDWIDI",
      role: "Trésorier",
      description: "Simon gère les finances de l'association et s'assure que les ressources sont utilisées de manière optimale.",
      image: "/Simon-removebg-preview.png",
      email: "Simon.pierre@aebmlaayoune.com"
    },
    {
      name: "Faïzatou OUATTARA",
      role: "Responsable de communication",
      description: "Faïzatou est responsable de la communication interne et de la gestion des documents de l'association.",
      image: "/Faïzatou-removebg-preview.png",
      email: "Faizatou.ouat@aebmlaayoune.com"
    },
    {
      name: "Yahasine NAPON",
      role: "Commissaire aux comptes",
      description: "Yahasine œuvre à renforcer les liens entre les membres tout en garantissant la transparence et la fiabilité des états financiers.",
      image: "/NAPON_Yahasine-removebg-preview.png",
      email: "yahasine.napon@aebmlaayoune.com"
    },
    // {
    //   name: "Ouedraogo Guetawende Serge",
    //   role: "Chargé sportif",
    //   description: "Serge développe des partenariats avec des entreprises et des institutions pour soutenir les activités sportives de l'association.",
    //   image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    //   email: "serge.ouedraogo@aebmlaayoune.com"
    // }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-green-900 dark:via-white dark:to-red-900">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Notre Bureau
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Une équipe dévouée et passionnée au service de la communauté étudiante burkinabè de Laâyoune
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              L'équipe dirigeante 2024-2025
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Des leaders engagés pour la réussite de tous les membres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-74 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-green-100 hover:bg-green-200 rounded-full text-green-600 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full text-red-600 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="tel:+212772491039"
                      className="flex items-center justify-center w-10 h-10 bg-yellow-100 hover:bg-yellow-200 rounded-full text-yellow-600 transition-colors duration-300"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résumé des bureaux - Section */}
      <section className="py-16 bg-stone-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Bureau 2024-2025*/}
            <div className='mb-12 rounded shadow p-6 bg-red-200'>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Bureau 2024-2025
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Le nouveau bureau de l'AEBM Laâyoune est composé de membres dynamiques et engagés, prêts à relever les défis de l'année académique 2024-2025.
              </p>
              <img
                src="/Bureau.png" //https://drive.google.com/file/d/1ou8CHsIKuJuspBO580WtKdQ-QO2VkTsA/view?usp=drive_link
                alt="Nouveau Bureau AEBM Laâyoune"
                className="w-full object-cover rounded-lg shadow-lg mb-8"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Ce bureau est composé de membres passionnés par le développement des communautés étudiantes et engagés à renforcer les liens entre les membres. Ils travaillent ensemble pour organiser des événements culturels, sportifs et académiques, tout en veillant à la transparence et à la fiabilité des états financiers de l'association.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Le bureau est également dédié à l'intégration des nouveaux membres et à la création d'un environnement inclusif et solidaire pour tous les étudiants burkinabè de Laâyoune
              </p>
            </div>

            {/* Bureau 2023-2024 */}
            <div className='mb-12 rounded shadow p-6 bg-yellow-200'>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Bureau 2023-2024
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Le bureau de l'année académique 2023-2024 a été un pilier essentiel pour l'AEBM Laâyoune, mettant en place des initiatives qui ont renforcé la communauté étudiante.
              </p>
              <img
                src="/Bureau_23-24_AEBM-L.png"
                alt="Bureau AEBM Laâyoune 2023-2024"
                className="w-full  object-cover rounded-lg shadow-lg mb-8"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Ce bureau a su organiser des événements marquants, promouvoir la solidarité entre les membres et assurer une communication efficace au sein de l'association. Leur engagement a permis de créer un environnement propice à l'épanouissement de chaque étudiant burkinabè à Laâyoune.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Grâce à leur travail acharné, l'AEBM Laâyoune a pu atteindre de nouveaux sommets, en renforçant les liens entre les membres et en favorisant une culture de solidarité et d'entraide.
              </p>
            </div>

            {/* Bureau  2022-2023*/}
            <div className='mb-12 rounded shadow p-6 bg-green-200'>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Bureau 2022-2023
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Le bureau de l'année académique 2022-2023 a été le fondement de l'AEBM Laâyoune, posant les bases d'une communauté étudiante dynamique et solidaire.
              </p>
              <img
                src="/Bureau2022.png"
                alt="Bureau AEBM Laâyoune 2022-2023"
                className="w-full object-cover rounded-lg shadow-lg mb-8"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Ce bureau a été à l'origine de nombreuses initiatives visant à rassembler les étudiants burkinabè, à promouvoir la culture et à organiser des événements mémorables. Leur vision et leur leadership ont permis de créer un environnement accueillant pour tous les membres.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Leur travail a jeté les bases d'une association forte et unie, prête à relever les défis futurs et à continuer de croître.
              </p>
            </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre mission
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Solidarité</h3>
              <p className="text-gray-600">
                Créer un réseau de soutien mutuel entre les étudiants burkinabè de Laâyoune
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Réussite</h3>
              <p className="text-gray-600">
                Accompagner chaque membre dans sa réussite académique et professionnelle
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intégration</h3>
              <p className="text-gray-600">
                Faciliter l'intégration culturelle et sociale dans la région de Laâyoune
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bureau Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contactez notre bureau
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter !
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Nous écrire
          </button>
        </div>
      </section>
    </div>
  );
};

export default Bureau;