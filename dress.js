import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';

export function initializeDress() {
    const dressSameButton = buttons.dress.dress_same;
    if (dressSameButton) {
        dressSameButton.addEventListener('click', () => {
            showDressSame();
        });
    }
}

function showDressSame() {
    const aprons = movieClips.aprons;
    const shirts = movieClips.shirts;
    const arms = movieClips.arms.fills;
    const cuffs = movieClips.arms;
    const accessories = movieClips.accessories;

    hideAllAprons(aprons);
    hideAllShirts(shirts);

    if (aprons.apron_same) {
        aprons.apron_same.visible = true;
    }

    if (shirts.shirt_same) {
        shirts.shirt_same.visible = true;
    }

    tintArms(arms, colors.blue);
    showCuffSame(cuffs);
    showCollar(accessories, false);
}

function hideAllAprons(aprons) {
    Object.keys(aprons).forEach((key) => {
        if (aprons[key]) {
            aprons[key].visible = false;
        }
    });
}

function hideAllShirts(shirts) {
    Object.keys(shirts).forEach((key) => {
        if (shirts[key]) {
            shirts[key].visible = false;
        }
    });
}

function tintArms(arms, rgbArray) {
    const [r, g, b] = rgbArray;

    Object.keys(arms).forEach((key) => {
        if (arms[key]) {
            arms[key].filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
            arms[key].cache(0, 0, arms[key].nominalBounds.width, arms[key].nominalBounds.height);
        }
    });
}

function showCuffSame(cuffs) {
    if (cuffs.cuff_left_same) cuffs.cuff_left_same.visible = true;
    if (cuffs.cuff_right_same) cuffs.cuff_right_same.visible = true;

    if (cuffs.cuff_left_01) cuffs.cuff_left_01.visible = false;
    if (cuffs.cuff_right_01) cuffs.cuff_right_01.visible = false;
}

function showCollar(accessories, isVisible) {
    if (accessories.collar_01) {
        accessories.collar_01.visible = isVisible;
    }
}
