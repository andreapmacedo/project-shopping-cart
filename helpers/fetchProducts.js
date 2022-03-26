const fetchProducts = async (iten) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${iten}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error;
  }
};
// fetchProducts("computador");

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
