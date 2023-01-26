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
        if (element.cpf === userlogado) {
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

function evaluation() {
    location.href = "../evaluation/index.html";
}

function abremodal(aberto) {
    if (aberto) {
        document.getElementById('modal-produtos').style.display = "flex";
        produtos()
    } else {
        document.getElementById('modal-produtos').style.display = "none";

    }
}
reposta()

async function produtos() {

    let reqProduct = await fetch('https://xpcoin.onrender.com/products')
    let repProduct = await reqProduct.json()
    let listaProdutos = "";
    console.table(repProduct)
    repProduct.forEach(item => {
        listaProdutos += `
        <div class="item-product">
        <img src="../assests/loading.png" class="img-item">
        <div class="title-item">${item.name.toUpperCase()}</div>
        <div class="valor-item">${item.value_xpc}</div>
      </div>
        `
    }
    )

    document.getElementById('sub-lista-modal-produtos').innerHTML = listaProdutos;

}
