let mulai = 0
let selesai = 0
let hasil = 0
input.onButtonPressed(Button.A, function () {
    mulai = input.runningTime()
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    selesai = input.runningTime() - mulai
    hasil = Math.abs(selesai) - 7000
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        basic.showNumber(hasil)
    }
    if (hasil < 0) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(100)
        }
    } else if (hasil <= 100) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showString("ulangi")
        }
    }
})
