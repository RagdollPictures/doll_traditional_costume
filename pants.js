import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';
import { audioManager } from './audioManager.js';

export function initializePants() {
    const pants = movieClips.pants;

    const pantsButtons = [
        { button: buttons.pants.neutral, action: () => showNeutralPants(pants) },
        { button: buttons.pants.ribbons, action: () => showDecoratedPants(pants, 'ribbons') },
        { button: buttons.pants.tassels, action: () => showDecoratedPants(pants, 'tassels') },
        { button: buttons.pants.buttons, action: () => showNeutralWithButtons(pants) },
    ];

    pantsButtons.forEach(({ button, action }) => {
        if (button) {
            const pantsListener = function () {
                action();
                togglePantsButtonVisibility(button, pantsButtons);

                if (audioManager.sounds[button.name]) {
                    audioManager.playSound(button.name);
                }
            };

            button.removeEventListener('click', pantsListener);
            button.addEventListener('click', pantsListener);
        }
    });

    if (buttons.pants.pantsColor) {
        const pantsColorSequence = [colors.yellow, colors.blue, colors.brown, colors.black];
        let currentColorIndex = 0;

        const pantsColorListener = function () {
            const currentColor = pantsColorSequence[currentColorIndex];

            if (!isAnyPantsVisible(pants)) {
                showNeutralPants(pants);
            }

            changePantsColor(currentColor, pants);
            currentColorIndex = (currentColorIndex + 1) % pantsColorSequence.length;
        };

        buttons.pants.pantsColor.removeEventListener('click', pantsColorListener);
        buttons.pants.pantsColor.addEventListener('click', pantsColorListener);
    }

    if (buttons.pants.skirtColor) {
        const skirtColorSequence = [colors.yellow, colors.blue, colors.brown, colors.white];
        let currentSkirtColorIndex = 0;

        const skirtColorListener = function () {
            const currentColor = skirtColorSequence[currentSkirtColorIndex];

            changeSkirtColor(currentColor, pants.fills);
            currentSkirtColorIndex = (currentSkirtColorIndex + 1) % skirtColorSequence.length;
        };

        buttons.pants.skirtColor.removeEventListener('click', skirtColorListener);
        buttons.pants.skirtColor.addEventListener('click', skirtColorListener);
    }
}


function togglePantsButtonVisibility(activeButton, pantsButtons) {
    pantsButtons.forEach(({ button }) => {
        if (button) {
            button.visible = button === buttons.pants.neutral || button !== activeButton;
        }
    });
}


function isAnyPantsVisible(pants) {
    return pants.neutral.visible || pants.decoration.visible || pants.boxers.visible;
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

    pants.decorations.ribbons.visible = type === 'ribbons';
    pants.decorations.tassels.visible = type === 'tassels';
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

export function changePantsColor(rgbArray, pants) {
    if (!Array.isArray(rgbArray) || rgbArray.length !== 3) {
        return;
    }

    if (pants.boxers?.visible) {
        pants.neutral.visible = true;
        pants.boxers.visible = false;
    }

    const [r, g, b] = rgbArray;

    if (pants.fills?.neutral) {
        applyColorFilter(pants.fills.neutral, r, g, b);
    }

    if (pants.fills?.decoration) {
        applyColorFilter(pants.fills.decoration, r, g, b);
    }

}

export function changeSkirtColor(rgbArray, fills) {
    if (!Array.isArray(rgbArray) || rgbArray.length !== 3) {
        return;
    }
    const [r, g, b] = rgbArray;

    if (fills.skirt) {
        applyColorFilter(fills.skirt, r, g, b);
    }
}

function applyColorFilter(target, r, g, b) {
    target.filters = [new createjs.ColorFilter(0, 0, 0, 1, r, g, b)];
    target.cache(0, 0, target.nominalBounds.width, target.nominalBounds.height);
}
