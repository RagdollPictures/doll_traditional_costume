export const audioManager = {
    currentEffect: null,
    sounds: {
        scarf_01_btn: new Audio("audio/brostlapp_herrestad.mp3"),
        necklace_01_btn: new Audio("audio/striglakorset.mp3"),
        btn_apron_02: new Audio("audio/livstycke_gotland.mp3"),
        btn_hat_09: new Audio("audio/mossa_fran_dalarna.mp3"),
        btn_hat_01: new Audio("audio/mossa_fran_vasterbotten.mp3"),
        shirt_04_btn: new Audio("audio/vast_i_siden_gotland.mp3"),
        btn_dress_same_male: new Audio("audio/samedrakten.mp3"),
        btn_pants_buttons: new Audio("audio/med_knappar.mp3"),
        clothes: new Audio("audio/CLOTH-WHIP_GEN-HDF-07787.mp3")
    },

    playSound(effectName) {

        this.stopAllSounds();


        const clothesSound = this.sounds["clothes"];
        if (clothesSound) {
            clothesSound.currentTime = 0;
            clothesSound.play().catch(err => console.error("Error playing clothes sound:", err));
        }


        if (effectName && effectName !== "clothes" && this.sounds[effectName]) {
            setTimeout(() => {
                this._playEffect(effectName);
            }, 500);
        }
    },

    _playEffect(effectName) {
        if (!this.sounds[effectName]) return;

        this.sounds[effectName].currentTime = 0;
        this.sounds[effectName].play().catch(err => console.error("Error playing sound:", err));
    },

    stopAllSounds() {
        Object.values(this.sounds).forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }
};



