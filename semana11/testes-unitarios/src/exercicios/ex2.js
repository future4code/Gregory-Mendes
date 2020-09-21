export function checaPalindromo(frase) {
  frase.toLowerCase();

  return (
    frase ===
    frase
    .split(`${/\W/}`)
    .reverse()
    .join("")
  );
}
