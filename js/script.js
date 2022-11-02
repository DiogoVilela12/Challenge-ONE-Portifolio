function validacaoNome(nome) {

    //Validação do nome
    if (nome.length == 0 || nome.length > 50) {

        alert('Nome Invalido')
    } else {

        return nome

    }
};

function validacaoEmail(email) {

    usuario = email.slice(0, email.indexOf("@"));
    dominio = email.slice(email.indexOf("@") + 1, email.length);

    if (
        (email.search('@') > 0) &&
        (usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)
    ) {

        return email

    } else {
        alert("E-mail invalido");
    };
};

function validacaoAssunto(assunto) {
    if (assunto.length > 0 && assunto.length < 50) {
        return assunto
    } else {
        alert('Assunto Invalido')
    }
}

function validacaoMensagem(mensagem) {
    if (mensagem.length > 0 && mensagem.length < 300) {
        return mensagem
    } else {
        alert('mensagem Invalido')
    }
}

function validacao(nome, email, assunto, mensagem) {
    validacaoNome(nome);
    validacaoEmail(email);
    validacaoAssunto(assunto);
    validacaoMensagem(mensagem);
    
}