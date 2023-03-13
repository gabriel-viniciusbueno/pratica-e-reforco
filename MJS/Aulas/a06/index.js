let person = {
    name: "gabriel",
    age: 19
}


//Função pura // AQUELA QUE NÃO ALTERA OS DADOS COLOCADOS NELA
function getRemainYears (person){
    return (21 - person.age)
}

let remain = getRemainYears(person);

console.log(remain);

//FUNÇÃO OMPERATIVA

function increaseAge(person){
    person.age = person.age + 1
}

increaseAge(person);
console.log(person.age)









// EXTRA: BOOLEANOS truthy e falsy

let condition = 0 // FALSY]
let condition2 = 1 // TRUTHY

if (condition){
    console.log("a condição é verdadeira")
}else(
    console.log("A condição é falsa")
)

if (condition2){
    console.log("a condição é verdadeira")
}else(
    console.log("A condição é falsa")
)


