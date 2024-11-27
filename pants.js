import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { colors } from './colors.js';

export function initializePants() {
    const pants = movieClips.pants;

    const pantsButtons = [
        { button: buttons.pants.neutral, action: () => showNeutralPants(pants) },
        { button: buttons.pants.ribbons, action: () => showDecoratedPants(pants, 'ribbons') },
        { button: buttons.pants.tassels, action: () => showDecoratedPants(pants, 'tassels') },
        { button: buttons.pants.buttons, action: () => showNeutralWithButtons(pants) },
    ];

    // Add event listeners to pants buttons
    pantsButtons.forEach(({ button, action }) => {
        if (button) {
            button.addEventListener('click', () => {
                action();
                togglePantsButtonVisibility(button, pantsButtons);
            });
        } else {
            console.error("Button not found.");
        }
    });

    // Add color-changing functionality for pants
    if (buttons.pants.pantsColor) {
        const pantsColorSequence = [colors.yellow, colors.blue, colors.brown, colors.black];
        let currentColorIndex = 0;

        buttons.pants.pantsColor.addEventListener('click', function () {
            const currentColor = pantsColorSequence[currentColorIndex];
            console.log('Current pants color:', currentColor);

            if (!isAnyPantsVisible(pants)) {
                console.log('No pants visible. Showing neutral pants.');
                showNeutralPants(pants);
            }

            changePantsColor(currentColor, pants);
            currentColorIndex = (currentColorIndex + 1) % pantsColorSequence.length;
        });
    }

    // Add color-changing functionality for skirts
    if (buttons.pants.skirtColor) {
        const skirtColorSequence = [colors.yellow, colors.blue, colors.brown, colors.white];
        let currentSkirtColorIndex = 0;

        buttons.pants.skirtColor.addEventListener('click', function () {
            const currentColor = skirtColorSequence[currentSkirtColorIndex];
            console.log('Current skirt color:', currentColor);

            changeSkirtColor(currentColor, pants.fills);
            currentSkirtColorIndex = (currentSkirtColorIndex + 1) % skirtColorSequence.length;
        });
    }
}

function togglePantsButtonVisibility(activeButton, pantsButtons) {
    pantsButtons.forEach(({ button }) => {
        if (button) {
            // Do not hide the pants.neutral button
            button.visible = button === buttons.pants.neutral || button !== activeButton;
        }
    });
}


// Rest of your helper functions remain unchanged
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

    console.log('Showing neutral pants.');
}

function showDecoratedPants(pants, type) {
    pants.neutral.visible = false;
    pants.decoration.visible = true;
    pants.boxers.visible = false;

    pants.decorations.ribbons.visible = type === 'ribbons';
    pants.decorations.tassels.visible = type === 'tassels';
    pants.decorations.buttons.visible = false;

    console.log(`Showing decorated pants with ${type}.`);
}

function showNeutralWithButtons(pants) {
    pants.neutral.visible = true;
    pants.decoration.visible = false;
    pants.boxers.visible = false;

    pants.decorations.ribbons.visible = false;
    pants.decorations.tassels.visible = false;
    pants.decorations.buttons.visible = true;

    console.log('Showing neutral pants with buttons decoration.');
}

// Existing color-changing helper functions remain unchanged
export function changePantsColor(rgbArray, pants) {
    if (!Array.isArray(rgbArray) || rgbArray.length !== 3) {
        console.error('Invalid rgbArray:', rgbArray);
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

    console.log(`Changed pants color to RGB(${r}, ${g}, ${b}).`);
}

export function changeSkirtColor(rgbArray, fills) {
    if (!Array.isArray(rgbArray) || rgbArray.length !== 3) {
        console.error('Invalid rgbArray:', rgbArray);
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
    console.log(`Applied color filter RGB(${r}, ${g}, ${b}) to`, target);
}
