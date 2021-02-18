const utils = require("../utils/utils");

class Persona {
    constructor(user, data){
        

        this.user = user;
        this.structureData(data);
    }

    structureData(data){
utils.structureData(this, data, {
    alias: {
        namespace: "platform",

    },
    blacklist: [
        'gamesJson'
    ]
})

if(this.platform === "cem_ea_id") this.platform === "pc";

return this;
    }

}