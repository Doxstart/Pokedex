class Pokemon{

    constructor (name, abilities = []){
        this.name = name;
        this.abilities = abilities;
    }

    addAbilities(name){
        const newAbilities = new Ability(name);
        this.abilities.push(newAbilities);
    }

}

class Ability{

    constructor(name){
        this.name = name;
    }

}