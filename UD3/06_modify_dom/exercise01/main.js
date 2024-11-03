window.onload = function (e) {
    console.log('documento cargado')

    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!!'

    const username = document.getElementById
        ('username')
    console.log(username);

    const allFirst = document.querySelectorAll('article .first')

    for (let item of allFirst) {
        item.style['background-color'] = '#00ccff'
    }

    const allLi = document.querySelectorAll('li .item')

    for (let item of allLi) {
        console.log(item)
    }

    const allButtons = document.querySelectorAll('.buttons button')

    document.querySelectorAll('p')[0].style['background-color'] = 'pink'

    for (let item of allButtons) {
        item.style.color = 'red'
    }

    const allFirst2 = document.querySelectorAll('article .first')

    for (let item of allFirst2) {
        item.style['background-color'] = '#00ccff'
    }

    let firstArticle = document.querySelector('article')

    let node = document.createElement('p')
    node.innerText = 'No le veo la utilidad de programar unicamente con js'
    node.style['background-color'] = 'grey'
    node.title = 'Párrafo de ejemplo'

    let aNode = document.createElement('a')
    aNode.innerText = 'Enlace de ejemplo'
    aNode.href = 'https://www.google.es'

    node.appendChild(aNode)

    let fullNode = document.createElement('div')
    fullNode.innerHTML = `Esto es un div de ejemplo
    que lleva un link <a href="https://www.google.es"> goggle otra vez </a>`

    node.appendChild(fullNode)

    firstArticle.appendChild(node)
}