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