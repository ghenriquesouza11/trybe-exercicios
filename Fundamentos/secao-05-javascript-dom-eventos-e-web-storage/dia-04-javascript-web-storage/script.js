const body = document.getElementById("body");
const mainHeaderList = document.getElementsByClassName("main-header__list");
const clearLocalStorage = document.getElementById("clear-local-storage");

for (index = 1; index < mainHeaderList[0].children.length; index += 1) {
  mainHeaderList[0].children[index].addEventListener("click", function () {
    // Botões para alter a cor de fundo.
    if (event.target === mainHeaderList[0].children[1].children[0]) {
      localStorage.setItem("Cor-de-fundo", "white");
      body.style.backgroundColor = localStorage.getItem("Cor-de-fundo");
    } else if (event.target === mainHeaderList[0].children[2].children[0]) {
      localStorage.setItem("Cor-de-fundo", "black");
      body.style.backgroundColor = localStorage.getItem("Cor-de-fundo");
    } else if (event.target === mainHeaderList[0].children[3].children[0]) {
      localStorage.setItem("Cor-de-fundo", "green");
      body.style.backgroundColor = localStorage.getItem("Cor-de-fundo");
    } else if (event.target === mainHeaderList[0].children[4].children[0]) {
      localStorage.setItem("Cor-de-fundo", "blue");
      body.style.backgroundColor = localStorage.getItem("Cor-de-fundo");
    } else if (event.target === mainHeaderList[0].children[5].children[0]) {
      localStorage.setItem("Cor-de-fundo", "yellow");
      body.style.backgroundColor = localStorage.getItem("Cor-de-fundo");
    }
  });
}
for (index = 1; index < mainHeaderList[1].children.length; index += 1) {
  mainHeaderList[1].children[index].addEventListener("click", function () {
    // Botões para alterar a cor da fonte
    if (event.target === mainHeaderList[1].children[1].children[0]) {
      localStorage.setItem("Cor-da-fonte", "black");
      body.style.color = localStorage.getItem("Cor-da-fonte");
    } else if (event.target === mainHeaderList[1].children[2].children[0]) {
      localStorage.setItem("Cor-da-fonte", "red");
      body.style.color = localStorage.getItem("Cor-da-fonte");
    } else if (event.target === mainHeaderList[1].children[3].children[0]) {
      localStorage.setItem("Cor-da-fonte", "white");
      body.style.color = localStorage.getItem("Cor-da-fonte");
    }
  });
}
for (index = 1; index < mainHeaderList[2].children.length; index += 1) {
  mainHeaderList[2].children[index].addEventListener("click", function () {
    // Botões para alterar o tamanho da fonte
    if (event.target === mainHeaderList[2].children[1].children[0]) {
      localStorage.setItem("Tamanho-da-fonte", "11px");
      body.style.fontSize = localStorage.getItem("Tamanho-da-fonte");
    } else if (event.target === mainHeaderList[2].children[2].children[0]) {
      localStorage.setItem("Tamanho-da-fonte", "13px");
      body.style.fontSize = localStorage.getItem("Tamanho-da-fonte");
    } else if (event.target === mainHeaderList[2].children[3].children[0]) {
      localStorage.setItem("Tamanho-da-fonte", "16px");
      body.style.fontSize = localStorage.getItem("Tamanho-da-fonte");
    } else if (event.target === mainHeaderList[2].children[4].children[0]) {
      localStorage.setItem("Tamanho-da-fonte", "19px");
      body.style.fontSize = localStorage.getItem("Tamanho-da-fonte");
    } else if (event.target === mainHeaderList[2].children[5].children[0]) {
      localStorage.setItem("Tamanho-da-fonte", "27px");
      body.style.fontSize = localStorage.getItem("Tamanho-da-fonte");
    }
  });
}
for (index = 1; index < mainHeaderList[3].children.length; index += 1) {
  mainHeaderList[3].children[index].addEventListener("click", function () {
    // Botões para alterar o espaçamento entre linhas
    if (event.target === mainHeaderList[3].children[1].children[0]) {
      localStorage.setItem("Espaçamento-entre-linhas", "1");
      body.style.lineHeight = localStorage.getItem("Espaçamento-entre-linhas");
    } else if (event.target === mainHeaderList[3].children[2].children[0]) {
      localStorage.setItem("Espaçamento-entre-linhas", "normal");
      body.style.lineHeight = localStorage.getItem("Espaçamento-entre-linhas");
    } else if (event.target === mainHeaderList[3].children[3].children[0]) {
      localStorage.setItem("Espaçamento-entre-linhas", "1.5");
      body.style.lineHeight = localStorage.getItem("Espaçamento-entre-linhas");
    } else if (event.target === mainHeaderList[3].children[4].children[0]) {
      localStorage.setItem("Espaçamento-entre-linhas", "2.0");
      body.style.lineHeight = localStorage.getItem("Espaçamento-entre-linhas");
    } else if (event.target === mainHeaderList[3].children[5].children[0]) {
      localStorage.setItem("Espaçamento-entre-linhas", "3.0");
      body.style.lineHeight = localStorage.getItem("Espaçamento-entre-linhas");
    }
  });
}
for (index = 1; index < mainHeaderList[4].children.length; index += 1) {
  mainHeaderList[4].children[index].addEventListener("click", function () {
    // Botões para alterar o tipo de fonte
    if (event.target === mainHeaderList[4].children[1].children[0]) {
      localStorage.setItem("Tipo-da-fonte", "Arial, Helvetica, sans-serif");
      body.style.fontFamily = localStorage.getItem("Tipo-da-fonte");
    } else if (event.target === mainHeaderList[4].children[2].children[0]) {
      localStorage.setItem("Tipo-da-fonte", "'Times New Roman', Times, serif");
      body.style.fontFamily = localStorage.getItem("Tipo-da-fonte");
    }
  });
}
if (localStorage.getItem("Cor-de-fundo") !== null) {
  body.style.backgroundColor = localStorage.getItem("Cor-de-fundo");
}
if (localStorage.getItem("Cor-da-fonte") !== null) {
  body.style.color = localStorage.getItem("Cor-da-fonte");
}
if (localStorage.getItem("Tamanho-da-fonte") !== null) {
  body.style.fontSize = localStorage.getItem("Tamanho-da-fonte");
}
if (localStorage.getItem("Espaçamento-entre-linhas") !== null) {
  body.style.lineHeight = localStorage.getItem("Espaçamento-entre-linhas");
}
if (localStorage.getItem("Tipo-da-fonte") !== null) {
  body.style.fontFamily = localStorage.getItem("Tipo-da-fonte");
}
clearLocalStorage.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
