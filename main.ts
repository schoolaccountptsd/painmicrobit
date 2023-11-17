input.onButtonPressed(Button.A, function () {
	
})
hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, hummingbird.getSensor(SensorType.Distance, ThreePort.One) / 2)
})
