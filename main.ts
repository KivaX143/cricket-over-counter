input.onButtonPressed(Button.A, function () {
    ZERO += -1
})
input.onButtonPressed(Button.B, function () {
    ZERO += 1
    basic.showIcon(IconNames.No)
})
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.House)
}
let ZERO = 6
basic.forever(function () {
    if (ZERO == 0) {
        while (true) {
            basic.showString("OVER")
        }
    } else {
        basic.showString("" + (ZERO))
    }
})
