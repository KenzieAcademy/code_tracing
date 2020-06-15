addExample({
name: "Arithmetic",

code: `<code>let a = 2;
let b = 3;
a += 1;
console.log(a * b);</code>`,

vars: ["a", "b", "output"],

traces: [
    [1, "a", 2],
    [2, "b", 3],
    [3, "a", 3],
    [4, "output", 9],
    [5]
]
});
    

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
    [6, "output", 4],
    [7]
]
});


addExample({
name: "Conditional",

code: `<code>let a = 6;
let b = 3;
let c = 5;
if(a &lt; b) {
    console.log(a + c);
} else {
    console.log(b + c);
}</code>`,

vars: ["a", "b", "c", "output"],

traces: [
    [1, "a", 6],
    [2, "b", 3],
    [3, "c", 5],
    [4, null, null],
    [7, "output", 8],
    [9]
]
});
    
    
addExample({
name: "For Loop - Sum (1)",

code: `<code>let total = 0;
for(<span id="high1">let i = 1</span>; <span id="high2">i &lt; 3</span>; <span id="high3">i += 1</span>) {
    total = total + i;
}
console.log(total);
</code>`,

vars: ["total", "i", "output"],

traces: [
    [1, "total", 0],
    [2, "i", 1, "high1"],
    [2, null, null, "high2"],
    [3, "total", 1],
    [2, "i", 2, "high3"],
    [2, null, null, "high2"],
    [3, "total", 3],
    [2, "i", 3, "high3"],
    [2, null, null, "high2"],
    [5, "output", 3],
    [6]
]
});


addExample({
name: "For Loop - Sum (2)",

code: `<code>let total = 0;
for(<span id="high1">let i = 1</span>; <span id="high2">i &lt;= 3</span>; <span id="high3">i += 1</span>) {
    total = total + i;
}
console.log(total);
</code>`,

vars: ["total", "i", "output"],

traces: [
    [1, "total", 0],
    [2, "i", 1, "high1"],
    [2, null, null, "high2"],
    [3, "total", 1],
    [2, "i", 2, "high3"],
    [2, null, null, "high2"],
    [3, "total", 3],
    [2, "i", 3, "high3"],
    [2, null, null, "high2"],
    [3, "total", 6],
    [2, "i", 4, "high3"],
    [2, null, null, "high2"],
    [5, "output", 6],
    [6]
]
});


addExample({
name: "Summing selected array elements",

code: `<code>let arr = [<span id="arr0">2</span>, <span id="arr1">5</span>, <span id="arr2">1</span>, <span id="arr3">4</span>];
let total = 0;
for(<span id="for1">let i = 0</span>; <span id="for2">i &lt; arr.length</span>; <span id="for3">i += 1</span>) {
   if(<span id="ref1">arr[i]</span> &lt; 3) {
      total = total + <span id="ref2">arr[i]</span>;
   }
}
console.log(total);</code>`,

vars: ["total", "i", "output"],

traces: [
    [1],
    [2, "total", 0],
    [3],
    [3, "i", 0, "for1"],
    [3, null, null, "for2"],
    [4],
    [4, null, null, "ref1"],
    [4, null, null, "ref1", "arr0"],
    [5],
    [5, null, null, "ref2"],
    [5, "total", 2, "ref2", "arr0"],
    [3],
    [3, "i", 1, "for3"],
    [3, null, null, "for2"],
    [4],
    [4, null, null, "ref1"],
    [4, null, null, "ref1", "arr1"],
    [3],
    [3, "i", 2, "for3"],
    [3, null, null, "for2"],
    [4],
    [4, null, null, "ref1"],
    [4, null, null, "ref1", "arr2"],
    [5],
    [5, null, null, "ref2"],
    [5, "total", 3, "ref2", "arr2"],
    [3],
    [3, "i", 3, "for3"],
    [3, null, null, "for2"],
    [4],
    [4, null, null, "ref1"],
    [4, null, null, "ref1", "arr3"],
    [3],
    [3, "i", 4, "for3"],
    [3, null, null, "for2"],
    [8, "output", 3],
    [9]
]
});
