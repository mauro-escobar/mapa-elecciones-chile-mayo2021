var coloresGobernadores = {
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

function addSourceGobernadores(map) {
	map.addSource('gobernadores-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.2jgcxezz',
        }
    );
};
function addSourceGobernadoresComunas2v(map) {
	map.addSource('gobernadores-comunas-2v-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.3ajwn0m7',
        }
    );
}

function addLayerGobernadores(map) {
	map.addLayer({
        'id': 'gobernadores',
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
    map.setLayoutProperty('gobernadores', 'visibility', 'none');

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
};
function addLayerGobernadoresComunas2v(map) {
	map.addLayer({
        'id': 'gobernadores-comunas-2v',
        'type': 'fill',
        'source': 'gobernadores-comunas-2v-data',
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
    map.setLayoutProperty('gobernadores-comunas-2v', 'visibility', 'none');	
    map.setLayerZoomRange('gobernadores', 0, 6.2);	
};

function popGobernadores(map) {
	map.on('mousemove', 'gobernadores', function (e) {
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
						'<span class="legend-key" style="background-color:'+coloresGobernadores[lista]+'"></span>'+
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
						'<span class="legend-key" style="background-color:'+coloresGobernadores[lista]+'"></span>'+
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
					'<tr><td><span class="legend-key" style="background-color:'+coloresGobernadores[lista]+'"></span>'+
					'<span>'+nombre+'</span><td>'+
					'<td>'+perct+'%</td></tr>'+
					'</table>'
					)
				.addTo(map);    
	    }
	});
	map.on('mouseleave', 'gobernadores', function () {
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
					'<tr><td><span class="legend-key" style="background-color:'+coloresGobernadores[lista1]+'"></span>'+
					'<span>'+nombre1+'</span><td>'+
					'<td style="padding-left:15px">'+perct1+'%</td></tr>'+
					'<tr><td colspan="2">'+lista2+' ('+partido2+')</td></tr>'+
					'<tr><td><span class="legend-key" style="background-color:'+coloresGobernadores[lista2]+'"></span>'+
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
};

function popGobernadoresComunas2v(map) {
	map.on('mousemove', 'gobernadores-comunas-2v', function (e) {
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
				'<tr><td><span class="legend-key" style="background-color:'+coloresGobernadores[lista1]+'"></span></td>'+
				'<td><span>'+nombre1+'</span></td><td style="padding-left:15px">'+perct1+'%</td></tr>'+
				'<tr><td colspan=3>'+lista2+' ('+partido2+')</td></tr>'+
				'<tr><td><span class="legend-key" style="background-color:'+coloresGobernadores[lista2]+'"></span></td>'+
				'<td><span>'+nombre2+'</span></td><td style="padding-left:15px">'+perct2+'%</td></tr>'+
				'</table>'+
				'<h5>Votos nulos: '+e.features[0].properties['Gob_nulos']+	
				', Votos blancos: '+e.features[0].properties['Gob_blancos']+	
				'<br>Votos válidos: '+e.features[0].properties['Gob_validos']+
				', Votos totales: '+e.features[0].properties['Gob_total']+'</h5>'			
				)
			.addTo(map); 


	   
	});
	map.on('mouseleave', 'gobernadores-comunas-2v', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});
};

function mostrarGobernadores() {
	clean();
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    map.setLayoutProperty('gobernadores', 'visibility', 'visible');
    var mapLayer = map.getLayer('gobernadores-comunas-2v');
    if(typeof mapLayer !== 'undefined') {
    	map.setLayoutProperty('gobernadores-comunas-2v', 'visibility', 'visible');
    }

	document.getElementById('a-gobernadores').style.color = 'black';

	legend.style.display = 'block';
	legend2.style.display = 'none';
    legend.innerHTML = '<span style="font-weight:bold;">Goberadores Regionales 2021-2025</span>';

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
