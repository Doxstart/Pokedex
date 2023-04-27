//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);

//Buono
// PokeService.getDetail(pokemonName).then(pokemon => {
//     console.log(pokemon);
//     const myPokemon = new Pokemon(pokemon.name);
//     for (let i = 0; i < pokemon.abilities.length; i++) {
//         const abilityObject = pokemon.abilities[i];
//         myPokemon.addAbilities(abilityObject.ability.name);
//     }
//     displayAbilities(myPokemon);
// })

PokeService.getDetail(pokemonName).then(pokemon => {
    console.log(pokemon);
    const myPokemon = new Pokemon(pokemon.name);
    for (let i = 0; i < pokemon.name.length; i++) {
        const abilityObject = pokemon.name[i];
        myPokemon.addAbilities(abilityObject.name);
    }
    displayAbilities(myPokemon);
})

function displayAbilities(myPokemon){
    const container2 = document.getElementById('pokemon-name');

    container2.innerHTML =``;
    for(let i = 0; i < myPokemon.length; i++) {
        const pokemon = myPokemon[i];
        console.log(pokemon);
        container2.innerHTML += `
                <div>
                    <span><strong>${pokemon.name}</strong></span>
                </div>
        ` 
    }
}