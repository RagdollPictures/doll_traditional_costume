import { initializeButtons, buttons } from './buttons.js';
import { initializeMovieClips, movieClips } from './movieClips.js';
import { initializeJackets } from './jacket.js';
import { initializeHair } from './hair.js';
import { initializeShirts } from './shirt.js';
import { initializeAprons } from './apron.js';
import { initializeShoes } from './shoe.js';
import { initializeAccessories } from './asseccories.js';
import { initializeHats } from './hat.js';
import { initializePants } from './pants.js';
import { initializeDress } from './dress.js';
import { initBoy, initGirl } from './init.js';
import { initializeMouseFollow } from './mouseFollow.js';
import { startBlinking } from './blink.js';


document.addEventListener("DOMContentLoaded", function () {
    checkIfReady();
});

function checkIfReady() {
    if (typeof exportRoot !== "undefined" && exportRoot.scene) {
        initializeButtons();
        initializeMovieClips();
        initializeJackets();
        initializeHair();
        initializeShirts();
        initializeAprons();
        initializeShoes();
        initializeAccessories();
        initializeHats();
        initializeDress();
        initializePants();
        initBoy();
        initGirl();
        addCharacterSelectionListeners();
        addResetButtonsListeners();

        const headFront = movieClips.character.headFront;
        const headBack = movieClips.character.headBack;
        initializeMouseFollow(stage, headFront, headBack);
        startBlinking();
    } else {
        setTimeout(checkIfReady, 100);
    }
}



function addCharacterSelectionListeners() {
    const btnBoy = buttons.boy;
    const btnGirl = buttons.girl;

    if (btnBoy) {
        btnBoy.on('click', function () {

            exportRoot.scene.gotoAndStop(1);
            initBoy();
        });
    }

    if (btnGirl) {
        btnGirl.on('click', function () {

            exportRoot.scene.gotoAndStop(2);
            initGirl();
        });
    }
}

function addResetButtonsListeners() {
    const btnResetBoy = buttons.resetBoy;
    const btnResetGirl = buttons.resetGirl;
    const btnBack = buttons.back;

    if (btnResetBoy) {
        btnResetBoy.on('click', function () {

            initBoy();
        });
    }

    if (btnResetGirl) {
        btnResetGirl.on('click', function () {

            initGirl();
        });
    } else {
        console.error("girl init not found");
    }

    if (btnBack) {
        btnBack.on('click', function () {

            exportRoot.scene.gotoAndStop(0);

        });
    }
}

