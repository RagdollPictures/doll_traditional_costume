import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeHats() {
    const hats = [
        movieClips.hats.hat_01,
        movieClips.hats.hat_02,
        movieClips.hats.hat_03,
        movieClips.hats.hat_04,
        movieClips.hats.hat_05,
        movieClips.hats.hat_06,
        movieClips.hats.hat_07,
        movieClips.hats.hat_08,
        movieClips.hats.hat_09,
        movieClips.hats.hat_10,
    ];

    const hairBehindClips = [
        movieClips.hair.behind.brown,
        movieClips.hair.behind.gray,
        movieClips.hair.behind.blond,
        movieClips.hair.behind.brownGirl,
        movieClips.hair.behind.blondGirl,
    ];

    buttons.hats.forEach(function (button, index) {
        if (button) {
            const hatListener = function () {
                showOnlyHat(index, hats);
                toggleHairBehindVisibility(false, hairBehindClips);
                toggleButtonVisibility(index);
            };
    
            button.removeEventListener('click', hatListener);
            button.addEventListener('click', hatListener);
        }
    });
    
}

function toggleHairBehindVisibility(isVisible, hairBehindClips) {
    hairBehindClips.forEach(function (hair) {
        hair.visible = isVisible;
    });
}

function showOnlyHat(index, hats) {
    hats.forEach(function (hat, i) {
        hat.visible = i === index;
    });
}

function toggleButtonVisibility(activeIndex) {
    buttons.hats.forEach(function (button, index) {
        if (button) {
            button.visible = index !== activeIndex;
        }
    });
}
