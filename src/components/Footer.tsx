// import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Téléchargements */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          📑 Ressources à télécharger
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Accédez aux guides officiels pour mieux comprendre et utiliser la plateforme <br />
          que vous soyez <span className="font-semibold">étudiant</span> ou <span className="font-semibold">développeur contributeur</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guide Étudiants */}
          <a
            href="/AEBM_Laayoune_Guide_Etudiants.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition transform"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                👥 Guide Étudiants
              </h3>
              <p className="text-gray-500 mb-4">
                Découvrez le but, les objectifs et comment tirer parti du site.
              </p>
              <button onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/AEBM_Laayoune_Guide_Etudiants.pdf'; // chemin relatif depuis le dossier public
                      link.download = 'AEBM_Laayoune_Guide_Etudiants.pdf'; // nom du fichier lors du téléchargement
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }} 
                    className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700">
                <Download className="w-5 h-5 mr-2" />
                Télécharger
              </button>
            </div>
          </a>

          {/* Guide Développeurs */}
          <a
            href="/AEBM_Laayoune_Guide_Developpeurs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition transform"
          >
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                👨‍💻 Guide Développeurs
              </h3>
              <p className="text-gray-500 mb-4">
                Instructions pour contribuer au projet et installer localement.
              </p>
              <button onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/AEBM_Laayoune_Guide_Developpeurs.pdf'; // chemin relatif depuis le dossier public
                      link.download = 'AEBM_Laayoune_Guide_Developpeurs.pdf'; // nom du fichier lors du téléchargement
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }} 
                    className="inline-flex items-center bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700">
                <Download className="w-5 h-5 mr-2" />
                Télécharger
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 via-white to-red-600 rounded-full flex items-center justify-center">
                {/* <span className="text-white font-bold text-xl">A</span> */}
              <img src="/logo_rm_bg.png" alt="AEBM Logo" className="w-full h-full" />
              </div>
              <div>
                <span className="text-2xl font-bold">AEBM LAÂYOUNE</span>
                <p className="text-gray-300 text-sm">Association des Étudiants et Stagiaires Burkinabè au Maroc</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Nous rassemblons les étudiants burkinabè de Laâyoune pour créer un réseau solidaire 
              et favoriser leur intégration et réussite au Maroc.
            </p>
            
            {/* Partenaires */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Nos partenaires</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                  {/* <span className="text-xs font-bold text-white">BF</span> */}
                  <img src="/Burkina Faso Flag3.jpg" alt="AEBM Logo" className="w-full h-full" />
                </div>
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <img src="/abem-central.png" alt="AEBM Logo" className="w-full h-full" />
                  {/* <span className="text-xs font-bold text-white">AEBM</span> */}
                </div>
                <div className="w-12 h-8 bg-yellow-600 rounded flex items-center justify-center">
                  <img src="/logo-Cesam-1024x1024.jpg" alt="AEBM Logo" className="w-full h-full" />
                  {/* <span className="text-xs font-bold text-white">CESAM</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-300">aebm.laayoune@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-300">+212 XXX-XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-gray-300">Laâyoune, Maroc</span>
              </div>
            </div>
          </div>

          {/* Newsletter et réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Restez connectés</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-2">Newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                  <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors">
                    OK
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-gray-300 text-sm mb-2">Réseaux sociaux</p>
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/profile.php?id=100091566367885" className="text-gray-300 hover:text-green-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/aebm.laayoune" className="text-gray-300 hover:text-green-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-green-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Association des Étudiants et Stagiaires Burkinabè au Maroc-Section de Laâyoune (AEBM-LAÂYOUNE). Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;