TEST DEPLOYER v7

# Guide de mises à jour YDetailed Figures

Grâce à ce guide, vous allez pouvoir modifier les informations, couleurs ou textes présents sur le site.

Pour pouvoir effectuer des changements sur le projet, vous allez devoir vous connecter sur le compte YDetailedFigures. Ensuite rendez-vous sur le fichier que vous souhaitez modifier et cliquez sur le crayon comme indiqué ci-dessous.

![Github edit btn](https://github.com/Gougouli69/YDetailedFigures/assets/58865656/f269ec3d-e75d-4636-a199-e6bbd39bb2db)

Une fois les modifications effectuées, vérifiez bien que vous n'ayez pas modifié quelque chose involontairement et cliquez sur le bouton "commit changes".

A ce moment, une pop-up va s'ouvrir. Dans le zone de texte "commit message", écrivez succinctement et en anglais une description des modifications apportées, par exemple "add members 2024". Vous pouvez également écrire une description plus longue dans la zone de texte "Extended description" mais cela reste facultatif.
Ensuite cliquez sur le bouton "Commit changes".

![Github commit pop-up](https://github.com/Gougouli69/YDetailedFigures/assets/58865656/80505c78-acea-4f9e-9fe8-203735ef045a)

Vos mises à jour vont être automatiquement mises en places sur le site web. Vérifiez toujours vos mises à jour sur le site pour être sûr qu'il n'y ai aucun problème et que les modifications vous conviennent.
En cas de problème merci de contacter Noé Zimmermann ou un autre développeur web.

## Mise à jour des projets et membres

Le fichier comprenant les informations sur les projets se trouve dans le dossier 'assets' puis dans le dossier 'appstructs'.

### Projets

Dans le fichier projects.js, vous allez retrouver des structures comme ci-dessous :

```
{
    name: "",
    year: "",
    artist: \[""\],
    desc: "",
    thumbnail: "./assets/img/projects/NomDeLaFigurine/NomDuFichier",
    img: \["./assets/img/projects/NomDeLaFigurine/NomDuFichier"\],
    model_3d:"./assets/img/projects/NomDeLaFigurine/NomDuFichier",
    isDownloadable: true,
},
```

Pour ajouter un nouveau projet, copiez cet example et collez le entre le crochet et l'accolade fermante à la fin du fichier. Attention a ne pas oublier la virgule après l'accolade fermante et toujours mettre les informations dans les guillemets lorsqu'elles sont présentes.Si plusieurs personnes ont participé au concept-art ou a la modélisation, ajoutez une virgule après les guillemets et écrivez les autres noms entre guillemets.

Les images correspondant à la figurine devront être placé dans le dossier 'assets' puis 'img' puis 'projects' puis dans un dossier nommé en fonction du nom de la figurine.

Le modèle 3D devra être placé dans le dossier 'assets' puis '3d_models' puis dans un dossier nommé en fonction du nom de la figurine au format .obj si elle est téléchargeable gratuitement.

Ensuite remplissez les informations en fonction des paramètres suivants :

- name qui correspond au nom de la figurine
- year qui correspond à l'année de création de la figurine
- artist qui correspond au artistes qui ont participé à la création de la figurine.
- desc qui correspond à l'histoire de la figurine
- isDownloadable qui correspond à l'accès gratuit au téléchargement de la figurine. true = téléchargeable ; false = non téléchargeable
- thumbnail qui correspond à l'image de présentation de la figurine. Remplacez NomDeLaFigurine et NomDuFichier par les informations correspondantes.
- img qui correspond à toutes les images qui seront présentes sur le site. Remplacez NomDeLaFigurine et NomDuFichier par les informations correspondantes.
- model_3d qui correspond au chemin d'accès vers le modèle 3D de la figurine. Remplacez NomDeLaFigurine et NomDuFichier par les informations correspondantes.

### Membres

Dans le fichier teams.js, vous allez retrouver des structures comme ci-dessous :

```
{
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
},
```

Pour ajouter un nouveau membre, copiez cet example et collez le entre le crochet et l'accolade fermante à la fin du fichier. Attention a ne pas oublier la virgule après l'accolade fermante et toujours mettre les informations dans les guillemets lorsqu'elles sont présentes. Si une information n'est pas fournie, laisser les guillemets vides et sans espaces.

Placer l'image des nouveaux membres dans le dossier assets/img/members.

Ensuite remplissez les informations en fonction des paramètres suivants :

- year qui correspond aux années de participation au projet
- name qui correspond au nom de la personne
- role qui correspond au tâche qu'a réalisé le membre dans le projet (Modélisation 3D, Développement web)
- instagram qui correspond au lien de l'instagram (pro de préférence) du membre
- artstation qui correspond au lien de l'artstation du membre
- portfolio qui correspond au lien du portfolio du membre
- github qui correspond au lien du github du membre
- img qui correspond à la photo du membre
- isLeader qui correspond aux années ou le/la membre était chef de projet

Si un membre était déjà présent une autre année, la structure de ses données existe déjà. Dans ce cas, vous allez devoir trouver sa structure et ensuite modifier les informations présentes. Pour ajouter une année, il vous suffit d'ajouter entre les guillemets et le crochet déjà présent une virgule et l'année entre guillemets. Si vous n'êtes pas sûr de la syntaxe, prenez exemple sur les autres déjà présents. Vous pouvez également changer les informations des personnes déjà existantes (Photo, mail, ...)

## Mise à jour des couleurs

Pour changer les couleurs du site, vous allez devoir aller dans le fichier colors.css situé dans le dossier 'common' qui est lui-même dans le dossier 'styles'. Toutes les couleurs resteront en format hexadecimal (un # puis 6 chiffres/lettres entre 0-9 et a-f) Si vous ne connaissez pas le code hexadécimal d'une couleur, plein de convertisseur existent en ligne comme [Gradients.app](https://gradients.app/fr/converter). Vous pouvez ajouter deux chiffres/lettres dans le meme format que le reste pour inclure la transparence.

Les couleurs changeables sont :

- La couleur primaire (primary-color) qui définira la couleur du header (la barre en haut) et la couleur du footer (la barre en bas).
- La couleur du fond (background-color)
- La couleur de la bordure des boutons (button-border-color)
- La couleur du fond des boutons (button-background-color) (actuellement transparent)
- La couleur des différentes années (year-20XX) qui sert comme filtre dans les pages projets et équipes
- La couleur du texte (text-color)

En cas d'ajout de couleur pour les nouvelles années, il suffit d'ajouter une ligne comme les autres (--year-20XX:) et d'ajouter la couleur a la suite. L'attribution de la couleur se fera toute seule pour le reste.
