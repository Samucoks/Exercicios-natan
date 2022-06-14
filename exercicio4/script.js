let nome = document.getElementById('nome')
let email = document.getElementById('email')
let senha = document.getElementById('senha')
let cpf = document.getElementById('cpf')
let cep = document.getElementById('cep')
let rua = document.getElementById('rua')
let bairro = document.getElementById('bairro')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')

let usuarios = []


function usuario(nome, email, senha, cpf, cep, rua, bairro, cidade, estado){
    return {
    nome: nome,
    email:email,
    senha: senha,
    cpf: cpf,
    cep: cep,
    rua: rua,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    }
    
}

function enviar(){
   const novousuario = usuario(nome.value, email.value, senha.value, cpf.value, cep.value, rua.value, bairro.value, cidade.value, estado.value)
   add(novousuario)


}
function add(parametro){
    usuarios.push(parametro)
    console.log(usuarios)
}













