function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //}
  //else {
  //  html.classList.add('light')
  //} isso tudo faz oque a linha de baixo faz:
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-img-dark.png")
  }
  else {
    // se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-mila-light.png")

  }
  
  
}