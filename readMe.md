# Y Detailed Figures

Y detailed Figures est un projet étudiant qui s'inscrit dans le cadre des Ydays Lyon.
Créer en 2021, les étudiant ont 2 semestres pour créer une ou plusieurs figurines en 3D et les imprimer.

Ce répertoire contient le site vitrine du projet. Le site a pour but de présenter le projet et le travail réalisé par les étudiants.

https://ydetailedfigures.ylab.fr/index.html

![image](https://user-images.githubusercontent.com/99044194/236884612-c6f1059b-1b88-465c-aeaa-b1ed376cc595.png)


## Le projet

Le Projet Y Detailed Figures à été lancé en 2021 par un groupe de 7 étudiants.
L'objectif du projet est de modéliser des figurines en 3D pour les imprimer grâce à une imprimante 3D
Y Detailed Figures s'inscrit dans le cadre des projet Ydays.
Les étudiants ont donc le temps d'une année scolaire pour créer un concept art, le modéliser puis l'imprimer.

![image](https://user-images.githubusercontent.com/99044194/236884287-060903c5-ae13-47b8-8322-c0d664eacb90.png)

## Le répertoire

- index.html : page d'accueil du site
- aPorpos.html : page qui explique comment les ficgurines sont créées
- projets.html : page qui répertorie toutes les projets
- assets : contient tous fichiers annexes du projet
  - consts : contient les fichiers de contantes (équipe et projets)
  - fichiers : contient les fichiers pdf
  - fonts : contient les polices du projets
  - images : contient l'ensemble des images du projet
- fonctions : contient les fichiers js qui servent au fonctionnement du projet
- styles : contient les fichiers de style du projet

## Ajouter un projet

- aller dans le fichier de constante : `assets\consts\constsFigurines.js`

- copier / coller l'exemple commenter :

```
Modéle de l'objet pour chaque projet
{
     "id"                    : 1,
     "nom"                   : '', // Nom de la figurine
     "année"                 : "", // Année de création
     "brief"                 : '', // brève description
     "description"           : '', //description compléte
     "artiste"               : '', //artiste
     "imageCardUrl"          : '', //photo presentation image card
     "charaUrl"              : '', // lien image chara design
     "inspiUrl"              : '', // lien image planche d'inspiration
     "visualisationUrl"      : [''], //tableau de lien de rendu 3d
     "figurineUrl"           : [''], //tableau de lien de photos de figurine réalisée
     "telechargementDispo"   : true, // booléen - est-ce que l'artiste accepte que son projet soit télechargé
     "fichierModel3dUrl"     : '' //lien vers le fichier du modèle 3D
}
```

- remplir l'objet avec les données du projet
- créer et remplir le dossier `assets\images\photoProjets\Nom_du_Projet`

## Mettre en prod

- se connecter au vpn d'Ynov

- ouvrir un terminal
- se connecter en ssh : `ssh fabweb@10.4.1.8`

- se déplacer dans le dossier `cd /var/www/ylab.fr/ydetailedfigures.ylab.fr/`

- vérifier que le .git existe avec `ls -la`

- changer d'user pour fabclt `sudo su fabclt`

- `git pull`

- vérifier que le site est bien à jour
