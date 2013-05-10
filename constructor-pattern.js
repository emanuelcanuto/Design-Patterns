/*
  Em uma liguagem orientada a objetos usamos contrutores para inicializar 
	objetos da classe. Usaremos o padrão contrutor para criar tipos específicos 
	de objetos preparando aceitação argumentos para setar valores para seus
	atributos e metodos
*/

// criação de objetos
var novoObjeto = {};

var novoObjeto = Object.create(null);

var novoObejto = new Object();

// syntax ponto
novoObejto.propriedadesIntelectual = "Média baixa"; // set
var propriedadesIntelectual = novoObejto.propriedadesIntelectual; // get

// syntax colchetes
var novoObejto = new Object();
novoObejto["propriedadesIntelectual"] = "Média baixa"; // set
var propriedadesIntelectual = novoObejto["propriedadesIntelectual"];

// definição de propriedades
Object.defineProperty( novoObejto, "propriedadesIntelectual", {
    value: "Média baixa",
    writable: true,
    enumerable: true,
    configurable: true
});


/* 
	JavaScript não suporta o conceito de classes, mas ele tem função de construtor 
	com a palavra "new", dizemos a uma função para se comportar como um construtor. 	
*/

// construtor básico
function PropriedadesIntelectual (nivel) {
	this.nivel = nivel;

	this.getNivel = function () {
		return "Seu nível é: " + this.nivel;
	}
}

var propriedadesIntelectual = new PropriedadesIntelectual("Média baixa");
propriedadesIntelectual.getNivel();
