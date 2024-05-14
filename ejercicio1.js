function separateStr(str) {
    let formato = str.toUpperCase().split(' ').join('');

    let solution = formato.split('').join(' ');

    return solution;
}

console.log(separateStr('Hola Mundo'));