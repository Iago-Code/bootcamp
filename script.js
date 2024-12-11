/ Função para exibir dados da Parte 2 no HTML
function exibirParte2() {
    const mediaIdades = calcularMediaIdades(pessoas);
    const homemVelho = homemMaisVelho(pessoas);
    const maiorSal = maiorSalario(pessoas);

    document.getElementById('media-idades').innerHTML = `Média das idades: ${mediaIdades}`;
    
    document.getElementById('homem-mais-velho').innerHTML = `
        Nome: ${homemVelho.nome} <br>
        Idade: ${homemVelho.idade} <br>
        Cargo: ${homemVelho.cargo} <br>
        <img src="${homemVelho.foto}" alt="Foto do ${homemVelho.nome}" width="100">
    `;
    document.getElementById('maior-salario').innerHTML = `
        Nome: ${maiorSal.nome} <br>
        Idade: ${maiorSal.idade} <br>
        Cargo: ${maiorSal.cargo} <br>
        Salário: R$ ${maiorSal.salario.toFixed(2)} <br>
        <img src="${maiorSal.foto}" alt="Foto do ${maiorSal.nome}" width="100">
    `;
}

// Função para exibir os dados da Parte 1
function exibirParte1() {
    let container = document.getElementById('pessoas-lista');
    container.innerHTML = '';

    pessoas.forEach((pessoa) => {
        let cor = pessoa.genero === "Masculino" ? "green" : "orange";
        container.innerHTML += `
            <div style="border: 1px solid ${cor}; padding: 10px; margin: 10px;">
                <h3 style="color: ${cor}">${pessoa.nome}</h3>
                Idade: ${pessoa.idade} <br>
                Altura: ${pessoa.altura} <br>
                Peso: ${pessoa.peso} <br>
                Gênero: ${pessoa.genero} <br>
                Cargo: ${pessoa.cargo} <br>
                Salário: R$ ${pessoa.salario.toFixed(2)} <br>
                <img src="${pessoa.foto}" alt="Foto de ${pessoa.nome}" width="100">
            </div>
        `;
    });
}