import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';
import { audioManager } from './audioManager.js';

export function initializeShoes() {
    const shoeButtons = [...buttons.girlShoes, ...buttons.boyShoes];

    shoeButtons.forEach((button, index) => {
        if (button) {
            const shoeListener = function () {
                showShoes(index, shoeButtons, buttons.girlShoes.length);

                audioManager.playSound(button.name);
            };

            button.removeEventListener('click', shoeListener);
            button.addEventListener('click', shoeListener);
        }
    });
}


function showShoes(index, shoeButtons, girlShoesCount) {
    const shoes = movieClips.shoes;


    const isGirlShoe = index < girlShoesCount;
    const shoeIndex = isGirlShoe ? index + 1 : index - girlShoesCount + 1;

    const leftShoeKey = `shoe_left_0${shoeIndex}`;
    const rightShoeKey = `shoe_right_0${shoeIndex}`;


    hideAllShoes(shoes);

    if (shoes[leftShoeKey]) {
        shoes[leftShoeKey].visible = true;
    }
    if (shoes[rightShoeKey]) {
        shoes[rightShoeKey].visible = true;
    }

    toggleShoeButtonVisibility(index, shoeButtons);
}

function hideAllShoes(shoes) {
    Object.values(shoes).forEach((shoe) => {
        shoe.visible = false;
    });
}

function toggleShoeButtonVisibility(activeIndex, shoeButtons) {
    shoeButtons.forEach((button, index) => {
        if (button) {
            button.visible = index !== activeIndex;
        }
    });
}


