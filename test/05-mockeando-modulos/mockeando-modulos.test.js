import { pokemonesAxiosService } from "../../src/servicios/pokemonesAxiosService";

async function getPokemonesCount() {
  const pokemonList = await pokemonesAxiosService();
  return pokemonList.length;
}

test("getPokemonesCount devuelve la cuenta de pokemones", async () => {});
