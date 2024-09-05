
/*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(response =>{
if(!response.ok){
    throw new Error("could not fetch resources")
}
} )
.then(data => console.log(data.id))
.error(error =>  console.error(error));*/

fetchData();
async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ ${pokemonName }`)
            if(!response.ok){
                throw new Error("could not fetch resources")

    }
    const data = await response.json();
    const pokemonditto = data.ditto.front_default;
    const imgElement = document.getElementById("pokemonditto")
     imgElement.src =  pokemonditto;
     imgElement.style.display = "block" 
}
    catch(error){   
        console.error(error);
    }
}
