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
    [5, "output", 3]
]
});
