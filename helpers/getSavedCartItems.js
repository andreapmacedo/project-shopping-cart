// const getSavedCartItems = async (cartItems, cartItemClickListener) => {
//   // console.log(cartItems);
//   const liCartItems = cartItems; 
//   const liStorageItems = localStorage.getItem('cartItems');
//   liCartItems.innerHTML = liStorageItems;
//   liCartItems.addEventListener('click', cartItemClickListener); // Escutador para remover item da lista quando clicado
// };
const getSavedCartItems = async () => {
  const localList = localStorage.getItem('cartItems');
  console.log(localList); 
  return localList;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

  // const liStorageItems = localStorage.getItem('list');
  // cartItems.innerHTML = liStorageItems;