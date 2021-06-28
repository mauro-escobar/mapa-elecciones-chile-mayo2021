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

coloresConv = {
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
	'MOVIMIENTO INDEPENDIENTES DEL NORTE (D3)': colores['gris'],
	'MOVIMIENTOS SOCIALES AUTONOMOS (D15)': colores['gris'],
	'MOVIMIENTOS SOCIALES INDEPENDIENTES (D6)': colores['gris'],
	'REGIONALISMO CIUDADANO INDEPENDIENTE (D28)': colores['gris'],
	'VAMOS POR CHILE': colores['azul'],
	'VOCES CONSTITUYENTES (D12)': colores['gris'],
};


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


	var count_data = map.querySourceFeatures('municipales-data');
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
    map.addSource('markers-constituyentes',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.7pcm6it8',
        }
    );
    map.addLayer({
    	'id': 'markers',
		'source': 'markers-constituyentes',
		'source-layer': 'markers-constituyentes-7op8qa',
		'type': 'circle',
		'filter': ['has', 'lista'],
		'paint' : {
			'circle-color': [
				'match',
				['get', 'lista'],
				'APRUEBO DIGNIDAD', colores['verde-agua'],
				'ASAMBLEA CONSTITUYENTE ATACAMA', colores['rosado'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D4)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D6)', colores['azul-marino'],
				'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D12)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D14)', colores['azul-marino'],
				'INDEPENDIENTES DE ÑUBLE POR LA NUEVA CONSTITUCION (D19)', colores['azul-marino'],
				'INDEPENDIENTES DEL BIOBIO POR UNA NUEVA CONSTITUCION (D20)', colores['azul-marino'],
				'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D21)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D23)', colores['azul-marino'],
				'INDEPENDIENTES NUEVA CONSTITUCION (D26)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION  (D10)', colores['azul-marino'],
				'LA LISTA DEL PUEBLO (D3)', colores['rosado'],
				'LISTA DEL PUEBLO - MOVIMIENTO TERRITORIAL CONSTITUYENTE (D5)', colores['rosado'],
				'INDEPENDIENTES DISTRITO 6 + LISTA DEL PUEBLO (D6)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D7)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D8)', colores['rosado'],
				'LA LISTA DEL PUEBLO DISTRITO 9 (D9)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D10)', colores['rosado'],
				'LA LISTA DEL PUEBLO DISTRITO 12 (D12)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D13)', colores['rosado'],
				'LA LISTA DEL PUEBLO DISTRITO 14 (D14)', colores['rosado'],
				'LA LISTA DEL PUEBLO 100% INDEPENDIENTES (D15)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D17)', colores['rosado'],
				'LA LISTA DEL PUEBLO MAULE SUR (D18)', colores['rosado'],
				'FUERZA SOCIAL DE ÑUBLE, LA LISTA DEL PUEBLO (D19)', colores['rosado'],
				'ELIGE LA LISTA DEL PUEBLO (D23)', colores['rosado'],
				'INSULARES E INDEPENDIENTES (D26)', colores['rosado'],
				'LA LISTA DEL PUEBLO(D20)', colores['rosado'],
				'COORDINADORA SOCIAL DE MAGALLANES (D28)', colores['rosado'],
				'LISTA DEL APRUEBO', colores['violeta'],
				'MOVIMIENTO INDEPENDIENTES DEL NORTE (D3)', colores['gris'],
				'REGIONALISMO CIUDADANO INDEPENDIENTE (D28)', colores['gris'],
				'VAMOS POR CHILE', colores['azul'],
				'PUEBLO MAPUCHE', colores['marron'],
				'PUEBLO RAPANUI', colores['marron'],
				'PUEBLO ATACAMEÑO', colores['marron'],
				'PUEBLO AIMARA', colores['marron'],
				'PUEBLO QUECHUA', colores['marron'],
				'PUEBLO COLLA', colores['marron'],
				'PUEBLO KAWASHKAR', colores['marron'],
				'PUEBLO DIAGUITA', colores['marron'],
				'PUEBLO YAGAN', colores['marron'],
				'PUEBLO CHANGO', colores['marron'],
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
    map.setLayoutProperty('markers', 'visibility', 'none');	
    map.addLayer({
    	'id':'markers-lines',
		'source': 'markers-constituyentes',
		'source-layer': 'markers-constituyentes-7op8qa',
		'type': 'line',
		'filter': ['all', ['!', ['has', 'lista']], ['!', ['has', 'title']]],
		'paint' : {
			'line-color': colores['negro'],
			'line-width': 1
		}
    }, 'markers');
    map.setLayoutProperty('markers-lines', 'visibility', 'none');	
    map.addLayer({
    	'id':'markers-title',
		'source': 'markers-constituyentes',
		'source-layer': 'markers-constituyentes-7op8qa',
		'type': 'symbol',
		'filter': ['has', 'title'],
		'layout' : {
			'text-field': ['get', 'title'],
			'text-size': 12,
			'text-rotate': 90-bearing
		}
    }, 'markers-lines');
    map.setLayoutProperty('markers-title', 'visibility', 'none');	
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            layers[i].beforeId = 'markers-title';
            break;
        }
    }
    map.addSource('municipales-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.crz9meen',
        }
    );
    map.addSource('distritos-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.63a30umw',
        }
    );
    map.addSource('gobernadores-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.2jgcxezz',
        }
    );
    map.addSource('gobernadores-municipales-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.3ajwn0m7',
        }
    );
    map.addLayer({
    	'id': 'nombre-comunas',
    	'type': 'symbol',
    	'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
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
    	'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
        'filter': ['!', ['has', 'Part_TD']],
        'paint': {
        	'fill-color': colores['blanco'],
        	'fill-outline-color': '#ffffff',
        	'fill-opacity': 0.5,
        },
    }, 'nombre-regiones');
    map.addLayer({
        'id': 'comunas-outline',
        'type': 'line',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
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
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
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
        'source': 'distritos-data',
        'source-layer': 'distritos2021-05-4u089z',
        'filter': ['has', 'DISTRITO'],
        'paint':{
            'line-color': '#ffffff',
            'line-width': 0.5,
            /*'line-opacity': [
            	'interpolate',
            	['linear'],
            	['zoom'],
            	6, 0,
            	10, 1,
            ]*/
        }
    }, 'zona-indeterminada');
    map.addLayer({
        'id': 'distritos',
        'type': 'fill',
        'source': 'distritos-data',
        'source-layer': 'distritos2021-05-4u089z',
        'filter': ['has', 'DISTRITO'],
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
    }, 'distritos-outline');

    map.addLayer({
        'id': 'participacion-distritos',
        'type': 'fill',
        'source': 'distritos-data',
        'source-layer': 'distritos2021-05-4u089z',
        'filter': ['has', 'DISTRITO'],
        'paint': {
            'fill-color': '#964B00',
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2021-05_Part_TD'],
            	25, 0,
            	60, 1,
            ]
        },
        'maxzoom': 6.2
    }, 'distritos-outline');
    map.setLayoutProperty('participacion-distritos', 'visibility', 'none');	

    map.addLayer({
        'id': 'participacion-comunas',
        'type': 'fill',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
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
    }, 'comunas-outline-zoom');
    map.setLayoutProperty('participacion-comunas', 'visibility', 'none');	

    map.addLayer({
        'id': 'convencionales',
        'type': 'fill',
        'source': 'distritos-data',
        'source-layer': 'distritos2021-05-4u089z',
        'filter': ['has', 'DISTRITO'],
        'paint': {
            'fill-color': [
				'match',
				['get', '2021-05_ConvLMV'],
				'APRUEBO DIGNIDAD', colores['verde-agua'],
				'ASAMBLEA CONSTITUYENTE ATACAMA', colores['rosado'],
				'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D12)', colores['azul-marino'],
				'LA LISTA DEL PUEBLO (D13)', colores['rosado'],
				'LA LISTA DEL PUEBLO 100% INDEPENDIENTES (D15)', colores['rosado'],
				'LA LISTA DEL PUEBLO DISTRITO 9 (D9)', colores['rosado'],
				'LA LISTA DEL PUEBLO MAULE SUR (D18)', colores['rosado'],
				'LISTA DEL APRUEBO', colores['violeta'],
				'LISTA DEL PUEBLO - MOVIMIENTO TERRITORIAL CONSTITUYENTE (D5)', colores['rosado'],
				'MOVIMIENTO INDEPENDIENTES DEL NORTE (D3)', colores['gris'],
				'REGIONALISMO CIUDADANO INDEPENDIENTE (D28)', colores['gris'],
				'VAMOS POR CHILE', colores['azul'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2021-05_ConvPLMV'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'distritos-outline');
    map.setLayoutProperty('convencionales', 'visibility', 'none');	

    map.addLayer({
        'id': 'convencionalesMH-distritos',
        'type': 'fill',
        'source': 'distritos-data',
        'source-layer': 'distritos2021-05-4u089z',
        'filter': ['has', '2021-05_Part_TD'],
        'paint': { 
            'fill-color': [
            	'interpolate',
            	['linear'],
            	['/', ['get', '2021-05_Conv_votM_D'],
            		  ['+', ['get', '2021-05_Conv_votM_D'], ['get', '2021-05_Conv_votH_D']]],
            	0.35, colores['naranja'],
            	0.50, colores['blanco'],
            	0.65, colores['violeta']
            ],
            'fill-opacity': 0.7
        },
        'maxzoom': 6.2
    }, 'distritos-outline');
    map.setLayoutProperty('convencionalesMH-distritos', 'visibility', 'none');	

    map.addLayer({
        'id': 'convencionalesMH-comunas',
        'type': 'fill',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
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
    }, 'comunas-outline-zoom');
    map.setLayoutProperty('convencionalesMH-comunas', 'visibility', 'none');	


    map.addLayer({
        'id': 'concejales',
        'type': 'fill',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
        'filter': ['has', 'Part_TD'],
        'paint': {
            'fill-color': colores['suave'],
        },
    }, 'comunas-outline');
    map.setLayoutProperty('concejales', 'visibility', 'none');	

    map.addLayer({
        'id': 'concejalesMH',
        'type': 'fill',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
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
    }, 'comunas-outline');
    map.setLayoutProperty('concejalesMH', 'visibility', 'none');	

    map.addLayer({
        'id': 'alcaldes',
        'type': 'fill',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
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
       	'maxzoom': 6.2
    }, 'regiones-outline');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'none');	

    map.addLayer({
        'id': 'gobernadores-comunas',
        'type': 'fill',
        'source': 'gobernadores-municipales-data',
        'source-layer': 'gobernadores2021-05_comunas-20r0iv',
        'filter': ['has', 'Gob1_2v_Nom'],
        'paint': {
            'fill-color': [
            	'match', ['get', 'Gob1_2v_Lis'],
            	'CHILE VAMOS', colores['azul'],
            	'UNIDAD CONSTITUYENTE', colores['violeta'],
            	'CANDIDATURA INDEPENDIENTE', colores['gris'],
            	'FRENTE AMPLIO', colores['verde-agua'],
            	'ECOLOGISTAS E INDEPENDIENTES', colores['verde'],
            	colores['gris']
            ],
            'fill-opacity': 0.8
        },
        'minzoom': 6.2
    }, 'regiones-outline');
    map.setLayoutProperty('gobernadores-comunas', 'visibility', 'none');	
    
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
    mostrarConvencionales();
});

map.on('rotate', function () {
	map.setLayoutProperty(
		'markers-title',
		'text-rotate',
		90-map.getBearing()
	)
});

var popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false,
	maxWidth: '600px'
});

// Create the popup
map.on('mousemove', 'distritos', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">Distrito: '+distrito+'</span></h4>'+
			'<p>Región: '+region+'</p>'
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
		var part = e.features[0].properties['2021-05_Part_TD'];
		var totel = e.features[0].properties['2021-05_TotEl_TD'];
		var vot = e.features[0].properties['2021-05_Vot_TD'];
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

map.on('mousemove', 'gobernadores-comunas', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var region = e.features[0].properties.REGION;
	var comuna = e.features[0].properties.NOM_COM;
	var nombre1 = e.features[0].properties['Gob1_2v_Nom'];
	var perct1 = e.features[0].properties['Gob1_2v_Pct'];
	var partido1 = e.features[0].properties['Gob1_2v_Ptd'];
	var lista1 = e.features[0].properties['Gob1_2v_Lis'];
	var nombre2 = e.features[0].properties['Gob2_2v_Nom'];
	var perct2 = e.features[0].properties['Gob2_2v_Pct'];
	var partido2 = e.features[0].properties['Gob2_2v_Ptd'];
	var lista2 = e.features[0].properties['Gob2_2v_Lis'];	

	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+comuna+'</span> ('+region+')</h4>'+
			'<table>'+
			'<tr><td colspan=3>'+lista1+' ('+partido1+')</td></tr>'+
			'<tr><td><span class="legend-key" style="background-color:'+coloresAlc[lista1]+'"></span></td>'+
			'<td><span>'+nombre1+'</span></td><td style="padding-left:15px">'+perct1+'%</td></tr>'+
			'<tr><td colspan=3>'+lista2+' ('+partido2+')</td></tr>'+
			'<tr><td><span class="legend-key" style="background-color:'+coloresAlc[lista2]+'"></span></td>'+
			'<td><span>'+nombre2+'</span></td><td style="padding-left:15px">'+perct2+'%</td></tr>'+
			'</table>'+
			'<h5>Votos nulos: '+e.features[0].properties['Gob_nulos']+	
			', Votos blancos: '+e.features[0].properties['Gob_blancos']+	
			'<br>Votos válidos: '+e.features[0].properties['Gob_validos']+
			', Votos totales: '+e.features[0].properties['Gob_total']+'</h5>'			
			)
		.addTo(map); 


   
});
map.on('mouseleave', 'gobernadores-comunas', function () {
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

map.on('mousemove', 'convencionales', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var nconv = e.features[0].properties['2021-05_NConv'];
	var participacion = e.features[0].properties['2021-05_Part_TD'];
	var convencionales = '<table style="border-collapse:collapse">';
	var lista_ant = '';
	var hayParidad = false;
	for (i = 1; i <= nconv; i++) {
		var beg = '2021-05_Conv'+i;
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
		convencionales += '<td><span class="legend-key" style="background-color:'+coloresConv[lista]+'"></span>';
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
	convencionales += '<h5>Participación: '+participacion+'%</h5>';

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

map.on('mousemove', 'markers', function (e) {
    map.getCanvas().style.cursor = 'pointer';
	var lista = e.features[0].properties.lista;
	var nombre = e.features[0].properties.nombre;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+nombre+'</span></h4>'+
			'<p>'+lista+'</p>'
			)
		.addTo(map);
});
map.on('mouseleave', 'markers', function () {
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

map.on('mousemove', 'concejalesMH', function (e) {
    map.getCanvas().style.cursor = 'pointer';
    
    elecM = e.features[0].properties['Conc_elecM_C']
    elecH = e.features[0].properties['Conc_elecH_C']
    candM = e.features[0].properties['Conc_candM_C']
    candH = e.features[0].properties['Conc_candH_C']
    pctgM = Math.round(10000*e.features[0].properties['Conc_votM_C']/(e.features[0].properties['Conc_votM_C']+e.features[0].properties['Conc_votH_C']))/100;
	pctgH = Math.round(10000*e.features[0].properties['Conc_votH_C']/(e.features[0].properties['Conc_votM_C']+e.features[0].properties['Conc_votH_C']))/100;

	var comuna = e.features[0].properties.NOM_COM;
	var distrito = e.features[0].properties.DISTRITO;
	var region = e.features[0].properties.REGION;
	popup.setLngLat(e.lngLat)
		.setHTML(
			'<h4><span style="font-weight:bold">'+comuna+'</span><br>'+region+'</h4>'+
			'<table><tr><td></td><td style="text-align:right">Mujeres</td><td style="text-align:right">Hombres</td>'+
			'<tr><td>Candidatas/os:</td><td style="text-align:right;padding-left:15px">'+
			candM+'</td><td style="text-align:right;padding-left:15px">'+candH+'</td></tr>'+
			'<tr><td>Electas/os:</td><td style="text-align:right;padding-left:15px">'+
			elecM+'</td><td style="text-align:right;padding-left:15px">'+elecH+'</td></tr>'+
			'<tr><td>Votos obtenidos:</td><td style="text-align:right;padding-left:15px">'+
			e.features[0].properties['Conc_votM_C']+'</td><td style="text-align:right;padding-left:15px">'+e.features[0].properties['Conc_votH_C']+'</td></tr>'+
			'<tr><td>Porcentaje:</td><td style="text-align:right;padding-left:15px">'+
			pctgM+'%</td><td style="text-align:right;padding-left:15px">'+pctgH+'%</td></tr></table>'
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
	map.setLayoutProperty('distritos', 'visibility', 'none');
	map.setLayoutProperty('participacion-comunas', 'visibility', 'none');
	map.setLayoutProperty('participacion-distritos', 'visibility', 'none');
	map.setLayoutProperty('convencionales', 'visibility', 'none');
    map.setLayoutProperty('markers', 'visibility', 'none');	
    map.setLayoutProperty('markers-lines', 'visibility', 'none');	
    map.setLayoutProperty('markers-title', 'visibility', 'none');	
	map.setLayoutProperty('convencionalesMH-distritos', 'visibility', 'none');
	map.setLayoutProperty('convencionalesMH-comunas', 'visibility', 'none');
	map.setLayoutProperty('alcaldes', 'visibility', 'none');
	map.setLayoutProperty('concejales', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'none');
	map.setLayoutProperty('concejalesMH', 'visibility', 'none');
	map.setLayoutProperty('regiones-outline', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-comunas', 'visibility', 'none');	

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
	map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'visible');
	map.setLayoutProperty('participacion-comunas', 'visibility', 'visible');
	map.setLayoutProperty('participacion-distritos', 'visibility', 'visible');
	document.getElementById('a-participacion').style.color = 'black';

	legend.innerHTML = '<table><tr><td style="padding-right:20px"><strong>Participación</strong><br></td>'+
					   '<td>Total País</td><td style="padding-left:20px;text-align:right">43,41%</td></tr>'+
					   '<tr><td></td><td>Total Electores</td><td style="padding-left:20px;text-align:right">14.900.190</td></tr>'+
					   '<tr><td></td><td>Votantes</td><td style="padding-left:20px;text-align:right">6.468.750</td></tr>'+
					   '</table>';

	legend.style.display = 'block';
    if (screen.width>=992) {
        legend.style.width = '300px';
        legend.style.maxWidth = '300px';
        legend.style.height = '70px';
        legend2.style.display = 'block';
        legend2.style.width = '850px';
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
    } else {
        legend.style.maxWidth = '240px';
        legend.style.height = '60px';
    }

};


function mostrarGobernadores() {
	clean();
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-electos', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores-comunas', 'visibility', 'visible');	
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

function mostrarConvencionales() {
	clean();
	map.setLayoutProperty('convencionales', 'visibility', 'visible');
    map.setLayoutProperty('markers', 'visibility', 'visible');	
    map.setLayoutProperty('markers-lines', 'visibility', 'visible');	
    map.setLayoutProperty('markers-title', 'visibility', 'visible');	
	document.getElementById('a-convencionales').style.color = 'black';

	var parl_listas = { 
		'Vamos por Chile': {
    		'seats': 37,
    		'color': colores['azul']
		},
    	'Apruebo Dignidad': {
    		'seats': 28,
    		'color': colores['verde-agua']
    	},
    	'La Lista del Pueblo': {
    		'seats': 26,
    		'color': colores['rosado']
    	},
    	'Lista del Apruebo': {
    		'seats': 25,
    		'color': colores['violeta']
		},
    	'Independientes No Neutrales': {
    		'seats': 11,
    		'color': colores['azul-marino']
    	},
    	'Candidaturas Independientes': {
    		'seats': 11,
    		'color': colores['gris']
    	},
    	'Pueblos Indígenas (Mapuche)': {
    		'seats': 17,
    		'color': colores['marron']
    	}
	}

    var parliament = {
    	'Vamos por Chile (UDI)': {
    		'seats': 17,
    		'color': '#2473ac', //colores['azul'],
    		'names': [
				["POLLYANA RIVERA BIGAS (IND-UDI)", false],
				["PABLO ANTONIO TOLOZA FERNANDEZ (UDI)", true],
				["JORGE ARANCIBIA REYES (IND-UDI)", false],
				["ARTURO ZUÑIGA JORY (UDI)", true],
				["MARCELA CUBILLOS SIGALL (IND-UDI)", false],
				["CONSTANZA  HUBE PORTUS (UDI)", true],
				["CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)", false],
				["CAROL BOWN SEPULVEDA (UDI)", true],
				["RICARDO NEUMANN BERTIN (IND-UDI)", false],
				["ALFREDO MORENO ECHEVERRIA (IND-UDI)", false],
				["MARTIN ARRAU GARCIA-HUIDOBRO (UDI)", true],
				["MARGARITA LETELIER CORTES (UDI)", true],
				["EDUARDO ANDRES CRETTON REBOLLEDO (UDI)", true],
				["FELIPE IGNACIO MENA VILLAR (UDI)", true],
				["MARIA CECILIA UBILLA PEREZ (IND-UDI)", false],
				["KATERINE MONTEALEGRE NAVARRO (UDI)", true],
				["RODRIGO ALVAREZ ZENTENO (UDI)", true]
			]
		},
    	'Vamos por Chile (RN)': {
    		'seats': 15,
    		'color': '#3b83bd', // colores['azul'],
    		'names': [
    			["ALVARO JOFRE CACERES (RN)", true],
    			["ROBERTO VEGA CAMPUSANO (RN)", true],
    			["RUGGERO COZZI (RN)", true],
				["RAUL CELIS MONTT (RN)", true],
				["TERESA MARINOVIC VIAL (IND-RN)", false],
				["CRISTIAN MONCKEBERG BRUNER (RN)", true],
				["BERNARDO FONTAINE TALAVERA (IND-RN)", false],
				["MANUEL JOSE OSSANDON LIRA (IND-RN)", false],
				["PATRICIA LABRA BESSERER (RN)", true],
				["LUCIANO ERNESTO SILVA MORA (RN)", true],
				["PAULINA VELOSO MUÑOZ (RN)", true],
				["RUTH HURTADO OLAVE (IND-RN)", false],
				["LUIS MAYOL BOUCHON (RN)", true],
				["ANGELICA TEPPER KOLOSSA (IND-RN)", false],
				["HARRY JURGENSEN CAESAR (RN)", true]
			]
		},
		'Vamos por Chile (EVO)': {
    		'seats': 5,
    		'color': '#4f93ce', //colores['azul'],
    		'names': [
				["BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)", false],
				["HERNAN LARRAIN MATTE (EVO)", true],
				["BARBARA REBOLLEDO AGUIRRE (IND-EVO)", false],
				["ROCIO  CANTUARIAS RUBIO (IND-EVO)", false],
				["GEOCONDA NAVARRETE ARRATIA (EVO)", true]
			]
		},
    	'Apruebo Dignidad (PCCH)': {
    		'seats': 7,
    		'color': '#009754', //colores['verde-agua'],
    		'names': [
    			["CAROLINA ELIANA VIDELA OSORIO (PCCH)", true],
				["HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)", true],
				["ERICKA  PORTILLA BARRIOS (PCCH)", true],
				["VALENTINA ANDREA MIRANDA ARCE (PCCH)", true],
				["BARBARA SEPULVEDA HALES (PCCH)", true],
				["MARCOS PATRICIO BARRAZA GOMEZ (PCCH)", true],
				["VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)", false]
    		]
    	},
    	'Apruebo Dignidad (FREVS)': {
    		'seats': 4,
    		'color': '#00a25e',//colores['verde-agua'],
    		'names': [
    			["HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)", true],
    			["NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)", true],
    			["ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)", false],
				["PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)", true]
    		]
    	},
    	'Apruebo Dignidad (RD)': {
    		'seats': 9,
    		'color': '#21c27b', //colores['verde-agua'],
    		'names': [
    			["MARIA JOSE OYARZUN SOLIS (RD)", true],
    			["DANIEL RODRIGO STINGO CAMUS (IND-RD)", false],
    			["TATIANA KARINA URRUTIA HERRERA (RD)", true],
    			["FERNANDO ATRIA LEMAITRE (IND-RD)", false],
				["GIOVANNA ANGELA ROA CADIN (RD)", true],
				["BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)", false],
				["AMAYA PAULINA ALVEZ MARIN (RD)", true],
				["AURORA GENOVEVA DELGADO VERGARA (IND-RD)", false],
				["YARELA NICOHL GOMEZ SANCHEZ (IND-RD)", false]
    		]
    	},
    	'Apruebo Dignidad (CS)': {
    		'seats': 6,
    		'color': '#00b771', //colores['verde-agua'],
    		'names': [
    			["JENIFFER VALERIA MELLA ESCOBAR (IND-CS)", false],
				["MARIELA ANDREA SEREY JIMENEZ (IND-CS)", false],
				["JAIME ANDRES BASSA MERCADO (IND-CS)", false],
				["CONSTANZA GABRIELA SCHONHAUT SOTO (CS)", true],
				["IGNACIO JAIME ACHURRA DIAZ (CS)", true],
				["DAMARIS ABARCA GONZALEZ (IND-CS)", false]
    		]
    	},
    	'Apruebo Dignidad (COM)': {
    		'seats': 1,
    		'color': '#33cd85',//colores['verde-agua'],
    		'names': [
    			["CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)", false]
    		]
    	},
    	'Apruebo Dignidad (IGUAL)': {
    		'seats': 1,
    		'color': '#42d88f',//colores['verde-agua'],
    		'names': [
				["MANUELA ROYO LETELIER (IND-IGUAL)", false]
    		]
    	},
    	'La Lista del Pueblo': {
    		'seats': 26,
    		'color': colores['rosado'],
    		'names': [
				["DAYYANA GONZALEZ ARAYA (IND)", false],
				["CONSTANZA ANDREA SAN JUAN STANDEN (IND)", false],
				["IVANNA DANIELA OLIVARES MIRANDA (IND)", false],
				["DANIEL ALEJANDRO BRAVO SILVA (IND)", false],
				["LISETTE LORENA VERGARA RIQUELME (IND)", false],
				["CRISTOBAL PATRICIO ANDRADE LEON (IND)", false],
				["CAMILA IGNACIA ZARATE ZARATE (IND)", false],
				["TANIA ISABEL MADRIAGA FLORES (IND)", false],
				["MARCO ANTONIO ARELLANO ORTEGA (IND)", false],
				["MARIA MAGDALENA RIVERA IRIBARREN (IND)", false],
				["ALEJANDRA PIA PEREZ ESPINA (IND)", false],
				["NATALIA ESTHER HENRIQUEZ CARREÑO (IND)", false],
				["MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)", false],
				["GIOVANNA JAZMIN GRANDON CARO (IND)", false],
				["INGRID FERNANDA VILLENA NARBONA (IND)", false],
				["RODRIGO ERNESTO ROJAS VADE (IND)", false],
				["FRANCISCO JAVIER CAAMAÑO ROJAS (IND)", false],
				["LORETO CRISTINA VALLEJOS DAVILA (IND)", false],
				["ELSA CAROLINA LABRAÑA PINO (IND)", false],
				["FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)", false],
				["FERNANDO SALINAS MANFREDINI (IND)", false],
				["CESAR  URIBE ARAYA (IND)", false],
				["ROSSANA LORETO VIDAL HERNANDEZ (IND)", false],
				["HELMUTH JACOBO MARTINEZ LLANCAPAN (IND)", false],
				["ADRIANA CAMILA AMPUERO BARRIENTOS (IND)", false],
				["ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)", false]
    		]
    	},
    	'Lista del Apruebo (PL)': {
    		'seats': 3,
    		'color': '#a764a6',//colores['violeta'],
    		'names': [
				["JORGE BRUNO ABARCA RIVEROS (IND-PL)", false],
				["AGUSTIN SQUELLA NARDUCCI (IND-PL)", false],
				["PATRICIO  FERNANDEZ CHADWICK (IND-PL)", false]
			]
		},
		'Lista del Apruebo (PS)': {
    		'seats': 15,
    		'color': '#985698', //colores['violeta'],
    		'names': [
				["MAXIMILIANO HURTADO ROCO (PS)", true],
				["CARLOS CALVO MUÑOZ (IND-PS)", false],
				["CLAUDIO GOMEZ CASTRO (IND-PS)", false],
				["CESAR VALENZUELA MAASS (PS)", true],
				["JORGE BARADIT MORALES (IND-PS)", false],
				["MALUCHA PINTO SOLARI (PS)", true],
				["MATIAS ORELLANA CUELLAR (PS)", true],
				["ADRIANA CANCINO MENESES (IND-PS)", false],
				["RICARDO MONTERO ALLENDE (PS)", true],
				["ANDRES CRUZ CARRASCO (IND-PS)", false],
				["RAMONA REYES PAINEQUEO (PS)", true],
				["PEDRO MUÑOZ LEIVA (PS)", true],
				["MARIO VARGAS VIDAL (PS)", true],
				["JULIO ALVAREZ PINTO (PS)", true],
				["TOMAS LAIBE SAEZ (PS)", true]
			]
		},
		'Lista del Apruebo (PRO)': {
    		'seats': 1,
    		'color': '#9f5d9f', //colores['violeta'],
    		'names': [
				["BESSY MIREYA GALLARDO PRADO (IND-PRO)", false]
			]
		},
		'Lista del Apruebo (PR)': {
    		'seats': 1,
    		'color': '#ae6bae',//colores['violeta'],
    		'names': [
				["RENATO FABRIZIO GARIN GONZALEZ (IND-PR)", false]
			]
		},
		'Lista del Apruebo (PDC)': {
    		'seats': 2,
    		'color': '#7d487d', //colores['violeta'],
    		'names': [
				["CHRISTIAN VIERA ALVAREZ (IND-PDC)", false],
				["FUAD  CHAHIN VALENZUELA (PDC)", true]
			]
		},
		'Lista del Apruebo (PPD)': {
    		'seats': 3,
    		'color': '#824283', //colores['violeta'],
    		'names': [
				["FELIPE HARBOE BASCUÑAN (PPD)", true],
				["LUIS RAMON BARCELO AMADO (IND-PPD)", false],
				["EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)", true]
			]
		},
    	'Independientes No Neutrales': {
    		'seats': 11,
    		'color': colores['azul-marino'],
    		'names': [
				["GUILLERMO NICOLAS NAMOR KONG (IND)", false],
				["MIGUEL ANGEL BOTTO SALINAS (IND)", false],
				["PATRICIA POLITZER KEREKES (IND)", false],
				["BENITO JOSE BARANDA FERRAN (IND)", false],
				["JUAN JOSE MARTIN BRAVO (IND)", false],
				["PAULINA VALERIA VALENZUELA RIO (IND)", false],
				["CAROLINA ANDREA SEPULVEDA SEPULVEDA (IND)", false],
				["TAMMY SOLANGE PUSTILNICK ARDITI (IND)", false],
				["JAVIER FUCHSLOCHER BAEZA (IND)", false],
				["LORENA DEL PILAR CESPEDES FERNANDEZ (IND)", false],
				["GASPAR ROBERTO DOMINGUEZ DONOSO (IND)", false]
    		]
    	},
    	'Candidaturas Independientes': {
    		'seats': 11,
    		'color': colores['gris'],
    		'names': [
				["ALEJANDRA ALICIA FLORES CARLOS (IND)", false],
				["CRISTINA INES DORADOR ORTIZ (IND)", false],
				["MARIA TRINIDAD CASTILLO BOILET (IND)", false],
				["JANIS JAN DEL CARMEN MENESES PALMA (IND)", false],
				["RODRIGO LOGAN SOTO (IND)", false],
				["ALONDRA CARRILLO VIDAL (IND)", false],
				["ALVIN ANTONIO SALDAÑA MUÑOZ (IND)", false],
				["GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)", false],
				["MARIA ELISA QUINTEROS CACERES (IND)", false],
				["BASTIAN ESTEBAN LABBE SALAZAR (IND)", false],
				["MAURICIO DAZA CARRASCO (IND)", false]
    		]
    	},
    	'Pueblos Indígenas (Mapuche)': {
    		'seats': 7,
    		'color': '#8a3f1c', //colores['marron'],
    		'names': [
				["FRANCISCA LINCONAO HUIRCAPAN (Mapuche)", false],
				["NATIVIDAD LLANQUILEO PILQUIMAN (Mapuche)", false],
				["ADOLFO MILLABUR ÑANCUIL (Mapuche)", false],
				["ELISA LONCON ANTILEO (Mapuche)", false],
				["ROSA ELIZABETH CATRILEO ARIAS (Mapuche)", false],
				["VICTORINO ERNESTO ANTILEF ÑANCO (Mapuche)", false],
				["ALEXIS REINALDO CAIGUAN ANCAPAN (Mapuche)", false]
    		]
    	},
    	'Pueblos Indígenas (Rapanui)': {
    		'seats': 1,
    		'color': '#914621', //colores['marron'],
    		'names': [
				["TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)", false]
    		]
    	},
    	'Pueblos Indígenas (Atacameño)': {
    		'seats': 1,
    		'color': '#994c27', // colores['marron'],
    		'names': [
				["FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", false]
    		]
    	},
    	'Pueblos Indígenas (Aimara)': {
    		'seats': 2,
    		'color': '#a0522d', // colores['marron'],
    		'names': [
				["ISABELLA BRUNILDA MAMANI MAMANI (Aimara)", false],
				["LUIS ALBERTO JIMENEZ CACERES (Aimara)", false]
    		]
    	},
    	'Pueblos Indígenas (Quechua)': {
    		'seats': 1,
    		'color': '#a75833', // colores['marron'],
    		'names': [
				["WILFREDO MANUEL BACIAN DELGADO (Quechua)", false]
    		]
    	},
    	'Pueblos Indígenas (Colla)': {
    		'seats': 1,
    		'color': '#af5f39', // colores['marron'],
    		'names': [
				["ISABEL SELENA GODOY MONARDEZ (Colla)", false]
    		]
    	},
    	'Pueblos Indígenas (Diaguita)': {
    		'seats': 1,
    		'color': '#b6653f', // colores['marron'],
    		'names': [
				["ERIC JOHANNY CHINGA FERREIRA (Diaguita)", false]
    		]
    	},
    	'Pueblos Indígenas (Kawashkar)': {
    		'seats': 1,
    		'color': '#bf6d46', // colores['marron'],
    		'names': [
				["MARGARITA VARGAS LOPEZ (Kawashkar)", false]
    		]
    	},
    	'Pueblos Indígenas (Yagán)': {
    		'seats': 1,
    		'color': '#c8744d', // colores['marron'],
    		'names': [
				["LIDIA GONZALEZ CALDERON (Yagán)", false]
    		]
    	},
    	'Pueblos Indígenas (Chango)': {
    		'seats': 1,
    		'color': '#d17c54', // colores['marron'],
    		'names': [
				["FERNANDO DEL CARMEN TIRADO SOTO (Chango)", false]
    		]
    	}
    }	
    parliament_order = {
    	'Pueblos Indígenas (Mapuche)': false, 
    	'Pueblos Indígenas (Rapanui)': false, 
    	'Pueblos Indígenas (Atacameño)': false, 
    	'Pueblos Indígenas (Aimara)': false, 
    	'Pueblos Indígenas (Quechua)': false, 
    	'Pueblos Indígenas (Colla)': false, 
    	'Pueblos Indígenas (Diaguita)': false, 
    	'Pueblos Indígenas (Kawashkar)': false, 
    	'Pueblos Indígenas (Yagán)': false, 
    	'Pueblos Indígenas (Chango)': false, 
    	'Candidaturas Independientes': false,
    	'La Lista del Pueblo': true, 
    	'Apruebo Dignidad (PCCH)': true, 
    	'Apruebo Dignidad (FREVS)': true, 
    	'Apruebo Dignidad (RD)': true, 
    	'Apruebo Dignidad (CS)': true, 
    	'Apruebo Dignidad (COM)': true, 
    	'Apruebo Dignidad (IGUAL)': true, 
    	'Lista del Apruebo (PR)': true, 
    	'Lista del Apruebo (PL)': true, 
    	'Lista del Apruebo (PRO)': true, 
    	'Lista del Apruebo (PS)': true, 
    	'Lista del Apruebo (PPD)': true, 
    	'Lista del Apruebo (PDC)': true, 
    	'Independientes No Neutrales': true,
    	'Vamos por Chile (EVO)': true,
    	'Vamos por Chile (RN)': true,
    	'Vamos por Chile (UDI)': true
    }

	legend.innerHTML = '';
	legend.style.display = 'block';
    if (screen.width>=992) {
    	legend.style.width = '240px';
    	legend.style.maxWidth = '240px';
    	legend.style.height = '160px';
    	legend2.innerHTML = '';
    	legend2.style.display = 'block';
    	legend2.style.width = '850px';
    	legend2.style.maxWidth = '850px';
    	legend2.style.width = '360px';
    	legend2.style.height = '250px';
    	//legend2.innerHTML = 'Color y transparencia depende del porcentaje de la lista más votada en el distrito.';
    	var div = document.createElement('div');
    	div.appendChild(generateSVG(parliament, parliament_order, true, "Convencional"));
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
        legend.style.width = '195px';
        legend.style.maxWidth = '195px';
        legend.style.height = '135px';  
    }

	var table = document.createElement('table');
	for (partido in parl_listas) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');

		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = parl_listas[partido].color;
		item.appendChild(key);
		td1.appendChild(item);

		var value = document.createElement('span');
		value.innerHTML = partido + ' (' + parl_listas[partido].seats + ')';
		td2.appendChild(value);

		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
	};
	legend.appendChild(table);
};


function mostrarConvencionalesMH() {
	clean();
	map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'visible');
	map.setLayoutProperty('convencionalesMH-distritos', 'visibility', 'visible');
	map.setLayoutProperty('convencionalesMH-comunas', 'visibility', 'visible');
	document.getElementById('a-convencionalesMH').style.color = 'black';

	legend.innerHTML = '';
	legend.style.display = 'block';
    if (screen.width>=992) {
    	legend.style.width = '250px';
    	legend.style.maxWidth = '250px';
    	legend.style.height = '250px';
    	legend2.style.display = 'block';
    	legend2.style.maxWidth = '850px';
    	legend2.style.width = '650px';
    	legend2.style.height = '18px';
    	legend2.innerHTML = 'Acercarse para distinguir participación a nivel comunal.';
    } else {
        legend.style.width = '200px';
        legend.style.maxWidth = '200px';
        legend.style.height = '190px';        
    }

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
    if (screen.width>=992) {
	   table.style.marginTop = '20px';   
    }
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

function mostrarConcejalesMH() {
	clean();
	map.setLayoutProperty('comunas-outline', 'visibility', 'visible');
	map.setLayoutProperty('concejalesMH', 'visibility', 'visible');
	document.getElementById('a-concejalesMH').style.color = 'black';

	legend.innerHTML = '';
	legend.style.display = 'block';
    legend2.innerHTML = '';
    legend2.style.display = 'none';
    if (screen.width>=992) {
    	legend.style.width = '250px';
    	legend.style.maxWidth = '250px';
    	legend.style.height = '310px';
    } else {
        legend.style.width = '205px';
        legend.style.maxWidth = '205px';
        legend.style.height = '250px';
    }

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
    if (screen.width>=992) {
	   table.style.marginTop = '20px';
    }
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
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = 'Mujeres';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = 'Hombres';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Candidatas/os:';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '5.363';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '8.457';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Electas/os:';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '751';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '1.502';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Votos obtenidos:';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '2.499.063';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '3.589.511';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	table.appendChild(tr);

	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = 'Porcentaje:';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '41,05%';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = '58,95%';
	td.style.textAlign = 'right';
	td.style.paddingLeft = '10px';
	tr.appendChild(td);
	table.appendChild(tr);


	legend.appendChild(table);
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
    	circle.setAttributeNS(null, "cx", -4*a);
    	circle.setAttributeNS(null, "cy", 1.5*a);
    	circle.setAttributeNS(null, "r", points[0].r);
    	circle.setAttributeNS(null, "fill", colores['suave']);
    	svgElem.appendChild(circle);
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", 2*a);
    	circle.setAttributeNS(null, "cy", 1.5*a);
    	circle.setAttributeNS(null, "r", points[0].r);
    	circle.setAttributeNS(null, "fill", colores['suave']);
    	svgElem.appendChild(circle);
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", 2*a);
    	circle.setAttributeNS(null, "cy", 1.5*a);
    	circle.setAttributeNS(null, "r", points[0].r/2.8);
    	circle.setAttributeNS(null, "fill", colores['negro']);
    	svgElem.appendChild(circle);
    	var text = document.createElementNS(xmlns,"text");
    	if (type=='Convencional') {
	    	text.innerHTML = 'INDEPENDIENTE';
	    	text.setAttributeNS(null, "x", -3.5*a);
	    	text.setAttributeNS(null, "y", 1.65*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/1.8+"px");
	    	text.setAttributeNS(null, "text-anchor", "start");
	    	svgElem.appendChild(text);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = 'AFILIADO A PARTIDO';
	    	text.setAttributeNS(null, "x", 2.5*a);
	    	text.setAttributeNS(null, "y", 1.65*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/1.8+"px");
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