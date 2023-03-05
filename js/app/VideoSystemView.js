"use strict";

import * as Entities from "../entities/entities.js";

/**
 * Clase vista para el Videosystem
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemView {
    constructor() {
        this.categoriesMenu = $(".navbar-categories-menu");
        this.productionsAnchor = $(".productions");
        this.directorsAnchor = $(".directors");
        this.actorsAnchor = $(".actors");
        this.username = $(".user-panel > span.username");
        this.carousel = $(".car > div.carousel-inner");
        this.main = $("main");
        this.createFormContainer = $(".create-production-form-container");
        this.newTab = null;
    }

    /**
     * Método que inicia la página con los componentes
     * principales de la pagina.
     * @param {*} categories El iterador de categorias del modelo.
     */
    init() {
        this.categoriesMenu.empty();
        this.username.empty();
        this.carousel.empty();
        this.main.empty();

        this.main.append(
            `<div class="container mt-3 mb-3 w-50 create-production-form-container d-none">
                <h1>Create new production</h1>
                <form name="add-production-form" class="add-production-form" method="POST" action="#">
                    <p>La producción es una...</p>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Pelicula
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio-movie" value="radio-movie">
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Serie
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="radio-serie" value="radio-serie">
                            </div>
                        </div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-title" class="form-label">Production title</label>
                        <input type="text" placeholder="Ex: Breaking Bad" class="form-control bg-dark text-white" name="production-title" id="pTitle">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-nationality" class="form-label">Production nationality</label>
                        <input type="text" placeholder="Ex: 🇺🇸" class="form-control bg-dark text-white" name="production-nationality" id="pNationality">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-date" class="form-label">Production date</label>
                        <input type="date" class="form-control bg-dark text-white" name="production-date" id="pDate">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-synopsis" class="form-label">Synopsis</label>
                        <textarea class="form-control bg-dark text-white" name="production-synopsis" id="pSynopsis"></textarea>
                    </div>

                    <div class="duration-field needs-validation mb-3 d-none">
                        <label for="production-duration" class="form-label">Duration</label>
                        <input type="number" class="form-control bg-dark text-white" name="production-duration" id="pDuration">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="seasons-field needs-validation mb-3 d-none">
                        <label for="production-seasons" class="form-label">Seasons</label>
                        <input type="number" class="form-control bg-dark text-white" name="production-seasons" id="pSeasons">
                        <div class="invalid-feedback"></div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    <div class="submit-info"></div>
                    <hr>
                </form>
            </div>`
        );

        this.showOperationButtons();
        this.showCreateCategoryForm();
        this.showDeleteCategoryForm();

        this.main.append(
            `<section class="mt-3 categories-zone container-fluid text-white text-center">
                <h1 class="display-5 mb-3">Categories</h1>
                <div class="row cat-list"></div>
            </section>`
        );
    }

    /**
     * Método que aplica un evento clic a los enlaces del
     * logo y del home para que la página se restaure.
     * @param {*} handler El manejador (sería el método onInit del controlador)
     */
    bindInit(handler) {
        $(".navbar-nav > .nav-item .home").on("click", handler);
        $(".navbar-brand").on("click", handler);
    }

    /**
     * Método que vacía el dropdown de la barra de
     * navegación con las categorías.
     */
    emptyDropdownCategoriesContainer() {
        this.categoriesMenu.empty();
    }

    /**
     * Método que muestra las categorias que hay en el sistema en la navbar.
     * @param {*} category El objeto category que le llega del iterador 
     * de categorias del modelo.
     */
    showCategoriesMenu(categories) {
        for(const elem of categories) {
            this.categoriesMenu.append(
                `<li>
                    <a class="dropdown-item">
                        ${elem.category.name}
                    </a>
                </li>`
            );
        }
    }

    /**
     * Método que crea 2 botones que muestran un modal
     * para crear y eliminar categorias.
     */
    showOperationButtons() {
        this.main.append(
            `<div class="mt-4 container-fluid">
                <button class="add-category-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                    <i class="fa-solid fa-plus"></i> Add category
                </button>
                <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="bg-dark modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="addCategoryLabel">Create category</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="create-category-form-container modal-body"></div>
                        </div>
                    </div>
                </div>
                <button class="delete-category-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal">
                    <i class="fa-solid fa-trash"></i> Delete category
                </button>
                <div class="modal fade" id="deleteCategoryModal" tabindex="-1" aria-labelledby="deleteCategoryLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="bg-dark modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="deleteCategoryLabel">Delete category</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="delete-category-form-container modal-body"></div>
                        </div>
                    </div>
                </div>
                <button class="add-production-btn btn btn-primary">
                    <i class="fa-solid fa-film"></i> Add production
                </button>
            </div>`
        );
    }

    /**
     * Método que añade al modal de crear categorias el formulario
     * para crear una categoría.
     */
    showCreateCategoryForm() {
        const modal = $(".create-category-form-container");

        modal.append(
            `<form name="add-category-form" class="add-category-form" method="POST" action="#" novalidate role="form">
                <div class="needs-validation mb-3">
                    <label for="category-title" class="form-label">Category title</label>
                    <input type="text" placeholder="Ex: Action films" class="form-control bg-dark text-white" name="category-title" id="catTitle">
                    <div class="invalid-feedback"></div>
                </div>
                <div class="mb-3">
                    <label for="category-description" class="form-label">Description</label>
                    <textarea class="form-control bg-dark text-white" name="category-description" id="catDescription"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Create category</button>
                <div class="submit-info"></div>
            </form>`
        );
    }

    /**
     * Método que gestiona los eventos que ocurren en el
     * formulario de crear categorías.
     * @param {*} handlers Un objeto literal con los manejadores
     * para validar el formulario y controlar el evento submit.
     */
    bindCreateCategory(handler) {
        const title = document.getElementById("catTitle");
        const desc = document.getElementById("catDescription");

        document.getElementsByClassName("add-category-form")[0].addEventListener("submit", function(e) {
            e.preventDefault();
            handler(title, desc);
        });
    }

    /**
     * Método que muestra el formulario para eliminar
     * categorías dentro del modal de delete category.
     */
    showDeleteCategoryForm() {
        const modal = $(".delete-category-form-container");

        modal.append(
            `<form name="delete-category-form" class="delete-category-form" method="POST" action="#" novalidate role="form">
                <label class="form-label" for="category">Select a category</label>
                <select class="select-categories form-select mb-3" aria-label="Default select example"></select>
                <button type="submit" class="btn btn-danger">Delete category</button>
                <div class="submit-info"></div>
            </form>`
        );
    }

    /**
     * Método que rellena el select del formulario de eliminar categorías
     * con las categorías que tneemos en el modelo.
     * @param {*} categories El iterador de categorías del modelo.
     */
    fillSelectCategories(categories) {
        const select = $(".select-categories");
        select.append(
            `<option value="">---Selecciona una categoría---</option>`
        );

        for(const elem of categories) {
            select.append(
                `<option value="${elem.category.name}">${elem.category.name}</option>`
            );
        }
    }

    /**
     * Método que vacía el select del formulario eliminar
     * categorías.
     */
    emptySelectCategories() {
        $(".select-categories").empty();
    }

    /**
     * Método que captura el evento submit del formulario de
     * eliminar categorías.
     * @param {*} handler La función manejadora que valída
     * el formulario
     */
    bindDeleteCategory(handler) {
        document.getElementsByClassName("delete-category-form")[0].addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }

    /**
     * Método que muestra las categorias en la zona central de la página.
     * @param {*} category La categoria que le llega del iterador de categorias del modelo.
     * @param {*} productions Generador con las producciones de esa categoria.
     */
    showCategoriesInCentralZone(category, productions) {
        $(".cat-list").append(
            `<div class="d-flex align-items-center justify-content-around col-md-4">
                <div class="cat-card shadow p-3 mb-5 rounded card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="d-flex justify-content-center">
                            <div class="mb-3 circle bg-white"><i class="fa-solid fa-folder"></i></div>
                        </div>
                        <h3 class="cat-name card-title">${category.name}</h3>
                        <p class="card-text">${category.description}</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#${category.name}-productions" aria-controls="offcanvasWithBothOptions">
                            Show productions
                        </button>

                        <div class="bg-dark offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="${category.name}-productions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Productions of ${category.name}</h5>
                                <button type="button" class="bg-white btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="${category.name}-productions offcanvas-body"></div>
                        </div>
                    </div>
                </div>
            </div>`
        );

        // Envolvemos esto en un try-catch ya que el iterador de producciones puede estar vacío.
        try {
            for(const production of productions) {
                $(`.${category.name}-productions`).append(
                    `<div class="production">
                        <h5>${production.title} ${production.nationality}</h5>
                        <p>Release date: ${production.publication.toLocaleDateString()}</p>
                        <p>${production.synopsis}</p>
                        <hr>
                    </div>`
                );
            }
        } catch(error) {
            $(`.${category.name}-productions`).append(
                `<div class="production">
                    <p>No productions in this category yet!</p>
                </div>`
            );
        }
    }

    /**
     * Método que vacía el contenedor de categorías.
     * (No las elimina del modelo, las elimina de la vista)
     */
    emptyCategoriesContainer() {
        const categoriesZone = $(".categories-zone");
        const catList = categoriesZone.find(".cat-list");

        catList.empty();
    }

    /**
     * Método que muestra el nombre de usuario correspondiente
     * a la derecha de la navbar.
     * @param {*} users El iterador de usuarios del modelo.
     */
    showUser(users) {
        const [user] = users;
        this.username.append("User " + user.username);
    }

    /**
     * Método que muestra en el carrusel 3 producciones al azar.
     * @param {*} productions El iterador de producciones del modelo.
     */
    showProductionsInCarousel(productions) {
        const all = [...productions];
        const indexes = [];

        for(let i = 0; i <= 2; i++) {
            let randomIndex = Math.floor(Math.random() * (all.length - 0) + 0);
            indexes.push(randomIndex);

            // ! Generamos números aleatorios que no se repiten.
            while(indexes.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * (all.length - 0) + 0);
            }

            indexes.push(randomIndex);

            if(i === 0) {
                this.carousel.append(
                    // Al primer elemento le tenemos que poner la clase active porque si no se superponen.
                    `<div class="carousel-item active">
                        <h2 class="production">${all[randomIndex].production.title}</h2>
                    </div>`
                );
            }else{
                this.carousel.append(
                    `<div class="carousel-item">
                        <h2 class="production">${all[randomIndex].production.title}</h2>
                    </div>`
                );
            }
        }
    }

    showCreateProductionForm() {
        $(".create-production-form-container").removeClass("d-none");
    }

    bindCreateProductionForm(handler) {
        $(".add-production-btn").on("click", handler);
    }

    bindCreateProduction(handler) {
        const form = document.getElementsByClassName("add-production-form")[0];
        // Recogemos todos los campos del formulario.
        const fields = {
            rBtn1: document.getElementById("radio-movie"),
            rBtn2: document.getElementById("radio-serie"),
            pTitle: document.getElementById("pTitle"),
            pNationality: document.getElementById("pNationality"),
            pDate: document.getElementById("pDate"),
            pSynopsis: document.getElementById("pSynopsis"),
            pDuration: document.getElementsByClassName("duration-field")[0],
            pSeasons: document.getElementsByClassName("seasons-field")[0]
        };

        let radioButtonValue = null;

        fields.rBtn1.addEventListener("click", function(e) {
            radioButtonValue = this.value;
            fields.pDuration.classList.remove("d-none");
            fields.pSeasons.classList.add("d-none");
        });

        fields.rBtn2.addEventListener("click", function(e) {
            radioButtonValue = this.value;
            fields.pDuration.classList.add("d-none");
            fields.pSeasons.classList.remove("d-none");
        });

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler(form, fields, radioButtonValue);    // Validación del resto de campos.
        });
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

        const productionsContainer = $(".productions-container");

        for(const elem of productions) {
            if(elem.production instanceof Entities.Movie) {
                productionsContainer.append(
                    `<div class="col-md-3">
                        <div class="production-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                            <div class="card-body">
                                <h4 class="p-title">${elem.production.title}</h4>
                                <h6 class="p-type">Pelicula</h6>
                                <p class="p-duration">Duración ${elem.production.resource.duration} minutos</p>
                                <p class="p-date">${elem.production.publication.toLocaleDateString()}</p>
                                <p class="p-nationality">${elem.production.nationality}</p>
                                <p class="p-synopsis">${elem.production.synopsis}</p>

                                <button class="open-window-btn btn btn-primary">Open in new tab</button>
                            </div>
                        </div>
                    </div>`
                );
            }
                            
            if(elem.production instanceof Entities.Serie) {
                productionsContainer.append(
                    `<div class="col-md-3">
                        <div class="production-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                            <div class="card-body">
                                <h4 class="p-title">${elem.production.title}</h4>
                                <h6 class="p-type">Serie</h6>
                                <p class="p-date">${elem.production.publication.toLocaleDateString()}</p>
                                <p class="p-seasons">Temporadas ${elem.production.seasons}</p>
                                <p class="p-nationality">${elem.production.nationality}</p>
                                <p class="p-synopsis">${elem.production.synopsis}</p>

                                <button class="open-window-btn btn btn-primary">Open in new tab</button>
                            </div>
                        </div>
                    </div>`
                );
            }
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
     * Método que crea el panel que muestra todos los directores
     */
    showDirectorsPanel() {
        this.main.append(
            `<section id="directors-panel">
                <h1 class="display-5 mb-3">All directors</h1>
                <div class="directors-container row"></div>
            </section>`
        );
    }

    /**
     * Método que muestra todos los directores con todas las producciones
     * en las que han participado en la zona central.
     * @param {*} director El director que le llega del controlador del iterador de directores del modelo.
     * @param {*} productions Objeto iterable con las producciones de ese director.
     */
    showAllDirectors(director, productions) {
        $(".directors-container").append(
            `<div class="col-md-3">
                <div class="person-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                    <div class="card-body">
                        <div class="d-flex justify-content-center">
                            <div class="circle bg-white"><i class="fa-solid fa-user-tie"></i></div>
                        </div>
                        <h4 class="d-fullname mt-3 text-uppercase">${director.fullName}</h4>
                        <p class="d-born">${director.born.toLocaleDateString()}</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#${director.name}-productions" aria-controls="offcanvasWithBothOptions">
                            Productions
                        </button>

                        <div class="bg-dark offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="${director.name}-productions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Productions of ${director.fullName}</h5>
                                <button type="button" class="bg-white btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="${director.name}-productions offcanvas-body"></div>
                        </div>
                    </div>
                </div>
            </div>`
        );

        try {
            for(const production of productions) {
                $(`.${director.name}-productions`).append(
                    `<div class="production">
                        <h5>${production.title} ${production.nationality}</h5>
                        <p>Release date: ${production.publication.toLocaleDateString()}</p>
                        <p>${production.synopsis}</p>
                        <hr>
                    </div>`
                );
            }
        } catch(error) {
            $(`.${director.name}-productions`).append(
                `<div class="production">
                    <p>This director has no productions yet!</p>
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
     * Método que crea el panel que muestra todos los actores
     */
    showActorsPanel() {
        this.main.append(
            `<section id="actors-panel">
                <h1 class="display-5 mb-3">All actors</h1>
                <div class="actors-container row"></div>
            </section>`
        );
    }

    /**
     * Método que muestra todos los actores con las producciones
     * en las que han participado en la zona central.
     * @param {*} actor El actor que le llega del controlador del modelo de categorias.
     * @param {*} productions Objeto iterable con las producciones de ese actor.
     */
    showAllActors(actor, productions) {
        $(".actors-container").append(
            `<div class="col-md-3">
                <div class="person-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                    <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <div class="circle bg-white"><i class="fa-solid fa-graduation-cap"></i></div>
                            </div>
                            <h4 class="a-fullname mt-3 text-uppercase">${actor.fullName}</h4>
                            <p class="a-born">${actor.born.toLocaleDateString()}</p>
                            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#${actor.name}-productions" aria-controls="offcanvasWithBothOptions">
                                Productions
                            </button>

                            <div class="bg-dark offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="${actor.name}-productions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Productions of ${actor.fullName}</h5>
                                    <button type="button" class="bg-white btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                            <div class="${actor.name}-productions offcanvas-body"></div>
                        </div>
                        </div>
                    </div>
                </div>`
        );

        try {
            for(const production of productions) {
                $(`.${actor.name}-productions`).append(
                    `<div class="production">
                        <h5>${production.title} ${production.nationality}</h5>
                        <p>Release date: ${production.publication.toLocaleDateString()}</p>
                        <p>${production.synopsis}</p>
                        <hr>
                    </div>`
                );
            }
        } catch(error) {
            $(`.${actor.name}-productions`).append(
                `<div class="production">
                    <p>This actor has no productions yet!</p>
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