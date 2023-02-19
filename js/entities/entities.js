import {ExceptionFactory} from "../exceptions.js";

// ? Creando una factoría de excepciones.
const factory = new ExceptionFactory();

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
        if(!new.target) throw factory.throwError("InvalidAccessConstructorException");
        // Validación de campos:
        if(!name) throw factory.throwError("EmptyValueException", null, "name");
        if(/\d/g.test(name)) throw factory.throwError("NoValidFieldException", null, "name");
        if(!lastName1) throw factory.throwError("EmptyValueException", null, "lastname1");
        if(/\d/g.test(lastName1)) throw factory.throwError("NoValidFieldException", null, "lastName1");
        if(!born) throw factory.throwError("EmptyValueException", null, "born");
        if(!(born instanceof Date)) throw factory.throwError("NoValidObjectException", Date, "born");
        if(!(/[A-Z]{1}:\\\w/.test(picture))) throw factory.throwError("NoValidFieldException", null, "picture");
        
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

    /**
     * Getter que devuelve el nombre completo de la persona.
     */
    get fullName() {
        if(this.#lastName2 === "") {
            return this.#name + " " + this.#lastName1;
        }

        return this.#name + " " + this.#lastName1 + " " + this.#lastName2;
    }

    get born() {
        return this.#born;
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
        if(!new.target) throw factory.throwError("InvalidAccessConstructorException");
        // Validación de campos:
        if(!name) throw factory.throwError("EmptyValueException", null, "name");
        
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

    /**
     * Getter que devuelve la descripción de la categoría.
     */
    get description() {
        return this.#description;
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
        if(!new.target) throw factory.throwError("InvalidAccessConstructorException");
        // Validación de campos:
        if(typeof duration !== "number") throw factory.throwError("InvalidTypeException", null, "duration");
        if(!duration) throw factory.throwError("EmptyValueException", null, "duration");
        if(!(/videosystem.com\\\w/.test(link))) throw factory.throwError("NoValidFieldException", null, "link");

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
        if(new.target === Production) throw factory.throwError("AbstractClassException", Production);   // ! Esta clase es abstracta:

        // Validación de campos:
        if(!publication) throw factory.throwError("EmptyValueException", null, "publication");
        if(!(publication instanceof Date)) throw factory.throwError("NoValidObjectException", Date, "publication");
        if(!(/[A-Z]{1}:\\\w/.test(image))) throw factory.throwError("NoValidFieldException", null, "image");

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

    /**
     * Setter que permite cambiar el nombre del título de la
     * producción por si acaso se llega a necesitar más adelante.
     */
    set title(value) {
        this.#title = value;
    }

    /**
     * Getter que devuelve la fecha de publicación
     * de la producción.
     */
    get publication() {
        return this.#publication;
    }

    /**
     * Getter que devuelve la nacionalidad de la
     * producción.
     */
    get nationality() {
        return this.#nationality;
    }

    /**
     * Getter que devuelve la descripción de la
     * producción.
     */
    get synopsis() {
        return this.#synopsis;
    }
}

/**
 * Clas Movie que hereda de Production que permite
 * crear objetos de tipo película.
 * @author Zabieru.
 * @version 1.0
 */
class Movie extends Production {
    #resource;
    #locations;

    constructor(title, nationality, publication, synopsis, image, resource, locations) {
        if(!new.target) throw factory.throwError("InvalidAccessConstructorException");
        super(title, nationality, publication, synopsis, image);

        // Validación de campos:
        if(!(resource instanceof Resource)) throw factory.throwError("NoValidObjectException", Resource, "resource");
        if(!(Array.isArray(locations))) throw factory.throwError("NoValidObjectException", Array, "locations");

        this.#resource = resource;
        this.#locations = locations;
    }
}

/**
 * Clase Serie que hereda de Production que sirve
 * para crear objetos de tipo serie.
 * @author Zabieru.
 * @version 1.0
 */
class Serie extends Production {
    #resources;
    #locations;
    #seasons;

    constructor(title, nationality, publication, synopsis, image, resources, locations, seasons) {
        if(!new.target) throw factory.throwError("InvalidAccessConstructorException");
        super(title, nationality, publication, synopsis, image);

        // Validación de campos:
        if(!(Array.isArray(resources))) throw factory.throwError("NoValidObjectException", Array, "resources");
        if(!(Array.isArray(locations))) throw factory.throwError("NoValidObjectException", Array, "locations");
        if(typeof seasons !== "number") throw factory.throwError("InvalidTypeException",null, "seasons");

        this.#resources = resources;
        this.#locations = locations;
        this.#seasons = seasons;
    }
}

/**
 * Clase User que permite crear objetos de tipo
 * usuario. Es un recurso del sistema.
 * @author Zabieru.
 * @version 1.0
 */
class User {
    #username;
    #email;
    #password;

    constructor(username, email, password) {
        if(!new.target) throw factory.throwError("InvalidAccessConstructorException");
        // Validación de campos:
        if(!username) throw factory.throwError("EmptyValueException", null, "username");
        if(!(/\S+@\S+\.\S+/.test(email))) throw factory.throwError("NoValidFieldException", null, "email");
        // Incluimos letras y números y cómo mínimo 8 caracteres.
        if(!(/\w{8}/.test(password))) throw factory.throwError("NoValidFieldException", null, "password");

        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    /**
     * Getter que obtiene el nombre de usuario del usuario, por
     * si acaso hiciera falta más adelante.
     */
    get username() {
        return this.#username;
    }

    /**
     * Setter para cambiar el nombre de usuario, por si
     * en algún momento se llega a necesitar.
     */
    set username(value) {
        this.#username = value;
    }
}

/**
 * Clase Coordinate que permite crear coordenadas.
 * @author Zabieru.
 * @version 1.0
 */
class Coordinate {
    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        if(!new.target) throw factory.throwError("InvalidAccessConstructorException");
        // Validación de campos:
        if(typeof latitude !== "number") throw factory.throwError("InvalidTypeException",null, "latitude");
        if(!latitude) throw factory.throwError("EmptyValueException", null, "latitude");
        if(typeof longitude !== "number") throw factory.throwError("InvalidTypeException",null, "longitude");
        if(!longitude) throw factory.throwError("EmptyValueException", null, "longitude");

        this.#latitude = latitude;
        this.#longitude = longitude;
    }
}

export {Person, Category, Resource, Production, Movie, Serie, User, Coordinate};