// Sobre funções

function greet (name = "World"){
    console.log("Hello, " + name)
}

greet()
greet("Gabriel")

//Funções retorandno algo

function hello(name = "dev"){
    return "Hello, " + name;
}

const ola = hello();