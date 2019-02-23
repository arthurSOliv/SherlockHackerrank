/*Essa função irá rotacionar os valores de um array e mostrar alguns valores,
 para isso entra-se como argumento o número de rotação, o array a ser rotacionado
  e outro array que contém os indices dos elementos que se deseja mostrar.
 */
function rotacionar(n,s,q){
	for(var i=0; i<n; i++){
		s.unshift(s[s.length-1]); //o metodo unshift adiciona um elemento no inicio do array, nesse caso ele irá adicionar o ultimo elemento no inicio do array
		s.pop();                  //o metodo pop irá retirar o ultimo elemento do array, que foi o elemento copiado para o inicio do array
		console.log(s);
	}

	for(var i=0; i<q.length; i++){
		console.log(s[q[i]]);        //Aqui, de acordo com o array de indices, será mostrado os valores pedidos.
	}
}


//teste
rotacionar(2, [1,2,3,4], [2,3]);