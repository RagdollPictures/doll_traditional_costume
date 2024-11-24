import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeDress() {

    const dressSameButton = buttons.dress.dress_same;
    if (dressSameButton) {
        dressSameButton.addEventListener('click', () => {
            showDressSame();
        });
    } else {
        console.error("Button 'btn_dress_same' not found.");
    }
}

function showDressSame() {

    const aprons = movieClips.aprons;
    const shirts = movieClips.shirts;

    if (!aprons || !shirts) {
        console.error("Aprons or shirts not defined in movieClips.");
        return;
    }


    hideAllAprons(aprons);
    hideAllShirts(shirts);


    if (aprons.apron_same) {
        aprons.apron_same.visible = true;
    } else {
        console.error("apron_same not found in aprons.");
    }

    if (shirts.shirt_same) {
        shirts.shirt_same.visible = true;
    } else {
        console.error("shirt_same not found in shirts.");
    }
}

function hideAllAprons(aprons) {

    Object.keys(aprons).forEach((key) => {
        if (aprons[key] && aprons[key].visible !== undefined) {
            aprons[key].visible = false;
        } else {
            console.warn(`Apron '${key}' is not properly defined or has no 'visible' property.`);
        }
    });
}

function hideAllShirts(shirts) {

    Object.keys(shirts).forEach((key) => {
        if (shirts[key] && shirts[key].visible !== undefined) {
            shirts[key].visible = false;
        } else {
            console.warn(`Shirt '${key}' is not properly defined or has no 'visible' property.`);
        }
    });
}
