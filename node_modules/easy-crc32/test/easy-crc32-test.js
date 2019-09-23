var vows = require('vows'),
    assert = require('assert'),
	crc32 = require('./../lib/easy-crc32');

vows.describe('Checksum test').addBatch({
	'Checksum' : {
		'1': {
		    'null object': function () {
		        assert.equal (null, crc32.calculate(null));
		    },
		    'blank String': function () {
		        assert.equal ("3916222277", crc32.calculate(" "));
		    },	
			'not null':function() {
				assert.equal ("3632233996", crc32.calculate("test"));
				},
			'number':function() {
				assert.equal ("2286445522", crc32.calculate("123"));
			}
		}
	}
}).export(module);