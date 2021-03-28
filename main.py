def on_button_pressed_a():
    global timeA
    if timeA < 0:
        timeA = control.millis()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global timeB
    if timeB < 0:
        timeB = control.millis()
input.on_button_pressed(Button.B, on_button_pressed_b)

score = 0
early = False
timeB = 0
timeA = 0
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    """)
timeA = -1
timeB = -1
target = control.millis() + 3000 + randint(0, 2000)
while not (early) and control.millis() < target:
    if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
        early = True
if early:
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        """)
else:
    if Math.random_boolean():
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            """)
        while timeA < 0 and timeB < 0:
            basic.pause(100)
        basic.pause(200)
        if timeB >= 0:
            score = -1
        else:
            score = timeA - target
    else:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            """)
        while timeA < 0 and timeB < 0:
            basic.pause(100)
        basic.pause(200)
        if timeA >= 0:
            score = -1
        else:
            score = timeB - target
    if score < 0:
        basic.show_icon(IconNames.NO)
    else:
        while True:
            basic.show_icon(IconNames.YES)
            basic.pause(500)
            basic.clear_screen()
            basic.show_string(convert_to_text(score))
            basic.pause(100)

def on_forever():
    pass
basic.forever(on_forever)
