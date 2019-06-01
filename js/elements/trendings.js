const addTrendings = () => {
  const trendingsContainer = createContainer('section', 'trending');
  if (onSection != 'home') mainElement.appendChild(trendingsContainer);
  else {
    const instructionsElement = document.getElementsByClassName('instructions')[0];
    mainElement.insertBefore(trendingsContainer, instructionsElement);
  }

  trendingElement = trendingsContainer;

  const title = createText('h2', 'Tal vez te interese');
  trendingsContainer.appendChild(title);

  const boxesContainer = createContainer('div', 'trending-items');
  trendingsContainer.appendChild(boxesContainer);

  const backArrow = createA('Anterior', 'javascript: void(0)');
  backArrow.className = 'back';
  boxesContainer.appendChild(backArrow);

  const forwardArrow = createA('Siguiente', 'javascript: void(0)');
  forwardArrow.className = 'forward';
  boxesContainer.appendChild(forwardArrow);

  let range = 0;
  choose15products();
  const loadTrendingProducts = () => {
    for (let i = range * 3; i < range * 3 + 3 && i < 15; i++) {
      const productBox = createContainer('div', 'product-box');
      boxesContainer.insertBefore(productBox, forwardArrow);

      const productNameTitle = createText('h3', createA(`${trendingProducts[i].name.replaceAll('-', ' ')}`, '#navbar'));
      productBox.appendChild(productNameTitle);

      productNameTitle.onclick = () => goToProduct(i, true);

      const imgLink = createA(createImg(`img/productos/${trendingProducts[i].category}/${trendingProducts[i].subcategory}/${trendingProducts[i].name}/0.jpg`, `${trendingProducts[i].name.replaceAll('-', ' ')}`), '#navbar');
      productBox.appendChild(imgLink);

      imgLink.onclick = () => goToProduct(i, true);

      const priceWrapper = document.createElement('div');
      priceWrapper.className = 'price-wrapper';
      productBox.appendChild(priceWrapper);

      const price = createText('span', `$${trendingProducts[i].price}`);
      price.className = 'price';
      priceWrapper.appendChild(price);

      price.style.textDecoration = 'line-through';
      const discountPrice = createText('span', `$${trendingProducts[i].discount}`);
      discountPrice.className = 'price';
      priceWrapper.appendChild(discountPrice);

      const addToCartButton = createA('Agregar al carrito', '#navbar');
      addToCartButton.className = 'button';
      productBox.appendChild(addToCartButton);

      addToCartButton.onclick = () => goToProduct(i, true);

      favIcon = createA('Agregar a Favoritos', 'javascript: void(0)');
      if (products[trendingProducts[i].category][trendingProducts[i].subcategory.replaceAll('-', '_')][trendingProducts[i].name].fav)
        favIcon.className = 'fav';
      productBox.appendChild(favIcon);

      favIcon.onclick = function () {
        changeFav(
          trendingProducts[i].category,
          trendingProducts[i].subcategory,
          trendingProducts[i].name,
          this,
          this.firstChild
        );
      }
    }
  }
  loadTrendingProducts();

  backArrow.onclick = function () {
    if (range < 1) range = 4;
    else range--;
    slideTrendings(loadTrendingProducts());
  }

  forwardArrow.onclick = function () {
    if (range < 4) range++;
    else range = 0;
    slideTrendings(loadTrendingProducts());
  }
}