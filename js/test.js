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

    console.log("######Excepciones Objeto Person######");

    // El constructor debe de invocar con new.
    try {
        const person = Entities.Person("Javier", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }

    // El nombre está vacío:
    try {
        const person = new Entities.Person("", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo name no puede estar vacío.
    }
    
    // El nombre contiene números:
    try {
        const person = new Entities.Person("Javier2", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo name no es válido.
    }

    // El primer apellido está vacío:
    try {
        const person = new Entities.Person("Javier", "", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo primer apellido no puede estar vacío.
    }
    
    // El primer apellido contiene números:
    try {
        const person = new Entities.Person("Javier", "López2", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo lastName1 no es válido.
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

    console.log("######Excepciones Objeto Category######");

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

    console.log("######Excepciones Objeto Resource######");

    // El constructor se debe de invocar con new.
    try {
        const resource = Entities.Resource(120, "videosystem.com\\recurso1");
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }

    // La duración en minutos no está definida.
    try {
        const resource = new Entities.Resource("", "videosystem.com\\recurso1");
    }catch(error) {
        console.error(error);   // El campo duration no puede estar vacío.
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

    console.log("######Excepciones Objeto Production######");
    
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

    console.log("######Excepciones Objeto Movie######");

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

    console.log("######Excepciones Objeto Serie######");

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

    console.log("######Excepciones Objeto User######");

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

    console.log("######Excepciones Objeto Coordinate######");

    // El constructor se debe de invocar con new.
    try {
        const coordinate = Entities.Coordinate(32, 50);
    }catch(error) {
        console.error(error);   // El constructor se debe de invocar con new.
    }

    // La latitud no está definida.
    try {
        const coordinate = new Entities.Coordinate("", 50);
    }catch(error) {
        console.error(error);   // El campo latitude no puede estar vacío.
    }

    // La latitud no es un Number.
    try {
        const coordinate = new Entities.Coordinate("aaaa", 50);
    }catch(error) {
        console.error(error);   // El tipo del argumento que se le está pasando a este constructor no es válido
    }

    // La longitud no está definida.
    try {
        const coordinate = new Entities.Coordinate(49, "");
    }catch(error) {
        console.error(error);   // El campo longitude no puede estar vacío.
    }

    // La longitud no es un Number.
    try {
        const coordinate = new Entities.Coordinate(49, "aaaa");
    }catch(error) {
        console.error(error);   // El tipo del argumento que se le está pasando a este constructor no es válido
    }

    // * PROBANDO OBJETO VIDEO-SYSTEM

    // ? Probando patrón Singleton:

    console.log("Probando patrón singleton");
    const videosystem = VideoSystem.getInstance();
    const videosystem2 = VideoSystem.getInstance();

    // Comparando ambos objetos.
    console.log(videosystem == videosystem2);   // true
    console.log(videosystem === videosystem2);  // true
    console.log(Object.is(videosystem, videosystem2));  // true

    // * Métodos del objeto VideoSystem.

    // ? Getter name

    console.log("Getter name");
    console.log(videosystem.name);  // videosystem
    
    // ? Setter name

    console.log("Setter name");
    videosystem.name = "Netflix";
    console.log(videosystem.name);  // Netflix

    // ! Excepciones de setter name.

    console.log("######Excepciones Setter name######");

    // El nombre del sistema no puede estar vacío.
    try{
        videosystem.name = "";
    }catch(error) {
        console.error(error);
    }

    // ? Método addCategory()
    
    console.log("Método addCategory");
    console.log("Total de categorias en el sistema " + videosystem.addCategory(category));  // 1
    
    // ! Excepciones de addCategory

    console.log("######Excepciones Método addCategory######");
    
    // La categoría es nula.
    try {
        console.log("Total de categorias en el sistema " + videosystem.addCategory(""));
    }catch(error) {
        console.error(error);   // El campo category no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de categorias en el sistema " + videosystem.addCategory(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido category. Se esperaba un objeto de tipo Category.
    }

    // La categoría ya existe.
    try {
        console.log("Total de categorias en el sistema " + videosystem.addCategory(category));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Category ya está registrado en el sistema.
    }

    // ? Iterador de categorias.

    console.log("Iterador de categorias");
    for(const category of videosystem.categories) console.log(category);    // {}

    // ? Método removeCategory()

    console.log("Método removeCategory");
    console.log("Total de categorias en el sistema " + videosystem.removeCategory(category));   // 0

    // ! Excepciones de removeCategory

    console.log("######Excepciones Método removeCategory######");

    // La categoría es nula.
    try {
        console.log("Total de categorias en el sistema " + videosystem.removeCategory(""));
    }catch(error) {
        console.error(error);   // El campo category no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de categorias en el sistema " + videosystem.removeCategory(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido category. Se esperaba un objeto de tipo Category.
    }

    // La categoria no está registrada.
    try {
        console.log("Total de categorias en el sistema " + videosystem.removeCategory(category));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Category no está registrado en el sistema.
    }

    // ? Método addUser()

    console.log("Método addUser");
    console.log("Total de usuarios en el sistema " + videosystem.addUser(user));    // 1

    // ? Iterador de usuarios

    console.log("Iterador de usuarios");

    for(const user of videosystem.users) console.log(user); // {}

    // ! Excepciones de addUser.

    console.log("######Excepciones Método addUser######");

    // El usuario es nulo.
    try {
        console.log("Total de usuarios en el sistema " + videosystem.addUser(""));
    }catch(error) {
        console.error(error);   // El campo user no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de usuarios en el sistema " + videosystem.addUser(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido user. Se esperaba un objeto de tipo User.
    }

    // El nombre de usuario ya existe.
    try {
        console.log("Total de usuarios en el sistema " + videosystem.addUser(user));
    }catch(error) {
        console.error(error);   // Este nombre de usuario ya existe.
    }

    // El email ya existe.
    const user2 = new Entities.User("zabieru262", "zabierujlc@gmail.com");

    try {
        console.log("Total de usuarios en el sistema " + videosystem.addUser(user2));
    }catch(error) {
        console.error(error);   // Este email ya existe.
    }

    // ? Método removeUser()

    console.log("Método removeUser");
    console.log("Total de usuarios en el sistema " + videosystem.removeUser(user)); // 0
    
    // ! Excepciones de removeUser.

    console.log("######Excepciones Método removeUser######");
    
    // El usuario es nulo.
    try {
        console.log("Total de usuarios en el sistema " + videosystem.removeUser(""));
    }catch(error) {
        console.error(error);   // El campo user no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de usuarios en el sistema " + videosystem.removeUser(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido user. Se esperaba un objeto de tipo User.
    }

    // El usuario no está registrado en el sistema.
    try {
        console.log("Total de usuarios en el sistema " + videosystem.removeUser(user));
    }catch(error) {
        console.error(error);   // Este objeto User no está registrado en el sistema.
    }

    // ? Método addProduction()

    console.log("Método addProduction");
    // Probamos a añadir un objeto de las 2 clases hijas de las que hereda Production
    console.log("Total de producciones en el sistema " + videosystem.addProduction(movie)); // 1
    console.log("Total de producciones en el sistema " + videosystem.addProduction(serie)); // 2

    // ? Iterador de producciones.
    
    console.log("Iterador de producciones");
    for(const production of videosystem.productions) console.log(production);   // {}, {}

    // ! Excepciones de addProduction

    console.log("######Excepciones Método addProduction######");

    // La producción es nula.
    try {
        console.log("Total de producciones en el sistema " + videosystem.addProduction(""));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de producciones en el sistema " + videosystem.addProduction(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido production. Se esperaba un objeto de tipo Production.
    }

    // La producción ya existe.
    try {
        console.log("Total de producciones en el sistema " + videosystem.addProduction(movie));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Production ya está registrado en el sistema.
    }

    // ? Método removeProduction()

    console.log("Método removeProduction");
    console.log("Total de producciones en el sistema " + videosystem.removeProduction(movie));  // 1

    // ! Excepciones de removeProduction.

    console.log("######Excepciones Método removeProduction######");

    // La producción es nula.
    try {
        console.log("Total de producciones en el sistema " + videosystem.removeProduction(""));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de producciones en el sistema " + videosystem.removeProduction(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido production. Se esperaba un objeto de tipo Production.
    }

    // La producción no existe.
    try {
        console.log("Total de producciones en el sistema " + videosystem.removeProduction(movie));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Production no existe en el sistema.
    }

    // ? Método addActor()

    const actor1 = new Entities.Person("Tom", "Cruise", "", new Date(1962, 6, 3), 'C:\\Users\\images');
    const actor2 = new Entities.Person("Will", "Smith", "", new Date(1968, 9, 25), 'C:\\Users\\images');
    const actor3 = new Entities.Person("Dwayne", "Johnson", "", new Date(1972, 5, 2), 'C:\\Users\\images');

    console.log("Método addActor");
    console.log("Total de actores en el sistema " + videosystem.addActor(actor1));  // 1
    console.log("Total de actores en el sistema " + videosystem.addActor(actor2));  // 2
    console.log("Total de actores en el sistema " + videosystem.addActor(actor3));  // 3
    
    // ? Iterador de actores.
    
    console.log("Iterador de actores");
    for(const actor of videosystem.actors) console.log(actor);  // {}, {}, {}
    
    // ! Excepciones de addActor.

    console.log("######Excepciones Método addActor######");
    
    // El actor es nulo.
    try {
        console.log("Total de actores en el sistema " + videosystem.addActor(""));
    }catch(error) {
        console.error(error);   // El campo actor no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de actores en el sistema " + videosystem.addActor(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido actor. Se esperaba un objeto de tipo Person.
    }
    
    // El actor ya existe.
    try {
        console.log("Total de actores en el sistema " + videosystem.addActor(actor1));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Person ya existe en el sistema.
    }
    
    // ? Método removeActor()
    
    console.log("Método removeActor");
    console.log("Total de actores en el sistema " + videosystem.removeActor(actor1));   // 2

    // ! Excepciones de removeActor

    console.log("######Excepciones Método removeActor######");

    // El actor es nulo.
    try {
        console.log("Total de actores en el sistema " + videosystem.removeActor(""));
    }catch(error) {
        console.error(error);   // El campo actor no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de actores en el sistema " + videosystem.removeActor(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido actor. Se esperaba un objeto de tipo Person.
    }

    // El actor no existe.
    try {
        console.log("Total de actores en el sistema " + videosystem.removeActor(actor1));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Person no existe en el sistema.
    }

    // ? Método addDirector()

    const director1 = new Entities.Person("Steven", "Spielberg", "", new Date(1946, 11, 18), 'C:\\Users\\images');
    const director2 = new Entities.Person("James", "Cameron", "", new Date(1954, 8, 16), 'C:\\Users\\images');
    const director3 = new Entities.Person("Christopher", "Nolan", "", new Date(1970, 7, 30), 'C:\\Users\\images');

    console.log("Método addDirector");
    console.log("Total de directores en el sistema " + videosystem.addDirector(director1)); // 1
    console.log("Total de directores en el sistema " + videosystem.addDirector(director2)); // 2
    console.log("Total de directores en el sistema " + videosystem.addDirector(director3)); // 3

    // ? Iterador de directores.

    console.log("Iterador de directores");
    for(const director of videosystem.directors) console.log(director); // {}, {}, {}

    // ! Excepciones de addDirector.

    console.log("######Excepciones Método addDirector######");

    // El director es nulo.
    try {
        console.log("Total de directores en el sistema " + videosystem.addDirector(""));
    }catch(error) {
        console.error(error);   // El campo director no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de directores en el sistema " + videosystem.addDirector(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido actor. Se esperaba un objeto de tipo Person.
    }

    // El director ya existe.
    try {
        console.log("Total de directores en el sistema " + videosystem.addDirector(director1));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Person ya está registrado en el sistema.
    }
    
    // ? Método removeDirector()
    
    console.log("Método removeDirector");
    console.log("Total de directores en el sistema " + videosystem.removeDirector(director1));  // 2

    // ! Excepciones de removeDirector.

    console.log("######Excepciones Método removeDirector######");

    // El director es nulo.
    try {
        console.log("Total de directores en el sistema " + videosystem.removeDirector(""));
    }catch(error) {
        console.error(error);   // El campo director no puede estar vacío.
    }

    // Tipo de objeto no válido.
    try {
        console.log("Total de directores en el sistema " + videosystem.removeDirector(resource));
    }catch(error) {
        console.error(error);   // Objeto no válido actor. Se esperaba un objeto de tipo Person.
    }

    // El director no existe.
    try {
        console.log("Total de directores en el sistema " + videosystem.removeDirector(director1));
    }catch(error) {
        console.error(error);   // Este objeto de tipo Person no está registrado en el sistema.
    }

    // ? Método assignCategory()

    console.log("Método assignCategory");
    console.log("Categoría videojuegos");
    console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory(category, movie)); // 1
    
    // Probando a añadir varios
    const movie2 = new Entities.Movie("Reza por el diablo", "estadounidense", new Date(2022, 10, 12), "Una pelicula de terror", 'C:\\Users\\images', resource, []);
    console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory(category, movie2, serie));  // Admite varios (3)
    
    // Comprobemos que pasa si metemos una producción que ya existe en esa categoría.
    console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory(category, movie)); // 3
    // No añade a la categoría las producciones repetidas.
    console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory(category, movie2));    // 3
    
    // Asignando producciones a otra categoría.
    const category2 = new Entities.Category("Favoritos", "Mis peliculas favoritas.");
    console.log("Categoría favoritos");
    console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory(category2, movie));    // 1
    console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory(category2, serie));    // 2
    
    // ! Excepciones de assignCategory.

    console.log("######Excepciones Método assignCategory######");
    
    // La categoría es nula.
    try {
        console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory("", movie));
    }catch(error) {
        console.error(error);   // El campo category no puede estar vacío.
    }

    // Al método no se le está pasando ninguna producción.
    try {
        console.log("Total de producciones asociadas a esta categoría " + videosystem.assignCategory(category, null));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }
    
    // ? Método deassignCategory()
    
    console.log("Método deassignCategory");
    console.log("Categoría videojuegos");
    console.log("Total de producciones asociadas a esta categoría " + videosystem.deassignCategory(category, movie, serie));   // Admite varios (1)
    
    // Comprobando que pasa si se intenta desasignar una producción que no está asignada a esa categoría.
    console.log("Total de producciones asociadas a esta categoría " + videosystem.deassignCategory(category, movie));   // No la elimina. (2)

    // ! Excepciones de deassignCategory.

    console.log("######Excepciones Método deassignCategory######");

    // La categoría es nula.
    try {
        console.log("Total de producciones asociadas a esta categoría " + videosystem.deassignCategory("", movie));
    }catch(error) {
        console.error(error);   // El campo category no puede estar vacío.
    }

    // Al método no se le está pasando ninguna producción.
    try {
        console.log("Total de producciones asociadas a esta categoría " + videosystem.deassignCategory(category, null));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }

    // ? Método assignDirector()

    console.log("Método assignDirector");
    console.log("Total de producciones asociadas a este director " + videosystem.assignDirector(director3, movie)); // 1
    console.log("Total de producciones asociadas a este director " + videosystem.assignDirector(director3, movie2, serie)); // Admite varios (3)

    // Comprobemos que pasa si asignamos una producción que ya está asignada a un director.
    console.log("Total de producciones asociadas a este director " + videosystem.assignDirector(director3, movie)); // No lo añade (3)

    // ! Excepciones de assignDirector.

    console.log("######Excepciones Método assignDirector######");

    // El director es nulo.
    try {
        console.log("Total de producciones asociadas a este director " + videosystem.assignDirector("", movie));
    }catch(error) {
        console.error(error);   // El campo director no puede estar vacío.
    }

    // Al método no se le está pasando ninguna producción.
    try {
        console.log("Total de producciones asociadas a este director " + videosystem.deassignDirector(director3, null));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }

    // ? Método deassignDirector()

    console.log("Método deassignDirector");
    console.log("Total de producciones asociadas a este director " + videosystem.deassignDirector(director3, movie, serie)); // Admite varios (1)
    console.log("Total de producciones asociadas a este director " + videosystem.deassignDirector(director3, movie)); // No lo elimina (1)

    // ! Excepciones de deassignDirector.

    console.log("######Excepciones Método deassignDirector######");

    // El director es nulo.
    try {
        console.log("Total de producciones asociadas a este director " + videosystem.deassignDirector("", movie));
    }catch(error) {
        console.error(error);   // El campo director no puede estar vacío.
    }

    // Al método no se le está pasando ninguna producción.
    try {
        console.log("Total de producciones asociadas a este director " + videosystem.deassignDirector(director3, null));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }

    // ? Método assignActor()

    console.log("Método assignActor");
    console.log("Total de producciones asociadas a este actor " + videosystem.assignActor(actor3, movie));  // 1
    console.log("Total de producciones asociadas a este actor " + videosystem.assignActor(actor3, movie2, serie));  // Admite varios (3)
    
    console.log("Total de producciones asociadas a este actor " + videosystem.assignActor(actor3, movie));  // No lo añade (3)

    // ! Excepciones de assignActor.

    console.log("######Excepciones Método assignActor######");

    // El acotr es nulo.
    try {
        console.log("Total de producciones asociadas a este actor " + videosystem.assignActor("", movie));
    }catch(error) {
        console.error(error);   // El campo actor no puede estar vacío.
    }

    // Al método no se le está pasando ninguna producción.
    try {
        console.log("Total de producciones asociadas a este actor " + videosystem.assignActor(actor3, null));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }
    
    // ? Método deassignActor()
    
    console.log("Método deassignActor");
    console.log("Total de producciones asociadas a este actor " + videosystem.deassignActor(actor3, movie, serie)); // Admite varios (1)
    console.log("Total de producciones asociadas a este actor " + videosystem.deassignActor(actor3, movie)); // No lo elimina (1)

    // ! Excepciones de deassignActor.

    console.log("######Excepciones Método deassignActor######");

    // El acotr es nulo.
    try {
        console.log("Total de producciones asociadas a este actor " + videosystem.deassignActor("", movie));
    }catch(error) {
        console.error(error);   // El campo actor no puede estar vacío.
    }

    // Al método no se le está pasando ninguna producción.
    try {
        console.log("Total de producciones asociadas a este actor " + videosystem.deassignActor(actor3, null));
    }catch(error) {
        console.error(error);   // El campo production no puede estar vacío.
    }

    // ? Iterador getProductionsDirector

    console.log("Iterador getProductionsDirector");
    console.log("Producciones asociadas a " + director3.name);
    const getProductionsDirectorIterator = videosystem.getProductionsDirector(director3);
    for(const production of getProductionsDirectorIterator) console.log(production);

    // ! Excepciones de getProductionsDirector

    console.log("######Excepciones iterador getProductionsDirector######");

    // El director es nulo.
    try {
        const getProductionsDirectorIterator = videosystem.getProductionsDirector("");
        for(const production of getProductionsDirectorIterator) console.log(production);
    }catch(error) {
        console.error(error);   // El campo director no puede estar vacío,
    }

    // ? Iterador getProductionsActor

    console.log("Iterador getProductionsActor");
    console.log("Producciones en las que aparece el actor " + actor3.name);

    const getProductionsActorIterator = videosystem.getProductionsActor(actor3);
    for(const production of getProductionsActorIterator) console.log(production);

    // ! Excepciones de getProductionsActor

    console.log("######Excepciones iterador getProductionsActor######");

    // El director es nulo.
    try {
        const getProductionsActorIterator = videosystem.getProductionsActor("");
        for(const production of getProductionsActorIterator) console.log(production);
    }catch(error) {
        console.error(error);   // El campo actor no puede estar vacío,
    }

    // ? Iterador getProductionsCategory

    console.log("Iterador getProductionsCategory");
    console.log("Producciones asociadas a la categoría de " + category.name);

    const getProductionsCategoryIterator = videosystem.getProductionsCategory(category);
    for(const production of getProductionsCategoryIterator) console.log(production);

    // ! Excepciones de getProductionsCategory

    console.log("######Excepciones iterador getProductionsCategory######");

    // El director es nulo.
    try {
        const getProductionsCategoryIterator = videosystem.getProductionsActor("");
        for(const production of getProductionsCategoryIterator) console.log(production);
    }catch(error) {
        console.error(error);   // El campo category no puede estar vacío,
    }
})();