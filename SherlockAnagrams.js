
//Função que irá criar substrings da string mãe e retornar em um array.
function criaSubstrings(s) {
  var substrings = [];
    for(var j = 1; j <= s.length; j++) {
		for(var i = 0; i <= s.length - j; i++) {
	    	substrings.push(s.slice(i, i+j));  //metodo push irá adicionar a letra ao array, que é separada pelo metodo slice.
		}
	}
  return substrings;
};

//Essa função irá retirar o valores vazios do array substrings criado. Essa função chama a função separaSubstrings(s).
function retiravazio(s){
	var substrings = criaSubstrings(s);
		var filtered = substrings.filter(function (el) { //uso a função filter para filtrar cada valor vazio do array.
  			return el != "";
		});
	return filtered;
};

//Essa função irá chamar as duas funções anteriores, e testar se existe anagramas entre as substrings formadas.
function anagram(s){
	var filtered = [];
	filtered = retiravazio(s);
	var  count = 0;

	for ( var i = 0; i < filtered.length; i++) {

	    var word = filtered[i];
	    var alphabetical = word.split("").sort().join(""); //Essa função separa cada letra das de uma substring e ordena de forma alfabetica.

	    for (var j = 0; j < filtered.length; j++) {

	        if (i === j) {
	            continue;
	        }

	        var other = filtered[j];
	        if(alphabetical === other.split("").sort().join("")){   //Aqui é feito a comparação entre cada string, se for igual é considerado um anagrama.
	            console.log(word + " - " + other + " (" + i + ", " + j + ")");
	            count++;
	        }
	    }
	} return count/2;
};

//teste
anagram('abba');

/* Para utilização do código, basta colar as funções no console do navegador, e chamar a função anagram, passando como argumento 
a string mãe, como acima!*/