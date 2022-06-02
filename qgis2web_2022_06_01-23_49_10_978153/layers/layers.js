var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: 'พ.ค. - มิ.ย. (ราย)<br />\
    <img src="styles/legend/_1_0.png" /> 1000 - 5001<br />\
    <img src="styles/legend/_1_1.png" /> 5001 - 10001<br />\
    <img src="styles/legend/_1_2.png" /> 10001 - 20001<br />\
    <img src="styles/legend/_1_3.png" /> มากกว่า 20000<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
    title: 'เม.ย. - พ.ค. (ราย)<br />\
    <img src="styles/legend/_2_0.png" /> 1000 - 5001<br />\
    <img src="styles/legend/_2_1.png" /> 5001 - 10001<br />\
    <img src="styles/legend/_2_2.png" /> 10001 - 20001<br />\
    <img src="styles/legend/_2_3.png" /> มากกว่า 20000<br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: 'มี.ค. - เม.ย. (ราย)<br />\
    <img src="styles/legend/_3_0.png" /> 1000 - 5001<br />\
    <img src="styles/legend/_3_1.png" /> 5001 - 10001<br />\
    <img src="styles/legend/_3_2.png" /> 10001 - 20001<br />\
    <img src="styles/legend/_3_3.png" /> มากกว่า 20000<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
    title: 'ก.พ. - มี.ค. (ราย)<br />\
    <img src="styles/legend/_4_0.png" /> 1000 - 5001<br />\
    <img src="styles/legend/_4_1.png" /> 5001 - 10001<br />\
    <img src="styles/legend/_4_2.png" /> 10001 - 20001<br />\
    <img src="styles/legend/_4_3.png" /> มากกว่า 20000<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NAME_th': 'NAME_th', 'total_CV': 'total_CV', 'total_CV2': 'total_CV2', 'total_CV3': 'total_CV3', 'total_CV4': 'total_CV4', });
lyr__2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NAME_th': 'NAME_th', 'total_CV': 'total_CV', 'total_CV2': 'total_CV2', 'total_CV3': 'total_CV3', 'total_CV4': 'total_CV4', });
lyr__3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NAME_th': 'NAME_th', 'total_CV': 'total_CV', 'total_CV2': 'total_CV2', 'total_CV3': 'total_CV3', 'total_CV4': 'total_CV4', });
lyr__4.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NAME_th': 'NAME_th', 'total_CV': 'total_CV', 'total_CV2': 'total_CV2', 'total_CV3': 'total_CV3', 'total_CV4': 'total_CV4', });
lyr__1.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NAME_th': 'TextEdit', 'total_CV': 'TextEdit', 'total_CV2': 'TextEdit', 'total_CV3': 'TextEdit', 'total_CV4': 'TextEdit', });
lyr__2.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NAME_th': 'TextEdit', 'total_CV': 'TextEdit', 'total_CV2': 'TextEdit', 'total_CV3': 'TextEdit', 'total_CV4': 'TextEdit', });
lyr__3.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NAME_th': 'TextEdit', 'total_CV': 'TextEdit', 'total_CV2': 'TextEdit', 'total_CV3': 'TextEdit', 'total_CV4': 'TextEdit', });
lyr__4.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NAME_th': 'TextEdit', 'total_CV': 'TextEdit', 'total_CV2': 'TextEdit', 'total_CV3': 'TextEdit', 'total_CV4': 'TextEdit', });
lyr__1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NAME_th': 'header label', 'total_CV': 'no label', 'total_CV2': 'no label', 'total_CV3': 'no label', 'total_CV4': 'inline label', });
lyr__2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NAME_th': 'header label', 'total_CV': 'no label', 'total_CV2': 'no label', 'total_CV3': 'inline label', 'total_CV4': 'no label', });
lyr__3.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NAME_th': 'header label', 'total_CV': 'no label', 'total_CV2': 'inline label', 'total_CV3': 'no label', 'total_CV4': 'no label', });
lyr__4.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NAME_th': 'header label', 'total_CV': 'inline label', 'total_CV2': 'no label', 'total_CV3': 'no label', 'total_CV4': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});