mapboxgl.accessToken = 'pk.eyJ1IjoibWF1cm8tZXNjb2JhciIsImEiOiJja3A1aGxiajIwZ3lrMnRxdHN1M2NhcXpiIn0.mXzXiupFZlOThQTwmpK20Q';

var colores = {'azul': '#3b83bd', 'azul-marino': '#00008B', 'violeta': '#985698', 'marron': '#A0522D', 'verde-agua': '#00B771',
		   	   'verde': '#008000', 'rojo': '#ff0000', 'rojo-oscuro': '#CC0000', 'amarillo': '#f9d71c', 'naranja': '#ffa500',
		   	   'gris': '#797979', 'gris-claro': '#d3d3d3', 'blanco': '#ffffff', 'suave': '#f8ca92', 'negro': '#000000',
		   	   'rosado': '#e6007e'}

function capitalize(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
}


var coloresAlc = {
	'CHILE VAMOS': colores['azul'], 
	'UNIDAD CONSTITUYENTE': colores['violeta'],
	'UNIDAD POR EL APRUEBO': colores['violeta'],
	'UNIDOS POR LA DIGNIDAD': colores['marron'],
	'FRENTE AMPLIO': colores['verde-agua'], 
	'ECOLOGISTAS E INDEPENDIENTES': colores['verde'], 
	'CHILE DIGNO VERDE Y SOBERANO': colores['rojo'],
	'DIGNIDAD AHORA': colores['amarillo'],
	'CANDIDATURA INDEPENDIENTE': colores['gris']
};

var coloresConc = {
	'CHILE VAMOS - PRI E IND': colores['azul'], 
	'CHILE VAMOS EVOPOLI - IND': colores['azul'], 
	'CHILE VAMOS RN - IND': colores['azul'], 
	'CHILE VAMOS UDI - IND': colores['azul'], 
	'REPUBLICANOS': colores['azul-marino'], 
	'CIUDADANOS IND': colores['azul-marino'], 
	'UNIDAD POR EL APRUEBO': colores['violeta'], 
	'RADICALES E IND': colores['violeta'],  
	'UNIDOS POR LA DIGNIDAD': colores['marron'], 
	'FRENTE AMPLIO': colores['verde-agua'], 
	'ECOLOGISTAS E IND': colores['verde'], 
	'CHILE DIGNO VERDE Y SOBERANO': colores['rojo'], 
	'UNION PATRIOTICA': colores['rojo-oscuro'], 
	'DIGNIDAD AHORA': colores['amarillo'], 
	'PARTIDO DE TRABAJADORES REVOLUCIONARIOS': colores['naranja'], 
	'CANDIDATURA INDEPENDIENTE': colores['gris']
};          

var coloresConcL = {
	'Chile Vamos': colores['azul'], 
	'Republicanos y Ciud.': colores['azul-marino'], 
	'Unidad por el Apruebo': colores['violeta'], 
	'Unidos por la Dignidad': colores['marron'], 
	'Chile Digno Verde y Sob.': colores['rojo'], 
	'Frente Amplio': colores['verde-agua'], 
	'Ecologistas e Ind.': colores['verde'], 
	'Unión Patriótica': colores['rojo-oscuro'], 
	'Dignidad Ahora': colores['amarillo'], 
	'P. de Trabajadores Revol.': colores['naranja'], 
	'Candidaturas Ind.': colores['gris']
};    

var shortNames = {
	'Chile Vamos': 'CV', 
	'Republicanos y Ciud.': 'RC',
	'Unidad por el Apruebo': 'UA', 
	'Unidos por la Dignidad': 'UD', 
	'Frente Amplio': 'FA', 
	'Ecologistas e Ind.': 'EC',
	'Chile Digno Verde y Sob.': 'CD',
	'Unión Patriótica': 'UP',
	'Dignidad Ahora': 'DA', 
	'P. de Trabajadores Revol.': 'TR', 
	'Candidaturas Ind.': 'CI'
};

let listasSeleccionadasAlc = [];
let listasSeleccionadasConc = [];

function paintConcejales() {
	var mas5 = ['+'];
	listasSeleccionadasAlc.forEach(function(elemento,indice,array){
		mas5.push(['case', ['==', ['get','Alc_Lis'], elemento], 1, 0])
	});
	for (var i = 1; i <= 5; i++) {
		listasSeleccionadasConc.forEach(function(elemento,indice,array){
			mas5.push(['case', ['==', ['get','Conc0'+i+'_Lis'], elemento], 1, 0])
		});
	}
	var mas6 = ['+'];
	listasSeleccionadasAlc.forEach(function(elemento,indice,array){
		mas6.push(['case', ['==', ['get','Alc_Lis'], elemento], 1, 0])
	});
	for (var i = 1; i <= 6; i++) {
		listasSeleccionadasConc.forEach(function(elemento,indice,array){
			mas6.push(['case', ['==', ['get','Conc0'+i+'_Lis'], elemento], 1, 0])
		});
	}
	var mas7 = ['+'];
	listasSeleccionadasAlc.forEach(function(elemento,indice,array){
		mas7.push(['case', ['==', ['get','Alc_Lis'], elemento], 1, 0])
	});
	for (var i = 1; i <= 7; i++) {
		listasSeleccionadasConc.forEach(function(elemento,indice,array){
			mas7.push(['case', ['==', ['get','Conc0'+i+'_Lis'], elemento], 1, 0])
		});
	}
	var mas8 = ['+'];
	listasSeleccionadasAlc.forEach(function(elemento,indice,array){
		mas8.push(['case', ['==', ['get','Alc_Lis'], elemento], 1, 0])
	});
	for (var i = 1; i <= 8; i++) {
		listasSeleccionadasConc.forEach(function(elemento,indice,array){
			mas8.push(['case', ['==', ['get','Conc0'+i+'_Lis'], elemento], 1, 0])
		});
	}
	var mas10 = ['+'];
	listasSeleccionadasAlc.forEach(function(elemento,indice,array){
		mas10.push(['case', ['==', ['get','Alc_Lis'], elemento], 1, 0])
	});
	for (var i = 1; i <= 9; i++) {
		listasSeleccionadasConc.forEach(function(elemento,indice,array){
			mas10.push(['case', ['==', ['get','Conc0'+i+'_Lis'], elemento], 1, 0])
		});
	}
	listasSeleccionadasConc.forEach(function(elemento,indice,array){
		mas10.push(['case', ['==', ['get','Conc10_Lis'], elemento], 1, 0])
	});
	
	//console.log(mas6)

	map.setPaintProperty('concejales', 'fill-color', [
			'case',
			['==', ['get', 'NConc'], 5], 
				[   'interpolate', ['linear'],
					mas5,
					0, colores['rojo'],
					3, colores['blanco'],
					6, colores['verde']
				],
			['==', ['get', 'NConc'], 6], 
				[   'interpolate', ['linear'],
					mas6,
					0, colores['rojo'],
					3.5, colores['blanco'],
					7, colores['verde']
				],
			['==', ['get', 'NConc'], 7], 
				[   'interpolate', ['linear'],
					mas7,
					0, colores['rojo'],
					4, colores['blanco'],
					8, colores['verde']
				],
			['==', ['get', 'NConc'], 8], 
				[   'interpolate', ['linear'],
					mas8,
					0, colores['rojo'],
					4.5, colores['blanco'],
					9, colores['verde']
				],
			['==', ['get', 'NConc'], 10], 
				[   'interpolate', ['linear'],
					mas10,
					0, colores['rojo'],
					5.5, colores['blanco'],
					11, colores['verde']
				],
			colores['suave']			
	]);


	var count_data = map.querySourceFeatures('comunas-data');
	var count_true = {};
	var count_total = {};
	var ret = {'0': 0, '1/11':0, '1/9':0, '1/7':0, '2/11':0, '2/9':0, '3/11':0, '2/7':0, '3/9':0, 
			   '4/11':0, '3/7':0, '4/9':0, '5/11':0, '6/11':0, '5/9':0, '4/7':0, '7/11':0, '6/9':0, 
			   '5/7':0, '8/11':0, '7/9':0, '9/11':0, '6/7':0, '8/9':0, '10/11':0, '1':0};
	for (var i = count_data.length - 1; i >= 0; i--) {
		var nconc = count_data[i].properties['NConc'];
		var codigo = count_data[i].properties['CODIGO']; 
		count_total[codigo] = nconc;
		count_true[codigo] = 0;
		for (var j = 0; j <= nconc; j++) {
			var conc;
			if (j<10) {
				conc = count_data[i].properties['Conc0'+j+'_Lis'];
			} else {
				conc = count_data[i].properties['Conc'+j+'_Lis'];
			}
			if (listasSeleccionadasConc.indexOf(conc)>=0) {
				count_true[codigo] += 1;
			}
		}
		if (listasSeleccionadasAlc.indexOf(count_data[i].properties['Alc_Lis'])>=0) {
			count_true[codigo] += 1;
		}
	}
	//console.log(count_data.length);
	//console.log(Object.keys(count_true).length);	
	for (codigo in count_true) {
		if (count_true[codigo]==0) {
			ret['0'] += 1;
		} else if (count_true[codigo]==(count_total[codigo]+1)) {
			ret['1'] += 1;
		} else {
			ret[count_true[codigo]+'/'+(count_total[codigo]+1)] += 1;
		}
	}
	//console.log(ret);
}

bearing = 90;
center = [-71.5,-27];
if (screen.width<=992) {
    bearing = 0;
    center = [-70.66,-33.45];
}

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mauro-escobar/ckp5cjbcc1xgf18pvbfshxrze',
    zoom: 6,
    minZoom: 6,
    center: center,
    bearing: bearing,
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function(){
	var layers = map.getStyle().layers;
    var firstSymbolId;
    map.addSource('diputados-data',
    	{
            //'type': 'geojson',
            //'data': './diputados2017-11.geojson'
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.2rvzbjjd'
        }
    );
    map.addSource('senadores-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.3iaz61s3',
        }
    );
    map.addLayer({
    	'id': 'dip-markers',
		'source': 'diputados-data',
        'source-layer': 'diputados2017-11-1coabk',
		'type': 'circle',
		'filter': ['has', 'LISTA'],
		'paint' : {
			'circle-color': [
				'match',
				['get', 'LISTA'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Convergencia Progresista', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['rosado'],
				'Nuevo Trato', colores['amarillo'],
				'Chile Digno', colores['rojo'],
				'Acción Republicana', colores['azul-marino'],
				colores['gris']
			],
			'circle-radius': [
				'interpolate',
				['linear'], ['zoom'],
				6, 6,
				10, 15
			]
		}
    });
    map.addLayer({
    	'id':'dip-markers-lines',
		'source': 'diputados-data',
        'source-layer': 'diputados2017-11-1coabk',
		'type': 'line',
		'filter': ['has', 'UNION'],
		'paint' : {
			'line-color': colores['negro'],
			'line-width': 1
		}
    }, 'dip-markers');
    map.addLayer({
    	'id': 'sen-markers',
		'source': 'senadores-data',
        'source-layer': 'senadores2017-11-7fgmkg',
		'type': 'circle',
		'filter': ['has', 'LISTA'],
		'paint' : {
			'circle-color': [
				'match',
				['get', 'LISTA'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Convergencia Democrática', colores['marron'],
				'Progresistas', colores['rosado'],
				colores['gris']
			],
			'circle-radius': [
				'interpolate',
				['linear'], ['zoom'],
				6, 10,
				10, 20
			]
		}
    }, 'dip-markers-lines');
    map.setLayoutProperty('sen-markers', 'visibility', 'none');	
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            layers[i].beforeId = 'sen-markers';
            break;
        }
    }
    map.addSource('comunas-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.63q1jegu',
        }
    );
    map.addSource('gobernadores-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.2jgcxezz',
        }
    );
    map.addLayer({
    	'id': 'nombre-comunas',
    	'type': 'symbol',
    	'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
    	'layout': {
    		'text-field': ['get', 'NOM_COM'],
    		'text-font': ['Open Sans Bold','Arial Unicode MS Bold'],
    		'text-size': 11,
    		'text-letter-spacing': 0.05,
    		//'text-offset': [0, 1.5]

    	},
    	'paint': {
    		'text-color': '#202',
    		'text-halo-color': '#fff',
    		'text-halo-width': 1,
    		'text-halo-blur': 1,
    		'text-opacity': 0.7,
    	},
        'minzoom': 7,
    }, firstSymbolId)
    map.addLayer({
    	'id': 'nombre-regiones',
    	'type': 'symbol',
    	'source': 'gobernadores-data',
        'source-layer': 'gobernadores2021-05-0mh1ju',
    	'layout': {
    		'text-field': ['get', 'REGION'],
    		'text-font': ['Open Sans Bold','Arial Unicode MS Bold'],
    		'text-size': 11,
    		'text-letter-spacing': 0.05,
    		//'text-offset': [0, 1.5]
    		'symbol-avoid-edges': true,

    	},
    	'paint': {
    		'text-color': '#202',
    		'text-halo-color': '#fff',
    		'text-halo-width': 1,
    		'text-halo-blur': 1,
    		'text-opacity': 0.7,
    	},
    }, 'nombre-comunas')
    map.setLayoutProperty('nombre-regiones', 'visibility', 'none');	
    map.addLayer({
    	'id': 'zona-indeterminada',
    	'type': 'fill',
    	'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['!', ['has', 'Part_TD']],
        'paint': {
        	'fill-color': colores['blanco'],
        	'fill-outline-color': '#ffffff',
        	'fill-opacity': 0.5,
        },
    }, 'nombre-regiones');
    map.addLayer({
        'id': 'regiones-outline',
        'type': 'line',
        'source': 'gobernadores-data',
        'source-layer': 'gobernadores2021-05-0mh1ju',
        'filter': ['!', ['==', ['get', 'REGION'], 'Zona sin demarcar']],
        'paint': {
            'line-color': colores['blanco'],
            'line-opacity': 1,
            'line-width': 0.8,
            //'fill-opacity': 0.5
        },
    }, 'zona-indeterminada');
    map.setLayoutProperty('regiones-outline', 'visibility', 'none');	
    map.addLayer({
        'id': 'comunas-outline',
        'type': 'line',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'line-color': colores['blanco'],
            'line-opacity': 1,
            'line-width': 0.3,
            //'fill-opacity': 0.5
        },
    }, 'zona-indeterminada');
    map.setLayoutProperty('comunas-outline', 'visibility', 'none');	
    map.addLayer({
        'id': 'comunas-outline-zoom',
        'type': 'line',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'line-color': colores['blanco'],
            'line-opacity': 1,
            'line-width': 0.3,
            //'fill-opacity': 0.5
        },
        'minzoom': 6.2
    }, 'zona-indeterminada');
    map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'none');

    map.addLayer({
        'id': 'distritos-outline',
        'type': 'line',
        'source': 'diputados-data',
        'source-layer': 'diputados2017-11-1coabk',
        'filter': ['has', 'DISTRITO'],
        'paint': {
            'line-color': colores['blanco'],
            'line-opacity': 1,
            'line-width': 0.3,
            //'fill-opacity': 0.5
        },
    }, 'zona-indeterminada');
    map.setLayoutProperty('distritos-outline', 'visibility', 'none');

    map.addLayer({
        'id': 'diputados',
        'type': 'fill',
        'source': 'diputados-data',
        'source-layer': 'diputados2017-11-1coabk',
        'filter': ['has', '2017-11_Dip1_Nom'],
        'paint': {
            'fill-color': [
				'match',
				['get', '2017-11_Dip1_Lis'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['naranja'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2017-11_Dip1_PctL'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'distritos-outline');
    map.addLayer({
        'id': 'senadores2017',
        'type': 'fill',
        'source': 'senadores-data',
        'source-layer': 'senadores2017-11-7fgmkg',
        'filter': ['has', '2017-11_Sen1_Nom'],
        'paint': {
            'fill-color': [
				'match',
				['get', '2017-11_Sen1_Lis'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['naranja'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2017-11_Sen1_PctL'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('senadores2017', 'visibility', 'none');
    
    map.addLayer({
        'id': 'senadores2013',
        'type': 'fill',
        'source': 'senadores-data',
        'source-layer': 'senadores2017-11-7fgmkg',
        'filter': ['has', '2013-11_Sen1_Nom'],
        'paint': {
            'fill-color': [
				'match',
				['get', '2013-11_Sen1_Lis'],
				'Alianza', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'Nueva Mayoría', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['naranja'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2013-11_Sen1_PctL'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('senadores2013', 'visibility', 'none');		

    map.addLayer({
        'id': 'concejales',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': colores['suave'],
        },
    }, 'comunas-outline');
    map.setLayoutProperty('concejales', 'visibility', 'none');	

    map.addLayer({
        'id': 'alcaldes',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': [
            	'match', ['get', 'Alc_Lis'],
            	'CHILE VAMOS', colores['azul'],
            	'UNIDAD POR EL APRUEBO', colores['violeta'],
            	'UNIDOS POR LA DIGNIDAD', colores['marron'],
            	'CANDIDATURA INDEPENDIENTE', colores['gris'],
            	'FRENTE AMPLIO', colores['verde-agua'],
            	'CHILE DIGNO VERDE Y SOBERANO', colores['rojo'],
            	'DIGNIDAD AHORA', colores['amarillo'],
            	colores['blanco']
            ],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'Alc_Pct'],
            	0, 0,
            	50, 1,
            ]
        },
    }, 'comunas-outline');
    map.setLayoutProperty('alcaldes', 'visibility', 'none');		


    map.addLayer({
        'id': 'gobernadores-electos',
        'type': 'fill',
        'source': 'gobernadores-data',
        'source-layer': 'gobernadores2021-05-0mh1ju',
        'filter': ['has', '2021-05_Gob_Nom'],
        'paint': {
            'fill-color': [
            	'match', ['get', '2021-05_Gob_Lis'],
            	'CHILE VAMOS', colores['azul'],
            	'UNIDAD CONSTITUYENTE', colores['violeta'],
            	'CANDIDATURA INDEPENDIENTE', colores['gris'],
            	'FRENTE AMPLIO', colores['verde-agua'],
            	'ECOLOGISTAS E INDEPENDIENTES', colores['verde'],
            	colores['gris']
            ],
            'fill-opacity': 1
        },
    }, 'regiones-outline');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'none');	

    /*
    map.loadImage(
    	'images/stripe_violeta_gris.png',
    	function (err, image) {
    		if (err) throw err;
    		map.addImage('stripe-violeta-gris', image);
    		map.addLayer({
    			'id' : 'gobernadores-violeta-gris',
    			'type': 'fill',
    			'source': 'gobernadores-data',
                'source-layer': 'gobernadores2021-05-0mh1ju',
       			'filter': ['all',
       						['!', ['has', '2021-05_Gob_Nom']],
       						['has', '2021-05_Gob2v1_Nom'],
       						['any',
       							['all', ['==', ['get', '2021-05_Gob2v1_Lis'], 'UNIDAD CONSTITUYENTE'],
       									['==', ['get', '2021-05_Gob2v2_Lis'], 'CANDIDATURA INDEPENDIENTE'] ],
       							['all', ['==', ['get', '2021-05_Gob2v2_Lis'], 'UNIDAD CONSTITUYENTE'],
       									['==', ['get', '2021-05_Gob2v1_Lis'], 'CANDIDATURA INDEPENDIENTE'] ],
       						]
        		  		  ],
    			'paint': {
    				'fill-pattern': 'stripe-violeta-gris',
		            'fill-opacity': [
		            	'interpolate',
		            	['linear'],
		            	['get', '2021-05_Gob2v1_Pct'],
		            	0, 0.3,
		            	50, 1,
		            ]
    			}
    		}, 'regiones-outline');
    		map.setLayoutProperty('gobernadores-violeta-gris', 'visibility', 'none');	
    	}
    );
	*/
    mostrarDiputados();
});

var popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false,
	maxWidth: '600px'
});

/*
map.on('click', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	popup.setLngLat(e.lngLat)
		.setHTML(
			e.lngLat
			)
		.addTo(map);
});
map.on('dblclick', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});*/

// Create the popup

map.on('mousemove', 'gobernadores-electos', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('2021-05_Gob_Nom')) {
		var nombre = e.features[0].properties['2021-05_Gob_Nom'];
		var perct = e.features[0].properties['2021-05_Gob_Pct'];
		var partido = e.features[0].properties['2021-05_Gob_Ptd'];
		var lista = e.features[0].properties['2021-05_Gob_Lis'];
		if (sex=='H') var title = 'Goberador electo:';
		else var title = 'Goberandora electa:';
		if (e.features[0].properties.hasOwnProperty('2021-05_Gob2v1_Nom')) {
			if (nombre == e.features[0].properties['2021-05_Gob2v1_Nom']) {
				var perct2 = e.features[0].properties['2021-05_Gob2v1_Pct'];
			} else {
				var perct2 = e.features[0].properties['2021-05_Gob2v2_Pct'];
			}
			popup.setLngLat(e.lngLat)
				.setHTML(
					'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
					'<p>'+title+'<br>  '+lista+' ('+partido+')<br>'+
					'<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
					'<span style="font-weight:bold">'+nombre+'</span><br>'+
					'Porcentaje: '+perct2+'% (1a. vuelta), '+perct+'% (2a. vuelta)</p>'			
					)
				.addTo(map); 
		} else {
			popup.setLngLat(e.lngLat)
				.setHTML(
					'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
					'<p>'+title+'<br>  '+lista+' ('+partido+')<br>'+
					'<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
					'<span style="font-weight:bold">'+nombre+'</span><br>'+
					'Porcentaje: '+perct+'%</p>'			
					)
				.addTo(map); 	
		}
    } else {
		var nombre1 = e.features[0].properties['2021-05_Gob2v1_Nom'];
		var perct1 = e.features[0].properties['2021-05_Gob2v1_Pct'];
		var partido1 = e.features[0].properties['2021-05_Gob2v1_Ptd'];
		var lista1 = e.features[0].properties['2021-05_Gob2v1_Lis'];
		var nombre2 = e.features[0].properties['2021-05_Gob2v2_Nom'];
		var perct2 = e.features[0].properties['2021-05_Gob2v2_Pct'];
		var partido2 = e.features[0].properties['2021-05_Gob2v2_Ptd'];
		var lista2 = e.features[0].properties['2021-05_Gob2v2_Lis'];
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Primera vuelta:<br>'+
				'<table>'+
				'<tr><td colspan="2">'+lista1+' ('+partido1+')</td></tr>'+
				'<tr><td><span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
				'<span>'+nombre+'</span><td>'+
				'<td>'+perct+'%</td></tr>'+
				'</table>'
				)
			.addTo(map);    

    }
});
map.on('mouseleave', 'gobernadores-electos', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

/*
map.on('mousemove', 'gobernadores-violeta-verde-agua', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('2021-05_Gob2v1_Nom')) {
		var nombre1 = e.features[0].properties['2021-05_Gob2v1_Nom'];
		var perct1 = e.features[0].properties['2021-05_Gob2v1_Pct'];
		var partido1 = e.features[0].properties['2021-05_Gob2v1_Ptd'];
		var lista1 = e.features[0].properties['2021-05_Gob2v1_Lis'];
		var nombre2 = e.features[0].properties['2021-05_Gob2v2_Nom'];
		var perct2 = e.features[0].properties['2021-05_Gob2v2_Pct'];
		var partido2 = e.features[0].properties['2021-05_Gob2v2_Ptd'];
		var lista2 = e.features[0].properties['2021-05_Gob2v2_Lis'];
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Primera vuelta:<br>'+
				'<table>'+
				'<tr><td colspan="2">'+lista1+' ('+partido1+')</td></tr>'+
				'<tr><td><span class="legend-key" style="background-color:'+coloresAlc[lista1]+'"></span>'+
				'<span>'+nombre1+'</span><td>'+
				'<td style="padding-left:15px">'+perct1+'%</td></tr>'+
				'<tr><td colspan="2">'+lista2+' ('+partido2+')</td></tr>'+
				'<tr><td><span class="legend-key" style="background-color:'+coloresAlc[lista2]+'"></span>'+
				'<span>'+nombre2+'</span><td>'+
				'<td style="padding-left:15px">'+perct2+'%</td></tr>'+
				'</table>'
				)
			.addTo(map);    
    }
});
map.on('mouseleave', 'gobernadores-violeta-verde-agua', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});
*/
coloresDipP = {
	'Chile Vamos': colores['azul'],
	'Alianza': colores['azul'],
	'Frente Amplio': colores['verde-agua'],
	'La Fuerza de la Mayoría': colores['rojo-oscuro'],
	'Nueva Mayoría': colores['rojo-oscuro'],
	'Coalición Regionalista Verde': colores['verde'],
	'Convergencia Democrática': colores['marron'],
	'Candidatura Independiente': colores['gris'],
	'Por Todo Chile': colores['naranja'],
};

map.on('mousemove', 'diputados', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var nconv = e.features[0].properties['2017-11_NDip'];
	var diputados = '<table style="border-collapse:collapse">';
	var lista_ant = '';
	for (i = 1; i <= nconv; i++) {
		var beg = '2017-11_Dip'+i;
		var lista = e.features[0].properties[beg+'_Lis'];
		var partido = e.features[0].properties[beg+'_Ptd'];
		var perct = e.features[0].properties[beg+'_Pct'];
		var perctL = e.features[0].properties[beg+'_PctL'];
		if (lista!=lista_ant) {
			diputados += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
			diputados += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
		};
		diputados += '<tr>';	
		diputados += '<td><span class="legend-key" style="background-color:'+coloresDipP[lista]+'"></span>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
			diputados += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
		} else {
			diputados += e.features[0].properties[beg+'_Nom'];
		}
		diputados += '</td><td style="padding-left:10px">'+partido+'</td>';
		diputados += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
		diputados += '</tr>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
			diputados += '<tr>'
			diputados += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
			diputados += e.features[0].properties[beg+'_Rem'] +'</td>'
			diputados += '</tr>'	
		}
		lista_ant = lista;
	}
	diputados += '</table>';

	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+diputados
			)
		.addTo(map);
});
map.on('mouseleave', 'diputados', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});


map.on('mousemove', 'senadores2017', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var nconv = e.features[0].properties['2017-11_NSen'];
	var diputados = '<table style="border-collapse:collapse">';
	var lista_ant = '';
	for (i = 1; i <= nconv; i++) {
		var beg = '2017-11_Sen'+i;
		var lista = e.features[0].properties[beg+'_Lis'];
		var partido = e.features[0].properties[beg+'_Ptd'];
		var perct = e.features[0].properties[beg+'_Pct'];
		var perctL = e.features[0].properties[beg+'_PctL'];
		if (lista!=lista_ant) {
			diputados += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
			diputados += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
		};
		diputados += '<tr>';	
		diputados += '<td><span class="legend-key" style="background-color:'+coloresDipP[lista]+'"></span>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
			diputados += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
		} else {
			diputados += e.features[0].properties[beg+'_Nom'];
		}
		diputados += '</td><td style="padding-left:10px">'+partido+'</td>';
		diputados += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
		diputados += '</tr>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
			diputados += '<tr>'
			diputados += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
			diputados += e.features[0].properties[beg+'_Rem'] +'</td>'
			diputados += '</tr>'	
		}
		lista_ant = lista;
	}
	diputados += '</table>';

	var distrito = e.features[0].properties.CIRCUNSCRIPCION;
	var region = e.features[0].properties.REGION;
	var periodo = e.features[0].properties['2017-11_Periodo'];
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">Circunscripción '+distrito
			+' ('+periodo+')</span><br>'+region+'</h4>'+diputados
			)
		.addTo(map);
});
map.on('mouseleave', 'senadores2017', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});


map.on('mousemove', 'senadores2013', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var nconv = e.features[0].properties['2013-11_NSen'];
	var diputados = '<table style="border-collapse:collapse">';
	var lista_ant = '';
	for (i = 1; i <= nconv; i++) {
		var beg = '2013-11_Sen'+i;
		if (i==1) {
			var circ = e.features[0].properties[beg+'_CircAnt'];
			diputados += '<tr><td colspan=3 style="text-align:center"><span style="font-weight:bold">'+circ+'</span></td>';
		} else if (i==3) {
			var circ = e.features[0].properties[beg+'_CircAnt'];
			diputados += '<tr style="border-top:solid;border-width:1px"><td colspan=3 style="text-align:center"><span style="font-weight:bold;text-align:center">'+circ+'</span></td>';
		}
		var lista = e.features[0].properties[beg+'_Lis'];
		var partido = e.features[0].properties[beg+'_Ptd'];
		var perct = e.features[0].properties[beg+'_Pct'];
		var perctL = e.features[0].properties[beg+'_PctL'];
		if (lista!=lista_ant) {
			diputados += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
			diputados += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
		};
		diputados += '<tr>';	
		diputados += '<td><span class="legend-key" style="background-color:'+coloresDipP[lista]+'"></span>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
			diputados += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
		} else {
			diputados += e.features[0].properties[beg+'_Nom'];
		}
		diputados += '</td><td style="padding-left:10px">'+partido+'</td>';
		diputados += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
		diputados += '</tr>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
			diputados += '<tr>'
			diputados += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
			diputados += e.features[0].properties[beg+'_Rem'] +'</td>'
			diputados += '</tr>'	
		}
		lista_ant = lista;
		if (i==2) lista_ant = '';
	}
	diputados += '</table>';

	var distrito = e.features[0].properties.CIRCUNSCRIPCION;
	var region = e.features[0].properties.REGION;
	var periodo = e.features[0].properties['2013-11_Periodo'];
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">Circunscripción '+distrito
			+' ('+periodo+')</span><br>'+region+'</h4>'+diputados
			)
		.addTo(map);
});
map.on('mouseleave', 'senadores2013', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'dip-markers', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var lista = e.features[0].properties.LISTA;
	var nombre = e.features[0].properties.NOMBRE;
	var partido = e.features[0].properties.PARTIDO;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+nombre+'</span></h4>'+
			'<p>'+lista+' - '+partido+'</p>'
			)
		.addTo(map);
});
map.on('mouseleave', 'dip-markers', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'sen-markers', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var lista = e.features[0].properties.LISTA;
	var nombre = e.features[0].properties.NOMBRE;
	var partido = e.features[0].properties.PARTIDO;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+nombre+'</span></h4>'+
			'<p>'+lista+' - '+partido+'</p>'
			)
		.addTo(map);
});
map.on('mouseleave', 'sen-markers', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'convencionalesMH-distritos', function (e) {
    map.getCanvas().style.cursor = 'pointer';

    if (map.getZoom()<=6.2) {
	    pctgM = Math.round(10000*e.features[0].properties['Conv_votM_D']/(e.features[0].properties['Conv_votM_D']+e.features[0].properties['Conv_votH_D']))/100;
		pctgH = Math.round(10000*e.features[0].properties['Conv_votH_D']/(e.features[0].properties['Conv_votM_D']+e.features[0].properties['Conv_votH_D']))/100;

		var distrito = e.features[0].properties.DISTRITO;
		var region = e.features[0].properties.REGION;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
				'<table><tr><td></td><td style="text-align:center">Cantidad</td><td style="text-align:center">%</td>'+
				'<tr><td>Votos hacia candidatas (M):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votM_D']+'</td><td style="text-align:right;padding-left:15px">'+pctgM+'%</td></tr>'+
				'<tr><td>Votos hacia candidatos (H):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votH_D']+'</td><td style="text-align:right;padding-left:15px">'+pctgH+'%</td></tr></table>'
				)
			.addTo(map);
    } else {
		pctgM = Math.round(10000*e.features[0].properties['Conv_votM_C']/(e.features[0].properties['Conv_votM_C']+e.features[0].properties['Conv_votH_C']))/100;
		pctgH = Math.round(10000*e.features[0].properties['Conv_votH_C']/(e.features[0].properties['Conv_votM_C']+e.features[0].properties['Conv_votH_C']))/100;

		var comuna = e.features[0].properties.NOM_COM;
		var distrito = e.features[0].properties.DISTRITO;
		var region = e.features[0].properties.REGION;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
				'<table><tr><td></td><td style="text-align:center">Cantidad</td><td style="text-align:center">%</td>'+
				'<tr><td>Votos hacia candidatas (M):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votM_C']+'</td><td style="text-align:right;padding-left:15px">'+pctgM+'%</td></tr>'+
				'<tr><td>Votos hacia candidatos (H):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votH_C']+'</td><td style="text-align:right;padding-left:15px">'+pctgH+'%</td></tr></table>'
				)
			.addTo(map);
    }
});
map.on('mouseleave', 'convencionalesMH-distritos', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'convencionalesMH-comunas', function (e) {
    map.getCanvas().style.cursor = 'pointer';

    if (map.getZoom()<=6.2) {
	    pctgM = Math.round(10000*e.features[0].properties['Conv_votM_D']/(e.features[0].properties['Conv_votM_D']+e.features[0].properties['Conv_votH_D']))/100;
		pctgH = Math.round(10000*e.features[0].properties['Conv_votH_D']/(e.features[0].properties['Conv_votM_D']+e.features[0].properties['Conv_votH_D']))/100;

		var distrito = e.features[0].properties.DISTRITO;
		var region = e.features[0].properties.REGION;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
				'<table><tr><td></td><td style="text-align:center">Cantidad</td><td style="text-align:center">%</td>'+
				'<tr><td>Votos hacia candidatas (M):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votM_D']+'</td><td style="text-align:right;padding-left:15px">'+pctgM+'%</td></tr>'+
				'<tr><td>Votos hacia candidatos (H):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votH_D']+'</td><td style="text-align:right;padding-left:15px">'+pctgH+'%</td></tr></table>'
				)
			.addTo(map);
    } else {
		pctgM = Math.round(10000*e.features[0].properties['Conv_votM_C']/(e.features[0].properties['Conv_votM_C']+e.features[0].properties['Conv_votH_C']))/100;
		pctgH = Math.round(10000*e.features[0].properties['Conv_votH_C']/(e.features[0].properties['Conv_votM_C']+e.features[0].properties['Conv_votH_C']))/100;

		var comuna = e.features[0].properties.NOM_COM;
		var distrito = e.features[0].properties.DISTRITO;
		var region = e.features[0].properties.REGION;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
				'<table><tr><td></td><td style="text-align:center">Cantidad</td><td style="text-align:center">%</td>'+
				'<tr><td>Votos hacia candidatas (M):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votM_C']+'</td><td style="text-align:right;padding-left:15px">'+pctgM+'%</td></tr>'+
				'<tr><td>Votos hacia candidatos (H):</td><td style="text-align:right;padding-left:15px">'+
				e.features[0].properties['Conv_votH_C']+'</td><td style="text-align:right;padding-left:15px">'+pctgH+'%</td></tr></table>'
				)
			.addTo(map);
    }
});
map.on('mouseleave', 'convencionalesMH-comunas', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});
 			            

map.on('mousemove', 'concejales', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var nconc = e.features[0].properties.NConc;
	var concejales = '<table style="border-collapse:collapse">';
	for (i = 1; i <= nconc; i++) {
		if (i<10) {
			var beg = 'Conc0'+i;
		} else {
			var beg = 'Conc'+i;
		}
		var lista = e.features[0].properties[beg+'_Lis'];
		var partido = e.features[0].properties[beg+'_Ptd'];
		var perct = e.features[0].properties[beg+'_Pct'];
		if (listasSeleccionadasConc.indexOf(lista) >= 0) {
			concejales += '<tr style="background-color:'+colores['gris-claro']+'">';	
		} else {
			concejales += '<tr>';	
		}
		concejales += '<td><span class="legend-key" style="background-color:'+coloresConc[lista]+'"></span>';
		concejales += capitalize(e.features[0].properties[beg+'_Nom']);
		concejales += '</td><td style="padding-left:15px">'+partido+'</td>';
		concejales += '</td><td style="padding-left:15px;text-align:right">'+perct+'%</td>';
		concejales += '</tr>';
	}
	concejales += '</table>';

	var comuna = e.features[0].properties.NOM_COM;
	var nombre = e.features[0].properties.Alc_Nom;
	var perct = e.features[0].properties.Alc_Pct;
	var partido = e.features[0].properties.Alc_Ptd;
	var lista = e.features[0].properties.Alc_Lis;

	innerHTML = '<h4><span style="font-weight:bold">'+comuna+'</span></h4>';
	if (listasSeleccionadasAlc.indexOf(lista) >= 0) {
		innerHTML += '<h4 style="background-color:'+colores['gris-claro']+'">Alcalde(sa) Electo(a): '+nombre+'<br>';
	} else {
		innerHTML += '<h4>Alcalde(sa) Electo(a): '+nombre+'<br>';
	}
	innerHTML += '<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>';
	innerHTML += lista+' ('+partido+')</h4>';
	innerHTML += concejales;	
	popup.setLngLat(e.lngLat).setHTML(innerHTML).addTo(map);
});
map.on('mouseleave', 'concejales', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'concejalesMH', function (e) {
    map.getCanvas().style.cursor = 'pointer';
    
    pctgM = Math.round(10000*e.features[0].properties['Conc_votM_C']/(e.features[0].properties['Conc_votM_C']+e.features[0].properties['Conc_votH_C']))/100;
	pctgH = Math.round(10000*e.features[0].properties['Conc_votH_C']/(e.features[0].properties['Conc_votM_C']+e.features[0].properties['Conc_votH_C']))/100;

	var comuna = e.features[0].properties.NOM_COM;
	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+comuna+'</span><br>'+region+'</h4>'+
			'<table><tr><td></td><td style="text-align:center">Cantidad</td><td style="text-align:center">%</td>'+
			'<tr><td>Votos hacia candidatas (M):</td><td style="text-align:right;padding-left:15px">'+
			e.features[0].properties['Conc_votM_C']+'</td><td style="text-align:right;padding-left:15px">'+pctgM+'%</td></tr>'+
			'<tr><td>Votos hacia candidatos (H):</td><td style="text-align:right;padding-left:15px">'+
			e.features[0].properties['Conc_votH_C']+'</td><td style="text-align:right;padding-left:15px">'+pctgH+'%</td></tr></table>'
			)
		.addTo(map);
    
});
map.on('mouseleave', 'concejalesMH', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'alcaldes', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var comuna = e.features[0].properties.NOM_COM;
	var nombre = e.features[0].properties.Alc_Nom;
	var perct = e.features[0].properties.Alc_Pct;
	var partido = e.features[0].properties.Alc_Ptd;
	var lista = e.features[0].properties.Alc_Lis;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+comuna+'</span></h4>'+
			'<p>Alcalde(sa) Electo(a):<br>  '+lista+' ('+partido+')<br>'+
			'<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
			'<span style="font-weight:bold">'+nombre+'</span><br>'+
			'Porcentaje: '+perct+'%</p>'			
			)
		.addTo(map);
});
map.on('mouseleave', 'alcaldes', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

function clean() {
    map.setLayoutProperty('dip-markers', 'visibility', 'none');	
    map.setLayoutProperty('dip-markers-lines', 'visibility', 'none');	
    map.setLayoutProperty('distritos-outline', 'visibility', 'none');	
    map.setLayoutProperty('diputados', 'visibility', 'none');	
    map.setLayoutProperty('senadores2017', 'visibility', 'none');	
    map.setLayoutProperty('senadores2013', 'visibility', 'none');	
    map.setLayoutProperty('sen-markers', 'visibility', 'none');	
	map.setLayoutProperty('alcaldes', 'visibility', 'none');
	map.setLayoutProperty('concejales', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'none');
	map.setLayoutProperty('regiones-outline', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'none');

	document.getElementById('a-diputados').style.color = 'gray';
	document.getElementById('a-senadores').style.color = 'gray';
	document.getElementById('a-gobernadores').style.color = 'gray';
	document.getElementById('a-alcaldes').style.color = 'gray';
	document.getElementById('a-concejales').style.color = 'gray';
}


function mostrarDiputados() {
	clean()
	map.setLayoutProperty('distritos-outline', 'visibility', 'visible');
	map.setLayoutProperty('diputados', 'visibility', 'visible');
	map.setLayoutProperty('dip-markers', 'visibility', 'visible');
	map.setLayoutProperty('dip-markers-lines', 'visibility', 'visible');
	document.getElementById('a-diputados').style.color = 'black';

	parliament = {
		'Chile Vamos': {
			'seats': 68,
			'color': colores['azul'],
			'parties': [['RN', 32], ['UDI', 26], ['EVO', 6], ['IND', 4]]
		},
		'La Fuerza de la Mayoría': {
			'seats': 30,
			'color': colores['rojo-oscuro'],
			'parties': [['PS', 17], ['PPD', 8], ['PRSD', 5]]
		},
		'Frente Amplio': {
			'seats': 13,
			'color': colores['verde-agua'],
			'parties': [['RD', 6], ['CS', 4], ['COM', 2], ['UNIR', 1]]
		},
		'Chile Digno': {
			'seats': 13,
			'color': colores['rojo'],
			'parties': [['PCCH', 9], ['FRVS', 3], ['AH', 1]]
		},
		'Convergencia Democrática': {
			'seats': 12,
			'color': colores['marron'],
			'parties': [['PDC', 12]]
		},
		'Nuevo Trato': {
			'seats': 4,
			'color': colores['amarillo'],
			'parties': [['PL', 2], ['IND', 2]]
		},
		'Acción Republicana': {
			'seats': 4,
			'color': colores['azul-marino'],
			'parties': [['PLR', 1], ['IND', 3]]
		},
		'Fuera de Pacto': {
			'seats': 11,
			'color': colores['gris'],
			'parties': [['PH', 1], ['PEV', 1], ['IND', 9]]
		}
	}
    parliament_order = {
    	'Fuera de Pacto': false,
    	'Chile Digno': true,
    	'Frente Amplio': true, 
    	'Nuevo Trato': true, 
    	'La Fuerza de la Mayoría': true, 
    	'Convergencia Democrática': true, 
    	'Chile Vamos': true,
    	'Acción Republicana': true
    }

	legend.style.display = 'block';
    legend.innerHTML = '';
    if (screen.width>=992) {
    	legend.style.width = '450px';
    	legend.style.maxWidth = '450px';
    	legend.style.height = '180px';
    	legend2.innerHTML = '<div style="text-align:center;text-size:1.3em"><strong>Cámara baja 2018-2022</strong></div>';
    	legend2.style.display = 'block';
    	legend2.style.maxWidth = '850px';
    	legend2.style.width = '360px';
    	legend2.style.height = '230px';
    	var div = document.createElement('div');
    	div.appendChild(generateSVG(parliament, parliament_order, true));
    	legend2.appendChild(div);
    } else {
        legend.style.width = '255px';
        legend.style.maxWidth = '255px';
        legend.style.height = '150px';
    }

	legend.appendChild(getParliamentTable(parliament));
};

function mostrarSenadores() {
	clean()
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	map.setLayoutProperty('senadores2017', 'visibility', 'visible');
	map.setLayoutProperty('senadores2013', 'visibility', 'visible');
    map.setLayoutProperty('sen-markers', 'visibility', 'visible');	
	document.getElementById('a-senadores').style.color = 'black';

	parliament = {
		'Chile Vamos': {
			'seats': 19,
			'color': colores['azul'],
			'parties': [['UDI', 9], ['RN', 8], ['EVO', 2]]
		},
		'La Fuerza de la Mayoría': {
			'seats': 16,
			'color': colores['rojo-oscuro'],
			'parties': [['PPD', 8], ['PS', 7], ['PRSD', 1]]
		},
		'Convergencia Democrática': {
			'seats': 5,
			'color': colores['marron'],
			'parties': [['PDC', 5]]
		},
		'Frente Amplio': {
			'seats': 1,
			'color': colores['verde-agua'],
			'parties': [['RD', 1]]
		},
		'Progresistas': {
			'seats': 1,
			'color': colores['rosado'],
			'parties': [['PRO', 1]]
		},
		'Candidatura Independiente': {
			'seats': 1,
			'color': colores['gris'],
			'parties': [['IND', 1]]
		}
	}
    parliament_order = {
    	'Frente Amplio': true, 
    	'La Fuerza de la Mayoría': true, 
    	'Progresistas': true, 
    	'Candidatura Independiente': true,
    	'Convergencia Democrática': true, 
    	'Chile Vamos': true,
    }

	legend.style.display = 'block';
    legend.innerHTML = '';
    if (screen.width>=992) {
    	legend.style.width = '390px';
    	legend.style.maxWidth = '390px';
    	legend.style.height = '140px';
    	legend2.innerHTML = '<div style="text-align:center;text-size:1.3em"><strong>Cámara alta 2018-2022</strong></div>';
    	legend2.style.display = 'block';
    	legend2.style.maxWidth = '850px';
    	legend2.style.width = '360px';
    	legend2.style.height = '230px';
    	var div = document.createElement('div');
    	div.appendChild(generateSVG(parliament, parliament_order, true));
    	legend2.appendChild(div);
    } else {
        legend.style.width = '240px';
        legend.style.maxWidth = '240px';
        legend.style.height = '120px';
    }

	legend.appendChild(getParliamentTable(parliament));
};

function mostrarGobernadores() {
	clean();
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'visible');
	document.getElementById('a-gobernadores').style.color = 'black';

	legend.style.display = 'block';
	legend2.style.display = 'none';
    legend.innerHTML = '';

    if (screen.width>=992) {
    	legend.style.width = '215px';
    	legend.style.maxWidth = '215px';
    	legend.style.height = '115px';
    } else {
        legend.style.width = '185px';
        legend.style.maxWidth = '185px';
        legend.style.height = '95px';
    }

	var layers = ['Unidad Constituyente (10)', 'Frente Amplio (2)', 'Chile Vamos (1)', 
	              'Ecologistas e Independientes (1)',  'Candidaturas Independientes (2)'];
	var colors = [colores['violeta'], colores['verde-agua'], colores['azul'],
	              colores['verde'], colores['gris']];

	var table = document.createElement('table');
	for (i = 0; i < layers.length; i++) {
		var layer = layers[i];
		var color = colors[i];
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');


		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = color;
		item.appendChild(key);
		td1.appendChild(item);

		var value = document.createElement('span');
		value.innerHTML = layer;
		td2.appendChild(value);

		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	};

	legend.appendChild(table);
};


function mostrarAlcaldes() {
	clean();
	map.setLayoutProperty('comunas-outline', 'visibility', 'visible');
	map.setLayoutProperty('alcaldes', 'visibility', 'visible');
	document.getElementById('a-alcaldes').style.color = 'black';


	parliament = {
		'Chile Vamos': {
			'seats': 87,
			'color': colores['azul'],
			'parties': [['UDI', 32], ['RN', 31], ['EVO', 1], ['IND', 23]]
		},
		'Unidad por el Apruebo': {
			'seats': 69,
			'color': colores['violeta'],
			'parties': [['PS', 23], ['PPD', 17], ['PR', 11], ['IND', 18]]
		},
		'Unidos por la Dignidad': {
			'seats': 60,
			'color': colores['marron'],
			'parties': [['DC', 46], ['PRO', 2], ['IND', 12]]
		},
		'Frente Amplio': {
			'seats': 12,
			'color': colores['verde-agua'],
			'parties': [['RD', 6], ['CS', 2], ['PL', 1], ['IND', 3]]
		},
		'Chile Digno Verde y Soberano': {
			'seats': 9,
			'color': colores['rojo'],
			'parties': [['PCCh', 6], ['FREVS', 1], ['IND', 2]]
		},
		'Dignidad Ahora': {
			'seats': 3,
			'color': colores['amarillo'],
			'parties': [['PH', 2], ['IGUAL', 1]]
		},
		'Candidaturas Independientes': {
			'seats': 105,
			'color': colores['gris'],
			'parties': []
		}
	}

	legend.style.display = 'block';
    legend.innerHTML = '';
    if (screen.width>=992) {
    	legend.style.width = '470px';
    	legend.style.maxWidth = '470px';
    	legend.style.height = '160px';
    	legend2.style.display = 'block';
    	legend2.style.maxWidth = '850px';
    	legend2.style.width = '650px';
    	legend2.style.height = '18px';
    	legend2.innerHTML = 'Transparencia depende del porcentaje del candidato electo.';
    } else {
        legend.style.width = '265px';
        legend.style.maxWidth = '265px';
        legend.style.height = '130px';
    }

	legend.appendChild(getParliamentTable(parliament));
};

function mostrarConcejales() {
	clean();
	map.setLayoutProperty('concejales', 'visibility', 'visible');
	map.setLayoutProperty('comunas-outline', 'visibility', 'visible');
	document.getElementById('a-concejales').style.color = 'black';

	listasSeleccionadasConc = [];
	listasSeleccionadasAlc = [];
	map.setPaintProperty('concejales', 'fill-color', colores['suave']);

    if (screen.width>=992) {
        legend.style.display = 'block';
    	legend.style.width = '460px';
    	legend.style.maxWidth = '460px';
    	legend.style.height = '400px';

        var layers2 = {
            'Chile Vamos': 'UDI (298), RN (377), EVO (61), PRI (36)', 
            'Republicanos y Ciud.': 'REP (12), CIU (1)', 
            'Unidad por el Apruebo': 'PS (272), PPD (202), PR (174)', 
            'Unidos por la Dignidad': 'DC+PRO (362)', 
            'Frente Amplio': 'RD (43), CS (51), PL (4), COM (34)', 
            'Ecologistas e Ind.': 'ECO (47)',
            'Chile Digno Verde y Sob.': 'PCCh (157), FREVS (48)', 
            'Unión Patriótica': 'UPA (1)', 
            'Dignidad Ahora': 'PH (28), IGUAL (27)',
            'P. de Trabajadores Revol.': 'PTR (1)', 
            'Candidaturas Ind.': ''
        };
    }  else {
        legend.style.display = 'none';
    } 
	legend.innerHTML = 'Selecciona lista/partidos y verás si tienen mayoría en el concejo.<br>';



	var table = document.createElement('table');
	table.style.borderCollapse = 'collapse';
	for (var layer in coloresConcL) {
		if (layer == 'Chile Vamos' & screen.width>=992) {
			var tr = document.createElement('tr');
            tr.style.height = '27px';
			var td1= document.createElement('td');
			var td2= document.createElement('td');
			td2.colSpan = '2';
			var input = document.createElement('input');
			input.type = 'checkbox';
			input.id = 'cb-vamos-por-chile';
			input.style.height = '10px';
			input.style.width = '10px';
			var value = document.createElement('span');
			var strong = document.createElement('strong');
			strong.innerHTML = 'Vamos por Chile (la Derecha)';
			value.appendChild(strong);
			td1.appendChild(input);
			td2.appendChild(value);
			tr.appendChild(td1);
			tr.appendChild(td2);
			table.appendChild(tr);
		} else if (layer == 'Unidad por el Apruebo' & screen.width>=992) {
			var tr = document.createElement('tr');
            tr.style.height = '27px';
			tr.style.borderTop = 'solid';
			tr.style.borderWidth = '1px';
			var td1= document.createElement('td');
			var td2= document.createElement('td');
			td2.colSpan = '2';
			var input = document.createElement('input');
			input.type = 'checkbox';
			input.id = 'cb-unidad-constituyente';
			input.style.height = '10px';
			input.style.width = '10px';
			var value = document.createElement('span');
			var strong = document.createElement('strong');
			strong.innerHTML = 'Unidad Constituyente (la ex-Concertación)';
			value.appendChild(strong);
			td1.appendChild(input);
			td2.appendChild(value);
			tr.appendChild(td1);
			tr.appendChild(td2);
			table.appendChild(tr);
		} else if (layer == 'Chile Digno Verde y Sob.' & screen.width>=992) {
			var tr = document.createElement('tr');
            tr.style.height = '27px';
			tr.style.borderTop = 'solid';
			tr.style.borderWidth = '1px';
			var td1= document.createElement('td');
			var td2= document.createElement('td');
			td2.colSpan = '2';
			var input = document.createElement('input');
			input.type = 'checkbox';
			input.id = 'cb-apruebo-dignidad';
			input.style.height = '10px';
			input.style.width = '10px';
			var value = document.createElement('span');
			var strong = document.createElement('strong');
			strong.innerHTML = 'Apruebo Dignidad';
			value.appendChild(strong);
			td1.appendChild(input);
			td2.appendChild(value);
			tr.appendChild(td1);
			tr.appendChild(td2);
			table.appendChild(tr);
		}

		var layer2 = layers2[layer];
		var color = coloresConcL[layer];
		var tr = document.createElement('tr');
            tr.style.height = '27px';
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		if (layer == 'Ecologistas e Ind.' & screen.width>=992) {
			tr.style.borderTop = 'solid';
			tr.style.borderWidth = '1px';			
		}

		var input = document.createElement('input');
		input.type = 'checkbox';
		input.id = 'cb-'+shortNames[layer];
		input.style.height = '10px';
		input.style.width = '10px';
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = color;
		td1.appendChild(input);
		td2.appendChild(key);

		var value = document.createElement('span');
		value.innerHTML = layer;
		td2.appendChild(value);
		var value2 = document.createElement('span');
		value2.innerHTML = layer2;
		td3.appendChild(value2);
		td3.style.paddingLeft = '15px';

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	};
	legend.appendChild(table);

    if (screen.width>=992) {
    	legend2.style.display = 'block';
    	legend2.style.height = '50px';
    	legend2.style.maxWidth = '835px';
    	legend2.style.width = '835px';
    	legend2.innerHTML = 'Fracción del concejo municipal (alcaldes y concejales) pertenecientes a las listas seleccionadas<br>';
    	var coloresLegend2 = ['rgb(255,0,0)', 'rgb(255,46,46)', 'rgb(255,57,57)', 'rgb(255,73,73)',
    	                      'rgb(255,93,93)', 'rgb(255,113,113)', 'rgb(255,139,139)', 'rgb(255,146,146)',
    	                      'rgb(255,170,170)', 'rgb(255,185,185)', 'rgb(255,219,219)', 'rgb(255,227,227)',
    	                      'rgb(255,232,232)', 'rgb(232,243,232)', 'rgb(227,241,227)', 'rgb(219,237,219)',
    	                      'rgb(185,221,185)', 'rgb(170,213,170)', 'rgb(146,201,146)', 'rgb(139,197,139)',
    	                      'rgb(113,184,113)', 'rgb(93,174,93)', 'rgb(73,164,73)', 'rgb(57,153,57)',
    	                      'rgb(46,151,46)', 'rgb(0,128,0)'];
    	var pctLegend2 = ['0', '1/11', '1/9', '1/7', '2/11', '2/9', '3/11', '2/7', '3/9', '4/11', '3/7', '4/9', '5/11', 
    		 			  '6/11', '5/9', '4/7', '7/11', '6/9', '5/7', '8/11', '7/9', '9/11', '6/7', '8/9', '10/11', '1'];

    	var table2 = document.createElement('table');
    	table2.style.borderCollapse = 'collapse';	
    	var tr = document.createElement('tr');
    	for (i = 0; i < coloresLegend2.length; i++) {
    		var td = document.createElement('td');
    		td.style.textAlign = 'center';
    		td.style.backgroundColor = coloresLegend2[i];
    		td.innerHTML = pctLegend2[i];
    		td.width = '30px';
    		td.height = '20px';
    		tr.appendChild(td);
    	}
    	table2.appendChild(tr);
    	legend2.appendChild(table2);
    }


	function checkCV() { 
		listasSeleccionadasAlc.push('CHILE VAMOS');
		listasSeleccionadasConc.push('CHILE VAMOS - PRI E IND');
		listasSeleccionadasConc.push('CHILE VAMOS EVOPOLI - IND');
		listasSeleccionadasConc.push('CHILE VAMOS RN - IND');
		listasSeleccionadasConc.push('CHILE VAMOS UDI - IND');
	}

	function unCheckCV() { 
		let pos = listasSeleccionadasAlc.indexOf('CHILE VAMOS');
		listasSeleccionadasAlc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('CHILE VAMOS - PRI E IND');
		listasSeleccionadasConc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('CHILE VAMOS EVOPOLI - IND');
		listasSeleccionadasConc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('CHILE VAMOS RN - IND');
		listasSeleccionadasConc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('CHILE VAMOS UDI - IND');
		listasSeleccionadasConc.splice(pos, 1);
	}

	function checkRC() { 
		listasSeleccionadasConc.push('REPUBLICANOS');
		listasSeleccionadasConc.push('CIUDADANOS IND');
	}

	function unCheckRC() { 
		let pos = listasSeleccionadasConc.indexOf('REPUBLICANOS');
		listasSeleccionadasConc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('CIUDADANOS IND');
		listasSeleccionadasConc.splice(pos, 1);
	}

	document.getElementById('cb-vamos-por-chile').addEventListener('change', function() {
		if (this.checked) { 
			checkCV(); 
			checkRC(); 
			document.getElementById('cb-CV').checked = true;
			document.getElementById('cb-RC').checked = true;
		} else { 
			unCheckCV(); 
			unCheckRC(); 
			document.getElementById('cb-CV').checked = false;
			document.getElementById('cb-RC').checked = false;
		}
		paintConcejales();
	});
	
	document.getElementById('cb-CV').addEventListener('change', function() {
		if (this.checked) { 
			checkCV(); 
			if (document.getElementById('cb-RC').checked) {
				document.getElementById('cb-vamos-por-chile').checked = true;
			}
		} else { 
			unCheckCV(); 
			document.getElementById('cb-vamos-por-chile').checked = false;
		}
		paintConcejales();
	});
	
	document.getElementById('cb-RC').addEventListener('change', function() {
		if (this.checked) { 
			checkRC(); 
			if (document.getElementById('cb-CV').checked) {
				document.getElementById('cb-vamos-por-chile').checked = true;
			}
		} else { 
			unCheckRC(); 
			document.getElementById('cb-vamos-por-chile').checked = false;
		}
		paintConcejales();
	});

	function checkUA() { 
		listasSeleccionadasAlc.push('UNIDAD POR EL APRUEBO');
		listasSeleccionadasConc.push('UNIDAD POR EL APRUEBO');
		listasSeleccionadasConc.push('RADICALES E IND');
	}

	function unCheckUA() { 
		let pos = listasSeleccionadasAlc.indexOf('UNIDAD POR EL APRUEBO');
		listasSeleccionadasAlc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('UNIDAD POR EL APRUEBO');
		listasSeleccionadasConc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('RADICALES E IND');
		listasSeleccionadasConc.splice(pos, 1);
	}

	function checkUD() { 
		listasSeleccionadasAlc.push('UNIDOS POR LA DIGNIDAD');
		listasSeleccionadasConc.push('UNIDOS POR LA DIGNIDAD');
	}

	function unCheckUD() { 
		let pos = listasSeleccionadasAlc.indexOf('UNIDOS POR LA DIGNIDAD');
		listasSeleccionadasAlc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('UNIDOS POR LA DIGNIDAD');
		listasSeleccionadasConc.splice(pos, 1);
	}

	document.getElementById('cb-unidad-constituyente').addEventListener('change', function() {
		if (this.checked) { 
			checkUA(); 
			checkUD(); 
			document.getElementById('cb-UA').checked = true;
			document.getElementById('cb-UD').checked = true;
		} else { 
			unCheckUA(); 
			unCheckUD(); 
			document.getElementById('cb-UA').checked = false;
			document.getElementById('cb-UD').checked = false;
		}
		paintConcejales();
	});
	
	document.getElementById('cb-UA').addEventListener('change', function() {
		if (this.checked) {
			checkUA();
			if (document.getElementById('cb-UD').checked) {
				document.getElementById('cb-unidad-constituyente').checked = true;
			}
		} else {
			unCheckUA();
			document.getElementById('cb-unidad-constituyente').checked = false;
		}
		paintConcejales();
	});
	
	document.getElementById('cb-UD').addEventListener('change', function() {
		if (this.checked) {
			checkUD();
			if (document.getElementById('cb-UA').checked) {
				document.getElementById('cb-unidad-constituyente').checked = true;
			}
		} else {
			unCheckUD();
			document.getElementById('cb-unidad-constituyente').checked = false;
		}
		paintConcejales();
	});

	function checkCD() { 
		listasSeleccionadasAlc.push('CHILE DIGNO VERDE Y SOBERANO');
		listasSeleccionadasConc.push('CHILE DIGNO VERDE Y SOBERANO');
	}

	function unCheckCD() { 
		let pos = listasSeleccionadasAlc.indexOf('CHILE DIGNO VERDE Y SOBERANO');
		listasSeleccionadasAlc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('CHILE DIGNO VERDE Y SOBERANO');
		listasSeleccionadasConc.splice(pos, 1);
	}

	function checkFA() { 
		listasSeleccionadasAlc.push('FRENTE AMPLIO');
		listasSeleccionadasConc.push('FRENTE AMPLIO');
	}

	function unCheckFA() { 
		let pos = listasSeleccionadasAlc.indexOf('FRENTE AMPLIO');
		listasSeleccionadasAlc.splice(pos, 1);
		pos = listasSeleccionadasConc.indexOf('FRENTE AMPLIO');
		listasSeleccionadasConc.splice(pos, 1);
	}

	document.getElementById('cb-apruebo-dignidad').addEventListener('change', function() {
		if (this.checked) { 
			checkCD(); 
			checkFA(); 
			document.getElementById('cb-CD').checked = true;
			document.getElementById('cb-FA').checked = true;
		} else { 
			unCheckCD(); 
			unCheckFA(); 
			document.getElementById('cb-CD').checked = false;
			document.getElementById('cb-FA').checked = false;
		}
		paintConcejales();
	});


	document.getElementById('cb-CD').addEventListener('change', function() {
		if (this.checked) {
			checkCD();
			if (document.getElementById('cb-FA').checked) {
				document.getElementById('cb-apruebo-dignidad').checked = true;
			}
		} else {
			unCheckCD();
			document.getElementById('cb-apruebo-dignidad').checked = false;	
		}
		paintConcejales();
	});
	
	document.getElementById('cb-FA').addEventListener('change', function() {
		if (this.checked) {
			checkFA();
			if (document.getElementById('cb-CD').checked) {
				document.getElementById('cb-apruebo-dignidad').checked = true;
			}
		} else {
			unCheckFA();
			document.getElementById('cb-apruebo-dignidad').checked = false;	
		}
		paintConcejales();
	});
	
	document.getElementById('cb-EC').addEventListener('change', function() {
		if (this.checked) {
			listasSeleccionadasConc.push('ECOLOGISTAS E IND');
		} else {
			let pos = listasSeleccionadasConc.indexOf('ECOLOGISTAS E IND');
			listasSeleccionadasConc.splice(pos, 1);
		}
		paintConcejales();
	});
	
	document.getElementById('cb-UP').addEventListener('change', function() {
		if (this.checked) {
			listasSeleccionadasConc.push('UNION PATRIOTICA');
		} else {
			let pos = listasSeleccionadasConc.indexOf('UNION PATRIOTICA');
			listasSeleccionadasConc.splice(pos, 1);
		}
		paintConcejales();
	});
	
	document.getElementById('cb-DA').addEventListener('change', function() {
		if (this.checked) {
			listasSeleccionadasAlc.push('DIGNIDAD AHORA');
			listasSeleccionadasConc.push('DIGNIDAD AHORA');
		} else {
			let pos = listasSeleccionadasAlc.indexOf('DIGNIDAD AHORA');
			listasSeleccionadasAlc.splice(pos, 1);
			pos = listasSeleccionadasConc.indexOf('DIGNIDAD AHORA');
			listasSeleccionadasConc.splice(pos, 1);
		}
		paintConcejales();
	});
	
	document.getElementById('cb-TR').addEventListener('change', function() {
		if (this.checked) {
			listasSeleccionadasConc.push('PARTIDO DE TRABAJADORES REVOLUCIONARIOS');
		} else {
			let pos = listasSeleccionadasConc.indexOf('PARTIDO DE TRABAJADORES REVOLUCIONARIOS');
			listasSeleccionadasConc.splice(pos, 1);
		}
		paintConcejales();
	});
	
	document.getElementById('cb-CI').addEventListener('change', function() {
		if (this.checked) {
			listasSeleccionadasAlc.push('CANDIDATURA INDEPENDIENTE');
			listasSeleccionadasConc.push('CANDIDATURA INDEPENDIENTE');
		} else {
			let pos = listasSeleccionadasAlc.indexOf('CANDIDATURA INDEPENDIENTE');
			listasSeleccionadasAlc.splice(pos, 1);
			pos = listasSeleccionadasConc.indexOf('CANDIDATURA INDEPENDIENTE');
			listasSeleccionadasConc.splice(pos, 1);
		}
		paintConcejales();
	});
	
};


function seatSum(parliament) {
	var result = 0;
	for (party in parliament) {
		result += parliament[party].seats;
	}
	return result;
}
function calculateSeatDistance(seatCount, numberOfRings, r) {
	var x = Math.PI * numberOfRings * r / (seatCount - numberOfRings);
	var y = 1 + Math.PI * (numberOfRings - 1) * numberOfRings / 2 / (seatCount - numberOfRings);
	return x / y;
}
function score(m, n, r) {
	return Math.abs(calculateSeatDistance(m, n, r) * n / r - 5 / 7);
}
function calculateNumberOfRings(seatCount, r) {
	var n = Math.floor(Math.log(seatCount) / Math.log(2)) || 1;
	var distance = score(seatCount, n, r);

	var direction = 0;
	if (score(seatCount, n + 1, r) < distance) direction = 1;
	if (score(seatCount, n - 1, r) < distance && n > 1) direction = -1;

	while (score(seatCount, n + direction, r) < distance && n > 0) {
		distance = score(seatCount, n + direction, r);
		n += direction;
	}
	return n;
}
function round(number) {
	return Math.round(number*1000000)/1000000;
}
function coords(r, b) {
	return {
		x: round(r * Math.cos(b / r - Math.PI)),
		y: round(r * Math.sin(b / r - Math.PI))
	};
}
function nextRing(rings, ringProgress, ordered) {
	if (ordered) {
		var progressQuota = 0,
	    	tQuota = 0;
		for (var index = rings.length-1; index >= 0; index--) {
			tQuota = round((ringProgress[index] || 0) / rings[index].length);
			if (progressQuota==0 || tQuota < progressQuota) { progressQuota = tQuota; }
		}
		for (var _index = rings.length-1; _index >= 0; _index--) {
			tQuota = round((ringProgress[_index] || 0) / rings[_index].length);
			
			if (tQuota === progressQuota) return _index;
		}		
	} else {
		for (var i = rings.length-1; i >= 0; i--) {
			if (ringProgress[i] < rings[i].length) return i;
		}
	}

}
function argMax(array) {
 	return [].reduce.call(array, (m, c, i, arr) => c > arr[m] ? i : m, 0)
}
function sainte_lague(rings, seatCount) {
	var assign = [];
	var aux = [];
	for (index in rings) {assign[index] = 0;}
	for (var i = 1; i <= seatCount; i++) {
		for (_index in rings) {aux[_index] = rings[_index]/(2*assign[_index]+1);}
		var idx = argMax(aux);
		assign[idx] +=1;
	}
	return assign;
}
var merge = function merge(arrays) {
	var result = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var list = _step.value;
			result = result.concat(list);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return result;
}
function generatePoints(parliament, r0) {
	var seatCount = seatSum(parliament);
	var numberOfRings = calculateNumberOfRings(seatCount, r0);
	var seatDistance = calculateSeatDistance(seatCount, numberOfRings, r0);


	var rings = [];
	for (var i = 1; i <= numberOfRings; i++) {
		rings[i-1] = r0 - (i - 1) * seatDistance;
	}

	rings = sainte_lague(rings, seatCount);
	var points = [];
	var r = void 0,
	    a = void 0,
	    point = void 0;

	var ring = void 0;
	for (var _i = 1; _i <= numberOfRings; _i++) {
		ring = [];
		// calculate ring-specific radius
		r = r0 - (_i - 1) * seatDistance;
		// calculate ring-specific distance
		a = Math.PI * r / (rings[_i-1] - 1 || 1);

		// loop points
		for (var j = 0; j <= rings[_i-1] - 1; j++) {
			point = coords(r, j * a);
			point.r = 0.4 * seatDistance;
			ring.push(point);
		}
		points.push(ring);
	}
	var ringProgress = Array(points.length).fill(0);
	for (var party in parliament) {
		for (var _i2 = 0; _i2 < parliament[party].seats; _i2++) {
			ring = nextRing(points, ringProgress, parliament[party].ordered);
			points[ring][ringProgress[ring]].fill = parliament[party].color;
			points[ring][ringProgress[ring]].party = party;
			ringProgress[ring]++;
		}
	}
	return merge(points);
}
function generateSVG(_parliament, order, seatCount) {
	var parliament = {};
	for (party in order) {
		parliament[party] = _parliament[party];
		_parliament[party].ordered = order[party];
	}
	var radius = 20;
	var points = generatePoints(parliament, radius);
	var a = points[0].r / 0.4;

	var xmlns = "http://www.w3.org/2000/svg";
	var x = -radius - a / 2;
	var y = -radius - a / 2;
    var boxWidth = 2 * radius + a;
    var boxHeight = radius + a;

    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", x + " " + y + " " + boxWidth + " " + boxHeight);
	svgElem.setAttributeNS(null, "width", "100%");
    svgElem.setAttributeNS(null, "height", "100%");
    svgElem.setAttributeNS(null, "baseProfile", "tiny");
    svgElem.setAttributeNS(null, "version", "1.2");
    
    for (index in points) {
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", points[index].x);
    	circle.setAttributeNS(null, "cy", points[index].y);
    	circle.setAttributeNS(null, "r", points[index].r);
    	circle.setAttributeNS(null, "fill", points[index].fill);
    	svgElem.appendChild(circle);
    }
    if (seatCount) {
    	var text = document.createElementNS(xmlns,"text");
    	text.innerHTML = points.length;
    	text.setAttributeNS(null, "x", "0");
    	text.setAttributeNS(null, "y", "0");
    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
    	text.setAttributeNS(null, "font-size", (0.25*radius)+"px");
    	text.setAttributeNS(null, "text-anchor", "middle");
    	svgElem.appendChild(text);
    }

   	return svgElem;
}


function getParliamentTable(parliament) {
	var table = document.createElement('table');
	for (party in parliament) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');

		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = parliament[party].color;
		item.appendChild(key);
		td1.appendChild(item);

		var value = document.createElement('span');
		value.innerHTML = party;
		if (screen.width>=992) value.innerHTML += ' (' + parliament[party].seats + ')';
		td2.appendChild(value);

		var value2 = document.createElement('span');
		value2.innerHTML = '';
		for (index in parliament[party].parties) {
			value2.innerHTML += ', ' + parliament[party].parties[index][0]
			if (screen.width>=992) value2.innerHTML += ' (' + parliament[party].parties[index][1] + ')';
		}
		value2.innerHTML = value2.innerHTML.substring(2);
		td3.appendChild(value2);
        if (screen.width>=992) td3.style.paddingLeft = '15px';

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	}

	return table;
}