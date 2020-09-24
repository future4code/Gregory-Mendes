import { firstLettersUppercase } from "./challenge2"

describe("Check if the function firstLettersUpperCase is working", () => {
    test("The first letter of each word have to be in capitals", () => {
        const string = firstLettersUppercase("quando bleus, quero que blaus");
        const resultado = "Quando Bleus, Quero Que Blaus";
        
        expect(string).toEqual(resultado);
    });
});