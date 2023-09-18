// URL da API de imagem
const apiUrl = 'https://cataas.com/cat';

// Fazer uma solicitação fetch para a API de imagem
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Falha na solicitação à API de imagem');
    }
    return response.blob(); // Obter os dados da imagem como um blob
  })
  .then(blob => {
    // Converter o blob em uma URL de objeto
    const imagemUrl = URL.createObjectURL(blob);
    
    // Configurar a fonte da imagem no elemento HTML
    imagemElement.src = imagemUrl;
  })
  .catch(error => {
    console.error(error);
  });



// Função para carregar uma nova imagem de gato aleatória
function carregarNovaImagem() {
    // Selecionar o elemento de imagem
    const imagemElement = document.getElementById('imagem');
    
    // URL da API de imagem de gato aleatório
    const apiUrl = 'https://cataas.com/cat';
    
    // Fazer uma solicitação fetch para a API de imagem
    fetch(apiUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error('Falha na solicitação à API de imagem');
        }
        return response.blob(); // Obter os dados da imagem como um blob
        })
        .then(blob => {
        // Converter o blob em uma URL de objeto
        const imagemUrl = URL.createObjectURL(blob);
        
        // Configurar a fonte da imagem no elemento HTML
        imagemElement.src = imagemUrl;
        })
        .catch(error => {
        console.error(error);
        });}
