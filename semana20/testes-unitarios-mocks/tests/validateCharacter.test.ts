import { validateCharacter } from "../src/validateCharacter"

describe("Testando a função validateCharacter", () => {
    test("Deve retornar 'false' quando 'name' for vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 10,
            strength: 20,
            defense: 2300
        });

        expect(result).toBe(false);
    });

    test("Deve retornar 'false' quando 'life' for igual a 0", () => {
        const result = validateCharacter({
            name: "Bumblebee",
            life: 0,
            strength: 800,
            defense: 450
        });

        expect(result).toBe(false);
    });

    test("Deve retornar 'false' quando 'strength' for igual a 0", () => {
        const result = validateCharacter({
            name: "Brock",
            life: 100,
            strength: 0,
            defense: 550
        });

        expect(result).toBe(false);
    });

    test("Deve retornar 'false' quando 'defense' for igual a 0", () => {
        const result = validateCharacter({
            name: "Pernalonga",
            life: 10,
            strength: 20,
            defense: 0
        });

        expect(result).toBe(false);
    });

    test("Deve retornar 'false' quando 'life' ou 'strength' ou 'defense' for valor negativo", () => {
        const result = validateCharacter({
            name: "Sub-zero",
            life: 10,
            strength: -20,
            defense: 2300
        });

        expect(result).toBe(false);
    });

    test("Deve retornar 'true' se todas as informações estiverem corretas", () => {
        const result = validateCharacter({
            name: "Harry Potter",
            life: 10,
            strength: 20,
            defense: 2300
        });

        expect(result).toBe(true);
    });
});