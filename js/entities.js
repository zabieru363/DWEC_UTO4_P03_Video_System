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
        if(!new.target) throw new Exceptions.InvalidAccessConstructorException(Person);
        
        // Validación de campos:
        if(!name) throw new Exceptions.EmptyValueException("name");
        if(!lastName1) throw new Exceptions.EmptyValueException("lastName1");
        if(!born) throw new Exceptions.EmptyValueException("born");
        if(!(born instanceof Date)) throw Exceptions.IsNotADateException();
        
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
        if(!new.target) throw new Exceptions.InvalidAccessConstructorException(Category);
        
        // Validación de campos:
        if(!name) throw new Exceptions.EmptyValueException("name");
        
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
        if(!new.target) throw new Exceptions.InvalidAccessConstructorException(Resource);

        // Validación de campos:
        if(!duration) throw new Exceptions.EmptyValueException("duration");

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
        if(new.target) throw new Exceptions.AbstractClassException(Production);   // ! Esta clase es abstracta:

        // Validación de campos:
        if(!title) throw new Exceptions.EmptyValueException("title");
        if(!publication) throw new Exceptions.EmptyValueException("publication");
        if(!(publication instanceof Date)) throw new Exceptions.IsNotADateException();

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
        if(!new.target) throw new Exceptions.InvalidAccessConstructorException(Movie);
        super(title, nationality, publication, synopsis, image);

        // Validación de campos:
        if(!(resource instanceof Resource)) throw new Exceptions.IsNotAResourceException();
        if(!(Array.isArray(locations))) throw new Exceptions.IsNotAnArrayException();

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
        if(!new.target) throw new Exceptions.InvalidAccessConstructorException(Serie);
        super(title, nationality, publication, synopsis, image);

        // Validación de campos:
        if(!(Array.isArray(resources))) throw new Exceptions.IsNotAnArrayException();
        if(typeof seasons !== "number") throw new Exceptions.InvalidTypeException();

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
        if(!new.target) throw new Exceptions.InvalidAccessConstructorException(User);

        // Validación de campos:
        if(!username) throw new Exceptions.EmptyValueException("username");
        if(!(/\S+@\S+\.\S+/.test(email))) throw new Exceptions.NotValidEmailException();
        if(!password) throw new Exceptions.EmptyValueException("password");

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
        if(!new.target) throw new Exceptions.InvalidAccessConstructorException(Coordinate);
        
        // Validación de campos:
        if(typeof latitude !== "number") throw new Exceptions.InvalidTypeException();
        if(typeof longitude !== "number") throw new Exceptions.InvalidTypeException();

        this.#latitude = latitude;
        this.#longitude = longitude;
    }
}

export {
    Person,
    Category,
    Resource,
    Production,
    Movie,
    Serie,
    User,
    Coordinate
};