const arrayFormulario = []

const enviarFormulario = () => {
    let titulo = document.getElementById('titulo-post')
    let autor = document.getElementById('autor-post')
    let conteudo = document.getElementById('conteudo-post')
    let adicionarPost = document.getElementById('container-de-posts')

    const formulario = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }

    if(formulario.titulo === '' || formulario.autor === '' || formulario.conteudo === '') {
        alert('Preencha todos os campos!')

    } else {
        adicionarPost.innerHTML += `<section class='adicionar-post'> <h2>${formulario.titulo}</h2> <h3>${formulario.autor}</h3> <h4>${formulario.conteudo}</h4> <section>`

    }

    arrayFormulario.push(formulario)
    titulo.value = ''
    autor.value = ''
    conteudo.value = ''
} 