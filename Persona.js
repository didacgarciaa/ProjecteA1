export default class Persona {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    setId(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }
}
