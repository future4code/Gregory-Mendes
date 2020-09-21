export function checaItensDuplicados(array) {

  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      return true;
    } else {
      return false;
    }
  }
}
