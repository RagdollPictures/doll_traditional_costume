export const audioManager = {
    currentEffect: null,
    lastClothesIndex: -1,
    sounds: {
        shirt_08_btn: new Audio("audio/brostlapp_herrestad.mp3"),
        necklace_01_btn: new Audio("audio/striglakorset.mp3"),
        shirt_09_btn: new Audio("audio/livstycke_gotland.mp3"),
        hat_08_btn: new Audio("audio/mossa_fran_dalarna.mp3"),
        btn_hat_04: new Audio("audio/mossa_fran_vasterbotten.mp3"),
        shirt_04_btn: new Audio("audio/vast_i_siden_gotland.mp3"),
        btn_dress_same_male: new Audio("audio/samedrakten.mp3"),
        btn_pants_buttons: new Audio("audio/med_knappar.mp3"),
        clothes_01: new Audio("audio/Nylon_Jacket_Material_Rustle_1.mp3"),
        clothes_02: new Audio("audio/Nylon_Jacket_Material_Rustle_2.mp3"),
        clothes_03: new Audio("audio/Nylon_Jacket_Material_Rustle_3.mp3"),
        clothes_04: new Audio("audio/Nylon_Jacket_Material_Rustle_4.mp3"),
        clothes_05: new Audio("audio/Nylon_Jacket_Material_Rustle_5.mp3"),
        hanger: new Audio("audio/Foley_Clothing_Shirt_Hanger_Take_Off_Rack_SDHOLLW_31987.mp3"),
        btn_camera: new Audio("audio/camera-01.mp3")
    },

    playSound(effectName) {

        if (effectName !== "btn_camera") {
            this.playRandomClothesSound();
        }

        if (effectName === "clothes") return;

        if (effectName && this.sounds[effectName]) {
            this.stopAllSpeech();

            setTimeout(() => {
                this._playEffect(effectName);
            }, 500);
        }
    },

    playRandomClothesSound() {
        const clothesSounds = ["clothes_01", "clothes_02", "clothes_03", "clothes_04", "clothes_05"];

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * clothesSounds.length);
        } while (randomIndex === this.lastClothesIndex);

        this.lastClothesIndex = randomIndex;
        const selectedClothesSound = this.sounds[clothesSounds[randomIndex]];

        if (selectedClothesSound) {

            if (selectedClothesSound.currentTime > 0 && !selectedClothesSound.paused) {
                return;
            }

            selectedClothesSound.currentTime = 0;
            selectedClothesSound.play().catch(err => {
                if (err.name !== "AbortError") {
                    console.error("Error playing clothes sound:", err);
                }
            });
        }
    },

    _playEffect(effectName) {
        if (!this.sounds[effectName]) return;

        this.sounds[effectName].currentTime = 0;
        this.sounds[effectName].play().catch(err => {
            if (err.name !== "AbortError") {
                console.error("Error playing sound:", err);
            }
        });
    },

    stopAllSpeech() {
        Object.keys(this.sounds).forEach(soundKey => {
            if (!soundKey.startsWith("clothes_")) {
                if (!this.sounds[soundKey].paused) {
                    this.sounds[soundKey].pause();
                    this.sounds[soundKey].currentTime = 0;
                }
            }
        });
    }
};



