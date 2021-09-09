var coloresConvencionales = {
	'APRUEBO DIGNIDAD': colores['verde-agua'],
	'ASAMBLEA CONSTITUYENTE ATACAMA': colores['rosado'],
	'ASAMBLEA POPULAR CONSTITUYENTE (D20)': colores['gris'],
	'ASAMBLEA POPULAR POR LA DIGNIDAD (D17)': colores['gris'],
	'CANDIDATURA INDEPENDIENTE': colores['gris'],
	'COORDINADORA SOCIAL DE MAGALLANES (D28)': colores['rosado'],
	'CORRIENTES INDEPENDIENTES (D16)': colores['rosado'],
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
	'CANDIDATURA INDEPENDIENTE (ex LISTA DEL PUEBLO)': colores['gris'],
	'COORDINADORA SOCIAL DE MAGALLANES (ex LISTA DEL PUEBLO)': colores['gris'],
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
		'filter': ['has', 'LISTA'],
		'paint' : {
			'circle-color': [
				'match',
				['get', 'LISTA'],
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
				'CORRIENTES INDEPENDIENTES (D16)', colores['rosado'],
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
				'PUEBLOS ORIGINARIOS', colores['marron'],
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
				'CORRIENTES INDEPENDIENTES (D16)', colores['rosado'],
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
				'CORRIENTES INDEPENDIENTES (D16)', colores['rosado'],
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

function touchConvencional(map) {
	map.on('mousemove','convencionales-markers', function (e) {
		map.getCanvas().style.cursor = 'pointer';
		var name = e.features[0].properties['NOMBRE'].replace(/ /g,"-");
		var els = document.getElementsByClassName(name);
		if (els.length>0) touchParliamentSeat(els[0]);
	});
	map.on('mouseleave','convencionales-markers', function () {
		unTouchParliamentSeat();
	})
}

function clickDistrito(map) {
	map.on('click', 'convencionales', function (e) {
		var distrito = e.features[0].properties.DISTRITO;
		paintGroup('D'+distrito);

		var els = document.getElementsByClassName("grupo");
	    for (var i = 0; i < els.length; i++) {
	    	if (els[i].innerHTML=='D'+distrito) els[i].style.opacity = 1;
	    }
	});
	map.on('click', 'convencionales-comunas', function (e) {
		var distrito = e.features[0].properties.DISTRITO;
		paintGroup('D'+distrito);

		var els = document.getElementsByClassName("grupo");
	    for (var i = 0; i < els.length; i++) {
	    	if (els[i].innerHTML=='D'+distrito) els[i].style.opacity = 1;
	    }
	});
}

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
		var lista = e.features[0].properties.LISTA;
		var nombre = e.features[0].properties.NOMBRE;
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

var conv_parliament = {
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
			["RUGGERO COZZI ELZO (RN)", true],
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
	'Pueblo Constituyente': {
		'seats': 17,
		'color': colores['rosado'],
		'names': [
			["MARCO ANTONIO ARELLANO ORTEGA (IND)", false],
			["FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)", false], //
			["FRANCISCO JAVIER CAAMAÑO ROJAS (IND)", false],
			["IVANNA DANIELA OLIVARES MIRANDA (IND)", false],
			["LISETTE LORENA VERGARA RIQUELME (IND)", false], //
			["INGRID FERNANDA VILLENA NARBONA (IND)", false],
			["DAYYANA GONZALEZ ARAYA (IND)", false],
			["CAMILA IGNACIA ZARATE ZARATE (IND)", false],
			["NATALIA ESTHER HENRIQUEZ CARREÑO (IND)", false],
			["CESAR  URIBE ARAYA (IND)", false],
			["ELSA CAROLINA LABRAÑA PINO (IND)", false],
			["MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)", false],
			["DANIEL ALEJANDRO BRAVO SILVA (IND)", false],
			["LORETO CRISTINA VALLEJOS DAVILA (IND)", false], //
			["FERNANDO SALINAS MANFREDINI (IND)", false], //
			["TANIA ISABEL MADRIAGA FLORES (IND)", false],
			["GIOVANNA JAZMIN GRANDON CARO (IND)", false],
		]
	},
	'Candidaturas Independientes 2': {
		'seats': 10,
		'color': colores['gris'],
		'names': [
			["RODRIGO ERNESTO ROJAS VADE (IND)", false],
			["CONSTANZA ANDREA SAN JUAN STANDEN (IND)", false],
			["CRISTOBAL PATRICIO ANDRADE LEON (IND)", false],
			["ALEJANDRA PIA PEREZ ESPINA (IND)", false],
			["GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)", false],
			["ADRIANA CAMILA AMPUERO BARRIENTOS (IND)", false],
			["MARIA MAGDALENA RIVERA IRIBARREN (IND)", false],
			["HELMUTH JACOBO MARTINEZ LLANCAPAN (IND)", false],
			["ROSSANA LORETO VIDAL HERNANDEZ (IND)", false],
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
		'seats': 10,
		'color': colores['azul-marino'],
		'names': [
			["GUILLERMO NICOLAS NAMOR KONG (IND)", false],
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
		'seats': 10,
		'color': colores['gris'],
		'names': [
			["ALEJANDRA ALICIA FLORES CARLOS (IND)", false],
			["CRISTINA INES DORADOR ORTIZ (IND)", false],
			["MARIA TRINIDAD CASTILLO BOILET (IND)", false],
			["JANIS JAN DEL CARMEN MENESES PALMA (IND)", false],
			["RODRIGO LOGAN SOTO (IND)", false],
			["ALONDRA CARRILLO VIDAL (IND)", false],
			["ALVIN ANTONIO SALDAÑA MUÑOZ (IND)", false],
			["MARIA ELISA QUINTEROS CACERES (IND)", false],
			["BASTIAN ESTEBAN LABBE SALAZAR (IND)", false],
			["MAURICIO DAZA CARRASCO (IND)", false]
		]
	},
	'Candidaturas Independientes 3': {
		'seats': 1,
		'color': colores['gris'],
		'names': [
			["MIGUEL ANGEL BOTTO SALINAS (IND)", false],
		]
	},
	'Pueblos Originarios (Mapuche)': {
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
	'Pueblos Originarios (Rapanui)': {
		'seats': 1,
		'color': '#914621', //colores['marron'],
		'names': [
			["TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)", false]
		]
	},
	'Pueblos Originarios (Atacameño)': {
		'seats': 1,
		'color': '#994c27', // colores['marron'],
		'names': [
			["FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", false]
		]
	},
	'Pueblos Originarios (Aimara)': {
		'seats': 2,
		'color': '#a0522d', // colores['marron'],
		'names': [
			["ISABELLA BRUNILDA MAMANI MAMANI (Aimara)", false],
			["LUIS ALBERTO JIMENEZ CACERES (Aimara)", false]
		]
	},
	'Pueblos Originarios (Quechua)': {
		'seats': 1,
		'color': '#a75833', // colores['marron'],
		'names': [
			["WILFREDO MANUEL BACIAN DELGADO (Quechua)", false]
		]
	},
	'Pueblos Originarios (Colla)': {
		'seats': 1,
		'color': '#af5f39', // colores['marron'],
		'names': [
			["ISABEL SELENA GODOY MONARDEZ (Colla)", false]
		]
	},
	'Pueblos Originarios (Diaguita)': {
		'seats': 1,
		'color': '#b6653f', // colores['marron'],
		'names': [
			["ERIC JOHANNY CHINGA FERREIRA (Diaguita)", false]
		]
	},
	'Pueblos Originarios (Kawashkar)': {
		'seats': 1,
		'color': '#bf6d46', // colores['marron'],
		'names': [
			["MARGARITA VARGAS LOPEZ (Kawashkar)", false]
		]
	},
	'Pueblos Originarios (Yagán)': {
		'seats': 1,
		'color': '#c8744d', // colores['marron'],
		'names': [
			["LIDIA GONZALEZ CALDERON (Yagán)", false]
		]
	},
	'Pueblos Originarios (Chango)': {
		'seats': 1,
		'color': '#d17c54', // colores['marron'],
		'names': [
			["FERNANDO DEL CARMEN TIRADO SOTO (Chango)", false]
		]
	}
}	
var conv_parliament_order = {
	'Pueblos Originarios (Mapuche)': false, 
	'Pueblos Originarios (Rapanui)': false, 
	'Pueblos Originarios (Atacameño)': false, 
	'Pueblos Originarios (Aimara)': false, 
	'Pueblos Originarios (Quechua)': false, 
	'Pueblos Originarios (Colla)': false, 
	'Pueblos Originarios (Diaguita)': false, 
	'Pueblos Originarios (Kawashkar)': false, 
	'Pueblos Originarios (Yagán)': false, 
	'Pueblos Originarios (Chango)': false, 
	'Candidaturas Independientes': false,
	'Pueblo Constituyente': true,  
	'Candidaturas Independientes 2': true,
	'Apruebo Dignidad (PCCH)': true, 
	'Apruebo Dignidad (FREVS)': true, 
	'Apruebo Dignidad (RD)': true, 
	'Apruebo Dignidad (CS)': true, 
	'Apruebo Dignidad (COM)': true, 
	'Apruebo Dignidad (IGUAL)': true, 
	'Lista del Apruebo (PR)': true, 
	'Lista del Apruebo (PL)': true, 
	'Lista del Apruebo (PS)': true, 
	'Lista del Apruebo (PPD)': true, 
	'Lista del Apruebo (PRO)': true, 
	'Lista del Apruebo (PDC)': true, 
	'Candidaturas Independientes 3': true,
	'Independientes No Neutrales': true,
	'Vamos por Chile (EVO)': true,
	'Vamos por Chile (RN)': true,
	'Vamos por Chile (UDI)': true
};
var conv_directiva = [
	['Presidenta', "ELISA LONCON ANTILEO (Mapuche)", 0.5, 0],
	['Vicepresidente', "JAIME ANDRES BASSA MERCADO (IND-CS)", 0.5, 1],
	['Vicepresidenta',"ISABEL SELENA GODOY MONARDEZ (Colla)", -0.5, 0],
	['Vicepdta.',"TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)", -0.5, 1],
	// ['Vicepresidente', "RODRIGO ERNESTO ROJAS VADE (IND)", -0.5, 0],
	['Vicepdta.', "ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)", -0.5, 2],
	['Vicepresidente', "PEDRO MUÑOZ LEIVA (PS)", -0.5, 3],
	['Vicepdta.', "LORENA DEL PILAR CESPEDES FERNANDEZ (IND)", -0.5, 4],
	['Vicepresidente', "RODRIGO ALVAREZ ZENTENO (UDI)", -0.5, 5]
];
var conv_coordinadores = {
	"MARIA ELISA QUINTEROS CACERES (IND)": ["Ética", colores['rojo-oscuro']],
	"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)": ["Ética", colores['rojo-oscuro']],
	"GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)": ["Presupuesto", colores['negro']],
	"CESAR VALENZUELA MAASS (PS)": ["Presupuesto", colores['rojo-oscuro']],
	"DANIEL ALEJANDRO BRAVO SILVA (IND)": ["Reglamento", colores['negro']],
	"AMAYA PAULINA ALVEZ MARIN (RD)": ["Reglamento", colores['rojo-oscuro']],
	"MANUELA ROYO LETELIER (IND-IGUAL)": ["DDHH", colores['rojo-oscuro']],
	"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)": ["DDHH", colores['rojo-oscuro']],
	"WILFREDO MANUEL BACIAN DELGADO (Quechua)": ["Participación-Indígena", colores['negro']], 
	"MARGARITA VARGAS LOPEZ (Kawashkar)": ["Participación-Indígena", colores['negro']],
	"JAVIER FUCHSLOCHER BAEZA (IND)": ["Participación-Popular", colores['rojo-oscuro']],
	"LISETTE LORENA VERGARA RIQUELME (IND)": ["Participación-Popular", colores['negro']],
	"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)": ["Descentralización", colores['negro']],
	"CRISTINA INES DORADOR ORTIZ (IND)": ["Descentralización", colores['rojo-oscuro']],
	"LORETO CRISTINA VALLEJOS DAVILA (IND)": ["Comunicaciones", colores['negro']],
	"PATRICIO  FERNANDEZ CHADWICK (IND-PL)": ["Comunicaciones", colores['rojo-oscuro']]
};
var conv_grupos = {
	"Pueblos Originarios": [
		"FRANCISCA LINCONAO HUIRCAPAN (Mapuche)", 
		"NATIVIDAD LLANQUILEO PILQUIMAN (Mapuche)", 
		"ADOLFO MILLABUR ÑANCUIL (Mapuche)", 
		"ELISA LONCON ANTILEO (Mapuche)", 
		"ROSA ELIZABETH CATRILEO ARIAS (Mapuche)", 
		"VICTORINO ERNESTO ANTILEF ÑANCO (Mapuche)", 
		"ALEXIS REINALDO CAIGUAN ANCAPAN (Mapuche)", 
		"TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)", 
		"FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", 
		"ISABELLA BRUNILDA MAMANI MAMANI (Aimara)", 
		"LUIS ALBERTO JIMENEZ CACERES (Aimara)", 
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)", 
		"ISABEL SELENA GODOY MONARDEZ (Colla)", 
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)", 
		"MARGARITA VARGAS LOPEZ (Kawashkar)", 
		"LIDIA GONZALEZ CALDERON (Yagán)", 
		"FERNANDO DEL CARMEN TIRADO SOTO (Chango)"
	],
	"Vamos por Chile": [
		"POLLYANA RIVERA BIGAS (IND-UDI)",
		"PABLO ANTONIO TOLOZA FERNANDEZ (UDI)", 
		"JORGE ARANCIBIA REYES (IND-UDI)",
		"ARTURO ZUÑIGA JORY (UDI)", 
		"MARCELA CUBILLOS SIGALL (IND-UDI)",
		"CONSTANZA  HUBE PORTUS (UDI)", 
		"CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)",
		"CAROL BOWN SEPULVEDA (UDI)", 
		"RICARDO NEUMANN BERTIN (IND-UDI)",
		"ALFREDO MORENO ECHEVERRIA (IND-UDI)",
		"MARTIN ARRAU GARCIA-HUIDOBRO (UDI)", 
		"MARGARITA LETELIER CORTES (UDI)", 
		"EDUARDO ANDRES CRETTON REBOLLEDO (UDI)", 
		"FELIPE IGNACIO MENA VILLAR (UDI)", 
		"MARIA CECILIA UBILLA PEREZ (IND-UDI)",
		"KATERINE MONTEALEGRE NAVARRO (UDI)", 
		"RODRIGO ALVAREZ ZENTENO (UDI)",
		"ALVARO JOFRE CACERES (RN)", 
		"ROBERTO VEGA CAMPUSANO (RN)", 
		"RUGGERO COZZI ELZO (RN)", 
		"RAUL CELIS MONTT (RN)", 
		"TERESA MARINOVIC VIAL (IND-RN)",
		"CRISTIAN MONCKEBERG BRUNER (RN)", 
		"BERNARDO FONTAINE TALAVERA (IND-RN)",
		"MANUEL JOSE OSSANDON LIRA (IND-RN)",
		"PATRICIA LABRA BESSERER (RN)", 
		"LUCIANO ERNESTO SILVA MORA (RN)", 
		"PAULINA VELOSO MUÑOZ (RN)", 
		"RUTH HURTADO OLAVE (IND-RN)",
		"LUIS MAYOL BOUCHON (RN)", 
		"ANGELICA TEPPER KOLOSSA (IND-RN)",
		"HARRY JURGENSEN CAESAR (RN)",
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)",
		"HERNAN LARRAIN MATTE (EVO)", 
		"BARBARA REBOLLEDO AGUIRRE (IND-EVO)",
		"ROCIO  CANTUARIAS RUBIO (IND-EVO)",
		"GEOCONDA NAVARRETE ARRATIA (EVO)"
	],
	"Apruebo Dignidad": [
		"MARIA JOSE OYARZUN SOLIS (RD)", 
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)", 
		"TATIANA KARINA URRUTIA HERRERA (RD)", 
		"FERNANDO ATRIA LEMAITRE (IND-RD)", 
		"GIOVANNA ANGELA ROA CADIN (RD)", 
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)", 
		"AMAYA PAULINA ALVEZ MARIN (RD)", 
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)", 
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)", 
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)", 
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)", 
		"JAIME ANDRES BASSA MERCADO (IND-CS)", 
		"CONSTANZA GABRIELA SCHONHAUT SOTO (CS)", 
		"IGNACIO JAIME ACHURRA DIAZ (CS)", 
		"DAMARIS ABARCA GONZALEZ (IND-CS)", 
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
		"CAROLINA ELIANA VIDELA OSORIO (PCCH)",
		"HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)",
		"ERICKA  PORTILLA BARRIOS (PCCH)",
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"BARBARA SEPULVEDA HALES (PCCH)",
		"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)",
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)",
		"NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)"
	],
	"Frente Amplio": [
		"MARIA JOSE OYARZUN SOLIS (RD)", 
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)", 
		"TATIANA KARINA URRUTIA HERRERA (RD)", 
		"FERNANDO ATRIA LEMAITRE (IND-RD)", 
		"GIOVANNA ANGELA ROA CADIN (RD)", 
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)", 
		"AMAYA PAULINA ALVEZ MARIN (RD)", 
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)", 
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)", 
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)", 
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)", 
		"JAIME ANDRES BASSA MERCADO (IND-CS)", 
		"CONSTANZA GABRIELA SCHONHAUT SOTO (CS)", 
		"IGNACIO JAIME ACHURRA DIAZ (CS)", 
		"DAMARIS ABARCA GONZALEZ (IND-CS)", 
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)"
	],
	"Chile Digno": [
		"CAROLINA ELIANA VIDELA OSORIO (PCCH)",
		"HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)",
		"ERICKA  PORTILLA BARRIOS (PCCH)",
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"BARBARA SEPULVEDA HALES (PCCH)",
		"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)",
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)",
		"NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)"
	],
	"Pueblo Constituyente": [
		"MARCO ANTONIO ARELLANO ORTEGA (IND)",
		"FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)",
		"FRANCISCO JAVIER CAAMAÑO ROJAS (IND)",
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"LISETTE LORENA VERGARA RIQUELME (IND)",
		"INGRID FERNANDA VILLENA NARBONA (IND)",
		"DAYYANA GONZALEZ ARAYA (IND)",
		"CAMILA IGNACIA ZARATE ZARATE (IND)",
		"NATALIA ESTHER HENRIQUEZ CARREÑO (IND)",
		"CESAR  URIBE ARAYA (IND)",
		"ELSA CAROLINA LABRAÑA PINO (IND)",
		"MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)",
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"LORETO CRISTINA VALLEJOS DAVILA (IND)",
		"FERNANDO SALINAS MANFREDINI (IND)",
		"TANIA ISABEL MADRIAGA FLORES (IND)",
                "GIOVANNA JAZMIN GRANDON CARO (IND)",
	],
	"Lista del Apruebo": [
		"MAXIMILIANO HURTADO ROCO (PS)", 
		"CARLOS CALVO MUÑOZ (IND-PS)", 
		"CLAUDIO GOMEZ CASTRO (IND-PS)", 
		"CESAR VALENZUELA MAASS (PS)", 
		"JORGE BARADIT MORALES (IND-PS)", 
		"MALUCHA PINTO SOLARI (PS)", 
		"MATIAS ORELLANA CUELLAR (PS)", 
		"ADRIANA CANCINO MENESES (IND-PS)", 
		"RICARDO MONTERO ALLENDE (PS)", 
		"ANDRES CRUZ CARRASCO (IND-PS)", 
		"RAMONA REYES PAINEQUEO (PS)", 
		"PEDRO MUÑOZ LEIVA (PS)", 
		"MARIO VARGAS VIDAL (PS)", 
		"JULIO ALVAREZ PINTO (PS)", 
		"TOMAS LAIBE SAEZ (PS)", 
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)", 
		"RENATO FABRIZIO GARIN GONZALEZ (IND-PR)", 
		"CHRISTIAN VIERA ALVAREZ (IND-PDC)", 
		"FUAD  CHAHIN VALENZUELA (PDC)", 
		"FELIPE HARBOE BASCUÑAN (PPD)", 
		"LUIS RAMON BARCELO AMADO (IND-PPD)", 
		"EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)",
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)", 
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)", 
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)"
	],
	"Colectivo Socialista": [
		"MAXIMILIANO HURTADO ROCO (PS)",
		"CARLOS CALVO MUÑOZ (IND-PS)",
		"CLAUDIO GOMEZ CASTRO (IND-PS)",
		"CESAR VALENZUELA MAASS (PS)",
		"JORGE BARADIT MORALES (IND-PS)",
		"MALUCHA PINTO SOLARI (PS)",
		"MATIAS ORELLANA CUELLAR (PS)",
		"ADRIANA CANCINO MENESES (IND-PS)",
		"RICARDO MONTERO ALLENDE (PS)",
		"ANDRES CRUZ CARRASCO (IND-PS)",
		"RAMONA REYES PAINEQUEO (PS)",
		"PEDRO MUÑOZ LEIVA (PS)",
		"MARIO VARGAS VIDAL (PS)",
		"JULIO ALVAREZ PINTO (PS)",
		"TOMAS LAIBE SAEZ (PS)",
		"MARIA TRINIDAD CASTILLO BOILET (IND)",
                "PATRICIO  FERNANDEZ CHADWICK (IND-PL)"
	],
        "Colectivo del Apruebo": [
                "FUAD  CHAHIN VALENZUELA (PDC)", 
		"FELIPE HARBOE BASCUÑAN (PPD)", 
		"LUIS RAMON BARCELO AMADO (IND-PPD)", 
		"EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)",
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)", 
		"MIGUEL ANGEL BOTTO SALINAS (IND)",
		"RODRIGO LOGAN SOTO (IND)"
	],
	"Nuevo Trato": [
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)", 
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)", 
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)"
	],
	"Independientes No Neutrales": [
		"GUILLERMO NICOLAS NAMOR KONG (IND)",
		//"MIGUEL ANGEL BOTTO SALINAS (IND)",
		"PATRICIA POLITZER KEREKES (IND)",
		"BENITO JOSE BARANDA FERRAN (IND)",
		"JUAN JOSE MARTIN BRAVO (IND)",
		"PAULINA VALERIA VALENZUELA RIO (IND)",
		"CAROLINA ANDREA SEPULVEDA SEPULVEDA (IND)",
		"TAMMY SOLANGE PUSTILNICK ARDITI (IND)",
		"JAVIER FUCHSLOCHER BAEZA (IND)",
		"LORENA DEL PILAR CESPEDES FERNANDEZ (IND)",
		"GASPAR ROBERTO DOMINGUEZ DONOSO (IND)"
	],
	"Norte Constituyente": [
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)",
		"ALEJANDRA ALICIA FLORES CARLOS (IND)",
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"CONSTANZA ANDREA SAN JUAN STANDEN (IND)",
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"ISABELLA BRUNILDA MAMANI MAMANI (Aimara)",
		"LUIS ALBERTO JIMENEZ CACERES (Aimara)",
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)",
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)",
		"FERNANDO DEL CARMEN TIRADO SOTO (Chango)"
	],
	"Movimientos Sociales Constituyentes": [
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)",
		"BASTIAN ESTEBAN LABBE SALAZAR (IND)",
		"JANIS JAN DEL CARMEN MENESES PALMA (IND)",
		"ALONDRA CARRILLO VIDAL (IND)",
		"ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)",
		"MARIA ELISA QUINTEROS CACERES (IND)"
	],
	"Vocería de los Pueblos": [
		"FRANCISCA LINCONAO HUIRCAPAN (Mapuche)",
		"ELISA LONCON ANTILEO (Mapuche)", 
		"NATIVIDAD LLANQUILEO PILQUIMAN (Mapuche)", 
		"ROSA ELIZABETH CATRILEO ARIAS (Mapuche)", 
		"VICTORINO ERNESTO ANTILEF ÑANCO (Mapuche)", 
		"ADOLFO MILLABUR ÑANCUIL (Mapuche)", 
		"ALEXIS REINALDO CAIGUAN ANCAPAN (Mapuche)", 
		"FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", 
		"ISABELLA BRUNILDA MAMANI MAMANI (Aimara)", 
		"FERNANDO DEL CARMEN TIRADO SOTO (Chango)",
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)", 
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)", 
		"ISABEL SELENA GODOY MONARDEZ (Colla)", 
		"LUIS ALBERTO JIMENEZ CACERES (Aimara)", 
		"ALEJANDRA ALICIA FLORES CARLOS (IND)",
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"CONSTANZA ANDREA SAN JUAN STANDEN (IND)",
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"JANIS JAN DEL CARMEN MENESES PALMA (IND)",
		"LISETTE LORENA VERGARA RIQUELME (IND)",
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)",
		"CRISTOBAL PATRICIO ANDRADE LEON (IND)",
		"CAMILA IGNACIA ZARATE ZARATE (IND)",
		"MARCO ANTONIO ARELLANO ORTEGA (IND)",
		"ALONDRA CARRILLO VIDAL (IND)",
		"FRANCISCO JAVIER CAAMAÑO ROJAS (IND)",
		"LORETO CRISTINA VALLEJOS DAVILA (IND)",
		"ALVIN ANTONIO SALDAÑA MUÑOZ (IND)",
		"ELSA CAROLINA LABRAÑA PINO (IND)",
		"MARIA ELISA QUINTEROS CACERES (IND)",
		"FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)",
		"FERNANDO SALINAS MANFREDINI (IND)",
		"CESAR  URIBE ARAYA (IND)",
		"BASTIAN ESTEBAN LABBE SALAZAR (IND)",
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"MANUELA ROYO LETELIER (IND-IGUAL)",
		"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)",
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)",
		"ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)",
		"GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)",
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)",
		"RODRIGO ERNESTO ROJAS VADE (IND)", 
		"DAYYANA GONZALEZ ARAYA (IND)",
		"MARIA MAGDALENA RIVERA IRIBARREN (IND)",
		"ALEJANDRA PIA PEREZ ESPINA (IND)",
	],
	"Red Disidente Constituyente": [
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)",
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)",
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"JAVIER FUCHSLOCHER BAEZA (IND)",
		"PEDRO MUÑOZ LEIVA (PS)",
		"TOMAS LAIBE SAEZ (PS)",
		"RODRIGO ERNESTO ROJAS VADE (IND)", 
		"GASPAR ROBERTO DOMINGUEZ DONOSO (IND)"
	],
	"UDI": [
		"POLLYANA RIVERA BIGAS (IND-UDI)", 
		"PABLO ANTONIO TOLOZA FERNANDEZ (UDI)",
		"JORGE ARANCIBIA REYES (IND-UDI)", 
		"ARTURO ZUÑIGA JORY (UDI)",
		"MARCELA CUBILLOS SIGALL (IND-UDI)", 
		"CONSTANZA  HUBE PORTUS (UDI)",
		"CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)", 
		"CAROL BOWN SEPULVEDA (UDI)",
		"RICARDO NEUMANN BERTIN (IND-UDI)", 
		"ALFREDO MORENO ECHEVERRIA (IND-UDI)", 
		"MARTIN ARRAU GARCIA-HUIDOBRO (UDI)",
		"MARGARITA LETELIER CORTES (UDI)",
		"EDUARDO ANDRES CRETTON REBOLLEDO (UDI)",
		"FELIPE IGNACIO MENA VILLAR (UDI)",
		"MARIA CECILIA UBILLA PEREZ (IND-UDI)", 
		"KATERINE MONTEALEGRE NAVARRO (UDI)",
		"RODRIGO ALVAREZ ZENTENO (UDI)"
	],
	"RN": [
		"ALVARO JOFRE CACERES (RN)",
		"ROBERTO VEGA CAMPUSANO (RN)",
		"RUGGERO COZZI ELZO (RN)",
		"RAUL CELIS MONTT (RN)",
		"TERESA MARINOVIC VIAL (IND-RN)", 
		"CRISTIAN MONCKEBERG BRUNER (RN)",
		"BERNARDO FONTAINE TALAVERA (IND-RN)", 
		"MANUEL JOSE OSSANDON LIRA (IND-RN)", 
		"PATRICIA LABRA BESSERER (RN)",
		"LUCIANO ERNESTO SILVA MORA (RN)",
		"PAULINA VELOSO MUÑOZ (RN)",
		"RUTH HURTADO OLAVE (IND-RN)", 
		"LUIS MAYOL BOUCHON (RN)",
		"ANGELICA TEPPER KOLOSSA (IND-RN)", 
		"HARRY JURGENSEN CAESAR (RN)",
	],
	"EVO": [
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)", 
		"HERNAN LARRAIN MATTE (EVO)",
		"BARBARA REBOLLEDO AGUIRRE (IND-EVO)", 
		"ROCIO  CANTUARIAS RUBIO (IND-EVO)", 
		"GEOCONDA NAVARRETE ARRATIA (EVO)",
	],
	"PDC": [
		"CHRISTIAN VIERA ALVAREZ (IND-PDC)",
		"FUAD  CHAHIN VALENZUELA (PDC)",
	],
	"PR": [
		"RENATO FABRIZIO GARIN GONZALEZ (IND-PR)",
	],
	"PRO": [
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)",
	],
	"PPD": [
		"FELIPE HARBOE BASCUÑAN (PPD)",
		"LUIS RAMON BARCELO AMADO (IND-PPD)",
		"EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)",
	],
	"PS": [
		"MAXIMILIANO HURTADO ROCO (PS)",
		"CARLOS CALVO MUÑOZ (IND-PS)",
		"CLAUDIO GOMEZ CASTRO (IND-PS)",
		"CESAR VALENZUELA MAASS (PS)",
		"JORGE BARADIT MORALES (IND-PS)",
		"MALUCHA PINTO SOLARI (PS)",
		"MATIAS ORELLANA CUELLAR (PS)",
		"ADRIANA CANCINO MENESES (IND-PS)",
		"RICARDO MONTERO ALLENDE (PS)",
		"ANDRES CRUZ CARRASCO (IND-PS)",
		"RAMONA REYES PAINEQUEO (PS)",
		"PEDRO MUÑOZ LEIVA (PS)",
		"MARIO VARGAS VIDAL (PS)",
		"JULIO ALVAREZ PINTO (PS)",
		"TOMAS LAIBE SAEZ (PS)",
	],
	"PL": [
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)",
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)",
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)",
	],
	"IGUAL": [
		"MANUELA ROYO LETELIER (IND-IGUAL)",
	],
	"COM": [
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
	],
	"CS": [
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)",
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)",
		"JAIME ANDRES BASSA MERCADO (IND-CS)",
		"CONSTANZA GABRIELA SCHONHAUT SOTO (CS)",
		"IGNACIO JAIME ACHURRA DIAZ (CS)",
		"DAMARIS ABARCA GONZALEZ (IND-CS)",
	],
	"RD": [
		"MARIA JOSE OYARZUN SOLIS (RD)",
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)",
		"TATIANA KARINA URRUTIA HERRERA (RD)",
		"FERNANDO ATRIA LEMAITRE (IND-RD)",
		"GIOVANNA ANGELA ROA CADIN (RD)",
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)",
		"AMAYA PAULINA ALVEZ MARIN (RD)",
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)",
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)",
	],
	"FREVS": [
		"HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)",
		"NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)",
	],
	"PC": [
		"CAROLINA ELIANA VIDELA OSORIO (PCCH)",
		"HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)",
		"ERICKA  PORTILLA BARRIOS (PCCH)",
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"BARBARA SEPULVEDA HALES (PCCH)",
		"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)",
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
	],
	"Reglamento": [
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"BARBARA SEPULVEDA HALES (PCCH)",
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)",
		"INGRID FERNANDA VILLENA NARBONA (IND)", 
		"HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)",
		"NATALIA ESTHER HENRIQUEZ CARREÑO (IND)",
		"HELMUTH JACOBO MARTINEZ LLANCAPAN (IND)",
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)", 
		"NATIVIDAD LLANQUILEO PILQUIMAN (Mapuche)", 
		"ROSA ELIZABETH CATRILEO ARIAS (Mapuche)", 
		"LUIS ALBERTO JIMENEZ CACERES (Aimara)", 
		"RUGGERO COZZI ELZO (RN)",
		"HERNAN LARRAIN MATTE (EVO)",
		"MARCELA CUBILLOS SIGALL (IND-UDI)",
		"AMAYA PAULINA ALVEZ MARIN (RD)",
		"PATRICIA LABRA BESSERER (RN)", 
		"RICARDO NEUMANN BERTIN (IND-UDI)",
		"RICARDO MONTERO ALLENDE (PS)",
		"CLAUDIO GOMEZ CASTRO (IND-PS)", 
		"FUAD  CHAHIN VALENZUELA (PDC)",
		"RAMONA REYES PAINEQUEO (PS)",
		"TAMMY SOLANGE PUSTILNICK ARDITI (IND)",
		"MAURICIO DAZA CARRASCO (IND)",
		"JANIS JAN DEL CARMEN MENESES PALMA (IND)",
		"GUILLERMO NICOLAS NAMOR KONG (IND)",
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
		"CONSTANZA  HUBE PORTUS (UDI)", 
		"RODRIGO ALVAREZ ZENTENO (UDI)",
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)",
		"FERNANDO ATRIA LEMAITRE (IND-RD)",
		"ALONDRA CARRILLO VIDAL (IND)"
	],
	"Ética": [
		"DAMARIS ABARCA GONZALEZ (IND-CS)",
		"CRISTOBAL PATRICIO ANDRADE LEON (IND)",
		"FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)",
		"BENITO JOSE BARANDA FERRAN (IND)",
		"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)",
		"MARIA TRINIDAD CASTILLO BOILET (IND)",
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)",
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)", 
		"FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", 
		"LIDIA GONZALEZ CALDERON (Yagán)", 
		"MAXIMILIANO HURTADO ROCO (PS)",
		"KATERINE MONTEALEGRE NAVARRO (UDI)", 
		"MARIA ELISA QUINTEROS CACERES (IND)",
		"LUCIANO ERNESTO SILVA MORA (RN)",
		"ROSSANA LORETO VIDAL HERNANDEZ (IND)",
		"CHRISTIAN VIERA ALVAREZ (IND-PDC)",
		"ARTURO ZUÑIGA JORY (UDI)"
	],
	"Presupuesto": [
		"GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)",
		"MARTIN ARRAU GARCIA-HUIDOBRO (UDI)", 
		"MIGUEL ANGEL BOTTO SALINAS (IND)",
		"FRANCISCO JAVIER CAAMAÑO ROJAS (IND)",
		"ADRIANA CANCINO MENESES (IND-PS)", 
		"ROCIO  CANTUARIAS RUBIO (IND-EVO)",
		"EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)",
		"BERNARDO FONTAINE TALAVERA (IND-RN)",
		"HARRY JURGENSEN CAESAR (RN)",
		"ISABEL SELENA GODOY MONARDEZ (Colla)", 
		"PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)",
		"MARIA JOSE OYARZUN SOLIS (RD)",
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)",
		"CESAR VALENZUELA MAASS (PS)",
		"MARGARITA VARGAS LOPEZ (Kawashkar)",
	],
	"DDHH": [
		"MARIA MAGDALENA RIVERA IRIBARREN (IND)",
		"MANUELA ROYO LETELIER (IND-IGUAL)",
		"CONSTANZA ANDREA SAN JUAN STANDEN (IND)",
		"ADOLFO MILLABUR ÑANCUIL (Mapuche)", 
		"FRANCISCA LINCONAO HUIRCAPAN (Mapuche)", 
		"JUAN JOSE MARTIN BRAVO (IND)",
		"CAROLINA ELIANA VIDELA OSORIO (PCCH)",
		"JORGE ARANCIBIA REYES (IND-UDI)",
		"RUTH HURTADO OLAVE (IND-RN)", 
		"RUGGERO COZZI ELZO (RN)",
		"MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"PEDRO MUÑOZ LEIVA (PS)",
		"MARIO VARGAS VIDAL (PS)",
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"GIOVANNA ANGELA ROA CADIN (RD)"
	],
	"Participación Indígena": [
		"TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)",
		"ALEXIS REINALDO CAIGUAN ANCAPAN (Mapuche)", 
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)",
		"FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", 
		"LIDIA GONZALEZ CALDERON (Yagán)",
		"ISABEL SELENA GODOY MONARDEZ (Colla)", 
		"ISABELLA BRUNILDA MAMANI MAMANI (Aimara)", 
		"FERNANDO DEL CARMEN TIRADO SOTO (Chango)",
		"RUTH HURTADO OLAVE (IND-RN)", 
		"ANGELICA TEPPER KOLOSSA (IND-RN)",
		"EDUARDO ANDRES CRETTON REBOLLEDO (UDI)",
		"MANUEL JOSE OSSANDON LIRA (IND-RN)",
		"RODRIGO ERNESTO ROJAS VADE (IND)", 
		"CARLOS CALVO MUÑOZ (IND-PS)",
		"ALEJANDRA PIA PEREZ ESPINA (IND)",
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)", 
		"MARGARITA VARGAS LOPEZ (Kawashkar)"
	],
	"Participación Popular": [
		"CAROLINA ANDREA SEPULVEDA SEPULVEDA (IND)",
		"JAVIER FUCHSLOCHER BAEZA (IND)",
		"LISETTE LORENA VERGARA RIQUELME (IND)",
		"GIOVANNA JAZMIN GRANDON CARO (IND)",
		"ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)",
		"DAYYANA GONZALEZ ARAYA (IND)",
		"TANIA ISABEL MADRIAGA FLORES (IND)",
		"MARCO ANTONIO ARELLANO ORTEGA (IND)",
		"BASTIAN ESTEBAN LABBE SALAZAR (IND)",
		"PAULINA VELOSO MUÑOZ (RN)", 
		"CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)",
		"ROBERTO VEGA CAMPUSANO (RN)",
		"RAUL CELIS MONTT (RN)", 
		"FELIPE IGNACIO MENA VILLAR (UDI)", 
		"GEOCONDA NAVARRETE ARRATIA (EVO)",
		"BARBARA REBOLLEDO AGUIRRE (IND-EVO)",
		"ALEJANDRA ALICIA FLORES CARLOS (IND)",
		"ERICKA  PORTILLA BARRIOS (PCCH)",
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"ELSA CAROLINA LABRAÑA PINO (IND)",
		"JORGE BARADIT MORALES (IND-PS)", 
		"MALUCHA PINTO SOLARI (PS)", 
		"TOMAS LAIBE SAEZ (PS)", 
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)",
		"TATIANA KARINA URRUTIA HERRERA (RD)", 
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)",		
		"CONSTANZA GABRIELA SCHONHAUT SOTO (CS)",
                "RENATO FABRIZIO GARIN GONZALEZ (IND-PR)",
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)"
	],
	"Comunicaciones": [
		"VICTORINO ERNESTO ANTILEF ÑANCO (Mapuche)", 
		"ALVIN ANTONIO SALDAÑA MUÑOZ (IND)",
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)",
		"TERESA MARINOVIC VIAL (IND-RN)",
		"POLLYANA RIVERA BIGAS (IND-UDI)",
		"CRISTIAN MONCKEBERG BRUNER (RN)", 
		"CAMILA IGNACIA ZARATE ZARATE (IND)",
		"LORETO CRISTINA VALLEJOS DAVILA (IND)",
		"NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)",
		"IGNACIO JAIME ACHURRA DIAZ (CS)",
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)", 
		"ANDRES CRUZ CARRASCO (IND-PS)",
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)",
		"PATRICIA POLITZER KEREKES (IND)",
		"PAULINA VALERIA VALENZUELA RIO (IND)"
	],
	"Descentralización": [
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"JULIO ALVAREZ PINTO (PS)",
		"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)",
		"GASPAR ROBERTO DOMINGUEZ DONOSO (IND)",
		"CESAR  URIBE ARAYA (IND)",
		"PABLO ANTONIO TOLOZA FERNANDEZ (UDI)",
		"ALVARO JOFRE CACERES (RN)",
		"HARRY JURGENSEN CAESAR (RN)",
		"CAROL BOWN SEPULVEDA (UDI)",
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)",
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)",
		"MATIAS ORELLANA CUELLAR (PS)", 
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)",
		"TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)"
	],
	"D1": [
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)",
		"CAROLINA ELIANA VIDELA OSORIO (PCCH)",
		"POLLYANA RIVERA BIGAS (IND-UDI)"
	],
	"D2": [
		"HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)",
		"ALVARO JOFRE CACERES (RN)",
		"ALEJANDRA ALICIA FLORES CARLOS (IND)"
	],
	"D3": [
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"DAYYANA GONZALEZ ARAYA (IND)",
		"HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)",
		"PABLO ANTONIO TOLOZA FERNANDEZ (UDI)"
	],
	"D4": [
		"CONSTANZA ANDREA SAN JUAN STANDEN (IND)",
		"ERICKA  PORTILLA BARRIOS (PCCH)",
		"GUILLERMO NICOLAS NAMOR KONG (IND)",
		"MAXIMILIANO HURTADO ROCO (PS)"
	],
	"D5": [
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)",
		"CARLOS CALVO MUÑOZ (IND-PS)",
		"ROBERTO VEGA CAMPUSANO (RN)",
		"MARIA TRINIDAD CASTILLO BOILET (IND)"
	],
	"D6": [
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)",
		"LISETTE LORENA VERGARA RIQUELME (IND)",
		"CRISTOBAL PATRICIO ANDRADE LEON (IND)",
		"RUGGERO COZZI ELZO (RN)",
		"CLAUDIO GOMEZ CASTRO (IND-PS)", 
		"JANIS JAN DEL CARMEN MENESES PALMA (IND)",
		"MIGUEL ANGEL BOTTO SALINAS (IND)"
	],
	"D7": [
		"JAIME ANDRES BASSA MERCADO (IND-CS)",
		"MARIA JOSE OYARZUN SOLIS (RD)", 
		"JORGE ARANCIBIA REYES (IND-UDI)",
		"RAUL CELIS MONTT (RN)", 
		"CAMILA IGNACIA ZARATE ZARATE (IND)",
		"TANIA ISABEL MADRIAGA FLORES (IND)",
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)"
	],
	"D8": [
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)", 
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"TATIANA KARINA URRUTIA HERRERA (RD)", 
		"MARCO ANTONIO ARELLANO ORTEGA (IND)",
		"MARIA MAGDALENA RIVERA IRIBARREN (IND)",
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)",
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)"
	],
	"D9": [
		"ALEJANDRA PIA PEREZ ESPINA (IND)",
		"NATALIA ESTHER HENRIQUEZ CARREÑO (IND)",
		"BARBARA SEPULVEDA HALES (PCCH)",
		"ARTURO ZUÑIGA JORY (UDI)", 
		"RODRIGO LOGAN SOTO (IND)",
		"CESAR VALENZUELA MAASS (PS)", 
	],
	"D10": [
		"FERNANDO ATRIA LEMAITRE (IND-RD)",
		"GIOVANNA ANGELA ROA CADIN (RD)",
		"TERESA MARINOVIC VIAL (IND-RN)",
		"CRISTIAN MONCKEBERG BRUNER (RN)", 
		"JORGE BARADIT MORALES (IND-PS)", 
		"PATRICIA POLITZER KEREKES (IND)",
		"MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)"
	],
	"D11": [
		"MARCELA CUBILLOS SIGALL (IND-UDI)",
		"CONSTANZA  HUBE PORTUS (UDI)", 
		"HERNAN LARRAIN MATTE (EVO)", 
		"BERNARDO FONTAINE TALAVERA (IND-RN)",
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)",
		"CONSTANZA GABRIELA SCHONHAUT SOTO (CS)"
	],
	"D12": [
		"BENITO JOSE BARANDA FERRAN (IND)", 
		"JUAN JOSE MARTIN BRAVO (IND)",
		"GIOVANNA JAZMIN GRANDON CARO (IND)",
		"MANUEL JOSE OSSANDON LIRA (IND-RN)",
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)", 
		"ALONDRA CARRILLO VIDAL (IND)"
	],
	"D13": [
		"INGRID FERNANDA VILLENA NARBONA (IND)", 
		"RODRIGO ERNESTO ROJAS VADE (IND)", 
		"MALUCHA PINTO SOLARI (PS)", 
		"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)",
	],
	"D14": [
		"IGNACIO JAIME ACHURRA DIAZ (CS)",
		"FRANCISCO JAVIER CAAMAÑO ROJAS (IND)",
		"RENATO FABRIZIO GARIN GONZALEZ (IND-PR)",
		"CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)",
		"PAULINA VALERIA VALENZUELA RIO (IND)"
	],
	"D15": [
		"LORETO CRISTINA VALLEJOS DAVILA (IND)",
		"CAROL BOWN SEPULVEDA (UDI)",
		"MATIAS ORELLANA CUELLAR (PS)", 
		"ALVIN ANTONIO SALDAÑA MUÑOZ (IND)",
		"DAMARIS ABARCA GONZALEZ (IND-CS)"
	],
	"D16": [
		"RICARDO NEUMANN BERTIN (IND-UDI)",
		"NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)",
		"ADRIANA CANCINO MENESES (IND-PS)", 
		"GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)"
	],
	"D17": [
		"BARBARA REBOLLEDO AGUIRRE (IND-EVO)",
		"ALFREDO MORENO ECHEVERRIA (IND-UDI)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)",
		"MARIA ELISA QUINTEROS CACERES (IND)",
		"CHRISTIAN VIERA ALVAREZ (IND-PDC)", 
		"ELSA CAROLINA LABRAÑA PINO (IND)"
	],
	"D18": [
		"FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)",
		"FERNANDO SALINAS MANFREDINI (IND)",
		"PATRICIA LABRA BESSERER (RN)", 
		"RICARDO MONTERO ALLENDE (PS)"
	],
	"D19": [
		"MARTIN ARRAU GARCIA-HUIDOBRO (UDI)", 
		"MARGARITA LETELIER CORTES (UDI)", 
		"CESAR  URIBE ARAYA (IND)",
		"FELIPE HARBOE BASCUÑAN (PPD)",
		"CAROLINA ANDREA SEPULVEDA SEPULVEDA (IND)"
	],
	"D20": [ 
		"ROCIO  CANTUARIAS RUBIO (IND-EVO)",
		"LUCIANO ERNESTO SILVA MORA (RN)",
		"AMAYA PAULINA ALVEZ MARIN (RD)",
		"ANDRES CRUZ CARRASCO (IND-PS)",
		"TAMMY SOLANGE PUSTILNICK ARDITI (IND)", 
		"BASTIAN ESTEBAN LABBE SALAZAR (IND)",
		"ROSSANA LORETO VIDAL HERNANDEZ (IND)",
	],
	"D21": [
		"PAULINA VELOSO MUÑOZ (RN)", 
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"JAVIER FUCHSLOCHER BAEZA (IND)",
		"LUIS RAMON BARCELO AMADO (IND-PPD)"
	],
	"D22": [
		"EDUARDO ANDRES CRETTON REBOLLEDO (UDI)",
		"RUTH HURTADO OLAVE (IND-RN)", 
		"FUAD  CHAHIN VALENZUELA (PDC)"
	],
	"D23": [
		"LUIS MAYOL BOUCHON (RN)", 
		"ANGELICA TEPPER KOLOSSA (IND-RN)",
		"HELMUTH JACOBO MARTINEZ LLANCAPAN (IND)",
		"EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)",
		"LORENA DEL PILAR CESPEDES FERNANDEZ (IND)",
		"MANUELA ROYO LETELIER (IND-IGUAL)"
	],
	"D24": [
		"RAMONA REYES PAINEQUEO (PS)",
		"PEDRO MUÑOZ LEIVA (PS)",
		"FELIPE IGNACIO MENA VILLAR (UDI)", 
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)"
	],
	"D25": [
		"HARRY JURGENSEN CAESAR (RN)",
		"MARIA CECILIA UBILLA PEREZ (IND-UDI)",
		"MARIO VARGAS VIDAL (PS)"
	],
	"D26": [
		"JULIO ALVAREZ PINTO (PS)",
		"KATERINE MONTEALEGRE NAVARRO (UDI)", 
		"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)",
		"GASPAR ROBERTO DOMINGUEZ DONOSO (IND)"
	],
	"D27": [
		"TOMAS LAIBE SAEZ (PS)", 
		"GEOCONDA NAVARRETE ARRATIA (EVO)",
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)"
	],
	"D28": [
		"MAURICIO DAZA CARRASCO (IND)",
		"RODRIGO ALVAREZ ZENTENO (UDI)",
		"ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)"
	],
	"Mujeres": [
		"CAROLINA ELIANA VIDELA OSORIO (PCCH)",
		"POLLYANA RIVERA BIGAS (IND-UDI)",
		"ALEJANDRA ALICIA FLORES CARLOS (IND)",
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"DAYYANA GONZALEZ ARAYA (IND)",
		"CONSTANZA ANDREA SAN JUAN STANDEN (IND)",
		"ERICKA  PORTILLA BARRIOS (PCCH)",
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)",
		"MARIA TRINIDAD CASTILLO BOILET (IND)",
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)",
		"LISETTE LORENA VERGARA RIQUELME (IND)",
		"JANIS JAN DEL CARMEN MENESES PALMA (IND)",
		"MARIA JOSE OYARZUN SOLIS (RD)", 
		"CAMILA IGNACIA ZARATE ZARATE (IND)",
		"TANIA ISABEL MADRIAGA FLORES (IND)",
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"TATIANA KARINA URRUTIA HERRERA (RD)", 
		"MARIA MAGDALENA RIVERA IRIBARREN (IND)",
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)",
		"ALEJANDRA PIA PEREZ ESPINA (IND)",
		"NATALIA ESTHER HENRIQUEZ CARREÑO (IND)",
		"BARBARA SEPULVEDA HALES (PCCH)",
		"GIOVANNA ANGELA ROA CADIN (RD)",
		"TERESA MARINOVIC VIAL (IND-RN)",
		"PATRICIA POLITZER KEREKES (IND)",
		"MARCELA CUBILLOS SIGALL (IND-UDI)",
		"CONSTANZA  HUBE PORTUS (UDI)", 
		"CONSTANZA GABRIELA SCHONHAUT SOTO (CS)",
		"GIOVANNA JAZMIN GRANDON CARO (IND)",
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)", 
		"ALONDRA CARRILLO VIDAL (IND)",
		"INGRID FERNANDA VILLENA NARBONA (IND)", 
		"MALUCHA PINTO SOLARI (PS)", 
		"CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)",
		"PAULINA VALERIA VALENZUELA RIO (IND)",
		"LORETO CRISTINA VALLEJOS DAVILA (IND)",
		"CAROL BOWN SEPULVEDA (UDI)",
		"DAMARIS ABARCA GONZALEZ (IND-CS)",
		"ADRIANA CANCINO MENESES (IND-PS)", 
		"GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)",
		"BARBARA REBOLLEDO AGUIRRE (IND-EVO)",
		"PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)",
		"MARIA ELISA QUINTEROS CACERES (IND)",
		"ELSA CAROLINA LABRAÑA PINO (IND)",
		"FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)",
		"PATRICIA LABRA BESSERER (RN)", 
		"MARGARITA LETELIER CORTES (UDI)", 
		"CAROLINA ANDREA SEPULVEDA SEPULVEDA (IND)",
		"ROCIO  CANTUARIAS RUBIO (IND-EVO)",
		"AMAYA PAULINA ALVEZ MARIN (RD)",
		"TAMMY SOLANGE PUSTILNICK ARDITI (IND)", 
		"ROSSANA LORETO VIDAL HERNANDEZ (IND)",,
		"PAULINA VELOSO MUÑOZ (RN)", 
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"RUTH HURTADO OLAVE (IND-RN)", 
		"ANGELICA TEPPER KOLOSSA (IND-RN)",
		"LORENA DEL PILAR CESPEDES FERNANDEZ (IND)",
		"MANUELA ROYO LETELIER (IND-IGUAL)",
		"RAMONA REYES PAINEQUEO (PS)",
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)",
		"MARIA CECILIA UBILLA PEREZ (IND-UDI)",
		"KATERINE MONTEALEGRE NAVARRO (UDI)", 
		"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)",
		"GEOCONDA NAVARRETE ARRATIA (EVO)",
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)",
		"ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)",
		"FRANCISCA LINCONAO HUIRCAPAN (Mapuche)", 
		"NATIVIDAD LLANQUILEO PILQUIMAN (Mapuche)", 
		"ELISA LONCON ANTILEO (Mapuche)", 
		"ROSA ELIZABETH CATRILEO ARIAS (Mapuche)", 
		"TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)", 
		"ISABELLA BRUNILDA MAMANI MAMANI (Aimara)", 
		"ISABEL SELENA GODOY MONARDEZ (Colla)", 
		"MARGARITA VARGAS LOPEZ (Kawashkar)", 
		"LIDIA GONZALEZ CALDERON (Yagán)"
	],
	"Hombres": [
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)",
		"HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)",
		"ALVARO JOFRE CACERES (RN)",
		"HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)",
		"PABLO ANTONIO TOLOZA FERNANDEZ (UDI)",
		"GUILLERMO NICOLAS NAMOR KONG (IND)",
		"MAXIMILIANO HURTADO ROCO (PS)",
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"CARLOS CALVO MUÑOZ (IND-PS)",
		"ROBERTO VEGA CAMPUSANO (RN)",
		"CRISTOBAL PATRICIO ANDRADE LEON (IND)",
		"RUGGERO COZZI ELZO (RN)",
		"CLAUDIO GOMEZ CASTRO (IND-PS)", 
		"MIGUEL ANGEL BOTTO SALINAS (IND)",
		"JAIME ANDRES BASSA MERCADO (IND-CS)",
		"JORGE ARANCIBIA REYES (IND-UDI)",
		"RAUL CELIS MONTT (RN)", 
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)",
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)", 
		"MARCO ANTONIO ARELLANO ORTEGA (IND)",
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)",
		"ARTURO ZUÑIGA JORY (UDI)", 
		"RODRIGO LOGAN SOTO (IND)",
		"CESAR VALENZUELA MAASS (PS)",
		"FERNANDO ATRIA LEMAITRE (IND-RD)",
		"CRISTIAN MONCKEBERG BRUNER (RN)", 
		"JORGE BARADIT MORALES (IND-PS)", 
		"MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)",
		"HERNAN LARRAIN MATTE (EVO)", 
		"BERNARDO FONTAINE TALAVERA (IND-RN)",
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)",
		"BENITO JOSE BARANDA FERRAN (IND)", 
		"JUAN JOSE MARTIN BRAVO (IND)",
		"MANUEL JOSE OSSANDON LIRA (IND-RN)",
		"RODRIGO ERNESTO ROJAS VADE (IND)", 
		"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)",,
		"IGNACIO JAIME ACHURRA DIAZ (CS)",
		"FRANCISCO JAVIER CAAMAÑO ROJAS (IND)",
		"RENATO FABRIZIO GARIN GONZALEZ (IND-PR)",
		"MATIAS ORELLANA CUELLAR (PS)", 
		"ALVIN ANTONIO SALDAÑA MUÑOZ (IND)",
		"RICARDO NEUMANN BERTIN (IND-UDI)",
		"NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)",
		"ALFREDO MORENO ECHEVERRIA (IND-UDI)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"CHRISTIAN VIERA ALVAREZ (IND-PDC)", 
		"FERNANDO SALINAS MANFREDINI (IND)",
		"RICARDO MONTERO ALLENDE (PS)",
		"MARTIN ARRAU GARCIA-HUIDOBRO (UDI)", 
		"CESAR  URIBE ARAYA (IND)",
		"FELIPE HARBOE BASCUÑAN (PPD)",
		"LUCIANO ERNESTO SILVA MORA (RN)",
		"ANDRES CRUZ CARRASCO (IND-PS)",
		"BASTIAN ESTEBAN LABBE SALAZAR (IND)",
		"JAVIER FUCHSLOCHER BAEZA (IND)",
		"LUIS RAMON BARCELO AMADO (IND-PPD)",
		"EDUARDO ANDRES CRETTON REBOLLEDO (UDI)",
		"FUAD  CHAHIN VALENZUELA (PDC)",
		"LUIS MAYOL BOUCHON (RN)", 
		"HELMUTH JACOBO MARTINEZ LLANCAPAN (IND)",
		"EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)",
		"PEDRO MUÑOZ LEIVA (PS)",
		"FELIPE IGNACIO MENA VILLAR (UDI)", 
		"HARRY JURGENSEN CAESAR (RN)",
		"MARIO VARGAS VIDAL (PS)",
		"JULIO ALVAREZ PINTO (PS)",
		"GASPAR ROBERTO DOMINGUEZ DONOSO (IND)",
		"TOMAS LAIBE SAEZ (PS)", 
		"MAURICIO DAZA CARRASCO (IND)",
		"RODRIGO ALVAREZ ZENTENO (UDI)",
		"ADOLFO MILLABUR ÑANCUIL (Mapuche)", 
		"VICTORINO ERNESTO ANTILEF ÑANCO (Mapuche)", 
		"ALEXIS REINALDO CAIGUAN ANCAPAN (Mapuche)", 
		"FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", 
		"LUIS ALBERTO JIMENEZ CACERES (Aimara)", 
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)", 
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)", 
		"FERNANDO DEL CARMEN TIRADO SOTO (Chango)"
	],
	"RM": [
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)", 
		"VALENTINA ANDREA MIRANDA ARCE (PCCH)",
		"TATIANA KARINA URRUTIA HERRERA (RD)", 
		"MARCO ANTONIO ARELLANO ORTEGA (IND)",
		"MARIA MAGDALENA RIVERA IRIBARREN (IND)",
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)",
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)",
		"ALEJANDRA PIA PEREZ ESPINA (IND)",
		"NATALIA ESTHER HENRIQUEZ CARREÑO (IND)",
		"BARBARA SEPULVEDA HALES (PCCH)",
		"ARTURO ZUÑIGA JORY (UDI)", 
		"RODRIGO LOGAN SOTO (IND)",
		"CESAR VALENZUELA MAASS (PS)", 
		"FERNANDO ATRIA LEMAITRE (IND-RD)",
		"GIOVANNA ANGELA ROA CADIN (RD)",
		"TERESA MARINOVIC VIAL (IND-RN)",
		"CRISTIAN MONCKEBERG BRUNER (RN)", 
		"JORGE BARADIT MORALES (IND-PS)", 
		"PATRICIA POLITZER KEREKES (IND)",
		"MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)",
		"MARCELA CUBILLOS SIGALL (IND-UDI)",
		"CONSTANZA  HUBE PORTUS (UDI)", 
		"HERNAN LARRAIN MATTE (EVO)", 
		"BERNARDO FONTAINE TALAVERA (IND-RN)",
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)",
		"CONSTANZA GABRIELA SCHONHAUT SOTO (CS)",
		"BENITO JOSE BARANDA FERRAN (IND)", 
		"JUAN JOSE MARTIN BRAVO (IND)",
		"GIOVANNA JAZMIN GRANDON CARO (IND)",
		"MANUEL JOSE OSSANDON LIRA (IND-RN)",
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)", 
		"ALONDRA CARRILLO VIDAL (IND)",
		"INGRID FERNANDA VILLENA NARBONA (IND)", 
		"RODRIGO ERNESTO ROJAS VADE (IND)", 
		"MALUCHA PINTO SOLARI (PS)", 
		"MARCOS PATRICIO BARRAZA GOMEZ (PCCH)",
		"IGNACIO JAIME ACHURRA DIAZ (CS)",
		"FRANCISCO JAVIER CAAMAÑO ROJAS (IND)",
		"RENATO FABRIZIO GARIN GONZALEZ (IND-PR)",
		"CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)",
		"PAULINA VALERIA VALENZUELA RIO (IND)"
	],
	'Regiones': [
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)",
		"CAROLINA ELIANA VIDELA OSORIO (PCCH)",
		"POLLYANA RIVERA BIGAS (IND-UDI)",
		"HUGO HUMBERTO GUTIERREZ GALVEZ (PCCH)",
		"ALVARO JOFRE CACERES (RN)",
		"ALEJANDRA ALICIA FLORES CARLOS (IND)",
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"DAYYANA GONZALEZ ARAYA (IND)",
		"HERNAN JESUS VELASQUEZ NUÑEZ (FREVS)",
		"PABLO ANTONIO TOLOZA FERNANDEZ (UDI)",
		"CONSTANZA ANDREA SAN JUAN STANDEN (IND)",
		"ERICKA  PORTILLA BARRIOS (PCCH)",
		"GUILLERMO NICOLAS NAMOR KONG (IND)",
		"MAXIMILIANO HURTADO ROCO (PS)",
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)",
		"CARLOS CALVO MUÑOZ (IND-PS)",
		"ROBERTO VEGA CAMPUSANO (RN)",
		"MARIA TRINIDAD CASTILLO BOILET (IND)",
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)",
		"LISETTE LORENA VERGARA RIQUELME (IND)",
		"CRISTOBAL PATRICIO ANDRADE LEON (IND)",
		"RUGGERO COZZI ELZO (RN)",
		"CLAUDIO GOMEZ CASTRO (IND-PS)", 
		"JANIS JAN DEL CARMEN MENESES PALMA (IND)",
		"MIGUEL ANGEL BOTTO SALINAS (IND)",
		"JAIME ANDRES BASSA MERCADO (IND-CS)",
		"MARIA JOSE OYARZUN SOLIS (RD)", 
		"JORGE ARANCIBIA REYES (IND-UDI)",
		"RAUL CELIS MONTT (RN)", 
		"CAMILA IGNACIA ZARATE ZARATE (IND)",
		"TANIA ISABEL MADRIAGA FLORES (IND)",
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)",
		"LORETO CRISTINA VALLEJOS DAVILA (IND)",
		"CAROL BOWN SEPULVEDA (UDI)",
		"MATIAS ORELLANA CUELLAR (PS)", 
		"ALVIN ANTONIO SALDAÑA MUÑOZ (IND)",
		"DAMARIS ABARCA GONZALEZ (IND-CS)",
		"RICARDO NEUMANN BERTIN (IND-UDI)",
		"NICOLAS FERNANDO NUÑEZ GANGAS (FREVS)",
		"ADRIANA CANCINO MENESES (IND-PS)", 
		"GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)",
		"BARBARA REBOLLEDO AGUIRRE (IND-EVO)",
		"ALFREDO MORENO ECHEVERRIA (IND-UDI)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"PAOLA ALEJANDRA GRANDON GONZALEZ (FREVS)",
		"MARIA ELISA QUINTEROS CACERES (IND)",
		"CHRISTIAN VIERA ALVAREZ (IND-PDC)", 
		"ELSA CAROLINA LABRAÑA PINO (IND)",
		"FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)",
		"FERNANDO SALINAS MANFREDINI (IND)",
		"PATRICIA LABRA BESSERER (RN)", 
		"RICARDO MONTERO ALLENDE (PS)",
		"MARTIN ARRAU GARCIA-HUIDOBRO (UDI)", 
		"MARGARITA LETELIER CORTES (UDI)", 
		"CESAR  URIBE ARAYA (IND)",
		"FELIPE HARBOE BASCUÑAN (PPD)",
		"CAROLINA ANDREA SEPULVEDA SEPULVEDA (IND)",
		"ROCIO  CANTUARIAS RUBIO (IND-EVO)",
		"LUCIANO ERNESTO SILVA MORA (RN)",
		"AMAYA PAULINA ALVEZ MARIN (RD)",
		"ANDRES CRUZ CARRASCO (IND-PS)",
		"TAMMY SOLANGE PUSTILNICK ARDITI (IND)", 
		"BASTIAN ESTEBAN LABBE SALAZAR (IND)",
		"ROSSANA LORETO VIDAL HERNANDEZ (IND)",
		"PAULINA VELOSO MUÑOZ (RN)", 
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"JAVIER FUCHSLOCHER BAEZA (IND)",
		"LUIS RAMON BARCELO AMADO (IND-PPD)",
		"EDUARDO ANDRES CRETTON REBOLLEDO (UDI)",
		"RUTH HURTADO OLAVE (IND-RN)", 
		"FUAD  CHAHIN VALENZUELA (PDC)",
		"LUIS MAYOL BOUCHON (RN)", 
		"ANGELICA TEPPER KOLOSSA (IND-RN)",
		"HELMUTH JACOBO MARTINEZ LLANCAPAN (IND)",
		"EDUARDO GUILLERMO CASTILLO VIGOUROUX (PPD)",
		"LORENA DEL PILAR CESPEDES FERNANDEZ (IND)",
		"MANUELA ROYO LETELIER (IND-IGUAL)",
		"RAMONA REYES PAINEQUEO (PS)",
		"PEDRO MUÑOZ LEIVA (PS)",
		"FELIPE IGNACIO MENA VILLAR (UDI)", 
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)",
		"HARRY JURGENSEN CAESAR (RN)",
		"MARIA CECILIA UBILLA PEREZ (IND-UDI)",
		"MARIO VARGAS VIDAL (PS)",
		"JULIO ALVAREZ PINTO (PS)",
		"KATERINE MONTEALEGRE NAVARRO (UDI)", 
		"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)",
		"GASPAR ROBERTO DOMINGUEZ DONOSO (IND)",
		"TOMAS LAIBE SAEZ (PS)", 
		"GEOCONDA NAVARRETE ARRATIA (EVO)",
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)",
		"MAURICIO DAZA CARRASCO (IND)",
		"RODRIGO ALVAREZ ZENTENO (UDI)",
		"ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)",
		"FRANCISCA LINCONAO HUIRCAPAN (Mapuche)", 
		"NATIVIDAD LLANQUILEO PILQUIMAN (Mapuche)", 
		"ADOLFO MILLABUR ÑANCUIL (Mapuche)", 
		"ELISA LONCON ANTILEO (Mapuche)", 
		"ROSA ELIZABETH CATRILEO ARIAS (Mapuche)", 
		"VICTORINO ERNESTO ANTILEF ÑANCO (Mapuche)", 
		"ALEXIS REINALDO CAIGUAN ANCAPAN (Mapuche)", 
		"TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)", 
		"FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)", 
		"ISABELLA BRUNILDA MAMANI MAMANI (Aimara)", 
		"LUIS ALBERTO JIMENEZ CACERES (Aimara)", 
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)", 
		"ISABEL SELENA GODOY MONARDEZ (Colla)", 
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)", 
		"MARGARITA VARGAS LOPEZ (Kawashkar)", 
		"LIDIA GONZALEZ CALDERON (Yagán)", 
		"FERNANDO DEL CARMEN TIRADO SOTO (Chango)"
	],
	"Independientes": [
		"POLLYANA RIVERA BIGAS (IND-UDI)",
		"JORGE ARANCIBIA REYES (IND-UDI)",
		"MARCELA CUBILLOS SIGALL (IND-UDI)",
		"CLAUDIA MABEL CASTRO GUTIERREZ (IND-UDI)",
		"RICARDO NEUMANN BERTIN (IND-UDI)",
		"ALFREDO MORENO ECHEVERRIA (IND-UDI)",
		"MARIA CECILIA UBILLA PEREZ (IND-UDI)",
		"TERESA MARINOVIC VIAL (IND-RN)",
		"BERNARDO FONTAINE TALAVERA (IND-RN)",
		"MANUEL JOSE OSSANDON LIRA (IND-RN)",
		"RUTH HURTADO OLAVE (IND-RN)",
		"ANGELICA TEPPER KOLOSSA (IND-RN)",
		"BERNARDO  DE LA MAZA BAÑADOS (IND-EVO)",
		"BARBARA REBOLLEDO AGUIRRE (IND-EVO)",
		"ROCIO  CANTUARIAS RUBIO (IND-EVO)",
		"VANESSA CAMILA HOPPE ESPOZ (IND-PCCH)",
		"ROBERTO ANTONIO CELEDON FERNANDEZ (IND-FREVS)",
		"DANIEL RODRIGO STINGO CAMUS (IND-RD)",
		"FERNANDO ATRIA LEMAITRE (IND-RD)",
		"BEATRIZ DE JESUS SANCHEZ MUÑOZ (IND-RD)",
		"AURORA GENOVEVA DELGADO VERGARA (IND-RD)",
		"YARELA NICOHL GOMEZ SANCHEZ (IND-RD)",
		"JENIFFER VALERIA MELLA ESCOBAR (IND-CS)",
		"MARIELA ANDREA SEREY JIMENEZ (IND-CS)",
		"JAIME ANDRES BASSA MERCADO (IND-CS)",
		"DAMARIS ABARCA GONZALEZ (IND-CS)",
		"CAROLINA CYNTIA VILCHES FUENZALIDA (IND-COM)",
		"MANUELA ROYO LETELIER (IND-IGUAL)",
		"DAYYANA GONZALEZ ARAYA (IND)",
		"CONSTANZA ANDREA SAN JUAN STANDEN (IND)",
		"IVANNA DANIELA OLIVARES MIRANDA (IND)",
		"DANIEL ALEJANDRO BRAVO SILVA (IND)",
		"LISETTE LORENA VERGARA RIQUELME (IND)",
		"CRISTOBAL PATRICIO ANDRADE LEON (IND)",
		"CAMILA IGNACIA ZARATE ZARATE (IND)",
		"TANIA ISABEL MADRIAGA FLORES (IND)",
		"MARCO ANTONIO ARELLANO ORTEGA (IND)",
		"MARIA MAGDALENA RIVERA IRIBARREN (IND)",
		"ALEJANDRA PIA PEREZ ESPINA (IND)",
		"NATALIA ESTHER HENRIQUEZ CARREÑO (IND)",
		"MANUEL MAURICIO WOLDARSKY GONZALEZ (IND)",
		"GIOVANNA JAZMIN GRANDON CARO (IND)",
		"INGRID FERNANDA VILLENA NARBONA (IND)",
		"RODRIGO ERNESTO ROJAS VADE (IND)",
		"FRANCISCO JAVIER CAAMAÑO ROJAS (IND)",
		"LORETO CRISTINA VALLEJOS DAVILA (IND)",
		"ELSA CAROLINA LABRAÑA PINO (IND)",
		"FRANCISCA MARYCARMEN ARAUNA URRUTIA (IND)",
		"FERNANDO SALINAS MANFREDINI (IND)",
		"CESAR  URIBE ARAYA (IND)",
		"ROSSANA LORETO VIDAL HERNANDEZ (IND)",
		"HELMUTH JACOBO MARTINEZ LLANCAPAN (IND)",
		"ADRIANA CAMILA AMPUERO BARRIENTOS (IND)",
		"ELISA AMANDA GIUSTINIANOVICH CAMPOS (IND)",
		"JORGE BRUNO ABARCA RIVEROS (IND-PL)",
		"AGUSTIN SQUELLA NARDUCCI (IND-PL)",
		"PATRICIO  FERNANDEZ CHADWICK (IND-PL)",
		"CARLOS CALVO MUÑOZ (IND-PS)",
		"CLAUDIO GOMEZ CASTRO (IND-PS)",
		"JORGE BARADIT MORALES (IND-PS)",
		"ADRIANA CANCINO MENESES (IND-PS)",
		"ANDRES CRUZ CARRASCO (IND-PS)",
		"BESSY MIREYA GALLARDO PRADO (IND-PRO)",
		"RENATO FABRIZIO GARIN GONZALEZ (IND-PR)",
		"CHRISTIAN VIERA ALVAREZ (IND-PDC)",
		"LUIS RAMON BARCELO AMADO (IND-PPD)",
		"GUILLERMO NICOLAS NAMOR KONG (IND)",
		"MIGUEL ANGEL BOTTO SALINAS (IND)",
		"PATRICIA POLITZER KEREKES (IND)",
		"BENITO JOSE BARANDA FERRAN (IND)",
		"JUAN JOSE MARTIN BRAVO (IND)",
		"PAULINA VALERIA VALENZUELA RIO (IND)",
		"CAROLINA ANDREA SEPULVEDA SEPULVEDA (IND)",
		"TAMMY SOLANGE PUSTILNICK ARDITI (IND)",
		"JAVIER FUCHSLOCHER BAEZA (IND)",
		"LORENA DEL PILAR CESPEDES FERNANDEZ (IND)",
		"GASPAR ROBERTO DOMINGUEZ DONOSO (IND)",
		"ALEJANDRA ALICIA FLORES CARLOS (IND)",
		"CRISTINA INES DORADOR ORTIZ (IND)",
		"MARIA TRINIDAD CASTILLO BOILET (IND)",
		"JANIS JAN DEL CARMEN MENESES PALMA (IND)",
		"RODRIGO LOGAN SOTO (IND)",
		"ALONDRA CARRILLO VIDAL (IND)",
		"ALVIN ANTONIO SALDAÑA MUÑOZ (IND)",
		"GLORIA DEL TRANSITO ALVARADO JORQUERA (IND)",
		"MARIA ELISA QUINTEROS CACERES (IND)",
		"BASTIAN ESTEBAN LABBE SALAZAR (IND)",
		"MAURICIO DAZA CARRASCO (IND)",
		"FRANCISCA LINCONAO HUIRCAPAN (Mapuche)",
		"NATIVIDAD LLANQUILEO PILQUIMAN (Mapuche)",
		"ADOLFO MILLABUR ÑANCUIL (Mapuche)",
		"ELISA LONCON ANTILEO (Mapuche)",
		"ROSA ELIZABETH CATRILEO ARIAS (Mapuche)",
		"VICTORINO ERNESTO ANTILEF ÑANCO (Mapuche)",
		"ALEXIS REINALDO CAIGUAN ANCAPAN (Mapuche)",
		"TIARE MAEVA CAROLINA AGUILERA HEY (Rapanui)",
		"FELIX RAMON GALLEGUILLOS AYMANI (Atacameño)",
		"ISABELLA BRUNILDA MAMANI MAMANI (Aimara)",
		"LUIS ALBERTO JIMENEZ CACERES (Aimara)",
		"WILFREDO MANUEL BACIAN DELGADO (Quechua)",
		"ISABEL SELENA GODOY MONARDEZ (Colla)",
		"ERIC JOHANNY CHINGA FERREIRA (Diaguita)",
		"MARGARITA VARGAS LOPEZ (Kawashkar)",
		"LIDIA GONZALEZ CALDERON (Yagán)",
		"FERNANDO DEL CARMEN TIRADO SOTO (Chango)"
	]	
};


function mostrarConvencionales() {
	clean();
	map.setLayoutProperty('convencionales', 'visibility', 'visible');
	map.setLayoutProperty('convencionales-comunas', 'visibility', 'visible');
    map.setLayoutProperty('convencionales-markers', 'visibility', 'visible');	
    map.setLayoutProperty('convencionales-lines', 'visibility', 'visible');	
    map.setLayoutProperty('markers-title', 'visibility', 'visible');	
	map.setLayoutProperty('distritos-outline', 'visibility', 'visible');
	var el = document.getElementById('a-convencionales');
	if (el) el.style.color = 'black';

	var parl_listas = { 
		'Vamos por Chile': {
    		'seats': 37,
    		'color': colores['azul']
		},
    	'Apruebo Dignidad': {
    		'seats': 28,
    		'color': colores['verde-agua']
    	},
    	'Lista del Apruebo': {
    		'seats': 25,
    		'color': colores['violeta']
		},
    	'Pueblo Constituyente': {
    		'seats': 17,
    		'color': colores['rosado']
    	},
    	'Independientes No Neutrales': {
    		'seats': 10,
    		'color': colores['azul-marino']
    	},
    	'Independientes': {
    		'seats': 21,
    		'color': colores['gris']
    	},
    	'Pueblos Originarios': {
    		'seats': 17,
    		'color': colores['marron']
    	}
	}

	legend.innerHTML = '';
	legend.style.display = 'block';

	var div = document.createElement('div');
	div.style.float = 'left';
	div.style.width = "380px";
	div.style.marginTop = "5px";
	div.style.marginRight = '5px';
	div.style.paddingRight = '5px';
	div.style.borderRight = 'solid';
	div.style.borderWidth = '1px';
	div.style.textAlign = 'center';
	var span = document.createElement('span');
	span.innerHTML = 'Haz click sobre uno de los grupos<br>';
	div.appendChild(span);
	for (grupo in conv_grupos) {
		var span = document.createElement('span');
		if (grupo=="Reglamento") span.innerHTML = '<br style="margin-bottom:7px">Comisiones · ';
		else if (grupo=="D1") span.innerHTML = '<br style="margin-bottom:7px">Distritos · ';
		else if (grupo=="Mujeres") span.innerHTML = '<br style="margin-bottom:7px">Otros · ';
		else if (grupo=="UDI") span.innerHTML = '<br style="margin-bottom:7px">Partidos · ';
		else span.innerHTML = ' ·&nbsp;';
		div.appendChild(span);
		var a = document.createElement('a');
		a.onclick = clickGroup;
		var span = document.createElement('span');
		span.id = 'span-'+grupo.replace(/ /g,"-");
		span.innerHTML = grupo.replace(/ /g,"&nbsp;");
		span.style.fontWeight = 'bold';
		span.className = "grupo"
		a.appendChild(span);
		div.appendChild(a);
	}
	legend2.appendChild(div);

	var div = document.createElement('div');
	div.style.float = 'left';
	var div_buscador = document.createElement('div');
	var span = document.createElement('span');
	span.innerHTML = "Busca un convencional: "
	div_buscador.appendChild(span);
	var input = document.createElement('input');
	input.id = "search-convencional";
	input.type = "text";
	input.size = 15;
	input.addEventListener("keyup", function () {
		var start = this.selectionStart; 
		var end = this.selectionEnd;
		this.value = this.value.toUpperCase();
		this.setSelectionRange(start, end);
		showSearch(this.value);
	});
	input.style.marginLeft = '5px';
	div_buscador.style.textAlign = 'center';
	div_buscador.appendChild(input);
	var button = document.createElement('button');
	button.type = "button";
	button.innerHTML = "Borrar";
	button.addEventListener("click", function () {
		document.getElementById("search-convencional").value = "";
		showSearch("");
	})
	div_buscador.appendChild(button);
	div_buscador.style.marginBottom = "5px";
	div.appendChild(div_buscador);
	var div_parl = document.createElement('div');
	div_parl.style.width = '390px';
	div_parl.appendChild(generateSVG(conv_parliament, conv_parliament_order, true, "Convencional", conv_directiva, conv_grupos, conv_coordinadores));
	div.appendChild(div_parl);
	var span = document.createElement('span');
	span.id = 'lista-seat';
	span.innerHTML = '<br>';
	div.appendChild(span);
	var span = document.createElement('span');
	span.id = 'nombre-seat';
	span.innerHTML = 'Muévete sobre los puntos...';
	div.appendChild(span);
	legend2.appendChild(div);

	var div = document.createElement('div');
	div.style.float = 'right';
	div.style.width = "170px";
	var div2 = document.createElement('div');
	div2.style.position = 'absolute';
	div2.style.top = '50%';
	div2.style.transform = 'translateY(-50%)';
	div2.style.msTransform = 'translateY(-50%)';
	div2.style.textAlign = 'center';
	var img = document.createElement('img');
	img.width = '170';
	img.height = '195';
	img.id = 'face';
	img.src = 'images/faces/blank.jpeg';
	div2.appendChild(img);
	var span = document.createElement('span');
	span.id = 'face-span';
	span.innerHTML = '<br>';
	span.style.fontSize = '0.8em';
	div2.appendChild(span);
	div.appendChild(div2);
	legend2.appendChild(div);


    if (screen.width>=992) {
    	legend2.style.display = 'block';
    	legend2.style.backgroundColor = '#FFFEF9';
    	legend2.style.opacity = '0.8';
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

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
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

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
};
