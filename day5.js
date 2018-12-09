var fs = require('fs');

fs.readFile('input-day5.txt', (err, stream) => {
	var regex = /(\-?\d+)/g
    main(stream.toString().split('\n').map( value => parseInt(value.match(regex)[0])), jumpOffset);
});

function jumpOffset(value){
	return ++value;
}

function jumpOffset2(value){
	return value>=3?--value:++value;
}

function main(input, modificator){
	var index = 0;
	var steps = 0;
	while(index>=0 && index<input.length){
		var jump= input[index];
		input[index] = modificator(input[index]);
		index = index + jump;
		steps++;
	}
	console.log(steps);
}