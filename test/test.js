var assert = require('assert');
var module = require('../dist/rd2wgs84');

console.log('xxx', module.rd2WGS84);

describe('rd2WGS84', function () {
    it('should return (47.974767,3.313542) when the value (0,0) is passed', function () {
        const latlon = module.rd2WGS84({ x: 0, y: 0 });
        console.log("latlon", latlon);
        assert.equal(latlon.lat, '47.974767');
        assert.equal(latlon.lon, '3.313542');
    });
});
