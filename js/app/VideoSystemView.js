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
        this.favouritesAnchor = $(".favourites");
        this.backupForm = $(".backup-form");
        this.username = $(".user-panel > span.username");
        this.carousel = $(".car > div.carousel-inner");
        this.main = $("main");
    }

    /**
     * Método que inicia la página con los componentes
     * principales de la pagina.
     */
    init() {
        this.categoriesMenu.empty();
        this.username.empty();
        this.carousel.empty();
        this.main.empty();

        // Formulario para añadir producciones.
        this.main.prepend(
            `<div class="container mt-3 mb-3 w-50 create-production-form-container d-none">
                <h1>Create new production</h1>
                <form name="add-production-form" class="add-production-form" method="POST" action="#">
                    <p>* La producción es una...</p>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Pelicula
                                </label>
                                <input class="form-check-input" type="radio" name="addProductionRadioGroup" id="radio-movie" value="radio-movie">
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Serie
                                </label>
                                <input class="form-check-input" type="radio" name="addProductionRadioGroup" id="radio-serie" value="radio-serie">
                            </div>
                        </div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-title" class="form-label">Production title *</label>
                        <input type="text" placeholder="Ex: Breaking Bad" class="form-control bg-dark text-white" name="production-title" id="pTitle">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-nationality" class="form-label">Production nationality *</label>
                        <input type="text" placeholder="Ex: 🇺🇸" class="form-control bg-dark text-white" name="production-nationality" id="pNationality">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-date" class="form-label">Production date *</label>
                        <input type="date" class="form-control bg-dark text-white" name="production-date" id="pDate">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="needs-validation mb-3">
                        <label for="production-synopsis" class="form-label">Synopsis</label>
                        <textarea class="form-control bg-dark text-white" name="production-synopsis" id="pSynopsis"></textarea>
                    </div>

                    <div class="duration-field needs-validation mb-3 d-none">
                        <label for="production-duration" class="form-label">Duration *</label>
                        <input type="number" class="form-control bg-dark text-white" name="production-duration" id="pDuration">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="seasons-field needs-validation mb-3 d-none">
                        <label for="production-seasons" class="form-label">Seasons *</label>
                        <input type="number" class="form-control bg-dark text-white" name="production-seasons" id="pSeasons">
                        <div class="invalid-feedback"></div>
                    </div>

                    <label class="form-label" for="mapId">Select coordinates</label>
                    <div id="mapId"></div>

                    <label class="form-label" for="select-categories">Assign category</label>
                    <select class="select-categories bg-dark text-white form-select mb-3" aria-label="Default select example"></select>

                    <button type="submit" class="btn btn-primary">Create production</button>
                    <div class="submit-info"></div>
                    <hr>
                </form>
            </div>`
        );

        // Formulario para eliminar producciones.
        this.main.prepend(
            `<div class="container mt-3 mb-3 w-50 delete-production-form-container d-none">
                <h1>Delete production</h1>
                <form name="delete-production-form" class="delete-production-form" method="POST" action="#" novalidate role="form">
                    <div class="mb-3 needs-validation">
                        <label class="form-label" for="production">Type a production *</label>
                        <input type="text" class="form-control bg-dark text-white" placeholder="Ex: Fullmetal Alchemist" name="input-search-production" id="input-search-production">
                        <div class="invalid-feedback"></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Delete production</button>
                    <div class="submit-info"></div>
                    <hr>
                </form>
            </div>`
        );

        // Formulario para crear actores o directores.
        this.main.prepend(
            `<div class="container mt-3 mb-3 w-50 add-person-form-container d-none">
                <h1>Add new person</h1>
                <form name="add-person-form" class="add-person-form" method="POST" action="#" novalidate role="form">
                    <p>* ¿Que quieres crear?</p>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Un actor
                                </label>
                                <input class="form-check-input" type="radio" name="addPersonRadioGroup" value="radio-actor">
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Un director
                                </label>
                                <input class="form-check-input" type="radio" name="addPersonRadioGroup" value="radio-director">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 needs-validation">
                        <label class="form-label" for="name-person">Name *</label>
                        <input type="text" class="form-control bg-dark text-white" placeholder="Ex: Tom" name="name-person" id="name-person">
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3 needs-validation">
                        <label class="form-label" for="lastName-person">Lastname *</label>
                        <input type="text" class="form-control bg-dark text-white" placeholder="Ex: Holand" name="lastname-person" id="lastname-person">
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3 needs-validation">
                        <label class="form-label" for="date-person">Birthdate *</label>
                        <input type="date" class="form-control bg-dark text-white" name="date-person" id="date-person">
                        <div class="invalid-feedback"></div>
                    </div>

                    <label class="form-label" for="select-productions">Assign production</label>
                    <select class="select-productions form-select bg-dark text-white mb-3" aria-label="Default select example"></select>

                    <button type="submit" class="btn btn-primary">Add person</button>
                    <div class="submit-info"></div>
                    <hr>
                </form>
            </div>`
        );

        // Formulario para eliminar actores o directores.
        this.main.prepend(
            `<div class="container mt-3 mb-3 w-50 delete-person-form-container d-none">
                <h1>Delete person</h1>
                <form name="delete-person-form" class="delete-person-form" method="POST" action="#" novalidate role="form">
                    <p>* ¿Que quieres eliminar?</p>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Un actor
                                </label>
                                <input class="form-check-input" type="radio" name="deletePersonRadioGroup" value="radio-actor">
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Un director
                                </label>
                                <input class="form-check-input" type="radio" name="deletePersonRadioGroup" value="radio-director">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 needs-validation">
                        <label class="form-label" for="fullname-person">Name *</label>
                        <input type="text" class="form-control bg-dark text-white" placeholder="Ex: Tom Holand" name="fullname-person">
                        <div class="invalid-feedback"></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Delete person</button>
                    <div class="submit-info"></div>
                    <hr>
                </form>
            </div>`
        );

        // Formulario para asignar producciones.
        this.main.prepend(
            `<div class="container mt-3 mb-3 w-50 assign-production-form-container d-none">
                <h1>Assign production</h1>
                <form name="assign-production-form" class="assign-production-form" method="POST" action="#" novalidate role="form">
                    <p>* Asignar producción a</p>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Un actor
                                </label>
                                <input class="form-check-input" type="radio" name="assignProductionRadioGroup" value="radio-actor">
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Un director
                                </label>
                                <input class="form-check-input" type="radio" name="assignProductionRadioGroup" value="radio-director">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Una categoría
                                </label>
                                <input class="form-check-input" type="radio" name="assignProductionRadioGroup" value="radio-category">
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 needs-validation dynamic-select"></div>

                    <div class="mb-3 needs-validation">
                        <label class="form-label" for="select-productions">Select production *</label>
                        <select class="select-productions form-select bg-dark text-white" aria-label="Default select example"></select>
                        <div class="invalid-feedback"></div>
                    </div>

                    <button type="submit" class="btn btn-primary">Assign production</button>
                    <div class="submit-info"></div>
                    <hr>
                </form>
            </div>`
        );

        // Formulario para desasignar producciones.
        this.main.prepend(
            `<div class="container mt-3 mb-3 w-50 deassign-production-form-container d-none">
                <h1>Deassign production</h1>
                <form name="deassign-production-form" class="deassign-production-form" method="POST" action="#" novalidate role="form">
                    <p>* Eliminar producciones de</p>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Un actor
                                </label>
                                <input class="form-check-input" type="radio" name="deassignProductionRadioGroup" value="radio-actor">
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Un director
                                </label>
                                <input class="form-check-input" type="radio" name="deassignProductionRadioGroup" value="radio-director">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Una categoría
                                </label>
                                <input class="form-check-input" type="radio" name="deassignProductionRadioGroup" value="radio-category">
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 needs-validation dynamic-select"></div>

                    <div class="mb-3 needs-validation">
                        <label class="form-label" for="deasing-productions-input">Type a production *</label>
                        <input type="text" class="form-control bg-dark text-white" placeholder="Fullmetal Alchemist" name="deassign-productions-input">
                        <div class="invalid-feedback"></div>
                    </div>

                    <button type="submit" class="btn btn-danger">Deassign production</button>
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
     * Método que crea el formulario de login para que el
     * usuario pueda iniciar sesión.
     */
    createLoginForm() {
        this.main.append(
            `<div class="container mt-5 mb-3 w-50 login-form-container">
                <h1 class="mb-3">Sign in</h1>
                <form name="login-form" class="login-form" method="POST" action="#" novalidate role="form">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control bg-dark text-white" placeholder="username" name="Your username" id="username">
                        <label for="username">Username</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control bg-dark text-white" placeholder="Your password" name="pwd" id="pwd">
                        <label for="pwd">Password</label>
                    </div>

                    <div class="submit-info"></div>
                    <button class="btn btn-primary mt-3" type="submit"><i class="fa-solid fa-right-to-bracket"></i> Login</button>
                </form>
            </div>`
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
     * @param {*} categories El iterador de categorías del modelo.
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
     * Método que enlaza el logout con el controlador y le
     * manda la acción de eliminar la cookie de autenticación.
     * @param {*} handler La función manejadora del controlador
     * que elimina la cookie.
     */
    bindLogout(handler) {
        const logoutBtn = this.username.find(".logout-btn");
        logoutBtn.on("click", handler);
    }

    /**
     * Método que crea los botones para realizar
     * las operaciones con formularios.
     */
    showOperationButtons() {
        this.main.prepend(
            `<div class="mt-4 container-fluid">
                <h1 class="display-5">Control Panel</h1>
            </div>
            <div class="mt-4 container-fluid">
                <button class="add-category-btn btn btn-success" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                    <i class="fa-solid fa-folder"></i> Add category
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
                    <i class="fa-solid fa-folder"></i>  Delete category
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
                <button class="add-production-btn btn btn-success">
                    <i class="fa-solid fa-film"></i> Add production
                </button>
                <button class="delete-production-btn btn btn-danger">
                    <i class="fa-solid fa-film"></i> Delete production
                </button>
                <button class="add-person-btn btn btn-success">
                    <i class="fa-solid fa-user"></i> Add person
                </button>
                <button class="delete-person-btn btn btn-danger">
                    <i class="fa-solid fa-user"></i> Delete person
                </button>
                <button class="assign-production-btn btn btn-primary">
                    <i class="fa-sharp fa-solid fa-link"></i> Assign productions
                </button>
                <button class="deassign-production-btn btn btn-secondary">
                    <i class="fa-solid fa-link-slash"></i> Deassign productions
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
                    <label for="category-name" class="form-label">Category name *</label>
                    <input type="text" placeholder="Ex: Action films" class="form-control bg-dark text-white" name="category-name" id="catTitle">
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
     * @param {*} handlers La función manejadora que valida
     * el formulario al enviarlo.
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
                <label class="form-label" for="category">Select a category *</label>
                <select class="select-categories form-select bg-dark text-white mb-3" aria-label="Default select example"></select>
                <button type="submit" class="btn btn-danger">Delete category</button>
                <div class="submit-info"></div>
            </form>`
        );
    }

    /**
     * Método que rellena el select del formulario de eliminar categorías
     * con las categorías que tenemos en el modelo.
     * @param {*} categories El iterador de categorías del modelo.
     */
    fillSelectCategories(categories) {
        const select = $(".select-categories");

        this.emptySelectCategories();
        
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
        const form = document.getElementsByClassName("delete-category-form")[0];

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler(this);
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
        this.username.append(`<i class="bg-danger p-2 rounded-circle px-2 fa-solid fa-solid fa-user"></i> User ${user.username} `);
        this.username.append(`<span class="logout-btn"><i class="fa-solid fa-right-from-bracket"></i></span>`);
    }

    /**
     * Método que enlaza el inicio de sesión con el controlador
     * @param {*} handler La función manejadora del controlador
     * que comprueba si el usuario y la contraseña son correctos.
     */
    bindSignIn(handler) {
        const form = document.getElementsByClassName("login-form")[0];
        const usernameInput = form["username"];
        const passwordInput = form["pwd"];

        form.addEventListener("submit", function(e) {
            const valid = handler(this, usernameInput, passwordInput);
            if(!valid) e.preventDefault(); 
        });
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

    /**
     * Método que hace visible el formulario para crear producciones.
     */
    showCreateProductionForm() {
        $(".create-production-form-container").removeClass("d-none");
    }

    /**
     * Método que ejecuta el método que hace visible el formulario
     * de crear producciones al pulsar en el botón de añadir producciones.
     * @param {*} handler El manejador del controlador onShowCreateProductionForm
     */
    bindCreateProductionForm(handler) {
        $(".add-production-btn").on("click", handler);
    }

    /**
     * Método que enlaza el método que valida del formulario del controlador
     * con la vista.
     * @param {*} handler La función manejadora que valida el formulario. 
     */
    bindCreateProduction(handler) {
        const form = document.getElementsByClassName("add-production-form")[0];
        const radio = [...form.addProductionRadioGroup];
        const duration = document.getElementsByClassName("duration-field")[0];
        const seasons = document.getElementsByClassName("seasons-field")[0];

        radio[0].addEventListener("click", function(e) {
            duration.classList.remove("d-none");
            seasons.classList.add("d-none");
        });

        radio[1].addEventListener("click", function(e) {
            duration.classList.add("d-none");
            seasons.classList.remove("d-none");
        });

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler(this);
        });
    }

    /**
     * Manejador de eventos que muestra el formulario para eliminar
     * una producción.
     */
    showDeleteProductionsForm() {
        $(".delete-production-form-container").removeClass("d-none");
    }

    /**
     * Bind que asigna un manejador de eventos al botón de
     * eliminar producciones al hacer clic.
     */
    bindShowDeleteProductionForm(handler) {
        $(".delete-production-btn").on("click", handler);
    }

    /**
     * Método que vacía el contenedor de producciones.
     */
    emptyProductionsContainer() {
        $(".productions-container").empty();
    }

    /**
     * Bind que envia los datos del formulario de eliminar producción.
     * @param {*} handler La función manejadora que valida los
     * campos del formulario al ser enviado.
     */
    bindDeleteProduction(handler) {
        const form = document.getElementsByClassName("delete-production-form")[0];

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }

    /**
     * Método que crea la sección de producciones.
     */
    createProductionsSection() {
        this.main.append(
            `<section id="productions-panel">
                <h1 class="display-5 mb-4">All productions</h1>
                <div class="productions-container row"></div>
            </section>`
        );
    }

    /**
     * Método que muestra todas las producciones en la zona central.
     * @param {*} productions El iterador de producciones del modelo.
     */
    showAllProductions(productions) {
        const productionsContainer = $(".productions-container");

        for(const elem of productions) {
            if(elem.production instanceof Entities.Movie) {
                productionsContainer.append(
                    `<div class="col-md-3">
                        <div class="production-card shadow p-3 mb-5 ml-2 rounded card mx-auto" style="width: 18rem;">
                            <div class="card-body">
                                <h4 class="p-title">${elem.production.title}</h4> <i title="Guardar en favoritos" class="save-production fa-regular fa-star"></i>
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
                                <h4 class="p-title">${elem.production.title}</h4> <i title="Guardar en favoritos" class="save-production fa-regular fa-star"></i>
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
     * Método que enlaza la acción de abrir una ventana con los
     * detalles de la producción con el controlador.
     * @param {*} handler La función manejadora del controlador
     * que abre la ventana con los detalles de la producción.
     */
    bindProductionWindow(handler) {
        const buttons = document.querySelectorAll(".open-window-btn");

        buttons.forEach(button => button.addEventListener("click", function() {
            const cardBody = button.parentElement;
            const pTitle = cardBody.querySelector(".p-title");
            handler(pTitle.textContent);
        }));
    }

    /**
     * Método que enlaza la operación de guardar favoritos
     * en el localstorage con el controlador.
     */
    bindSaveInFavs(handler) {
        const stars = document.querySelectorAll(".save-production");
        stars.forEach(star => star.addEventListener("click", function(e) {
            e.stopPropagation();

            const parent = $(star).parent();
            const production = parent.find(".p-title");
            $(star).remove();

            production.after(`<i title="Quitar de favoritos" class="production-saved fa-solid fa-star"></i>`);

            handler(production.text());
        }));
    }

    /**
     * Método que enlaza la vista con el controlador para
     * mostrar el panel de favoritos.
     * @param {*} handler 
     */
    bindFavourites(handler) {
        this.favouritesAnchor.one("click", handler);
    }

    /**
     * Método que permite mostrar el panel de producciones
     * favoritas del usuario.
     */
    showFavouritesPanel() {
        this.main.prepend(
            `<div class="container-fluid w-50 favourites-panel">
                <h1 class="display-5">List of favourites</h1>
                <div class="favourites-list list-group"></div>
            </div>`
        );
    }

    /**
     * Método que rellena el select de producciones.
     * @param {*} productions El iterador de producciones del modelo.
     */
    fillSelectProductions(productions) {
        const select = $(".select-productions");

        select.append(
            `<option value="">---Selecciona una producción---</option>`
        );

        for(const elem of productions) {
            select.append(
                `<option value="${elem.production.title}">${elem.production.title}</option>`
            );
        }
    }

    /**
     * Método que vacía el select de producciones.
     */
    emptySelectProductions() {
        $(".select-productions").empty();
    }

    /**
     * Método que rellena el select de actores.
     * @param {*} actors El iterador de actores del modelo.
     */
    fillSelectActors(actors) {
        const select = $(".select-actors");

        select.append(
            `<option value="">---Selecciona un actor---</option>`
        );

        for(const elem of actors) {
            select.append(
                `<option value="${elem.actor.fullName}">${elem.actor.fullName}</option>`
            );
        }
    }

    /**
     * Método que vacía el select de actores.
     */
    emptySelectActors() {
        $(".select-actors").empty();
    }

    /**
     * Método que rellena el select de directores.
     * @param {*} directors El iterador de directores del modelo.
     */
    fillSelectDirectors(directors) {
        const select = $(".select-directors");

        select.append(
            `<option value="">---Selecciona un director---</option>`
        );

        for(const elem of directors) {
            select.append(
                `<option value="${elem.director.fullName}">${elem.director.fullName}</option>`
            );
        }
    }

    /**
     * Método que vacía el select de directores.
     */
    emptySelectDirectors() {
        $(".select-directors").empty();
    }

    /**
     * Manejador de eventos que muestra todas las producciones
     * al hacer clic en el menú productions.
     * @param {*} handler El manejador (sería el método onshowAllProductions del controlador)
     */
    bindProductions(handler) {
        this.productionsAnchor.one("click", handler);
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
     * Método que vacía el contenedor de directores.
     */
    emptyDirectorsContainer() {
        $(".directors-container").empty();
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
        this.directorsAnchor.one("click", handler);
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
     * Método que vacía el contenedor de actores.
     */
    emptyActorsContainer() {
        $(".actors-container").empty();
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
        this.actorsAnchor.one("click", handler);
    }

    /**
     * Método que muestra el formulario de añadir actores o
     * directores.
     */
    showAddPersonForm() {
        $(".add-person-form-container").removeClass("d-none");
    }

    /**
     * Método que enlaza el método que muestra el formulario de
     * crear actores o directores del controlador con la vista.
     * @param {*} handler La función manejadora que muestra el
     * formulario de crear directores o actores del controlador.
     */
    bindAddPersonForm(handler) {
        $(".add-person-btn").on("click", handler);
    }

    /**
     * Método que enlaza el envio del formulario con el controlador.
     * @param {*} handler La función manejadora que validará el
     * formulario al ser enviado.
     */
    bindAddPerson(handler) {
        const form = document.getElementsByClassName("add-person-form")[0];

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler(this);
        });
    }

    /**
     * Método que muestra el formulario de eliminar
     * un actor o un director.
     */
    showDeletePersonForm() {
        $(".delete-person-form-container").removeClass("d-none");
    }

    /**
     * Método que ejecuta el método que hace visible el
     * formulario de eliminar actores o directores.
     * @param {*} handler 
     */
    bindDeletePersonForm(handler) {
        $(".delete-person-btn").on("click", handler);
    }

    /**
     * Método que manda la acción de eliminar un actor
     * o director al controlador.
     * @param {*} handler La función manejadora que valida
     * el formulario de eliminar persona.
     */
    bindDeletePerson(handler) {
        const form = document.getElementsByClassName("delete-person-form")[0];

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler(this);
        });
    }

    /**
     * Método que hace visible el formulario para asignar producciones.
     */
    showAssignProductionForm() {
        $(".assign-production-form-container").removeClass("d-none");
    }

    /**
     * Bind que enlaza la vista con el controlador para aplicar un
     * evento clic al botón de asignar producciones para que muestre
     * el formulario de asignar producciones.
     * @param {*} handler La función manejadora que muestra el
     * formulario de asignar producciones.
     */
    bindAssignProductionForm(handler) {
        $(".assign-production-btn").on("click", handler);
    }

    /**
     * Bind que manda al controlador el select que hemos elegido
     * en el formulario de asignar producciones para que rellene
     * el select correspondiente que hemos elegido.
     * @param {*} handler La función manejadora que rellena el
     * select correspondiente.
     */
    bindDynamicSelectAssignProductionsForm(handler) {
        const form = document.getElementsByClassName("assign-production-form")[0];
        const radios = [...form.assignProductionRadioGroup];

        // Recogiendo el select dinámico:
        const dynamicSelect = $(".assign-production-form > div.dynamic-select");

        radios[0].addEventListener("click", function(e) {
            dynamicSelect.empty();
            dynamicSelect.append(
                `<label class="form-label" for="select-actors">Select actor *</label>
                <select class="ds select-actors form-select bg-dark text-white" aria-label="Default select example"></select>
                <div class="invalid-feedback"></div>`
            );
            handler(dynamicSelect);
        });

        radios[1].addEventListener("click", function(e) {
            dynamicSelect.empty();
            dynamicSelect.append(
                `<label class="form-label" for="select-directors">Select director *</label>
                <select class="ds select-directors form-select bg-dark text-white" aria-label="Default select example"></select>
                <div class="invalid-feedback"></div>`
            );
            handler(dynamicSelect);
        });

        radios[2].addEventListener("click", function(e) {
            dynamicSelect.empty();
            dynamicSelect.append(
                `<label class="form-label" for="select-categories">Select category *</label>
                <select class="ds select-categories form-select bg-dark text-white" aria-label="Default select example"></select>
                <div class="invalid-feedback"></div>`
            );
            handler(dynamicSelect);
        });
    }

    /**
     * Método que enlaza la operación de asignar una producción
     * a una entidad al controlador. Ocurre cuando se envia el
     * formulario se envia.
     * @param {*} handler La función manejadora que valida el formulario.
     */
    bindAssignProduction(handler) {
        const form = document.getElementsByClassName("assign-production-form")[0];

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler(form);
        });
    }

    /**
     * Método que hace visible el formulario de desasignar producciones
     * de entidades.
     */
    showDeassignProductionForm() {
        $(".deassign-production-form-container").removeClass("d-none");
    }

    /**
     * Método que enlaza la vista con el controlador para poder
     * mostrar el formulario de desasignar producciones de una
     * entidad al hacer clic en el botón deassign productions.
     * @param {*} handler La función manejadora del controlador
     * que permite mostrar el formulario.
     */
    bindDeassignProductionForm(handler) {
        $(".deassign-production-btn").on("click", handler);
    }

    bindDynamicSelectDeassignProductionsForm(handler) {
        const form = document.getElementsByClassName("deassign-production-form")[0];
        const radios = [...form.deassignProductionRadioGroup];

        // Recogiendo el select dinámico:
        const dynamicSelect = $(".deassign-production-form > div.dynamic-select");

        radios[0].addEventListener("click", function(e) {
            dynamicSelect.empty();
            dynamicSelect.append(
                `<label class="form-label" for="select-actors">Select actor *</label>
                <select class="ds select-actors form-select bg-dark text-white" aria-label="Default select example"></select>
                <div class="invalid-feedback"></div>`
            );
            handler(dynamicSelect);
        });

        radios[1].addEventListener("click", function(e) {
            dynamicSelect.empty();
            dynamicSelect.append(
                `<label class="form-label" for="select-directors">Select director *</label>
                <select class="ds select-directors form-select bg-dark text-white" aria-label="Default select example"></select>
                <div class="invalid-feedback"></div>`
            );
            handler(dynamicSelect);
        });

        radios[2].addEventListener("click", function(e) {
            dynamicSelect.empty();
            dynamicSelect.append(
                `<label class="form-label" for="select-categories">Select category *</label>
                <select class="ds select-categories form-select bg-dark text-white" aria-label="Default select example"></select>
                <div class="invalid-feedback"></div>`
            );
            handler(dynamicSelect);
        });
    }

    /**
     * Bind que manda la orden de desasignar una producción al
     * controlador al enviar el formulario.
     * @param {*} handler La función manejadora que valida el
     * formulario de desasignar producciones de una entidad.
     */
    bindDeassignProduction(handler) {
        const form = document.getElementsByClassName("deassign-production-form")[0];

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler(form);
        });
    }

    /**
     * Bind que enlaza la vista con el controlador para
     * realizar la copia de seguridad de todos los objetos
     * creados de la aplicación.
     * @param {*} handler La función manejadora del controlador
     * que realiza la copia de seguridad.
     */
    bindBackup(handler) {
        const form = this.backupForm.get(0);

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}