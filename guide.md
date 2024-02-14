# Guide de mises à jour YDetailed Figures

Grâce à ce guide, vous allez pouvoir modifier les informations, couleurs ou textes présents sur le site.

Pour pouvoir effectuer des changements sur le projet, vous allez devoir vous connecter sur le compte YDetailedFigures. Ensuite rendez-vous sur le fichier que vous souhaitez modifier et cliquez sur le crayon comme indiqué ci-dessous.

[!Github edit btn]()

Une fois les modifications effectuées, vérifiez bien que vous n'ayez pas modifié quelque chose involontairement et cliquez sur le bouton "commit changes".

A ce moment, une pop-up va s'ouvrir. Dans le zone de texte "commit message", écrivez succinctement et en anglais une description des modifications apportées, par exemple "add members 2024". Vous pouvez également écrire une description plus longue dans la zone de texte "Extended description" mais cela reste facultatif.
Ensuite cliquez sur le bouton "Commit changes".

[!Github commit pop-up]()

Vos changements sont effectués mais vous ne les voyez pas sur le site ? C'est tout à fait normal. Pour cela référez-vous à la section **Mise en ligne du site**.

## Mise à jour des projets et membres

Le fichier comprenant les informations sur les projets se trouve dans le dossier 'assets' puis dans le dossier 'appstructs'.

### Projets

Dans le fichier projects.js, vous allez retrouver des structures comme ci-dessous :

   `{
       name: "",
       year: "",
       conceptArt: \[""\],
       modeler: \[""\],
       desc: "",
       isDownloadable: true,
       thumbnail: "./assets/img/projects/NomDeLaFigurine/NomDuFichier",
       img: \["./assets/img/projects/NomDeLaFigurine/NomDuFichier"\],
       size:"",
   },`

Pour ajouter un nouveau projet, copiez cet example et collez le entre le crochet et l'accolade fermante à la fin du fichier. Attention a ne pas oublier la virgule après l'accolade fermante et toujours mettre les informations dans les guillemets lorsqu'elles sont présentes.Si plusieurs personnes ont participé au concept-art ou a la modélisation, ajoutez une virgule après les guillemets et écrivez les autres noms entre guillemets.

Les images correspondant à la figurine devront être placé dans le dossier 'assets' puis 'img' puis 'projects' puis dans un dossier nommé en fonction du nom de la figurine.

Ensuite remplissez les informations en fonction des paramètres suivants : 

- name qui correspond au nom de la figurine
- year qui correspond à l'année de création de la figurine
- conceptArt qui correspond au concept artist qui a participé à la création de la figurine
- modeler qui correspond au modeleur qui a participé à la création de la figurine
- desc qui correspond à l'histoire de la figurine
- isDownloadable qui correspond à l'accès gratuit au téléchargement de la figurine. true = téléchargeable ; false = non téléchargeable
- thumbnail qui correspond à l'image de présentation de la figurine. Remplacez NomDeLaFigurine et NomDuFichier par les informations correspondantes.
- img qui correspond à toutes les images qui seront présentes sur le site.
- size qui correspond à la taille en cm de la figurine

### Membres

Dans le fichier members.js, vous allez retrouver des structures comme ci-dessous :

   `{
       year: \[""\],
       name: "",
       role: "",
       mail: "",
       instagram: "",
       artstation: "",
       portfolio: "",
       github: "",
       img: "./assets/img/members/NomDuFichier",
       isLeader: \[""\],
   },`

Pour ajouter un nouveau membre, copiez cet example et collez le entre le crochet et l'accolade fermante à la fin du fichier. Attention a ne pas oublier la virgule après l'accolade fermante et toujours mettre les informations dans les guillemets lorsqu'elles sont présentes. Si une information n'est pas fournie, laisser les guillemets vides et sans espaces.

Ensuite remplissez les informations en fonction des paramètres suivants : 

- year qui correspond à l'année de participation au projet
- name qui correspond au nom de la figurine
- role qui correspond au role du membre dans le projet
- instagram qui correspond au lien de l'instagram (pro de préférence) du membre
- artstation qui correspond au lien de l'artstation du membre
- portfolio qui correspond au lien du portfolio du membre
- github qui correspond au lien du github du membre
- img qui correspond à l'image du membre
- isLeader qui correspond à l'année ou le/la membre était chef de projet

## Mise à jour des couleurs

Pour changer les couleurs du site, vous allez devoir aller dans le fichier colors.css situé dans le dossier 'common' qui est lui-même dans le dossier 'styles'. Toutes les couleurs resteront en format hexadecimal (un # puis 6 chiffres/lettres entre 0-9 et a-f). Vous pouvez ajouter deux chiffres/lettres dans le meme format que le reste pour inclure la transparence.

Les couleurs changeables sont : 
- La couleur primaire (primary-color) qui définira la couleur du header (la barre en haut) et la couleur du footer (la barre en bas).
- La couleur secondaire (secondary-color)
- La couleur du fond (background-color)
- La couleur de la bordure des boutons (button-border-color)
- La couleur du fond des boutons (button-background-color)
- La couleur des différentes années (year-20XX) qui sert comme filtre dans les pages projets et équipes
- La couleur du texte (text-color)

En cas d'ajout de couleur pour les nouvelles années, il suffit d'ajouter une ligne comme les autres (--year-20XX:) et d'ajouter la couleur a la suite. L'attribution de la couleur se fera toute seule pour le reste.

## Enregistrement des informations sur le site

Une fois les modifications finies, vous allez devoir enregistrer les informations sur le site. Pour ce faire, vous allez devoir vous connecter sur le compte YDetailedFigureset retourner sur le projet.

## Mise en ligne du site
