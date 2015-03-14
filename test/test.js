var test = require('tape');
var coerce = require('../');
var fs = require('fs');
var glob = require('glob');

var geometry = fs.readFileSync(__dirname + '/fixtures/in/Geometry.geojson');
var feature = fs.readFileSync(__dirname + '/fixtures/in/Feature.geojson');
var featureCollection = fs.readFileSync(__dirname + '/fixtures/in/FeatureCollection.geojson');
var geometryCollection = fs.readFileSync(__dirname + '/fixtures/in/GeometryCollection.geojson');

test('toGeometries', function (t) {
    glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function (input) {
        var obj = JSON.parse(fs.readFileSync(input));
        var output = coerce.toGeometries(obj);
        t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/toGeometries-'))), input);
    });
    t.end();
});


test('toFeatures', function (t) {
    glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function (input) {
        var obj = JSON.parse(fs.readFileSync(input));
        var output = coerce.toFeatures(obj);
        t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/toFeatures-'))), input);
    });
    t.end();
});
