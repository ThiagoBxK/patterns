// Estrutura do usuário
type IUser = {
  name: string;
  age: number;
};

class Monostate {
  // Lista estática de usuários compartilhada entre todas as instâncias da classe
  private static _sharedUsers: Array<IUser> = [];

  // Retorna o estado atual da lista de usuários
  public get users() {
    return Monostate._sharedUsers;
  }

  // Registra um novo usuário na lista compartilhada
  public registerUser(newUser: IUser) {
    Monostate._sharedUsers.push(newUser);
  }
}

export default Monostate;
