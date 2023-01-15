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

            constructor(name) {
                if(!name) throw exceptionFactory.throwError("EmptyValueException", null, "name");
                this.#name = name;
            }

            /**
             * Getter que devuelve el nombre del sistema.
             */
            get name() {
                return this.#name;
            }

            /**
             * Setter qeu permite cambiar el nombre del sistema.
             */
            set name(value) {
                if(!value) throw exceptionFactory.throwError("EmptyValueException", null, "name");
                this.#name = value;
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