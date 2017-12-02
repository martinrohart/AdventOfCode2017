var fs = require('fs');
var input="";

fs.readFile('input-day2.txt', (err, stream) => {
    input = stream.toString(),
    //console.log(input);
    main(input,checkRow1);
   	main(input,checkRow2);
});


function main(input,ckeckSumFunction){
	var checksum = 0;

	var rows = input.split('\n');
	for (var row of rows){
		checksum = checksum +  ckeckSumFunction(row);
	}

	console.log("Checkum: "+checksum);
}

function checkRow2(row){
	var values = row.split('\t').map(function(value, index, self){
		return parseInt(value);
	});

	var cnt=0;
	for(var value of values){

		for(var i=0;i<values.length;i++){
			if(i==cnt){
				continue;
			}
			if(values[i]>=value){
				if((values[i] / value)==(Math.round(values[i] / value))){
					return values[i]/value;
				}
			}else{
				if((value / values[i])==(Math.round(value / values[i]))){
					return value/values[i];
				}
			}
		}
		cnt++;
	}
	console.log("Not found");
}

function checkRow1(row){
	var min = undefined;
	var max = undefined;
	var values = row.split('\t');
	for(var valueStr of values){
		var value = parseInt(valueStr);
		if(min==undefined || value<min){
			min = value;
		}
		if(max==undefined || value>max){
			max = value;
		}
	}
	return max-min;
}
