"use strict";

import * as Entities from "../entities/entities.js";
import countProductionsClossure from "../utilities/util.js";

/**
 * Clase controlodar para el objeto Videosystem.
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemController {
    // Campos privados
    #model;
    #view;
    #counter = countProductionsClossure();

    /**
     * Método privado que crea los recursos de la página
     * por defecto y los añade al sistema.
     */
    #createResources() {
        fetch("./js/utilities/objects.json")
            .then(res => res.json())
            .then(data => {
                // * Creamos y añadimos el usuario.
                const user = new Entities.User(data.user.username, data.user.email, data.user.password);
                this.#model.addUser(user);

                const categories = data.categories;

                // * Creamos las categorias.
                const c1 = new Entities.Category(categories[0].name, categories[0].description);
                const c2 = new Entities.Category(categories[1].name, categories[1].description);
                const c3 = new Entities.Category(categories[2].name, categories[2].description);
                const c4 = new Entities.Category(categories[3].name, categories[3].description);
                const c5 = new Entities.Category(categories[4].name, categories[4].description);
                const c6 = new Entities.Category(categories[5].name, categories[5].description);

                // * Añadimos las categorías al modelo.
                this.#model.addCategory(c1);
                this.#model.addCategory(c2);
                this.#model.addCategory(c3);
                this.#model.addCategory(c4);
                this.#model.addCategory(c5);
                this.#model.addCategory(c6);

                const productions = data.productions;

                // * Creamos las producciones.
                const movie1 = new Entities.Movie(
                    productions[0].title,
                    productions[0].nationality,
                    new Date(productions[0].publication),
                    productions[0].synopsis,
                    productions[0].image,
                    new Entities.Resource(productions[0].resource.duration, productions[0].resource.link),
                    productions[0].locations
                );

                const movie2 = new Entities.Movie(
                    productions[1].title,
                    productions[1].nationality,
                    new Date(productions[1].publication),
                    productions[1].synopsis,
                    productions[1].image,
                    new Entities.Resource(productions[1].resource.duration, productions[1].resource.link),
                    productions[1].locations
                );

                const movie3 = new Entities.Movie(
                    productions[2].title,
                    productions[2].nationality,
                    new Date(productions[2].publication),
                    productions[2].synopsis,
                    productions[2].image,
                    new Entities.Resource(productions[2].resource.duration, productions[2].resource.link),
                    productions[2].locations
                );

                const movie4 = new Entities.Movie(
                    productions[3].title,
                    productions[3].nationality,
                    new Date(productions[3].publication),
                    productions[3].synopsis,
                    productions[3].image,
                    new Entities.Resource(productions[3].resource.duration, productions[3].resource.link),
                    productions[3].locations
                );

                const movie5 = new Entities.Movie(
                    productions[4].title,
                    productions[4].nationality,
                    new Date(productions[4].publication),
                    productions[4].synopsis,
                    productions[4].image,
                    new Entities.Resource(productions[4].resource.duration, productions[4].resource.link),
                    productions[4].locations
                );

                const movie6 = new Entities.Movie(
                    productions[5].title,
                    productions[5].nationality,
                    new Date(productions[5].publication),
                    productions[5].synopsis,
                    productions[5].image,
                    new Entities.Resource(productions[5].resource.duration, productions[5].resource.link),
                    productions[5].locations
                );

                const movie7 = new Entities.Movie(
                    productions[6].title,
                    productions[6].nationality,
                    new Date(productions[6].publication),
                    productions[6].synopsis,
                    productions[6].image,
                    new Entities.Resource(productions[6].resource.duration, productions[6].resource.link),
                    productions[6].locations
                );

                const movie8 = new Entities.Movie(
                    productions[7].title,
                    productions[7].nationality,
                    new Date(productions[7].publication),
                    productions[7].synopsis,
                    productions[7].image,
                    new Entities.Resource(productions[7].resource.duration, productions[7].resource.link),
                    productions[7].locations
                );

                const serie1 = new Entities.Serie(
                    productions[8].title,
                    productions[8].nationality,
                    new Date(productions[8].publication),
                    productions[8].synopsis,
                    productions[8].image,
                    productions[8].resources,
                    productions[8].locations,
                    productions[8].seasons
                );

                const serie2 = new Entities.Serie(
                    productions[9].title,
                    productions[9].nationality,
                    new Date(productions[9].publication),
                    productions[9].synopsis,
                    productions[9].image,
                    productions[9].resources,
                    productions[9].locations,
                    productions[9].seasons
                );

                const serie3 = new Entities.Serie(
                    productions[10].title,
                    productions[10].nationality,
                    new Date(productions[10].publication),
                    productions[10].synopsis,
                    productions[10].image,
                    productions[10].resources,
                    productions[10].locations,
                    productions[10].seasons
                );

                const serie4 = new Entities.Serie(
                    productions[11].title,
                    productions[11].nationality,
                    new Date(productions[11].publication),
                    productions[11].synopsis,
                    productions[11].image,
                    productions[11].resources,
                    productions[11].locations,
                    productions[11].seasons
                );

                const serie5 = new Entities.Serie(
                    productions[12].title,
                    productions[12].nationality,
                    new Date(productions[12].publication),
                    productions[12].synopsis,
                    productions[12].image,
                    productions[12].resources,
                    productions[12].locations,
                    productions[12].seasons
                );

                const serie6 = new Entities.Serie(
                    productions[13].title,
                    productions[13].nationality,
                    new Date(productions[13].publication),
                    productions[13].synopsis,
                    productions[13].image,
                    productions[13].resources,
                    productions[13].locations,
                    productions[13].seasons
                );

                const serie7 = new Entities.Serie(
                    productions[14].title,
                    productions[14].nationality,
                    new Date(productions[14].publication),
                    productions[14].synopsis,
                    productions[14].image,
                    productions[14].resources,
                    productions[14].locations,
                    productions[14].seasons
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

                const directors = data.directors;

                // * Creando los directores.
                const d1 = new Entities.Person(
                    directors[0].name,
                    directors[0].lastname1,
                    directors[0].lastname2,
                    new Date(directors[0].born),
                    directors[0].image
                );

                const d2 = new Entities.Person(
                    directors[1].name,
                    directors[1].lastname1,
                    directors[1].lastname2,
                    new Date(directors[1].born),
                    directors[1].image
                );

                const d3 = new Entities.Person(
                    directors[2].name,
                    directors[2].lastname1,
                    directors[2].lastname2,
                    new Date(directors[2].born),
                    directors[2].image
                );

                const d4 = new Entities.Person(
                    directors[3].name,
                    directors[3].lastname1,
                    directors[3].lastname2,
                    new Date(directors[3].born),
                    directors[3].image
                );

                const d5 = new Entities.Person(
                    directors[4].name,
                    directors[4].lastname1,
                    directors[4].lastname2,
                    new Date(directors[4].born),
                    directors[4].image
                );

                const d6 = new Entities.Person(
                    directors[5].name,
                    directors[5].lastname1,
                    directors[5].lastname2,
                    new Date(directors[5].born),
                    directors[5].image
                );

                // * Añadiendo los directores.
                this.#model.addDirector(d1);
                this.#model.addDirector(d2);
                this.#model.addDirector(d3);
                this.#model.addDirector(d4);
                this.#model.addDirector(d5);
                this.#model.addDirector(d6);

                // * Creando los actores.

                const actors = data.actors;

                const a1 = new Entities.Person(
                    actors[0].name,
                    actors[0].lastname1,
                    actors[0].lastname2,
                    new Date(actors[0].born),
                    actors[0].image
                );

                const a2 = new Entities.Person(
                    actors[1].name,
                    actors[1].lastname1,
                    actors[1].lastname2,
                    new Date(actors[1].born),
                    actors[1].image
                );

                const a3 = new Entities.Person(
                    actors[2].name,
                    actors[2].lastname1,
                    actors[2].lastname2,
                    new Date(actors[2].born),
                    actors[2].image
                );

                const a4 = new Entities.Person(
                    actors[3].name,
                    actors[3].lastname1,
                    actors[3].lastname2,
                    new Date(actors[3].born),
                    actors[3].image
                );

                const a5 = new Entities.Person(
                    actors[4].name,
                    actors[4].lastname1,
                    actors[4].lastname2,
                    new Date(actors[4].born),
                    actors[4].image
                );

                const a6 = new Entities.Person(
                    actors[5].name,
                    actors[5].lastname1,
                    actors[5].lastname2,
                    new Date(actors[5].born),
                    actors[5].image
                );

                const a7 = new Entities.Person(
                    actors[6].name,
                    actors[6].lastname1,
                    actors[6].lastname2,
                    new Date(actors[5].born),
                    actors[5].image
                );

                const a8 = new Entities.Person(
                    actors[7].name,
                    actors[7].lastname1,
                    actors[7].lastname2,
                    new Date(actors[7].born),
                    actors[7].image
                );

                const a9 = new Entities.Person(
                    actors[8].name,
                    actors[8].lastname1,
                    actors[8].lastname2,
                    new Date(actors[8].born),
                    actors[8].image
                );

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

                if(this.#cookieExists("authenticated", "true")) {
                    this.onInit();
                }else{
                    this.onNotAuthenticatedUserInit();
                }
            })
            .catch(error => console.log("Algo salió mal " + error));
    }

    /**
     * Método privado que crea una categoría y la añade al modelo.
     * Operación para formularios.
     * @param {*} title El nombre de la categoría.
     * @param {*} desc La descripción de la categoría.
     */
    #createNewCategory(title, desc) {
        const category = new Entities.Category(title, desc);
        this.#model.addCategory(category);

        // Comunicamos el cambio a la vista.
        this.#view.emptyCategoriesContainer();
        this.onShowCategoriesInCentralZone();
        
        // Tenemos que actualizar también el select para que coja la categoría nueva.
        this.#view.emptySelectCategories();
        this.onfillSelectCategories(this.#model.categories);
        this.#view.emptyDropdownCategoriesContainer();
        this.#view.showCategoriesMenu(this.#model.categories);
    }

    /**
     * Método privado que elimina la categoría que se recoje
     * del select. Una vez eliminada, actualiza la vista.
     * @param {*} value El valor que se recogió del select
     * del formulario de eliminar categorías.
     */
    #deleteCategory(value) {
        for(const elem of this.#model.categories) {
            if(elem.category.name === value) this.#model.removeCategory(elem.category);
        }
        
        this.#view.emptyCategoriesContainer();
        this.onShowCategoriesInCentralZone();
        
        this.#view.emptyDropdownCategoriesContainer();
        this.#view.showCategoriesMenu(this.#model.categories);
    }

    /**
     * Método que comprueba si existe una categoría
     * en el modelo.
     * @param {*} categoryName El nombre de la categoría a buscar.
     * @returns True si existe, false si no es así.
     */
    #categoryExists(categoryName) {
        let exists = false;

        for(const elem of this.#model.categories) {
            if(elem.category.name.toLowerCase() === categoryName.toLowerCase()) {
                exists = true;
                break;
            }
        }

        return exists;
    }

    /**
     * Método privado que crea una nueva producción en el modelo
     * con los valores recogidos del formulario de crear producción.
     * @param {*} values Objeto literal con los valores del
     * formulario.
     */
    #createNewProduction(values) {
        let production = null;

        if(values.radio === "radio-movie") {
            production = new Entities.Movie(
                values.title.value, 
                values.nationality.value,
                new Date(values.date.value),
                values.synopsis.value,
                "C:\\Users\\images",
                new Entities.Resource(+values.field.value, `videosystem.com\\${values.title.value}`),
                []
            );
        }
        
        if(values.radio === "radio-serie") {
            production = new Entities.Serie(
                values.title.value, 
                values.nationality.value,
                new Date(values.date.value),
                values.synopsis.value,
                "C:\\Users\\images",
                [],
                [],
                +values.field.value
            );
        }

        this.#model.addProduction(production);   // Añadimos la producción del  modelo.
        
        const productionsContainer = document.querySelector(".productions-container");

        // Si la vista de producciones se ha creado
        if(productionsContainer) {
            // Actualizamos la vista.
            this.#view.emptyProductionsContainer();
            this.onShowAllProductions(this.#model.productions);
        }

        const categoryValue = values.category.value;
        let category = null;

        if(categoryValue) {
            for(const elem of this.#model.categories) {
                if(elem.category.name === categoryValue) {
                    category = elem.category;
                    break;
                }
            }

            this.#model.assignCategory(category, production);
            this.#view.emptyCategoriesContainer();
            this.onShowCategoriesInCentralZone();
        }
    }

    /**
     * Método privado que comprueba si existe una producción
     * en el modelo. El nombre de la producción se recibe del
     * formulario crear producciones.
     * @param {*} productionName El nombre de la producción.
     * @returns True si existe, false si no es así.
     */
    #productionExists(productionName) {
        let exists = false;

        for(const elem of this.#model.productions) {
            if(elem.production.title.toLowerCase() === productionName.toLowerCase()) {
                exists = true;
                break;
            }
        }

        return exists;
    }

    /**
     * Método que elimina una producción que se ha seleccionado
     * del formulario de eliminar producciones.
     * @param {*} productionName El nombre de la producción que se
     * ha escrito en el formulario de eliminar producciones.
     */
    #deleteProduction(productionName) {
        // Primero tenemos que encontrar la producción.
        let production = null;

        for(const elem of this.#model.productions) {
            if(elem.production.title.toLowerCase() === productionName.toLowerCase()) {
                production = elem.production;
                break;
            }
        }

        this.#model.removeProduction(production);   // Eliminamos la producción del  modelo.
        
        const productionsContainer = document.querySelector(".productions-container");

        // Si la vista de producciones se ha creado
        if(productionsContainer) {
            // Actualizamos la vista.
            this.#view.emptyProductionsContainer();
            this.onShowAllProductions(this.#model.productions);
        }

        // Comprobamos también si la producción estaba asociada a una categoría.
        for(const elem of this.#model.categories) {
            const resource = elem.productions.find(p => p.title === productionName);
            if(resource) this.#model.deassignCategory(elem.category, resource);
        }

        // Hacemos lo mismo para los actores.
        for(const elem of this.#model.actors) {
            const resource = elem.productions.find(p => p.title === productionName);
            if(resource) this.#model.deassignActor(elem.actor, resource);
        }

        // Y para los directores.
        for(const elem of this.#model.directors) {
            const resource = elem.productions.find(p => p.title === productionName);
            if(resource) this.#model.deassignDirector(elem.director, resource);
        }

        // Actualizamos la vista de categorías ya que tienen producciones en su interior.
        this.#view.emptyCategoriesContainer();
        this.onShowCategoriesInCentralZone();
    }

    /**
     * Método que añade una persona (puede ser un actor o un director)
     * al modelo por medio del formulario añadir persona.
     * @param {*} radio La opción que escogío el usuario. Puede ser actor o director.
     * @param {*} fields Un objeto literal con los campos del formulario.
     */
    #addPerson(radio, fields, selectValue) {
        const full = fields.lastName.value.split(" ");

        if(!full[1]) full[1] = "";

        const person = new Entities.Person(
            fields.name.value,
            full[0],
            full[1],
            new Date(fields.date.value),
            'C:\\Users\\images'
        );

        const actorsContainer = document.querySelector(".actors-container");
        const directorsContainer = document.querySelector(".directors-container");

        if(radio === "radio-actor") {
            this.#model.addActor(person);
            if(actorsContainer) {
                this.#view.emptyActorsContainer();
                this.onShowAllActors();
            }

            let production = null;

            if(selectValue) {
                for(const elem of this.#model.productions) {
                    if(elem.production.title === selectValue) {
                        production = elem.production;
                    }
                }

                this.#model.assignActor(person, production);

                if(actorsContainer) {
                    this.#view.emptyActorsContainer();
                    this.onShowAllActors();
                }
            }
        }

        if(radio === "radio-director") {
            this.#model.addDirector(person);
            if(directorsContainer) {
                this.#view.emptyDirectorsContainer();
                this.onShowAllDirectors();
            }

            let production = null;

            if(selectValue) {
                for(const elem of this.#model.productions) {
                    if(elem.production.title === selectValue) {
                        production = elem.production;
                    }
                }

                this.#model.assignDirector(person, production);

                if(directorsContainer) {
                    this.#view.emptyDirectorsContainer();
                    this.onShowAllDirectors();
                }
            }
        }
    }

    #deletePerson(radio, fullname) {
        let person = null;

        const actorsContainer = document.querySelector(".actors-container");
        const directorsContainer = document.querySelector(".directors-container");

        if(radio === "radio-actor") {
            for(const elem of this.#model.actors) {
                if(elem.actor.fullName === fullname) {
                    person = elem.actor;
                    break;
                }
            }

            this.#model.removeActor(person);

            if(actorsContainer) {
                this.#view.emptyActorsContainer();
                this.onShowAllActors();
            }
        }

        if(radio === "radio-director") {
            for(const elem of this.#model.directors) {
                if(elem.director.fullName === fullname) {
                    person = elem.director;
                    break;
                }
            }

            this.#model.removeDirector(person);

            if(directorsContainer) {
                this.#view.emptyDirectorsContainer();
                this.onShowAllDirectors();
            }
        }
    }

    /**
     * Método que comprueba si la persona existe en el modelo.
     * @param {*} type El tipo de entidad (actor o director)
     * @param {*} personName El nombre de la persona.
     */
    #personExists(type, personName) {
        let exists = false;

        if(type === "radio-actor") {
            for(const elem of this.#model.actors) {
                if(elem.actor.fullName === personName) {
                    exists = true;
                    break;
                }
            }
        }

        if(type === "radio-director") {
            for(const elem of this.#model.directors) {
                if(elem.director.fullName === personName) {
                    exists = true;
                    break;
                }
            }
        }

        return exists;
    }

    /**
     * Método privado que asigna una producción a una entidad que se
     * haya elegido en el formulario de asignar producciones.
     * @param {*} fields Un objeto literal con los valores recogidos
     * del formulario de asignar producciones.
     */
    #assignProduction(fields) {
        const actorsContainer = document.querySelector(".actors-container");
        const directorsContainer = document.querySelector(".directors-container");

        let actor = null;
        let director = null;
        let category = null;
        let production = null;

        for(const elem of this.#model.productions) {
            if(elem.production.title.toLowerCase() === fields.productionName.toLowerCase()) {
                production = elem.production;
                break;
            }
        }

        if(fields.type === "radio-actor") {
            for(const elem of this.#model.actors) {
                if(elem.actor.fullName.toLowerCase() === fields.entity.toLowerCase()) {
                    actor = elem.actor;
                    break;
                }
            }

            this.#model.assignActor(actor, production);

            if(actorsContainer) {
                this.#view.emptyActorsContainer();
                this.onShowAllActors();
            }
        }

        if(fields.type === "radio-director") {
            for(const elem of this.#model.directors) {
                if(elem.director.fullName.toLowerCase() === fields.entity.toLowerCase()) {
                    director = elem.director;
                    break;
                }
            }

            this.#model.assignDirector(director, production);

            if(directorsContainer) {
                this.#view.emptyDirectorsContainer();
                this.onShowAllDirectors();
            }
        }

        if(fields.type === "radio-category") {
            for(const elem of this.#model.categories) {
                if(elem.category.name.toLowerCase() === fields.entity.toLowerCase()) {
                    category = elem.category;
                    break;
                }
            }

            this.#model.assignCategory(category, production);

            this.#view.emptyCategoriesContainer();
            this.onShowCategoriesInCentralZone();
        }
    }

    // #entityHasProduction(entityType, entityName, productionName) {
    //     let actor = null;
    //     let director = null;
    //     let category = null;
    //     let production = null;

    //     let exists = false;

    //     for(const elem of this.#model.productions) {
    //         if(elem.production.title === productionName) {
    //             production = elem.production;
    //             break;
    //         }
    //     }

    //     if(entityType === "radio-actor") {
    //         for(const elem of this.#model.actors) {
    //             if(elem.actor.fullName === entityName) {
    //                 actor = elem.actor;
    //                 break;
    //             }
    //         }

    //         const productions = this.#model.getProductionsActor(actor);

    //         for(const p of productions) {
    //             if(p.production.title === productionName) {
    //                 exists = true;
    //                 break;
    //             }
    //         }
    //     }

    //     if(entityType === "radio-director") {
    //         for(const elem of this.#model.directors) {
    //             if(elem.director.fullName === entityName) {
    //                 director = elem.actor;
    //                 break;
    //             }
    //         }

    //         const productions = this.#model.getProductionsDirector(director);

    //         for(const p of productions) {
    //             if(p.production.title === productionName) {
    //                 exists = true;
    //                 break;
    //             }
    //         }
    //     }

    //     if(entityType === "radio-category") {
    //         for(const elem of this.#model.categories) {
    //             if(elem.category.name === entityName) {
    //                 category = elem.category;
    //                 break;
    //             }
    //         }

    //         const productions = this.#model.getProductionsCategory(category);

    //         for(const p of productions) {
    //             if(p.production.title === productionName) {
    //                 exists = true;
    //                 break;
    //             }
    //         }
    //     }

    //     return exists;
    // }

    #deassignProduction(fields) {
        const actorsContainer = document.querySelector(".actors-container");
        const directorsContainer = document.querySelector(".directors-container");

        let actor = null;
        let director = null;
        let category = null;
        let production = null;

        for(const elem of this.#model.productions) {
            if(elem.production.title.toLowerCase() === fields.productionName.toLowerCase()) {
                production = elem.production;
                break;
            }
        }

        if(fields.type === "radio-actor") {
            for(const elem of this.#model.actors) {
                if(elem.actor.fullName.toLowerCase() === fields.entity.toLowerCase()) {
                    actor = elem.actor;
                    break;
                }
            }

            this.#model.deassignActor(actor, production);

            if(actorsContainer) {
                this.#view.emptyActorsContainer();
                this.onShowAllActors();
            }
        }

        if(fields.type === "radio-director") {
            for(const elem of this.#model.directors) {
                if(elem.director.fullName.toLowerCase() === fields.entity.toLowerCase()) {
                    director = elem.director;
                    break;
                }
            }

            this.#model.deassignDirector(director, production);

            if(directorsContainer) {
                this.#view.emptyDirectorsContainer();
                this.onShowAllDirectors();
            }
        }

        if(fields.type === "radio-category") {
            for(const elem of this.#model.categories) {
                if(elem.category.name.toLowerCase() === fields.entity.toLowerCase()) {
                    category = elem.category;
                    break;
                }
            }

            this.#model.deassignCategory(category, production);

            this.#view.emptyCategoriesContainer();
            this.onShowCategoriesInCentralZone();
        }
    }

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        this.onLoad();
    }

    /**
     * Método que muestra los componenetes principales
     * de la página en la vista al recargar la página.
     */
    onInit = () => {
        this.#view.init();
        this.onShowCategoriesMenu();
        this.onShowUser(this.#model.users);
        this.onShowProductionsInCarousel(this.#model.productions);
        this.onfillSelectCategories(this.#model.categories);
        this.onShowCategoriesInCentralZone();

        this.#view.bindInit(this.handleInit);
        this.#view.bindLogout(this.handleLogout);
        this.#view.bindProductions(this.handleProductions);
        this.#view.bindDirectors(this.handleDirectors);
        this.#view.bindActors(this.handleActors);

        this.#view.bindCreateCategory(this.validateCreateCategoryFormHandler);
        this.#view.bindDeleteCategory(this.handleSelectCategory);
        this.#view.bindCreateProductionForm(this.createProductionsFormHandler);
        this.#view.bindCreateProduction(this.validateFormCreateProductionHandler);
        this.#view.bindShowDeleteProductionForm(this.showDeleteProductionsFormHandler);
        this.#view.bindDeleteProduction(this.validateDeleteProductionFormHandler);
        this.#view.bindAddPersonForm(this.showAddPersonFormHandler);
        this.#view.bindAddPerson(this.validateAddPersonFormHandler);
        this.#view.bindDeletePersonForm(this.showDeletePersonFormHandler)
        this.#view.bindDeletePerson(this.validateDeletePersonFormHandler);
        this.#view.bindAssignProductionForm(this.showAssignProductionFormHandler);
        this.#view.bindDynamicSelectAssignProductionsForm(this.dynamicSelectHandler);
        this.#view.bindAssignProduction(this.validateAssignProductionFormHandler);
        this.#view.bindDeassignProductionForm(this.showDeassignProductionFormHandler);
        this.#view.bindDynamicSelectDeassignProductionsForm(this.dynamicSelectHandler);
        this.#view.bindDeassignProduction(this.validateDeassignProductionHandler);

        this.#view.bindFavourites(this.showFavouritesPanelHandler);
    };

    /**
     * Método que invoca al método privado que crea
     * todos los recursos que utiliza la página por defecto.
     */
    onLoad = () => {
        this.#createResources();
    };

    /**
     * Método que carga el inicio de la página (carga los
     * componentes esenciales) cuando el usuario no se ha
     * autenticado.
     */
    onNotAuthenticatedUserInit = () => {
        this.#view.createLoginForm();
        this.#view.bindSignIn(this.authenticateUser);
    };

    /**
     * Manejador para enlazar en la vista los enlaces
     * del logo y del inicio.
     */
    handleInit = () => {
        this.onInit();
    };

    /**
     * Handler que comprueba si el usuario y la contraseña
     * son admin del formulario de login.
     * @param {*} username El nombre de usuario del formulario de login.
     * @param {*} password La contraseña del formulario de login. 
     */
    authenticateUser = (form, username, password) => {
        let valid = false;
        const submitInfo = form.getElementsByClassName("submit-info")[0];

        if(username.value !== "admin" || password.value !== "admin1234") {
            username.classList.add("is-invalid");
            password.classList.add("is-invalid");

            submitInfo.classList.add("text-danger");
            submitInfo.textContent = "Usuario incorrecto";
        }else{
            this.#setCookie("authenticated", "true", 20);
            valid = true;
        }

        return valid;
    }

    /**
     * Handler que comunica a la vista el cierre de sesión.
     * Para ello borra la cookie de autenticación.
     */
    handleLogout = () => {
        this.#setCookie("authenticated", "", 0);
        window.location.reload();
    };

    /**
     * Método que añade una cookie.
     * @param {*} cname Nombre de la cookie.
     * @param {*} cvalue Valor de la cookie.
     * @param {*} exdays Dias que tarda en expirar la cookie.
     */
    #setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    /**
     * Método que comprueba si existe una cookie.
     * @param {*} cname El nombre de la cookie.
     * @param {*} cvalue El valor de la cookie.
     */
    #cookieExists(cname, cvalue) {
        let exists = false;

        const cookies = document.cookie.split(";");

        for(const cookie of cookies) {
            const [name, value] = cookie.split("=");

            if(name === cname && value === cvalue) {
                exists = true;
                break;
            }
        }

        return exists;
    }

    /**
     * Método que invoca al método que muestra las categorias
     * en la navbar en la vista. Utiliza el iterador de categorias
     * del modelo.
     */
    onShowCategoriesMenu() {
        this.#view.showCategoriesMenu(this.#model.categories);
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
     * Método que invoca al método de la vista que rellena
     * el select de categorías con las categorías que hay en
     * el modelo.
     * @param {*} categories El iterador de categorías del modelo. 
     */
    onfillSelectCategories(categories) {
        this.#view.fillSelectCategories(categories);
    }

    /**
     * Handler que valida el formulario de crear categorías
     * al enviar el formulario. Crea la categoría si está todo correcto.
     * @param {*} title El titulo de la categoría.
     * @param {*} desc La descripción de la categoría.
     */
    validateCreateCategoryFormHandler = (title, desc) => {
        const feedback = document.querySelector(".add-category-form > div.mb-3 > div.invalid-feedback");
        const submitInfo = document.querySelector(".add-category-form > div.submit-info");

        if(!title.value) {
            title.classList.add("is-invalid");
            feedback.classList.add("text-danger");
            feedback.textContent = "El nombre de categoría está vacío";
            submitInfo.textContent = "";
        }else if(this.#categoryExists(title.value)) {
            title.classList.add("is-invalid");
            feedback.classList.add("text-danger");
            feedback.textContent = "La categoría ya existe";
            submitInfo.textContent = "";
        }else{
            title.classList.remove("is-invalid");
            feedback.textContent = "";

            this.#createNewCategory(title.value, desc.value);

            submitInfo.classList.add("text-success");
            submitInfo.textContent = "Categoría creada";

            title.value = "";
            desc.value = "";
        }
    };

    /**
     * Handler que valida el formulario de eliminar
     * categorías. Si todo está correcto elimina la categoría.
     */
    handleSelectCategory = (form) => {
        const submitInfo = document.querySelector(".delete-category-form > div.submit-info");
        const select = form.getElementsByClassName("select-categories")[0];

        if(!select.value) {
            if(submitInfo.classList.contains("text-success")) {
                submitInfo.classList.remove("text-success");
            }
            submitInfo.classList.add("text-danger");
            submitInfo.textContent = "No se ha seleccionado ninguna categoría.";
        }else{
            if(submitInfo.classList.contains("text-danger")) {
                submitInfo.classList.remove("text-danger");
            }
            submitInfo.classList.add("text-success");
            submitInfo.textContent = "Categoría eliminada.";

            // Eliminamos la categoría del modelo.
            this.#deleteCategory(select.value);

            // Actualizamos el select.
            this.#view.emptySelectCategories();
            this.onfillSelectCategories(this.#model.categories);

            select.value = "";
        }
    }

    /**
     * Método que invoca al método que muestra las categorias
     * en la zona central en la vista. Accede al iterador de
     * categorias del modelo y por cada categoria que tengamos
     * invoca a showCategoriesInCentralZone con el objeto category
     * correspondiente y sus producciones.
     */
    onShowCategoriesInCentralZone() {
        for(const elem of this.#model.categories) {
            this.#view.showCategoriesInCentralZone(elem.category, this.#model.getProductionsCategory(elem.category));
        }
    }

    /**
     * Manejador de eventos que permite a la vista
     * mostrar todas las producciones.
     */
    handleProductions = () => {
        this.#view.createProductionsSection();  // Primero crea la sección de producciones
        this.onShowAllProductions(this.#model.productions);     // Y después añade las producciones.
    };

    /**
     * Método que ejecuta el método que muestra todas las
     * producciones de la vista.
     * @param {*} productions El iterador de producciones del modelo.
     */
    onShowAllProductions(productions) {
        this.#view.showAllProductions(productions);
        this.#view.bindProductionWindow(this.openWindowHandler);
        this.#view.bindSaveInFavs(this.saveInFavsHandler);
    }

    /**
     * Handler que permite a la vista de producciones abrir
     * una ventana con los detalles de la producción.
     * @param {*} productionTitle El nombre de la producción.
     */
    openWindowHandler = (productionTitle) => {
        let production = null;
        const self = this;  // Guardamos el contexto de this en una variable por si lo necesitamos.

        for(const elem of this.#model.productions) {
            if(elem.production.title === productionTitle) {
                production = elem.production;
            }
        }

        const myWindow = window.open("productionDetails.html", `Detalles de ${productionTitle}`, "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");

        myWindow.addEventListener("DOMContentLoaded", function() {
            myWindow.focus();

            const title = this.document.querySelector(".p-title");
            const type = this.document.querySelector(".p-type");
            const resources = this.document.querySelector(".p-resource");
            const date = this.document.querySelector(".p-date");
            const nationality = this.document.querySelector(".p-nationality");
            const synopsis = this.document.querySelector(".p-synopsis");
            const castingContainer = $(this.document).find(".production-casting");

            title.textContent = production.title;
            
            if(production instanceof Entities.Movie) {
                type.textContent = "Película";
                resources.textContent = `Duración ${production.resource.duration} minutos`;
            }

            if(production instanceof Entities.Serie) {
                type.textContent = "Serie";
                resources.textContent =  `Número de temporadas ${production.seasons}`;
            }

            date.textContent = production.publication.toLocaleDateString();
            nationality.textContent = production.nationality;
            synopsis.textContent = production.synopsis;

            const casting = self.#model.getCast(production);

            castingContainer.empty();

            for(const person of casting) {
                const elem = $(`<li class="list-group-item">${person.fullName}</li>`);
                castingContainer.append(elem);
            }

            const closeWindowBtn = myWindow.document.getElementsByClassName("close-window-btn")[0];
            closeWindowBtn.addEventListener("click", () => this.close());
        });
    };

    /**
     * Handler que va guardando en el localstorage las producciones
     * favoritas del usuario.
     * @param {*} productionName El nombre de la producción.
     */
    saveInFavsHandler = (productionName) => {
        if(localStorage.getItem(this.#counter.returnProductionInstances()) !== productionName) {
            localStorage.setItem(this.#counter.returnProductionInstances(), productionName);
            this.#counter.increment();
        }
    };

    /**
     * Handler que ejecuta el método que ejecuta el método
     * de la vista que muestra el panel de producciones favoritas.
     */
    showFavouritesPanelHandler = () => {
        this.onShowFavouritesPanel();
    }
    
    /**
     * Método que muestra el panel de producciones favoritas
     * del usuario.
     */
    onShowFavouritesPanel() {
        this.#view.showFavouritesPanel();
        this.fillListOfFavourites();
    }

    /**
     * Método que rellena la lista de favoritos con las
     * producciones que hay guardadas dentro del localstorage.
     */
    fillListOfFavourites() {
        const favouritesList = document.querySelector(".favourites-list");

        if(!localStorage.length) {
            favouritesList.innerHTML = "Todavía no has añadido nada a favoritos.";
        }else{
            for(let i = 0; i < localStorage.length; i++) {
                const li = document.createElement("li");
                li.textContent = localStorage.getItem(i);
                li.classList.add("list-group-item");
                favouritesList.appendChild(li);
            }
        }
    }

    /**
     * Handler que permite mostrar el formulario de crear
     * producciones al ser ejecutado.
     */
    createProductionsFormHandler = () => {
        this.onShowCreateProductionsForm();
    }

    /**
     * Handler que invoca al método que muestra el
     * formulario de crear producciones de la vista.
     */
    onShowCreateProductionsForm() {
        this.#view.showCreateProductionForm();
    }

    /**
     * Handler que invoca al método que invoca al método
     * de la vista que muestra el formulario de eliminar
     * producciones.
     */
    showDeleteProductionsFormHandler = () => {
        this.onShowDeleteProductionsForm();
    };

    /**
     * Método que valida el formulario de eliminar producciones,
     * al enviarse el formulario.
     * @param {*} productions El iterador de producciones del modelo.
     */
    onValidateDeleteProductionForm(productions) {
        const submitInfo = document.querySelector(".delete-production-form > div.submit-info");
        const search = document.getElementById("input-search-production");
        const feedback = document.querySelector(".delete-production-form > div.mb-3 > div.invalid-feedback");

        if(!search.value) {
            feedback.textContent = "El campo de búsqueda está vacío.";
            feedback.classList.add("d-block");
            search.classList.remove("is-valid");
            search.classList.add("is-invalid");
            submitInfo.textContent = "";
        }else if(!(this.#productionExists(search.value))) {
            feedback.textContent = "La producción no existe.";
            feedback.classList.add("d-block");
            search.classList.remove("is-valid");
            search.classList.add("is-invalid");
            submitInfo.textContent = "";
        }else{
            feedback.textContent = "";
            search.classList.remove("is-invalid");
            search.classList.add("is-valid");
            submitInfo.classList.add("text-success");

            this.#deleteProduction(search.value);

            search.classList.remove("is-valid");
            search.value = "";

            submitInfo.textContent = "Producción eliminada";
        }
    }

    /**
     * Handler que invoca al método que valida el formulario de
     * eliminar producciones. Ocurre cuando se envia el formulario.
     */
    validateDeleteProductionFormHandler = () => {
        this.onValidateDeleteProductionForm(this.#model.productions);
    };

    /**
     * Método que invoca al método de la vista que
     * muestra el formulario para eliminar producciones.
     */
    onShowDeleteProductionsForm() {
        this.#view.showDeleteProductionsForm();
    }

    /**
     * Handler que valída el formulario de crear producciones al
     * dispararse el evento submit.
     * @param {*} form El formulario de crear producciones.
     */
    validateFormCreateProductionHandler = (form) => {
        const radio = form.addProductionRadioGroup.value;
        const title = form["production-title"];
        const nationality = form["production-nationality"];
        const date = form["production-date"];
        const synopsis = form["production-synopsis"];
        const duration = form["production-duration"];
        const seasons = form["production-seasons"];
        const category = form.querySelector(".select-categories");

        let field = null;
        let feedbackIndex = 0;
        let message = "";

        if(radio === "radio-movie") {
            field = duration;
            feedbackIndex = 3;
            message = "No se ha especificado la duración de la pelicula.";
        }
        
        if(radio === "radio-serie") {
            field = seasons;
            feedbackIndex = 4;
            message = "No se ha especificado un número de temporadas para la serie.";
        }
        
        // Obtenemos una colección con todos los feedbacks.
        const feedbacks = form.getElementsByClassName("invalid-feedback");
        const submitInfo = document.querySelector(".add-production-form > div.submit-info");

        if(!title.value) {
            title.classList.remove("is-valid");
            title.classList.add("is-invalid");
            feedbacks[0].textContent = "El titulo de la producción está vacío.";
        }else if(this.#productionExists(title.value)) {
            title.classList.remove("is-valid");
            title.classList.add("is-invalid");
            feedbacks[0].textContent = "La producción ya existe.";
        }else{
            title.classList.add("is-valid");
            title.classList.remove("is-invalid");
        }

        if(!nationality.value) {
            nationality.classList.remove("is-valid");
            nationality.classList.add("is-invalid");
            feedbacks[1].textContent = "La nacionalidad está vacía.";
        }else if(/\d/g.test(nationality.value)) {
            nationality.classList.remove("is-valid");
            nationality.classList.add("is-invalid");
            feedbacks[1].textContent = "La nacionalidad no puede contener números.";
        }else{
            nationality.classList.add("is-valid");
            nationality.classList.remove("is-invalid");
        }

        if(!date.value) {
            date.classList.remove("is-valid");
            date.classList.add("is-invalid");
            feedbacks[2].textContent = "La fecha de publicación está vacía.";
        }else{
            date.classList.add("is-valid");
            date.classList.remove("is-invalid");
        }

        // Validando los 2 últimos campos:
        if(field) {
            submitInfo.classList.remove("text-danger");
            submitInfo.textContent = ""

            if(!field.value) {
                field.classList.remove("is-valid");
                field.classList.add("is-invalid");
                feedbacks[feedbackIndex].textContent = message;
            }else{
                field.classList.add("is-valid");
                field.classList.remove("is-invalid");
            }
        }else{
            submitInfo.classList.add("text-danger");
            submitInfo.textContent = "No se ha seleccionado un tipo de producción!";
        }

        const fields = {
            title,
            nationality,
            date,
            field   // Este campo es dinámico.
        };

        const checker = [...Object.values(fields)];
        const valid = checker.every(field => field.classList.contains("is-valid"));

        // Si todos los campos son correctos, pasamos a crear la producción.
        if(valid) {
            const target = {radio, synopsis, category};
            const full = Object.assign(target, fields);
            this.#createNewProduction(full);

            submitInfo.classList.remove("text-danger");
            submitInfo.classList.add("text-success");
            submitInfo.textContent = "Producción creada";

            checker.forEach(field => field.classList.remove("is-valid"));

            title.value = "";
            nationality.value = "";
            date.value = "";
            synopsis.value = "";
            field.value = "";
        }
    };

    /**
     * Manejador de eventos que permite a la vista
     * mostrar todos los directores.
     */
    handleDirectors = () => {
        this.#view.showDirectorsPanel();
        this.onShowAllDirectors();
    };

    /**
     * Método que invoca al método que muestra todos los directores con
     * sus producciones en la vista. Utiliza el iterador de directores
     * del modelo y el iterador de producciones de un director del modelo.
     */
    onShowAllDirectors() {
        for(const elem of this.#model.directors) {
            this.#view.showAllDirectors(elem.director, this.#model.getProductionsDirector(elem.director));
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
     * sus producciones en la vista. Utiliza el iterador de actores
     * del modelo y el iterador de producciones de un actor del modelo.
     */
    onShowAllActors() {
        for(const elem of this.#model.actors) {
            this.#view.showAllActors(elem.actor, this.#model.getProductionsActor(elem.actor));
        }
    }

    /**
     * Handler que invoca al método que invoca al método
     * que muestra el formulario al hacer clic en el botón
     * de añadir persona en la vista.
     */
    showAddPersonFormHandler = () => {
        this.onShowAddPersonForm();
    };

    /**
     * Método que invoca al método de la vista que muestra el
     * formulario de añadir actores o directores de la vista.
     */
    onShowAddPersonForm() {
        this.#view.showAddPersonForm();
        this.onFillSelectProductions();
    }

    /**
     * Método que invoca al método de la vista que rellena
     * el select de producciones con todas las producciones
     * del modelo.
     */
    onFillSelectProductions() {
        this.#view.fillSelectProductions(this.#model.productions);
    }
    
    /**
     * Método que manda a la vista rellenar el select de actores.
     */
    onfillSelectActors() {
        this.#view.fillSelectActors(this.#model.actors);
    }

    /**
     * Método que manda a la vista rellenar el select de directores.
     */
    onfillSelectDirectors() {
        this.#view.fillSelectDirectors(this.#model.directors);
    }

    /**
     * Handler que valida el formulario que permite crear
     * actores o directores.
     * @param {*} form El formulario que permite crear actores
     * y directores.
     */
    validateAddPersonFormHandler = (form) => {
        // Recogemos los campos.
        const radio = form.addPersonRadioGroup.value;
        const name = form["name-person"];
        const lastName = form["lastname-person"];
        const date = form["date-person"];
        const select = document.getElementsByClassName("select-productions")[0];
        const feedbacks = form.getElementsByClassName("invalid-feedback");
        const submitInfo =  form.querySelector(".submit-info");

        const fields = {
            name,
            lastName,
            date
        };

        // Comenzamos a validar:
        if(!radio) {
            submitInfo.classList.remove("text-success");
            submitInfo.classList.add("text-danger");
            submitInfo.textContent = "No se ha seleccionado un tipo de entidad.";
        }else{
            submitInfo.textContent = "";
        }

        // Comprobamos si existe la entiedad en el modelo.

        if(!name.value) {
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            feedbacks[0].textContent = "El nombre no puede estar vacío.";
        }else if(/\d/g.test(name.value)) {
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            feedbacks[0].textContent = "El nombre no puede contener números.";
        }else if(this.#personExists(radio, name.value)) {
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            feedbacks[0].textContent = "La entidad ya existe.";
        }else{
            name.classList.remove("is-invalid");
            name.classList.add("is-valid");
            feedbacks[0].textContent = "";
        }

        const full = lastName.value.split(" ");

        // Controlamos que la persona tenga al menos un apellido.
        if(!(fields.lastName.value.split(" ")[0])) {
            lastName.classList.remove("is-valid");
            lastName.classList.add("is-invalid");
            feedbacks[1].textContent = "Debe contener al menos un apellido.";
        }else if(/\d/g.test(full[0]) || /\d/g.test(full[1])) {
            lastName.classList.remove("is-valid");
            lastName.classList.add("is-invalid");
            feedbacks[1].textContent = "El apellido o los apellidos no pueden contener números";
        }else{
            lastName.classList.remove("is-invalid");
            lastName.classList.add("is-valid");
            feedbacks[1].textContent = "";
        }

        if(!date.value) {
            date.classList.remove("is-valid");
            date.classList.add("is-invalid");
            feedbacks[2].textContent = "La fecha de nacimiento no puede estar vacía.";
        }else{
            date.classList.remove("is-invalid");
            date.classList.add("is-valid");
            feedbacks[2].textContent = "";
        }

        const checker = [...Object.values(fields)];
        const status = checker.every(field => field.classList.contains("is-valid"));

        if(status) {
            submitInfo.classList.remove("text-danger");
            submitInfo.classList.add("text-success");

            this.#addPerson(radio, fields, select.value);

            fields.name.value = "";
            fields.lastName.value = "";
            fields.date.value = "";

            checker.forEach(field => field.classList.remove("is-valid"));
            submitInfo.textContent = "La entidad se añadío correctamente.";
        }
    };

    /**
     * Handler que permite a la vista mostrar el formulario
     * de eliminar actores o directores.
     */
    showDeletePersonFormHandler = () => {
        this.onShowDeletePersonForm();
    };

    /**
     * Método que invoca al método de la vista que
     * muestra el formulario de eliminar actores o directores.
     */
    onShowDeletePersonForm() {
        this.#view.showDeletePersonForm();
    }

    /**
     * Handler que valida el formulario de eliminar
     * actores o directores.
     * @param {*} form El formulario de eliminar
     * actores o directores
     */
    validateDeletePersonFormHandler = (form) => {
        const radio = form.deletePersonRadioGroup.value;
        const fullname = form["fullname-person"];
        const feedback = form.getElementsByClassName("invalid-feedback")[0];
        const submitInfo =  form.querySelector(".submit-info");

        if(!radio) {
            submitInfo.classList.remove("text-success");
            submitInfo.classList.add("text-danger");
            submitInfo.textContent = "No se ha seleccionado un tipo de entidad.";
        }else{
            submitInfo.textContent = "";
        }

        if(!fullname.value) {
            fullname.classList.remove("is-valid");
            fullname.classList.add("is-invalid");
            feedback.textContent = "El campo de busqueda está vacío.";
        }else if(/\d/g.test(fullname.value)) {
            fullname.classList.remove("is-valid");
            fullname.classList.add("is-invalid");
            feedback.textContent = "El campo de busqueda no puede contener números.";
        }else if(!(this.#personExists(radio, fullname.value))) {
            fullname.classList.remove("is-valid");
            fullname.classList.add("is-invalid");
            feedback.textContent = "La entidad no existe";
        }else{
            fullname.classList.remove("is-invalid");
            fullname.classList.add("is-valid");
            feedback.textContent = "";
            
            submitInfo.classList.remove("text-danger");
            submitInfo.classList.add("text-success");

            this.#deletePerson(radio, fullname.value.trim());

            fullname.classList.remove("is-valid");
            fullname.value = "";

            submitInfo.textContent = "La persona se ha eliminado correctamente del sistema";
        }
    };

    /**
     * Handler que manda a la vista mostrar el formulario de
     * asignar producciones, carga también el select de producciones
     * con las producciones del modelo.
     */
    showAssignProductionFormHandler = () => {
        this.onShowAssignProductionForm();
        this.onFillSelectProductions();
    }

    /**
     * Método que ejecuta el método de la vista que muestra
     * el formulario de asignar producciones.
     */
    onShowAssignProductionForm() {
        this.#view.showAssignProductionForm();
    }

    /**
     * Handler que rellena el select correspondiente que
     * haya elegido el usuario.
     * @param {*} dynamicSelect El select que ha elegido el usuario.
     */
    dynamicSelectHandler = (dynamicSelect) => {
        const select = dynamicSelect.find(".ds");

        if(select.hasClass("select-actors")) {
            this.#view.emptySelectActors();
            this.onfillSelectActors();
        }
        
        if(select.hasClass("select-directors")) {
            this.#view.emptySelectDirectors();
            this.onfillSelectDirectors();
        }
        
        if(select.hasClass("select-categories")) {
            this.#view.emptySelectCategories();
            this.onfillSelectCategories(this.#model.categories);
        }
    };

    /**
     * Handler que valida el formulario de asignar producciones
     * a una entidad. Si está todo correcto asigna la producción
     * a la entidad que se haya escogido.
     * @param {*} form El formulario de asignar producciones
     * a una entidad.
     */
    validateAssignProductionFormHandler = (form) => {
        const radio = form.assignProductionRadioGroup.value;
        const dynamicSelect = form.getElementsByClassName("ds")[0];
        const production = form.getElementsByClassName("select-productions")[0];
        const feedbacks = form.getElementsByClassName("invalid-feedback");
        const submitInfo = form.getElementsByClassName("submit-info")[0];

        let feedbackIndex = 0;
        let message = "";

        if(radio === "radio-actor") message = "No se ha seleccionado ningún actor.";
        if(radio === "radio-director") message = "No se ha seleccionado ningún director.";
        if(radio === "radio-category") message = "No se ha seleccionado ninguna categoría.";

        if(!dynamicSelect) {
            submitInfo.classList.add("text-danger");
            submitInfo.textContent = "No se ha seleccionado un tipo de entidad.";
        }else if(!dynamicSelect.value) {
            feedbackIndex = 1;
            dynamicSelect.classList.remove("is-valid");
            dynamicSelect.classList.add("is-invalid");
            feedbacks[0].textContent = message;
            submitInfo.textContent = "";
        }else{
            dynamicSelect.classList.remove("is-invalid");
            dynamicSelect.classList.add("is-valid");
            submitInfo.textContent = "";
        }
        
        if(!production.value) {
            production.classList.remove("is-valid");
            production.classList.add("is-invalid");
            feedbacks[feedbackIndex].textContent = "No se ha seleccionado ninguna producción.";
        }else{
            production.classList.remove("is-invalid");
            production.classList.add("is-valid");
        }

        if(dynamicSelect && dynamicSelect.value && production.value) {
            const fields = {
                type: radio,
                entity: dynamicSelect.value,
                productionName: production.value
            };

            this.#assignProduction(fields);
            submitInfo.classList.remove("text-danger");
            submitInfo.classList.add("text-success");
            submitInfo.textContent = "Operación realizada correctamente.";

            dynamicSelect.classList.remove("is-valid");
            production.classList.remove("is-valid");

            dynamicSelect.value = "";
            production.value = "";
        }
    };

    /**
     * Handler que ejecuta el método de la vista que
     * muestra el formulario que permite desasignar
     * una producción de una entidad.
     */
    showDeassignProductionFormHandler = () => {
        this.#view.showDeassignProductionForm();
    }

    /**
     * Handler que valida el formulario de desasignar
     * una producción de una entidad al ser enviado.
     * @param {*} form El formulario que permite desasignar
     * una producción de una entidad.
     */
    validateDeassignProductionHandler = (form) => {
        const radio = form.deassignProductionRadioGroup.value;
        const dynamicSelect = form.getElementsByClassName("ds")[0];
        const production = form["deassign-productions-input"];
        const feedbacks = form.getElementsByClassName("invalid-feedback");
        const submitInfo = form.getElementsByClassName("submit-info")[0];

        let feedbackIndex = 0;
        let message = "";

        if(radio === "radio-actor") message = "No se ha seleccionado ningún actor.";
        if(radio === "radio-director") message = "No se ha seleccionado ningún director.";
        if(radio === "radio-category") message = "No se ha seleccionado ninguna categoría.";

        if(!dynamicSelect) {
            submitInfo.classList.add("text-danger");
            submitInfo.textContent = "No se ha seleccionado un tipo de entidad.";
        }else if(!dynamicSelect.value) {
            feedbackIndex = 1;
            dynamicSelect.classList.remove("is-valid");
            dynamicSelect.classList.add("is-invalid");
            feedbacks[0].textContent = message;
            submitInfo.textContent = "";
        }else{
            dynamicSelect.classList.remove("is-invalid");
            dynamicSelect.classList.add("is-valid");
            submitInfo.textContent = "";
        }
        
        if(!production.value) {
            production.classList.remove("is-valid");
            production.classList.add("is-invalid");
            feedbacks[feedbackIndex].textContent = "El campo de búsqueda está vacío.";
        }else if(!(this.#productionExists(production.value))) {
            production.classList.remove("is-valid");
            production.classList.add("is-invalid");
            feedbacks[feedbackIndex].textContent = "La producción no existe.";
        }else{
            production.classList.remove("is-invalid");
            production.classList.add("is-valid");
        }

        if(dynamicSelect && dynamicSelect.value && production.value && this.#productionExists(production.value)) {
            const fields = {
                type: radio,
                entity: dynamicSelect.value,
                productionName: production.value
            };

            this.#deassignProduction(fields);
            submitInfo.classList.remove("text-danger");
            submitInfo.classList.add("text-success");
            submitInfo.textContent = "Operación realizada correctamente.";

            dynamicSelect.classList.remove("is-valid");
            production.classList.remove("is-valid");

            dynamicSelect.value = "";
            production.value = "";
        }
    };
}