
var mostrar = "presidenciales";
var tipo = "comunas";
map.on('load', function(){
	var layers = map.getStyle().layers;
    var firstSymbolId;

	addSourceDistritos(map);
    addSourceComunas(map);
    addSourceRegiones(map);
    addSourceGenerales(map);
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
    addLayerDistritosOutline(map);
    addLayerDistritosFillGray(map);

    addLayerPresidenciales(map);

	map.setPaintProperty('regiones-outline', 'line-color', colores['gris']);
	map.setPaintProperty('distritos-outline', 'line-color', colores['gris']);
	map.setPaintProperty('distritos-outline', 'line-width', 0.1);
	map.setPaintProperty('comunas-outline', 'line-color', colores['gris']);

    mostrarPresidencialesComunas();
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

popPresidenciales(map);

function clean() {
	map.setLayoutProperty('presidenciales-comunas', 'visibility', 'none');
	map.setLayoutProperty('presidenciales-distritos', 'visibility', 'none');
	map.setLayoutProperty('presidenciales-regiones', 'visibility', 'none');
    map.setLayoutProperty('comunas-outline', 'visibility', 'none');
    map.setLayoutProperty('distritos-outline', 'visibility', 'none');
    map.setLayoutProperty('regiones-outline', 'visibility', 'none');
	map.setLayoutProperty('regiones-gris', 'visibility', 'none');
	map.setLayoutProperty('distritos-gris', 'visibility', 'none');

	document.getElementById('a-presidenciales').style.color = 'gray';

	var els = document.getElementsByClassName('presidenciales');
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
	if (mostrar=='presidenciales') mostrarPresidenciales(tipo);
}

legendPresidencialHTML =  'Porcentaje escrutado: 99,99%<table style="border-collapse:collapse">'+
'<tr><td style="font-weight:bold">Candidato/a</td><td style="text-align:right;font-weight:bold">Votos</td><td style="text-align:right;font-weight:bold">%</td></tr>'+
'<tr><td><span class="legend-key" style="background-color:' + colores['verde-agua'] + '"></span>GABRIEL BORIC FONT</td><td style="text-align:right;padding-left:20px">1.814.601</td><td style="text-align:right;padding-left:20px">25,82%</td></tr>'+
'<tr><td><span class="legend-key" style="background-color:' + colores['azul-marino'] + '"></span>JOSE ANTONIO KAST RIST</td><td style="text-align:right;padding-left:20px">1.961.022</td><td style="text-align:right;padding-left:20px">27,91%</td></tr>'+
'<tr><td><span class="legend-key" style="background-color:' + colores['violeta'] + '"></span>YASNA PROVOSTE CAMPILLAY</td><td style="text-align:right;padding-left:20px">815.519</td><td style="text-align:right;padding-left:20px">11,61%</td></tr>'+
'<tr><td><span class="legend-key" style="background-color:' + colores['amarillo'] + '"></span>SEBASTIAN SICHEL RAMIREZ</td><td style="text-align:right;padding-left:20px">898.443</td><td style="text-align:right;padding-left:20px">12,79%</td></tr>'+
'<tr><td><span class="legend-key" style="background-color:' + colores['rojo'] + '"></span>EDUARDO ARTES BRICHETTI</td><td style="text-align:right;padding-left:20px">103.175</td><td style="text-align:right;padding-left:20px">1,47%</td></tr>'+
'<tr><td><span class="legend-key" style="background-color:' + colores['azul'] + '"></span>MARCO ENRIQUEZ-OMINAMI GUMUCIO</td><td style="text-align:right;padding-left:20px">534.476</td><td style="text-align:right;padding-left:20px">7,61%</td></tr>'+
'<tr><td><span class="legend-key" style="background-color:' + colores['celeste'] + '"></span>FRANCO PARISI FERNANDEZ</td><td style="text-align:right;padding-left:20px">899.396</td><td style="text-align:right;padding-left:20px">12,80%</td></tr>'+
'</table><hr><table style="margin:20px;border-collapse:collapse">'+
'<tr><td></span>Válidamente Emitidos</td><td style="text-align:right;padding-left:20px">7.026.632</td><td style="text-align:right;padding-left:20px">98,76%</td></tr>'+
'<tr><td></span>Votos Nulos</td><td style="text-align:right;padding-left:20px">57.199</td><td style="text-align:right;padding-left:20px">0,80%</td></tr>'+
'<tr><td></span>Votos Blancos</td><td style="text-align:right;padding-left:20px">31.321</td><td style="text-align:right;padding-left:20px">0,44%</td></tr>'+
'<tr><td></span>Total Votación</td><td style="text-align:right;padding-left:20px">7.115.152</td><td style="text-align:right;padding-left:20px">100,00%</td></tr>'+
'</table>';
function mostrarPresidenciales(tipo="comunas") {

	mostrar = "presidenciales";
	if (tipo=="comunas") mostrarPresidencialesComunas();
	else if (tipo=="distritos") mostrarPresidencialesDistritos();
	else mostrarPresidencialesRegiones();
}
function mostrarPresidencialesComunas() {
	clean();
	tipo = "comunas";
	map.setLayoutProperty('presidenciales-comunas', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    map.setLayoutProperty('comunas-outline', 'visibility', 'visible');
	document.getElementById('a-presidenciales').style.color = 'black';

	var els = document.getElementsByClassName('presidenciales');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('presidenciales-comunas').style.opacity = 1;

	legend.innerHTML = legendPresidencialHTML;

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
}
function mostrarPresidencialesDistritos() {
	clean();
	tipo = "comunas";
	map.setLayoutProperty('presidenciales-distritos', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    map.setLayoutProperty('distritos-outline', 'visibility', 'visible');
	document.getElementById('a-presidenciales').style.color = 'black';

	var els = document.getElementsByClassName('presidenciales');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('presidenciales-distritos').style.opacity = 1;

	legend.innerHTML = legendPresidencialHTML;

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
}
function mostrarPresidencialesRegiones() {
	clean();
	tipo = "comunas";
	map.setLayoutProperty('presidenciales-regiones', 'visibility', 'visible');
    map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	document.getElementById('a-presidenciales').style.color = 'black';

	var els = document.getElementsByClassName('presidenciales');
	for (var i = 0; i < els.length; i++) {
		els[i].style.display = 'inline-block';
	}
	document.getElementById('presidenciales-regiones').style.opacity = 1;

	legend.innerHTML = legendPresidencialHTML;

	var div = document.createElement('div');
	var span = document.createElement('span');
	div.style.marginTop = '20px';
	span.style.fontSize = '0.9em';
	span.innerHTML = '© <a class="link-mauro" href="https://mauro-escobar.github.io" target="_blank">Mauro Escobar</a> 2021<br>Datos obtenidos de servelelecciones.cl';
	div.appendChild(span);
	legend.appendChild(div);
	legend.style.display = 'block';
}