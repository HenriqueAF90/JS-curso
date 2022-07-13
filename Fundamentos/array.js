// o array é heterogeneo, podemos colocar qualquer coisa/
// não tem tamanho fixo

let valores = [5.2, 1, 'nome', 52];
console.log(valores);

// tamanho do array
console.log(valores.length);

//puxar elementos para o array
valores.push({objeto: 'objeto'}, false, null, true);
console.log(valores)