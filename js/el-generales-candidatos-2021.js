
map.on('load', function(){
	var layers = map.getStyle().layers;
    var firstSymbolId;

	addSourceDistritos(map);	
    addSourceComunas(map);
    addSourceRegiones(map);
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
    /*
    addLayerRegionesOutline(map);	
    addLayerRegionesFillGray(map);
	addLayerComunasOutline(map);	
    addLayerComunasOutlineZoom(map);
    addLayerComunasFill(map);	
    addLayerDistritosOutline(map);
    addLayerDistritosFillGray(map);*/


    map.addLayer({
        'id': 'regiones',
        'type': 'fill',
        'source': 'regiones-data',
        'source-layer': 'chiles-regiones-bfu10d',
        'filter': ['!', ['==', ['get', 'REGION'], 'Zona sin demarcar']],
        'paint': {
            'fill-color': colores['gris'],
            'fill-opacity': 0.2
        },
    }, 'zona-indeterminada');
	map.on('click', 'regiones', clickMapaRegion);
	map.on('mousemove', 'regiones', function () {
	    map.getCanvas().style.cursor = 'pointer';
	});
	map.on('mouseleave', 'regiones', function () {
	    map.getCanvas().style.cursor = '';
	});
});


map.flyTo({
	bearing: 0,
	center: [-70.66,-33.45],
});

var coloresListas = {
	'APRUEBO DIGNIDAD': colores['verde-agua'],
	'FRENTE AMPLIO': colores['verde-agua'],
	'CHILE PODEMOS +': colores['amarillo'],
	'LA LISTA DEL PUEBLO': colores['rosado'],
	'NUEVO PACTO SOCIAL': colores['violeta'],
	'CHILE DIGNO': colores['rojo'],
	'FRENTE SOCIAL CRISTIANO': colores['azul-marino'],
	'UNION PATRIOTICA': colores['rojo-oscuro'],
	'INDEPENDIENTE': colores['gris'],
	'CANDIDATURA INDEPENDIENTE': colores['gris'],
	'PARTIDO DE LA GENTE': '#2f1b6b',
	'PARTIDO PROGRESISTA': '#e02385',
	'INDEPENDIENTES UNIDOS': colores['gris-claro'],
	'DIGNIDAD AHORA': colores['naranja'],
	'PARTIDO DE TRABAJADORES REVOLUCIONARIOS': '#ff5c33',
	'PARTIDO ECOLOGISTA VERDE': colores['verde'],
}

var divCandidatos = document.getElementById('candidatos');

var divPres = document.createElement('div');
var divSen = document.createElement('div');
var divDip = document.createElement('div');
var divCore = document.createElement('div');
divPres.className="col-candidatos";
divSen.className="col-candidatos";
divDip.className="col-candidatos";
divCore.className="col-candidatos";

var h3 = document.createElement('h3');
h3.innerHTML = 'Presidencia';
divPres.appendChild(h3);
var h3 = document.createElement('h3');
h3.innerHTML = 'Senado';
divSen.appendChild(h3);
divSen.style.backgroundColor = linearComibationHEX(colores['gris-claro'], colores['blanco'], 0.2);
var h3 = document.createElement('h3');
h3.innerHTML = 'Diputadas y Diputados';
divDip.appendChild(h3);
var h3 = document.createElement('h3');
h3.innerHTML = 'Consejos Regionales';
divCore.style.backgroundColor = linearComibationHEX(colores['gris-claro'], colores['blanco'], 0.2);
divCore.appendChild(h3);

var candidatosPresidenciales = [
	//['DIEGO ANCALAO', 'IND', 'LA LISTA DEL PUEBLO'],
	['EDUARDO ARTES', 'UPA', 'UNION PATRIOTICA'],
	['GABRIEL BORIC', 'CS', 'APRUEBO DIGNIDAD'],
	['MARCO ENRIQUEZ-OMINAMI', 'PRO', 'PARTIDO PROGRESISTA'],
	['JOSE ANTONIO KAST', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
	//['GINO LORENZINI', 'IND', 'INDEPENDIENTE'],
	['FRANCO PARISI', 'PDG', 'PARTIDO DE LA GENTE'],
	['YASNA PROVOSTE', 'PDC', 'NUEVO PACTO SOCIAL'],
	['SEBASTIAN SICHEL', 'IND', 'CHILE PODEMOS +'],
];

divPres.appendChild(crearTabla(candidatosPresidenciales));


var select = document.createElement('select');
select.name = 'circunscripcion';
select.id = 'select-circunscripcion';
select.style.marginTop = '5%';
select.onchange = clickCircunscripcion;
var option = document.createElement('option');
option.innerHTML = 'Selecciona una Circunscripción';
select.appendChild(option);
var romanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];
for (var i = 0; i < romanos.length; i++) {
	var option = document.createElement('option');
	option.value = 'Circunscripción '+romanos[i];
	option.innerHTML = 'Circunscripción '+romanos[i];
	select.appendChild(option);
}
divSen.appendChild(select);
var divSenCand = document.createElement('div');
divSenCand.style.marginTop = '5%';
divSen.appendChild(divSenCand);
divSenCand.style.overflowY = 'auto';



var select = document.createElement('select');
select.id = 'select-distrito';
select.style.marginTop = '5%';
select.onchange = clickDistrito;
var option = document.createElement('option');
option.innerHTML = 'Selecciona un Distrito';
select.appendChild(option);
for (var i = 1; i <= 28; i++) {
	var option = document.createElement('option');
	option.value = 'Distrito '+i;
	option.innerHTML = 'Distrito '+i;
	select.appendChild(option);
}
divDip.appendChild(select);
var divDipCand = document.createElement('div');
divDipCand.style.marginTop = '5%';
divDip.appendChild(divDipCand);
divDip.style.overflowY = 'auto';

divCandidatos.appendChild(divPres);
divCandidatos.appendChild(divSen);
divCandidatos.appendChild(divDip);
//divCandidatos.appendChild(divCore);

var candidatosSenadores = {
	'Circunscripción I': {
		region: 'Región de Arica y Parinacota',
		escanos: 0,
		senadores: [
			['JOSE MIGUEL INSULZA', 'PS', 'NUEVO PACTO SOCIAL'],
			['JOSE DURANA', 'UDI', 'CHILE PODEMOS +']
		],
		centro: [-69.703735, -18.510431]
	},
	'Circunscripción II': {
		region: 'Región de Tarapacá',
		escanos: 0,
		senadores: [
			['JORGE SORIA', 'PPD', 'NUEVO PACTO SOCIAL'],
			['LUZ EBENSPERGER', 'UDI', 'CHILE PODEMOS +']
		],
		centro: [-69.494995, -20.220536]
	},
	'Circunscripción III': {
		region: 'Región de Antofagasta',
		escanos: 3,
		candidatos: [
			['MOISES IBACACHE', 'PI', 'DIGNIDAD AHORA'],
			['MA. SUSANA VERA', 'PI-IND', 'DIGNIDAD AHORA'],
			['GERMAN ROMAGNOLI', 'CU', 'INDEPENDIENTES UNIDOS'],
			['CESAR ARAYA', 'CU-IND', 'INDEPENDIENTES UNIDOS'],
			['PAULINA NUÑEZ', 'RN', 'CHILE PODEMOS +'],
			['MARCO DIAZ', 'RN', 'CHILE PODEMOS +'],
			['KATHERINE LOPEZ', 'UDI', 'CHILE PODEMOS +'],
			['DANIEL GUEVARA', 'UDI-IND', 'CHILE PODEMOS +'],
			['ESTEBAN VELASQUEZ', 'FREVS', 'APRUEBO DIGNIDAD'],
			['MARTA MOLINA', 'FREVS', 'APRUEBO DIGNIDAD'],
			['JAN JOSE CADEMARTORI', 'PCCH', 'APRUEBO DIGNIDAD'],
			['IVAN AVILA', 'RD', 'APRUEBO DIGNIDAD'],
			['PEDRO ARAYA', 'PPD-IND', 'NUEVO PACTO SOCIAL'],
			['JACQUELINE SANTANDER', 'PS', 'NUEVO PACTO SOCIAL'],
			['MARCELA HERNANDO', 'PR', 'NUEVO PACTO SOCIAL'],
			['JEANETTE HURTADO', 'PDC', 'NUEVO PACTO SOCIAL'],
			['GALIA AGUILERA', '', 'PARTIDO DE TRABAJADORES REVOLUCIONARIOS'],
			['DOMINGO LARA',  '', 'PARTIDO DE TRABAJADORES REVOLUCIONARIOS'],
			['PAOLA DEBIA', '', 'PARTIDO DE LA GENTE'],
			['RICARDO VARGAS', '', 'PARTIDO DE LA GENTE'],
			['TAMARA GAYTAN', '', 'PARTIDO DE LA GENTE'],
		],
		centro: [-69.396118, -23.493057]
	},
	'Circunscripción IV': {
		region: 'Región de Atacama',
		escanos: 0,
		senadores: [
			['YASNA PROVOSTE', 'PDC', 'NUEVO PACTO SOCIAL'],
			['RAFAEL PROHENS', 'RN', 'CHILE PODEMOS +']
		],
		centro: [-70.110229, -27.566316]
	},
	'Circunscripción V': {
		region: 'Región de Coquimbo',
		escanos: 3,
		candidatos: [
			['CATERINA SIMONCELLI', 'PI-IND', 'DIGNIDAD AHORA'],
			['ESTEBAN VILCHEZ', 'PI-IND', 'DIGNIDAD AHORA'],
			['SERGIO ROJAS', 'CU-IND', 'INDEPENDIENTES UNIDOS'],
			['SERGIO GAHONA', 'UDI', 'CHILE PODEMOS +'],
			['ALEJANDRA VALDOVINOS', 'UDI', 'CHILE PODEMOS +'],
			['PEDRO VELASQUEZ', 'PRI-IND', 'CHILE PODEMOS +'],
			['GIANNINA GONZALEZ', 'RN', 'CHILE PODEMOS +'],
			['DANIEL NUÑEZ', 'PCCH', 'APRUEBO DIGNIDAD'],
			['MARCELO DIAZ', 'CS-IND', 'APRUEBO DIGNIDAD'],
			['JEANNETTE MEDINA', 'FREVS-IND', 'APRUEBO DIGNIDAD'],
			['MATIAS WALKER', 'PDC', 'NUEVO PACTO SOCIAL'],
			['ADRIANA MUÑOZ', 'PPD', 'NUEVO PACTO SOCIAL'],
			['EILEEN URQUETA', '', 'PARTIDO DE LA GENTE'],
			['CRISTIAN ASTORGA', '', 'PARTIDO DE LA GENTE'],
		],
		centro: [-71.011108, -30.715439]
	},
	'Circunscripción VI': {
		region: 'Región de Valparaíso',
		escanos: 0,
		senadores: [
			['FRANCISCO CHAHUAN', 'RN', 'CHILE PODEMOS +'],
			['KENNETH PUGH', 'IND-RN', 'CHILE PODEMOS +'],
			['RICARDO LAGOS', 'PPD', 'NUEVO PACTO SOCIAL'],
			['ISABEL ALLENDE', 'PS', 'NUEVO PACTO SOCIAL'],
			['JUAN IGNACIO LATORRE', 'RD', 'APRUEBO DIGNIDAD']
		],
		centro: [-71.382174, -32.831750]
	},
	'Circunscripción VII': {
		region: "Región Metropolitana de Santiago",
		escanos: 5,
		candidatos: [
			['ROJO EDWARDS', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['MARIA GATICA', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['ALVARO PEZOA', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['RICARDO ORTEGA', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['PAMELA PIZARRO', 'PLR-IND', 'FRENTE SOCIAL CRISTIANO'],
			['BEATRIZ MATURANA', 'PLR-IND', 'FRENTE SOCIAL CRISTIANO'],
			['PAULA CANCINO', 'PI', 'DIGNIDAD AHORA'],
			['MARIANA GUTIERREZ', 'PI', 'DIGNIDAD AHORA'],
			['RODRIGO URZUA', 'PI-IND', 'DIGNIDAD AHORA'],
			['MARCELO RIOSECO', 'PH', 'DIGNIDAD AHORA'],
			['MERCEDES BRAVO', 'PH', 'DIGNIDAD AHORA'],
			['CRISTIAN CONTRERAS', 'CU', 'INDEPENDIENTES UNIDOS'],
			['FABIOLA MOYA', 'CU', 'INDEPENDIENTES UNIDOS'],
			['RUTH ROJAS', 'CU', 'INDEPENDIENTES UNIDOS'],
			['CELESTE JIMENEZ', '', 'PARTIDO ECOLOGISTA VERDE'],
			['PATRICIO NEIRA', '', 'PARTIDO ECOLOGISTA VERDE'],
			['DAIANA SQUELLA', '', 'PARTIDO ECOLOGISTA VERDE'],
			['MANUEL OSSANDON', 'RN', 'CHILE PODEMOS +'],
			['MARCELA SABAT', 'RN', 'CHILE PODEMOS +'],
			['DANIELA CABEZAS', 'UDI', 'CHILE PODEMOS +'],
			['CAROLINA LAVIN', 'UDI', 'CHILE PODEMOS +'],
			['LUCIANO CRUZ-COKE', 'EVO', 'CHILE PODEMOS +'],
			['JAIME MAÑALICH', 'EVO-IND', 'CHILE PODEMOS +'],
			['KARINA OLIVA', 'COM', 'APRUEBO DIGNIDAD'],
			['GONZALO MARTNER', 'COM-IND', 'APRUEBO DIGNIDAD'],
			['GUILLERMO TELLIER', 'PC', 'APRUEBO DIGNIDAD'],
			['CLAUDIA PASCUAL', 'PC', 'APRUEBO DIGNIDAD'],
			//['SEBASTIAN DEPOLO', 'RD', 'APRUEBO DIGNIDAD'],
			//['ROCIO DONOSO', 'RD', 'APRUEBO DIGNIDAD'],
			['VERONICA PARDO', 'PL-IND', 'NUEVO PACTO SOCIAL'],
			['EUGENIO ORTEGA', 'PDC', 'NUEVO PACTO SOCIAL'],
			['GABRIEL SILBER', 'PDC', 'NUEVO PACTO SOCIAL'],
			['PAULINA VODANOVIC', 'PS', 'NUEVO PACTO SOCIAL'],
			['ALBERTO PIZARRO', 'PPD', 'NUEVO PACTO SOCIAL'],
			['NATALIA PIERGENTILI', 'PPD', 'NUEVO PACTO SOCIAL'],
			['RAFAEL ARAVENA', '', 'UNION PATRIOTICA'],
			['FRESIA QUILODRAN', '', 'UNION PATRIOTICA'],
			['VARINIA ARAVENA', '', 'UNION PATRIOTICA'],
			['VALESKA OYARCE', '', 'PARTIDO DE LA GENTE'],
			['ERNA PEREZ', '', 'PARTIDO DE LA GENTE'],
			['RODRIGO SILVA', '', 'PARTIDO DE LA GENTE'],
			['RODRIGO DIAZ', '', 'PARTIDO DE LA GENTE'],
			['CAROLINA GONZALEZ', '', 'PARTIDO DE LA GENTE'],
			['ROBERTO COFRE', '', 'PARTIDO DE LA GENTE'],
			['FABIOLA CAMPILLAI', '', 'CANDIDATURA INDEPENDIENTE'],
		],
		centro: [-70.65722, -33.473273]
	},
	'Circunscripción VIII': {
		region: "Región del Libertador Bernardo O'Higgins",
		escanos: 3,
		candidatos: [
			['JAVIER MACAYA', 'UDI', 'CHILE PODEMOS +'],
			['RAMON BARROS', 'UDI', 'CHILE PODEMOS +'],
			['VIRGINIA TRONCOSO', 'RN-IND', 'CHILE PODEMOS +'],
			['MACARENA MATAS', 'RN', 'CHILE PODEMOS +'],
			['ALEJANDRA SEPULVEDA', 'FREVS', 'APRUEBO DIGNIDAD'],
			['PABLO DINTRANS', 'FREVS', 'APRUEBO DIGNIDAD'],
			['MONICA GOMEZ', 'PCCH', 'APRUEBO DIGNIDAD'],
			['JUAN LUIS CASTRO', 'PS', 'NUEVO PACTO SOCIAL'],
			['MARCIA BARRERA', 'PDC', 'NUEVO PACTO SOCIAL'],
			['JOSE ANTONIO GOMEZ', 'PR', 'NUEVO PACTO SOCIAL'],
			['CARLOS ITURRIETA', '', 'UNION PATRIOTICA'],
			['CLAUDIO MELLA', '', 'PARTIDO DE LA GENTE'],
			['MARIO LEYTON', '', 'PARTIDO DE LA GENTE'],
			['RUTH ALVARADO', '', 'PARTIDO DE LA GENTE'],
		],
		centro: [-71.086182, -34.489029]
	},
	'Circunscripción IX': {
		region: "Región del Maule",
		escanos: 0,
		senadores: [
			['JUAN ANTONIO COLOMA', 'UDI', 'CHILE PODEMOS +'],
			['JUAN CASTRO', 'IND-RN', 'CHILE PODEMOS +'],
			['RODRIGO GALILEA', 'RN', 'CHILE PODEMOS +'],
			['XIMENA RINCÓN', 'PDC', 'NUEVO PACTO SOCIAL'],
			['ALVARO ELIZALDE', 'PS', 'NUEVO PACTO SOCIAL']
		],
		centro: [-71.5008141, -35.603229]
	},
	'Circunscripción X': {
		region: "Región del Bío-Bío",
		escanos: 3,
		candidatos: [
			['ANTARIS VARELA', 'PCC', 'FRENTE SOCIAL CRISTIANO'],
			['TAMARA GONZALEZ', 'PCC', 'FRENTE SOCIAL CRISTIANO'],
			['ABRAHAM LARRONDO', 'PCC-IND', 'FRENTE SOCIAL CRISTIANO'],
			['ROBERTO FRANCESCONI', 'PCC-IND', 'FRENTE SOCIAL CRISTIANO'],
			['ESTEBAN AREVALO', 'PI-IND', 'DIGNIDAD AHORA'],
			['PABLO RIVEROS', '', 'PARTIDO ECOLOGISTA VERDE'],
			['SEBASTIAN KEITEL', 'EVO', 'CHILE PODEMOS +'],
			['KATHERINE ECHAIZ', 'EVO-IND', 'CHILE PODEMOS +'],
			['ENRIQUE VAN RYSSELBERGHE', 'UDI', 'CHILE PODEMOS +'],
			['IVAN NORAMBUENA', 'UDI', 'CHILE PODEMOS +'],
			['DANIELA DRESDNER', 'RD', 'APRUEBO DIGNIDAD'],
			['FABIO BOGDANIC', 'CS', 'APRUEBO DIGNIDAD'],
			['OSCAR MENARES', 'PCCH-IND', 'APRUEBO DIGNIDAD'],
			['FRANCISCO CORDOVA', 'FREVS-IND', 'APRUEBO DIGNIDAD'],
			['JOSE PEREZ', 'PR', 'NUEVO PACTO SOCIAL'],
			['JOSE MIGUEL ORTIZ', 'PDC', 'NUEVO PACTO SOCIAL'],
			['GASTON SAAVEDRA', 'PS', 'NUEVO PACTO SOCIAL'],
			['ZAIDA FALCES', '', 'UNION PATRIOTICA'],
			['DARWIN ACUÑA', '', 'PARTIDO DE LA GENTE'],
			['MA. ANGELICA OJEDA', '', 'PARTIDO DE LA GENTE'],
			['SANDRA NEIRA', '', 'PARTIDO DE LA GENTE'],
			['ROBERTO GUZMAN', '', 'PARTIDO DE LA GENTE'],
		],
		centro: [-72.711750, -37.24675138]
	},
	'Circunscripción XI': {
		region: "Región de La Araucanía",
		escanos: 0,
		senadores: [
			['FELIPE KAST', 'EVO', 'CHILE PODEMOS +'],
			['JOSÉ GARCÍA', 'RN', 'CHILE PODEMOS +'],
			['CARMEN GLORIA ARAVENA', 'EVO', 'CHILE PODEMOS +'],
			['FRANCISCO HUENCHUMILLA', 'PDC', 'NUEVO PACTO SOCIAL'],
			['JAIME QUINTANA', 'PPD', 'NUEVO PACTO SOCIAL']
		],
		centro: [-72.434244, -38.651656]
	},
	'Circunscripción XII': {
		region: "Región de Los Ríos",
		escanos: 3,
		candidatos: [
			['OSCAR ALMAZAN', 'PNC-IND', 'INDEPENDIENTES UNIDOS'],
			['ENA VON BAER', 'UDI', 'CHILE PODEMOS +'],
			['MARGOT CARDENAS', 'EVO', 'CHILE PODEMOS +'],
			['PAMELA BOLBARAN', 'PRI', 'CHILE PODEMOS +'],
			['MARIA JOSE GATICA', 'RN', 'CHILE PODEMOS +'],
			['MONICA QUIROZ', 'CS-IND', 'APRUEBO DIGNIDAD'],
			['ROBERTO GIUBERGIA', 'RD', 'APRUEBO DIGNIDAD'],
			['ALFONSO DE URRESTI', 'PS', 'NUEVO PACTO SOCIAL'],
			['FAUMELISA MANQUEPILLAN', 'PS-IND', 'NUEVO PACTO SOCIAL'],
			['SAYONARA YAÑEZ', 'PDC', 'NUEVO PACTO SOCIAL'],
			['IVAN FLORES', 'PDC', 'NUEVO PACTO SOCIAL'],
			['HILDA CERDA', '', 'PARTIDO DE LA GENTE'],
			['CARMEN GARATE', '', 'PARTIDO DE LA GENTE'],
			['GUSTAVO DAVILA', '', 'PARTIDO DE LA GENTE'],
			['LUIS PROBOSTE', '', 'PARTIDO DE LA GENTE'],
		],
		centro: [-72.655402, -39.969903]
	},
	'Circunscripción XIII': {
		region: "Región de Los Lagos",
		escanos: 3,
		candidatos: [
			['NATALIA RAVANALES', 'CU-IND', 'INDEPENDIENTES UNIDOS'],
			['FABIOLA MOYA', 'PNC-IND', 'INDEPENDIENTES UNIDOS'],
			['MAURICIO MARTINEZ', '', 'PARTIDO ECOLOGISTA VERDE'],
			['IVAN MOREIRA', 'UDI', 'CHILE PODEMOS +'],
			['JAVIER HERNANDEZ', 'UDI', 'CHILE PODEMOS +'],
			['ALEJANDRO SANTANA', 'RN', 'CHILE PODEMOS +'],
			['CARLOS KUSCHEL', 'RN', 'CHILE PODEMOS +'],
			['ORIETTA LLAUCA', 'COM-IND', 'APRUEBO DIGNIDAD'],
			['FERNANDA HEDERRA', 'RD', 'APRUEBO DIGNIDAD'],
			['PAOLA VENEGAS', 'PCCH', 'APRUEBO DIGNIDAD'],
			['RABINDRANATH QUINTEROS', 'PS', 'NUEVO PACTO SOCIAL'],
			['FIDEL ESPINOZA', 'PS', 'NUEVO PACTO SOCIAL'],
			['PAMELA BERTIN', 'PDC', 'NUEVO PACTO SOCIAL'],
			['JORGE KEIM', 'PL', 'NUEVO PACTO SOCIAL'],
			['CRISTIAN ALVAREZ', '', 'PARTIDO DE LA GENTE'],
			['CAROLINA FIGUEROA', '', 'PARTIDO DE LA GENTE'],
			['ANGELIZA HENRIQUEZ', '', 'PARTIDO DE LA GENTE'],
			['CHRISTIAN CID', '', 'PARTIDO DE LA GENTE'],
		],
		centro: [-73.0458845, -41.82104942]
	},
	'Circunscripción XIV': {
		region: "Región de Aysén del Gral. Ibañez del Campo",
		escanos: 0,
		senadores: [
			['DAVID SANDOVAL', 'UDI', 'CHILE PODEMOS +'],
			['XIMENA ORDENES', 'IND-PPD', 'NUEVO PACTO SOCIAL']
		],
		centro: [-73.071271, -46.405583]
	},
	'Circunscripción XV': {
		region: "Región de Magallanes y Antártica Chilena",
		escanos: 2,
		candidatos: [
			['JUAN MARQUEZ', 'PH-IND', 'DIGNIDAD AHORA'],
			['JUAN JOSE ARCOS', 'PRI', 'CHILE PODEMOS +'],
			['SANDRA AMAR', 'UDI-IND', 'CHILE PODEMOS +'],
			['ALEJANDRO KUSANOVIC', 'RN-IND', 'CHILE PODEMOS +'],
			['LUZ BERMUDEZ', 'CS', 'APRUEBO DIGNIDAD'],
			['JULIO CONTRERAS', 'CS-IND', 'APRUEBO DIGNIDAD'],
			['NINEN GOMEZ', 'PDC', 'NUEVO PACTO SOCIAL'],
			['MA. DE LOS ANGELES FLORES', 'PS', 'NUEVO PACTO SOCIAL'],
			['JESUS GUTIERREZ', '', 'PARTIDO DE LA GENTE'],
			['CARLA AMTHAUER', '', 'PARTIDO DE LA GENTE'],
			['KARIM BIANCHI', '', 'CANDIDATURA INDEPENDIENTE'],
		],
		centro: [-72.0879324, -53.0710620]
	},
	'Circunscripción XVI': {
		region: "Región de Ñuble",
		escanos: 2,
		candidatos: [
			['SAMUEL JIMENEZ', 'PI-IND', 'DIGNIDAD AHORA'],
			['JUAN RIVAS', '', 'PARTIDO ECOLOGISTA VERDE'],
			['ELIANA SANHUEZA', '', 'PARTIDO ECOLOGISTA VERDE'],
			['JACQUELINE VAN RYSSELBERGHE', 'UDI', 'CHILE PODEMOS +'],
			['GUSTAVO SANHUEZA', 'UDI', 'CHILE PODEMOS +'],
			['VICTORIA ORTIZ', 'PRI', 'CHILE PODEMOS +'],
			['CECILIA PALACIOS', 'PCCH', 'APRUEBO DIGNIDAD'],
			['LORETO CARVAJAL', 'PPD', 'NUEVO PACTO SOCIAL'],
			['JORGE SABAG', 'PDC', 'NUEVO PACTO SOCIAL'],
			['DAVID KELLER', '', 'PARTIDO DE LA GENTE'],
			['KATHERINE QUILODRAN', '', 'PARTIDO DE LA GENTE'],
		],
		centro: [-72.063994, -36.669477]
	}
}

var candidatosDiputados = {
	'Distrito 1': {
		circunscripcion: 'I',
		comunas: [
			'Arica', 'Camarones', 'General Lagos', 'Putre'
		],
		escanos: 3,
		centro: [-69.70373535155903, -18.510431485538362],
		candidatos: [
			['SILVIA MUÑOZ', 'COM', 'APRUEBO DIGNIDAD'],
			['RICARDO SANZANA', 'FREVS', 'APRUEBO DIGNIDAD'],
			['PALOMA TAPIA', 'PC', 'APRUEBO DIGNIDAD'],
			['VLADO MIROSEVIC', 'PL', 'NUEVO PACTO SOCIAL'],
			['LUIS MALLA', 'PL', 'NUEVO PACTO SOCIAL'],
			['LUIS ROCAFULL', 'PS', 'NUEVO PACTO SOCIAL'],
			['GLADYS ACUÑA', 'PS', 'NUEVO PACTO SOCIAL'],
			['DIEGO BULNES', 'EVO-IND', 'CHILE PODEMOS +'],
			['ENRIQUE LEE', 'PRI-IND', 'CHILE PODEMOS +'],
			['DIEGO PACO', 'RN', 'CHILE PODEMOS +'],
			['NINO BALTOLU', 'UDI', 'CHILE PODEMOS +'],
			['MARCELO ZARA', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['KARLA KEPEC', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['FIDEL ARENAS', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
		]
	},
	'Distrito 2': {
		circunscripcion: 'II',
		comunas: [
			'Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camiña', 
			'Colchane', 'Pica', 'Huara'
		],
		escanos: 3,
		centro: [-69.49499511718392, -20.22053608783378],
		candidatos: [
			['CAMILA CASTILLO', 'RD', 'APRUEBO DIGNIDAD'],
			['ALEJANDRA CEBALLOS', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 3': {
		circunscripcion: 'III',
		comunas: [
			'Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 
			'Calama', 'Ollagüe', 'San Pedro de Atacama', 'María Elena', 
			'Tocopilla'
		],
		escanos: 5,
		centro: [-69.3961181640588, -23.493056704968282],
		candidatos: [
			['CATALINA PEREZ', 'RD', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 4': {
		circunscripcion: 'IV',
		comunas: [
			'Chañaral', 'Diego de Almagro', 'Caldera', 'Copiapó', 
			'Tierra Amarilla', 'Alto del Carmen', 'Freirina', 'Huasco', 
			'Vallenar'
		],
		escanos: 5,
		centro: [-70.11022949217806, -27.566315501586885],
		candidatos: [
			['INTI SALAMANCA', 'COM', 'APRUEBO DIGNIDAD'],
			['NATALY MERY', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 5': {
		circunscripcion: 'V',
		comunas: [
			'Canela', 'Illapel', 'Los Vilos', 'Salamanca', 'Andacollo', 
			'Coquimbo', 'La Higuera', 'La Serena', 'Paihuano', 'Vicuña',
			'Combarbalá', 'Monte Patria', 'Punitaqui', 'Ovalle', 'Río Hurtado'
		],
		escanos: 7,
		centro: [-71.01110839842454, -30.71543900989664],
		candidatos: [
			['JOCELYN BURGOS', 'COM', 'APRUEBO DIGNIDAD'],
			['ALEX GARRIDO', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 6': {
		circunscripcion: 'VI',
		comunas: [
			'Panquehue', 'Los Andes', 'Rinconada', 'San Esteban', 'Cabildo', 
			'La Ligua', 'Papudo', 'Petorca', 'Zapallar', 'Hijuelas', 
			'La Cruz', 'Nogales', 'Quillota', 'Catemu', 'Llaillay', 
			'Calera', 'Putaendo', 'San Felipe',  'Santa María', 
			'Puchuncaví', 'Quintero', 'Calle Larga', 'Olmué', 'Quilpué', 
			'Villa Alemana', 'Limache'
		],
		escanos: 8,
		centro: [-70.92250854104549, -32.58373832551929],
		candidatos: [
			['LORENA DONAIRE', 'RD', 'APRUEBO DIGNIDAD'],
			['NICOLE FERNANDEZ', 'COM', 'APRUEBO DIGNIDAD'],
			['MATIAS GAZMURI', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 7': {
		circunscripcion: 'VI',
		comunas: [
			'Algarrobo', 'Cartagena', 'El Tabo', 'San Antonio', 
			'Santo Domingo', 'El Quisco', 'Casablanca', 'Concón', 
			'Valparaíso', 'Viña del Mar', 'Isla de Pascua', 'Juan Fernández'
		],
		escanos: 8,
		centro: [-71.58598921912926, -33.48096895603671],
		zoom: 7,
		candidatos: [
			['JORGE BRITO', 'RD', 'APRUEBO DIGNIDAD'],
			['MABEL ZUÑIGA', 'RD-IND', 'APRUEBO DIGNIDAD'],
			['CAMILA ROJAS', 'COM', 'APRUEBO DIGNIDAD'],
			['CONSTANZA VALDES', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 8': {
		circunscripcion: 'VII',
		comunas: [
			'Pudahuel', 'Colina', 'Lampa', 'Tiltil', 'Cerrillos', 
			'Quilicura', 'Maipú', 'Estación Central'
		],
		escanos: 8,
		centro: [-70.77914336939955, -33.19964863646777],
		zoom: 8,
		candidatos: [
			['ROCIO FAUNDEZ', 'RD', 'APRUEBO DIGNIDAD'],
			['CLAUDIA MIX', 'COM', 'APRUEBO DIGNIDAD'],
			['EDUARDO ACUÑA', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 9': {
		circunscripcion: 'VII',
		comunas: [
			'Independencia', 'Lo Prado', 'Cerro Navia', 'Conchalí', 
			'Quinta Normal', 'Recoleta', 'Renca', 'Huechuraba'
		],
		escanos: 7,
		centro: [-70.68093246177415, -33.39535142378441],
		zoom: 8,
		candidatos: [
			['MAITE ORSINI', 'RD', 'APRUEBO DIGNIDAD', 'https://twitter.com/MaiteOrsini'],
			['ANDRES GIORDANO', 'RD-IND', 'APRUEBO DIGNIDAD', 'https://twitter.com/AndresGiordanoS'],
			['JUAN PABLO SANHUEZA', 'COM', 'APRUEBO DIGNIDAD', 'https://twitter.com/JPSanhuezaT'],
			['VARINIA DIAZ', 'COM', 'APRUEBO DIGNIDAD', 'https://twitter.com/vari_diaz'],
			['RODRIGO MALLEA', '', 'APRUEBO DIGNIDAD', 'https://twitter.com/RodrigoMalleaC']
		]
	},
	'Distrito 10': {
		circunscripcion: 'VII',
		comunas: [
			'San Joaquín', 'Providencia', 'Santiago',
			'La Granja', 'Macul', 'Ñuñoa'
		],
		escanos: 8,
		centro: [-70.62844138107022, -33.45852451058285],
		zoom: 8,
		candidatos: [
			['EMILIA SCHNEIDER', 'COM', 'APRUEBO DIGNIDAD'],
			['RENE NARANJO', 'COM', 'APRUEBO DIGNIDAD'],
			['GONZALO WINTER', 'CS', 'APRUEBO DIGNIDAD'],
			['ALONDRA ARELLANO', 'CS', 'APRUEBO DIGNIDAD'],
			['ANTONIA ORELLANA', 'CS', 'APRUEBO DIGNIDAD'],
			['NICOLE MARTINEZ', 'RD', 'APRUEBO DIGNIDAD'],
			['RAMON GRIFFERO', 'RD', 'APRUEBO DIGNIDAD'],
			['LORENA FRIES', 'UNIR', 'APRUEBO DIGNIDAD'],
			['HELIA MOLINA', 'PPD', 'NUEVO PACTO SOCIAL'],
			['YOLANDA PIZARRO', 'PPD', 'NUEVO PACTO SOCIAL'],
			['GABRIELA CARRERA', 'PS', 'NUEVO PACTO SOCIAL'],
			['CRISTIAN ARANGUIZ', 'PS', 'NUEVO PACTO SOCIAL'],
			['CLAUDIO ARRIAGADA', 'PL', 'NUEVO PACTO SOCIAL'],
			['MARIA JOSE CUMPLIDO', 'PL', 'NUEVO PACTO SOCIAL'],
			['JACQUELINE SAINTARD', 'PDC', 'NUEVO PACTO SOCIAL'],
			['ROSA VALENZUELA', 'PDC', 'NUEVO PACTO SOCIAL'],
			['MIRIAM SEÑORET', 'PR', 'NUEVO PACTO SOCIAL'],
			['SEBASTIAN TORREALBA', 'RN', 'CHILE PODEMOS +'],
			['ALAN ROLDAN', 'RN-IND', 'CHILE PODEMOS +'],
			['MARIA LUISA CORDERO', 'RN-IND', 'CHILE PODEMOS +'],
			['JORGE ALESSANDRI', 'UDI', 'CHILE PODEMOS +'],
			['FRANCISCO SILVA', 'UDI-IND', 'CHILE PODEMOS +'],
			['CARLOS CISTERNA', 'UDI-IND', 'CHILE PODEMOS +'],
			['PABLO KAST', 'EVO', 'CHILE PODEMOS +'],
			['HECTOR RODRIGUEZ', 'EVO', 'CHILE PODEMOS +'],
			['SAVKA POLLAK', 'EVO-IND', 'CHILE PODEMOS +'],
			['JOHANNES KAISER', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['MARIA PIA MARINOVIC', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['SONJA DEL RIO', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['CAMILO CAMMAS', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['CARLOS TRAUB', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['JOSE MIGUEL VALLEJO', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['CAROLINA GARATE', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['LESLIE MIRANDA', 'PLR', 'FRENTE SOCIAL CRISTIANO'],
			['ISABEL CAYUL', 'PH', 'DIGNIDAD AHORA'],
			['HELMUT KRAMER', 'PH', 'DIGNIDAD AHORA'],
			['PAULINA BRAVO', 'PH', 'DIGNIDAD AHORA'],
			['ALFREDO BRUNA', 'PH', 'DIGNIDAD AHORA'],
			['JOSE OSORIO', 'PI', 'DIGNIDAD AHORA'],
			['JUAN PLAZA', 'PI', 'DIGNIDAD AHORA'],
			['MARCELA GONZALEZ', 'PI', 'DIGNIDAD AHORA'],
			['ROBERTO CAMPOS', 'PI', 'DIGNIDAD AHORA'],
			['SEBASTIAN MILOS', 'PI-IND', 'DIGNIDAD AHORA'],
		]
	},
	'Distrito 11': {
		circunscripcion: 'VII',
		comunas: [
			'Lo Barnechea', 'Peñalolén', 'Vitacura', 'La Reina', 'Las Condes'
		],
		escanos: 6,
		centro: [-70.3618753880263, -33.30744584999051],
		zoom: 8,
		candidatos: [
			['MIGUEL CONCHA', 'RD', 'APRUEBO DIGNIDAD'],
			['DANIELA LAVARELLO', 'RD', 'APRUEBO DIGNIDAD'],
			['TOMAS HIRSCH', 'AH', 'APRUEBO DIGNIDAD'],
			['MARCELA CUBILLOS', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 12': {
		circunscripcion: 'VII',
		comunas: [
			'La Florida', 'Pirque', 'Puente Alto',
			'San José de Maipo', 'La Pintana'
		],
		escanos: 7,
		centro: [-70.1940408866393, -33.69963488061261],
		zoom: 8,
		candidatos: [
			['MIGUEL CRISPI', 'RD', 'APRUEBO DIGNIDAD'],
			['ANA MARIA GAZMURI', 'COM', 'APRUEBO DIGNIDAD'],
			['ARIEL MATELUNA', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 13': {
		circunscripcion: 'VII',
		comunas: [
			'Lo Espejo', 'Pedro Aguirre Cerda', 'San Ramón',
			'El Bosque', 'San Miguel', 'La Cisterna'
		],
		escanos: 5,
		centro: [-70.6752279472422, -33.53483669545126],
		zoom: 8,
		candidatos: [
			['ANTONIO SAAVEDRA', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 14': {
		circunscripcion: 'VII',
		comunas: [
			'María Pinto', 'San Pedro', 'El Monte', 'Isla de Maipo',
			'Talagante', 'Buin',  'Paine', 'San Bernardo', 'Alhué',
			'Curacaví', 'Calera de Tango', 'Melipilla',
			'Padre Hurtado', 'Peñaflor'
		],
		escanos: 6,
		centro: [-71.12280419301294, -33.76095846657964],
		zoom: 8,
		candidatos: [
			['MARCELA SANDOVAL', 'RD', 'APRUEBO DIGNIDAD'],
			['CAMILA MUSANTE', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 15': {
		circunscripcion: 'VIII',
		comunas: [
			'Codegua', 'Coinco', 'Coltauco', 'Machalí', 'Malloa',
			'Quinta de Tilcoco', 'Rancagua', 'Rengo', 'Requínoa',
			'Mostazal', 'Doñihue', 'Olivar', 'Graneros'
		],
		escanos: 5,
		centro: [-70.59922392354582, -34.2983081342263],
		zoom: 7,
		candidatos: [
		]
	},
	'Distrito 16': {
		circunscripcion: 'VIII',
		comunas: [
			'Las Cabras', 'Peumo', 'Pichidegua', 'San Vicente',
  			'La Estrella', 'Litueche', 'Marchigüe', 'Navidad',
  			'Paredones', 'Pichilemu', 'Chépica', 'Chimbarongo',
  			'Lolol', 'Nancagua', 'Palmilla', 'Peralillo',
  			'Placilla', 'Pumanque', 'San Fernando', 'Santa Cruz'
		],
		escanos: 4,
		centro: [-71.47017611778733, -34.54216180669156],
		candidatos: [
		]
	},
	'Distrito 17': {
		circunscripcion: 'IX',
		comunas: [
			'Curicó', 'Hualañé', 'Licantén', 'Molina', 'Rauco',
  			'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquén',
  			'Constitución', 'Curepto', 'Empedrado', 'Maule',
  			'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente',
  			'San Rafael', 'Talca'
		],
		escanos: 7,
		centro: [-71.37913735791801, -35.255633666956406],
		candidatos: [
			['FELIPE VALDES', 'RD', 'APRUEBO DIGNIDAD'],
			['CLAUDIA VASQUEZ', 'RD', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 18': {
		circunscripcion: 'IX',
		comunas: [
			'Chanco', 'Pelluhue', 'Cauquenes', 'Colbún', 'Linares',
  			'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre',
  			'Yerbas Buenas'
		],
		escanos: 4,
		centro: [-71.70030187188803, -35.93831417368988],
		candidatos: [
			['CONSUELO VELOSO', 'RD', 'APRUEBO DIGNIDAD'],
			['FRANCISCO PINOCHET', 'RD', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 19': {
		circunscripcion: 'XVI',
		comunas: [
			'Bulnes', 'Chillán', 'Chillán Viejo', 'Cobquecura', 'Coelemu',
  			'El Carmen', 'Ninhue', 'Ñiquén', 'Pemuco', 'Pinto', 'Portezuelo',
  			'Quillón', 'Quirihue', 'Ranquil', 'San Carlos', 'San Fabián',
  			'San Ignacio', 'San Nicolás', 'Treguaco', 'Yungay', 'Coihueco'
		],
		escanos: 5,
		centro: [-72.06399437007343, -36.66947650083093],
		candidatos: [
			['SUSANA YAÑEZ', 'RD-IND', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 20': {
		circunscripcion: 'X',
		comunas: [
			'Concepción', 'Coronel', 'Florida', 'Hualpén', 'Hualqui',
  			'Penco', 'Santa Juana', 'Talcahuano', 'Tomé', 'Chiguayante',
  			'San Pedro de la Paz'
		],
		escanos: 8,
		centro: [-72.9971416586958, -36.84371923974503],
		zoom: 7,
		candidatos: [
			['FELIPE RODRIGUEZ', 'RD', 'APRUEBO DIGNIDAD'],
			['ALEXANDRA MACHUCA', 'RD-IND', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 21': {
		circunscripcion: 'X',
		comunas: [
			'Mulchén', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco',
  			'San Rosendo', 'Santa Bárbara', 'Tucapel', 'Yumbel',
  			'Lota', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue',
  			'Lebu', 'Los Alamos', 'Tirúa', 'Alto Biobío', 'Antuco',
  			'Cabrero', 'Laja', 'Los Angeles'
		],
		escanos: 5,
		centro: [-72.30929325081945, -37.472525119748916],
		candidatos: [
			['CRISTIAN MARTINEZ', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 22': {
		circunscripcion: 'XI',
		comunas: [
			'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Purén',
  			'Renaico', 'Traiguén', 'Victoria', 'Galvarino', 'Lautaro',
  			'Melipeuco', 'Perquenco', 'Vilcún',  'Angol', 'Collipulli',
  			'Curacautín'
		],
		escanos: 4,
		centro: [-72.26883157976215, -38.3047520348299],
		candidatos: [
			['GABRIELA ESPAÑA', 'RD-IND', 'APRUEBO DIGNIDAD'],
			['MAURICIO LEPIN', 'RD-IND', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 23': {
		circunscripcion: 'XI',
		comunas: [
			'Carahue', 'Cholchol', 'Cunco', 'Curarrehue',  'Freire',
			'Gorbea', 'Loncoche', 'Nueva Imperial', 'Padre Las Casas',
  			'Pitrufquén', 'Pucón', 'Saavedra', 'Temuco', 'Teodoro Schmidt',
  			'Toltén', 'Villarrica'
		],
		escanos: 7,
		centro: [-72.52171702383288, -39.10595665934183],
		candidatos: [
			['ERICKA ÑANCO', 'RD', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 24': {
		circunscripcion: 'XII',
		comunas: [
			'Corral', 'Futrono', 'La Unión', 'Lago Ranco', 'Lanco',
  			'Los Lagos', 'Máfil', 'Mariquina', 'Paillaco', 'Panguipulli',
  			'Río Bueno', 'Valdivia'
  		],
		escanos: 5,
		centro: [-72.65540224735128, -39.96990292882659],
		candidatos: [
			['VANESSA HUAIQUIMILLA', 'RD-IND', 'APRUEBO DIGNIDAD'],
			['SANDRA CHEUQUEPAN', 'RD', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 25': {
		circunscripcion: 'XIII',
		comunas: [
			'Fresia', 'Frutillar', 'Llanquihue', 'Los Muermos', 
			'Puerto Varas', 'Osorno', 'Puerto Octay', 'Purranque', 
			'Puyehue', 'Río Negro', 'San Juan de la Costa', 'San Pablo'
  		],
		escanos: 4,
		centro: [-72.93109280280322, -40.97569768791112],
		candidatos: [
			['DANIELA CARVACHO', 'RD', 'APRUEBO DIGNIDAD'],
			['GERMAN CARTES', 'RD', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 26': {
		circunscripcion: 'XIII',
		comunas: [
			'Castro', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldón', 
			'Queilén', 'Quellón', 'Quemchi', 'Quinchao', 'Calbuco', 
			'Cochamó', 'Maullín', 'Puerto Montt', 'Chaitén', 'Futaleufú',
			'Hualaihué', 'Palena', 'Ancud'
  		],
		escanos: 5,
		centro: [-73.52302249271895, -42.5992149053997],
		candidatos: [
			['JAIME SAEZ', 'RD', 'APRUEBO DIGNIDAD'],
			['MARIELA NUÑEZ', 'RD-IND', 'APRUEBO DIGNIDAD'],
			['MARIA CRISTINA BUSTOS', 'COM', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 27': {
		circunscripcion: 'XIV',
		comunas: [
			"O'Higgins", 'Río Ibáñez', 'Chile Chico', 'Lago Verde', 
			'Tortel', 'Cochrane', 'Guaitecas', 'Coyhaique', 'Aysén', 'Cisnes'
  		],
		escanos: 3,
		centro: [-73.07127054815874, -46.40558331578629],
		candidatos: [
			['JULIO ÑANCO', 'RD', 'APRUEBO DIGNIDAD'],
			['MARCELA MOLINA', 'RD', 'APRUEBO DIGNIDAD'],
		]
	},
	'Distrito 28': {
		circunscripcion: 'XV',
		comunas: [
			'Laguna Blanca', 'San Gregorio', 'Timaukel', 'Porvenir', 
			'Primavera', 'Cabo de Hornos', 'Río Verde', 'Torres del Paine', 
			'Natales', 'Punta Arenas'
  		],
		escanos: 3,
		centro: [-72.08793245903553, -53.071062001603366],
		candidatos: [
		]
	}
}

var region2circunscripcion = {};
for (var circ in candidatosSenadores) region2circunscripcion[candidatosSenadores[circ].region] = circ;


function clickCircunscripcion(e) {
	var circName = e.target.value;
	if (Object.keys(candidatosSenadores).includes(circName)) {
		var zoom = 6;
		if (Object.keys(candidatosSenadores[circName]).includes('zoom')) zoom = candidatosSenadores[circName]['zoom'];
	    map.flyTo({
			center: candidatosSenadores[circName].centro,
			zoom: zoom
		});
		rellenarColumnaCircunscripcion(circName);
	} else {
		divSenCand.innerHTML = "";
	}
	divDipCand.innerHTML = "";
	document.getElementById('select-distrito').value = 'Selecciona un Distrito';
}
function clickDistrito(e) {
	var distName = e.target.value;
	if (Object.keys(candidatosDiputados).includes(distName) && Object.keys(candidatosDiputados[distName]).includes('centro')) {
		var zoom = 6;
		if (Object.keys(candidatosDiputados[distName]).includes('zoom')) zoom = candidatosDiputados[distName]['zoom'];
	    map.flyTo({
			center: candidatosDiputados[distName].centro,
			zoom: zoom
		});
		rellenarColumnaDistrito(distName);
	} else {
		divDipCand.innerHTML = "";
	}
}
function rellenarColumnaCircunscripcion(circName, show=true) {
	divSenCand.innerHTML = '<span>'+candidatosSenadores[circName].region+'</span><br>';
	if (candidatosSenadores[circName].escanos>0) {
		divSenCand.innerHTML +='<span> Escaños a elegir: '+candidatosSenadores[circName].escanos+'</span>';
		var table = crearTabla(candidatosSenadores[circName].candidatos,candidatosSenadores[circName].escanos);
		divSenCand.appendChild(table);
	} else {
		divSenCand.innerHTML +='<p> Sin elección de senadores/as este año</p><br><p>Senadores 2018-2024</p>';
		var table = crearTabla(candidatosSenadores[circName].senadores,candidatosSenadores[circName].escanos);
		divSenCand.appendChild(table);
	}
	if (show) {

		if (map.getLayer('region-seleccionada')) map.removeLayer('region-seleccionada');
		if (map.getLayer('regiones')) map.removeLayer('regiones');
		if (map.getLayer('distrito-seleccionado')) map.removeLayer('distrito-seleccionado');
		if (map.getLayer('distritos')) map.removeLayer('distritos');

	    map.addLayer({
	        'id': 'region-seleccionada',
	        'type': 'fill',
	        'source': 'regiones-data',
	        'source-layer': 'chiles-regiones-bfu10d',
	        'filter': ['==', ['get', 'REGION'], candidatosSenadores[circName].region],
	        'paint': {
	            'fill-color': colores['gris'],
	            'fill-opacity': 0.8
	        },
	    }, 'zona-indeterminada');
	    map.addLayer({
	        'id': 'regiones',
	        'type': 'fill',
	        'source': 'regiones-data',
	        'source-layer': 'chiles-regiones-bfu10d',
	        'filter': ['!', ['==', ['get', 'REGION'], 'Zona sin demarcar']],
	        'paint': {
	            'fill-color': colores['gris'],
	            'fill-opacity': 0.2
	        },
	    }, 'region-seleccionada');
	    map.on('click', 'regiones', clickMapaRegion);
		map.on('mousemove', 'regiones', function () {
		    map.getCanvas().style.cursor = 'pointer';
		});
		map.on('mouseleave', 'regiones', function () {
		    map.getCanvas().style.cursor = '';
		});	
	}
}
function rellenarColumnaDistrito(distName, show=true) {
	divDipCand.innerHTML = '';
	//divDipCand.innerHTML = '<span>'+candidatosDiputados[distName].region+'</span><br>';
	if (Object.keys(candidatosDiputados[distName]).includes('comunas')) {
		var comunas = candidatosDiputados[distName]['comunas'][0];
		for (var i = 1; i < candidatosDiputados[distName]['comunas'].length; i++) {
			comunas += ', '+candidatosDiputados[distName]['comunas'][i]
		}
		divDipCand.innerHTML += '<p style="margin-bottom:0">Comunas: '+comunas+'</p><br>'
	}
	if (Object.keys(candidatosDiputados[distName]).includes('escanos')) {
		divDipCand.innerHTML +='<span> Escaños a elegir: '+candidatosDiputados[distName].escanos+'</span>';
	}
	var table = crearTabla(candidatosDiputados[distName].candidatos);
	divDipCand.appendChild(table);


	if (Object.keys(candidatosDiputados[distName]).includes('circunscripcion')) {
		var circ = candidatosDiputados[distName]['circunscripcion'];
		rellenarColumnaCircunscripcion('Circunscripción '+circ, false);
		document.getElementById('select-circunscripcion').value = 'Circunscripción '+circ;
	}

	if (show) {
		
		if (map.getLayer('region-seleccionada')) map.removeLayer('region-seleccionada');
		if (map.getLayer('regiones')) map.removeLayer('regiones');
		if (map.getLayer('distrito-seleccionado')) map.removeLayer('distrito-seleccionado');
		if (map.getLayer('distritos')) map.removeLayer('distritos');

	    map.addLayer({
	        'id': 'distrito-seleccionado',
	        'type': 'fill',
	        'source': 'distritos-data',
	        'source-layer': 'chile-distritos-9h2qej',
	        'filter': ['==', ['get', 'DISTRITO'], distName.substring(9)],
	        'paint': {
	            'fill-color': colores['gris'],
	            'fill-opacity': 0.8
	        },
	    }, 'zona-indeterminada');
		map.addLayer({
	        'id': 'distritos',
	        'type': 'fill',
	        'source': 'distritos-data',
	        'source-layer': 'chile-distritos-9h2qej',
	        'filter': ['!', ['==', ['get', 'REGION'], 'Zona sin demarcar']],
	        'paint': {
	            'fill-color': colores['gris'],
	            'fill-opacity': 0.2
	        },
	    }, 'distrito-seleccionado');
	    map.on('click', 'distritos', clickMapaDistrito);
		map.on('mousemove', 'distritos', function () {
		    map.getCanvas().style.cursor = 'pointer';
		});
		map.on('mouseleave', 'distritos', function () {
		    map.getCanvas().style.cursor = '';
		});
	}
}

function clickMapaRegion(e) {
	//console.log(e.features[0].properties.REGION);
	var region = e.features[0].properties.REGION;
	if (Object.keys(region2circunscripcion).includes(region)) {
		var circ = region2circunscripcion[region];
		rellenarColumnaCircunscripcion(circ);
		document.getElementById('select-circunscripcion').value = circ;
	}
}
function clickMapaDistrito(e) {
	//console.log(e.features[0].properties.DISTRITO);
	var distrito = e.features[0].properties.DISTRITO;
	if (Object.keys(candidatosDiputados).includes('Distrito '+distrito)) {
		rellenarColumnaDistrito('Distrito '+distrito);
		document.getElementById('select-distrito').value = 'Distrito '+distrito;
	}
}

function crearTabla(candidatos, escanos=1) {
	var table = document.createElement('table');
	table.style.width = '100%';
	table.style.marginTop = '5%';
	table.style.borderCollapse = 'collapse';
	if (escanos>0) table.style.border = 'solid 1px';
	else table.style.border = 'solid 0px';
	var lista = "";
	for (var i = 0; i < candidatos.length; i++) {
		if (candidatos[i][2]!=lista) {
			var tr = document.createElement('tr');
			tr.style.height = '8px';
			table.appendChild(tr);
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			td.style.paddingLeft = '2px';
			//td.colSpan = 2;
			var span = document.createElement('span');
			span.innerHTML = candidatos[i][2];
			lista = candidatos[i][2];
			td.appendChild(span);
			tr.appendChild(td);
			table.appendChild(tr);	
		}

		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.style.paddingLeft = '2px';
		var span = document.createElement('span');
		span.className = 'legend-key';
		span.style.backgroundColor = coloresListas[candidatos[i][2]];
		td.appendChild(span);
		if (candidatos[i].length<4) td.innerHTML += '<span style="font-weight:bold">'+candidatos[i][0]+'</span>';
		else td.innerHTML += '<a target="_blank" href="'+candidatos[i][3]+'"><span style="font-weight:bold">'+candidatos[i][0]+'</span></a>';
		if (candidatos[i][1]!='') td.innerHTML += ' <span style="font-size:0.8em">('+candidatos[i][1]+')</span>';
		tr.appendChild(td);
		/*var td = document.createElement('td');
		var span = document.createElement('span');
		span.innerHTML = candidatos[i][1];
		td.appendChild(span);
		tr.appendChild(td);*/
		table.appendChild(tr);
	}
	return table;
}