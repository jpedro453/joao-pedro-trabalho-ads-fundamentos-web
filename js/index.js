// Pega todos os links com classe nav_link
const links = document.querySelectorAll('.nav_link')

links.forEach((link) => {
    // Espera pelo clique em algum dos links
    link.addEventListener('click', (event) => {
        // Remove a classe 'active' de todos os links e seções
        links.forEach((link) => link.classList.remove('active'))

        //Adiciona a classe active no link clicado para estilização
        event.currentTarget.classList.add('active')
    })
})

// Pega o form de acordo com o id
const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    // Exibir uma mensagem pro usuário ao enviar o formulário
    event.preventDefault()
    alert('Mensagem enviada com sucesso :)')

    // Reseta o formulário no final
    form.reset()
})