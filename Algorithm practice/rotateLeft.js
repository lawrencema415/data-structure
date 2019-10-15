function rotLeft(a, d) {
    let front = a.slice(d,a.length);
    let back = a.slice(0, d);
    let output = [];
    for(x of front) {
        output.push(x)
    }
    for(y of back) {
        output.push(y)
    }
    return output.join(" ");
}

console.log(rotLeft([1,2,3,4,5],4));
