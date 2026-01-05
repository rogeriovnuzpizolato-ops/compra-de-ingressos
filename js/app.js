//recuperar valores baseado no html
function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if(tipo.value == 'pista'){
       comprarPista(quantidade);
    }else if (tipo.value == 'superior'){
        comprarSuperior(quantidade);
    }else{
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qtdPista){
        alert('essa quantidade está indisponivel.');
    }else{
        qtdPista = qtdPista - quantidade;
            document.getElementById('qtd-pista').textContent = qtdPista; 
            alert(`você comprou ${quantidade} ingressos da pista `);
    }
}

function comprarSuperior(quantidade){
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdsuperior){
        alert('essa quantidade está indisponivel.');
    }else{
        qtdsuperior = qtdsuperior - quantidade;
            document.getElementById('qtd-superior').textContent = qtdsuperior; 
            alert(`você comprou ${quantidade} ingressos da cadeira superior `);
    }
}

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior){
        alert('essa quantidade está indisponivel.');
    }else{
        qtdInferior = qtdInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = qtdInferior; 
            alert(`você comprou ${quantidade} ingressos da cadeira inferior `);
    }
}