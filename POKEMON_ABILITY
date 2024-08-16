function POKEMON_ABILITY(pokemonName) {
  // Check if pokemonName is provided and is a string
  if (!pokemonName || typeof pokemonName !== 'string') {
    return "Error: Please provide a valid Pokémon name";
  }

  // Construct the API URL
  var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName.toLowerCase().trim();

  try {
    // Fetch data from the API
    var response = UrlFetchApp.fetch(url);
    var data = JSON.parse(response.getContentText());

    // return data.abilities[0].ability.name;

    let i = 0;
    let len = data.abilities.length;
    let output = "";
    for (; i < len; ) {
      output += data.abilities[i].ability.name;
      if (i < len-1){
        output += ", "
      }

      i++;
      }

    return output


  } catch (error) {
    // Return an error message if something goes wrong
    return "Error: " + error.message;
  }

}


// console.log(POKEMON_ABILITY("Pikachu"))
