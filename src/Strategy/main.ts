import Transport, { MetroStrategy, UberStrategy } from "./Strategy";

// Por padrão a estratégia escolhida foi a do Uber
const transport = new Transport(new UberStrategy());

// Executa o pagamento da estratégia atual
transport.executePayment();

// Altera a estratégia para o Metro e executar o método de pagamento
transport.setStrategy(new MetroStrategy());
transport.executePayment();
