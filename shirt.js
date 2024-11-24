import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeShirts() {
    const shirts = movieClips.shirts;
    const aprons = movieClips.aprons; // Include aprons to handle the visibility of apron_same

    buttons.shirts.forEach(function (button, index) {
        if (button) {
            button.addEventListener('click', function () {
                showShirt(index, shirts, aprons);
            });
        }
    });
}

function showShirt(index, shirts, aprons) {
    // Hide all shirts first
    Object.keys(shirts).forEach(function (key) {
        shirts[key].visible = false;
    });

    // Determine the key for the selected shirt
    let selectedShirtKey;
    if (index >= 9) {
        // Handle double-digit shirts (10, 11, 12)
        selectedShirtKey = `shirt_${index + 1}`;
    } else {
        // Handle single-digit shirts (1-9)
        selectedShirtKey = `shirt_0${index + 1}`;
    }

    // Show the selected shirt if it exists
    if (shirts[selectedShirtKey]) {
        shirts[selectedShirtKey].visible = true;
    } else {
        console.error(`Shirt "${selectedShirtKey}" not found in movieClips.`);
    }

    // Explicitly hide apron_same when any shirt is selected
    if (aprons.apron_same) {
        aprons.apron_same.visible = false;
    }
}
