var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1 = new ol.format.GeoJSON();
var features_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1 = format_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1.readFeatures(json_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1.addFeatures(features_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1);
var lyr_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1, 
                style: style_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1,
                popuplayertitle: "Anexo V - Área de Espera do Prático ANEXO V - Espera do prático",
                interactive: true,
                title: '<img src="styles/legend/AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1.png" /> Anexo V - Área de Espera do Prático ANEXO V - Espera do prático'
            });
var format_AnexoIVreadaAntigaAssedorn_2 = new ol.format.GeoJSON();
var features_AnexoIVreadaAntigaAssedorn_2 = format_AnexoIVreadaAntigaAssedorn_2.readFeatures(json_AnexoIVreadaAntigaAssedorn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVreadaAntigaAssedorn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVreadaAntigaAssedorn_2.addFeatures(features_AnexoIVreadaAntigaAssedorn_2);
var lyr_AnexoIVreadaAntigaAssedorn_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVreadaAntigaAssedorn_2, 
                style: style_AnexoIVreadaAntigaAssedorn_2,
                popuplayertitle: "Anexo IV - Área da Antiga Assedorn",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVreadaAntigaAssedorn_2.png" /> Anexo IV - Área da Antiga Assedorn'
            });
var format_AnexoIIIreadeFundeio3_3 = new ol.format.GeoJSON();
var features_AnexoIIIreadeFundeio3_3 = format_AnexoIIIreadeFundeio3_3.readFeatures(json_AnexoIIIreadeFundeio3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIreadeFundeio3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIreadeFundeio3_3.addFeatures(features_AnexoIIIreadeFundeio3_3);
var lyr_AnexoIIIreadeFundeio3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIreadeFundeio3_3, 
                style: style_AnexoIIIreadeFundeio3_3,
                popuplayertitle: "Anexo III - Área de Fundeio 3",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIreadeFundeio3_3.png" /> Anexo III - Área de Fundeio 3'
            });
var format_AnexoIIreadeFundeio1_4 = new ol.format.GeoJSON();
var features_AnexoIIreadeFundeio1_4 = format_AnexoIIreadeFundeio1_4.readFeatures(json_AnexoIIreadeFundeio1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIreadeFundeio1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIreadeFundeio1_4.addFeatures(features_AnexoIIreadeFundeio1_4);
var lyr_AnexoIIreadeFundeio1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIreadeFundeio1_4, 
                style: style_AnexoIIreadeFundeio1_4,
                popuplayertitle: "Anexo II - Área de Fundeio 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIreadeFundeio1_4.png" /> Anexo II - Área de Fundeio 1'
            });
var format_AnexoIPolgonoPrincipal_5 = new ol.format.GeoJSON();
var features_AnexoIPolgonoPrincipal_5 = format_AnexoIPolgonoPrincipal_5.readFeatures(json_AnexoIPolgonoPrincipal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPolgonoPrincipal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoPrincipal_5.addFeatures(features_AnexoIPolgonoPrincipal_5);
var lyr_AnexoIPolgonoPrincipal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoPrincipal_5, 
                style: style_AnexoIPolgonoPrincipal_5,
                popuplayertitle: "Anexo I - Polígono Principal",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoPrincipal_5.png" /> Anexo I - Polígono Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1.setVisible(true);lyr_AnexoIVreadaAntigaAssedorn_2.setVisible(true);lyr_AnexoIIIreadeFundeio3_3.setVisible(true);lyr_AnexoIIreadeFundeio1_4.setVisible(true);lyr_AnexoIPolgonoPrincipal_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1,lyr_AnexoIVreadaAntigaAssedorn_2,lyr_AnexoIIIreadeFundeio3_3,lyr_AnexoIIreadeFundeio1_4,lyr_AnexoIPolgonoPrincipal_5];
lyr_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVreadaAntigaAssedorn_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIreadeFundeio3_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIreadeFundeio1_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoPrincipal_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVreadaAntigaAssedorn_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIreadeFundeio3_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIreadeFundeio1_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoPrincipal_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVreadeEsperadoPrticoANEXOVEsperadoprtico_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVreadaAntigaAssedorn_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIIreadeFundeio3_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIreadeFundeio1_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});