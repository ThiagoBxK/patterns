// Interface onde todas as estratégias devem implementar o método pay
interface TransportStrategy {
  pay(): void;
}

// Implementação da estrategia do Uber
export class UberStrategy implements TransportStrategy {
  pay() {
    console.log("Corrida paga, metodo usado: Uber!");
  }
}

// Implementação da estrategia do Metro
export class MetroStrategy implements TransportStrategy {
  pay() {
    console.log("Ticket pago, metodo usado: Metro!");
  }
}

// Implementação da estrategia do Taxi
export class TaxiStrategy implements TransportStrategy {
  pay() {
    console.log("Corrida paga, metodo usado: Taxi!");
  }
}

class Transport {
  // Estratégia atual
  private strategy: TransportStrategy;

  constructor(strategy: TransportStrategy) {
    this.strategy = strategy;
  }

  // Método que altera a estratégia atual
  setStrategy(strategy: TransportStrategy) {
    this.strategy = strategy;
  }

  // Método que executa o pagamento da estratégia atual
  executePayment() {
    this.strategy.pay();
  }
}

export default Transport;
