/**
 * Fetches the height of a Pokémon from the PokeAPI.
 * 
 * @param {string} pokemonName The name of the Pokémon.
 * @return {number|string} The height of the Pokémon in decimeters, or an error message.
 * @customfunction
 */
function POKEMON_HEIGHT(pokemonName) {
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
    
    // Return the height
    return data.height;
  } catch (error) {
    // Return an error message if something goes wrong
    return "Error: " + error.message;
  }
}
