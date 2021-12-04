let form = document.getElementById("form");
let submit = document.getElementById("submit");


function checkEmail(){
    let email = document.getElementById("email").value;
    let reEmail = new RegExp('[0-9,a-z,A-Z]+[@][0-9,a-z,A-Z]+[.][0-9,a-z,A-Z]+')
    let reEmailPontoBr = new RegExp('[0-9,a-z,A-Z]+[@][0-9,a-z,A-Z]+[.][0-9,a-z,A-Z]+[.][0-9,a-z,A-Z]+')
    console.log(reEmail.test(email))
    console.log(reEmailPontoBr.test(email))
    if(!reEmail.test(email) && !reEmailPontoBr.test(email)){
        alert("Insira um email válido!");
        return false;
    }
    return true;
}

function checkPhone(){
    let telefone = document.getElementById("telefone").value;
    let reTelefone = new RegExp('[0-9]{11}')
    let reTelefoneSeparado = new RegExp('[0-9]{2}[ ][0-9]{9}')
    let reTelefoneSemiFormatado = new RegExp('[(][0-9]{2}[)][0-9]{9}')
    let reTelefoneFormatado = new RegExp('[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}')
    if(!reTelefone.test(telefone) && !reTelefoneSeparado.test(telefone) && !reTelefoneSemiFormatado.test(telefone) && !reTelefoneFormatado.test(telefone)){
        alert("Insira um telefone válido!");
        return false;
    }
    return true;
}

function checkCEP(){
    let cep = document.getElementById("cep").value;
    let reCEP = new RegExp('[0-9]{8}')
    let reCEPformatado = new RegExp('[0-9]{2}[.][0-9]{3}[-][0-9]{3}')
    if(!reCEP.test(cep) && !reCEPformatado.test(cep)){
        alert("Insira um CEP válido!");
        return false;
    }
    return true;
}

submit.addEventListener("click",function(event){
    nome = document.getElementById("name").value;
    if(checkEmail() && checkPhone() && checkCEP()){
        alert("Obrigado por se cadastrar "+nome)
    }
    event.preventDefault();
});