var coloresConvencionales = {
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

function addSourceConvencionales(map) {
    map.addSource('convencionales-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.63a30umw',
        }
    );
    map.addSource('convencionales-comunas-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.99d6jndi', //convencionales2021-05-comunas-1se2dx
        }
    );
};

function addSourceConvencionalesMarkers(map) {
	map.addSource('markers-constituyentes',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.7pcm6it8',
        }
    );
};

function addLayerConvencionalesMarkers(map) {
	map.addLayer({
    	'id': 'convencionales-markers',
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
    map.setLayoutProperty('convencionales-markers', 'visibility', 'none');	

    map.addLayer({
    	'id':'convencionales-lines',
		'source': 'markers-constituyentes',
		'source-layer': 'markers-constituyentes-7op8qa',
		'type': 'line',
		'filter': ['all', ['!', ['has', 'lista']], ['!', ['has', 'title']]],
		'paint' : {
			'line-color': colores['negro'],
			'line-width': 1
		}
    }, 'convencionales-markers');
    map.setLayoutProperty('convencionales-lines', 'visibility', 'none');	
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
    }, 'convencionales-lines');
    map.setLayoutProperty('markers-title', 'visibility', 'none');	
};

function addLayerConvencionales(map) {
	map.addLayer({
        'id': 'convencionales',
        'type': 'fill',
        'source': 'convencionales-data',
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
        'maxzoom': 6.3
    }, 'distritos-outline');
    map.setLayoutProperty('convencionales', 'visibility', 'none');	
	map.addLayer({
        'id': 'convencionales-comunas',
        'type': 'fill',
        'source': 'convencionales-comunas-data',
        'source-layer': 'convencionales2021-05-comunas-1se2dx',
        'filter': ['has', 'DISTRITO'],
        'paint': {
            'fill-color': [
				'match',
				['get', 'Conv1_Lis'],
				'APRUEBO DIGNIDAD', colores['verde-agua'],
				'ASAMBLEA CONSTITUYENTE ATACAMA', colores['rosado'],
				'ASAMBLEA POPULAR CONSTITUYENTE (D20)', colores['gris'],
				'ASAMBLEA POPULAR POR LA DIGNIDAD (D17)', colores['gris'],
				'CANDIDATURA INDEPENDIENTE', colores['gris'],
				'COORDINADORA SOCIAL DE MAGALLANES (D28)', colores['rosado'],
				'CORRIENTES INDEPENDIENTES (D16)', colores['gris'],
				'ELIGE LA LISTA DEL PUEBLO (D23)', colores['rosado'],
				'FUERZA SOCIAL DE ÑUBLE, LA LISTA DEL PUEBLO (D19)', colores['rosado'],
				'INDEPENDIENTES DE TARAPACA (D2)', colores['gris'],
				'INDEPENDIENTES DE ÑUBLE POR LA NUEVA CONSTITUCION (D19)', colores['azul-marino'],
				'INDEPENDIENTES DEL BIOBIO POR UNA NUEVA CONSTITUCION (D20)', colores['azul-marino'],
				'INDEPENDIENTES DISTRITO 6 + LISTA DEL PUEBLO (D6)', colores['rosado'],
				'INDEPENDIENTES NUEVA CONSTITUCION (D26)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION  (D10)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D14)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D23)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D4)', colores['azul-marino'],
				'INDEPENDIENTES POR LA NUEVA CONSTITUCION (D6)', colores['azul-marino'],
				'INDEPENDIENTES POR LA REGION DE COQUIMBO (D5)', colores['gris'],
				'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D12)', colores['azul-marino'],
				'INDEPENDIENTES POR UNA NUEVA CONSTITUCION (D21)', colores['azul-marino'],
				'INSULARES E INDEPENDIENTES (D26)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D10)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D13)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D17)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D3)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D7)', colores['rosado'],
				'LA LISTA DEL PUEBLO (D8)', colores['rosado'],
				'LA LISTA DEL PUEBLO 100% INDEPENDIENTES (D15)', colores['rosado'],
				'LA LISTA DEL PUEBLO DISTRITO 12 (D12)', colores['rosado'],
				'LA LISTA DEL PUEBLO DISTRITO 14 (D14)', colores['rosado'],
				'LA LISTA DEL PUEBLO DISTRITO 9 (D9)', colores['rosado'],
				'LA LISTA DEL PUEBLO MAULE SUR (D18)', colores['rosado'],
				'LA LISTA DEL PUEBLO(D20)', colores['rosado'],
				'LISTA DEL APRUEBO', colores['violeta'],
				'LISTA DEL PUEBLO - MOVIMIENTO TERRITORIAL CONSTITUYENTE (D5)', colores['rosado'],
				'MOVIMIENTO INDEPENDIENTES DEL NORTE (D3)', colores['gris'],
				'MOVIMIENTOS SOCIALES AUTONOMOS (D15)', colores['gris'],
				'MOVIMIENTOS SOCIALES INDEPENDIENTES (D6)', colores['gris'],
				'REGIONALISMO CIUDADANO INDEPENDIENTE (D28)', colores['gris'],
				'VAMOS POR CHILE', colores['azul'],
				'VOCES CONSTITUYENTES (D12)', colores['gris'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'Conv1_PctL'],
            	10, 0.5,
            	45, 1,
            ]
        },
        'minzoom': 6.3
    }, 'distritos-outline');
    map.setLayoutProperty('convencionales-comunas', 'visibility', 'none');	

    map.addLayer({
        'id': 'convencionalesMH-distritos',
        'type': 'fill',
        'source': 'convencionales-data',
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
};

function addLayerParticipacionDistritos(map) {
	map.addLayer({
        'id': 'participacion-distritos',
        'type': 'fill',
        'source': 'convencionales-data',
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
};

function popConvencionales(map) {
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
				if (screen.width>992) convencionales += '<tr><td colspan=3><span style="font-weight:bold">'+lista+'</span></td>';
				else convencionales += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
				convencionales += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
			};
			convencionales += '<tr>';	
			convencionales += '<td><span class="legend-key" style="background-color:'+coloresConvencionales[lista]+'"></span>';
			convencionales += e.features[0].properties[beg+'_Nom'];
			if (screen.width>992) convencionales += '</td><td style="padding-left:10px;text-align:center">('+sexo+')</td>';
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

	map.on('mousemove', 'convencionales-comunas', function (e) {
	    map.getCanvas().style.cursor = 'pointer';
		var nconv = e.features[0].properties['NConv'];
		var participacion = e.features[0].properties['Part'];
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
				if (screen.width>992) convencionales += '<tr><td colspan=3><span style="font-weight:bold">'+lista+'</span></td>';
				else convencionales += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
				convencionales += '<td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
			};
			convencionales += '<tr>';	
			convencionales += '<td><span class="legend-key" style="background-color:'+coloresConvencionales[lista]+'"></span>';
			convencionales += e.features[0].properties[beg+'_Nom'];
			if (screen.width>992) convencionales += '</td><td style="padding-left:10px;text-align:center">('+sexo+')';
			convencionales += '</td><td style="padding-left:10px">'+partido+'</td>';
			convencionales += '<td style="padding-left:10px;text-align:right">'+perct+'%</td>';
			convencionales += '<td style="padding-left:10px;text-align:right">'+paridad+'</td>';
			convencionales += '</tr>';
			lista_ant = lista;
		}
		if (hayParidad) {
			convencionales += '<tr><td colspan=5>*: Convencional elegido para respetar paridad.</td></tr>'
		}
		convencionales += '</table>';
		convencionales += '<h5>Participación: '+participacion+'%</h5>';

		var comuna = e.features[0].properties.NOM_COM;
		var distrito = e.features[0].properties.DISTRITO;
		var region = e.features[0].properties.REGION;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+comuna+' - Distrito '+distrito+'</span><br>'+region+'</h4>'+convencionales
				)
			.addTo(map);
	});
	map.on('mouseleave', 'convencionales-comunas', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});

	map.on('mousemove', 'convencionales-markers', function (e) {
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
	map.on('mouseleave', 'convencionales-markers', function () {
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
};

function popParticipacionDistritos(map) {
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
};

function mostrarConvencionales() {
	clean();
	map.setLayoutProperty('convencionales', 'visibility', 'visible');
	map.setLayoutProperty('convencionales-comunas', 'visibility', 'visible');
    map.setLayoutProperty('convencionales-markers', 'visibility', 'visible');	
    map.setLayoutProperty('convencionales-lines', 'visibility', 'visible');	
    map.setLayoutProperty('markers-title', 'visibility', 'visible');	
	map.setLayoutProperty('distritos-outline', 'visibility', 'visible');
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
    	'Pueblos Indígenas': {
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
    var parliament_order = {
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
    };
    var directiva = [
    	['Presidenta', "ELISA LONCON ANTILEO (Mapuche)"],
    	['Vicepresidente', "JAIME ANDRES BASSA MERCADO (IND-CS)"]
    ];

	legend.innerHTML = '';
	legend.style.display = 'block';
    if (screen.width>=992) {
    	legend2.style.display = 'block';
    	var div = document.createElement('div');
    	div.style.width = '360px';
    	div.appendChild(generateSVG(parliament, parliament_order, true, "Convencional", directiva));
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
    	legend2.style.display = 'none';
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
    	legend2.style.display = 'block';
    	legend2.innerHTML = 'Acercarse para distinguir participación a nivel comunal.';
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