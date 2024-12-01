function enviar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && email && senha && telefone) {
        window.alert('Bem-Vindo');
    }else {
        window.alert('Erro! por favor complete seu registro');
    }
}