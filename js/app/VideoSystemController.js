"use strict";

import * as Entities from "../entities/entities.js";

/**
 * Clase controlodar para el objeto Videosystem.
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemController {
    // Campos privados
    #model;
    #view;

    #createDefaultCategories() {
        const c1 = new Entities.Category("Aventura", "Peliculas de aventura");
        const c2 = new Entities.Category("Terror", "Peliculas de terror");
        const c3 = new Entities.Category("Comedia", "Peliculas de comedia");

        // * Añadimos las categorias al videosystem.
        this.#model.addCategory(c1);
        this.#model.addCategory(c2);
        this.#model.addCategory(c3);
    }

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        this.onLoad();
        this.onshowNavbarDropdownCategories();
    }

    onLoad = () => {
        this.#createDefaultCategories();
    };

    onshowNavbarDropdownCategories() {
        this.#view.showNavbarDropdownCategories(this.#model.categories);
    }
}