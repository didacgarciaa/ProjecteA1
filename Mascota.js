export default class Mascota {
    constructor(name, type, imageSrc) {
        this._name = name;
        this._type = type;
        this._imageSrc = imageSrc;
    }

    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get imageSrc() {
        return this._imageSrc;
    }

    set name(name) {
        this._name = name;
    }
    set type(type) {
        this._type = type;
    }
    set imageSrc(imageSrc) {
        this._imageSrc = imageSrc;
    }
}
 
