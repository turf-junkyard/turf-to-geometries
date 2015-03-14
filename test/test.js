var test = require('tape');
var fs = require('fs');
var glob = require('glob');
var toGeometries = require('../');

test('toGeometries', function (t) {
    glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function (input) {
        var obj = JSON.parse(fs.readFileSync(input));
        var output = toGeometries(obj);
        t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/'))), input);
    });
    t.end();
});
