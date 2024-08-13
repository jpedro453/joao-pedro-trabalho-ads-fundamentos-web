const links = document.querySelectorAll('.nav_link')
const sections = document.querySelectorAll('section')

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Remove a classe 'active' de todos os links e seções
        links.forEach((link) => link.classList.remove('active'))
        sections.forEach((section) => section.classList.remove('active'))

        // Pega o href do link clicado
        const link_href = event.currentTarget.getAttribute('href')

        // Separa o # do href
        const section_to_show = link_href.split('#')[1]

        // Adiciona a classe active para section correta e para o link atual
        document.getElementById(section_to_show).classList.add('active')
        event.currentTarget.classList.add('active')
    })
})

const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    // Exibir uma mensagem pro usuário ao enviar o formulário
    event.preventDefault()
    alert('Mensagem enviada com sucesso :)')

    // Reseta o formulário no final
    form.reset()
})