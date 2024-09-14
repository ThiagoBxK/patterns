## Singleton

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
