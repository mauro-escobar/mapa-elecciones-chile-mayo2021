function addSourceGenerales(map) {
    map.addSource('presidenciales-comunas-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.9q3ktwp7',
        }
    );
    map.addSource('presidenciales-distritos-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.33hhhl8c',
        }
    );
    map.addSource('presidenciales-regiones-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.5ewj3ut1',
        }
    );
};

function addLayerPresidenciales(map) {
    map.addLayer({
        'id': 'presidenciales-comunas',
        'type': 'fill',
        'source': 'presidenciales-comunas-data',
        'source-layer': 'presidenciales2021-comunas-427z5y',
        'filter': ['has', 'vot_1'],
        'paint': {
            'fill-color': [
                'case',
                    ['==', ['+', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']], 0], colores['blanco'],
                    ['>=', ['get', 'vot_1'], ['max', ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['verde-agua'],
                    ['>=', ['get', 'vot_2'], ['max', ['get', 'vot_1'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['azul-marino'],
                    ['>=', ['get', 'vot_3'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['violeta'],
                    ['>=', ['get', 'vot_4'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['amarillo'],
                    ['>=', ['get', 'vot_5'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['rojo'],
                    ['>=', ['get', 'vot_6'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_7']]], colores['azul'],
                    ['>=', ['get', 'vot_7'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6']]], colores['celeste'],
                    colores['gris-claro']
            ],
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']],
                0, 0.05,
                40, 1,
            ]
        }
    }, 'regiones-outline');
    map.setLayoutProperty('presidenciales-comunas', 'visibility', 'none');
    map.addLayer({
        'id': 'presidenciales-distritos',
        'type': 'fill',
        'source': 'presidenciales-distritos-data',
        'source-layer': 'presidenciales2021-distritos-05y1s3',
        'filter': ['has', 'vot_1'],
        'paint': {
            'fill-color': [
                'case',
                    ['==', ['+', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']], 0], colores['blanco'],
                    ['>=', ['get', 'vot_1'], ['max', ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['verde-agua'],
                    ['>=', ['get', 'vot_2'], ['max', ['get', 'vot_1'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['azul-marino'],
                    ['>=', ['get', 'vot_3'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['violeta'],
                    ['>=', ['get', 'vot_4'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['amarillo'],
                    ['>=', ['get', 'vot_5'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['rojo'],
                    ['>=', ['get', 'vot_6'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_7']]], colores['azul'],
                    ['>=', ['get', 'vot_7'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6']]], colores['celeste'],
                    colores['gris-claro']
            ],
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']],
                0, 0.05,
                40, 1,
            ]
        }
    }, 'regiones-outline');
    map.setLayoutProperty('presidenciales-distritos', 'visibility', 'none');
    map.addLayer({
        'id': 'presidenciales-regiones',
        'type': 'fill',
        'source': 'presidenciales-regiones-data',
        'source-layer': 'presidenciales2021-regiones-3fngji',
        'filter': ['has', 'vot_1'],
        'paint': {
            'fill-color': [
                'case',
                    ['==', ['+', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']], 0], colores['blanco'],
                    ['>=', ['get', 'vot_1'], ['max', ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['verde-agua'],
                    ['>=', ['get', 'vot_2'], ['max', ['get', 'vot_1'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['azul-marino'],
                    ['>=', ['get', 'vot_3'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['violeta'],
                    ['>=', ['get', 'vot_4'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['amarillo'],
                    ['>=', ['get', 'vot_5'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_6'], ['get', 'vot_7']]], colores['rojo'],
                    ['>=', ['get', 'vot_6'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_7']]], colores['azul'],
                    ['>=', ['get', 'vot_7'], ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6']]], colores['celeste'],
                    colores['gris-claro']
            ],
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['max', ['get', 'vot_1'], ['get', 'vot_2'], ['get', 'vot_3'], ['get', 'vot_4'], ['get', 'vot_5'], ['get', 'vot_6'], ['get', 'vot_7']],
                0, 0.05,
                40, 1,
            ]
        }
    }, 'regiones-outline');
    map.setLayoutProperty('presidenciales-regiones', 'visibility', 'none');
};

function popPresidenciales(map) {
    map.on('mousemove', 'presidenciales-comunas', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var comuna = e.features[0].properties.NOM_COM;
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Candidato/a</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>GABRIEL BORIC FONT</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_1+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_1+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['azul-marino']+'"></span>JOSE ANTONIO KAST RIST</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_2+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_2+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['violeta']+'"></span>YASNA PROVOSTE CAMPILLAY</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_3+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_3+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>SEBASTIAN SICHEL RAMIREZ</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_4+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_4+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo']+'"></span>EDUARDO ARTES BRICHETTI</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_5+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_5+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['azul']+'"></span>MARCO ENRIQUEZ-OMINAMI GUMUCIO</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_6+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_6+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>FRANCO PARISI FERNANDEZ</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_7+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_7+'%</td></tr>'+
                '</table><h4></h4><table style="margin-left:50px;border-collapse:collapse">'+
                '<tr><td></span>Válidamente Emitidos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_val+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_val+'%</td></tr>'+
                '<tr><td></span>Votos Nulos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_nul+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_nul+'%</td></tr>'+
                '<tr><td></span>Votos Blancos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_blc+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_blc+'%</td></tr>'+
                '<tr><td></span>Total Votación</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_tot+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_tot+'%</td></tr>'+
                '</table>'
                )
            .addTo(map);
    });
    map.on('mouseleave', 'presidenciales-comunas', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'presidenciales-distritos', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Candidato/a</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>GABRIEL BORIC FONT</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_1+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_1+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['azul-marino']+'"></span>JOSE ANTONIO KAST RIST</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_2+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_2+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['violeta']+'"></span>YASNA PROVOSTE CAMPILLAY</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_3+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_3+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>SEBASTIAN SICHEL RAMIREZ</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_4+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_4+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo']+'"></span>EDUARDO ARTES BRICHETTI</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_5+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_5+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['azul']+'"></span>MARCO ENRIQUEZ-OMINAMI GUMUCIO</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_6+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_6+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>FRANCO PARISI FERNANDEZ</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_7+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_7+'%</td></tr>'+
                '</table><h4></h4><table style="margin-left:50px;border-collapse:collapse">'+
                '<tr><td></span>Válidamente Emitidos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_val+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_val+'%</td></tr>'+
                '<tr><td></span>Votos Nulos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_nul+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_nul+'%</td></tr>'+
                '<tr><td></span>Votos Blancos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_blc+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_blc+'%</td></tr>'+
                '<tr><td></span>Total Votación</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_tot+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_tot+'%</td></tr>'+
                '</table>'
                )
            .addTo(map);
    });
    map.on('mouseleave', 'presidenciales-distritos', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'presidenciales-regiones', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var region = e.features[0].properties.REGION;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Candidato/a</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>GABRIEL BORIC FONT</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_1+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_1+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['azººul-marino']+'"></span>JOSE ANTONIO KAST RIST</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_2+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_2+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['violeta']+'"></span>YASNA PROVOSTE CAMPILLAY</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_3+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_3+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>SEBASTIAN SICHEL RAMIREZ</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_4+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_4+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo']+'"></span>EDUARDO ARTES BRICHETTI</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_5+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_5+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['azul']+'"></span>MARCO ENRIQUEZ-OMINAMI GUMUCIO</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_6+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_6+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>FRANCO PARISI FERNANDEZ</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_7+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_7+'%</td></tr>'+
                '</table><h4></h4><table style="margin-left:50px;border-collapse:collapse">'+
                '<tr><td></span>Válidamente Emitidos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_val+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_val+'%</td></tr>'+
                '<tr><td></span>Votos Nulos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_nul+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_nul+'%</td></tr>'+
                '<tr><td></span>Votos Blancos</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_blc+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_blc+'%</td></tr>'+
                '<tr><td></span>Total Votación</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.vot_tot+'</td><td style="text-align:right;padding-left:20px">'+e.features[0].properties.pct_tot+'%</td></tr>'+
                '</table>'
                )
            .addTo(map);
    });
    map.on('mouseleave', 'presidenciales-regiones', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
};