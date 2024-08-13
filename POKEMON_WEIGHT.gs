/**
 * Fetches the weight of a Pokémon from the PokeAPI.
 * 
 * @param {string} pokemonName The name of the Pokémon.
 * @return {number|string} The weight of the Pokémon in hectograms, or an error message.
 * @customfunction
 */
function POKEMON_WEIGHT(pokemonName) {
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
    
    // Return the weight
    return data.weight;
  } catch (error) {
    // Return an error message if something goes wrong
    return "Error: " + error.message;
  }
}
