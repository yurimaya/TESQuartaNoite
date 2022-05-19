let botao = document.getElementById('botao');

function enviando(){
    botao.addEventListener('click', enviarJson());
    let nome = document.getElementById('nome');
    let celular = document.getElementById('celular');
    let email = document.getElementById('email');
    let endereco = document.getElementById('endereco');
}

function enviardados() {

    const obj = {

        "Nome": nome.value,
        "celular": celular.value,
        "email": email.value,
        "endereco": endereco.value,


    }

    console.log(obj)

    

}




