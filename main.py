tel = 0
def tell():
    if tel % 2 == 1:
        led.unplot(4, 0)
    else:
        led.plot(4, 0)
    if tel % 2 == 1:
        led.plot(3, 0)
    else:
        led.unplot(3, 0)
    if tel % 4 == 1 or tel == 4:
        led.plot(2, 0)
    else:
        led.unplot(2, 0)

def on_button_pressed_a():
    global tel
    tel = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global tel
    tell()
    basic.pause(500)
    tel += 1
    if tel > 15:
        tel = 0
basic.forever(on_forever)
