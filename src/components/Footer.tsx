// import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
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
                  <a href="#" className="text-gray-300 hover:text-green-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-green-600 transition-colors">
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