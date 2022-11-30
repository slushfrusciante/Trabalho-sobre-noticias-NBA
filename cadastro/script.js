function cadastrar ()
{
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById ("cpf").value;
    var usuario = document.getElementById ("usuario").value;
    var senha = document.getElementById ("senha").value;
    var numero = document.getElementById ("numero").value;
    var endereco = document.getElementById("endereco").value; 
    var email = document.getElementById ("email").value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    
    
    if (nome && cpf && usuario && senha && numero && endereco && email && genero) {
        const cpfvalido = isValidCPF(cpf)
        if (cpfvalido == false){
            alert ("CPF Inválido")
            return
        }
        var tabela = document.getElementById ("tabela")
        var linha = tabela.insertRow()
        linha.insertCell(0).innerHTML = nome
        linha.insertCell(1).innerHTML = usuario
        linha.insertCell(2).innerHTML = cpf
        linha.insertCell(3).innerHTML = numero
        linha.insertCell(4).innerHTML = email
        linha.insertCell(5).innerHTML = endereco
        
        if (genero == "1"){
            linha.insertCell(6).innerHTML = 'Masculino'

        }
        if (genero == "2"){
            linha.insertCell(6).innerHTML = 'Feminino'
            
        }
        if (genero == "3"){
            linha.insertCell(6).innerHTML = 'Outro'
        }
        limpar()

    }
    else {
        alert ("Atenção Campo Vazio!!!")

    }
}
function limpar ()
{
    var nome = document.getElementById("nome");
    nome.value= ""
    var cpf = document.getElementById ("cpf");
    cpf.value= ""
    var usuario = document.getElementById ("usuario");
    usuario.value = ""
    var senha = document.getElementById ("senha");
    senha.value = ""
    var numero = document.getElementById ("numero");
    numero.value = ""
    var endereco = document.getElementById("endereco"); 
    endereco.value = ""
    var email = document.getElementById ("email");
    email.value = ""
    

}
function isValidCPF(cpf) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}