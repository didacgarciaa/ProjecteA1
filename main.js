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
        let person = new Persona(personIds[i], personNames[i], personaAges[i]);
        persons.push(person);
    }

    setImages(pets, persons);
}

function setImages(pets, persons) {
    let petsGrid = document.getElementById('containerPets');
    let personsGrid = document.getElementById('containerPersons');

    petsGrid.innerHTML = '';
    personsGrid.innerHTML = '';

    pets.forEach(pet => {
        // Crear un div contenedor para la mascota
        let petDiv = document.createElement('div');
        petDiv.classList.add('pet-container'); // Añadir una clase para estilos si es necesario

        let img = document.createElement('img');
        let name = document.createElement('label');

        img.src = pet.imageSrc;  
        img.alt = pet.name;
        name.innerHTML = pet.name;

        img.classList.add('pet-image'); 
        name.classList.add('pet-name');

        petDiv.appendChild(img);
        petDiv.appendChild(name);
        petsGrid.appendChild(petDiv);  
    });

    persons.forEach(person => {
        // Crear un div contenedor para la persona
        let personDiv = document.createElement('div');
        personDiv.classList.add('person-container'); // Añadir una clase para estilos si es necesario

        let img = document.createElement('img');
        let name = document.createElement('label'); // Cambiar 'name' por 'label' para crear la etiqueta correctamente

        img.src = '/img/user.png';  
        img.alt = person.name;  
        name.innerHTML = person.name;

        img.classList.add('person-image'); 
        name.classList.add('person-name');

        personDiv.appendChild(img);  
        personDiv.appendChild(name);  
        personsGrid.appendChild(personDiv);  
    });
}

window.addEventListener("load", main, true);
