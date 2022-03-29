const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {

  it('Testa se ao executar a função saveCartItems o método "localStorage.setItem" é chamado', () => {
    // expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Testa se ao executar a função saveCartItems o método "localStorage.setItem" é chamado com os parâmetros "cartItems" e o valor passado como parametro', () => {
    // expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  })

});
