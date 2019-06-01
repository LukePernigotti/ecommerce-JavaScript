const increaseAndDecreaseQuantity = () => {
  if (onSection == 'product') {
    increaseElement.onclick = function () { inputQuantityElement.value++; }
    decreaseElement.onclick = function () { if (inputQuantityElement.value > 1) inputQuantityElement.value--; }
  }
  else //en el carrito
  {
    inputQuantityElements = document.getElementsByTagName('input');
    subtotalElements = document.getElementsByClassName('td-subtotal');
    totalElement = document.getElementsByClassName('total')[0].lastChild.firstChild;
    totalNavElement = document.getElementsByClassName('total-nav')[0];

    for (let i = 0; i < inputQuantityElements.length; i++) {
      inputQuantityElements[i].nextSibling.onclick = function () {
        inputQuantityElements[i].value++;

        updatePrices(i);
      }

      inputQuantityElements[i].previousSibling.onclick = function () {
        if (inputQuantityElements[i].value > 1) inputQuantityElements[i].value--;

        updatePrices(i);
      }

    }
  }
}

const updatePrices = (i) => {
  //actualizo el subtotal
  if (cart[i].discount) subtotalElements[i].firstChild.firstChild.nodeValue = `$${cart[i].discount * parseInt(inputQuantityElements[i].value)}`;
  else subtotalElements[i].firstChild.firstChild.nodeValue = `$${cart[i].price * parseInt(inputQuantityElements[i].value)}`;

  totalPrice = 0;
  //actualizo el total
  for (let j = 0; j < inputQuantityElements.length; j++) {
    if (cart[j].discount) totalPrice += cart[j].discount * parseInt(inputQuantityElements[j].value);
    else totalPrice += cart[j].price * parseInt(inputQuantityElements[j].value);
  }
  totalElement.nodeValue = `$${totalPrice}`;
  totalNavElement.firstChild.nodeValue = `Total: $${totalPrice}`;
}


const modifyQuantity = () => {
  inputQuantityElements = document.getElementsByTagName('input');
  for (let i = 0; i < inputQuantityElements.length; i++) {
    cart[i].quantity = parseInt(inputQuantityElements[i].value);
  }

  //localStorage
  localStorage.setItem("Cart", JSON.stringify(cart));
}
