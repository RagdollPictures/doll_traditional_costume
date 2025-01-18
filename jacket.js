import { colors } from './colors.js';
import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeJackets() {
    const jackets = movieClips.jackets;
    const arms = movieClips.arms;
    const aprons = movieClips.aprons;
    const shirts = movieClips.shirts;
    const accessories = movieClips.accessories;

    const jacketButtons = [
        { button: buttons.jackets.shortYellow, jacket: 'short', color: colors.yellow },
        { button: buttons.jackets.longYellow, jacket: 'long', color: colors.yellow },
        { button: buttons.jackets.shortRed, jacket: 'short', color: colors.brown },
        { button: buttons.jackets.longRed, jacket: 'long', color: colors.brown },
        { button: buttons.jackets.shortBlue, jacket: 'short', color: colors.blue },
        { button: buttons.jackets.longBlue, jacket: 'long', color: colors.blue },
        { button: buttons.jackets.shortBlack, jacket: 'short', color: colors.black },
        { button: buttons.jackets.longBlack, jacket: 'long', color: colors.black },
    ];

    jacketButtons.forEach(({ button, jacket, color }) => {
        if (button) {
            const eventHandler = () => {

                jackets.short.visible = jacket === 'short';
                jackets.long.visible = jacket === 'long';


                if (arms.leftGirl) arms.leftGirl.visible = false;
                if (arms.rightGirl) arms.rightGirl.visible = false;
                if (arms.left) arms.left.visible = true;
                if (arms.right) arms.right.visible = true;


                if (arms.fills) {
                    resetArmColor(arms.fills);
                }


                tintJacketAndArmsColor(color, jackets, arms.fills);


                resetCuffsToCuff01(arms);


                if (shirts.shirt_same_male && shirts.shirt_same_male.visible) {
                    shirts.shirt_same_male.visible = false;
                    Object.keys(shirts).forEach((key) => {
                        shirts[key].visible = false;
                    });

                    if (shirts.shirt_01) {
                        shirts.shirt_01.visible = true;


                        if (buttons.shirts[0]) {
                            buttons.shirts[0].visible = false;
                        }
                    }
                }


                toggleJacketButtonVisibility(button, jacketButtons);


                if (aprons.apron_same_male) {
                    aprons.apron_same_male.visible = false;
                }


                if (buttons.dress.dress_same_male) {
                    buttons.dress.dress_same_male.visible = true;
                }


                if (accessories.collar_01) {
                    accessories.collar_01.visible = true;
                }
            };

            button.removeEventListener('click', eventHandler);
            button.addEventListener('click', eventHandler);
        }
    });
}

function resetArmColor(armFills) {
    const [r, g, b] = colors.white;

    Object.keys(armFills).forEach((key) => {
        const arm = armFills[key];
        if (arm) {

            arm.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
            arm.cache(0, 0, arm.nominalBounds.width, arm.nominalBounds.height);
        }
    });
}

function resetCuffsToCuff01(cuffs) {

    if (cuffs.cuff_left_01) cuffs.cuff_left_01.visible = true;
    if (cuffs.cuff_right_01) cuffs.cuff_right_01.visible = true;


    if (cuffs.cuff_left_same) cuffs.cuff_left_same.visible = false;
    if (cuffs.cuff_right_same) cuffs.cuff_right_same.visible = false;
    if (cuffs.cuff_left_same_male) cuffs.cuff_left_same_male.visible = false;
    if (cuffs.cuff_right_same_male) cuffs.cuff_right_same_male.visible = false;
}


function toggleJacketButtonVisibility(activeButton, jacketButtons) {
    jacketButtons.forEach(({ button }) => {
        if (button) {
            button.visible = button !== activeButton;
        }
    });
}

export function tintJacketAndArmsColor(rgbArray, jackets, arms) {
    const [r, g, b] = rgbArray;

    if (jackets.short.fill) {
        jackets.short.fill.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
        jackets.short.fill.cache(0, 0, jackets.short.nominalBounds.width, jackets.short.nominalBounds.height);
    }

    if (jackets.long.fill) {
        jackets.long.fill.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
        jackets.long.fill.cache(0, 0, jackets.long.nominalBounds.width, jackets.long.nominalBounds.height);
    }

    ['left', 'right', 'leftGirl', 'rightGirl', 'cuff_right_01', 'cuff_left_01'].forEach((armPart) => {
        if (arms[armPart]) {
            arms[armPart].filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
            arms[armPart].cache(0, 0, arms[armPart].nominalBounds.width, arms[armPart].nominalBounds.height);
        }
    });
}
