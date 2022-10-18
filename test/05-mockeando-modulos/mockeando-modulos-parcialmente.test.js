import { pokemonesAxiosService } from "../../src/servicios/pokemonesAxiosService";

async function getPokemonesCount() {
  const pokemonList = await pokemonesAxiosService();
  return pokemonList.length;
}

const pokemonListMock = ["Ditto", "Pikachu", "Magikarp"];

test("getPokemonesCount devuelve la cuenta de pokemones", async () => {});
