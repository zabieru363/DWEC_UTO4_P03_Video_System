"use strict";

import * as Entities from "../entities/entities.js";

/**
 * Clase controlodar para el objeto Videosystem.
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemController {
    // Campos privados
    #model;
    #view;

    /**
     * Método privado que crea 3 categorías por defecto
     * y las añade al videosystem. Estas categorias se
     * muestran en la navbar y en la zona central.
     */
    #createResources() {
        // * Usuario por defecto
        const user = new Entities.User("zabieru363", "zabierujlc@gmail.com", "12345678");

        // * Añadimos el usuario al sistema.
        this.#model.addUser(user);

        // * Categorias por defecto.
        const c1 = new Entities.Category("Aventura", "Series y películas de aventuras");
        const c2 = new Entities.Category("Terror", "Series y peliculas de terror");
        const c3 = new Entities.Category("Comedia", "Series y peliculas de comedia");

        // * Añadimos las categorias al sistema.
        this.#model.addCategory(c1);
        this.#model.addCategory(c2);
        this.#model.addCategory(c3);

        // * Producciones por defecto.

        const movie1 = new Entities.Movie(
            "Avatar 2: El sentido del agua",
            "🇺🇸",
            new Date(2022, 11, 16),
            "Una pelicula que relata la vida de unos seres llamados Na'vi que viven en los bosques de Pandora",
            "C:\\Users\\images",
            new Entities.Resource(192, `videosystem.com\\avatar2`),
            [new Entities.Coordinate(180, 293)]
        );

        const movie2 = new Entities.Movie(
            "Interstellar",
            "🇺🇸",
            new Date(2014, 10, 7),
            "Un grupo de exploradores emprende una misión que puede ser la más importante de la historia de "
            + " la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda " +
            "garantizar el futuro de la raza humana.",
            "C:\\Users\\images",
            new Entities.Resource(169, `videosystem.com\\interstellar`),
            [new Entities.Coordinate(180, 293)]
        );

        const movie3 = new Entities.Movie(
            "Joker",
            "🇺🇸",
            new Date(2019, 9, 4),
            "Arthur Fleck (Phoenix) vive en Gotham con su madre, y su única motivación en la vida es hacer " + 
            "reír a la gente. Actúa haciendo de payaso en pequeños trabajos, pero tiene problemas mentales " + 
            "que hacen que la gente le vea como un bicho raro.",
            "C:\\Users\\images",
            new Entities.Resource(169, `videosystem.com\\joker`),
            [new Entities.Coordinate(180, 293)]
        );

        const serie1 = new Entities.Serie(
            "The Walking Dead",
            "🇺🇸",
            new Date(2010, 9, 31),
            "Un mundo invadido por zombis en el cuál unos cuantos supervivientes les deben hacer frente.",
            "C:\\Users\\images",
            [],
            [],
            11
        );

        const serie2 = new Entities.Serie(
            "Alice in Borderland",
            "🇯🇵",
            new Date(2020, 9, 22),
            "Un chico adicto a los videojuegos es transportado a un mundo en el que la humanidad ha " +
            "desaparecido y junto a otros supervivientes que fueron transportados deberán participar en " +
            "una serie de juegos en los que incluso pueden perder la vida.",
            "C:\\Users\\images",
            [],
            [],
            2
        );

        const serie3 = new Entities.Serie(
            "Fullmetal Alchemist",
            "🇯🇵",
            new Date(2001, 4, 12),
            "Un chico alquimista llamado Edward vive en un pueblo con su hermano Alphonse. Su " +
            "madre sufre un trágico accidente y ellos tratan de revivirla por medio de la alquimia. " +
            "Debido a esto el espiritu de Alphonse queda atrapado en una armadura, Edward tendrá que " +
            "recorrer un largo camino para devolverle a su estado original.",
            "C:\\Users\\images",
            [],
            [],
            2
        );

        const serie4 = new Entities.Serie(
            "Chainsaw Man",
            "🇯🇵",
            new Date(2022, 9, 11),
            "Un adulto con su vida arruinada se convierte en un hombre con cabeza de motosierra",
            "C:\\Users\\images",
            [],
            [],
            1
        );

        // * Añadimos las producciones al sistema.
        this.#model.addProduction(movie1);
        this.#model.addProduction(movie2);
        this.#model.addProduction(movie3);
        this.#model.addProduction(serie1);
        this.#model.addProduction(serie2);
        this.#model.addProduction(serie3);
        this.#model.addProduction(serie4);
    }

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        this.onLoad();
        this.onInit();
        
        this.#view.bindInit(this.handleInit);
    }

    /**
     * Método que muestra los componenetes principales
     * de la página en la vista.
     */
    onInit = () => {
        this.#view.init(this.#model.categories);
        this.onShowNavbarDropdownCategories(this.#model.categories);
        this.onShowUser(this.#model.users);
        this.onShowProductionsInCarousel(this.#model.productions);
    };

    /**
     * Método que crea todos los recursos que utiliza
     * la página por defecto.
     */
    onLoad = () => {
        this.#createResources();
    };

    /**
     * Manejador para enlazar en la vista los enlaces
     * del logo y del inicio.
     */
    handleInit = () => {
        this.onInit();
    };

    /**
     * Método que ejecuta el método de la vista que muestra
     * las categorias en el menú dropdown de categorias.
     * @param {*} categories Las categorias del modelo.
     */
    onShowNavbarDropdownCategories(categories) {
        this.#view.showNavbarDropdownCategories(categories);
    }
    
    /**
     * Método que invoca al método showUser en la vista.
     * Esto ocurre cuando la página es recargada.
     * @param {*} users El iterador de usuarios del modelo.
     */
    onShowUser(users) {
        this.#view.showUser(users);
    }

    /**
     * Método que ejecuta el método showProductionsInCarousel
     * de la vista.
     * @param {*} productions El iterador de producciones del modelo.
     */
    onShowProductionsInCarousel(productions) {
        this.#view.showProductionsInCarousel(productions);
    }
}