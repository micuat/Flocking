// Triggers a note whenever the mouse is clicked.

flock.synth({
    synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: 440,
        mul: {
            ugen: "flock.ugen.asr",
            attack: 0.25,
            sustain: 0.25,
            release: 0.5,
            gate: {
                ugen: "flock.ugen.mouse.click"
            }
        }
    }
});
