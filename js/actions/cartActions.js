const addToCart = (quantity) => {
  //si hay algún producto enciendo el flag y recorro el array de objetos comparando sus id
  if (cart[0]) {
    let flagCart = true;
    cart.forEach
      (item => {
        if (item.id == productObject.id) //si es igual le sumo la cantidad y apago el flag
        {
          item.quantity = item.quantity + quantity;
          flagCart = false;
        }
      }
      );
    if (flagCart) //si no hubo ninguno igual agrego el producto
    {//los datos vienen de  goToProduct()
      cart.push({ ...productObject, quantity });
    }
  }
  else { //primer producto
    cart.push({ ...productObject, quantity });
  }

  navCartProductsCounter();

  //localStorage
  //agrego al localStorage por si cambio de página
  //localStorage.setItem('Cart', JSON.stringify(cart));
  //si no productos guardados
  //if (!localStorage.getItem("Cart")) {
  //localCartItems.push(productItem);
  //localCartItems.push(cart)
  localStorage.setItem("Cart", JSON.stringify(cart));
  //}
  //else {
  //localCartItems = JSON.parse(localStorage.getItem("Cart"));

  //console.log(localCartItems);
  //localCartItems = cart;
  //console.log(localCartItems);
  //localStorage.removeItem("Cart"); //actualizo ?? tal vez no haga falta borrar
  // localStorage.setItem("Cart", JSON.stringify(cart));
  // }
}

const goToCart = () => {
  if (onSection == 'product') remove('bar');
  else remove('bar and leftInfo');

  floatingCartElement.style.top = '95px'; //para que no se rompa
  floatingCartElement.firstChild.nextSibling.style.top = '-95px';

  navProductsItemElement.classList.remove('active');

  addCart();
  addTrendings();
}

const navCartProductsCounter = () => {
  if (cartNavLink.getElementsByClassName('count')[0]) //si ya hay un producto
  {
    const productsInCart = cartNavLink.getElementsByClassName('count')[0];
    productsInCart.firstChild.nodeValue = `${cart.length}`;

    getTotalPrice();

    //guardo para que no salte bug cuando uso localStorage
    totalNavElement = document.getElementsByClassName('total-nav')[0];

    totalNavElement.firstChild.nodeValue = `Total: $${totalPrice}`;
  }
  else //si agrego el primer producto
  {
    const productsInCart = createText('span', `${cart.length}`);
    productsInCart.className = 'count';
    cartNavLink.appendChild(productsInCart);

    getTotalPrice();

    //agrego el precio total al carrito flotante
    const navCartPrice = createA(`Total: $${totalPrice}`, '#navbar');
    navCartPrice.className = 'total-nav';
    floatingCartElement.firstChild.nextSibling.appendChild(navCartPrice);

    floatingCartElement.removeAttribute('style');
  }
}