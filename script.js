/*var etudiant = {
	init : function(nom, prenom, age) {
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
	}
};

var etudiant1 = Object.create(etudiant);
etudiant1.init('Guyard', 'Pierre', 25);

var etudiant2 = Object.create(etudiant);
etudiant2.init('Glacius', 'Fraland', 30);

var session = [];
session.push(etudiant1);
session.push(etudiant2);

console.log(session[1].nom);*/

/*for (i = 0; i <= 100; i++) {
 if (i % 5 == 0 || i % 7 == 0) {
 console.log(i);
 }
 }*/

/*var tab = [ 9, 1, 5, 7 ];

function trie(tableau) {
	var tabTrie = [];
	
	for (var i = 0; i < tableau.length; i++) {
		var currentMin = i;
		if (value < tableau[i]) {
			tabTrie.push(value);
			value = tableau[i];
		} else {
			value = tableau[i];
			tabTrie.push(value);
		}
	}

	return tabTrie;
}*/

/*var mem = {};
function fibonacci(n){
	cpt++;
	console.log('FIB', n);
	if(mem[n]!==undefined){
		return mem[n];
	}
	
	if(n === 0 || n === 1){
		mem[n] = 1;
		return mem[n];
	}else{
		mem[n] = fibonacci(n-1) + fibonacci(n-2);
		return mem[n];
	}
}

var cpt = 0;
console.log(fibonacci(8), cpt);

function exp(n){
	return Math.pow(2,n);
}

console.log(exp(25));*/

/*function Personne(){
	 this.nom = 'nobody';
}

Personne.prototype.setDateNaissance = function(date) {
	this.date = date;
}

Personne.prototype.getAge = function() {
	return Math.floor((new Date() - this.date) / 1000 / 60 / 60 / 24);
}

Personne.prototype.afficheAge = function() {
	var jour = this.getAge();
	var a = Math.floor(jour / 365.25);
	var m = Math.floor((jour - (a*365.25)) / 30);
	var j = Math.floor((jour - (a*365.25) - (m*31)) / 1);
	return '(' + a + 'ans,' + m + 'mois, ' + j + ')';
	
}

var p1 = new Personne();

p1.setDateNaissance(new Date(1994, 11, 29));
console.log(p1.afficheAge());*/
var nextID = 0;
var biblio = [];

function creerLivre(titre, emprunte){
	var livre = {
		id : nextID++,
		titre : titre,
		emprunte : emprunte	
	}
	biblio.push(livre);
	ajouterElement();
	dessine2();
	return livre;
}


 var l1 = creerLivre('L1', true); 
 var l2 = creerLivre('L2', false); 
 var l3 = creerLivre('L3', true);


function ajouterElement(){
	 var ul = document.getElementById("mylist");
	 // vide la liste car je vais la recreer en entier !!
	 ul.innerHTML = '';
	 
	 for(var i = 0; i < biblio.length; i++){
		 createLi(ul, biblio[i].titre, biblio[i].emprunte);
	 }
}

function validateForm() {
    var title = document.forms["myform"]["title"].value;
    if (title == "") {
        alert("Name must be filled out");
        return false;
    }
    var livre = creerLivre(title, document.getElementById("myCheck").checked);
}

function createLi(ul, text, emprunt){
	var li = document.createElement("li");
	if(emprunt == true){
		li.style.color = "green";
	}
	else{
		li.style.color = "red";
	}
	li.appendChild(document.createTextNode(text));
	ul.appendChild(li);
}

function nbLivre(){
	return biblio.length;
}

function nbLivreDispo(){
	return biblio
			.filter(livre => livre.emprunte == false)
			.length;
}

function tauxLivreEmprunte(){
	return ((nbLivre() - nbLivreDispo())/nbLivre());
}

console.log(nbLivre());
console.log(nbLivreDispo());
console.log(tauxLivreEmprunte() + '%');

window.onload = function() { 
    document.getElementById("nbElemTotal").innerHTML = (nbLivre() - nbLivreDispo()) + "/" +  nbLivre();
};


function dessine2(){
	 var canvas = document.getElementById('mon_canvas');
     if(!canvas)
     {
         alert("Impossible de récupérer le canvas");
         return;
     }

     var context = canvas.getContext('2d');
     if(!context)
     {
         alert("Impossible de récupérer le context du canvas");
         return;
     }

     dessinePath(context, 0, Math.PI * 2 * tauxLivreEmprunte(), 'red');
     dessinePath(context, Math.PI * 2 * tauxLivreEmprunte(), Math.PI * 2, 'green');
}

function dessinePath(context, start, stop, color){
	context.beginPath(); // On démarre un nouveau tracé.
    context.arc(100, 100, 80, start, stop); // On trace la courbe
	context.lineTo(100,100);								// délimitant notre
															// forme
    context.fillStyle=color;
    context.fill(); // On utilise la méthode fill(); si l'on veut une forme
					// pleine
   
    context.closePath();
}