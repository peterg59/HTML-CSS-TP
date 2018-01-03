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

var mem = {};
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

console.log(exp(25));