function addSourcePrimarias(map) {
    map.addSource('primarias-comunas-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.9nfqsw25',
        }
    );
};

function addLayerParticipacion(map) {
    map.addLayer({
        'id': 'participacion-comunas',
        'type': 'fill',
        'source': 'primarias-comunas-data',
        'source-layer': 'primarias2021-comunas-clgyz6',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': '#964B00',
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['get', 'partic'],
                0, 0.05,
                60, 1,
            ]
        }
    }, 'regiones-outline');
    map.setLayoutProperty('participacion-comunas', 'visibility', 'none'); 
};

function addLayerComparacion(map) {
    map.addLayer({
        'id': 'comparacion-comunas',
        'type': 'fill',
        'source': 'primarias-comunas-data',
        'source-layer': 'primarias2021-comunas-clgyz6',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'pct_AD'],
                10, colores['tab:blue'],
                50, colores['blanco'],
                90, colores['tab:red']
            ],
            'fill-opacity': 0.9
        },
    }, 'regiones-outline');
    map.setLayoutProperty('comparacion-comunas', 'visibility', 'none');
};

function addLayerChileVamos(map) {
    map.addLayer({
        'id': 'chile-vamos-comunas',
        'type': 'fill',
        'source': 'primarias-comunas-data',
        'source-layer': 'primarias2021-comunas-clgyz6',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': [
                'case',
                    ['==', ['+', ['get', 'vot_Sichel'], ['get', 'vot_Lavin'], ['get', 'vot_Briones'], ['get', 'vot_Desbordes']], 0], colores['blanco'],
                    ['>=', ['get', 'vot_Sichel'], ['max', ['get', 'vot_Lavin'], ['get', 'vot_Briones'], ['get', 'vot_Desbordes']]], colores['amarillo'],
                    ['>=', ['get', 'vot_Briones'], ['max', ['get', 'vot_Lavin'], ['get', 'vot_Sichel'], ['get', 'vot_Desbordes']]], '#86BC25',
                    ['>=', ['get', 'vot_Lavin'], ['max', ['get', 'vot_Sichel'], ['get', 'vot_Briones'], ['get', 'vot_Desbordes']]], colores['azul-marino'],
                    ['>=', ['get', 'vot_Desbordes'], ['max', ['get', 'vot_Lavin'], ['get', 'vot_Briones'], ['get', 'vot_Sichel']]], colores['celeste'],
                    colores['gris-claro']
            ],
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['max', ['get', 'pct_Sichel'], ['get', 'pct_Lavin'], ['get', 'pct_Briones'], ['get', 'pct_Desbordes']],
                20, 0.05,
                60, 1
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('chile-vamos-comunas', 'visibility', 'none');
};

function addLayerAprueboDignidad(map) {
    map.addLayer({
        'id': 'apruebo-dignidad-comunas',
        'type': 'fill',
        'source': 'primarias-comunas-data',
        'source-layer': 'primarias2021-comunas-clgyz6',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': [
                'case',
                    ['==', ['+', ['get', 'vot_Boric'], ['get', 'vot_Jadue']], 0], colores['blanco'],
                    [
                        'interpolate',
                        ['linear'],
                        ['get', 'pct_Boric'],
                        10, colores['rojo-oscuro'],
                        50, colores['blanco'],
                        90, colores['verde-agua']
                    ]
            ],
            'fill-opacity': 1
        },
    }, 'regiones-outline');
    map.setLayoutProperty('apruebo-dignidad-comunas', 'visibility', 'none');
};

function popParticipacion(map) {
    map.on('mousemove', 'participacion-comunas', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var comuna = e.features[0].properties.NOM_COM;
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var part = e.features[0].properties.partic;
        var totel = e.features[0].properties.tot_el;
        var vot = e.features[0].properties.vot_tot;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
                '<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
                '<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
                '<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'participacion-comunas', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
};

function popComparacion(map) {
    map.on('mousemove', 'comparacion-comunas', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var comuna = e.features[0].properties.NOM_COM;
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var vot_CV = e.features[0].properties.vot_CV;
        var vot_AD = e.features[0].properties.vot_AD;
        var pct_CV = e.features[0].properties.pct_CV;
        var pct_AD = e.features[0].properties.pct_AD;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['tab:blue']+'"></span>Chile Vamos</td><td style="text-align:right;padding-left:20px">'+vot_CV+'</td><td style="text-align:right;padding-left:20px">'+pct_CV+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['tab:red']+'"></span>Apruebo Dignidad</td><td style="text-align:right;padding-left:20px">'+vot_AD+'</td><td style="text-align:right;padding-left:20px">'+pct_AD+'%</td></tr>'+
                '<tr style="border-top:solid;border-width:1px"><td style="font-style:italic">Votos válidos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_val+'</td></tr>'+
                '<tr><td style="font-style:italic">Votos nulos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_nul+'</td></tr>'+
                '<tr><td style="font-style:italic">Votos blancos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_blc+'</td></tr>'+
                '<tr><td style="font-style:italic">Total votación</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_tot+'</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'comparacion-comunas', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
};

function popAprueboDignidad(map) {
    map.on('mousemove', 'apruebo-dignidad-comunas', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var comuna = e.features[0].properties.NOM_COM;
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var vot_Boric = e.features[0].properties.vot_Boric;
        var vot_Jadue = e.features[0].properties.vot_Jadue;
        var pct_Boric = e.features[0].properties.pct_Boric;
        var pct_Jadue = e.features[0].properties.pct_Jadue;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">'+vot_Boric+'</td><td style="text-align:right;padding-left:20px">'+pct_Boric+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">'+vot_Jadue+'</td><td style="text-align:right;padding-left:20px">'+pct_Jadue+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'apruebo-dignidad-comunas', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
};

function popChileVamos(map) {
    map.on('mousemove', 'chile-vamos-comunas', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var comuna = e.features[0].properties.NOM_COM;
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var vot_Sichel = e.features[0].properties.vot_Sichel;
        var pct_Sichel = e.features[0].properties.pct_Sichel;
        var vot_Lavin = e.features[0].properties.vot_Lavin;
        var pct_Lavin = e.features[0].properties.pct_Lavin;
        var vot_Briones = e.features[0].properties.vot_Briones;
        var pct_Briones = e.features[0].properties.pct_Briones;
        var vot_Desbordes = e.features[0].properties.vot_Desbordes;
        var pct_Desbordes = e.features[0].properties.pct_Desbordes;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>Sebastián Sichel (IND)</td><td style="text-align:right;padding-left:20px">'+vot_Sichel+'</td><td style="text-align:right;padding-left:20px">'+pct_Sichel+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['azul-marino']+'"></span>Joaquín Lavin (UDI)</td><td style="text-align:right;padding-left:20px">'+vot_Lavin+'</td><td style="text-align:right;padding-left:20px">'+pct_Lavin+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:#86BC25"></span>Ignacio Briones (EVO)</td><td style="text-align:right;padding-left:20px">'+vot_Briones+'</td><td style="text-align:right;padding-left:20px">'+pct_Briones+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>Mario Desbordes (RN)</td><td style="text-align:right;padding-left:20px">'+vot_Desbordes+'</td><td style="text-align:right;padding-left:20px">'+pct_Desbordes+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'chile-vamos-comunas', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
};