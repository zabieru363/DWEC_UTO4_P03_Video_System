"use strict";

import * as Entities from "../entities/entities.js";

/**
 * Clase vista para el Videosystem
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemView {
    constructor() {
        this.productionsAnchor = $(".productions");
        this.directorsAnchor = $(".directors");
        this.actorsAnchor = $(".actors");
        this.username = $(".user-panel > span.username");
        this.carousel = $(".car > div.carousel-inner");
        this.main = $("main");
        this.categoriesCentralZone = $(".categories-zone");
    }

    /**
     * Método que inicia la página con los componentes
     * principales de la pagina.
     * @param {*} categories El iterador de categorias del modelo.
     */
    init() {
        this.username.empty();
        this.carousel.empty();
        this.main.empty();

        this.main.append(
            `<section class="mt-3 categories-zone container-fluid text-white text-center">
                <h1 class="display-5 mb-3">Categories</h1>
                <div class="d-flex justify-content-center">
                    <div class="cat-list row"></div>
                </div>
            </section>`
        );
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
     * Método que muestra las categorias en la zona central de la página.
     * @param {*} category La categoria que le llega del iterador de categorias del modelo.
     * @param {*} productions Generador con las producciones de esa categoria.
     */
    showCategoriesInCentralZone(category, productions) {
        $(".cat-list").append(
            `<div class="col-md-4">
                <div class="cat-card shadow p-3 mb-5 rounded card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="d-flex justify-content-center">
                            <div class="circle bg-white"><i class="fa-solid fa-folder"></i></div>
                        </div>
                        <h3 class="cat-name card-title">${category.name}</h3>
                        <p class="card-text">${category.description}</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#${category.name}-productions" aria-controls="offcanvasWithBothOptions">
                            Show productions
                        </button>

                        <div class="bg-dark offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="${category.name}-productions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Productions of ${category.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="${category.name}-productions offcanvas-body"></div>
                        </div>
                    </div>
                </div>
            </div>`
        );

        for(const production of productions) {
            $(`.${category.name}-productions`).append(
                `<div class="production">
                    <h5>${production.title} ${production.nationality}</h5>
                    <p>Release date: ${production.publication.toLocaleDateString()}</p>
                    <p>${production.synopsis}</p>
                </div>`
            );
        }
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

    /**
     * Método que muestra todas las producciones en la zona central.
     * @param {*} productions El iterador de producciones del modelo.
     */
    showAllProductions(productions) {
        this.main.append(
            `<section id="productions-panel">
                <h1 class="display-5 mb-4">All productions</h1>
                <div class="productions-container row"></div>
            </section>`
        );

        let type = null;

        const productionsContainer = $(".productions-container");

        for(const production of productions) {
            if(production instanceof Entities.Movie) {
                type = "Pelicula";
            }

            if(production instanceof Entities.Serie) {
                type = "Serie";
            }

            productionsContainer.append(
                `<div class="col-md-3">
                    <div class="production-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                        <div class="card-body">
                            <h4 class="p-title">${production.title}</h4>
                            <h6 class="p-type">${type}</h6>
                            <p class="p-date">${production.publication.toLocaleDateString()}</p>
                            <p class="p-nationality">${production.nationality}</p>
                            <p class="p-synopsis">${production.synopsis}</p>
                        </div>
                    </div>
                </div>`
            );
        }
    }

    /**
     * Manejador de eventos que muestra todas las producciones
     * al hacer clic en el menú productions.
     * @param {*} handler El manejador (sería el método onshowAllProductions del controlador)
     */
    bindProductions(handler) {
        this.productionsAnchor.on("click", handler);
    }

    /**
     * Método que muestra en la zona central todos los directores.
     * @param {*} directors El iterador de directores del modelo.
     */
    showAllDirectors(directors) {
        this.main.append(
            `<section id="directors-panel">
                <h1 class="display-5 mb-3">All directors</h1>
                <div class="directors-container row"></div>
            </section>`
        );

        const directorsContainer = this.main.find(".directors-container");

        for(const director of directors) {
            directorsContainer.append(
                `<div class="col-md-3">
                    <div class="person-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <div class="circle bg-white"><i class="fa-solid fa-user-tie"></i></div>
                            </div>
                            <h4 class="d-fullname mt-3 text-uppercase">${director.fullName}</h4>
                            <p class="d-born">${director.born.toLocaleDateString()}</p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#d-productions-collapse" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Productions
                            </a>
                            <div class="collapse" id="d-productions-collapse">
                                <div class="d-productions"></div>
                            </div>
                        </div>
                    </div>
                </div>`
            );
        }
    }

    /**
     * Manejador de eventos que muestra todos los directores
     * al hacer clic en el menú directors.
     * @param {*} handler El manejador (sería el método onshowAllDirectors del controlador)
     */
    bindDirectors(handler) {
        this.directorsAnchor.on("click", handler);
    }

    /**
     * Método que muestra en la zona central todos los actores.
     * @param {*} actors El iterador de actores del modelo.
     */
    showAllActors(actors) {
        this.main.append(
            `<section id="actors-panel">
                <h1 class="display-5 mb-3">All actors</h1>
                <div class="actors-container row"></div>
            </section>`
        );

        const actorsContainer = this.main.find(".actors-container");

        for(const actor of actors) {
            actorsContainer.append(
                `<div class="col-md-3">
                    <div class="person-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <div class="circle bg-white"><i class="fa-solid fa-graduation-cap"></i></div>
                            </div>
                            <h4 class="a-fullname mt-3 text-uppercase">${actor.fullName}</h4>
                            <p class="a-born">${actor.born.toLocaleDateString()}</p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#a-productions-collapse" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Productions
                            </a>
                            <div class="collapse" id="a-productions-collapse">
                                <div class="a-productions"></div>
                            </div>
                        </div>
                    </div>
                </div>`
            );
        }
    }

    /**
     * Manejador de eventos que muestra todos los actores
     * al hacer clic en el menú actors.
     * @param {*} handler El manejador (sería el método onshowAllActors del controlador)
     */
    bindActors(handler) {
        this.actorsAnchor.on("click", handler);
    }
}