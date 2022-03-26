const fetchItem = async (ItemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${ItemID}`;
    // const url = 'https://api.mercadolibre.com/items/MLB1341706310';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
