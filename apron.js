import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeAprons() {
    const aprons = movieClips.aprons;

    buttons.aprons.forEach(function (button, index) {
        if (button) {
            button.addEventListener('click', function () {
                showApron(index, aprons);
            });
        }
    });
}

function showApron(index, aprons) {
    Object.keys(aprons).forEach(function (key, i) {
        aprons[key].visible = i === index;
    });
}
