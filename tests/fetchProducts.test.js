require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  test('1. Teste se fetchProducts é uma função.', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('2. Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada.', async () => {
    await fetchProducts( 'computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('3. Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  // test('4. Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
  //   const response = await fetchProducts('computador');
  //   expect(response).toEqual(computadorSearch);
  // });

  test('5. Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error("mensagem esperada aqui") para comparar com o objeto retornado da API.', async () => {
    const response = await fetchProducts();
    console.log(response);
    expect(response).toEqual(new Error('You must provide an url'));
  })
});
