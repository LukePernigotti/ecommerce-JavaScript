let category, subcategory;

const addProductsCategorySection = () =>{
  //limpio para que no se rompa (especialmente en el filter)
  if (onSection != 'categories') clearArrays();

  const productsMainContainer = createContainer('section', `category ${toLowerCaseFirstLetter(category)}`);
  productsContentElement.insertBefore(productsMainContainer, productsContentElement.firstChild);

  sectionCategoryElement = productsMainContainer;

  const categoryTitle = createText('h2', `${(category)}`);
  productsMainContainer.appendChild(categoryTitle);

  //traigo un array con todos los productos de la categoría
  if (subcategory) productsSubcategoryArrayFunction(category, subcategory);
  else productsArrayFunction(products[category]);

  addSorter();
  sort(sortSelectElement.value, subcategory);

  const productsContainer = createContainer('div', 'products-body');
  productsMainContainer.appendChild(productsContainer);

  divProductsBodyElement = productsContainer;

  addProduct();

  currentPage = 1;
  addPagination();
 
  addFilter(category);
  addBreadcrumb();
}
