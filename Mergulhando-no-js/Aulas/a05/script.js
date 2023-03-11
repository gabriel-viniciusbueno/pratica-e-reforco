// Condições

let me = {
    name: "gabriel",
    age: 19
}

function checkAge (person){
    console.log("idade: " + person.age)
    if(person.age >= 18){
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }
} 

checkAge(me);

