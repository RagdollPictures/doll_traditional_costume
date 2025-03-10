import { movieClips } from './movieClips.js';

let paused = false;

let headFront, headBack, nose, ears, mouth, freckles, eyes, hairMiddle, eyebrows, pupils;
let idlePosition = { x: 0, y: 0 };

function resetToIdle() {
    headFront.x = idlePosition.x;
    headFront.y = idlePosition.y;

    headBack.x = idlePosition.x;
    headBack.y = idlePosition.y;

    nose.x = 0;
    nose.y = 0;
    ears.x = 0;
    ears.y = 0;
    mouth.x = 0;
    mouth.y = 0;
    eyes.x = 0;
    eyes.y = 0;
    freckles.x = 0;
    freckles.y = 0;
    hairMiddle.x = 0;
    hairMiddle.y = 0;
    eyebrows.x = 0;
    eyebrows.y = 0;
    pupils.x = 0;
    pupils.y = 0;
}

export function pauseMouseFollow(duration) {
    paused = true;
    resetToIdle();

    if (duration > 0) {
        setTimeout(() => {
            paused = false;
        }, duration);
    }
}

export function initializeMouseFollow(stage) {
    headFront = movieClips.character.headFront;
    headBack = movieClips.character.headBack;
    nose = movieClips.character.nose;
    ears = movieClips.character.ears;
    mouth = movieClips.character.mouth;
    freckles = movieClips.character.freckles;
    eyes = movieClips.character.eyes;
    hairMiddle = movieClips.character.hairMiddle;
    eyebrows = movieClips.character.eyebrows;
    pupils = movieClips.character.pupils;

    const headAnchor = movieClips.headAnchor;

    if (
        !headFront || !headBack || !nose || !freckles ||
        !eyes || !mouth || !hairMiddle || !eyebrows ||
        !ears || !headAnchor || !stage
    ) {
        return;
    }

    idlePosition = {
        x: headAnchor.x,
        y: headAnchor.y,
    };

    resetToIdle();

    const mouseMoveHandler = (event) => {
        if (paused) return;

        const scaleX = stage.scaleX || 1;
        const scaleY = stage.scaleY || 1;

        const normalizedMouseX = event.stageX / scaleX;
        const normalizedMouseY = event.stageY / scaleY;

        const headMovementFactor = 0.008;
        const parallaxFactor = -0.008;
        const noseFactor = 0.02;
        const earFactor = -0.012;
        const mouthFactor = 0.015;
        const eyesFactor = 0.01;
        const frecklesFactor = 0.013;
        const hairMiddleFactor = -0.009;
        const eyebrowsFactor = 0.01;
        const pupilsFactor = 0.015;

        headFront.x = idlePosition.x + (normalizedMouseX - idlePosition.x) * headMovementFactor;
        headFront.y = idlePosition.y + (normalizedMouseY - idlePosition.y) * headMovementFactor;

        headBack.x = idlePosition.x + (normalizedMouseX - idlePosition.x) * parallaxFactor;
        headBack.y = idlePosition.y + (normalizedMouseY - idlePosition.y) * parallaxFactor;

        nose.x = (normalizedMouseX - headFront.x) * noseFactor;
        nose.y = (normalizedMouseY - headFront.y) * noseFactor;
        ears.x = (normalizedMouseX - headFront.x) * earFactor;
        ears.y = (normalizedMouseY - headFront.y) * earFactor;
        mouth.x = (normalizedMouseX - headFront.x) * mouthFactor;
        mouth.y = (normalizedMouseY - headFront.y) * mouthFactor;
        eyes.x = (normalizedMouseX - headFront.x) * eyesFactor;
        eyes.y = (normalizedMouseY - headFront.y) * eyesFactor;
        freckles.x = (normalizedMouseX - headFront.x) * frecklesFactor;
        freckles.y = (normalizedMouseY - headFront.y) * frecklesFactor;
        hairMiddle.x = (normalizedMouseX - headFront.x) * hairMiddleFactor;
        hairMiddle.y = (normalizedMouseY - headFront.y) * hairMiddleFactor;
        eyebrows.x = (normalizedMouseX - headFront.x) * eyebrowsFactor;
        eyebrows.y = (normalizedMouseY - headFront.y) * eyebrowsFactor;
        pupils.x = (normalizedMouseX - headFront.x) * pupilsFactor;
        pupils.y = (normalizedMouseY - headFront.y) * pupilsFactor;
    };

    stage.removeEventListener('stagemousemove', mouseMoveHandler);
    stage.addEventListener('stagemousemove', mouseMoveHandler);
}
