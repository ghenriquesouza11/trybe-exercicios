// function palindromo(palavra) {
//   let palavraInvertida = [];
//   for (index = palavra.length - 1; index >= 0; index--) {
//     palavraInvertida.push(palavra[index]);
//   }
//   if (palavraInvertida.join("") == palavra) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// palindromo("arara");

// function maiorIndice(array) {
//   let maiorValor = 0;
//   for (index = 0; index < array.length; index++) {
//     if (array[index] >= maiorValor) {
//       maiorValor = array[index];
//     }
//   }
//   let maiorValorIndice = 0;
//   for (index = 0; index < array.length; index++) {
//     if (maiorValor == array[index]) {
//       maiorValorIndice = index;
//     }
//   }
//   console.log(maiorValorIndice);
// }
// maiorIndice([2, 3, 6, 7, 10, 1]);

function menorIndice(array) {
  let menorValor = 0;
  for (index = 0; index < array.length; index++) {
    if (menorValor >= array[index]) {
      menorValor = array[index];
    }
  }
  let menorValorIndice = 0;
  for (index = 0; index < array.length; index++) {
    if (menorValor == array[index]) {
      menorValorIndice = index;
    }
  }
  console.log(menorValorIndice);
}
menorIndice([2, 4, 6, 7, 10, 0, -3]);
