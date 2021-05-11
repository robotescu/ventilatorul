basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 27) {
        servos.P1.setAngle(0)
    }
    if (input.temperature() <= 27) {
        servos.P1.setAngle(90)
    }
})
