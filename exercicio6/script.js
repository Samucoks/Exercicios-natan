function entregarDados(parametro){
    document.getElementById('name').innerHTML = parametro.name
    document.getElementById('high').innerHTML = parametro.high
    document.getElementById('low').innerHTML = parametro.low
    document.getElementById('code').innerHTML = parametro.code
    document.getElementById('codein').innerHTML = parametro.codein
    document.getElementById('createDate').innerHTML = parametro.create_date
    document.getElementById('varBid').innerHTML = parametro.varBid
    document.getElementById('bid').innerHTML = parametro.bid
    document.getElementById('ask').innerHTML = parametro.ask
}




function conferir(){
    let moeda = document.getElementById('moeda').value
    let moeda2 = document.getElementById('moeda2').value
    let url = `https://economia.awesomeapi.com.br/last/${moeda}-${moeda2}`

   
    if(moeda != moeda2){ 
    let consultar = fetch(url) 
    consultar.then(response =>{
        let response2 = response.json()
        response2.then(response3 =>{
            console.log(response3)
            if(response3.BRLUSD){
                entregarDados(response3.BRLUSD)
            }
            else if(response3.BRLEUR){
                entregarDados(response3.BRLEUR)
            }
            else if(response3.USDBRL){
                entregarDados(response3.USDBRL)
            }
            else if(response3.USDEUR){
                entregarDados(response3.USDEUR)
            }
            else if(response3.EURBRL){
                entregarDados(response3.EURBRL)
            }
            else if(response3.EURUSD){
                entregarDados(response3.EURUSD)
            }
            
        })
        response2.catch(erro2 =>{
            console.log(erro2)
        })
    })
    consultar.catch(erro =>{
        console.log(erro)
    })
}
    else{
        alert('Moedas Iguais!')
    }
   
    // console.log(consultar)
}