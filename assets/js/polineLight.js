import { Poline } from 'https://unpkg.com/poline@0.7.0/dist/index.min.mjs'

window.Poline = Poline;

var colors = new Poline({
    numPoints: 5,
});

var csscol = colors.colorsCSS;

csscol.invertedLightness = true;
document.querySelector(".palette line:nth-child(1)")
    .style.stroke = csscol[0];
document.querySelector(".palette line:nth-child(2)")
    .style.stroke = csscol[3];
document.querySelector(".palette line:nth-child(3)")
    .style.stroke = csscol[5];
document.querySelector("a").style.setProperty("--color", csscol[1]); 

var sheet = window.document.styleSheets[0];
sheet.insertRule('a:hover { color:' + csscol[1] + '}', sheet.cssRules.length);