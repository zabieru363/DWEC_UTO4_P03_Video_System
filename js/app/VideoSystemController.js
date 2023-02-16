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

    /**
     * Método privado que crea 3 categorías por defecto
     * y las añade al videosystem. Estas categorias se
     * muestran la navbar y en la zona central.
     */
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
        this.onInit();
        
        this.#view.bindInit(this.handleInit);
    }

    onInit = () => {
        this.#view.init(this.#model.categories);
        this.onShowNavbarDropdownCategories(this.#model.categories);
    };

    /**
     * Método que crea todos los recursos que utiliza
     * la página por defecto.
     */
    onLoad = () => {
        this.#createDefaultCategories();
    };

    handleInit = () => {
        this.onInit();
    };

    onShowNavbarDropdownCategories(categories) {
        this.#view.showNavbarDropdownCategories(categories);
    }
}