input.onButtonPressed(Button.A, function () {
    Players.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Enemey.change(LedSpriteProperty.X, 1)
})
let Enemey: game.LedSprite = null
let Players: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
Players = game.createSprite(2, 2)
Enemey = game.createSprite(randint(0, 4), 2)
basic.forever(function () {
    if (Players.isTouching(Enemey)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Sad)
    }
})
