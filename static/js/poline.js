var colors = new Poline({
    numPoints: 3,
});

console.log(colors);

document.querySelector(".palette line:nth-child(1)")
    .style.strokeStyle = colors[0];
document.querySelector(".palette line:nth-child(2)")
    .style.strokeStyle = colors[1];
document.querySelector(".palette line:nth-child(3)")
    .style.strokeStyle = colors[2];