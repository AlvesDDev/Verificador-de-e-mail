var txt = document.getElementById('txtn')
alert('Este site aceita somente e-mails com dominio "@gmail.com"')

    function verify() {
        if (txt.value.includes("@gmail.com")) {
            res.style.color='green'
            res.innerHTML=`Bem vindo, ${txt.value}!`
            alert('E-mail cadastrado com sucesso!')
        }else {
            alert('[ERRO]: Dados inválidos, insira um e-mail válido.')
            res.style.color='black'
            res.innerHTML='Exemplo:"email@gmail.com"'
        }
    }