import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeAccessories() {
    const accessoryButtons = [
        { button: buttons.accessories.necklace_01, accessory: 'necklace_01' },
        { button: buttons.accessories.scarf_01, accessory: 'scarf_01' },
        { button: buttons.accessories.collar_01, accessory: 'collar_01' },
    ];

    accessoryButtons.forEach(({ button, accessory }) => {
        if (button) {
            button.addEventListener('click', () => {
                showAccessory(accessory);
                toggleAccessoryButtonVisibility(button, accessoryButtons);
            });
        } else {
            console.error(`Button for ${accessory} not found.`);
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
            button.visible = button !== activeButton; // Hide the clicked button, show others
        }
    });
}
