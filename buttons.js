export let buttons = {};


export function initializeButtons() {
    buttons = {

        boy: exportRoot.scene.btn_boy,
        girl: exportRoot.scene.btn_girl,
        resetGirl: exportRoot.scene.btn_reset_girl,
        resetBoy: exportRoot.scene.btn_reset_boy,
        back: exportRoot.scene.btn_back,
        screenshot: exportRoot.scene.btn_camera,

        hats: [
            exportRoot.scene.btn_hat_01,
            exportRoot.scene.btn_hat_02,
            exportRoot.scene.btn_hat_03,
            exportRoot.scene.btn_hat_04,
            exportRoot.scene.btn_hat_05,
            exportRoot.scene.btn_hat_06,
            exportRoot.scene.btn_hat_07,
            exportRoot.scene.hat_08_btn,
            exportRoot.scene.btn_hat_09,
            exportRoot.scene.btn_hat_10,
        ],
        shirts: [
            exportRoot.scene.shirt_01_btn,
            exportRoot.scene.shirt_02_btn,
            exportRoot.scene.shirt_03_btn,
            exportRoot.scene.shirt_04_btn,
            exportRoot.scene.shirt_05_btn,
            exportRoot.scene.shirt_06_btn,
            exportRoot.scene.shirt_07_btn,
            exportRoot.scene.shirt_08_btn,
            exportRoot.scene.shirt_09_btn,
            exportRoot.scene.shirt_10_btn,
            exportRoot.scene.shirt_11_btn,
            exportRoot.scene.shirt_12_btn,

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
            exportRoot.scene.shoe_boy_01_btn,
            exportRoot.scene.shoe_boy_02_btn,
            exportRoot.scene.shoe_boy_03_btn,
            exportRoot.scene.shoe_boy_04_btn,
        ],
        pants: {
            neutral: exportRoot.scene.pants_neutral_btn,
            ribbons: exportRoot.scene.btn_pants_ribbons,
            tassels: exportRoot.scene.btn_pants_tassels,
            buttons: exportRoot.scene.btn_pants_buttons,
            skirtColor: exportRoot.scene.btn_skirts_color,
            pantsColor: exportRoot.scene.btn_pants_color,

        },
        jackets: {
            shortYellow: exportRoot.scene.btn_jacket_short_yellow,
            longYellow: exportRoot.scene.btn_jacket_long_yellow,
            shortRed: exportRoot.scene.btn_jacket_short_red,
            longRed: exportRoot.scene.btn_jacket_long_red,
            shortBlue: exportRoot.scene.btn_jacket_short_blue,
            longBlue: exportRoot.scene.btn_jacket_long_blue,
            shortBlack: exportRoot.scene.btn_jacket_short_black,
            longBlack: exportRoot.scene.btn_jacket_long_black,

        },
        hair: {
            girl: exportRoot.scene.btn_wigs_girl_color,
            boy: exportRoot.scene.btn_wigs_boy_color,



        },
        accessories: {
            necklace_01: exportRoot.scene.necklace_01_btn,
            scarf_01: exportRoot.scene.scarf_01_btn,
            collar_01: exportRoot.scene.btn_collar_01,
        },
        dress: {
            dress_same: exportRoot.scene.btn_dress_same,
            dress_same_male: exportRoot.scene.btn_dress_same_male,
        }
    };

}
