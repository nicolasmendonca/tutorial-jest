import axios from "axios";
import { pokemonesAxiosService } from "src/servicios/pokemonesAxiosService";

async function getPokemonesCount() {
  const pokemonList = await pokemonesAxiosService();
  return pokemonList.length;
}

const pokemonListMock = ["Ditto", "Pikachu", "Magikarp"];
jest.mock("axios", () => {
  const moduloOriginal = jest.requireActual("axios");

  return {
    __esModule: true,
    ...moduloOriginal,
    get: jest.fn().mockResolvedValue(pokemonListMock)
  };
});

test("getPokemonesCount devuelve la cuenta de pokemones", async () => {
  // Arrange
  axios.get.mockResolvedValue(pokemonListMock);

  // Act
  const pokemonesCount = await getPokemonesCount();

  // Assert
  expect(pokemonesCount).toStrictEqual(pokemonListMock);
});

// axios.post va a generar una llamada a la API!
