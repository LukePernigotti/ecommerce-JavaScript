// Metodo prototipado para cadenas, que reemplaza todos los valores de la cadena:
String.prototype.replaceAll = function (value, newValue) {
  return this.replace(new RegExp(value, 'g'), newValue);
}

function toLowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function createContainer(element, className) {
  const el = document.createElement(element);
  if (className) el.className = className;
  return el;
}

function createText(element, text) {
  const el = document.createElement(element);
  if (typeof text == 'string') text = document.createTextNode(text);
  el.appendChild(text);
  return el;
}

function createA(text, href) {
  const a = document.createElement('a');
  if (typeof text == 'string') text = document.createTextNode(text);
  a.href = href;
  a.appendChild(text);
  return a;
}

function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

function createInputText(id, placeholder, value) {
  const input = document.createElement('input');
  input.type = 'text';
  if (id) input.id = id;
  if (placeholder) input.placeholder = placeholder;
  if (value) input.value = value;
  return input;
}

function createInputRadio(id, name, value) {
  const input = document.createElement('input');
  input.type = 'radio';
  input.id = id;
  input.name = name;
  input.value = value;
  return input;
}

let onSection;
let totalPrice, cart = [];
let productObject = {};

let discountProductsArray = [], trendingProducts = [], randomNumArray = []; //trendings

let
  productsContentElement, sectionCategoriesElement, barElement, floatingCartElement,
  trendingElement,      //
  productBoxElement,    //  Trendings
  trendingItemsElement, //
  divProductsBodyElement, sectionCategoryElement, sortSelectElement, showPerPageElement, paginationElement, leftInfoElement, divFilterElement, breadcrumbElement, sorterProductsShowingValues,
  productSelfSectionElement, asideBuyInfoElement, increaseElement, decreaseElement, inputQuantityElement, addToCartButtonElement,
  sectionCartElement, addMoreProductsButtonElement, inputQuantityElements, subtotalElements, totalElement, totalNavElement, shadowBoxElement, thanksMsgBoxElement;


const mainElement = document.getElementsByTagName('main')[0];
const navProductsItemElement = document.getElementsByClassName('navbar')[0].getElementsByTagName('li')[1].firstChild;

const cartNavLink = document.getElementsByClassName('cart-nav')[0].firstChild.nextSibling;

floatingCartElement = document.getElementsByClassName('floating-cart')[0];

//mientras no tenga productos, el carrito flotante va a estar inactivo dejandolo en la posición inicial
floatingCartElement.style.position = 'relative';
floatingCartElement.style.top = '0';

floatingCartElement.onclick = () => {
  if (cart.length > 0) goToCart();
}

getDiscountProducts(); //para el trendings
localStorageActions();

//está en el home pero tiene la orden guardada en el local de ir al producto
if (localStorage.getItem('goToProduct') == 'true') {
  addCategoriesSection();
  goToProduct(localStorage.getItem('id'), true, true);
  localStorage.removeItem('goToProduct');
  localStorage.removeItem('id');
}

//si tiene la orden de ir a una categoría/subcategoría por medio de la barra de categorías
else if (localStorage.getItem('goToCategory')) {
  addCategoriesSection();

  //si hay una subcategoría en el local lo llevo a ella, sino ignorará ese segundo argumento
  goToCategory(localStorage.getItem('goToCategory'), localStorage.getItem('goToSubcategory'));
  localStorage.removeItem('goToCategory');
  localStorage.removeItem('goToSubcategory');
}

//si tiene la orden de ir al carrito
else if (localStorage.getItem('goToCart')) {
  if (localStorage.getItem("Cart")) goToCart();
  else goToCategories();
  localStorage.removeItem('goToCart');
}

//si está en Productos carga las Categorías con sus elementos
else if (navProductsItemElement.className == 'active')
  addCategoriesSection();

//si está en Contacto
else if (contactNavLink.className == 'active') {/*no hacer nada*/ }

//sino (está en el home) carga solo la barra de categorías y trendings e indica que está en el home
else {
  onSection = 'home';
  addCategoryListBar();
  addTrendings();
}