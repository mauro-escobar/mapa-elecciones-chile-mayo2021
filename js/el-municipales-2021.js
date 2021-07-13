var coloresAlcaldes = {
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

var coloresConcejales = {
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

var coloresListasConcejales = {
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

	for (codigo in count_true) {
		if (count_true[codigo]==0) {
			ret['0'] += 1;
		} else if (count_true[codigo]==(count_total[codigo]+1)) {
			ret['1'] += 1;
		} else {
			ret[count_true[codigo]+'/'+(count_total[codigo]+1)] += 1;
		}
	}
};

function addSourceMunicipales(map) {
    map.addSource('municipales-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.crz9meen',
        }
    );
};

function addLayerAlcaldes(map) {
    map.addLayer({
        'id': 'alcaldes',
        'type': 'fill',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
        'filter': ['all', 
        			['has', 'Part_TD'],
        			['!=', ['get', 'NOM_COM'], 'Papudo'],
        			['!=', ['get', 'NOM_COM'], 'Florida'],
        			['!=', ['get', 'NOM_COM'], 'Copiapó']
        		  ],
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
        'id': 'alcaldes-pendientes',
        'type': 'fill',
        'source': 'municipales-data',
        'source-layer': 'municipales2021-05-7cl0n6',
        'filter': ['all', 
        			['has', 'Part_TD'],
        			['any',
        				['==', ['get', 'NOM_COM'], 'Papudo'],
	        			['==', ['get', 'NOM_COM'], 'Florida'],
	        			['==', ['get', 'NOM_COM'], 'Copiapó']
        			]
        		  ],
        'paint': {
            'fill-color': colores['blanco'],
            'fill-opacity': 1
        },
    }, 'comunas-outline');
    map.setLayoutProperty('alcaldes-pendientes', 'visibility', 'none');	
};

function addLayerConcejales(map) {
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
};

function addLayerConcejalesMH(map) {
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
};

function addLayerParticipacionMunicipales(map) {
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
};

function popAlcaldes(map) {
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
				'<span class="legend-key" style="background-color:'+coloresAlcaldes[lista]+'"></span>'+
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
	map.on('mousemove', 'alcaldes-pendientes', function (e) {
	    map.getCanvas().style.cursor = 'pointer';
		var comuna = e.features[0].properties.NOM_COM;
		var participacion = e.features[0].properties.Part;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+comuna+'</span></h4>'+
				'<p>Resultado pendiente</p>'+
				'<h5>Participación: '+participacion+'%</h5>'		
				)
			.addTo(map);
	});
	map.on('mouseleave', 'alcaldes-pendientes', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});
};

function popConcejales(map) {
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
			concejales += '<td><span class="legend-key" style="background-color:'+coloresConcejales[lista]+'"></span>';
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
		innerHTML += '<span class="legend-key" style="background-color:'+coloresAlcaldes[lista]+'"></span>';
		innerHTML += lista+' ('+partido+')</h4>';
		innerHTML += concejales;	
		innerHTML += '<h5>Participación: '+participacion+'%</h5>';
		popup.setLngLat(e.lngLat).setHTML(innerHTML).addTo(map);
	});
	map.on('mouseleave', 'concejales', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});
};

function popConcejalesMH(map) {
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
};

function popParticipacionMunicipales(map) {
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
};

function mostrarAlcaldes() {
	clean();
	map.setLayoutProperty('comunas-outline', 'visibility', 'visible');
	map.setLayoutProperty('alcaldes', 'visibility', 'visible');
	map.setLayoutProperty('alcaldes-pendientes', 'visibility', 'visible');
	document.getElementById('a-alcaldes').style.color = 'black';


	parliament = {
		'Chile Vamos': {
			'seats': 87,
			'color': colores['azul'],
			'parties': [['UDI', 32], ['RN', 31], ['EVO', 1], ['IND', 23]]
		},
		'Unidad por el Apruebo': {
			'seats': 68,
			'color': colores['violeta'],
			'parties': [['PS', 22], ['PPD', 17], ['PR', 11], ['IND', 18]]
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
			'seats': 106,
			'color': colores['gris'],
			'parties': []
		}
	}

	legend.style.display = 'block';
    legend.innerHTML = '<span style="font-weight:bold">Alcaldes 2021-2024</span>';
    if (screen.width>=992) {
    	legend2.style.display = 'block';
    	legend2.innerHTML = 'Transparencia depende del porcentaje del candidato electo.';
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
	for (var layer in coloresListasConcejales) {
		if (layer == 'Chile Vamos' & screen.width>=992) {
			var tr = document.createElement('tr');
            tr.style.height = '26px';
			var td1= document.createElement('td');
			var td2= document.createElement('td');
			td2.colSpan = '2';
			var input = document.createElement('input');
			input.type = 'checkbox';
			input.id = 'cb-vamos-por-chile';
			input.style.height = '10px';
			input.style.width = '10px';
			input.style.margin = '3px';
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
            tr.style.height = '26px';
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
			input.style.margin = '3px';
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
            tr.style.height = '26px';
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
			input.style.margin = '3px';
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
		var color = coloresListasConcejales[layer];
		var tr = document.createElement('tr');
            tr.style.height = '26px';
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
		input.style.margin = '3px';
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

function mostrarConcejalesMH() {
	clean();
	map.setLayoutProperty('comunas-outline', 'visibility', 'visible');
	map.setLayoutProperty('concejalesMH', 'visibility', 'visible');
	document.getElementById('a-concejalesMH').style.color = 'black';

	legend.innerHTML = '';
	legend.style.display = 'block';
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
