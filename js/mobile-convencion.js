var map = document.getElementById('map');

var div_plot = document.createElement('div');
div_plot.id = 'div-plot';
var div_menu = document.createElement('div');
div_menu.id = 'div-menu';

map.style.textAlign = 'center';
div_plot.style.textAlign = 'center';

if (screen.width<screen.height*3/2) {
	map.style.top = '35px';
	div_plot.style.padding = '1%';
	div_menu.style.padding = '1%';
	div_plot.style.width = '98%';
	div_menu.style.width = '98%';
	div_plot.style.height = '45%';
	div_menu.style.height = '35%';
} else {
	map.style.top = '30px';
	div_plot.style.padding = '3px';
	div_menu.style.padding = '3px';
	div_plot.style.height = screen.height-40+'px';
	div_menu.style.height = screen.height-40+'px';
	div_plot.style.width = '50%';
	div_menu.style.width = '45%';
	div_plot.style.float = 'left';
	div_menu.style.float = 'right';
}

var div = document.createElement('div');
var span = document.createElement('span');
span.innerHTML = "Busca un convencional: "
span.style.fontSize = '0.8em';
span.style.fontFamily = 'Arial, Helvetica, sans-serif';
div.appendChild(span);
var input = document.createElement('input');
input.id = "search-convencional";
input.type = "text";
input.size = 12;
input.addEventListener("keyup", function () {
	var start = this.selectionStart; 
	var end = this.selectionEnd;
	this.value = this.value.toUpperCase();
	this.setSelectionRange(start, end);
	showSearch(this.value);
});
input.style.marginLeft = '5px';
div.style.textAlign = 'center';
div.appendChild(input);
var button = document.createElement('button');
button.type = "button";
button.innerHTML = "Borrar";
button.addEventListener("click", function () {
	document.getElementById("search-convencional").value = "";
	showSearch("");
})
div.appendChild(button);
div.style.marginBottom = "5px";
div_plot.appendChild(div);

var div_parl = document.createElement('div');
div_parl.style.width = '100%';
div_parl.style.height = '80%';
div_parl.appendChild(generateSVG(conv_parliament, conv_parliament_order, true, "Convencional", conv_directiva, conv_grupos, conv_coordinadores));
div_plot.appendChild(div_parl);
var span = document.createElement('span');
span.id = 'lista-seat';
span.innerHTML = '<br>';
span.style.fontSize = '0.8em';
span.style.fontFamily = 'Arial, Helvetica, sans-serif';
div_plot.appendChild(span);
var span = document.createElement('span');
span.id = 'nombre-seat';
span.innerHTML = 'Toca los puntos...';
span.style.width = '100%';
span.style.textAlign = 'center';
span.style.fontSize = '0.8em';
span.style.fontFamily = 'Arial, Helvetica, sans-serif';
div_plot.appendChild(span);

var div = document.createElement('div');
div.style.margin = "10px";
//div.style.borderTop = 'solid';
//div.style.borderWidth = '1px';
div.style.textAlign = 'center';
div.style.fontFamily = 'Arial, Helvetica, sans-serif';
div.style.fontSize = '0.8em';
var span = document.createElement('span');
span.innerHTML = 'O haz click sobre uno de los grupos<br>';
div.appendChild(span);
for (grupo in conv_grupos) {
	var span = document.createElement('span');
	if (grupo=="Presupuesto") span.innerHTML = '<br><br>Comisiones · ';
	else if (grupo=="D1") span.innerHTML = '<br><br>Distritos · ';
	else if (grupo=="Mujeres") span.innerHTML = '<br><br>Otros · ';
	else span.innerHTML = ' · ';
	div.appendChild(span);
	var a = document.createElement('a');
	a.onclick = clickGroup;
	var span = document.createElement('span');
	span.id = 'span-'+grupo.replace(/ /g,"-");
	span.innerHTML = grupo;
	span.style.fontWeight = 'bold';
	span.className = "grupo"
	a.appendChild(span);
	div.appendChild(a);
}
div_menu.appendChild(div);


map.appendChild(div_plot);
map.appendChild(div_menu);