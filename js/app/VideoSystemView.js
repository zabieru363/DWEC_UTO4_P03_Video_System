"use strict";

/**
 * Clase vista para el Videosystem
 * @author Zabieru
 * @version 1.0
 */
export default class VideoSystemView {
    constructor() {
        this.categories = $(".all-categories");
        this.catList = $(".cat-list");
    }

    showNavbarDropdownCategories(categories) {
        for(const category of categories) this.categories.append(`<li><a class="cat dropdown-item" href="#">${category.name}</a></li>`);
    }

    showCategoriesInCentralZone(categories) {
        let counter = 0;

        for(const category of categories) {
            this.catList.append(
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

            counter++;

            if(counter > 2) break;  // ! Queremos que solo se muestren 3 categorias en la zona central.
        }
    }
}