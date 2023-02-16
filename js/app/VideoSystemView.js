"use strict";

/**
 * Clase vista para el Videosystem
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemView {
    constructor() {
        this.main = $("main");
        this.categories = $(".all-categories");
    }

    init(categories) {
        this.categories.empty();
        this.main.empty();

        this.main.append(
            `<section class="mt-3 categories-zone container-fluid text-white text-center">
                <h1 class="display-5 mb-3">Categories</h1>
                <div class="d-flex justify-content-evenly cat-list"></div>
            </section>`
        );

        const catList = this.main.find(".categories-zone > div.cat-list");
        
        for(const category of categories) {
            catList.append(
                `<div class="row">
                    <div class="col-md-4">
                        <div class="cat-card shadow p-3 mb-5 rounded card" style="width: 18rem;">
                            <div class="card-body">
                                <h3 class="card-title">${category.name}</h3>
                                <p class="card-text">${category.description}</p>
                                <a href="#" class="show-productions-btn btn btn-primary">Show productions <i class="fa-solid fa-arrow-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>`
            );
        }
    }

    bindInit(handler) {
        $(".navbar-nav > nav-item .home").on("click", handler);
        $(".navbar-brand").on("click", handler);
    }

    showNavbarDropdownCategories(categories) {
        for(const category of categories) this.categories.append(`<li><a class="cat dropdown-item" href="#">${category.name}</a></li>`);
    }
}