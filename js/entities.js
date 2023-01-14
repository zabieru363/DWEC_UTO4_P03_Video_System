import * as Exceptions from "./exceptions.js";

/**
 * Factoria de objetos que permite crear objetos de 
 * las entidades del sistema.
 * @author Zabieru.
 * @version 1.0
 */
export default function ObjectFactory() {
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
            if(!name) throw new Exceptions.EmptyValueException("name");
            if(!lastName1) throw new Exceptions.EmptyValueException("lastName1");
            if(!born) throw new Exceptions.EmptyValueException("born");
            if(!(born instanceof Date)) throw Exceptions.NoValidObjectException("born", Date);
            
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
            if(new.target === Production) throw new Exceptions.AbstractClassException(Production);   // ! Esta clase es abstracta:

            // Validación de campos:
            // if(!title) throw new Exceptions.EmptyValueException("title");    No hace falta validar este campo porque nunca le llegará vacío.
            if(!publication) throw new Exceptions.EmptyValueException("publication");
            if(!(publication instanceof Date)) throw new Exceptions.NoValidObjectException("publication", Date);

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
            super(title, nationality, publication, synopsis, image);

            // Validación de campos:
            if(!(resource instanceof Resource)) throw new Exceptions.NoValidObjectException("resource", Resource);
            if(!(Array.isArray(locations))) throw new Exceptions.NoValidObjectException("locations", Array);

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
            super(title, nationality, publication, synopsis, image);

            // Validación de campos:
            if(!(Array.isArray(resources))) throw new Exceptions.NoValidObjectException("resources", Array);
            if(!(Array.isArray(locations))) throw new Exceptions.NoValidObjectException("locations", Array);
            if(typeof seasons !== "number") throw new Exceptions.InvalidTypeException("seasons");

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
            // Validación de campos:
            if(!username) throw new Exceptions.EmptyValueException("username");
            if(!(/\S+@\S+\.\S+/.test(email))) throw new Exceptions.NoValidFieldException("email");
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
            // Validación de campos:
            if(typeof latitude !== "number") throw new Exceptions.InvalidTypeException("latitude");
            if(typeof longitude !== "number") throw new Exceptions.InvalidTypeException("longitude");

            this.#latitude = latitude;
            this.#longitude = longitude;
        }
    }

    // * Métodos públicos de la factoria.

    /**
     * Método que crea un objeto Person.
     * @param {*} name El nombre de la persona.
     * @param {*} lastName1 El primer apellido de la persona.
     * @param {*} lastName2 El segundo apellido de la persona.
     * @param {*} born La fecha de nacimiento de la persona.
     * @param {*} picture Ruta de una foto de la persona.
     * @returns Un nuevo objeto Person.
     */
    this.createPerson = function(name, lastName1, lastName2, born, picture) {
        return new Person(name, lastName1, lastName2, born, picture);
    };

    /**
     * Método que crea un objeto Category.
     * @param {*} name EL nombre de la categoria.
     * @param {*} description La descripción de la categoria.
     * @returns Un nuevo objeto Category.
     */
    this.createCategory = function(name, description) {
        return new Category(name, description);
    };

    /**
     * Método para probar que la clase Production no se puede instanciar.
     * @throws Una excepción tipo AbstractClassException.
     */
    this.createProduction = function() {
        return new Production();
    }

    /**
     * Método que crea un objeto Resource.
     * @param {*} duration La duración del recurso.
     * @param {*} link El link con la ruta del recurso.
     * @returns Un nuevo objeto Resource.
     */
    this.createResource = function(duration, link) {
        return new Resource(duration, link);
    };

    /**
     * Método que crea un objeto Movie.
     * @param {*} title El título de la pelicula.
     * @param {*} nationality La nacionalidad de la película.
     * @param {*} publication La fecha de publicación de la película.
     * @param {*} synopsis De que trata la película.
     * @param {*} image Ruta de la imagen de la película.
     * @param {*} resource Un objeto Resource .
     * @param {*} locations Array de objetos Coordinate donde transcurre la película. 
     * @returns Un nuevo objeto Movie.
     */
    this.createMovie = function(title, nationality, publication, synopsis, image, resource, locations) {
        return new Movie(title, nationality, publication, synopsis, image, resource, locations);
    };

    /**
     * Método que crea un objeto Serie.
     * @param {*} title El título de la pelicula.
     * @param {*} nationality La nacionalidad de la película.
     * @param {*} publication La fecha de publicación de la película.
     * @param {*} synopsis De que trata la película.
     * @param {*} image Ruta de la imagen de la película.
     * @param {*} resources Array de objetos Resource para la película.
     * @param {*} locations Array de objetos Coordinate donde transcurre la película. 
     * @param {*} seasons Number con el número de temporadas.
     * @returns Un nuevo objeto Serie.
     */
    this.createSerie = function(title, nationality, publication, synopsis, image, resources, locations, seasons) {
        return new Serie(title, nationality, publication, synopsis, image, resources, locations, seasons);
    };

    /**
     * Método que crea un objeto User.
     * @param {*} username El nombre de usuario del usuario.
     * @param {*} email El email del usuario.
     * @param {*} password La contraseña del usuario.
     * @returns Un nuevo objeto User.
     */
    this.createUser = function(username, email, password) {
        return new User(username, email, password);
    };

    /**
     * Método que crea un objeto Coordinate.
     * @param {*} latitude Latitud de la coordenada.
     * @param {*} longitude Longitud de la coordenada.
     * @returns Un nuevo objeto Coordinate.
     */
    this.createCoordinate = function(latitude, longitude) {
        return new Coordinate(latitude, longitude);
    };
}