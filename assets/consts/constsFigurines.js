// Modéle de l'objet pour chaque projet
// {
//     "id"                    : 1,
//     "nom"                   : 'Maraiche', // Nom
//     "année"                 : "2021",
//     "brief"                 : 'L\'homme poisson', // brève description
//     "description"           : '', //description compléte
//     "artiste"               : 'Mazarine', //artiste
//     "imageCardUrl"                  : '', //photo presentation image card
//     "charaUrl"              : '', // lien image chara design
//     "inspiUrl"              : '', // lien image planche d'inspiration
//     "visualisationUrl"      : [''], //tableau de lien de rendu 3d
//     "figurineUrl"           : [''], //tableau de lien de photos de figurine réalisée
//     "telechargementDispo"   : true, // booléen - est-ce que l'artiste accepte que son projet soit télechargé
//     "fichierModel3dUrl"     : '' //lien vers le fichier du modèle 3D
// }

const Projet = [
  {
    id: 1,
    nom: "Maraiche",
    année: "2021",
    brief: "L'homme poisson",
    description: "L'homme poisson",
    artiste: "Mazarine",
    imageCardUrl: "/assets/images/photoProjets/Maraiche/maraiche_post.jpg",
    charaUrl: "/assets/images/photoProjets/Maraiche/maraiche_charadesign.jpg",
    inspiUrl: "/assets/images/photoProjets/Maraiche/maraiche_inspi.jpg",
    visualisationUrl: [
      "/assets/images/photoProjets/Maraiche/maraiche_visu_1.jpg",
      "/assets/images/photoProjets/Maraiche/maraiche_visu_2.jpg",
      "/assets/images/photoProjets/Maraiche/maraiche_visu_3.jpg",
      "/assets/images/photoProjets/Maraiche/maraiche_visu_4.jpg",
      "/assets/images/photoProjets/Maraiche/maraiche_visu_4.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    //../images/photoProjets/Allarien/allarien_post.jpg
    id: 2,
    nom: "Allarien",
    année: "2021",
    brief: "L'alien homanoïde",
    description: "",
    artiste: "Ryan",
    imageCardUrl: "/assets/images/photoProjets/Allarien/allarien_post.jpg",
    charaUrl: "assets/images/photoProjets/Allarien/alarien_charadesign_1.jpg",
    inspiUrl: "/assets/images/photoProjets/Allarien/allarien_inspi.jpg",
    visualisationUrl: [
      "/assets/images/photoProjets/Allarien/allarien_post_2.jpg",
      "/assets/images/photoProjets/Allarien/allarien_visu_1.png",
      "/assets/images/photoProjets/Allarien/allarien_visu_2.png",
      "/assets/images/photoProjets/Allarien/allarien_visu_3.png",
      "/assets/images/photoProjets/Allarien/allarien_visu_4.png",
      "/assets/images/photoProjets/Allarien/allarien_visu_5.png",
      "/assets/images/photoProjets/Allarien/allarien_visu_6.png",
      "/assets/images/photoProjets/Allarien/allarien_visu_7.jpg",
      "/assets/images/photoProjets/Allarien/allarien_visu_8.jpg",
      "/assets/images/photoProjets/Allarien/allarien_visu_9.jpg",
      "/assets/images/photoProjets/Allarien/allarien_visu_10.jpg",
      "/assets/images/photoProjets/Allarien/allarien_visu_11.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 3,
    nom: "Lactour et Colly",
    année: "2021",
    brief: "Deux petits champignons",
    description:
      "Lactour et Colly sont deux petits champignons partis explorer la forêt. Ils sont inspirés de vrai champignon, Lactour est inspiré d’un Lactaire Velour et Colly, d’un Collibye Visqueuse",
    artiste: "Mazarine",
    imageCardUrl:
      "/assets/images/photoProjets/LactourEtColly/lactour_et_colly_visu_1.jpg",
    charaUrl: [
      "/assets/images/photoProjets/LactourEtColly/colly_charadesign.jpg",
      "/assets/images/photoProjets/Lactouretcolly/lactour_charadesign.jpg",
    ],
    inspiUrl:
      "/assets/images/photoProjets/LactourEtColly/lactour_et_colly_inspi.jpg",
    visualisationUrl: [
      "/assets/images/photoProjets/LactourEtColly/colly_visu_1.jpg",
      "/assets/images/photoProjets/LactourEtColly/lactour_et_colly_visu_1.jpg",
      "/assets/images/photoProjets/LactourEtColly/lactour_et_colly_visu_2.jpg",
      "/assets/images/photoProjets/LactourEtColly/lactour_visu_1.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 4,
    nom: "Monke",
    année: "2021",
    brief: "Le singe humanisé",
    description: "",
    artiste: "Nicolas",
    imageCardUrl: "/assets/images/photoProjets/Monke/monke_post.jpg",
    charaUrl: [
      "/assets/images/photoProjets/Monke/monke_charadesign_1.jpg",
      "/assets/images/photoProjets/Monke/monke_charadesign_2.jpg",
      "/assets/images/photoProjets/Monke/monke_charadesign_3.jpg",
    ],
    inspiUrl: "/assets/images/photoProjets/Monke/monke_charadesign.jpg",
    visualisationUrl: [
      "/assets/images/photoProjets/Monke/monke_visu_1.jpg",
      "/assets/images/photoProjets/Monke/monke_visu_2.jpg",
      "/assets/images/photoProjets/Monke/monke_visu_3.jpg",
      "/assets/images/photoProjets/Monke/monke_visu_4.jpg",
      "/assets/images/photoProjets/Monke/monke_visu_5.jpg",
      "/assets/images/photoProjets/Monke/monke_visu_6.jpg",
      "/assets/images/photoProjets/Monke/monke_visu_7.jpg",
      "/assets/images/photoProjets/Monke/monke_visu_8.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 5,
    nom: "Oinc",
    année: "2021",
    brief: "Le duo humoristique d’un dodo et d’un cavalier canard",
    description: "",
    artiste: "Mathias",
    imageCardUrl: "/assets/images/photoProjets/Oinc/oinc_post.png",
    charaUrl: "",
    inspiUrl: [
      "/assets/images/photoProjets/Oinc/oinc_inspi.jpg",
      "/assets/images/photoProjets/Oinc/oinc_inspi_2.jpg",
    ],
    visualisationUrl: [
      "/assets/images/photoProjets/Oinc/oinc_visu_1.jpg",
      "/assets/images/photoProjets/Oinc/oinc_visu_2.jpg",
      "/assets/images/photoProjets/Oinc/oinc_visu_3.jpg",
      "/assets/images/photoProjets/Oinc/oinc_visu_4.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 6,
    nom: "Ssm",
    année: "2021",
    brief: "Le pilote de mecha",
    description: "Sentinelle Spacial Martienne",
    artiste: "Tristan",
    imageCardUrl: "/assets/images/photoProjets/Ssm/ssm_post.jpg",
    charaUrl: "/assets/images/photoProjets/Ssm/ssm_charadesign.jpg",
    inspiUrl: "/assets/images/photoProjets/Ssm/ssm_inspi.jpg",
    visualisationUrl: [
      "/assets/images/photoProjets/Ssm/ssm_visu_1.jpg",
      "/assets/images/photoProjets/Ssm/ssm_visu_2.jpg",
      "/assets/images/photoProjets/Ssm/ssm_visu_3.jpg",
      "/assets/images/photoProjets/Ssm/ssm_visu_4.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },

  {
    id: 7,
    nom: "Hypérion",
    année: "2022",
    brief: "Titan scellé",
    description:
      "Le personnage que nous suivons dans cette histoire s'appelle Hypérion, surnommé le petit Titan le fis d'Ouranos et de Gaïa dans sa vie passée, Hypérion, mener une vie paisible dans les cieux, jusqu'à un beau jour où hadès le dieu des enfers le scella dans un corps humain pour pas qu'il n'interfère dans son plan de conquête des cieux. dans un élan de rage et de vengeance Hypérion prie les armes, et commenca son aventure jusqu' aux enfers pour affronter Lucifer accompagner de son fidèle compagnon, pour récupérer son corps de Titan. ",
    artiste: "Guillaume",
    imageCardUrl: "/assets/images/photoProjets/Hyperion/hyperion_post.jpg",
    charaUrl: [
      "/assets/images/photoProjets/Hyperion/hyperion_charadesign_1.png",
      "/assets/images/photoProjets/Hyperion/hyperion_charadesign_2.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_charadesign_3.png",
    ],
    inspiUrl: [
      "/assets/images/photoProjets/Hyperion/hyperion_inspi_1.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_inspi_2.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_inspi_3.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_inspi_4.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_inspi_5.jpg",
    ],
    visualisationUrl: [
      "/assets/images/photoProjets/Hyperion/hyperion_visu_1.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_2.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_3.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_4.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_5.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_6.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_7.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_8.jpg",
      "/assets/images/photoProjets/Hyperion/hyperion_visu_9.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 8,
    nom: "Quesne",
    année: "2022",
    brief: "Nymphe guerrière",
    description:
      "Dans un monde où les forêts se font de plus en plus rares, Quesne, dryade pourtant de nature pacifiste, décide de prendre les armes. Elle réveille les magies anciennes d'incantation et avec l'aide de ses sœurs, elle mène bataille pour restaurer cette nature qui court à sa perte.",
    artiste: "Jade",
    imageCardUrl: "/assets/images/photoProjets/Quesne/quesne_post.jpg",
    charaUrl: "/assets/images/photoProjets/Quesne/quesne_charadesign.jpg",
    inspiUrl: [
      "/assets/images/photoProjets/Quesne/quesne_inspi_1.jpg",
      "/assets/images/photoProjets/Quesne/quesne_inspi_2.jpg",
      "/assets/images/photoProjets/Quesne/quesne_inspi_3.jpg",
      "/assets/images/photoProjets/Quesne/quesne_inspi_4.jpg",
      "/assets/images/photoProjets/Quesne/quesne_inspi_5.jpg",
      "/assets/images/photoProjets/Quesne/quesne_inspi_6.jpg",
      "/assets/images/photoProjets/Quesne/quesne_inspi_7.jpg",
      "/assets/images/photoProjets/Quesne/quesne_inspi_8.jpg",
    ],
    visualisationUrl: [
      "/assets/images/photoProjets/Quesne/quesne_visu_1.jpg",
      "/assets/images/photoProjets/Quesne/quesne_visu_2.jpg",
      "/assets/images/photoProjets/Quesne/quesne_visu_3.jpg",
      "/assets/images/photoProjets/Quesne/quesne_visu_4.jpg",
      "/assets/images/photoProjets/Quesne/quesne_visu_5.jpg",
      "/assets/images/photoProjets/Quesne/quesne_visu_6.jpg",
      "/assets/images/photoProjets/Quesne/quesne_visu_7.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 9,
    nom: "Pia",
    année: "2022",
    brief: "Prêtresse d’Hécate",
    description:
      "Pia est une jeune femme qui croit dur comme fer à Hécate. Elle lui voua sa vie. Au point de devenir un simple réceptacle, perdant petit a petit sa propre humanité.",
    artiste: "Maelle",
    imageCardUrl: "/assets/images/photoProjets/Pia/pia_post.jpg",
    charaUrl: "/assets/images/photoProjets/Pia/pia_charadesign.jpg",
    inspiUrl: "/assets/images/photoProjets/Pia/pia_inspi.jpg",
    visualisationUrl: [
      "/assets/images/photoProjets/Pia/pia_visu_1.jpg",
      "/assets/images/photoProjets/Pia/pia_visu_2.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 10,
    nom: "Foxia",
    année: "2022",
    brief: "Renarde de glace",
    description:
      "Une anthropomorphe renarde qui décide d'étudier la magie de la glace, cristaux pour les maîtriser ",
    artiste: "Fanny",
    imageCardUrl: "/assets/images/photoProjets/Foxia/foxia_post.jpg",
    charaUrl: [
      "/assets/images/photoProjets/Foxia/foxia_charadesign_1.jpg",
      "/assets/images/photoProjets/Foxia/foxia_charadesign_2.jpg",
    ],
    inspiUrl: [
      "/assets/images/photoProjets/Foxia/foxia_inspi_1.jpg",
      "/assets/images/photoProjets/Foxia/foxia_inspi_2.jpg",
      "/assets/images/photoProjets/Foxia/foxia_inspi_3.jpg",
      "/assets/images/photoProjets/Foxia/foxia_inspi_4.jpg",
    ],
    visualisationUrl: [
      "/assets/images/photoProjets/Foxia/foxia_visu_1.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_2.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_3.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_4.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_5.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_6.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_7.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_8.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_9.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_10.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_11.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_12.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_13.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_14.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_15.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_16.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_17.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_18.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_19.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_20.jpg",
      "/assets/images/photoProjets/Foxia/foxia_visu_21.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 11,
    nom: "Eclypse",
    année: "2022",
    brief: "Cheval d’Ombre",
    description:
      "Eclypse vit dans l’ombre de son maître pour dévorer les peurs de son maître",
    artiste: "Fanny",
    imageCardUrl: "",
    charaUrl: [
      "/assets/images/photoProjets/Eclypse/eclypse_charadesign_1.jpg",
      "/assets/images/photoProjets/Eclypse/eclypse_charadesign_2.jpg",
    ],
    inspiUrl: [
      "/assets/images/photoProjets/Eclypse/eclypse_inspi_1.jpg",
      "/assets/images/photoProjets/Eclypse/eclypse_inspi_2.jpg",
    ],
    visualisationUrl: [
      "/assets/images/photoProjets/Eclypse/Eclypse_visu_1.jpg",
      "/assets/images/photoProjets/Eclypse/Eclypse_visu_2.jpg",
      "/assets/images/photoProjets/Eclypse/Eclypse_visu_3.jpg",
      "/assets/images/photoProjets/Eclypse/Eclypse_visu_4.jpg",
    ],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 12,
    nom: "Fidodu",
    année: "2022",
    brief: "Le dragon-dodo",
    description:
      "Le Fidodu est une espèce vivant en troupeau. Celle-ci se déplace dans les forêts des îles flottantes, en bordure de rivière. Il ne se nourris que de serpent à deux têtes. Sa tête de pioche lui permet de séparer les têtes du serpent afin d'attaquer en toute sécurité. Ces cornes sur son dos peuvent servir aux fées et elfes pour se poser comme sur une chaise, ainsi que pour transporter de sacs de marchandises. Cet être possède des sortes de tentacules sur sa queue pouvant s'allonger pour se défendre ou s'accrocher.",
    artiste: "Jade",
    charaUrl: [
      "/assets/images/photoProjets/Fidodu/fidodu_charadesign_1.jpg",
      "/assets/images/photoProjets/Fidodu/fidodu_charadesign_2.jpg",
    ],
    inspiUrl: ["/assets/images/photoProjets/Fidodu/fidodu_inspi_1.jpg"],
    visualisationUrl: [],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
  {
    id: 13,
    nom: "Hadès",
    année: "2022",
    brief: "Dieu des enfers",
    description:
      "Hadès le dieu des enfers, avec une volonté féroce de vouloir tout détruire sur son passage, hypérion le petit Titan en a aussi fait l'expérience. Où qu'il aille Hadès voudra toujours tout détruire pour son simple plaisir mais ne pourra jamais remplir sa soif de destruction.",
    artiste: "Guillaume",
    charaUrl: ["/assets/images/photoProjets/Fidodu/fidodu_charadesign_1.jpg"],
    inspiUrl: ["/assets/images/photoProjets/Fidodu/fidodu_inspi_1.jpg"],
    visualisationUrl: [],
    figurineUrl: [""],
    telechargementDispo: true,
    fichierModel3dUrl: "",
  },
];
