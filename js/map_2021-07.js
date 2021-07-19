

map.on('load', function(){
	var layers = map.getStyle().layers;
    var firstSymbolId;

	addSourceDistritos(map);	
    addSourceComunas(map);
    addSourceRegiones(map);
    addSourcePrimarias(map);
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            //layers[i].beforeId = 'sen-markers';
            break;
        }
    }

    addLayerNombreComunas(map,firstSymbolId);
    addLayerNombreRegiones(map);
    addLayerZonaIndeterminada(map);
    addLayerRegionesOutline(map);	
    addLayerComunasOutline(map);	
    addLayerComunasOutlineZoom(map);
    addLayerDistritosOutline(map);

	addLayerParticipacion(map);
	addLayerComparacion(map);
	addLayerAprueboDignidad(map);
	addLayerChileVamos(map);

	map.setPaintProperty('regiones-outline', 'line-color', colores['gris']);
	mostrarComparacion();
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

//popParticipacionMunicipales(map);
popParticipacion(map);
popComparacion(map);
popAprueboDignidad(map);
popChileVamos(map);

function clean() {
	map.setLayoutProperty('participacion-comunas', 'visibility', 'none');
    map.setLayoutProperty('comparacion-comunas', 'visibility', 'none');
    map.setLayoutProperty('regiones-outline', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-comunas', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-comunas', 'visibility', 'none');

	document.getElementById('a-participacion').style.color = 'gray';
	document.getElementById('a-comparacion').style.color = 'gray';
	document.getElementById('a-chile-vamos').style.color = 'gray';
	document.getElementById('a-apruebo-dignidad').style.color = 'gray';

	legend.innerHTML = '';
	legend2.innerHTML = '';
	legend.style.height = 'fit-content';
	legend.style.width = 'fit-content';
	legend2.style.height = 'fit-content';
	legend2.style.width = 'fit-content';
	legend2.style.fontWeight = '';
	legend2.style.textAlign = '';
}



function mostrarParticipacion() {
	clean();
	map.setLayoutProperty('participacion-comunas', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-participacion').style.color = 'black';

	legend.innerHTML = '<table><tr><td style="padding-right:20px"><strong>Participación</strong><br></td>'+
					   '<td>Total</td><td style="padding-left:20px;text-align:right">21,39%</td></tr>'+
					   '<tr><td></td><td>Total Electores</td><td style="padding-left:20px;text-align:right">14.693.433</td></tr>'+
					   '<tr><td></td><td>Votantes</td><td style="padding-left:20px;text-align:right">3.143.006</td></tr>'+
					   '</table>';

	legend.style.display = 'block';
    /*
	if (screen.width>=992) {
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
    } 
    */
};



function mostrarComparacion() {
	clean();
	map.setLayoutProperty('comparacion-comunas', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-comparacion').style.color = 'black';

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:blue']+'"></span>Chile Vamos</td><td style="text-align:right;padding-left:20px">1.343.892</td><td style="text-align:right;padding-left:20px">43,42%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:red']+'"></span>Apruebo Dignidad</td><td style="text-align:right;padding-left:20px">1.750.889</td><td style="text-align:right;padding-left:20px">56,58%</td></tr>'+
        '<tr style="border-top:solid;border-width:1px"><td style="font-style:italic">Votos válidos</td><td style="text-align:right;padding-left:20px">3.094.781</td></tr>'+
        '<tr><td style="font-style:italic">Votos nulos</td><td style="text-align:right;padding-left:20px">41.960</td></tr>'+
        '<tr><td style="font-style:italic">Votos blancos</td><td style="text-align:right;padding-left:20px">6.265</td></tr>'+
        '<tr><td style="font-style:italic">Total votación</td><td style="text-align:right;padding-left:20px">3.143.006</td></tr>'+
        '</table>';

    legend.style.display = 'block';
}


function mostrarAprueboDignidad() {
	clean();
	map.setLayoutProperty('apruebo-dignidad-comunas', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-apruebo-dignidad').style.color = 'black';

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">1.058.027</td><td style="text-align:right;padding-left:20px">60,43%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">692.862</td><td style="text-align:right;padding-left:20px">39,57%</td></tr>'+
        '</table>';

    legend.style.display = 'block';
}


function mostrarChileVamos() {
	clean();
	map.setLayoutProperty('chile-vamos-comunas', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-chile-vamos').style.color = 'black';

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>Sebastián Sichel (IND)</td><td style="text-align:right;padding-left:20px">659.570</td><td style="text-align:right;padding-left:20px">49,08%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['azul-marino']+'"></span>Joaquín Lavín (UDI)</td><td style="text-align:right;padding-left:20px">420.691</td><td style="text-align:right;padding-left:20px">31,30%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:#86BC25"></span>Ignacio Briones (EVO)</td><td style="text-align:right;padding-left:20px">131.957</td><td style="text-align:right;padding-left:20px">9,82%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>Mario Desbordes (RN)</td><td style="text-align:right;padding-left:20px">131.674</td><td style="text-align:right;padding-left:20px">9,80%</td></tr>'+
        '</table>';

    legend.style.display = 'block';
}




