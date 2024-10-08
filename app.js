function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
      section.innerHTML = "<p>Você não digitou o nome de um personagem.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let character = "";
    let about = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      character = dado.character.toLowerCase()
      about = dado.about.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (character.includes(campoPesquisa) || about.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada item do resultado da pesquisa, incluindo o nome do personagem, descrição e link
        resultados += `
        <div class="item-resultado">
          <h2>${dado.character}</h2>
          <p class="descricao-meta">${dado.about}</p>
          <a href=${dado.link} target="_blank">Saiba Mais</a>
        </div>
      `;
      }        
    }

    if (!resultados) {
      resultados = "<p> O personagem escolhido ainda não foi adicionado.</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }