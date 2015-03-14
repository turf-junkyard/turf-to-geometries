

module.exports = {
    toFeatures: function (geojson) {
        if (geojson.type == 'Feature' || geojson.type == 'FeatureCollection') {
            return geojson;
        }

        if (geojson["coordinates"]) {
            return {
                "type": "Feature",
                "properties": {},
                "geometry": geojson
            };
        }

        if (geojson.type == 'GeometryCollection') {
            var geo = {
                "type": "FeatureCollection",
                "features": []
            };

            geojson.geometries.forEach(function (elem) {
                geo.features.push({
                    "type": "Feature",
                    "properties": {},
                    "geometry": elem
                });
            });

            return geo;
        }
    },

    toGeometries: function (geojson) {
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
    }
}
