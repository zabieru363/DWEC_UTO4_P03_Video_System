"use strict";

import { ExceptionFactory } from "./exceptions.js";
import * as Entities from "./entities.js";

const exceptionFactory = new ExceptionFactory();

export const VideoSystem = (function() {
    let instantiated;

    function init() {
        class VideoSystem {
            #name;
            #categories = [];
            #users = [];
            #productions = [];
            #actors = [];
            #directors = [];

            constructor(name) {
                if(!name) throw exceptionFactory.throwError("EmptyValueException", null, "name");
                this.#name = name;
            }

            /**
             * Getter que devuelve el nombre del sistema.
             * @returns El nombre del sistema.
             */
            get name() {
                return this.#name;
            }

            /**
             * Setter qeu permite cambiar el nombre del sistema.
             * @param value El nuevo valor para el nombre.
             */
            set name(value) {
                if(!value) throw exceptionFactory.throwError("EmptyValueException", null, "name");
                this.#name = value;
            }

            /**
             * Getter que devuelve un iterador que permite recorrer
             * las categorias del sistema.
             * @returns Un iterador de categorias.
             */
            get categories() {
                const categories = this.#categories;

                return {
                    * [Symbol.iterator]() {
                        for(let i = 0; i < categories.length; i++) yield categories[i];
                    }
                }
            }

            /**
             * Método que añade una categoría al sistema.
             * @param {*} category La categoría a añadir, debe de ser un objeto Category.
             * @returns Número de categorias que hay en total en el sistema.
             */
            addCategory(category) {
                if(!category) throw exceptionFactory.throwError("EmptyValueException", null, "category");
                if(!(category instanceof Entities.Category)) 
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Category, "category");
                
                const exists = this.#categories.some(cat => cat.name === category.name);
                if(exists) throw exceptionFactory.throwError("RegisteredObjectException", Entities.Category);

                return this.#categories.push(category);
            }

            /**
             * Método que elimina una categoría del sistema. La categoría debe de
             * estar registrada previamente, de lo contrario se lanzará una excepción.
             * @param {*} category Un objeto Category.
             * @returns Número de categorias que hay en total en el sistema.
             */
            removeCategory(category) {
                if(!category) throw exceptionFactory.throwError("EmptyValueException", null, "category");
                if(!(category instanceof Entities.Category)) 
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Category, "category");

                const pos = this.#categories.findIndex(cat => cat.name === category.name);
                if(pos === -1) throw exceptionFactory.throwError("NotRegisteredObjectException", Entities.Category);

                this.#categories.splice(pos, 1);

                return this.#categories.length;
            }

            /**
             * Getter que devuelve un iterador que permite recorrer
             * los usuarios del sistema.
             * @returns Un iterador de objetos User.
             */
            get users() {
                const users = this.#users;

                return {
                    * [Symbol.iterator]() {
                        for(let i = 0; i < users.length; i++) yield users[i];
                    }
                }
            }

            /**
             * Añade un nuevo usuario al sistema. Su nombre de usuario y email
             * no deben de existir ya en el sistema para poder añadirse, de lo
             * contrario se lanzará una excepción.
             * @param {*} user Un objeto user.
             * @returns El total de usuarios registrados en el sistema.
             */
            addUser(user) {
                if(!user) throw exceptionFactory.throwError("EmptyValueException", null, "user");
                if(!(user instanceof Entities.User)) 
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.User, "user");

                const usernameExists = this.#users.some(u => u.username === user.username);
                const emailExists = this.#users.some(u => u.email === user.email);

                if(usernameExists) throw exceptionFactory.throwError("UsernameExistsException");
                if(emailExists) throw exceptionFactory.throwError("EmailExistsException");

                return this.#users.push(user);
            }

            /**
             * Método que elimina un usuario del sistema. Si no está
             * registrado se lanzará una excepción.
             * @param {*} user Un objeto User.
             * @returns El número total de usuarios que hay en el sistema.
             */
            removeUser(user) {
                if(!user) throw exceptionFactory.throwError("EmptyValueException", null, "user");
                if(!(user instanceof Entities.User)) 
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.User, "user");

                const pos = this.#users.findIndex(u => u.username === user.username);
                if(pos === -1) throw exceptionFactory.throwError("NotRegisteredObjectException", Entities.User);

                this.#users.splice(pos, 1);

                return this.#users.length;
            }

            /**
             * Getter que devuelve un iterador que permite obtener las
             * producciones que hay registradas en el sistema.
             * @returns Un iterador de objetos Production.
             */
            get productions() {
                const productions = this.#productions;

                return {
                    * [Symbol.iterator]() {
                        for(let i = 0; i < productions.length; i++) yield productions[i];
                    }
                }
            }

            /**
             * Método que añade una producción al sistema. Si ya está
             * registrada se lanzará una excepción.
             * @param {*} production Un objeto Production.
             * @returns El número total de producciones que hay en el sistema.
             */
            addProduction(production) {
                if(!production) throw exceptionFactory.throwError("EmptyValueException", null, "production");
                if(!(production instanceof Entities.Production)) 
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Production, "production");

                const productionExists = this.#productions.some(p => p.title === production.title);
                if(productionExists) throw exceptionFactory.throwError("RegisteredObjectException", Entities.Production);

                return this.#productions.push(production);
            }

            /**
             * Método que elimina una producción del sistema. Si no está
             * registrada, lanzará una excepción.
             * @param {*} production Un objeto Production.
             * @returns El número total de producciones que hay en el sistema.
             */
            removeProduction(production) {
                if(!production) throw exceptionFactory.throwError("EmptyValueException", null, "production");
                if(!(production instanceof Entities.Production)) 
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Production, "production");

                const pos = this.#productions.findIndex(p => p.title === production.title);
                if(pos === -1) throw exceptionFactory.throwError("NotRegisteredObjectException", Entities.Production);

                this.#productions.splice(pos, 1);

                return this.#productions.length;
            }

            /**
             * Getter que devuelve un iterador que permite obtener
             * los actores que hay registrados en el sistema.
             * @returns Un iterador de objetos Person que son los
             * actores almacenados en el sistema.
             */
            get actors() {
                const actors = this.#actors;

                return {
                    * [Symbol.iterator]() {
                        for(let i = 0; i < actors.length; i++) yield actors[i];
                    }
                }
            }

            /**
             * Método que añade un actor al sistema. El objeto debe de ser
             * un objeto de tipo Person, si ya está registrado lanzará una excepción.
             * @param {*} actor Un objeto Person que será el actor a añadir al sistema.
             * @returns La cantidad de actores que hay en el sistema.
             */
            addActor(actor) {
                if(!actor) throw exceptionFactory.throwError("EmptyValueException", null, "actor");
                if(!(actor instanceof Entities.Person))
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Person, "actor");

                const exists = this.#actors.some(a => a.name === actor.name);
                if(exists) throw exceptionFactory.throwError("RegisteredObjectException", Entities.Person);

                return this.#actors.push(actor);
            }

            /**
             * Método que elimina un actor del sistema. Debe de ser
             * un objeto Person y si no está registrado se lanzará
             * una excepción.
             * @param {*} actor Un objeto Person que es el actor a eliminar.
             * @returns La cantidad de actores que hay en el sistema.
             */
            removeActor(actor) {
                if(!actor) throw exceptionFactory.throwError("EmptyValueException", null, "actor");
                if(!(actor instanceof Entities.Person))
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Person, "actor");

                const pos = this.#actors.findIndex(a => a.name === actor.name);
                if(pos === -1) throw exceptionFactory.throwError("NotRegisteredObjectException", Entities.Person);
    
                this.#actors.splice(pos, 1);
    
                return this.#actors.length;
            }

            /**
             * Getter que devuelve un iterador de objetos Person
             * que son todos los directores almacenados en el sistema.
             * @returns Un iterador que permite recorrer todos los directores que hay en el sistema.
             */
            get directors() {
                const directors = this.#directors;

                return {
                    * [Symbol.iterator]() {
                        for(let i = 0; i < directors.length; i++) yield directors[i];
                    }
                }
            }

            /**
             * Método que añade un director al sistema. Este debe de ser
             * un objeto Person y si existe en el sistema se lanzará una excepción.
             * @param {*} director Un objeto Person que será el director que se quiere añadir.
             * @returns El total de directores que hay en el sistema.
             */
            addDirector(director) {
                if(!director) throw exceptionFactory.throwError("EmptyValueException", null, "director");
                if(!(director instanceof Entities.Person))
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Person, "director");

                const exists = this.#directors.some(d => d.name === director.name);
                if(exists) throw exceptionFactory.throwError("RegisteredObjectException", Entities.Person);

                return this.#directors.push(director);
            }

            /**
             * Método que elimina un director del sistema. Debe de
             * ser un objeto Person que será el director que se quiere
             * eliminar, este debe de existir, de lo contrario se lanzará
             * una excepción.
             * @param {*} director Un objeto Person que será el director a eliminar. 
             * @returns El total de directores que hay en el sistema.
             */
            removeDirector(director) {
                if(!director) throw exceptionFactory.throwError("EmptyValueException", null, "director");
                if(!(director instanceof Entities.Person))
                    throw exceptionFactory.throwError("NoValidObjectException", Entities.Person, "director");

                const pos = this.#directors.findIndex(d => d.name === director.name);
                if(pos === -1) throw exceptionFactory.throwError("NotRegisteredObjectException", Entities.Person);
    
                this.#directors.splice(pos, 1);
    
                return this.#directors.length;
            }
        }
        return Object.freeze(new VideoSystem("videosystem"));
    }

    return {
        getInstance() {
            if(!instantiated) instantiated = init();
            return instantiated;
        }
    }
})();