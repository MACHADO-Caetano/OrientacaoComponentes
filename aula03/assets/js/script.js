function carregar() {
    home()
    document.getElementById('home').addEventListener('click', home)
    document.getElementById('sobre').addEventListener('click', sobre)
    document.getElementById('contato').addEventListener('click', contato)
}

function home() {
    const main = document.getElementById('main')
    main.innerHTML = `
        <h1>Home</h1>
        <p>Minha página principal</p>
    `
}

function sobre() {
    const main = document.getElementById('main')
    main.innerHTML = `
        <h1>Sobre o site</h1>
        <p>Minha página sobre o site</p>
        <hr>
    `
}

function contato() {
    const main = document.getElementById('main')
    main.innerHTML = `
        <h1>Cadastro de Cliente</h1>
        <form>
            <input id="nome" type="text" placeholder="Nome...">
            <br><br>
            <input id="email" type="email" placeholder="Email...">
            <br><br>
            <input id="telefone" type="text" placeholder="Telefone...">
            <br><br>
            <button type="button" id="enviar">Salvar</button>
        </form>
    `

    document.getElementById('enviar').addEventListener('click', enviar)
}

function enviar()
{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    const contato = {
        nome: nome,
        email: email,
        telefone: telefone
    }
    
    mostrar(contato)
    mostrarTabela(contato)
}

function mostrar(contato)
{
    const main = document.getElementById('main')
    main.innerHTML += `
        <p>Nome: ${contato.nome}</p>
        <p>Email: ${contato.email}</p>
        <p>Telefone: ${contato.telefone}</p>

    `
}

function mostrarTabela(contato)
{
    const main = document.getElementById('main')
    main.innerHTML += `
    <table class="tabela">
        <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${contato.nome}</td>
                    <td>${contato.email}</td>
                    <td>${contato.telefone}</td>
                </tr>
            </tbody>
    </table>
    `
}
