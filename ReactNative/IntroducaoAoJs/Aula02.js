const pessoa = {
    nome: "João",
    signo: "Escorpião",
    idade: "35",
    louco: true,
    parentes: ["Juarez", "Bruno"]
}
//Formato JSON - Java Script Notation Object
console.log(pessoa.nome, pessoa.signo, pessoa.idade, pessoa.parentes);
console.log(typeof pessoa);
console.log(pessoa.parentes[1]);

const celular ={
    nome: "Xiaomi",
    peso: "200g",
    cor: "preto"
}
console.log(pessoa.nome, celular.nome, celular.peso, celular.cor);
console.log(typeof celular);

let dev = ["Kaio", 19, "Desenvolvedor"];
console.log(dev[0], dev[1], dev[2]);
console.log(typeof dev);