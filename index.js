/**
 * Takes an arbitrary GeoJSON object and converts it to a
 * Geometry or GeometryCollection
 *
 * @module turf/to-geometries
 * @param {Feature|Geometry|FeatureCollection|GeometryCollection} geojson geojson to convert
 * @return {Geometry|GeometryCollection}
 * @example
 * var poly = {
 *   "type": "Feature",
 *   "properties": {
 *     "fill": "#0f0"
 *   },
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-122.801742, 45.48565],
 *       [-122.801742, 45.60491],
 *       [-122.584762, 45.60491],
 *       [-122.584762, 45.48565],
 *       [-122.801742, 45.48565]
 *     ]]
 *   }
 * };
 *
 * var geometry = turf.toGeometries(poly);
 *
 * // Geometry is:
 * {
 *   "type": "Polygon",
 *   "coordinates": [[
 *     [-122.801742, 45.48565],
 *     [-122.801742, 45.60491],
 *     [-122.584762, 45.60491],
 *     [-122.584762, 45.48565],
 *     [-122.801742, 45.48565]
 *   ]]
 * };
 */
module.exports = function (geojson) {
    if (geojson.type == 'Feature') {
        return geojson.geometry;
    }

    if (geojson.type == 'GeometryCollection' || geojson["coordinates"]) {
        return geojson;
    }

    if (geojson.type == 'FeatureCollection') {
        var geo = {
            "type": "GeometryCollection",
            "geometries": []
        };

        geojson.features.forEach(function (elem) {
            geo.geometries.push(elem.geometry);
        });

        return geo;
    }
};
