import { createTrue } from "typescript";

export function checaItensDuplicados(array) {
  
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
  }

  return false;
}
