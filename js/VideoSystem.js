"use strict";

import { ObjectFactory } from "./entities.js";

const factory = new ObjectFactory();

export const VideoSystem = (function() {
    let instantiated;

    function init() {
        class VideoSystem {
            #name;

            constructor(name = "VideoSystem") {
                this.#name = name;
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