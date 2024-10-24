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

    pets.forEach((pet, index) => {
        let petDiv = document.createElement('div');
        petDiv.classList.add('pet-container');

        let img = document.createElement('img');
        let name = document.createElement('label');

        img.src = pet.imageSrc;
        img.alt = pet.name;
        img.setAttribute("draggable", "true");
        img.setAttribute("id", `animal${index}`);  
        console.log(`animal${index}`)

        img.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', img.id);
        });

        name.innerHTML = pet.name;
        img.classList.add('pet-image');
        name.classList.add('pet-name');

        petDiv.appendChild(img);
        petDiv.appendChild(name);
        petsGrid.appendChild(petDiv);
    });

    persons.forEach((person) => {
        let personDiv = document.createElement('div');
        personDiv.classList.add('person-container');

        let img = document.createElement('img');
        let name = document.createElement('label');
        let divAdoptats = document.createElement("div");

        img.src = '/img/user.png';
        img.alt = person.name;
        name.innerHTML = person.name;

        img.classList.add('person-image');
        name.classList.add('person-name');
        divAdoptats.classList.add("person-adoptats");

        personDiv.appendChild(img);
        personDiv.appendChild(name);
        personDiv.appendChild(divAdoptats);  

        personDiv.addEventListener('dragover', (event) => {
            event.preventDefault(); 
        });

        let dropCount = 0;

        personDiv.addEventListener('drop', (event) => {
            event.preventDefault();
            const droppedImageId = event.dataTransfer.getData('text/plain');
            const droppedImage = document.getElementById(droppedImageId);
            const originalParent = droppedImage.parentElement;
            const adopciolog = document.getElementById("logContainer")
            const label = originalParent.querySelector('label');  


            if (droppedImage && dropCount < 2) {
                
                let paragraphadopcio = document.createElement("p");
                paragraphadopcio.classList.add("log-paragraph")
                paragraphadopcio.innerText = label.textContent + " ha sigut adoptat per: "+ person.name;

                adopciolog.appendChild(paragraphadopcio)

                originalParent.style.backgroundColor = 'red'; 
                const cloneImage = droppedImage.cloneNode(true);
                cloneImage.setAttribute("draggable", "false");
                droppedImage.setAttribute("draggable", "false");  

                cloneImage.style.transform = "scale(0.5)";  
                cloneImage.style.display = 'block';  
                divAdoptats.appendChild(cloneImage);  
                dropCount++;
            }
        });

        personsGrid.appendChild(personDiv);
    });
}

window.addEventListener("load", main);
