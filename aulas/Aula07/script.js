let proximoId = 1

function adicionarLinha(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const x = document.getElementById("x").value;

    const delta = b * b - 4 * a * c
    
    if (delta < 0) {
        alert("Delta é negativo. Não existem raízes reais.");
        return;
    }

    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    //Se for preenchido vazio
    if(a === '' || b === '' || c === '' || x > 2 ){
    alert("Todos os campos devem ser preenchidos!")
    }else{
        //Cria uma linha da tabela se não existir
        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];
    
        //Inserindo uma nova linha
        const novaLinha = tabela.insertRow();
    
        //Inserindo os valores da linha
        const celId = novaLinha.insertCell(0);
        const celA = novaLinha.insertCell(1);
        const celB = novaLinha.insertCell(2);
        const celC = novaLinha.insertCell(3);
    
        //Inserindo os valores dentro das celulas
        celId.innerHTML = proximoId;
        celA.innerHTML = a;
        celB.innerHTML = b;
        celC.innerHTML = c;
        
        proximoId++
    
        //Limpar formulario
        document.getElementById("linhaForm").reset();
    }

}