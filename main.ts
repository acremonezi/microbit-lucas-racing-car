pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    basic.showString("L")
    carGear = -1
})
input.onButtonPressed(Button.A, function () {
    if (carGear >= 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        carGear += -1
        basic.showString("" + (carGear))
    } else {
    	
    }
})
input.onGesture(Gesture.LogoUp, function () {
    music.stopMelody(MelodyStopOptions.All)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    if (carGear <= 8) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        carGear += 1
        basic.showString("" + (carGear))
    } else {
        basic.showString("" + (carGear))
    }
})
input.onGesture(Gesture.TiltRight, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let carGear = 0
carGear = 0
basic.showString("" + (carGear))
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullDown)
pins.setPull(DigitalPin.P14, PinPullMode.PullDown)
basic.forever(function () {
    if (pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    ) > 3) {
        if (carGear >= 1) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            carGear += -1
            basic.showString("" + (carGear))
        } else {
        	
        }
    }
    if (pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    ) < 1) {
        if (carGear <= 8) {
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            carGear += 1
            basic.showString("" + (carGear))
        } else {
            basic.showString("" + (carGear))
        }
    }
})
