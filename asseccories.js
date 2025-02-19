import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { audioManager } from "./audioManager.js";

export function initializeAccessories() {
    const accessoryButtons = [
        { button: buttons.accessories.necklace_01, accessory: 'necklace_01' },
        { button: buttons.accessories.scarf_01, accessory: 'scarf_01' },
        { button: buttons.accessories.collar_01, accessory: 'collar_01' },
    ];

    accessoryButtons.forEach(({ button, accessory }) => {
        if (button) {

            const eventHandler = () => {
                showAccessory(accessory);
                toggleAccessoryButtonVisibility(button, accessoryButtons);

                if (audioManager.sounds[button.name]) {
                    audioManager.playSound(button.name);
                }

            };


            button.removeEventListener('click', eventHandler);
            button.addEventListener('click', eventHandler);
        }
    });
}
function showAccessory(accessoryName) {
    const accessories = movieClips.accessories;
    hideAllAccessories(accessories);

    if (accessories[accessoryName]) {
        accessories[accessoryName].visible = true;
    }
}

function hideAllAccessories(accessories) {
    Object.values(accessories).forEach((accessory) => {
        accessory.visible = false;
    });
}

function toggleAccessoryButtonVisibility(activeButton, accessoryButtons) {
    accessoryButtons.forEach(({ button }) => {
        if (button) {
            button.visible = button !== activeButton;
        }
    });
}
