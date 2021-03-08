function adicionaTarefa() {
    const tarefa = document.getElementById('tarefa')
    const diaDaSemana = document.getElementById('dias-semana').value
    let diaEscolhido = tarefa.value

    if(tarefa.value !== ''){
        switch(diaDaSemana){
            case 'domingo':
                const domingo = document.getElementById('domingo')
                domingo.innerHTML += `<p>- ${diaEscolhido}</p>`
                tarefa.value = ''
                break
            
            case 'segunda':
                const segunda = document.getElementById('segunda')
                segunda.innerHTML += `<p>- ${diaEscolhido}</p>`
                tarefa.value = ''
                break

            case 'terca':
                const terca = document.getElementById('terca')
                terca.innerHTML += `<p>- ${diaEscolhido}</p>`
                tarefa.value = ''
                break

            case 'quarta':
                const quarta = document.getElementById('quarta')
                quarta.innerHTML += `<p>- ${diaEscolhido}</p>`
                tarefa.value = ''
                break

            case 'quinta':
                const quinta = document.getElementById('quinta')
                quinta.innerHTML += `<p>- ${diaEscolhido}</p>`
                tarefa.value = ''
                break

            case 'sexta':
                const sexta = document.getElementById('sexta')
                sexta.innerHTML += `<p>- ${diaEscolhido}</p>`
                tarefa.value = ''
                break

            case 'sabado':
                const sabado = document.getElementById('sabado')
                sabado.innerHTML += `<p>- ${diaEscolhido}</p>`
                tarefa.value = ''
                break
        }

    } else {
        alert('Preencha o campo de tarefa!')
    }
}
