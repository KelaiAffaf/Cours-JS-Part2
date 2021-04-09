//---------------------------------------- Premier Exo ------------------------------------------//

/*--------------------------- ENONCE ------------------------------

Demander a l'utilisateur d'entrer une phrase caractere par caractere
jusqu'a ce qu'il est fini (donc qui entre un point), et d'afficher 
le nombre de caracteres ainsi que le nombre de mots.

PS : le nombre de mots = nombre d'espace + 1

------------------------------------------------------------------*/

//--------------------------- SOLUTION ------------------------------

// Declaration des variables

let caractere; // Variable pour stocker le caractere entré par l'utilisateur
let nombreDeCaractere = 0; // Compteur du nombre de caractere
let nombreDeMot = 0; // Compteur du nombre de mot

// Boucle qui lit l'entré de l'utilisateur, incremente le
// nombre de caractere et verifie si c'est un espace, si oui
// incremente le nombre de mot.

do {
  caractere = prompt("Donner caractère");
  nombreDeCaractere++;
  if (caractere == " ") {
    nombreDeMot++;
  }
} while (caractere != ".");

// Affichage des résultats

console.log("Le nombre de caractere est : " + nombreDeCaractere);
console.log("Le nombre de mot est : " + nombreDeMot + 1);

//------------------------------------------------------------------------------------------------//

//---------------------------------------- Deuxieme Exo ------------------------------------------//

/*--------------------------- ENONCE ------------------------------

Pour un vecteur (array) composé uniquement de 1 et de 0, afficher
le nombre de 0 ainsi que le nombre de 1

------------------------------------------------------------------*/

//--------------------------- SOLUTION ------------------------------

// Declaration des variables

let arr = [1, 0, 1, 0, 0, 1, 1, 0]; // Le tableau de 0 et 1
let nombreDeUn = 0; // Compteur du nombre de 1
let nombreDeZero = 0; // Compteur du nombre de 0

// Boucle qui verifie si un element du tableau est un 1
// si oui incremente le compteur de 1, sinon incremente
// le nombre de zero

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    nombreDeUn++;
  } else {
    nombreDeZero++;
  }
}

// Affichage des résultats

console.log("Le nombre de zero est : " + nombreDeZero);
console.log("Le nombre de un est : " + nombreDeUn);
