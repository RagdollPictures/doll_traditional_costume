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
        showHairs.behind.blackGirl.visible = false;
        showHairs.behind.blondGirl.visible = false;
        showHairs.behind.brownGirl.visible = false;
        showHairs.behind.black.visible = false;
        showHairs.behind.blond.visible = false;
        showHairs.behind.brown.visible = false;
        showHairs.behind.gray.visible = false;
    }


    if (buttons.hair.girl) {

        const wigsSequence = [
            {
                front: showHairs.front.blondGirl,
                middleLeft: showHairs.middleLeft.blondGirl,
                middleRight: showHairs.middleRight.blondGirl,
                bottom: showHairs.bottom.blondGirlStraight,
                behind: showHairs.behind.blondGirl
            },
            {
                front: showHairs.front.brownGirl,
                middleLeft: showHairs.middleLeft.brownGirl,
                middleRight: showHairs.middleRight.brownGirl,
                bottom: showHairs.bottom.brownGirlStraight,
                behind: showHairs.behind.brownGirl
            },
            {
                front: showHairs.front.blackGirl,
                middleLeft: showHairs.middleLeft.blackGirl,
                middleRight: showHairs.middleRight.blackGirl,
                bottom: null,
                behind: showHairs.behind.blackGirl
            },
            {
                front: showHairs.front.blondGirl,
                middleLeft: showHairs.middleLeft.blondGirl,
                middleRight: showHairs.middleRight.blondGirl,
                bottom: showHairs.bottom.blondGirlBraids,
                behind: showHairs.behind.blondGirl
            }
        ];

        let currentWigIndex = 0;

        function hideAllWigs() {
            wigsSequence.forEach(wig => {
                wig.front.visible = false;
                wig.middleLeft.visible = false;
                wig.middleRight.visible = false;
                wig.behind.visible = false;


                if (wig.bottom) {
                    wig.bottom.visible = false;
                }
            });
        }


        if (buttons.hair.girl) {
            const girlListener = function () {
                showCurrentWig();
                currentWigIndex = (currentWigIndex + 1) % wigsSequence.length;
            };

            const showCurrentWig = function () {
                const currentWig = wigsSequence[currentWigIndex];
                hideAllWigs();

                currentWig.front.visible = true;
                currentWig.middleLeft.visible = true;
                currentWig.middleRight.visible = true;
                currentWig.behind.visible = true;


                if (currentWig.bottom) {
                    currentWig.bottom.visible = true;
                }

                if (isAnyHatVisible()) {
                    hideAllBehindHairs();
                }
            };


            buttons.hair.girl.removeEventListener('click', girlListener);
            buttons.hair.girl.addEventListener('click', girlListener);
        }

    }


    if (buttons.hair.boy) {
        const wigsSequence = [

            {
                front: showHairs.front.brown,
                middleLeft: showHairs.middleLeft.brown,
                middleRight: showHairs.middleRight.brown,
                bottom: showHairs.bottom.brown,
                behind: showHairs.behind.brown,
                beard: false
            },
            {
                front: showHairs.front.gray,
                middleLeft: showHairs.middleLeft.gray,
                middleRight: showHairs.middleRight.gray,
                bottom: showHairs.bottom.gray,
                behind: showHairs.behind.gray,
                beard: true
            },
            {
                front: showHairs.front.black,
                middleLeft: showHairs.middleLeft.black,
                middleRight: showHairs.middleRight.black,
                bottom: showHairs.bottom.black,
                behind: showHairs.behind.black,
                beard: false
            },
            {
                front: showHairs.front.blond,
                middleLeft: showHairs.middleLeft.blond,
                middleRight: showHairs.middleRight.blond,
                bottom: showHairs.bottom.blond,
                behind: showHairs.behind.blond,
                beard: false
            },
        ];

        let currentWigIndex = 0;

        function hideAllWigs() {
            wigsSequence.forEach(wig => {
                wig.front.visible = false;
                wig.middleLeft.visible = false;
                wig.middleRight.visible = false;
                wig.bottom.visible = false;
                wig.behind.visible = false;
            });
            beard.visible = false;
        }

        if (buttons.hair.boy) {
            const boyListener = function () {
                showCurrentWig();
                currentWigIndex = (currentWigIndex + 1) % wigsSequence.length;
            };

            const showCurrentWig = function () {
                const currentWig = wigsSequence[currentWigIndex];
                hideAllWigs();

                currentWig.front.visible = true;
                currentWig.middleLeft.visible = true;
                currentWig.middleRight.visible = true;
                currentWig.bottom.visible = true;
                currentWig.behind.visible = true;

                if (currentWig.beard) {
                    beard.visible = true;
                }

                if (isAnyHatVisible()) {
                    hideAllBehindHairs();
                }

            };


            buttons.hair.boy.removeEventListener('click', boyListener);
            buttons.hair.boy.addEventListener('click', boyListener);
        }

    }



}







