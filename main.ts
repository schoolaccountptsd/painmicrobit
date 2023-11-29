input.onButtonPressed(Button.A, function () {
	
})
hummingbird.startHummingbird()
let rotation = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        rotation += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        rotation += -1
    }
    hummingbird.setRotationServo(FourPort.One, rotation)
})
