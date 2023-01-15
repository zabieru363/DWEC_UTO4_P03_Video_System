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
        }
    }

    return {
        getInstance() {
            if(!instantiated) instantiated = init();
            return instantiated;
        }
    }
})();