export const audioManager = {
    currentEffect: null,
    sounds: {
        btn_scarf_01: new Audio("audio/brostlapp_herrestad.mp3"),
        btn_necklace_01: new Audio("audio/striglakorset.mp3"),
        btn_apron_02: new Audio("audio/livstycke_gotland.mp3"),
        btn_hat_09: new Audio("audio/mossa_fran_dalarna.mp3"),
        btn_hat_01: new Audio("audio/mossa_fran_vasterbotten.mp3"),
        shirt_04_btn: new Audio("audio/vast_i_siden_gotland.mp3"),
        btn_dress_same_male: new Audio("audio/samedrakten.mp3"),
        btn_pants_buttons: new Audio("audio/med_knappar.mp3")
    },

    playSound(effectName) {
        if (this.sounds[effectName]) {
            Object.values(this.sounds).forEach(sound => {
                if (sound !== this.sounds[effectName]) {
                    sound.pause();
                    sound.currentTime = 0;
                }
            });

            if (this.currentEffect !== this.sounds[effectName]) {
                this.currentEffect = this.sounds[effectName];
                this.currentEffect.play().catch(err => console.error("Error playing sound:", err));
            }
        }
    }
};
