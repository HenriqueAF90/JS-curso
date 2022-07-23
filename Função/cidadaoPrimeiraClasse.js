// função literal
function fun1 (){}
// função dentro de uma variavel
// nesse caso para chamar a função só precisamos informar o nome da váriavel ()
const fun2 = function () {}

// função dentro de um objeto
//delcara um objeto 
const obj = {}
obj.nome = function () {console.log("teste")}

obj.nome()

//salvar uma função dentro de um array
const meuArray = []
meuArray = [fun1, fun2, obj.nome]


