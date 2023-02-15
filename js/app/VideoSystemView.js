"use strict";

/**
 * Clase vista para el Videosystem
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemView {
    constructor() {
        this.categories = $(".all-categories");
    }

    showNavbarDropdownCategories(categories) {
        for(const category of categories) this.categories.append(`<li><a class="cat dropdown-item" href="#">${category.name}</a></li>`);
    }
}