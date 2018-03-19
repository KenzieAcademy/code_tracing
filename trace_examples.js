add_example({
name: "Arithmetic",

code: `<code>var a = 2;
var b = 3;
a++;
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
    

add_example({
name: "Swap variables",

code: `<code>var x = 4;
var y = 7;
var temp = x;
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


add_example({
name: "Conditional",

code: `<code>var a = 6;
var b = 3;
var c = 5;
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
    
    
add_example({
name: "For Loop - Sum (1)",

code: `<code>var total = 0;
for(<span id="high1">var i = 1</span>; <span id="high2">i &lt; 3</span>; <span id="high3">i++</span>) {
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


add_example({
name: "For Loop - Sum (2)",

code: `<code>var total = 0;
for(<span id="high1">var i = 1</span>; <span id="high2">i &lt;= 3</span>; <span id="high3">i++</span>) {
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


add_example({
name: "Summing selected array elements",

code: `<code>var arr = [<span id="arr0">2</span>, <span id="arr1">5</span>, <span id="arr2">1</span>, <span id="arr3">4</span>];
var total = 0;
for(<span id="for1">var i = 0</span>; <span id="for2">i &lt; arr.length</span>; <span id="for3">i++</span>) {
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
