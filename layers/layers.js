ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-35.215499, -5.775939, -35.156153, -5.744293]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoVreadeEsperadoPrtico_1 = new ol.format.GeoJSON();
var features_AnexoVreadeEsperadoPrtico_1 = format_AnexoVreadeEsperadoPrtico_1.readFeatures(json_AnexoVreadeEsperadoPrtico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AnexoVreadeEsperadoPrtico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVreadeEsperadoPrtico_1.addFeatures(features_AnexoVreadeEsperadoPrtico_1);
var lyr_AnexoVreadeEsperadoPrtico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVreadeEsperadoPrtico_1, 
                style: style_AnexoVreadeEsperadoPrtico_1,
                popuplayertitle: 'Anexo V - Área de Espera do Prático',
                interactive: true,
                title: '<img src="styles/legend/AnexoVreadeEsperadoPrtico_1.png" /> Anexo V - Área de Espera do Prático'
            });
var format_AnexoIVreadaAntigaAssedorn_2 = new ol.format.GeoJSON();
var features_AnexoIVreadaAntigaAssedorn_2 = format_AnexoIVreadaAntigaAssedorn_2.readFeatures(json_AnexoIVreadaAntigaAssedorn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AnexoIVreadaAntigaAssedorn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVreadaAntigaAssedorn_2.addFeatures(features_AnexoIVreadaAntigaAssedorn_2);
var lyr_AnexoIVreadaAntigaAssedorn_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVreadaAntigaAssedorn_2, 
                style: style_AnexoIVreadaAntigaAssedorn_2,
                popuplayertitle: 'Anexo IV - Área da Antiga Assedorn',
                interactive: true,
                title: '<img src="styles/legend/AnexoIVreadaAntigaAssedorn_2.png" /> Anexo IV - Área da Antiga Assedorn'
            });
var format_ANEXOIIIreadeFundeio3_3 = new ol.format.GeoJSON();
var features_ANEXOIIIreadeFundeio3_3 = format_ANEXOIIIreadeFundeio3_3.readFeatures(json_ANEXOIIIreadeFundeio3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ANEXOIIIreadeFundeio3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEXOIIIreadeFundeio3_3.addFeatures(features_ANEXOIIIreadeFundeio3_3);
var lyr_ANEXOIIIreadeFundeio3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEXOIIIreadeFundeio3_3, 
                style: style_ANEXOIIIreadeFundeio3_3,
                popuplayertitle: 'ANEXO III - Área de Fundeio 3',
                interactive: true,
                title: '<img src="styles/legend/ANEXOIIIreadeFundeio3_3.png" /> ANEXO III - Área de Fundeio 3'
            });
var format_AnexoIIreadeFundeio1_4 = new ol.format.GeoJSON();
var features_AnexoIIreadeFundeio1_4 = format_AnexoIIreadeFundeio1_4.readFeatures(json_AnexoIIreadeFundeio1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AnexoIIreadeFundeio1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIreadeFundeio1_4.addFeatures(features_AnexoIIreadeFundeio1_4);
var lyr_AnexoIIreadeFundeio1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIreadeFundeio1_4, 
                style: style_AnexoIIreadeFundeio1_4,
                popuplayertitle: 'Anexo II - Área de Fundeio 1',
                interactive: true,
                title: '<img src="styles/legend/AnexoIIreadeFundeio1_4.png" /> Anexo II - Área de Fundeio 1'
            });
var format_AnexoIPolgonoPrincipal_5 = new ol.format.GeoJSON();
var features_AnexoIPolgonoPrincipal_5 = format_AnexoIPolgonoPrincipal_5.readFeatures(json_AnexoIPolgonoPrincipal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AnexoIPolgonoPrincipal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoPrincipal_5.addFeatures(features_AnexoIPolgonoPrincipal_5);
var lyr_AnexoIPolgonoPrincipal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoPrincipal_5, 
                style: style_AnexoIPolgonoPrincipal_5,
                popuplayertitle: 'Anexo I - Polígono Principal',
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoPrincipal_5.png" /> Anexo I - Polígono Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoVreadeEsperadoPrtico_1.setVisible(true);lyr_AnexoIVreadaAntigaAssedorn_2.setVisible(true);lyr_ANEXOIIIreadeFundeio3_3.setVisible(true);lyr_AnexoIIreadeFundeio1_4.setVisible(true);lyr_AnexoIPolgonoPrincipal_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoVreadeEsperadoPrtico_1,lyr_AnexoIVreadaAntigaAssedorn_2,lyr_ANEXOIIIreadeFundeio3_3,lyr_AnexoIIreadeFundeio1_4,lyr_AnexoIPolgonoPrincipal_5];
lyr_AnexoVreadeEsperadoPrtico_1.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVreadaAntigaAssedorn_2.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ANEXOIIIreadeFundeio3_3.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIreadeFundeio1_4.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoPrincipal_5.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVreadeEsperadoPrtico_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVreadaAntigaAssedorn_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ANEXOIIIreadeFundeio3_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIreadeFundeio1_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoPrincipal_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVreadeEsperadoPrtico_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVreadaAntigaAssedorn_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_ANEXOIIIreadeFundeio3_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIreadeFundeio1_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});