mapboxgl.accessToken = 'pk.eyJ1IjoibWF1cm8tZXNjb2JhciIsImEiOiJja3A1aGxiajIwZ3lrMnRxdHN1M2NhcXpiIn0.mXzXiupFZlOThQTwmpK20Q';

// 'azul': '#0054A0'
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

var coloresConv = [
	'match',
	['get', 'ConvLMV'],
	'APRUEBO DIGNIDAD', colores['verde-agua'],
	'ASAMBLEA CONSTITUYENTE ATACAMA', colores['rosado'],
	'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D12)', colores['azul-marino'],
	'LA LISTA DEL PUEBLO (D13)', colores['rosado'],
	'LA LISTA DEL PUEBLO 100% INDEPENDIENTES (D15)', colores['rosado'],
	'LA LISTA DEL PUEBLO DISTRITO 9 (D9)', colores['rosado'],
	'LA LISTA DEL PUEBLO MAULE SUR (D18)', colores['rosado'],
	'LISTA DEL APRUEBO', colores['violeta'],
	'LISTA DEL PUEBLO - MOVIMIENTO TERRITORIAL CONSTITUYENTE (D5)', colores['rosado'],
	'MOVIMIENTO INDEPENDIENTES DEL NORTE (D3)', colores['marron'],
	'REGIONALISMO CIUDADANO INDEPENDIENTE (D28)', colores['naranja'],
	'VAMOS POR CHILE', colores['azul'],
	colores['gris']
];


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

var coloresConc = {'CHILE VAMOS - PRI E IND': colores['azul'], 
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
			       'CANDIDATURA INDEPENDIENTE': colores['gris']};          

var coloresConcL = {'CHILE VAMOS': colores['azul'], 
			       'REPUBLICANOS Y CIUD.': colores['azul-marino'], 
			       'UNIDAD POR EL APRUEBO': colores['violeta'], 
			       'UNIDOS POR LA DIGNIDAD': colores['marron'], 
			       'CHILE DIGNO VERDE Y SOB.': colores['rojo'], 
			       'FRENTE AMPLIO': colores['verde-agua'], 
			       'ECOLOGISTAS E IND': colores['verde'], 
			       'UNION PATRIOTICA': colores['rojo-oscuro'], 
			       'DIGNIDAD AHORA': colores['amarillo'], 
			       'P. DE TRABAJADORES REVOL.': colores['naranja'], 
			       'CANDIDATURA IND.': colores['gris']};    

var shortNames = {'CHILE VAMOS': 'CV', 
			       'REPUBLICANOS Y CIUD.': 'RC',
			       'UNIDAD POR EL APRUEBO': 'UA', 
			       'UNIDOS POR LA DIGNIDAD': 'UD', 
			       'FRENTE AMPLIO': 'FA', 
			       'ECOLOGISTAS E IND': 'EC',
			       'CHILE DIGNO VERDE Y SOB.': 'CD',
			       'UNION PATRIOTICA': 'UP',
			       'DIGNIDAD AHORA': 'DA', 
			       'P. DE TRABAJADORES REVOL.': 'TR', 
			       'CANDIDATURA IND.': 'CI'};

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


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mauro-escobar/ckp5cjbcc1xgf18pvbfshxrze',
    zoom: 6,
    minZoom: 6,
    center: [-71.5,-27],
    bearing: 90,
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function(){
	var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }
    map.addSource('comunas-data',
    	{
            'type': 'vector',
            //'data': 'comunas.geojson'
            'url': 'mapbox://mauro-escobar.63q1jegu',
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
    }, 'nombre-comunas');
    map.addLayer({
        'id': 'distritos',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': [
                'match', ['get', 'DISTRITO'],
                '1', '#4e79a7',
                '2', '#e15759',
                '3', '#59a14f',
                '4', '#f28e2b',
                '5', '#76b7b2',
                '6', '#edc948',
                '7', '#b07aa1',
                '8', '#4e79a7',
                '9', '#e15759',
                '10', '#59a14f',
                '11', '#f28e2b',
                '12', '#b07aa1',
                '13', '#edc948',
                '14', '#76b7b2',
                '15', '#4e79a7',
                '16', '#e15759',
                '17', '#59a14f',
                '18', '#f28e2b',
                '19', '#76b7b2',
                '20', '#edc948',
                '21', '#b07aa1',
                '22', '#4e79a7',
                '23', '#e15759',
                '24', '#59a14f',
                '25', '#f28e2b',
                '26', '#76b7b2',
                '27', '#edc948',
                '28', '#b07aa1',
                '#ffffff'
            ],
        },
    }, 'zona-indeterminada');
    map.addLayer({
        'id': 'distritos-outline',
        'type': 'line',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint':{
            'line-color': '#ffffff',
            'line-width': 0.7,
            'line-opacity': [
            	'interpolate',
            	['linear'],
            	['zoom'],
            	6, 0,
            	10, 1,
            ]
        }
    }, 'zona-indeterminada');

    map.addLayer({
        'id': 'participacion-distritos',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': '#964B00',
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'Part_TD'],
            	25, 0,
            	60, 1,
            ]
        },
        'maxzoom': 6.2
    }, 'zona-indeterminada');
    map.setLayoutProperty('participacion-distritos', 'visibility', 'none');	

    map.addLayer({
        'id': 'participacion-comunas',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': colores['marron'],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'Part'],
            	25, 0,
            	60, 1,
            ]
        },
        'minzoom': 6.2
    }, 'zona-indeterminada');
    map.setLayoutProperty('participacion-comunas', 'visibility', 'none');	

    map.addLayer({
        'id': 'convencionales',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': coloresConv,
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'ConvPLMV'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'zona-indeterminada');
    map.setLayoutProperty('convencionales', 'visibility', 'none');	

    map.addLayer({
        'id': 'convencionalesMH-distritos',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': { 
            'fill-color': [
            	'interpolate',
            	['linear'],
            	['/', ['get', 'Conv_votM_D'],
            		  ['+', ['get', 'Conv_votM_D'], ['get', 'Conv_votH_D']]],
            	0.35, colores['naranja'],
            	0.50, colores['blanco'],
            	0.65, colores['violeta']
            ],
            'fill-opacity': 0.7
        },
        'maxzoom': 6.2
    }, 'zona-indeterminada');
    map.setLayoutProperty('convencionalesMH-distritos', 'visibility', 'none');	

    map.addLayer({
        'id': 'convencionalesMH-comunas',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': { 
            'fill-color': [
            	'interpolate',
            	['linear'],
            	['/', ['get', 'Conv_votM_C'],
            		  ['+', ['get', 'Conv_votM_C'], ['get', 'Conv_votH_C']]],
            	0.35, colores['naranja'],
            	0.50, colores['blanco'],
            	0.65, colores['violeta']
            ],
            'fill-opacity': 0.7
        },
        'minzoom': 6.2
    }, 'zona-indeterminada');
    map.setLayoutProperty('convencionalesMH-comunas', 'visibility', 'none');	

    map.addLayer({
        'id': 'concejales-outline',
        'type': 'line',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'line-color': colores['blanco'],
            'line-opacity': 0.3,
            'line-width': 0.5,
            //'fill-opacity': 0.5
        },
    }, 'zona-indeterminada');
    map.setLayoutProperty('concejales-outline', 'visibility', 'none');	

    map.addLayer({
        'id': 'concejales',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': colores['suave'],
        },
    }, 'concejales-outline');
    map.setLayoutProperty('concejales', 'visibility', 'none');	

    map.addLayer({
        'id': 'concejalesMH',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': [
            	'interpolate',
            	['linear'],
            	['/', ['get', 'Conc_votM_C'],
            		  ['+', ['get', 'Conc_votM_C'], ['get', 'Conc_votH_C']]],
            	0.35, colores['naranja'],
            	0.50, colores['blanco'],
            	0.65, colores['violeta']
            ],
            'fill-opacity': 0.7
        },
    }, 'concejales-outline');
    map.setLayoutProperty('concejalesMH', 'visibility', 'none');	

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
    }, 'zona-indeterminada');
    map.setLayoutProperty('alcaldes', 'visibility', 'none');		

    map.addLayer({
        'id': 'gobernadores-electos',
        'type': 'fill',
        'source': 'comunas-data',
        'source-layer': 'comunas-2t6cqo',
        'filter': ['has', 'Gob_Nom'],
        'paint': {
            'fill-color': [
            	'match', ['get', 'Gob_Lis'],
            	'CHILE VAMOS', colores['azul'],
            	'UNIDAD CONSTITUYENTE', colores['violeta'],
            	'CANDIDATURA INDEPENDIENTE', colores['gris'],
            	'FRENTE AMPLIO', colores['verde-agua'],
            	colores['gris']
            ],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'Gob_Pct'],
            	0, 0.3,
            	50, 1,
            ]
        },
    }, 'zona-indeterminada');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'none');	

    map.loadImage(
    	'images/stripe_azul_violeta.png',
    	function (err, image) {
    		if (err) throw err;
    		map.addImage('stripe-azul-violeta', image);
    		map.addLayer({
    			'id' : 'gobernadores-azul-violeta',
    			'type': 'fill',
    			'source': 'comunas-data',
                'source-layer': 'comunas-2t6cqo',
       			'filter': ['all',
       						['has', 'Gob2v1_Nom'],
       						['any',
       							['all', ['==', ['get', 'Gob2v1_Lis'], 'CHILE VAMOS'],
       									['==', ['get', 'Gob2v2_Lis'], 'UNIDAD CONSTITUYENTE'] ],
       							['all', ['==', ['get', 'Gob2v2_Lis'], 'CHILE VAMOS'],
       									['==', ['get', 'Gob2v1_Lis'], 'UNIDAD CONSTITUYENTE'] ],
       						]
        		  		  ],
    			'paint': {
    				'fill-pattern': 'stripe-azul-violeta',
		            'fill-opacity': [
		            	'interpolate',
		            	['linear'],
		            	['get', 'Gob2v1_Pct'],
		            	0, 0.3,
		            	50, 1,
		            ]
    			}
    		}, 'zona-indeterminada');
    		map.setLayoutProperty('gobernadores-azul-violeta', 'visibility', 'none');	
    	}
    );	

    map.loadImage(
    	'images/stripe_azul_gris.png',
    	function (err, image) {
    		if (err) throw err;
    		map.addImage('stripe-azul-gris', image);
    		map.addLayer({
    			'id' : 'gobernadores-azul-gris',
    			'type': 'fill',
    			'source': 'comunas-data',
                'source-layer': 'comunas-2t6cqo',
       			'filter': ['all',
       						['has', 'Gob2v1_Nom'],
       						['any',
       							['all', ['==', ['get', 'Gob2v1_Lis'], 'CHILE VAMOS'],
       									['==', ['get', 'Gob2v2_Lis'], 'CANDIDATURA INDEPENDIENTE'] ],
       							['all', ['==', ['get', 'Gob2v2_Lis'], 'CHILE VAMOS'],
       									['==', ['get', 'Gob2v1_Lis'], 'CANDIDATURA INDEPENDIENTE'] ],
       						]
        		  		  ],
    			'paint': {
    				'fill-pattern': 'stripe-azul-gris',
		            'fill-opacity': [
		            	'interpolate',
		            	['linear'],
		            	['get', 'Gob2v1_Pct'],
		            	0, 0.3,
		            	50, 1,
		            ]
    			}
    		}, 'zona-indeterminada');
    		map.setLayoutProperty('gobernadores-azul-gris', 'visibility', 'none');	
    	}
    );

    map.loadImage(
    	'images/stripe_azul_verde.png',
    	function (err, image) {
    		if (err) throw err;
    		map.addImage('stripe-azul-verde', image);
    		map.addLayer({
    			'id' : 'gobernadores-azul-verde',
    			'type': 'fill',
    			'source': 'comunas-data',
                'source-layer': 'comunas-2t6cqo',
       			'filter': ['all',
       						['has', 'Gob2v1_Nom'],
       						['any',
       							['all', ['==', ['get', 'Gob2v1_Lis'], 'CHILE VAMOS'],
       									['==', ['get', 'Gob2v2_Lis'], 'ECOLOGISTAS E INDEPENDIENTES'] ],
       							['all', ['==', ['get', 'Gob2v2_Lis'], 'CHILE VAMOS'],
       									['==', ['get', 'Gob2v1_Lis'], 'ECOLOGISTAS E INDEPENDIENTES'] ],
       						]
        		  		  ],
    			'paint': {
    				'fill-pattern': 'stripe-azul-verde',
		            'fill-opacity': [
		            	'interpolate',
		            	['linear'],
		            	['get', 'Gob2v1_Pct'],
		            	0, 0.3,
		            	50, 1,
		            ]
    			}
    		}, 'zona-indeterminada');
    		map.setLayoutProperty('gobernadores-azul-verde', 'visibility', 'none');	
    	}
    );

    map.loadImage(
    	'images/stripe_violeta_verde-agua.png',
    	function (err, image) {
    		if (err) throw err;
    		map.addImage('stripe-violeta-verde-agua', image);
    		map.addLayer({
    			'id' : 'gobernadores-violeta-verde-agua',
    			'type': 'fill',
    			'source': 'comunas-data',
                'source-layer': 'comunas-2t6cqo',
       			'filter': ['all',
       						['has', 'Gob2v1_Nom'],
       						['any',
       							['all', ['==', ['get', 'Gob2v1_Lis'], 'UNIDAD CONSTITUYENTE'],
       									['==', ['get', 'Gob2v2_Lis'], 'FRENTE AMPLIO'] ],
       							['all', ['==', ['get', 'Gob2v2_Lis'], 'UNIDAD CONSTITUYENTE'],
       									['==', ['get', 'Gob2v1_Lis'], 'FRENTE AMPLIO'] ],
       						]
        		  		  ],
    			'paint': {
    				'fill-pattern': 'stripe-violeta-verde-agua',
		            'fill-opacity': [
		            	'interpolate',
		            	['linear'],
		            	['get', 'Gob2v1_Pct'],
		            	0, 0.3,
		            	50, 1,
		            ]
    			}
    		}, 'zona-indeterminada');
    		map.setLayoutProperty('gobernadores-violeta-verde-agua', 'visibility', 'none');	
    	}
    );

    map.loadImage(
    	'images/stripe_violeta_gris.png',
    	function (err, image) {
    		if (err) throw err;
    		map.addImage('stripe-violeta-gris', image);
    		map.addLayer({
    			'id' : 'gobernadores-violeta-gris',
    			'type': 'fill',
    			'source': 'comunas-data',
                'source-layer': 'comunas-2t6cqo',
       			'filter': ['all',
       						['has', 'Gob2v1_Nom'],
       						['any',
       							['all', ['==', ['get', 'Gob2v1_Lis'], 'UNIDAD CONSTITUYENTE'],
       									['==', ['get', 'Gob2v2_Lis'], 'CANDIDATURA INDEPENDIENTE'] ],
       							['all', ['==', ['get', 'Gob2v2_Lis'], 'UNIDAD CONSTITUYENTE'],
       									['==', ['get', 'Gob2v1_Lis'], 'CANDIDATURA INDEPENDIENTE'] ],
       						]
        		  		  ],
    			'paint': {
    				'fill-pattern': 'stripe-violeta-gris',
		            'fill-opacity': [
		            	'interpolate',
		            	['linear'],
		            	['get', 'Gob2v1_Pct'],
		            	0, 0.3,
		            	50, 1,
		            ]
    			}
    		}, 'zona-indeterminada');
    		map.setLayoutProperty('gobernadores-violeta-gris', 'visibility', 'none');	
    	}
    );
});



var popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false,
	maxWidth: '600px'
});

// Create the popup
map.on('mousemove', 'distritos', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var comuna = e.features[0].properties.NOM_COM;
	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4>'+comuna+'</h4>'+
			'<p> Distrito: '+distrito+'<br>'+
			'Región: '+region+'</p>'
			)
		.addTo(map);
});
map.on('mouseleave', 'distritos', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'participacion-distritos', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var comuna = e.features[0].properties.NOM_COM;
	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	if (map.getZoom()<=6.2) {
		var part = e.features[0].properties.Part_TD;
		var totel = e.features[0].properties.TotEl_TD;
		var vot = e.features[0].properties.Vot_TD;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
				'<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
				'<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
				'<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'	
				)
			.addTo(map);
	} else {
		var part = e.features[0].properties.Part;
		var totel = e.features[0].properties.TotEl;
		var vot = e.features[0].properties.Vot;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
				'<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
				'<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
				'<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'			
				)
			.addTo(map);
	}
});
map.on('mouseleave', 'participacion-distritos', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'participacion-comunas', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var comuna = e.features[0].properties.NOM_COM;
	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	if (map.getZoom()<=6.2) {
		var part = e.features[0].properties.Part_TD;
		var totel = e.features[0].properties.TotEl_TD;
		var vot = e.features[0].properties.Vot_TD;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+
				'<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
				'<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
				'<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'	
				)
			.addTo(map);
	} else {
		var part = e.features[0].properties.Part;
		var totel = e.features[0].properties.TotEl;
		var vot = e.features[0].properties.Vot;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+comuna+'</span> (Distrito '+distrito+')<br>'+region+'</h4>'+
				'<table><tr><td>Participación:</td><td style="text-align:right;padding-left:20px">'+part+'%</td></tr>'+
				'<tr><td>Total Electores:</td><td style="text-align:right;padding-left:20px">'+totel+'</td></tr>'+
				'<tr><td>Votantes:</td><td style="text-align:right;padding-left:20px">'+vot+'</td></tr></table>'			
				)
			.addTo(map);
	}
});
map.on('mouseleave', 'participacion-comunas', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'gobernadores-electos', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('Gob_Nom')) {
		var nombre = e.features[0].properties.Gob_Nom;
		var perct = e.features[0].properties.Gob_Pct;
		var partido = e.features[0].properties.Gob_Ptd;
		var lista = e.features[0].properties.Gob_Lis;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Gobernador(a) Electo(a):<br>  '+lista+' ('+partido+')<br>'+
				'<span class="legend-key" style="background-color:'+coloresAlc[lista]+'"></span>'+
				'<span style="font-weight:bold">'+nombre+'</span><br>'+
				'Porcentaje: '+perct+'%</p>'			
				)
			.addTo(map);    	
    } else {
		var nombre1 = e.features[0].properties.Gob2v1_Nom;
		var perct1 = e.features[0].properties.Gob2v1_Pct;
		var partido1 = e.features[0].properties.Gob2v1_Ptd;
		var lista1 = e.features[0].properties.Gob2v1_Lis;
		var nombre2 = e.features[0].properties.Gob2v2_Nom;
		var perct2 = e.features[0].properties.Gob2v2_Pct;
		var partido2 = e.features[0].properties.Gob2v2_Ptd;
		var lista2 = e.features[0].properties.Gob2v2_Lis;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Segunda vuelta:<br>'+
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

map.on('mousemove', 'gobernadores-azul-violeta', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('Gob2v1_Nom')) {
		var nombre1 = e.features[0].properties.Gob2v1_Nom;
		var perct1 = e.features[0].properties.Gob2v1_Pct;
		var partido1 = e.features[0].properties.Gob2v1_Ptd;
		var lista1 = e.features[0].properties.Gob2v1_Lis;
		var nombre2 = e.features[0].properties.Gob2v2_Nom;
		var perct2 = e.features[0].properties.Gob2v2_Pct;
		var partido2 = e.features[0].properties.Gob2v2_Ptd;
		var lista2 = e.features[0].properties.Gob2v2_Lis;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Segunda vuelta:<br>'+
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
map.on('mouseleave', 'gobernadores-azul-violeta', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'gobernadores-azul-gris', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('Gob2v1_Nom')) {
		var nombre1 = e.features[0].properties.Gob2v1_Nom;
		var perct1 = e.features[0].properties.Gob2v1_Pct;
		var partido1 = e.features[0].properties.Gob2v1_Ptd;
		var lista1 = e.features[0].properties.Gob2v1_Lis;
		var nombre2 = e.features[0].properties.Gob2v2_Nom;
		var perct2 = e.features[0].properties.Gob2v2_Pct;
		var partido2 = e.features[0].properties.Gob2v2_Ptd;
		var lista2 = e.features[0].properties.Gob2v2_Lis;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Segunda vuelta:<br>'+
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
map.on('mouseleave', 'gobernadores-azul-gris', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'gobernadores-azul-verde', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('Gob2v1_Nom')) {
		var nombre1 = e.features[0].properties.Gob2v1_Nom;
		var perct1 = e.features[0].properties.Gob2v1_Pct;
		var partido1 = e.features[0].properties.Gob2v1_Ptd;
		var lista1 = e.features[0].properties.Gob2v1_Lis;
		var nombre2 = e.features[0].properties.Gob2v2_Nom;
		var perct2 = e.features[0].properties.Gob2v2_Pct;
		var partido2 = e.features[0].properties.Gob2v2_Ptd;
		var lista2 = e.features[0].properties.Gob2v2_Lis;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Segunda vuelta:<br>'+
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
map.on('mouseleave', 'gobernadores-azul-verde', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'gobernadores-violeta-gris', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('Gob2v1_Nom')) {
		var nombre1 = e.features[0].properties.Gob2v1_Nom;
		var perct1 = e.features[0].properties.Gob2v1_Pct;
		var partido1 = e.features[0].properties.Gob2v1_Ptd;
		var lista1 = e.features[0].properties.Gob2v1_Lis;
		var nombre2 = e.features[0].properties.Gob2v2_Nom;
		var perct2 = e.features[0].properties.Gob2v2_Pct;
		var partido2 = e.features[0].properties.Gob2v2_Ptd;
		var lista2 = e.features[0].properties.Gob2v2_Lis;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Segunda vuelta:<br>'+
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
map.on('mouseleave', 'gobernadores-violeta-gris', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});

map.on('mousemove', 'gobernadores-violeta-verde-agua', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
    if (e.features[0].properties.hasOwnProperty('Gob2v1_Nom')) {
		var nombre1 = e.features[0].properties.Gob2v1_Nom;
		var perct1 = e.features[0].properties.Gob2v1_Pct;
		var partido1 = e.features[0].properties.Gob2v1_Ptd;
		var lista1 = e.features[0].properties.Gob2v1_Lis;
		var nombre2 = e.features[0].properties.Gob2v2_Nom;
		var perct2 = e.features[0].properties.Gob2v2_Pct;
		var partido2 = e.features[0].properties.Gob2v2_Ptd;
		var lista2 = e.features[0].properties.Gob2v2_Lis;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+region+'</span></h4>'+
				'<p>Segunda vuelta:<br>'+
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

coloresConvP = {
	'APRUEBO DIGNIDAD': colores['verde-agua'],
	'ASAMBLEA CONSTITUYENTE ATACAMA': colores['rosado'],
	'ASAMBLEA POPULAR CONSTITUYENTE (D20)': colores['gris'],
	'ASAMBLEA POPULAR POR LA DIGNIDAD (D17)': colores['gris'],
	'CANDIDATURA INDEPENDIENTE': colores['gris'],
	'COORDINADORA SOCIAL DE MAGALLANES (D28)': colores['rosado'],
	'CORRIENTES INDEPENDIENTES (D16)': colores['gris'],
	'ELIGE LA LISTA DEL PUEBLO (D23)': colores['rosado'],
	'FUERZA SOCIAL DE ÑUBLE, LA LISTA DEL PUEBLO (D19)': colores['rosado'],
	'INDEPENDIENTES DE TARAPACA (D2)': colores['gris'],
	'INDEPENDIENTES DE ÑUBLE POR LA NUEVA CONSTITUCION (D19)': colores['azul-marino'],
	'INDEPENDIENTES DEL BIOBIO POR UNA NUEVA CONSTITUCION (D20)': colores['azul-marino'],
	'INDEPENDIENTES DISTRITO 6 + LISTA DEL PUEBLO (D6)': colores['rosado'],
	'INDEPENDIENTES NUEVA CONSTITUCION (D26)': colores['azul-marino'],
	'INDEPENDIENTES POR LA NUEVA CONSTITUCION  (D10)': colores['azul-marino'],
	'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D14)': colores['azul-marino'],
	'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D23)': colores['azul-marino'],
	'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D4)': colores['azul-marino'],
	'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D6)': colores['azul-marino'],
	'INDEPENDIENTES POR LA REGION DE COQUIMBO (D5)': colores['gris'],
	'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D12)': colores['azul-marino'],
	'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D21)': colores['azul-marino'],
	'INSULARES E INDEPENDIENTES (D26)': colores['rosado'],
	'LA LISTA DEL PUEBLO (D10)': colores['rosado'],
	'LA LISTA DEL PUEBLO (D13)': colores['rosado'],
	'LA LISTA DEL PUEBLO (D17)': colores['rosado'],
	'LA LISTA DEL PUEBLO (D3)': colores['rosado'],
	'LA LISTA DEL PUEBLO (D7)': colores['rosado'],
	'LA LISTA DEL PUEBLO (D8)': colores['rosado'],
	'LA LISTA DEL PUEBLO 100% INDEPENDIENTES (D15)': colores['rosado'],
	'LA LISTA DEL PUEBLO DISTRITO 12 (D12)': colores['rosado'],
	'LA LISTA DEL PUEBLO DISTRITO 14 (D14)': colores['rosado'],
	'LA LISTA DEL PUEBLO DISTRITO 9 (D9)': colores['rosado'],
	'LA LISTA DEL PUEBLO MAULE SUR (D18)': colores['rosado'],
	'LA LISTA DEL PUEBLO(D20)': colores['rosado'],
	'LISTA DEL APRUEBO': colores['violeta'],
	'LISTA DEL PUEBLO - MOVIMIENTO TERRITORIAL CONSTITUYENTE (D5)': colores['rosado'],
	'MOVIMIENTO INDEPENDIENTES DEL NORTE (D3)': colores['marron'],
	'MOVIMIENTOS SOCIALES AUTONOMOS (D15)': colores['gris'],
	'MOVIMIENTOS SOCIALES INDEPENDIENTES (D6)': colores['gris'],
	'REGIONALISMO CIUDADANO INDEPENDIENTE (D28)': colores['naranja'],
	'VAMOS POR CHILE': colores['azul'],
	'VOCES CONSTITUYENTES (D12)': colores['gris'],
};

map.on('mousemove', 'convencionales', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var nconv = e.features[0].properties.NConv;
	var convencionales = '<table style="border-collapse:collapse">';
	var lista_ant = '';
	var hayParidad = false;
	for (i = 1; i <= nconv; i++) {
		var beg = 'Conv'+i;
		var lista = e.features[0].properties[beg+'_Lis'];
		var partido = e.features[0].properties[beg+'_Ptd'];
		var perct = e.features[0].properties[beg+'_Pct'];
		var perctL = e.features[0].properties[beg+'_PctL'];
		var sexo = e.features[0].properties[beg+'_Sex'];
		var paridad = e.features[0].properties[beg+'_Par'];
		if (paridad=='*') {hayParidad = true;};
		if (lista!=lista_ant) {
			convencionales += '<tr><td colspan=3><span style="font-weight:bold">'+lista+'</span></td>';
			convencionales += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
		};
		convencionales += '<tr>';	
		convencionales += '<td><span class="legend-key" style="background-color:'+coloresConvP[lista]+'"></span>';
		convencionales += e.features[0].properties[beg+'_Nom'];
		convencionales += '</td><td style="padding-left:10px;text-align:center">('+sexo+')</td>';
		convencionales += '</td><td style="padding-left:10px">'+partido+'</td>';
		convencionales += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
		convencionales += '</td><td style="padding-left:10px;text-align:right">'+paridad+'</td>';
		convencionales += '</tr>';
		lista_ant = lista;
	}
	if (hayParidad) {
		convencionales += '<tr><td colspan=5>*: Convencional elegido para respetar paridad.</td></tr>'
	}
	convencionales += '</table>';

	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+convencionales
			)
		.addTo(map);
});
map.on('mouseleave', 'convencionales', function () {
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
	map.setLayoutProperty('distritos', 'visibility', 'none');
	map.setLayoutProperty('participacion-comunas', 'visibility', 'none');
	map.setLayoutProperty('participacion-distritos', 'visibility', 'none');
	map.setLayoutProperty('convencionales', 'visibility', 'none');
	map.setLayoutProperty('convencionalesMH-distritos', 'visibility', 'none');
	map.setLayoutProperty('convencionalesMH-comunas', 'visibility', 'none');
	map.setLayoutProperty('alcaldes', 'visibility', 'none');
	map.setLayoutProperty('concejales', 'visibility', 'none');
	map.setLayoutProperty('concejales-outline', 'visibility', 'none');
	map.setLayoutProperty('concejalesMH', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-azul-violeta', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-azul-verde', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-azul-gris', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-violeta-verde-agua', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-violeta-gris', 'visibility', 'none');

	document.getElementById('a-distritos').style.color = 'gray';
	document.getElementById('a-participacion').style.color = 'gray';
	document.getElementById('a-gobernadores').style.color = 'gray';
	document.getElementById('a-convencionales').style.color = 'gray';
	document.getElementById('a-convencionalesMH').style.color = 'gray';
	document.getElementById('a-alcaldes').style.color = 'gray';
	document.getElementById('a-concejales').style.color = 'gray';
	document.getElementById('a-concejalesMH').style.color = 'gray';
}


function mostrarDistritos() {
	clean()
	map.setLayoutProperty('distritos', 'visibility', 'visible');
	document.getElementById('a-distritos').style.color = 'black';
	legend.innerHTML = '';
	legend.style.display = 'none';
	legend2.style.display = 'none';
};


function mostrarParticipacion() {
	clean();
	map.setLayoutProperty('participacion-comunas', 'visibility', 'visible');
	map.setLayoutProperty('participacion-distritos', 'visibility', 'visible');
	document.getElementById('a-participacion').style.color = 'black';

	legend.innerHTML = '<table><tr><td style="padding-right:20px"><strong>Participación</strong><br></td>'+
					   '<td>Total País</td><td style="padding-left:20px;text-align:right">43,41%</td></tr>'+
					   '<tr><td></td><td>Total Electores</td><td style="padding-left:20px;text-align:right">14.900.190</td></tr>'+
					   '<tr><td></td><td>Votantes</td><td style="padding-left:20px;text-align:right">6.468.750</td></tr>'+
					   '</table>';
	legend.style.display = 'block';
	legend.style.maxWidth = '300px';
	legend.style.height = '65px';
	legend2.style.display = 'block';
	legend2.style.maxWidth = '850px';
	legend2.style.width = '850px';
	legend2.style.height = '40px';
	legend2.innerHTML = 'Zonas con mayor participación tienen un color más solido. '+
					   'Al acercarse/alejarse se nota el cambio entre distritos y comunas.';

	var pctLegend2 = ['<25%', '30%', '35%', '40%', '45%', '50%', '55%', '>60%'];

	var table2 = document.createElement('table');
	table2.style.borderCollapse = 'collapse';	
	var tr = document.createElement('tr');
	for (i = 0; i < pctLegend2.length; i++) {
		var td = document.createElement('td');
		td.style.textAlign = 'center';
		td.style.backgroundColor = 'rgba(160,82,45,'+i/7+')';
		if (i==pctLegend2.length-1) {
			td.style.color = colores['blanco'];
		}
		td.innerHTML = pctLegend2[i];
		td.width = '105px';
		td.height = '20px';
		tr.appendChild(td);
	}
	table2.appendChild(tr);
	legend2.appendChild(table2);
};


function mostrarGobernadores() {
	clean();
	map.setLayoutProperty('gobernadores-electos', 'visibility', 'visible');
	map.setLayoutProperty('gobernadores-azul-violeta', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-azul-verde', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-azul-gris', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-violeta-verde-agua', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-violeta-gris', 'visibility', 'visible');
	document.getElementById('a-gobernadores').style.color = 'black';

	legend.style.display = 'block';
	legend.style.maxWidth = '270px';
	legend.style.height = '110px';
	legend.innerHTML = '';
	legend2.style.display = 'block';
	legend2.style.maxWidth = '850px';
	legend2.style.width = '650px';
	legend2.style.height = '18px';
	legend2.innerHTML = 'Transparencia depende del porcentaje del candidato más votado.';

	var layers = ['UNIDAD CONSTITUYENTE', 'CHILE VAMOS', 'FRENTE AMPLIO', 
	              'ECOLOGISTAS E INDEPENDIENTES',  'CANDIDATURA INDEPENDIENTE'];
	var colors = [colores['violeta'], colores['azul'], colores['verde-agua'], 
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



function mostrarConvencionales() {
	clean();
	map.setLayoutProperty('convencionales', 'visibility', 'visible');
	document.getElementById('a-convencionales').style.color = 'black';

	legend.innerHTML = '';
	legend.style.display = 'block';
	legend.style.maxWidth = '350px';
	legend.style.height = '175px';
	legend2.style.display = 'block';
	legend2.style.maxWidth = '850px';
	legend2.style.width = '650px';
	legend2.style.height = '18px';
	legend2.innerHTML = 'Color y transparencia depende del porcentaje de la lista más votada en el distrito.';

	var layers = ['CHILE VAMOS', 'APRUEBO DIGNIDAD', 'LA LISTA DEL PUEBLO', 
	              'LISTA DEL APRUEBO', 'INDEPENDIENTES NO NEUTRALES', 
	              'MOVIMIENTO INDEPENDIENTES DEL NORTE', 'REGIONALISMO CIUDADANO INDEPENDIENTE',
	              'OTRAS CANDIDATURAS INDEPENDIENTES'];
	var colors = [colores['azul'], colores['verde-agua'], colores['rosado'], colores['violeta'], 
	              colores['azul-marino'], colores['marron'], colores['naranja'], colores['gris']];

	var table = document.createElement('table');
	for (i = 0; i < layers.length; i++) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');

		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = colors[i];
		item.appendChild(key);
		td1.appendChild(item);

		var value = document.createElement('span');
		value.innerHTML = layers[i];
		td2.appendChild(value);

		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	};
	legend.appendChild(table);
};




function mostrarConvencionalesMH() {
	clean();
	map.setLayoutProperty('convencionalesMH-distritos', 'visibility', 'visible');
	map.setLayoutProperty('convencionalesMH-comunas', 'visibility', 'visible');
	document.getElementById('a-convencionalesMH').style.color = 'black';

	legend.innerHTML = '';
	legend.style.display = 'block';
	legend.style.maxWidth = '250px';
	legend.style.height = '250px';
	legend2.style.display = 'block';
	legend2.style.maxWidth = '850px';
	legend2.style.width = '650px';
	legend2.style.height = '18px';
	legend2.innerHTML = 'Acercarse para distinguir participación a nivel comunal.';

	var layers = ['65% votación hacia mujeres', '60% votación hacia mujeres', '55% votación hacia mujeres', '50%',
	              '55% votación hacia hombres', '60% votación hacia hombres', '65% votación hacia hombres'];
	var colors = ['rgb(152,86,152)', 'rgb(186,142,186)', 'rgb(220,198,220)', 'rgb(255,255,255)',
			      'rgb(255,225,170)', 'rgb(255,195,85)' ,'rgb(255,165,0)'];

	var table = document.createElement('table');
	for (i = 0; i < layers.length; i++) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');

		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = colors[i];
		item.appendChild(key);
		td1.appendChild(item);

		var value = document.createElement('span');
		value.innerHTML = layers[i];
		td2.appendChild(value);

		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	};
	legend.appendChild(table);

	var table = document.createElement('table');
	table.style.marginTop = '20px';
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.colSpan = 3;
	var span = document.createElement('span');
	span.style.fontWeight = 'bold';
	span.innerHTML = 'Total País (votos válidos)';
	td.appendChild(span);
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Votos mujeres';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '2.981.310';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '52,20%';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Votos hombres';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '2.729.944';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '47,80%';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	table.appendChild(tr);


	legend.appendChild(table);
};

function mostrarAlcaldes() {
	clean();
	map.setLayoutProperty('alcaldes', 'visibility', 'visible');
	document.getElementById('a-alcaldes').style.color = 'black';

	legend.style.display = 'block';
	legend.style.maxWidth = '520px';
	legend.style.height = '150px';
	legend.innerHTML = '';
	legend2.style.display = 'block';
	legend2.style.maxWidth = '850px';
	legend2.style.width = '650px';
	legend2.style.height = '18px';
	legend2.innerHTML = 'Transparencia depende del porcentaje del candidato electo.';

	var layers = ['CHILE VAMOS (87)', 'UNIDAD POR EL APRUEBO (69)', 'UNIDOS POR LA DIGNIDAD (60)', 
	              'FRENTE AMPLIO (12)', 'CHILE DIGNO VERDE Y SOBERANO (9)   ', 
	              'DIGNIDAD AHORA (3)', 'CANDIDATURA INDEPENDIENTE (105)'];
	var layers2 = ['UDI (32), RN (31), EVO (1), IND (23)', 'PS (23), PPD (17), PR (11), IND (18)',
					'DC (46), PRO (2), IND (12)', 'RD (6), CS (2), PL (1), IND (3)', 
					'PCCh (6), FREVS (1), IND (2)', 'PH (2), IGUAL (1)']
	var colors = [colores['azul'], colores['violeta'], colores['marron'], colores['verde-agua'], 
	              colores['rojo'], colores['amarillo'], colores['gris']];

	var table = document.createElement('table');
	for (i = 0; i < layers.length-1; i++) {
		var layer = layers[i];
		var layer2 = layers2[i];
		var color = colors[i];
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');


		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = color;
		item.appendChild(key);
		td1.appendChild(item);

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
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');

	var item = document.createElement('div');
	var key = document.createElement('span');
	key.className = 'legend-key';
	key.style.backgroundColor = colors[layers.length-1];
	item.appendChild(key);
	td1.appendChild(item);
	var value = document.createElement('span');
	value.innerHTML = layers[layers.length-1];
	td2.colSpan = '2'; 
	td2.appendChild(value);

	tr.appendChild(td1);
	tr.appendChild(td2);
	table.appendChild(tr);

	legend.appendChild(table);


};

function mostrarConcejalesMH() {
	clean();
	map.setLayoutProperty('concejalesMH', 'visibility', 'visible');
	document.getElementById('a-concejalesMH').style.color = 'black';

	legend.innerHTML = '';
	legend.style.display = 'block';
	legend.style.maxWidth = '250px';
	legend.style.height = '250px';
	legend2.innerHTML = '';
	legend2.style.display = 'none';

	var layers = ['>65% votación hacia mujeres', '60% votación hacia mujeres', '55% votación hacia mujeres', '50%',
	              '55% votación hacia hombres', '60% votación hacia hombres', '>65% votación hacia hombres'];
	var colors = ['rgb(152,86,152)', 'rgb(186,142,186)', 'rgb(220,198,220)', 'rgb(255,255,255)',
			      'rgb(255,225,170)', 'rgb(255,195,85)' ,'rgb(255,165,0)'];

	var table = document.createElement('table');
	for (i = 0; i < layers.length; i++) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');

		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = colors[i];
		item.appendChild(key);
		td1.appendChild(item);

		var value = document.createElement('span');
		value.innerHTML = layers[i];
		td2.appendChild(value);

		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	};
	legend.appendChild(table);

	var table = document.createElement('table');
	table.style.marginTop = '20px';
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.colSpan = 3;
	var span = document.createElement('span');
	span.style.fontWeight = 'bold';
	span.innerHTML = 'Total País (votos válidos)';
	td.appendChild(span);
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Votos mujeres';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '2.499.063';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '41,05%';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Votos hombres';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '3.589.511';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '58,95%';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '20px';
	tr.appendChild(td);
	table.appendChild(tr);


	legend.appendChild(table);
};

function mostrarConcejales() {
	clean();
	map.setLayoutProperty('concejales', 'visibility', 'visible');
	map.setLayoutProperty('concejales-outline', 'visibility', 'visible');
	document.getElementById('a-concejales').style.color = 'black';

	legend.style.display = 'block';
	legend.style.maxWidth = '750px';
	legend.style.height = '380px';
	legend.innerHTML = '';


	var layers2 = {'CHILE VAMOS': 'UDI (298), RN (377), EVO (61), PRI (36)', 
			       'REPUBLICANOS Y CIUD.': 'REP (12), CIU (1)', 
	               'UNIDAD POR EL APRUEBO': 'PS (272), PPD (202), PR (174)', 
	               'UNIDOS POR LA DIGNIDAD': 'DC+PRO (362)', 
	               'FRENTE AMPLIO': 'RD (43), CS (51), PL (4), COM (34)', 
	               'ECOLOGISTAS E IND': 'ECO (47)',
				   'CHILE DIGNO VERDE Y SOB.': 'PCCh (157), FREVS (48)', 
				   'UNION PATRIOTICA': 'UPA (1)', 
				   'DIGNIDAD AHORA': 'PH (28), IGUAL (27)',
				   'P. DE TRABAJADORES REVOL.': 'PTR (1)', 
				   'CANDIDATURA IND.': ''};


	var table = document.createElement('table');
	table.style.borderCollapse = 'collapse';
	for (var layer in coloresConcL) {
		if (layer == 'CHILE VAMOS') {
			var tr = document.createElement('tr');
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
		} else if (layer == 'UNIDAD POR EL APRUEBO') {
			var tr = document.createElement('tr');
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
		} else if (layer == 'CHILE DIGNO VERDE Y SOB.') {
			var tr = document.createElement('tr');
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
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		if (layer == 'ECOLOGISTAS E IND') {
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

/*

var shortNames = {'CHILE VAMOS': 'CV', 
			       'REPUBLICANOS Y CIUD.': 'RC',
			       'UNIDAD POR EL APRUEBO': 'UA', 
			       'UNIDOS POR LA DIGNIDAD': 'UD', 
			       'FRENTE AMPLIO': 'FA', 
			       'ECOLOGISTAS E IND': 'EC',
			       'CHILE DIGNO VERDE Y SOB.': 'CD',
			       'UNION PATRIOTICA': 'UP',
			       'DIGNIDAD AHORA': 'DA', 
			       'P. DE TRABAJADORES REVOL.': 'TR', 
			       'CANDIDATURA IND.': 'CI'}; 
var coloresAlc = {'CHILE VAMOS': colores['azul'], 
			      'UNIDAD POR EL APRUEBO': colores['violeta'],
			      'UNIDOS POR LA DIGNIDAD': colores['marron'],
                  'FRENTE AMPLIO': colores['verde-agua'], 
                  'CHILE DIGNO VERDE Y SOBERANO': colores['rojo'],
                  'DIGNIDAD AHORA': colores['amarillo'],
                  'CANDIDATURA INDEPENDIENTE': colores['gris']};

var coloresConc = {'CHILE VAMOS - PRI E IND': colores['azul'], 
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
			       'CANDIDATURA INDEPENDIENTE': colores['gris']};  
*/