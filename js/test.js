"use strict";

import ObjectFactory from "./entities.js";

(function() {

    // ? Creando un objeto Fxtory para testear los objetos planos.
    const factory = new ObjectFactory();

    // * PROBANDO A CREAR INSTANCIAS DE LAS ENTIDADES DEL SISTEMA.

    // ? Objeto Person
    console.log("Objeto Person");
    
    const person = factory.createPerson("Javier", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    console.log(person);    // {}
    console.log(person.name);   // Javier
    
    // ! EXCEPCIONES DEL OBJETO PERSON.
    
    // El nombre está sin definir:
    try {
        const person = factory.createPerson("", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo name no puede estar vacío.
    }
    
    // El primer apellido está sin definir:
    try {
        const person = factory.createPerson("Javier", "", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo lastName1 no puede estar vacío.
    }
    
    // La fecha de nacimiento está sin definir:
    try {
        const person = factory.createPerson("Javier", "López", "Carretero", "", 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo born no puede estar vacío.
    }
    
    // El campo born no es una fecha:
    try {
        const person = factory.createPerson("Javier", "López", "Carretero", "2000, 8, 6", 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // EL objeto que se está pasando no es una fecha.
    }
    
    // ? Objeto Category
    console.log("Objeto Category");
    
    const category = factory.createCategory("Videojuegos", "Hablando sobre videojuegos.");
    console.log(category);  // {}
    console.log(category.name);     //Videojuegos
    
    // ! EXCEPCIONES DEL OBJETO CATEGORY.
    
    // El nombre de la categoría está sin definir.
    try {
        const category = factory.createCategory("", "Hablando sobre videojuegos.");
    }catch(error) {
        console.error(error);   // El campo name no puede estar vacio.
    }
    
    // ? Objeto Resource
    console.log("Objeto Resource");

    const resource = factory.createResource(120, "videosystem.com\\recurso1");
    console.log(resource);  // {}
    
    // ! EXCEPCIONES DEL OBJETO RESOURCE.

    // La duración en minutos está sin definir:
    try {
        const resource = factory.createResource("", "videosystem.com\\recurso1");
    }catch(error) {
        console.error(error);   // El campo duration no está definido.
    }

    // ? Objeto Production
    console.log("Objeto Production");
    
    // ! PRODUCTION ES UNA CLASE ABSTRACTA, POR LO QUE NO SE PUEDE INSTANCIAR.
    
    // Intentando instanciar Production:
    try {
        const p = new Entities.Production("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia.", 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // La clase Production es abstracta.
    }
    
    // ? Objeto Movie
    console.log("Objeto Movie");

    const movie = new Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una serie de hombres azules", 'C:\\Users\\images', resource, []);
    console.log(movie); // {}
    console.log(movie.title); // Avatar 2
    
    // ! EXCEPCIONES DEL OBJETO MOVIE.
    
    // * Cómo el titulo tiene el valor por defecto de Unknown nunca le llegará vacío

    // Probando a cambiar el título.
    movie.title = "Interestellar";
    console.log(movie.title);   // Interestellar

    // El constructor debe invocarse con new.
    try {
        const movie = Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una serie de hombres azules", 'C:\\Users\\images', resource, []);
    }catch(error) {
        console.error(error);   // El constructor debe invocarse con new.
    }
    
    // El campo publication está vacío.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", null, "Una serie de hombres azules", 'C:\\Users\\images', resource, []);
    }catch(error) {
        console.error(error);   // El campo publication no puede estar vacío.
    }

    // El campo publication no es una fecha.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", "2022, 10, 12", "Una serie de hombres azules", 'C:\\Users\\images', resource, []);
    }catch(error) {
        console.error(error);   // El objeto que se está pasando no es una fecha.
    }

    // El objeto que se le está pasando no es un recurso.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una serie de hombres azules", 'C:\\Users\\images', "resource", []);
    }catch(error) {
        console.error(error);   // El objeto que se le está pasando no es un recurso.
    }

    // El objeto que se está pasando no es un array.
    try {
        const movie = new Entities.Movie("Avatar 2", "random", new Date(2022, 10, 12), "Una serie de hombres azules", 'C:\\Users\\images', resource, "recursos");
    }catch(error) {
        console.error(error);   // El objeto que se está pasando no es un array.
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

    // El constructor debe invocarse con new.
    try {
        const serie = Entities.Serie("Wednesday", "random", new Date(2020, 8, 10), "Una serie de comedia", 'C:\\Users\\images', [], [], 1);
    }catch(error) {
        console.error(error);   // El constructor debe invocarse con new.
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

    // ? Objeto User
    console.log("Objeto User");

    const user = new Entities.User("zabieru363", "zabierujlc@gmail.com", "12345678910");
    console.log(user);  // {}
    console.log(user.username); // zabieru363

    // ! EXCEPCIONES DEL OBJETO USER.

    // El constructor debe invocarse con new.
    try {
        const user = Entities.User("zabieru363", "zabierujlc@gmail.com", "12345678910");
    }catch(error) {
        console.error(error);   // El constructor debe invocarse con new.
    }

    // Probando a cambiar el nombre de usuario
    user.username = "ginescorreguela";  // ginescorreguela
    console.log(user.username);
    user.username = "zabieru363";   // zabieru363

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

    // La contraseña no puede estar vacía.
    try {
        const user = new Entities.User("zabieru363", "zabierujlc@gmail.com", "");
    }catch(error) {
        console.error(error);   // El campo password no puede estar vacío.
    }

    // ? Objeto Coordinate
    console.log("Objeto Coordinate");

    const coordinate1 = new Entities.Coordinate(49, 50);
    console.log(coordinate1);   // {}
    const coordinate2 = new Entities.Coordinate(32, 68);
    console.log(coordinate2);   // {}
    
    // ! EXCEPCIONES DEL OBJETO COORDINATE.
    
    // El constructor se debe invocar con new:
    try {
        const coordinate = Entities.Coordinate(49, 50);
    }catch(error) {
        console.error(error);   // El constructor se debe invocar con new:
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
})();