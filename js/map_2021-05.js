

map.on('load', function(){
	var layers = map.getStyle().layers;
    var firstSymbolId;

    addSourceConvencionalesMarkers(map);
    addLayerConvencionalesMarkers(map);

    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            layers[i].beforeId = 'markers-title';
            break;
        }
    }
    addSourceComunas(map);
    addSourceDistritos(map);
    addSourceRegiones(map);

    addSourceMunicipales(map);
    addSourceConvencionales(map)

    addSourceGobernadores(map);
    addSourceGobernadoresComunas2v(map);

    addLayerNombreComunas(map,firstSymbolId);
    addLayerNombreRegiones(map);
    addLayerZonaIndeterminada(map);
    addLayerComunasOutline(map);
    addLayerComunasOutlineZoom(map);
    addLayerDistritosOutline(map);	
    addLayerDistritosFill(map);

    addLayerParticipacionDistritos(map)
	addLayerParticipacionMunicipales(map);

    addLayerConvencionales(map);

    addLayerAlcaldes(map);
    addLayerConcejales(map);
    addLayerConcejalesMH(map);
    addLayerRegionesOutline(map);	

    addLayerGobernadores(map);	
    addLayerGobernadoresComunas2v(map);
    addLayerGobernadoresComunas1v(map)

	if (screen.width>992) map.flyTo({center: [-71.9,-27]});
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

popDistritos(map);

popParticipacionDistritos(map);
popParticipacionMunicipales(map);

popGobernadores(map);
popGobernadoresComunas2v(map);
popGobernadoresComunas1v(map);

popConvencionales(map);
clickDistrito(map);
touchConvencional(map);
 		
popAlcaldes(map);	            
popConcejales(map);
popConcejalesMH(map);

function clean() {
	map.setLayoutProperty('distritos', 'visibility', 'none');
	map.setLayoutProperty('distritos-outline', 'visibility', 'none');
	map.setLayoutProperty('participacion-comunas', 'visibility', 'none');
	map.setLayoutProperty('participacion-distritos', 'visibility', 'none');
	map.setLayoutProperty('convencionales', 'visibility', 'none');
	map.setLayoutProperty('convencionales-comunas', 'visibility', 'none');
    map.setLayoutProperty('convencionales-markers', 'visibility', 'none');	
    map.setLayoutProperty('convencionales-lines', 'visibility', 'none');	
    map.setLayoutProperty('markers-title', 'visibility', 'none');	
	map.setLayoutProperty('convencionalesMH-distritos', 'visibility', 'none');
	map.setLayoutProperty('convencionalesMH-comunas', 'visibility', 'none');
	map.setLayoutProperty('alcaldes', 'visibility', 'none');
	map.setLayoutProperty('concejales', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'none');
	map.setLayoutProperty('concejalesMH', 'visibility', 'none');
	map.setLayoutProperty('regiones-outline', 'visibility', 'none');
    map.setLayoutProperty('gobernadores', 'visibility', 'none');
    map.setLayoutProperty('gobernadores-comunas-2v', 'visibility', 'none');	
    map.setLayoutProperty('gobernadores-comunas-1v', 'visibility', 'none');	

	document.getElementById('a-distritos').style.color = 'gray';
	document.getElementById('a-participacion').style.color = 'gray';
	document.getElementById('a-gobernadores').style.color = 'gray';
	document.getElementById('a-convencionales').style.color = 'gray';
	document.getElementById('a-convencionalesMH').style.color = 'gray';
	document.getElementById('a-alcaldes').style.color = 'gray';
	document.getElementById('a-concejales').style.color = 'gray';
	document.getElementById('a-concejalesMH').style.color = 'gray';

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
	map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'visible');
	map.setLayoutProperty('participacion-comunas', 'visibility', 'visible');
	map.setLayoutProperty('participacion-distritos', 'visibility', 'visible');
	document.getElementById('a-participacion').style.color = 'black';

	legend.innerHTML = '<table><tr><td style="padding-right:20px"><strong>Participación</strong><br></td>'+
					   '<td>Total País</td><td style="padding-left:20px;text-align:right">43,41%</td></tr>'+
					   '<tr><td></td><td>Total Electores</td><td style="padding-left:20px;text-align:right">14.900.190</td></tr>'+
					   '<tr><td></td><td>Votantes</td><td style="padding-left:20px;text-align:right">6.468.750</td></tr>'+
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
};






