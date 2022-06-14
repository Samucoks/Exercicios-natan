let rua = document.getElementById('rua')
let bairro = document.getElementById('bairro')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')


function buscarCep(){
    let cep = document.getElementById('cep').value 
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let requisicao = fetch(url)
    requisicao.then(response =>{
        let response2 = response.json()
        response2.then(response3 =>{
            let responseF = response3
            rua.innerText = responseF.logradouro
            bairro.innerText = responseF.bairro
            cidade.innerText = responseF.localidade
            estado.innerText = responseF.uf
        })
        response2.catch(erro2 =>{
            console.log(erro2)
        })
    })
    requisicao.catch(erro =>{
        console.log(erro)
    })
    
}


