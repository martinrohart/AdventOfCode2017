var fs = require('fs');
var input="";

fs.readFile('input-day4.txt', (err, stream) => {
    input = stream.toString(),
    main(input, mapper1);
    main(input, mapper2);
});

function mapper1(password){
	const words = password.split(' ');
	const keys = {};
	for(var word of words){
		if(keys[word]===undefined){
			keys[word]=word;
		}else{
			return false;
		}
	}
	return true;
}

function mapper2(password){
	const words = password.split(' ');
	for(var i=0;i<words.length;i++){
		var word = words[i];
		for(var j=0;j<i;j++){
			var comp = words[j];
			if(isAnagram(comp, word)){
				return false;
			}
		}			
	}
	return true;
}

function isAnagram(string1, string2){
	var sorted1 = string1.split('').sort().join();
	var sorted2 = string2.split('').sort().join();
	return sorted1==sorted2;
}

function main(input, mapper){
	console.log(input.split('\n').map(mapper).reduce( (accumulator, currentValue) => accumulator = accumulator + (currentValue?1:0)));
}
