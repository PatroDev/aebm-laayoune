// import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rabiatou Traoré",
      role: "Étudiante en économie",
      university: "Université Ibn Tofail",
      content: "Grâce à l'AEBM-LAÂYOUNE, j'ai trouvé un logement rapidement et rencontré des amis qui m'ont aidé à m'adapter à mon nouvel environnement. La solidarité entre membres est exceptionnelle.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Ouattara Adama",
      role: "Étudiant en master",
      university: "ENSA Laâyoune",
      content: "Les ateliers pratiques m'ont beaucoup aidé pour mes démarches administratives. Je recommande vivement cette association ! L'accompagnement est personnalisé et efficace.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Aurélie Kaboré",
      role: "Étudiante en master",
      university: "ENSA Laâyoune",
      content: "Rejoindre l'AEBM-LAÂYOUNE a été une expérience incroyable qui a transformé mon parcours d'étudiant au Maroc. Dès mon arrivée, j'ai trouvé une communauté bienveillante qui m'a aidé à m'intégrer, que ce soit sur le plan académique, social ou administratif.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Ouedraogo Darius",
      role: "Étudiant en master",
      university: "Université Ibn Tofail",
      content: "Grâce aux événements organisés, j'ai pu rencontrer d'autres étudiants dans la même situation que moi, échanger sur nos expériences et surmonter ensemble les défis de la vie à l'étranger. Les sessions d'entraide, les ateliers professionnels et les activités culturelles m'ont non seulement permis d'élargir mon réseau, mais aussi de mieux comprendre la culture locale.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Sawadogo Marie",
      role: "Étudiante en licence",
      university: "Faculté des Sciences Laâyoune",
      content: "L'AEBM m'a permis de ne pas me sentir seule dans cette grande ville. Les rencontres mensuelles sont un véritable réconfort et les conseils reçus m'ont aidée à mieux gérer mes études.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Compaoré Ibrahim",
      role: "Étudiant en informatique",
      university: "ENSA Laâyoune",
      content: "Le soutien académique proposé par l'association m'a été d'une aide précieuse. Les séances de tutorat m'ont permis d'améliorer mes résultats et de créer des liens avec des étudiants plus expérimentés.",
      rating: 5,
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-blue-50 via-orange-100 to-teal-50 dark:from-green-900 dark:via-white dark:to-red-900">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Témoignages
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez les expériences de nos membres et comment l'AEBM-LAÂYOUNE 
            a transformé leur parcours étudiant au Maroc
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils témoignent de leur expérience
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Des histoires inspirantes de solidarité et de réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                <div className="flex items-start mb-6">
                  <Quote className="h-8 w-8 text-green-600 mr-4 flex-shrink-0" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-green-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre impact en chiffres
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Membres satisfaits", color: "green" },
              { number: "95%", label: "Taux de réussite", color: "red" },
              { number: "200+", label: "Heures de soutien", color: "yellow" },
              { number: "24+", label: "Événements organisés", color: "gray" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Votre témoignage nous intéresse !
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Partagez votre expérience avec l'AEBM-LAÂYOUNE et inspirez d'autres étudiants
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Partager mon témoignage
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;