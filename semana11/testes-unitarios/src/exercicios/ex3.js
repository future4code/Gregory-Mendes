export function checaItensDuplicados(array) {
  
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] === array[j]) {
          return array[i] === array[j];
        }
      }
    }
  }

}
