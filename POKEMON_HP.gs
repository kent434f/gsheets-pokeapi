function POKEMON_HP(pokemonName) {
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

    return data.stats[0].base_stat;

  } catch (error) {
    // Return an error message if something goes wrong
    return "Error: " + error.message;
  }
  
}


   //console.log(POKEMON_HP("Psyduck"))
