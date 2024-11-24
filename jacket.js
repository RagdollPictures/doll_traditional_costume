import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';

export function initializeJackets() {
    const jackets = movieClips.jackets;
    const arms = movieClips.arms.fills;

    const colorButtons = [
        { button: buttons.jackets.colors.blue, color: colors.blue },
        { button: buttons.jackets.colors.green, color: colors.green },
        { button: buttons.jackets.colors.black, color: colors.black },
        { button: buttons.jackets.colors.brown, color: colors.brown }
    ];

    colorButtons.forEach(function (item) {
        if (item.button) {
            item.button.addEventListener('click', function () {

                if (!jackets.short.visible && !jackets.long.visible) {
                    jackets.short.visible = true;
                }

                tintJacketAndArmsColor(item.color, jackets, arms);
            });
        } else {
            console.error('Button ' + item.button + ' not found');
        }
    });

    if (buttons.jackets.short) {
        buttons.jackets.short.addEventListener('click', function () {
            jackets.short.visible = true;
            jackets.long.visible = false;
        });
    }

    if (buttons.jackets.long) {
        buttons.jackets.long.addEventListener('click', function () {
            jackets.short.visible = false;
            jackets.long.visible = true;
        });
    }
}

export function tintJacketAndArmsColor(rgbArray, jackets, arms) {
    const r = rgbArray[0], g = rgbArray[1], b = rgbArray[2];

    jackets.short.fill.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    jackets.short.fill.cache(0, 0, jackets.short.nominalBounds.width, jackets.short.nominalBounds.height);

    jackets.long.fill.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    jackets.long.fill.cache(0, 0, jackets.long.nominalBounds.width, jackets.long.nominalBounds.height);

    arms.left.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    arms.left.cache(0, 0, arms.left.nominalBounds.width, arms.left.nominalBounds.height);

    arms.right.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    arms.right.cache(0, 0, arms.right.nominalBounds.width, arms.right.nominalBounds.height);

    arms.leftGirl.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    arms.leftGirl.cache(0, 0, arms.leftGirl.nominalBounds.width, arms.leftGirl.nominalBounds.height);

    arms.rightGirl.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    arms.rightGirl.cache(0, 0, arms.rightGirl.nominalBounds.width, arms.rightGirl.nominalBounds.height);

    arms.cuff_right_01.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    arms.cuff_right_01.cache(0, 0, arms.cuff_right_01.nominalBounds.width, arms.cuff_right_01.nominalBounds.height);

    arms.cuff_left_01.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    arms.cuff_left_01.cache(0, 0, arms.cuff_left_01.nominalBounds.width, arms.cuff_left_01.nominalBounds.height);
}
