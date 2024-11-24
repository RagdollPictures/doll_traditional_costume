import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeAccessories() {
    if (buttons.accessories.necklace_01) {
        buttons.accessories.necklace_01.addEventListener('click', () => {
            showAccessory('necklace_01');
        });
    }

    if (buttons.accessories.scarf_01) {
        buttons.accessories.scarf_01.addEventListener('click', () => {
            showAccessory('scarf_01');
        });
    }

    if (buttons.accessories.collar_01) {
        buttons.accessories.collar_01.addEventListener('click', () => {
            showAccessory('collar_01');
        });
    }
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
