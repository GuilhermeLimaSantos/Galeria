function adicionarImagem() {
    const linkInput = document.getElementById('imageLink');
    const fileInput = document.getElementById('imageFile');
    const galeriaDiv = document.getElementById('galeria');
    const imagemPreviewDiv = document.getElementById('imagemPreview');

    if (linkInput.value !== '') {
        const imagemLink = linkInput.value;
        exibirImagem(imagemLink, imagemPreviewDiv);
        exibirImagemNaGaleria(imagemLink, galeriaDiv);
        linkInput.value = '';
    } else if (fileInput.files.length > 0) {
        const imagemFile = fileInput.files[0];
        const imagemURL = URL.createObjectURL(imagemFile);
        exibirImagem(imagemURL, imagemPreviewDiv);
        exibirImagemNaGaleria(imagemURL, galeriaDiv);
        fileInput.value = '';
    } else {
        alert('Por favor, forneça um link ou escolha um arquivo de imagem.');
        return;
    }

    imagemPreviewDiv.innerHTML = '';
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

function exibirPreview(input) {
    const imagemPreviewDiv = document.getElementById('imagemPreview');
    
    imagemPreviewDiv.innerHTML = '';

    if (input.files && input.files[0]) {
        const imagemFile = input.files[0];
        const imagemURL = URL.createObjectURL(imagemFile);
        exibirImagem(imagemURL, imagemPreviewDiv);
    }
}

function exibirLinkPreview() {
    const linkInput = document.getElementById('imageLink');
    const imagemPreviewDiv = document.getElementById('imagemPreview');

    imagemPreviewDiv.innerHTML = '';

    if (linkInput.value !== '') {
        const imagemLink = linkInput.value;
        exibirImagem(imagemLink, imagemPreviewDiv);
    }
}
