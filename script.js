let userID = '';

function isLogin(){
    userID = localStorage.getItem("userLogin");
    if(userID != ''){
        if (validarCPF(userID)) {
            localStorage.setItem("userLogin", userID);
            consulta(userID)
        }     
    }
}

function logando() {


    userID = document.getElementById('cpf').value
    console.log("O CPF do Usuario e", userID)
    console.log(typeof userID)
    if (validarCPF(userID)) {
        localStorage.setItem("userLogin", userID);
        consulta(userID)
    } else {
        erro(true)
    }

}

async function consulta(userVrfc) {
    document.getElementById('load').style.display = 'flex';
    let rep1 = await fetch(`https://xpcoin.onrender.com/users/`)
    let rep2 = await rep1.json()
    rep2.forEach(element => {
        if (element.cpf_cnpj === userVrfc) {
            location.href = "./login/login.html";
        }else{
            document.getElementById('load').style.display = 'none';
            erro(false)
            
        }
    });

    console.log(rep2)
    console.log(userVrfc)

}

function erro(cpfValid) {
    
    document.getElementById('mondal1').style.display = 'flex';
    if(cpfValid){
        document.getElementById('mondal-msg').innerHTML = 'CPF INVALIDO';
    } else{
        document.getElementById('mondal-msg').innerHTML = 'Não cadastrado. Proucure a Gerencia do posto';
    }
}

function fechaMondal(){
    document.getElementById('mondal1').style.display = 'none'; 
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito 
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito 
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

// testes







