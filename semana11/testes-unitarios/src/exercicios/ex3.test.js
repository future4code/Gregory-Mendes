import { isExportDeclaration, textSpanContainsPosition } from "typescript";
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true se o array conter 1, 2, 2 e 4", () => {
        const resultado = checaItensDuplicados([1, 2, 2, 4]);

        expect(resultado).toEqual(true);
    });

    test("retorna true se o array conter 3, 3, 44, 82, 55, 71", () => {
        const resultado = checaItensDuplicados([3, 3, 44, 82, 55, 71]);

        expect(resultado).toEqual(true);
    });

    test("retorna false se o array conter 2, 34, 53, 75, 130, 229", () => {
        const resultado = checaItensDuplicados([2, 34, 53, 75, 130, 229]);

        expect(resultado).toEqual(false);
    });

    test("retorna false se o array for vazio", () => {
        const resultado = checaItensDuplicados([]);

        expect(resultado).toEqual(false)
    });

    test("retorna true se o array conter 5, -3, -44, 230, a, a", () => {
        const resultado = checaItensDuplicados([5, -3, -44, 230, "a", "a"]);

        expect(resultado).toEqual(true);
    });

    test("retorna true se o array conter 3, 3, 3, 44, 82, 55, 71", () => {
        const resultado = checaItensDuplicados([3, 3, 3, 44, 82, 55, 71]);

        expect(resultado).toEqual(true);
    })

    test("retorna true se o array conter 5, 7, 5, 87, 92, 5, 55, 5", () => {
        const resultado = checaItensDuplicados([5, 7, 87, 92, 5, 55, 5]);
        
        expect(resultado).toEqual(true);
    });
});
