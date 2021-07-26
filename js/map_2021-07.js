
var proporcion = true;
var mostrar = "comparacion";
var tipo = "comunas";
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
    addLayerRegionesFillGray(map);
	addLayerComunasOutline(map);	
    addLayerComunasOutlineZoom(map);
    addLayerComunasFill(map);	
    addLayerDistritosOutline(map);
    addLayerDistritosFillGray(map);

	addLayerParticipacion(map);
	addLayerComparacion(map);
	addLayerAprueboDignidad(map);
	addLayerChileVamos(map);

	map.setPaintProperty('regiones-outline', 'line-color', colores['gris']);
	map.setPaintProperty('distritos-outline', 'line-color', colores['gris']);
	map.setPaintProperty('distritos-outline', 'line-width', 0.1);
	map.setPaintProperty('comunas-outline', 'line-color', colores['gris']);
	
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
	map.setLayoutProperty('participacion-comunas-center', 'visibility', 'none');
	map.setLayoutProperty('participacion-distritos', 'visibility', 'none');
	map.setLayoutProperty('participacion-distritos-center', 'visibility', 'none');
	map.setLayoutProperty('participacion-regiones', 'visibility', 'none');
	map.setLayoutProperty('participacion-regiones-center', 'visibility', 'none');
	map.setLayoutProperty('participacion-exterior', 'visibility', 'none');
	map.setLayoutProperty('participacion-exterior-center', 'visibility', 'none');
    map.setLayoutProperty('comparacion-comunas', 'visibility', 'none');
    map.setLayoutProperty('comparacion-comunas-center', 'visibility', 'none');
    map.setLayoutProperty('comparacion-distritos', 'visibility', 'none');
    map.setLayoutProperty('comparacion-distritos-center', 'visibility', 'none');
    map.setLayoutProperty('comparacion-regiones', 'visibility', 'none');
    map.setLayoutProperty('comparacion-regiones-center', 'visibility', 'none');
    map.setLayoutProperty('comparacion-exterior', 'visibility', 'none');
    map.setLayoutProperty('comparacion-exterior-center', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-comunas', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-comunas-center', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-distritos', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-distritos-center', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-regiones', 'visibility', 'none');
	map.setLayoutProperty('apruebo-dignidad-regiones-center', 'visibility', 'none');
    map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'none'); 
    map.setLayoutProperty('apruebo-dignidad-exterior-center', 'visibility', 'none'); 
	map.setLayoutProperty('chile-vamos-comunas', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-comunas-center', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-distritos', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-distritos-center', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-regiones', 'visibility', 'none');
	map.setLayoutProperty('chile-vamos-regiones-center', 'visibility', 'none');
    map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'none'); 
    map.setLayoutProperty('chile-vamos-exterior-center', 'visibility', 'none'); 
    map.setLayoutProperty('distritos-outline', 'visibility', 'none');
    map.setLayoutProperty('regiones-outline', 'visibility', 'none');
	map.setLayoutProperty('regiones-gris', 'visibility', 'none'); 
	map.setLayoutProperty('comunas', 'visibility', 'none');
	map.setLayoutProperty('distritos-gris', 'visibility', 'none'); 

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

function mostrarMapa(mostrar, tipo) {
	if (mostrar=='participacion') mostrarParticipacion(tipo);
	else if (mostrar=='comparacion') mostrarComparacion(tipo);
	else if (mostrar=='apruebo-dignidad') mostrarAprueboDignidad(tipo);
	else if (mostrar=='chile-vamos') mostrarChileVamos(tipo);

	if (proporcion) {
		document.getElementById('link-proporcion').style.backgroundColor = 'lightblue';
		document.getElementById('link-ventaja').style.backgroundColor = 'white';
	} else {
		document.getElementById('link-proporcion').style.backgroundColor = 'white';
		document.getElementById('link-ventaja').style.backgroundColor = 'lightblue';
	}
}


function mostrarParticipacion(tipo="comunas") {
	mostrar = "participacion";
	if (tipo=="comunas") mostrarParticipacionComunas();
	else if (tipo=="distritos") mostrarParticipacionDistritos();
	else mostrarParticipacionRegiones();
}
function mostrarParticipacionComunas() {
	clean();
	tipo = "comunas";
	if (proporcion) {
		map.setLayoutProperty('participacion-comunas', 'visibility', 'visible');
		map.setLayoutProperty('participacion-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('participacion-comunas-center', 'visibility', 'visible');
    	map.setLayoutProperty('participacion-exterior-center', 'visibility', 'visible');	
	}
	map.setLayoutProperty('comunas', 'visibility', 'visible');
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
	if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Porcentaje de participación';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarParticipacionComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Cantidad de votos';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarParticipacionComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {    	
	    	var pctLegend2 = ['0%', '10%', '20%', '30%', '40%', '50%'];
	    	var table2 = document.createElement('table');
	    	table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['marron'],0.95),colores['marron'], (1-1/12)-1/6*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");


	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}
    	legend2.style.display = 'block';
    } 
}
function mostrarParticipacionDistritos() {
	clean();
	tipo = "distritos";
	if (proporcion) {
		map.setLayoutProperty('participacion-distritos', 'visibility', 'visible');
		map.setLayoutProperty('participacion-exterior', 'visibility', 'visible');
    	map.setLayoutProperty('distritos-outline', 'visibility', 'none');
	} else {
		map.setLayoutProperty('participacion-distritos-center', 'visibility', 'visible');
		map.setLayoutProperty('participacion-exterior-center', 'visibility', 'visible');	
    	map.setLayoutProperty('distritos-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
	if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Porcentaje de participación';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarParticipacionDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Cantidad de votos';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarParticipacionDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {    	
	    	var pctLegend2 = ['0%', '10%', '20%', '30%', '40%', '50%'];
	    	var table2 = document.createElement('table');
	    	table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['marron'],0.95),colores['marron'], (1-1/12)-1/6*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");


	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}
    	legend2.style.display = 'block';
    } 
}
function mostrarParticipacionRegiones() {
	clean();
	tipo = "regiones";
	if (proporcion) {
		map.setLayoutProperty('participacion-regiones', 'visibility', 'visible');
		map.setLayoutProperty('participacion-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('participacion-regiones-center', 'visibility', 'visible');
		map.setLayoutProperty('participacion-exterior-center', 'visibility', 'visible');	
    	map.setLayoutProperty('regiones-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
	if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Porcentaje de participación';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarParticipacionRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Cantidad de votos';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarParticipacionRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {    	
	    	var pctLegend2 = ['0%', '10%', '20%', '30%', '40%', '50%'];
	    	var table2 = document.createElement('table');
	    	table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['marron'],0.95),colores['marron'], (1-1/12)-1/6*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");


	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['marron']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}
    	legend2.style.display = 'block';
    } 
}

function mostrarComparacion(tipo="comunas") {
	mostrar = "comparacion";
	if (tipo=="comunas") mostrarComparacionComunas();
	else if (tipo=="distritos") mostrarComparacionDistritos();
	else mostrarComparacionRegiones();
}
function mostrarComparacionComunas() {
	clean();
	tipo = "comunas";
	if (proporcion) {
		map.setLayoutProperty('comparacion-comunas', 'visibility', 'visible');	
		map.setLayoutProperty('comparacion-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('comparacion-comunas-center', 'visibility', 'visible');
    	map.setLayoutProperty('comparacion-exterior-center', 'visibility', 'visible');	
	}
	map.setLayoutProperty('comunas', 'visibility', 'visible');	
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
    legend.style.display = 'block';
    if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarComparacionComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarComparacionComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
    		var pctLegend2 = ['50%', '60%', '70%', '80%'];
	    	var table2 = document.createElement('table');
	    	table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Chile Vamos';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['tab:blue'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Apruebo Dignidad';
	    	td.style.paddingRight = '10px';
	    	td.style.textAlign = 'right';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['tab:red'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
    	} else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");


	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}
    	
    	legend2.style.display = 'block';
    } 
}
function mostrarComparacionDistritos() {
	clean();
	tipo = "distritos";
	if (proporcion) {
		map.setLayoutProperty('comparacion-distritos', 'visibility', 'visible');	
		map.setLayoutProperty('comparacion-exterior', 'visibility', 'visible');
    	map.setLayoutProperty('distritos-outline', 'visibility', 'visible'); 
	} else {
		map.setLayoutProperty('comparacion-distritos-center', 'visibility', 'visible');
    	map.setLayoutProperty('comparacion-exterior-center', 'visibility', 'visible');	
    	map.setLayoutProperty('distritos-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
    legend.style.display = 'block';
    if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarComparacionDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarComparacionDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
    		var pctLegend2 = ['50%', '60%', '70%', '80%'];
	    	var table2 = document.createElement('table');
	    	table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Chile Vamos';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['tab:blue'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Apruebo Dignidad';
	    	td.style.paddingRight = '10px';
	    	td.style.textAlign = 'right';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['tab:red'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
    	} else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");


	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}
    	
    	legend2.style.display = 'block';
    } 
}
function mostrarComparacionRegiones() {
	clean();
	tipo = "regiones";
	if (proporcion) {
		map.setLayoutProperty('comparacion-regiones', 'visibility', 'visible');
		map.setLayoutProperty('comparacion-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('comparacion-regiones-center', 'visibility', 'visible');
		map.setLayoutProperty('comparacion-exterior-center', 'visibility', 'visible');	
    	map.setLayoutProperty('regiones-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
    if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarComparacionRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarComparacionRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
    		var pctLegend2 = ['50%', '60%', '70%', '80%'];
	    	var table2 = document.createElement('table');
	    	table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Chile Vamos';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['tab:blue'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Apruebo Dignidad';
	    	td.style.paddingRight = '10px';
	    	td.style.textAlign = 'right';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['tab:red'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 10);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
    	} else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");


	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}
    	
    	legend2.style.display = 'block';
    } 
}


function mostrarAprueboDignidad(tipo="comunas") {
	mostrar = "apruebo-dignidad";
	if (tipo=="comunas") mostrarAprueboDignidadComunas();
	else if (tipo=="distritos") mostrarAprueboDignidadDistritos();
	else mostrarAprueboDignidadRegiones();
}
function mostrarAprueboDignidadComunas() {
	clean();
	tipo = "comunas";
	if (proporcion) {
		map.setLayoutProperty('apruebo-dignidad-comunas', 'visibility', 'visible');
		map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('apruebo-dignidad-comunas-center', 'visibility', 'visible');
    	map.setLayoutProperty('apruebo-dignidad-exterior-center', 'visibility', 'visible');	
	}
	map.setLayoutProperty('comunas', 'visibility', 'visible');
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
    if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarAprueboDignidadComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarAprueboDignidadComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
	    	var pctLegend2 = ['50%', '60%', '70%', '80%'];
	    	var table2 = document.createElement('table');
		    table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Gabriel Boric';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['verde-agua'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Daniel Jadue';
	    	td.style.paddingRight = '10px';
	    	td.style.textAlign = 'right';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		td.style.opacity = 0.9;
	    		var color = linearComibationHEX(colores['blanco'], colores['rojo-oscuro'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 90);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 90);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}

	    legend2.style.display = 'block';
    } 
}
function mostrarAprueboDignidadDistritos() {
	clean();
	tipo = "distritos";
	if (proporcion) {
		map.setLayoutProperty('apruebo-dignidad-distritos', 'visibility', 'visible');
	    map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'visible'); 
    	map.setLayoutProperty('distritos-outline', 'visibility', 'visible'); 
	} else {
		map.setLayoutProperty('apruebo-dignidad-distritos-center', 'visibility', 'visible');
	    map.setLayoutProperty('apruebo-dignidad-exterior-center', 'visibility', 'visible'); 
    	map.setLayoutProperty('distritos-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
    if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarAprueboDignidadDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarAprueboDignidadDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
	    	var pctLegend2 = ['50%', '60%', '70%', '80%'];
	    	var table2 = document.createElement('table');
		    table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Gabriel Boric';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['verde-agua'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Daniel Jadue';
	    	td.style.paddingRight = '10px';
	    	td.style.textAlign = 'right';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		td.style.opacity = 0.9;
	    		var color = linearComibationHEX(colores['blanco'], colores['rojo-oscuro'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}

	    legend2.style.display = 'block';
    } 
}
function mostrarAprueboDignidadRegiones() {
	clean();
	tipo = "regiones";
	if (proporcion) {
		map.setLayoutProperty('apruebo-dignidad-regiones', 'visibility', 'visible');
		map.setLayoutProperty('apruebo-dignidad-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('apruebo-dignidad-regiones-center', 'visibility', 'visible');
		map.setLayoutProperty('apruebo-dignidad-exterior-center', 'visibility', 'visible');	
    	map.setLayoutProperty('regiones-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
    if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarAprueboDignidadRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarAprueboDignidadRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
	    	var pctLegend2 = ['50%', '60%', '70%', '80%'];
	    	var table2 = document.createElement('table');
		    table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Gabriel Boric';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(colores['blanco'], colores['verde-agua'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.style.opacity = 0.9;
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Daniel Jadue';
	    	td.style.paddingRight = '10px';
	    	td.style.textAlign = 'right';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		td.style.opacity = 0.9;
	    		var color = linearComibationHEX(colores['blanco'], colores['rojo-oscuro'], 0.875-0.25*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}

	    legend2.style.display = 'block';
    } 
}

function mostrarChileVamos(tipo="comunas") {
	mostrar = "chile-vamos";
	if (tipo=="comunas") mostrarChileVamosComunas();
	else if (tipo=="distritos") mostrarChileVamosDistritos();
	else mostrarChileVamosRegiones();
}
function mostrarChileVamosComunas() {
	clean();
	tipo = "comunas";
	if (proporcion) {
		map.setLayoutProperty('chile-vamos-comunas', 'visibility', 'visible');
		map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('chile-vamos-comunas-center', 'visibility', 'visible');
    	map.setLayoutProperty('chile-vamos-exterior-center', 'visibility', 'visible');	
	}
	map.setLayoutProperty('comunas', 'visibility', 'visible');
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
	if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarChileVamosComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarChileVamosComunas();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
	    	var pctLegend2 = ['20%', '30%', '40%', '50%'];
	    	var table2 = document.createElement('table');
		    table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Sebastián Sichel';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['amarillo'],0.95),colores['amarillo'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Joaquín Lavín';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['azul-marino'],0.95),colores['azul-marino'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Ignacio Briones';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],'#86BC25',0.95),'#86BC25', (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Mario Desbordes';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['celeste'],0.95),colores['celeste'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 90);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 90);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}

    	legend2.style.display = 'block';
    } 
}
function mostrarChileVamosDistritos() {
	clean();
	tipo = "distritos";
	if (proporcion) {
		map.setLayoutProperty('chile-vamos-distritos', 'visibility', 'visible');
	    map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'visible'); 
    	map.setLayoutProperty('distritos-outline', 'visibility', 'visible'); 
	} else {
		map.setLayoutProperty('chile-vamos-distritos-center', 'visibility', 'visible');
	    map.setLayoutProperty('chile-vamos-exterior-center', 'visibility', 'visible'); 
    	map.setLayoutProperty('distritos-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
	if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarChileVamosDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarChileVamosDistritos();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
	    	var pctLegend2 = ['20%', '30%', '40%', '50%'];
	    	var table2 = document.createElement('table');
		    table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Sebastián Sichel';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['amarillo'],0.95),colores['amarillo'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Joaquín Lavín';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['azul-marino'],0.95),colores['azul-marino'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Ignacio Briones';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],'#86BC25',0.95),'#86BC25', (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Mario Desbordes';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['celeste'],0.95),colores['celeste'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}

    	legend2.style.display = 'block';
    } 
}
function mostrarChileVamosRegiones() {
	clean();
	tipo = "regiones";
	if (proporcion) {
		map.setLayoutProperty('chile-vamos-regiones', 'visibility', 'visible');
		map.setLayoutProperty('chile-vamos-exterior', 'visibility', 'visible');
	} else {
		map.setLayoutProperty('chile-vamos-regiones-center', 'visibility', 'visible');
		map.setLayoutProperty('chile-vamos-exterior-center', 'visibility', 'visible');	
    	map.setLayoutProperty('regiones-gris', 'visibility', 'visible'); 
	}
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
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);

    legend.style.display = 'block';
	if (screen.width>=992) {
    	var div = document.createElement('div');
    	var span = document.createElement('a');
    	span.innerHTML = 'Proporción de votos';
    	span.onclick = function() {
    		proporcion = true;
    		mostrarChileVamosRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	var span = document.createElement('a');
    	span.innerHTML = 'Tamaño de la ventaja';
    	span.onclick = function() {
    		proporcion = false;
    		mostrarChileVamosRegiones();
    	}
    	span.style.margin = '3px';
    	span.style.border = '1px solid black';
    	span.style.borderRadius = '5px 5px 5px';
    	span.style.padding = '3px';
    	if (!proporcion) span.style.backgroundColor = linearComibationHEX(colores['gris'],colores['blanco'],0.4);
    	div.appendChild(span);
    	legend2.appendChild(div);

    	if (proporcion) {
	    	var pctLegend2 = ['20%', '30%', '40%', '50%'];
	    	var table2 = document.createElement('table');
		    table2.style.marginTop = '10px';
	    	table2.style.borderCollapse = 'collapse';	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Sebastián Sichel';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['amarillo'],0.95),colores['amarillo'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);	
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Joaquín Lavín';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['azul-marino'],0.95),colores['azul-marino'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Ignacio Briones';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],'#86BC25',0.95),'#86BC25', (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	var tr = document.createElement('tr');
	    	var td = document.createElement('td');
	    	td.innerHTML = 'Mario Desbordes';
	    	td.style.textAlign = 'right';
	    	td.style.paddingRight = '10px';
	    	tr.appendChild(td);
	    	for (var i = 0; i < pctLegend2.length; i++) {
	    		var td = document.createElement('td');
	    		td.style.fontSize = '0.8em';
	    		td.style.textAlign = 'left';
	    		var color = linearComibationHEX(linearComibationHEX(colores['blanco'],colores['celeste'],0.95),colores['celeste'], (1-1/8)-1/4*i);
	    		td.style.backgroundColor = color;
	    		td.style.color = constrastColor(color, 5);
	    		td.innerHTML = pctLegend2[i];
	    		td.width = '45px';
	    		td.height = '15px';
	    		tr.appendChild(td);
	    	}
	    	table2.appendChild(tr);
	    	legend2.appendChild(table2);
	    } else {
			var xmlns = "http://www.w3.org/2000/svg";
    		var svgElem = document.createElementNS(xmlns, "svg");
		    svgElem.setAttributeNS(null, "viewBox", "-40 -55 230 90");
			svgElem.setAttributeNS(null, "width", "230px");
		    svgElem.setAttributeNS(null, "height", "90px");
		    svgElem.setAttributeNS(null, "version", "1.2");

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -25);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(10**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", -25);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 0);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(100**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '100';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 0);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 35);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.2*(1000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '1.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 35);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 75);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(10000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '10.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 75);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 135);
	    	circle.setAttributeNS(null, "cy", -5);
	    	circle.setAttributeNS(null, "r", 0.1*(50000**0.55)+'px');
	    	circle.setAttributeNS(null, "fill", colores['gris']);
	    	circle.setAttributeNS(null, "opacity", 0.4);
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '50.000';
		    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
		    text.setAttributeNS(null, "text-anchor", "middle");
		    text.setAttributeNS(null, "x", 135);
			text.setAttributeNS(null, "y", 10);
	    	text.setAttributeNS(null, "font-size", "12px");
		    svgElem.appendChild(text);

		    legend2.appendChild(svgElem);
    	}

    	legend2.style.display = 'block';
    } 
}




