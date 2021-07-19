var coloresCORE = {
	'Chile Vamos RN-EVO': colores['azul'],
	'Chile Vamos UDI-PRI': colores['azul-marino'],
	'Sumemos': colores['celeste'],
	'Frente Amplio': colores['verde-agua'],
	'Unidos por la Descentralización': colores['violeta'],
	'Por un Chile Justo y Descentralizado': colores['rojo-oscuro'],
	'Coalición Regionalista Verde': colores['verde'],
	'Frente Ecologista y Ciudadano': colores['verde2'],
	'Fuera de pacto': colores['gris'],
	'Integración para el Desarrollo': colores['naranja'],
	'Por Todo Chile': colores['rosado'],
};
var region2cores = {
	'Región de Arica y Parinacota': [ // revisado
		{
			'Chile Vamos RN-EVO': {
				'parties': [['RN',1],['EVO', 1]],
				'color': colores['azul'],
				'seats': 2,
				'names': [
					['PACO MAMANI DIEGO (RN)', false],
					['BARBOZA BARRIOS JOSÉ PEDRO (EVO)', false],
				]
			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1], ['IND', 2]], 
				'color': colores['azul-marino'],
   				'seats': 3,
   				'names': [
					['CONDORI ALAVE LUCIO (UDI)', false],
					['VALCARCE BECERRA XIMENA VERONICA (IND)', false],
					['FERRY CAMPODONICO CARLOS (IND)', false],
				]
   			},
   			'Frente Amplio': {
   				'parties': [['PH', 1]], 
				'color': colores['verde-agua'],
   				'seats': 1,
   				'names': [
					['HUERTA VALENZUELA CLAUDIO ALBERTO (PH)', false],
				]
   			},
   			'Frente Ecologista y Ciudadano': {
   				'parties': [['PODER', 1]], 
				'color': colores['verde2'],
   				'seats': 1,
   				'names': [
					['LUZA ESPINOZA MARIO (PODER)', false],
				]
   			},
   			'Por Todo Chile': {
   				'parties': [['IND', 1]], 
				'color': colores['rosado'],
   				'seats': 1,
   				'names': [
					['LEE RODRIGUEZ JOSE (IND)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PCCH', 1],['IND', 1]],
				'color': colores['rojo-oscuro'],
    			'seats': 2,
    			'names': [
					['TAPIA CASTRO GARY (PCCH)', false],
					['ALARCON RODRIGUEZ ZENON VICENTE (IND)', false],
				]
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PSCH', 2], ['PDC', 2]],
				'color': colores['violeta'],
    			'seats': 4,
    			'names': [
					['LOPEZ VILLAZON SERGIO ROLANDO (PSCH)', false],
					['DIAZ CARVAJAL ALEJANDRO (PSCH)', false],
					['ACUÑA LE-BLANC CLAUDIO PATRICIO (PDC)', false],
					['DIAZ IBARRA JORGE (PDC)', false],
				]
    		}
    	},
    	{
    		'Frente Amplio': true,
    		'Frente Ecologista y Ciudadano': true,
    		'Por Todo Chile': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Atacama': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN', 3],['IND', 1]],
				'color': colores['azul'],
    			'seats': 4,
    			'names': [
					['ALEGRIA OLIVARES ROBERTO (RN)', false],
					['GHIGLINO PIZARRO FERNANDO (RN)', false],
					['BORDOLI VERGARA SERGIO (IND)', false],
					['ARAYA ROJAS MARIO (RN)', false],
				]
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 1,
   				'names': [
					['GONZALEZ BRIZUELA PATRICIA (UDI)', false],
				]
   			},
   			'Coalición Regionalista Verde': {
   				'parties': [['FRVS', 1], ['IND', 1]],
				'color': colores['verde'],
   				'seats': 2,
				'names': [
					['TORREJON SIERRA REBECA (FRVS)', false],
					['ALFARO MORALES PATRICIO (IND)', false],
				]   				
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['MAS', 1],['PCCH', 2],['IND', 1],['PRSD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 5,
   				'names': [
					['PEREZ TAPIA FABIOLA DEL CARMEN (MAS)', false],
					['CASTILLO JULIO JAVIER ANIBAL (PCCH)', false],
					['ROJAS TAPIA RODRIGO ANTONIO (IND)', false],
					['VOLTA ROJAS HECTOR ANTONIO (PRSD)', false],
					['MANQUEZ VICENCIO GABRIEL ARMANDO (PCCH)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['IND', 1], ['PSCH', 1]],
				'color': colores['violeta'],
   				'seats': 2,
   				'names': [
					['SANTANA ALVAREZ JUAN HORACIO (IND)', false],
					['VEGA DONOSO RUTH (PSCH)', false],
				]
   			}
   		},
    	{
    		'Coalición Regionalista Verde': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Tarapacá': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 3],['EVO', 1]],
				'color': colores['azul'],
   				'seats': 4,
   				'names': [
					['LAGOS COSGROVE JOSE (RN)', false],
					['ROJAS ANDRADE FELIPE (EVO)', false],
					['PEREZ VALENCIA IVAN (RN)', false],
					['MAMANI MAMANI EDUARDO (RN)', false],
				]
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 1,
   				'names': [
					['YARYES SILVA JAVIER (UDI)', false],
				]
   			},
   			'Frente Amplio': {
   				'parties': [['IND', 2]], 
				'color': colores['verde-agua'],
   				'seats': 2,
   				'names': [
					['ZAMBRA VENEGAS PABLO (IND)', false],
					['MARTINEZ QUEZADA ALBERTO (IND)', false],
				]
   			},
   			'Frente Ecologista y Ciudadano': {
   				'parties': [['PODER', 1]], 
				'color': colores['verde2'],
   				'seats': 1,
   				'names': [
					['LOPEZ PARADA RUBEN ALEJANDRO (PODER)', false],
				]
   			},
   			'Integración para el Desarrollo': {
   				'parties': [['PLIR', 1]], 
				'color': colores['naranja'],
   				'seats': 1,
   				'names': [
					['LOBOS LARA LAUTARO (PLIR)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PCCH', 1],['PRSD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 2,
   				'names': [
					['CISTERNAS FLORES PEDRO ARMANDO (PCCH)', false],
					['SALAZAR CALLASAYA FRANCISCA MARIA (PRSD) (PPD)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 2], ['PSCH', 1]],
				'color': colores['violeta'],
   				'seats': 3,
   				'names': [
					['CARVAJAL VELIZ LUIS (PDC)', false],
					['BERRIOS CAMILO RUBEN (PSCH)', false],
					['AGUIRRE AGUIRRE VERONICA HAYDDE (PDC)', false],
				]
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Frente Ecologista y Ciudadano': true,
    		'Integración para el Desarrollo': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Antofagasta': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 2],['IND', 2]],
				'color': colores['azul'],
   				'seats': 4,
   				'names': [
					['ESPINDOLA TOROCO JORGE (RN)', false],
					['PORTILLA BARRAZA ESLAYNE (IND)', false],
					['SAN MARTIN SANCHEZ KATHERINE (IND)', false],
					['GUERRERO TABILO GUILLERMO (RN)', false],
				]
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 3], ['PRI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 4,
   				'names': [
					['OLIDEN VEGA ALEJANDRA (UDI)', false],
					['MORENO MORENO MIRTA JESUS (PRI)', false],
					['TILLERIA VELASQUEZ DAGOBERTO (UDI)', false],
					['NARVAEZ PAEZ ATILIO (UDI)', false],
				]
   			},
   			'Frente Amplio': {
   				'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
   				'seats': 1,
   				'names': [
					['DIAZ CORTES RICARDO HERIBERTO (RD)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1], ['IC', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 2,
   				'names': [
					['PARRAGUEZ OCHOA LUIS NELSON (PPD)', false],
					['RAMIREZ DIAZ MARIA EUGENIA (IC)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['PSCH', 2]],
				'color': colores['violeta'],
   				'seats': 5,
   				'names': [
					['BERNA MARTINEZ SANDRA (PDC)', false],
					['PASTENES MUÑOZ SANDRA ISABEL (PSCH)', false],
					['MERINO DIAZ ANDREA (PSCH)', false],
					['DANTAGNAN VERGARA GONZALO (PDC)', false],
					['TAPIA JULIO PATRICIO (PDC)', false],
				]
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Coquimbo': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 3],['IND', 1]],
				'color': colores['azul'],
   				'seats': 4,
   				'names': [
					['HERRERA FLORES JAIME (RN)', false],
					['GUERRERO CRUZ TEODOSIO (IND)', false],
					['PEÑAFIEL VILLAFAÑE ADRIANA (RN)', false],
					['CASTAGNETO ARANCIBIA MARCELO (RN)', false],
				]
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 3], ['IND', 1]], 
				'color': colores['azul-marino'],
   				'seats': 4,
   				'names': [
					['RONDANELLI ORREGO CRISTIAN (UDI)', false],
					['GALLARDO FLORES ALBERTO (IND)', false],
					['HERRERA SAAVEDRA DINKA (UDI)', false],
					['CORTES VEGA PAOLA (UDI)', false],
				]
   			},
   			'Fuera de pacto': {
   				'parties': [['IND', 2]], 
				'color': colores['gris'],
   				'seats': 2,
   				'names': [
					['JARUFE HAUNE HANNA (IND)', false],
					['CODOCEO CONTRERAS JUAN CARLOS (IND)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['PCCH', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 2,
   				'names': [
					['ROJAS ESCUDERO ANGELA MARIA (PPD)', false],
					['VEGA ORTIZ JAVIER (PCCH)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['PSCH', 1]],
				'color': colores['violeta'],
   				'seats': 4,
   				'names': [
					['CARRIEL CASTILLO CRISTIAN (PDC)', false],
					['ZAPATA PASTEN LIDIA (PDC)', false],
					['GALLEGUILLOS ROJO CARLOS (PSCH)', false],
					['TOLEDO ESCORZA LOMBARDO (PDC)', false],
				]
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Fuera de pacto': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Valparaíso': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 4],['IND', 4]],
				'color': colores['azul'],
   				'seats': 8,
   				'names': [
					['REYES FIGUEROA IVAN (RN)', false],
					['QUIROZ ORTIZ EDITH (RN)', false],
					['AREVALO PAKARATI ELIZABETH JOANA (IND)', false],
					['ALARCON RAPU TARITA (IND)', false],
					['URRUTIA ACEVEDO FERNANDO MARTIN (IND)', false],
					['MARIN VERA PERCY (RN)', false],
					['CHAHUAN CHAHUAN ROBERTO (RN)', false],
					['MACAYA ABARCA CHRISTIAN (IND)', false],
				]
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 4]], 
				'color': colores['azul-marino'],
   				'seats': 4,
   				'names': [
					['GONZALEZ SILVA MARIA FERNANDA (UDI)', false],
					['ARANEDA ATENAS MAURICIO (UDI)', false],
					['MILLONES CHIRINO MANUEL (UDI)', false],
					['OLFOS VARGAS EMMANUEL (UDI)', false],
				]
   			},
   			'Frente Amplio': {
   				'parties': [['PH', 1], ['IND', 3]], 
				'color': colores['verde-agua'],
   				'seats': 4,
   				'names': [
					['CAMPUSANO DIAZ NATALY DEL CARMEN (IND)', false],
					['MORA CASTRO JORGE ARTURO (IND)', false],
					['VALENZUELA ROSSI TANIA ESTEFANIA (IND)', false],
					['RISTEMPART SOTO MARTIN (PH)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 3],['IND', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 4,
   				'names': [
					['MURILLO CALDERON MANUEL ENRIQUE (PPD)', false],
					['SOTTOLICHIO URQUIZA MARIO EUGENIO (PPD)', false],
					['ALARCON QUINTEROS CARLOS (PPD)', false],
					['RODRIGUEZ HERRERA MARIA VICTORIA (IND)', false],
				]
   			},
   			'Sumemos': {
   				'parties': [['AMPLI', 1]], 
				'color': colores['celeste'],
   				'seats': 1,
   				'names': [
					['PEREZ IBACACHE MIGUEL (AMPLI)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 6]], 
				'color': colores['violeta'],
   				'seats': 6,
   				'names': [
					['BURGOS GONZALEZ ROBERTO (PDC)', false],
					['CRICHTON ORELLANA ROY (PDC)', false],
					['STEVENSON VELASCO ROLANDO JUAN (PDC)', false],
					['ARRIAGADA ARENS JUAN (PDC)', false],
					['MELLA ANDAUR CRISTIAN ANDRES (PDC)', false],
					['ALIAGA CRUZ RICARDO (PDC)', false],
				]
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Sumemos': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región Metropolitana de Santiago': [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN',8],['IND', 1]],
				'color': colores['azul'],
   				'seats': 9,
   				'names': [
					['GARRIDO AGUERO MIGUEL ANGEL (RN)', false],
					['ESPINOZA OLIVER CHRISTOPHER (RN)', false],
					['CORTÉS ALLEN MARIO (RN)', false],
					['ESCALA CARRASCO MACARENA (RN)', false],
					['MONCKEBERG DIAZ MANUEL JOSE (IND)', false],
					['SABAT FERNANDEZ FRANCO (RN)', false],
					['MIRANDA MUÑOZ RUTH (RN)', false],
					['KLEIN PLESNAR CATERINA (RN)', false],
					['MORENO CRUZ CELIN (RN)', false],
				]
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': 
   				[['UDI', 8]], 
				'color': colores['azul-marino'],
   				'seats': 8,
   				'names': [
					['CORNEJO INOSTROZA RODRIGO (UDI)', false],
					['BUSTAMANTE GAETE CLAUDIO (UDI)', false],
					['NORAMBUENA CASTRO CARLOS (UDI)', false],
					['GARATE ROJAS PAULA (UDI)', false],
					['LEWIN VALDIVIESO ROBERTO (UDI)', false],
					['PARDO PAREDES CLAUDIO (UDI)', false],
					['OLAVARRIA RODRIGUEZ JOSE AGUSTIN (UDI)', false],
					['LAVIN ALIAGA ALVARO (UDI)', false],
				]
   			},
   			'Frente Amplio': {
   				'parties': [['PH', 1], ['RD', 3], ['COM', 1], ['CS', 2]], 
				'color': colores['verde-agua'],
   				'seats': 7,
   				'names': [
					['ORTIZ GUERRA FERNANDA (PH)', false],
					['AGUILAR ORTIZ JAZMIN MARION (COM)', false],
					['VALENZUELA DELPIANO SOFIA (RD)', false],
					['HASBÚN FAILA CLAUDIA (CS)', false],
					['CHAVEZ MADRID PAOLA NEDYELKA (RD)', false],
					['MARTINEZ DIAZ NOEMI (RD)', false],
					['CAÑAS CAMPILLAY PAULO (COM)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 1,
   				'names': [
					['SAA DIAZ MARIA ANTONIETA (PPD)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PSCH', 6], ['PDC', 3]],
				'color': colores['violeta'],
   				'seats': 9,
   				'names': [
					['AGUILERA SANHUEZA MONICA (PSCH)', false],
					['BERRIOS UBILLA FELIPE (PSCH)', false],
					['SOTO SANDOVAL JOSÉ (PDC) (PSCH)', false],
					['RUBIO HARING CRISTIAN (PSCH)', false],
					['MALLEA ARAUS RAMON ANDRES (PDC)', false],
					['SANTANDER MARIN NELLY RAQUEL (PSCH)', false],
					['CABALLERO VERDUGO MILENKA (PSCH)', false],
					['ESCOBAR PAREDES CARLOS (PDC)', false],
					['ROJAS CAMPOS DIOSCORO (PSCH)', false],
				]
   			}
   		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	"Región del Libertador Bernardo O'Higgins": [ //revisado
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN',5]],
				'color': colores['azul'],
	   			'seats': 5,
	   			'names': [
					['CANALES OYARZUN JAVIER BENITO (RN)', false],
					['CONTRERAS JORQUERA GERARDO (RN)', false],
					['ORELLANA MIQUEL ARTURO (RN)', false],
					['TORO ROJAS EDINSON (RN)', false],
					['GALLARDO CONTRERAS MONSERRAT (RN)', false],
				]
	   		},
	   		'Chile Vamos UDI-PRI': {
	   			'parties': [['IND', 2], ['UDI', 2]], 
				'color': colores['azul-marino'],
	   			'seats': 4,
	   			'names': [
					['SILVA SANCHEZ LUIS (IND)', false],
					['VARGAS GONZALEZ JORGE (IND)', false],
					['BAUER JOUANNE EUGENIO (UDI)', false],
					['HERNANDEZ GARRIDO PEDRO (UDI)', false],
				]
	   		},
	   		'Frente Amplio': {
	   			'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
	   			'seats': 1,
	   			'names': [
					['ARENAS SAEZ GERMAN ALBERTO (RD)', false],
				]
	   		},
	   		'Por un Chile Justo y Descentralizado': {
	   			'parties': [['PRSD', 1]],
				'color': colores['rojo-oscuro'],
	   			'seats': 1,
	   			'names': [
					['VERDUGO VALENZUELA FERNANDO (PRSD)', false],
				]
	   		},
	   		'Unidos por la Descentralización': {
	   			'parties': [['PDC', 2], ['PSCH', 3]],
				'color': colores['violeta'],
	   			'seats': 5,
	   			'names': [
					['LARENAS CARO PABLO GUILLERMO (PDC)', false],
					['LABBE MORALES JUAN CARLOS (PSCH) (PDC)', false],
					['DIAZ BURGOS JUAN PABLO (PDC)', false],
					['JORQUERA REINOSO JACQUELINE (PSCH)', false],
					['VALDERRAMA ALVAREZ MAURICIO (PSCH)', false],
				]
	   		}
	   	},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región del Maule': [
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 5],['IND', 2]],
				'color': colores['azul'],
   				'seats': 7,
   				'names': [
					['PARHAM MUCARQUER CECILIA (RN)', false],
					['RAMIREZ PARRA RAFAEL (RN)', false],
					['VALDEBENITO MANSILLA JUAN (IND)', false],
					['GUAJARDO DIAZ ARTURO (RN)', false],
					['MUÑOZ SAAVEDRA JUAN ANDRES (RN)', false],
					['BORDACHAR SOTOMAYOR GEORGE (RN)', false],
					['CHAVEZ VALDERRAMA PABLO (IND) (IND)', false],
				]
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 4]], 
				'color': colores['azul-marino'],
   				'seats': 4,
   				'names': [
					['BRAVO REBOLLEDO EDGARDO (UDI)', false],
					['OJEDA ALARCON PATRICIO (UDI)', false],
					['MUÑOZ VERGARA CESAR (UDI)', false],
					['SEGURA OVALLE MIRTHA (UDI)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PCCH', 1],['PRSD', 1], ['PPD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 3,
   				'names': [
					['ROJAS ROJAS GABRIEL ANDRES (PCCH)', false],
					['DEL RIO JIMENEZ PABLO (PRSD)', false],
					['AMESTICA GAETE MANUEL (PPD)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PSCH', 1], ['IND', 1],['PDC', 4]],
				'color': colores['violeta'],
   				'seats': 6,
   				'names': [
					['HERMOSILLA GATICA RODRIGO (PSCH)', false],
					['VARGAS VEGA JOSE DESIDERIO (IND)', false],
					['OSES CASTRO IVONNE DEL CARMEN (PDC)', false],
					['URRUTIA CONCHA ROBERTO (IND) (PDC)', false],
					['PEREZ DONOSO MARIA DEL CARMEN (PDC)', false],
					['TAPIA MARTINEZ BORIS ALEJANDRO (PDC)', false],
				]
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región de Ñuble': [
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 1],['IND', 1]],
				'color': colores['azul'],
   				'seats': 2,
   				'names': [
					['AVILA PARADA JAVIER (RN)', false],
					['DINAMARCA MUÑOZ RODRIGO (IND)', false],
				]
   			},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 1]], 
				'color': colores['azul-marino'],
   				'seats': 1,
   				'names': [
					['SEPULVEDA DOMINGUEZ JEZER (UDI)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['PRSD', 1]],
				'color': colores['rojo-oscuro'],
   				'seats': 2,
   				'names': [
					['JIMENEZ VENEGAS ARNOLDO MANUEL (PPD)', false],
					['ANDRADES ANDRADES JOHN (PRSD)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 1]], 
				'color': colores['violeta'],
   				'seats': 1,
   				'names': [
					['ALVAREZ ROMAN HERNAN (PDC)', false],
				]
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	],
   	'Región del Bío-Bío': [
   		{
   			'Chile Vamos RN-EVO': {
   				'parties': [['RN', 4]],
				'color': colores['azul'],
   				'seats': 4,
   				'names': [
					['LYNCH GAETE PATRICIO (RN)', false],
					['LARA CHANDIA PATRICIO (RN)', false],
					['BADILLA COFRE PATRICIO (RN)', false],
					['PEÑA RODRIGUEZ ANSELMO (RN)', false],
				]
   			},
			'Chile Vamos UDI-PRI': {
				'parties': [['UDI', 6], ['IND', 2]], 
				'color': colores['azul-marino'],
				'seats': 8,
				'names': [
					['ARGO CHAVEZ JAMES (UDI)', false],
					['QUIJADA QUIJADA JAIME (IND) (IND)', false],
					['SANTIBAÑEZ BASTIDAS LUIS (UDI)', false],
					['BORGOÑO BUSTOS EDUARDO (UDI)', false],
					['KRAUSE LOBOS ENRIQUE (IND)', false],
					['VENEGAS MALDONADO RICARDO (UDI)', false],
					['GENGNAGEL NAVARRO CRISTIAN (UDI)', false],
					['VENEGAS GUERRA PEDRO (UDI)', false],
				]
			},
			'Frente Amplio': {
				'parties': [['IGUAL', 1]], 
				'color': colores['verde-agua'],
				'seats': 1,
				'names': [
					['SANDOVAL OJEDA JAVIER (IGUAL)', false],
				]
			},
			'Por un Chile Justo y Descentralizado': {
				'parties': [['IND', 1],['PPD', 2],['PCCH', 2]],
				'color': colores['rojo-oscuro'],
				'seats': 5,
				'names': [
					['PEÑAILILLO GARRIDO JAIME (PRSD) (IND)', false],
					['YAÑEZ SOTO ALICIA JACQUELINE (PPD)', false],
					['CUEVAS FUENTEALBA DANIEL ENRIQUE (PPD)', false],
					['PEÑA HENRIQUEZ LEONIDAS (PCCH)', false],
					['CONCHA HIDALGO TANIA VALENTINA (PCCH)', false],
				]
			},
			'Unidos por la Descentralización': {
				'parties': [['PSCH', 1], ['PDC', 3]],
				'color': colores['violeta'],
				'seats': 4,
				'names': [
					['PARRA SANDOVAL ANDRES (PSCH)', false],
					['RAMIREZ ROMERO OSCAR IVAN (PDC)', false],
					['STARK ORTEGA TERESA DE JESUS (PDC)', false],
					['SALAS DE LA FUENTE EDMUNDO (PDC)', false],
				]
			}
		},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
	],
	'Región de La Araucanía': [
		{
			'Chile Vamos RN-EVO': {
				'parties': [['RN', 6],['IND', 1]],
				'color': colores['azul'],
    			'seats': 7,
    			'names': [
					['GUTIERREZ SAAVEDRA MARIA ELIZABETH (RN)', false],
					['KAUSEL KROLL GUSTAVO (RN)', false],
					['CASTAGNOLI LEONELLI ITALO (RN)', false],
					['HERNANDEZ SCHMIDT EDUARDO (RN)', false],
					['MENDOZA VASQUEZ GILDA (RN)', false],
					['ZAMORA SILVA JOSE (RN)', false],
					['ACEITON PEREZ CLAUDIO (IND)', false],
				]
    		},
    		'Chile Vamos UDI-PRI': {
    			'parties': [['UDI', 3]], 
				'color': colores['azul-marino'],
    			'seats': 3,
    			'names': [
					['FLORES FERNANDEZ ROLANDO (UDI)', false],
					['PHILLIPS SAENZ CARMEN (UDI)', false],
					['SEPULVEDA VENEGAS GENOVEVA (UDI)', false],
				]
    		},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 5]],
				'color': colores['rojo-oscuro'],
    			'seats': 5,
    			'names': [
					['DE LA MAZA DE LA MAZA TOMAS (PPD)', false],
					['JARAMILLO GONZALEZ JUAN PABLO (PPD)', false],
					['JARAMILLO SALAZAR MIGUEL (PPD)', false],
					['SOTO CEA ANA MARIA (PPD)', false],
					['MONDACA CAAMAÑO ALEJANDRO (PPD)', false],
				]
    		},
   			'Sumemos': {
   				'parties': [['IND', 1]], 
				'color': colores['celeste'],
   				'seats': 1,
   				'names': [
					['CONTRERAS MALDONADO MIGUEL ANGEL (IND)', false],
				]
   			},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['IND', 1]],
				'color': colores['violeta'],
    			'seats': 4,
    			'names': [
					['RODRIGUEZ RODRIGUEZ MONICA ELIZABETH (PDC)', false],
					['HERRERA FLOODY RICARDO RAMIRO (PDC)', false],
					['CARRASCO CARRASCO MARCELO LUCIANO (PDC)', false],
					['SANDOVAL POBLETE DANIEL ALEJANDRO (IND)', false],
				]
    		}
    	},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Sumemos': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Los Ríos': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN', 3],['EVO', 1]],
				'color': colores['azul'],
    			'seats': 4,
    			'names': [
					['SABAT ACLEH ELIAS (RN)', false],
					['TALADRIZ EGUILUZ JUAN (EVO)', false],
					['MUÑOZ MORALES ARIEL (RN)', false],
					['YUNGE WULF SYLVIA (RN)', false],
				]
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 2], ['IND', 2]], 
				'color': colores['azul-marino'],
   				'seats': 4,
   				'names': [
					['GATICA MENDEZ BORIS (UDI)', false],
					['FARIAS SILVA JUAN CARLOS (IND)', false],
					['HOLCK KUSCH EDUARDO (UDI)', false],
					['QUEZADA SOLIS LUIS ARMANDO (IND)', false],
				]
   			},
   			'Frente Amplio': {
   				'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
   				'seats': 1,
   				'names': [
					['FERNANDEZ HARTWIG MATIAS (RD)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 2]],
				'color': colores['rojo-oscuro'],
    			'seats': 2,
    			'names': [
					['FUENTES PAREDES PATRICIO ALEJANDRO (PPD)', false],
					['HOTT SOLIS CATALINA (PPD)', false],
				]
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 2], ['PSCH', 1]],
				'color': colores['violeta'],
    			'seats': 3,
    			'names': [
					['PACHECO RIVERA HECTOR MANUEL (PDC)', false],
					['CUVERTINO GOMEZ LUIS ALFONSO (PSCH)', false],
					['FLORES VERA WALDO ALEJANDRO (PDC)', false],
				]
    		}
    	},
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Los Lagos': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN', 5]],
				'color': colores['azul'],
    			'seats': 5,
    			'names': [
					['CARCAMO HERNANDEZ FRANCISCO (RN)', false],
					['HERNANDEZ TORRES FERNANDO (RN)', false],
					['CASANOVA CARDENAS ALEXIS (RN)', false],
					['KUSCHEL SILVA RICARDO (RN)', false],
					['BRAHM BARRIL JAIME (RN)', false],
				]
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 3]], 
				'color': colores['azul-marino'],
   				'seats': 3,
   				'names': [
					['KRUGER FINSTERBUSCH FEDERICO (UDI)', false],
					['BARRAZA ARELLANO MARIA ANGELICA (UDI)', false],
					['ORTIZ BOHLE JUAN HUMBERTO (UDI)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['IND', 1]],
				'color': colores['rojo-oscuro'],
    			'seats': 2,
    			'names': [
					['MIRANDA BORQUEZ CRISTIAN ESTEBAN (PPD)', false],
					['ALVAREZ NIETO VALENTINA NATALIA (IND)', false],
				]
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 3], ['PSCH', 3]],
				'color': colores['violeta'],
    			'seats': 6,
    			'names': [
					['AGUILA SERPA NELSON (PDC)', false],
					['SOTO ESCALONA ROBERTO (PSCH)', false],
					['MUÑOZ URIBE JOSE LUIS (PDC)', false],
					['REYES CASTRO FRANCISCO JAVIER (PSCH)', false],
					['RIVERA ALTAMIRANO MANUEL (PSCH)', false],
					['CARCAMO CARCAMO JUAN (PDC)', false],
				]
    		}
    	},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Aysén del Gral. Ibañez del Campo': [
	   	{
	   		'Chile Vamos RN-EVO': {
	   			'parties': [['RN',3]],
				'color': colores['azul'],
	    		'seats': 3,
	    		'names': [
					['CAMPOS SAIGG CARLOS (RN)', false],
					['RUDOLPHI ALTANER RAUL (RN)', false],
					['SOLIS CABEZAS VALENTIN (RN)', false],
				]
	    	},
	   		'Chile Vamos UDI-PRI': {
	   			'parties': [['UDI', 2]], 
				'color': colores['azul-marino'],
	   			'seats': 2,
	   			'names': [
					['QUINTUL CEA CARLOS (UDI)', false],
					['MONTECINOS ARAYA ELIGIO ANGEL (UDI)', false],
				]
	   		},
	   		'Frente Amplio': {
	   			'parties': [['RD', 1]], 
				'color': colores['verde-agua'],
	   			'seats': 1,
	   			'names': [
					['ARAYA MORALES RODRIGO ALEJANDRO (RD)', false],
				]
	   		},
	   		'Por un Chile Justo y Descentralizado': {
	   			'parties': [['PPD', 1],['PRSD', 2],['PCCH',1]],
				'color': colores['rojo-oscuro'],
	    		'seats': 4,
	    		'names': [
					['MEDINA MARTINEZ WASHINGTON (PPD)', false],
					['URIBE ALVARADO JULIO (PRSD)', false],
					['NAHUELQUIN DELGADO MARCIA ALEJANDRA (PCCH)', false],
					['VILLARROEL PINILLA GUSTAVO (PRSD)', false],
				]
	    	},
	   		'Unidos por la Descentralización': {
	   			'parties': [['PDC', 3], ['PSCH', 1]],
				'color': colores['violeta'],
	    		'seats': 4,
	    		'names': [
					['ABELLO MOLL JORGE PATRICIO (PDC)', false],
					['GONZALEZ BORQUEZ SERGIO ARTURO (PDC)', false],
					['MARTINIELLO AVILA ROCCO ANTONIO (PDC)', false],
					['MACIAS PALMA ANDREA JACQUELINE (PSCH)', false],
				]
	    	}
	    },
    	{
    		'Frente Amplio': true,
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
    ],
    'Región de Magallanes y Antártica Chilena': [
    	{
    		'Chile Vamos RN-EVO': {
    			'parties': [['RN',2],['IND', 2]],
				'color': colores['azul'],
    			'seats': 4,
    			'names': [
					['MONCADA SALAZAR RODOLFO (RN)', false],
					['GARRIDO PINO MARCELO (IND)', false],
					['RISPOLI GINER ANTONIO (RN)', false],
					['BALICH ROJEL JORGE (RN) (IND)', false],
				]
    		},
   			'Chile Vamos UDI-PRI': {
   				'parties': [['UDI', 2]], 
				'color': colores['azul-marino'],
   				'seats': 2,
   				'names': [
					['GALLARDO CONCHA ROXANA (UDI)', false],
					['WARNER ALVAREZ YAMMY (UDI)', false],
				]
   			},
   			'Por un Chile Justo y Descentralizado': {
   				'parties': [['PPD', 1],['IND', 1],['PCCH', 1]],
				'color': colores['rojo-oscuro'],
    			'seats': 3,
    			'names': [
					['LOPEZ ESPAÑA ANDRES (PPD)', false],
					['BOCCAZZI CAMPOS EMILIO OSCAR (IND)', false],
					['VUKUSICH COVACIC JUAN FELIPE (PCCH)', false],
				]
    		},
   			'Unidos por la Descentralización': {
   				'parties': [['PDC', 2],['PSCH', 2],['IND', 1]],
				'color': colores['violeta'],
   				'seats': 5,
   				'names': [
					['LONCON GUALA MANUEL ARISTIDES (PDC)', false],
					['LOBOS VASQUEZ RAMON (PSCH)', false],
					['SIERPE GALLARDO MIGUEL ANGEL (PDC)', false],
					['BRADASIC SILLARD ANTONIO (PSCH)', false],
					['SOTO ESPAÑA TOLENTINO SEGUNDO (IND)', false],
				]
   			}
   		},
    	{
    		'Por un Chile Justo y Descentralizado': true,
    		'Unidos por la Descentralización': true,
    		'Chile Vamos RN-EVO': true,
    		'Chile Vamos UDI-PRI': true
    	}
   	]
};

function addSourceCores(map) {
	map.addSource('cores-data',
    	{
            'type': 'vector',
            'url': 'mapbox://mauro-escobar.5vdcnd9t',
        }
    );
};

function addLayerCores(map) {
	map.addLayer({
        'id': 'cores',
        'type': 'fill',
        'source': 'cores-data',
        'source-layer': 'cores2017-11-0by2rp',
        'filter': ['has', 'Conc01_Nom'],
        'paint': {
            'fill-color': [
            	'match', ['get', 'Conc01_Lis'],
            	'Chile Vamos RN-EVO', colores['azul'],
            	'Chile Vamos UDI-PRI', colores['azul-marino'],
            	'Sumemos', colores['celeste'],
            	'Unidos por la Descentralización', colores['violeta'],
            	'Por un Chile Justo y Descentralizado', colores['rojo-oscuro'],
            	'Frente Amplio', colores['verde-agua'],
            	'Frente Ecologista y Ciudadano', colores['verde2'],
            	'Coalición Regionalista Verde', colores['verde'],
            	colores['gris']
            ],
            'fill-opacity': [
            	'interpolate',
            	['linear'],
            	['get', 'Conc01_PctL'],
            	15, 0.4,
            	35, 0.8
            ]
        },
    }, 'regiones-outline');
    map.setLayoutProperty('cores', 'visibility', 'none');	
};

function popCores(map,clicked) {
	map.on('mousemove', 'cores', function (e){
	    map.getCanvas().style.cursor = 'pointer';
		var region = e.features[0].properties.REGION;
		var prov = e.features[0].properties.PROV;
		var circ = e.features[0].properties['NOM_CIRC'];
		var nconc = e.features[0].properties['NConcReg'];
		var concejeros = '<table style="border-collapse:collapse">';
		var lista_ant = '';
		for (i = 1; i <= nconc; i++) {
			var beg = 'Conc';
			if (i<10) beg += '0';
			beg += i;
			var lista = e.features[0].properties[beg+'_Lis'];
			var partido = e.features[0].properties[beg+'_Ptd'];
			var perct = e.features[0].properties[beg+'_Pct'];
			var perctL = e.features[0].properties[beg+'_PctL'];
			if (lista!=lista_ant) {
				concejeros += '<tr><td colspan=2><span style="font-weight:bold">'+lista+'</span></td>';
				concejeros += '</td><td style="padding-left:10px;text-align:right;font-weight:bold">'+perctL+'%</td></tr>';
			};
			concejeros += '<tr>';	
			concejeros += '<td><span class="legend-key" style="background-color:'+coloresCORE[lista]+'"></span>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem')) {
				concejeros += '<strike>'+e.features[0].properties[beg+'_Nom']+'</strike>';
			} else {
				concejeros += e.features[0].properties[beg+'_Nom'];
			}
			concejeros += '</td><td style="padding-left:10px">'+partido+'</td>';
			concejeros += '</td><td style="padding-left:10px;text-align:right">'+perct+'%</td>';
			concejeros += '</tr>';
			if (e.features[0].properties.hasOwnProperty(beg+'_Rem') && e.features[0].properties[beg+'_Rem']!="") {
				concejeros += '<tr>'
				concejeros += '<td colspan=3 style="padding-left:16px"> reemplazado/a por '
				concejeros += e.features[0].properties[beg+'_Rem'] +'</td>'
				concejeros += '</tr>'	
			}
			lista_ant = lista;
		}
		concejeros += '</table>';

		var comunas = '';
		var count = 1;
		var comStr = e.features[0].properties.COMUNAS;
		for (key in comStr) {
			if (!['{','}','1','2','3','4','5','6','7','8','9','0','"',':',','].includes(comStr[key])) comunas += comStr[key];
			if ([','].includes(comStr[key])){ 
				comunas += ', ';
				count += 1;
				if (count==4) {count=0; comunas += '<br>';}
			}
		}

		popup.setLngLat(e.lngLat)
			.setHTML(
				'<h4><span style="font-weight:bold">Circunscripción Provincial '+circ+'</span><br>Comunas: '+comunas+'<br>'+region+'</h4>'+concejeros
				)
			.addTo(map);


	    if (screen.width>=992) {
	    	legend2.style.display = 'block';
	    	legend2.innerHTML = '<div style="font-weight:bold;text-align:center">Consejeros Regionales 2018-2022<br>'+ region+'</div>';
	    	var div = document.createElement('div');
	    	div.style.width = '360px';
	    	div.appendChild(generateSVG(region2cores[region][0], region2cores[region][1], true, "Cores"));
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
	});
	map.on('mouseleave', 'cores', function () {
	    map.getCanvas().style.cursor = '';
	    popup.remove();
	    if (screen.width>=992 & !clicked) {
	    	legend2.style.display = 'none';
	    }
	});
};

function mostrarCORES() {
	clean();
	map.setLayoutProperty('regiones-outline', 'visibility', 'visible');
    //map.setLayoutProperty('comunas-outline', 'visibility', 'visible');	
    map.setLayoutProperty('cores', 'visibility', 'visible');
	document.getElementById('a-cores').style.color = 'black';

	parliament = {
		'Chile Vamos RN-EVO': {
			'seats': 76,
			'color': colores['azul'],
			'parties': [['RN', 71], ['EVO', 5]]
		},
		'Unidos por la Descentr.': {
			'seats': 71,
			'color': colores['violeta'],
			'parties': [['PDC', 45], ['PS', 26]]
		},
		'Chile Vamos UDI-PRI': {
			'seats': 56,
			'color': colores['azul-marino'],
			'parties': [['UDI', 52], ['PRI', 4]]
		},
		'Por un Chile Justo y Descentr.': {
			'seats': 45,
			'color': colores['rojo-oscuro'],
			'parties': [['PPD', 23], ['PCCH', 12], ['PRSD', 8], ['MAS', 1], ['IC', 1]]
		},
		'Frente Amplio': {
			'seats': 19,
			'color': colores['verde-agua'],
			'parties': [['RD', 8], ['PH', 6], ['IGUAL', 2], ['COM', 2], ['CS',1]]
		},
		'Por Todo Chile': {
			'seats': 1,
			'color': colores['rosado'],
			'parties': [['PRO', 1]]
		},
		'Sumemos': {
			'seats': 2,
			'color': colores['celeste'],
			'parties': [['AMPLI', 2]]
		},
		'Coalición Regionalista Verde': {
			'seats': 2,
			'color': colores['verde'],
			'parties': [['FREVS', 2]]
		},
		'Frente Ecologista y Ciudadano': {
			'seats': 2,
			'color': colores['verde2'],
			'parties': [['PODER', 2]]
		},
		'Integración para el Desarrollo': {
			'seats': 1,
			'color': colores['naranja'],
			'parties': [['PLIR', 1]]
 		},
		'Fuera de Pacto': {
			'seats': 2,
			'color': colores['gris'],
			'parties': [['IND', 2]]
 		}
	}


	legend.style.display = 'block';
    legend2.style.display = 'none';

	legend.appendChild(getParliamentTable(parliament));

  var div = document.createElement('div');
  var span = document.createElement('span');
  div.style.marginTop = '20px';
  span.style.fontSize = '0.9em';
  span.innerHTML = '© Mauro Escobar 2021<br>Datos obtenidos de servelelecciones.cl';
  div.appendChild(span);
  legend.appendChild(div);
}
