

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
	mostrarComparacionComunas();

});

map.on('rotate', function () {
	map.setLayoutProperty(
		'exterior-title',
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
	map.setLayoutProperty('participacion-distritos', 'visibility', 'none');
	map.setLayoutProperty('participacion-regiones', 'visibility', 'none');
	map.setLayoutProperty('participacion-exterior', 'visibility', 'none');
    map.setLayoutProperty('comparacion-comunas', 'visibility', 'none');
    map.setLayoutProperty('comparacion-distritos', 'visibility', 'none');
    map.setLayoutProperty('comparacion-regiones', 'visibility', 'none');
    map.setLayoutProperty('comparacion-exterior', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-comunas', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-distritos', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-regiones', 'visibility', 'none');
    map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'none'); 
	map.setLayoutProperty('chile-vamos-comunas', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-distritos', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-regiones', 'visibility', 'none');
    map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'none'); 
    map.setLayoutProperty('regiones-outline', 'visibility', 'none');

	document.getElementById('a-participacion').style.color = 'gray';
	document.getElementById('a-comparacion').style.color = 'gray';
	document.getElementById('a-chile-vamos').style.color = 'gray';
	document.getElementById('a-apruebo-dignidad').style.color = 'gray';

	var els = document.getElementsByClassName('participacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'none';
		els[i].style.opacity = 0.3;
		if (screen.width>=992) els[i].style.fontSize = '0.9em';
	}
	var els = document.getElementsByClassName('comparacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'none';
		els[i].style.opacity = 0.3;
		if (screen.width>=992) els[i].style.fontSize = '0.9em';
	}
	var els = document.getElementsByClassName('chile-vamos');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'none';
		els[i].style.opacity = 0.3;
		if (screen.width>=992) els[i].style.fontSize = '0.9em';
	}
	var els = document.getElementsByClassName('apruebo-dignidad');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'none';
		els[i].style.opacity = 0.3;
		if (screen.width>=992) els[i].style.fontSize = '0.9em';
	}


	legend.innerHTML = '';
	legend2.innerHTML = '';
	legend.style.height = 'fit-content';
	legend.style.width = 'fit-content';
	legend2.style.height = 'fit-content';
	legend2.style.width = 'fit-content';
	legend2.style.fontWeight = '';
	legend2.style.textAlign = '';
}



function mostrarParticipacionComunas() {
	clean();
	map.setLayoutProperty('participacion-comunas', 'visibility', 'visible');
	map.setLayoutProperty('participacion-exterior', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-participacion').style.color = 'black';

	var els = document.getElementsByClassName('participacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('participacion-comunas').style.opacity = 1;

	legend.innerHTML = '<table><tr><td style="padding-right:20px"><strong>Participación</strong><br></td>'+
					   '<td>Total</td><td style="padding-left:20px;text-align:right">21,39%</td></tr>'+
					   '<tr><td></td><td>Total Electores</td><td style="padding-left:20px;text-align:right">14.693.433</td></tr>'+
					   '<tr><td></td><td>Votantes</td><td style="padding-left:20px;text-align:right">3.143.006</td></tr>'+
					   '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
};
function mostrarParticipacionDistritos() {
	clean();
	map.setLayoutProperty('participacion-distritos', 'visibility', 'visible');
	map.setLayoutProperty('participacion-exterior', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-participacion').style.color = 'black';

	var els = document.getElementsByClassName('participacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('participacion-distritos').style.opacity = 1;

	legend.innerHTML = '<table><tr><td style="padding-right:20px"><strong>Participación</strong><br></td>'+
					   '<td>Total</td><td style="padding-left:20px;text-align:right">21,39%</td></tr>'+
					   '<tr><td></td><td>Total Electores</td><td style="padding-left:20px;text-align:right">14.693.433</td></tr>'+
					   '<tr><td></td><td>Votantes</td><td style="padding-left:20px;text-align:right">3.143.006</td></tr>'+
					   '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
};
function mostrarParticipacionRegiones() {
	clean();
	map.setLayoutProperty('participacion-regiones', 'visibility', 'visible');
	map.setLayoutProperty('participacion-exterior', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-participacion').style.color = 'black';

	var els = document.getElementsByClassName('participacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('participacion-regiones').style.opacity = 1;

	legend.innerHTML = '<table><tr><td style="padding-right:20px"><strong>Participación</strong><br></td>'+
					   '<td>Total</td><td style="padding-left:20px;text-align:right">21,39%</td></tr>'+
					   '<tr><td></td><td>Total Electores</td><td style="padding-left:20px;text-align:right">14.693.433</td></tr>'+
					   '<tr><td></td><td>Votantes</td><td style="padding-left:20px;text-align:right">3.143.006</td></tr>'+
					   '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
};



function mostrarComparacionComunas() {
	clean();
	map.setLayoutProperty('comparacion-comunas', 'visibility', 'visible');
	map.setLayoutProperty('comparacion-exterior', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-comparacion').style.color = 'black';

	var els = document.getElementsByClassName('comparacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('comparacion-comunas').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:blue']+'"></span>Chile Vamos</td><td style="text-align:right;padding-left:20px">1.343.892</td><td style="text-align:right;padding-left:20px">43,42%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:red']+'"></span>Apruebo Dignidad</td><td style="text-align:right;padding-left:20px">1.750.889</td><td style="text-align:right;padding-left:20px">56,58%</td></tr>'+
        '<tr style="border-top:solid;border-width:1px"><td style="font-style:italic">Votos válidos</td><td style="text-align:right;padding-left:20px">3.094.781</td></tr>'+
        '<tr><td style="font-style:italic">Votos nulos</td><td style="text-align:right;padding-left:20px">41.960</td></tr>'+
        '<tr><td style="font-style:italic">Votos blancos</td><td style="text-align:right;padding-left:20px">6.265</td></tr>'+
        '<tr><td style="font-style:italic">Total votación</td><td style="text-align:right;padding-left:20px">3.143.006</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
    legend.style.display = 'block';
}
function mostrarComparacionDistritos() {
	clean();
	map.setLayoutProperty('comparacion-distritos', 'visibility', 'visible');
	map.setLayoutProperty('comparacion-exterior', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-comparacion').style.color = 'black';

	var els = document.getElementsByClassName('comparacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('comparacion-distritos').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:blue']+'"></span>Chile Vamos</td><td style="text-align:right;padding-left:20px">1.343.892</td><td style="text-align:right;padding-left:20px">43,42%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:red']+'"></span>Apruebo Dignidad</td><td style="text-align:right;padding-left:20px">1.750.889</td><td style="text-align:right;padding-left:20px">56,58%</td></tr>'+
        '<tr style="border-top:solid;border-width:1px"><td style="font-style:italic">Votos válidos</td><td style="text-align:right;padding-left:20px">3.094.781</td></tr>'+
        '<tr><td style="font-style:italic">Votos nulos</td><td style="text-align:right;padding-left:20px">41.960</td></tr>'+
        '<tr><td style="font-style:italic">Votos blancos</td><td style="text-align:right;padding-left:20px">6.265</td></tr>'+
        '<tr><td style="font-style:italic">Total votación</td><td style="text-align:right;padding-left:20px">3.143.006</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
    legend.style.display = 'block';
}
function mostrarComparacionRegiones() {
	clean();
	map.setLayoutProperty('comparacion-regiones', 'visibility', 'visible');
	map.setLayoutProperty('comparacion-exterior', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-comparacion').style.color = 'black';

	var els = document.getElementsByClassName('comparacion');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('comparacion-regiones').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:blue']+'"></span>Chile Vamos</td><td style="text-align:right;padding-left:20px">1.343.892</td><td style="text-align:right;padding-left:20px">43,42%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['tab:red']+'"></span>Apruebo Dignidad</td><td style="text-align:right;padding-left:20px">1.750.889</td><td style="text-align:right;padding-left:20px">56,58%</td></tr>'+
        '<tr style="border-top:solid;border-width:1px"><td style="font-style:italic">Votos válidos</td><td style="text-align:right;padding-left:20px">3.094.781</td></tr>'+
        '<tr><td style="font-style:italic">Votos nulos</td><td style="text-align:right;padding-left:20px">41.960</td></tr>'+
        '<tr><td style="font-style:italic">Votos blancos</td><td style="text-align:right;padding-left:20px">6.265</td></tr>'+
        '<tr><td style="font-style:italic">Total votación</td><td style="text-align:right;padding-left:20px">3.143.006</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
}

function mostrarAprueboDignidadComunas() {
	clean();
	map.setLayoutProperty('apruebo-dignidad-comunas', 'visibility', 'visible');
    map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'visible'); 
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-apruebo-dignidad').style.color = 'black';

	var els = document.getElementsByClassName('apruebo-dignidad');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('apruebo-dignidad-comunas').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">1.058.027</td><td style="text-align:right;padding-left:20px">60,43%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">692.862</td><td style="text-align:right;padding-left:20px">39,57%</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
}
function mostrarAprueboDignidadDistritos() {
	clean();
	map.setLayoutProperty('apruebo-dignidad-distritos', 'visibility', 'visible');
    map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'visible'); 
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-apruebo-dignidad').style.color = 'black';

	var els = document.getElementsByClassName('apruebo-dignidad');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('apruebo-dignidad-distritos').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">1.058.027</td><td style="text-align:right;padding-left:20px">60,43%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">692.862</td><td style="text-align:right;padding-left:20px">39,57%</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
}
function mostrarAprueboDignidadRegiones() {
	clean();
	map.setLayoutProperty('apruebo-dignidad-regiones', 'visibility', 'visible');
    map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'visible'); 
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-apruebo-dignidad').style.color = 'black';

	var els = document.getElementsByClassName('apruebo-dignidad');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('apruebo-dignidad-regiones').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['verde-agua']+'"></span>Gabriel Boric (CS)</td><td style="text-align:right;padding-left:20px">1.058.027</td><td style="text-align:right;padding-left:20px">60,43%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['rojo-oscuro']+'"></span>Daniel Jadue (PC)</td><td style="text-align:right;padding-left:20px">692.862</td><td style="text-align:right;padding-left:20px">39,57%</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
}


function mostrarChileVamosComunas() {
	clean();
	map.setLayoutProperty('chile-vamos-comunas', 'visibility', 'visible');
    map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'visible'); 
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-chile-vamos').style.color = 'black';

	var els = document.getElementsByClassName('chile-vamos');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('chile-vamos-comunas').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>Sebastián Sichel (IND)</td><td style="text-align:right;padding-left:20px">659.570</td><td style="text-align:right;padding-left:20px">49,08%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['azul-marino']+'"></span>Joaquín Lavín (UDI)</td><td style="text-align:right;padding-left:20px">420.691</td><td style="text-align:right;padding-left:20px">31,30%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:#86BC25"></span>Ignacio Briones (EVO)</td><td style="text-align:right;padding-left:20px">131.957</td><td style="text-align:right;padding-left:20px">9,82%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>Mario Desbordes (RN)</td><td style="text-align:right;padding-left:20px">131.674</td><td style="text-align:right;padding-left:20px">9,80%</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
}
function mostrarChileVamosDistritos() {
	clean();
	map.setLayoutProperty('chile-vamos-distritos', 'visibility', 'visible');
    map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'visible'); 
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-chile-vamos').style.color = 'black';

	var els = document.getElementsByClassName('chile-vamos');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('chile-vamos-distritos').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>Sebastián Sichel (IND)</td><td style="text-align:right;padding-left:20px">659.570</td><td style="text-align:right;padding-left:20px">49,08%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['azul-marino']+'"></span>Joaquín Lavín (UDI)</td><td style="text-align:right;padding-left:20px">420.691</td><td style="text-align:right;padding-left:20px">31,30%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:#86BC25"></span>Ignacio Briones (EVO)</td><td style="text-align:right;padding-left:20px">131.957</td><td style="text-align:right;padding-left:20px">9,82%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>Mario Desbordes (RN)</td><td style="text-align:right;padding-left:20px">131.674</td><td style="text-align:right;padding-left:20px">9,80%</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
}
function mostrarChileVamosRegiones() {
	clean();
	map.setLayoutProperty('chile-vamos-regiones', 'visibility', 'visible');
    map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'visible'); 
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-chile-vamos').style.color = 'black';

	var els = document.getElementsByClassName('chile-vamos');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('chile-vamos-regiones').style.opacity = 1;

	legend.innerHTML = '<table style="border-collapse:collapse">'+
        '<tr><td style="font-weight:bold">Lista</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['amarillo']+'"></span>Sebastián Sichel (IND)</td><td style="text-align:right;padding-left:20px">659.570</td><td style="text-align:right;padding-left:20px">49,08%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['azul-marino']+'"></span>Joaquín Lavín (UDI)</td><td style="text-align:right;padding-left:20px">420.691</td><td style="text-align:right;padding-left:20px">31,30%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:#86BC25"></span>Ignacio Briones (EVO)</td><td style="text-align:right;padding-left:20px">131.957</td><td style="text-align:right;padding-left:20px">9,82%</td></tr>'+
        '<tr><td><span class="legend-key" style="background-color:'+colores['celeste']+'"></span>Mario Desbordes (RN)</td><td style="text-align:right;padding-left:20px">131.674</td><td style="text-align:right;padding-left:20px">9,80%</td></tr>'+
        '</table>';

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
}




