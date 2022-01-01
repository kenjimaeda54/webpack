//nao esquecer de fazer o build para refletir o runtimeChunk

console.log(_.difference([1, 2, 3], [4, 2]));
//vai encontrar o ultimo elemento do array de acordo comm a função
console.log(_.findLastIndex([5,3, 3, 4, 2, 6], function(num) {
  return num % 2 == 0;
}));

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //assim que funciona o lodash
// _.findLastIndex(array, function(num) {  });

const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);
button.onclick = function() { 
  import("./components/lazy").then(module=>{
    //se o componente esta sendo exportado sem default precisa 
    //ser mesmo nome
    const {Lazy} = module;
    Lazy();
    // //com default nao precisa ser o  mesmo nome do arquivo
    // const lazy = module.default;
    // lazy();
  })
}