import React, { useState } from 'react';
import { UserPlus, Check, User, Mail, Phone, MapPin, GraduationCap, Calendar } from 'lucide-react';

const Inscription = () => {
  interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  address: string;
  university: string;
  level: string;
  field: string;
  year: string;
  motivation: string;
  activities: string[];
  hasReadRules: boolean;
  acceptsTerms: boolean;
}
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: 'Burkinabè',
    address: '',
    university: '',
    level: '',
    field: '',
    year: '',
    motivation: '',
    activities: [],
    hasReadRules: false,
    acceptsTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'activities') {
        const activityValue = value;
        setFormData(prev => ({
          ...prev,
          activities: checked 
            ? [...prev.activities, activityValue]
            : prev.activities.filter(activity => activity !== activityValue)
        }));
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const universities = [
    'EST Laâyoune',
    'ISPITS Laâyoune',
    'CMC Laâyoune',
    'ISTA Laâyoune',
    'CPGE Laâyoune',
    'Faculté de la médecine de Laâyoune',
    'Institut Supérieur de Commerce',
    'École Supérieure de Technologie et de l\'Informatique',
    'Autre'
  ];

  const levels = [
    'Licence 1',
    'Licence 2', 
    'Licence 3',
    'Master 1',
    'Master 2',
    'Doctorat',
    'Formation professionnelle - 1ère année',
    'Formation professionnelle - 2ème année',
  ];

  const activities = [
    'Rencontres mensuelles',
    'Ateliers pratiques',
    'Événements culturels',
    'Soutien académique',
    'Visites découverte',
    'Cafés débats',
    'Activités sportives'
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Inscription réussie !
          </h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre inscription à l'AEBM-LAÂYOUNE. Nous vous contacterons bientôt pour finaliser votre adhésion.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-300 via-orange-200 to-teal-100 dark:from-green-900 dark:via-yellow-400 dark:to-red-900">
      {/* Hero Section */}
      <div 
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rejoignez l'AEBM-LAÂYOUNE
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Devenez membre de notre communauté solidaire d'étudiants burkinabè à Laâyoune
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= step 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? 'bg-green-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentStep === 1 && "Informations personnelles"}
            {currentStep === 2 && "Informations académiques"}
            {currentStep === 3 && "Motivation et engagement"}
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+212 6XX-XXXXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Date de naissance *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationalité
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    Adresse à Laâyoune *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Votre adresse complète à Laâyoune"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <GraduationCap className="h-4 w-4 inline mr-2" />
                      Université/École *
                    </label>
                    <select
                      name="university"
                      required
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre établissement</option>
                      {universities.map((uni) => (
                        <option key={uni} value={uni}>{uni}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Niveau d'études *
                    </label>
                    <select
                      name="level"
                      required
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre niveau</option>
                      {levels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Domaine d'études *
                    </label>
                    <input
                      type="text"
                      name="field"
                      required
                      value={formData.field}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ex: Informatique, Économie, Ingénierie..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Année académique *
                    </label>
                    <input
                      type="text"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ex: 2024-2025"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Motivation and Engagement */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pourquoi souhaitez-vous rejoindre l'AEBM-LAÂYOUNE ? *
                  </label>
                  <textarea
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Expliquez vos motivations et ce que vous espérez apporter à l'association..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Quelles activités vous intéressent le plus ? (Plusieurs choix possibles)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activities.map((activity) => (
                      <label key={activity} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="activities"
                          value={activity}
                          onChange={handleChange}
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="hasReadRules"
                      required
                      checked={formData.hasReadRules}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      J'ai lu et j'accepte le règlement intérieur de l'association *
                    </span>
                  </label>

                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="acceptsTerms"
                      required
                      checked={formData.acceptsTerms}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      J'accepte que mes données personnelles soient utilisées dans le cadre des activités de l'association *
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                disabled={currentStep === 1}
              >
                Précédent
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Finaliser l'inscription
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi rejoindre l'AEBM-LAÂYOUNE ?
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Réseau solidaire</h3>
              <p className="text-gray-600">
                Intégrez une communauté bienveillante d'étudiants burkinabè qui s'entraident
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Soutien académique</h3>
              <p className="text-gray-600">
                Bénéficiez d'un accompagnement personnalisé pour votre réussite scolaire
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intégration culturelle</h3>
              <p className="text-gray-600">
                Participez à des événements qui enrichissent votre expérience à Laâyoune
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inscription;