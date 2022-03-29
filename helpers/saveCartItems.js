const saveCartItems = async (items) => {
  // console.log(items);
  localStorage.setItem('cartItems', items);
};
// const saveCartItems = async (localStorageName, items) => {
//   // console.log(items);
//   localStorage.setItem(localStorageName, items.innerHTML);
// };
// const saveCartItems = async (items) => {
//   localStorage.setItem('cartItems', items.innerHTML);
// };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
