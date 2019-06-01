/*          Agregar Breadcrumb           */
/*****************************************/
const addBreadcrumb = () => {
  //Para que no quede undefined el category cuando vengo del trendings desde el home
  if (productObject.category) {
    category = productObject.category;
    subcategory = productObject.subcategory; //de paso le agrega la subcategoría siempre al estar en un producto
  }

  const breadcrumbContainer = createContainer('ul', 'breadcrumb');
  mainElement.insertBefore(breadcrumbContainer, productsContentElement);

  const productsItem = document.createElement('li');
  const productsLink = createA('Productos', '#navbar');
  productsItem.appendChild(productsLink);
  breadcrumbContainer.appendChild(productsItem);

  productsLink.onclick = () => { goToCategories(); }

  const categoryItem = document.createElement('li');
  const categoryLink = createA(`${category}`, '#navbar');
  categoryItem.appendChild(categoryLink);
  breadcrumbContainer.appendChild(categoryItem);

  categoryLink.onclick = () => goToCategory(category);

  if (subcategory) {
    let subcat;
    switch (subcategory) {
      case 'Acrilicos': subcat = 'Acrílicos'; break;
      case 'Caligrafia': subcat = 'Caligrafía'; break;
      case 'Lapices_para_dibujo': subcat = 'Lápices para dibujo'; break;
      case 'Lapices-para-dibujo': subcat = 'Lápices para dibujo'; break;
      case 'Espatulas': subcat = 'Espátulas'; break;
      default: subcat = `${subcategory.replaceAll('-', ' ').replaceAll('_', ' ')}`;
    }

    const subcategoryItem = document.createElement('li');
    const subcategoryLink = createA(`${subcat}`, '#navbar');
    subcategoryItem.appendChild(subcategoryLink);
    breadcrumbContainer.appendChild(subcategoryItem);

    subcategoryLink.onclick = () => goToCategory(category, subcategory);
  }

  if (productObject.name) {
    const productItem = document.createElement('li');
    const productLink = createA(`${productObject.name.replaceAll('-', ' ')}`, '#navbar');
    productItem.appendChild(productLink);
    breadcrumbContainer.appendChild(productItem);
  }

  breadcrumbElement = document.getElementsByClassName('breadcrumb')[0];
}