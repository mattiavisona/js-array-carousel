

// NUOVO ESERCIZIO
// ________________________________________________________________________________

// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

/* Creo un array dove inserire tutte le mie img
- Preparo gli elementi da sintetizzare in js
- Applicare le varie funzionalit√† con js
- Al click del pulsante a sinistra
---> Cambio l'img verso sinistra
- Al click del pulsante a destra
---> Cambio l'img verso destra
*/


// C reo un array dove inserire tutte le mie img
const imgElement = ["carousel-img/01.webp", "carousel-img/02.webp", "carousel-img/03.webp", "carousel-img/04.webp", "carousel-img/05.webp"]

// Preparo gli elementi da sintetizzare in js 

let leftArrowElement = document.getElementById("left-arrow");

let rightArrowElement = document.getElementById("right-arrow");

let carouselImgElement = document.getElementById("carouselimg");

// Stabilisco una variabile i di partenza 
// Dico che la sequenza partir√† dalla foto con indice 0

let i = 0;


rightArrowElement.addEventListener("click", function () {
    i++;

    carouselImgElement.src = imgElement[i];

    leftArrowElement.style.display = "block";

    if (i ==  imgElement.length - 1) {

        rightArrowElement.style.display = "none";
    }

})

leftArrowElement.addEventListener("click", function(){

    i--;

    carouselImgElement.src = imgElement[i];

    if (i == imgElement.lenght - 2) {

        rightArrowElement.style.display = "block";
        
    }

    if (i == 0){
        leftArrowElement.style.display = "none"
    }

})

