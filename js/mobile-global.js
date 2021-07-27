var colores = {
	'azul': '#3b83bd', 
	'azul-marino': '#00008B', 
	'violeta': '#985698', 
	'marron': '#A0522D', 
	'verde-agua': '#00B771',
	'verde': '#008000', 
	'verde2': '#a9dfbf',
	'rojo': '#ff0000', 
	'rojo-oscuro': '#CC0000', 
	'amarillo': '#f9d71c', 
	'naranja': '#ffa500',
	'gris': '#797979', 
	'gris-claro': '#d3d3d3', 
	'blanco': '#ffffff', 
	'suave': '#f8ca92', 
	'negro': '#000000',
	'rosado': '#e6007e',
	'celeste': '#00aae4',
    'tab:red': '#d62728',
    'tab:blue': '#1f77b4',
    'tab:orange': '#ff7f0e',
    'tab:green': '#2ca02c',
    'tab:purple': '#9467bd' 
};

function capitalize(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
};


var selectedGroup = false;
var seatClicked = false;
var searching = false;
var groupClicked = "";
var groupSelected = "";
var nameClicked = "";

function cleanPainted() {
    var els = document.getElementsByClassName("grupo");
    for (var i = 0; i < els.length; i++) {
       els[i].style.opacity = 1;
    }
    var els = document.getElementsByClassName("parliament-seat");
    for (var i = 0; i < els.length; i++) els[i].style.opacity=1;
    var els = document.getElementsByClassName("coordinators");
    for (var i = 0; i < els.length; i++) els[i].style.opacity=0;
}

function touchParliamentSeatEvt(evt) {
    var svgobj=evt.target; 
    touchParliamentSeat(svgobj,true);
}
function touchParliamentSeat(svgobj, paintParty=false) {
    if (!selectedGroup && !seatClicked && !searching) {
        var indep = ['Fuera-de-Pacto','Candidaturas-Independientes'];
        if (paintParty && svgobj.dataset.hasOwnProperty("party") && !indep.includes(svgobj.dataset.party)) {
            var color = colores['negro'];
            if (svgobj.dataset.hasOwnProperty("color")) color = svgobj.dataset.color;
            var party = svgobj.dataset.party;   
            var els = document.getElementsByClassName(party);
            var count = els.length;
            for (var i = 0; i < els.length; i++) {
                if (els[i].dataset.hasOwnProperty("dotted")) count--;
            }
            if (count==1) var escanos = count + " escaño";
            else var escanos = count + " escaños";
            var span = document.getElementById('lista-seat');
            if (span) span.innerHTML = '<span style="font-weight:bold;color:'+color+'">'+party.replace(/-/g," ")+":</span> "+escanos+'<br>';

            var els = document.getElementsByClassName("parliament-seat");
            for (var i = 0; i < els.length; i++) {
                if (!els[i].classList.contains(party)) els[i].style.opacity=0.2;
            }
        } else if (svgobj.dataset.hasOwnProperty("name")) {
            var els = document.getElementsByClassName("parliament-seat");
            for (var i =0; i < els.length; i++) els[i].style.opacity = 0.2;
            var els = document.getElementsByClassName(svgobj.dataset.name.replace(/ /g,"-"));
            for (var i =0; i < els.length; i++) els[i].style.opacity = 1;
        } else {
            var els = document.getElementsByClassName("parliament-seat");
            for (var i =0; i < els.length; i++) els[i].style.opacity = 0.2;
            svgobj.style.opacity = 1;   
        }
        var els = document.getElementsByClassName("grupo");
        for (var i = 0; i < els.length; i++) els[i].style.opacity = 0.2;
        for (var i = 0; i < svgobj.classList.length; i++) {
            var cl = svgobj.classList[i];
            if (true) {
                var span = document.getElementById('span-'+cl);
                if (span) {
                    span.style.color = svgobj.dataset.color;
                    span.style.opacity = 1;
                }
            }
        }
    }   
    var span = document.getElementById('nombre-seat');
    if (span) {
        var name = svgobj.dataset.name;
        if (svgobj.dataset.hasOwnProperty("role")) name += ' - '+svgobj.dataset.role;
        span.innerHTML = '<span>'+name+'</span>';  
    } 
}

function unTouchParliamentSeatEvt(evt) {
    unTouchParliamentSeat();
}
function unTouchParliamentSeat() {
    if (!selectedGroup && !searching) {
        if (!seatClicked){
            var els = document.getElementsByClassName("parliament-seat");
            for (var i =0; i < els.length; i++) els[i].style.opacity = 1;
            var span = document.getElementById('lista-seat');
            if (span) span.innerHTML = '<br>';
        }
        var els = document.getElementsByClassName("grupo");
        for (var i = 0; i < els.length; i++) {
            els[i].style.opacity = 1;
            els[i].style.color = colores['negro'];  
        }
    }
    var span = document.getElementById('nombre-seat');
    if (span) {
        if (!selectedGroup) span.innerHTML = 'Muévete sobre los puntos...';
        else span.innerHTML = '<br>';
    }
}


function clickParliamentSeat(evt) {
    cleanPainted();

    searching = false;
    var svgobj=evt.target;
    var indep = ['Fuera-de-Pacto','Candidaturas-Independientes', ''];
    var party = "";
    if (svgobj.dataset.hasOwnProperty("party")) party = svgobj.dataset.party;
    var color = colores['negro'];
    if (svgobj.dataset.hasOwnProperty("color")) color = svgobj.dataset.color;

    //if (!seatClicked || party!=groupClicked || (indep.includes(party) && nameClicked!=svgobj.dataset.name)) { 
    if (!seatClicked || nameClicked!=svgobj.dataset.name) { 
        seatClicked = true;
        selectedGroup = false;
        groupSelected = "";
        groupClicked = party;
        nameClicked = svgobj.dataset.name;
        var span = document.getElementById('lista-seat');
        if (span) span.innerHTML = '<br>';
    
        var els = document.getElementsByClassName("parliament-seat");
        for (var i =0; i < els.length; i++) els[i].style.opacity = 0.2;
        var els = document.getElementsByClassName(svgobj.dataset.name.replace(/ /g,"-"));
        for (var i =0; i < els.length; i++) els[i].style.opacity = 1;
        
        var span = document.getElementById('nombre-seat');
        if (span) {
            var name = svgobj.dataset.name;
            if (svgobj.dataset.hasOwnProperty("role")) name += ' - '+svgobj.dataset.role;
            span.innerHTML = '<span>'+name+'</span>';  
        }
        var els = document.getElementsByClassName("grupo");
        for (var i = 0; i < els.length; i++) els[i].style.opacity = 0.2;
        for (var i = 0; i < svgobj.classList.length; i++) {
            var cl = svgobj.classList[i];
            if (true) {
                var span = document.getElementById('span-'+cl);
                if (span) {
                    span.style.color = svgobj.dataset.color;
                    span.style.opacity = 1;
                }
            }
        }
    } else {
        seatClicked = false;
        groupClicked = "";
        nameClicked = "";
        var span = document.getElementById('lista-seat');
        if (span) span.innerHTML = '<br>';
        var span = document.getElementById('nombre-seat');
        if (span) span.innerHTML = 'Toca los puntos...';
        var els = document.getElementsByClassName("grupo");
        for (var i = 0; i < els.length; i++) {
           els[i].style.color = colores['negro'];
        }
    }
    document.getElementById('search-convencional').value = "";
}

function clickGroup(evt) {
    var obj = evt.target;
    var cl = obj.innerHTML.replace(/ /g,"-");
    paintGroup(cl);
    if (selectedGroup) {
        obj.style.opacity = 1;
    }
    document.getElementById('search-convencional').value = "";
}

function paintGroup(cl) {
    cleanPainted();
    seatClicked =  false;
    groupClicked = "";
    if (!selectedGroup || groupSelected!=cl) {
        selectedGroup = true;
        groupSelected = cl;
        var span = document.getElementById('nombre-seat');
        if (span) span.innerHTML = '<br>';
    } else {
        selectedGroup = false;
        groupSelected = "";
        var span = document.getElementById('nombre-seat');
        if (span) span.innerHTML = 'Toca los puntos...';
    }
    if (selectedGroup) {
        var els = document.getElementsByClassName("grupo");
        for (var i = 0; i < els.length; i++) els[i].style.opacity = 0.2;
        var els = document.getElementsByClassName("parliament-seat");
        var count = 0;
        for (var i = 0; i < els.length; i++) {
            if (els[i].classList.contains(cl)) els[i].style.opacity=1;
            if (!els[i].classList.contains(cl)) els[i].style.opacity=0.2;
            else if (!els[i].dataset.hasOwnProperty("dotted")) count++;
        }
        var addLegend = false;
        var els = document.getElementsByClassName("coordinators");
        for (var i = 0; i < els.length; i++) {
            if (els[i].classList.contains(cl)) {
                els[i].style.opacity=1;
                addLegend = true;
            }
        }
        if (addLegend) {
            var els = document.getElementsByClassName("parliament-legend");
            for (var i = 0; i < els.length; i++) {
                if (els[i].classList.contains('coordinators')) els[i].style.opacity=1;
                else els[i].style.opacity=0;
            }   
        }
        var span = document.getElementById('lista-seat');
        if (span) span.innerHTML = '<span style="font-weight:bold">'+cl.replace(/-/g," ")+":</span> "+count+' escaños<br>';
    } else {
        var span = document.getElementById('lista-seat');
        if (span) span.innerHTML = '<br>';
    }
}

function showSearch(name) {
    cleanPainted();

    selectedGroup = false;
    seatClicked = false;
    groupClicked = "";
    groupSelected = "";
    nameClicked = "";
    var span = document.getElementById('lista-seat');
    if (span) span.innerHTML = '<br>';
    var els = document.getElementsByClassName("grupo");
    for (var i = 0; i < els.length; i++) {
        els[i].style.opacity = 1;
        els[i].style.color = colores['negro'];
    }
    if (name=="") {
        searching = false;
        var els = document.getElementsByClassName("parliament-seat");
        for (var i = 0; i < els.length; i++) els[i].style.opacity = 1;
    } else {
        searching = true;
        var els = document.getElementsByClassName("parliament-seat");
        for (var i = 0; i < els.length; i++) {
            if (els[i].dataset.hasOwnProperty("name") && els[i].dataset.name.includes(name)) els[i].style.opacity = 1;
            else els[i].style.opacity = 0.2;
        }
    }
}


function constrastColor(hex, factor=20) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // obtain rgb
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    var L1 = 0.2126 * Math.pow(r / 255, 2.2) + 0.7152 * Math.pow(g / 255, 2.2) + 0.0722 * Math.pow(b / 255, 2.2);

    var contrastRatio = (L1 + 0.05) / 0.05;

    if (contrastRatio > factor) return '#000000';
    else return '#FFFFFF';
}

function linearComibationHEX(hex1, hex2, factor) {
    if (hex1.indexOf('#') === 0) {
        hex1 = hex1.slice(1);
    }
    // convert 3-digit hex1 to 6-digits.
    if (hex1.length === 3) {
        hex1 = hex1[0] + hex1[0] + hex1[1] + hex1[1] + hex1[2] + hex1[2];
    }
    if (hex1.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // obtain rgb
    var r1 = parseInt(hex1.slice(0, 2), 16),
        g1 = parseInt(hex1.slice(2, 4), 16),
        b1 = parseInt(hex1.slice(4, 6), 16);


    if (hex2.indexOf('#') === 0) {
        hex2 = hex2.slice(1);
    }
    // convert 3-digit hex2 to 6-digits.
    if (hex2.length === 3) {
        hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2];
    }
    if (hex2.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // obtain rgb
    var r2 = parseInt(hex2.slice(0, 2), 16),
        g2 = parseInt(hex2.slice(2, 4), 16),
        b2 = parseInt(hex2.slice(4, 6), 16);

    var color = rgbToHex(Math.round(r1*factor+r2*(1.-factor)),
                         Math.round(g1*factor+g2*(1.-factor)),
                         Math.round(b1*factor+b2*(1.-factor)));

    return color;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}