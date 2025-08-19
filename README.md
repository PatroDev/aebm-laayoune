# 🌍 AEBM Laâyoune – Plateforme Communautaire des Étudiants Burkinabè au Maroc

> 📅 Generated on: 8/19/2025, 12:15:14 PM  
> 🔗 Dépôt officiel : [https://github.com/PatroDev/aebm-laayoune](https://github.com/PatroDev/aebm-laayoune)  

---

## 🎯 Objectif du projet

Ce projet est une **plateforme vitrine multifonctions** développée pour :  
- Offrir une **référence centrale** aux **nouveaux étudiants burkinabè** arrivant à Laâyoune, afin de découvrir la ville, comprendre l’AEBM (Association des Étudiants Burkinabè au Maroc – section Laâyoune) et s’intégrer facilement.  
- Créer un **lieu de mémoire et de valorisation** pour les anciens étudiants qui ont marqué l’association.  
- Permettre aux membres de la communauté de **partager des opportunités** (stages, formations, événements, networking).  
- Favoriser l’**interaction culturelle et académique** avec les structures locales (Laâyoune Learning Center, Institut Français, Club d’Anglais Rahal, etc.).  

---

## ✨ Fonctionnalités principales

- **🏠 Page d’accueil** : présentation de l’association et des objectifs.  
- **👥 Bureau & fondateurs** : photos, témoignages et historique.  
- **📚 Bibliothèques & centres culturels** : répertoire pratique (Laâyoune Learning Center, Club d’Anglais Rahal, Institut Français, etc.).  
- **🎉 Activités** : galeries photo/vidéo des événements (semaine culturelle, sport, intégration…).  
- **🗣️ Témoignages** : récits inspirants d’étudiants pionniers et actuels.  
- **📩 Contact & inscription** : formulaire simple pour rejoindre l’AEBM.  

---

## 👨‍💻 Pour les développeurs

Le front-end est déjà bien avancé, construit avec **React + Vite + TailwindCSS**.  
Toutefois, il reste un espace important pour la **contribution backend** afin de transformer ce site vitrine en **plateforme dynamique**.  

### ⚙️ Pistes de contribution technique
- **Base de données** (au choix selon expertise) :  
  - [Firebase](https://firebase.google.com/) (simple, authentification intégrée, hébergement temps réel).  
  - [Supabase](https://supabase.com/) (open-source, PostgreSQL, API REST/GraphQL).  
  - **Laravel / Node.js + MongoDB** si une stack plus customisée est préférée.  

- **Fonctionnalités à développer** :  
  - Authentification des membres AEBM (Google, Email).  
  - Espace communauté (partage de documents, annonces, opportunités).  
  - Gestion d’événements (calendrier, inscriptions en ligne).  
  - Tableau de bord admin (modération, gestion des contenus).  

- **Contribution front-end** :  
  - Optimisation du design mobile.  
  - Amélioration des animations (Framer Motion).  
  - Accessibilité et SEO.  

---

## 🚀 Installation locale

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/PatroDev/aebm-laayoune.git
   cd aebm-laayoune

Installer les dépendances :

npm install


Lancer le serveur local :

npm run dev


Accéder au site :
Ouvrir http://localhost:5173 dans le navigateur.

📂 Structure du projet
├── public/            # Images & ressources statiques
├── src/               # Code source
│   ├── components/    # Navbar, Footer, etc.
│   ├── pages/         # Pages principales (Home, Activities, Bureau…)
│   ├── App.tsx
│   └── main.tsx
├── index.html         # Entrée principale
├── tailwind.config.js # Config TailwindCSS
├── vite.config.ts     # Config Vite
└── vercel.json        # Déploiement sur Vercel

🤝 Contribution

Forker le projet 🍴

Créer une branche

git checkout -b feature/ma-fonctionnalite


Committer vos changements

git commit -m "Ajout de ... "


Pousser la branche

git push origin feature/ma-fonctionnalite


Créer une Pull Request 🚀

👉 Les discussions techniques et idées peuvent se faire via Issues GitHub.

👥 Équipe & communauté

Ce projet est porté par l’AEBM Laâyoune avec pour ambition de :

Renforcer la solidarité entre étudiants burkinabè au sud du Maroc.

Faciliter l’intégration académique, sociale et culturelle.

Créer une vitrine de référence valorisant nos initiatives et nos réussites.

💡 Rejoindre l’équipe développeurs : contactez aebm-laayoune via GitHub ou directement auprès de l’AEBM.

📌 Licence

Ce projet est open-source sous licence MIT.
Chacun est libre de l’utiliser, l’adapter ou le contribuer pour le bien de la communauté.