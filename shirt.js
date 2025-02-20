import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';
import { audioManager } from './audioManager.js';

export function initializeShirts() {
    const shirts = movieClips.shirts;
    const aprons = movieClips.aprons;
    const arms = movieClips.arms.fills;
    const cuffs = movieClips.arms;
    const accessories = movieClips.accessories;

    buttons.shirts.forEach(function (button, index) {
        if (button) {
            const shirtListener = function () {
                showShirt(index, shirts, aprons, arms, cuffs, accessories);
                toggleShirtButtonVisibility(index);

                audioManager.playSound("hanger");
                audioManager.playSound(button.name);
            };

            button.removeEventListener('click', shirtListener);
            button.addEventListener('click', shirtListener);
        }
    });
}


function showShirt(index, shirts, aprons, arms, cuffs, accessories) {
    Object.keys(shirts).forEach((key) => {
        shirts[key].visible = false;
    });

    let selectedShirtKey = index >= 9 ? `shirt_${index + 1}` : `shirt_0${index + 1}`;
    if (shirts[selectedShirtKey]) {
        shirts[selectedShirtKey].visible = true;
    }

    if (aprons.apron_same) {
        aprons.apron_same.visible = false;
    }
    if (aprons.apron_same_male) {
        aprons.apron_same_male.visible = false;
    }

    if (buttons.dress.dress_same) {
        buttons.dress.dress_same.visible = true;
    }
    if (buttons.dress.dress_same_male) {
        buttons.dress.dress_same_male.visible = true;
    }


    if (index >= 6) {
        tintArmsWhite(arms);
    }


    if (index < 6) {
        movieClips.arms.left.visible = true;
        movieClips.arms.right.visible = true;

        movieClips.arms.leftGirl.visible = false;
        movieClips.arms.rightGirl.visible = false;

        cuffs.cuff_left_01.visible = true;
        cuffs.cuff_right_01.visible = true;
    } else {
        movieClips.arms.leftGirl.visible = true;
        movieClips.arms.rightGirl.visible = true;

        movieClips.arms.left.visible = false;
        movieClips.arms.right.visible = false;

        cuffs.cuff_left_01.visible = true;
        cuffs.cuff_right_01.visible = true;
    }

    showCuff01(cuffs);
    showCollar(accessories, true);


}

function tintArmsWhite(arms) {
    const [r, g, b] = colors.white;


    ['left', 'right', 'leftGirl', 'rightGirl', 'cuff_right_01', 'cuff_left_01'].forEach((armPart) => {
        const arm = arms[armPart] || movieClips.arms[armPart];
        if (arm) {
            arm.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
            arm.cache(0, 0, arm.nominalBounds.width, arm.nominalBounds.height);
            arm.updateCache();
        }
    });
}

function toggleShirtButtonVisibility(activeIndex) {
    buttons.shirts.forEach(function (button, index) {
        if (button) {
            button.visible = index !== activeIndex;
        }
    });
}

function showCuff01(cuffs) {
    if (cuffs.cuff_left_01) cuffs.cuff_left_01.visible = true;
    if (cuffs.cuff_right_01) cuffs.cuff_right_01.visible = true;

    if (cuffs.cuff_left_same) cuffs.cuff_left_same.visible = false;
    if (cuffs.cuff_right_same) cuffs.cuff_right_same.visible = false;

    if (cuffs.cuff_left_same_male) cuffs.cuff_left_same_male.visible = false;
    if (cuffs.cuff_right_same_male) cuffs.cuff_right_same_male.visible = false;
}

function showCollar(accessories, isVisible) {
    if (accessories.collar_01) {
        accessories.collar_01.visible = isVisible;
    }
}
