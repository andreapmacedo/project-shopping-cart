const getSavedCartItems = (items, cartItemClickListener) => {
  const liCartItems = items;
  const liStorageItems = localStorage.getItem('list');
  liCartItems.innerHTML = liStorageItems;
  liCartItems.addEventListener('click', cartItemClickListener); // Escutador para remover item da lista quando clicado
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
