import Mascota from './Mascota.js';
import Persona from './Persona.js';

function main() {
    let pets = [];
    let persons = [];
    
    let petsNames = ['Jhon', 'Alice', 'Mike', 'Flert', 'Peter', 'Davis', 'Dan', 'Scooby', 'Wanda', 'Frank'];
    let petsImages = ['/img/dog1.png', '/img/dog2.png', '/img/dog3.png', '/img/dog4.png', '/img/cat1.png', '/img/cat2.png', '/img/cat3.png', '/img/cat4.png', '/img/fox1.png', '/img/rabbit1.png'];
    let petsType = ['dog', 'dog', 'dog', 'dog', 'cat', 'cat', 'cat', 'cat', 'rabbit', 'fox'];
    
    let personNames = ["John", "Emma", "Michael", "Sophia", "James", "Olivia", "David", "Ava", "Daniel", "Isabella"];
    let personaAges = [25, 32, 19, 27, 34, 22, 28, 31, 23, 30];
    let personIds = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

    let adoptions = {};

    for (let i = 0; i < 10; i++) {
        let pet = new Mascota(petsNames[i], petsType[i], petsImages[i]);
        pets.push(pet);
    }

    for (let i = 0; i < 10; i++) {
        let person = new Persona(personIds[i], personNames[i], personaAges[i]); // Asegúrate de pasar los parámetros en el orden correcto
        persons.push(person);
    }

    setImages(pets, persons); // Pasar también el array de personas
}

function setImages(pets, persons) {
    let petsGrid = document.getElementById('pets');
    let personsGrid = document.getElementById('persons');

    petsGrid.innerHTML = '';
    personsGrid.innerHTML = '';

    pets.forEach(pet => {
        let img = document.createElement('img');
        img.src = pet.imageSrc;  
        img.alt = pet.name;       
        img.classList.add('pet-image'); 
        petsGrid.appendChild(img);  
    });

    persons.forEach(person => {
        let img = document.createElement('img');
        img.src = '/img/user.png';  
        img.alt = person.name;       
        img.classList.add('person-image'); 
        personsGrid.appendChild(img);  
    });
}

window.addEventListener("load", main, true);
