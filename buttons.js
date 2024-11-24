export let buttons = {};


export function initializeButtons() {
    buttons = {

        boy: exportRoot.scene.btn_boy,
        girl: exportRoot.scene.btn_girl,
        resetGirl: exportRoot.scene.btn_reset_girl,
        resetBoy: exportRoot.scene.btn_reset_boy,
        back: exportRoot.scene.btn_back,

        hats: [
            exportRoot.scene.btn_hat_01,
            exportRoot.scene.btn_hat_02,
            exportRoot.scene.btn_hat_03,
            exportRoot.scene.btn_hat_04,
            exportRoot.scene.btn_hat_05,
            exportRoot.scene.btn_hat_06,
            exportRoot.scene.btn_hat_07,
            exportRoot.scene.btn_hat_08,
            exportRoot.scene.btn_hat_09,
            exportRoot.scene.btn_hat_10
        ],
        shirts: [
            exportRoot.scene.btn_shirt_01,
            exportRoot.scene.btn_shirt_02,
            exportRoot.scene.btn_shirt_03,
            exportRoot.scene.btn_shirt_04,
            exportRoot.scene.btn_shirt_05,
            exportRoot.scene.btn_shirt_06,
            exportRoot.scene.btn_shirt_07,
            exportRoot.scene.btn_shirt_08,
            exportRoot.scene.btn_shirt_09,
            exportRoot.scene.btn_shirt_10,
            exportRoot.scene.btn_shirt_11,
            exportRoot.scene.btn_shirt_12

        ],
        aprons: [
            exportRoot.scene.btn_apron_01,
            exportRoot.scene.btn_apron_02,
            exportRoot.scene.btn_apron_03,
            exportRoot.scene.btn_apron_04,
            exportRoot.scene.btn_apron_05,
            exportRoot.scene.btn_apron_06,
            exportRoot.scene.btn_apron_same,
        ],
        girlShoes: [
            exportRoot.scene.btn_shoe_girl_01,
            exportRoot.scene.btn_shoe_girl_02,
            exportRoot.scene.btn_shoe_girl_03,
            exportRoot.scene.btn_shoe_girl_04,
        ],
        boyShoes: [
            exportRoot.scene.btn_shoe_boy_01,
            exportRoot.scene.btn_shoe_boy_02,
            exportRoot.scene.btn_shoe_boy_03,
            exportRoot.scene.btn_shoe_boy_04,
        ],
        pants: {
            neutral: exportRoot.scene.btn_pants_neutral,
            ribbons: exportRoot.scene.btn_pants_ribbons,
            tassels: exportRoot.scene.btn_pants_tassels,
            buttons: exportRoot.scene.btn_pants_buttons,
            colors: {
                black: exportRoot.scene.btn_pants_black,
                yellow: exportRoot.scene.btn_pants_yellow,
                blue: exportRoot.scene.btn_pants_blue,
                brown: exportRoot.scene.btn_pants_brown,
                white: exportRoot.scene.btn_pants_white,
            }
        },
        jackets: {
            short: exportRoot.scene.btn_jacket_short,
            long: exportRoot.scene.btn_jacket_long,
            colors: {
                blue: exportRoot.scene.btn_jacket_blue,
                green: exportRoot.scene.btn_jacket_green,
                black: exportRoot.scene.btn_jacket_black,
                brown: exportRoot.scene.btn_jacket_brown,

            }
        },
        hair: {
            blond: exportRoot.scene.btn_hair_blond,
            gray: exportRoot.scene.btn_hair_gray,
            brown: exportRoot.scene.btn_hair_brown,
            blondBraidsGirl: exportRoot.scene.btn_hair_blond_braids,
            brownBraidsGirl: exportRoot.scene.btn_hair_brown_braids,
            blondStraightGirl: exportRoot.scene.btn_hair_blond_straight,
            brownStraightGirl: exportRoot.scene.btn_hair_brown_straight

        },
        accessories: {
            necklace_01: exportRoot.scene.btn_necklace_01,
            scarf_01: exportRoot.scene.btn_scarf_01,
            collar_01: exportRoot.scene.btn_collar_01,
        },
        dress: {
            dress_same: exportRoot.scene.btn_dress_same,
        }
    };

}
