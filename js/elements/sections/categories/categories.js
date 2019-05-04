/************************************/
/*        AgregarCategorías         */
/************************************/
const addCategories = () =>
{
  const categoriesContainer = createContainer('section', 'categories');
  productsContentElement.appendChild(categoriesContainer);

  sectionCategoriesElement = categoriesContainer;
  
  const text = createText('p', 'Elije una categoría:');
  categoriesContainer.appendChild(text);
  
  /*función agregar categorias*/
  const addProductCategory = (category) =>{
    const categoryTitle = createText('h2', createA(`${category}`, '#navbar'));
    categoriesContainer.appendChild(categoryTitle);
  }
  addProductCategory('Pinturas');
  addProductCategory('Dibujo');
  addProductCategory('Soportes');
  addProductCategory('Herramientas');
}


let pinturasAElement, dibujoAElement, soportesAElement, herramientasAElement;

const addCategoriesSection = () =>{
  addCategoryListBar();
  addLeftInfoDiv();
  addCategories();
  addTrendings();
  
  /*obtener <a> categorias*/
  pinturasAElement = sectionCategoriesElement.getElementsByTagName('h2')[0].firstChild;
  dibujoAElement = sectionCategoriesElement.getElementsByTagName('h2')[1].firstChild;
  soportesAElement = sectionCategoriesElement.getElementsByTagName('h2')[2].firstChild;
  herramientasAElement = sectionCategoriesElement.getElementsByTagName('h2')[3].firstChild;

  pinturasAElement.onclick = function() {goToCategory('Pinturas');};
  dibujoAElement.onclick = function() {goToCategory('Dibujo');};
  soportesAElement.onclick = function() {goToCategory('Soportes');};
  herramientasAElement.onclick = function() {goToCategory('Herramientas');};

  onSection = 'categories';
}