import { movieClips } from './movieClips.js';

export function startBlinking() {
    const eyes = movieClips.character.eyes;

    function blink() {
        if (eyes) {
            eyes.gotoAndStop(1);
            setTimeout(() => {
                eyes.gotoAndStop(0);
            }, 500);
        }
    }


    setInterval(blink, 5000);
}
