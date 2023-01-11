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

/**
 * Clase Category que permite crear una categoría.
 * @author Zabieru.
 * @version 1.0
 */
class Category {
    #name;
    #description;

    constructor(name, description) {
        // Validación de campos:
        if(!name) throw new Exceptions.EmptyValueException(name);

        this.#name = name;
        this.#description = description;
    }

    /**
     * Getter que devuelve el nombre de la categoría, por si
     * se llega a necesitar.
     */
    get name() {
        return this.#name;
    }
}

/**
 * Clase que permite crear un recurso.
 * @author Zabieru.
 * @version 1.0
 */
class Resource {
    #duration;
    #link;

    constructor(duration, link) {
        // Validación de campos:
        if(!duration) throw new Exceptions.EmptyValueException(duration);

        this.#duration = duration;
        this.#link = link;
    }
}

/**
 * Clase Production que permite crear un contenido.
 * @author Zabieru.
 * @version 1.0
 */
class Production {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    constructor(title = "Unknown", nationality, publication, synopsis, image) {
        if(new.target) throw new Exceptions.AbstractClassException();   // ! Esta clase es abstracta:

        // Validación de campos:
        if(!title) throw new Exceptions.EmptyValueException(title);
        if(!publication) throw new Exceptions.EmptyValueException(publication);

        this.#title = title;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;
    }

    /**
     * Getter que devuelve el titulo de la producción, por si
     * se llega a necesitar.
     */
    get title() {
        return this.#title;
    }
}