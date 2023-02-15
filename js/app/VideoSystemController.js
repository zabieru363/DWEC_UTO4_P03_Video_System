"use strict";

import * as Entities from "../entities/entities.js";

export default class VideoSystemController {
    // Campos privados
    #model;
    #view;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }
}