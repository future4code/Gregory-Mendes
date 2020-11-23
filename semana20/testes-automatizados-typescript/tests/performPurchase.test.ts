import { performPurchase, User } from "../src/performPurchase"

describe("Perform Purchase", () => {
    test("Balanço maior do que o valor do produto", () => {
        const user: User = {
            name: "Jorge",
            balance: 120
        }

        const result = performPurchase(user, 100);

        expect(result).toEqual({
            ...user,
            balance: 20
        });
    });

    test("Balanço igual ao valor do produto", () => {
        const user: User = {
            name: "Jorge",
            balance: 120
        }

        const result = performPurchase(user, 120);

        expect(result).toEqual({
            ...user,
            balance: 0
        });
    });

    test("Balanço menor do que o valor do produto", () => {
        const user: User = {
            name: "Jorge",
            balance: 120
        }

        const result = performPurchase(user, 300);

        expect(result).toBe(undefined);
    });
});