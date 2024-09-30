let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
    const nome = document.getElementById("nome").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const data_venda = document.getElementById("data_venda").value;

    //Se for preenchido vazio
    if(nome === '' || marca === '' || segmento === '' || valor === '' || data_venda === ''){
    alert("Todos os campos devem ser preenchidos!")
    }else{
        //Cria uma linha da tabela se não existir
        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];
    
        //Inserindo uma nova linha
        const novaLinha = tabela.insertRow();
    
        //Inserindo os valores da linha
        const celId = novaLinha.insertCell(0);
        const celNome = novaLinha.insertCell(1);
        const celMarca = novaLinha.insertCell(2);
        const celSegmento = novaLinha.insertCell(3);
        const celValor = novaLinha.insertCell(4);
        const celData_venda = novaLinha.insertCell(5);
    
        //Inserindo os valores dentro das celulas
        celId.innerHTML = proximoId;
        celNome.innerHTML = nome;
        celMarca.innerHTML = marca;
        celSegmento.innerHTML = segmento;
        celValor.innerHTML = valor;
        celData_venda.innerHTML = data_venda;
    
        proximoId++
    
        //Limpar formulario
        document.getElementById("linhaForm").reset();
    }

}