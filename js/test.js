"use strict";

import * as Entities from "./entities.js";

(function() {
    // * PROBANDO A CREAR INSTANCIAS DE LAS ENTIDADES DEL SISTEMA.

    // ? Objeto Person
    console.log("Objeto Person");

    const person = new Entities.Person("Javier", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    console.log(person);    // {}
    console.log(person.name);   // Javier
    
    // ! EXCEPCIONES DEL OBJETO PERSON.
    
    // Invocar al constructor sin new:
    try {
        const person = Entities.Person("Javier", "López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El constructor no puede ser invocado sin new.
    }
    
    // El nombre está sin definir:
    try {
        const person = new Entities.Person("López", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo name no puede estar vacío.
    }
    
    // El primer apellido está sin definir:
    try {
        const person = new Entities.Person("Javier", "Carretero", new Date(2000, 8, 6), 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo lastName1 no puede estar vacío.
    }
    
    // La fecha de nacimiento está sin definir:
    try {
        const person = new Entities.Person("Javier", "López", "Carretero", 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // El campo born no puede estar vacío.
    }
    
    // El campo born no es una fecha:
    try {
        const person = new Entities.Person("Javier", "López", "Carretero", "2000, 8, 6", 'C:\\Users\\images');
    }catch(error) {
        console.error(error);   // EL objeto que se está pasando no es una fecha.
    }
})();