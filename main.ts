input.onButtonPressed(Button.A, function () {
    if (timeA < 0) {
        timeA = control.millis()
    }
})
input.onButtonPressed(Button.B, function () {
    if (timeB < 0) {
        timeB = control.millis()
    }
})
let score = 0
let early = false
let timeB = 0
let timeA = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
timeA = -1
timeB = -1
let target = control.millis() + 3000 + randint(0, 2000)
while (!(early) && control.millis() < target) {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        early = true
    }
}
if (early) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
} else {
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
        while (timeA < 0 && timeB < 0) {
            basic.pause(100)
        }
        basic.pause(200)
        if (timeB >= 0) {
            score = -1
        } else {
            score = timeA - target
        }
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            `)
        while (timeA < 0 && timeB < 0) {
            basic.pause(100)
        }
        basic.pause(200)
        if (timeA >= 0) {
            score = -1
        } else {
            score = timeB - target
        }
    }
    if (score < 0) {
        basic.showIcon(IconNames.No)
    } else {
        while (true) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
            basic.showString(convertToText(score))
            basic.pause(100)
        }
    }
}
basic.forever(function () {
	
})
