var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_BATASKECAMATAN1_2 = new ol.format.GeoJSON();
var features_BATASKECAMATAN1_2 = format_BATASKECAMATAN1_2.readFeatures(json_BATASKECAMATAN1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKECAMATAN1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKECAMATAN1_2.addFeatures(features_BATASKECAMATAN1_2);
var lyr_BATASKECAMATAN1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKECAMATAN1_2, 
                style: style_BATASKECAMATAN1_2,
                popuplayertitle: 'BATAS KECAMATAN 1',
                interactive: false,
                title: '<img src="styles/legend/BATASKECAMATAN1_2.png" /> BATAS KECAMATAN 1'
            });
var format_BATASTAMBAHAN1_3 = new ol.format.GeoJSON();
var features_BATASTAMBAHAN1_3 = format_BATASTAMBAHAN1_3.readFeatures(json_BATASTAMBAHAN1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASTAMBAHAN1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASTAMBAHAN1_3.addFeatures(features_BATASTAMBAHAN1_3);
var lyr_BATASTAMBAHAN1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASTAMBAHAN1_3, 
                style: style_BATASTAMBAHAN1_3,
                popuplayertitle: 'BATAS TAMBAHAN 1',
                interactive: false,
                title: '<img src="styles/legend/BATASTAMBAHAN1_3.png" /> BATAS TAMBAHAN 1'
            });
var format_namakecamatan_4 = new ol.format.GeoJSON();
var features_namakecamatan_4 = format_namakecamatan_4.readFeatures(json_namakecamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_namakecamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_namakecamatan_4.addFeatures(features_namakecamatan_4);
var lyr_namakecamatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_namakecamatan_4, 
                style: style_namakecamatan_4,
                popuplayertitle: 'nama kecamatan',
                interactive: false,
                title: '<img src="styles/legend/namakecamatan_4.png" /> nama kecamatan'
            });
var format_koordinat2_5 = new ol.format.GeoJSON();
var features_koordinat2_5 = format_koordinat2_5.readFeatures(json_koordinat2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koordinat2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koordinat2_5.addFeatures(features_koordinat2_5);
var lyr_koordinat2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koordinat2_5, 
                style: style_koordinat2_5,
                popuplayertitle: 'koordinat 2',
                interactive: true,
                title: '<img src="styles/legend/koordinat2_5.png" /> koordinat 2'
            });
var format_koordinat1_6 = new ol.format.GeoJSON();
var features_koordinat1_6 = format_koordinat1_6.readFeatures(json_koordinat1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koordinat1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koordinat1_6.addFeatures(features_koordinat1_6);
var lyr_koordinat1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koordinat1_6, 
                style: style_koordinat1_6,
                popuplayertitle: 'koordinat 1',
                interactive: true,
                title: '<img src="styles/legend/koordinat1_6.png" /> koordinat 1'
            });

lyr_ESRI_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_BATASKECAMATAN1_2.setVisible(true);lyr_BATASTAMBAHAN1_3.setVisible(true);lyr_namakecamatan_4.setVisible(true);lyr_koordinat2_5.setVisible(true);lyr_koordinat1_6.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_BATASKECAMATAN1_2,lyr_BATASTAMBAHAN1_3,lyr_namakecamatan_4,lyr_koordinat2_5,lyr_koordinat1_6];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BATASKECAMATAN1_2.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BATASTAMBAHAN1_3.set('fieldAliases', {'id': 'id', });
lyr_namakecamatan_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_koordinat2_5.set('fieldAliases', {'No.': 'No.', 'Luas (ha)': 'Luas (ha)', 'x': 'x', 'y': 'y', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_koordinat1_6.set('fieldAliases', {'field_1': 'field_1', 'X1': 'X1', 'Y1': 'Y1', 'X': 'X', 'Y': 'Y', 'Keliling (m)': 'Keliling (m)', 'Luas (m2)': 'Luas (m2)', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BATASKECAMATAN1_2.set('fieldImages', {'fid': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BATASTAMBAHAN1_3.set('fieldImages', {'id': '', });
lyr_namakecamatan_4.set('fieldImages', {'id': '', 'nama': '', });
lyr_koordinat2_5.set('fieldImages', {'No.': '', 'Luas (ha)': '', 'x': '', 'y': '', 'field_5': '', 'field_6': '', 'field_7': '', 'field_8': '', 'field_9': '', });
lyr_koordinat1_6.set('fieldImages', {'field_1': '', 'X1': '', 'Y1': '', 'X': '', 'Y': '', 'Keliling (m)': '', 'Luas (m2)': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BATASKECAMATAN1_2.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BATASTAMBAHAN1_3.set('fieldLabels', {'id': 'no label', });
lyr_namakecamatan_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_koordinat2_5.set('fieldLabels', {'No.': 'inline label - always visible', 'Luas (ha)': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_koordinat1_6.set('fieldLabels', {'field_1': 'no label', 'X1': 'no label', 'Y1': 'no label', 'X': 'no label', 'Y': 'no label', 'Keliling (m)': 'no label', 'Luas (m2)': 'no label', });
lyr_koordinat1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});