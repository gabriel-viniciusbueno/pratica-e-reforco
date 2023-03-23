// Tipo primitivos:

// String
// Number
// Boolean
// Undefined
// Null
//Symbol (Novo do ES6)


/////////
//Uma VAR tem alguns comportamentos como: possibilidade de 'redeclará-las', não é acessível fora de funções

var age = 21

if (age > 18){
    var test = 35
}

console.log(test)