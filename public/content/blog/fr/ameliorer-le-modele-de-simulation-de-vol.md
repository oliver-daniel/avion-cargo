---
title: Améliorer le modèle de simulation de vol
author: Hugo-Alexandre Latulippe
language: fr
publish_date: "'2020-10-31'"
thumbnail: https://res.cloudinary.com/decninixz/image/upload/v1604185174/MicrosoftTeams-image_vq8fpq.png
---
Le travail d’un membre de prop-aéro-perfo est de définir globalement les caractéristiques de l’avion, telles que les dimensions, les géométries et le chargement. Pour ce faire, on se base sur la formule de pointage de la compétition. Ensuite, des programmes Matlab développés par l’équipe font beaucoup de calculs et sélectionnent la configuration qui a le plus de potentiel. De là, nous posons le concept et refaisons des itérations pour valider le choix. Pour assurer le bon fonctionnement de ces modèles, il est important de les valider à l’aide de tests en vol.

Cet été, notre but était d’évaluer les performances réelles de l’avion 2019-2020 et rapprocher la simulation MatLab de cette réalité en y apportant quelques ajustements. Pour un peu de contexte, l’avion a mieux performé que prévu lors de la compétition de la saison passée. Ainsi, l’équipe aurait pu prendre plus de risques afin de marquer un meilleur pointage. À l’aide de vidéos capturées en compétition l’an passé, nous avons pu déterminer la cinématique de l’avion en évaluant son déplacement dans le temps sur les images à l’aide de dimensions de référence.

La prochaine étape fut de faire un bilan de force sur l’avion. En connaissant la poussée et la masse, nous avons pu estimer la traînée et la portance, et ainsi mettre à l’épreuve nos modèles de simulation. En plus de mettre à l’épreuve la précision de notre modèle, nous y avons ajouté le fruit d’une analyse probabiliste des vents sur les lieux de compétition selon la période dans l’année, pour que l’effet du vent puisse être tenu en compte dans la simulation à un certain degré de confiance. 

![](https://res.cloudinary.com/decninixz/image/upload/v1604185520/vol_6_29fps_15_frame_between_ogi9ny.png)