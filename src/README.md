## Pour la suite du TP. 

Maintenant que votre page de connexion est terminée (ou presque :)). Vous allez vous attaquer à la page suivante (que j'ai appelé "swipe" mais libre à vous de l'appeler comme vous voulez). 

Dans la première partie du TP on s'est concentré sur une partie très très frontend (la structure et le style d'une page) sans pour l'instant trop rentrer dans la logique. 

Dans la suite du TP, l'idée est de se concentrer plutôt sur la partie typescript. Pour ça je vous ai pré-mâché une partie de la page en vous mettant à dispo le html et le css des composants que l'on va créer. 

>Rassurez-vous, il reste encore pas mal de choses à ajouter avant d'arriver au résultat final !

## Pour commencer : 

Vous créerez les composants dont vous aurez besoin.

Par exemple : 
```
ng g c swipe
```
> Pour la page 2

et 
```
ng g c tinder-card
```
> Pour le composant qui affichera les profils à swiper


Dans ce répertoire [Tinder_TP2] vous trouverez des fichiers HTML et SCSS à copier à la place des fichiers html et scss de vos nouveaux composants.

## A installer :

**RxJs** : https://rxjs.dev/
Librairie utilisée par quasiment tous les dév javascript (Angular, React, Vue.js etc ... ). 

Permet d'utiliser des ***Observables*** (https://rxjs.dev/guide/observable)
```
npm install rxjs
```
Et **Material** qui est une librairie google (équivalent à Bootstrap). On va s'en servir ici uniquement pour utiliser leurs icones. 
```
npm i material-icons
```
```
ng add @angular/material
```
> Ce n'est pas une bonne pratique d'installer une librairie pour une si petite utilisation. Mais notre tinder app ne sera pas en prod d'ici peu alors ça va :P 