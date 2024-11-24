import { buttons } from './buttons.js';
import { movieClips } from './movieClips.js';

export function initializeHair() {
    const showHairs = movieClips.hair;
    const beard = movieClips.beard;
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

    function isAnyHatVisible() {
        return hats.some(hat => hat.visible);
    }

    function hideAllBehindHairs() {
        showHairs.behind.blondGirl.visible = false;
        showHairs.behind.brownGirl.visible = false;
        showHairs.behind.blond.visible = false;
        showHairs.behind.brown.visible = false;
        showHairs.behind.gray.visible = false;
    }

    function hideAllHairs() {
        showHairs.front.blond.visible = false;
        showHairs.middleLeft.blond.visible = false
        showHairs.middleRight.blond.visible = false;
        showHairs.bottom.blond.visible = false;
        showHairs.behind.blond.visible = false;

        showHairs.front.brown.visible = false;
        showHairs.middleLeft.brown.visible = false;
        showHairs.middleRight.brown.visible = false;
        showHairs.bottom.brown.visible = false;
        showHairs.behind.brown.visible = false;

        showHairs.front.gray.visible = false;
        showHairs.middleLeft.gray.visible = false;
        showHairs.middleRight.gray.visible = false;
        showHairs.bottom.gray.visible = false;
        showHairs.behind.gray.visible = false;

        showHairs.front.blondGirl.visible = false;
        showHairs.middleLeft.blondGirl.visible = false;
        showHairs.middleRight.blondGirl.visible = false;
        showHairs.bottom.blondGirlStraight.visible = false;
        showHairs.behind.blondGirl.visible = false;

        showHairs.front.brownGirl.visible = false;
        showHairs.middleLeft.brownGirl.visible = false;
        showHairs.middleRight.brownGirl.visible = false;
        showHairs.bottom.brownGirlStraight.visible = false;
        showHairs.behind.brownGirl.visible = false;

        showHairs.bottom.blondGirlBraids.visible = false;
        showHairs.bottom.brownGirlBraids.visible = false;

        beard.visible = false;
    }

    if (buttons.hair.blond) {
        buttons.hair.blond.addEventListener('click', function () {

            hideAllHairs();

            showHairs.front.blond.visible = true;
            showHairs.middleLeft.blond.visible = true;
            showHairs.middleRight.blond.visible = true;
            showHairs.bottom.blond.visible = true;
            showHairs.behind.blond.visible = true;



            if (isAnyHatVisible()) {
                hideAllBehindHairs();
            }
        });
    }

    if (buttons.hair.gray) {
        buttons.hair.gray.addEventListener('click', function () {

            hideAllHairs();
            showHairs.front.gray.visible = true;
            showHairs.middleLeft.gray.visible = true;
            showHairs.middleRight.gray.visible = true;
            showHairs.bottom.gray.visible = true;
            showHairs.behind.gray.visible = true;
            beard.visible = true;

            if (isAnyHatVisible()) {
                hideAllBehindHairs();
            }
        });
    }

    if (buttons.hair.brown) {
        buttons.hair.brown.addEventListener('click', function () {

            hideAllHairs();

            showHairs.front.brown.visible = true;
            showHairs.middleLeft.brown.visible = true;
            showHairs.middleRight.brown.visible = true;
            showHairs.bottom.brown.visible = true;
            showHairs.behind.brown.visible = true;



            if (isAnyHatVisible()) {
                hideAllBehindHairs();
            }
        });
    }

    if (buttons.hair.blondStraightGirl) {
        buttons.hair.blondStraightGirl.addEventListener('click', function () {

            hideAllHairs();

            showHairs.front.blondGirl.visible = true;
            showHairs.middleLeft.blondGirl.visible = true;
            showHairs.middleRight.blondGirl.visible = true;
            showHairs.bottom.blondGirlStraight.visible = true;
            showHairs.behind.blondGirl.visible = true;



            if (isAnyHatVisible()) {
                hideAllBehindHairs();
            }
        });
    }

    if (buttons.hair.brownStraightGirl) {
        buttons.hair.brownStraightGirl.addEventListener('click', function () {
            hideAllHairs();

            showHairs.front.brownGirl.visible = true;
            showHairs.middleLeft.brownGirl.visible = true;
            showHairs.middleRight.brownGirl.visible = true;
            showHairs.bottom.brownGirlStraight.visible = true;
            showHairs.behind.brownGirl.visible = true;

            if (isAnyHatVisible()) {
                hideAllBehindHairs();
            }
        });
    }

    if (buttons.hair.brownBraidsGirl) {
        buttons.hair.brownBraidsGirl.addEventListener('click', function () {

            hideAllHairs();

            showHairs.front.brownGirl.visible = true;
            showHairs.middleLeft.brownGirl.visible = true;
            showHairs.middleRight.brownGirl.visible = true;
            showHairs.bottom.brownGirlBraids.visible = true;
            showHairs.behind.brownGirl.visible = true;



            if (isAnyHatVisible()) {
                hideAllBehindHairs();
            }
        });
    }

    if (buttons.hair.blondBraidsGirl) {
        buttons.hair.blondBraidsGirl.addEventListener('click', function () {
            hideAllHairs();

            showHairs.front.blondGirl.visible = true;
            showHairs.middleLeft.blondGirl.visible = true;
            showHairs.middleRight.blondGirl.visible = true;
            showHairs.bottom.blondGirlBraids.visible = true;
            showHairs.behind.blondGirl.visible = true;


            if (isAnyHatVisible()) {
                hideAllBehindHairs();
            }
        });
    }
}







