export function ascendingOrderArray(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] < array[j]) {
                    let receivedValue = array[i];
                    array[i] = array[j];
                    array[j] = receivedValue;
                }
            }
        }
    }
    
    return array;
}