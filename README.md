# SWYT - Boutique E-commerce

Ceci est un projet SSR avec [Next.js](https://nextjs.org/) pour un site e-commerce qui s'appelle SWYT.

SWYT est une boutique e-commerce de vêtements "oversize" de la marque SWYT. En plus de permettre aux utilisateurs de consulter les produits et de passer des commandes, l'application intègre une fonctionnalité d'avis (SWYT Review) permettant aux clients de donner leur avis sur les articles qu'ils ont achetés.

## Installation

Avant de commencer, assurez-vous d'avoir installé [Node.js](https://nodejs.org) sur votre machine.

1. Clonez le projet depuis GitHub :

```bash
git clone https://github.com/AchrefAwaissi/Swytshop.git
```

2. Accédez au répertoire du projet :

```bash
cd swytshop
```

3. Installez les dépendances du projet :

```bash
npm install
```
4. Créer une base de données MongoDB
Assurez-vous que vous avez une instance de MongoDB en cours d'exécution ou créez-en une sur le cloud (par exemple, MongoDB Atlas).

5. Obtenir le lien de connexion MongoDB
Récupérez le lien de connexion MongoDB de votre base de données. Il devrait ressembler à ceci :

```bash
mongodb://<username>:<password>@<cluster-url>/<database-name>
```
Remplacez <username>, <password>, <cluster-url> et <database-name> par vos propres informations d'identification et noms de base de données.

6. Configurer le fichier next.config.js
Dans le répertoire racine du projet, vous trouverez un fichier appelé next.config.js. Ouvrez ce fichier dans un éditeur de texte et localisez la section qui ressemble à ceci :

```bash
// next.config.js

module.exports = {
  env: {
    MONGODB_URI: 'mongodb://<username>:<password>@<cluster-url>/<database-name>',
  },
  // Autres configurations...
};
```
Remplacez 'mongodb://<username>:<password>@<cluster-url>/<database-name>' par le lien de connexion que vous avez obtenu à l'étape 5.

## Démarrage 

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur.

# Fonctionnalités

- **Catalogue de Produits :** Les utilisateurs peuvent consulter le catalogue complet des produits "oversize" disponibles à l'achat.
- **Recherche de Produits :** Les utilisateurs peuvent effectuer des recherches dans le catalogue de produits pour trouver des articles spécifiques.
- **Filtrage des Produits :** Les utilisateurs peuvent filtrer les produits par catégorie, taille, couleur, etc., pour faciliter leur recherche.
- **Fiche Produit Détaillée :** Chaque produit dispose d'une page détaillée présentant des informations spécifiques, des images, des avis, etc.
- **Ajout au Panier :** Les utilisateurs peuvent ajouter des articles dans leur panier d'achat.
- **Gestion du Panier :** Les utilisateurs peuvent afficher le contenu de leur panier, modifier les quantités et supprimer des articles.
- **Procédure de Paiement :** Les utilisateurs peuvent procéder au paiement des articles présents dans leur panier.
- **Inscription et Connexion :** Les utilisateurs peuvent créer un compte, se connecter avec leurs identifiants, et se déconnecter de l'application.
- **Gestion du Profil :** Les utilisateurs ont la possibilité de visualiser et de modifier leur profil, ainsi que de supprimer leur compte si nécessaire.
- **Avis et Notations :** Les utilisateurs peuvent donner leur avis et attribuer une note aux articles qu'ils ont achetés.

## Contribuer

Nous n'acceptons pas actuellement les contributions externes pour ce projet. Cependant, n'hésitez pas à cloner le projet et à l'utiliser comme base pour vos propres expériences.

## Licence

Ce projet est sous licence [MIT](https://choosealicense.com/licenses/mit/).

## Auteur

- [@Achref](https://www.github.com/AchrefAwaissi)
- [@Jean-Kelly](https://www.github.com/john1340a)
