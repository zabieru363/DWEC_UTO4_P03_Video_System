"use strict";

import { VideoSystem } from "./VideoSystemModel.js";
import VideoSystemController from "./VideoSystemController.js";
import VideoSystemView from "./VideoSystemView.js";

let app = null;

// * La aplicación se iniciará cuando JQuery esté listo.
$(function() {
    app = new VideoSystemController(
        VideoSystem.getInstance(), new VideoSystemView()
    );
});