"use strict";

/**
 * Clase vista para el Videosystem
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemView {
    constructor() {
        this.username = $(".user-panel > span.username");
        this.carousel = $(".car > div.carousel-inner");
        this.main = $("main");
        this.categories = $(".all-categories");
        this.categoriesCentralZone = $(".categories-zone");
    }

    /**
     * Método que inicia la página con los componentes
     * principales de la pagina.
     * @param {*} categories El iterador de categorias del modelo.
     */
    init(categories) {
        this.categories.empty();
        this.username.empty();
        this.carousel.empty();
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

    /**
     * Método que aplica un evento clic a los enlaces del
     * logo y del home para que la página se restaure.
     * @param {*} handler El manejador (sería el método onInit del controlador)
     */
    bindInit(handler) {
        $(".navbar-nav > nav-item .home").on("click", handler);
        $(".navbar-brand").on("click", handler);
    }

    /**
     * Método que muestra todas las categorias en el menú
     * categories de la navbar.
     * @param {*} categories El iterador de categorias del modelo.
     */
    showNavbarDropdownCategories(categories) {
        for(const category of categories) this.categories.append(`<li><a class="cat dropdown-item" href="#">${category.name}</a></li>`);
    }

    /**
     * Método que muestra el nombre de usuario correspondiente
     * a la derecha de la navbar.
     * @param {*} users El iterador de usuarios del modelo.
     */
    showUser(users) {
        let close = 1;
        for(const user of users) {
            this.username.append("User " + user.username);
            if(close === 1) break;  // * Para que solo coja el primer usuario.
        }
    }

    /**
     * Método que muestra en el carrusel 3 producciones al azar.
     * @param {*} productions El iterador de producciones del modelo.
     */
    showProductionsInCarousel(productions) {
        const all = [...productions];

        for(let i = 0; i <= 2; i++) {
            let randomIndex = Math.floor(Math.random() * (all.length - 0) + 0);
            this.carousel.append(
                `<div class="carousel-item active">
                    <h2 class="production d-block w-100">${all[randomIndex].title}</h2>
                </div>`
            );
        }
    }
}