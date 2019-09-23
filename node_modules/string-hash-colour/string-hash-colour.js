var crc32 	= require("easy-crc32")
  , cp		= require("colour-proximity");

module.exports = {
	convert: convert
}

function convert(string, avoid){

	crc = crc32.calculate(string);
	hex = crc.toString(16);
	if(avoid !== undefined){
		if(avoid.avoid !== undefined){
			if(avoid.proximity === undefined){
				avoid.proximity = '30';
			}
			for(var i=0;i<(hex.length-6);i++){
				sub = "#" + hex.substring(i, 6+i);
				if(cp.proximity(avoid.avoid, sub)>avoid.proximity){
					return sub;
				}
			}
			//todo Error that a sufficiently far colour could not be calculated. To be honest, it should try something else, I don't know what though.
		}
	}
	
	return "#" + hex.substring(0, 6);
}
