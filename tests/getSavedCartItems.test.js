const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');
const parameter = 'cartItems';

describe('4 - Teste a função getSavedCartItems', () => {
  
  it('Testa se ao executar a função getSavedCartItems o método "localStorage.getItem" é chamado', () => {
    // expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  })

  it('Testa se ao executar a função getSavedCartItems o método "localStorage.getItem" é chamado com o parâmetro "cartItems"', () => {
    // expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
});
