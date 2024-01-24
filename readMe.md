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
- projects.html : page qui contient tous les projets
- teams.html : page qui contients tous les membres qui ont contribué au projet
- assets : contient tous les fichiers annexes du projet
  - appstructs : contient les structures et informations d'équipes et de projets
  - fichiers : contient les fichiers pdf téléchargeables
  - fonts : contient les polices du projets
  - img : contient l'ensemble des images du projet
  -icons : contient les icônes du projet
- script : contient les fichiers js qui servent au fonctionnement du projet
- styles : contient les fichiers de style du projet

## Mise à jour

Accéder au [guide](./guide.md) pour effectuer des mises à jour sur le site.

## Mettre en prod

- se connecter au vpn d'Ynov

- ouvrir un terminal
- se connecter en ssh : `ssh fabweb@10.4.1.8`

- se déplacer dans le dossier `cd /var/www/ylab.fr/ydetailedfigures.ylab.fr/`

- vérifier que le .git existe avec `ls -la`

- changer d'user pour fabclt `sudo su fabclt`

- `git pull`

- vérifier que le site est bien à jour
