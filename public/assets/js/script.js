

const login = {

  usuarios: [
    {
      "id": "1",
      "login": "admin",
      "senha": "123",
      "nome": "Administrador do Sistema",
      "email": "admin@gmail.com"
    },
    {
      "id": "1",
      "login": "maria",
      "senha": "abc",
      "nome": "Maria Eduarda",
      "email": "maria@gmail.com"
    }
  ]
}
  
// variavel que mantem os dados do usuário logado
let usuario = null;

function checkLoggedUser() {
    const usuarioStr = sessionStorage.getItem ('usuario')

    if (!usuarioStr) {
        location.href = 'login.html'
    }

    usuario = JSON.parse (usuarioStr)
    return true
}

function loginUser (login, password) {
    const usuarioObj = dados.usuarios.find (elem => (elem.login === login) 
                         && (elem.senha === password))

    if (!usuarioObj) {
        return false
    }
    else {
        sessionStorage.setItem ('usuario', JSON.stringify(usuarioObj))
        return true
    }
}

function logoutUser () {
    sessionStorage.clear ();
    location.href = "login.html"
}