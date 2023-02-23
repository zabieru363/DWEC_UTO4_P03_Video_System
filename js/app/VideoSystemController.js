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
        const c3 = new Entities.Category("Anime", "Series y peliculas del mundo del manga y el anime");
        const c4 = new Entities.Category("Videojuegos", "Series y peliculas del mundo de los videojuegos");
        const c5 = new Entities.Category("Comedia", "Series y peliculas de comedia");
        const c6 = new Entities.Category("Marvel", "Series y peliculas del mundo de Marvel Studios");

        // * Añadimos las categorias al sistema.
        this.#model.addCategory(c1);
        this.#model.addCategory(c2);
        this.#model.addCategory(c3);
        this.#model.addCategory(c4);
        this.#model.addCategory(c5);
        this.#model.addCategory(c6);

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

        const movie4 = new Entities.Movie(
            "Multiple",
            "🇺🇸",
            new Date(2017, 0, 21),
            "Tres chicas, Claire, Marcia y Casey, son secuestradas por «Dennis», una de las " +
            "veintitrés personalidades presentes en la mente de Kevin Wendell Crumb, víctima de " +
            "abuso a quien se le diagnosticó trastorno de identidad disociativo.",
            "C:\\Users\\images",
            new Entities.Resource(157, `videosystem.com\\split`),
            [new Entities.Coordinate(180, 293)]
        );

        const movie5 = new Entities.Movie(
            "It",
            "🇺🇸",
            new Date(2017, 8, 8),
            "Un payaso aesino se dedica a atrapar a niños pequeños por las lluviosas calles de la pequeña ciudad de Derry.",
            "C:\\Users\\images",
            new Entities.Resource(135, `videosystem.com\\it`),
            [new Entities.Coordinate(180, 293)]
        );

        const movie6 = new Entities.Movie(
            "Deadpool",
            "🇺🇸",
            new Date(2016, 8, 8),
            "Wade Wilson, tras ser sometido a un cruel experimento científico, adquiere poderes especiales que " +
            "le convierten en Deadpool. Armado con sus nuevas habilidades y un retorcido sentido del humor tratará " +
            "de dar caza al hombre que casi destruye su vida.",
            "C:\\Users\\images",
            new Entities.Resource(109, `videosystem.com\\deadpool`),
            [new Entities.Coordinate(180, 293)]
        );

        const movie7 = new Entities.Movie(
            "Black Adam",
            "🇺🇸",
            new Date(2022, 9, 21),
            "Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses, " +
            "Black Adam (Johnson) es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.",
            "C:\\Users\\images",
            new Entities.Resource(125, `videosystem.com\\blackadam`),
            [new Entities.Coordinate(180, 293)]
        );

        const movie8 = new Entities.Movie(
            "Slender Man",
            "🇺🇸",
            new Date(2018, 2, 12),
            "“El hombre más pálido. El traje más oscuro. Más grande que el gigante más alto. Ten miedo de este " +
            "hombre: Slender Man ya que puede hacer lo que nadie puede”. Estas son algunas de las características " + 
            "que usuarios del internet dieron al personaje ficticio de terror Slender Man (el hombre delgado).",
            "C:\\Users\\images",
            new Entities.Resource(140, `videosystem.com\\blackadam`),
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

        const serie5 = new Entities.Serie(
            "RELife",
            "🇯🇵",
            new Date(2016, 6, 2),
            "Un hombre adulto con una vida miserable ingiere una pastilla que le permite volver a ser " + 
            "un estudiante de preparatoria y rehacer su vida. En el instituto conoce a la chica que será " +
            "el amor de su vida.",
            "C:\\Users\\images",
            [],
            [],
            1
        );

        const serie6 = new Entities.Serie(
            "Arcane",
            "🇺🇸",
            new Date(2021, 10, 6),
            "Una serie del videojuego League of Legends en la que se cuenta la trama de Piltover y Zaun",
            "C:\\Users\\images",
            [],
            [],
            1
        );

        const serie7 = new Entities.Serie(
            "Boku no Hero Academia",
            "🇯🇵",
            new Date(2016, 4, 3),
            "El protagonista vive en un mundo en el que hay héroes y villanos. En este mundo casi todo " +
            "el mundo nace con un poder o una habilidad especial. Para mala fortuna de Izuku Midoriya nació " +
            "sin ningún poder. Sin embargo su vida cambiará drasticamente gracias al héroe número de Japón, All Might.",
            "C:\\Users\\images",
            [],
            [],
            6
        );

        // * Añadimos las producciones al sistema.
        this.#model.addProduction(movie1);
        this.#model.addProduction(movie2);
        this.#model.addProduction(movie3);
        this.#model.addProduction(movie4);
        this.#model.addProduction(movie5);
        this.#model.addProduction(movie6);
        this.#model.addProduction(movie7);
        this.#model.addProduction(movie8);
        this.#model.addProduction(serie1);
        this.#model.addProduction(serie2);
        this.#model.addProduction(serie3);
        this.#model.addProduction(serie4);
        this.#model.addProduction(serie5);
        this.#model.addProduction(serie6);
        this.#model.addProduction(serie7);

        // * Directores por defecto.
        const d1 = new Entities.Person("James", "Cameron", "", new Date(1954, 7, 16), 'C:\\Users\\images');
        const d2 = new Entities.Person("Christopher", "Nolan", "", new Date(1970, 6, 30), 'C:\\Users\\images');
        const d3 = new Entities.Person("Todd", "Phillips", "", new Date(1970, 11, 20), 'C:\\Users\\images');
        const d4 = new Entities.Person("Manoj", "Night", "Shyamalan", new Date(1970, 7, 6), 'C:\\Users\\images');
        const d5 = new Entities.Person("Andrés", "Muschietti", "", new Date(1973, 7, 26), 'C:\\Users\\images');
        const d6 = new Entities.Person("Kazuya", "Murata", "", new Date(1964, 0, 1), 'C:\\Users\\images');

        // * Añadimos los directores al sistema.
        this.#model.addDirector(d1);
        this.#model.addDirector(d2);
        this.#model.addDirector(d3);
        this.#model.addDirector(d4);
        this.#model.addDirector(d5);
        this.#model.addDirector(d6);
        
        // * Actores por defecto.
        const a1 = new Entities.Person("Sam", "Worthington", "", new Date(1976, 7, 2), 'C:\\Users\\images');
        const a2 = new Entities.Person("Matthew", "McConaughey", "", new Date(1969, 10, 4), 'C:\\Users\\images');
        const a3 = new Entities.Person("Joaquin", "Phoenix", "", new Date(1974, 9, 28), 'C:\\Users\\images');
        const a4 = new Entities.Person("James", "McAvoy", "", new Date(1979, 3, 21), 'C:\\Users\\images');
        const a5 = new Entities.Person("Bill", "Skarsgård", "", new Date(1990, 7, 9), 'C:\\Users\\images');
        const a6 = new Entities.Person("Zoe", "Soldaña", "", new Date(1998, 5, 19), 'C:\\Users\\images');
        const a7 = new Entities.Person("Jessica", "Chastain", "", new Date(1977, 2, 24), 'C:\\Users\\images');
        const a8 = new Entities.Person("Dwayne", "Johnson", "", new Date(1972, 5, 2), 'C:\\Users\\images');
        const a9 = new Entities.Person("Sarah", "Shahi", "", new Date(1980, 0, 10), 'C:\\Users\\images');

        // * Añadimos los actores al sistema.
        this.#model.addActor(a1);
        this.#model.addActor(a2);
        this.#model.addActor(a3);
        this.#model.addActor(a4);
        this.#model.addActor(a5);
        this.#model.addActor(a6);
        this.#model.addActor(a7);
        this.#model.addActor(a8);
        this.#model.addActor(a9);

        // * Asignamos las producciones a las categorias.
        this.#model.assignCategory(c1, movie1);
        this.#model.assignCategory(c1, movie2);
        this.#model.assignCategory(c1, serie3);
        this.#model.assignCategory(c1, movie7);
        
        this.#model.assignCategory(c2, movie3);
        this.#model.assignCategory(c2, movie4);
        this.#model.assignCategory(c2, movie5);
        this.#model.assignCategory(c2, movie8);

        this.#model.assignCategory(c3, serie3);
        this.#model.assignCategory(c3, serie4);
        this.#model.assignCategory(c3, serie5);
        this.#model.assignCategory(c3, serie7);

        this.#model.assignCategory(c4, serie6);

        this.#model.assignCategory(c5, movie6);

        this.#model.assignCategory(c6, movie6);

        // * Asignamos producciones a los directores.
        this.#model.assignDirector(d1, movie1);
        this.#model.assignDirector(d2, movie2);
        this.#model.assignDirector(d3, movie3);
        this.#model.assignDirector(d4, movie4);
        this.#model.assignDirector(d5, movie5);
        this.#model.assignDirector(d5, movie7);
        this.#model.assignDirector(d4, movie8);
        this.#model.assignDirector(d6, serie3);
        this.#model.assignDirector(d6, serie4);
        this.#model.assignDirector(d6, serie5);
        this.#model.assignDirector(d6, serie7);

        // * Asignamos producciones a los actores.
        this.#model.assignActor(a1, movie1);
        this.#model.assignActor(a6, movie1);
        this.#model.assignActor(a2, movie2);
        this.#model.assignActor(a7, movie2);
        this.#model.assignActor(a3, movie3);
        this.#model.assignActor(a4, movie3);
        this.#model.assignActor(a4, movie4);
        this.#model.assignActor(a5, movie4);
        this.#model.assignActor(a5, movie5);
        this.#model.assignActor(a6, movie5);
        this.#model.assignActor(a8, movie7);
        this.#model.assignActor(a9, movie7);
        this.#model.assignActor(a9, movie8);
        this.#model.assignActor(a9, movie8);

        this.#model.assignActor(a1, serie3);
        this.#model.assignActor(a2, serie3);

        this.#model.assignActor(a1, serie4);
        this.#model.assignActor(a2, serie4);

        this.#model.assignActor(a1, serie5);
        this.#model.assignActor(a2, serie5);

        this.#model.assignActor(a1, serie7);
        this.#model.assignActor(a2, serie7);
    }

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        this.onLoad();
        this.onInit();
        
        this.#view.bindInit(this.handleInit);
        this.#view.bindProductions(this.handleProductions);
        this.#view.bindDirectors(this.handleDirectors);
        this.#view.bindActors(this.handleActors);
    }

    /**
     * Método que muestra los componenetes principales
     * de la página en la vista.
     */
    onInit = () => {
        this.#view.init();
        this.onShowCategoriesMenu();
        this.onShowUser(this.#model.users);
        this.onShowProductionsInCarousel(this.#model.productions);
        this.onShowCategoriesInCentralZone();
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
     * Método que invoca al método que muestra las categorias
     * en la navbar en la vista. Utiliza el iterador de categorias
     * del modelo.
     */
    onShowCategoriesMenu() {
        for(const category of this.#model.categories) this.#view.showCategoriesMenu(category);
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

    /**
     * Método que invoca al método que muestra las categorias
     * en la zona central en la vista. Accede al iterador de
     * categorias del modelo y por cada categoria que tengamos
     * invoca a showCategoriesInCentralZone con el objeto category
     * correspondiente y sus producciones.
     */
    onShowCategoriesInCentralZone() {
        for(const category of this.#model.categories) {
            this.#view.showCategoriesInCentralZone(category, this.#model.getProductionsCategory(category));
        }
    }

    /**
     * Manejador de eventos que permite a la vista
     * mostrar todas las producciones.
     */
    handleProductions = () => {
        this.onShowAllProductions(this.#model.productions);
    };

    /**
     * Método que ejecuta el método que muestra todas las
     * producciones de la vista.
     * @param {*} productions El iterador de producciones del modelo.
     */
    onShowAllProductions(productions) {
        this.#view.showAllProductions(productions);
    }

    /**
     * Manejador de eventos que permite a la vista
     * mostrar todos los directores.
     */
    handleDirectors = () => {
        this.#view.showDirectorsPanel();
        this.onShowAllDirectors();
    };

    /**
     * 
     */
    onShowAllDirectors() {
        for(const director of this.#model.directors) {
            this.#view.showAllDirectors(director, this.#model.getProductionsDirector(director));
        }
    }

    /**
     * Manejador de eventos que permite a la vista
     * mostrar todos los actores.
     */
    handleActors = () => {
        this.#view.showActorsPanel();
        this.onShowAllActors();
    };

    /**
     * Método que invoca al método que muestra todos los actores con
     * sus producciones en la vista. Utiliza el iterador de categorias
     * del modelo y el iterador de producciones de un actor del modelo.
     */
    onShowAllActors() {
        for(const actor of this.#model.actors) {
            this.#view.showAllActors(actor, this.#model.getProductionsActor(actor));
        }
    }
}