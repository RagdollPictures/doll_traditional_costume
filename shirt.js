import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeShirts() {
    const shirts = movieClips.shirts;

    buttons.shirts.forEach(function (button, index) {
        if (button) {
            button.addEventListener('click', function () {
                showShirt(index, shirts);
            });
        }
    });
}

function showShirt(index, shirts) {
    Object.keys(shirts).forEach(function (key, i) {
        shirts[key].visible = i === index;
    });
}
