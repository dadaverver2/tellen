let tel = 0
function tell () {
    if (tel % 2 == 1) {
        led.plot(4, 0)
    } else {
        led.unplot(4, 0)
    }
    if (tel >= 8) {
        led.plot(1, 0)
    } else {
        led.unplot(1, 0)
    }
    if (tel >= 4 && tel < 8 || tel >= 12) {
        led.plot(2, 0)
    } else {
        led.unplot(2, 0)
    }
    if (tel >= 2 && tel < 4 || (tel >= 14 || tel >= 6 && tel < 8 || tel >= 10 && tel < 12)) {
        led.plot(3, 0)
    } else {
        led.unplot(3, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    tel = 0
})
basic.forever(function () {
    basic.pause(1000)
    tell()
    tel += 1
    if (tel > 15) {
        tel = 0
    }
})
