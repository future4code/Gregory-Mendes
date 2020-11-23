export function performPurchase(user: User, productValue: number): User | undefined {
    if (user.balance >= productValue) {
        return {
            ...user,
            balance: user.balance - productValue
        };
    };

    return undefined;
};

export interface User {
    name: string,
    balance: number
};