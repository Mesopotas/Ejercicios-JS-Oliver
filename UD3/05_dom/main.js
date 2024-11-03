window.onload = () => {
    // Listar todos los divs
    const allDivs = document.querySelectorAll('div');
    console.log("Todos los divs:");
    allDivs.forEach(div => console.log(div));

    // Listar todos los elementos con clase 'buttons'
    const allButtonsElements = document.querySelectorAll('.buttons');
    console.log("Elementos con clase 'buttons':");
    allButtonsElements.forEach(button => console.log(button));

    // Listar 1 div con clase 'buttons'
    const oneButtonDiv = document.querySelector('div.buttons');
    console.log("Div con clase 'buttons':");
    console.log(oneButtonDiv);

    // Listar TODOS los divs con clase 'buttons'
    const allButtonDivs = document.querySelectorAll('div.buttons');
    console.log("Divs con clase 'buttons':");
    allButtonDivs.forEach(div => console.log(div));
};