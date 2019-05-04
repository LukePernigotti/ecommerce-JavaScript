const addCart = () =>{
  onSection = 'cart';

  const cartContainer = createContainer('section', 'cart');
  mainElement.insertBefore(cartContainer, floatingCartElement.nextSibling)
  sectionCartElement = cartContainer;

    const table = createContainer('table');
    cartContainer.appendChild(table);

      const tableHead = createContainer('thead');
      table.appendChild(tableHead);

        const labelsRow = createContainer('tr');
        tableHead.appendChild(labelsRow);
        
          const emptyTh = createContainer('th');
          labelsRow.appendChild(emptyTh);
          
          const productLabel = createText('th', 'Producto');
          labelsRow.appendChild(productLabel);

          const priceLabel = createText('th', 'Precio');
          labelsRow.appendChild(priceLabel);

          const quantityLabel = createText('th', 'Cantidad');
          labelsRow.appendChild(quantityLabel);

          const subtotalLabel = createText('th', 'Subtotal');
          labelsRow.appendChild(subtotalLabel);
      //comienzo productos
      for (let i = 0; i < cart.length; i++) 
      {
        const productRow = createContainer('tr');
        table.appendChild(productRow);

          const imgCell = createContainer('td', 'td-img');
            const productImg = createImg(`img/productos/${cart[i].category}/${cart[i].subcategory}/${cart[i].name}/0.jpg`, `${cart[i].name.replaceAll('-',' ')}`);//ver porque antes era productName y lo cambié al del cart en vez de al del productObject
            const imgLink = createA(productImg, '#navbar');
            imgCell.appendChild(imgLink);
          productRow.appendChild(imgCell);

          imgLink.onclick = () => goToProduct(i)

          const productNameCell = createContainer('td', 'td-h2');
            const productNameLink = createA(`${cart[i].name.replaceAll('-', ' ')}`, '#navbar');
            const productNameTitle = createText('h2', productNameLink);
            productNameCell.appendChild(productNameTitle);
          productRow.appendChild(productNameCell);

          productNameLink.onclick = () => goToProduct(i)

          const priceCell = createContainer('td', 'td-price');
            let price;
            if (cart[i].discount) price = createText('span', `$${cart[i].discount}`);
            else price = createText('span', `$${cart[i].price}`);
            price.className = 'price';
            priceCell.appendChild(price);
          productRow.appendChild(priceCell);

          const quantityCell = createContainer('td', 'td-quantity');
            const minus = createText('span', '-');
            quantityCell.appendChild(minus);
            const inputQuantity = createInputText(undefined,undefined, `${cart[i].quantity}`);
            quantityCell.appendChild(inputQuantity);
            const plus = createText('span', '+');
            quantityCell.appendChild(plus);
          productRow.appendChild(quantityCell);

          const subtotalCell = createContainer('td', 'td-subtotal');
            let subtotalPrice;
            if (cart[i].discount) subtotalPrice = createText('span', `$${cart[i].discount * cart[i].quantity}`);
            else subtotalPrice = createText('span', `$${cart[i].price * cart[i].quantity}`);
            subtotalPrice.className = 'price';
            subtotalCell.appendChild(subtotalPrice);
          productRow.appendChild(subtotalCell);

          const removeCell = createContainer('td', 'td-remove');
            const removeLink = createA('Eliminar producto', 'javascript: void(0)');
            removeCell.appendChild(removeLink);
          productRow.appendChild(removeCell);

          removeLink.onclick = () => 
          {
            //guardo las modificaciones de la cantidad de los productos
            modifyQuantity();
            
            //elimino del carrito el producto
            cart.splice(i,1);

            if(cart.length != 0) {
              mainElement.removeChild(cartContainer);
              navCartProductsCounter();
              addCart();
            }
            else//cuando ya no quedan productos
            {
              //elimino el contador de productos del nav
              cartNavLink.removeChild(cartNavLink.getElementsByClassName('count')[0]);

              //elimino el total del nav
              floatingCartElement.firstChild.nextSibling.removeChild(totalNavElement);
              
              goToCategories();

              //agrego atributos para deshabilitar el carrito flotante
              floatingCartElement.style.position = 'relative';
              floatingCartElement.style.top = '0';
            }
          }
        }       
        //fin productos

      const lastTableRow = createContainer('tr', 'tr-final');
      table.appendChild(lastTableRow);

        const buttonsCell = createContainer('td', 'td-buttons');
        buttonsCell.colSpan = 4;
          const buttonsContainer = createContainer('div');
            const addMoreProductsButton = createA('Agregar más productos', '#navbar');
            addMoreProductsButton.className = 'button';
            buttonsContainer.appendChild(addMoreProductsButton);
            const finalizePurchaseButton = createA('Finalizar compra', '#navbar');
            finalizePurchaseButton.className = 'button';
            buttonsContainer.appendChild(finalizePurchaseButton);
          buttonsCell.appendChild(buttonsContainer);
        lastTableRow.appendChild(buttonsCell);

        addMoreProductsButton.onclick = () => {modifyQuantity(); goToCategories(); /*remove(); addCategoriesSection(); clearArrays();*/}
        finalizePurchaseButton.onclick = () => {modifyQuantity(); remove(); addCheckout();}

        getTotalPrice();

        const totalPriceCell = createContainer('td', 'total');
          const totalText = createText('span', 'Total: ');
          totalPriceCell.appendChild(totalText);
          const totalPriceText = createText('span', `$${totalPrice}`);
          totalPriceText.className = 'price';
          totalPriceCell.appendChild(totalPriceText);
          lastTableRow.appendChild(totalPriceCell);
        lastTableRow.appendChild(totalPriceCell);

        const emptyTd = document.createElement('td');
        lastTableRow.appendChild(emptyTd);
        
        increaseAndDecreaseQuantity();
          
}