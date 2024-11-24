import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeAprons() {
    const aprons = movieClips.aprons;
    const shirts = movieClips.shirts; // Include shirts to manage their visibility

    buttons.aprons.forEach(function (button, index) {
        if (button) {
            button.addEventListener('click', function () {
                showApron(index, aprons, shirts);
            });
        }
    });
}

function showApron(index, aprons, shirts) {
    // Hide all aprons first
    Object.keys(aprons).forEach(function (key) {
        aprons[key].visible = false;
    });

    // Show the selected apron
    const selectedApronKey = `apron_0${index + 1}`;
    if (aprons[selectedApronKey]) {
        aprons[selectedApronKey].visible = true;
    }

    // Explicitly hide `apron_same` if a non-same apron is selected
    if (aprons.apron_same) {
        aprons.apron_same.visible = false;
    }

    // Check if shirt_same is currently visible and only then default to shirt_07
    if (shirts.shirt_same && shirts.shirt_same.visible) {
        Object.keys(shirts).forEach(function (key) {
            shirts[key].visible = false; // Hide all shirts
        });

        if (shirts.shirt_07) {
            shirts.shirt_07.visible = true; // Default to shirt_07
        }
    }
}
