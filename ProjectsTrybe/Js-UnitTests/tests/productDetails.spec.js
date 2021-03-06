const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('detailsOne', 'detailsTwo')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('detailsOne', 'detailsTwo').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const productOne = Object.values(productDetails('detailsOne', 'detailsTwo'))[0];
    const productTwo = Object.values(productDetails('detailsOne', 'detailsTwo'))[1];
    assert.strictEqual(typeof productOne, 'object');
    assert.strictEqual(typeof productTwo, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productOne !== productTwo, true);
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(productOne.details.productId.substr(-3), '123');
    assert.strictEqual(productTwo.details.productId.substr(-3), '123');
  });
});
