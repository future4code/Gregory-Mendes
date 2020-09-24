import { ascendingOrderArray } from "./challenge1"

describe("Check if the function ascendingOrderArray is working", () => {
    test("The function have to return numbers in ascending order", () => {
        const arrayToBeOrder = ascendingOrderArray([99, 5, 14, 17, 23, 52, 48]);
        const resultado = [5, 14, 17, 23, 48, 52, 99];
        
        expect(arrayToBeOrder).toEqual(resultado);
    });
});