function toggloMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img 
    const img = document.querySelector("#profile img")


    // substituir a imagem 
    if (html.classList.contains('light')) {
        // se tiver light modo adicionar a imagen light
        img.setAttribute('src', './assets/ava.png')
    } else {
        // se tiver sem light modo, manter a imagen normal 
        img.setAttribute("src", "./assets/avatar.png")
    }

}