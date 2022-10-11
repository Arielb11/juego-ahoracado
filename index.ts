export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    integers.push(parseInt(numbers.split('\n')[1]));
 
    return integers
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}

let result = add('1, 2, 4\n 5');
