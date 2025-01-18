import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';

export function initializeDress() {
    const dressSameButtonFemale = buttons.dress.dress_same;
    const dressSameButtonMale = buttons.dress.dress_same_male;


    if (dressSameButtonFemale) {
        const eventHandlerFemale = () => {
            showDressSame('female');
        };

        dressSameButtonFemale.removeEventListener('click', eventHandlerFemale);
        dressSameButtonFemale.addEventListener('click', eventHandlerFemale);
    }


    if (dressSameButtonMale) {
        const eventHandlerMale = () => {
            showDressSame('male');
        };

        dressSameButtonMale.removeEventListener('click', eventHandlerMale);
        dressSameButtonMale.addEventListener('click', eventHandlerMale);
    }
}

function showDressSame(gender) {
    const suffix = gender === 'male' ? '_male' : '';

    const aprons = getGenderedInstances(movieClips.aprons, suffix);
    const shirts = getGenderedInstances(movieClips.shirts, suffix);
    const cuffs = getGenderedInstances(movieClips.arms, suffix);
    const accessories = movieClips.accessories;
    const jackets = movieClips.jackets;

    const femaleArms = {
        left: movieClips.arms.leftGirl,
        right: movieClips.arms.rightGirl
    };

    const femaleArmFills = {
        left: movieClips.arms.fills.leftGirl,
        right: movieClips.arms.fills.rightGirl
    };

    hideAllJackets(jackets);
    hideAllAprons(aprons);
    hideAllShirts(shirts);
    hideAllArms();

    if (aprons[`apron_same${suffix}`]) {
        aprons[`apron_same${suffix}`].visible = true;
    }

    if (shirts[`shirt_same${suffix}`]) {
        shirts[`shirt_same${suffix}`].visible = true;
    }

    femaleArms.left.visible = true;
    femaleArms.right.visible = true;

    femaleArmFills.left.visible = true;
    femaleArmFills.right.visible = true;

    tintArms(femaleArmFills, colors.blue);

    showCuffSame(cuffs, suffix);
    showCollar(accessories, false);

    showAllJacketButtons();
}

function showAllJacketButtons() {
    const jacketButtons = [
        buttons.jackets.shortYellow,
        buttons.jackets.longYellow,
        buttons.jackets.shortRed,
        buttons.jackets.longRed,
        buttons.jackets.shortBlue,
        buttons.jackets.longBlue,
        buttons.jackets.shortBlack,
        buttons.jackets.longBlack
    ];

    jacketButtons.forEach((button) => {
        if (button) {
            button.visible = true;
        }
    });
}

function hideAllJackets(jackets) {
    if (!jackets) return;

    Object.keys(jackets).forEach((key) => {
        if (jackets[key]) {
            jackets[key].visible = false;
        }
    });
}





function hideAllArms() {
    movieClips.arms.left.visible = false;
    movieClips.arms.right.visible = false;
    movieClips.arms.leftGirl.visible = false;
    movieClips.arms.rightGirl.visible = false;
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
        const arm = arms[key];
        if (arm) {

            arm.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];


            arm.visible = true;


            const bounds = arm.nominalBounds || arm.getBounds();
            if (bounds) {
                arm.cache(0, 0, bounds.width, bounds.height);
            } else {
                console.log("fel bounds");
            }


            arm.updateCache();
        }
    });
}



function showCuffSame(cuffs, suffix) {
    if (cuffs[`cuff_left_same${suffix}`]) cuffs[`cuff_left_same${suffix}`].visible = true;
    if (cuffs[`cuff_right_same${suffix}`]) cuffs[`cuff_right_same${suffix}`].visible = true;

    if (cuffs[`cuff_left_01${suffix}`]) cuffs[`cuff_left_01${suffix}`].visible = false;
    if (cuffs[`cuff_right_01${suffix}`]) cuffs[`cuff_right_01${suffix}`].visible = false;
}

function showCollar(accessories, isVisible) {
    if (accessories.collar_01) {
        accessories.collar_01.visible = isVisible;
    }
}

function getGenderedInstances(instanceGroup, suffix) {
    const genderedInstances = {};
    Object.keys(instanceGroup).forEach((key) => {
        const genderedKey = `${key}${suffix}`;
        genderedInstances[genderedKey] = instanceGroup[genderedKey] || null;
    });
    return genderedInstances;
}

