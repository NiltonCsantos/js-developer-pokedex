
const main=document.getElementById("main");


createInfo();


async function createInfo() {
    try {

        // Chame a função para obter os parâmetros de consulta
        const queryParams = getURLParams();

        // Acesse os parâmetros individualmente
        const id = queryParams.id;

      const pokemon = await pokeApi.getPokemonById(id);


  
      const infoHTML = `
  
          <div class="detail ${pokemon.type}">

            <div class="info">

            <div class="title"> 

            <h1>${pokemon.name.toUpperCase()}</h1>

            <div class="buttons">
            
            ${pokemon.types.map(type => `<button>${type}</button>`).join('')}

            </div>

           </div>

           <p>#${String(pokemon.number).padStart(3, '0')}</p>
            
            </div>


            <img src="${pokemon.photo}" alt="${pokemon.name}">
          
           
            
          </div>
          

          

          <Section>

         

                <h2>Sobre</h2>

         

            <p>Id: ${pokemon.number}</p>

            <p>Tipo: ${pokemon.type}</p>
            <p>Tipos: ${pokemon.types}</p>
            <p>Habilidades: ${pokemon.abilities}</p>
            <p>Experiência: ${pokemon.baseExperience}</p>
            <p>Altura: ${pokemon.height}</p>
            <p>Peso: ${pokemon.weight}</p>



          
          </Section>
 
      `;
  
      // Adicione o HTML gerado ao elemento "main"
      main.innerHTML += infoHTML;
    } catch (error) {
      alert('Ocorreu um erro ao buscar o Pokémon: ' + error);
    }
  }
  
 
 
// Função para obter parâmetros de consulta da URL
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

