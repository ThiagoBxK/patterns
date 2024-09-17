import Iterator from "./Iterator";

// Exemplo com uma lista de funcionário(a)
const employees = [
  {
    name: "Employee 1",
    salary: 1200,
  },
  {
    name: "Employee 2",
    salary: 2400,
  },
  {
    name: "Employee 3",
    salary: 3600,
  },
];

type Employee = {
  name: string;
  salary: number;
};

// Cria um novo iterator com a tipagem de Employee
const iterator = new Iterator<Employee>(employees);

// Faz uma repetição
while (iterator.hasNext()) {
  const item = iterator.next();
  console.log(item);
}
