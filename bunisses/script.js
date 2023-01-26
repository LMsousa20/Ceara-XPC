let aberto = false

function abrebarra() {
    if (aberto) {
        document.getElementById('barra').style.display = 'none';
        aberto = false
    } else {
        document.getElementById('barra').style.display = 'block';
        aberto = true
    }
}