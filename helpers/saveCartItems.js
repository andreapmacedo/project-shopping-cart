const saveCartItems = async (items) => {
  localStorage.setItem('list', items.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
