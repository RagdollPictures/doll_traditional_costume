import { colors } from './colors.js';
import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeJackets() {
    const jackets = movieClips.jackets;
    const arms = movieClips.arms.fills;

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
            button.addEventListener('click', () => {

                jackets.short.visible = jacket === 'short';
                jackets.long.visible = jacket === 'long';

                tintJacketAndArmsColor(color, jackets, arms);

                toggleJacketButtonVisibility(button, jacketButtons);
            });
        } else {
            console.error(`Button for ${jacket} jacket not found.`);
        }
    });
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

    console.log(`Tinted jackets and arms with color RGB(${r}, ${g}, ${b}).`);
}
