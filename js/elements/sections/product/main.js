const addProductSection = () =>{
    onSection = 'product';
  
    productsContentElement.className = 'products-content product-page';
  
    const productContainer = createContainer('section', 'product-self');
    productsContentElement.insertBefore(productContainer, productsContentElement.firstChild);
  
      const productInfoContainer = createContainer('div', 'product-info');
      productContainer.appendChild(productInfoContainer);
  
        const productNameTitle = createText('h2', `${productObject.name.replaceAll('-',' ')}`);
        productInfoContainer.appendChild(productNameTitle);
  
        const prodDescription = createText('p', `${productObject.description}`);
        productInfoContainer.appendChild(prodDescription);
  
        const addDataBox = createContainer('div', 'product-add-data');
        productInfoContainer.appendChild(addDataBox);
  
          const buttonAndPriceWrapper = createContainer('div', 'product-btn-and-price');
          addDataBox.appendChild(buttonAndPriceWrapper);
          
            const price = createText('span', `$${productObject.price}`);
            price.className = 'price';
            buttonAndPriceWrapper.appendChild(price);
            
            if(products[productObject.category][productObject.subcategory.replaceAll('-','_')][productObject.name].discount){
              price.style.textDecoration = 'line-through';

              const priceDiscount = createText('span', `$${products[productObject.category][productObject.subcategory.replaceAll('-','_')][productObject.name].discount}`);
              priceDiscount.className = 'price';
              buttonAndPriceWrapper.appendChild(priceDiscount);
            };
  
            const addToCartButton = createA('Agregar al carrito', '#navbar');
            addToCartButton.className = 'button';
            buttonAndPriceWrapper.appendChild(addToCartButton);
  
          const stockAndQuantityWrapper = createContainer('div', 'product-stock-and-quantity');
          addDataBox.appendChild(stockAndQuantityWrapper);
  
            const stock = createText('span', 'Disponibilidad: En Stock');
            stockAndQuantityWrapper.appendChild(stock);
  
            const quantitySelector = createContainer('div', 'quantity-selector');
            stockAndQuantityWrapper.appendChild(quantitySelector);
  
              const quantityLabel = createText('label', 'Cantidad:');
              quantityLabel.className = 'quantity';
              quantitySelector.appendChild(quantityLabel);
              
              const quantityInput = createInputText('quantity', undefined, '1');
              quantityInput.title = 'Cantidad';
              quantitySelector.appendChild(quantityInput);
  
              const quantityButtonWrapper = createContainer('div', 'quantity-btn-wrapper');
              quantitySelector.appendChild(quantityButtonWrapper);
  
                const increaseButton = createContainer('div', 'increase');
                quantityButtonWrapper.appendChild(increaseButton);
  
                  const increaseArrow = createImg('img/arrow.png', 'incrementar');
                  increaseButton.appendChild(increaseArrow);
  
                const decreaseButton = createContainer('div', 'decrease');
                quantityButtonWrapper.appendChild(decreaseButton);
  
                  const decreaseArrow = createImg('img/arrow.png', 'disminuir');
                  decreaseButton.appendChild(decreaseArrow);
  
          const favWrapper = createContainer('div', 'product-fav');
          addDataBox.appendChild(favWrapper);
  
          const heart = document.createElement('span');
          const fav = createA(heart, 'javascript: void(0)');
          fav.appendChild(heart);
          favWrapper.appendChild(fav);
  
          if(products[productObject.category][productObject.subcategory.replaceAll('-','_')][productObject.name].fav) 
          heart.className = 'fav';
  
          products[productObject.category][productObject.subcategory.replaceAll('-','_')][productObject.name].fav 
          ? 
          favText = createText('span', 'Agregado a Favoritos')
          :
          favText = createText('span', 'Agregar a Favoritos');
  
          fav.appendChild(favText);
          
          /*           onclick              */
          /**********************************/
          fav.onclick = function(){changeFav(productObject.category, productObject.subcategory, productObject.name, heart, favText.firstChild);}
          /**********************************/
          /*                                */
  
      const imgsContainer = createContainer('div', 'imgs');
      productContainer.appendChild(imgsContainer);
  
        const miniImgsWrapper = createContainer('div', 'img-mini');
        imgsContainer.appendChild(miniImgsWrapper);
  
          //si existe más de una imagen, las cargo, sino cargo una
          for (let i = 0; i < products[productObject.category][productObject.subcategory.replaceAll('-','_')][productObject.name].imageQuantity || i < 1; i++) 
          {
            const miniImg = createImg(`img/productos/${productObject.category}/${productObject.subcategory}/${productObject.name}/${i}.jpg`, `${productObject.name.replaceAll('-',' ')}`);
            imgChoiseLink = createA(miniImg, 'javascript: void(0)');
            miniImgsWrapper.appendChild(imgChoiseLink);

            //escojo la imágen
            imgChoiseLink.onclick = () => {
              fullImg.src = `img/productos/${productObject.category}/${productObject.subcategory}/${productObject.name}/${i}.jpg`;
              fullImgWrapper.style.backgroundImage = `url(img/productos/${productObject.category}/${productObject.subcategory}/${productObject.name}/hd/${i}.jpg`;
            }
          }
          
        const fullImgBox = createContainer('div', 'img-full');
        imgsContainer.appendChild(fullImgBox);
        const fullImgWrapper = createContainer('figure', 'img-full-wrap')
        fullImgBox.appendChild(fullImgWrapper);
    
          fullImg = createImg(`img/productos/${productObject.category}/${productObject.subcategory}/${productObject.name}/0.jpg`, `${productObject.name.replaceAll('-',' ')}`);
          fullImgWrapper.appendChild(fullImg);

          fullImgWrapper.style.backgroundImage = `url(img/productos/${productObject.category}/${productObject.subcategory}/${productObject.name}/hd/0.jpg)`;
          fullImgWrapper.onmousemove = () => zoom(event);
    addAsideBuyInfo();
    addTrendings();
    
    productSelfSectionElement = document.getElementsByClassName('product-self')[0];
    asideBuyInfoElement = document.getElementsByClassName('buy-info')[0];
    increaseElement = document.getElementsByClassName('increase')[0];
    decreaseElement = document.getElementsByClassName('decrease')[0];
    inputQuantityElement = document.getElementById('quantity');
    addToCartButtonElement = document.getElementsByClassName('button')[0];
  
    increaseAndDecreaseQuantity();
  
    /*           onclick              */
    /**********************************/
    addToCartButtonElement.onclick = function(){addToCart(parseInt(inputQuantityElement.value)); goToCart();}
    /**********************************/
    /*                                */
    
} 