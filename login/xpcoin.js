let lista;
let userlogado = localStorage.getItem("userLogin");
let Nome, XPC;

async function reposta() {
    let rep1 = await fetch('https://xpcoin.onrender.com/users')
    let rep2 = await rep1.json()
    lista = rep2
    continua()
}

function continua() {
        lista.forEach((element) => {
        if (element.cpf_cnpj === userlogado) {
            Nome = element.nome
            XPC = element.qntd_pontos
        }
    });

    document.getElementById('name').innerHTML = Nome;
    document.getElementById('coin').innerHTML = XPC;
}

function logout() {
    localStorage.setItem("userLogin", "")
    location.href = "../index.html";

}

reposta()
