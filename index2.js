let colors = ["groen", "blauw", "rood"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
colors.push("geel");
colors.push(5);
console.log(colors);
colors.push({
    greetings: "hi ik ben een object"
});
console.log(colors[colors.length - 1].greetings);