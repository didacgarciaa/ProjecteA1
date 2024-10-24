import Mascota from './Mascota.js';
import Persona from './Persona.js';

function main() {
    let pets = [];
    let persons = [];
    
    // Pet data
    let petsNames = ['Jhon', 'Alice', 'Mike', 'Flert', 'Peter', 'Davis', 'Dan', 'Scooby', 'Wanda', 'Frank'];
    let petsImages = ['/img/dog1.png', '/img/dog2.png', '/img/dog3.png', '/img/dog4.png', '/img/cat1.png', '/img/cat2.png', '/img/cat3.png', '/img/cat4.png', '/img/fox1.png', '/img/rabbit1.png'];
    let petsType = ['dog', 'dog', 'dog', 'dog', 'cat', 'cat', 'cat', 'cat', 'rabbit', 'fox'];
    
    // Person data
    let personNames = ["John", "Emma", "Michael", "Sophia", "James", "Olivia", "David", "Ava", "Daniel", "Isabella"];
    let personaAges = [25, 32, 19, 27, 34, 22, 28, 31, 23, 30];
    let personIds = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

    // Create pet and person instances
    for (let i = 0; i < 10; i++) {
        let pet = new Mascota(petsNames[i], petsType[i], petsImages[i]);
        pets.push(pet);
    }

    for (let i = 0; i < 10; i++) {
        let person = new Persona(personIds[i], personNames[i], personaAges[i]);
        persons.push(person);
    }

    // Set up the UI with the created pets and persons
    setImages(pets, persons);
}

function setImages(pets, persons) {
    let petsadopted = [];

    let petsGrid = document.getElementById('containerPets');
    let personsGrid = document.getElementById('containerPersons');

    petsGrid.innerHTML = '';
    personsGrid.innerHTML = '';

    // Add pets to the container
    pets.forEach((pet, index) => {
        let petDiv = document.createElement('div');
        petDiv.classList.add('pet-container');

        let img = document.createElement('img');
        let name = document.createElement('label');

        img.src = pet.imageSrc;
        img.alt = pet.name;
        img.setAttribute("draggable", "true");
        img.setAttribute("id", `animal${index}`); // Assign a unique ID

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

    // Add persons to the container and make them drop zones
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
        personDiv.appendChild(divAdoptats); // Append the drop zone to the personDiv

        // Make the divAdoptats a drop zone
        personDiv.addEventListener('dragover', (event) => {
            event.preventDefault(); // Allow the drop
        });

        let dropCount = 0;

        personDiv.addEventListener('drop', (event) => {
            event.preventDefault();
            const droppedImageId = event.dataTransfer.getData('text/plain');
            const droppedImage = document.getElementById(droppedImageId);
            const originalParent = droppedImage.parentElement;
            const adopciolog = document.getElementById("logContainer")
            const label = originalParent.querySelector('label'); // Select the label within the same parent


            // Append the dragged image to this divAdoptats (drop zone)
            if (droppedImage && dropCount < 2) {

                if (petsadopted.includes(droppedImage.id)) {
                    console.log("mariconazo");
                
                    // Find the existing cloned image with the same ID in the entire document
                    const existingClone = document.querySelector(`img[id="${droppedImage.id}"][draggable="false"]`);
                
                    if (existingClone) {
                        existingClone.remove(); // This will remove the existing clone from the DOM
                        
                    } else {
                        console.log("Clone not found with ID:", droppedImage.id);
                    }
                
                    // Remove the ID from the petsadopted array
                    const index = petsadopted.indexOf(droppedImage.id);
                    if (index !== -1) {
                        petsadopted.splice(index, 1);
                    }
                    
                }
                
                
                let paragraphadopcio = document.createElement("p");
                paragraphadopcio.classList.add("log-paragraph")
                paragraphadopcio.innerText = label.textContent + " ha sigut adoptat per: "+ person.name;

                adopciolog.appendChild(paragraphadopcio)

                originalParent.style.backgroundColor = 'red'; // Change the background color of the original parent
                const cloneImage = droppedImage.cloneNode(true);
                cloneImage.setAttribute("draggable", "false");
                droppedImage.setAttribute("draggable", "true"); // Prevent dragging the original image

                cloneImage.style.transform = "scale(0.5)"; // Scale the cloned image
                cloneImage.style.display = 'block'; // Ensure the clone is displayed
                divAdoptats.appendChild(cloneImage); // Append the cloned image to the drop zone
                petsadopted.push(droppedImage.id);
                console.log(petsadopted);
                dropCount++;
            }
        });

        personsGrid.appendChild(personDiv);
    });
}

// Run the main function when the window is loaded
window.addEventListener("load", main);
