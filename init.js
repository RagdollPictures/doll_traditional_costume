import { movieClips } from './movieClips.js';
import { colors } from './colors.js';
import { tintJacketAndArmsColor } from './jacket.js';
import { changePantsColor } from './pants.js';


//optimera
export function initBoy() {
    const jackets = movieClips.jackets;
    const pants = movieClips.pants;
    const hats = movieClips.hats;
    const arms = movieClips.arms;
    const hair = movieClips.hair;
    const shirts = movieClips.shirts;
    const beard = movieClips.beard;
    const apron = movieClips.aprons;
    const shoes = movieClips.shoes;
    const accessories = movieClips.accessories;


    if (jackets && jackets.short && jackets.long && arms.fills) {
        jackets.short.visible = false;
        jackets.long.visible = false;
        tintJacketAndArmsColor(colors.white, jackets, arms.fills);
    } else {
        console.error('Jackets not found');
    }

    if (arms && arms.fills) {
        arms.fills.leftGirl.visible = false;
        arms.fills.rightGirl.visible = false;
        arms.fills.left.visible = true;
        arms.fills.right.visible = true;

        arms.fills.cuff_right_01.visible = true;
        arms.fills.cuff_left_01.visible = true;

        arms.leftGirl.visible = false;
        arms.rightGirl.visible = false;
        arms.left.visible = true;
        arms.right.visible = true;

        arms.cuff_right_01.visible = true;
        arms.cuff_left_01.visible = true;
        arms.cuff_right_same.visible = false;
        arms.cuff_left_same.visible = false;

    } else {
        console.error('Arms not found');
    }



    if (pants && pants.neutral && pants.decoration && pants.skirt && pants.fills) {
        pants.boxers.visible = true;
        pants.neutral.visible = false;
        pants.decoration.visible = false;
        pants.skirt.visible = false;

        pants.decorations.ribbons.visible = false;
        pants.decorations.tassels.visible = false;
        pants.decorations.buttons.visible = false;

        changePantsColor(colors.white, pants.fills);
    } else {
        console.error('Pants not found');
    }


    if (hats) {
        hats.hat_01.visible = false;
        hats.hat_02.visible = false;
        hats.hat_03.visible = false;
        hats.hat_04.visible = false;
        hats.hat_05.visible = false;
        hats.hat_06.visible = false;
        hats.hat_07.visible = false;
        hats.hat_08.visible = false;
        hats.hat_09.visible = false;
        hats.hat_10.visible = false;

    } else {
        console.error('Hats not found');
    }

    if (hair) {
        hair.front.brown.visible = false;
        hair.front.blond.visible = true;
        hair.front.gray.visible = false;

        hair.middleLeft.brown.visible = false;
        hair.middleLeft.blond.visible = true;
        hair.middleLeft.gray.visible = false;

        hair.middleRight.brown.visible = false;
        hair.middleRight.blond.visible = true;
        hair.middleRight.gray.visible = false;

        hair.bottom.brown.visible = false;
        hair.bottom.blond.visible = true;
        hair.bottom.gray.visible = false;

        hair.behind.brown.visible = false;
        hair.behind.blond.visible = true;
        hair.behind.gray.visible = false;

        hair.front.brownGirl.visible = false;
        hair.front.blondGirl.visible = false;

        hair.middleRight.brownGirl.visible = false;
        hair.middleLeft.brownGirl.visible = false;

        hair.middleRight.blondGirl.visible = false;
        hair.middleLeft.blondGirl.visible = false;

        hair.behind.brownGirl.visible = false;
        hair.behind.blondGirl.visible = false;

        hair.bottom.blondGirlBraids.visible = false;
        hair.bottom.blondGirlStraight.visible = false;
        hair.bottom.brownGirlBraids.visible = false;
        hair.bottom.brownGirlStraight.visible = false;
    }

    if (shirts) {
        shirts.shirt_01.visible = true;
        shirts.shirt_02.visible = false;
        shirts.shirt_03.visible = false;
        shirts.shirt_04.visible = false;
        shirts.shirt_05.visible = false;
        shirts.shirt_06.visible = false;
        shirts.shirt_07.visible = false;
        shirts.shirt_08.visible = false;
        shirts.shirt_09.visible = false;
        shirts.shirt_10.visible = false;
        shirts.shirt_11.visible = false;
        shirts.shirt_12.visible = false;
        shirts.shirt_same.visible = false;
    }

    if (beard) {
        beard.visible = false;
    }

    if (apron) {
        apron.apron_01.visible = false;
        apron.apron_02.visible = false;
        apron.apron_03.visible = false;
        apron.apron_04.visible = false;
        apron.apron_05.visible = false;
        apron.apron_06.visible = false;
        apron.apron_same.visible = false;

    }

    if (shoes) {
        shoes.shoe_left_01.visible = false;
        shoes.shoe_left_02.visible = false;
        shoes.shoe_left_03.visible = false;
        shoes.shoe_left_04.visible = false;
        shoes.shoe_right_01.visible = false;
        shoes.shoe_right_02.visible = false;
        shoes.shoe_right_03.visible = false;
        shoes.shoe_right_04.visible = false;

    }

    if (accessories) {
        accessories.necklace_01.visible = false;
        accessories.scarf_01.visible = false;
        accessories.collar_01.visible = true;
    }
}



export function initGirl() {
    const jackets = movieClips.jackets;
    const pants = movieClips.pants;
    const hats = movieClips.hats;
    const arms = movieClips.arms;
    const hair = movieClips.hair;
    const shirts = movieClips.shirts;
    const beard = movieClips.beard;
    const apron = movieClips.aprons;
    const shoes = movieClips.shoes;


    if (jackets && jackets.short && jackets.long) {
        jackets.short.visible = false;
        jackets.long.visible = false;
        tintJacketAndArmsColor(colors.white, jackets, arms.fills);
    } else {
        console.error('Jackets not found');
    }

    if (arms && arms.fills) {



        arms.fills.leftGirl.visible = true;
        arms.fills.rightGirl.visible = true;
        arms.fills.left.visible = false;
        arms.fills.right.visible = false;

        arms.fills.cuff_right_01.visible = true;
        arms.fills.cuff_left_01.visible = true;

        arms.leftGirl.visible = true;
        arms.rightGirl.visible = true;
        arms.left.visible = false;
        arms.right.visible = false;

        arms.cuff_right_01.visible = true;
        arms.cuff_left_01.visible = true;
        arms.cuff_right_same.visible = false;
        arms.cuff_left_same.visible = false;

    } else {
        console.error('Arms not found');
    }


    if (pants && pants.neutral && pants.decoration && pants.skirt && pants.fills) {
        pants.boxers.visible = false;
        pants.neutral.visible = false;
        pants.decoration.visible = false;
        pants.decorations.ribbons.visible = false;
        pants.decorations.tassels.visible = false;
        pants.decorations.buttons.visible = false;
        pants.skirt.visible = true;
        changePantsColor(colors.white, pants.fills);
    } else {
        console.error('Pants not found');
    }

    if (hats) {
        hats.hat_01.visible = false;
        hats.hat_02.visible = false;
        hats.hat_03.visible = false;
        hats.hat_04.visible = false;
        hats.hat_05.visible = false;
        hats.hat_06.visible = false;
        hats.hat_07.visible = false;
        hats.hat_08.visible = false;
        hats.hat_09.visible = false;
        hats.hat_10.visible = false;

    } else {
        console.error('Hats not found');
    }

    if (hair) {
        hair.front.brown.visible = false;
        hair.front.blond.visible = false;
        hair.front.gray.visible = false;

        hair.middleLeft.brown.visible = false;
        hair.middleLeft.blond.visible = false;
        hair.middleLeft.gray.visible = false;

        hair.middleRight.brown.visible = false;
        hair.middleRight.blond.visible = false;
        hair.middleRight.gray.visible = false;

        hair.bottom.brown.visible = false;
        hair.bottom.blond.visible = false;
        hair.bottom.gray.visible = false;

        hair.behind.brown.visible = false;
        hair.behind.blond.visible = false;
        hair.behind.gray.visible = false;


        hair.front.brownGirl.visible = false;
        hair.front.blondGirl.visible = true;

        hair.middleRight.brownGirl.visible = false;
        hair.middleLeft.brownGirl.visible = false;
        hair.middleRight.blondGirl.visible = true;
        hair.middleLeft.blondGirl.visible = true;

        hair.behind.brownGirl.visible = false;
        hair.behind.blondGirl.visible = true;


        hair.bottom.blondGirlBraids.visible = true;
        hair.bottom.blondGirlStraight.visible = false;
        hair.bottom.brownGirlBraids.visible = false;
        hair.bottom.brownGirlStraight.visible = false;
    }

    if (shirts) {
        shirts.shirt_01.visible = false;
        shirts.shirt_02.visible = false;
        shirts.shirt_03.visible = false;
        shirts.shirt_04.visible = false;
        shirts.shirt_05.visible = false;
        shirts.shirt_06.visible = false;
        shirts.shirt_07.visible = true;
        shirts.shirt_08.visible = false;
        shirts.shirt_09.visible = false;
        shirts.shirt_10.visible = false;
        shirts.shirt_11.visible = false;
        shirts.shirt_12.visible = false;
        shirts.shirt_same.visible = false;
    }

    if (beard) {
        beard.visible = false;
    }

    if (apron) {
        apron.apron_01.visible = false;
        apron.apron_02.visible = false;
        apron.apron_03.visible = false;
        apron.apron_04.visible = false;
        apron.apron_05.visible = false;
        apron.apron_06.visible = false;
        apron.apron_same.visible = false;

    }

    if (shoes) {
        shoes.shoe_left_01.visible = false;
        shoes.shoe_left_02.visible = false;
        shoes.shoe_left_03.visible = false;
        shoes.shoe_left_04.visible = false;
        shoes.shoe_right_01.visible = false;
        shoes.shoe_right_02.visible = false;
        shoes.shoe_right_03.visible = false;
        shoes.shoe_right_04.visible = false;

    }

}
