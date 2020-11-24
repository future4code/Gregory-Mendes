import { Character, validateCharacter } from "./validateCharacter";

export function performAttack(attacker: Character, defender: Character) {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        return "Invalid Character"
    };

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    };
};

export function performAttackMock (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) {
    if (!validator(attacker) || !validator(defender)) {
        return "Invalid Character"
    };

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    };
};