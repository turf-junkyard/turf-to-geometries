# turf-to-geometries

converts arbitrary geojson into geometry objects


### `turf.to-geometries(geojson)`

Takes an arbitrary GeoJSON object and converts it to a
Geometry or GeometryCollection


### Parameters

| parameter | type                                                     | description        |
| --------- | -------------------------------------------------------- | ------------------ |
| `geojson` | Feature\,Geometry\,FeatureCollection\,GeometryCollection | geojson to convert |


### Example

```js
var poly = {
  "type": "Feature",
  "properties": {
    "fill": "#0f0"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-122.801742, 45.48565],
      [-122.801742, 45.60491],
      [-122.584762, 45.60491],
      [-122.584762, 45.48565],
      [-122.801742, 45.48565]
    ]]
  }
};

var geometry = turf.toGeometries(poly);

// Geometry is:
{
  "type": "Polygon",
  "coordinates": [[
    [-122.801742, 45.48565],
    [-122.801742, 45.60491],
    [-122.584762, 45.60491],
    [-122.584762, 45.48565],
    [-122.801742, 45.48565]
  ]]
};
```


**Returns** `Geometry,GeometryCollection`, 

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-to-geometries
```

## Tests

```sh
$ npm test
```


