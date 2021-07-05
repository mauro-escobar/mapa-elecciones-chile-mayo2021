var coloresListasDiputados = {
	'Chile Vamos': colores['azul'],
	'Alianza': colores['azul'],
	'Frente Amplio': colores['verde-agua'],
	'La Fuerza de la Mayoría': colores['rojo-oscuro'],
	'Nueva Mayoría': colores['rojo-oscuro'],
	'Coalición Regionalista Verde': colores['verde'],
	'Convergencia Democrática': colores['marron'],
	'Candidatura Independiente': colores['gris'],
	'Por Todo Chile': colores['rosado'],
};

function addSourceDiputados(map) {
	map.addSource('diputados-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.2rvzbjjd'
        }
    );
};

function addSourceSenadores(map) {
	map.addSource('senadores-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.3iaz61s3',
        }
    );
};

function addLayerDiputados(map) {
	map.addLayer({
        'id': 'diputados',
        'type': 'fill',
        'source': 'diputados-data',
        'source-layer': 'diputados2017-11-1coabk',
        'filter': ['has', '2017-11_Dip1_Nom'],
        'paint': {
            'fill-color': [
				'match',
				['get', '2017-11_Dip1_Lis'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['rosado'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2017-11_Dip1_PctL'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'distritos-outline');
};

function addLayerDiputadosMarkers(map) {
	map.addLayer({
    	'id': 'dip-markers',
		'source': 'diputados-data',
        'source-layer': 'diputados2017-11-1coabk',
		'type': 'circle',
		'filter': ['has', 'LISTA'],
		'paint' : {
			'circle-color': [
				'match',
				['get', 'LISTA'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Convergencia Progresista', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['rosado'],
				'Nuevo Trato', colores['amarillo'],
				'Chile Digno', colores['rojo'],
				'Acción Republicana', colores['azul-marino'],
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
    map.addLayer({
    	'id':'dip-markers-lines',
		'source': 'diputados-data',
        'source-layer': 'diputados2017-11-1coabk',
		'type': 'line',
		'filter': ['has', 'UNION'],
		'paint' : {
			'line-color': colores['negro'],
			'line-width': 1
		}
    }, 'dip-markers');
};

function addLayerSenadores(map) {
    map.addLayer({
        'id': 'senadores-periodo-b',
        'type': 'fill',
        'source': 'senadores-data',
        'source-layer': 'senadores2017-11-7fgmkg',
        'filter': ['has', '2017-11_Sen1_Nom'],
        'paint': {
            'fill-color': [
				'match',
				['get', '2017-11_Sen1_Lis'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['rosado'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2017-11_Sen1_PctL'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('senadores-periodo-b', 'visibility', 'none');
    map.addLayer({
        'id': 'senadores-periodo-a',
        'type': 'fill',
        'source': 'senadores-data',
        'source-layer': 'senadores2017-11-7fgmkg',
        'filter': ['has', '2013-11_Sen1_Nom'],
        'paint': {
            'fill-color': [
				'match',
				['get', '2013-11_Sen1_Lis'],
				'Alianza', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'Nueva Mayoría', colores['rojo-oscuro'],
				'Coalición Regionalista Verde', colores['verde'],
				'Convergencia Democrática', colores['marron'],
				'Por Todo Chile', colores['rosado'],
				colores['gris']
			],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', '2013-11_Sen1_PctL'],
            	10, 0.5,
            	45, 1,
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('senadores-periodo-a', 'visibility', 'none');	
};

function addLayerSenadoresMarkers(map) {
    map.addLayer({
    	'id': 'sen-markers',
		'source': 'senadores-data',
        'source-layer': 'senadores2017-11-7fgmkg',
		'type': 'circle',
		'filter': ['has', 'LISTA'],
		'paint' : {
			'circle-color': [
				'match',
				['get', 'PERIODO'],
				'2014-2022', colores['negro'],
				[
					'match',
					['get', 'LISTA'],
					'Chile Vamos', colores['azul'],
					'Frente Amplio', colores['verde-agua'],
					'La Fuerza de la Mayoría', colores['rojo-oscuro'],
					'Convergencia Democrática', colores['marron'],
					'Progresistas', colores['rosado'],
					colores['gris']
				]
			],
			'circle-radius': [
				'interpolate',
				['linear'], ['zoom'],
				6, [
					'match',
					['get', 'PERIODO'],
					'2014-2022', 5,
					12
				],
				10, [
					'match',
					['get', 'PERIODO'],
					'2014-2022', 15,
					22
				]
			],
			'circle-stroke-width': [
				'match',
				['get', 'PERIODO'],
				'2014-2022', 7,
				0
			],
			'circle-stroke-color': [
				'match',
				['get', 'LISTA'],
				'Chile Vamos', colores['azul'],
				'Frente Amplio', colores['verde-agua'],
				'La Fuerza de la Mayoría', colores['rojo-oscuro'],
				'Convergencia Democrática', colores['marron'],
				'Progresistas', colores['rosado'],
				colores['gris']
			]
		}
    }, 'dip-markers-lines');
    map.setLayoutProperty('sen-markers', 'visibility', 'none');
};  

function mostrarDiputados() {
	clean()
	map.setLayoutProperty('distritos-outline', 'visibility', 'visible');
	map.setLayoutProperty('diputados', 'visibility', 'visible');
	map.setLayoutProperty('dip-markers', 'visibility', 'visible');
	map.setLayoutProperty('dip-markers-lines', 'visibility', 'visible');
	document.getElementById('a-diputados').style.color = 'black';

	var parl_listas = {
		'Chile Vamos': {
			'seats': 68,
			'color': colores['azul'],
			'parties': [['RN', 32], ['UDI', 27], ['EVO', 6], ['IND', 3]]
		},
		'La Fuerza de la Mayoría': {
			'seats': 30,
			'color': colores['rojo-oscuro'],
			'parties': [['PS', 17], ['PPD', 8], ['PRSD', 5]]
		},
		'Frente Amplio': {
			'seats': 13,
			'color': colores['verde-agua'],
			'parties': [['RD', 6], ['CS', 4], ['COM', 2], ['UNIR', 1]]
		},
		'Chile Digno': {
			'seats': 13,
			'color': colores['rojo'],
			'parties': [['PCCH', 9], ['FRVS', 3], ['AH', 1]]
		},
		'Convergencia Democrática': {
			'seats': 12,
			'color': colores['marron'],
			'parties': [['PDC', 12]]
		},
		'Nuevo Trato': {
			'seats': 4,
			'color': colores['amarillo'],
			'parties': [['PL', 2], ['IND', 2]]
		},
		'Acción Republicana': {
			'seats': 4,
			'color': colores['azul-marino'],
			'parties': [['PLR', 1], ['IND', 3]]
		},
		'Fuera de Pacto': {
			'seats': 11,
			'color': colores['gris'],
			'parties': [['PH', 1], ['PEV', 1], ['IND', 9]]
 		}
	}


	var parliament = {
		'Chile Vamos (UDI)': {
			'seats': 27,
			'color': '#2473ac',//colores['azul'],
			'names': [
				["BALTOLU RASERA NINO (UDI)", false],
				["TRISOTTI MARTINEZ RENZO (UDI)", false],
				["NOMAN GARRIDO NICOLAS (UDI)", false],
				["GAHONA SALAZAR SERGIO (UDI)", false],
				["FUENZALIDA COBO JUAN MANUEL (UDI)", false],
				["HOFFMANN OPAZO MARIA JOSE (UDI)", false],
				["URRUTIA SOTO OSVALDO (UDI)", false],
				["LAVIN LEON JOAQUIN (UDI)", false],
				["LABBE MARTINEZ CRISTIAN (UDI)", false],
				["ALESSANDRI VERGARA JORGE (UDI)", false],
				["RAMIREZ DIEZ GUILLERMO (UDI)", false],
				["MOREIRA BARROS CRISTHIAN (UDI)", false],
				["CARTER FERNANDEZ ALVARO (UDI)", false],
				["COLOMA ALAMOS JUAN ANTONIO (UDI)", false],
				["CUEVAS CONTRERAS NORA (UDI)", false],
				["MACAYA DANUS JAVIER (UDI)", false],
				["MASFERRER VIDAL JUAN MANUEL (UDI)", false],
				["BARROS MONTERO RAMON (UDI)", false],
				["MORALES MUÑOZ CELSO (UDI)", false],
				["ALVAREZ-SALAMANCA RAMIREZ PEDRO PABLO (UDI)", false],
				["RENTERIA MOLLER ROLANDO (UDI)", false],
				["SANHUEZA DUEÑAS GUSTAVO (UDI)", false],
				["VAN RYSSELBERGHE HERRERA ENRIQUE (UDI)", false],
				["BOBADILLA MUÑOZ SERGIO (UDI)", false],
				["NORAMBUENA FARIAS IVAN (UDI)", false],
				["VON MUHLENBROCK ZAMORA GASTON (UDI)", false],
				["HERNANDEZ HERNANDEZ JAVIER (UDI)", false]
			]
		},
		'Chile Vamos (EVO)': {
			'seats': 6,
			'color': '#4f93ce', //colores['azul'],
			'names': [
				["KAST SOMMERHOFF PABLO (IND-EVO)", false],
				["KEITEL BIANCHI SEBASTIAN (IND-EVO)", false],
				["CRUZ-COKE CARVALLO LUCIANO (EVO)", false],
				["UNDURRAGA GAZITUA FRANCISCO (EVO)", false],
				["MOLINA MAGOFKE ANDRES (EVO)", false],
				["ALVAREZ RAMIREZ SEBASTIAN (EVO)", false]
			]
		},
		'Chile Vamos (IND)': {
			'seats': 3,
			'color': '#6496c8',//colores['azul'],
			'names': [
				["TRONCOSO HELLMAN VIRGINIA (IND)", false],
				["BERGER FETT BERNARDO (IND)", false],
				["AMAR MANCILLA SANDRA (IND)", false]
			]
		},
		'Chile Vamos (RN)': {
			'seats': 32,
			'color': '#3b83bd', //colores['azul'],
			'names': [
				["GALLEGUILLOS CASTILLO RAMON (RN)", false],
				["NUÑEZ URRUTIA PAULINA (RN)", false],
				["CASTRO BASCUÑAN JOSE MIGUEL (RN)", false],
				["CID VERSALOVIC SOFIA (RN)", false],
				["EGUIGUREN CORREA FRANCISCO (RN)", false],
				["LONGTON HERRERA ANDRES (RN)", false],
				["PARDO SAINZ LUIS (RN)", false],
				["FLORES OPORTO CAMILA (RN)", false],
				["CELIS MONTT ANDRES (RN)", false],
				["MORAN BAHAMONDES CAMILO (RN)", false],
				["OLIVERA DE LA FUENTE ERIKA (IND-RN)", false],
				["DURAN ESPINOZA JORGE (RN)", false],
				["FUENTES BARROS TOMAS (RN)", false],
				["TORREALBA ALVARADO SEBASTIAN (RN)", false],
				["FUENZALIDA FIGUEROA GONZALO (RN)", false],
				["DEL REAL MIHOVILOVIC CATALINA (RN)", false],
				["LUCK URBAN KARIN (RN)", false],
				["OSSANDON IRARRAZABAL XIMENA (RN)", false],
				["PEREZ LAHSEN LEOPOLDO (RN)", false],
				["DURAN SALINAS EDUARDO (RN)", false],
				["SCHALPER SEPULVEDA DIEGO (IND-RN)", false],
				["REY MARTINEZ HUGO (RN)", false],
				["SAUERBAUM MUÑOZ FRANK (RN)", false],
				["MUÑOZ GONZALEZ FRANCESCA (RN)", false],
				["ROMERO SAEZ LEONIDAS (RN)", false],
				["PAULSEN KEHR DIEGO (RN)", false],
				["RATHGEB SCHIFFERLI JORGE (RN)", false],
				["GARCIA GARCIA RENE MANUEL (RN)", false],
				["MELLADO SUAZO MIGUEL (RN)", false],
				["SANTANA TIRACHINI ALEJANDRO (RN)", false],
				["KUSCHEL SILVA CARLOS IGNACIO (RN)", false],
				["LEUQUEN URIBE ARACELY (RN)", false],
			]
		},
		'La Fuerza de la Mayoría (PS)': {
			'seats': 17,
			'color': colores['rojo-oscuro'],
			'names': [
				["ROCAFULL LOPEZ LUIS (PS)", false],
				["CICARDINI MILLA DANIELLA (PS)", false],
				["SANTANA CASTILLO JUAN RUBEN (PS)", false],
				["SALDIVAR AUGER RAUL (PS)", false],
				["SCHILLING RODRIGUEZ MARCELO (PS)", false],
				["FERNANDEZ ALLENDE MAYA (PS)", false],
				["LEIVA CARVAJAL RAUL (PS)", false],
				["SOTO FERRADA LEONARDO (PS)", false],
				["CASTRO GONZALEZ JUAN LUIS (PS)", false],
				["NARANJO ORTIZ JAIME (PS)", false],
				["SAAVEDRA CHANDIA GASTON (PS)", false],
				["TOHA GONZALEZ JAIME (PS)", false],
				["MONSALVE BENAVIDES MANUEL (PS)", false],
				["ILABACA CERDA MARCOS (PS)", false],
				["ESPINOZA SANDOVAL FIDEL (PS)", false],
				["NUYADO ANCAPICHUN EMILIA IRIS (PS)", false],
				["ALVAREZ VERA JENNY (PS)", false]
			]
		},
		'La Fuerza de la Mayoría (PPD)': {
			'seats': 8,
			'color': '#b40000',//colores['rojo-oscuro'],
			'names': [
				["MARZAN PINTO CAROLINA (PPD)", false],
				["GONZALEZ TORRES RODRIGO (PPD)", false],
				["GIRARDI LAVIN CRISTINA (PPD)", false],
				["JIMENEZ FUENTES TUCAPEL FRANCISCO (PPD)", false],
				["SOTO MARDONES RAUL (PPD)", false],
				["RUBIO ESCOBAR PATRICIA (PPD)", false],
				["PARRA SAUTEREL ANDREA (PPD)", false],
				["CELIS ARAYA RICARDO (PPD)", false]
			]
		},
		'La Fuerza de la Mayoría (PRSD)': {
			'seats': 5,
			'color': '#bf2c17',//colores['rojo-oscuro'],
			'names': [
				["HERNANDO PEREZ MARCELA XIMENA (PRSD)", false],
				["MELLADO PINO COSME (PRSD)", false],
				["SEPULVEDA SOTO ALEXIS (PRSD)", false],
				["PEREZ ARRIAGADA JOSE (PRSD)", false],
				["MEZA MONCADA FERNANDO (PRSD)", false]
			]
		},
		'Frente Amplio (RD)': {
			'seats': 6,
			'color': '#21c27b', //colores['verde-agua'],
			'names': [
				["PEREZ SALINAS CATALINA (RD)", false],
				["BRITO HASBUN JORGE (RD)", false],
				["ORSINI PASCAL MAITE (RD)", false],
				["JACKSON DRAGO GIORGIO (RD)", false],
				["CRISPI SERRANO MIGUEL (RD)", false],
				["SANDOVAL OSORIO MARCELA (RD)", false]
			]
		},
		'Frente Amplio (CS)': {
			'seats': 4,
			'color': '#00b771', //colores['verde-agua'],
			'names': [
				["IBAÑEZ COTRONEO DIEGO (CS)", false],
				["WINTER ETCHEBERRY GONZALO (CS)", false],
				["YEOMANS ARAYA GAEL FERNANDA (CS)", false],
				["BORIC FONT GABRIEL (CS)", false]
			]
		},
		'Frente Amplio (COM)': {
			'seats': 2,
			'color': '#33cd85',//colores['verde-agua'],
			'names': [
				["ROJAS VALDERRAMA CAMILA (COMUNES)", false],
				["MIX JIMENEZ CLAUDIA NATHALIE (COMUNES)", false]
			]
		},
		'Frente Amplio (UNIR)': {
			'seats': 1,
			'color': '#42d88f',//colores['verde-agua'],
			'names': [
				["DIAZ DIAZ MARCELO (UNIR)", false]
			]
		},
		'Chile Digno (PCCH)': {
			'seats': 9,
			'color': colores['rojo'],
			'names': [
				["MORAGA MAMANI RUBEN (PCCH)", false],
				["NUÑEZ ARANCIBIA DANIEL (PCCH)", false],
				["HERTZ CADIZ CARMEN (PCCH)", false],
				["CARIOLA OLIVA KAROL (PCCH)", false],
				["BARRERA MORENO BORIS ANTHONY (PCCH)", false],
				["VALLEJO DOWLING CAMILA (PCCH)", false],
				["LABRA SEPULVEDA AMARO (PCCH)", false],
				["TEILLIER DEL VALLE GUILLERMO (PCCH)", false],
				["SANTIBAÑEZ NOVOA MARISELA (PCCH)", false]
			]
		},
		'Chile Digno (AH)': {
			'seats': 1,
			'color': '#ff5232',//colores['rojo'],
			'names': [
				["HIRSCH GOLDSCHMIDT TOMAS (AH)", false]
			]
		},
		'Chile Digno (FRVS)': {
			'seats': 3,
			'color': '#ca6048',//colores['rojo'],
			'names': [
				["VELASQUEZ NUÑEZ ESTEBAN JORGE (FRVS)", false],
				["MULET MARTINEZ JAIME (FRVS)", false],
				["SEPULVEDA ORBENES ALEJANDRA (FRVS)", false]
			]
		},
		'Convergencia Democrática': {
			'seats': 12,
			'color': colores['marron'],
			'parties': [['PDC', 12]],
			'names': [
				["WALKER PRIETO MATIAS (PDC)", false],
				["VERDESSI BELEMMI DANIEL ANGEL (PDC)", false],
				["TORRES JELDES VICTOR MARCELO (PDC)", false],
				["SILBER ROMO GABRIEL (PDC)", false],
				["MATTA ARAGAY MANUEL JOSE (PDC)", false],
				["SABAG VILLALOBOS JORGE EDUARDO (PDC)", false],
				["ORTIZ NOVOA JOSE MIGUEL (PDC)", false],
				["PEREZ OLEA JOANNA (PDC)", false],
				["VENEGAS CARDENAS MARIO ARTIDORO (PDC)", false],
				["FLORES GARCIA IVAN ALBERTO (PDC)", false],
				["ASCENCIO MANSILLA GABRIEL HECTOR (PDC)", false],
				["CALISTO AGUILA MIGUEL ANGEL (PDC)", false]
			]
		},
		'Nuevo Trato (PL)': {
			'seats': 2,
			'color': colores['amarillo'],
			'names': [
				["MIROSEVIC VERDUGO VLADO (PL)", false],
				["BERNALES MALDONADO ALEJANDRO JAVIER (PL)", false]
			]
		},
		'Nuevo Trato (IND)': {
			'seats': 2,
			'color': '#e8ca3e',//colores['amarillo'],
			'names': [
				["VIDAL ROJAS PABLO (IND)", false],
				["CASTILLO MUÑOZ NATALIA (IND)", false]
			]
		},
		'Acción Republicana (PLR)': {
			'seats': 1,
			'color': colores['azul-marino'],
			'names': [
				["URRUTIA BONILLA IGNACIO (PLR)", false]
			]
		},
		'Acción Republicana (IND)': {
			'seats': 3,
			'color': '#40447b',//colores['azul-marino'],
			'names': [
				["PRIETO LORCA PABLO (IND)", false],
				["URRUTICOECHEA RIOS CRISTOBAL (IND)", false],
				["JURGENSEN RUNDSHAGEN HARRY (IND)", false]
			]
		},
		'Fuera de Pacto': {
			'seats': 11,
			'color': colores['gris'],
			'parties': [['PH', 1], ['PEV', 1], ['IND', 9]],
			'names': [
				["VELASQUEZ SEGUEL PEDRO ANTONIO (IND-FRVS)", false],
				["AUTH STEWART PEPE (IND)", false],
				["JILES MORENO PAMELA (PH)", false],
				["LORENZINI BASSO PABLO (IND)", false],
				["ALARCON ROJAS FLORCITA (IND)", false],
				["JARPA WEVAR CARLOS ABEL (IND)", false],
				["GONZALEZ GATICA FELIX (PEV)", false],
				["SAFFIRIO ESPINOZA RENE (IND)", false],
				["ROSAS BARRIENTOS PATRICIO (IND)", false],
				["ALINCO BUSTOS RENE OSVALDO (IND)", false],
				["BIANCHI RETAMALES KARIM ANTONIO (IND)", false]
			]
 		}
	}
    var parliament_order = {
    	'Fuera de Pacto': false,
    	'Chile Digno (PCCH)': true,
    	'Chile Digno (FRVS)': true,
    	'Chile Digno (AH)': true,
    	'Frente Amplio (RD)': true, 
    	'Frente Amplio (CS)': true, 
    	'Frente Amplio (COM)': true, 
    	'Frente Amplio (UNIR)': true, 
    	'Nuevo Trato (PL)': true, 
    	'Nuevo Trato (IND)': true, 
    	'La Fuerza de la Mayoría (PS)': true, 
    	'La Fuerza de la Mayoría (PPD)': true, 
    	'La Fuerza de la Mayoría (PRSD)': true, 
    	'Convergencia Democrática': true, 
    	'Chile Vamos (EVO)': true,
    	'Chile Vamos (RN)': true,
    	'Chile Vamos (IND)': true,
    	'Chile Vamos (UDI)': true,
    	'Acción Republicana (IND)': true,
    	'Acción Republicana (PLR)': true
    }
    var directiva = [
    	["1er Vicepdte.", "UNDURRAGA GAZITUA FRANCISCO (EVO)"],
    	["Presidente", "PAULSEN KEHR DIEGO (RN)"],
    	["2do Vicepdte.", "GONZALEZ TORRES RODRIGO (PPD)"]
    ];

	legend.style.display = 'block';
    legend.innerHTML = '';
    if (screen.width>=992) {
    	legend2.innerHTML = '<div style="text-align:center;text-size:1.3em"><strong>Cámara baja 2018-2022</strong></div>';
    	legend2.style.display = 'block';
    	var div = document.createElement('div');
    	div.style.width = '360px';
    	div.appendChild(generateSVG(parliament, parliament_order, true, "Diputados", directiva));
    	legend2.appendChild(div);
    	var span = document.createElement('span');
    	span.id = 'lista-seat';
    	span.innerHTML = '<br>';
    	legend2.appendChild(span);
    	var span = document.createElement('span');
    	span.id = 'nombre-seat';
    	span.innerHTML = 'Muévete sobre los puntos...';
    	legend2.appendChild(span);
    } 

	legend.appendChild(getParliamentTable(parl_listas));
};

function mostrarSenadores() {
	clean()
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
	map.setLayoutProperty('senadores-periodo-b', 'visibility', 'visible');
	map.setLayoutProperty('senadores-periodo-a', 'visibility', 'visible');
    map.setLayoutProperty('sen-markers', 'visibility', 'visible');	
	document.getElementById('a-senadores').style.color = 'black';

	var parl_listas = {
		'Chile Vamos': {
			'seats': 19,
			'color': colores['azul'],
			'parties': [['UDI', 9], ['RN', 8], ['EVO', 2]]
		},
		'La Fuerza de la Mayoría': {
			'seats': 15,
			'color': colores['rojo-oscuro'],
			'parties': [['PPD', 8], ['PS', 7]]
		},
		'Convergencia Democrática': {
			'seats': 5,
			'color': colores['marron'],
			'parties': [['PDC', 5]]
		},
		'Frente Amplio': {
			'seats': 1,
			'color': colores['verde-agua'],
			'parties': [['RD', 1]]
		},
		'Progresistas': {
			'seats': 2,
			'color': colores['rosado'],
			'parties': [['PRO', 2]]
		},
		'Candidatura Independiente': {
			'seats': 1,
			'color': colores['gris'],
			'parties': [['IND', 1]]
		}
	}
	var parliament = {
		'Chile Vamos (UDI)': {
			'seats': 9,
			'color': '#2473ac',//colores['azul'],
			'dotted': 5,
			'names': [
				["DURANA SEMIR JOSE (UDI)", false],
				["EBENSPERGER ORREGO LUZ (UDI)", false],
				["GARCIA-HUIDOBRO SANFUENTES ALEJANDRO (UDI)", true],
				["COLOMA CORREA JUAN ANTONIO (UDI)", false],
				["VAN RYSSELBERGHE HERRERA JACQUELINE (UDI)", true],
				["ALVARADO ANDRADE CLAUDIO (UDI)", true],
				["MOREIRA BARROS IVAN (UDI)", true],
				["SANDOVAL PLAZA DAVID (UDI)", false],
				["VON BAER JAHN ENA (UDI)", true]
			]
		},
		'Chile Vamos (RN)': {
			'seats': 8,
			'color': '#3b83bd', //colores['azul'],
			'dotted': 1,
			'names': [
				["PROHENS ESPINOSA RAFAEL (RN)", false],
				["CHAHUAN CHAHUAN FRANCISCO (RN)", false],
				["PUGH OLAVARRIA KENNETH (IND-RN)", false],
				["CASTRO PRIETO JUAN (IND-RN)", false],
				["GALILEA VIAL RODRIGO (RN)", false],
				["GARCIA RUMINOT JOSE (RN)", false],
				["SABAT FERNANDEZ MARCELA (RN)", true],
				["OSSANDON IRARRAZABAL MANUEL JOSE (RN)", true]
			]
		},
		'Chile Vamos (EVO)': {
			'seats': 2,
			'color': '#4f93ce', //colores['azul'],
			'dotted': 0,
			'names': [
				["KAST SOMMERHOFF FELIPE (EVO)", false],
				["ARAVENA ACUÑA CARMEN GLORIA (EVO)", false]
			]
		},
		'La Fuerza de la Mayoría (PS)': {
			'seats': 7,
			'color': colores['rojo-oscuro'],
			'dotted': 4,
			'names': [
				["INSULZA SALINAS JOSE MIGUEL (PS)", false],
				["ALLENDE BUSSI ISABEL (PS)", false],
				["LETELIER MOREL JUAN PABLO (PS)", true],
				["ELIZALDE SOTO ALVARO (PS)", false],
				["QUINTEROS LARA RABINDRANATH (PS)", true],
				["MONTES CISTERNAS CARLOS (PS)", true],
				["DE URRESTI LONGTON ALFONSO (PS)", true]
			]
		},
		'La Fuerza de la Mayoría (PPD)': {
			'seats': 8,
			'color': '#b40000',//colores['rojo-oscuro'],
			'dotted': 4,
			'names': [
				["SORIA QUIROGA JORGE (IND-PPD)", false],
				["ARAYA GUERRERO PEDRO (IND-PPD)", true],
				["MUÑOZ D'ALBORA ADRIANA (PPD)", true],
				["LAGOS WEBER RICARDO (PPD)", false],
				["CARVAJAL AMBIADO LORETO (PPD)", true],
				["QUINTANA LEAL JAIME (PPD)", false],
				["ORDENES NEIRA XIMENA (IND-PPD)", false],
				["GIRARDI LAVIN GUIDO (PPD)", true]
			]
		},
		'Convergencia Democrática': {
			'seats': 5,
			'color': colores['marron'],
			'parties': [['PDC', 5]],
			'dotted': 2,
			'names': [
				["PROVOSTE CAMPILLAY YASNA (PDC)", false],
				["PIZARRO SOTO JORGE (PDC)", true],
				["RINCON GONZALEZ XIMENA (PDC)", false],
				["HUENCHUMILLA JARAMILLO FRANCISCO (PDC)", false],
				["GOIC BOROEVIC CAROLINA (PDC)", true]
			]
		},
		'Frente Amplio': {
			'seats': 1,
			'color': colores['verde-agua'],
			'parties': [['RD', 1]],
			'dotted': 0,
			'names': [
				["LATORRE RIVEROS JUAN IGNACIO (RD)", false]
			]
		},
		'Progresistas': {
			'seats': 2,
			'color': colores['rosado'],
			'parties': [['PRO', 2]],
			'dotted': 2,
			'names': [
				["GUILLIER ALVAREZ ALEJANDRO (PRO)", true],
				["NAVARRO BRAIN ALEJANDRO (PRO)", true]
			]
		},
		'Candidatura Independiente': {
			'seats': 1,
			'color': colores['gris'],
			'parties': [['IND', 1]],
			'dotted': 1,
			'names': [
				["BIANCHI CHELECH CARLOS (IND)", true]
			]
		}
	}
    var parliament_order = {
    	'Frente Amplio': true, 
    	'La Fuerza de la Mayoría (PS)': true, 
    	'La Fuerza de la Mayoría (PPD)': true, 
    	'Progresistas': true, 
    	'Candidatura Independiente': true,
    	'Convergencia Democrática': true, 
    	'Chile Vamos (EVO)': true,
    	'Chile Vamos (RN)': true,
    	'Chile Vamos (UDI)': true,
    }
    var directiva = [
    	["Presidenta", "PROVOSTE CAMPILLAY YASNA (PDC)"],
    	["Vicepresidente", "PIZARRO SOTO JORGE (PDC)"]
    ];

	legend.style.display = 'block';
    legend.innerHTML = '';
    if (screen.width>=992) {
    	legend2.innerHTML = '<div style="text-align:center;text-size:1.3em"><strong>Cámara alta 2018-2022</strong></div>';
    	legend2.style.display = 'block';
    	var div = document.createElement('div');
    	div.style.width = '360px';
    	div.appendChild(generateSVG(parliament, parliament_order, true, "Senado", directiva));
    	legend2.appendChild(div);
    	var span = document.createElement('span');
    	span.id = 'lista-seat';
    	span.innerHTML = '<br>';
    	legend2.appendChild(span);
    	var span = document.createElement('span');
    	span.id = 'nombre-seat';
    	span.innerHTML = 'Muévete sobre los puntos...';
    	legend2.appendChild(span);
    }

	legend.appendChild(getParliamentTable(parl_listas));
};

function popDiputados(map) {
	map.on('mousemove', 'diputados', function (e) {
	    map.getCanvas().style.cursor = 'pointer';
		var participacion = e.features[0].properties['2017-11_Part_TD'];
		var nconv = e.features[0].properties['2017-11_NDip'];
		var diputados = '<table style="border-collapse:collapse">';
		var lista_ant = '';
		for (i = 1; i <= nconv; i++) {
			var beg = '2017-11_Dip'+i;
			var lista = e.features[0].properties[beg+'_Lis'];
			var partido = e.features[0].properties[beg+'_Ptd'];
			var perct = e.features[0].properties[beg+'_Pct'];
			var perctL = e.features[0].properties[beg+'_PctL'];
			if (lista!=lista_ant) {
				diputados += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
				diputados += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
			};
			diputados += '<tr>';	
			diputados += '<td><span class="legend-key" style="background-color:'+coloresListasDiputados[lista]+'"></span>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
				diputados += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
			} else {
				diputados += e.features[0].properties[beg+'_Nom'];
			}
			diputados += '</td><td style="padding-left:10px">'+partido+'</td>';
			diputados += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
			diputados += '</tr>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
				diputados += '<tr>'
				diputados += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
				diputados += e.features[0].properties[beg+'_Rem'] +'</td>'
				diputados += '</tr>'	
			}
			lista_ant = lista;
		}
		diputados += '</table>';
		diputados += '<h5>Participación: '+participacion+'%</h5>';

		var distrito = e.features[0].properties.DISTRITO;
		var region = e.features[0].properties.REGION;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Distrito '+distrito+'</span><br>'+region+'</h4>'+diputados
				)
			.addTo(map);
	});
	map.on('mouseleave', 'diputados', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});

	map.on('mousemove', 'dip-markers', function (e) {
	    map.getCanvas().style.cursor = 'pointer';
		var lista = e.features[0].properties.LISTA;
		var nombre = e.features[0].properties.NOMBRE;
		var partido = e.features[0].properties.PARTIDO;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+nombre+'</span></h4>'+
				'<p>'+lista+' - '+partido+'</p>'
				)
			.addTo(map);
	});
	map.on('mouseleave', 'dip-markers', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});
};

function popSenadores(map) {
	map.on('mousemove', 'senadores-periodo-b', function (e) {
	    map.getCanvas().style.cursor = 'pointer';
		var nconv = e.features[0].properties['2017-11_NSen'];
		var diputados = '<table style="border-collapse:collapse">';
		var lista_ant = '';
		for (i = 1; i <= nconv; i++) {
			var beg = '2017-11_Sen'+i;
			var lista = e.features[0].properties[beg+'_Lis'];
			var partido = e.features[0].properties[beg+'_Ptd'];
			var perct = e.features[0].properties[beg+'_Pct'];
			var perctL = e.features[0].properties[beg+'_PctL'];
			if (lista!=lista_ant) {
				diputados += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
				diputados += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
			};
			diputados += '<tr>';	
			diputados += '<td><span class="legend-key" style="background-color:'+coloresListasDiputados[lista]+'"></span>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
				diputados += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
			} else {
				diputados += e.features[0].properties[beg+'_Nom'];
			}
			diputados += '</td><td style="padding-left:10px">'+partido+'</td>';
			diputados += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
			diputados += '</tr>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
				diputados += '<tr>'
				diputados += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
				diputados += e.features[0].properties[beg+'_Rem'] +'</td>'
				diputados += '</tr>'	
			}
			lista_ant = lista;
		}
		diputados += '</table>';

		var distrito = e.features[0].properties.CIRCUNSCRIPCION;
		var region = e.features[0].properties.REGION;
		var periodo = e.features[0].properties['2017-11_Periodo'];
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Circunscripción '+distrito
				+' ('+periodo+')</span><br>'+region+'</h4>'+diputados
				)
			.addTo(map);
	});
	map.on('mouseleave', 'senadores-periodo-b', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});


	map.on('mousemove', 'senadores-periodo-a', function (e) {
	    map.getCanvas().style.cursor = 'pointer';
		var nconv = e.features[0].properties['2013-11_NSen'];
		var diputados = '<table style="border-collapse:collapse">';
		var lista_ant = '';
		for (i = 1; i <= nconv; i++) {
			var beg = '2013-11_Sen'+i;
			if (i==1) {
				var circ = e.features[0].properties[beg+'_CircAnt'];
				diputados += '<tr><td colspan=3 style="text-align:center"><span style="font-weight:bold">'+circ+'</span></td>';
			} else if (i==3) {
				var circ = e.features[0].properties[beg+'_CircAnt'];
				diputados += '<tr style="border-top:solid;border-width:1px"><td colspan=3 style="text-align:center"><span style="font-weight:bold;text-align:center">'+circ+'</span></td>';
			}
			var lista = e.features[0].properties[beg+'_Lis'];
			var partido = e.features[0].properties[beg+'_Ptd'];
			var perct = e.features[0].properties[beg+'_Pct'];
			var perctL = e.features[0].properties[beg+'_PctL'];
			if (lista!=lista_ant) {
				diputados += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
				diputados += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
			};
			diputados += '<tr>';	
			diputados += '<td><span class="legend-key" style="background-color:'+coloresListasDiputados[lista]+'"></span>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
				diputados += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
			} else {
				diputados += e.features[0].properties[beg+'_Nom'];
			}
			diputados += '</td><td style="padding-left:10px">'+partido+'</td>';
			diputados += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
			diputados += '</tr>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
				diputados += '<tr>'
				diputados += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
				diputados += e.features[0].properties[beg+'_Rem'] +'</td>'
				diputados += '</tr>'	
			}
			lista_ant = lista;
			if (i==2) lista_ant = '';
		}
		diputados += '</table>';

		var distrito = e.features[0].properties.CIRCUNSCRIPCION;
		var region = e.features[0].properties.REGION;
		var periodo = e.features[0].properties['2013-11_Periodo'];
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Circunscripción '+distrito
				+' ('+periodo+')</span><br>'+region+'</h4>'+diputados
				)
			.addTo(map);
	});
	map.on('mouseleave', 'senadores-periodo-a', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});

	map.on('mousemove', 'sen-markers', function (e) {
	    map.getCanvas().style.cursor = 'pointer';
		var lista = e.features[0].properties.LISTA;
		var nombre = e.features[0].properties.NOMBRE;
		var partido = e.features[0].properties.PARTIDO;
		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">'+nombre+'</span></h4>'+
				'<p>'+lista+' - '+partido+'</p>'
				)
			.addTo(map);
	});
	map.on('mouseleave', 'sen-markers', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	});
}