var Pbf = require('pbf');

var base64 = require('./base64');
var comp = require('./parser');

const data = {
    tiles: [
        {x: 11, y: 22, zoom: 3},
        {x: 44, y: 55, zoom: 66}
    ]
};
console.log('Source data: ', data);

// Base64 encoding
var pbf = new Pbf();
comp.RequestUrl.write(data, pbf);
var buffer = pbf.finish();
var str = base64.encode(buffer);
console.log('Base64 string: ', str);

// Base64 decoding
var pbf2 = new Pbf(base64.decode(str));
var data2 = comp.RequestUrl.read(pbf2);
console.log('Decoded data: ', data2);
