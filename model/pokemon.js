class Pokemon{

    constructor (name, abilities = [], stats = [], types = []){
        this.name = name;
        this.abilities = abilities;
        this.stats = stats;
        this.types = types;
    }

    addAbilities(name){
        const newAbilities = new Ability(name);
        this.abilities.push(newAbilities);
    }

    addType(name, url){
        const newType = new Type(name, url);
        this.types.push(newType);
    }

    addStat(name, baseValue){
        const newStat = new Stat(name, baseValue);
        this.stats.push(newStat);
    }

}

class Ability{

    constructor(name){
        this.name = name;
    }

}

class Stat{

    constructor(name, baseValue){
        this.name = name;
        this.baseValue = baseValue;
    }

}

class Type{

    constructor(name, url){
        this.name = name;
        this.url = url;
    }

}