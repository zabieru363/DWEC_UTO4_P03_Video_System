"use strict";

import * as Entities from "./entities.js";
import { VideoSystem } from "./VideoSystem.js";

(function() {
    // * PROBANDO A CREAR INSTANCIAS DE LAS ENTIDADES DEL SISTEMA.

    // ? Objeto Person
    console.log("Objeto Person");
    
    const person = new Entities.Person("Javier", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    console.log(person);    // {}
    console.log(person.name);   // Javier
    
    // ! EXCEPCIONES DEL OBJETO PERSON.

    // El constructor se invoca con new.
    try {
        const person = Entities.Person("Javier", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }
    
    // El nombre contiene números:
    try {
        const person = new Entities.Person("Javier2", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo name no es válido.
    }
    
    // El primer apellido contiene números:
    try {
        const person = new Entities.Person("Javier", "López2", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo lastName1 no es válido.
    }

    // El segundo apellido contiene números:
    try {
        const person = new Entities.Person("Javier", "López", "Carretero2", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo lastName2 no es válido.
    }
    
    // La fecha de nacimiento está sin definir:
    try {
        const person = new Entities.Person("Javier", "López", "Carretero", "", 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo born no puede estar vacío.
    }
    
    // El campo born no es una fecha:
    try {
        const person = new Entities.Person("Javier", "López", "Carretero", "2000, 8, 6", 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // Objeto no válido born, se esperaba un objeto de tipo Date.
    }

    // La ruta de la imagen no es válida:
    try {
        const person = new Entities.Person("Javier", "López", "Carretero", new Date(2000, 8, 6), "nose");
    }catch(error) {
        console.error(error);   // El campo picture no es válido.
    }
    
    // ? Objeto Category
    console.log("Objeto Category");
    
    const category = new Entities.Category("Videojuegos", "Hablando sobre videojuegos.");
    console.log(category);  // {}
    console.log(category.name);     //Videojuegos
    
    // ! EXCEPCIONES DEL OBJETO CATEGORY.

    // El constructor se debe de invocar con new.
    try {
        const category = Entities.Category("Videojuegos", "Hablando sobre videojuegos.");
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }
    
    // El nombre de la categoría está sin definir.
    try {
        const category = new Entities.Category("", "Hablando sobre videojuegos.");
    }catch(error) {
        console.error(error);   // El campo name no puede estar vacio.
    }
    
    // ? Objeto Resource
    console.log("Objeto Resource");

    const resource = new Entities.Resource(120, "videosystem.com\\recurso1");
    console.log(resource);  // {}
    
    // ! EXCEPCIONES DEL OBJETO RESOURCE.

    // El constructor se debe de invocar con new.
    try {
        const resource = Entities.Resource(120, "videosystem.com\\recurso1");
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }

    // La duración en minutos no es un number:
    try {
        const resource = new Entities.Resource("minutos", "videosystem.com\\recurso1");
    }catch(error) {
        console.error(error);   // El tipo del argumento duration que se le está pasando a este constructor no es válido.
    }

    // La ruta del recurso no es válida:
    try {
        const resource = new Entities.Resource(80, "random");
    }catch(error) {
        console.error(error);   // El campo link no es válido.
    }

    // ? Objeto Production
    console.log("Objeto Production");
    
    // ! PRODUCTION ES UNA CLASE ABSTRACTA, POR LO QUE NO SE PUEDE INSTANCIAR.
    
    // Intentando instanciar Production:
    try {
        const p = new Entities.Production();
    }catch(error) {
        console.error(error);   // La clase Production es abstracta.
    }
    
    // ? Objeto Movie
    console.log("Objeto Movie");

    const movie = new Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una pelicula de hombres azules", 'C:\\Users\\images', resource, []);
    console.log(movie); // {}
    console.log(movie.title); // Avatar 2
    
    // ! EXCEPCIONES DEL OBJETO MOVIE.
    
    // * Cómo el titulo tiene el valor por defecto de Unknown nunca le llegará vacío

    // Probando a cambiar el título.
    movie.title = "Interestellar";
    console.log(movie.title);   // Interestellar

    // El constructor se debe de invocar con new.
    try {
        const movie = Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una pelicula de hombres azules", 'C:\\Users\\images', resource, []);
    }catch(error) {
        console.error(error);
    }
    
    // El campo publication está vacío.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", null, "Una pelicula de hombres azules", 'C:\\Users\\images', resource, []);
    }catch(error) {
        console.error(error);   // El campo publication no puede estar vacío.
    }

    // El campo publication no es una fecha.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", "2022, 10, 12", "Una pelicula de hombres azules", 'C:\\Users\\images', resource, []);
    }catch(error) {
        console.error(error);   // El objeto que se está pasando no es una fecha.
    }

    // El objeto que se le está pasando no es un recurso.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una pelicula de hombres azules", 'C:\\Users\\images', "resource", []);
    }catch(error) {
        console.error(error);   // El objeto que se le está pasando no es un recurso.
    }

    // El objeto que se está pasando no es un array.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una pelicula de hombres azules", 'C:\\Users\\images', resource, "recursos");
    }catch(error) {
        console.error(error);   // El objeto que se está pasando no es un array.
    }

    // La ruta de la imagen no es válida.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una pelicula de hombres azules", 'nose', resource, "recursos");
    }catch(error) {
        console.error(error);   // El campo image no es válido.
    }

    // ? Objeto Serie
    console.log("Objeto Serie");

    const serie = new Entities.Serie("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia", 'C:\\Users\\images', [], [], 1);
    console.log(serie); // {}
    console.log(serie.title);   // Wednesday
    
    // ! EXCEPCIONES DEL OBJETO SERIE.
    
    // * Cómo el titulo tiene el valor por defecto de Unknown nunca le llegará vacío
    
    // Probando a cambiar el título.
    serie.title = "Alice in bordeland";
    console.log(serie.title);   // Alice in bordeland

    // El constructor se debe de invocar con new.
    try {
        const serie = Entities.Serie("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia", 'C:\\Users\\images', [], [], 1);
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }
    
    // El campo publication está vacío.
    try {
        const serie = new Entities.Serie("Wednesday", "random", null, "Una serie de comedia", 'C:\\Users\\images', [], [], 1);
    }catch(error) {
        console.error(error);   // El campo publication no puede estar vacío.
    }
    
    // El campo publication no es una fecha.
    try {
        const serie = new Entities.Serie("Wednesday", "random", "2020, 8, 10", "Una serie de comedia", 'C:\\Users\\images', [], [], 1);
    }catch(error) {
        console.error(error);   // El objeto que se está pasando no es una fecha.
    }
    
    // El campo de array de recursos no es un array.
    try {
        const serie = new Entities.Serie("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia", 'C:\\Users\\images', "recursos", [], 1);
    }catch(error) {
        console.error(error);   // El objeto que se le está pasando no es un array.
    }

    // El campo de array de locations no es un array.
    try {
        const serie = new Entities.Serie("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia", 'C:\\Users\\images', [], "aaa", 1);
    }catch(error) {
        console.error(error);   // El objeto que se le está pasando no es un array.
    }
    
    // El número de temporadas no es un Number.
    try {
        const serie = new Entities.Serie("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia", 'C:\\Users\\images', [], [], "una");
    }catch(error) {
        console.error(error);   // El tipo del argumento que se le está pasando a este constructor no es válido.
    }

    // La ruta de la imagen no es válida.
    try {
        const serie = new Entities.Serie("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia", "nose", [], [], 1);
    }catch(error) {
        console.error(error);   // El campo image no es válido.
    }

    // ? Objeto User
    console.log("Objeto User");

    const user = new Entities.User("zabieru363", "zabierujlc@gmail.com", "12345678910");
    console.log(user);  // {}
    console.log(user.username); // zabieru363

    // ! EXCEPCIONES DEL OBJETO USER.

    // Probando a cambiar el nombre de usuario
    user.username = "ginescorreguela";  // ginescorreguela
    console.log(user.username);
    user.username = "zabieru363";   // zabieru363

    // El constructor se debe de invocar con new.
    try {
        const user = Entities.User("zabieru363", "zabierujlc@gmail.com", "12345678910");
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }

    // El nombre de usuario no puede estar vacío.
    try {
        const user = new Entities.User("", "zabierujlc@gmail.com", "12345678910");
    }catch(error) {
        console.error(error);   // El campo username no puede estar vacío.
    }

    // El email no es válido.
    try {
        const user = new Entities.User("zabieru363", "email-gmail.com", "12345678910");
    }catch(error) {
        console.error(error);   // El email no es válido.
    }

    // La contraseña no es válida.
    try {
        const user = new Entities.User("zabieru363", "zabierujlc@gmail.com", "123");
    }catch(error) {
        console.error(error);   // El campo password no es válido.
    }

    // ? Objeto Coordinate
    console.log("Objeto Coordinate");

    const coordinate1 = new Entities.Coordinate(49, 50);
    console.log(coordinate1);   // {}
    const coordinate2 = new Entities.Coordinate(32, 68);
    console.log(coordinate2);   // {}
    
    // ! EXCEPCIONES DEL OBJETO COORDINATE.

    // El constructor se debe de invocar con new.
    try {
        const coordinate = Entities.Coordinate(32, 50);
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }

    // La latitud no es un Number.
    try {
        const coordinate = new Entities.Coordinate("aaaa", 50);
    }catch(error) {
        console.error(error);   // El tipo del argumento que se le está pasando a este constructor no es válido
    }

    // La latitud no es un Number.
    try {
        const coordinate = new Entities.Coordinate(49, "aaaa");
    }catch(error) {
        console.error(error);   // El tipo del argumento que se le está pasando a este constructor no es válido
    }

    // * PROBANDO OBJETO VIDEO-SYSTEM

    // ? Probando patrón Singleton:
    const videosystem = VideoSystem.getInstance("videosystem");
    const videosystem2 = VideoSystem.getInstance();

    // Comparando ambos objetos.
    console.log(videosystem == videosystem2);   // true
    console.log(videosystem === videosystem2);  // true
    console.log(Object.is(videosystem, videosystem2));  // true

    // * Métodos del objeto VideoSystem.

    // ? Getter / setter name
    console.log(videosystem.name);
})();