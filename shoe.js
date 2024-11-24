import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeShoes() {
    buttons.girlShoes.forEach((button, index) => {
        if (button) {
            button.addEventListener('click', () => {
                showShoes(index);
            });
        }
    });

    buttons.boyShoes.forEach((button, index) => {
        if (button) {
            button.addEventListener('click', () => {
                showShoes(index);
            });
        }
    });
}

function showShoes(index) {
    const shoes = movieClips.shoes;
    hideAllShoes(shoes);
    shoes[`shoe_left_0${index + 1}`].visible = true;
    shoes[`shoe_right_0${index + 1}`].visible = true;
}

function hideAllShoes(shoes) {
    Object.values(shoes).forEach((shoe) => {
        shoe.visible = false;
    });
}
