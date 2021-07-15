function seatSum(parliament) {
	var result = 0;
	for (party in parliament) {
		result += parliament[party].seats;
	}
	return result;
}
function calculateSeatDistance(seatCount, numberOfRings, r) {
	var x = Math.PI * numberOfRings * r / (seatCount - numberOfRings);
	var y = 1 + Math.PI * (numberOfRings - 1) * numberOfRings / 2 / (seatCount - numberOfRings);
	return x / y;
}
function score(m, n, r) {
	return Math.abs(calculateSeatDistance(m, n, r) * n / r - 5 / 7);
}
function calculateNumberOfRings(seatCount, r) {
	var n = Math.floor(Math.log(seatCount) / Math.log(2)) || 1;
	var distance = score(seatCount, n, r);

	var direction = 0;
	if (score(seatCount, n + 1, r) < distance) direction = 1;
	if (score(seatCount, n - 1, r) < distance && n > 1) direction = -1;

	while (score(seatCount, n + direction, r) < distance && n > 0) {
		distance = score(seatCount, n + direction, r);
		n += direction;
	}
	return n;
}
function round(number) {
	return Math.round(number*1000000)/1000000;
}
function coords(r, b) {
	return {
		x: round(r * Math.cos(b / r - Math.PI)),
		y: round(r * Math.sin(b / r - Math.PI))
	};
}
function nextRing(rings, ringProgress, ordered) {
	if (ordered) {
		var progressQuota = 0,
	    	tQuota = 0;
		for (var index = rings.length-1; index >= 0; index--) {
			tQuota = round((ringProgress[index] || 0) / rings[index].length);
			if (progressQuota==0 || tQuota < progressQuota) { progressQuota = tQuota; }
		}
		for (var _index = rings.length-1; _index >= 0; _index--) {
			tQuota = round((ringProgress[_index] || 0) / rings[_index].length);
			
			if (tQuota === progressQuota) return _index;
		}		
	} else {
		for (var i = rings.length-1; i >= 0; i--) {
			if (ringProgress[i] < rings[i].length) return i;
		}
	}

}
function argMax(array) {
 	return [].reduce.call(array, (m, c, i, arr) => c > arr[m] ? i : m, 0)
}
function sainte_lague(rings, seatCount) {
	var assign = [];
	var aux = [];
	for (index in rings) {assign[index] = 0;}
	for (var i = 1; i <= seatCount; i++) {
		for (_index in rings) {aux[_index] = rings[_index]/(2*assign[_index]+1);}
		var idx = argMax(aux);
		assign[idx] +=1;
	}
	return assign;
}
var merge = function merge(arrays) {
	var result = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var list = _step.value;
			result = result.concat(list);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return result;
}
function generatePoints(parliament, r0, directive) {
	var seatCount = seatSum(parliament)-directive.length;
	var numberOfRings = calculateNumberOfRings(seatCount, r0);
	var seatDistance = calculateSeatDistance(seatCount, numberOfRings, r0);

	var rings = [];
	for (var i = 1; i <= numberOfRings; i++) {
		rings[i-1] = r0 - (i - 1) * seatDistance;
	}

	rings = sainte_lague(rings, seatCount);
	var points = [];
	var r = void 0,
	    a = void 0,
	    point = void 0;

	var ring = void 0;
	for (var _i = 1; _i <= numberOfRings; _i++) {
		ring = [];
		// calculate ring-specific radius
		r = r0 - (_i - 1) * seatDistance;
		// calculate ring-specific distance
		a = Math.PI * r / (rings[_i-1] - 1 || 1);

		// loop points
		for (var j = 0; j <= rings[_i-1] - 1; j++) {
			point = coords(r, j * a);
			point.r = 0.4 * seatDistance;
			ring.push(point);
		}
		points.push(ring);
	}

	var ringProgress = Array(points.length).fill(0);
	var blackDots = [];

	var mesa = {};
	var mesaPoints = [];
	var maxRow = {};
	var row;
	for (var i = 0; i < directive.length; i++) {
		row = directive[i][2];
		if(!Object.keys(maxRow).includes(""+row)) maxRow[row] = 0;
		maxRow[row] += 1;
	}
	
	for (var i = 0; i < directive.length; i++) {
		var row = directive[i][2];
		var col = directive[i][3];
		mesa[directive[i][1]] = [i,directive[i][0]];
		point = {x: (-maxRow[row]/2.0+col+0.5)*seatDistance, y: -seatDistance*row, r: 0.4 * seatDistance};
		mesaPoints.push(point);
	}


	for (var party in parliament) {
		for (var _i2 = 0; _i2 < parliament[party].seats; _i2++) {
			if (!Object.keys(mesa).includes(parliament[party].names[_i2][0])) {
				ring = nextRing(points, ringProgress, parliament[party].ordered);
				points[ring][ringProgress[ring]].fill = parliament[party].color;
				points[ring][ringProgress[ring]].color = parliament[party].color;
				points[ring][ringProgress[ring]].party = party.replace(/ /g,"-");
				if (parliament[party].hasOwnProperty('names')) {
					points[ring][ringProgress[ring]].name = parliament[party].names[_i2][0];
					if (parliament[party].names[_i2][1]) {
						var newpoint = {};
						newpoint.x = points[ring][ringProgress[ring]].x;
						newpoint.y = points[ring][ringProgress[ring]].y;
						newpoint.r = points[ring][ringProgress[ring]].r/2.8;
						newpoint.fill = colores['negro'];
						newpoint.color = parliament[party].color;
						newpoint.name = parliament[party].names[_i2][0];
						newpoint.party = party.replace(/ /g,"-");
						blackDots.push(newpoint);
					}
				} else if (parliament[party].hasOwnProperty('dotted') && _i2<parliament[party].dotted) {
					var newpoint = {};
					newpoint.x = points[ring][ringProgress[ring]].x;
					newpoint.y = points[ring][ringProgress[ring]].y;
					newpoint.r = points[ring][ringProgress[ring]].r/2.8;
					newpoint.fill = colores['negro'];
					newpoint.color = parliament[party].color;
					blackDots.push(newpoint);
				}
				ringProgress[ring]++;
			} else {
				var name = parliament[party].names[_i2][0]
				mesaPoints[mesa[name][0]].fill = parliament[party].color;
				mesaPoints[mesa[name][0]].color = parliament[party].color;
				mesaPoints[mesa[name][0]].party = party.replace(/ /g,"-");
				if (parliament[party].hasOwnProperty('names')) {
					mesaPoints[mesa[name][0]].name = name;
					mesaPoints[mesa[name][0]].role = mesa[name][1]
					if (parliament[party].names[_i2][1]) {
						var newpoint = {};
						newpoint.x = mesaPoints[mesa[name][0]].x;
						newpoint.y = mesaPoints[mesa[name][0]].y;
						newpoint.r = mesaPoints[mesa[name][0]].r/2.8;
						newpoint.fill = colores['negro'];
						newpoint.color = parliament[party].color;
						newpoint.name = parliament[party].names[_i2][0];
						newpoint.party = party.replace(/ /g,"-");
						blackDots.push(newpoint);
					}
				} else if (parliament[party].hasOwnProperty('dotted') && _i2<parliament[party].dotted) {
					var newpoint = {};
					newpoint.x = mesaPoints[mesa[name][0]].x;
					newpoint.y = mesaPoints[mesa[name][0]].y;
					newpoint.r = mesaPoints[mesa[name][0]].r/2.8;
					newpoint.fill = colores['negro'];
					newpoint.color = parliament[party].color;
					blackDots.push(newpoint);
				}
			}
		}
	}
	return [merge(points), merge(blackDots), mesaPoints];
}

function generateSVG(_parliament, order, seatCount, type, directive=[], groups={}) {
	var name2groups = {};
	for (var group in groups) {
		for (var i = 0; i < groups[group].length; i++) {
			var name = groups[group][i];
			if (Object.keys(name2groups).includes(name)) name2groups[name] += " "+group.replace(/ /g,"-");
			else name2groups[name] = " "+group.replace(/ /g,"-");
		}
	}

	var parliament = {};
	for (party in order) {
		parliament[party] = _parliament[party];
		_parliament[party].ordered = order[party];
	}
	var radius = 20;
	var ret = generatePoints(parliament, radius, directive);
	var points = ret[0];
	var blackDots = ret[1];
	var mesaPoints = ret[2];
	var a = points[0].r / 0.4;
	
	var maxRow = {};
	var row;
	for (var i = 0; i < directive.length; i++) {
		row = directive[i][2];
		if(!Object.keys(maxRow).includes(""+row)) maxRow[row] = 1;
		maxRow[row] += 1;
	}

	var xmlns = "http://www.w3.org/2000/svg";
	var x = -radius - a / 2;
	var y = -radius - a / 2;
    var boxWidth = 2 * radius + a;
    if (blackDots.length > 0) var boxHeight = radius + 2.5*a;
    else var boxHeight = radius + a;

    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", x + " " + y + " " + boxWidth + " " + boxHeight);
	svgElem.setAttributeNS(null, "width", "100%");
    svgElem.setAttributeNS(null, "height", "100%");
    svgElem.setAttributeNS(null, "baseProfile", "tiny");
    svgElem.setAttributeNS(null, "version", "1.2");
    
    for (index in points) {
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "onmousemove", "touchParliamentSeatEvt(evt)");
    	circle.setAttributeNS(null, "onmouseleave", "unTouchParliamentSeatEvt(evt)");
    	circle.setAttributeNS(null, "onclick", "clickParliamentSeat(evt)");
    	circle.setAttributeNS(null, "cx", points[index].x);
    	circle.setAttributeNS(null, "cy", points[index].y);
    	circle.setAttributeNS(null, "r", points[index].r);
    	circle.setAttributeNS(null, "fill", points[index].fill);
    	circle.setAttributeNS(null, "data-name", points[index].name);
    	circle.setAttributeNS(null, "data-party", points[index].party);
    	circle.setAttributeNS(null, "data-color", points[index].color);
    	var cl = "parliament-seat "+points[index].name.replace(/ /g,"-")+" "+points[index].party;
    	if (Object.keys(name2groups).includes(points[index].name)) cl += name2groups[points[index].name];
    	circle.setAttributeNS(null, "class", cl);
    	svgElem.appendChild(circle);
    }
    for (index in mesaPoints) {
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "onmousemove", "touchParliamentSeatEvt(evt)");
    	circle.setAttributeNS(null, "onmouseleave", "unTouchParliamentSeatEvt(evt)");
    	circle.setAttributeNS(null, "onclick", "clickParliamentSeat(evt)");
    	circle.setAttributeNS(null, "cx", mesaPoints[index].x);
    	circle.setAttributeNS(null, "cy", mesaPoints[index].y);
    	circle.setAttributeNS(null, "r", mesaPoints[index].r);
    	circle.setAttributeNS(null, "fill", mesaPoints[index].fill);
    	circle.setAttributeNS(null, "data-name", mesaPoints[index].name);
    	circle.setAttributeNS(null, "data-role", mesaPoints[index].role);
    	circle.setAttributeNS(null, "data-party", mesaPoints[index].party);
    	circle.setAttributeNS(null, "data-color", mesaPoints[index].color);
    	var cl = "parliament-seat "+mesaPoints[index].name.replace(/ /g,"-")+" "+mesaPoints[index].party;
    	if (Object.keys(name2groups).includes(mesaPoints[index].name)) cl += name2groups[mesaPoints[index].name];
    	circle.setAttributeNS(null, "class", cl);
    	svgElem.appendChild(circle);

    }
    for (index in blackDots) {
    	var circle = document.createElementNS(xmlns,"circle");
    	circle.setAttributeNS(null, "cx", blackDots[index].x);
    	circle.setAttributeNS(null, "cy", blackDots[index].y);
    	circle.setAttributeNS(null, "r", blackDots[index].r);
    	circle.setAttributeNS(null, "fill", blackDots[index].fill);
    	if (blackDots[index].hasOwnProperty('name')) {
    		circle.setAttributeNS(null, "data-name", blackDots[index].name);
    		circle.setAttributeNS(null, "data-party", blackDots[index].party);
    		circle.setAttributeNS(null, "data-color", blackDots[index].color);
    		circle.setAttributeNS(null, "data-dotted", "yes");
	    	circle.setAttributeNS(null, "onmousemove", "touchParliamentSeatEvt(evt)");
	    	circle.setAttributeNS(null, "onmouseleave", "unTouchParliamentSeatEvt(evt)");
    		circle.setAttributeNS(null, "onclick", "clickParliamentSeat(evt)");
	    	var cl = "parliament-seat "+blackDots[index].name.replace(/ /g,"-")+" "+blackDots[index].party;
	    	if (Object.keys(name2groups).includes(blackDots[index].name)) cl += name2groups[blackDots[index].name];
	    	circle.setAttributeNS(null, "class", cl);
    	}
    	svgElem.appendChild(circle);
    }
    if (seatCount) {
    	var text = document.createElementNS(xmlns,"text");
    	text.innerHTML = points.length+mesaPoints.length;
	    text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    text.setAttributeNS(null, "text-anchor", "middle");
	    text.setAttributeNS(null, "x", "0");
		text.setAttributeNS(null, "y", -a*4/5*Object.keys(maxRow).length);
    	text.setAttributeNS(null, "font-size", ((0.25-0.05*Object.keys(maxRow).length)*radius)+"px");
    	text.setAttributeNS(null, "class", "parliament-seat");
	    svgElem.appendChild(text);
    }
    if (blackDots.length > 0) {
    	if (type=="Senado") {
	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -3*a);
	    	circle.setAttributeNS(null, "cy", 1.5*a);
	    	circle.setAttributeNS(null, "r", points[0].r);
	    	circle.setAttributeNS(null, "fill", colores['suave']);
	    	circle.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(circle);
	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 1*a);
	    	circle.setAttributeNS(null, "cy", 1.5*a);
	    	circle.setAttributeNS(null, "r", points[0].r);
	    	circle.setAttributeNS(null, "fill", colores['suave']);
	    	circle.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(circle);
	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 1*a);
	    	circle.setAttributeNS(null, "cy", 1.5*a);
	    	circle.setAttributeNS(null, "r", points[0].r/2.8);
	    	circle.setAttributeNS(null, "fill", colores['negro']);
	    	circle.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(circle);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '2018-2026';
	    	text.setAttributeNS(null, "x", -2.5*a);
	    	text.setAttributeNS(null, "y", 1.65*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/2.2+"px");
	    	text.setAttributeNS(null, "text-anchor", "start");
	    	text.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(text);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = '2014-2022';
	    	text.setAttributeNS(null, "x", 1.5*a);
	    	text.setAttributeNS(null, "y", 1.65*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/2.2+"px");
	    	text.setAttributeNS(null, "text-anchor", "start");
	    	text.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(text);
    	} else if (type=='Convencional') {
    		var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", -4*a);
	    	circle.setAttributeNS(null, "cy", 1.5*a);
	    	circle.setAttributeNS(null, "r", points[0].r);
	    	circle.setAttributeNS(null, "fill", colores['suave']);
	    	circle.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(circle);
	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 2*a);
	    	circle.setAttributeNS(null, "cy", 1.5*a);
	    	circle.setAttributeNS(null, "r", points[0].r);
	    	circle.setAttributeNS(null, "fill", colores['suave']);
	    	circle.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(circle);
	    	var circle = document.createElementNS(xmlns,"circle");
	    	circle.setAttributeNS(null, "cx", 2*a);
	    	circle.setAttributeNS(null, "cy", 1.5*a);
	    	circle.setAttributeNS(null, "r", points[0].r/2.8);
	    	circle.setAttributeNS(null, "fill", colores['negro']);
	    	circle.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(circle);
    		var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = 'INDEPENDIENTE';
	    	text.setAttributeNS(null, "x", -3.5*a);
	    	text.setAttributeNS(null, "y", 1.7*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/1.8+"px");
	    	text.setAttributeNS(null, "text-anchor", "start");
	    	text.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(text);
	    	var text = document.createElementNS(xmlns,"text");
	    	text.innerHTML = 'AFILIADO A PARTIDO';
	    	text.setAttributeNS(null, "x", 2.5*a);
	    	text.setAttributeNS(null, "y", 1.7*a);
	    	text.setAttributeNS(null, "font-family", "Arial, Helvetica, sans-serif");
	    	text.setAttributeNS(null, "font-size", a/1.8+"px");
	    	text.setAttributeNS(null, "text-anchor", "start");
	    	text.setAttributeNS(null, "class", "parliament-seat");
	    	svgElem.appendChild(text);
    	}
    }
   	return svgElem;
}

function getParliamentTable(parliament) {
	var table = document.createElement('table');
	for (party in parliament) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');

		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = parliament[party].color;
		item.appendChild(key);
		td1.appendChild(item);

		var value = document.createElement('span');
		value.innerHTML = party;
		if (screen.width>=992) value.innerHTML += ' (' + parliament[party].seats + ')';
		td2.appendChild(value);

		var value2 = document.createElement('span');
		value2.innerHTML = '';
		for (index in parliament[party].parties) {
			value2.innerHTML += ', ' + parliament[party].parties[index][0]
			if (screen.width>=992) value2.innerHTML += ' (' + parliament[party].parties[index][1] + ')';
		}
		value2.innerHTML = value2.innerHTML.substring(2);
		td3.appendChild(value2);
        if (screen.width>=992) td3.style.paddingLeft = '15px';

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	}

	return table;
}
