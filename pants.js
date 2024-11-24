import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';

export function initializePants() {
    const pants = movieClips.pants;

    if (buttons.pants.neutral) {
        buttons.pants.neutral.addEventListener('click', function () {
            showNeutralPants(pants);
        });
    }

    if (buttons.pants.ribbons) {
        buttons.pants.ribbons.addEventListener('click', function () {
            showDecoratedPants(pants, 'ribbons');
        });
    }

    if (buttons.pants.tassels) {
        buttons.pants.tassels.addEventListener('click', function () {
            showDecoratedPants(pants, 'tassels');
        });
    }

    if (buttons.pants.buttons) {
        buttons.pants.buttons.addEventListener('click', function () {
            showNeutralWithButtons(pants);
        });
    }

    const colorButtons = [
        { button: buttons.pants.colors.black, color: colors.black },
        { button: buttons.pants.colors.yellow, color: colors.yellow },
        { button: buttons.pants.colors.blue, color: colors.blue },
        { button: buttons.pants.colors.brown, color: colors.brown },
        { button: buttons.pants.colors.white, color: colors.white }
    ];

    colorButtons.forEach(function (item) {
        if (item.button) {
            item.button.addEventListener('click', function () {

                if (pants.boxers.visible && !pants.neutral.visible && !pants.decoration.visible) {
                    pants.neutral.visible = true;
                    pants.boxers.visible = false;
                }


                changePantsColor(item.color, pants.fills);
            });
        }
    });
}

function showNeutralPants(pants) {
    pants.neutral.visible = true;
    pants.decoration.visible = false;
    pants.boxers.visible = false;

    pants.decorations.ribbons.visible = false;
    pants.decorations.tassels.visible = false;
    pants.decorations.buttons.visible = false;
}

function showDecoratedPants(pants, type) {
    pants.neutral.visible = false;
    pants.decoration.visible = true;
    pants.boxers.visible = false;

    pants.decorations.ribbons.visible = (type === 'ribbons');
    pants.decorations.tassels.visible = (type === 'tassels');
    pants.decorations.buttons.visible = false;
}

function showNeutralWithButtons(pants) {
    pants.neutral.visible = true;
    pants.decoration.visible = false;
    pants.boxers.visible = false;

    pants.decorations.ribbons.visible = false;
    pants.decorations.tassels.visible = false;
    pants.decorations.buttons.visible = true;
}

export function changePantsColor(rgbArray, fills) {
    const r = rgbArray[0], g = rgbArray[1], b = rgbArray[2];

    fills.neutral.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    fills.neutral.cache(0, 0, fills.neutral.nominalBounds.width, fills.neutral.nominalBounds.height);

    fills.decoration.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    fills.decoration.cache(0, 0, fills.decoration.nominalBounds.width, fills.decoration.nominalBounds.height);

    fills.skirt.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    fills.skirt.cache(0, 0, fills.skirt.nominalBounds.width, fills.decoration.nominalBounds.height);
}
