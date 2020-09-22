export function checaPalindromo(frase) {
  const regex = /[\W_]/g;
  
  const fraseMinúscula = frase.toLowerCase().replace(regex, "");
  const fraseInvertida = fraseMinúscula.split("").reverse().join("");

  return fraseInvertida === fraseMinúscula;
}

