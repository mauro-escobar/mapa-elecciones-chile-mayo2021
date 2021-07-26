function addSourcePrimarias(map) {
    map.addSource('primarias-comunas-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.9nfqsw25',
        }
    );
    map.addSource('primarias-distritos-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.7e6dz0yz',
        }
    );
    map.addSource('primarias-regiones-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.9p2oz59w',
        }
    );
    map.addSource('primarias-exterior-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.d19ihwzl',
        }
    );
    map.addSource('primarias-comunas-center-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.4ghce6st',
        }
    );
    map.addSource('primarias-distritos-center-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.4kvbsu4e',
        }
    );
    map.addSource('primarias-regiones-center-data',
        {
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.8syd07yg',
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
            'fill-color': colores['marron'],
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
    map.addLayer({
        'id': 'participacion-comunas-center',
        'source': 'primarias-comunas-center-data',
        'source-layer': 'primarias2021-comunas-center-81eb9z',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': colores['marron'],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['get', 'vot_tot'], 0.55]],
            'circle-stroke-color': colores['marron'],
            'circle-stroke-width': 0.5
        },
    }, 'comunas-outline');
    map.setLayoutProperty('participacion-comunas-center', 'visibility', 'none');
    map.addLayer({
        'id': 'participacion-distritos',
        'type': 'fill',
        'source': 'primarias-distritos-data',
        'source-layer': 'primarias2021-distritos-2o8kqn',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': colores['marron'],
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['get', 'partic'],
                0, 0.05,
                60, 1,
            ]
        }
    }, 'regiones-outline');
    map.setLayoutProperty('participacion-distritos', 'visibility', 'none'); 
    map.addLayer({
        'id': 'participacion-distritos-center',
        'source': 'primarias-distritos-center-data',
        'source-layer': 'primarias2021-distritos-cente-3mtszt',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': colores['marron'],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['get', 'vot_tot'], 0.55]],
            'circle-stroke-color': colores['marron'],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('participacion-distritos-center', 'visibility', 'none');
    map.addLayer({
        'id': 'participacion-regiones',
        'type': 'fill',
        'source': 'primarias-regiones-data',
        'source-layer': 'primarias2021-regiones-2642ju',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': colores['marron'],
            'fill-opacity': [
                'interpolate',
                ['linear'],
                ['get', 'partic'],
                0, 0.05,
                60, 1,
            ]
        }
    }, 'regiones-outline');
    map.setLayoutProperty('participacion-regiones', 'visibility', 'none'); 
    map.addLayer({
        'id': 'participacion-regiones-center',
        'source': 'primarias-regiones-center-data',
        'source-layer': 'primarias2021-regiones-center-b969ci',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': colores['marron'],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['get', 'vot_tot'], 0.55]],
            'circle-stroke-color': colores['marron'],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('participacion-regiones-center', 'visibility', 'none');
    map.addLayer({
        'id': 'participacion-exterior',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint' : {
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'partic'],
                0, '#ffffff',
                60, colores['marron'],
            ],
            'circle-radius': [
                'interpolate',
                ['linear'], ['zoom'],
                6, 6,
                10, 15
            ],
            'circle-stroke-color': colores['gris'],
            'circle-stroke-width': 0.5
        }
    });
    map.setLayoutProperty('participacion-exterior', 'visibility', 'none'); 
    map.addLayer({
        'id':'exterior-title',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'symbol',
        'filter': ['has', 'title'],
        'layout' : {
            'text-field': ['get', 'title'],
            'text-size': 12,
            'text-rotate': 90-bearing
        }
    });
    map.addLayer({
        'id': 'participacion-exterior-center',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': colores['marron'],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['get', 'vot_tot'], 0.55]],
            'circle-stroke-color': colores['marron'],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('participacion-exterior-center', 'visibility', 'none');
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
    map.addLayer({
        'id': 'comparacion-comunas-center',
        'source': 'primarias-comunas-center-data',
        'source-layer': 'primarias2021-comunas-center-81eb9z',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_AD'], ['get', 'vot_CV']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-stroke-opacity': 1,
            'circle-stroke-width': 0.5
        },
    }, 'comunas-outline');
    map.setLayoutProperty('comparacion-comunas-center', 'visibility', 'none');
    map.addLayer({
        'id': 'comparacion-distritos',
        'type': 'fill',
        'source': 'primarias-distritos-data',
        'source-layer': 'primarias2021-distritos-2o8kqn',
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
    map.setLayoutProperty('comparacion-distritos', 'visibility', 'none');
    map.addLayer({
        'id': 'comparacion-distritos-center',
        'source': 'primarias-distritos-center-data',
        'source-layer': 'primarias2021-distritos-cente-3mtszt',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_AD'], ['get', 'vot_CV']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-stroke-opacity': 1,
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('comparacion-distritos-center', 'visibility', 'none');
    map.addLayer({
        'id': 'comparacion-regiones',
        'type': 'fill',
        'source': 'primarias-regiones-data',
        'source-layer': 'primarias2021-regiones-2642ju',
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
    map.setLayoutProperty('comparacion-regiones', 'visibility', 'none');
    map.addLayer({
        'id': 'comparacion-regiones-center',
        'source': 'primarias-regiones-center-data',
        'source-layer': 'primarias2021-regiones-center-b969ci',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_AD'], ['get', 'vot_CV']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-stroke-opacity': 1,
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('comparacion-regiones-center', 'visibility', 'none');
    map.addLayer({
        'id': 'comparacion-exterior',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['==', ['+', ['get', 'vot_AD'], ['get', 'vot_CV']], 0], colores['blanco'],
                    [
                        'interpolate',
                        ['linear'],
                        ['get', 'pct_AD'],
                        10, colores['tab:blue'],
                        50, colores['blanco'],
                        90, colores['tab:red']
                    ]
            ],
            'circle-opacity': 0.9,
            'circle-radius': [
                'interpolate',
                ['linear'], ['zoom'],
                6, 6,
                10, 15
            ],
            'circle-stroke-color': colores['gris'],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('comparacion-exterior', 'visibility', 'none');
    map.addLayer({
        'id': 'comparacion-exterior-center',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_AD'], ['get', 'vot_CV']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:blue'],
                    ['>', ['get', 'pct_AD'], ['get', 'pct_CV']], colores['tab:red'],
                    colores['blanco']
            ],
            'circle-stroke-opacity': 1,
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('comparacion-exterior-center', 'visibility', 'none');
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
    map.addLayer({
        'id': 'chile-vamos-comunas-center',
        'source': 'primarias-comunas-center-data',
        'source-layer': 'primarias2021-comunas-center-81eb9z',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.2, ['^', ['abs', ['-', ['get', 'vot_Sichel'], ['get', 'vot_Lavin']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'comunas-outline');
    map.setLayoutProperty('chile-vamos-comunas-center', 'visibility', 'none');
    map.addLayer({
        'id': 'chile-vamos-distritos',
        'type': 'fill',
        'source': 'primarias-distritos-data',
        'source-layer': 'primarias2021-distritos-2o8kqn',
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
                40, 0.05,
                55, 1
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('chile-vamos-distritos', 'visibility', 'none');
    map.addLayer({
        'id': 'chile-vamos-distritos-center',
        'source': 'primarias-distritos-center-data',
        'source-layer': 'primarias2021-distritos-cente-3mtszt',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_Sichel'], ['get', 'vot_Lavin']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('chile-vamos-distritos-center', 'visibility', 'none');
    map.addLayer({
        'id': 'chile-vamos-regiones',
        'type': 'fill',
        'source': 'primarias-regiones-data',
        'source-layer': 'primarias2021-regiones-2642ju',
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
                40, 0.05,
                55, 1
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('chile-vamos-regiones', 'visibility', 'none');
    map.addLayer({
        'id': 'chile-vamos-regiones-center',
        'source': 'primarias-regiones-center-data',
        'source-layer': 'primarias2021-regiones-center-b969ci',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_Sichel'], ['get', 'vot_Lavin']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('chile-vamos-regiones-center', 'visibility', 'none');
    map.addLayer({
        'id': 'chile-vamos-exterior',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint' : {
            'circle-color': [
                'case',
                    ['==', ['+', ['get', 'vot_Sichel'], ['get', 'vot_Lavin'], ['get', 'vot_Briones'], ['get', 'vot_Desbordes']], 0], colores['blanco'],
                    ['>=', ['get', 'vot_Sichel'], ['max', ['get', 'vot_Lavin'], ['get', 'vot_Briones'], ['get', 'vot_Desbordes']]], 
                        [
                            'interpolate',
                            ['linear'],
                            ['get', 'pct_Sichel'],
                            20, colores['blanco'],
                            55, colores['amarillo']
                        ],
                    ['>=', ['get', 'vot_Briones'], ['max', ['get', 'vot_Lavin'], ['get', 'vot_Sichel'], ['get', 'vot_Desbordes']]], 
                        [
                            'interpolate',
                            ['linear'],
                            ['get', 'pct_Briones'],
                            20, colores['blanco'],
                            55, '#86BC25'
                        ],
                    ['>=', ['get', 'vot_Lavin'], ['max', ['get', 'vot_Sichel'], ['get', 'vot_Briones'], ['get', 'vot_Desbordes']]], 
                        [
                            'interpolate',
                            ['linear'],
                            ['get', 'pct_Lavin'],
                            20, colores['blanco'],
                            55, colores['azul-marino']
                        ],
                    ['>=', ['get', 'vot_Desbordes'], ['max', ['get', 'vot_Lavin'], ['get', 'vot_Briones'], ['get', 'vot_Sichel']]], 
                        [
                            'interpolate',
                            ['linear'],
                            ['get', 'pct_Desbordes'],
                            20, colores['blanco'],
                            55, colores['celeste']
                        ],
                    colores['gris-claro']
            ],
            'circle-opacity': 1,
            'circle-radius': [
                'interpolate',
                ['linear'], ['zoom'],
                6, 6,
                10, 15
            ],
            'circle-stroke-color': colores['gris'],
            'circle-stroke-width': 0.5
        }
    });
    map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'none'); 
    map.addLayer({
        'id': 'chile-vamos-exterior-center',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.2, ['^', ['abs', ['-', ['get', 'vot_Sichel'], ['get', 'vot_Lavin']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['azul-marino'],
                    ['>', ['get', 'pct_Sichel'], ['get', 'pct_Lavin']], colores['amarillo'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('chile-vamos-exterior-center', 'visibility', 'none');
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
    map.addLayer({
        'id': 'apruebo-dignidad-comunas-center',
        'source': 'primarias-comunas-center-data',
        'source-layer': 'primarias2021-comunas-center-81eb9z',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.2, ['^', ['abs', ['-', ['get', 'vot_Boric'], ['get', 'vot_Jadue']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'comunas-outline');
    map.setLayoutProperty('apruebo-dignidad-comunas-center', 'visibility', 'none');
    map.addLayer({
        'id': 'apruebo-dignidad-distritos',
        'type': 'fill',
        'source': 'primarias-distritos-data',
        'source-layer': 'primarias2021-distritos-2o8kqn',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': [
                'case',
                    ['==', ['+', ['get', 'vot_Boric'], ['get', 'vot_Jadue']], 0], colores['blanco'],
                    [
                        'interpolate',
                        ['linear'],
                        ['get', 'pct_Boric'],
                        30, colores['rojo-oscuro'],
                        50, colores['blanco'],
                        70, colores['verde-agua']
                    ]
            ],
            'fill-opacity': 1
        },
    }, 'regiones-outline');
    map.setLayoutProperty('apruebo-dignidad-distritos', 'visibility', 'none');
    map.addLayer({
        'id': 'apruebo-dignidad-distritos-center',
        'source': 'primarias-distritos-center-data',
        'source-layer': 'primarias2021-distritos-cente-3mtszt',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_Boric'], ['get', 'vot_Jadue']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('apruebo-dignidad-distritos-center', 'visibility', 'none');
    map.addLayer({
        'id': 'apruebo-dignidad-regiones',
        'type': 'fill',
        'source': 'primarias-regiones-data',
        'source-layer': 'primarias2021-regiones-2642ju',
        'filter': ['has', 'partic'],
        'paint': {
            'fill-color': [
                'case',
                    ['==', ['+', ['get', 'vot_Boric'], ['get', 'vot_Jadue']], 0], colores['blanco'],
                    [
                        'interpolate',
                        ['linear'],
                        ['get', 'pct_Boric'],
                        30, colores['rojo-oscuro'],
                        50, colores['blanco'],
                        70, colores['verde-agua']
                    ]
            ],
            'fill-opacity': 1
        },
    }, 'regiones-outline');
    map.setLayoutProperty('apruebo-dignidad-regiones', 'visibility', 'none');
    map.addLayer({
        'id': 'apruebo-dignidad-regiones-center',
        'source': 'primarias-regiones-center-data',
        'source-layer': 'primarias2021-regiones-center-b969ci',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.1, ['^', ['abs', ['-', ['get', 'vot_Boric'], ['get', 'vot_Jadue']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('apruebo-dignidad-regiones-center', 'visibility', 'none');
    map.addLayer({
        'id': 'apruebo-dignidad-exterior',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint' : {
            'circle-color': [
                'case',
                    ['==', ['+', ['get', 'vot_Boric'], ['get', 'vot_Jadue']], 0], colores['blanco'],
                    [
                        'interpolate',
                        ['linear'],
                        ['get', 'pct_Boric'],
                        30, colores['rojo-oscuro'],
                        50, colores['blanco'],
                        70, colores['verde-agua']
                    ]
            ],
            'circle-opacity': 1,
            'circle-radius': [
                'interpolate',
                ['linear'], ['zoom'],
                6, 6,
                10, 15
            ],
            'circle-stroke-color': colores['gris'],
            'circle-stroke-width': 0.5
        }
    });
    map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'none'); 
    map.addLayer({
        'id': 'apruebo-dignidad-exterior-center',
        'source': 'primarias-exterior-data',
        'source-layer': 'primarias2021-exterior-3nyvho',
        'type': 'circle',
        'filter': ['has', 'partic'],
        'paint': {
            'circle-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-opacity': 0.35,
            'circle-stroke-opacity': 1,
            'circle-radius': ['*', 0.2, ['^', ['abs', ['-', ['get', 'vot_Boric'], ['get', 'vot_Jadue']]], 0.55]],
            'circle-stroke-color': [
                'case',
                    ['<', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['rojo-oscuro'],
                    ['>', ['get', 'pct_Boric'], ['get', 'pct_Jadue']], colores['verde-agua'],
                    colores['blanco']
            ],
            'circle-stroke-width': 0.5
        },
    }, 'regiones-outline');
    map.setLayoutProperty('apruebo-dignidad-exterior-center', 'visibility', 'none');
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
    map.on('mousemove', 'participacion-comunas-center', function (e) {
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
    map.on('mouseleave', 'participacion-comunas-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'participacion-distritos', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var part = e.features[0].properties.partic;
        var totel = e.features[0].properties.tot_el;
        var vot = e.features[0].properties.vot_tot;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
                '<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
                '<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
                '<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'participacion-distritos', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'participacion-distritos-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var part = e.features[0].properties.partic;
        var totel = e.features[0].properties.tot_el;
        var vot = e.features[0].properties.vot_tot;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
                '<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
                '<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
                '<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'participacion-distritos-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'participacion-regiones', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var region = e.features[0].properties.REGION;
        var part = e.features[0].properties.partic;
        var totel = e.features[0].properties.tot_el;
        var vot = e.features[0].properties.vot_tot;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
                '<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
                '<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
                '<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'participacion-regiones', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'participacion-regiones-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var region = e.features[0].properties.REGION;
        var part = e.features[0].properties.partic;
        var totel = e.features[0].properties.tot_el;
        var vot = e.features[0].properties.vot_tot;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
                '<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
                '<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
                '<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'participacion-regiones-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'participacion-exterior', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
        var part = e.features[0].properties.partic;
        var totel = e.features[0].properties.tot_el;
        var vot = e.features[0].properties.vot_tot;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
                '<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
                '<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
                '<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'participacion-exterior', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'participacion-exterior-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
        var part = e.features[0].properties.partic;
        var totel = e.features[0].properties.tot_el;
        var vot = e.features[0].properties.vot_tot;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
                '<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
                '<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
                '<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'participacion-exterior-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
};

function popComparacion(map) {
    /*map.on('click', 'comunas', function (e) {
        console.log(e.lngLat.wrap());
    });*/

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
    map.on('mousemove', 'comparacion-comunas-center', function (e) {
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
    map.on('mouseleave', 'comparacion-comunas-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'comparacion-distritos', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var vot_CV = e.features[0].properties.vot_CV;
        var vot_AD = e.features[0].properties.vot_AD;
        var pct_CV = e.features[0].properties.pct_CV;
        var pct_AD = e.features[0].properties.pct_AD;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
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
    map.on('mouseleave', 'comparacion-distritos', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'comparacion-distritos-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var vot_CV = e.features[0].properties.vot_CV;
        var vot_AD = e.features[0].properties.vot_AD;
        var pct_CV = e.features[0].properties.pct_CV;
        var pct_AD = e.features[0].properties.pct_AD;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
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
    map.on('mouseleave', 'comparacion-distritos-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'comparacion-regiones', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var region = e.features[0].properties.REGION;
        var vot_CV = e.features[0].properties.vot_CV;
        var vot_AD = e.features[0].properties.vot_AD;
        var pct_CV = e.features[0].properties.pct_CV;
        var pct_AD = e.features[0].properties.pct_AD;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
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
    map.on('mouseleave', 'comparacion-regiones', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'comparacion-regiones-center', function (e) {
        console.log(e.features[0].id);
        map.getCanvas().style.cursor = 'pointer';
        var region = e.features[0].properties.REGION;
        var vot_CV = e.features[0].properties.vot_CV;
        var vot_AD = e.features[0].properties.vot_AD;
        var pct_CV = e.features[0].properties.pct_CV;
        var pct_AD = e.features[0].properties.pct_AD;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
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
    map.on('mouseleave', 'comparacion-regiones-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'comparacion-exterior', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
        var vot_CV = e.features[0].properties.vot_CV;
        var vot_AD = e.features[0].properties.vot_AD;
        var pct_CV = e.features[0].properties.pct_CV;
        var pct_AD = e.features[0].properties.pct_AD;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
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
    map.on('mouseleave', 'comparacion-exterior', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'comparacion-exterior-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
        var vot_CV = e.features[0].properties.vot_CV;
        var vot_AD = e.features[0].properties.vot_AD;
        var pct_CV = e.features[0].properties.pct_CV;
        var pct_AD = e.features[0].properties.pct_AD;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
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
    map.on('mouseleave', 'comparacion-exterior-center', function () {
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
    map.on('mousemove', 'apruebo-dignidad-comunas-center', function (e) {
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
    map.on('mouseleave', 'apruebo-dignidad-comunas-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'apruebo-dignidad-distritos', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var vot_Boric = e.features[0].properties.vot_Boric;
        var vot_Jadue = e.features[0].properties.vot_Jadue;
        var pct_Boric = e.features[0].properties.pct_Boric;
        var pct_Jadue = e.features[0].properties.pct_Jadue;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">'+vot_Boric+'</td><td style="text-align:right;padding-left:20px">'+pct_Boric+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">'+vot_Jadue+'</td><td style="text-align:right;padding-left:20px">'+pct_Jadue+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'apruebo-dignidad-distritos', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });

    map.on('mousemove', 'apruebo-dignidad-distritos-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var distrito = e.features[0].properties.DISTRITO;
        var region = e.features[0].properties.REGION;
        var vot_Boric = e.features[0].properties.vot_Boric;
        var vot_Jadue = e.features[0].properties.vot_Jadue;
        var pct_Boric = e.features[0].properties.pct_Boric;
        var pct_Jadue = e.features[0].properties.pct_Jadue;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">'+vot_Boric+'</td><td style="text-align:right;padding-left:20px">'+pct_Boric+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">'+vot_Jadue+'</td><td style="text-align:right;padding-left:20px">'+pct_Jadue+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'apruebo-dignidad-distritos-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'apruebo-dignidad-regiones', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var region = e.features[0].properties.REGION;
        var vot_Boric = e.features[0].properties.vot_Boric;
        var vot_Jadue = e.features[0].properties.vot_Jadue;
        var pct_Boric = e.features[0].properties.pct_Boric;
        var pct_Jadue = e.features[0].properties.pct_Jadue;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">'+vot_Boric+'</td><td style="text-align:right;padding-left:20px">'+pct_Boric+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">'+vot_Jadue+'</td><td style="text-align:right;padding-left:20px">'+pct_Jadue+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'apruebo-dignidad-regiones', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'apruebo-dignidad-regiones-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var region = e.features[0].properties.REGION;
        var vot_Boric = e.features[0].properties.vot_Boric;
        var vot_Jadue = e.features[0].properties.vot_Jadue;
        var pct_Boric = e.features[0].properties.pct_Boric;
        var pct_Jadue = e.features[0].properties.pct_Jadue;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">'+vot_Boric+'</td><td style="text-align:right;padding-left:20px">'+pct_Boric+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">'+vot_Jadue+'</td><td style="text-align:right;padding-left:20px">'+pct_Jadue+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'apruebo-dignidad-regiones-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'apruebo-dignidad-exterior', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
        var vot_Boric = e.features[0].properties.vot_Boric;
        var vot_Jadue = e.features[0].properties.vot_Jadue;
        var pct_Boric = e.features[0].properties.pct_Boric;
        var pct_Jadue = e.features[0].properties.pct_Jadue;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">'+vot_Boric+'</td><td style="text-align:right;padding-left:20px">'+pct_Boric+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">'+vot_Jadue+'</td><td style="text-align:right;padding-left:20px">'+pct_Jadue+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'apruebo-dignidad-exterior', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'apruebo-dignidad-exterior-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
        var vot_Boric = e.features[0].properties.vot_Boric;
        var vot_Jadue = e.features[0].properties.vot_Jadue;
        var pct_Boric = e.features[0].properties.pct_Boric;
        var pct_Jadue = e.features[0].properties.pct_Jadue;
        popup.setLngLat(e.lngLat)
            .setHTML(
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
                '<table style="border-collapse:collapse">'+
                '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">'+vot_Boric+'</td><td style="text-align:right;padding-left:20px">'+pct_Boric+'%</td></tr>'+
                '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">'+vot_Jadue+'</td><td style="text-align:right;padding-left:20px">'+pct_Jadue+'%</td></tr>'+
                '</table>'            
                )
            .addTo(map);
    });
    map.on('mouseleave', 'apruebo-dignidad-exterior-center', function () {
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
    map.on('mousemove', 'chile-vamos-comunas-center', function (e) {
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
    map.on('mouseleave', 'chile-vamos-comunas-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'chile-vamos-distritos', function (e) {
        map.getCanvas().style.cursor = 'pointer';
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
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
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
    map.on('mouseleave', 'chile-vamos-distritos', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'chile-vamos-distritos-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
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
                '<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
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
    map.on('mouseleave', 'chile-vamos-distritos-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'chile-vamos-regiones', function (e) {
        map.getCanvas().style.cursor = 'pointer';
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
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
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
    map.on('mouseleave', 'chile-vamos-regiones', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'chile-vamos-regiones-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
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
                '<h4><span style="font-weight:bold">'+region+'</span></h4>'+
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
    map.on('mouseleave', 'chile-vamos-regiones-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'chile-vamos-exterior', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
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
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
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
    map.on('mouseleave', 'chile-vamos-exterior', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    map.on('mousemove', 'chile-vamos-exterior-center', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        var pais = e.features[0].properties.Pais;
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
                '<h4><span style="font-weight:bold">'+pais+'</span></h4>'+
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
    map.on('mouseleave', 'chile-vamos-exterior-center', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
};