# Singleton

O padrão Singleton garante que terá apenas uma instância da classe durante toda a execução do programa.

A instância da classe é armazenada em uma propriedade estática:

```ts
private static _instance: Singleton;
```

Torna o construtor privado impedindo a criação de novas instâncias fora da própria classe:

```ts
private constructor() {}
```

Metodo publico e estático que retorna a única instancia da classe

```ts
public static get instance(): Singleton {
    // Caso a instância não existe ela sera criada uma unica vez
    if (!Singleton._instance) Singleton._instance = new Singleton();

    return Singleton._instance;
  }
```

# Monostate

O padrão Monostate garante que todas as instâncias da classe irão compartilhar o mesmo estado durante toda a execução do programa

Exemplo: Uma lista de usuários

```ts
private static _sharedUsers: Array<IUser> = [];
```

```ts
// Criando duas instâncias diferentes
const monostateA = new Monostate();
const monostateB = new Monostate();

// Registrando um novo usuário na lista compartilhada
monostateA.registerUser({
  name: "Thiago",
  age: 18,
});

// As duas instâncias compartilham a mesma lista, retornando o mesmo resultado
console.log(monostateA.users); // Output: [ { name: 'Thiago', age: 18 } ]
console.log(monostateB.users); // Output: [ { name: 'Thiago', age: 18 } ]
```

# Strategy

O padrão Strategy permite que você altere dinamicamente o comportamento de um objeto, escolhendo entre diferentes estratégias ou algoritmos que implementam a mesma interface

Garante que todas estrategias irão utilizar o método pay

```ts
interface TransportStrategy {
  pay(): void;
}
```

Exemplo da estratégia do Uber

```ts
export class UberStrategy implements TransportStrategy {
  pay() {
    console.log("Corrida paga, metodo usado: Uber!");
  }
}
```

Método que altera a estratégia atual

```ts
setStrategy(strategy: TransportStrategy) {
  this.strategy = strategy;
}
```

Método que executa o pagamento da estratégia atual

```ts
executePayment() {
  this.strategy.pay();
}
```

Cria um contexto onde a estratégia que será utilizada é a do Uber

```ts
const transport = new Transport(new UberStrategy());
```

Executa o pagamento da estratégia atual, ou seja, a do Uber

```ts
transport.executePayment();
```

Altera a estratégia para o Metro e executar o método de pagamento

```ts
transport.setStrategy(new MetroStrategy());
transport.executePayment();
```

No exemplo, temos algumas estratégias, como Uber, Táxi e Metrô, e todas elas implementam o método pay(). Na classe Transport, temos o método setStrategy(), que permite definir qual será a estratégia atual. Além disso, o método executePayment() é responsável por chamar o método pay() da estratégia que está sendo utilizada no momento.
