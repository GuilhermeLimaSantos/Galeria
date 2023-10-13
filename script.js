function adicionarImagem() {
    const linkInput = document.getElementById('imageLink');
    const fileInput = document.getElementById('imageFile');
    const galeriaDiv = document.getElementById('galeria');
    const imagemBoxDiv = document.getElementById('imagemBox');
    const imagemPreviewDiv = document.getElementById('imagemPreview');

    imagemBoxDiv.innerHTML = '';
    imagemPreviewDiv.innerHTML = '';

    if (linkInput.value !== '') {
        const imagemLink = linkInput.value;
        exibirImagem(imagemLink, imagemBoxDiv);
        linkInput.value = '';
        exibirImagemNaGaleria(imagemLink, galeriaDiv);
    } else if (fileInput.files.length > 0) {
        const imagemFile = fileInput.files[0];
        const imagemURL = URL.createObjectURL(imagemFile);
        exibirImagem(imagemURL, imagemPreviewDiv);
        fileInput.value = '';
        exibirImagemNaGaleria(imagemURL, galeriaDiv);
    } else {
        alert('Por favor, forneça um link ou escolha um arquivo de imagem.');
    }
}

function exibirImagem(imagemURL, container) {
    const novaImagem = document.createElement('img');
    novaImagem.src = imagemURL;
    novaImagem.style.maxWidth = '100%';
    novaImagem.style.height = 'auto';

    container.appendChild(novaImagem);
}

function exibirImagemNaGaleria(imagemURL, container) {
    const novaImagem = document.createElement('img');
    novaImagem.src = imagemURL;
    novaImagem.style.maxWidth = '100px';
    novaImagem.style.height = 'auto';
    novaImagem.style.margin = '5px';

    container.appendChild(novaImagem);
}
