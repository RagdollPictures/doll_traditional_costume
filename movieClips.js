export let movieClips = {};

export function initializeMovieClips() {
    movieClips = {
        headAnchor: exportRoot.headAnchor,
        character: {
            headFront: exportRoot.scene.character.head_front,
            headBack: exportRoot.scene.character.head_back,
            nose: exportRoot.scene.character.head_front.nose,
            ears: exportRoot.scene.character.head_front.ears,
            mouth: exportRoot.scene.character.head_front.mouth,
            freckles: exportRoot.scene.character.head_front.freckles,
            eyes: exportRoot.scene.character.head_front.eyes,
            hairMiddle: exportRoot.scene.character.head_front.hair_middle,
            eyebrows: exportRoot.scene.character.head_front.eyebrows,
            pupils: exportRoot.scene.character.head_front.eyes.pupils,
        },
        jackets: {
            short: exportRoot.scene.character.jacket.jacket_short,
            long: exportRoot.scene.character.jacket.jacket_long
        },
        arms: {
            left: exportRoot.scene.character.arm_left.arm_boy,
            right: exportRoot.scene.character.arm_right.arm_boy,
            leftGirl: exportRoot.scene.character.arm_left.arm_girl,
            rightGirl: exportRoot.scene.character.arm_right.arm_girl,
            cuff_right_01: exportRoot.scene.character.arm_right.cuff_01,
            cuff_left_01: exportRoot.scene.character.arm_left.cuff_01,
            cuff_right_same: exportRoot.scene.character.arm_right.cuff_same,
            cuff_left_same: exportRoot.scene.character.arm_left.cuff_same,

            fills: {
                left: exportRoot.scene.character.arm_left.arm_boy.fill,
                right: exportRoot.scene.character.arm_right.arm_boy.fill,
                leftGirl: exportRoot.scene.character.arm_left.arm_girl.fill,
                rightGirl: exportRoot.scene.character.arm_right.arm_girl.fill,
                cuff_right_01: exportRoot.scene.character.arm_right.cuff_01.fill,
                cuff_left_01: exportRoot.scene.character.arm_left.cuff_01.fill,
            }

        },
        hair: {
            front: {
                brown: exportRoot.scene.character.head_front.hair_front.hair_front_brown,
                gray: exportRoot.scene.character.head_front.hair_front.hair_front_gray,
                blond: exportRoot.scene.character.head_front.hair_front.hair_front_blond,
                brownGirl: exportRoot.scene.character.head_front.hair_front.hair_front_brown_girl,
                blondGirl: exportRoot.scene.character.head_front.hair_front.hair_front_blond_girl,
            },
            middleLeft: {
                brown: exportRoot.scene.character.head_front.hair_middle.hair_middle_left.hair_middle_left_brown,
                gray: exportRoot.scene.character.head_front.hair_middle.hair_middle_left.hair_middle_left_gray,
                blond: exportRoot.scene.character.head_front.hair_middle.hair_middle_left.hair_middle_left_blond,
                brownGirl: exportRoot.scene.character.head_front.hair_middle.hair_middle_left.hair_middle_left_brown_girl,
                blondGirl: exportRoot.scene.character.head_front.hair_middle.hair_middle_left.hair_middle_left_blond_girl,
            },
            middleRight: {
                brown: exportRoot.scene.character.head_front.hair_middle.hair_middle_right.hair_middle_right_brown,
                gray: exportRoot.scene.character.head_front.hair_middle.hair_middle_right.hair_middle_right_gray,
                blond: exportRoot.scene.character.head_front.hair_middle.hair_middle_right.hair_middle_right_blond,
                brownGirl: exportRoot.scene.character.head_front.hair_middle.hair_middle_right.hair_middle_right_brown_girl,
                blondGirl: exportRoot.scene.character.head_front.hair_middle.hair_middle_right.hair_middle_right_blond_girl,
            },
            bottom: {
                brown: exportRoot.scene.character.head_back.hair_bottom.hair_bottom_brown,
                gray: exportRoot.scene.character.head_back.hair_bottom.hair_bottom_gray,
                blond: exportRoot.scene.character.head_back.hair_bottom.hair_bottom_blond,
                blondGirlBraids: exportRoot.scene.character.head_back.hair_bottom.hair_bottom_blond_girl_braids,
                brownGirlBraids: exportRoot.scene.character.head_back.hair_bottom.hair_bottom_brown_girl_braids,
                blondGirlStraight: exportRoot.scene.character.head_back.hair_bottom.hair_bottom_blond_girl_straight,
                brownGirlStraight: exportRoot.scene.character.head_back.hair_bottom.hair_bottom_brown_girl_straight,
            },
            behind: {
                brown: exportRoot.scene.character.head_back.hair_behind.hair_behind_brown,
                gray: exportRoot.scene.character.head_back.hair_behind.hair_behind_gray,
                blond: exportRoot.scene.character.head_back.hair_behind.hair_behind_blond,
                brownGirl: exportRoot.scene.character.head_back.hair_behind.hair_behind_brown_girl,
                blondGirl: exportRoot.scene.character.head_back.hair_behind.hair_behind_blond_girl,
            }
        },
        hats: {
            hat_01: exportRoot.scene.character.head_front.hat.hat_01,
            hat_02: exportRoot.scene.character.head_front.hat.hat_02,
            hat_03: exportRoot.scene.character.head_front.hat.hat_03,
            hat_04: exportRoot.scene.character.head_front.hat.hat_04,
            hat_05: exportRoot.scene.character.head_front.hat.hat_05,
            hat_06: exportRoot.scene.character.head_front.hat.hat_06,
            hat_07: exportRoot.scene.character.head_front.hat.hat_07,
            hat_08: exportRoot.scene.character.head_front.hat.hat_08,
            hat_09: exportRoot.scene.character.head_front.hat.hat_09,
            hat_10: exportRoot.scene.character.head_front.hat.hat_10,

        },
        pants: {
            neutral: exportRoot.scene.character.pants.pants_neutral,
            decoration: exportRoot.scene.character.pants.pants_decoration,
            boxers: exportRoot.scene.character.pants.pants_boxers,
            skirt: exportRoot.scene.character.pants.skirt,
            decorations: {
                ribbons: exportRoot.scene.character.decoration_pants.ribbons_01,
                tassels: exportRoot.scene.character.decoration_pants.tassels_01,
                buttons: exportRoot.scene.character.decoration_pants.buttons_01,
            },
            fills: {
                neutral: exportRoot.scene.character.pants.pants_neutral.fill,
                decoration: exportRoot.scene.character.pants.pants_decoration.fill,
                skirt: exportRoot.scene.character.pants.skirt.fill,
            }
        },
        shirts: {
            shirt_01: exportRoot.scene.character.shirt.shirt_01,
            shirt_02: exportRoot.scene.character.shirt.shirt_02,
            shirt_03: exportRoot.scene.character.shirt.shirt_03,
            shirt_04: exportRoot.scene.character.shirt.shirt_04,
            shirt_05: exportRoot.scene.character.shirt.shirt_05,
            shirt_06: exportRoot.scene.character.shirt.shirt_06,
            shirt_07: exportRoot.scene.character.shirt.shirt_07,
            shirt_08: exportRoot.scene.character.shirt.shirt_08,
            shirt_09: exportRoot.scene.character.shirt.shirt_09,
            shirt_10: exportRoot.scene.character.shirt.shirt_10,
            shirt_11: exportRoot.scene.character.shirt.shirt_11,
            shirt_12: exportRoot.scene.character.shirt.shirt_12,
            shirt_same: exportRoot.scene.character.shirt.shirt_same
        },
        aprons: {
            apron_01: exportRoot.scene.character.apron.apron_01,
            apron_02: exportRoot.scene.character.apron.apron_02,
            apron_03: exportRoot.scene.character.apron.apron_03,
            apron_04: exportRoot.scene.character.apron.apron_04,
            apron_05: exportRoot.scene.character.apron.apron_05,
            apron_06: exportRoot.scene.character.apron.apron_06,
            apron_same: exportRoot.scene.character.apron.apron_same
        },
        shoes: {
            shoe_left_01: exportRoot.scene.character.foot_left.shoe_01,
            shoe_left_02: exportRoot.scene.character.foot_left.shoe_02,
            shoe_left_03: exportRoot.scene.character.foot_left.shoe_03,
            shoe_left_04: exportRoot.scene.character.foot_left.shoe_04,
            shoe_right_01: exportRoot.scene.character.foot_right.shoe_01,
            shoe_right_02: exportRoot.scene.character.foot_right.shoe_02,
            shoe_right_03: exportRoot.scene.character.foot_right.shoe_03,
            shoe_right_04: exportRoot.scene.character.foot_right.shoe_04,
        },
        accessories: {
            necklace_01: exportRoot.scene.character.accessories.necklace_01,
            scarf_01: exportRoot.scene.character.accessories.scarf_01,
            collar_01: exportRoot.scene.character.accessories.collar_01,
        },
        beard: exportRoot.scene.character.head_front.beard

    };
}
