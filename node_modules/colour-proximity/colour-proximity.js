var cs = require("color-string");

module.exports = {
	proximity: proximity,
	rgb2lab: rgb2lab
};

function proximity(s1, s2){
	c1 = rgb2lab(cs.getRgb(s1));
	c2 = rgb2lab(cs.getRgb(s2));
	return Math.sqrt(Math.pow(c1[0]-c2[0],2) + Math.pow(c1[1]-c2[1],2) + Math.pow(c1[2]-c2[2],2));
}

function rgb2lab(input){

	// This code is adapted from various functions at http://www.easyrgb.com/index.php?X=MATH

	var rgb = [0,0,0],
		xyz = [0,0,0],
		Lab = [0,0,0];

	for(var i=0; i<input.length;i++){
	   
		var value = input[i]/255;

		if(value > 0.04045){
			value = Math.pow(((value+0.055 )/1.055), 2.4);
		}else{
			value = value / 12.92;
		}
		
		rgb[i] = value * 100;
		
	}
	
	xyz[0] = (rgb[0] * 0.4124 + rgb[1] * 0.3576 + rgb[2] * 0.1805) / 95.047;	// ref_X =  95.047   Observer= 2°, Illuminant= D65
	xyz[1] = (rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722) / 100.0;		// ref_Y = 100.000
	xyz[2] = (rgb[0] * 0.0193 + rgb[1] * 0.1192 + rgb[2] * 0.9505) / 108.883;	// ref_Z = 108.883

	for(var i=0;i<3;i++){
		var value = xyz[i];
		if(value > 0.008856){
			value = Math.pow(value,1/3);
		}else{
			value = (7.787*value)+(16/116);
		}
		xyz[i] = value;
	}

	Lab[0] = parseFloat(( (116*xyz[1]) - 16   ).toFixed(3));
	Lab[1] = parseFloat(( 500*(xyz[0]-xyz[1]) ).toFixed(3));
	Lab[2] = parseFloat(( 200*(xyz[1]-xyz[2]) ).toFixed(3));

	return Lab;

}
