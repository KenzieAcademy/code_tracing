code = `var x = 4;
var y = 7;
var temp = x;
x = y;
y = temp;
console.log(y);`;

traces = [
    [1, "x", 4],
    [2, "y", 7],
    [3, "temp", 4],
    [4, "x", 7],
    [5, "y", 4],
    [6, "output", 4]
];
example(code, ["x", "y", "temp", "output"], traces);