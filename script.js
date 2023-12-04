/*
class User {
    constructor(_name, _lastName, _age, _location) {
        this.firstName = _name
        this.lastName = _lastName
        this.age = parseInt(_age)
        this.location = _location
    }
    
    compareAge = function (_age) {
        if(userNumber1.age > userNumber2.age) {
        console.log("Il primo é piú vecchio")
     } else if (userNumber1.age === userNumber2.age) { console.log("hanno la stessa etá")
    } else {
    console.log("il secondo é piú vecchio")
    }
}
}


const userNumber1 = new User("Marco", "Rossi","32","Italy")
const userNumber2 = new User("Michel", "Kane","8","Usa")

userNumber1.compareAge(userNumber2)

*/

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const petList = [];

function createPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);

    // Verifica se il nuovo animale condivide lo stesso padrone con uno degli animali esistenti
    petList.forEach(existingPet => {
        if (newPet.hasSameOwner(existingPet)) {
            console.log("Stesso padrone!");
        }
    });

    petList.push(newPet);
    displayPetList();
    resetForm();
}

function displayPetList() {
    const petListContainer = document.getElementById('petList');
    petListContainer.innerHTML = '';

    petList.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = `Pet Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
        petListContainer.appendChild(listItem);
    });
}

function resetForm() {
    document.getElementById('petForm').reset();
}