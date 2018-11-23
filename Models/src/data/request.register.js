const Entity = require("../entity")

class RegisterRequestData extends Entity {
    static parse(data) {
        const Device = require("../objects/device")

        var version = data["version"]
        var device = Device.parse({
            "hw_id": data["hw_id"],
            "name": data["name"],
            "sensors": data["sensors"],
            "actions": data.hasOwnProperty("actions") ? data["actions"] : null
        })
        return new RegisterRequestData(version, device)
    }

    constructor(version, device) {
        super()
        this.version = version
        this.device = device
    }

    properties() {
        return Object.assign({}, {
            "version": this.version
        }, this.device.properties())
    }
}

module.exports = RegisterRequestData
