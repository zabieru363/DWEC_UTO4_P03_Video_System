import * as Exceptions from "./exceptions.js";

/**
 * Clase Person que permite crear personas.
 * @author Zabieru.
 * @version 1.0
 */
class Person {
    #name;
    #lastName1;
    #lastName2;
    #born;
    #picture;

    constructor(name, lastName1, lastName2, born, picture) {
        // Validación de campos:
        if(!name) throw new Exceptions.EmptyValueException(name);
        if(!lastName1) throw new Exceptions.EmptyValueException(lastName1);
        if(!born) throw new Exceptions.EmptyValueException(born);

        this.#name = name;
        this.#lastName1 = lastName1;
        this.#lastName2 = lastName2;
        this.#born = born;
        this.#picture = picture;
    }

    /**
     * Getter que devuelve el nombre de la persona, por si se
     * llega a necesitar.
     */
    get name() {
        return this.#name;
    }
}