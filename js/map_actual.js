mapboxgl.accessToken = 'pk.eyJ1IjoibWF1cm8tZXNjb2JhciIsImEiOiJja3A1aGxiajIwZ3lrMnRxdHN1M2NhcXpiIn0.mXzXiupFZlOThQTwmpK20Q';

var colores = {'azul': '#3b83bd', 'azul-marino': '#122562', 'violeta': '#985698', 'marron': '#A0522D', 'verde-agua': '#00B771',
		   	   'verde': '#008000', 'rojo': '#ff0000', 'rojo-oscuro': '#CC0000', 'amarillo': '#f9d71c', 'naranja': '#ffa500',
		   	   'gris': '#797979', 'gris-claro': '#d3d3d3', 'blanco': '#ffffff', 'suave': '#f8ca92', 'negro': '#000000',
		   	   'rosado': '#e6007e', 'celeste': '#00aae4', 'verde2': '#a9dfbf'}

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
				['get', 'PERIODO'],
				'2014-2022', colores['negro'],
				[
					'match',
					['get', 'LISTA'],
					'Chile Vamos', colores['azul'],
					'Frente Amplio', colores['verde-agua'],
					'La Fuerza de la Mayoría', colores['rojo-oscuro'],
					'Convergencia Democrática', colores['marron'],
					'Progresistas', colores['rosado'],
					colores['gris']
				]
			],
			'circle-radius': [
				'interpolate',
				['linear'], ['zoom'],
				6, [
					'match',
					['get', 'PERIODO'],
					'2014-2022', 5,
					12
				],
				10, [
					'match',
					['get', 'PERIODO'],
					'2014-2022', 15,
					22
				]
			],
			'circle-stroke-width': [
				'match',
				['get', 'PERIODO'],
				'2014-2022', 7,
				0
			],
			'circle-stroke-color': [
				'match',
				['get', 'LISTA'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Convergencia Democrática', colores['marron'],
				'Progresistas', colores['rosado'],
				colores['gris']
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
    map.addSource('cores-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.5vdcnd9t',
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
            'line-width': 0.2,
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
            'line-width': 0.2,
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
				'Por Todo Chile', colores['rosado'],
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
				'Por Todo Chile', colores['rosado'],
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
				'Por Todo Chile', colores['rosado'],
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

    map.addLayer({
        'id': 'cores',
        'type': 'fill',
        'source': 'cores-data',
        'source-layer': 'cores2017-11-0by2rp',
        'filter': ['has', 'Conc01_Nom'],
        'paint': {
            'fill-color': [
            	'match', ['get', 'Conc01_Lis'],
            	'Chile Vamos RN-EVO', colores['azul'],
            	'Chile Vamos UDI-PRI', colores['azul-marino'],
            	'Sumemos', colores['celeste'],
            	'Unidos por la Descentralización', colores['violeta'],
            	'Por un Chile Justo y Descentralizado', colores['rojo-oscuro'],
            	'Frente Amplio', colores['verde-agua'],
            	'Frente Ecologista y Ciudadano', colores['verde2'],
            	'Coalición Regionalista Verde', colores['verde'],
            	colores['gris']
            ],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'Conc01_PctL'],
            	15, 0.4,
            	35, 0.8
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('cores', 'visibility', 'none');	

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

var coloresCORE = {
	'Chile Vamos RN-EVO': colores['azul'],
	'Chile Vamos UDI-PRI': colores['azul-marino'],
	'Sumemos': colores['celeste'],
	'Frente Amplio': colores['verde-agua'],
	'Unidos por la Descentralización': colores['violeta'],
	'Por un Chile Justo y Descentralizado': colores['rojo-oscuro'],
	'Coalición Regionalista Verde': colores['verde'],
	'Frente Ecologista y Ciudadano': colores['verde2'],
	'Fuera de pacto': colores['gris'],
	'Integración para el Desarrollo': colores['naranja'],
	'Por Todo Chile': colores['rosado'],
};
var region2cores = {
	'Región de Arica y Parinacota': [ // revisado
		{
			'Chile Vamos RN-EVO': {
				'parties': [['RN',1],['EVO', 1]],
				'color': colores['azul'],
				'seats': 2
			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1], ['IND', 2]], 
				'color': colores['azul-marino'],
   				'seats': 3
   			},
   			'Frente Amplio': {
   				'parties': [['PH', 1]], 
				'color': colores['verde-agua'],
   				'seats': 1
   			},
   			'Frente Ecologista y Ciudadano': {
   				'parties': [['PODER', 1]], 
				'color': colores['verde2'],
   				'seats': 1
   			},
   			'Por Todo Chile': {
   				'parties': [['IND', 1]], 
				'color': colores['rosado'],
   				'seats': 1
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PCCH', 1],['IND', 1]],
				'color': colores['rojo-oscuro'],
    			'seats': 2
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PSCH', 2], ['PDC', 2]],
				'color': colores['violeta'],
    			'seats': 4
    		}
    	},
    	{
    		'Frente Amplio': true,
    		'Frente Ecologista y Ciudadano': true,
    		'Por Todo Chile': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Atacama': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN', 3],['IND', 1]],
				'color': colores['azul'],
    			'seats': 4
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 1
   			},
   			'Coalición Regionalista Verde': {
   				'parties': [['FRVS', 1], ['IND', 1]],
				'color': colores['verde'],
   				'seats': 2
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['MAS', 1],['PCCH', 2],['IND', 1],['PRSD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 5
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['IND', 1], ['PSCH', 1]],
				'color': colores['violeta'],
   				'seats': 2
   			}
   		},
    	{
    		'Coalición Regionalista Verde': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Tarapacá': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 3],['EVO', 1]],
				'color': colores['azul'],
   				'seats': 4
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 1
   			},
   			'Frente Amplio': {
   				'parties': [['IND', 2]], 
				'color': colores['verde-agua'],
   				'seats': 2
   			},
   			'Frente Ecologista y Ciudadano': {
   				'parties': [['PODER', 1]], 
				'color': colores['verde2'],
   				'seats': 1
   			},
   			'Integración para el Desarrollo': {
   				'parties': [['PLIR', 1]], 
				'color': colores['naranja'],
   				'seats': 1
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PCCH', 1],['PRSD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 2
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 2], ['PSCH', 1]],
				'color': colores['violeta'],
   				'seats': 3
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Frente Ecologista y Ciudadano': true,
    		'Integración para el Desarrollo': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Antofagasta': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 2],['IND', 2]],
				'color': colores['azul'],
   				'seats': 4
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 3], ['PRI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 4
   			},
   			'Frente Amplio': {
   				'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
   				'seats': 1
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1], ['IC', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 2
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['PSCH', 2]],
				'color': colores['violeta'],
   				'seats': 5
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Coquimbo': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 3],['IND', 1]],
				'color': colores['azul'],
   				'seats': 4
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 3], ['IND', 1]], 
				'color': colores['azul-marino'],
   				'seats': 4
   			},
   			'Fuera de pacto': {
   				'parties': [['IND', 2]], 
				'color': colores['gris'],
   				'seats': 2
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['PCCH', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 3
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['PSCH', 1]],
				'color': colores['violeta'],
   				'seats': 4
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Fuera de pacto': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Valparaíso': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 4],['IND', 4]],
				'color': colores['azul'],
   				'seats': 8
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 4]], 
				'color': colores['azul-marino'],
   				'seats': 4
   			},
   			'Frente Amplio': {
   				'parties': [['PH', 1], ['IND', 3]], 
				'color': colores['verde-agua'],
   				'seats': 4
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 3],['IND', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 4
   			},
   			'Sumemos': {
   				'parties': [['AMPLI', 1]], 
				'color': colores['celeste'],
   				'seats': 1
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 6]], 
				'color': colores['violeta'],
   				'seats': 6
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Sumemos': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región Metropolitana de Santiago': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN',8],['IND', 1]],
				'color': colores['azul'],
   				'seats': 9
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': 
   				[['UDI', 8]], 
				'color': colores['azul-marino'],
   				'seats': 8
   			},
   			'Frente Amplio': {
   				'parties': [['PH', 1], ['RD', 3], ['COM', 1], ['CS', 2]], 
				'color': colores['verde-agua'],
   				'seats': 7
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 1
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PSCH', 6], ['PDC', 3]],
				'color': colores['violeta'],
   				'seats': 9
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	"Región del Libertador Bernardo O'Higgins": [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN',5]],
				'color': colores['azul'],
	   			'seats': 5
	   		},
	   		'Chile Vamos UDI-PRI': {
	   			'parties': [['IND', 2], ['UDI', 2]], 
				'color': colores['azul-marino'],
	   			'seats': 4
	   		},
	   		'Frente Amplio': {
	   			'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
	   			'seats': 1
	   		},
	   		'Por un Chile Justo y Descentralizado': {
	   			'parties': [['PRSD', 1]],
				'color': colores['rojo-oscuro'],
	   			'seats': 1
	   		},
	   		'Unidos por la Descentralización': {
	   			'parties': [['PDC', 2], ['PSCH', 3]],
				'color': colores['violeta'],
	   			'seats': 5
	   		}
	   	},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región del Maule': [
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 5],['IND', 2]],
				'color': colores['azul'],
   				'seats': 7
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 4]], 
				'color': colores['azul-marino'],
   				'seats': 4
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PCCH', 1],['PRSD', 1], ['PPD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 3
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PSCH', 1], ['IND', 1],['PDC', 4]],
				'color': colores['violeta'],
   				'seats': 6
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Ñuble': [
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 1],['IND', 1]],
				'color': colores['azul'],
   				'seats': 2
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 1
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['PRSD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 2
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 1]], 
				'color': colores['violeta'],
   				'seats': 1
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región del Bío-Bío': [
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 4]],
				'color': colores['azul'],
   				'seats': 4
   			},
			'Chile Vamos UDI-PRI': {
				'parties': [['UDI', 6], ['IND', 2]], 
				'color': colores['azul-marino'],
				'seats': 8
			},
			'Frente Amplio': {
				'parties': [['IGUAL', 1]], 
				'color': colores['verde-agua'],
				'seats': 1
			},
			'Por un Chile Justo y Descentralizado': {
				'parties': [['IND', 1],['PPD', 2],['PCCH', 2]],
				'color': colores['rojo-oscuro'],
				'seats': 5
			},
			'Unidos por la Descentralización': {
				'parties': [['PSCH', 1], ['PDC', 3]],
				'color': colores['violeta'],
				'seats': 4
			}
		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
	],
	'Región de La Araucanía': [
		{
			'Chile Vamos RN-EVO': {
				'parties': [['RN', 6],['IND', 1]],
				'color': colores['azul'],
    			'seats': 7
    		},
    		'Chile Vamos UDI-PRI': {
    			'parties': [['UDI', 3]], 
				'color': colores['azul-marino'],
    			'seats': 3
    		},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 5]],
				'color': colores['rojo-oscuro'],
    			'seats': 5
    		},
   			'Sumemos': {
   				'parties': [['IND', 1]], 
				'color': colores['celeste'],
   				'seats': 1
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['IND', 1]],
				'color': colores['violeta'],
    			'seats': 4
    		}
    	},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Sumemos': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Los Ríos': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN', 3],['EVO', 1]],
				'color': colores['azul'],
    			'seats': 4
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 2], ['IND', 2]], 
				'color': colores['azul-marino'],
   				'seats': 4
   			},
   			'Frente Amplio': {
   				'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
   				'seats': 1
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 2]],
				'color': colores['rojo-oscuro'],
    			'seats': 2
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 2], ['PSCH', 1]],
				'color': colores['violeta'],
    			'seats': 3
    		}
    	},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Los Lagos': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN', 5]],
				'color': colores['azul'],
    			'seats': 5
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 3]], 
				'color': colores['azul-marino'],
   				'seats': 3
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['IND', 1]],
				'color': colores['rojo-oscuro'],
    			'seats': 2
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['PSCH', 3]],
				'color': colores['violeta'],
    			'seats': 6
    		}
    	},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   ],
   'Región de Aysén del Gral. Ibañez del Campo': [
	   	{
	   		'Chile Vamos RN-EVO': {
	   			'parties': [['RN',3]],
				'color': colores['azul'],
	    		'seats': 3
	    	},
	   		'Chile Vamos UDI-PRI': {
	   			'parties': [['UDI', 2]], 
				'color': colores['azul-marino'],
	   			'seats': 2
	   		},
	   		'Frente Amplio': {
	   			'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
	   			'seats': 1
	   		},
	   		'Por un Chile Justo y Descentralizado': {
	   			'parties': [['PPD', 1],['PRSD', 2],['PCCH',1]],
				'color': colores['rojo-oscuro'],
	    		'seats': 4
	    	},
	   		'Unidos por la Descentralización': {
	   			'parties': [['PDC', 3], ['PSCH', 1]],
				'color': colores['violeta'],
	    		'seats': 4
	    	}
	    },
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Magallanes y Antártica Chilena': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN',2],['IND', 2]],
				'color': colores['azul'],
    			'seats': 4
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 2]], 
				'color': colores['azul-marino'],
   				'seats': 2
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['IND', 1],['PCCH', 1]],
				'color': colores['rojo-oscuro'],
    			'seats': 3
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 2],['PSCH', 2],['IND', 1]],
				'color': colores['violeta'],
   				'seats': 5
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	]
}

var hoveredStateId = null;
var clicked = false;
map.on('click', 'cores', function() {
	clicked = !clicked;
});
map.on('mousemove', 'cores', function (e){
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
	var prov = e.features[0].properties.PROV;
	var circ = e.features[0].properties['NOM_CIRC'];
	var nconc = e.features[0].properties['NConcReg'];
	var concejeros = '<table style="border-collapse:collapse">';
	var lista_ant = '';
	for (i = 1; i <= nconc; i++) {
		var beg = 'Conc';
		if (i<10) beg += '0';
		beg += i;
		var lista = e.features[0].properties[beg+'_Lis'];
		var partido = e.features[0].properties[beg+'_Ptd'];
		var perct = e.features[0].properties[beg+'_Pct'];
		var perctL = e.features[0].properties[beg+'_PctL'];
		if (lista!=lista_ant) {
			concejeros += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
			concejeros += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
		};
		concejeros += '<tr>';	
		concejeros += '<td><span class="legend-key" style="background-color:'+coloresCORE[lista]+'"></span>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
			concejeros += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
		} else {
			concejeros += e.features[0].properties[beg+'_Nom'];
		}
		concejeros += '</td><td style="padding-left:10px">'+partido+'</td>';
		concejeros += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
		concejeros += '</tr>';
		if (e.features[0].properties.hasOwnProperty(beg+'_Rem') && e.features[0].properties[beg+'_Rem']!="") {
			concejeros += '<tr>'
			concejeros += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
			concejeros += e.features[0].properties[beg+'_Rem'] +'</td>'
			concejeros += '</tr>'	
		}
		lista_ant = lista;
	}
	concejeros += '</table>';

	var comunas = '';
	var count = 1;
	var comStr = e.features[0].properties.COMUNAS;
	for (key in comStr) {
		if (!['{','}','1','2','3','4','5','6','7','8','9','0','"',':',','].includes(comStr[key])) comunas += comStr[key];
		if ([','].includes(comStr[key])){ 
			comunas += ', ';
			count += 1;
			if (count==4) {count=0; comunas += '<br>';}
		}
	}

	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">Circunscripción Provincial '+circ+'</span><br>Comunas: '+comunas+'<br>'+region+'</h4>'+concejeros
			)
		.addTo(map);


    if (screen.width>=992) {
    	legend2.style.display = 'block';
    	legend2.innerHTML = 'Consejeros Regionales 2018-2022<br>'+ region;
    	legend2.style.fontWeight = 'bold';
    	legend2.style.textAlign = 'center';
    	var div = document.createElement('div');
    	div.appendChild(generateSVG(region2cores[region][0], region2cores[region][1], true, "Cores"));
    	legend2.appendChild(div);
    }
});
map.on('mouseleave', 'cores', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
    if (screen.width>=992 & !clicked) {
    	legend2.style.display = 'none';
    }
});

map.on('mousemove', 'gobernadores-electos', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('2021-05_Gob_Nom')) {
		var nombre = e.features[0].properties['2021-05_Gob_Nom'];
		var perct = e.features[0].properties['2021-05_Gob_Pct'];
		var partido = e.features[0].properties['2021-05_Gob_Ptd'];
		var lista = e.features[0].properties['2021-05_Gob_Lis'];
		var sex = e.features[0].properties['2021-05_Gob_Sex'];
		var participacion = e.features[0].properties['2021-05_Part_TR'];
		if (sex=='H') var title = 'Goberador electo:';
		else var title = 'Goberandora electa:';
		if (e.features[0].properties.hasOwnProperty('2021-05_Gob2v1_Nom')) {
			if (nombre == e.features[0].properties['2021-05_Gob2v1_Nom']) {
				var perct2 = e.features[0].properties['2021-05_Gob2v1_Pct'];
			} else {
				var perct2 = e.features[0].properties['2021-05_Gob2v2_Pct'];
			}
			var participacion2 = e.features[0].properties['2021-05_Part2_TR'];
			popup.setLngLat(e.lngLat)
				.setHTML(
					'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
					'<p>'+title+'<br>  '+lista+' ('+partido+')<br>'+
					'<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
					'<span style="font-weight:bold">'+nombre+'</span><br>'+
					'Porcentaje: '+perct2+'% (1a. vuelta), '+perct+'% (2a. vuelta)</p>'+
					'<h5>Participación: '+participacion+'% (1a. vuelta), '+participacion2+'% (2a. vuelta)</h5>'					
					)
				.addTo(map); 
		} else {
			popup.setLngLat(e.lngLat)
				.setHTML(
					'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
					'<p>'+title+'<br>  '+lista+' ('+partido+')<br>'+
					'<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
					'<span style="font-weight:bold">'+nombre+'</span><br>'+
					'Porcentaje: '+perct+'%</p>'+
					'<h5>Participación: '+participacion+'%</h5>'			
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
	'Por Todo Chile': colores['rosado'],
};


map.on('mousemove', 'diputados', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var participacion = e.features[0].properties['2017-11_Part_TD'];
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
	diputados += '<h5>Participación: '+participacion+'%</h5>';

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
            

map.on('mousemove', 'concejales', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var nconc = e.features[0].properties.NConc;
	var participacion = e.features[0].properties.Part;
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
	innerHTML += '<h5>Participación: '+participacion+'%</h5>';
	popup.setLngLat(e.lngLat).setHTML(innerHTML).addTo(map);
});
map.on('mouseleave', 'concejales', function () {
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
	var participacion = e.features[0].properties.Part;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+comuna+'</span></h4>'+
			'<p>Alcalde(sa) Electo(a):<br>  '+lista+' ('+partido+')<br>'+
			'<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
			'<span style="font-weight:bold">'+nombre+'</span><br>'+
			'Porcentaje: '+perct+'%</p>'+
			'<h5>Participación: '+participacion+'%</h5>'		
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
    map.setLayoutProperty('cores', 'visibility', 'none');

	document.getElementById('a-diputados').style.color = 'gray';
	document.getElementById('a-senadores').style.color = 'gray';
	document.getElementById('a-gobernadores').style.color = 'gray';
	document.getElementById('a-cores').style.color = 'gray';
	document.getElementById('a-alcaldes').style.color = 'gray';
	document.getElementById('a-concejales').style.color = 'gray';
	legend2.innerHTML = '';
	legend2.style.fontWeight = '';
	legend2.style.textAlign = '';
}


function mostrarDiputados() {
	clean()
	map.setLayoutProperty('distritos-outline', 'visibility', 'visible');
	map.setLayoutProperty('diputados', 'visibility', 'visible');
	map.setLayoutProperty('dip-markers', 'visibility', 'visible');
	map.setLayoutProperty('dip-markers-lines', 'visibility', 'visible');
	document.getElementById('a-diputados').style.color = 'black';

	var parl_listas = {
		'Chile Vamos': {
			'seats': 68,
			'color': colores['azul'],
			'parties': [['RN', 32], ['UDI', 27], ['EVO', 6], ['IND', 3]]
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


	var parliament = {
		'Chile Vamos (UDI)': {
			'seats': 27,
			'color': '#2473ac',//colores['azul'],
			'names': [
				["BALTOLU RASERA NINO (UDI)", false],
				["TRISOTTI MARTINEZ RENZO (UDI)", false],
				["NOMAN GARRIDO NICOLAS (UDI)", false],
				["GAHONA SALAZAR SERGIO (UDI)", false],
				["FUENZALIDA COBO JUAN MANUEL (UDI)", false],
				["HOFFMANN OPAZO MARIA JOSE (UDI)", false],
				["URRUTIA SOTO OSVALDO (UDI)", false],
				["LAVIN LEON JOAQUIN (UDI)", false],
				["LABBE MARTINEZ CRISTIAN (UDI)", false],
				["ALESSANDRI VERGARA JORGE (UDI)", false],
				["RAMIREZ DIEZ GUILLERMO (UDI)", false],
				["MOREIRA BARROS CRISTHIAN (UDI)", false],
				["CARTER FERNANDEZ ALVARO (UDI)", false],
				["COLOMA ALAMOS JUAN ANTONIO (UDI)", false],
				["CUEVAS CONTRERAS NORA (UDI)", false],
				["MACAYA DANUS JAVIER (UDI)", false],
				["MASFERRER VIDAL JUAN MANUEL (UDI)", false],
				["BARROS MONTERO RAMON (UDI)", false],
				["MORALES MUÑOZ CELSO (UDI)", false],
				["ALVAREZ-SALAMANCA RAMIREZ PEDRO PABLO (UDI)", false],
				["RENTERIA MOLLER ROLANDO (UDI)", false],
				["SANHUEZA DUEÑAS GUSTAVO (UDI)", false],
				["VAN RYSSELBERGHE HERRERA ENRIQUE (UDI)", false],
				["BOBADILLA MUÑOZ SERGIO (UDI)", false],
				["NORAMBUENA FARIAS IVAN (UDI)", false],
				["VON MUHLENBROCK ZAMORA GASTON (UDI)", false],
				["HERNANDEZ HERNANDEZ JAVIER (UDI)", false]
			]
		},
		'Chile Vamos (EVO)': {
			'seats': 6,
			'color': '#4f93ce', //colores['azul'],
			'names': [
				["KAST SOMMERHOFF PABLO (IND-EVO)", false],
				["KEITEL BIANCHI SEBASTIAN (IND-EVO)", false],
				["CRUZ-COKE CARVALLO LUCIANO (EVO)", false],
				["UNDURRAGA GAZITUA FRANCISCO (EVO)", false],
				["MOLINA MAGOFKE ANDRES (EVO)", false],
				["ALVAREZ RAMIREZ SEBASTIAN (EVO)", false]
			]
		},
		'Chile Vamos (IND)': {
			'seats': 3,
			'color': '#6496c8',//colores['azul'],
			'names': [
				["TRONCOSO HELLMAN VIRGINIA (IND)", false],
				["BERGER FETT BERNARDO (IND)", false],
				["AMAR MANCILLA SANDRA (IND)", false]
			]
		},
		'Chile Vamos (RN)': {
			'seats': 32,
			'color': '#3b83bd', //colores['azul'],
			'names': [
				["GALLEGUILLOS CASTILLO RAMON (RN)", false],
				["NUÑEZ URRUTIA PAULINA (RN)", false],
				["CASTRO BASCUÑAN JOSE MIGUEL (RN)", false],
				["CID VERSALOVIC SOFIA (RN)", false],
				["EGUIGUREN CORREA FRANCISCO (RN)", false],
				["LONGTON HERRERA ANDRES (RN)", false],
				["PARDO SAINZ LUIS (RN)", false],
				["FLORES OPORTO CAMILA (RN)", false],
				["CELIS MONTT ANDRES (RN)", false],
				["MORAN BAHAMONDES CAMILO (RN)", false],
				["OLIVERA DE LA FUENTE ERIKA (IND-RN)", false],
				["DURAN ESPINOZA JORGE (RN)", false],
				["FUENTES BARROS TOMAS (RN)", false],
				["TORREALBA ALVARADO SEBASTIAN (RN)", false],
				["FUENZALIDA FIGUEROA GONZALO (RN)", false],
				["DEL REAL MIHOVILOVIC CATALINA (RN)", false],
				["LUCK URBAN KARIN (RN)", false],
				["OSSANDON IRARRAZABAL XIMENA (RN)", false],
				["PEREZ LAHSEN LEOPOLDO (RN)", false],
				["DURAN SALINAS EDUARDO (RN)", false],
				["SCHALPER SEPULVEDA DIEGO (IND-RN)", false],
				["REY MARTINEZ HUGO (RN)", false],
				["SAUERBAUM MUÑOZ FRANK (RN)", false],
				["MUÑOZ GONZALEZ FRANCESCA (RN)", false],
				["ROMERO SAEZ LEONIDAS (RN)", false],
				["PAULSEN KEHR DIEGO (RN)", false],
				["RATHGEB SCHIFFERLI JORGE (RN)", false],
				["GARCIA GARCIA RENE MANUEL (RN)", false],
				["MELLADO SUAZO MIGUEL (RN)", false],
				["SANTANA TIRACHINI ALEJANDRO (RN)", false],
				["KUSCHEL SILVA CARLOS IGNACIO (RN)", false],
				["LEUQUEN URIBE ARACELY (RN)", false],
			]
		},
		'La Fuerza de la Mayoría (PS)': {
			'seats': 17,
			'color': colores['rojo-oscuro'],
			'names': [
				["ROCAFULL LOPEZ LUIS (PS)", false],
				["CICARDINI MILLA DANIELLA (PS)", false],
				["SANTANA CASTILLO JUAN RUBEN (PS)", false],
				["SALDIVAR AUGER RAUL (PS)", false],
				["SCHILLING RODRIGUEZ MARCELO (PS)", false],
				["FERNANDEZ ALLENDE MAYA (PS)", false],
				["LEIVA CARVAJAL RAUL (PS)", false],
				["SOTO FERRADA LEONARDO (PS)", false],
				["CASTRO GONZALEZ JUAN LUIS (PS)", false],
				["NARANJO ORTIZ JAIME (PS)", false],
				["SAAVEDRA CHANDIA GASTON (PS)", false],
				["TOHA GONZALEZ JAIME (PS)", false],
				["MONSALVE BENAVIDES MANUEL (PS)", false],
				["ILABACA CERDA MARCOS (PS)", false],
				["ESPINOZA SANDOVAL FIDEL (PS)", false],
				["NUYADO ANCAPICHUN EMILIA IRIS (PS)", false],
				["ALVAREZ VERA JENNY (PS)", false]
			]
		},
		'La Fuerza de la Mayoría (PPD)': {
			'seats': 8,
			'color': '#b40000',//colores['rojo-oscuro'],
			'names': [
				["MARZAN PINTO CAROLINA (PPD)", false],
				["GONZALEZ TORRES RODRIGO (PPD)", false],
				["GIRARDI LAVIN CRISTINA (PPD)", false],
				["JIMENEZ FUENTES TUCAPEL FRANCISCO (PPD)", false],
				["SOTO MARDONES RAUL (PPD)", false],
				["RUBIO ESCOBAR PATRICIA (PPD)", false],
				["PARRA SAUTEREL ANDREA (PPD)", false],
				["CELIS ARAYA RICARDO (PPD)", false]
			]
		},
		'La Fuerza de la Mayoría (PRSD)': {
			'seats': 5,
			'color': '#bf2c17',//colores['rojo-oscuro'],
			'names': [
				["HERNANDO PEREZ MARCELA XIMENA (PRSD)", false],
				["MELLADO PINO COSME (PRSD)", false],
				["SEPULVEDA SOTO ALEXIS (PRSD)", false],
				["PEREZ ARRIAGADA JOSE (PRSD)", false],
				["MEZA MONCADA FERNANDO (PRSD)", false]
			]
		},
		'Frente Amplio (RD)': {
			'seats': 6,
			'color': '#21c27b', //colores['verde-agua'],
			'names': [
				["PEREZ SALINAS CATALINA (RD)", false],
				["BRITO HASBUN JORGE (RD)", false],
				["ORSINI PASCAL MAITE (RD)", false],
				["JACKSON DRAGO GIORGIO (RD)", false],
				["CRISPI SERRANO MIGUEL (RD)", false],
				["SANDOVAL OSORIO MARCELA (RD)", false]
			]
		},
		'Frente Amplio (CS)': {
			'seats': 4,
			'color': '#00b771', //colores['verde-agua'],
			'names': [
				["IBAÑEZ COTRONEO DIEGO (CS)", false],
				["WINTER ETCHEBERRY GONZALO (CS)", false],
				["YEOMANS ARAYA GAEL FERNANDA (CS)", false],
				["BORIC FONT GABRIEL (CS)", false]
			]
		},
		'Frente Amplio (COM)': {
			'seats': 2,
			'color': '#33cd85',//colores['verde-agua'],
			'names': [
				["ROJAS VALDERRAMA CAMILA (COMUNES)", false],
				["MIX JIMENEZ CLAUDIA NATHALIE (COMUNES)", false]
			]
		},
		'Frente Amplio (UNIR)': {
			'seats': 1,
			'color': '#42d88f',//colores['verde-agua'],
			'names': [
				["DIAZ DIAZ MARCELO (UNIR)", false]
			]
		},
		'Chile Digno (PCCH)': {
			'seats': 9,
			'color': colores['rojo'],
			'names': [
				["MORAGA MAMANI RUBEN (PCCH)", false],
				["NUÑEZ ARANCIBIA DANIEL (PCCH)", false],
				["HERTZ CADIZ CARMEN (PCCH)", false],
				["CARIOLA OLIVA KAROL (PCCH)", false],
				["BARRERA MORENO BORIS ANTHONY (PCCH)", false],
				["VALLEJO DOWLING CAMILA (PCCH)", false],
				["LABRA SEPULVEDA AMARO (PCCH)", false],
				["TEILLIER DEL VALLE GUILLERMO (PCCH)", false],
				["SANTIBAÑEZ NOVOA MARISELA (PCCH)", false]
			]
		},
		'Chile Digno (AH)': {
			'seats': 1,
			'color': '#ff5232',//colores['rojo'],
			'names': [
				["HIRSCH GOLDSCHMIDT TOMAS (AH)", false]
			]
		},
		'Chile Digno (FRVS)': {
			'seats': 3,
			'color': '#ca6048',//colores['rojo'],
			'names': [
				["VELASQUEZ NUÑEZ ESTEBAN JORGE (FRVS)", false],
				["MULET MARTINEZ JAIME (FRVS)", false],
				["SEPULVEDA ORBENES ALEJANDRA (FRVS)", false]
			]
		},
		'Convergencia Democrática': {
			'seats': 12,
			'color': colores['marron'],
			'parties': [['PDC', 12]],
			'names': [
				["WALKER PRIETO MATIAS (PDC)", false],
				["VERDESSI BELEMMI DANIEL ANGEL (PDC)", false],
				["TORRES JELDES VICTOR MARCELO (PDC)", false],
				["SILBER ROMO GABRIEL (PDC)", false],
				["MATTA ARAGAY MANUEL JOSE (PDC)", false],
				["SABAG VILLALOBOS JORGE EDUARDO (PDC)", false],
				["ORTIZ NOVOA JOSE MIGUEL (PDC)", false],
				["PEREZ OLEA JOANNA (PDC)", false],
				["VENEGAS CARDENAS MARIO ARTIDORO (PDC)", false],
				["FLORES GARCIA IVAN ALBERTO (PDC)", false],
				["ASCENCIO MANSILLA GABRIEL HECTOR (PDC)", false],
				["CALISTO AGUILA MIGUEL ANGEL (PDC)", false]
			]
		},
		'Nuevo Trato (PL)': {
			'seats': 2,
			'color': colores['amarillo'],
			'names': [
				["MIROSEVIC VERDUGO VLADO (PL)", false],
				["BERNALES MALDONADO ALEJANDRO JAVIER (PL)", false]
			]
		},
		'Nuevo Trato (IND)': {
			'seats': 2,
			'color': '#e8ca3e',//colores['amarillo'],
			'names': [
				["VIDAL ROJAS PABLO (IND)", false],
				["CASTILLO MUÑOZ NATALIA (IND)", false]
			]
		},
		'Acción Republicana (PLR)': {
			'seats': 1,
			'color': colores['azul-marino'],
			'names': [
				["URRUTIA BONILLA IGNACIO (PLR)", false]
			]
		},
		'Acción Republicana (IND)': {
			'seats': 3,
			'color': '#40447b',//colores['azul-marino'],
			'names': [
				["PRIETO LORCA PABLO (IND)", false],
				["URRUTICOECHEA RIOS CRISTOBAL (IND)", false],
				["JURGENSEN RUNDSHAGEN HARRY (IND)", false]
			]
		},
		'Fuera de Pacto': {
			'seats': 11,
			'color': colores['gris'],
			'parties': [['PH', 1], ['PEV', 1], ['IND', 9]],
			'names': [
				["VELASQUEZ SEGUEL PEDRO ANTONIO (IND-FRVS)", false],
				["AUTH STEWART PEPE (IND)", false],
				["JILES MORENO PAMELA (PH)", false],
				["LORENZINI BASSO PABLO (IND)", false],
				["ALARCON ROJAS FLORCITA (IND)", false],
				["JARPA WEVAR CARLOS ABEL (IND)", false],
				["GONZALEZ GATICA FELIX (PEV)", false],
				["SAFFIRIO ESPINOZA RENE (IND)", false],
				["ROSAS BARRIENTOS PATRICIO (IND)", false],
				["ALINCO BUSTOS RENE OSVALDO (IND)", false],
				["BIANCHI RETAMALES KARIM ANTONIO (IND)", false]
			]
 		}
	}
    var parliament_order = {
    	'Fuera de Pacto': false,
    	'Chile Digno (PCCH)': true,
    	'Chile Digno (FRVS)': true,
    	'Chile Digno (AH)': true,
    	'Frente Amplio (RD)': true, 
    	'Frente Amplio (CS)': true, 
    	'Frente Amplio (COM)': true, 
    	'Frente Amplio (UNIR)': true, 
    	'Nuevo Trato (PL)': true, 
    	'Nuevo Trato (IND)': true, 
    	'La Fuerza de la Mayoría (PS)': true, 
    	'La Fuerza de la Mayoría (PPD)': true, 
    	'La Fuerza de la Mayoría (PRSD)': true, 
    	'Convergencia Democrática': true, 
    	'Chile Vamos (EVO)': true,
    	'Chile Vamos (RN)': true,
    	'Chile Vamos (IND)': true,
    	'Chile Vamos (UDI)': true,
    	'Acción Republicana (IND)': true,
    	'Acción Republicana (PLR)': true
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
    	legend2.style.height = '250px';
    	var div = document.createElement('div');
    	div.appendChild(generateSVG(parliament, parliament_order, true, "Diputados"));
    	legend2.appendChild(div);var span = document.createElement('span');
    	span.id = 'lista-seat';
    	span.innerHTML = '<br>';
    	legend2.appendChild(span);
    	var span = document.createElement('span');
    	span.id = 'nombre-seat';
    	span.innerHTML = 'Muévete sobre los puntos...';
    	legend2.appendChild(span);
    } else {
        legend.style.width = '255px';
        legend.style.maxWidth = '255px';
        legend.style.height = '150px';
    }

	legend.appendChild(getParliamentTable(parl_listas));
};

function mostrarSenadores() {
	clean()
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	map.setLayoutProperty('senadores2017', 'visibility', 'visible');
	map.setLayoutProperty('senadores2013', 'visibility', 'visible');
    map.setLayoutProperty('sen-markers', 'visibility', 'visible');	
	document.getElementById('a-senadores').style.color = 'black';

	var parl_listas = {
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
	var parliament = {
		'Chile Vamos (UDI)': {
			'seats': 9,
			'color': '#2473ac',//colores['azul'],
			'dotted': 5,
			'names': [
				["DURANA SEMIR JOSE (UDI)", false],
				["EBENSPERGER ORREGO LUZ (UDI)", false],
				["GARCIA-HUIDOBRO SANFUENTES ALEJANDRO (UDI)", true],
				["COLOMA CORREA JUAN ANTONIO (UDI)", false],
				["VAN RYSSELBERGHE HERRERA JACQUELINE (UDI)", true],
				["ALVARADO ANDRADE CLAUDIO (UDI)", true],
				["MOREIRA BARROS IVAN (UDI)", true],
				["SANDOVAL PLAZA DAVID (UDI)", false],
				["VON BAER JAHN ENA (UDI)", true]
			]
		},
		'Chile Vamos (RN)': {
			'seats': 8,
			'color': '#3b83bd', //colores['azul'],
			'dotted': 1,
			'names': [
				["PROHENS ESPINOSA RAFAEL (RN)", false],
				["CHAHUAN CHAHUAN FRANCISCO (RN)", false],
				["PUGH OLAVARRIA KENNETH (IND-RN)", false],
				["CASTRO PRIETO JUAN (IND-RN)", false],
				["GALILEA VIAL RODRIGO (RN)", false],
				["GARCIA RUMINOT JOSE (RN)", false],
				["SABAT FERNANDEZ MARCELA (RN)", true],
				["OSSANDON IRARRAZABAL MANUEL JOSE (RN)", true]
			]
		},
		'Chile Vamos (EVO)': {
			'seats': 2,
			'color': '#4f93ce', //colores['azul'],
			'dotted': 0,
			'names': [
				["KAST SOMMERHOFF FELIPE (EVO)", false],
				["ARAVENA ACUÑA CARMEN GLORIA (EVO)", false]
			]
		},
		'La Fuerza de la Mayoría (PS)': {
			'seats': 7,
			'color': colores['rojo-oscuro'],
			'dotted': 4,
			'names': [
				["INSULZA SALINAS JOSE MIGUEL (PS)", false],
				["ALLENDE BUSSI ISABEL (PS)", false],
				["LETELIER MOREL JUAN PABLO (PS)", true],
				["ELIZALDE SOTO ALVARO (PS)", false],
				["QUINTEROS LARA RABINDRANATH (PS)", true],
				["MONTES CISTERNAS CARLOS (PS)", true],
				["DE URRESTI LONGTON ALFONSO (PS)", true]
			]
		},
		'La Fuerza de la Mayoría (PPD)': {
			'seats': 8,
			'color': '#b40000',//colores['rojo-oscuro'],
			'dotted': 4,
			'names': [
				["SORIA QUIROGA JORGE (IND-PPD)", false],
				["ARAYA GUERRERO PEDRO (IND-PPD)", true],
				["MUÑOZ D'ALBORA ADRIANA (PPD)", true],
				["LAGOS WEBER RICARDO (PPD)", false],
				["CARVAJAL AMBIADO LORETO (PPD)", true],
				["QUINTANA LEAL JAIME (PPD)", false],
				["ORDENES NEIRA XIMENA (IND-PPD)", false],
				["GIRARDI LAVIN GUIDO (PPD)", true]
			]
		},
		'La Fuerza de la Mayoría (PRSD)': {
			'seats': 1,
			'color': '#bf2c17',//colores['rojo-oscuro'],
			'dotted': 1,
			'names': [
				["GUILLIER ALVAREZ ALEJANDRO (IND-PRSD)", true],
			]
		},
		'Convergencia Democrática': {
			'seats': 5,
			'color': colores['marron'],
			'parties': [['PDC', 5]],
			'dotted': 2,
			'names': [
				["PROVOSTE CAMPILLAY YASNA (PDC)", false],
				["PIZARRO SOTO JORGE (PDC)", true],
				["RINCON GONZALEZ XIMENA (PDC)", false],
				["HUENCHUMILLA JARAMILLO FRANCISCO (PDC)", false],
				["GOIC BOROEVIC CAROLINA (PDC)", true]
			]
		},
		'Frente Amplio': {
			'seats': 1,
			'color': colores['verde-agua'],
			'parties': [['RD', 1]],
			'dotted': 0,
			'names': [
				["LATORRE RIVEROS JUAN IGNACIO (RD)", false]
			]
		},
		'Progresistas': {
			'seats': 1,
			'color': colores['rosado'],
			'parties': [['PRO', 1]],
			'dotted': 1,
			'names': [
				["NAVARRO BRAIN ALEJANDRO (PRO)", true]
			]
		},
		'Candidatura Independiente': {
			'seats': 1,
			'color': colores['gris'],
			'parties': [['IND', 1]],
			'dotted': 1,
			'names': [
				["BIANCHI CHELECH CARLOS (IND)", true]
			]
		}
	}
    var parliament_order = {
    	'Frente Amplio': true, 
    	'La Fuerza de la Mayoría (PS)': true, 
    	'La Fuerza de la Mayoría (PRSD)': true, 
    	'La Fuerza de la Mayoría (PPD)': true, 
    	'Progresistas': true, 
    	'Candidatura Independiente': true,
    	'Convergencia Democrática': true, 
    	'Chile Vamos (EVO)': true,
    	'Chile Vamos (RN)': true,
    	'Chile Vamos (UDI)': true,
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
    	legend2.style.height = '300px';
    	var div = document.createElement('div');
    	div.appendChild(generateSVG(parliament, parliament_order, true, "Senado"));
    	legend2.appendChild(div);
    	var span = document.createElement('span');
    	span.id = 'lista-seat';
    	span.innerHTML = '<br>';
    	legend2.appendChild(span);
    	var span = document.createElement('span');
    	span.id = 'nombre-seat';
    	span.innerHTML = 'Muévete sobre los puntos...';
    	legend2.appendChild(span);
    } else {
        legend.style.width = '240px';
        legend.style.maxWidth = '240px';
        legend.style.height = '120px';
    }

	legend.appendChild(getParliamentTable(parl_listas));
};

function mostrarCORES() {
	clean();
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    //map.setLayoutProperty('comunas-outline', 'visibility', 'visible');	
    map.setLayoutProperty('cores', 'visibility', 'visible');
	document.getElementById('a-cores').style.color = 'black';

	parliament = {
		'Chile Vamos RN-EVO': {
			'seats': 76,
			'color': colores['azul'],
			'parties': [['RN', 71], ['EVO', 5]]
		},
		'Unidos por la Descentr.': {
			'seats': 71,
			'color': colores['violeta'],
			'parties': [['PDC', 45], ['PS', 26]]
		},
		'Chile Vamos UDI-PRI': {
			'seats': 56,
			'color': colores['azul-marino'],
			'parties': [['UDI', 52], ['PRI', 4]]
		},
		'Por un Chile Justo y Descentr.': {
			'seats': 45,
			'color': colores['rojo-oscuro'],
			'parties': [['PPD', 23], ['PCCH', 12], ['PRSD', 8], ['MAS', 1], ['IC', 1]]
		},
		'Frente Amplio': {
			'seats': 19,
			'color': colores['verde-agua'],
			'parties': [['RD', 8], ['PH', 6], ['IGUAL', 2], ['COM', 2], ['CS',1]]
		},
		'Por Todo Chile': {
			'seats': 1,
			'color': colores['rosado'],
			'parties': [['PRO', 1]]
		},
		'Sumemos': {
			'seats': 2,
			'color': colores['celeste'],
			'parties': [['AMPLI', 2]]
		},
		'Coalición Regionalista Verde': {
			'seats': 2,
			'color': colores['verde'],
			'parties': [['FREVS', 2]]
		},
		'Frente Ecologista y Ciudadano': {
			'seats': 2,
			'color': colores['verde2'],
			'parties': [['PODER', 2]]
		},
		'Integración para el Desarrollo': {
			'seats': 1,
			'color': colores['naranja'],
			'parties': [['PLIR', 1]]
 		},
		'Fuera de Pacto': {
			'seats': 2,
			'color': colores['gris'],
			'parties': [['IND', 2]]
 		}
	}


	legend.style.display = 'block';
    legend.innerHTML = '';
    if (screen.width>=992) {
    	legend.style.width = '540px';
    	legend.style.maxWidth = '540px';
    	legend.style.height = '240px';
    	legend2.style.display = 'none';
    	legend2.style.maxWidth = '850px';
    	legend2.style.width = '360px';
    	legend2.style.height = '250px';
    } else {
        legend.style.width = '295px';
        legend.style.maxWidth = '295px';
        legend.style.height = '205px';
    }

	legend.appendChild(getParliamentTable(parliament));
}

function mostrarGobernadores() {
	clean();
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'visible');
	document.getElementById('a-gobernadores').style.color = 'black';

	legend.style.display = 'block';
	legend2.style.display = 'none';
    legend.innerHTML = '<span style="font-weight:bold;">Goberadores Regionales 2021-2025</span>';

    if (screen.width>=992) {
    	legend.style.width = '235px';
    	legend.style.maxWidth = '235px';
    	legend.style.height = '130px';
    } else {
        legend.style.width = '185px';
        legend.style.maxWidth = '185px';
        legend.style.height = '110px';
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
    legend.innerHTML = '<span style="font-weight:bold">Alcaldes 2021-2024</span>';
    if (screen.width>=992) {
    	legend.style.width = '470px';
    	legend.style.maxWidth = '470px';
    	legend.style.height = '175px';
    	legend2.style.display = 'block';
    	legend2.style.maxWidth = '850px';
    	legend2.style.width = '650px';
    	legend2.style.height = '18px';
    	legend2.innerHTML = 'Transparencia depende del porcentaje del candidato electo.';
    } else {
        legend.style.width = '270px';
        legend.style.maxWidth = '270px';
        legend.style.height = '150px';
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
    	legend.style.height = '415px';

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
	legend.innerHTML = '<span style="font-weight:bold">Alcaldes 2021-2024</span><br>Selecciona lista/partidos y verás si tienen mayoría en el concejo.<br>';



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
	var blackDots = [];
	for (var party in parliament) {
		for (var _i2 = 0; _i2 < parliament[party].seats; _i2++) {
			ring = nextRing(points, ringProgress, parliament[party].ordered);
			points[ring][ringProgress[ring]].fill = parliament[party].color;
			points[ring][ringProgress[ring]].party = party.replace(/ /g,"-");
			if (parliament[party].hasOwnProperty('names')) {
				points[ring][ringProgress[ring]].name = parliament[party].names[_i2][0];
				if (parliament[party].names[_i2][1]) {
					var newpoint = {};
					newpoint.x = points[ring][ringProgress[ring]].x;
					newpoint.y = points[ring][ringProgress[ring]].y;
					newpoint.r = points[ring][ringProgress[ring]].r/2.8;
					newpoint.fill = colores['negro'];
					newpoint.name = parliament[party].names[_i2][0];
					newpoint.party = party.replace(/ /g,"-");
					blackDots.push(newpoint);
				}
			} else if (parliament[party].hasOwnProperty('dotted') && _i2<parliament[party].dotted) {
				var newpoint = {};
				newpoint.x = points[ring][ringProgress[ring]].x;
				newpoint.y = points[ring][ringProgress[ring]].y;
				newpoint.r = points[ring][ringProgress[ring]].r/2.8;
				newpoint.fill = colores['negro'];
				blackDots.push(newpoint);
			}
			ringProgress[ring]++;
		}
	}
	return [merge(points), merge(blackDots)];
}
function generateSVG(_parliament, order, seatCount, type) {
	var parliament = {};
	for (party in order) {
		parliament[party] = _parliament[party];
		_parliament[party].ordered = order[party];
	}
	var radius = 20;
	var ret = generatePoints(parliament, radius);
	var points = ret[0];
	var blackDots = ret[1];
	var a = points[0].r / 0.4;

	var xmlns = "http://www.w3.org/2000/svg";
	var x = -radius - a / 2;
	var y = -radius - a / 2;
    var boxWidth = 2 * radius + a;
    if (blackDots.length > 0) var boxHeight = radius + 2.5*a;
    else var boxHeight = radius + a;

    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", x + " " + y + " " + boxWidth + " " + boxHeight);
	svgElem.setAttributeNS(null, "width", "100%");
    svgElem.setAttributeNS(null, "height", "100%");
    svgElem.setAttributeNS(null, "baseProfile", "tiny");
    svgElem.setAttributeNS(null, "version", "1.2");
    
    /*
    var script = document.createElementNS(xmlns, "script");
    script.setAttributeNS(null, "type", "text/ecmascript")
    script.innerHTML = '<![CDATA[function change(evt){var svgobj=evt.getTarget(); svgobj.style.opacity=0.3;}]]>'
    svgElem.appendChild(script);
	*/

    for (index in points) {
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "class", "parliament-seat "+points[index].party);
    	circle.setAttributeNS(null, "onmousemove", "touchParliamentSeat(evt)");
    	circle.setAttributeNS(null, "onmouseleave", "unTouchParliamentSeat(evt)");
    	circle.setAttributeNS(null, "cx", points[index].x);
    	circle.setAttributeNS(null, "cy", points[index].y);
    	circle.setAttributeNS(null, "r", points[index].r);
    	circle.setAttributeNS(null, "fill", points[index].fill);
    	circle.setAttributeNS(null, "data-name", points[index].name);
    	circle.setAttributeNS(null, "data-party", points[index].party);
    	svgElem.appendChild(circle);
    }
    for (index in blackDots) {
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", blackDots[index].x);
    	circle.setAttributeNS(null, "cy", blackDots[index].y);
    	circle.setAttributeNS(null, "r", blackDots[index].r);
    	circle.setAttributeNS(null, "fill", blackDots[index].fill);
    	if (blackDots[index].hasOwnProperty('name')) {
    		circle.setAttributeNS(null, "class", "parliament-seat "+blackDots[index].party);
    		circle.setAttributeNS(null, "data-name", blackDots[index].name);
    		circle.setAttributeNS(null, "data-party", blackDots[index].party);
    		circle.setAttributeNS(null, "data-dotted", "yes");
	    	circle.setAttributeNS(null, "onmousemove", "touchParliamentSeat(evt)");
	    	circle.setAttributeNS(null, "onmouseleave", "unTouchParliamentSeat(evt)");
    	}
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
    if (blackDots.length > 0) {
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", -3*a);
    	circle.setAttributeNS(null, "cy", 1.5*a);
    	circle.setAttributeNS(null, "r", points[0].r);
    	circle.setAttributeNS(null, "fill", colores['suave']);
    	svgElem.appendChild(circle);
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", 1*a);
    	circle.setAttributeNS(null, "cy", 1.5*a);
    	circle.setAttributeNS(null, "r", points[0].r);
    	circle.setAttributeNS(null, "fill", colores['suave']);
    	svgElem.appendChild(circle);
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", 1*a);
    	circle.setAttributeNS(null, "cy", 1.5*a);
    	circle.setAttributeNS(null, "r", points[0].r/2.8);
    	circle.setAttributeNS(null, "fill", colores['negro']);
    	svgElem.appendChild(circle);
    	if (type=="Senado") {
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '2018-2026';
	    	text.setAttributeNS(null, "x", -2.5*a);
	    	text.setAttributeNS(null, "y", 1.65*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/2.2+"px");
	    	text.setAttributeNS(null, "text-anchor", "start");
	    	svgElem.appendChild(text);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '2014-2022';
	    	text.setAttributeNS(null, "x", 1.5*a);
	    	text.setAttributeNS(null, "y", 1.65*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/2.2+"px");
	    	text.setAttributeNS(null, "text-anchor", "start");
	    	svgElem.appendChild(text);
    	}
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

