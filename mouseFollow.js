import { movieClips } from './movieClips.js';

export function initializeMouseFollow(stage) {
    const headFront = movieClips.character.headFront;
    const headBack = movieClips.character.headBack;
    const nose = movieClips.character.nose;
    const ears = movieClips.character.ears;
    const mouth = movieClips.character.mouth;
    const freckles = movieClips.character.freckles;
    const eyes = movieClips.character.eyes;
    const hairMiddle = movieClips.character.hairMiddle;
    const eyebrows = movieClips.character.eyebrows;
    const pupils = movieClips.character.pupils;
    const headAnchor = movieClips.headAnchor;

    if (!headFront || !headBack || !nose || !freckles || !eyes || !mouth || !hairMiddle || !eyebrows || !ears || !headAnchor || !stage) {
        return;
    }

    const idlePosition = {
        x: headAnchor.x,
        y: headAnchor.y,
    };

    headFront.x = idlePosition.x;
    headFront.y = idlePosition.y;

    headBack.x = idlePosition.x;
    headBack.y = idlePosition.y;

    const mouseMoveHandler = (event) => {
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
