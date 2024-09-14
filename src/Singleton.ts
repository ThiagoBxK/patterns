class Singleton {
  // A instância da classe é armazenada em uma propriedade estática
  private static _instance: Singleton;

  // Torna o construtor privado impedindo a criação de novas instâncias fora da própria classe
  private constructor() {}

  // Metodo publico e estático que retorna a única instancia da classe
  public static get instance(): Singleton {
    // Caso a instância não existe ela sera criada uma unica vez
    if (!Singleton._instance) Singleton._instance = new Singleton();

    return Singleton._instance;
  }
}

export default Singleton;
