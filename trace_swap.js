addExample({
name: "Swap variables",

code: `<code>let x = 4;
let y = 7;
let temp = x;
x = y;
y = temp;
console.log(y);</code>`,

vars: ["x", "y", "temp", "output"],

traces: [
    [1, "x", 4],
    [2, "y", 7],
    [3, "temp", 4],
    [4, "x", 7],
    [5, "y", 4],
    [6, "output", 4]
]
});
