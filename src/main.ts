import Singleton from "./Singleton";
import Monostate from "./Monostate";

/******** Singleton ********/

// Obtém a instância de forma estática
console.log(Singleton.instance);

/******** Monostate ********/

// Criando duas instancias diferentes
const monostateA = new Monostate();
const monostateB = new Monostate();

// Registra um novo usuário na lista compartilhada
monostateA.registerUser({
  name: "Thiago",
  age: 18,
});

// As duas instancias compartilham a mesma lista, sendo assim retornam o mesmo resultado
console.log(monostateA.users); // Output:[ { name: 'Thiago', age: 18 } ]
console.log(monostateB.users); // Output:[ { name: 'Thiago', age: 18 } ]
