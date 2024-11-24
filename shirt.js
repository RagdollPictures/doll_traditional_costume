import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';

export function initializeShirts() {
    const shirts = movieClips.shirts;
    const aprons = movieClips.aprons;
    const arms = movieClips.arms.fills;
    const cuffs = movieClips.arms;
    const accessories = movieClips.accessories;

    buttons.shirts.forEach(function (button, index) {
        if (button) {
            button.addEventListener('click', function () {
                showShirt(index, shirts, aprons, arms, cuffs, accessories);
            });
        }
    });
}

function showShirt(index, shirts, aprons, arms, cuffs, accessories) {
    Object.keys(shirts).forEach(function (key) {
        shirts[key].visible = false;
    });

    let selectedShirtKey;
    if (index >= 9) {
        selectedShirtKey = `shirt_${index + 1}`;
    } else {
        selectedShirtKey = `shirt_0${index + 1}`;
    }

    if (shirts[selectedShirtKey]) {
        shirts[selectedShirtKey].visible = true;
    }

    if (aprons.apron_same) {
        aprons.apron_same.visible = false;
    }

    resetArmColor(arms);
    showCuff01(cuffs);
    showCollar(accessories, true);
}

function resetArmColor(arms) {
    const [r, g, b] = colors.white;

    Object.keys(arms).forEach((key) => {
        if (arms[key]) {
            arms[key].filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
            arms[key].cache(0, 0, arms[key].nominalBounds.width, arms[key].nominalBounds.height);
        }
    });
}

function showCuff01(cuffs) {
    if (cuffs.cuff_left_01) cuffs.cuff_left_01.visible = true;
    if (cuffs.cuff_right_01) cuffs.cuff_right_01.visible = true;

    if (cuffs.cuff_left_same) cuffs.cuff_left_same.visible = false;
    if (cuffs.cuff_right_same) cuffs.cuff_right_same.visible = false;
}

function showCollar(accessories, isVisible) {
    if (accessories.collar_01) {
        accessories.collar_01.visible = isVisible;
    }
}
