const secList = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const btnEmptyCart = document.querySelector('.empty-cart');
const totalPrice = document.querySelector('.total-price');
totalPrice.innerText = 0;
// totalPrice.innerText = 'Total R$ 0.00';

function renderLoad() {
  const section = document.querySelector('.cart');
  const loadingElement = document.createElement('p');
  section.appendChild(loadingElement);
  loadingElement.className = 'loading';
  loadingElement.innerText = 'carregando...';
}

function removeRenderLoad() {
  const loadingElement = document.querySelector('.loading');
  loadingElement.remove();
}

async function calculateTotal() {
  const list = document.querySelectorAll('.cart__items li');
  let sum = 0;
  list.forEach((element) => {
    // console.log(element.innerHTML.split(' ')[1]);
    sum += parseFloat(element.innerHTML.split('PRICE: $')[1]);
  });
  totalPrice.innerText = sum;
  // *consulta https://pt.stackoverflow.com/questions/181922/formatar-moeda-brasileira-em-javascript
  // sum = sum.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  // totalPrice.innerText = sum.toFixed(2);
  // totalPrice.innerText = `Itens: ${ count } unds.
  //  Subtotal: R$ ${sum}`;
  // totalPrice.innerText = `Subtotal: R$ ${sum}`;
}

// const calculateTotal = async () => {
//   // let count = 0;
//   let sum = 0.00;
//   const data = await fetchProducts('computador');
//   const list = document.querySelectorAll('.cart__items li');
//   data.forEach((dataElement) => {
//     list.forEach((listElement) => {
//       if (listElement.innerHTML.split(' ')[1] === dataElement.id) {
//         // console.log(dataElement.price);
//         sum += parseFloat(dataElement.price);
//         // count += 1;
//       }
//     });
//   });
//   totalPrice.innerText = sum.toFixed(2);
// };

function setEmputCart() {
  cartItems.innerHTML = '';
  calculateTotal();
  saveCartItems(cartItems);
}

btnEmptyCart.addEventListener('click', setEmputCart);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  calculateTotal();
  saveCartItems(cartItems);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function populateItems() {
  renderLoad();
  const data = await fetchProducts('computador'); // lista
  removeRenderLoad();
  data.forEach((element) => {
    const item = { sku: element.id, name: element.title, image: element.thumbnail };
    secList.appendChild(createProductItemElement(item));
  });
}

async function getFetchItem(itemID) {
  const data = await fetchItem(itemID);
  const item = {
    sku: data.id, name: data.title, salePrice: data.price,
  };
  const newCartItem = createCartItemElement(item);
  cartItems.appendChild(newCartItem);
  calculateTotal();
  saveCartItems(cartItems);
}

function getButtons() {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const itemID = getSkuFromProductItem(event.target.parentElement);
      getFetchItem(itemID);
    });
  });
}

///-------------------------------------
window.onload = async () => {
  getSavedCartItems(cartItems, cartItemClickListener);
  await calculateTotal();
  await populateItems();
  await getButtons();
  // const liStorageItems = localStorage.getItem('list');
  // cartItems.innerHTML = liStorageItems;
  // cartItems.addEventListener('click', cartItemClickListener); // Escutador para remover item da lista quando clicado
};
