export function firstLettersUppercase(phrase) {
    const separatedString = phrase.split(" ")

    for (let i = 0; i < separatedString.length; i++) {
        separatedString[i] = separatedString[i].charAt(0).toUpperCase() + 
        separatedString[i].substring(1);
    };

    return separatedString.join(" ");
}