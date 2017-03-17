// http://adventofcode.com/2015/day/2/
// Run on the console at : http://adventofcode.com/2015/day/2/input

// Written in part while waiting for dinner to cook and watching Friends S1E21 & E22

function parseDimension(dimension) {
   var packageDimensions = dimension.split("x");
   return packageDimensions;
}

function numericSort(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

var input = document.getElementsByTagName("pre")[0].innerText;
var dimensions = input.split("\n");

var totalSquareFeet = 0;
var totalRibbion = 0;

for (i=0; i<dimensions.length-1; i++) {
  var packageDimensions = parseDimension(dimensions[i]);

   var l = packageDimensions[0];
   var w = packageDimensions[1];
   var h = packageDimensions[2];

   totalSquareFeet += 2*l*w + 2*w*h + 2*h*l;
   totalSquareFeet += Math.min(l*w,w*h,h*l);

   var sortedDimensions = [l, w, h].map(item => item*1).sort(numericSort);

   totalRibbion += sortedDimensions[0] + sortedDimensions[0];
   totalRibbion += sortedDimensions[1] + sortedDimensions[1];
   totalRibbion += l*w*h;
}

console.log("Total square feet : " + totalSquareFeet);
console.log("Total ribbion square feet : " + totalRibbion);
