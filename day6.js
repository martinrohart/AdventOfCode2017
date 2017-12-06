var fs = require('fs');
var input="4	1	15	12	0	9	9	5	5	8	7	3	14	5	12	3";
//input="0	2	7	0";

var history = [];

main(input);



function main(input){
	var s = input.split('\t');
	s = s.map(function(value){
		return parseInt(value);
	});

	console.log("Cycles: "+loop(s, undefined));
	console.log("Seen again after "+loop(s,s.slice(0)));
}

function loop(s, watchFor){
	history = [];
	var cycles = 0;
	while(!isIn(s, history)){

		//Find biggest
		var biggest = undefined;
		var index;
		for(var i=0;i<s.length;i++){
			if(biggest==undefined || s[i]>biggest){
				biggest = s[i];
				index = i;
			}
		}

		var blocks = s[index];
		s[index] = 0;

		//Redistribute
		while(blocks>0){
			index++;
			if(index>=s.length){
				index=0;
			}
			s[index] = s[index]+1;
			blocks--;
		}


		//Result
		//console.log(s);
		cycles++;

		if(watchFor!==undefined){
			if(compareArray(s,watchFor)){
				return cycles;
			}
		}
	}
	return cycles;
}

function isIn(state, history){
	for(var h=0;h<history.length;h++){
		var current = history[h];
		//console.log("history "+h+":"+current);
		if(compareArray(state,current)){
			return true;
		}

	}
	history.push(state.slice(0));
	return false;
}

function compareArray(source, target){
	for(var i=0;i<source.length;i++){
		if(source[i]!=target[i]){
			return false;
		}
	}
	return true;
}
