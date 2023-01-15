"use strict";

import { ExceptionFactory } from "./exceptions.js";
import { ObjectFactory } from "./entities.js";

const exceptionFactory = new ExceptionFactory();
const objectFactory = new ObjectFactory();

export const VideoSystem = (function() {
    let instantiated;

    function init() {
        class VideoSystem {
            #name;
            #categories = [];
            #users = [];

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
                
                const exists = this.#categories.some(cat => cat.name === category.name);
                if(exists) throw exceptionFactory.throwError("CategoryExistsException");

                return this.#categories.push(category);
            }

            /**
             * Método que elimina una categoría del sistema. La categoría debe de
             * estar registrada previamente, de lo contrario se lanzará una excepción.
             * @param {*} category Un objeto Category.
             * @returns Número de categorias que hay en total en el sistema.
             */
            removeCategory(category) {
                const pos = this.#categories.findIndex(cat => cat.name === category.name);
                if(pos === -1) throw exceptionFactory.throwError("NotRegisteredCategoryException");

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

                const usernameExists = this.#users.some(u => u.username === user.username);
                const emailExists = this.#users.some(u => u.email === user.email);

                if(usernameExists) throw exceptionFactory.throwError("UsernameExistsException");
                if(emailExists) throw exceptionFactory.throwError("EmailExistsException");

                return this.#users.push(user);
            }
        }
    }

    return {
        getInstance() {
            if(!instantiated) instantiated = init();
            return instantiated;
        }
    }
})();