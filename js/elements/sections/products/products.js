const addProduct = (pageNumber=0, showPerPageValue=parseInt(showPerPageElement.value)) => 
{
  for 
  (
    let i = pageNumber * showPerPageValue ||
    0;
    i < ((pageNumber * showPerPageValue) + showPerPageValue) &&
    i < productsArray.length;
    i++
  ) 
  {
    const productBox = createContainer('div', 'product list');
    if (onSection =='categories') divProductsBodyElement.insertBefore(productBox, divProductsBodyElement.childNodes[10]);
    else {
      paginationElement = document.getElementsByClassName('pagination')[0];
      divProductsBodyElement.insertBefore(productBox, paginationElement);
    }
    
    const imgAndFavWrapper = createContainer('div');
    productBox.appendChild(imgAndFavWrapper);

    let productImg;

    !subcategory 
    ?
    productImg = createImg(`img/productos/${category}/${subcateoriesRepeatArray[i]}/${productsArray[i]}/0.jpg`, `${productsArray[i]}`)
    :
    productImg = createImg(`img/productos/${category}/${subcategory.replaceAll('_', '-')}/${productsArray[i]}/0.jpg`, `${productsArray[i]}`);
    
    const imgLink = createA(productImg, '#navbar');
    imgAndFavWrapper.appendChild(imgLink);
    
    imgLink.onclick = () => goToProduct(i);

    let favIcon, discount;
    //si estoy en una subcategoría
    if(subcategory)
    {
      products[category][subcategory][productsArray[i]].fav
      ?
      favIcon = createA('Agregado a favoritos', 'javascript: void(0)')
      :
      favIcon = createA('Agregar a favoritos', 'javascript: void(0)');

      if(products[category][subcategory][productsArray[i]].fav)        
      favIcon.className = 'fav';

      discount = products[category][subcategory][productsArray[i]].discount;
    }
    else
    {//si estoy en una categoría
      products[category][subcateoriesRepeatArray[i].replaceAll('-', '_')][productsArray[i]].fav
      ?
      favIcon = createA('Agregado a Favoritos', 'javascript: void(0)')
      :
      favIcon = createA('Agregar a Favoritos', 'javascript: void(0)');

      if(products[category][subcateoriesRepeatArray[i].replaceAll('-', '_')][productsArray[i]].fav)
      favIcon.className = 'fav';

      discount = products[category][subcateoriesRepeatArray[i].replaceAll('-','_')][productsArray[i]].discount;
    }
    
    imgAndFavWrapper.appendChild(favIcon);

    favIcon.onclick = function(){
      if(subcategory) 
        changeFav(
          category, 
          subcategory, 
          productsArray[i], 
          this,
          this.firstChild
        );
      else 
      changeFav(
        category, 
        subcateoriesRepeatArray[i].replaceAll('-','_'), 
        productsArray[i], 
        this,
        this.firstChild
      );
    }

    const infoContainer = createContainer('div');
    productBox.appendChild(infoContainer);

    const productNameTitle = createText('h3', createA(`${productsArray[i].replaceAll('-',' ')}`, '#navbar'));
    infoContainer.appendChild(productNameTitle);

      productNameTitle.onclick = () => goToProduct(i);

    const prodDescription = createText('p', `${productsDescriptionArray[i]}`);
    infoContainer.appendChild(prodDescription);

    const moreInfoLink = createA('Más información', '#navbar');
    infoContainer.appendChild(moreInfoLink);

      moreInfoLink.onclick = () => goToProduct(i);

    const priceAndButtonWrapper = createContainer('div');
    infoContainer.appendChild(priceAndButtonWrapper);

    const price = createText('span', `$${productsPriceArray[i]}`);
    price.className = 'price';
    priceAndButtonWrapper.appendChild(price);

    if(discount){ //si el producto tiene descuento
      const discountPrice = createText('span', `$${discount}`);
      discountPrice.className = 'price';
      priceAndButtonWrapper.appendChild(discountPrice);

      price.style.textDecoration = 'line-through';
    }
      
    const addToCartButton = createA('Agregar al carrito', '#navbar');
    addToCartButton.className = 'button';
    priceAndButtonWrapper.appendChild(addToCartButton);

    addToCartButton.onclick = () => goToProduct(i);
  }

  onSection = 'products';
}