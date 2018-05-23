var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
	// add initial colors to square
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	})
}


function changeColors(color) {
	//looop throgh all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	// change each color to match given color
}

function pickedColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push into array

	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	Math.random() * 256;
	//pick a "green" from 
}