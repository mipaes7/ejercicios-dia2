function countWords(str) {
    let arr = str.split(' ');

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count += 1;
    }

    return count;
}

console.log(countWords('Hola Mundo diojgobodfjb dojfoij dojfoijd'));