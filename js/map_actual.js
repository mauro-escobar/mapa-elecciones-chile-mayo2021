

map.on('load', function(){
	var layers = map.getStyle().layers;
    var firstSymbolId;

	addSourceDistritos(map);
    addSourceDiputados(map);
    addSourceSenadores(map);
    addLayerDiputadosMarkers(map);
    addLayerSenadoresMarkers(map);
	
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            layers[i].beforeId = 'sen-markers';
            break;
        }
    }

    addSourceComunas(map);
    addSourceRegiones(map);

    addSourceMunicipales(map);
	addSourceGobernadores(map);
	addSourceCores(map);
    
    addLayerNombreComunas(map,firstSymbolId);
    addLayerNombreRegiones(map);
    addLayerZonaIndeterminada(map);
    addLayerRegionesOutline(map);	
    addLayerComunasOutline(map);	
    addLayerComunasOutlineZoom(map);
    addLayerDistritosOutline(map);

	addLayerDiputados(map);
	addLayerSenadores(map);

    addLayerAlcaldes(map);
    addLayerConcejales(map);

    addLayerGobernadores(map);
    addLayerCores(map);

    mostrarDiputados();
});

var popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false,
	maxWidth: '600px'
});


// Create the popup

var clicked = true;
popCores(map,clicked);
popGobernadores(map,true);

popDiputados(map);
popSenadores(map);

popAlcaldes(map);
popConcejales(map);

function clean() {
    map.setLayoutProperty('dip-markers', 'visibility', 'none');	
    map.setLayoutProperty('dip-markers-lines', 'visibility', 'none');	
    map.setLayoutProperty('distritos-outline', 'visibility', 'none');	
    map.setLayoutProperty('diputados', 'visibility', 'none');	
    map.setLayoutProperty('senadores-periodo-b', 'visibility', 'none');	
    map.setLayoutProperty('senadores-periodo-a', 'visibility', 'none');	
    map.setLayoutProperty('sen-markers', 'visibility', 'none');	
	map.setLayoutProperty('alcaldes', 'visibility', 'none');
	map.setLayoutProperty('alcaldes-pendientes', 'visibility', 'none');
	map.setLayoutProperty('concejales', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline', 'visibility', 'none');
	map.setLayoutProperty('comunas-outline-zoom', 'visibility', 'none');
	map.setLayoutProperty('regiones-outline', 'visibility', 'none');
    map.setLayoutProperty('gobernadores', 'visibility', 'none');
    map.setLayoutProperty('cores', 'visibility', 'none');

	document.getElementById('a-diputados').style.color = 'gray';
	document.getElementById('a-senadores').style.color = 'gray';
	document.getElementById('a-gobernadores').style.color = 'gray';
	document.getElementById('a-cores').style.color = 'gray';
	document.getElementById('a-alcaldes').style.color = 'gray';
	document.getElementById('a-concejales').style.color = 'gray';

	legend2.style.fontWeight = '';
	legend2.style.textAlign = '';

	legend.innerHTML = '';
	legend2.innerHTML = '';
	legend.style.height = 'fit-content';
	legend.style.width = 'fit-content';
	legend2.style.height = 'fit-content';
	legend2.style.width = 'fit-content';
};