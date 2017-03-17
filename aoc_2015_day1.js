// Run at http://adventofcode.com/2015/day/1/input

var input = document.getElementsByTagName("pre")[0].innerText;
var currentFloor = 0;

for (i=0; i<input.length; i++) {
	if (input[i] == "(") currentFloor++;
    if (input[i] == ")") currentFloor--;
    
    if (currentFloor == -1) {
      console.log("Zero floor position : " + i);
    }

}

console.log(currentFloor);
